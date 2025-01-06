(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.cookie-universal"],{"651e":function(e,t){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(1);e.exports=function(t,r){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a="object"===("undefined"==typeof document?"undefined":n(document))&&"string"==typeof document.cookie,s="object"===(void 0===t?"undefined":n(t))&&"object"===(void 0===r?"undefined":n(r))&&void 0!==e,u=!a&&!s||a&&s,f=function(e){if(s){var n=t.headers.cookie||"";return e&&(n=r.getHeaders(),n=n["set-cookie"]?n["set-cookie"].map((function(e){return e.split(";")[0]})).join(";"):""),n}if(a)return document.cookie||""},c=function(){var e=r.getHeader("Set-Cookie");return(e="string"==typeof e?[e]:e)||[]},p=function(e){return r.setHeader("Set-Cookie",e)},d=function(e,t){if(!t)return e;try{return JSON.parse(e)}catch(t){return e}},l={parseJSON:i,set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{path:"/"};if(!u)if(t="object"===(void 0===t?"undefined":n(t))?JSON.stringify(t):t,s){var i=c();i.push(o.serialize(e,t,r)),p(i)}else document.cookie=o.serialize(e,t,r)},setAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];u||Array.isArray(e)&&e.forEach((function(e){var t=e.name,r=void 0===t?"":t,n=e.value,o=void 0===n?"":n,i=e.opts,a=void 0===i?{path:"/"}:i;l.set(r,o,a)}))},get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromRes:!1,parseJSON:l.parseJSON};if(u)return"";var r=o.parse(f(t.fromRes)),n=r[e];return d(n,t.parseJSON)},getAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fromRes:!1,parseJSON:l.parseJSON};if(u)return{};var t=o.parse(f(e.fromRes));for(var r in t)t[r]=d(t[r],e.parseJSON);return t},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{path:"/"};u||(t.expires=new Date(0),l.set(e,"",t))},removeAll:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{path:"/"};if(!u){var t=o.parse(f());for(var r in t)l.remove(r,e)}},nodeCookie:o};return l}},function(e,t,r){"use strict";function n(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var r={},n=t||{},o=e.split(u),s=n.decode||a,f=0;f<o.length;f++){var c=o[f],p=c.indexOf("=");if(!(p<0)){var d=c.substr(0,p).trim(),l=c.substr(++p,c.length).trim();'"'==l[0]&&(l=l.slice(1,-1)),void 0==r[d]&&(r[d]=i(l,s))}}return r}function o(e,t,r){var n=r||{},o=n.encode||s;if("function"!=typeof o)throw new TypeError("option encode is invalid");if(!f.test(e))throw new TypeError("argument name is invalid");var i=o(t);if(i&&!f.test(i))throw new TypeError("argument val is invalid");var a=e+"="+i;if(null!=n.maxAge){var u=n.maxAge-0;if(isNaN(u))throw new Error("maxAge should be a Number");a+="; Max-Age="+Math.floor(u)}if(n.domain){if(!f.test(n.domain))throw new TypeError("option domain is invalid");a+="; Domain="+n.domain}if(n.path){if(!f.test(n.path))throw new TypeError("option path is invalid");a+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");a+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(a+="; HttpOnly"),n.secure&&(a+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"strict":a+="; SameSite=Strict";break;case"none":a+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return a}function i(e,t){try{return t(e)}catch(t){return e}}
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=n,t.serialize=o;var a=decodeURIComponent,s=encodeURIComponent,u=/; */,f=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/}])}}]);