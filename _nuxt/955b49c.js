/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1183:function(e,t,n){"use strict";var o=n(0),r=n(16),c=n(33),d=n(354),l=n(501),h=n(26);o({target:"Promise",stat:!0},{allSettled:function(e){var t=this,n=d.f(t),o=n.resolve,v=n.reject,f=l((function(){var n=c(t.resolve),d=[],l=0,v=1;h(e,(function(e){var c=l++,h=!1;v++,r(n,t,e).then((function(e){h||(h=!0,d[c]={status:"fulfilled",value:e},--v||o(d))}),(function(e){h||(h=!0,d[c]={status:"rejected",reason:e},--v||o(d))}))})),--v||o(d)}));return f.error&&v(f.value),n.promise}})},686:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(727);t.default=function(e){return(0,o.withParams)({type:"minLength",min:e},(function(t){return!(0,o.req)(t)||(0,o.len)(t)>=e}))}},693:function(e,t,n){"use strict";var o=n(774),r=n.n(o);t.a={bind:function(e,t,n){"TEXTAREA"===e.tagName&&n.context.$nextTick((function(){r()(e)}))},componentUpdated:function(e,t,n){"TEXTAREA"===e.tagName&&n.context.$nextTick((function(){r.a.update(e)}))},unbind:function(e){r.a.destroy(e)}}},694:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(727);t.default=function(e){return(0,o.withParams)({type:"maxLength",max:e},(function(t){return!(0,o.req)(t)||(0,o.len)(t)<=e}))}},709:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(727);t.default=function(e){return(0,o.withParams)({type:"minValue",min:e},(function(t){return!(0,o.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(49),n(38),n(2);var o={};var r={name:"InlineSvg",inheritAttrs:!1,render:function(e){return this.svgElSource?e("svg",{on:this.$listeners,attrs:Object.assign(this.getSvgAttrs(this.svgElSource),(t=this.$attrs,Object.keys(t).reduce((function(e,n){return!1!==t[n]&&null!==t[n]&&void 0!==t[n]&&(e[n]=t[n]),e}),{}))),domProps:{innerHTML:this.getSvgContent(this.svgElSource)}}):null;var t},props:{src:{type:String,required:!0},title:{type:String},transformSource:{type:Function,default:function(svg){return svg}},keepDuringLoading:{type:Boolean,default:!0}},data:function(){return{svgElSource:null}},watch:{src:function(e){this.getSource(e)}},mounted:function(){this.getSource(this.src)},methods:{getSvgAttrs:function(e){var t={},n=e.attributes;if(!n)return t;for(var i=n.length-1;i>=0;i--)t[n[i].name]=n[i].value;return t},getSvgContent:function(e){return e=e.cloneNode(!0),e=this.transformSource(e),this.title&&function(svg,title){var e=svg.getElementsByTagName("title");if(e.length)e[0].textContent=title;else{var t=document.createElementNS("http://www.w3.org/2000/svg","title");t.textContent=title,svg.appendChild(t)}}(e,this.title),e.innerHTML},getSource:function(e){var t=this;o[e]||(o[e]=this.download(e)),this.svgElSource&&o[e].isPending()&&!this.keepDuringLoading&&(this.svgElSource=null,this.$emit("unloaded")),o[e].then((function(svg){t.svgElSource=svg,t.$nextTick((function(){t.$emit("loaded",t.$el)}))})).catch((function(n){t.svgElSource&&(t.svgElSource=null,t.$emit("unloaded")),delete o[e],t.$emit("error",n)}))},download:function(e){return function(e){if(e.isPending)return e;var t=!0,n=e.then((function(e){return t=!1,e}),(function(e){throw t=!1,e}));return n.isPending=function(){return t},n}(new Promise((function(t,n){var o=new XMLHttpRequest;o.open("GET",e,!0),o.onload=function(){if(o.status>=200&&o.status<400)try{var e=(new DOMParser).parseFromString(o.responseText,"text/xml").getElementsByTagName("svg")[0];e?t(e):n(new Error('Loaded file is not valid SVG"'))}catch(e){n(e)}else n(new Error("Error loading SVG"))},o.onerror=n,o.send()})))}}}},725:function(e,t,n){"use strict";function o(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection(),o=n.rangeCount>0&&n.getRangeAt(0);t.select(),t.selectionStart=0,t.selectionEnd=e.length;var r=document.execCommand("copy");return document.body.removeChild(t),o&&(n.removeAllRanges(),n.addRange(o)),r}function r(){return"undefined"!=typeof document&&"function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}))},744:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(101),r=n(102),c=(n(2),n(60),n(24),n(32),n(488),function(){function e(video,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.DEFAULT_CANVAS_SIZE;Object(o.a)(this,e),this.$video=video,this.$canvas=document.createElement("canvas"),this._onDecode=t,this._active=!1,this._paused=!1,this.$canvas.width=n,this.$canvas.height=n,this._sourceRect={x:0,y:0,width:n,height:n},this._onCanPlay=this._onCanPlay.bind(this),this._onPlay=this._onPlay.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this.$video.addEventListener("canplay",this._onCanPlay),this.$video.addEventListener("play",this._onPlay),document.addEventListener("visibilitychange",this._onVisibilityChange),this._qrWorker=new Worker(e.WORKER_PATH)}return Object(r.a)(e,[{key:"destroy",value:function(){this.$video.removeEventListener("canplay",this._onCanPlay),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),this.stop(),this._qrWorker.postMessage({type:"close"})}},{key:"start",value:function(){var e=this;if(this._active&&!this._paused)return Promise.resolve();if("https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,this._paused=!1,document.hidden)return Promise.resolve();if(clearTimeout(this._offTimeout),this._offTimeout=null,this.$video.srcObject)return this.$video.play(),Promise.resolve();var t="environment";return this._getCameraStream("environment",!0).catch((function(){return t="user",e._getCameraStream()})).then((function(n){e._isUserFacing(n)&&(t="user"),e.$video.srcObject=n,e._setVideoMirror(t)})).catch((function(t){throw e._active=!1,t}))}},{key:"stop",value:function(){this.pause(),this._active=!1}},{key:"pause",value:function(){var e=this;this._paused=!0,this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout((function(){var track=e.$video.srcObject&&e.$video.srcObject.getTracks()[0];track&&(track.stop(),e.$video.srcObject=null,e._offTimeout=null)}),300)))}},{key:"setGrayscaleWeights",value:function(e,t,n){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this._qrWorker.postMessage({type:"grayscaleWeights",data:{red:e,green:t,blue:n,useIntegerApproximation:o}})}},{key:"setInversionMode",value:function(e){this._qrWorker.postMessage({type:"inversionMode",data:e})}},{key:"_onCanPlay",value:function(){this._updateSourceRect(),this.$video.play()}},{key:"_onPlay",value:function(){this._updateSourceRect(),this._scanFrame()}},{key:"_onVisibilityChange",value:function(){document.hidden?this.pause():this._active&&this.start()}},{key:"_updateSourceRect",value:function(){var e=Math.min(this.$video.videoWidth,this.$video.videoHeight),t=Math.round(2/3*e);this._sourceRect.width=this._sourceRect.height=t,this._sourceRect.x=(this.$video.videoWidth-t)/2,this._sourceRect.y=(this.$video.videoHeight-t)/2}},{key:"_scanFrame",value:function(){var t=this;if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame((function(){t.$video.readyState<=1?t._scanFrame():e.scanImage(t.$video,t._sourceRect,t._qrWorker,t.$canvas,!0).then(t._onDecode,(function(e){t._active&&"QR code not found."!==e&&console.error(e)})).then((function(){return t._scanFrame()}))}))}},{key:"_getCameraStream",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[{width:{min:1024}},{width:{min:768}},{}];return e&&(t&&(e={exact:e}),n.forEach((function(t){return t.facingMode=e}))),this._getMatchingCameraStream(n)}},{key:"_getMatchingCameraStream",value:function(e){var t=this;return 0===e.length?Promise.reject("Camera not found."):navigator.mediaDevices.getUserMedia({video:e.shift()}).catch((function(){return t._getMatchingCameraStream(e)}))}},{key:"_setVideoMirror",value:function(e){var t="user"===e?-1:1;this.$video.style.transform="scaleX("+t+")"}},{key:"_isUserFacing",value:function(e){return/front|user|face/i.test(e.getVideoTracks()[0].label)}}],[{key:"hasCamera",value:function(){return navigator.mediaDevices?navigator.mediaDevices.enumerateDevices().then((function(e){return e.some((function(e){return"videoinput"===e.kind}))})).catch((function(){return!1})):Promise.reject(!1)}},{key:"scanImage",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,canvas=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=arguments.length>5&&void 0!==arguments[5]&&arguments[5],d=!1,l=new Promise((function(c,l){var h,v,f;o||(o=new Worker(e.WORKER_PATH),d=!0,o.postMessage({type:"inversionMode",data:"both"})),v=function(e){"qrResult"===e.data.type&&(o.removeEventListener("message",v),o.removeEventListener("error",f),clearTimeout(h),null!==e.data.data?c(e.data.data):l("QR code not found."))},f=function(e){o.removeEventListener("message",v),o.removeEventListener("error",f),clearTimeout(h);var t=e?e.message||e:"Unknown Error";l("Scanner error: "+t)},o.addEventListener("message",v),o.addEventListener("error",f),h=setTimeout((function(){return f("timeout")}),3e3),e._loadImage(t).then((function(image){var t=e._getImageData(image,n,canvas,r);o.postMessage({type:"decode",data:t},[t.data.buffer])})).catch(f)}));return n&&c&&(l=l.catch((function(){return e.scanImage(t,null,o,canvas,r)}))),l=l.finally((function(){d&&o.postMessage({type:"close"})}))}},{key:"_getImageData",value:function(image){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,canvas=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=arguments.length>3&&void 0!==arguments[3]&&arguments[3];canvas=canvas||document.createElement("canvas");var n=e&&e.x?e.x:0,o=e&&e.y?e.y:0,r=e&&e.width?e.width:image.width||image.videoWidth,c=e&&e.height?e.height:image.height||image.videoHeight;t||canvas.width===r&&canvas.height===c||(canvas.width=r,canvas.height=c);var d=canvas.getContext("2d",{alpha:!1});return d.imageSmoothingEnabled=!1,d.drawImage(image,n,o,r,c,0,0,canvas.width,canvas.height),d.getImageData(0,0,canvas.width,canvas.height)}},{key:"_loadImage",value:function(t){if(t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement||window.ImageBitmap&&t instanceof window.ImageBitmap||window.OffscreenCanvas&&t instanceof window.OffscreenCanvas)return Promise.resolve(t);if(t instanceof Image)return e._awaitImageLoad(t).then((function(){return t}));if(t instanceof File||t instanceof URL||"string"==typeof t){var image=new Image;return t instanceof File?image.src=URL.createObjectURL(t):image.src=t,e._awaitImageLoad(image).then((function(){return t instanceof File&&URL.revokeObjectURL(image.src),image}))}return Promise.reject("Unsupported image type.")}},{key:"_awaitImageLoad",value:function(image){return new Promise((function(e,t){var n,o;image.complete&&0!==image.naturalWidth?e():(n=function(){image.removeEventListener("load",n),image.removeEventListener("error",o),e()},o=function(){image.removeEventListener("load",n),image.removeEventListener("error",o),t("Image load error")},image.addEventListener("load",n),image.addEventListener("error",o))}))}}]),e}());c.DEFAULT_CANVAS_SIZE=400,c.WORKER_PATH="qr-scanner-worker.min.js"},745:function(e,t,n){"use strict";t.a=n.p+"6b7d1afd4fb85864e691672bb54a14d3.js"},746:function(e,t,n){n(1183)},774:function(e,t,n){var o,r,c;r=[e,t],void 0===(c="function"==typeof(o=function(e,t){"use strict";var n,o,map="function"==typeof Map?new Map:(n=[],o=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return o[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),o.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),o.splice(t,1))}}),r=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){r=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function c(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!map.has(e)){var t=null,n=null,o=null,c=function(){e.clientWidth!==n&&m()},d=function(style){window.removeEventListener("resize",c,!1),e.removeEventListener("input",m,!1),e.removeEventListener("keyup",m,!1),e.removeEventListener("autosize:destroy",d,!1),e.removeEventListener("autosize:update",m,!1),Object.keys(style).forEach((function(t){e.style[t]=style[t]})),map.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",d,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",m,!1),window.addEventListener("resize",c,!1),e.addEventListener("input",m,!1),e.addEventListener("autosize:update",m,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",map.set(e,{destroy:d,update:m}),l()}function l(){var style=window.getComputedStyle(e,null);"vertical"===style.resize?e.style.resize="none":"both"===style.resize&&(e.style.resize="horizontal"),t="content-box"===style.boxSizing?-(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)):parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth),isNaN(t)&&(t=0),m()}function h(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function v(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function f(){if(0!==e.scrollHeight){var o=v(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+t+"px",n=e.clientWidth,o.forEach((function(e){e.node.scrollTop=e.scrollTop})),r&&(document.documentElement.scrollTop=r)}}function m(){f();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),c="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(c<t?"hidden"===n.overflowY&&(h("scroll"),f(),c="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(h("hidden"),f(),c="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),o!==c){o=c;var d=r("autosize:resized");try{e.dispatchEvent(d)}catch(e){}}}}function d(e){var t=map.get(e);t&&t.destroy()}function l(e){var t=map.get(e);t&&t.update()}var h=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((h=function(e){return e}).destroy=function(e){return e},h.update=function(e){return e}):((h=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return c(e,t)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e},h.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e}),t.default=h,e.exports=t.default})?o.apply(t,r):o)||(e.exports=c)}}]);