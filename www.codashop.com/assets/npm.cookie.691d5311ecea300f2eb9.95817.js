(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.cookie"],{8958:function(e,t,r){"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=s,t.serialize=p;var i=decodeURIComponent,n=encodeURIComponent,o=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function s(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var r={},n=t||{},a=e.split(o),s=n.decode||i,p=0;p<a.length;p++){var u=a[p],c=u.indexOf("=");if(!(c<0)){var m=u.substr(0,c).trim(),w=u.substr(++c,u.length).trim();'"'==w[0]&&(w=w.slice(1,-1)),void 0==r[m]&&(r[m]=f(w,s))}}return r}function p(e,t,r){var i=r||{},o=i.encode||n;if("function"!==typeof o)throw new TypeError("option encode is invalid");if(!a.test(e))throw new TypeError("argument name is invalid");var s=o(t);if(s&&!a.test(s))throw new TypeError("argument val is invalid");var p=e+"="+s;if(null!=i.maxAge){var f=i.maxAge-0;if(isNaN(f))throw new Error("maxAge should be a Number");p+="; Max-Age="+Math.floor(f)}if(i.domain){if(!a.test(i.domain))throw new TypeError("option domain is invalid");p+="; Domain="+i.domain}if(i.path){if(!a.test(i.path))throw new TypeError("option path is invalid");p+="; Path="+i.path}if(i.expires){if("function"!==typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");p+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(p+="; HttpOnly"),i.secure&&(p+="; Secure"),i.sameSite){var u="string"===typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite;switch(u){case!0:p+="; SameSite=Strict";break;case"lax":p+="; SameSite=Lax";break;case"strict":p+="; SameSite=Strict";break;case"none":p+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return p}function f(e,t){try{return t(e)}catch(r){return e}}}}]);