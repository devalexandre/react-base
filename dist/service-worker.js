"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/dist/assets/icons/icon_128x128.09df1b61f5e529ceedc73c049365bd8f.png","09df1b61f5e529ceedc73c049365bd8f"],["/dist/assets/icons/icon_192x192.341a9eb771dd98d76dddb80a5ff70aa0.png","341a9eb771dd98d76dddb80a5ff70aa0"],["/dist/assets/icons/icon_256x256.e385a0db95ea9f2656cd364ba592c543.png","e385a0db95ea9f2656cd364ba592c543"],["/dist/assets/icons/icon_384x384.7b7db368ff29fbfe8f3144b83858f849.png","7b7db368ff29fbfe8f3144b83858f849"],["/dist/assets/icons/icon_512x512.3d3f8fabc3b2a09846b1fc18970c9eb4.png","3d3f8fabc3b2a09846b1fc18970c9eb4"],["/dist/assets/icons/icon_96x96.d9fd8516c40672e3368f6646165d576d.png","d9fd8516c40672e3368f6646165d576d"],["/dist/bundle.min.js","fd6940857b21e78b0b65426d27ad3f54"],["/dist/manifest.8261ba69e156093dd570779034f5858c.json","8261ba69e156093dd570779034f5858c"],["/dist/styles.min.css","256cbbbfb7986a96fdb455c0591d2e9d"]],cacheName="sw-precache-v3-my-domain-cache-id-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,r){var s=new URL(e);return r&&s.pathname.match(r)||(s.search+=(s.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),s.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),s=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),s]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("https://127.0.0.1:3000/index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});