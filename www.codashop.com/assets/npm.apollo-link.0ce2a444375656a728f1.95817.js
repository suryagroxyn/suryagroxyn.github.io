(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.apollo-link"],{d634:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return O})),t.d(e,"c",(function(){return f}));var r=t("e830"),u=t("a957"),o=t("9ab4"),i=t("4518");function a(n){for(var e=["query","operationName","variables","extensions","context"],t=0,r=Object.keys(n);t<r.length;t++){var o=r[t];if(e.indexOf(o)<0)throw new u["a"](2)}return n}(function(n){function e(e,t){var r=n.call(this,e)||this;return r.link=t,r}Object(o["__extends"])(e,n)})(Error);function c(n){return n.request.length<=1}function f(n){return new r["a"]((function(e){e.error(n)}))}function s(n){var e={variables:n.variables||{},extensions:n.extensions||{},operationName:n.operationName,query:n.query};return e.operationName||(e.operationName="string"!==typeof e.query?Object(i["n"])(e.query):""),e}function p(n,e){var t=Object(o["__assign"])({},n),r=function(n){t="function"===typeof n?Object(o["__assign"])({},t,n(t)):Object(o["__assign"])({},t,n)},u=function(){return Object(o["__assign"])({},t)};return Object.defineProperty(e,"setContext",{enumerable:!1,value:r}),Object.defineProperty(e,"getContext",{enumerable:!1,value:u}),Object.defineProperty(e,"toKey",{enumerable:!1,value:function(){return b(e)}}),e}function b(n){var e=n.query,t=n.variables,r=n.operationName;return JSON.stringify([r,e,t])}function l(n,e){return e?e(n):r["a"].of()}function v(n){return"function"===typeof n?new d(n):n}function w(){return new d((function(){return r["a"].of()}))}function y(n){return 0===n.length?w():n.map(v).reduce((function(n,e){return n.concat(e)}))}function q(n,e,t){var u=v(e),o=v(t||new d(l));return c(u)&&c(o)?new d((function(e){return n(e)?u.request(e)||r["a"].of():o.request(e)||r["a"].of()})):new d((function(e,t){return n(e)?u.request(e,t)||r["a"].of():o.request(e,t)||r["a"].of()}))}var m=function(n,e){var t=v(n);if(c(t))return t;var u=v(e);return c(u)?new d((function(n){return t.request(n,(function(n){return u.request(n)||r["a"].of()}))||r["a"].of()})):new d((function(n,e){return t.request(n,(function(n){return u.request(n,e)||r["a"].of()}))||r["a"].of()}))},d=function(){function n(n){n&&(this.request=n)}return n.prototype.split=function(e,t,r){return this.concat(q(e,t,r||new n(l)))},n.prototype.concat=function(n){return m(this,n)},n.prototype.request=function(n,e){throw new u["a"](1)},n.empty=w,n.from=y,n.split=q,n.execute=O,n}();function O(n,e){return n.request(p(e.context,s(a(e))))||r["a"].of()}},e830:function(n,e,t){"use strict";var r=t("0012"),u=t.n(r),o=u.a;e["a"]=o}}]);