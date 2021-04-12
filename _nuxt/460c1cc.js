/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1153:function(t,e,r){"use strict";r.r(e);r(1);var n=r(744),o=(r(317),r(88),r(45),r(0)),l=r(139),d=r(730),c=r(731),m=r.n(c),f=r(745),h=r.n(f),v=r(732),_=r.n(v),y=r(736),w=r.n(y),$=r(759),x=r.n($),C=r(902),E=r.n(C),T=r(5),S=r(314),P=r(735),M=r(728),O=(r(315),r(110)),L=r(737),k=r(741),N=r(755);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I={prettyRound:O.u,TX_TYPE:T.a,MULTISIG_WEIGHT_MIN:0,MULTISIG_WEIGHT_MAX:1023,components:{TxForm:L.a,FieldDomain:k.a,ButtonCopy:N.a},directives:{autosize:P.a,checkEmpty:M.a},mixins:[d.validationMixin],data:function(){return{form:{addressList:[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],threshold:""},isAddressDomainResolving:!1,successTx:null}},validations:function(){return{form:{addressList:{required:m.a,minLength:_()(1),maxLength:w()(32),$each:{address:{required:m.a,validAddress:this.isAddressDomainResolving?function(){return new Promise((function(){return 0}))}:S.l},weight:{required:m.a,minValue:h()(0),maxValue:x()(1023),integer:E.a}}},threshold:{required:m.a,maxValue:x()(this.weightSum),minValue:h()(this.weightMin)}}}},computed:A(A({},Object(l.b)({balance:"balance"})),{},{multisigData:function(){var t={addresses:[],weights:[],threshold:this.form.threshold};return this.form.addressList.forEach((function(e){t.addresses.push(e.address),t.weights.push(e.weight)})),t},weightSum:function(){return this.multisigData.weights.reduce((function(t,e){return Number(t)+Number(e)}))||""},weightMin:function(){return this.multisigData.weights.reduce((function(t,e){return e?Number(t)<Number(e)?Number(t):Number(e):t}))||0},createdMultisig:function(){return this.successTx?"Mx".concat(this.successTx.tags["tx.created_multisig"]):""}}),methods:{getExplorerTxUrl:O.i,addParticipant:function(){this.form.addressList.push({address:"",weight:""})},removeParticipant:function(t){this.form.addressList.splice(t,1)},clearForm:function(){this.form.addressList=[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],this.form.threshold="",this.$v.$reset()}}},D=r(54),F=Object(D.a)(I,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("TxForm",{attrs:{txData:t.multisigData,$txData:t.$v.form,txType:t.$options.TX_TYPE.CREATE_MULTISIG},on:{"clear-form":function(e){return t.clearForm()},"success-tx":function(e){t.successTx=e}},scopedSlots:t._u([{key:"panel-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[t._v("\n            "+t._s(t.$td("Create multisig address","multisig.create-title"))+"\n        ")])]},proxy:!0},{key:"extra-panel",fn:function(){return t._l(t.$v.form.addressList.$each.$iter,(function(e,n){return r("div",{key:n,staticClass:"panel__section panel__section--medium"},[r("div",{staticClass:"multisig-participant u-grid u-grid--small u-grid--vertical-margin--small"},[r("div",{staticClass:"multisig-participant__number-cell u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:""},domProps:{value:"#"+(Number(n)+1)}})])]),t._v(" "),r("div",{staticClass:"multisig-participant__address-cell u-cell u-cell--small--3-4"},[r("FieldDomain",{attrs:{$value:e.address,valueType:"address",label:t.$td("Address or domain","form.multisig-create-address")},on:{"update:resolving":function(e){t.isAddressDomainResolving=e}},model:{value:e.address.$model,callback:function(r){t.$set(e.address,"$model","string"==typeof r?r.trim():r)},expression:"v.address.$model"}})],1),t._v(" "),r("div",{staticClass:"multisig-participant__weight-cell u-cell u-cell--small--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":e.weight.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.weight.$model,expression:"v.weight.$model",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.weight.$model},on:{blur:[function(t){return e.weight.$touch()},function(e){return t.$forceUpdate()}],input:function(r){r.target.composing||t.$set(e.weight,"$model",r.target.value.trim())}}}),t._v(" "),r("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("Weight","form.multisig-create-weight")))])]),t._v(" "),e.weight.$dirty&&!e.weight.required?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter weight","form.multisig-create-weight-error-required")))]):e.weight.$dirty&&!e.weight.integer?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Weight must be integer","form.multisig-create-weight-error-integer")))]):e.weight.$dirty&&!e.weight.maxValue?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Maximum weight:","form.multisig-create-weight-error-max"))+" "+t._s(t.$options.MULTISIG_WEIGHT_MAX))]):e.weight.$dirty&&!e.weight.minValue?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Minimum weight:","form.multisig-create-weight-error-min"))+" "+t._s(t.$options.MULTISIG_WEIGHT_MIN))]):t._e()]),t._v(" "),r("div",{staticClass:"multisig-participant__remove-cell u-cell"},[n>0?r("button",{staticClass:"multisig-participant__remove u-semantic-button link--opacity",attrs:{type:"button"},on:{click:function(e){return t.removeParticipant(n)}}},[r("img",{attrs:{src:t.BASE_URL_PREFIX+"/img/icon-remove.svg",alt:"Remove address"}})]):t._e()])])])}))},proxy:!0},{key:"default",fn:function(e){e.fee,e.addressBalance;return[r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--large--1-2"},[r("button",{staticClass:"button button--ghost-main button--full",class:{"is-disabled":t.form.addressList.length>=32},attrs:{type:"button"},on:{click:t.addParticipant}},[r("span",{staticClass:"button__content"},[t._v(t._s(t.$td("+ Add More","form.multisig-create-add-participant")))])])]),t._v(" "),r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-hidden-xlarge-down"}),t._v(" "),r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--large--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":t.$v.form.threshold.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:t.form.threshold,expression:"form.threshold",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:t.form.threshold},on:{blur:[function(e){return t.$v.form.threshold.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"threshold",e.target.value.trim())}}}),t._v(" "),r("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("Threshold","form.multisig-create-threshold")))])]),t._v(" "),t.$v.form.threshold.$dirty&&!t.$v.form.threshold.required?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter threshold","form.multisig-create-threshold-error-required")))]):t.$v.form.threshold.$dirty&&!t.$v.form.threshold.maxValue?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Should be greater or equal than Weights Sum","form.multisig-create-threshold-error-max")))]):t.$v.form.threshold.$dirty&&!t.$v.form.threshold.minValue?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Should be less or equal than minimal Weight:","form.multisig-create-threshold-error-min"))+" "+t._s(t.weightMin))]):t._e()]),t._v(" "),r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--large--1-4"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",readonly:""},domProps:{value:t.$options.prettyRound(t.weightSum)}}),t._v(" "),r("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("Total weights sum","form.multisig-create-weight-sum")))])])])]}},{key:"submit-title",fn:function(){return[t._v("\n        "+t._s(t.$td("Create multisig","form.multisig-create-submit"))+"\n    ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:t.BASE_URL_PREFIX+"/img/icon-feature-multisignature.svg",alt:"",role:"presentation",width:"40",height:"40"}}),t._v("\n            "+t._s(t.$td("Create multisig address","multisig.create-title"))+"\n        ")])]},proxy:!0},{key:"success-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:t.BASE_URL_PREFIX+"/img/icon-feature-multisignature.svg",alt:"",role:"presentation",width:"40",height:"40"}}),t._v("\n            "+t._s(t.$td("Multisig address created","multisig.success-title"))+"\n        ")])]},proxy:!0},t.successTx?{key:"success-modal-body",fn:function(){return[r("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin"},[r("div",{staticClass:"u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("textarea",{directives:[{name:"autosize",rawName:"v-autosize"}],staticClass:"form-field__input is-not-empty",attrs:{autocapitalize:"off",spellcheck:"false",readonly:"",tabindex:"-1",rows:"1"},domProps:{value:t.createdMultisig}}),t._v(" "),r("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("Your multisig address","multisig.success-address")))])])])])]},proxy:!0}:null,t.successTx?{key:"success-modal-button",fn:function(){return[r("ButtonCopy",{staticClass:"button button--main button--full",attrs:{"copy-text":t.createdMultisig}},[r("img",{staticClass:"button__icon",attrs:{src:t.BASE_URL_PREFIX+"/img/icon-copy.svg",width:"24",height:"24",alt:"",role:"presentation"}}),t._v("\n            "+t._s(t.$td("Copy","common.copy"))+"\n        ")]),t._v(" "),r("a",{staticClass:"button button--ghost-main button--full",attrs:{href:t.getExplorerTxUrl(t.successTx.hash),target:"_blank"}},[t._v("\n            "+t._s(t.$td("View transaction","form.success-view-button"))+"\n        ")])]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null).exports;function R(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var U={prettyRound:O.u,TX_TYPE:T.a,MULTISIG_WEIGHT_MIN:0,MULTISIG_WEIGHT_MAX:1023,components:{TxForm:L.a,FieldDomain:k.a},directives:{autosize:P.a,checkEmpty:M.a},mixins:[d.validationMixin],data:function(){return{form:{addressList:[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],threshold:""},isAddressDomainResolving:!1,successTx:null}},validations:function(){return{form:{addressList:{required:m.a,minLength:_()(1),maxLength:w()(32),$each:{address:{required:m.a,validAddress:this.isAddressDomainResolving?function(){return new Promise((function(){return 0}))}:S.l},weight:{required:m.a,minValue:h()(0),maxValue:x()(1023),integer:E.a}}},threshold:{required:m.a,maxValue:x()(this.weightSum),minValue:h()(this.weightMin)}}}},computed:z(z({},Object(l.b)({balance:"balance"})),{},{multisigData:function(){var t={addresses:[],weights:[],threshold:this.form.threshold};return this.form.addressList.forEach((function(e){t.addresses.push(e.address),t.weights.push(e.weight)})),t},weightSum:function(){return this.multisigData.weights.reduce((function(t,e){return Number(t)+Number(e)}))||""},weightMin:function(){return this.multisigData.weights.reduce((function(t,e){return e?Number(t)<Number(e)?Number(t):Number(e):t}))||0}}),methods:{getExplorerTxUrl:O.i,addParticipant:function(){this.form.addressList.push({address:"",weight:""})},removeParticipant:function(t){this.form.addressList.splice(t,1)},clearForm:function(){this.form.addressList=[{address:this.$store.getters.address,weight:""},{address:"",weight:""}],this.form.threshold="",this.$v.$reset()}}},W={components:{MultisigCreateForm:F,MultisigEditForm:Object(D.a)(U,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("TxForm",{attrs:{txData:t.multisigData,$txData:t.$v.form,txType:t.$options.TX_TYPE.EDIT_MULTISIG,alwaysAdvanced:!0},on:{"clear-form":function(e){return t.clearForm()},"success-tx":function(e){t.successTx=e}},scopedSlots:t._u([{key:"panel-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[t._v("\n            "+t._s(t.$td("Edit multisig","multisig.edit-title"))+"\n        ")])]},proxy:!0},{key:"extra-panel",fn:function(){return t._l(t.$v.form.addressList.$each.$iter,(function(e,n){return r("div",{key:n,staticClass:"panel__section panel__section--medium"},[r("div",{staticClass:"multisig-participant u-grid u-grid--small u-grid--vertical-margin--small"},[r("div",{staticClass:"multisig-participant__number-cell u-cell"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{staticClass:"form-field__input is-not-empty",attrs:{type:"text",readonly:""},domProps:{value:"#"+(Number(n)+1)}})])]),t._v(" "),r("div",{staticClass:"multisig-participant__address-cell u-cell u-cell--small--3-4"},[r("FieldDomain",{attrs:{$value:e.address,valueType:"address",label:t.$td("Address or domain","form.multisig-create-address")},on:{"update:resolving":function(e){t.isAddressDomainResolving=e}},model:{value:e.address.$model,callback:function(r){t.$set(e.address,"$model","string"==typeof r?r.trim():r)},expression:"v.address.$model"}})],1),t._v(" "),r("div",{staticClass:"multisig-participant__weight-cell u-cell u-cell--small--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":e.weight.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:e.weight.$model,expression:"v.weight.$model",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:e.weight.$model},on:{blur:[function(t){return e.weight.$touch()},function(e){return t.$forceUpdate()}],input:function(r){r.target.composing||t.$set(e.weight,"$model",r.target.value.trim())}}}),t._v(" "),r("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("Weight","form.multisig-create-weight")))])]),t._v(" "),e.weight.$dirty&&!e.weight.required?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter weight","form.multisig-create-weight-error-required")))]):e.weight.$dirty&&!e.weight.integer?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Weight must be integer","form.multisig-create-weight-error-integer")))]):e.weight.$dirty&&!e.weight.maxValue?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Maximum weight:","form.multisig-create-weight-error-max"))+" "+t._s(t.$options.MULTISIG_WEIGHT_MAX))]):e.weight.$dirty&&!e.weight.minValue?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Minimum weight:","form.multisig-create-weight-error-min"))+" "+t._s(t.$options.MULTISIG_WEIGHT_MIN))]):t._e()]),t._v(" "),r("div",{staticClass:"multisig-participant__remove-cell u-cell"},[n>0?r("button",{staticClass:"multisig-participant__remove u-semantic-button link--opacity",attrs:{type:"button"},on:{click:function(e){return t.removeParticipant(n)}}},[r("img",{attrs:{src:t.BASE_URL_PREFIX+"/img/icon-remove.svg",alt:"Remove address"}})]):t._e()])])])}))},proxy:!0},{key:"default",fn:function(e){e.fee,e.addressBalance;return[r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-cell--large--1-2"},[r("button",{staticClass:"button button--ghost-main button--full",class:{"is-disabled":t.form.addressList.length>=32},attrs:{type:"button"},on:{click:t.addParticipant}},[r("span",{staticClass:"button__content"},[t._v(t._s(t.$td("+ Add More","form.multisig-create-add-participant")))])])]),t._v(" "),r("div",{staticClass:"u-cell u-cell--xlarge--1-4 u-hidden-xlarge-down"}),t._v(" "),r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--large--1-4"},[r("label",{staticClass:"form-field",class:{"is-error":t.$v.form.threshold.$error}},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:t.form.threshold,expression:"form.threshold",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text"},domProps:{value:t.form.threshold},on:{blur:[function(e){return t.$v.form.threshold.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"threshold",e.target.value.trim())}}}),t._v(" "),r("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("Threshold","form.multisig-create-threshold")))])]),t._v(" "),t.$v.form.threshold.$dirty&&!t.$v.form.threshold.required?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Enter threshold","form.multisig-create-threshold-error-required")))]):t.$v.form.threshold.$dirty&&!t.$v.form.threshold.maxValue?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Should be greater or equal than Weights Sum","form.multisig-create-threshold-error-max")))]):t.$v.form.threshold.$dirty&&!t.$v.form.threshold.minValue?r("span",{staticClass:"form-field__error"},[t._v(t._s(t.$td("Should be less or equal than minimal Weight:","form.multisig-create-threshold-error-min"))+" "+t._s(t.weightMin))]):t._e()]),t._v(" "),r("div",{staticClass:"u-cell u-cell--small--1-2 u-cell--large--1-4"},[r("label",{staticClass:"form-field form-field--dashed"},[r("input",{directives:[{name:"check-empty",rawName:"v-check-empty"}],staticClass:"form-field__input",attrs:{type:"text",readonly:""},domProps:{value:t.$options.prettyRound(t.weightSum)}}),t._v(" "),r("span",{staticClass:"form-field__label"},[t._v(t._s(t.$td("Total weights sum","form.multisig-create-weight-sum")))])])])]}},{key:"submit-title",fn:function(){return[t._v("\n        "+t._s(t.$td("Edit multisig","form.multisig-edit-submit"))+"\n    ")]},proxy:!0},{key:"confirm-modal-header",fn:function(){return[r("h1",{staticClass:"panel__header-title"},[r("img",{staticClass:"panel__header-title-icon",attrs:{src:t.BASE_URL_PREFIX+"/img/icon-feature-multisignature.svg",alt:"",role:"presentation",width:"40",height:"40"}}),t._v("\n            "+t._s(t.$td("Edit multisig address","multisig.edit-title"))+"\n        ")])]},proxy:!0}])})}),[],!1,null,null,null).exports},fetch:function(t){var e=t.app;return t.store.commit("SET_SECTION_NAME",e.$td("Multisig address","common.page-multisig")),Promise.resolve()},head:function(){var title=Object(n.a)(this.$store.state.sectionName,this.$i18n.locale),t=this.$td("Create multisignature address.","multisig.seo-description");"en"===this.$i18n.locale||this.$i18n.locale;return{title:title,meta:[{hid:"og-title",name:"og:title",content:title},{hid:"description",name:"description",content:t},{hid:"og-description",name:"og:description",content:t}]}}},G=Object(D.a)(W,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"u-section u-container"},[r("MultisigCreateForm"),t._v(" "),r("MultisigEditForm")],1)}),[],!1,null,null,null);e.default=G.exports},732:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(738);e.default=function(t){return(0,n.withParams)({type:"minLength",min:t},(function(e){return!(0,n.req)(e)||(0,n.len)(e)>=t}))}},735:function(t,e,r){"use strict";var n=r(751),o=r.n(n);e.a={bind:function(t,e,r){"TEXTAREA"===t.tagName&&r.context.$nextTick((function(){o()(t)}))},componentUpdated:function(t,e,r){"TEXTAREA"===t.tagName&&r.context.$nextTick((function(){o.a.update(t)}))},unbind:function(t){o.a.destroy(t)}}},736:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(738);e.default=function(t){return(0,n.withParams)({type:"maxLength",max:t},(function(e){return!(0,n.req)(e)||(0,n.len)(e)<=t}))}},745:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(738);e.default=function(t){return(0,n.withParams)({type:"minValue",min:t},(function(e){return!(0,n.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+t}))}},747:function(t,e,r){var n=r(3),o=r(476),l=r(16),d=r(35),c=r(183).onFreeze,m=Object.freeze;n({target:"Object",stat:!0,forced:l((function(){m(1)})),sham:!o},{freeze:function(t){return m&&d(t)?m(c(t)):t}})},750:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(46),r(71),r(1);var n={};var o={inheritAttrs:!1,render:function(t){return this.svgElSource?t("svg",{on:this.$listeners,attrs:Object.assign(this.getSvgAttrs(this.svgElSource),(e=this.$attrs,Object.keys(e).reduce((function(t,r){return!1!==e[r]&&null!==e[r]&&void 0!==e[r]&&(t[r]=e[r]),t}),{}))),domProps:{innerHTML:this.getSvgContent(this.svgElSource)}}):null;var e},props:{src:{type:String,required:!0},title:{type:String},transformSource:{type:Function,default:function(svg){return svg}},keepDuringLoading:{type:Boolean,default:!0}},data:function(){return{svgElSource:null}},watch:{src:function(t){this.getSource(t)}},mounted:function(){this.getSource(this.src)},methods:{getSvgAttrs:function(t){var e={},r=t.attributes;if(!r)return e;for(var i=r.length-1;i>=0;i--)e[r[i].name]=r[i].value;return e},getSvgContent:function(t){return t=t.cloneNode(!0),t=this.transformSource(t),this.title&&function(svg,title){var t=svg.getElementsByTagName("title");if(t.length)t[0].textContent=title;else{var e=document.createElementNS("http://www.w3.org/2000/svg","title");e.textContent=title,svg.appendChild(e)}}(t,this.title),t.innerHTML},getSource:function(t){var e=this;n[t]||(n[t]=this.download(t)),this.svgElSource&&n[t].isPending()&&!this.keepDuringLoading&&(this.svgElSource=null,this.$emit("unloaded")),n[t].then((function(svg){e.svgElSource=svg,e.$nextTick((function(){e.$emit("loaded",e.$el)}))})).catch((function(r){e.svgElSource&&(e.svgElSource=null,e.$emit("unloaded")),delete n[t],e.$emit("error",r)}))},download:function(t){return function(t){if(t.isPending)return t;var e=!0,r=t.then((function(t){return e=!1,t}),(function(t){throw e=!1,t}));return r.isPending=function(){return e},r}(new Promise((function(e,r){var n=new XMLHttpRequest;n.open("GET",t,!0),n.onload=function(){if(n.status>=200&&n.status<400)try{var t=(new DOMParser).parseFromString(n.responseText,"text/xml").getElementsByTagName("svg")[0];t?e(t):r(new Error('Loaded file is not valid SVG"'))}catch(t){r(t)}else r(new Error("Error loading SVG"))},n.onerror=r,n.send()})))}}}},751:function(t,e,r){var n,o,l;o=[t,e],void 0===(l="function"==typeof(n=function(t,e){"use strict";var r,n,map="function"==typeof Map?new Map:(r=[],n=[],{has:function(t){return r.indexOf(t)>-1},get:function(t){return n[r.indexOf(t)]},set:function(t,e){-1===r.indexOf(t)&&(r.push(t),n.push(e))},delete:function(t){var e=r.indexOf(t);e>-1&&(r.splice(e,1),n.splice(e,1))}}),o=function(t){return new Event(t,{bubbles:!0})};try{new Event("test")}catch(t){o=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}function l(t){if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!map.has(t)){var e=null,r=null,n=null,l=function(){t.clientWidth!==r&&v()},d=function(style){window.removeEventListener("resize",l,!1),t.removeEventListener("input",v,!1),t.removeEventListener("keyup",v,!1),t.removeEventListener("autosize:destroy",d,!1),t.removeEventListener("autosize:update",v,!1),Object.keys(style).forEach((function(e){t.style[e]=style[e]})),map.delete(t)}.bind(t,{height:t.style.height,resize:t.style.resize,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",d,!1),"onpropertychange"in t&&"oninput"in t&&t.addEventListener("keyup",v,!1),window.addEventListener("resize",l,!1),t.addEventListener("input",v,!1),t.addEventListener("autosize:update",v,!1),t.style.overflowX="hidden",t.style.wordWrap="break-word",map.set(t,{destroy:d,update:v}),c()}function c(){var style=window.getComputedStyle(t,null);"vertical"===style.resize?t.style.resize="none":"both"===style.resize&&(t.style.resize="horizontal"),e="content-box"===style.boxSizing?-(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)):parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth),isNaN(e)&&(e=0),v()}function m(e){var r=t.style.width;t.style.width="0px",t.offsetWidth,t.style.width=r,t.style.overflowY=e}function f(t){for(var e=[];t&&t.parentNode&&t.parentNode instanceof Element;)t.parentNode.scrollTop&&e.push({node:t.parentNode,scrollTop:t.parentNode.scrollTop}),t=t.parentNode;return e}function h(){if(0!==t.scrollHeight){var n=f(t),o=document.documentElement&&document.documentElement.scrollTop;t.style.height="",t.style.height=t.scrollHeight+e+"px",r=t.clientWidth,n.forEach((function(t){t.node.scrollTop=t.scrollTop})),o&&(document.documentElement.scrollTop=o)}}function v(){h();var e=Math.round(parseFloat(t.style.height)),r=window.getComputedStyle(t,null),l="content-box"===r.boxSizing?Math.round(parseFloat(r.height)):t.offsetHeight;if(l<e?"hidden"===r.overflowY&&(m("scroll"),h(),l="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight):"hidden"!==r.overflowY&&(m("hidden"),h(),l="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(t,null).height)):t.offsetHeight),n!==l){n=l;var d=o("autosize:resized");try{t.dispatchEvent(d)}catch(t){}}}}function d(t){var e=map.get(t);e&&e.destroy()}function c(t){var e=map.get(t);e&&e.update()}var m=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((m=function(t){return t}).destroy=function(t){return t},m.update=function(t){return t}):((m=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],(function(t){return l(t,e)})),t}).destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],d),t},m.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],c),t}),e.default=m,t.exports=e.default})?n.apply(e,o):n)||(t.exports=l)},758:function(t,e,r){"use strict";function n(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);var r=document.getSelection(),n=r.rangeCount>0&&r.getRangeAt(0);e.select(),e.selectionStart=0,e.selectionEnd=t.length;var o=document.execCommand("copy");return document.body.removeChild(e),n&&(r.removeAllRanges(),r.addRange(n)),o}function o(){return"undefined"!=typeof document&&"function"==typeof document.queryCommandSupported&&document.queryCommandSupported("copy")}r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}))},759:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(738);e.default=function(t){return(0,n.withParams)({type:"maxValue",max:t},(function(e){return!(0,n.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+t}))}},902:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=(0,r(738).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);e.default=n}}]);