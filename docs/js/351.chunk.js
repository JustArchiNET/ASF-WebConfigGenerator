"use strict";(self.webpackChunkasf_config_web=self.webpackChunkasf_config_web||[]).push([[351],{8351:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form",attrs:{method:"post",action:"",id:"asf-form",onsubmit:"return false;"}},[t.versions.length>1?n("div",{staticClass:"row align-center"},[n("div",{staticClass:"col col-2"},[n("div",{staticClass:"form-input"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedVersion,expression:"selectedVersion"}],attrs:{id:"version"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedVersion=e.target.multiple?n:n[0]}}},t._l(t.versions,(function(e){return n("option",{domProps:{value:e}},[t._v(t._s(e))])})),0)])])]):t._e(),t._v(" "),t._l(t.schema,(function(e){return!e.advanced||t.displayAdvanced?n("fieldset",[n("legend",[t._v(t._s(t.$t(e.legend)))]),t._v(" "),t._l(e.fields,(function(e){return!e.advanced||t.displayAdvanced?n(e.type,{key:e.field,tag:"component",attrs:{schema:e},on:{update:t.updateModel}}):t._e()}))],2):t._e()})),t._v(" "),n("div",{staticClass:"form-item"},[n("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.downloadJSON.apply(null,arguments)}}},[t._v(t._s(t.$t("button.download")))]),t._v(" "),n("button",{staticClass:"button secondary",class:{outline:!t.displayAdvanced},on:{click:function(e){return e.preventDefault(),t.toggleAdvanced.apply(null,arguments)}}},[t._v(t._s(t.$t("button.advanced")))])])],2)};function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}r._withStripped=!0;const a={name:"ASFConfig",mixins:[n(6138).Z],data:function(){return{type:"asf",filename:"ASF.json"}},methods:{processModelToJSON:function(t){return t.Blacklist&&t.Blacklist.length&&(t.Blacklist=t.Blacklist.map((function(t){return parseInt(t,10)})).filter((function(t){return!isNaN(t)&&t>0}))),Object.entries(t).forEach((function(e){var n,r,a=(r=2,function(t){if(Array.isArray(t))return t}(n=e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(t);!(l=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);l=!0);}catch(t){i=!0,o=t}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(n,r)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=a[0],i=a[1];"string"==typeof i&&""===i&&delete t[l]})),t}}};var l=(0,n(1900).Z)(a,r,[],!1,null,null,null);l.options.__file="src/components/ASFConfig.vue";const i=l.exports}}]);