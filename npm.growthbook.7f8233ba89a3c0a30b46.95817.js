(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.growthbook"],{c5b0:function(t,e,r){"use strict";function n(t){let e=2166136261;const r=t.length;for(let n=0;n<r;n++)e^=t.charCodeAt(n),e+=(e<<1)+(e<<4)+(e<<7)+(e<<8)+(e<<24);return e>>>0}function i(t){return n(t)%1e3/1e3}function s(t){return t<=0?[]:new Array(t).fill(1/t)}function u(t,e){const r=i(t+"__"+e[0]);return r>=e[1]&&r<e[2]}function o(t,e){for(let r=0;r<e.length;r++)if(t>=e[r][0]&&t<e[r][1])return r;return-1}function a(t){try{const e=t.replace(/([^\\])\//g,"$1\\/");return new RegExp(e)}catch(e){return void console.error(e)}}function c(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2?arguments[2]:void 0;e<0?e=0:e>1&&(e=1);const n=s(t);r=r||n,r.length!==t&&(r=n);const i=r.reduce((t,e)=>e+t,0);(i<.99||i>1.01)&&(r=n);let u=0;return r.map(t=>{const r=u;return u+=t,[r,r+e*t]})}function h(t,e,r){if(!e)return null;const n=e.split("?")[1];if(!n)return null;const i=n.replace(/#.*/,"").split("&").map(t=>t.split("=",2)).filter(e=>{let[r]=e;return r===t}).map(t=>{let[,e]=t;return parseInt(e)});return i.length>0&&i[0]>=0&&i[0]<r?i[0]:null}function l(t){try{return t()}catch(e){return console.error(e),!1}}r.r(e),r.d(e,"GrowthBook",(function(){return R}));const f={};function d(t,e){if("$or"in e)return m(t,e["$or"]);if("$nor"in e)return!m(t,e["$nor"]);if("$and"in e)return _(t,e["$and"]);if("$not"in e)return!d(t,e["$not"]);for(const[r,n]of Object.entries(e))if(!b(n,g(t,r)))return!1;return!0}function g(t,e){const r=e.split(".");let n=t;for(let i=0;i<r.length;i++){if(!n||"object"!==typeof n||!(r[i]in n))return null;n=n[r[i]]}return n}function p(t){return f[t]||(f[t]=new RegExp(t.replace(/([^\\])\//g,"$1\\/"))),f[t]}function b(t,e){if("string"===typeof t)return e+""===t;if("number"===typeof t)return 1*e===t;if("boolean"===typeof t)return!!e===t;if(Array.isArray(t)||!v(t))return JSON.stringify(e)===JSON.stringify(t);for(const r in t)if(!x(r,e,t[r]))return!1;return!0}function v(t){const e=Object.keys(t);return e.length>0&&e.filter(t=>"$"===t[0]).length===e.length}function y(t){if(null===t)return"null";if(Array.isArray(t))return"array";const e=typeof t;return["string","number","boolean","object","undefined"].includes(e)?e:"unknown"}function w(t,e){if(!Array.isArray(t))return!1;const r=v(e)?t=>b(e,t):t=>d(t,e);for(let n=0;n<t.length;n++)if(t[n]&&r(t[n]))return!0;return!1}function x(t,e,r){switch(t){case"$eq":return e===r;case"$ne":return e!==r;case"$lt":return e<r;case"$lte":return e<=r;case"$gt":return e>r;case"$gte":return e>=r;case"$exists":return r?null!==e:null===e;case"$in":return r.includes(e);case"$nin":return!r.includes(e);case"$not":return!b(r,e);case"$size":return!!Array.isArray(e)&&b(r,e.length);case"$elemMatch":return w(e,r);case"$all":if(!Array.isArray(e))return!1;for(let t=0;t<r.length;t++){let n=!1;for(let i=0;i<e.length;i++)if(b(r[t],e[i])){n=!0;break}if(!n)return!1}return!0;case"$regex":try{return p(r).test(e)}catch(n){return!1}case"$type":return y(e)===r;default:return console.error("Unknown operator: "+t),!1}}function m(t,e){if(!e.length)return!0;for(let r=0;r<e.length;r++)if(d(t,e[r]))return!0;return!1}function _(t,e){for(let r=0;r<e.length;r++)if(!d(t,e[r]))return!1;return!0}function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const A="undefined"!==typeof window&&"undefined"!==typeof document,F=t=>Uint8Array.from(atob(t),t=>t.charCodeAt(0));class R{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k(this,"_renderer",null),k(this,"_trackedExperiments",new Set),k(this,"_trackedFeatures",{}),k(this,"debug",!1),k(this,"subscriptions",new Set),k(this,"_rtQueue",[]),k(this,"_rtTimer",0),k(this,"assigned",new Map),k(this,"_forcedFeatureValues",new Map),k(this,"_attributeOverrides",{}),this.context=t,A&&t.enableDevMode&&(window._growthbook=this,document.dispatchEvent(new Event("gbloaded")))}render(){this._renderer&&this._renderer()}setFeatures(t){this.context.features=t,this.render()}async setEncryptedFeatures(t,e,r){if(r=r||globalThis.crypto&&globalThis.crypto.subtle,!r)throw new Error("No SubtleCrypto implementation found");try{const n=await r.importKey("raw",F(e),{name:"AES-CBC",length:128},!0,["encrypt","decrypt"]),[i,s]=t.split("."),u=await r.decrypt({name:"AES-CBC",iv:F(i)},n,F(s));this.setFeatures(JSON.parse((new TextDecoder).decode(u)))}catch(n){throw new Error("Failed to decrypt features")}}setAttributes(t){this.context.attributes=t,this.render()}setAttributeOverrides(t){this._attributeOverrides=t,this.render()}setForcedVariations(t){this.context.forcedVariations=t||{},this.render()}setForcedFeatures(t){this._forcedFeatureValues=t,this.render()}getAttributes(){return{...this.context.attributes,...this._attributeOverrides}}getFeatures(){return this.context.features||{}}subscribe(t){return this.subscriptions.add(t),()=>{this.subscriptions.delete(t)}}getAllResults(){return new Map(this.assigned)}destroy(){this.subscriptions.clear(),this.assigned.clear(),this._trackedExperiments.clear(),this._trackedFeatures={},this._rtQueue=[],this._rtTimer&&clearTimeout(this._rtTimer),A&&window._growthbook===this&&delete window._growthbook}setRenderer(t){this._renderer=t}forceVariation(t,e){this.context.forcedVariations=this.context.forcedVariations||{},this.context.forcedVariations[t]=e,this.render()}run(t){const e=this._run(t,null);return this.fireSubscriptions(t,e),e}fireSubscriptions(t,e){const r=t.key,n=this.assigned.get(r);n&&n.result.inExperiment===e.inExperiment&&n.result.variationId===e.variationId||(this.assigned.set(r,{experiment:t,result:e}),this.subscriptions.forEach(r=>{try{r(t,e)}catch(n){console.error(n)}}))}trackFeatureUsage(t,e){if("override"===e.source)return;const r=JSON.stringify(e.value);if(this._trackedFeatures[t]!==r){if(this._trackedFeatures[t]=r,this.context.onFeatureUsage)try{this.context.onFeatureUsage(t,e)}catch(n){}A&&window.fetch&&(this._rtQueue.push({key:t,on:e.on}),this._rtTimer||(this._rtTimer=window.setTimeout(()=>{this._rtTimer=0;const t=[...this._rtQueue];this._rtQueue=[],this.context.realtimeKey&&window.fetch("https://rt.growthbook.io/?key=".concat(this.context.realtimeKey,"&events=").concat(encodeURIComponent(JSON.stringify(t))),{cache:"no-cache",mode:"no-cors"}).catch(()=>{})},this.context.realtimeInterval||2e3)))}}getFeatureResult(t,e,r,n){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;const u={value:e,on:!!e,off:!e,source:r,ruleId:n||""};return i&&(u.experiment=i),s&&(u.experimentResult=s),this.trackFeatureUsage(t,u),u}isOn(t){return this.evalFeature(t).on}isOff(t){return this.evalFeature(t).off}getFeatureValue(t,e){var r;return null!==(r=this.evalFeature(t).value)&&void 0!==r?r:e}feature(t){return this.evalFeature(t)}evalFeature(t){var e;if(this._forcedFeatureValues.has(t))return this.getFeatureResult(t,this._forcedFeatureValues.get(t),"override");if(!this.context.features||!this.context.features[t])return this.getFeatureResult(t,null,"unknownFeature");const r=this.context.features[t];if(r.rules)for(const n of r.rules){if(n.condition&&!this.conditionPasses(n.condition))continue;if("force"in n){if("coverage"in n){const{hashValue:e}=this.getHashAttribute(n.hashAttribute);if(!e)continue;const r=i(e+t);if(r>n.coverage)continue}return this.getFeatureResult(t,n.force,"force",n.id)}if(!n.variations)continue;const e={variations:n.variations,key:n.key||t};"coverage"in n&&(e.coverage=n.coverage),n.weights&&(e.weights=n.weights),n.hashAttribute&&(e.hashAttribute=n.hashAttribute),n.namespace&&(e.namespace=n.namespace);const r=this._run(e,t);if(this.fireSubscriptions(e,r),r.inExperiment)return this.getFeatureResult(t,r.value,"experiment",n.id,e,r)}return this.getFeatureResult(t,null!==(e=r.defaultValue)&&void 0!==e?e:null,"defaultValue")}conditionPasses(t){return d(this.getAttributes(),t)}_run(t,e){var r;const n=t.key,s=t.variations.length;if(s<2)return this.getResult(t,-1,!1,e);if(!1===this.context.enabled)return this.getResult(t,-1,!1,e);t=this.mergeOverrides(t);const a=h(n,this.getContextUrl(),s);if(null!==a)return this.getResult(t,a,!1,e);if(this.context.forcedVariations&&n in this.context.forcedVariations){const r=this.context.forcedVariations[n];return this.getResult(t,r,!1,e)}if("draft"===t.status||!1===t.active)return this.getResult(t,-1,!1,e);const{hashValue:f}=this.getHashAttribute(t.hashAttribute);if(!f)return this.getResult(t,-1,!1,e);if(t.namespace&&!u(f,t.namespace))return this.getResult(t,-1,!1,e);if(t.include&&!l(t.include))return this.getResult(t,-1,!1,e);if(t.condition&&!this.conditionPasses(t.condition))return this.getResult(t,-1,!1,e);if(t.groups&&!this.hasGroupOverlap(t.groups))return this.getResult(t,-1,!1,e);if(t.url&&!this.urlIsValid(t.url))return this.getResult(t,-1,!1,e);const d=c(s,null!==(r=t.coverage)&&void 0!==r?r:1,t.weights),g=i(f+n),p=o(g,d);if(p<0)return this.getResult(t,-1,!1,e);var b;if("force"in t)return this.getResult(t,null!==(b=t.force)&&void 0!==b?b:-1,!1,e);if(this.context.qaMode)return this.getResult(t,-1,!1,e);if("stopped"===t.status)return this.getResult(t,-1,!1,e);const v=this.getResult(t,p,!0,e);return this.track(t,v),v}log(t,e){this.debug&&(this.context.log?this.context.log(t,e):console.log(t,e))}track(t,e){if(!this.context.trackingCallback)return;const r=t.key,n=e.hashAttribute+e.hashValue+r+e.variationId;if(!this._trackedExperiments.has(n)){this._trackedExperiments.add(n);try{this.context.trackingCallback(t,e)}catch(i){console.error(i)}}}mergeOverrides(t){const e=t.key,r=this.context.overrides;return r&&r[e]&&(t=Object.assign({},t,r[e]),"string"===typeof t.url&&(t.url=a(t.url))),t}getHashAttribute(t){const e=t||"id";let r="";return this._attributeOverrides[e]?r=this._attributeOverrides[e]:this.context.attributes?r=this.context.attributes[e]||"":this.context.user&&(r=this.context.user[e]||""),{hashAttribute:e,hashValue:r}}getResult(t,e,r,n){let i=!0;(e<0||e>=t.variations.length)&&(e=0,i=!1);const{hashAttribute:s,hashValue:u}=this.getHashAttribute(t.hashAttribute);return{featureId:n,inExperiment:i,hashUsed:r,variationId:e,value:t.variations[e],hashAttribute:s,hashValue:u}}getContextUrl(){return this.context.url||(A?window.location.href:"")}urlIsValid(t){const e=this.getContextUrl();if(!e)return!1;const r=e.replace(/^https?:\/\//,"").replace(/^[^/]*\//,"/");return!!t.test(e)||!!t.test(r)}hasGroupOverlap(t){const e=this.context.groups||{};for(let r=0;r<t.length;r++)if(e[t[r]])return!0;return!1}}}}]);