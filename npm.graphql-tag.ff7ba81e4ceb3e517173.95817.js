(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.graphql-tag"],{5184:function(e,n,a){"use strict";var t=function(){return t=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var r in n=arguments[a],n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},t.apply(this,arguments)};Object.create;Object.create;var r=a("10cc"),i=new Map,o=new Map,s=!0,c=!1;function l(e){return e.replace(/[\s,]+/g," ").trim()}function u(e){return l(e.source.body.substring(e.start,e.end))}function f(e){var n=new Set,a=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var t=e.name.value,r=u(e.loc),i=o.get(t);i&&!i.has(r)?s&&console.warn("Warning: fragment with name "+t+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):i||o.set(t,i=new Set),i.add(r),n.has(r)||(n.add(r),a.push(e))}else a.push(e)})),t(t({},e),{definitions:a})}function d(e){var n=new Set(e.definitions);n.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(a){var t=e[a];t&&"object"===typeof t&&n.add(t)}))}));var a=e.loc;return a&&(delete a.startToken,delete a.endToken),e}function g(e){var n=l(e);if(!i.has(n)){var a=Object(r["a"])(e,{experimentalFragmentVariables:c,allowLegacyFragmentVariables:c});if(!a||"Document"!==a.kind)throw new Error("Not a valid GraphQL document.");i.set(n,d(f(a)))}return i.get(n)}function m(e){for(var n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];"string"===typeof e&&(e=[e]);var t=e[0];return n.forEach((function(n,a){n&&"Document"===n.kind?t+=n.loc.source.body:t+=n,t+=e[a+1]})),g(t)}function p(){i.clear(),o.clear()}function b(){s=!1}function h(){c=!0}function v(){c=!1}var w={gql:m,resetCaches:p,disableFragmentWarnings:b,enableExperimentalFragmentVariables:h,disableExperimentalFragmentVariables:v};(function(e){e.gql=w.gql,e.resetCaches=w.resetCaches,e.disableFragmentWarnings=w.disableFragmentWarnings,e.enableExperimentalFragmentVariables=w.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=w.disableExperimentalFragmentVariables})(m||(m={})),m["default"]=m;n["a"]=m}}]);