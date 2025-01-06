(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.apollo-cache-inmemory"],{"2bf2":function(e,t,r){"use strict";r.r(t),r.d(t,"HeuristicFragmentMatcher",(function(){return d})),r.d(t,"InMemoryCache",(function(){return T})),r.d(t,"IntrospectionFragmentMatcher",(function(){return f})),r.d(t,"ObjectCache",(function(){return j})),r.d(t,"StoreReader",(function(){return m})),r.d(t,"StoreWriter",(function(){return _})),r.d(t,"WriteError",(function(){return x})),r.d(t,"assertIdValue",(function(){return O})),r.d(t,"defaultDataIdFromObject",(function(){return V})),r.d(t,"defaultNormalizedCacheFactory",(function(){return S})),r.d(t,"enhanceErrorWithDocument",(function(){return R}));var n=r("9ab4"),i=r("63e0"),a=r("4518"),o=r("ab1d"),c=r("e328"),s=r("a957"),u=!1;function l(){var e=!u;return Object(a["y"])()||(u=!0),e}var d=function(){function e(){}return e.prototype.ensureReady=function(){return Promise.resolve()},e.prototype.canBypassInit=function(){return!0},e.prototype.match=function(e,t,r){var n=r.store.get(e.id),i="ROOT_QUERY"===e.id;if(!n)return i;var a=n.__typename,o=void 0===a?i&&"Query":a;return o&&o===t||(l(),"heuristic")},e}(),f=function(){function e(e){e&&e.introspectionQueryResultData?(this.possibleTypesMap=this.parseIntrospectionResult(e.introspectionQueryResultData),this.isReady=!0):this.isReady=!1,this.match=this.match.bind(this)}return e.prototype.match=function(e,t,r){Object(s["b"])(this.isReady,1);var n=r.store.get(e.id),i="ROOT_QUERY"===e.id;if(!n)return i;var a=n.__typename,o=void 0===a?i&&"Query":a;if(Object(s["b"])(o,2),o===t)return!0;var c=this.possibleTypesMap[t];return!!(o&&c&&c.indexOf(o)>-1)},e.prototype.parseIntrospectionResult=function(e){var t={};return e.__schema.types.forEach((function(e){"UNION"!==e.kind&&"INTERFACE"!==e.kind||(t[e.name]=e.possibleTypes.map((function(e){return e.name})))})),t},e}(),p=Object.prototype.hasOwnProperty,h=function(){function e(e){var t=this;void 0===e&&(e=Object.create(null)),this.data=e,this.depend=Object(c["b"])((function(e){return t.data[e]}),{disposable:!0,makeCacheKey:function(e){return e}})}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.depend(e),this.data[e]},e.prototype.set=function(e,t){var r=this.data[e];t!==r&&(this.data[e]=t,this.depend.dirty(e))},e.prototype.delete=function(e){p.call(this.data,e)&&(delete this.data[e],this.depend.dirty(e))},e.prototype.clear=function(){this.replace(null)},e.prototype.replace=function(e){var t=this;e?(Object.keys(e).forEach((function(r){t.set(r,e[r])})),Object.keys(this.data).forEach((function(r){p.call(e,r)||t.delete(r)}))):Object.keys(this.data).forEach((function(e){t.delete(e)}))},e}();function y(e){return new h(e)}var m=function(){function e(e){var t=this,r=void 0===e?{}:e,n=r.cacheKeyRoot,i=void 0===n?new c["a"](a["e"]):n,o=r.freezeResults,s=void 0!==o&&o,u=this,l=u.executeStoreQuery,d=u.executeSelectionSet,f=u.executeSubSelectedArray;this.freezeResults=s,this.executeStoreQuery=Object(c["b"])((function(e){return l.call(t,e)}),{makeCacheKey:function(e){var t=e.query,r=e.rootValue,n=e.contextValue,a=e.variableValues,o=e.fragmentMatcher;if(n.store instanceof h)return i.lookup(n.store,t,o,JSON.stringify(a),r.id)}}),this.executeSelectionSet=Object(c["b"])((function(e){return d.call(t,e)}),{makeCacheKey:function(e){var t=e.selectionSet,r=e.rootValue,n=e.execContext;if(n.contextValue.store instanceof h)return i.lookup(n.contextValue.store,t,n.fragmentMatcher,JSON.stringify(n.variableValues),r.id)}}),this.executeSubSelectedArray=Object(c["b"])((function(e){return f.call(t,e)}),{makeCacheKey:function(e){var t=e.field,r=e.array,n=e.execContext;if(n.contextValue.store instanceof h)return i.lookup(n.contextValue.store,t,r,JSON.stringify(n.variableValues))}})}return e.prototype.readQueryFromStore=function(e){return this.diffQueryAgainstStore(Object(n["__assign"])(Object(n["__assign"])({},e),{returnPartialData:!1})).result},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,r=e.query,n=e.variables,i=e.previousResult,c=e.returnPartialData,u=void 0===c||c,l=e.rootId,d=void 0===l?"ROOT_QUERY":l,f=e.fragmentMatcherFunction,p=e.config,h=Object(a["o"])(r);n=Object(a["c"])({},Object(a["h"])(h),n);var y={store:t,dataIdFromObject:p&&p.dataIdFromObject,cacheRedirects:p&&p.cacheRedirects||{}},m=this.executeStoreQuery({query:r,rootValue:{type:"id",id:d,generated:!0,typename:"Query"},contextValue:y,variableValues:n,fragmentMatcher:f}),b=m.missing&&m.missing.length>0;return b&&!u&&m.missing.forEach((function(e){if(!e.tolerable)throw new s["a"](8)})),i&&Object(o["a"])(i,m.result)&&(m.result=i),{result:m.result,complete:!b}},e.prototype.executeStoreQuery=function(e){var t=e.query,r=e.rootValue,n=e.contextValue,i=e.variableValues,o=e.fragmentMatcher,c=void 0===o?v:o,s=Object(a["l"])(t),u=Object(a["j"])(t),l=Object(a["g"])(u),d={query:t,fragmentMap:l,contextValue:n,variableValues:i,fragmentMatcher:c};return this.executeSelectionSet({selectionSet:s.selectionSet,rootValue:r,execContext:d})},e.prototype.executeSelectionSet=function(e){var t=this,r=e.selectionSet,i=e.rootValue,o=e.execContext,c=o.fragmentMap,u=o.contextValue,l=o.variableValues,d={result:null},f=[],p=u.store.get(i.id),h=p&&p.__typename||"ROOT_QUERY"===i.id&&"Query"||void 0;function y(e){var t;return e.missing&&(d.missing=d.missing||[],(t=d.missing).push.apply(t,e.missing)),e.result}return r.selections.forEach((function(e){var r;if(Object(a["F"])(e,l))if(Object(a["t"])(e)){var d=y(t.executeField(p,h,e,o));"undefined"!==typeof d&&f.push((r={},r[Object(a["E"])(e)]=d,r))}else{var m=void 0;if(Object(a["v"])(e))m=e;else if(m=c[e.name.value],!m)throw new s["a"](9);var b=m.typeCondition&&m.typeCondition.name.value,v=!b||o.fragmentMatcher(i,b,u);if(v){var O=t.executeSelectionSet({selectionSet:m.selectionSet,rootValue:i,execContext:o});"heuristic"===v&&O.missing&&(O=Object(n["__assign"])(Object(n["__assign"])({},O),{missing:O.missing.map((function(e){return Object(n["__assign"])(Object(n["__assign"])({},e),{tolerable:!0})}))})),f.push(y(O))}}})),d.result=Object(a["B"])(f),this.freezeResults,d},e.prototype.executeField=function(e,t,r,n){var i=n.variableValues,o=n.contextValue,c=r.name.value,s=Object(a["b"])(r,i),u={resultKey:Object(a["E"])(r),directives:Object(a["i"])(r,i)},l=g(e,t,c,s,o,u);return Array.isArray(l.result)?this.combineExecResults(l,this.executeSubSelectedArray({field:r,array:l.result,execContext:n})):r.selectionSet?null==l.result?l:this.combineExecResults(l,this.executeSelectionSet({selectionSet:r.selectionSet,rootValue:l.result,execContext:n})):(b(r,l.result),this.freezeResults,l)},e.prototype.combineExecResults=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return t.forEach((function(t){t.missing&&(e=e||[],e.push.apply(e,t.missing))})),{result:t.pop().result,missing:e}},e.prototype.executeSubSelectedArray=function(e){var t,r=this,n=e.field,i=e.array,a=e.execContext;function o(e){return e.missing&&(t=t||[],t.push.apply(t,e.missing)),e.result}return i=i.map((function(e){return null===e?null:Array.isArray(e)?o(r.executeSubSelectedArray({field:n,array:e,execContext:a})):n.selectionSet?o(r.executeSelectionSet({selectionSet:n.selectionSet,rootValue:e,execContext:a})):(b(n,e),e)})),this.freezeResults,{result:i,missing:t}},e}();function b(e,t){if(!e.selectionSet&&Object(a["u"])(t))throw new s["a"](10)}function v(){return!0}function O(e){Object(s["b"])(Object(a["u"])(e),11)}function g(e,t,r,n,i,o){o.resultKey;var c=o.directives,s=r;(n||c)&&(s=Object(a["p"])(s,n,c));var u=void 0;if(e&&(u=e[s],"undefined"===typeof u&&i.cacheRedirects&&"string"===typeof t)){var l=i.cacheRedirects[t];if(l){var d=l[r];d&&(u=d(e,n,{getCacheKey:function(e){var t=i.dataIdFromObject(e);return t&&Object(a["H"])({id:t,typename:e.__typename})}}))}}return"undefined"===typeof u?{result:u,missing:[{object:e,fieldName:s,tolerable:!1}]}:(Object(a["w"])(u)&&(u=u.json),{result:u})}var j=function(){function e(e){void 0===e&&(e=Object.create(null)),this.data=e}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.data[e]},e.prototype.set=function(e,t){this.data[e]=t},e.prototype.delete=function(e){this.data[e]=void 0},e.prototype.clear=function(){this.data=Object.create(null)},e.prototype.replace=function(e){this.data=e||Object.create(null)},e}();function S(e){return new j(e)}var x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="WriteError",t}return Object(n["__extends"])(t,e),t}(Error);function R(e,t){var r=new x("Error writing result to store for query:\n "+JSON.stringify(t));return r.message+="\n"+e.message,r.stack=e.stack,r}var _=function(){function e(){}return e.prototype.writeQueryToStore=function(e){var t=e.query,r=e.result,n=e.store,i=void 0===n?y():n,a=e.variables,o=e.dataIdFromObject,c=e.fragmentMatcherFunction;return this.writeResultToStore({dataId:"ROOT_QUERY",result:r,document:t,store:i,variables:a,dataIdFromObject:o,fragmentMatcherFunction:c})},e.prototype.writeResultToStore=function(e){var t=e.dataId,r=e.result,n=e.document,i=e.store,o=void 0===i?y():i,c=e.variables,s=e.dataIdFromObject,u=e.fragmentMatcherFunction,l=Object(a["m"])(n);try{return this.writeSelectionSetToStore({result:r,dataId:t,selectionSet:l.selectionSet,context:{store:o,processedData:{},variables:Object(a["c"])({},Object(a["h"])(l),c),dataIdFromObject:s,fragmentMap:Object(a["g"])(Object(a["j"])(n)),fragmentMatcherFunction:u}})}catch(d){throw R(d,n)}},e.prototype.writeSelectionSetToStore=function(e){var t=this,r=e.result,n=e.dataId,i=e.selectionSet,o=e.context,c=o.variables,u=o.store,l=o.fragmentMap;return i.selections.forEach((function(e){var i;if(Object(a["F"])(e,c))if(Object(a["t"])(e)){var u=Object(a["E"])(e),d=r[u];if("undefined"!==typeof d)t.writeFieldToStore({dataId:n,value:d,field:e,context:o});else{var f=!1,p=!1;e.directives&&e.directives.length&&(f=e.directives.some((function(e){return e.name&&"defer"===e.name.value})),p=e.directives.some((function(e){return e.name&&"client"===e.name.value}))),!f&&!p&&o.fragmentMatcherFunction}}else{var h=void 0;Object(a["v"])(e)?h=e:(h=(l||{})[e.name.value],Object(s["b"])(h,3));var y=!0;if(o.fragmentMatcherFunction&&h.typeCondition){var m=n||"self",b=Object(a["H"])({id:m,typename:void 0}),v={store:new j((i={},i[m]=r,i)),cacheRedirects:{}},O=o.fragmentMatcherFunction(b,h.typeCondition.name.value,v);Object(a["x"])(),y=!!O}y&&t.writeSelectionSetToStore({result:r,selectionSet:h.selectionSet,dataId:n,context:o})}})),u},e.prototype.writeFieldToStore=function(e){var t,r,i,c=e.field,u=e.value,l=e.dataId,d=e.context,f=d.variables,p=d.dataIdFromObject,h=d.store,y=Object(a["G"])(c,f);if(c.selectionSet&&null!==u)if(Array.isArray(u)){var m=l+"."+y;r=this.processArrayValue(u,m,c.selectionSet,d)}else{var b=l+"."+y,v=!0;if(w(b)||(b="$"+b),p){var O=p(u);Object(s["b"])(!O||!w(O),4),(O||"number"===typeof O&&0===O)&&(b=O,v=!1)}F(b,c,d.processedData)||this.writeSelectionSetToStore({dataId:b,result:u,selectionSet:c.selectionSet,context:d});var g=u.__typename;r=Object(a["H"])({id:b,typename:g},v),i=h.get(l);var j=i&&i[y];if(j!==r&&Object(a["u"])(j)){var S=void 0!==j.typename,x=void 0!==g,R=S&&x&&j.typename!==g;Object(s["b"])(!v||j.generated||R,5),Object(s["b"])(!S||x,6),j.generated&&(R?v||h.delete(j.id):I(j.id,r.id,h))}}else r=null!=u&&"object"===typeof u?{type:"json",json:u}:u;i=h.get(l),i&&Object(o["a"])(r,i[y])||h.set(l,Object(n["__assign"])(Object(n["__assign"])({},i),(t={},t[y]=r,t)))},e.prototype.processArrayValue=function(e,t,r,n){var i=this;return e.map((function(e,o){if(null===e)return null;var c=t+"."+o;if(Array.isArray(e))return i.processArrayValue(e,c,r,n);var s=!0;if(n.dataIdFromObject){var u=n.dataIdFromObject(e);u&&(c=u,s=!1)}return F(c,r,n.processedData)||i.writeSelectionSetToStore({dataId:c,result:e,selectionSet:r,context:n}),Object(a["H"])({id:c,typename:e.__typename},s)}))},e}();function w(e){return"$"===e[0]}function I(e,t,r){if(e===t)return!1;var i=r.get(e),c=r.get(t),s=!1;Object.keys(i).forEach((function(e){var t=i[e],n=c[e];Object(a["u"])(t)&&w(t.id)&&Object(a["u"])(n)&&!Object(o["a"])(t,n)&&I(t.id,n.id,r)&&(s=!0)})),r.delete(e);var u=Object(n["__assign"])(Object(n["__assign"])({},i),c);return Object(o["a"])(u,c)?s:(r.set(t,u),!0)}function F(e,t,r){if(!r)return!1;if(r[e]){if(r[e].indexOf(t)>=0)return!0;r[e].push(t)}else r[e]=[t];return!1}var M={fragmentMatcher:new d,dataIdFromObject:V,addTypename:!0,resultCaching:!0,freezeResults:!1};function V(e){if(e.__typename){if(void 0!==e.id)return e.__typename+":"+e.id;if(void 0!==e._id)return e.__typename+":"+e._id}return null}var C=Object.prototype.hasOwnProperty,E=function(e){function t(t,r,n){var i=e.call(this,Object.create(null))||this;return i.optimisticId=t,i.parent=r,i.transaction=n,i}return Object(n["__extends"])(t,e),t.prototype.toObject=function(){return Object(n["__assign"])(Object(n["__assign"])({},this.parent.toObject()),this.data)},t.prototype.get=function(e){return C.call(this.data,e)?this.data[e]:this.parent.get(e)},t}(j),T=function(e){function t(t){void 0===t&&(t={});var r=e.call(this)||this;r.watches=new Set,r.typenameDocumentCache=new Map,r.cacheKeyRoot=new c["a"](a["e"]),r.silenceBroadcast=!1,r.config=Object(n["__assign"])(Object(n["__assign"])({},M),t),r.config.customResolvers&&(r.config.cacheRedirects=r.config.customResolvers),r.config.cacheResolvers&&(r.config.cacheRedirects=r.config.cacheResolvers),r.addTypename=!!r.config.addTypename,r.data=r.config.resultCaching?new h:new j,r.optimisticData=r.data,r.storeWriter=new _,r.storeReader=new m({cacheKeyRoot:r.cacheKeyRoot,freezeResults:t.freezeResults});var i=r,o=i.maybeBroadcastWatch;return r.maybeBroadcastWatch=Object(c["b"])((function(e){return o.call(r,e)}),{makeCacheKey:function(e){if(!e.optimistic&&!e.previousResult)return i.data instanceof h?i.cacheKeyRoot.lookup(e.query,JSON.stringify(e.variables)):void 0}}),r}return Object(n["__extends"])(t,e),t.prototype.restore=function(e){return e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).toObject()},t.prototype.read=function(e){if("string"===typeof e.rootId&&"undefined"===typeof this.data.get(e.rootId))return null;var t=this.config.fragmentMatcher,r=t&&t.match;return this.storeReader.readQueryFromStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,rootId:e.rootId,fragmentMatcherFunction:r,previousResult:e.previousResult,config:this.config})||null},t.prototype.write=function(e){var t=this.config.fragmentMatcher,r=t&&t.match;this.storeWriter.writeResultToStore({dataId:e.dataId,result:e.result,variables:e.variables,document:this.transformDocument(e.query),store:this.data,dataIdFromObject:this.config.dataIdFromObject,fragmentMatcherFunction:r}),this.broadcastWatches()},t.prototype.diff=function(e){var t=this.config.fragmentMatcher,r=t&&t.match;return this.storeReader.diffQueryAgainstStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,returnPartialData:e.returnPartialData,previousResult:e.previousResult,fragmentMatcherFunction:r,config:this.config})},t.prototype.watch=function(e){var t=this;return this.watches.add(e),function(){t.watches.delete(e)}},t.prototype.evict=function(e){throw new s["a"](7)},t.prototype.reset=function(){return this.data.clear(),this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){var t=[],r=0,n=this.optimisticData;while(n instanceof E)n.optimisticId===e?++r:t.push(n),n=n.parent;if(r>0){this.optimisticData=n;while(t.length>0){var i=t.pop();this.performTransaction(i.transaction,i.optimisticId)}this.broadcastWatches()}},t.prototype.performTransaction=function(e,t){var r=this,n=r.data,i=r.silenceBroadcast;this.silenceBroadcast=!0,"string"===typeof t&&(this.data=this.optimisticData=new E(t,this.optimisticData,e));try{e(this)}finally{this.silenceBroadcast=i,this.data=n}this.broadcastWatches()},t.prototype.recordOptimisticTransaction=function(e,t){return this.performTransaction(e,t)},t.prototype.transformDocument=function(e){if(this.addTypename){var t=this.typenameDocumentCache.get(e);return t||(t=Object(a["a"])(e),this.typenameDocumentCache.set(e,t),this.typenameDocumentCache.set(t,t)),t}return e},t.prototype.broadcastWatches=function(){var e=this;this.silenceBroadcast||this.watches.forEach((function(t){return e.maybeBroadcastWatch(t)}))},t.prototype.maybeBroadcastWatch=function(e){e.callback(this.diff({query:e.query,variables:e.variables,previousResult:e.previousResult&&e.previousResult(),optimistic:e.optimistic}))},t}(i["a"])}}]);