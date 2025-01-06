(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.aws-crypto"],{"0103":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Sha256=void 0;var n=r("9ab4"),o=r("5b94"),i=r("e076"),u=r("a54d"),s=function(){function t(t){if(this.hash=new i.RawSha256,t){this.outer=new i.RawSha256;var e=a(t),r=new Uint8Array(o.BLOCK_SIZE);r.set(e);for(var n=0;n<o.BLOCK_SIZE;n++)e[n]^=54,r[n]^=92;this.hash.update(e),this.outer.update(r);for(n=0;n<e.byteLength;n++)e[n]=0}}return t.prototype.update=function(t){if(!(0,u.isEmptyData)(t)&&!this.error)try{this.hash.update((0,u.convertToBuffer)(t))}catch(e){this.error=e}},t.prototype.digestSync=function(){if(this.error)throw this.error;return this.outer?(this.outer.finished||this.outer.update(this.hash.digest()),this.outer.digest()):this.hash.digest()},t.prototype.digest=function(){return(0,n.__awaiter)(this,void 0,void 0,(function(){return(0,n.__generator)(this,(function(t){return[2,this.digestSync()]}))}))},t}();function a(t){var e=(0,u.convertToBuffer)(t);if(e.byteLength>o.BLOCK_SIZE){var r=new i.RawSha256;r.update(e),e=r.digest()}var n=new Uint8Array(o.BLOCK_SIZE);return n.set(e),n}e.Sha256=s},2415:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},2446:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},"2d52":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},3316:function(t,e,r){"use strict";r.r(e),r.d(e,"fromUtf8",(function(){return s})),r.d(e,"toUtf8",(function(){return a}));var n=function(t){for(var e=[],r=0,n=t.length;r<n;r++){var o=t.charCodeAt(r);if(o<128)e.push(o);else if(o<2048)e.push(o>>6|192,63&o|128);else if(r+1<t.length&&55296===(64512&o)&&56320===(64512&t.charCodeAt(r+1))){var i=65536+((1023&o)<<10)+(1023&t.charCodeAt(++r));e.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}else e.push(o>>12|224,o>>6&63|128,63&o|128)}return Uint8Array.from(e)},o=function(t){for(var e="",r=0,n=t.length;r<n;r++){var o=t[r];if(o<128)e+=String.fromCharCode(o);else if(192<=o&&o<224){var i=t[++r];e+=String.fromCharCode((31&o)<<6|63&i)}else if(240<=o&&o<365){var u=[o,t[++r],t[++r],t[++r]],s="%"+u.map((function(t){return t.toString(16)})).join("%");e+=decodeURIComponent(s)}else e+=String.fromCharCode((15&o)<<12|(63&t[++r])<<6|63&t[++r])}return e};function i(t){return(new TextEncoder).encode(t)}function u(t){return new TextDecoder("utf-8").decode(t)}var s=function(t){return"function"===typeof TextEncoder?i(t):n(t)},a=function(t){return"function"===typeof TextDecoder?u(t):o(t)}},"5b94":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MAX_HASHABLE_LENGTH=e.INIT=e.KEY=e.DIGEST_LENGTH=e.BLOCK_SIZE=void 0,e.BLOCK_SIZE=64,e.DIGEST_LENGTH=32,e.KEY=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),e.INIT=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],e.MAX_HASHABLE_LENGTH=Math.pow(2,53)-1},"617e":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("9ab4");n.__exportStar(r("ad4f"),e),n.__exportStar(r("2d52"),e),n.__exportStar(r("2415"),e),n.__exportStar(r("2446"),e),n.__exportStar(r("76e4"),e)},"61c1":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.convertToBuffer=void 0;var n=r("3316"),o="undefined"!==typeof t&&t.from?function(e){return t.from(e,"utf8")}:n.fromUtf8;function i(t){return t instanceof Uint8Array?t:"string"===typeof t?o(t):ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(t)}e.convertToBuffer=i}).call(this,r("b639").Buffer)},"648c":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Sha256=void 0;var n=r("7451"),o=r("6f83"),i=r("9c7a"),u=r("6d5b"),s=r("617e"),a=r("62e8"),f=function(){function t(t){(0,u.supportsWebCrypto)((0,a.locateWindow)())?this.hash=new o.Sha256(t):(0,s.isMsWindow)((0,a.locateWindow)())?this.hash=new n.Sha256(t):this.hash=new i.Sha256(t)}return t.prototype.update=function(t,e){this.hash.update(t,e)},t.prototype.digest=function(){return this.hash.digest()},t}();e.Sha256=f},"6d5b":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("9ab4");n.__exportStar(r("9ed1"),e)},"6f83":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Sha256=void 0;var n=r("a54d"),o=r("a7bd"),i=r("62e8"),u=function(){function t(t){this.toHash=new Uint8Array(0),void 0!==t&&(this.key=new Promise((function(e,r){(0,i.locateWindow)().crypto.subtle.importKey("raw",(0,n.convertToBuffer)(t),o.SHA_256_HMAC_ALGO,!1,["sign"]).then(e,r)})),this.key.catch((function(){})))}return t.prototype.update=function(t){if(!(0,n.isEmptyData)(t)){var e=(0,n.convertToBuffer)(t),r=new Uint8Array(this.toHash.byteLength+e.byteLength);r.set(this.toHash,0),r.set(e,this.toHash.byteLength),this.toHash=r}},t.prototype.digest=function(){var t=this;return this.key?this.key.then((function(e){return(0,i.locateWindow)().crypto.subtle.sign(o.SHA_256_HMAC_ALGO,e,t.toHash).then((function(t){return new Uint8Array(t)}))})):(0,n.isEmptyData)(this.toHash)?Promise.resolve(o.EMPTY_DATA_SHA_256):Promise.resolve().then((function(){return(0,i.locateWindow)().crypto.subtle.digest(o.SHA_256_HASH,t.toHash)})).then((function(t){return Promise.resolve(new Uint8Array(t))}))},t}();e.Sha256=u},7451:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Sha256=void 0;var n=r("9103"),o=r("a7bd"),i=r("5d63"),u=r("62e8"),s=function(){function t(t){t?(this.operation=a(t).then((function(t){return(0,u.locateWindow)().msCrypto.subtle.sign(o.SHA_256_HMAC_ALGO,t)})),this.operation.catch((function(){}))):this.operation=Promise.resolve((0,u.locateWindow)().msCrypto.subtle.digest("SHA-256"))}return t.prototype.update=function(t){var e=this;(0,n.isEmptyData)(t)||(this.operation=this.operation.then((function(r){return r.onerror=function(){e.operation=Promise.reject(new Error("Error encountered updating hash"))},r.process(f(t)),r})),this.operation.catch((function(){})))},t.prototype.digest=function(){return this.operation.then((function(t){return new Promise((function(e,r){t.onerror=function(){r(new Error("Error encountered finalizing hash"))},t.oncomplete=function(){t.result&&e(new Uint8Array(t.result)),r(new Error("Error encountered finalizing hash"))},t.finish()}))}))},t}();function a(t){return new Promise((function(e,r){var n=(0,u.locateWindow)().msCrypto.subtle.importKey("raw",f(t),o.SHA_256_HMAC_ALGO,!1,["sign"]);n.oncomplete=function(){n.result&&e(n.result),r(new Error("ImportKey completed without importing key."))},n.onerror=function(){r(new Error("ImportKey failed to import key."))}}))}function f(t){return"string"===typeof t?(0,i.fromUtf8)(t):ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(t)}e.Sha256=s},"76e4":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isMsWindow=void 0;var n=["decrypt","digest","encrypt","exportKey","generateKey","importKey","sign","verify"];function o(t){return"MSInputMethodContext"in t&&"msCrypto"in t}function i(t){if(o(t)&&void 0!==t.msCrypto.subtle){var e=t.msCrypto,r=e.getRandomValues,i=e.subtle;return n.map((function(t){return i[t]})).concat(r).every((function(t){return"function"===typeof t}))}return!1}e.isMsWindow=i},9103:function(t,e,r){"use strict";function n(t){return"string"===typeof t?0===t.length:0===t.byteLength}Object.defineProperty(e,"__esModule",{value:!0}),e.isEmptyData=void 0,e.isEmptyData=n},9675:function(t,e,r){"use strict";function n(t){return new Uint8Array([(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t])}Object.defineProperty(e,"__esModule",{value:!0}),e.numToUint8=void 0,e.numToUint8=n},"9c7a":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("9ab4");(0,n.__exportStar)(r("0103"),e)},"9ed1":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.supportsZeroByteGCM=e.supportsSubtleCrypto=e.supportsSecureRandom=e.supportsWebCrypto=void 0;var n=r("9ab4"),o=["decrypt","digest","encrypt","exportKey","generateKey","importKey","sign","verify"];function i(t){if(u(t)&&"object"===typeof t.crypto.subtle){var e=t.crypto.subtle;return s(e)}return!1}function u(t){if("object"===typeof t&&"object"===typeof t.crypto){var e=t.crypto.getRandomValues;return"function"===typeof e}return!1}function s(t){return t&&o.every((function(e){return"function"===typeof t[e]}))}function a(t){return n.__awaiter(this,void 0,void 0,(function(){var e,r;return n.__generator(this,(function(n){switch(n.label){case 0:if(!s(t))return[2,!1];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,t.generateKey({name:"AES-GCM",length:128},!1,["encrypt"])];case 2:return e=n.sent(),[4,t.encrypt({name:"AES-GCM",iv:new Uint8Array(Array(12)),additionalData:new Uint8Array(Array(16)),tagLength:128},e,new Uint8Array(0))];case 3:return r=n.sent(),[2,16===r.byteLength];case 4:return n.sent(),[2,!1];case 5:return[2]}}))}))}e.supportsWebCrypto=i,e.supportsSecureRandom=u,e.supportsSubtleCrypto=s,e.supportsZeroByteGCM=a},a54d:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.uint32ArrayFrom=e.numToUint8=e.isEmptyData=e.convertToBuffer=void 0;var n=r("61c1");Object.defineProperty(e,"convertToBuffer",{enumerable:!0,get:function(){return n.convertToBuffer}});var o=r("cd6f");Object.defineProperty(e,"isEmptyData",{enumerable:!0,get:function(){return o.isEmptyData}});var i=r("9675");Object.defineProperty(e,"numToUint8",{enumerable:!0,get:function(){return i.numToUint8}});var u=r("c221");Object.defineProperty(e,"uint32ArrayFrom",{enumerable:!0,get:function(){return u.uint32ArrayFrom}})},a7bd:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EMPTY_DATA_SHA_256=e.SHA_256_HMAC_ALGO=e.SHA_256_HASH=void 0,e.SHA_256_HASH={name:"SHA-256"},e.SHA_256_HMAC_ALGO={name:"HMAC",hash:e.SHA_256_HASH},e.EMPTY_DATA_SHA_256=new Uint8Array([227,176,196,66,152,252,28,20,154,251,244,200,153,111,185,36,39,174,65,228,100,155,147,76,164,149,153,27,120,82,184,85])},ad4f:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},be23:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.WebCryptoSha256=e.Ie11Sha256=void 0;var n=r("9ab4");(0,n.__exportStar)(r("648c"),e);var o=r("7451");Object.defineProperty(e,"Ie11Sha256",{enumerable:!0,get:function(){return o.Sha256}});var i=r("6f83");Object.defineProperty(e,"WebCryptoSha256",{enumerable:!0,get:function(){return i.Sha256}})},c221:function(t,e,r){"use strict";function n(t){if(!Array.from){var e=new Uint32Array(t.length),r=0;while(r<t.length)e[r]=t[r];return e}return Uint32Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.uint32ArrayFrom=void 0,e.uint32ArrayFrom=n},cd6f:function(t,e,r){"use strict";function n(t){return"string"===typeof t?0===t.length:0===t.byteLength}Object.defineProperty(e,"__esModule",{value:!0}),e.isEmptyData=void 0,e.isEmptyData=n},e076:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.RawSha256=void 0;var n=r("5b94"),o=function(){function t(){this.state=Int32Array.from(n.INIT),this.temp=new Int32Array(64),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytesHashed=0,this.finished=!1}return t.prototype.update=function(t){if(this.finished)throw new Error("Attempted to update an already finished hash.");var e=0,r=t.byteLength;if(this.bytesHashed+=r,8*this.bytesHashed>n.MAX_HASHABLE_LENGTH)throw new Error("Cannot hash more than 2^53 - 1 bits");while(r>0)this.buffer[this.bufferLength++]=t[e++],r--,this.bufferLength===n.BLOCK_SIZE&&(this.hashBuffer(),this.bufferLength=0)},t.prototype.digest=function(){if(!this.finished){var t=8*this.bytesHashed,e=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),r=this.bufferLength;if(e.setUint8(this.bufferLength++,128),r%n.BLOCK_SIZE>=n.BLOCK_SIZE-8){for(var o=this.bufferLength;o<n.BLOCK_SIZE;o++)e.setUint8(o,0);this.hashBuffer(),this.bufferLength=0}for(o=this.bufferLength;o<n.BLOCK_SIZE-8;o++)e.setUint8(o,0);e.setUint32(n.BLOCK_SIZE-8,Math.floor(t/4294967296),!0),e.setUint32(n.BLOCK_SIZE-4,t),this.hashBuffer(),this.finished=!0}var i=new Uint8Array(n.DIGEST_LENGTH);for(o=0;o<8;o++)i[4*o]=this.state[o]>>>24&255,i[4*o+1]=this.state[o]>>>16&255,i[4*o+2]=this.state[o]>>>8&255,i[4*o+3]=this.state[o]>>>0&255;return i},t.prototype.hashBuffer=function(){for(var t=this,e=t.buffer,r=t.state,o=r[0],i=r[1],u=r[2],s=r[3],a=r[4],f=r[5],c=r[6],h=r[7],p=0;p<n.BLOCK_SIZE;p++){if(p<16)this.temp[p]=(255&e[4*p])<<24|(255&e[4*p+1])<<16|(255&e[4*p+2])<<8|255&e[4*p+3];else{var d=this.temp[p-2],y=(d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10;d=this.temp[p-15];var _=(d>>>7|d<<25)^(d>>>18|d<<14)^d>>>3;this.temp[p]=(y+this.temp[p-7]|0)+(_+this.temp[p-16]|0)}var l=(((a>>>6|a<<26)^(a>>>11|a<<21)^(a>>>25|a<<7))+(a&f^~a&c)|0)+(h+(n.KEY[p]+this.temp[p]|0)|0)|0,b=((o>>>2|o<<30)^(o>>>13|o<<19)^(o>>>22|o<<10))+(o&i^o&u^i&u)|0;h=c,c=f,f=a,a=s+l|0,s=u,u=i,i=o,o=l+b|0}r[0]+=o,r[1]+=i,r[2]+=u,r[3]+=s,r[4]+=a,r[5]+=f,r[6]+=c,r[7]+=h},t}();e.RawSha256=o}}]);