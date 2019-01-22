import path from 'path';
import faker from 'faker';
import puppeteer from 'puppeteer';
// import { Nuxt, Builder } from 'nuxt';
import {Nuxt} from '@nuxt/core';
import {Builder} from '@nuxt/builder';
import {USERNAME_MAX_LENGTH} from '~/assets/variables';
import {USER_MNEMONIC} from '~/test/variables';

// process.env.DEBUG = true;
// process.env.NUXT_SKIP_SELF_BUILD = true;




const HOST_NAME = 'localhost';
const PORT = 4000;
const appUrlBase = `http://${HOST_NAME}:${PORT}`;
const routes = {
    public: {
        index: appUrlBase,
        noMatch: `${appUrlBase}/asdf`,
    },
    private: {
        wallet: `${appUrlBase}/wallet`,
        convert: `${appUrlBase}/convert`,
    },
};


const user = {
    username: faker.internet.userName().substr(0, USERNAME_MAX_LENGTH),
    password: '123123',
};

const advancedUser = USER_MNEMONIC;

//@TODO split into different files

/** @type Nuxt */
let nuxt;
/** @type Browser */
let browser;
/** @type Page */
let page;
beforeAll(async() => {
    // init nuxt
    const rootDir = path.resolve(__dirname, '../..');
    let config = {};
    try { config = require(path.resolve(rootDir, 'nuxt.config.js')); } catch (e) {
        throw Error('Couldn\'t find nuxt.config.js');
    }
    config.rootDir = rootDir;
    if (config.build && config.build.analyze) {
        delete config.build.analyze;
    }
    config.dev = false;
    config.mode = 'spa';
    nuxt = new Nuxt(config);
    if (!process.env.NUXT_SKIP_SELF_BUILD) {
        await new Builder(nuxt).build();
    }
    await nuxt.server.listen(PORT, HOST_NAME);
    // init puppeteer
    browser = await puppeteer.launch(
        process.env.DEBUG
            ? {
                headless: false,
                slowMo: 50,
            }
            : {}
    );
    page = await browser.newPage();

}, 120000);


afterAll(() => {
    if (!process.env.DEBUG) {
        browser.close();
    }
    nuxt.close();
});




describe('private routes redirect', () => {
    test('redirects to auth form when logged out', async() => {
        await page.goto(routes.private.wallet);
        await page.waitForSelector('[data-test-id="authSection"]');
    });
});

describe('index page', async() => {
    beforeAll(async() => {
        await page.goto(routes.public.index);
    });

    test('has auth section', async() => {
        await page.waitForSelector('[data-test-id="authSection"]');
    });

    test('register new user and redirect to wallet', async() => {
        console.log({user});
        await page.type('[data-test-id="authRegisterInputName"]', user.username);
        await page.type('[data-test-id="authRegisterInputPassword"]', user.password);
        await page.type('[data-test-id="authRegisterInputPasswordRepeat"]', user.password);
        // submit
        await page.click('[data-test-id="authRegisterSubmitButton"]');
        // wait for redirect to wallet
        await page.waitForSelector('[data-test-id="walletAddressLink"]');
    }, 30000);

    test('logout and redirect to auth form', async() => {
        // await page.waitForSelector('[data-test-id="walletAddressLink"]');
        await page.click('[data-test-id="headerLogoutButton"]');
        await page.waitForSelector('[data-test-id="authSection"]');
    });

    test('login and redirect to wallet', async() => {
        await page.type('[data-test-id="authLoginInputName"]', user.username);
        await page.type('[data-test-id="authLoginInputPassword"]', user.password);
        // submit
        await page.click('[data-test-id="authLoginSubmitButton"]');
        // wait for redirect to wallet
        await page.waitForSelector('[data-test-id="walletAddressLink"]');
    }, 30000);

    test('logout and redirect to auth form', async() => {
        await page.click('[data-test-id="headerLogoutButton"]');
        await page.waitForSelector('[data-test-id="authSection"]');
    });

    test('generate mnemonic and login', async() => {
        // generate
        await page.click('[data-test-id="authAdvancedRegisterGenerateButton"]');
        // copy
        await page.click('[data-test-id="authAdvancedRegisterCopyButton"]');
        // allow paste
        const context = browser.defaultBrowserContext();
        await context.overridePermissions(appUrlBase, ['clipboard-read']);
        // paste
        const mnemonicText = await page.evaluate(() => {
            return window.navigator.clipboard.readText();
        });
        await page.type('[data-test-id="authAdvancedLoginInputMnemonic"]', mnemonicText);
        // submit
        await page.click('[data-test-id="authAdvancedLoginSubmitButton"]');
        // wait for redirect to wallet
        await page.waitForSelector('[data-test-id="walletAddressLink"]');
    }, 30000);

    test('logout and redirect to auth form', async() => {
        await page.click('[data-test-id="headerLogoutButton"]');
        await page.waitForSelector('[data-test-id="authSection"]');
    });
});

