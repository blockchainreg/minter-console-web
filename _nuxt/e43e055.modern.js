(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{612:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(9);function r(text,e){var t="ru"===e?"Консоль":"Console";return text?o.e+t+". "+text+o.d:o.e+t+o.d}},620:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(106),n(23);var o={};var r={inheritAttrs:!1,render(e){return this.svgElSource?e("svg",{on:this.$listeners,attrs:Object.assign(this.getSvgAttrs(this.svgElSource),(t=this.$attrs,Object.keys(t).reduce((e,n)=>(!1!==t[n]&&null!==t[n]&&void 0!==t[n]&&(e[n]=t[n]),e),{}))),domProps:{innerHTML:this.getSvgContent(this.svgElSource)}}):null;var t},props:{src:{type:String,required:!0},title:{type:String},transformSource:{type:Function,default:svg=>svg},keepDuringLoading:{type:Boolean,default:!0}},data:()=>({svgElSource:null}),watch:{src(e){this.getSource(e)}},mounted(){this.getSource(this.src)},methods:{getSvgAttrs(e){var t={},n=e.attributes;if(!n)return t;for(var i=n.length-1;i>=0;i--)t[n[i].name]=n[i].value;return t},getSvgContent(e){return e=e.cloneNode(!0),e=this.transformSource(e),this.title&&function(svg,title){var e=svg.getElementsByTagName("title");if(e.length)e[0].textContent=title;else{var t=document.createElementNS("http://www.w3.org/2000/svg","title");t.textContent=title,svg.appendChild(t)}}(e,this.title),e.innerHTML},getSource(e){o[e]||(o[e]=this.download(e)),this.svgElSource&&o[e].isPending()&&!this.keepDuringLoading&&(this.svgElSource=null,this.$emit("unloaded")),o[e].then(svg=>{this.svgElSource=svg,this.$nextTick(()=>{this.$emit("loaded",this.$el)})}).catch(t=>{this.svgElSource&&(this.svgElSource=null,this.$emit("unloaded")),delete o[e],this.$emit("error",t)})},download:e=>function(e){if(e.isPending)return e;var t=!0,n=e.then(e=>(t=!1,e),e=>{throw t=!1,e});return n.isPending=function(){return t},n}(new Promise((t,n)=>{var o=new XMLHttpRequest;o.open("GET",e,!0),o.onload=()=>{if(o.status>=200&&o.status<400)try{var e=(new DOMParser).parseFromString(o.responseText,"text/xml").getElementsByTagName("svg")[0];e?t(e):n(new Error('Loaded file is not valid SVG"'))}catch(e){n(e)}else n(new Error("Error loading SVG"))},o.onerror=n,o.send()}))}}},622:function(e,t,n){"use strict";function o(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var n=document.getSelection(),o=n.rangeCount>0&&n.getRangeAt(0);t.select(),t.selectionStart=0,t.selectionEnd=e.length;var r=document.execCommand("copy");return document.body.removeChild(t),o&&(n.removeAllRanges(),n.addRange(o)),r}function r(){return"undefined"!=typeof document&&"function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}))},623:function(e,t,n){"use strict";var o={props:{isOpen:{type:Boolean,default:!1},hideCloseButton:{type:Boolean,default:!1},modalClass:{type:String,default:""},modalContainerClass:{type:String,default:""},keepMarkup:{type:Boolean,default:!1}},data:()=>({elFocusedBeforeOpen:null}),watch:{isOpen(e){e?(this.elFocusedBeforeOpen=document.activeElement,setTimeout(()=>{if("function"==typeof this.$el.querySelector){var e=this.$el.querySelector("[data-focus-on-open]");e&&e.focus()}},0)):setTimeout(()=>{this.elFocusedBeforeOpen&&setTimeout(()=>{this.elFocusedBeforeOpen.focus(),this.elFocusedBeforeOpen=null},0)},0)}},methods:{closeModal(){this.$emit("update:isOpen",!1),this.$emit("modal-close")},handleModalClick(e){this.$refs.modalContainer&&e.target!==this.$refs.modalContainer&&!this.$refs.modalContainer.contains(e.target)&&this.closeModal()},handleModalKeydown(e){"Escape"!==e.code&&27!==e.keyCode||(e.preventDefault(),this.closeModal())}}},r=n(37),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"v-transition-modal"}},[e.isOpen||e.keepMarkup?n("div",{staticClass:"modal-wrap"},[n("transition",{attrs:{name:"v-transition-modal"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen||!e.keepMarkup,expression:"isOpen || !keepMarkup"}],staticClass:"modal u-container u-container--wide",class:e.modalClass,attrs:{tabindex:"-1",role:"dialog"},on:{click:e.handleModalClick,keydown:e.handleModalKeydown}},[e.hideCloseButton?e._e():n("button",{staticClass:"modal__close u-semantic-button link--opacity",attrs:{type:"button"}},[n("span",{staticClass:"modal__close-icon"},[e._v("Close")])]),e._v(" "),n("div",{staticClass:"modal__wrap"},[n("div",{ref:"modalContainer",staticClass:"modal__container",class:e.modalContainerClass},[e._t("default")],2)])])])],1):e._e()])}),[],!1,null,null,null);t.a=component.exports},629:function(e,t,n){"use strict";var o=n(620),r=n(634),l={components:{InlineSvg:o.a,ButtonCopy:r.a},props:{copyText:{type:String,required:!0}}},c=n(37),component=Object(c.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("ButtonCopy",{staticClass:"u-icon u-semantic-button link--opacity",attrs:{"aria-label":"Copy","copy-text":this.copyText}},[t("InlineSvg",{attrs:{src:this.BASE_URL_PREFIX+"/img/icon-copy.svg"}})],1)}),[],!1,null,null,null);t.a=component.exports},634:function(e,t,n){"use strict";var o=n(622),r={props:{copyText:{type:String,required:!0}},computed:{isClipboardSupported:()=>o.b()},methods:{copy(e){o.a(e)&&this.$store.commit("SET_SNACKBAR_ACTIVE")}}},l=n(37),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isClipboardSupported?n("button",{attrs:{type:"button"},on:{click:function(t){return e.copy(e.copyText)}}},[e._t("default")],2):e._e()}),[],!1,null,null,null);t.a=component.exports},702:function(e,t,n){"use strict";n.r(t);var o=n(30),r=n(107),l=n(612),c=n(635),d=n(620),m=n(623),h=n(629);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={components:{QrcodeVue:c.a,InlineSvg:d.a,Modal:m.a,ButtonCopyIcon:h.a},fetch(e){var{app:t,store:n}=e;return n.dispatch("FETCH_ADDRESS_ENCRYPTED").then(()=>{n.commit("SET_SECTION_NAME",t.$td("Account","common.page-account"))})},head(){var title=Object(l.a)(this.$store.state.sectionName,this.$i18n.locale),e=this.$td("Get your account information, such as username, address, private key, and seed phrase.","account.seo-description"),t="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:e},{hid:"og-description",name:"og:description",content:e},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/img/social-share-account").concat(t,".png")}]}},data:()=>({visiblePrivate:!1,visibleMnemonic:!1,isAddressQrModalVisible:!1}),computed:f(f({},Object(r.b)(["privateKey","mnemonic","address","addressUrl"])),{},{username(){return this.$store.state.user.username},email(){return this.$store.state.user.email}})},y=n(37),component=Object(y.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"u-section u-container"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[e._v("\n                    "+e._s(e.$td("Account","account.title"))+"\n                ")])]),e._v(" "),n("dl",{staticClass:"dl--table"},[e.username?n("dt",[e._v(e._s(e.$td("Username:","account.username")))]):e._e(),e._v(" "),e.username?n("dd",[e._v("@"+e._s(e.username))]):e._e(),e._v(" "),e.email?n("dt",[e._v(e._s(e.$td("Email:","account.email")))]):e._e(),e._v(" "),e.email?n("dd",[e._v(e._s(e.email))]):e._e(),e._v(" "),n("dt",[e._v(e._s(e.$td("Address:","account.address")))]),e._v(" "),n("dd",{staticClass:"u-icon-wrap"},[n("a",{staticClass:"link--default u-icon-text",attrs:{href:e.addressUrl,target:"_blank"}},[e._v(e._s(e.address))]),e._v(" "),n("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":e.address}}),e._v(" "),n("button",{staticClass:"u-icon u-icon--qr--right u-semantic-button link--opacity",on:{click:function(t){e.isAddressQrModalVisible=!0}}},[n("InlineSvg",{attrs:{src:e.BASE_URL_PREFIX+"/img/icon-qr.svg",width:"24",height:"24"}})],1)],1)])]),e._v(" "),n("Modal",{staticClass:"qr-modal",attrs:{isOpen:e.isAddressQrModalVisible},on:{"update:isOpen":function(t){e.isAddressQrModalVisible=t},"update:is-open":function(t){e.isAddressQrModalVisible=t}}},[n("QrcodeVue",{staticClass:"qr-modal__layer",attrs:{value:e.address,size:280,level:"L"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);