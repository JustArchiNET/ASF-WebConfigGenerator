(self.webpackChunkasf_config_web=self.webpackChunkasf_config_web||[]).push([[42],{2042:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"form",attrs:{method:"post",action:"",id:"asf-form",onsubmit:"return false;"}},[e.versions.length>1?n("div",{staticClass:"row align-center"},[n("div",{staticClass:"col col-2"},[n("div",{staticClass:"form-input"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedVersion,expression:"selectedVersion"}],attrs:{id:"version"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedVersion=t.target.multiple?n:n[0]}}},e._l(e.versions,(function(t){return n("option",{domProps:{value:t}},[e._v(e._s(t))])})),0)])])]):e._e(),e._v(" "),e._l(e.schema,(function(t){return!t.advanced||e.displayAdvanced?n("fieldset",[n("legend",[e._v(e._s(e.$t(t.legend)))]),e._v(" "),e._l(t.fields,(function(t){return!t.advanced||e.displayAdvanced?n(t.type,{key:t.field,tag:"component",attrs:{schema:t},on:{update:e.updateModel}}):e._e()}))],2):e._e()})),e._v(" "),n("div",{staticClass:"form-item"},[n("button",{staticClass:"button",on:{click:function(t){return t.preventDefault(),e.downloadJSON(t)}}},[e._v(e._s(e.$t("button.download")))]),e._v(" "),n("button",{staticClass:"button secondary",class:{outline:!e.displayAdvanced},on:{click:function(t){return t.preventDefault(),e.toggleAdvanced(t)}}},[e._v(e._s(e.$t("button.advanced")))])])],2)};function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r._withStripped=!0;const l={name:"BotConfig",mixins:[n(6138).Z],data:function(){return{type:"bot"}},computed:{filename:function(){return"".concat(this.model.name,".json")}},methods:{processModelToJSON:function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);return t.GamesPlayedWhileIdle&&t.GamesPlayedWhileIdle.length&&(t.GamesPlayedWhileIdle=t.GamesPlayedWhileIdle.map((function(e){return parseInt(e,10)})).filter((function(e){return!isNaN(e)&&e>0}))),Object.entries(t).forEach((function(e){var n,r,a=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(n,r)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],l=a[1];"string"==typeof l&&""===l&&delete t[i]})),t.name&&delete t.name,t}}};var s=(0,n(1900).Z)(l,r,[],!1,null,null,null);s.options.__file="src/components/BotConfig.vue";const c=s.exports}}]);