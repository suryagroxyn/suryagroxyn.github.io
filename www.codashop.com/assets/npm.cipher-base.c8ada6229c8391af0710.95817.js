(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.cipher-base"],{6430:function(t,i,n){var o=n("8707").Buffer,r=n("d485").Transform,e=n("7d72").StringDecoder,s=n("3fb5");function h(t){r.call(this),this.hashMode="string"===typeof t,this.hashMode?this[t]=this._finalOrDigest:this.final=this._finalOrDigest,this._final&&(this.__final=this._final,this._final=null),this._decoder=null,this._encoding=null}s(h,r),h.prototype.update=function(t,i,n){"string"===typeof t&&(t=o.from(t,i));var r=this._update(t);return this.hashMode?this:(n&&(r=this._toString(r,n)),r)},h.prototype.setAutoPadding=function(){},h.prototype.getAuthTag=function(){throw new Error("trying to get auth tag in unsupported state")},h.prototype.setAuthTag=function(){throw new Error("trying to set auth tag in unsupported state")},h.prototype.setAAD=function(){throw new Error("trying to set aad in unsupported state")},h.prototype._transform=function(t,i,n){var o;try{this.hashMode?this._update(t):this.push(this._update(t))}catch(r){o=r}finally{n(o)}},h.prototype._flush=function(t){var i;try{this.push(this.__final())}catch(n){i=n}t(i)},h.prototype._finalOrDigest=function(t){var i=this.__final()||o.alloc(0);return t&&(i=this._toString(i,t,!0)),i},h.prototype._toString=function(t,i,n){if(this._decoder||(this._decoder=new e(i),this._encoding=i),this._encoding!==i)throw new Error("can't switch encodings");var o=this._decoder.write(t);return n&&(o+=this._decoder.end()),o},t.exports=h}}]);