describe('private routes', () => {
    // login
    beforeAll(async() => {
        await page.goto(routes.public.index);
        await page.waitForSelector('[data-test-id="authSection"]');
        await page.type('[data-test-id="authAdvancedLoginInputMnemonic"]', advancedUser);
        await page.click('[data-test-id="authAdvancedLoginSubmitButton"]');
        await page.waitForSelector('[data-test-id="walletAddressLink"]');
    }, 30000);

    describe('wallet page', () => {
        let address;
        beforeAll(async() => {
            await page.goto(routes.private.wallet);
            await page.waitForSelector('[data-test-id="walletAddressLink"]');
            address = await page.$eval('[data-test-id="walletAddressLink"]', (el) => el.textContent);
        });

        test('has address, has balance', async() => {
            const balance = await page.$eval('[data-test-id="walletBalanceValue"]', (el) => el.textContent);
            expect(address.substring(0, 2)).toBe('Mx');
            expect(address).toHaveLength(42);
            expect(parseFloat(balance)).toBeGreaterThan(0);
        });

        test('has transactions', async() => {
            const txHref = await page.$eval('[data-test-id="walletTxHash"]', (el) => el.getAttribute('href'));
            const txHashIndex = txHref.indexOf('/Mt') + 1;
            const txHash = txHref.substr(txHashIndex);
            expect(txHash).toHaveLength(66);
        });

        test('send coins', async() => {
            await page.type('[data-test-id="walletSendInputAddress"]', address);
            await page.type('[data-test-id="walletSendInputAmount"]', '10');
            // submit (opens modal)
            await page.click('[data-test-id="walletSendSubmitButton"]');
            // wait for modal
            await page.waitForSelector('[data-test-id="walletSendModalSubmitButton"]');
            // submit
            await page.click('[data-test-id="walletSendModalSubmitButton"]');
            // wait for success
            await page.waitForSelector('[data-test-id="walletSendSuccessMessage"]');
        }, 30000);

        test('fail send not enough coins', async() => {
            await page.type('[data-test-id="walletSendInputAddress"]', address);
            await page.type('[data-test-id="walletSendInputAmount"]', '9999999999999999999999999');
            // submit (opens modal)
            await page.click('[data-test-id="walletSendSubmitButton"]');
            // wait for modal
            await page.waitForSelector('[data-test-id="walletSendModalSubmitButton"]');
            // submit
            await page.click('[data-test-id="walletSendModalSubmitButton"]');
            // wait for success
            await page.waitForSelector('[data-test-id="walletSendErrorMessage"]');
        }, 30000);
    });

    describe('convert page', () => {
        beforeAll(async() => {
            await page.goto(routes.private.convert);
        });

        test('sell coins', async() => {
            await page.select('[data-test-id="convertSellInputSellCoin"]', 'MNT');
            await page.type('[data-test-id="convertSellInputSellAmount"]', '1');
            await page.type('[data-test-id="convertSellInputBuyCoin"]', 'TESTCOIN01');
            // submit (opens modal)
            await page.click('[data-test-id="convertSellSubmitButton"]');
            // wait for modal
            await page.waitForSelector('[data-test-id="convertSellModalSubmitButton"]');
            // submit
            await page.click('[data-test-id="convertSellModalSubmitButton"]');
            // wait for success
            await page.waitForSelector('[data-test-id="convertSellSuccessMessage"]');
        }, 30000);

        test('fail sell not enough coins', async() => {
            await page.select('[data-test-id="convertSellInputSellCoin"]', 'MNT');
            await page.type('[data-test-id="convertSellInputSellAmount"]', '9999999999999999999999999');
            await page.type('[data-test-id="convertSellInputBuyCoin"]', 'TESTCOIN01');
            // submit (opens modal)
            await page.click('[data-test-id="convertSellSubmitButton"]');
            // wait for modal
            await page.waitForSelector('[data-test-id="convertSellModalSubmitButton"]');
            // submit
            await page.click('[data-test-id="convertSellModalSubmitButton"]');
            // wait for success
            await page.waitForSelector('[data-test-id="convertSellErrorMessage"]');
        }, 30000);

        test('sell all coins', async() => {
            await page.select('[data-test-id="convertSellAllInputSellCoin"]', 'TESTCOIN01');
            await page.type('[data-test-id="convertSellAllInputBuyCoin"]', 'MNT');
            // submit (opens modal)
            await page.click('[data-test-id="convertSellAllSubmitButton"]');
            // wait for modal
            await page.waitForSelector('[data-test-id="convertSellAllModalSubmitButton"]');
            // submit
            await page.click('[data-test-id="convertSellAllModalSubmitButton"]');
            // wait for success
            await page.waitForSelector('[data-test-id="convertSellAllSuccessMessage"]');
        }, 30000);

        test('fail sell all to not existent coin', async() => {
            await page.select('[data-test-id="convertSellAllInputSellCoin"]', 'MNT');
            await page.type('[data-test-id="convertSellAllInputBuyCoin"]', 'NOTEXIST01');
            // submit (opens modal)
            await page.click('[data-test-id="convertSellAllSubmitButton"]');
            // no modal because of failed estimation
            // wait for modal
            // await page.waitForSelector('[data-test-id="convertSellAllModalSubmitButton"]');
            // submit
            // await page.click('[data-test-id="convertSellAllModalSubmitButton"]');
            // wait for success
            await page.waitForSelector('[data-test-id="convertSellAllErrorMessage"]');
        }, 30000);

        test('buy coins', async() => {
            await page.type('[data-test-id="convertBuyInputBuyAmount"]', '1');
            await page.type('[data-test-id="convertBuyInputBuyCoin"]', 'TESTCOIN01');
            await page.select('[data-test-id="convertBuyInputSellCoin"]', 'MNT');
            // submit (opens modal)
            await page.click('[data-test-id="convertBuySubmitButton"]');
            // wait for modal
            await page.waitForSelector('[data-test-id="convertBuyModalSubmitButton"]');
            // submit
            await page.click('[data-test-id="convertBuyModalSubmitButton"]');
            // wait for success
            await page.waitForSelector('[data-test-id="convertBuySuccessMessage"]');
        }, 30000);

        test('fail buy too much coins', async() => {
            await page.type('[data-test-id="convertBuyInputBuyAmount"]', '9999999999999999999999999');
            await page.type('[data-test-id="convertBuyInputBuyCoin"]', 'TESTCOIN01');
            await page.select('[data-test-id="convertBuyInputSellCoin"]', 'MNT');
            // submit (opens modal)
            await page.click('[data-test-id="convertBuySubmitButton"]');
            // wait for modal
            await page.waitForSelector('[data-test-id="convertBuyModalSubmitButton"]');
            // submit
            await page.click('[data-test-id="convertBuyModalSubmitButton"]');
            // wait for success
            await page.waitForSelector('[data-test-id="convertBuyErrorMessage"]');
        }, 30000);
    });
});
//
// describe('errors', () => {
//     test(`shows 404 message when route doesn't exist`, async() => {
//         await page.goto(routes.public.noMatch);
//         await page.waitForSelector('[data-testid="noMatch"]');
//     });
// });
//
