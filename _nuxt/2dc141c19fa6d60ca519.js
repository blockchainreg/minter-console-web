(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{560:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(9);function r(text,t){var e="ru"===t?"Консоль":"Console";return text?o.e+e+". "+text+o.d:o.e+e+o.d}},565:function(t,e,n){"use strict";n(57);var o={props:{isOpen:{type:Boolean,default:!1},hideCloseButton:{type:Boolean,default:!1},modalClass:{type:String,default:""},modalContainerClass:{type:String,default:""},keepMarkup:{type:Boolean,default:!1}},data:function(){return{elFocusedBeforeOpen:null}},watch:{isOpen:function(t){var e=this;t?(this.elFocusedBeforeOpen=document.activeElement,setTimeout((function(){if("function"==typeof e.$el.querySelector){var t=e.$el.querySelector("[data-focus-on-open]");t&&t.focus()}}),0)):setTimeout((function(){e.elFocusedBeforeOpen&&setTimeout((function(){e.elFocusedBeforeOpen.focus(),e.elFocusedBeforeOpen=null}),0)}),0)}},methods:{closeModal:function(){this.$emit("update:isOpen",!1),this.$emit("modalClose")},handleModalClick:function(t){this.$refs.modalContainer&&t.target!==this.$refs.modalContainer&&!this.$refs.modalContainer.contains(t.target)&&this.closeModal()},handleModalKeydown:function(t){"Escape"!==t.code&&27!==t.keyCode||(t.preventDefault(),this.closeModal())}}},r=n(35),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"v-transition-modal"}},[t.isOpen||t.keepMarkup?n("div",{staticClass:"modal-wrap"},[n("transition",{attrs:{name:"v-transition-modal"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen||!t.keepMarkup,expression:"isOpen || !keepMarkup"}],staticClass:"modal u-container u-container--wide",class:t.modalClass,attrs:{tabindex:"-1",role:"dialog"},on:{click:t.handleModalClick,keydown:t.handleModalKeydown}},[t.hideCloseButton?t._e():n("button",{staticClass:"modal__close u-semantic-button link--opacity",attrs:{type:"button"}},[n("span",{staticClass:"modal__close-icon"},[t._v("Close")])]),t._v(" "),n("div",{staticClass:"modal__wrap"},[n("div",{ref:"modalContainer",staticClass:"modal__container",class:t.modalContainerClass},[t._t("default")],2)])])])],1):t._e()])}),[],!1,null,null,null);e.a=component.exports},573:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(175),n(39),n(45),n(5);var o={};var r={inheritAttrs:!1,render:function(t){return this.isLoaded?t("svg",{on:this.$listeners,attrs:Object.assign(this.svgAttrs,(e=this.$attrs,Object.keys(e).reduce((function(t,n){return!1!==e[n]&&null!==e[n]&&void 0!==e[n]&&(t[n]=e[n]),t}),{}))),domProps:{innerHTML:this.svgContent}}):null;var e},props:{src:{type:String,required:!0},transformSource:{type:Function,default:function(svg){return svg}}},data:function(){return{isLoaded:!1,svgAttrs:{},svgContent:""}},watch:{src:function(t){this.inline(t)}},mounted:function(){this.inline(this.src)},methods:{inline:function(t){var e=this;o[t]||(this.isLoaded&&(this.isLoaded=!1,this.$emit("unloaded")),o[t]=this.download(t)),o[t].then((function(svg){e.svgAttrs={};for(var t=svg.attributes,i=t.length-1;i>=0;i--)e.svgAttrs[t[i].name]=t[i].value;e.svgContent=svg.innerHTML,e.isLoaded=!0,e.$nextTick((function(){e.$emit("loaded",e.$el)}))})).catch((function(n){delete o[t],e.$emit("error",n)}))},download:function(t){var e=this;return new Promise((function(n,o){var r=new XMLHttpRequest;r.open("GET",t,!0),r.onload=function(){if(r.status>=200&&r.status<400)try{var t=(new DOMParser).parseFromString(r.responseText,"text/xml").getElementsByTagName("svg")[0];t?(t=e.transformSource(t),n(t)):o(new Error('Loaded file is not valid SVG"'))}catch(t){o(t)}else o(new Error("Error loading SVG"))},r.onerror=o,r.send()}))}}}},578:function(t,e,n){"use strict";var o=n(573),r=n(582),c={components:{InlineSvg:o.a,ButtonCopy:r.a},props:{copyText:{type:String,required:!0}}},l=n(35),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("ButtonCopy",{staticClass:"u-icon u-semantic-button link--opacity",attrs:{"aria-label":"Copy","copy-text":this.copyText}},[e("InlineSvg",{attrs:{src:this.BASE_URL_PREFIX+"/img/icon-copy.svg"}})],1)}),[],!1,null,null,null);e.a=component.exports},580:function(t,e,n){"use strict";function o(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);var n=document.getSelection(),o=n.rangeCount>0&&n.getRangeAt(0);e.select(),e.selectionStart=0,e.selectionEnd=t.length;var r=document.execCommand("copy");return document.body.removeChild(e),o&&(n.removeAllRanges(),n.addRange(o)),r}function r(){return"undefined"!=typeof document&&"function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}))},582:function(t,e,n){"use strict";var o=n(580),r={props:{copyText:{type:String,required:!0}},computed:{isClipboardSupported:function(){return o.b()}},methods:{copy:function(t){o.a(t)&&this.$store.commit("SET_SNACKBAR_ACTIVE")}}},c=n(35),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isClipboardSupported?n("button",{attrs:{type:"button"},on:{click:function(e){return t.copy(t.copyText)}}},[t._t("default")],2):t._e()}),[],!1,null,null,null);e.a=component.exports},684:function(t,e,n){"use strict";n.r(e);n(40),n(47),n(26),n(30),n(66),n(75),n(45),n(31);var o=n(14),r=n(177),c=n(560),l=n(587),d=n(573),m=n(565),f=n(578);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{QrcodeVue:l.a,InlineSvg:d.a,Modal:m.a,ButtonCopyIcon:f.a},fetch:function(t){var e=t.app,n=t.store;return n.dispatch("FETCH_ADDRESS_ENCRYPTED").then((function(){n.commit("SET_SECTION_NAME",e.$td("Account","common.page-account"))}))},head:function(){var title=Object(c.a)(this.$store.state.sectionName,this.$i18n.locale),t=this.$td("Get your account information, such as username, address, private key, and seed phrase.","account.seo-description"),e="en"===this.$i18n.locale?"":"-"+this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:t},{hid:"og-description",name:"og:description",content:t},{hid:"og-image",name:"og:image",content:"".concat(this.BASE_URL_PREFIX,"/img/social-share-account").concat(e,".png")}]}},data:function(){return{visiblePrivate:!1,visibleMnemonic:!1,isAddressQrModalVisible:!1}},computed:h(h({},Object(r.b)(["privateKey","mnemonic","address","addressUrl"])),{},{username:function(){return this.$store.state.user.username},email:function(){return this.$store.state.user.email}})},y=n(35),component=Object(y.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"u-section u-container"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel__header"},[n("h1",{staticClass:"panel__header-title"},[t._v("\n                    "+t._s(t.$td("Account","account.title"))+"\n                ")])]),t._v(" "),n("dl",{staticClass:"dl--table"},[t.username?n("dt",[t._v(t._s(t.$td("Username:","account.username")))]):t._e(),t._v(" "),t.username?n("dd",[t._v("@"+t._s(t.username))]):t._e(),t._v(" "),t.email?n("dt",[t._v(t._s(t.$td("Email:","account.email")))]):t._e(),t._v(" "),t.email?n("dd",[t._v(t._s(t.email))]):t._e(),t._v(" "),n("dt",[t._v(t._s(t.$td("Address:","account.address")))]),t._v(" "),n("dd",{staticClass:"u-icon-wrap"},[n("a",{staticClass:"link--default u-icon-text",attrs:{href:t.addressUrl,target:"_blank"}},[t._v(t._s(t.address))]),t._v(" "),n("ButtonCopyIcon",{staticClass:"u-icon--copy--right",attrs:{"copy-text":t.address}}),t._v(" "),n("button",{staticClass:"u-icon u-icon--qr--right u-semantic-button link--opacity",on:{click:function(e){t.isAddressQrModalVisible=!0}}},[n("InlineSvg",{attrs:{src:t.BASE_URL_PREFIX+"/img/icon-qr.svg",width:"24",height:"24"}})],1)],1)])]),t._v(" "),n("Modal",{staticClass:"qr-modal",attrs:{isOpen:t.isAddressQrModalVisible},on:{"update:isOpen":function(e){t.isAddressQrModalVisible=e},"update:is-open":function(e){t.isAddressQrModalVisible=e}}},[n("QrcodeVue",{staticClass:"qr-modal__layer",attrs:{value:t.address,size:280,level:"L"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);