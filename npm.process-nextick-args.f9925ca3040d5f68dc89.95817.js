(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.process-nextick-args"],{"966d":function(n,e,t){"use strict";(function(e){function t(n,t,c,i){if("function"!==typeof n)throw new TypeError('"callback" argument must be a function');var r,o,u=arguments.length;switch(u){case 0:case 1:return e.nextTick(n);case 2:return e.nextTick((function(){n.call(null,t)}));case 3:return e.nextTick((function(){n.call(null,t,c)}));case 4:return e.nextTick((function(){n.call(null,t,c,i)}));default:r=new Array(u-1),o=0;while(o<r.length)r[o++]=arguments[o];return e.nextTick((function(){n.apply(null,r)}))}}"undefined"===typeof e||!e.version||0===e.version.indexOf("v0.")||0===e.version.indexOf("v1.")&&0!==e.version.indexOf("v1.8.")?n.exports={nextTick:t}:n.exports=e}).call(this,t("4362"))}}]);