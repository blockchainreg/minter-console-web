(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{603:function(e,t,n){"use strict";function r(e){return"SELECT"===e.nodeName.toUpperCase()}function o(e){l(e.target)}function l(e){setTimeout(()=>{e.value.length?e.classList.add("is-not-empty"):e.classList.remove("is-not-empty")},0)}t.a={bind(e,t,n){l(e),r(e)?e.addEventListener("change",o):e.addEventListener("input",o),t.value&&e.addEventListener(t.value,o)},componentUpdated(e,t){l(e),t.oldValue!==t.value&&e.removeEventListener(t.oldValue,o),t.value&&e.addEventListener(t.value,o)},unbind(e,t){r(e)?e.removeEventListener("change",o):e.removeEventListener("input",o),t.value&&e.removeEventListener(t.value,o)}}},612:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(9);function o(text,e){var t="ru"===e?"Консоль":"Console";return text?r.e+t+". "+text+r.d:r.e+t+r.d}},619:function(e,t,n){"use strict";var r={props:{isLoading:{type:Boolean,default:!1}}},o=(n(650),n(37)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return this.isLoading?t("svg",{staticClass:"loader",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"}},[t("circle",{staticClass:"loader__path",attrs:{cx:"14",cy:"14",r:"12"}})]):this._e()}),[],!1,null,null,null);t.a=component.exports},621:function(e,t,n){"use strict";n.d(t,"f",(function(){return _})),n.d(t,"e",(function(){return $})),n.d(t,"d",(function(){return C})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return S})),n.d(t,"b",(function(){return k})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return E}));var r=n(657),o=n(673),l=n(643),c=n(644),d=n(662),m=n(663),v=n(670),h=n(9),f=new r.a({apiType:"gate",baseURL:h.k,chainId:h.f}),_=Object(o.b)(f),$=Object(l.a)(f),C=Object(c.a)(f),y=Object(o.a)(f),S=Object(d.a)(f),k=Object(m.a)(f),x=Object(v.a)(f),E=Object(v.b)(f)},623:function(e,t,n){"use strict";var r={props:{isOpen:{type:Boolean,default:!1},hideCloseButton:{type:Boolean,default:!1},modalClass:{type:String,default:""},modalContainerClass:{type:String,default:""},keepMarkup:{type:Boolean,default:!1}},data:()=>({elFocusedBeforeOpen:null}),watch:{isOpen(e){e?(this.elFocusedBeforeOpen=document.activeElement,setTimeout(()=>{if("function"==typeof this.$el.querySelector){var e=this.$el.querySelector("[data-focus-on-open]");e&&e.focus()}},0)):setTimeout(()=>{this.elFocusedBeforeOpen&&setTimeout(()=>{this.elFocusedBeforeOpen.focus(),this.elFocusedBeforeOpen=null},0)},0)}},methods:{closeModal(){this.$emit("update:isOpen",!1),this.$emit("modal-close")},handleModalClick(e){this.$refs.modalContainer&&e.target!==this.$refs.modalContainer&&!this.$refs.modalContainer.contains(e.target)&&this.closeModal()},handleModalKeydown(e){"Escape"!==e.code&&27!==e.keyCode||(e.preventDefault(),this.closeModal())}}},o=n(37),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"v-transition-modal"}},[e.isOpen||e.keepMarkup?n("div",{staticClass:"modal-wrap"},[n("transition",{attrs:{name:"v-transition-modal"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen||!e.keepMarkup,expression:"isOpen || !keepMarkup"}],staticClass:"modal u-container u-container--wide",class:e.modalClass,attrs:{tabindex:"-1",role:"dialog"},on:{click:e.handleModalClick,keydown:e.handleModalKeydown}},[e.hideCloseButton?e._e():n("button",{staticClass:"modal__close u-semantic-button link--opacity",attrs:{type:"button"}},[n("span",{staticClass:"modal__close-icon"},[e._v("Close")])]),e._v(" "),n("div",{staticClass:"modal__wrap"},[n("div",{ref:"modalContainer",staticClass:"modal__container",class:e.modalContainerClass},[e._t("default")],2)])])])],1):e._e()])}),[],!1,null,null,null);t.a=component.exports},628:function(e,t,n){},630:function(e,t,n){"use strict";n(106),n(625);var r=n(626),o={ideFix:null,imaskAmount:{mask:Number,scale:0,signed:!1,thousandsSeparator:"",padFractionalZeros:!1,normalizeZeros:!1,radix:".",mapToRadix:[","]},directives:{imask:r.a},props:{value:{type:[String,Number],default:""}},data:()=>({maskedValue:""}),computed:{inputListeners:function(){var e=Object.assign({},this.$listeners);return delete e.input,e}},watch:{value(e){e!==this.maskedValue&&this.updateMaskState(e)}},mounted(){this.updateMaskState(this.value)},methods:{updateMaskState(e){this.$refs.input.maskRef.typedValue=e;var t=this.$refs.input.maskRef._value.length;this.$refs.input.maskRef._selection={start:t,end:t}},onAcceptInput(e){this.maskedValue=e.detail._unmaskedValue,this.$emit("input",e.detail._unmaskedValue)}}},l=n(37),component=Object(l.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("input",this._g({directives:[{name:"imask",rawName:"v-imask",value:this.$options.imaskAmount,expression:"$options.imaskAmount"}],ref:"input",attrs:{type:"text",autocapitalize:"off",inputmode:"numeric"},on:{accept:this.onAcceptInput}},this.inputListeners))}),[],!1,null,null,null);t.a=component.exports},633:function(e,t,n){"use strict";var r=n(655),o=n(603),l=n(664),c=n(665),d=n.n(c),m=n(619),v=n(623);l.a.WORKER_PATH=d.a;var h={components:{Loader:m.a,Modal:v.a},props:{qrVisible:{type:Boolean,default:!1}},data:()=>({qrScanner:null,cameraError:!1,isModalVisible:!1,isPlaying:!1}),mounted(){l.a.hasCamera().then(()=>{this.$emit("update:qrVisible",!0),this.qrScanner=new l.a(this.$refs.qrVideo,e=>{this.stopScanQr(),this.isModalVisible=!1,this.$emit("qr-scanned",e)})}).catch(()=>{this.$emit("update:qrVisible",!1)})},destroyed(){this.qrScanner&&this.qrScanner.destroy()},methods:{scanQr(){this.isModalVisible=!0,this.$refs.qrVideo.addEventListener("canplay",this.handlePlayStart),this.qrScanner.start().then(()=>{this.cameraError=!1}).catch(()=>{this.cameraError=!0})},stopScanQr(){this.qrScanner.stop(),this.isPlaying=!1,window.removeEventListener("resize",this.repositionOverlay)},handlePlayStart(){this.repositionOverlay(),this.isPlaying=!0,window.addEventListener("resize",this.repositionOverlay),this.$refs.qrVideo.removeEventListener("canplay",this.handlePlayStart)},repositionOverlay(){requestAnimationFrame(()=>{if(this.$refs.qrVideo){var e=this.$refs.qrVideo.offsetHeight,t=this.$refs.qrVideo.offsetWidth,n=Math.min(e,t);if(0!==n){var r=Math.ceil(2/3*n),o=this.$refs.overlay;o.style.width=r+"px",o.style.height=r+"px",o.style.top=(e-r)/2+"px",o.style.left=(t-r)/2+"px"}}})}}},f=n(37),_=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.qrScanner,expression:"qrScanner"}],on:{click:function(e){e.preventDefault()}}},[n("button",{staticClass:"form-field__icon u-semantic-button link--opacity",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.scanQr(t)}}},[n("img",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-qr.svg",alt:"Scan QR Code",width:"24",height:"24"}})]),e._v(" "),n("Modal",{staticClass:"qr-scan__modal",attrs:{"modal-container-class":"qr-scan__modal-container",isOpen:e.isModalVisible,keepMarkup:!0},on:{"update:isOpen":function(t){e.isModalVisible=t},"update:is-open":function(t){e.isModalVisible=t},"modal-close":e.stopScanQr}},[n("div",{staticClass:"qr-scan__wrap"},[n("div",{staticClass:"qr-scan__notice"},[n("Loader",{attrs:{isLoading:!0}}),e._v(" "),e.cameraError?n("div",[e._v("Allow camera access")]):e._e()],1),e._v(" "),n("video",{ref:"qrVideo",staticClass:"qr-scan__video",attrs:{autoplay:"",playsinline:"",muted:""},domProps:{muted:!0}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isPlaying,expression:"isPlaying"}],ref:"overlay",staticClass:"qr-scan__overlay"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 238 238"}},[n("path",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M31.3 2H10a8 8 0 0 0-8 8v21.3M206.8 2H228a8 8 0 0 1 8 8v21.3m0 175.4V228a8 8 0 0 1-8 8h-21.3m-175.4 0H10a8 8 0 0 1-8-8v-21.3"}})])])])])],1)}),[],!1,null,null,null).exports,$=n(630),C={ideFix:null,MAX_ITEM_COUNT:5,components:{VueSimpleSuggest:r.a,QrScan:_,Loader:m.a,InputMaskedInteger:$.a},directives:{checkEmpty:o.a},inheritAttrs:!1,props:{value:{type:[String,Number],required:!0},$value:{type:Object,required:!0},label:{type:String,required:!0},isInteger:{type:Boolean,default:!1},suggestionList:{type:Array,default:()=>[]},suggestionFilter:{type:Function,default:void 0},suggestionContent:{type:Function,default:void 0},suggestionMinInputLength:{type:Number,default:1}},data:()=>({hasCamera:!1}),methods:{handleQrScanned(e){this.$emit("input",e),this.$value.$touch()},handleSuggestionClick(e,t){t.preventDefault()}}},y=Object(f.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"form-field form-field--qr",class:{"is-error":e.$value.$error,"form-field--with-icon":e.hasCamera}},[e.suggestionList&&e.suggestionList.length?n("VueSimpleSuggest",e._b({attrs:{value:e.value,list:e.suggestionList,"max-suggestions":e.$options.MAX_ITEM_COUNT,"min-length":e.suggestionMinInputLength,"filter-by-query":!0,filter:e.suggestionFilter,destyled:!0,controls:{showList:[38,40]},"value-attribute":"value","display-attribute":"value"},on:{input:function(t){return e.$emit("input",t)},blur:function(t){e.$value.$touch(),e.$emit("blur",t)},"suggestion-click":e.handleSuggestionClick},scopedSlots:e._u([e.suggestionContent?{key:"suggestion-item",fn:function(t){return[n("span",{domProps:{innerHTML:e._s(e.suggestionContent(t))}})]}}:null],null,!0)},"VueSimpleSuggest",e.$attrs,!1),[n("input",e._b({directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",spellcheck:"false"},domProps:{value:e.value}},"input",e.$attrs,!1)),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.label))])]):[e.isInteger?n("InputMaskedInteger",e._b({directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{value:e.value},on:{input:function(t){return e.$emit("input",t)},blur:function(t){e.$value.$touch(),e.$emit("blur",t)}}},"InputMaskedInteger",e.$attrs,!1)):n("input",e._b({directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",autocapitalize:"off",spellcheck:"false"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},blur:function(t){e.$value.$touch(),e.$emit("blur",t)}}},"input",e.$attrs,!1)),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.label))])],e._v(" "),n("Loader",{staticClass:"form-field__icon form-field__icon--loader",attrs:{isLoading:e.$value.$pending}}),e._v(" "),n("QrScan",{attrs:{qrVisible:e.hasCamera},on:{"qr-scanned":e.handleQrScanned,"update:qrVisible":function(t){e.hasCamera=t},"update:qr-visible":function(t){e.hasCamera=t}}})],2)}),[],!1,null,null,null);t.a=y.exports},650:function(e,t,n){"use strict";var r=n(628);n.n(r).a},660:function(e,t){},661:function(e,t){},698:function(e,t,n){"use strict";n.r(t);n(23);var r=n(612),o=(n(6),n(635)),l=n(621),c=n(603),d=n(227),m=n(105),v=n(619),h={components:{QrcodeVue:o.a,Loader:v.a},directives:{checkEmpty:c.a},filters:{pretty:m.j,uppercase:e=>e?e.toUpperCase():e},data:()=>({isFormSending:!1,serverError:"",serverSuccess:""}),computed:{},methods:{submit(){this.isFormSending||(this.isFormSending=!0,this.serverError="",this.serverSuccess="",Object(l.d)(this.$store.getters.address).then(e=>{this.isFormSending=!1,this.serverSuccess=e.toString()}).catch(e=>{console.log(e),this.isFormSending=!1,this.serverError=Object(d.a)(e)}))},getExplorerTxUrl:m.d}},f=n(37),_=Object(f.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"panel__section",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("button",{staticClass:"button button--main button--full",class:{"is-loading":e.isFormSending}},[n("span",{staticClass:"button__content"},[e._v(e._s(e.$td("Get nonce","form.broadcast-nonce-button")))]),e._v(" "),n("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1),e._v(" "),e.serverError?n("div",{staticClass:"form-field__error"},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.serverSuccess?n("div",{staticClass:"u-cell"},[n("p",[n("strong",[e._v(e._s(e.$td("Nonce for a new transaction:","form.broadcast-nonce-got")))]),e._v(" "+e._s(e.serverSuccess)+"\n            ")]),e._v(" "),n("p",[n("qrcode-vue",{attrs:{value:e.serverSuccess,size:100,level:"L"}})],1)]):e._e()])])}),[],!1,null,null,null).exports,$=n(604),C=n(605),y=n.n(C),S={components:{FieldQr:n(633).a,Loader:v.a},directives:{checkEmpty:c.a},filters:{pretty:m.j,uppercase:e=>e?e.toUpperCase():e},mixins:[$.validationMixin],data:()=>({isFormSending:!1,serverError:"",serverSuccess:"",form:{signedTx:""}}),validations:()=>({form:{signedTx:{required:y.a}}}),computed:{},methods:{submit(){this.isFormSending||(this.$v.$invalid?this.$v.$touch():(this.isFormSending=!0,this.serverError="",this.serverSuccess="",Object(l.e)(this.form.signedTx).then(e=>{this.isFormSending=!1,this.serverSuccess=e.hash,this.clearForm()}).catch(e=>{console.log(e),this.isFormSending=!1,this.serverError=Object(d.a)(e)})))},clearForm(){this.form.signedTx="",this.$v.$reset()},getExplorerTxUrl:m.d}},k={components:{BroadcastNonceForm:_,BroadcastSendForm:Object(f.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"panel__section",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("FieldQr",{attrs:{$value:e.$v.form.signedTx,label:e.$td("Signed tx","form.broadcast-tx")},model:{value:e.form.signedTx,callback:function(t){e.$set(e.form,"signedTx","string"==typeof t?t.trim():t)},expression:"form.signedTx"}}),e._v(" "),e.$v.form.signedTx.$dirty&&!e.$v.form.signedTx.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter signed tx","form.broadcast-tx-error-required")))]):e._e()],1),e._v(" "),n("div",{staticClass:"u-cell"},[n("button",{staticClass:"button button--main button--full",class:{"is-loading":e.isFormSending,"is-disabled":e.$v.$invalid}},[n("span",{staticClass:"button__content"},[e._v(e._s(e.$td("Send","form.broadcast-tx-button")))]),e._v(" "),n("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1),e._v(" "),e.serverError?n("div",{staticClass:"form-field__error"},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.serverSuccess?n("div",{staticClass:"u-cell"},[n("strong",[e._v(e._s(e.$td("Tx sent:","form.tx-sent")))]),e._v(" "),n("a",{staticClass:"link--default u-text-break",attrs:{href:e.getExplorerTxUrl(e.serverSuccess),target:"_blank"}},[e._v(e._s(e.serverSuccess))])]):e._e()])])}),[],!1,null,null,null).exports},fetch(e){var{app:t,store:n}=e;return n.commit("SET_SECTION_NAME",t.$td("Broadcast","common.page-broadcast")),Promise.resolve()},head(){var title=Object(r.a)(this.$store.state.sectionName,this.$i18n.locale),e=this.$td("Send tx signed on the offline device","broadcast.seo-description"),t="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/img/social-share-broadcast").concat(t,".png")}]}}},x=Object(f.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"u-section u-container"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Get nonce","broadcast.nonce-title"))+"\n            ")]),e._v(" "),n("p",{staticClass:"panel__header-description"},[e._v("\n                "+e._s(e.$td("Get nonce needed to generate a new tx on an offline device.","broadcast.nonce-description"))+"\n            ")])]),e._v(" "),n("BroadcastNonceForm")],1),e._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Send signed tx","broadcast.tx-title"))+"\n            ")]),e._v(" "),n("p",{staticClass:"panel__header-description"},[e._v("\n                "+e._s(e.$td("Send a tx generated on an offline device.","broadcast.tx-description"))+"\n            ")])]),e._v(" "),n("BroadcastSendForm")],1)])}),[],!1,null,null,null);t.default=x.exports}}]);