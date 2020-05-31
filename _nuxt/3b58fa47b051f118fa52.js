/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{488:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(485);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},489:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(485);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},492:function(e,t,r){"use strict";var n=r(506),o=r.n(n);t.a={bind(e,t,r){"TEXTAREA"===e.tagName&&r.context.$nextTick(()=>{o()(e)})},componentUpdated(e,t,r){"TEXTAREA"===e.tagName&&r.context.$nextTick(()=>{o.a.update(e)})},unbind(e){o.a.destroy(e)}}},504:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r(75),r(20);var n={};var o={inheritAttrs:!1,render(e){return this.isLoaded?e("svg",{on:this.$listeners,attrs:Object.assign(this.svgAttrs,(t=this.$attrs,Object.keys(t).reduce((e,r)=>(!1!==t[r]&&null!==t[r]&&void 0!==t[r]&&(e[r]=t[r]),e),{}))),domProps:{innerHTML:this.svgContent}}):null;var t},props:{src:{type:String,required:!0},transformSource:{type:Function,default:svg=>svg}},data:()=>({isLoaded:!1,svgAttrs:{},svgContent:""}),watch:{src(e){this.inline(e)}},mounted(){this.inline(this.src)},methods:{inline(e){n[e]||(this.isLoaded&&(this.isLoaded=!1,this.$emit("unloaded")),n[e]=this.download(e)),n[e].then(svg=>{this.svgAttrs={};for(var e=svg.attributes,i=e.length-1;i>=0;i--)this.svgAttrs[e[i].name]=e[i].value;this.svgContent=svg.innerHTML,this.isLoaded=!0,this.$nextTick(()=>{this.$emit("loaded",this.$el)})}).catch(t=>{delete n[e],this.$emit("error",t)})},download(e){return new Promise((t,r)=>{var n=new XMLHttpRequest;n.open("GET",e,!0),n.onload=()=>{if(n.status>=200&&n.status<400)try{var e=(new DOMParser).parseFromString(n.responseText,"text/xml").getElementsByTagName("svg")[0];e?(e=this.transformSource(e),t(e)):r(new Error('Loaded file is not valid SVG"'))}catch(e){r(e)}else r(new Error("Error loading SVG"))},n.onerror=r,n.send()})}}}},506:function(e,t,r){var n,o,l;o=[e,t],void 0===(l="function"==typeof(n=function(e,t){"use strict";var r,n,map="function"==typeof Map?new Map:(r=[],n=[],{has:function(e){return r.indexOf(e)>-1},get:function(e){return n[r.indexOf(e)]},set:function(e,t){-1===r.indexOf(e)&&(r.push(e),n.push(t))},delete:function(e){var t=r.indexOf(e);t>-1&&(r.splice(t,1),n.splice(t,1))}}),o=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){o=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function l(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!map.has(e)){var style,t=null,r=null,n=null,l=function(){e.clientWidth!==r&&h()},d=function(style){window.removeEventListener("resize",l,!1),e.removeEventListener("input",h,!1),e.removeEventListener("keyup",h,!1),e.removeEventListener("autosize:destroy",d,!1),e.removeEventListener("autosize:update",h,!1),Object.keys(style).forEach((function(t){e.style[t]=style[t]})),map.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",d,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",h,!1),window.addEventListener("resize",l,!1),e.addEventListener("input",h,!1),e.addEventListener("autosize:update",h,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",map.set(e,{destroy:d,update:h}),"vertical"===(style=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===style.resize&&(e.style.resize="horizontal"),t="content-box"===style.boxSizing?-(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)):parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth),isNaN(t)&&(t=0),h()}function c(t){var r=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=r,e.style.overflowY=t}function m(){if(0!==e.scrollHeight){var n=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",r=e.clientWidth,n.forEach((function(e){e.node.scrollTop=e.scrollTop})),o&&(document.documentElement.scrollTop=o)}}function h(){m();var t=Math.round(parseFloat(e.style.height)),r=window.getComputedStyle(e,null),l="content-box"===r.boxSizing?Math.round(parseFloat(r.height)):e.offsetHeight;if(l<t?"hidden"===r.overflowY&&(c("scroll"),m(),l="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==r.overflowY&&(c("hidden"),m(),l="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),n!==l){n=l;var d=o("autosize:resized");try{e.dispatchEvent(d)}catch(e){}}}}function d(e){var t=map.get(e);t&&t.destroy()}function c(e){var t=map.get(e);t&&t.update()}var m=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((m=function(e){return e}).destroy=function(e){return e},m.update=function(e){return e}):((m=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return l(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e},m.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],c),e}),t.default=m,e.exports=t.default})?n.apply(t,o):n)||(e.exports=l)},507:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(485);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},510:function(e,t,r){"use strict";function n(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var r=document.getSelection(),n=r.rangeCount>0&&r.getRangeAt(0);t.select(),t.selectionStart=0,t.selectionEnd=e.length;var o=document.execCommand("copy");return document.body.removeChild(t),n&&(r.removeAllRanges(),r.addRange(n)),o}function o(){return"undefined"!=typeof document&&"function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")}r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}))},558:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(485);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},598:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(485).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},609:function(e,t,r){"use strict";r.r(t);r(20);var n=r(491),o=(r(522),r(35)),l=r(126),d=r(483),c=r(484),m=r.n(c),h=r(507),f=r.n(h),v=r(488),_=r.n(v),y=r(489),w=r.n(y),x=r(558),$=r.n(x),C=r(598),E=r.n(C),T=r(166),M=r(490),L=r(492),S=r(482),O=(r(169),r(84)),P=r(499),k=r(503),A=r(512);function N(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?N(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):N(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var z={prettyRound:O.o,TX_TYPE:T.a,MULTISIG_WEIGHT_MIN:0,MULTISIG_WEIGHT_MAX:1023,components:{TxForm:P.a,FieldDomain:k.a,ButtonCopy:A.a},directives:{autosize:L.a,checkEmpty:S.a},mixins:[d.validationMixin],data(){return{form:{addressList:[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],threshold:""},isAddressDomainResolving:!1,successTx:null}},validations(){return{form:{addressList:{required:m.a,minLength:_()(1),maxLength:w()(32),$each:{address:{required:m.a,validAddress:this.isAddressDomainResolving?()=>new Promise(()=>0):M.e},weight:{required:m.a,minValue:f()(0),maxValue:$()(1023),integer:E.a}}},threshold:{required:m.a,maxValue:$()(this.weightSum),minValue:f()(this.weightMin)}}}},computed:j(j({},Object(l.b)({balance:"balance"})),{},{multisigData(){var e={addresses:[],weights:[],threshold:this.form.threshold};return this.form.addressList.forEach(t=>{e.addresses.push(t.address),e.weights.push(t.weight)}),e},weightSum(){return this.multisigData.weights.reduce((e,t)=>Number(e)+Number(t))||""},weightMin(){return this.multisigData.weights.reduce((e,t)=>t?Number(e)<Number(t)?Number(e):Number(t):e)||0}}),methods:{getExplorerTxUrl:O.d,addParticipant(){this.form.addressList.push({address:"",weight:""})},removeParticipant(e){this.form.addressList.splice(e,1)},clearForm(){this.form.addressList=[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],this.form.threshold="",this.$v.$reset()}}},F=r(25),I={components:{MultisigCreateForm:Object(F.a)(z,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("TxForm",{attrs:{txData:e.multisigData,$txData:e.$v.form,txType:e.$options.TX_TYPE.CREATE_MULTISIG},on:{"clear-form":function(t){return e.clearForm()},"success-tx":function(t){e.successTx=t}},scopedSlots:e._u([{key:"panel-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Create Multisig Address","multisig.create-title"))+"\n            ")])]},proxy:!0},{key:"extra-panel",fn:function(){return e._l(e.$v.form.addressList.$each.$iter,(function(t,n){return r("div",{key:n,staticClass:"panel__section panel__section--medium"},[r("div",{staticClass:"multisig-participant u-grid u-grid--small u-grid--vertical-margin--small"},[r("div",{staticClass:"multisig-participant__number-cell u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:""},domProps:{value:"#"+(Number(n)+1)}})])]),e._v(" "),r("div",{staticClass:"multisig-participant__address-cell u-cell u-cell--small--3-4"},[r("FieldDomain",{attrs:{$value:t.address,valueType:"address",label:e.$td("Address or domain","form.multisig-create-address")},on:{"update:resolving":function(t){e.isAddressDomainResolving=t}},model:{value:t.address.$model,callback:function(r){e.$set(t.address,"$model","string"==typeof r?r.trim():r)},expression:"v.address.$model"}})],1),e._v(" "),r("div",{staticClass:"multisig-participant__weight-cell u-cell u-cell--small--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":t.weight.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:t.weight.$model,expression:"v.weight.$model",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:t.weight.$model},on:{blur:[function(e){return t.weight.$touch()},function(t){return e.$forceUpdate()}],input:function(r){r.target.composing||e.$set(t.weight,"$model",r.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Weight","form.multisig-create-weight")))])]),e._v(" "),t.weight.$dirty&&!t.weight.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter weight","form.multisig-create-weight-error-required")))]):t.weight.$dirty&&!t.weight.integer?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Weight must be integer","form.multisig-create-weight-error-integer")))]):t.weight.$dirty&&!t.weight.maxValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Maximum weight:","form.multisig-create-weight-error-max"))+" "+e._s(e.$options.MULTISIG_WEIGHT_MAX))]):t.weight.$dirty&&!t.weight.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Minimum weight:","form.multisig-create-weight-error-min"))+" "+e._s(e.$options.MULTISIG_WEIGHT_MIN))]):e._e()]),e._v(" "),r("div",{staticClass:"multisig-participant__remove-cell u-cell"},[n>0?r("button",{staticClass:"multisig-participant__remove u-semantic-button link--opacity",attrs:{type:"button"},on:{click:function(t){return e.removeParticipant(n)}}},[r("img",{attrs:{src:"/img/icon-remove.svg",alt:"Remove address"}})]):e._e()])])])}))},proxy:!0},{key:"default",fn:function(t){t.fee,t.addressBalance;return[r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--large--1-2"},[r("button",{staticClass:"button button--ghost-main button--full",class:{"is-disabled":e.form.addressList.length>=32},attrs:{type:"button"},on:{click:e.addParticipant}},[r("span",{staticClass:"button__content"},[e._v(e._s(e.$td("+ Add More","form.multisig-create-add-participant")))])])]),e._v(" "),r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-hidden-xlarge-down"}),e._v(" "),r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--large--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":e.$v.form.threshold.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.form.threshold,expression:"form.threshold",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.form.threshold},on:{blur:[function(t){return e.$v.form.threshold.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.form,"threshold",t.target.value.trim())}}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Threshold","form.multisig-create-threshold")))])]),e._v(" "),e.$v.form.threshold.$dirty&&!e.$v.form.threshold.required?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter threshold","form.multisig-create-threshold-error-required")))]):e.$v.form.threshold.$dirty&&!e.$v.form.threshold.maxValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Should be greater or equal than Weights Sum","form.multisig-create-threshold-error-max")))]):e.$v.form.threshold.$dirty&&!e.$v.form.threshold.minValue?r("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Should be less or equal than minimal Weight:","form.multisig-create-threshold-error-min"))+" "+e._s(e.weightMin))]):e._e()]),e._v(" "),r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--large--1-4"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",readonly:""},domProps:{value:e.$options.prettyRound(e.weightSum)}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Total weights sum","form.multisig-create-weight-sum")))])])])]}},{key:"submit-title",fn:function(){return[e._v("\n            "+e._s(e.$td("Create Multisig","form.multisig-create-submit"))+"\n        ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-multisignature.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n                "+e._s(e.$td("Create Multisig Address","multisig.create-title"))+"\n            ")])]},proxy:!0},{key:"success-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-feature-multisignature.svg",alt:"",role:"presentation",width:"40",height:"40"}}),e._v("\n                "+e._s(e.$td("Multisig address created","multisig.success-title"))+"\n            ")])]},proxy:!0},e.successTx?{key:"success-modal-body",fn:function(){return[r("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[r("div",{staticClass:"u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("textarea",{directives:[{name:"autosize",rawName:"v-autosize"}],staticClass:"form-field__input is-not-empty",attrs:{autocapitalize:"off",spellcheck:"false",readonly:"",tabindex:"-1",rows:"1"},domProps:{value:"Mx"+e.successTx.tags["tx.created_multisig"]}}),e._v(" "),r("span",{staticClass:"form-field__label"},[e._v(e._s(e.$td("Your multisig address","multisig.success-address")))])])])])]},proxy:!0}:null,e.successTx?{key:"success-modal-button",fn:function(){return[r("ButtonCopy",{staticClass:"button button--main button--full",attrs:{"copy-text":e.successTx.data.multisigAddress}},[r("img",{staticClass:"button__icon",attrs:{src:e.BASE_URL_PREFIX+"/img/icon-copy.svg",width:"24",height:"24",alt:"",role:"presentation"}}),e._v("\n                "+e._s(e.$td("Copy","common.copy"))+"\n            ")]),e._v(" "),r("a",{staticClass:"button button--ghost-main button--full",attrs:{href:e.getExplorerTxUrl(e.successTx.hash),target:"_blank"}},[e._v("\n                "+e._s(e.$td("View transaction","form.success-view-button"))+"\n            ")])]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null).exports},fetch(e){var{app:t,store:r}=e;return r.commit("SET_SECTION_NAME",t.$td("Multisig address","common.page-multisig")),Promise.resolve()},head(){var title=Object(n.a)(this.$store.state.sectionName,this.$i18n.locale),e=this.$td("Create multisignature address.","multisig.seo-description");"en"===this.$i18n.locale||this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e}]}}},R=Object(F.a)(I,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"u-section u-container"},[t("MultisigCreateForm")],1)}),[],!1,null,null,null);t.default=R.exports}}]);