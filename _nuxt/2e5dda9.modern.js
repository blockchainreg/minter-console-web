(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1043:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return h}));r(5),r(13),r(162),r(6);var o=r(94),n=(r(196),r(14)),c=r(673),l=(r(64),r(874)),d=(r(779),r(418)),m="https://bip.to";class f{constructor(data){data=data||{};var t=[{name:"type",length:1},{name:"data",alias:"input"},{name:"payload",allowZero:!0,default:e.from([])},{name:"nonce",length:32,allowLess:!0},{name:"gasPrice",length:32,allowLess:!0},{name:"gasCoin",length:4,allowLess:!0,allowNonBinaryArray:!0,default:[]}];Object(c.K)(this,t,data)}}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,{nonce:o,gasPrice:n,gasCoin:c,type:h,txType:k,data:data,txData:$,password:C}=t,y={nonce:o||0===o?Object(d.f)(o):[],gasPrice:n||0===n?Object(d.f)(n):[],gasCoin:c||0===c?Object(d.f)(c):[],type:h||k,data:Object(l.b)(data||$,h||k)},w=t.message||t.payload;w&&("string"==typeof w&&(w=e.from(w,"utf-8")),y.payload=w),-1===(r=r.replace(/\/$/,"")).indexOf("://")&&(r="https://".concat(r));var E=new f(y),x="".concat(r,"/tx/").concat(v(E.serialize()));return C&&(x+="?p=".concat(v(_(C)))),x}function v(t){return e.from(t).toString("base64").replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function _(t){return"string"!=typeof t||Object(n.isHexPrefixed)(t)?Object(o.toBuffer)(t):e.from(t,"utf8")}}).call(this,r(4).Buffer)},1103:function(e,t,r){"use strict";r.r(t);r(21);var o=r(679),n=r(669),c=r(670),l=r.n(c),d=r(64),m=r(3),f=r(668),h=r(678),v=r(690),_={TX_TYPE:m.a,components:{TxForm:h.a,FieldQr:v.a},directives:{checkEmpty:f.a},mixins:[n.validationMixin],data:()=>({form:{check:"",password:""}}),validations:()=>({form:{check:{required:l.a,validCheck:d.m},password:{required:l.a}}}),methods:{clearForm(){this.form.check="",this.form.password="",this.$v.$reset()}}},k=r(44),$=Object(k.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TxForm",{attrs:{txData:e.form,$txData:e.$v.form,txType:e.$options.TX_TYPE.REDEEM_CHECK},on:{"clear-form":function(t){return e.clearForm()}},scopedSlots:e._u([{key:"panel-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[e._v("\n            "+e._s(e.$td("Redeem check","checks.redeem-title"))+"\n        ")]),e._v(" "),r("p",{staticClass:"panel__header-description"},[e._v("\n            "+e._s(e.$td("Claim a check someone has written out to you.","checks.redeem-description"))+"\n        ")])]},proxy:!0},{key:"default",fn:function(t){t.fee,t.addressBalance;return[r("div",{staticClass:"u-cell"},[r("FieldQr",{attrs:{$value:e.$v.form.check,label:e.$td("Check","form.checks-redeem-check")},model:{value:e.form.check,callback:function(t){e.$set(e.form,"check","string"==typeof t?t.trim():t)},expression:"form.check"}}),e._v(" "),e.$v.form.check.$dirty&&!e.$v.form.check.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Check","form.checks-redeem-check-error-required")))]):e.$v.form.check.$dirty&&!e.$v.form.check.validCheck?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Check is invalid","form.checks-redeem-check-error-invalid")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("The identifier the issuer gave you. Starts with","form.checks-redeem-check-help"))+" "),r("strong",[e._v("Mc")])])],1),e._v(" "),r("div",{staticClass:"u-cell"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.password.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text",autocapitalize:"off",spellcheck:"false"},domProps:{value:e.form.password},on:{blur:[function(t){return e.$v.form.password.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Password","form.checks-redeem-password")))])]),e._v(" "),e.$v.form.password.$dirty&&!e.$v.form.password.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter password","form.checks-redeem-password-error-required")))]):e._e()])]}},{key:"submit-title",fn:function(){return[e._v("\n        "+e._s(e.$td("Redeem","form.checks-redeem-button"))+"\n    ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-check.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n            "+e._s(e.$td("Redeem check","checks.redeem-title"))+"\n        ")])]},proxy:!0}])})}),[],!1,null,null,null).exports,C=r(26),y=(r(5),r(13),r(18),r(20),r(124)),w=r(708);var E=r(706),x=r(676),O=r.n(x),S=r(685),M=r.n(S),j=r(778),P=r(1043),I=r(677),B=r(711),F=r(261),N=r(81),A=r(2),R=r(681),V=r(680),L=r(684),D=r(688),Q=r(693);function T(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function z(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(t){Object(C.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function H(){return((e=21)=>{let t="",i=e;for(;i--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t})(10)}var U={feeBus:null,components:{QrcodeVue:w.a,InlineSvg:E.a,Modal:R.a,FieldCoin:V.a,InputMaskedAmount:L.a,InputMaskedInteger:D.a,ButtonCopyIcon:Q.a},directives:{checkEmpty:f.a},mixins:[n.validationMixin],data:()=>({isFormSending:!1,serverError:"",check:null,password:"",form:{nonce:H(),dueBlock:"",value:null,coinSymbol:"",password:"",gasCoin:""},fee:{},deeplink:"",isCheckQrModalVisible:!1,isLinkQrModalVisible:!1}),validations(){return{form:{nonce:{required:l.a,maxLength:M()(16)},dueBlock:{},value:{required:l.a},coinSymbol:{required:l.a,minLength:this.$store.getters.isOfflineMode?()=>!0:O()(3)},password:{required:l.a},gasCoin:{minLength:this.$store.getters.isOfflineMode?()=>!0:O()(3)}}}},computed:z(z({},Object(y.b)({balance:"balance"})),{},{feeBusParams(){var e;return{txParams:{type:m.a.REDEEM_CHECK,gasCoin:this.form.gasCoin},baseCoinAmount:null===(e=this.$store.getters.baseCoin)||void 0===e?void 0:e.amount,isOffline:this.$store.getters.isOfflineMode}},deeplinkPretty(){return this.deeplink.replace("https://","")}}),watch:{feeBusParams:{handler(e){this.$options.feeBus&&"function"==typeof this.$options.feeBus.$emit&&this.$options.feeBus.$emit("update-params",e)},deep:!0}},created(){this.$options.feeBus=new B.a(this.feeBusParams),this.fee=this.$options.feeBus.fee,this.$options.feeBus.$on("update-fee",(e=>{this.fee=e}))},methods:{pretty:e=>Object(N.s)(e,void 0,!0),submit(){if(!this.isFormSending)if(this.$v.$invalid)this.$v.$touch();else{this.check=null,this.password="",this.deeplink="",this.isFormSending=!0,this.serverError="";var e,t,r=z(z({privateKey:this.$store.getters.privateKey,chainId:this.$store.getters.CHAIN_ID},(e=this.form,t={},Object.keys(e).forEach((r=>{(e[r]||0===e[r]||!1===e[r])&&(t[r]=e[r])})),t)),{},{coin:this.form.coinSymbol,gasCoin:this.fee.coin});Promise.all([Object(I.j)(r,["gasCoin","coin"]),this.$store.dispatch("FETCH_ADDRESS_ENCRYPTED")]).then((()=>{try{this.check=Object(j.b)(r),this.password=this.form.password;var e=A.D===A.H?"https://testnet.bip.to":void 0;this.deeplink=Object(P.a)({data:{check:this.check},type:m.a.REDEEM_CHECK,password:this.form.password},e),this.clearForm()}catch(e){this.serverError=Object(F.a)(e)}this.isFormSending=!1})).catch((e=>{this.isFormSending=!1,this.serverError=Object(F.a)(e)}))}},clearForm(){this.form.nonce=H(),this.form.dueBlock="",this.form.value=null,this.form.coinSymbol="",this.form.password="",this.form.gasCoin="",this.$v.$reset()}}},K={components:{CheckRedeemForm:$,CheckIssueForm:Object(k.a)(U,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"panel__section",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.nonce.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model",value:e.form.nonce,expression:"form.nonce"}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.form.nonce},on:{blur:function(t){return e.$v.form.nonce.$touch()},input:function(t){t.target.composing||e.$set(e.form,"nonce",t.target.value)}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Nonce","form.checks-issue-nonce")))])]),e._v(" "),e.$v.form.nonce.$dirty&&!e.$v.form.nonce.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter nonce","form.checks-issue-nonce-error-required")))]):e.$v.form.nonce.$dirty&&!e.$v.form.nonce.maxLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max length: 16 bytes","form.checks-issue-nonce-error-max")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Check's unique ID. Arbitrary string. Used for issuing several identical checks.","form.checks-issue-nonce-help")))])]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[r("FieldCoin",{attrs:{$value:e.$v.form.coinSymbol,label:e.$td("Coin","form.coin"),"coin-list":e.balance},model:{value:e.form.coinSymbol,callback:function(t){e.$set(e.form,"coinSymbol",t)},expression:"form.coinSymbol"}}),e._v(" "),e.$v.form.coinSymbol.$dirty&&!e.$v.form.coinSymbol.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter coin symbol","form.coin-error-required")))]):e.$v.form.coinSymbol.$dirty&&!e.$v.form.coinSymbol.minLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):e._e()],1),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.value.$error}},[r("InputMaskedAmount",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",on:{blur:function(t){return e.$v.form.value.$touch()}},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Amount","form.checks-issue-amount")))])],1),e._v(" "),e.$v.form.value.$dirty&&!e.$v.form.value.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter amount","form.amount-error-required")))]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.password.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text",autocapitalize:"off",spellcheck:"false"},domProps:{value:e.form.password},on:{blur:[function(t){return e.$v.form.password.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Password","form.checks-issue-pass")))])]),e._v(" "),e.$v.form.password.$dirty&&!e.$v.form.password.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter password","form.checks-issue-pass-error-required")))]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[r("FieldCoin",{attrs:{$value:e.$v.form.gasCoin,label:e.$td("Coin to pay fee (optional)","form.fee"),"coin-list":e.balance},model:{value:e.form.gasCoin,callback:function(t){e.$set(e.form,"gasCoin",t)},expression:"form.gasCoin"}}),e._v(" "),e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.minLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):e.$store.getters.isOfflineMode?r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Equivalent of "+e.$store.getters.COIN_NAME+" "+e.pretty(e.fee.baseCoinValue),"form.fee-help",{value:e.pretty(e.fee.baseCoinValue),coin:e.$store.getters.COIN_NAME})))]):r("div",{staticClass:"form-field__help"},[e._v("\n                "+e._s(e.fee.coinSymbol)+" "+e._s(e.pretty(e.fee.value))+"\n                "),e.fee.isBaseCoin?e._e():r("span",{staticClass:"u-display-ib"},[e._v("("+e._s(e.$store.getters.COIN_NAME)+" "+e._s(e.pretty(e.fee.baseCoinValue))+")")]),e._v(" "),r("br"),e._v("\n                "+e._s(e.$td("Default:","form.help-default"))+" "+e._s(e.fee.isBaseCoinEnough?e.$store.getters.COIN_NAME:e.$td("same as coin to transfer","form.wallet-send-fee-same"))+"\n            ")])],1),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.dueBlock.$error}},[r("InputMaskedInteger",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",on:{blur:function(t){return e.$v.form.dueBlock.$touch()}},model:{value:e.form.dueBlock,callback:function(t){e.$set(e.form,"dueBlock",t)},expression:"form.dueBlock"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Due block (optional)","form.checks-issue-due")))])],1),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v("\n                "+e._s(e.$td("Default:","form.help-default"))+" 999999999\n            ")])]),e._v(" "),r("div",{staticClass:"u-cell"},[r("button",{staticClass:"button button--main button--full",class:{"is-disabled":e.$v.$invalid}},[e._v(e._s(e.$td("Issue","form.checks-issue-button")))]),e._v(" "),e.serverError?r("div",{staticClass:"form-field__error"},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.check?r("div",{staticClass:"u-cell"},[r("dl",[r("dt",[e._v(e._s(e.$td("Signed check:","form.checks-issue-result-check")))]),e._v(" "),r("dd",{staticClass:"u-icon-wrap"},[r("span",{staticClass:"u-select-all u-icon-text"},[e._v("\n                        "+e._s(e.check)+"\n                    ")]),e._v(" "),r("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.check}}),e._v(" "),r("button",{staticClass:"u-icon u-icon--qr--right u-semantic-button link--opacity",on:{click:function(t){e.isCheckQrModalVisible=!0}}},[r("InlineSvg",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-qr.svg",width:"24",height:"24"}})],1)],1),e._v(" "),r("dt",[e._v(e._s(e.$td("Password:","form.checks-issue-result-pass")))]),e._v(" "),r("dd",{staticClass:"u-select-all"},[e._v(e._s(e.password))]),e._v(" "),r("dt",[e._v("\n                    "+e._s(e.$td("Link to redeem:","form.checks-issue-result-link"))+" "),r("br"),e._v(" "),r("span",{staticClass:"u-emoji"},[e._v("⚠️")]),e._v(" "+e._s(e.$td("Warning! Password included in the link. Send the link only directly to the recipient.","form.checks-issue-result-link-warning"))+"\n                ")]),e._v(" "),r("dd",{staticClass:"u-icon-wrap"},[r("span",{staticClass:"u-select-all u-icon-text u-text-break-all"},[r("a",{staticClass:"link--main link--hover",attrs:{href:e.deeplink,target:"_blank"}},[e._v(e._s(e.deeplinkPretty))])]),e._v(" "),r("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.deeplink}}),e._v(" "),r("button",{staticClass:"u-icon u-icon--qr--right u-semantic-button link--opacity",on:{click:function(t){e.isLinkQrModalVisible=!0}}},[r("InlineSvg",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-qr.svg",width:"24",height:"24"}})],1)],1)])]):e._e()]),e._v(" "),r("Modal",{staticClass:"qr-modal",attrs:{isOpen:e.isCheckQrModalVisible},on:{"update:isOpen":function(t){e.isCheckQrModalVisible=t},"update:is-open":function(t){e.isCheckQrModalVisible=t}}},[r("QrcodeVue",{staticClass:"qr-modal__layer",attrs:{value:e.check,size:280,level:"L"}})],1),e._v(" "),r("Modal",{staticClass:"qr-modal",attrs:{isOpen:e.isLinkQrModalVisible},on:{"update:isOpen":function(t){e.isLinkQrModalVisible=t},"update:is-open":function(t){e.isLinkQrModalVisible=t}}},[r("QrcodeVue",{staticClass:"qr-modal__layer",attrs:{value:e.deeplink,size:280,level:"L"}})],1)],1)}),[],!1,null,null,null).exports},fetch(e){var{app:t,store:r}=e;return r.commit("SET_SECTION_NAME",t.$td("Checks","common.page-checks")),Promise.resolve()},head(){var title=Object(o.a)(this.$store.state.sectionName,this.$i18n.locale),e=this.$td("Issue a check that will later be redeemed by the person of your choice or claim a check someone has written out to you.","checks.seo-description"),t="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/img/social-share-checks").concat(t,".png")}]}}},X=Object(k.a)(K,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"u-section u-container"},[r("CheckRedeemForm"),e._v(" "),r("div",{staticClass:"panel"},[r("div",{staticClass:"panel__header"},[r("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Issue check","checks.issue-title"))+"\n            ")]),e._v(" "),r("p",{staticClass:"panel__header-description"},[e._v("\n                "+e._s(e.$td("Issue a check that will later be redeemed by the person of your choice.","checks.issue-description"))+"\n            ")])]),e._v(" "),r("CheckIssueForm")],1)],1)}),[],!1,null,null,null);t.default=X.exports},684:function(e,t,r){"use strict";var o=r(262),n=(r(695),r(697)),c=["input"],l={ideFix:null,imaskAmount:{mask:Number,scale:18,signed:!1,thousandsSeparator:"",padFractionalZeros:!1,normalizeZeros:!1,radix:".",mapToRadix:[","]},directives:{imask:n.a},props:{value:{type:[String,Number],default:""}},data:()=>({maskedValue:""}),computed:{listeners(){var e=this.$listeners,{input:input}=e;return Object(o.a)(e,c)}},watch:{value(e){e!==this.maskedValue&&this.updateMaskState(e)}},mounted(){this.updateMaskState(this.value)},methods:{updateMaskState(e){this.$refs.input.maskRef.typedValue=e;var t=this.$refs.input.maskRef._value.length;this.$refs.input.maskRef._selection={start:t,end:t}},onAcceptInput(e){this.maskedValue=e.detail._unmaskedValue,this.$emit("input",e.detail._unmaskedValue)}}},d=r(44),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",e._g({directives:[{name:"imask",rawName:"v-imask",value:e.$options.imaskAmount,expression:"$options.imaskAmount"}],ref:"input",attrs:{type:"text",autocapitalize:"off",inputmode:"decimal"},on:{accept:e.onAcceptInput}},e.listeners))}),[],!1,null,null,null);t.a=component.exports}}]);