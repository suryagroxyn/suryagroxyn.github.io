(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.tiny-cookie"],{"06b1":function(e,t,n){var o,r;
/*!
 * tiny-cookie - A tiny cookie manipulation plugin
 * https://github.com/Alex1990/tiny-cookie
 * Under the MIT license | (c) Alex Chao
 */!function(c,u){o=u,r="function"===typeof o?o.call(t,n,t,e):o,void 0===r||(e.exports=r)}(0,(function(){"use strict";function e(t,n,o){if(void 0===n)return e.get(t);null===n?e.remove(t):e.set(t,n,o)}function t(e){return e.replace(/[.*+?^$|[\](){}\\-]/g,"\\$&")}function n(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){if("expires"===n){var r=e[n];"object"!==typeof r&&(r+="number"===typeof r?"D":"",r=o(r)),e[n]=r.toUTCString()}if("secure"===n){e[n]&&(t+=";"+n);continue}t+=";"+n+"="+e[n]}return e.hasOwnProperty("path")||(t+=";path=/"),t}function o(e){var t=new Date,n=e.charAt(e.length-1),o=parseInt(e,10);switch(n){case"Y":t.setFullYear(t.getFullYear()+o);break;case"M":t.setMonth(t.getMonth()+o);break;case"D":t.setDate(t.getDate()+o);break;case"h":t.setHours(t.getHours()+o);break;case"m":t.setMinutes(t.getMinutes()+o);break;case"s":t.setSeconds(t.getSeconds()+o);break;default:t=new Date(e)}return t}return e.enabled=function(){var t,n="__test_key";return document.cookie=n+"=1",t=!!document.cookie,t&&e.remove(n),t},e.get=function(e,n){if("string"!==typeof e||!e)return null;e="(?:^|; )"+t(e)+"(?:=([^;]*?))?(?:;|$)";var o=new RegExp(e),r=o.exec(document.cookie);return null!==r?n?r[1]:decodeURIComponent(r[1]):null},e.getRaw=function(t){return e.get(t,!0)},e.set=function(e,t,o,r){!0!==o&&(r=o,o=!1),r=n(r||{});var c=e+"="+(o?t:encodeURIComponent(t))+r;document.cookie=c},e.setRaw=function(t,n,o){e.set(t,n,!0,o)},e.remove=function(t){e.set(t,"a",{expires:new Date})},e}))}}]);