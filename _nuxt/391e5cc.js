(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1295:function(e,t,n){"use strict";n.r(t);n(45),n(30),n(37),n(0),n(56),n(34),n(66);var r=n(5),o=(n(26),n(6),n(27),n(188)),c=n(741),l=n(3),d=n(723),m=n(724),_=n.n(m),v=n(245),f=n.n(v),h=n(734),C=n(286),y=n(718),$=f()({type:"mnemonic"},C.b),E={directives:{checkEmpty:y.a,autosize:h.a},mixins:[d.validationMixin],props:{isAuthAddress:{type:Boolean,default:!1}},data:function(){return{mnemonic:""}},validations:{mnemonic:{required:_.a,validMnemonic:$}},methods:{addAddress:function(){this.$v.$invalid?this.$v.$touch():this.$store.commit("SET_AUTH_ADVANCED",this.mnemonic)}}},w=n(63),component=Object(w.a)(E,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"panel__section",on:{submit:function(t){return t.preventDefault(),e.addAddress.apply(null,arguments)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("label",{staticClass:"form-field",class:{"is-error":e.$v.mnemonic.$error,"is-success":!e.$v.mnemonic.$invalid}},[n("textarea",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model.trim",value:e.mnemonic,expression:"mnemonic",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{rows:"1",autocomplete:"off",autocapitalize:"off",spellcheck:"false","data-test-id":"authAdvancedLoginInputMnemonic"},domProps:{value:e.mnemonic},on:{blur:[function(t){return e.$v.mnemonic.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||(e.mnemonic=t.target.value.trim())}}}),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Your seed phrase","index.auth-sign-in-seed-text")))])]),e._v(" "),e.$v.mnemonic.$dirty&&!e.$v.mnemonic.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter phrase","index.auth-error-seed-required")))]):e._e(),e._v(" "),e.$v.mnemonic.$dirty&&e.$v.mnemonic.required&&!e.$v.mnemonic.validMnemonic?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Invalid phrase","index.auth-error-seed-invalid")))]):e._e()]),e._v(" "),n("div",{staticClass:"u-cell"},[n("button",{staticClass:"button button--main button--full",class:{"is-disabled":e.$v.$invalid},attrs:{"data-test-id":"authAdvancedLoginSubmitButton"}},[e._v(e._s(e.$td("Sign In","index.auth-sign-in-seed-button")))])])])])}),[],!1,null,null,null),x=component.exports,A={components:{ButtonCopy:n(745).a},directives:{autosize:h.a},data:function(){return{mnemonic:""}},computed:{address:function(){try{return Object(C.c)(this.mnemonic).getAddressString()}catch(e){return""}}},methods:{generate:function(){this.mnemonic=Object(C.a)()}}};function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P={layout:"nonAuth",components:{AuthAdvancedForm:x,AuthAdvancedGenerate:Object(w.a)(A,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel__section"},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[e.mnemonic?e._e():n("div",{staticClass:"u-cell"},[n("button",{staticClass:"button button--main button--full",attrs:{"data-test-id":"authAdvancedRegisterGenerateButton"},on:{click:e.generate}},[e._v(e._s(e.$td("Click to generate seed phrase","index.auth-sign-up-seed-generate")))])]),e._v(" "),e.address?n("div",{staticClass:"u-cell"},[n("label",{staticClass:"form-field form-field--with-icon"},[n("textarea",{directives:[{name:"autosize",rawName:"v-autosize"}],staticClass:"form-field__input is-not-empty",attrs:{rows:"1",autocapitalize:"off",spellcheck:"false",readonly:""},domProps:{value:e.address}}),e._v(" "),n("ButtonCopy",{staticClass:"form-field__icon form-field__icon--copy u-semantic-button link--opacity",attrs:{"copy-text":e.address}},[n("img",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-copy-black.svg",alt:"Copy"}})]),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Your generated address","index.auth-sign-up-seed-address")))])],1)]):e._e(),e._v(" "),e.mnemonic?n("div",{staticClass:"u-cell"},[n("label",{staticClass:"form-field form-field--with-icon"},[n("textarea",{directives:[{name:"autosize",rawName:"v-autosize"}],staticClass:"form-field__input is-not-empty",attrs:{rows:"1",autocapitalize:"off",spellcheck:"false",readonly:""},domProps:{value:e.mnemonic}}),e._v(" "),n("ButtonCopy",{staticClass:"form-field__icon form-field__icon--copy u-semantic-button link--opacity",attrs:{"data-test-id":"authAdvancedRegisterCopyButton","copy-text":e.mnemonic}},[n("img",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-copy-black.svg",alt:e.$td("Copy seed phrase","index.auth-sign-up-seed-copy")}})]),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Your generated seed phrase","index.auth-sign-up-seed-result")))])],1)]):e._e()])])}),[],!1,null,null,null).exports},directives:{},fetch:function(e){var t=e.app,n=e.store,r=e.redirect;if(n.getters.isAuthorized)return r(t.i18nGetPreferredPath("wallet"));n.commit("SET_SECTION_NAME","")},head:function(){var title=Object(c.a)(null,this.$i18n.locale),e=this.$td("Minter Console is by far the most advanced part of our project that lets you manage all your activities on our ".concat(this.isTestnet?"test ":"","network."),this.isTestnet?"index.seo-description-testnet":"index.seo-description"),t="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/social-share").concat(t,".png")}]}},data:function(){return{}},computed:S(S({},Object(o.b)(["isAuthorized"])),{},{isTestnet:function(){return l.H===l.L}}),watch:{isAuthorized:function(e){if(e)return this.$router.replace(this.$i18nGetPreferredPath("wallet"))}},created:function(){},destroyed:function(){},methods:{}},O=Object(w.a)(P,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"auth u-section",attrs:{"data-test-id":"authSection"}},[n("div",{staticClass:"u-container u-container--medium"},[n("div",{staticClass:"u-grid u-grid--vertical-margin"},[n("div",{staticClass:"u-cell u-cell--medium--1-2"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[n("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-auth-sign-in.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n                                    "+e._s(e.$td("Sign in with seed phrase","index.auth-sign-in-seed-title"))+"\n                                ")])]),e._v(" "),n("AuthAdvancedForm",{attrs:{isAuthAddress:!0}})],1)]),e._v(" "),n("div",{staticClass:"u-cell u-cell--medium--1-2"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[n("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-auth-register.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n                                    "+e._s(e.$td("Create wallet","index.auth-sign-up-seed-title"))+"\n                                ")])]),e._v(" "),n("AuthAdvancedGenerate"),e._v(" "),n("div",{staticClass:"panel__section"},[n("a",{staticClass:"link--default",attrs:{href:"https://github.com/MinterTeam/minter-console-web/releases",target:"_blank"}},[e._v(e._s(e.$td("Generate locally (Github)","index.auth-sign-up-seed-offline")))])])],1)])])])]),e._v(" "),n("div",{staticClass:"u-section u-container u-container--medium"},[n("h1",{staticClass:"h-title"},[e._v(e._s(e.$td("What is Minter Console?","index.features-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Minter Console is by far the most advanced part of our project that lets you manage all your activities on the blockchain network and off-chain services. Here are just a few features:","index.features-description")))]),e._v(" "),n("ul",{staticClass:"features__list u-grid u-grid--vertical-margin--large no-list"},[n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-coin-transfer.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Send and receive any coins","index.features-transfer-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Transact cryptocurrencies with your friends, family members, and business partners. Almost instantly and fee-free.","index.features-transfer-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-convert.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Trade","index.features-trade-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Create trading pairs, add liquidity into pools and remove it, and participate in yield farming programs.","index.features-trade-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-hub.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Make cross-chain transfers","index.features-cross-chain-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Move your digital assets between the Minter and Ethereum networks (there are more to come).","index.features-cross-chain-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-check.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Create and manage checks","index.features-check-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Paper is no more needed to issue or redeem the check. Minter Console will help you get the job done—wherever you are and whenever you need it.","index.features-check-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-mining.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Delegate or unbond tokens","index.features-mining-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Delegate your tokens to start receiving payouts. In case you don’t want the validator to handle your holdings anymore, all you need to do is submit the request for unbonding.","index.features-mining-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-node-management.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Set up and manage a masternode","index.features-masternode-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("With our user-friendly, easy-to-navigate interface, running a masternode has never been easier.","index.features-masternode-description")))])])]),e._v(" "),n("li",{staticClass:"features__item u-cell u-cell--medium--1-2"},[n("img",{staticClass:"features__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-coin-creation.svg",alt:"",role:"presentation"}}),e._v(" "),n("div",[n("strong",{staticClass:"features__title"},[e._v(e._s(e.$td("Create new coins and tokens","index.features-creation-title")))]),e._v(" "),n("p",[e._v(e._s(e.$td("Don’t hesitate too long—starting your own cryptocurrency is just a few clicks away!","index.features-creation-description")))])])])])])])}),[],!1,null,null,null);t.default=O.exports},718:function(e,t,n){"use strict";n(64);function r(e){return"SELECT"===e.nodeName.toUpperCase()}function o(e){c(e.target)}function c(e){setTimeout((function(){e.value.length?e.classList.add("is-not-empty"):e.classList.remove("is-not-empty")}),0)}t.a={bind:function(e,t,n){c(e),r(e)?e.addEventListener("change",o):e.addEventListener("input",o),t.value&&e.addEventListener(t.value,o)},componentUpdated:function(e,t){c(e),t.oldValue!==t.value&&e.removeEventListener(t.oldValue,o),t.value&&e.addEventListener(t.value,o)},unbind:function(e,t){r(e)?e.removeEventListener("change",o):e.removeEventListener("input",o),t.value&&e.removeEventListener(t.value,o)}}},741:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(3);function o(text,e){var t="ru"===e?"Консоль":"Console";return text?r.d+t+". "+text+r.c:r.d+t+r.c}},745:function(e,t,n){"use strict";var r=n(767),o={props:{copyText:{type:String,required:!0}},computed:{isClipboardSupported:function(){return r.b()}},methods:{copy:function(e){r.a(e)&&this.$store.commit("SET_SNACKBAR_ACTIVE")}}},c=n(63),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isClipboardSupported?n("button",{attrs:{type:"button"},on:{click:function(t){return e.copy(e.copyText)}}},[e._t("default")],2):e._e()}),[],!1,null,null,null);t.a=component.exports}}]);