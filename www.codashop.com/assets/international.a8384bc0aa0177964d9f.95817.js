(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["international","iconCloseSquare"],{"204d":function(e,t,n){"use strict";n("b96e")},"23ee":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.infobarItems,(function(t,o){return n("div",{key:o,ref:o,refInFor:!0,staticClass:"infobar"},[n("div",{staticClass:"infobar-container",class:"infobar-"+t.type.toLowerCase()},[n("div",{staticClass:"infobar-content-wrapper"},[n("div",{staticClass:"infobar-content",domProps:{innerHTML:e._s(t.content)}}),n("coda-icon-close",{staticClass:"infobar__close-btn",attrs:{color:"dark-matter"},nativeOn:{click:function(n){return e.closeInfoBar(o,t)}}})],1)])])})),0)},a=[],i=n("96d0"),r={components:{CodaIconClose:i["default"]},props:{infobarItems:{required:!1,default:function(){return[]},type:Array}},methods:{closeInfoBar:function(e,t){this.$refs[e][0].className.includes("hide")?this.$refs[e][0].classList.remove("hide"):this.$refs[e][0].className+=" hide";var n=new Date;n.setHours(23,59,59,0);var o=this.getTimestamp(t.endTime)+t.title;this.setCookieData(o,t.title,{expires:n})},getTimestamp:function(e){return Date.parse(e)}}},s=r,u=(n("9e7b"),n("2877")),c=Object(u["a"])(s,o,a,!1,null,"4161f6f6",null);t["a"]=c.exports},"29e9":function(e,t,n){"use strict";var o=n("1d1a"),a=n("795b"),i=n("bb70");function r(e,t,n,o,a,i,r){try{var s=e[i](r),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(o,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function s(e){r(i,o,a,s,u,"next",e)}function u(e){r(i,o,a,s,u,"throw",e)}s(void 0)}))}}var u={methods:{fetchInfoBarData:function(e){var t=this;return s(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!window.__PRERENDER_INJECTED){n.next=2;break}return n.abrupt("return",[]);case 2:return o=t.getInfobarParams(e.pageType),n.prev=3,n.next=6,t.fetchInfoBarShopApi(o);case 6:return n.abrupt("return",n.sent);case 9:throw n.prev=9,n.t0=n["catch"](3),console.error("Error fetching infobar data:",n.t0),n.t0;case 13:case"end":return n.stop()}}),n,null,[[3,9]])})))()},fetchInfoBarGraphQL:function(e){var t=this;return s(regeneratorRuntime.mark((function n(){var a,i,r,s,u,c,l,d,p;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.countryCode,i=e.pageType,r=e.productUrl,s=e.hasWallet,u=e.locale,c=e.whiteLabelId,!window.__PRERENDER_INJECTED){n.next=3;break}return n.abrupt("return",[]);case 3:return l={countryCode:a,pageType:i,productUrl:r,hasWallet:s,locale:u,whitelabelId:c},n.next=6,Object(o["a"])(t,l).getInfoBar();case 6:return d=n.sent,p=d.data,n.abrupt("return",t.filterItems(p.getInfoBar.items));case 9:case"end":return n.stop()}}),n)})))()},fetchInfoBarShopApi:function(e){var t=this;return s(regeneratorRuntime.mark((function n(){var o,i,r,s,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=e.countryCode,i=e.pageType,r=e.productUrl,s=e.whiteLabelId,!window.__PRERENDER_INJECTED){n.next=3;break}return n.abrupt("return",[]);case 3:return n.next=5,Object(a["a"])().getInfoBar({pageType:i,productUrl:r,countryCode:o,whitelabelId:s});case 5:return u=n.sent,n.abrupt("return",t.filterItems(u));case 7:case"end":return n.stop()}}),n)})))()},getInfobarParams:function(e){var t,n=e===i["U"].INT?null:this.$store.getters["locale/shopLang"].code,o=e===i["U"].PRODUCT?this.getProductUrl():null,a=!(void 0===this.$store.getters["cash/wallet"].walletStatus),r=this.$store.getters["locale/shopLang"].locale,s=null===(t=this.$store.getters["theme/config"])||void 0===t?void 0:t.whitelabelId;return{pageType:e,countryCode:n,productUrl:o,hasWallet:a,locale:r,whiteLabelId:s}},getProductUrl:function(){var e=window.location.pathname.replace(/\/$/,""),t=e.split("/")[1];return e.replace(t,this.$store.getters["locale/shopLang"].code)},filterItems:function(e){var t=this;return e=e.filter((function(e){var n=t.getTimestamp(e.endTime)+e.title;return!t.doesCookieExist(n)})),e.length>i["db"]?e.slice(-i["db"]):e},getTimestamp:function(e){return Date.parse(e)}}};t["a"]=u},"3f7b":function(e,t,n){},"4c5c":function(e,t,n){"use strict";var o=n("334d"),a=n("2b0e"),i={namespaced:!0,state:function(){return{config:[]}},actions:{getConfig:function(e){var t=e.commit,n=Object(o["fetchFilteredCountries"])();return t("mutateConfig",n),n}},mutations:{mutateConfig:function(e,t){a["a"].set(e,"config",t)}},getters:{config:function(e){return e.config}}};t["a"]=i},"4e39":function(e,t,n){},"5f59":function(e,t,n){},"849f":function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"SuggestCountry"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"countrySuggestionInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CountrySuggestionInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"suggestCountry"},arguments:[{kind:"Argument",name:{kind:"Name",value:"countrySuggestionInput"},value:{kind:"Variable",name:{kind:"Name",value:"countrySuggestionInput"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"success"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"message"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:174}};n.loc.source={body:"mutation SuggestCountry($countrySuggestionInput: CountrySuggestionInput!) {\n  suggestCountry(countrySuggestionInput: $countrySuggestionInput) {\n    success\n    message\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function o(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){o(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){o(e,t)})),e.definitions&&e.definitions.forEach((function(e){o(e,t)}))}var a={};function i(e,t){for(var n=0;n<e.definitions.length;n++){var o=e.definitions[n];if(o.name&&o.name.value==t)return o}}function r(e,t){var n={kind:e.kind,definitions:[i(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var o=a[t]||new Set,r=new Set,s=new Set;o.forEach((function(e){s.add(e)}));while(s.size>0){var u=s;s=new Set,u.forEach((function(e){if(!r.has(e)){r.add(e);var t=a[e]||new Set;t.forEach((function(e){s.add(e)}))}}))}return r.forEach((function(t){var o=i(e,t);o&&n.definitions.push(o)})),n}(function(){n.definitions.forEach((function(e){if(e.name){var t=new Set;o(e,t),a[e.name.value]=t}}))})(),e.exports=n,e.exports["SuggestCountry"]=r(n,"SuggestCountry")},"96d0":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:e.assignIconStyle,attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{fill:"currentColor",opacity:"0.4",d:"M16.3399 1.99982H7.66988C4.27988 1.99982 1.99988 4.37982 1.99988 7.91982V16.0898C1.99988 19.6198 4.27988 21.9998 7.66988 21.9998H16.3399C19.7299 21.9998 21.9999 19.6198 21.9999 16.0898V7.91982C21.9999 4.37982 19.7299 1.99982 16.3399 1.99982Z"}}),n("path",{attrs:{fill:"currentColor",d:"M15.0156 13.7703L13.2366 11.9923L15.0146 10.2143C15.3566 9.87332 15.3566 9.31832 15.0146 8.97732C14.6726 8.63332 14.1196 8.63432 13.7776 8.97632L11.9986 10.7543L10.2196 8.97432C9.87758 8.63232 9.32358 8.63432 8.98158 8.97432C8.64058 9.31632 8.64058 9.87132 8.98158 10.2123L10.7616 11.9923L8.98558 13.7673C8.64358 14.1093 8.64358 14.6643 8.98558 15.0043C9.15658 15.1763 9.37958 15.2613 9.60358 15.2613C9.82858 15.2613 10.0516 15.1763 10.2226 15.0053L11.9986 13.2293L13.7786 15.0083C13.9496 15.1793 14.1726 15.2643 14.3966 15.2643C14.6206 15.2643 14.8446 15.1783 15.0156 15.0083C15.3576 14.6663 15.3576 14.1123 15.0156 13.7703Z"}})])},a=[],i={props:{color:{default:"smoke",type:String}},computed:{assignIconStyle:function(){var e="",t="icon-close-square icon-color--";return this.color&&(e+=t+this.color),e}}},r=i,s=(n("204d"),n("2877")),u=Object(s["a"])(r,o,a,!1,null,"32074279",null);t["default"]=u.exports},"9e7b":function(e,t,n){"use strict";n("4e39")},add1:function(e,t,n){"use strict";n("3f7b")},b96e:function(e,t,n){},c71d:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"main-content-container international-page-container",attrs:{"data-view":""}},[e.renderPage?[n("coda-infobar",{attrs:{infobarItems:e.infobarData}}),n("section",{staticClass:"about-coda-container"},[n("h1",{staticClass:"about-coda-title"},[e._v(e._s(e.pageData.title))]),n("div",{staticClass:"about-coda-content"},[n("p",[e._v(e._s(e.pageData.description))])])]),e.groups.length>0?n("section",{staticClass:"countries-container"},[n("h2",{staticClass:"country-list-title"},[e._v(" "+e._s(e.pageData.countryListTitle)+" ")]),n("section",{staticClass:"countries-group-container"},e._l(e.groups,(function(t,o){return n("article",{key:o,staticClass:"country-group"},[n("h2",{staticClass:"group-name-title"},[e._v(e._s(t))]),e._l(e.countriesByGroup(t),(function(e,t){return n("coda-international-country",{key:t,attrs:{country:e}})}))],2)})),0),e.whiteLabelId?e._e():n("p",{staticClass:"country-suggestion-text",on:{click:function(t){e.showModal=!0}}},[e._v("Let us know where would you like to see Codashop next!")])]):e._e(),e.showUpcomingCountries?n("section",{staticClass:"countries-container"},[n("h2",{staticClass:"country-list-title"},[e._v(" "+e._s(e.pageData.upcomingCountryListTitle)+" ")]),n("section",{staticClass:"countries-group-container"},e._l(e.upcomingCountries,(function(t,o){return n("article",{key:o,staticClass:"country-group"},[n("h2",{staticClass:"group-name-title"},[e._v(e._s(o))]),e._l(t,(function(e,t){return n("coda-international-country",{key:t,attrs:{country:e}})}))],2)})),0)]):e._e(),e.showModal?n("coda-modal",{attrs:{title:"We value your suggestions!"},on:{updateModalDisplay:e.updateModalDisplay}},[n("coda-international-feedback",{ref:"feedback",attrs:{slot:"modal-content"},on:{formValidity:e.setFormValidity,retrieveFeedback:e.getFeedbackData},slot:"modal-content"}),n("coda-button",{attrs:{slot:"modal-btns",align:"multiple",color:"negative",type:"reset"},nativeOn:{click:function(t){return e.clearUserInput.apply(null,arguments)}},slot:"modal-btns"},[e._v(" Cancel ")]),n("coda-button",{attrs:{slot:"modal-btns",disabled:!e.formValid,align:"multiple"},nativeOn:{click:function(t){return e.sendFeedback.apply(null,arguments)}},slot:"modal-btns"},[e._v(" Submit ")])],1):e._e()]:e._e()],2)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"country-container",attrs:{"data-auto-capture":"InternationalCountryClick"},on:{click:e.setCountry}},[n("div",{staticClass:"country-link-wrapper"},[n("span",{staticClass:"country-name"},[e._v(e._s(e.country.name))])])])},r=[],s=n("c882"),u={props:{country:{type:Object,required:!0}},methods:{setCountry:function(){var e=this;this.$store.dispatch("".concat(s["d"],"/").concat(s["a"].STORE_SHOP_LOCALE),this.country).then((function(){var t;e.setCookieData("shop-locale",e.country.locale.toLowerCase()),e.$router.push("/".concat(null===(t=e.country.locale)||void 0===t?void 0:t.toLowerCase(),"/")).catch((function(){}))})).catch((function(){}))}}},c=u,l=n("2877"),d=Object(l["a"])(c,i,r,!1,null,null,null),p=d.exports,f=n("4c5c"),g=n("23ee"),h=n("849f"),m=n.n(h),v=n("567c"),y=n("bb70"),b=n("29e9");function C(e,t,n,o,a,i,r){try{var s=e[i](r),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(o,a)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function r(e){C(i,o,a,r,s,"next",e)}function s(e){C(i,o,a,r,s,"throw",e)}r(void 0)}))}}function k(e,t){return I(e)||S(e,t)||T(e,t)||_()}function _(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,i=[],r=!0,s=!1;try{for(n=n.call(e);!(r=(o=n.next()).done);r=!0)if(i.push(o.value),t&&i.length===t)break}catch(u){s=!0,a=u}finally{try{r||null==n["return"]||n["return"]()}finally{if(s)throw a}}return i}}function I(e){if(Array.isArray(e))return e}function E(e){return O(e)||D(e)||T(e)||L()}function L(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function T(e,t){if(e){if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function D(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function O(e){if(Array.isArray(e))return x(e)}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var N={components:{CodaInternationalCountry:p,CodaModal:function(){return Promise.all([n.e("npm.vee-validate"),n.e("npm.lodash.debounce"),n.e("npm.vue-horizontal"),n.e("npm.youtube-player"),n.e("modal")]).then(n.bind(null,"3a4c"))},CodaInternationalFeedback:function(){return Promise.all([n.e("npm.vee-validate"),n.e("chunk-5b680f4d"),n.e("international~orderComplete"),n.e("international")]).then(n.bind(null,"fd9b"))},CodaButton:function(){return n.e("button").then(n.bind(null,"b346"))},CodaInfobar:g["a"]},mixins:[b["a"]],data:function(){return{countries:[],upcomingCountries:{},showModal:!1,customerFeedback:[],formValid:!1,pageType:y["U"].INT,infobarData:[],renderPage:!1,pageData:{title:"About Codashop:",description:"Codashop is one of the largest and most trusted top-up websites for games and online entertainment in the world. We work directly with the publishers of Mobile Legends, PUBG Mobile, Free Fire, and more, to enable a seamless purchase experience: No registration or log-in is required, and game credits are added to your account instantly.",countryListTitle:"Codashop is available in:",seo:{appName:"Codashop",title:"Codashop - International",hostname:"https://www.codashop.com",description:"Codashop is one of the largest and most trusted top-up websites for games and online entertainment in the world. We work directly with the publishers of Mobile Legends, PUBG Mobile, Free Fire, APEX Legends Mobile, Call of Duty Mobile and more, to enable a seamless purchase experience: No registration or log-in is required, and game credits are added to your account instantly.",image:"https://cdn1.codashop.com/S/content/common/images/rebrand/og-image.png"}}}},computed:{groups:function(){var e=E(new Set(this.countries.map((function(e){if(!e.hideInInternational)return e.group}))));return e.filter(Boolean)},availableLanguages:function(){return this.getAllCountriesLanguageList()},isGeolocationReady:function(){return this.$store.getters["".concat(s["d"],"/").concat(s["b"].GET_GEOLOCATION_READY)]},isGeolocationBypassed:function(){return this.$store.getters["".concat(s["d"],"/").concat(s["b"].GET_GEOLOCATION_BYPASS)]},showUpcomingCountries:function(){return Object.keys(this.upcomingCountries).length>0},headTagTitle:function(){var e,t;return null===(e=this.pageData)||void 0===e||null===(t=e.seo)||void 0===t?void 0:t.title},headTagMeta:function(){var e,t,n,o,a,i,r,s,u,c,l,d,p,f,g,h,m,v,y,b;return[{name:"description",content:null===(e=this.pageData)||void 0===e||null===(t=e.seo)||void 0===t?void 0:t.description,id:"desc"},{name:"application-name",content:null===(n=this.pageData)||void 0===n||null===(o=n.seo)||void 0===o?void 0:o.appName,id:"application-name"},{name:"og:site_name",content:null===(a=this.pageData)||void 0===a||null===(i=a.seo)||void 0===i?void 0:i.title,id:"site-name"},{property:"og:title",content:null===(r=this.pageData)||void 0===r||null===(s=r.seo)||void 0===s?void 0:s.title,id:"title"},{property:"og:description",content:null===(u=this.pageData)||void 0===u||null===(c=u.seo)||void 0===c?void 0:c.description,id:"desc"},{property:"og:url",content:"".concat(null===(l=this.pageData)||void 0===l||null===(d=l.seo)||void 0===d?void 0:d.hostname,"/international"),id:"url"},{property:"og:type",content:"website",id:"type"},{property:"og:image",content:null===(p=this.pageData)||void 0===p||null===(f=p.seo)||void 0===f?void 0:f.image,id:"image"},{property:"og:image:width",content:"1200",id:"image-width"},{property:"og:image:height",content:"630",id:"image-height"},{property:"twitter:card",content:"summary_large_image",id:"twitter-card"},{property:"twitter:title",content:null===(g=this.pageData)||void 0===g||null===(h=g.seo)||void 0===h?void 0:h.title,id:"twitter-title"},{property:"twitter:description",content:null===(m=this.pageData)||void 0===m||null===(v=m.seo)||void 0===v?void 0:v.description,id:"twitter-description"},{property:"twitter:image",content:null===(y=this.pageData)||void 0===y||null===(b=y.seo)||void 0===b?void 0:b.image,id:"twitter-image"}]},headTagHrefLang:function(){var e,t,n=this,o=[];return o.push({rel:"alternate",id:"x-default",hreflang:"x-default",href:"".concat(null===(e=this.pageData)||void 0===e||null===(t=e.seo)||void 0===t?void 0:t.hostname,"/international/")}),Object.entries(this.availableLanguages).forEach((function(e){var t=k(e,2),a=(t[0],t[1]);a&&a.length&&a.map((function(e){var t,a;o.push({rel:"alternate",id:e.locale.toLocaleLowerCase(),hreflang:"".concat(e.locale.toLocaleLowerCase()),href:"".concat(null===(t=n.pageData)||void 0===t||null===(a=t.seo)||void 0===a?void 0:a.hostname,"/").concat(e.locale.toLocaleLowerCase(),"/")})}))})),o}},created:function(){try{if(this.whiteLabelId){var e=n(!function(){var e=new Error("Cannot find module '@/config/whitelabel/international_.json'");throw e.code="MODULE_NOT_FOUND",e}()),t=e.title,o=e.description,a=e.countryListTitle,i=e.upcomingCountryListTitle,r=e.upcomingCountryCodes,s=e.seo;this.pageData={title:t,description:o,countryListTitle:a,upcomingCountryListTitle:i,upcomingCountryCodes:r,seo:s}}}catch(u){}},mounted:function(){var e=this;return w(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$store.dispatch("".concat(s["d"],"/").concat(s["a"].RESET_SHOP_LOCALE)),e.registerStoreModule({module:f["a"],name:"international",store:e.$store}),e.triggerGtmDataLayerPush({event:"headlessInternationalPageLoaded"}),e.$store.state.international.config.length>0?(e.countries=e.$store.state.international.config,e.handleUpcomingCountries()):e.$store.dispatch("international/getConfig").then((function(t){var n=e.$store;e.injectInitialState(n.state),e.countries=t,e.handleUpcomingCountries(),e.firePrerenderSnapshotEvent()})),t.next=6,e.fetchInfoBarData({pageType:e.pageType});case 6:e.infobarData=t.sent,window.__PRERENDER_INJECTED&&(e.renderPage=!0);case 8:case"end":return t.stop()}}),t)})))()},updated:function(){this.triggerGtmOptimizeEvent()},methods:{countriesByGroup:function(e){var t=["ru"];return this.countries.filter((function(n){return n.group===e&&!n.hideInInternational&&!t.includes(n.code)}))},groupUpcomingCountries:function(e){this.upcomingCountries=this.countries.reduce((function(t,n){if(e.has(n.code)){var o=n.group;t[o]||(t[o]=[]),t[o].push(n)}return t}),{})},sendFeedback:function(){var e=this,t={countrySuggestionInput:{message:this.customerFeedback.message,question:this.customerFeedback.question}};t.countrySuggestionInput.message&&t.countrySuggestionInput.question&&this.$apollo.mutate({mutation:m.a,variables:t}).then((function(t){e.clearUserInput()})).catch((function(e){console.error(e)})).finally((function(){e.showModal=!1}))},clearUserInput:function(){this.showModal=!1,this.customerFeedback.message="",this.customerFeedback.question="",this.$refs.feedback.clearUserInput()},getFeedbackData:function(e){this.customerFeedback.message=e.message,this.customerFeedback.question=e.question},setFormValidity:function(e){this.formValid=e},updateModalDisplay:function(e){this.showModal=e},handleGeoLocationRedirect:function(){var e=this.$store.getters["".concat(s["d"],"/").concat(s["b"].GET_GEOLOCATION_BYPASS)],t=this.$store.getters["".concat(s["d"],"/").concat(s["b"].GET_GEOLOCATION)],n=this.getLocaleByAlpha2CountryCode(t.code||"");!e&&n?(this.$store.dispatch("".concat(s["d"],"/").concat(s["a"].STORE_GEOLOCATION_BYPASS),!0),this.$router.push({name:v["a"].HomePage,params:{countryCode:n.locale},replace:!0,query:this.$route.query}).catch((function(){}))):this.renderPage=!0},handleUpcomingCountries:function(){if(this.whiteLabelId&&0!==this.pageData.upcomingCountryCodes.length){var e=new Set(this.pageData.upcomingCountryCodes);this.groupUpcomingCountries(e),this.countries=this.countries.filter((function(t){return!e.has(t.code)}))}}},metaInfo:function(){return{title:this.headTagTitle,meta:this.headTagMeta,link:this.headTagHrefLang}},watch:{isGeolocationReady:{handler:function(e){window.__PRERENDER_INJECTED||(this.isGeolocationBypassed?this.renderPage=!0:e&&this.handleGeoLocationRedirect())},immediate:!0}},beforeRouteLeave:function(e,t,n){this.$store.dispatch("".concat(s["d"],"/").concat(s["a"].STORE_GEOLOCATION_BYPASS),!0),n()}},$=N,P=(n("add1"),Object(l["a"])($,o,a,!1,null,"2c6a17cc",null));t["default"]=P.exports},d9d1:function(e,t,n){"use strict";n("5f59")},fd9b:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("validation-observer",{ref:"feedbackForm",attrs:{tag:"div"}},[n("p",{staticClass:"form-description"},[e._v("We are working on bringing Codashop to more countries! Let us know where you would like to see Codashop next, what games or products you would want to top-up, and what payment methods you would prefer.")]),n("coda-form-group",{attrs:{name:"country-suggestion-message",isRequired:"",alphaNumericSpaces:""}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userSuggestion.message,expression:"userSuggestion.message"}],staticClass:"suggestion-input-field",attrs:{slot:"input-field",rows:"5",cols:"50",maxlength:"400",placeholder:"Type your suggestions here",id:"js-country_suggestion_value"},domProps:{value:e.userSuggestion.message},on:{input:[function(t){t.target.composing||e.$set(e.userSuggestion,"message",t.target.value)},function(t){return e.getFeedbackValue(t.target.value)}]},slot:"input-field"})]),n("p",{staticClass:"form-description"},[e._v("What games do you want to be available in your country?")]),n("coda-form-group",{attrs:{name:"country-suggestion-question",isRequired:"",alphaNumericSpaces:""}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userSuggestion.question,expression:"userSuggestion.question"}],staticClass:"suggestion-input-field",attrs:{slot:"input-field",rows:"5",cols:"50",maxlength:"400",placeholder:"Type your suggestions here",id:"js-country_suggestion_question"},domProps:{value:e.userSuggestion.question},on:{input:[function(t){t.target.composing||e.$set(e.userSuggestion,"question",t.target.value)},function(t){return e.getFeedbackValue(t.target.value)}]},slot:"input-field"})])],1)},a=[],i=n("f4ca"),r=n("7bb1");function s(e,t,n,o,a,i,r){try{var s=e[i](r),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(o,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function r(e){s(i,o,a,r,u,"next",e)}function u(e){s(i,o,a,r,u,"throw",e)}r(void 0)}))}}var c={name:"feedback",components:{CodaFormGroup:i["default"],ValidationObserver:r["a"]},props:["value"],data:function(){return{formValid:!1,userSuggestion:{message:"",question:""}}},watch:{userSuggestion:{deep:!0,handler:function(){this.updateFormValidity()}}},methods:{getFeedbackValue:function(){this.$emit("retrieveFeedback",this.userSuggestion)},clearUserInput:function(){this.userSuggestion.message="",this.userSuggestion.question="",this.$refs.feedbackForm.reset()},updateFormValidity:function(){var e=this;return u(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.feedbackForm.validate({silent:!0});case 2:n=t.sent,e.$emit("formValidity",n);case 4:case"end":return t.stop()}}),t)})))()}}},l=c,d=(n("d9d1"),n("2877")),p=Object(d["a"])(l,o,a,!1,null,"6ce1ea24",null);t["default"]=p.exports}},0,["npm.vee-validate","npm.lodash.debounce","npm.vue-horizontal","npm.youtube-player","modal","chunk-5b680f4d","international~orderComplete","international"]]);