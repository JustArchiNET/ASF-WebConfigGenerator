"use strict";(self.webpackChunkasf_config_web=self.webpackChunkasf_config_web||[]).push([[704],{1704:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=function(){var e=this,t=e._self._c;return t("form",{staticClass:"form",attrs:{method:"post",action:"",id:"asf-form",onsubmit:"return false;"}},[e.versions.length>1?t("div",{staticClass:"row align-center"},[t("div",{staticClass:"col col-2"},[t("div",{staticClass:"form-input"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedVersion,expression:"selectedVersion"}],attrs:{id:"version"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedVersion=t.target.multiple?n:n[0]}}},e._l(e.versions,(function(n){return t("option",{domProps:{value:n}},[e._v(e._s(n))])})),0)])])]):e._e(),e._v(" "),e._l(e.schema,(function(n){return!n.advanced||e.displayAdvanced?t("fieldset",[t("legend",[e._v(e._s(e.$t(n.legend)))]),e._v(" "),e._l(n.fields,(function(n){return!n.advanced||e.displayAdvanced?t(n.type,{key:n.field,tag:"component",attrs:{schema:n},on:{update:e.updateModel}}):e._e()}))],2):e._e()})),e._v(" "),t("div",{staticClass:"form-item"},[t("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.downloadJSON.apply(null,arguments)}}},[e._v(e._s(e.$t("button.download")))]),e._v(" "),t("button",{staticClass:"button secondary",class:{outline:!e.displayAdvanced},on:{click:function(t){return t.preventDefault(),e.toggleAdvanced.apply(null,arguments)}}},[e._v(e._s(e.$t("button.advanced")))])])],2)};function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r._withStripped=!0;const i={name:"BotConfig",mixins:[n(8206).Z],data:function(){return{type:"bot"}},computed:{filename:function(){return"".concat(this.model.name,".json")}},methods:{processModelToJSON:function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);return t.GamesPlayedWhileIdle&&t.GamesPlayedWhileIdle.length&&(t.GamesPlayedWhileIdle=t.GamesPlayedWhileIdle.map((function(e){return parseInt(e,10)})).filter((function(e){return!isNaN(e)&&e>0}))),Object.entries(t).forEach((function(e){var n,r,a=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(n,r)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=a[0],i=a[1];"string"==typeof i&&""===i&&delete t[l]})),t.name&&delete t.name,t}}},s=(0,n(1900).Z)(i,r,[],!1,null,null,null).exports}}]);