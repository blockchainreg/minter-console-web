(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1125:function(e,t,n){"use strict";n.r(t);n(29);var r=n(565),o=(n(10),n(588)),l=n(554),c=n(549),d=n(241),h=n(78),v=n(550),m={components:{QrcodeVue:o.a,Loader:v.a},directives:{checkEmpty:c.a},filters:{pretty:h.r,uppercase:e=>e?e.toUpperCase():e},data:()=>({isFormSending:!1,serverError:"",serverSuccess:""}),computed:{},methods:{submit(){this.isFormSending||(this.isFormSending=!0,this.serverError="",this.serverSuccess="",Object(l.f)(this.$store.getters.address).then((e=>{this.isFormSending=!1,this.serverSuccess=e.toString()})).catch((e=>{console.log(e),this.isFormSending=!1,this.serverError=Object(d.a)(e)})))},getExplorerTxUrl:h.k}},f=n(44),_=Object(f.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"panel__section",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("button",{staticClass:"button button--main button--full",class:{"is-loading":e.isFormSending}},[n("span",{staticClass:"button__content"},[e._v(e._s(e.$td("Get nonce","form.broadcast-nonce-button")))]),e._v(" "),n("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1),e._v(" "),e.serverError?n("div",{staticClass:"form-field__error"},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.serverSuccess?n("div",{staticClass:"u-cell"},[n("p",[n("strong",[e._v(e._s(e.$td("Nonce for a new transaction:","form.broadcast-nonce-got")))]),e._v(" "+e._s(e.serverSuccess)+"\n            ")]),e._v(" "),n("p",[n("qrcode-vue",{attrs:{value:e.serverSuccess,size:100,level:"L"}})],1)]):e._e()])])}),[],!1,null,null,null).exports,y=n(551),$=n(552),C=n.n($),w={components:{FieldQr:n(567).a,Loader:v.a},directives:{checkEmpty:c.a},filters:{pretty:h.r,uppercase:e=>e?e.toUpperCase():e},mixins:[y.validationMixin],data:()=>({isFormSending:!1,serverError:"",serverSuccess:"",form:{signedTx:""}}),validations:()=>({form:{signedTx:{required:C.a}}}),computed:{},methods:{submit(){this.isFormSending||(this.$v.$invalid?this.$v.$touch():(this.isFormSending=!0,this.serverError="",this.serverSuccess="",Object(l.g)(this.form.signedTx).then((e=>{this.isFormSending=!1,this.serverSuccess=e.hash,this.clearForm()})).catch((e=>{console.log(e),this.isFormSending=!1,this.serverError=Object(d.a)(e)}))))},clearForm(){this.form.signedTx="",this.$v.$reset()},getExplorerTxUrl:h.k}},S={components:{BroadcastNonceForm:_,BroadcastSendForm:Object(f.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"panel__section",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("FieldQr",{attrs:{$value:e.$v.form.signedTx,label:e.$td("Signed tx","form.broadcast-tx")},model:{value:e.form.signedTx,callback:function(t){e.$set(e.form,"signedTx","string"==typeof t?t.trim():t)},expression:"form.signedTx"}}),e._v(" "),e.$v.form.signedTx.$dirty&&!e.$v.form.signedTx.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter signed tx","form.broadcast-tx-error-required")))]):e._e()],1),e._v(" "),n("div",{staticClass:"u-cell"},[n("button",{staticClass:"button button--main button--full",class:{"is-loading":e.isFormSending,"is-disabled":e.$v.$invalid}},[n("span",{staticClass:"button__content"},[e._v(e._s(e.$td("Send","form.broadcast-tx-button")))]),e._v(" "),n("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1),e._v(" "),e.serverError?n("div",{staticClass:"form-field__error"},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.serverSuccess?n("div",{staticClass:"u-cell"},[n("strong",[e._v(e._s(e.$td("Tx sent:","form.tx-sent")))]),e._v(" "),n("a",{staticClass:"link--default u-text-break",attrs:{href:e.getExplorerTxUrl(e.serverSuccess),target:"_blank"}},[e._v(e._s(e.serverSuccess))])]):e._e()])])}),[],!1,null,null,null).exports},fetch(e){var{app:t,store:n}=e;return n.commit("SET_SECTION_NAME",t.$td("Broadcast","common.page-broadcast")),Promise.resolve()},head(){var title=Object(r.a)(this.$store.state.sectionName,this.$i18n.locale),e=this.$td("Send tx signed on the offline device","broadcast.seo-description"),t="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/img/social-share-broadcast").concat(t,".png")}]}}},E=Object(f.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"u-section u-container"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Get nonce","broadcast.nonce-title"))+"\n            ")]),e._v(" "),n("p",{staticClass:"panel__header-description"},[e._v("\n                "+e._s(e.$td("Get nonce needed to generate a new tx on an offline device.","broadcast.nonce-description"))+"\n            ")])]),e._v(" "),n("BroadcastNonceForm")],1),e._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Send signed tx","broadcast.tx-title"))+"\n            ")]),e._v(" "),n("p",{staticClass:"panel__header-description"},[e._v("\n                "+e._s(e.$td("Send a tx generated on an offline device.","broadcast.tx-description"))+"\n            ")])]),e._v(" "),n("BroadcastSendForm")],1)])}),[],!1,null,null,null);t.default=E.exports},549:function(e,t,n){"use strict";function r(e){return"SELECT"===e.nodeName.toUpperCase()}function o(e){l(e.target)}function l(e){setTimeout((()=>{e.value.length?e.classList.add("is-not-empty"):e.classList.remove("is-not-empty")}),0)}t.a={bind(e,t,n){l(e),r(e)?e.addEventListener("change",o):e.addEventListener("input",o),t.value&&e.addEventListener(t.value,o)},componentUpdated(e,t){l(e),t.oldValue!==t.value&&e.removeEventListener(t.oldValue,o),t.value&&e.addEventListener(t.value,o)},unbind(e,t){r(e)?e.removeEventListener("change",o):e.removeEventListener("input",o),t.value&&e.removeEventListener(t.value,o)}}},550:function(e,t,n){"use strict";var r={props:{isLoading:{type:Boolean,default:!1}}},o=(n(575),n(44)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isLoading?n("svg",{staticClass:"loader",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"}},[n("circle",{staticClass:"loader__path",attrs:{cx:"14",cy:"14",r:"12"}})]):e._e()}),[],!1,null,null,null);t.a=component.exports},554:function(e,t,n){"use strict";n.d(t,"h",(function(){return j})),n.d(t,"g",(function(){return P})),n.d(t,"f",(function(){return F})),n.d(t,"a",(function(){return V})),n.d(t,"c",(function(){return B})),n.d(t,"b",(function(){return N})),n.d(t,"d",(function(){return D})),n.d(t,"i",(function(){return W})),n.d(t,"j",(function(){return Q})),n.d(t,"e",(function(){return z}));var r=n(31),o=(n(29),n(16),n(20),n(72)),l=n.n(o),c=n(543),d=n(183),h=n.n(d),v=n(603),m=n(604),f=n(595),_=n(596),y=n(608),$=n(610),C=n(598),w=n(611),S=n(593),E=n(594),k=(n(597),n(599)),O=n(4),x=n(49);function L(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?L(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):L(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var M=new v.a({apiType:"gate",baseURL:O.s,chainId:O.h,adapter:Object(c.a)(l.a.defaults.adapter,{enabledByDefault:!1})}),j=Object(m.b)(M),P=Object(f.a)(M),F=Object(_.a)(M),V=Object(m.a)(M),I=new h.a({maxAge:5e3}),R=(e,t)=>e.sellAll?Object($.a)(M)(e,T(T({},t),{},{cache:I})):Object(y.a)(M)(e,T(T({},t),{},{cache:I})),A=(e,t)=>Object(C.a)(M)(e,T(T({},t),{},{cache:I}));function B(e,t){return e.valueToSell&&Number(e.valueToSell)?e.findRoute&&e.swapFrom!==S.c.BANCOR?Object(x.k)(e.coinToSell,e.coinToBuy,{sellAmount:e.valueToSell},T(T({},t),{},{cache:I})).then((n=>{var r;return Promise.all([R(T(T({},e),{},{route:null===(r=n.coins)||void 0===r?void 0:r.map((e=>e.id)).slice(1,-1),swapFrom:n.swapType}),t),Promise.resolve(n.coins)])})).then((e=>{var[t,n]=e;return T(T({},t),{},{route:n})})):R(e,t):Promise.reject(new Error("Value to sell not specified"))}function N(e,t){return e.valueToBuy&&Number(e.valueToBuy)?e.findRoute&&e.swapFrom!==S.c.BANCOR?Object(x.k)(e.coinToSell,e.coinToBuy,{buyAmount:e.valueToBuy},T(T({},t),{},{cache:I})).then((n=>{var r;return Promise.all([A(T(T({},e),{},{route:null===(r=n.coins)||void 0===r?void 0:r.map((e=>e.id)).slice(1,-1),swapFrom:n.swapType}),t),Promise.resolve(n.coins)])})).then((e=>{var[t,n]=e;return T(T({},t),{},{route:n})})):A(e,t):Promise.reject(new Error("Value to buy not specified"))}var U=new h.a({maxAge:3e4}),D=(e,t)=>Object(w.a)(M)(e,{direct:!1},T(T({},t),{},{cache:U})),W=(new h.a({maxAge:6e4}),Object(E.b)(M)),Q=Object(E.c)(M),H=new h.a({maxAge:36e5}),z=()=>Object(k.a)(M)({cache:H})},557:function(e,t,n){"use strict";var r={props:{isOpen:{type:Boolean,default:!1},hideCloseButton:{type:Boolean,default:!1},modalClass:{type:String,default:""},modalContainerClass:{type:String,default:""},keepMarkup:{type:Boolean,default:!1}},data:()=>({elFocusedBeforeOpen:null}),watch:{isOpen(e){e?(this.elFocusedBeforeOpen=document.activeElement,setTimeout((()=>{if("function"==typeof this.$el.querySelector){var e=this.$el.querySelector("[data-focus-on-open]");e&&e.focus()}}),0)):setTimeout((()=>{this.elFocusedBeforeOpen&&setTimeout((()=>{this.elFocusedBeforeOpen.focus(),this.elFocusedBeforeOpen=null}),0)}),0)}},methods:{closeModal(){this.$emit("update:isOpen",!1),this.$emit("modal-close")},handleModalClick(e){this.hideCloseButton||this.$refs.modalContainer&&e.target!==this.$refs.modalContainer&&!this.$refs.modalContainer.contains(e.target)&&this.closeModal()},handleModalKeydown(e){this.hideCloseButton||"Escape"!==e.code&&27!==e.keyCode||(e.preventDefault(),this.closeModal())}}},o=n(44),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"v-transition-modal"}},[e.isOpen||e.keepMarkup?n("div",{staticClass:"modal-wrap"},[n("transition",{attrs:{name:"v-transition-modal"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen||!e.keepMarkup,expression:"isOpen || !keepMarkup"}],staticClass:"modal u-container u-container--wide",class:e.modalClass,attrs:{tabindex:"-1",role:"dialog"},on:{click:e.handleModalClick,keydown:e.handleModalKeydown}},[e.hideCloseButton?e._e():n("button",{staticClass:"modal__close u-semantic-button link--opacity",attrs:{type:"button"}},[n("span",{staticClass:"modal__close-icon"},[e._v("Close")])]),e._v(" "),n("div",{staticClass:"modal__wrap"},[n("div",{ref:"modalContainer",staticClass:"modal__container",class:e.modalContainerClass},[e._t("default")],2)])])])],1):e._e()])}),[],!1,null,null,null);t.a=component.exports},561:function(e,t,n){},564:function(e,t,n){"use strict";n(87),n(578);var r=n(579),o={ideFix:null,imaskAmount:{mask:Number,scale:0,signed:!1,thousandsSeparator:"",padFractionalZeros:!1,normalizeZeros:!1,radix:".",mapToRadix:[","]},directives:{imask:r.a},props:{value:{type:[String,Number],default:""}},data:()=>({maskedValue:""}),computed:{inputListeners:function(){var e=Object.assign({},this.$listeners);return delete e.input,e}},watch:{value(e){e!==this.maskedValue&&this.updateMaskState(e)}},mounted(){this.updateMaskState(this.value)},methods:{updateMaskState(e){this.$refs.input.maskRef.typedValue=e;var t=this.$refs.input.maskRef._value.length;this.$refs.input.maskRef._selection={start:t,end:t}},onAcceptInput(e){this.maskedValue=e.detail._unmaskedValue,this.$emit("input",e.detail._unmaskedValue)}}},l=n(44),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",e._g({directives:[{name:"imask",rawName:"v-imask",value:e.$options.imaskAmount,expression:"$options.imaskAmount"}],ref:"input",attrs:{type:"text",autocapitalize:"off",inputmode:"numeric"},on:{accept:e.onAcceptInput}},e.inputListeners))}),[],!1,null,null,null);t.a=component.exports},565:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(4);function o(text,e){var t="ru"===e?"Консоль":"Console";return text?r.e+t+". "+text+r.d:r.e+t+r.d}},567:function(e,t,n){"use strict";var r=n(576),o=n(549),l=n(600),c=n(601),d=n(550),h=n(557);l.a.WORKER_PATH=c.a;var v={components:{Loader:d.a,Modal:h.a},props:{qrVisible:{type:Boolean,default:!1}},data:()=>({qrScanner:null,cameraError:!1,isModalVisible:!1,isPlaying:!1}),mounted(){l.a.hasCamera().then((()=>{this.$emit("update:qrVisible",!0),this.qrScanner=new l.a(this.$refs.qrVideo,(e=>{this.stopScanQr(),this.isModalVisible=!1,this.$emit("qr-scanned",e)}))})).catch((()=>{this.$emit("update:qrVisible",!1)}))},destroyed(){this.qrScanner&&this.qrScanner.destroy()},methods:{scanQr(){this.isModalVisible=!0,this.$refs.qrVideo.addEventListener("canplay",this.handlePlayStart),this.qrScanner.start().then((()=>{this.cameraError=!1})).catch((()=>{this.cameraError=!0}))},stopScanQr(){this.qrScanner.stop(),this.isPlaying=!1,window.removeEventListener("resize",this.repositionOverlay)},handlePlayStart(){this.repositionOverlay(),this.isPlaying=!0,window.addEventListener("resize",this.repositionOverlay),this.$refs.qrVideo.removeEventListener("canplay",this.handlePlayStart)},repositionOverlay(){requestAnimationFrame((()=>{if(this.$refs.qrVideo){var e=this.$refs.qrVideo.offsetHeight,t=this.$refs.qrVideo.offsetWidth,n=Math.min(e,t);if(0!==n){var r=Math.ceil(2/3*n),o=this.$refs.overlay;o.style.width=r+"px",o.style.height=r+"px",o.style.top=(e-r)/2+"px",o.style.left=(t-r)/2+"px"}}}))}}},m=n(44),f=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.qrScanner,expression:"qrScanner"}],on:{click:function(e){e.preventDefault()}}},[n("button",{staticClass:"form-field__icon u-semantic-button link--opacity",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.scanQr.apply(null,arguments)}}},[n("img",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-qr.svg",alt:"Scan QR Code",width:"24",height:"24"}})]),e._v(" "),n("Modal",{staticClass:"qr-scan__modal",attrs:{"modal-container-class":"qr-scan__modal-container",isOpen:e.isModalVisible,keepMarkup:!0},on:{"update:isOpen":function(t){e.isModalVisible=t},"update:is-open":function(t){e.isModalVisible=t},"modal-close":e.stopScanQr}},[n("div",{staticClass:"qr-scan__wrap"},[n("div",{staticClass:"qr-scan__notice"},[n("Loader",{attrs:{isLoading:!0}}),e._v(" "),e.cameraError?n("div",[e._v("Allow camera access")]):e._e()],1),e._v(" "),n("video",{ref:"qrVideo",staticClass:"qr-scan__video",attrs:{autoplay:"",playsinline:"",muted:""},domProps:{muted:!0}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isPlaying,expression:"isPlaying"}],ref:"overlay",staticClass:"qr-scan__overlay"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 238 238"}},[n("path",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M31.3 2H10a8 8 0 0 0-8 8v21.3M206.8 2H228a8 8 0 0 1 8 8v21.3m0 175.4V228a8 8 0 0 1-8 8h-21.3m-175.4 0H10a8 8 0 0 1-8-8v-21.3"}})])])])])],1)}),[],!1,null,null,null).exports,_=n(564),y={ideFix:null,MAX_ITEM_COUNT:5,components:{VueSimpleSuggest:r.a,QrScan:f,Loader:d.a,InputMaskedInteger:_.a},directives:{checkEmpty:o.a},inheritAttrs:!1,props:{value:{type:[String,Number],required:!0},$value:{type:Object,required:!0},label:{type:String,required:!0},isInteger:{type:Boolean,default:!1},suggestionList:{type:Array,default:()=>[]},suggestionFilter:{type:Function,default:void 0},suggestionContent:{type:Function,default:void 0},suggestionMinInputLength:{type:Number,default:1}},data:()=>({hasCamera:!1}),methods:{handleQrScanned(e){this.$emit("input",e),this.$value.$touch()},handleSuggestionClick(e,t){t.preventDefault()}}},$=Object(m.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"form-field form-field--qr",class:{"is-error":e.$value.$error,"form-field--with-icon":e.hasCamera}},[e.suggestionList&&e.suggestionList.length?n("VueSimpleSuggest",e._b({attrs:{value:e.value,list:e.suggestionList.slice(0),"max-suggestions":e.$options.MAX_ITEM_COUNT,"min-length":e.suggestionMinInputLength,"filter-by-query":!0,filter:e.suggestionFilter,destyled:!0,controls:{showList:[38,40]},"value-attribute":"value","display-attribute":"value"},on:{input:function(t){return e.$emit("input",t)},blur:function(t){e.$value.$touch(),e.$emit("blur",t)},"suggestion-click":e.handleSuggestionClick},scopedSlots:e._u([e.suggestionContent?{key:"suggestion-item",fn:function(t){return[n("span",{domProps:{innerHTML:e._s(e.suggestionContent(t))}})]}}:null],null,!0)},"VueSimpleSuggest",e.$attrs,!1),[n("input",e._b({directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",spellcheck:"false"},domProps:{value:e.value}},"input",e.$attrs,!1)),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.label))])]):[e.isInteger?n("InputMaskedInteger",e._b({directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{value:e.value},on:{input:function(t){return e.$emit("input",t)},blur:function(t){e.$value.$touch(),e.$emit("blur",t)}}},"InputMaskedInteger",e.$attrs,!1)):n("input",e._b({directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",autocapitalize:"off",spellcheck:"false"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)},blur:function(t){e.$value.$touch(),e.$emit("blur",t)}}},"input",e.$attrs,!1)),e._v(" "),n("span",{staticClass:"form-field__label"},[e._v(e._s(e.label))])],e._v(" "),n("Loader",{staticClass:"form-field__icon form-field__icon--loader form-field__icon--second",attrs:{isLoading:e.$value.$pending}}),e._v(" "),n("QrScan",{attrs:{qrVisible:e.hasCamera},on:{"qr-scanned":e.handleQrScanned,"update:qrVisible":function(t){e.hasCamera=t},"update:qr-visible":function(t){e.hasCamera=t}}})],2)}),[],!1,null,null,null);t.a=$.exports},575:function(e,t,n){"use strict";n(561)},600:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(29),n(633),n(16),n(20),n(364);class r{static hasCamera(){return navigator.mediaDevices?navigator.mediaDevices.enumerateDevices().then((e=>e.some((e=>"videoinput"===e.kind)))).catch((()=>!1)):Promise.reject(!1)}constructor(video,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.DEFAULT_CANVAS_SIZE;this.$video=video,this.$canvas=document.createElement("canvas"),this._onDecode=e,this._active=!1,this._paused=!1,this.$canvas.width=t,this.$canvas.height=t,this._sourceRect={x:0,y:0,width:t,height:t},this._onCanPlay=this._onCanPlay.bind(this),this._onPlay=this._onPlay.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this.$video.addEventListener("canplay",this._onCanPlay),this.$video.addEventListener("play",this._onPlay),document.addEventListener("visibilitychange",this._onVisibilityChange),this._qrWorker=new Worker(r.WORKER_PATH)}destroy(){this.$video.removeEventListener("canplay",this._onCanPlay),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),this.stop(),this._qrWorker.postMessage({type:"close"})}start(){if(this._active&&!this._paused)return Promise.resolve();if("https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,this._paused=!1,document.hidden)return Promise.resolve();if(clearTimeout(this._offTimeout),this._offTimeout=null,this.$video.srcObject)return this.$video.play(),Promise.resolve();var e="environment";return this._getCameraStream("environment",!0).catch((()=>(e="user",this._getCameraStream()))).then((t=>{this._isUserFacing(t)&&(e="user"),this.$video.srcObject=t,this._setVideoMirror(e)})).catch((e=>{throw this._active=!1,e}))}stop(){this.pause(),this._active=!1}pause(){this._paused=!0,this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout((()=>{var track=this.$video.srcObject&&this.$video.srcObject.getTracks()[0];track&&(track.stop(),this.$video.srcObject=null,this._offTimeout=null)}),300)))}static scanImage(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,canvas=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=!1,d=new Promise(((l,d)=>{var h,v,m;n||(n=new Worker(r.WORKER_PATH),c=!0,n.postMessage({type:"inversionMode",data:"both"})),v=e=>{"qrResult"===e.data.type&&(n.removeEventListener("message",v),n.removeEventListener("error",m),clearTimeout(h),null!==e.data.data?l(e.data.data):d("QR code not found."))},m=e=>{n.removeEventListener("message",v),n.removeEventListener("error",m),clearTimeout(h);var t=e?e.message||e:"Unknown Error";d("Scanner error: "+t)},n.addEventListener("message",v),n.addEventListener("error",m),h=setTimeout((()=>m("timeout")),3e3),r._loadImage(e).then((image=>{var e=r._getImageData(image,t,canvas,o);n.postMessage({type:"decode",data:e},[e.data.buffer])})).catch(m)}));return t&&l&&(d=d.catch((()=>r.scanImage(e,null,n,canvas,o)))),d=d.finally((()=>{c&&n.postMessage({type:"close"})}))}setGrayscaleWeights(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this._qrWorker.postMessage({type:"grayscaleWeights",data:{red:e,green:t,blue:n,useIntegerApproximation:r}})}setInversionMode(e){this._qrWorker.postMessage({type:"inversionMode",data:e})}_onCanPlay(){this._updateSourceRect(),this.$video.play()}_onPlay(){this._updateSourceRect(),this._scanFrame()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_updateSourceRect(){var e=Math.min(this.$video.videoWidth,this.$video.videoHeight),t=Math.round(2/3*e);this._sourceRect.width=this._sourceRect.height=t,this._sourceRect.x=(this.$video.videoWidth-t)/2,this._sourceRect.y=(this.$video.videoHeight-t)/2}_scanFrame(){if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame((()=>{this.$video.readyState<=1?this._scanFrame():r.scanImage(this.$video,this._sourceRect,this._qrWorker,this.$canvas,!0).then(this._onDecode,(e=>{this._active&&"QR code not found."!==e&&console.error(e)})).then((()=>this._scanFrame()))}))}_getCameraStream(e){var t=[{width:{min:1024}},{width:{min:768}},{}];return e&&(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(e={exact:e}),t.forEach((t=>t.facingMode=e))),this._getMatchingCameraStream(t)}_getMatchingCameraStream(e){return 0===e.length?Promise.reject("Camera not found."):navigator.mediaDevices.getUserMedia({video:e.shift()}).catch((()=>this._getMatchingCameraStream(e)))}_setVideoMirror(e){var t="user"===e?-1:1;this.$video.style.transform="scaleX("+t+")"}_isUserFacing(e){return/front|user|face/i.test(e.getVideoTracks()[0].label)}static _getImageData(image){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,canvas=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];canvas=canvas||document.createElement("canvas");var n=e&&e.x?e.x:0,r=e&&e.y?e.y:0,o=e&&e.width?e.width:image.width||image.videoWidth,l=e&&e.height?e.height:image.height||image.videoHeight;t||canvas.width===o&&canvas.height===l||(canvas.width=o,canvas.height=l);var c=canvas.getContext("2d",{alpha:!1});return c.imageSmoothingEnabled=!1,c.drawImage(image,n,r,o,l,0,0,canvas.width,canvas.height),c.getImageData(0,0,canvas.width,canvas.height)}static _loadImage(e){if(e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement||window.ImageBitmap&&e instanceof window.ImageBitmap||window.OffscreenCanvas&&e instanceof window.OffscreenCanvas)return Promise.resolve(e);if(e instanceof Image)return r._awaitImageLoad(e).then((()=>e));if(e instanceof File||e instanceof URL||"string"==typeof e){var image=new Image;return e instanceof File?image.src=URL.createObjectURL(e):image.src=e,r._awaitImageLoad(image).then((()=>(e instanceof File&&URL.revokeObjectURL(image.src),image)))}return Promise.reject("Unsupported image type.")}static _awaitImageLoad(image){return new Promise(((e,t)=>{var n,r;image.complete&&0!==image.naturalWidth?e():(n=()=>{image.removeEventListener("load",n),image.removeEventListener("error",r),e()},r=()=>{image.removeEventListener("load",n),image.removeEventListener("error",r),t("Image load error")},image.addEventListener("load",n),image.addEventListener("error",r))}))}}r.DEFAULT_CANVAS_SIZE=400,r.WORKER_PATH="qr-scanner-worker.min.js"},601:function(e,t,n){"use strict";t.a=n.p+"6b7d1afd4fb85864e691672bb54a14d3.js"},606:function(e,t){},609:function(e,t){},633:function(e,t,n){"use strict";var r=n(5),o=n(11),l=n(367),c=n(18),d=n(38),h=n(27),v=n(56),m=n(368),f=n(55);if(r({target:"Promise",proto:!0,real:!0,forced:!!l&&c((function(){l.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=v(this,d("Promise")),n=h(e);return this.then(n?function(n){return m(t,e()).then((function(){return n}))}:e,n?function(n){return m(t,e()).then((function(){throw n}))}:e)}}),!o&&h(l)){var _=d("Promise").prototype.finally;l.prototype.finally!==_&&f(l.prototype,"finally",_,{unsafe:!0})}}}]);