(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.lukeed"],{b310:function(n,r,t){"use strict";function o(n){return crypto.getRandomValues(new Uint8Array(n))}t.r(r),t.d(r,"v4",(function(){return s}));for(var u,e=4096,i=[],c=0;c<256;c++)i[c]=(c+256).toString(16).substring(1);function s(){(!u||c+16>e)&&(u=o(e),c=0);for(var n,r=0,t="";r<16;r++)n=u[c+r],t+=6==r?i[15&n|64]:8==r?i[63&n|128]:i[n],1&r&&r>1&&r<11&&(t+="-");return c+=16,t}}}]);