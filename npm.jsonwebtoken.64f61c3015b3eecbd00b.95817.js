(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.jsonwebtoken"],{"0eec":function(e,r,t){var o=t("2910"),n=t("f309"),i=t("6e69"),s=t("3975"),a=t("f4e6"),_=t("ef2a"),p=t("33ef"),c=["RS256","RS384","RS512","ES256","ES384","ES512"],E=["RS256","RS384","RS512"],P=["HS256","HS384","HS512"];_&&(c.splice(3,0,"PS256","PS384","PS512"),E.splice(3,0,"PS256","PS384","PS512")),e.exports=function(e,r,t,_){var A;if("function"!==typeof t||_||(_=t,t={}),t||(t={}),t=Object.assign({},t),A=_||function(e,r){if(e)throw e;return r},t.clockTimestamp&&"number"!==typeof t.clockTimestamp)return A(new o("clockTimestamp must be a number"));if(void 0!==t.nonce&&("string"!==typeof t.nonce||""===t.nonce.trim()))return A(new o("nonce must be a non-empty string"));var u=t.clockTimestamp||Math.floor(Date.now()/1e3);if(!e)return A(new o("jwt must be provided"));if("string"!==typeof e)return A(new o("jwt must be a string"));var h,f=e.split(".");if(3!==f.length)return A(new o("jwt malformed"));try{h=s(e,{complete:!0})}catch(m){return A(m)}if(!h)return A(new o("invalid token"));var l,d=h.header;if("function"===typeof r){if(!_)return A(new o("verify must be called asynchronous if secret or public key is provided as a callback"));l=r}else l=function(e,t){return t(null,r)};return l(d,(function(r,s){if(r)return A(new o("error in secret or public key callback: "+r.message));var _,l=""!==f[2].trim();if(!l&&s)return A(new o("jwt signature is required"));if(l&&!s)return A(new o("secret or public key must be provided"));if(l||t.algorithms||(t.algorithms=["none"]),t.algorithms||(t.algorithms=~s.toString().indexOf("BEGIN CERTIFICATE")||~s.toString().indexOf("BEGIN PUBLIC KEY")?c:~s.toString().indexOf("BEGIN RSA PUBLIC KEY")?E:P),!~t.algorithms.indexOf(h.header.alg))return A(new o("invalid algorithm"));try{_=p.verify(e,h.header.alg,s)}catch(R){return A(R)}if(!_)return A(new o("invalid signature"));var m=h.payload;if("undefined"!==typeof m.nbf&&!t.ignoreNotBefore){if("number"!==typeof m.nbf)return A(new o("invalid nbf value"));if(m.nbf>u+(t.clockTolerance||0))return A(new n("jwt not active",new Date(1e3*m.nbf)))}if("undefined"!==typeof m.exp&&!t.ignoreExpiration){if("number"!==typeof m.exp)return A(new o("invalid exp value"));if(u>=m.exp+(t.clockTolerance||0))return A(new i("jwt expired",new Date(1e3*m.exp)))}if(t.audience){var O=Array.isArray(t.audience)?t.audience:[t.audience],I=Array.isArray(m.aud)?m.aud:[m.aud],T=I.some((function(e){return O.some((function(r){return r instanceof RegExp?r.test(e):r===e}))}));if(!T)return A(new o("jwt audience invalid. expected: "+O.join(" or ")))}if(t.issuer){var S="string"===typeof t.issuer&&m.iss!==t.issuer||Array.isArray(t.issuer)&&-1===t.issuer.indexOf(m.iss);if(S)return A(new o("jwt issuer invalid. expected: "+t.issuer))}if(t.subject&&m.sub!==t.subject)return A(new o("jwt subject invalid. expected: "+t.subject));if(t.jwtid&&m.jti!==t.jwtid)return A(new o("jwt jwtid invalid. expected: "+t.jwtid));if(t.nonce&&m.nonce!==t.nonce)return A(new o("jwt nonce invalid. expected: "+t.nonce));if(t.maxAge){if("number"!==typeof m.iat)return A(new o("iat required when maxAge is specified"));var U=a(t.maxAge,m.iat);if("undefined"===typeof U)return A(new o('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));if(u>=U+(t.clockTolerance||0))return A(new i("maxAge exceeded",new Date(1e3*U)))}if(!0===t.complete){var C=h.signature;return A(null,{header:d,payload:m,signature:C})}return A(null,m)}))}},"14b7":function(e,r,t){e.exports={decode:t("3975"),verify:t("0eec"),sign:t("2567"),JsonWebTokenError:t("2910"),NotBeforeError:t("f309"),TokenExpiredError:t("6e69")}},2567:function(e,r,t){(function(r){var o=t("f4e6"),n=t("ef2a"),i=t("33ef"),s=t("9cfb"),a=t("0354"),_=t("4db4"),p=t("67de"),c=t("cd93"),E=t("99f9"),P=t("eb4c"),A=["RS256","RS384","RS512","ES256","ES384","ES512","HS256","HS384","HS512","none"];n&&A.splice(3,0,"PS256","PS384","PS512");var u={expiresIn:{isValid:function(e){return _(e)||E(e)&&e},message:'"expiresIn" should be a number of seconds or string representing a timespan'},notBefore:{isValid:function(e){return _(e)||E(e)&&e},message:'"notBefore" should be a number of seconds or string representing a timespan'},audience:{isValid:function(e){return E(e)||Array.isArray(e)},message:'"audience" must be a string or array'},algorithm:{isValid:s.bind(null,A),message:'"algorithm" must be a valid string enum value'},header:{isValid:c,message:'"header" must be an object'},encoding:{isValid:E,message:'"encoding" must be a string'},issuer:{isValid:E,message:'"issuer" must be a string'},subject:{isValid:E,message:'"subject" must be a string'},jwtid:{isValid:E,message:'"jwtid" must be a string'},noTimestamp:{isValid:a,message:'"noTimestamp" must be a boolean'},keyid:{isValid:E,message:'"keyid" must be a string'},mutatePayload:{isValid:a,message:'"mutatePayload" must be a boolean'}},h={iat:{isValid:p,message:'"iat" should be a number of seconds'},exp:{isValid:p,message:'"exp" should be a number of seconds'},nbf:{isValid:p,message:'"nbf" should be a number of seconds'}};function f(e,r,t,o){if(!c(t))throw new Error('Expected "'+o+'" to be a plain object.');Object.keys(t).forEach((function(n){var i=e[n];if(i){if(!i.isValid(t[n]))throw new Error(i.message)}else if(!r)throw new Error('"'+n+'" is not allowed in "'+o+'"')}))}function l(e){return f(u,!1,e,"options")}function d(e){return f(h,!0,e,"payload")}var m={audience:"aud",issuer:"iss",subject:"sub",jwtid:"jti"},O=["expiresIn","notBefore","noTimestamp","audience","issuer","subject","jwtid"];e.exports=function(e,t,n,s){"function"===typeof n?(s=n,n={}):n=n||{};var a="object"===typeof e&&!r.isBuffer(e),_=Object.assign({alg:n.algorithm||"HS256",typ:a?"JWT":void 0,kid:n.keyid},n.header);function p(e){if(s)return s(e);throw e}if(!t&&"none"!==n.algorithm)return p(new Error("secretOrPrivateKey must have a value"));if("undefined"===typeof e)return p(new Error("payload is required"));if(a){try{d(e)}catch(u){return p(u)}n.mutatePayload||(e=Object.assign({},e))}else{var c=O.filter((function(e){return"undefined"!==typeof n[e]}));if(c.length>0)return p(new Error("invalid "+c.join(",")+" option for "+typeof e+" payload"))}if("undefined"!==typeof e.exp&&"undefined"!==typeof n.expiresIn)return p(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));if("undefined"!==typeof e.nbf&&"undefined"!==typeof n.notBefore)return p(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));try{l(n)}catch(u){return p(u)}var E=e.iat||Math.floor(Date.now()/1e3);if(n.noTimestamp?delete e.iat:a&&(e.iat=E),"undefined"!==typeof n.notBefore){try{e.nbf=o(n.notBefore,E)}catch(h){return p(h)}if("undefined"===typeof e.nbf)return p(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}if("undefined"!==typeof n.expiresIn&&"object"===typeof e){try{e.exp=o(n.expiresIn,E)}catch(h){return p(h)}if("undefined"===typeof e.exp)return p(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}Object.keys(m).forEach((function(r){var t=m[r];if("undefined"!==typeof n[r]){if("undefined"!==typeof e[t])return p(new Error('Bad "options.'+r+'" option. The payload already has an "'+t+'" property.'));e[t]=n[r]}}));var A=n.encoding||"utf8";if("function"!==typeof s)return i.sign({header:_,payload:e,secret:t,encoding:A});s=s&&P(s),i.createSign({header:_,privateKey:t,payload:e,encoding:A}).once("error",s).once("done",(function(e){s(null,e)}))}}).call(this,t("b639").Buffer)},2910:function(e,r){var t=function(e,r){Error.call(this,e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="JsonWebTokenError",this.message=e,r&&(this.inner=r)};t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,e.exports=t},3975:function(e,r,t){var o=t("33ef");e.exports=function(e,r){r=r||{};var t=o.decode(e,r);if(!t)return null;var n=t.payload;if("string"===typeof n)try{var i=JSON.parse(n);null!==i&&"object"===typeof i&&(n=i)}catch(s){}return!0===r.complete?{header:t.header,payload:n,signature:t.signature}:n}},"6e69":function(e,r,t){var o=t("2910"),n=function(e,r){o.call(this,e),this.name="TokenExpiredError",this.expiredAt=r};n.prototype=Object.create(o.prototype),n.prototype.constructor=n,e.exports=n},bf4e:function(e,r,t){(function(t){var o;r=e.exports=ee,o="object"===typeof t&&Object({VUE_APP_PRERENDER:"enabled",NODE_ENV:"production",VUE_APP_APP_BASE_URL:"https://www.codashop.com",VUE_APP_CODA_SHOP_REST_API_HOST:"https://order.codashop.com",VUE_APP_CODA_SHOP_API_HOST:"https://www.codashop.com",VUE_APP_CODA_SHOP_AIRTIME_DESKTOP:"https://airtime.codapayments.com/airtime/js/airtime_v1.0.js",VUE_APP_CODA_SHOP_AIRTIME_CDN:"https://cdn1.codashop.com/P/production/airtime/m/js/airtime_v1.0m.js",VUE_APP_CODA_SHOP_AIRTIME_URL:"https://airtime.codapayments.com/airtime/begin",VUE_APP_CODA_SHOP_GRAPHQL_HOST:"https://api-sg.codashop.com/spring/api/graphql",VUE_APP_CODA_SHOP_GRAPHQL_V2:"https://api-sg.codashop.com/spring/api/v2/graphql",VUE_APP_CODA_ACCOUNTS_API_HOST:"https://accounts.codashop.com",VUE_APP_CODA_SHOP_ACCOUNTS_API_HOST:"https://customers.codashop.com",VUE_APP_CODA_SHOP_COUNTRY_SUGGESTION:"https://www.codashop.com/spring/api/suggestCountry",VUE_APP_SENTRY_ENDPOINT:"https://efb74ce420d14f0cb1d686b5ad095f31@o406587.ingest.sentry.io/5274326",VUE_APP_SENTRY_ENV:"production",VUE_APP_PARTNERSHIP_API:"https://api-{REGION}.codashop.com/shop/marketing-and-partnerships",VUE_APP_CODA_SHOP_GTM_CONTAINER_ID:"GTM-M85MVJD",VUE_APP_RECAPTCHA_SITE_KEY:"6Lc8br0ZAAAAAOAZHpdE1Fm9RA9tK85W3ano_l0-",VUE_APP_CONFIRMATION_URL_CALLBACK_PREFIX:"",VUE_APP_USER_SIGNUP_CAPTCHA_MODE:"invisible",VUE_APP_RECAPTCHA_INVISIBLE_SITE_KEY:"6LeG6eoiAAAAAB6Tts4uR_bVWt_FfIkxtvVf1lxi",VUE_APP_AUTHENTICATION_SERVICE:"sg,ph,my,bd,pk,lk,th,kh,la,eg,mm,vn,tl,bh,kw,sa,ma,ng,za,kr,ru,tw,mn,hk,br,ca,ar,bo,cl,co,mx,py,pe,id,in,ae,tr,jp,np,ec,uy,be,dk,de,es,fr,it,nl,no,at,pl,ch,se,gb,us,cz,hu,pt,ro,au,nz",VUE_APP_CODA_REWARDS_LANDING_PAGE_SEO_SUPPORTED_COUNTRIES:"my,th,ph,id",VUE_APP_ENABLE_SERVICE_WORKER:"true",VUE_APP_SHOW_BUILD_VERSION_IN_CONSOLE:"false",VUE_APP_ASSETS_CDN_DOMAIN_NAME:"/",VUE_APP_PRERENDER_PORT:"80",VUE_APP_THEME_COLOR:"#280031",VUE_APP_THEME_GRAB:"grab.codashop",VUE_APP_ALLOWED_HOSTS:"www.codashop.com,india.codashop.com,grab.codashop.com,localhost,www1.codashop.com,app.codashop.com,pre-www.codashop.com",VUE_APP_SSK_COOKIE_REFRESH_INTERVAL:"3300000",VUE_APP_AMPLIFY_REGION:"ap-southeast-1",VUE_APP_AMPLIFY_IDENTITY_POOL_ID:"ap-southeast-1:d4164b72-5de2-429d-8702-ec9a10d513c5",VUE_APP_AMPLIFY_USER_POOL_ID:"ap-southeast-1_D6M8BBzG9",VUE_APP_AMPLIFY_WEB_CLIENT_ID:"437f3u0sfh7h0av5rlrrjdtmsb",VUE_APP_AMPLIFY_DOMAIN:"auth.codashop.com",VUE_APP_AMPLIFY_REDIRECT_SIGNIN:"https://www.codashop.com/",VUE_APP_AMPLIFY_REDIRECT_SIGNOUT:"https://www.codashop.com/",VUE_APP_AUTH_VERIFY_OTP_EXPIRES_SECONDS:"90",VUE_APP_CC_TRANS_HISTORY_ITEMS_PER_PAGE:"9",VUE_APP_CC_TRANS_HISTORY_ITEMS_FIRST_PAGE_OFFSET:"3",VUE_APP_CODACASH_PAYMENT_CHANNEL_ID:"239,259,321,453,318,319,691,654,1201",VUE_APP_CODA_CASH_API_HOST:"https://wallet-api.codacash.com",VUE_APP_CODA_CASH_MERCHANT_ID:"ea3ceab4-6c45-5f28-b547-cd5dd4bb05b2",VUE_APP_CODA_CASH_WEBSOCKET_URL:"wss://wallet-ws.codacash.com",VUE_APP_CODA_CASH_OTP_TIMEOUT:"100",VUE_APP_CODA_CASH_WEBSOCKET_PING_MIN:"5",VUE_APP_CODA_CASH_OTP_LENGTH:"6",VUE_APP_CODA_CASH_QUICK_TOPUP_TIMEOUT:"180",VUE_APP_CODA_ACCOUNTS_DELETE_SWITCH_TIMER:"30",VUE_APP_CODA_ACCOUNTS_DELETE_SWITCH_LIMIT:"3",VUE_APP_CODA_ACCOUNTS_DELETE_SWITCH_DAY_DURATION:"1",VUE_APP_CODA_ACCOUNTS_API_HOST_TIMEOUT:"15000",VUE_APP_REGION_ENDPOINT:"true",VUE_APP_CODA_SHOP_REGION_GRAPHQL_HOST:"https://api-{REGION}.codashop.com/spring/api/graphql",VUE_APP_CODA_SHOP_REST_API_REGION_HOST:"https://order-{REGION}.codashop.com",VUE_APP_CODA_SHOP_REGION_API_HOST:"https://api-{REGION}.codashop.com",VUE_APP_TRUSTPILOT_INVITATION_API:"https://invitations-api.trustpilot.com/v1/private/business-units/60a5511bf975970001399be3/email-invitations",VUE_APP_TRUSTPILOT_REVIEW_SITE_URL:"https://www.trustpilot.com/review/codashop.com",VUE_APP_WHITELABEL_ID:"",VUE_APP_GVT_ID_FREE_FIRE_LATAM:"689",VUE_APP_CODA_SHOP_ACCOUNTS_CLIENT:"7537ff32-511c-445d-be8d-f9ad54352389",VUE_APP_CODA_SHOP_API_LEAP_ENDPOINT:"https://shopapi.codashop.com",VUE_APP_TREX_ENV:"prod",VUE_APP_FAVICON_FOLDER:"/img/icons",BASE_URL:"/"})&&Object({VUE_APP_PRERENDER:"enabled",NODE_ENV:"production",VUE_APP_APP_BASE_URL:"https://www.codashop.com",VUE_APP_CODA_SHOP_REST_API_HOST:"https://order.codashop.com",VUE_APP_CODA_SHOP_API_HOST:"https://www.codashop.com",VUE_APP_CODA_SHOP_AIRTIME_DESKTOP:"https://airtime.codapayments.com/airtime/js/airtime_v1.0.js",VUE_APP_CODA_SHOP_AIRTIME_CDN:"https://cdn1.codashop.com/P/production/airtime/m/js/airtime_v1.0m.js",VUE_APP_CODA_SHOP_AIRTIME_URL:"https://airtime.codapayments.com/airtime/begin",VUE_APP_CODA_SHOP_GRAPHQL_HOST:"https://api-sg.codashop.com/spring/api/graphql",VUE_APP_CODA_SHOP_GRAPHQL_V2:"https://api-sg.codashop.com/spring/api/v2/graphql",VUE_APP_CODA_ACCOUNTS_API_HOST:"https://accounts.codashop.com",VUE_APP_CODA_SHOP_ACCOUNTS_API_HOST:"https://customers.codashop.com",VUE_APP_CODA_SHOP_COUNTRY_SUGGESTION:"https://www.codashop.com/spring/api/suggestCountry",VUE_APP_SENTRY_ENDPOINT:"https://efb74ce420d14f0cb1d686b5ad095f31@o406587.ingest.sentry.io/5274326",VUE_APP_SENTRY_ENV:"production",VUE_APP_PARTNERSHIP_API:"https://api-{REGION}.codashop.com/shop/marketing-and-partnerships",VUE_APP_CODA_SHOP_GTM_CONTAINER_ID:"GTM-M85MVJD",VUE_APP_RECAPTCHA_SITE_KEY:"6Lc8br0ZAAAAAOAZHpdE1Fm9RA9tK85W3ano_l0-",VUE_APP_CONFIRMATION_URL_CALLBACK_PREFIX:"",VUE_APP_USER_SIGNUP_CAPTCHA_MODE:"invisible",VUE_APP_RECAPTCHA_INVISIBLE_SITE_KEY:"6LeG6eoiAAAAAB6Tts4uR_bVWt_FfIkxtvVf1lxi",VUE_APP_AUTHENTICATION_SERVICE:"sg,ph,my,bd,pk,lk,th,kh,la,eg,mm,vn,tl,bh,kw,sa,ma,ng,za,kr,ru,tw,mn,hk,br,ca,ar,bo,cl,co,mx,py,pe,id,in,ae,tr,jp,np,ec,uy,be,dk,de,es,fr,it,nl,no,at,pl,ch,se,gb,us,cz,hu,pt,ro,au,nz",VUE_APP_CODA_REWARDS_LANDING_PAGE_SEO_SUPPORTED_COUNTRIES:"my,th,ph,id",VUE_APP_ENABLE_SERVICE_WORKER:"true",VUE_APP_SHOW_BUILD_VERSION_IN_CONSOLE:"false",VUE_APP_ASSETS_CDN_DOMAIN_NAME:"/",VUE_APP_PRERENDER_PORT:"80",VUE_APP_THEME_COLOR:"#280031",VUE_APP_THEME_GRAB:"grab.codashop",VUE_APP_ALLOWED_HOSTS:"www.codashop.com,india.codashop.com,grab.codashop.com,localhost,www1.codashop.com,app.codashop.com,pre-www.codashop.com",VUE_APP_SSK_COOKIE_REFRESH_INTERVAL:"3300000",VUE_APP_AMPLIFY_REGION:"ap-southeast-1",VUE_APP_AMPLIFY_IDENTITY_POOL_ID:"ap-southeast-1:d4164b72-5de2-429d-8702-ec9a10d513c5",VUE_APP_AMPLIFY_USER_POOL_ID:"ap-southeast-1_D6M8BBzG9",VUE_APP_AMPLIFY_WEB_CLIENT_ID:"437f3u0sfh7h0av5rlrrjdtmsb",VUE_APP_AMPLIFY_DOMAIN:"auth.codashop.com",VUE_APP_AMPLIFY_REDIRECT_SIGNIN:"https://www.codashop.com/",VUE_APP_AMPLIFY_REDIRECT_SIGNOUT:"https://www.codashop.com/",VUE_APP_AUTH_VERIFY_OTP_EXPIRES_SECONDS:"90",VUE_APP_CC_TRANS_HISTORY_ITEMS_PER_PAGE:"9",VUE_APP_CC_TRANS_HISTORY_ITEMS_FIRST_PAGE_OFFSET:"3",VUE_APP_CODACASH_PAYMENT_CHANNEL_ID:"239,259,321,453,318,319,691,654,1201",VUE_APP_CODA_CASH_API_HOST:"https://wallet-api.codacash.com",VUE_APP_CODA_CASH_MERCHANT_ID:"ea3ceab4-6c45-5f28-b547-cd5dd4bb05b2",VUE_APP_CODA_CASH_WEBSOCKET_URL:"wss://wallet-ws.codacash.com",VUE_APP_CODA_CASH_OTP_TIMEOUT:"100",VUE_APP_CODA_CASH_WEBSOCKET_PING_MIN:"5",VUE_APP_CODA_CASH_OTP_LENGTH:"6",VUE_APP_CODA_CASH_QUICK_TOPUP_TIMEOUT:"180",VUE_APP_CODA_ACCOUNTS_DELETE_SWITCH_TIMER:"30",VUE_APP_CODA_ACCOUNTS_DELETE_SWITCH_LIMIT:"3",VUE_APP_CODA_ACCOUNTS_DELETE_SWITCH_DAY_DURATION:"1",VUE_APP_CODA_ACCOUNTS_API_HOST_TIMEOUT:"15000",VUE_APP_REGION_ENDPOINT:"true",VUE_APP_CODA_SHOP_REGION_GRAPHQL_HOST:"https://api-{REGION}.codashop.com/spring/api/graphql",VUE_APP_CODA_SHOP_REST_API_REGION_HOST:"https://order-{REGION}.codashop.com",VUE_APP_CODA_SHOP_REGION_API_HOST:"https://api-{REGION}.codashop.com",VUE_APP_TRUSTPILOT_INVITATION_API:"https://invitations-api.trustpilot.com/v1/private/business-units/60a5511bf975970001399be3/email-invitations",VUE_APP_TRUSTPILOT_REVIEW_SITE_URL:"https://www.trustpilot.com/review/codashop.com",VUE_APP_WHITELABEL_ID:"",VUE_APP_GVT_ID_FREE_FIRE_LATAM:"689",VUE_APP_CODA_SHOP_ACCOUNTS_CLIENT:"7537ff32-511c-445d-be8d-f9ad54352389",VUE_APP_CODA_SHOP_API_LEAP_ENDPOINT:"https://shopapi.codashop.com",VUE_APP_TREX_ENV:"prod",VUE_APP_FAVICON_FOLDER:"/img/icons",BASE_URL:"/"}).NODE_DEBUG&&/\bsemver\b/i.test(Object({VUE_APP_PRERENDER:"enabled",NODE_ENV:"production",VUE_APP_APP_BASE_URL:"https://www.codashop.com",VUE_APP_CODA_SHOP_REST_API_HOST:"https://order.codashop.com",VUE_APP_CODA_SHOP_API_HOST:"https://www.codashop.com",VUE_APP_CODA_SHOP_AIRTIME_DESKTOP:"https://airtime.codapayments.com/airtime/js/airtime_v1.0.js",VUE_APP_CODA_SHOP_AIRTIME_CDN:"https://cdn1.codashop.com/P/production/airtime/m/js/airtime_v1.0m.js",VUE_APP_CODA_SHOP_AIRTIME_URL:"https://airtime.codapayments.com/airtime/begin",VUE_APP_CODA_SHOP_GRAPHQL_HOST:"https://api-sg.codashop.com/spring/api/graphql",VUE_APP_CODA_SHOP_GRAPHQL_V2:"https://api-sg.codashop.com/spring/api/v2/graphql",VUE_APP_CODA_ACCOUNTS_API_HOST:"https://accounts.codashop.com",VUE_APP_CODA_SHOP_ACCOUNTS_API_HOST:"https://customers.codashop.com",VUE_APP_CODA_SHOP_COUNTRY_SUGGESTION:"https://www.codashop.com/spring/api/suggestCountry",VUE_APP_SENTRY_ENDPOINT:"https://efb74ce420d14f0cb1d686b5ad095f31@o406587.ingest.sentry.io/5274326",VUE_APP_SENTRY_ENV:"production",VUE_APP_PARTNERSHIP_API:"https://api-{REGION}.codashop.com/shop/marketing-and-partnerships",VUE_APP_CODA_SHOP_GTM_CONTAINER_ID:"GTM-M85MVJD",VUE_APP_RECAPTCHA_SITE_KEY:"6Lc8br0ZAAAAAOAZHpdE1Fm9RA9tK85W3ano_l0-",VUE_APP_CONFIRMATION_URL_CALLBACK_PREFIX:"",VUE_APP_USER_SIGNUP_CAPTCHA_MODE:"invisible",VUE_APP_RECAPTCHA_INVISIBLE_SITE_KEY:"6LeG6eoiAAAAAB6Tts4uR_bVWt_FfIkxtvVf1lxi",VUE_APP_AUTHENTICATION_SERVICE:"sg,ph,my,bd,pk,lk,th,kh,la,eg,mm,vn,tl,bh,kw,sa,ma,ng,za,kr,ru,tw,mn,hk,br,ca,ar,bo,cl,co,mx,py,pe,id,in,ae,tr,jp,np,ec,uy,be,dk,de,es,fr,it,nl,no,at,pl,ch,se,gb,us,cz,hu,pt,ro,au,nz",VUE_APP_CODA_REWARDS_LANDING_PAGE_SEO_SUPPORTED_COUNTRIES:"my,th,ph,id",VUE_APP_ENABLE_SERVICE_WORKER:"true",VUE_APP_SHOW_BUILD_VERSION_IN_CONSOLE:"false",VUE_APP_ASSETS_CDN_DOMAIN_NAME:"/",VUE_APP_PRERENDER_PORT:"80",VUE_APP_THEME_COLOR:"#280031",VUE_APP_THEME_GRAB:"grab.codashop",VUE_APP_ALLOWED_HOSTS:"www.codashop.com,india.codashop.com,grab.codashop.com,localhost,www1.codashop.com,app.codashop.com,pre-www.codashop.com",VUE_APP_SSK_COOKIE_REFRESH_INTERVAL:"3300000",VUE_APP_AMPLIFY_REGION:"ap-southeast-1",VUE_APP_AMPLIFY_IDENTITY_POOL_ID:"ap-southeast-1:d4164b72-5de2-429d-8702-ec9a10d513c5",VUE_APP_AMPLIFY_USER_POOL_ID:"ap-southeast-1_D6M8BBzG9",VUE_APP_AMPLIFY_WEB_CLIENT_ID:"437f3u0sfh7h0av5rlrrjdtmsb",VUE_APP_AMPLIFY_DOMAIN:"auth.codashop.com",VUE_APP_AMPLIFY_REDIRECT_SIGNIN:"https://www.codashop.com/",VUE_APP_AMPLIFY_REDIRECT_SIGNOUT:"https://www.codashop.com/",VUE_APP_AUTH_VERIFY_OTP_EXPIRES_SECONDS:"90",VUE_APP_CC_TRANS_HISTORY_ITEMS_PER_PAGE:"9",VUE_APP_CC_TRANS_HISTORY_ITEMS_FIRST_PAGE_OFFSET:"3",VUE_APP_CODACASH_PAYMENT_CHANNEL_ID:"239,259,321,453,318,319,691,654,1201",VUE_APP_CODA_CASH_API_HOST:"https://wallet-api.codacash.com",VUE_APP_CODA_CASH_MERCHANT_ID:"ea3ceab4-6c45-5f28-b547-cd5dd4bb05b2",VUE_APP_CODA_CASH_WEBSOCKET_URL:"wss://wallet-ws.codacash.com",VUE_APP_CODA_CASH_OTP_TIMEOUT:"100",VUE_APP_CODA_CASH_WEBSOCKET_PING_MIN:"5",VUE_APP_CODA_CASH_OTP_LENGTH:"6",VUE_APP_CODA_CASH_QUICK_TOPUP_TIMEOUT:"180",VUE_APP_CODA_ACCOUNTS_DELETE_SWITCH_TIMER:"30",VUE_APP_CODA_ACCOUNTS_DELETE_SWITCH_LIMIT:"3",VUE_APP_CODA_ACCOUNTS_DELETE_SWITCH_DAY_DURATION:"1",VUE_APP_CODA_ACCOUNTS_API_HOST_TIMEOUT:"15000",VUE_APP_REGION_ENDPOINT:"true",VUE_APP_CODA_SHOP_REGION_GRAPHQL_HOST:"https://api-{REGION}.codashop.com/spring/api/graphql",VUE_APP_CODA_SHOP_REST_API_REGION_HOST:"https://order-{REGION}.codashop.com",VUE_APP_CODA_SHOP_REGION_API_HOST:"https://api-{REGION}.codashop.com",VUE_APP_TRUSTPILOT_INVITATION_API:"https://invitations-api.trustpilot.com/v1/private/business-units/60a5511bf975970001399be3/email-invitations",VUE_APP_TRUSTPILOT_REVIEW_SITE_URL:"https://www.trustpilot.com/review/codashop.com",VUE_APP_WHITELABEL_ID:"",VUE_APP_GVT_ID_FREE_FIRE_LATAM:"689",VUE_APP_CODA_SHOP_ACCOUNTS_CLIENT:"7537ff32-511c-445d-be8d-f9ad54352389",VUE_APP_CODA_SHOP_API_LEAP_ENDPOINT:"https://shopapi.codashop.com",VUE_APP_TREX_ENV:"prod",VUE_APP_FAVICON_FOLDER:"/img/icons",BASE_URL:"/"}).NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},r.SEMVER_SPEC_VERSION="2.0.0";var n=256,i=Number.MAX_SAFE_INTEGER||9007199254740991,s=16,a=r.re=[],_=r.src=[],p=0,c=p++;_[c]="0|[1-9]\\d*";var E=p++;_[E]="[0-9]+";var P=p++;_[P]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var A=p++;_[A]="("+_[c]+")\\.("+_[c]+")\\.("+_[c]+")";var u=p++;_[u]="("+_[E]+")\\.("+_[E]+")\\.("+_[E]+")";var h=p++;_[h]="(?:"+_[c]+"|"+_[P]+")";var f=p++;_[f]="(?:"+_[E]+"|"+_[P]+")";var l=p++;_[l]="(?:-("+_[h]+"(?:\\."+_[h]+")*))";var d=p++;_[d]="(?:-?("+_[f]+"(?:\\."+_[f]+")*))";var m=p++;_[m]="[0-9A-Za-z-]+";var O=p++;_[O]="(?:\\+("+_[m]+"(?:\\."+_[m]+")*))";var I=p++,T="v?"+_[A]+_[l]+"?"+_[O]+"?";_[I]="^"+T+"$";var S="[v=\\s]*"+_[u]+_[d]+"?"+_[O]+"?",U=p++;_[U]="^"+S+"$";var C=p++;_[C]="((?:<|>)?=?)";var R=p++;_[R]=_[E]+"|x|X|\\*";var V=p++;_[V]=_[c]+"|x|X|\\*";var v=p++;_[v]="[v=\\s]*("+_[V]+")(?:\\.("+_[V]+")(?:\\.("+_[V]+")(?:"+_[l]+")?"+_[O]+"?)?)?";var w=p++;_[w]="[v=\\s]*("+_[R]+")(?:\\.("+_[R]+")(?:\\.("+_[R]+")(?:"+_[d]+")?"+_[O]+"?)?)?";var N=p++;_[N]="^"+_[C]+"\\s*"+_[v]+"$";var g=p++;_[g]="^"+_[C]+"\\s*"+_[w]+"$";var D=p++;_[D]="(?:^|[^\\d])(\\d{1,"+s+"})(?:\\.(\\d{1,"+s+"}))?(?:\\.(\\d{1,"+s+"}))?(?:$|[^\\d])";var b=p++;_[b]="(?:~>?)";var y=p++;_[y]="(\\s*)"+_[b]+"\\s+",a[y]=new RegExp(_[y],"g");var H="$1~",L=p++;_[L]="^"+_[b]+_[v]+"$";var M=p++;_[M]="^"+_[b]+_[w]+"$";var j=p++;_[j]="(?:\\^)";var G=p++;_[G]="(\\s*)"+_[j]+"\\s+",a[G]=new RegExp(_[G],"g");var x="$1^",k=p++;_[k]="^"+_[j]+_[v]+"$";var B=p++;_[B]="^"+_[j]+_[w]+"$";var F=p++;_[F]="^"+_[C]+"\\s*("+S+")$|^$";var Y=p++;_[Y]="^"+_[C]+"\\s*("+T+")$|^$";var W=p++;_[W]="(\\s*)"+_[C]+"\\s*("+S+"|"+_[v]+")",a[W]=new RegExp(_[W],"g");var K="$1$2$3",$=p++;_[$]="^\\s*("+_[v]+")\\s+-\\s+("+_[v]+")\\s*$";var q=p++;_[q]="^\\s*("+_[w]+")\\s+-\\s+("+_[w]+")\\s*$";var z=p++;_[z]="(<|>)?=?\\s*\\*";for(var X=0;X<p;X++)o(X,_[X]),a[X]||(a[X]=new RegExp(_[X]));function Q(e,r){if(r&&"object"===typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof ee)return e;if("string"!==typeof e)return null;if(e.length>n)return null;var t=r.loose?a[U]:a[I];if(!t.test(e))return null;try{return new ee(e,r)}catch(o){return null}}function J(e,r){var t=Q(e,r);return t?t.version:null}function Z(e,r){var t=Q(e.trim().replace(/^[=v]+/,""),r);return t?t.version:null}function ee(e,r){if(r&&"object"===typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof ee){if(e.loose===r.loose)return e;e=e.version}else if("string"!==typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>n)throw new TypeError("version is longer than "+n+" characters");if(!(this instanceof ee))return new ee(e,r);o("SemVer",e,r),this.options=r,this.loose=!!r.loose;var t=e.trim().match(r.loose?a[U]:a[I]);if(!t)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map((function(e){if(/^[0-9]+$/.test(e)){var r=+e;if(r>=0&&r<i)return r}return e})):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}function re(e,r,t,o){"string"===typeof t&&(o=t,t=void 0);try{return new ee(e,t).inc(r,o).version}catch(n){return null}}function te(e,r){if(fe(e,r))return null;var t=Q(e),o=Q(r),n="";if(t.prerelease.length||o.prerelease.length){n="pre";var i="prerelease"}for(var s in t)if(("major"===s||"minor"===s||"patch"===s)&&t[s]!==o[s])return n+s;return i}r.parse=Q,r.valid=J,r.clean=Z,r.SemVer=ee,ee.prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},ee.prototype.toString=function(){return this.version},ee.prototype.compare=function(e){return o("SemVer.compare",this.version,this.options,e),e instanceof ee||(e=new ee(e,this.options)),this.compareMain(e)||this.comparePre(e)},ee.prototype.compareMain=function(e){return e instanceof ee||(e=new ee(e,this.options)),ne(this.major,e.major)||ne(this.minor,e.minor)||ne(this.patch,e.patch)},ee.prototype.comparePre=function(e){if(e instanceof ee||(e=new ee(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var r=0;do{var t=this.prerelease[r],n=e.prerelease[r];if(o("prerelease compare",r,t,n),void 0===t&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===t)return-1;if(t!==n)return ne(t,n)}while(++r)},ee.prototype.inc=function(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{var t=this.prerelease.length;while(--t>=0)"number"===typeof this.prerelease[t]&&(this.prerelease[t]++,t=-2);-1===t&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},r.inc=re,r.diff=te,r.compareIdentifiers=ne;var oe=/^[0-9]+$/;function ne(e,r){var t=oe.test(e),o=oe.test(r);return t&&o&&(e=+e,r=+r),e===r?0:t&&!o?-1:o&&!t?1:e<r?-1:1}function ie(e,r){return ne(r,e)}function se(e,r){return new ee(e,r).major}function ae(e,r){return new ee(e,r).minor}function _e(e,r){return new ee(e,r).patch}function pe(e,r,t){return new ee(e,t).compare(new ee(r,t))}function ce(e,r){return pe(e,r,!0)}function Ee(e,r,t){return pe(r,e,t)}function Pe(e,t){return e.sort((function(e,o){return r.compare(e,o,t)}))}function Ae(e,t){return e.sort((function(e,o){return r.rcompare(e,o,t)}))}function ue(e,r,t){return pe(e,r,t)>0}function he(e,r,t){return pe(e,r,t)<0}function fe(e,r,t){return 0===pe(e,r,t)}function le(e,r,t){return 0!==pe(e,r,t)}function de(e,r,t){return pe(e,r,t)>=0}function me(e,r,t){return pe(e,r,t)<=0}function Oe(e,r,t,o){switch(r){case"===":return"object"===typeof e&&(e=e.version),"object"===typeof t&&(t=t.version),e===t;case"!==":return"object"===typeof e&&(e=e.version),"object"===typeof t&&(t=t.version),e!==t;case"":case"=":case"==":return fe(e,t,o);case"!=":return le(e,t,o);case">":return ue(e,t,o);case">=":return de(e,t,o);case"<":return he(e,t,o);case"<=":return me(e,t,o);default:throw new TypeError("Invalid operator: "+r)}}function Ie(e,r){if(r&&"object"===typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof Ie){if(e.loose===!!r.loose)return e;e=e.value}if(!(this instanceof Ie))return new Ie(e,r);o("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===Te?this.value="":this.value=this.operator+this.semver.version,o("comp",this)}r.rcompareIdentifiers=ie,r.major=se,r.minor=ae,r.patch=_e,r.compare=pe,r.compareLoose=ce,r.rcompare=Ee,r.sort=Pe,r.rsort=Ae,r.gt=ue,r.lt=he,r.eq=fe,r.neq=le,r.gte=de,r.lte=me,r.cmp=Oe,r.Comparator=Ie;var Te={};function Se(e,r){if(r&&"object"===typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof Se)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new Se(e.raw,r);if(e instanceof Ie)return new Se(e.value,r);if(!(this instanceof Se))return new Se(e,r);if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map((function(e){return this.parseRange(e.trim())}),this).filter((function(e){return e.length})),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function Ue(e,r){return new Se(e,r).set.map((function(e){return e.map((function(e){return e.value})).join(" ").trim().split(" ")}))}function Ce(e,r){return o("comp",e,r),e=we(e,r),o("caret",e),e=Ve(e,r),o("tildes",e),e=ge(e,r),o("xrange",e),e=be(e,r),o("stars",e),e}function Re(e){return!e||"x"===e.toLowerCase()||"*"===e}function Ve(e,r){return e.trim().split(/\s+/).map((function(e){return ve(e,r)})).join(" ")}function ve(e,r){var t=r.loose?a[M]:a[L];return e.replace(t,(function(r,t,n,i,s){var a;return o("tilde",e,r,t,n,i,s),Re(t)?a="":Re(n)?a=">="+t+".0.0 <"+(+t+1)+".0.0":Re(i)?a=">="+t+"."+n+".0 <"+t+"."+(+n+1)+".0":s?(o("replaceTilde pr",s),a=">="+t+"."+n+"."+i+"-"+s+" <"+t+"."+(+n+1)+".0"):a=">="+t+"."+n+"."+i+" <"+t+"."+(+n+1)+".0",o("tilde return",a),a}))}function we(e,r){return e.trim().split(/\s+/).map((function(e){return Ne(e,r)})).join(" ")}function Ne(e,r){o("caret",e,r);var t=r.loose?a[B]:a[k];return e.replace(t,(function(r,t,n,i,s){var a;return o("caret",e,r,t,n,i,s),Re(t)?a="":Re(n)?a=">="+t+".0.0 <"+(+t+1)+".0.0":Re(i)?a="0"===t?">="+t+"."+n+".0 <"+t+"."+(+n+1)+".0":">="+t+"."+n+".0 <"+(+t+1)+".0.0":s?(o("replaceCaret pr",s),a="0"===t?"0"===n?">="+t+"."+n+"."+i+"-"+s+" <"+t+"."+n+"."+(+i+1):">="+t+"."+n+"."+i+"-"+s+" <"+t+"."+(+n+1)+".0":">="+t+"."+n+"."+i+"-"+s+" <"+(+t+1)+".0.0"):(o("no pr"),a="0"===t?"0"===n?">="+t+"."+n+"."+i+" <"+t+"."+n+"."+(+i+1):">="+t+"."+n+"."+i+" <"+t+"."+(+n+1)+".0":">="+t+"."+n+"."+i+" <"+(+t+1)+".0.0"),o("caret return",a),a}))}function ge(e,r){return o("replaceXRanges",e,r),e.split(/\s+/).map((function(e){return De(e,r)})).join(" ")}function De(e,r){e=e.trim();var t=r.loose?a[g]:a[N];return e.replace(t,(function(r,t,n,i,s,a){o("xRange",e,r,t,n,i,s,a);var _=Re(n),p=_||Re(i),c=p||Re(s),E=c;return"="===t&&E&&(t=""),_?r=">"===t||"<"===t?"<0.0.0":"*":t&&E?(p&&(i=0),s=0,">"===t?(t=">=",p?(n=+n+1,i=0,s=0):(i=+i+1,s=0)):"<="===t&&(t="<",p?n=+n+1:i=+i+1),r=t+n+"."+i+"."+s):p?r=">="+n+".0.0 <"+(+n+1)+".0.0":c&&(r=">="+n+"."+i+".0 <"+n+"."+(+i+1)+".0"),o("xRange return",r),r}))}function be(e,r){return o("replaceStars",e,r),e.trim().replace(a[z],"")}function ye(e,r,t,o,n,i,s,a,_,p,c,E,P){return r=Re(t)?"":Re(o)?">="+t+".0.0":Re(n)?">="+t+"."+o+".0":">="+r,a=Re(_)?"":Re(p)?"<"+(+_+1)+".0.0":Re(c)?"<"+_+"."+(+p+1)+".0":E?"<="+_+"."+p+"."+c+"-"+E:"<="+a,(r+" "+a).trim()}function He(e,r,t){for(var n=0;n<e.length;n++)if(!e[n].test(r))return!1;if(r.prerelease.length&&!t.includePrerelease){for(n=0;n<e.length;n++)if(o(e[n].semver),e[n].semver!==Te&&e[n].semver.prerelease.length>0){var i=e[n].semver;if(i.major===r.major&&i.minor===r.minor&&i.patch===r.patch)return!0}return!1}return!0}function Le(e,r,t){try{r=new Se(r,t)}catch(o){return!1}return r.test(e)}function Me(e,r,t){var o=null,n=null;try{var i=new Se(r,t)}catch(s){return null}return e.forEach((function(e){i.test(e)&&(o&&-1!==n.compare(e)||(o=e,n=new ee(o,t)))})),o}function je(e,r,t){var o=null,n=null;try{var i=new Se(r,t)}catch(s){return null}return e.forEach((function(e){i.test(e)&&(o&&1!==n.compare(e)||(o=e,n=new ee(o,t)))})),o}function Ge(e,r){e=new Se(e,r);var t=new ee("0.0.0");if(e.test(t))return t;if(t=new ee("0.0.0-0"),e.test(t))return t;t=null;for(var o=0;o<e.set.length;++o){var n=e.set[o];n.forEach((function(e){var r=new ee(e.semver.version);switch(e.operator){case">":0===r.prerelease.length?r.patch++:r.prerelease.push(0),r.raw=r.format();case"":case">=":t&&!ue(t,r)||(t=r);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}}))}return t&&e.test(t)?t:null}function xe(e,r){try{return new Se(e,r).range||"*"}catch(t){return null}}function ke(e,r,t){return Fe(e,r,"<",t)}function Be(e,r,t){return Fe(e,r,">",t)}function Fe(e,r,t,o){var n,i,s,a,_;switch(e=new ee(e,o),r=new Se(r,o),t){case">":n=ue,i=me,s=he,a=">",_=">=";break;case"<":n=he,i=de,s=ue,a="<",_="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(Le(e,r,o))return!1;for(var p=0;p<r.set.length;++p){var c=r.set[p],E=null,P=null;if(c.forEach((function(e){e.semver===Te&&(e=new Ie(">=0.0.0")),E=E||e,P=P||e,n(e.semver,E.semver,o)?E=e:s(e.semver,P.semver,o)&&(P=e)})),E.operator===a||E.operator===_)return!1;if((!P.operator||P.operator===a)&&i(e,P.semver))return!1;if(P.operator===_&&s(e,P.semver))return!1}return!0}function Ye(e,r){var t=Q(e,r);return t&&t.prerelease.length?t.prerelease:null}function We(e,r,t){return e=new Se(e,t),r=new Se(r,t),e.intersects(r)}function Ke(e){if(e instanceof ee)return e;if("string"!==typeof e)return null;var r=e.match(a[D]);return null==r?null:Q(r[1]+"."+(r[2]||"0")+"."+(r[3]||"0"))}Ie.prototype.parse=function(e){var r=this.options.loose?a[F]:a[Y],t=e.match(r);if(!t)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),t[2]?this.semver=new ee(t[2],this.options.loose):this.semver=Te},Ie.prototype.toString=function(){return this.value},Ie.prototype.test=function(e){return o("Comparator.test",e,this.options.loose),this.semver===Te||("string"===typeof e&&(e=new ee(e,this.options)),Oe(e,this.operator,this.semver,this.options))},Ie.prototype.intersects=function(e,r){if(!(e instanceof Ie))throw new TypeError("a Comparator is required");var t;if(r&&"object"===typeof r||(r={loose:!!r,includePrerelease:!1}),""===this.operator)return t=new Se(e.value,r),Le(this.value,t,r);if(""===e.operator)return t=new Se(this.value,r),Le(e.semver,t,r);var o=(">="===this.operator||">"===this.operator)&&(">="===e.operator||">"===e.operator),n=("<="===this.operator||"<"===this.operator)&&("<="===e.operator||"<"===e.operator),i=this.semver.version===e.semver.version,s=(">="===this.operator||"<="===this.operator)&&(">="===e.operator||"<="===e.operator),a=Oe(this.semver,"<",e.semver,r)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),_=Oe(this.semver,">",e.semver,r)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return o||n||i&&s||a||_},r.Range=Se,Se.prototype.format=function(){return this.range=this.set.map((function(e){return e.join(" ").trim()})).join("||").trim(),this.range},Se.prototype.toString=function(){return this.range},Se.prototype.parseRange=function(e){var r=this.options.loose;e=e.trim();var t=r?a[q]:a[$];e=e.replace(t,ye),o("hyphen replace",e),e=e.replace(a[W],K),o("comparator trim",e,a[W]),e=e.replace(a[y],H),e=e.replace(a[G],x),e=e.split(/\s+/).join(" ");var n=r?a[F]:a[Y],i=e.split(" ").map((function(e){return Ce(e,this.options)}),this).join(" ").split(/\s+/);return this.options.loose&&(i=i.filter((function(e){return!!e.match(n)}))),i=i.map((function(e){return new Ie(e,this.options)}),this),i},Se.prototype.intersects=function(e,r){if(!(e instanceof Se))throw new TypeError("a Range is required");return this.set.some((function(t){return t.every((function(t){return e.set.some((function(e){return e.every((function(e){return t.intersects(e,r)}))}))}))}))},r.toComparators=Ue,Se.prototype.test=function(e){if(!e)return!1;"string"===typeof e&&(e=new ee(e,this.options));for(var r=0;r<this.set.length;r++)if(He(this.set[r],e,this.options))return!0;return!1},r.satisfies=Le,r.maxSatisfying=Me,r.minSatisfying=je,r.minVersion=Ge,r.validRange=xe,r.ltr=ke,r.gtr=Be,r.outside=Fe,r.prerelease=Ye,r.intersects=We,r.coerce=Ke}).call(this,t("4362"))},ef2a:function(e,r,t){(function(r){var o=t("bf4e");e.exports=o.satisfies(r.version,"^6.12.0 || >=8.0.0")}).call(this,t("4362"))},f309:function(e,r,t){var o=t("2910"),n=function(e,r){o.call(this,e),this.name="NotBeforeError",this.date=r};n.prototype=Object.create(o.prototype),n.prototype.constructor=n,e.exports=n},f4e6:function(e,r,t){var o=t("1468");e.exports=function(e,r){var t=r||Math.floor(Date.now()/1e3);if("string"===typeof e){var n=o(e);if("undefined"===typeof n)return;return Math.floor(t+n/1e3)}return"number"===typeof e?t+e:void 0}}}]);