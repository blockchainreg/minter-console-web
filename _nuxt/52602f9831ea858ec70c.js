/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{557:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(554);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},558:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(554);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},561:function(e,t,r){"use strict";var n=r(576),o=r.n(n);t.a={bind:function(e,t,r){"TEXTAREA"===e.tagName&&r.context.$nextTick((function(){o()(e)}))},componentUpdated:function(e,t,r){"TEXTAREA"===e.tagName&&r.context.$nextTick((function(){o.a.update(e)}))},unbind:function(e){o.a.destroy(e)}}},573:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(175),r(39),r(45),r(5);var n={};var o={inheritAttrs:!1,render:function(e){return this.isLoaded?e("svg",{on:this.$listeners,attrs:Object.assign(this.svgAttrs,(t=this.$attrs,Object.keys(t).reduce((function(e,r){return!1!==t[r]&&null!==t[r]&&void 0!==t[r]&&(e[r]=t[r]),e}),{}))),domProps:{innerHTML:this.svgContent}}):null;var t},props:{src:{type:String,required:!0},transformSource:{type:Function,default:function(svg){return svg}}},data:function(){return{isLoaded:!1,svgAttrs:{},svgContent:""}},watch:{src:function(e){this.inline(e)}},mounted:function(){this.inline(this.src)},methods:{inline:function(e){var t=this;n[e]||(this.isLoaded&&(this.isLoaded=!1,this.$emit("unloaded")),n[e]=this.download(e)),n[e].then((function(svg){t.svgAttrs={};for(var e=svg.attributes,i=e.length-1;i>=0;i--)t.svgAttrs[e[i].name]=e[i].value;t.svgContent=svg.innerHTML,t.isLoaded=!0,t.$nextTick((function(){t.$emit("loaded",t.$el)}))})).catch((function(r){delete n[e],t.$emit("error",r)}))},download:function(e){var t=this;return new Promise((function(r,n){var o=new XMLHttpRequest;o.open("GET",e,!0),o.onload=function(){if(o.status>=200&&o.status<400)try{var e=(new DOMParser).parseFromString(o.responseText,"text/xml").getElementsByTagName("svg")[0];e?(e=t.transformSource(e),r(e)):n(new Error('Loaded file is not valid SVG"'))}catch(e){n(e)}else n(new Error("Error loading SVG"))},o.onerror=n,o.send()}))}}}},575:function(e,t,r){var n=r(8),o=r(355),c=r(15),l=r(23),d=r(146).onFreeze,f=Object.freeze;n({target:"Object",stat:!0,forced:c((function(){f(1)})),sham:!o},{freeze:function(e){return f&&l(e)?f(d(e)):e}})},576:function(e,t,r){var n,o,c;o=[e,t],void 0===(c="function"==typeof(n=function(e,t){"use strict";var r,n,map="function"==typeof Map?new Map:(r=[],n=[],{has:function(e){return r.indexOf(e)>-1},get:function(e){return n[r.indexOf(e)]},set:function(e,t){-1===r.indexOf(e)&&(r.push(e),n.push(t))},delete:function(e){var t=r.indexOf(e);t>-1&&(r.splice(t,1),n.splice(t,1))}}),o=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){o=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function c(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!map.has(e)){var style,t=null,r=null,n=null,c=function(){e.clientWidth!==r&&m()},l=function(style){window.removeEventListener("resize",c,!1),e.removeEventListener("input",m,!1),e.removeEventListener("keyup",m,!1),e.removeEventListener("autosize:destroy",l,!1),e.removeEventListener("autosize:update",m,!1),Object.keys(style).forEach((function(t){e.style[t]=style[t]})),map.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",l,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",m,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",m,!1),e.addEventListener("autosize:update",m,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",map.set(e,{destroy:l,update:m}),"vertical"===(style=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===style.resize&&(e.style.resize="horizontal"),t="content-box"===style.boxSizing?-(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)):parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth),isNaN(t)&&(t=0),m()}function d(t){var r=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=r,e.style.overflowY=t}function f(){if(0!==e.scrollHeight){var n=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",r=e.clientWidth,n.forEach((function(e){e.node.scrollTop=e.scrollTop})),o&&(document.documentElement.scrollTop=o)}}function m(){f();var t=Math.round(parseFloat(e.style.height)),r=window.getComputedStyle(e,null),c="content-box"===r.boxSizing?Math.round(parseFloat(r.height)):e.offsetHeight;if(c<t?"hidden"===r.overflowY&&(d("scroll"),f(),c="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==r.overflowY&&(d("hidden"),f(),c="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),n!==c){n=c;var l=o("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}}function l(e){var t=map.get(e);t&&t.destroy()}function d(e){var t=map.get(e);t&&t.update()}var f=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((f=function(e){return e}).destroy=function(e){return e},f.update=function(e){return e}):((f=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return c(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e},f.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e}),t.default=f,e.exports=t.default})?n.apply(t,o):n)||(e.exports=c)},577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(554);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},579:function(e,t,r){"use strict";r(84);var n=r(225),o=(r(583),r(584)),c={ideFix:null,imaskAmount:{mask:Number,scale:18,signed:!1,thousandsSeparator:"",padFractionalZeros:!1,normalizeZeros:!1,radix:".",mapToRadix:[","]},directives:{imask:o.a},props:{value:{type:[String,Number],default:""}},data:function(){return{maskedValue:""}},computed:{listeners:function(){var e=this.$listeners,t=(e.input,Object(n.a)(e,["input"]));return t}},watch:{value:function(e){e!==this.maskedValue&&this.updateMaskState(e)}},mounted:function(){this.updateMaskState(this.value)},methods:{updateMaskState:function(e){this.$refs.input.maskRef.typedValue=e;var t=this.$refs.input.maskRef._value.length;this.$refs.input.maskRef._selection={start:t,end:t}},onAcceptInput:function(e){this.maskedValue=e.detail._unmaskedValue,this.$emit("input",e.detail._unmaskedValue)}}},l=r(35),component=Object(l.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("input",this._g({directives:[{name:"imask",rawName:"v-imask",value:this.$options.imaskAmount,expression:"$options.imaskAmount"}],ref:"input",attrs:{type:"text",autocapitalize:"off",inputmode:"decimal"},on:{accept:this.onAcceptInput}},this.listeners))}),[],!1,null,null,null);t.a=component.exports},580:function(e,t,r){"use strict";function n(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var r=document.getSelection(),n=r.rangeCount>0&&r.getRangeAt(0);t.select(),t.selectionStart=0,t.selectionEnd=e.length;var o=document.execCommand("copy");return document.body.removeChild(t),n&&(r.removeAllRanges(),r.addRange(n)),o}function o(){return"undefined"!=typeof document&&"function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}))},628:function(e,t,r){"use strict";var n=r(77),o=r(228),c=r(51);e.exports=function(e){for(var t=n(this),r=c(t.length),l=arguments.length,d=o(l>1?arguments[1]:void 0,r),f=l>2?arguments[2]:void 0,m=void 0===f?r:o(f,r);m>d;)t[d++]=e;return t}},658:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return _}));r(47),r(659),r(27),r(59),r(5),r(10),r(11),r(22),r(358);var n=r(98),o=r(636),c=r(101),l=(r(356),r(48)),d=r(365),f=r(562),m=r(647),h=(r(623),r(567)),v=function t(data){Object(n.a)(this,t),data=data||{};var r=[{name:"type",length:1,allowLess:!0,default:e.from([])},{name:"data",alias:"input",allowZero:!0,default:e.from([])},{name:"payload",allowZero:!0,default:e.from([])},{name:"nonce",length:32,allowLess:!0,default:e.from([])},{name:"gasPrice",length:32,allowLess:!0,default:e.from([])},{name:"gasCoin",length:10,allowLess:!0,default:e.from([])}];Object(o.defineProperties)(this,r,data)};function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://bip.to",n=t.nonce,o=t.gasPrice,c=t.gasCoin,l=t.type,d=t.txType,data=t.data,_=t.txData,$=t.password,C={nonce:n&&"0x".concat(Object(h.e)(n)),gasPrice:o&&"0x".concat(Object(h.e)(o)),gasCoin:c&&Object(f.s)(c),type:l||d,data:Object(m.b)(data||_,l||d)},w=t.message||t.payload;w&&("string"==typeof w&&(w=e.from(w,"utf-8")),C.payload=w),-1===(r=r.replace(/\/$/,"")).indexOf("://")&&(r="https://".concat(r));var E=new v(C),x="".concat(r,"/tx/").concat(y(E.serialize()));return $&&(x+="?p=".concat(y(k($)))),x}function y(e){return Object(d.fromByteArray)(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function k(t){return"string"!=typeof t||Object(l.isHexPrefixed)(t)?Object(c.toBuffer)(t):e.from(t,"utf8")}}).call(this,r(12).Buffer)},659:function(e,t,r){var n=r(8),o=r(628),c=r(178);n({target:"Array",proto:!0},{fill:o}),c("fill")},679:function(e,t,r){"use strict";r.r(t);r(47),r(5);var n=r(560),o=r(552),c=r(553),l=r.n(c),d=r(559),f=r(224),m=r(551),h=r(569),v=r(568),_={TX_TYPE:f.a,components:{TxForm:h.a,FieldQr:v.a},directives:{checkEmpty:m.a},mixins:[o.validationMixin],data:function(){return{form:{check:"",password:""}}},validations:function(){return{form:{check:{required:l.a,validCheck:d.f},password:{required:l.a}}}},methods:{clearForm:function(){this.form.check="",this.form.password="",this.$v.$reset()}}},y=r(35),k=Object(y.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TxForm",{attrs:{txData:e.form,$txData:e.$v.form,txType:e.$options.TX_TYPE.REDEEM_CHECK},on:{"clear-form":function(t){return e.clearForm()}},scopedSlots:e._u([{key:"panel-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[e._v("\n            "+e._s(e.$td("Redeem check","checks.redeem-title"))+"\n        ")]),e._v(" "),r("p",{staticClass:"panel__header-description"},[e._v("\n            "+e._s(e.$td("Claim a check someone has written out to you.","checks.redeem-description"))+"\n        ")])]},proxy:!0},{key:"default",fn:function(t){t.fee,t.addressBalance;return[r("div",{staticClass:"u-cell"},[r("FieldQr",{attrs:{$value:e.$v.form.check,label:e.$td("Check","form.checks-redeem-check")},model:{value:e.form.check,callback:function(t){e.$set(e.form,"check","string"==typeof t?t.trim():t)},expression:"form.check"}}),e._v(" "),e.$v.form.check.$dirty&&!e.$v.form.check.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Check","form.checks-redeem-check-error-required")))]):e.$v.form.check.$dirty&&!e.$v.form.check.validCheck?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Check is invalid","form.checks-redeem-check-error-invalid")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("The identifier the issuer gave you. Starts with","form.checks-redeem-check-help"))+" "),r("strong",[e._v("Mc")])])],1),e._v(" "),r("div",{staticClass:"u-cell"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.password.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text",autocapitalize:"off",spellcheck:"false"},domProps:{value:e.form.password},on:{blur:[function(t){return e.$v.form.password.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Password","form.checks-redeem-password")))])]),e._v(" "),e.$v.form.password.$dirty&&!e.$v.form.password.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter password","form.checks-redeem-password-error-required")))]):e._e()])]}},{key:"submit-title",fn:function(){return[e._v("\n        "+e._s(e.$td("Redeem","form.checks-redeem-button"))+"\n    ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-check.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n            "+e._s(e.$td("Redeem check","checks.redeem-title"))+"\n        ")])]},proxy:!0}])})}),[],!1,null,null,null).exports,$=(r(40),r(26),r(30),r(66),r(75),r(45),r(10),r(11),r(22),r(31),r(14)),C=r(177),w=r(587),E=r(573),x=r(557),O=r.n(x),S=r(558),M=r.n(S),L=r(622),j=r(658),P=r(588),F=r(227),A=r(119),N=r(9),T=r(565),I=r(571),B=r(579),z=r(570),R=r(578);function V(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(t){Object($.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var Q={feeBus:null,components:{QrcodeVue:w.a,InlineSvg:E.a,Modal:T.a,FieldCoin:I.a,InputMaskedAmount:B.a,InputMaskedInteger:z.a,ButtonCopyIcon:R.a},directives:{checkEmpty:m.a},mixins:[o.validationMixin],data:function(){return{isFormSending:!1,serverError:"",check:null,password:"",form:{nonce:null,dueBlock:"",value:null,coinSymbol:"",password:"",gasCoin:""},fee:{},deeplink:"",isCheckQrModalVisible:!1,isLinkQrModalVisible:!1}},validations:{form:{nonce:{required:l.a},dueBlock:{},value:{required:l.a},coinSymbol:{required:l.a,minLength:O()(3),maxLength:M()(10)},password:{required:l.a},gasCoin:{minLength:O()(3),maxLength:M()(10)}}},computed:D(D({},Object(C.b)({balance:"balance"})),{},{feeBusParams:function(){return{txType:f.a.REDEEM_CHECK,txFeeOptions:{},selectedCoinSymbol:this.form.coinSymbol,selectedFeeCoinSymbol:this.form.gasCoin,baseCoinAmount:this.$store.getters.baseCoin&&this.$store.getters.baseCoin.amount,isOffline:this.$store.getters.isOfflineMode}},deeplinkPretty:function(){return this.deeplink.replace("https://","")}}),watch:{feeBusParams:{handler:function(e){this.$options.feeBus&&"function"==typeof this.$options.feeBus.$emit&&this.$options.feeBus.$emit("updateParams",e)},deep:!0}},created:function(){var e=this;this.$options.feeBus=new P.a(this.feeBusParams),this.fee=this.$options.feeBus.fee,this.$options.feeBus.$on("updateFee",(function(t){e.fee=t}))},methods:{pretty:function(e){return Object(A.j)(e,void 0,!0)},submit:function(){var e=this;this.isFormSending||(this.$v.$invalid?this.$v.$touch():(this.check=null,this.password="",this.deeplink="",this.isFormSending=!0,this.serverError="",this.$store.dispatch("FETCH_ADDRESS_ENCRYPTED").then((function(){try{e.check=Object(L.b)(D(D({privateKey:e.$store.getters.privateKey,chainId:e.$store.getters.CHAIN_ID},(r=e.form,n={},Object.keys(r).forEach((function(e){(r[e]||0===r[e]||!1===r[e])&&(n[e]=r[e])})),n)),{},{gasCoin:e.fee.coinSymbol})),e.password=e.form.password;var t=N.p===N.q?"https://testnet.bip.to":void 0;e.deeplink=Object(j.a)({data:{check:e.check},type:f.a.REDEEM_CHECK,password:e.form.password},t),e.clearForm()}catch(t){e.serverError=Object(F.a)(t)}var r,n;e.isFormSending=!1})).catch((function(t){e.isFormSending=!1,e.serverError=Object(F.a)(t)}))))},clearForm:function(){parseInt(this.form.nonce,10).toString()===this.form.nonce?this.form.nonce=(parseInt(this.form.nonce,10)+1).toString():this.form.nonce="",this.form.dueBlock="",this.form.value=null,this.form.coinSymbol="",this.form.password="",this.form.gasCoin="",this.$v.$reset()}}},H={components:{CheckRedeemForm:k,CheckIssueForm:Object(y.a)(Q,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"panel__section",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.nonce.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model",value:e.form.nonce,expression:"form.nonce"}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.form.nonce},on:{blur:function(t){return e.$v.form.nonce.$touch()},input:function(t){t.target.composing||e.$set(e.form,"nonce",t.target.value)}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Nonce","form.checks-issue-nonce")))])]),e._v(" "),e.$v.form.nonce.$dirty&&!e.$v.form.nonce.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter nonce","form.checks-issue-nonce-error-required")))]):e._e(),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Check's unique ID. Used for issuing several identical checks.","form.checks-issue-nonce-help")))])]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[r("FieldCoin",{attrs:{$value:e.$v.form.coinSymbol,label:e.$td("Coin","form.coin"),"coin-list":e.balance},model:{value:e.form.coinSymbol,callback:function(t){e.$set(e.form,"coinSymbol",t)},expression:"form.coinSymbol"}}),e._v(" "),e.$v.form.coinSymbol.$dirty&&!e.$v.form.coinSymbol.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter coin symbol","form.coin-error-required")))]):e.$v.form.coinSymbol.$dirty&&!e.$v.form.coinSymbol.minLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):e.$v.form.coinSymbol.$dirty&&!e.$v.form.coinSymbol.maxLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max 10 letters","form.coin-error-max")))]):e._e()],1),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.value.$error}},[r("InputMaskedAmount",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",on:{blur:function(t){return e.$v.form.value.$touch()}},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Amount","form.checks-issue-amount")))])],1),e._v(" "),e.$v.form.value.$dirty&&!e.$v.form.value.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter amount","form.amount-error-required")))]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-2"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.password.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.password,expression:"form.password",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text",autocapitalize:"off",spellcheck:"false"},domProps:{value:e.form.password},on:{blur:[function(t){return e.$v.form.password.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Password","form.checks-issue-pass")))])]),e._v(" "),e.$v.form.password.$dirty&&!e.$v.form.password.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter password","form.checks-issue-pass-error-required")))]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[r("FieldCoin",{attrs:{$value:e.$v.form.gasCoin,label:e.$td("Coin to pay fee","form.fee"),"coin-list":e.balance},model:{value:e.form.gasCoin,callback:function(t){e.$set(e.form,"gasCoin",t)},expression:"form.gasCoin"}}),e._v(" "),e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.minLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Min 3 letters","form.coin-error-min")))]):e.$v.form.gasCoin.$dirty&&!e.$v.form.gasCoin.maxLength?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Max 10 letters","form.coin-error-max")))]):this.$store.getters.isOfflineMode?r("div",{staticClass:"form-field__help"},[e._v(e._s(e.$td("Equivalent of "+e.$store.getters.COIN_NAME+" "+e.pretty(e.fee.baseCoinValue),"form.fee-help",{value:e.pretty(e.fee.baseCoinValue),coin:e.$store.getters.COIN_NAME})))]):r("div",{staticClass:"form-field__help"},[e._v("\n                "+e._s(e.fee.coinSymbol)+" "+e._s(e.pretty(e.fee.value))+"\n                "),e.fee.isBaseCoin?e._e():r("span",{staticClass:"u-display-ib"},[e._v("("+e._s(e.$store.getters.COIN_NAME)+" "+e._s(e.pretty(e.fee.baseCoinValue))+")")]),e._v(" "),r("br"),e._v("\n                "+e._s(e.$td("Default:","form.help-default"))+" "+e._s(e.fee.isBaseCoinEnough?e.$store.getters.COIN_NAME:e.$td("same as coin to transfer","form.wallet-send-fee-same"))+"\n            ")])],1),e._v(" "),r("div",{staticClass:"u-cell u-cell--medium--1-3 u-cell--xlarge--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.dueBlock.$error}},[r("InputMaskedInteger",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",on:{blur:function(t){return e.$v.form.dueBlock.$touch()}},model:{value:e.form.dueBlock,callback:function(t){e.$set(e.form,"dueBlock",t)},expression:"form.dueBlock"}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Due block","form.checks-issue-due")))])],1),e._v(" "),r("div",{staticClass:"form-field__help"},[e._v("\n                "+e._s(e.$td("Default:","form.help-default"))+" 999999999\n            ")])]),e._v(" "),r("div",{staticClass:"u-cell"},[r("button",{staticClass:"button button--main button--full",class:{"is-disabled":e.$v.$invalid}},[e._v(e._s(e.$td("Issue","form.checks-issue-button")))]),e._v(" "),e.serverError?r("div",{staticClass:"form-field__error"},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.check?r("div",{staticClass:"u-cell"},[r("dl",[r("dt",[e._v(e._s(e.$td("Signed check:","form.checks-issue-result-check")))]),e._v(" "),r("dd",{staticClass:"u-icon-wrap"},[r("span",{staticClass:"u-select-all u-icon-text"},[e._v("\n                        "+e._s(e.check)+"\n                    ")]),e._v(" "),r("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.check}}),e._v(" "),r("button",{staticClass:"u-icon u-icon--qr--right u-semantic-button link--opacity",on:{click:function(t){e.isCheckQrModalVisible=!0}}},[r("InlineSvg",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-qr.svg",width:"24",height:"24"}})],1)],1),e._v(" "),r("dt",[e._v(e._s(e.$td("Password:","form.checks-issue-result-pass")))]),e._v(" "),r("dd",{staticClass:"u-select-all"},[e._v(e._s(e.password))]),e._v(" "),r("dt",[e._v("\n                    "+e._s(e.$td("Link to redeem:","form.checks-issue-result-link"))+" "),r("br"),e._v(" "),r("span",{staticClass:"u-emoji"},[e._v("⚠️")]),e._v(" "+e._s(e.$td("Warning! Password included in the link. Send the link only directly to the recipient.","form.checks-issue-result-link-warning"))+"\n                ")]),e._v(" "),r("dd",{staticClass:"u-icon-wrap"},[r("span",{staticClass:"u-select-all u-icon-text u-text-break-all"},[r("a",{staticClass:"link--main link--hover",attrs:{href:e.deeplink,target:"_blank"}},[e._v(e._s(e.deeplinkPretty))])]),e._v(" "),r("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.deeplink}}),e._v(" "),r("button",{staticClass:"u-icon u-icon--qr--right u-semantic-button link--opacity",on:{click:function(t){e.isLinkQrModalVisible=!0}}},[r("InlineSvg",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-qr.svg",width:"24",height:"24"}})],1)],1)])]):e._e()]),e._v(" "),r("Modal",{staticClass:"qr-modal",attrs:{isOpen:e.isCheckQrModalVisible},on:{"update:isOpen":function(t){e.isCheckQrModalVisible=t},"update:is-open":function(t){e.isCheckQrModalVisible=t}}},[r("QrcodeVue",{staticClass:"qr-modal__layer",attrs:{value:e.check,size:280,level:"L"}})],1),e._v(" "),r("Modal",{staticClass:"qr-modal",attrs:{isOpen:e.isLinkQrModalVisible},on:{"update:isOpen":function(t){e.isLinkQrModalVisible=t},"update:is-open":function(t){e.isLinkQrModalVisible=t}}},[r("QrcodeVue",{staticClass:"qr-modal__layer",attrs:{value:e.deeplink,size:280,level:"L"}})],1)],1)}),[],!1,null,null,null).exports},fetch:function(e){var t=e.app;return e.store.commit("SET_SECTION_NAME",t.$td("Checks","common.page-checks")),Promise.resolve()},head:function(){var title=Object(n.a)(this.$store.state.sectionName,this.$i18n.locale),e=this.$td("Issue a check that will later be redeemed by the person of your choice or claim a check someone has written out to you.","checks.seo-description"),t="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/img/social-share-checks").concat(t,".png")}]}}},X=Object(y.a)(H,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"u-section u-container"},[r("CheckRedeemForm"),e._v(" "),r("div",{staticClass:"panel"},[r("div",{staticClass:"panel__header"},[r("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Issue check","checks.issue-title"))+"\n            ")]),e._v(" "),r("p",{staticClass:"panel__header-description"},[e._v("\n                "+e._s(e.$td("Issue a check that will later be redeemed by the person of your choice.","checks.issue-description"))+"\n            ")])]),e._v(" "),r("CheckIssueForm")],1)],1)}),[],!1,null,null,null);t.default=X.exports}}]);