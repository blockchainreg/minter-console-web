(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1173:function(e,t,n){"use strict";n.r(t);n(2),n(36);var r=n(643),o=(n(11),n(664)),c=n(633),d=n(625),l=n(306),v=n(102),h=n(628),m={components:{QrcodeVue:o.a,Loader:h.a},directives:{checkEmpty:d.a},filters:{pretty:v.r,uppercase:function(e){return e?e.toUpperCase():e}},data:function(){return{isFormSending:!1,serverError:"",serverSuccess:""}},computed:{},methods:{submit:function(){var e=this;this.isFormSending||(this.isFormSending=!0,this.serverError="",this.serverSuccess="",Object(c.f)(this.$store.getters.address).then((function(t){e.isFormSending=!1,e.serverSuccess=t.toString()})).catch((function(t){console.log(t),e.isFormSending=!1,e.serverError=Object(l.a)(t)})))},getExplorerTxUrl:v.k}},_=n(57),f=Object(_.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"panel__section",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("button",{staticClass:"button button--main button--full",class:{"is-loading":e.isFormSending}},[n("span",{staticClass:"button__content"},[e._v(e._s(e.$td("Get nonce","form.broadcast-nonce-button")))]),e._v(" "),n("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1),e._v(" "),e.serverError?n("div",{staticClass:"form-field__error"},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.serverSuccess?n("div",{staticClass:"u-cell"},[n("p",[n("strong",[e._v(e._s(e.$td("Nonce for a new transaction:","form.broadcast-nonce-got")))]),e._v(" "+e._s(e.serverSuccess)+"\n            ")]),e._v(" "),n("p",[n("qrcode-vue",{attrs:{value:e.serverSuccess,size:100,level:"L"}})],1)]):e._e()])])}),[],!1,null,null,null).exports,y=n(626),$=n(627),E=n.n($),C={components:{FieldQr:n(645).a,Loader:h.a},directives:{checkEmpty:d.a},filters:{pretty:v.r,uppercase:function(e){return e?e.toUpperCase():e}},mixins:[y.validationMixin],data:function(){return{isFormSending:!1,serverError:"",serverSuccess:"",form:{signedTx:""}}},validations:function(){return{form:{signedTx:{required:E.a}}}},computed:{},methods:{submit:function(){var e=this;this.isFormSending||(this.$v.$invalid?this.$v.$touch():(this.isFormSending=!0,this.serverError="",this.serverSuccess="",Object(c.g)(this.form.signedTx).then((function(t){e.isFormSending=!1,e.serverSuccess=t.hash,e.clearForm()})).catch((function(t){console.log(t),e.isFormSending=!1,e.serverError=Object(l.a)(t)}))))},clearForm:function(){this.form.signedTx="",this.$v.$reset()},getExplorerTxUrl:v.k}},S={components:{BroadcastNonceForm:f,BroadcastSendForm:Object(_.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"panel__section",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("FieldQr",{attrs:{$value:e.$v.form.signedTx,label:e.$td("Signed tx","form.broadcast-tx")},model:{value:e.form.signedTx,callback:function(t){e.$set(e.form,"signedTx","string"==typeof t?t.trim():t)},expression:"form.signedTx"}}),e._v(" "),e.$v.form.signedTx.$dirty&&!e.$v.form.signedTx.required?n("span",{staticClass:"form-field__error"},[e._v(e._s(e.$td("Enter signed tx","form.broadcast-tx-error-required")))]):e._e()],1),e._v(" "),n("div",{staticClass:"u-cell"},[n("button",{staticClass:"button button--main button--full",class:{"is-loading":e.isFormSending,"is-disabled":e.$v.$invalid}},[n("span",{staticClass:"button__content"},[e._v(e._s(e.$td("Send","form.broadcast-tx-button")))]),e._v(" "),n("Loader",{staticClass:"button__loader",attrs:{isLoading:!0}})],1),e._v(" "),e.serverError?n("div",{staticClass:"form-field__error"},[e._v(e._s(e.serverError))]):e._e()]),e._v(" "),e.serverSuccess?n("div",{staticClass:"u-cell"},[n("strong",[e._v(e._s(e.$td("Tx sent:","form.tx-sent")))]),e._v(" "),n("a",{staticClass:"link--default u-text-break",attrs:{href:e.getExplorerTxUrl(e.serverSuccess),target:"_blank"}},[e._v(e._s(e.serverSuccess))])]):e._e()])])}),[],!1,null,null,null).exports},fetch:function(e){var t=e.app;return e.store.commit("SET_SECTION_NAME",t.$td("Broadcast","common.page-broadcast")),Promise.resolve()},head:function(){var title=Object(r.a)(this.$store.state.sectionName,this.$i18n.locale),e=this.$td("Send tx signed on the offline device","broadcast.seo-description"),t="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/img/social-share-broadcast").concat(t,".png")}]}}},k=Object(_.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"u-section u-container"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Get nonce","broadcast.nonce-title"))+"\n            ")]),e._v(" "),n("p",{staticClass:"panel__header-description"},[e._v("\n                "+e._s(e.$td("Get nonce needed to generate a new tx on an offline device.","broadcast.nonce-description"))+"\n            ")])]),e._v(" "),n("BroadcastNonceForm")],1),e._v(" "),n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[e._v("\n                "+e._s(e.$td("Send signed tx","broadcast.tx-title"))+"\n            ")]),e._v(" "),n("p",{staticClass:"panel__header-description"},[e._v("\n                "+e._s(e.$td("Send a tx generated on an offline device.","broadcast.tx-description"))+"\n            ")])]),e._v(" "),n("BroadcastSendForm")],1)])}),[],!1,null,null,null);t.default=k.exports},683:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(94),o=n(95),c=(n(2),n(58),n(32),n(37),n(441),function(){function e(video,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.DEFAULT_CANVAS_SIZE;Object(r.a)(this,e),this.$video=video,this.$canvas=document.createElement("canvas"),this._onDecode=t,this._active=!1,this._paused=!1,this.$canvas.width=n,this.$canvas.height=n,this._sourceRect={x:0,y:0,width:n,height:n},this._onCanPlay=this._onCanPlay.bind(this),this._onPlay=this._onPlay.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this.$video.addEventListener("canplay",this._onCanPlay),this.$video.addEventListener("play",this._onPlay),document.addEventListener("visibilitychange",this._onVisibilityChange),this._qrWorker=new Worker(e.WORKER_PATH)}return Object(o.a)(e,[{key:"destroy",value:function(){this.$video.removeEventListener("canplay",this._onCanPlay),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),this.stop(),this._qrWorker.postMessage({type:"close"})}},{key:"start",value:function(){var e=this;if(this._active&&!this._paused)return Promise.resolve();if("https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,this._paused=!1,document.hidden)return Promise.resolve();if(clearTimeout(this._offTimeout),this._offTimeout=null,this.$video.srcObject)return this.$video.play(),Promise.resolve();var t="environment";return this._getCameraStream("environment",!0).catch((function(){return t="user",e._getCameraStream()})).then((function(n){e._isUserFacing(n)&&(t="user"),e.$video.srcObject=n,e._setVideoMirror(t)})).catch((function(t){throw e._active=!1,t}))}},{key:"stop",value:function(){this.pause(),this._active=!1}},{key:"pause",value:function(){var e=this;this._paused=!0,this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout((function(){var track=e.$video.srcObject&&e.$video.srcObject.getTracks()[0];track&&(track.stop(),e.$video.srcObject=null,e._offTimeout=null)}),300)))}},{key:"setGrayscaleWeights",value:function(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this._qrWorker.postMessage({type:"grayscaleWeights",data:{red:e,green:t,blue:n,useIntegerApproximation:r}})}},{key:"setInversionMode",value:function(e){this._qrWorker.postMessage({type:"inversionMode",data:e})}},{key:"_onCanPlay",value:function(){this._updateSourceRect(),this.$video.play()}},{key:"_onPlay",value:function(){this._updateSourceRect(),this._scanFrame()}},{key:"_onVisibilityChange",value:function(){document.hidden?this.pause():this._active&&this.start()}},{key:"_updateSourceRect",value:function(){var e=Math.min(this.$video.videoWidth,this.$video.videoHeight),t=Math.round(2/3*e);this._sourceRect.width=this._sourceRect.height=t,this._sourceRect.x=(this.$video.videoWidth-t)/2,this._sourceRect.y=(this.$video.videoHeight-t)/2}},{key:"_scanFrame",value:function(){var t=this;if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame((function(){t.$video.readyState<=1?t._scanFrame():e.scanImage(t.$video,t._sourceRect,t._qrWorker,t.$canvas,!0).then(t._onDecode,(function(e){t._active&&"QR code not found."!==e&&console.error(e)})).then((function(){return t._scanFrame()}))}))}},{key:"_getCameraStream",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[{width:{min:1024}},{width:{min:768}},{}];return e&&(t&&(e={exact:e}),n.forEach((function(t){return t.facingMode=e}))),this._getMatchingCameraStream(n)}},{key:"_getMatchingCameraStream",value:function(e){var t=this;return 0===e.length?Promise.reject("Camera not found."):navigator.mediaDevices.getUserMedia({video:e.shift()}).catch((function(){return t._getMatchingCameraStream(e)}))}},{key:"_setVideoMirror",value:function(e){var t="user"===e?-1:1;this.$video.style.transform="scaleX("+t+")"}},{key:"_isUserFacing",value:function(e){return/front|user|face/i.test(e.getVideoTracks()[0].label)}}],[{key:"hasCamera",value:function(){return navigator.mediaDevices?navigator.mediaDevices.enumerateDevices().then((function(e){return e.some((function(e){return"videoinput"===e.kind}))})).catch((function(){return!1})):Promise.reject(!1)}},{key:"scanImage",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,canvas=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=arguments.length>5&&void 0!==arguments[5]&&arguments[5],d=!1,l=new Promise((function(c,l){var v,h,m;r||(r=new Worker(e.WORKER_PATH),d=!0,r.postMessage({type:"inversionMode",data:"both"})),h=function(e){"qrResult"===e.data.type&&(r.removeEventListener("message",h),r.removeEventListener("error",m),clearTimeout(v),null!==e.data.data?c(e.data.data):l("QR code not found."))},m=function(e){r.removeEventListener("message",h),r.removeEventListener("error",m),clearTimeout(v);var t=e?e.message||e:"Unknown Error";l("Scanner error: "+t)},r.addEventListener("message",h),r.addEventListener("error",m),v=setTimeout((function(){return m("timeout")}),3e3),e._loadImage(t).then((function(image){var t=e._getImageData(image,n,canvas,o);r.postMessage({type:"decode",data:t},[t.data.buffer])})).catch(m)}));return n&&c&&(l=l.catch((function(){return e.scanImage(t,null,r,canvas,o)}))),l=l.finally((function(){d&&r.postMessage({type:"close"})}))}},{key:"_getImageData",value:function(image){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,canvas=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];canvas=canvas||document.createElement("canvas");var n=e&&e.x?e.x:0,r=e&&e.y?e.y:0,o=e&&e.width?e.width:image.width||image.videoWidth,c=e&&e.height?e.height:image.height||image.videoHeight;t||canvas.width===o&&canvas.height===c||(canvas.width=o,canvas.height=c);var d=canvas.getContext("2d",{alpha:!1});return d.imageSmoothingEnabled=!1,d.drawImage(image,n,r,o,c,0,0,canvas.width,canvas.height),d.getImageData(0,0,canvas.width,canvas.height)}},{key:"_loadImage",value:function(t){if(t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement||window.ImageBitmap&&t instanceof window.ImageBitmap||window.OffscreenCanvas&&t instanceof window.OffscreenCanvas)return Promise.resolve(t);if(t instanceof Image)return e._awaitImageLoad(t).then((function(){return t}));if(t instanceof File||t instanceof URL||"string"==typeof t){var image=new Image;return t instanceof File?image.src=URL.createObjectURL(t):image.src=t,e._awaitImageLoad(image).then((function(){return t instanceof File&&URL.revokeObjectURL(image.src),image}))}return Promise.reject("Unsupported image type.")}},{key:"_awaitImageLoad",value:function(image){return new Promise((function(e,t){var n,r;image.complete&&0!==image.naturalWidth?e():(n=function(){image.removeEventListener("load",n),image.removeEventListener("error",r),e()},r=function(){image.removeEventListener("load",n),image.removeEventListener("error",r),t("Image load error")},image.addEventListener("load",n),image.addEventListener("error",r))}))}}]),e}());c.DEFAULT_CANVAS_SIZE=400,c.WORKER_PATH="qr-scanner-worker.min.js"},684:function(e,t,n){"use strict";t.a=n.p+"6b7d1afd4fb85864e691672bb54a14d3.js"}}]);