(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1054:function(e,t,n){"use strict";n.r(t);var r=n(25),o=(n(14),n(114)),l=n(647),c=n(7),d=n(635),_=n(636),m=n.n(_),v=n(150),f=n.n(v),h=n(640),C=n(113),y=n(633),$=f()({type:"mnemonic"},C.b),E={directives:{checkEmpty:y.a,autosize:h.a},mixins:[d.validationMixin],props:{isAuthAddress:{type:Boolean,default:!1}},data:()=>({mnemonic:""}),validations:{mnemonic:{required:m.a,validMnemonic:$}},methods:{addAddress(){this.$v.$invalid?this.$v.$touch():this.$store.commit("SET_AUTH_ADVANCED",this.mnemonic)}}},w=n(41),x=Object(w.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"panel__section",on:{submit:function(t){return t.preventDefault(),e.addAddress(t)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("label",{staticClass:"form-field",class:{"is-error":e.$v.mnemonic.$error,"is-success":!e.$v.mnemonic.$invalid}},[n("textarea",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model.trim",value:e.mnemonic,expression:"mnemonic",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{rows:"1",autocomplete:"off",autocapitalize:"off",spellcheck:"false","data-test-id":"authAdvancedLoginInputMnemonic"},domProps:{value:e.mnemonic},on:{blur:[function(t){return e.$v.mnemonic.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.mnemonic=t.target.value.trim())}}}),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Your seed phrase","index.auth-sign-in-seed-text")))])]),e._v(" "),e.$v.mnemonic.$dirty&&!e.$v.mnemonic.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter phrase","index.auth-error-seed-required")))]):e._e(),e._v(" "),e.$v.mnemonic.$dirty&&e.$v.mnemonic.required&&!e.$v.mnemonic.validMnemonic?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Invalid phrase","index.auth-error-seed-invalid")))]):e._e()]),e._v(" "),n("div",{staticClass:"u-cell"},[n("button",{staticClass:"button button--main button--full",class:{"is-disabled":e.$v.$invalid},attrs:{"data-test-id":"authAdvancedLoginSubmitButton"}},[e._v(e._s(e.$td("Sign In","index.auth-sign-in-seed-button")))])])])])}),[],!1,null,null,null).exports,A={components:{ButtonCopy:n(659).a},directives:{autosize:h.a},data:()=>({mnemonic:""}),computed:{address(){try{return Object(C.c)(this.mnemonic).getAddressString()}catch(e){return""}}},methods:{generate(){this.mnemonic=Object(C.a)()}}};function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var R={layout:"nonAuth",components:{AuthAdvancedForm:x,AuthAdvancedGenerate:Object(w.a)(A,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__section"},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[e.mnemonic?e._e():n("div",{staticClass:"u-cell"},[n("button",{staticClass:"button button--main button--full",attrs:{"data-test-id":"authAdvancedRegisterGenerateButton"},on:{click:e.generate}},[e._v(e._s(e.$td("Click To Generate Seed Phrase","index.auth-sign-up-seed-generate")))])]),e._v(" "),e.address?n("div",{staticClass:"u-cell"},[n("label",{staticClass:"form-field form-field--with-icon"},[n("textarea",{directives:[{name:"autosize",rawName:"v-autosize"}],staticClass:"form-field__input is-not-empty",attrs:{rows:"1",autocapitalize:"off",spellcheck:"false",readonly:""},domProps:{value:e.address}}),e._v(" "),n("ButtonCopy",{staticClass:"form-field__icon form-field__icon--copy u-semantic-button link--opacity",attrs:{"copy-text":e.address}},[n("img",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-copy-black.svg",alt:"Copy"}})]),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Your generated address","index.auth-sign-up-seed-address")))])],1)]):e._e(),e._v(" "),e.mnemonic?n("div",{staticClass:"u-cell"},[n("label",{staticClass:"form-field form-field--with-icon"},[n("textarea",{directives:[{name:"autosize",rawName:"v-autosize"}],staticClass:"form-field__input is-not-empty",attrs:{rows:"1",autocapitalize:"off",spellcheck:"false",readonly:""},domProps:{value:e.mnemonic}}),e._v(" "),n("ButtonCopy",{staticClass:"form-field__icon form-field__icon--copy u-semantic-button link--opacity",attrs:{"data-test-id":"authAdvancedRegisterCopyButton","copy-text":e.mnemonic}},[n("img",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-copy-black.svg",alt:e.$td("Copy Seed Phrase","index.auth-sign-up-seed-copy")}})]),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Your generated seed phrase","index.auth-sign-up-seed-result")))])],1)]):e._e()])])}),[],!1,null,null,null).exports},directives:{},fetch(e){var{app:t,store:n,redirect:r}=e;if(n.getters.isAuthorized)return r(t.i18nGetPreferredPath("wallet"));n.commit("SET_SECTION_NAME","")},head(){var title=Object(l.a)(null,this.$i18n.locale),e=this.$td("Minter Console is by far the most advanced part of our project that lets you manage all your activities on our ".concat(this.isTestnet?"test ":"","network."),this.isTestnet?"index.seo-description-testnet":"index.seo-description"),t="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/social-share").concat(t,".png")}]}},data:()=>({}),computed:P(P({},Object(o.b)(["isAuthorized"])),{},{isTestnet:()=>c.z===c.B}),watch:{isAuthorized(e){if(e)return this.$router.replace(this.$i18nGetPreferredPath("wallet"))}},created(){},destroyed(){},methods:{}},S=Object(w.a)(R,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"auth u-section",attrs:{"data-test-id":"authSection"}},[n("div",{staticClass:"u-container u-container--medium"},[n("div",{staticClass:"u-grid u-grid--vertical-margin"},[n("div",{staticClass:"u-cell u-cell--medium--1-2"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[n("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-auth-sign-in.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n                                    "+e._s(e.$td("Sign in with seed phrase","index.auth-sign-in-seed-title"))+"\n                                ")])]),e._v(" "),n("AuthAdvancedForm",{attrs:{isAuthAddress:!0}})],1)]),e._v(" "),n("div",{staticClass:"u-cell u-cell--medium--1-2"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[n("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-auth-register.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n                                    "+e._s(e.$td("Create wallet","index.auth-sign-up-seed-title"))+"\n                                ")])]),e._v(" "),n("AuthAdvancedGenerate"),e._v(" "),n("div",{staticClass:"panel__section"},[n("a",{staticClass:"link--default",attrs:{href:"https://github.com/MinterTeam/minter-console-web/releases",target:"_blank"}},[e._v(e._s(e.$td("Generate locally (Github)","index.auth-sign-up-seed-offline")))])])],1)])])])]),e._v(" "),n("div",{staticClass:"u-section u-container u-container--medium"},[n("h1",{staticClass:"h-title"},[e._v(e._s(e.$td("What Is Minter Console?","index.features-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Minter Console is by far the most advanced part of our project that lets you manage all your activities on the blockchain network and off-chain services. Here are just a few features:","index.features-description")))]),e._v(" "),n("ul",{staticClass:"features__list u-grid u-grid--vertical-margin--large no-list"},[n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-coin-transfer.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Send and Receive Any Coins","index.features-transfer-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Transact cryptocurrencies with your friends, family members, and business partners. Almost instantly and fee-free.","index.features-transfer-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-check.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Create and Manage Checks","index.features-check-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Paper is no more needed to issue or redeem the check. Minter Console will help you get the job done—wherever you are and whenever you need it.","index.features-check-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-mining.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Delegate or Unbond Tokens","index.features-mining-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Delegate your tokens to start receiving payouts. In case you don’t want the validator to handle your holdings anymore, all you need to do is submit the request for unbonding.","index.features-mining-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-node-management.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Set Up and Manage a Masternode","index.features-masternode-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("With our user-friendly, easy-to-navigate interface, running a masternode has never been easier.","index.features-masternode-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-coin-creation.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Create New Coins","index.features-creation-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Don’t hesitate too long—starting your own cryptocurrency is just a few clicks away!","index.features-creation-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-pco.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Perpetual Coin Offering Management","index.features-pco-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("ICOs have disrupted the way startups raise funds. We went even further by disrupting the ICOs themselves. In Minter Console, you can do all things PCO, i.e., determine the value of Constant Reserve Ratio, specify the volume of the Genesis emission, and place the first reserves—in other words, buy back initial supply (for more detail, refer to the Blockchain section of","index.features-pco-description"))+" "),n("a",{staticClass:"link--default",attrs:{href:"https://about.minter.network/Minter_PCO"+("ru"===e.$i18n.locale?"_Russian":"")+".pdf",target:"_blank"}},[e._v(e._s(e.$td("this","index.features-pco-description-link")))]),e._v(e._s(e.$td(" paper).","index.features-pco-description2")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-vote.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Developers’ DAO Voting","index.features-vote-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Become one of the top nine validators in terms of personal funds in order to get the right to vote in a DAO.","index.features-vote-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-account.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Account Management","index.features-account-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Edit your account information, such as username, e-mail address, and password.","index.features-account-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-support.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Support","index.features-support-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Coping with all the razzle-dazzle technical features can sometimes be challenging. But don’t worry, our customer support team will always be there for you.","index.features-support-description")))])])])])])])}),[],!1,null,null,null);t.default=S.exports},633:function(e,t,n){"use strict";function r(e){return"SELECT"===e.nodeName.toUpperCase()}function o(e){l(e.target)}function l(e){setTimeout((()=>{e.value.length?e.classList.add("is-not-empty"):e.classList.remove("is-not-empty")}),0)}t.a={bind(e,t,n){l(e),r(e)?e.addEventListener("change",o):e.addEventListener("input",o),t.value&&e.addEventListener(t.value,o)},componentUpdated(e,t){l(e),t.oldValue!==t.value&&e.removeEventListener(t.oldValue,o),t.value&&e.addEventListener(t.value,o)},unbind(e,t){r(e)?e.removeEventListener("change",o):e.removeEventListener("input",o),t.value&&e.removeEventListener(t.value,o)}}},647:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(7);function o(text,e){var t="ru"===e?"Консоль":"Console";return text?r.f+t+". "+text+r.e:r.f+t+r.e}},659:function(e,t,n){"use strict";var r=n(661),o={props:{copyText:{type:String,required:!0}},computed:{isClipboardSupported:()=>r.b()},methods:{copy(e){r.a(e)&&this.$store.commit("SET_SNACKBAR_ACTIVE")}}},l=n(41),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isClipboardSupported?n("button",{attrs:{type:"button"},on:{click:function(t){return e.copy(e.copyText)}}},[e._t("default")],2):e._e()}),[],!1,null,null,null);t.a=component.exports}}]);