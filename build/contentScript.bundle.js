(()=>{var t={230:t=>{t.exports="object"==typeof self?self.FormData:window.FormData}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,n),s.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var i={};(()=>{"use strict";function t(t,e){return function(){return t.apply(e,arguments)}}n.d(i,{K:()=>ba});const{toString:e}=Object.prototype,{getPrototypeOf:r}=Object,s=(o=Object.create(null),t=>{const n=e.call(t);return o[n]||(o[n]=n.slice(8,-1).toLowerCase())});var o;const a=t=>(t=t.toLowerCase(),e=>s(e)===t),h=t=>e=>typeof e===t,{isArray:c}=Array,l=h("undefined");const u=a("ArrayBuffer");const f=h("string"),d=h("function"),p=h("number"),g=t=>null!==t&&"object"==typeof t,m=t=>{if("object"!==s(t))return!1;const e=r(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},y=a("Date"),b=a("File"),v=a("Blob"),E=a("FileList"),w=a("URLSearchParams");function T(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let i,r;if("object"!=typeof t&&(t=[t]),c(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),s=r.length;let o;for(i=0;i<s;i++)o=r[i],e.call(null,t[o],o,t)}}function S(t,e){e=e.toLowerCase();const n=Object.keys(t);let i,r=n.length;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,_=t=>!l(t)&&t!==A;const C=(I="undefined"!=typeof Uint8Array&&r(Uint8Array),t=>I&&t instanceof I);var I;const R=a("HTMLFormElement"),O=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),D=a("RegExp"),N=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};T(n,((n,r)=>{!1!==e(n,r,t)&&(i[r]=n)})),Object.defineProperties(t,i)},L={isArray:c,isArrayBuffer:u,isBuffer:function(t){return null!==t&&!l(t)&&null!==t.constructor&&!l(t.constructor)&&d(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const n="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||e.call(t)===n||d(t.toString)&&t.toString()===n)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&u(t.buffer),e},isString:f,isNumber:p,isBoolean:t=>!0===t||!1===t,isObject:g,isPlainObject:m,isUndefined:l,isDate:y,isFile:b,isBlob:v,isRegExp:D,isFunction:d,isStream:t=>g(t)&&d(t.pipe),isURLSearchParams:w,isTypedArray:C,isFileList:E,forEach:T,merge:function t(){const{caseless:e}=_(this)&&this||{},n={},i=(i,r)=>{const s=e&&S(n,r)||r;m(n[s])&&m(i)?n[s]=t(n[s],i):m(i)?n[s]=t({},i):c(i)?n[s]=i.slice():n[s]=i};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&T(arguments[t],i);return n},extend:(e,n,i,{allOwnKeys:r}={})=>(T(n,((n,r)=>{i&&d(n)?e[r]=t(n,i):e[r]=n}),{allOwnKeys:r}),e),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,i)=>{let s,o,a;const h={};if(e=e||{},null==t)return e;do{for(s=Object.getOwnPropertyNames(t),o=s.length;o-- >0;)a=s[o],i&&!i(a,t,e)||h[a]||(e[a]=t[a],h[a]=!0);t=!1!==n&&r(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:s,kindOfTest:a,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return-1!==i&&i===n},toArray:t=>{if(!t)return null;if(c(t))return t;let e=t.length;if(!p(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=n.next())&&!i.done;){const n=i.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const i=[];for(;null!==(n=t.exec(e));)i.push(n);return i},isHTMLForm:R,hasOwnProperty:O,hasOwnProp:O,reduceDescriptors:N,freezeMethods:t=>{N(t,((e,n)=>{if(d(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=t[n];d(i)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},i=t=>{t.forEach((t=>{n[t]=!0}))};return c(t)?i(t):i(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:S,global:A,isContextDefined:_,toJSONObject:t=>{const e=new Array(10),n=(t,i)=>{if(g(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[i]=t;const r=c(t)?[]:{};return T(t,((t,e)=>{const s=n(t,i+1);!l(s)&&(r[e]=s)})),e[i]=void 0,r}}return t};return n(t,0)}};function k(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}L.inherits(k,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const P=k.prototype,x={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{x[t]={value:t}})),Object.defineProperties(k,x),Object.defineProperty(P,"isAxiosError",{value:!0}),k.from=(t,e,n,i,r,s)=>{const o=Object.create(P);return L.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),k.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const j=k;const U=n(230);function F(t){return L.isPlainObject(t)||L.isArray(t)}function M(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function B(t,e,n){return t?t.concat(e).map((function(t,e){return t=M(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const H=L.toFlatObject(L,{},null,(function(t){return/^is[A-Z]/.test(t)}));const V=function(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new(U||FormData);const i=(n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!L.isUndefined(e[t])}))).metaTokens,r=n.visitor||l,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((h=e)&&L.isFunction(h.append)&&"FormData"===h[Symbol.toStringTag]&&h[Symbol.iterator]);var h;if(!L.isFunction(r))throw new TypeError("visitor must be a function");function c(t){if(null===t)return"";if(L.isDate(t))return t.toISOString();if(!a&&L.isBlob(t))throw new j("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(t)||L.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(L.endsWith(n,"{}"))n=i?n:n.slice(0,-2),t=JSON.stringify(t);else if(L.isArray(t)&&function(t){return L.isArray(t)&&!t.some(F)}(t)||L.isFileList(t)||L.endsWith(n,"[]")&&(a=L.toArray(t)))return n=M(n),a.forEach((function(t,i){!L.isUndefined(t)&&null!==t&&e.append(!0===o?B([n],i,s):null===o?n:n+"[]",c(t))})),!1;return!!F(t)||(e.append(B(r,n,s),c(t)),!1)}const u=[],f=Object.assign(H,{defaultVisitor:l,convertValue:c,isVisitable:F});if(!L.isObject(t))throw new TypeError("data must be an object");return function t(n,i){if(!L.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),L.forEach(n,(function(n,s){!0===(!(L.isUndefined(n)||null===n)&&r.call(e,n,L.isString(s)?s.trim():s,i,f))&&t(n,i?i.concat(s):[s])})),u.pop()}}(t),e};function $(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function z(t,e){this._pairs=[],t&&V(t,this,e)}const q=z.prototype;q.append=function(t,e){this._pairs.push([t,e])},q.toString=function(t){const e=t?function(e){return t.call(this,e,$)}:$;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};const K=z;function G(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function W(t,e,n){if(!e)return t;const i=n&&n.encode||G,r=n&&n.serialize;let s;if(s=r?r(e,n):L.isURLSearchParams(e)?e.toString():new K(e,n).toString(i),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}const X=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},J={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y="undefined"!=typeof URLSearchParams?URLSearchParams:K,Q=FormData,Z=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),tt="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,et={isBrowser:!0,classes:{URLSearchParams:Y,FormData:Q,Blob},isStandardBrowserEnv:Z,isStandardBrowserWebWorkerEnv:tt,protocols:["http","https","file","blob","url","data"]};const nt=function(t){function e(t,n,i,r){let s=t[r++];const o=Number.isFinite(+s),a=r>=t.length;if(s=!s&&L.isArray(i)?i.length:s,a)return L.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&L.isObject(i[s])||(i[s]=[]);return e(t,n,i[s],r)&&L.isArray(i[s])&&(i[s]=function(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}(i[s])),!o}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,((t,i)=>{e(function(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),i,n,0)})),n}return null},it={"Content-Type":void 0};const rt={transitional:J,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",i=n.indexOf("application/json")>-1,r=L.isObject(t);r&&L.isHTMLForm(t)&&(t=new FormData(t));if(L.isFormData(t))return i&&i?JSON.stringify(nt(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(t,e){return V(t,new et.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,i){return et.isNode&&L.isBuffer(t)?(this.append(e,t.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}(t,this.formSerializer).toString();if((s=L.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return V(s?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||i?(e.setContentType("application/json",!1),function(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||rt.transitional,n=e&&e.forcedJSONParsing,i="json"===this.responseType;if(t&&L.isString(t)&&(n&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw j.from(t,j.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:et.classes.FormData,Blob:et.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};L.forEach(["delete","get","head"],(function(t){rt.headers[t]={}})),L.forEach(["post","put","patch"],(function(t){rt.headers[t]=L.merge(it)}));const st=rt,ot=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),at=Symbol("internals");function ht(t){return t&&String(t).trim().toLowerCase()}function ct(t){return!1===t||null==t?t:L.isArray(t)?t.map(ct):String(t)}function lt(t,e,n,i){return L.isFunction(i)?i.call(this,e,n):L.isString(e)?L.isString(i)?-1!==e.indexOf(i):L.isRegExp(i)?i.test(e):void 0:void 0}class ut{constructor(t){t&&this.set(t)}set(t,e,n){const i=this;function r(t,e,n){const r=ht(e);if(!r)throw new Error("header name must be a non-empty string");const s=L.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||e]=ct(t))}const s=(t,e)=>L.forEach(t,((t,n)=>r(t,n,e)));return L.isPlainObject(t)||t instanceof this.constructor?s(t,e):L.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z]+$/.test(t.trim())?s((t=>{const e={};let n,i,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),i=t.substring(r+1).trim(),!n||e[n]&&ot[n]||("set-cookie"===n?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)})),e})(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=ht(t)){const n=L.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}(t);if(L.isFunction(e))return e.call(this,t,n);if(L.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=ht(t)){const n=L.findKey(this,t);return!(!n||e&&!lt(0,this[n],n,e))}return!1}delete(t,e){const n=this;let i=!1;function r(t){if(t=ht(t)){const r=L.findKey(n,t);!r||e&&!lt(0,n[r],r,e)||(delete n[r],i=!0)}}return L.isArray(t)?t.forEach(r):r(t),i}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const e=this,n={};return L.forEach(this,((i,r)=>{const s=L.findKey(n,r);if(s)return e[s]=ct(i),void delete e[r];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete e[r],e[o]=ct(i),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return L.forEach(this,((n,i)=>{null!=n&&!1!==n&&(e[i]=t&&L.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[at]=this[at]={accessors:{}}).accessors,n=this.prototype;function i(t){const i=ht(t);e[i]||(!function(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach((i=>{Object.defineProperty(t,i+n,{value:function(t,n,r){return this[i].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[i]=!0)}return L.isArray(t)?t.forEach(i):i(t),this}}ut.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),L.freezeMethods(ut.prototype),L.freezeMethods(ut);const ft=ut;function dt(t,e){const n=this||st,i=e||n,r=ft.from(i.headers);let s=i.data;return L.forEach(t,(function(t){s=t.call(n,s,r.normalize(),e?e.status:void 0)})),r.normalize(),s}function pt(t){return!(!t||!t.__CANCEL__)}function gt(t,e,n){j.call(this,null==t?"canceled":t,j.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(gt,j,{__CANCEL__:!0});const mt=gt;const yt=et.isStandardBrowserEnv?{write:function(t,e,n,i,r,s){const o=[];o.push(t+"="+encodeURIComponent(e)),L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(i)&&o.push("path="+i),L.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function bt(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(t,e):e}const vt=et.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function i(n){let i=n;return t&&(e.setAttribute("href",i),i=e.href),e.setAttribute("href",i),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=i(window.location.href),function(t){const e=L.isString(t)?i(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};const Et=function(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const h=Date.now(),c=i[o];r||(r=h),n[s]=a,i[s]=h;let l=o,u=0;for(;l!==s;)u+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),h-r<e)return;const f=c&&h-c;return f?Math.round(1e3*u/f):void 0}};function wt(t,e){let n=0;const i=Et(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,h=i(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:h||void 0,estimated:h&&o&&s<=o?(o-s)/h:void 0,event:r};c[e?"download":"upload"]=!0,t(c)}}const Tt={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let i=t.data;const r=ft.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}L.isFormData(i)&&(et.isStandardBrowserEnv||et.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let h=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const c=bt(t.baseURL,t.url);function l(){if(!h)return;const i=ft.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders());!function(t,e,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new j("Request failed with status code "+n.status,[j.ERR_BAD_REQUEST,j.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}((function(t){e(t),a()}),(function(t){n(t),a()}),{data:s&&"text"!==s&&"json"!==s?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:i,config:t,request:h}),h=null}if(h.open(t.method.toUpperCase(),W(c,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,"onloadend"in h?h.onloadend=l:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(l)},h.onabort=function(){h&&(n(new j("Request aborted",j.ECONNABORTED,t,h)),h=null)},h.onerror=function(){n(new j("Network Error",j.ERR_NETWORK,t,h)),h=null},h.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const i=t.transitional||J;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new j(e,i.clarifyTimeoutError?j.ETIMEDOUT:j.ECONNABORTED,t,h)),h=null},et.isStandardBrowserEnv){const e=(t.withCredentials||vt(c))&&t.xsrfCookieName&&yt.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===i&&r.setContentType(null),"setRequestHeader"in h&&L.forEach(r.toJSON(),(function(t,e){h.setRequestHeader(e,t)})),L.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),s&&"json"!==s&&(h.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&h.addEventListener("progress",wt(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",wt(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{h&&(n(!e||e.type?new mt(null,t,h):e),h.abort(),h=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const u=function(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(c);u&&-1===et.protocols.indexOf(u)?n(new j("Unsupported protocol "+u+":",j.ERR_BAD_REQUEST,t)):h.send(i||null)}))}};L.forEach(Tt,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));const St=t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=L.isString(n)?Tt[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new j(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(L.hasOwnProp(Tt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!L.isFunction(i))throw new TypeError("adapter is not a function");return i};function At(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new mt(null,t)}function _t(t){At(t),t.headers=ft.from(t.headers),t.data=dt.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return St(t.adapter||st.adapter)(t).then((function(e){return At(t),e.data=dt.call(t,t.transformResponse,e),e.headers=ft.from(e.headers),e}),(function(e){return pt(e)||(At(t),e&&e.response&&(e.response.data=dt.call(t,t.transformResponse,e.response),e.response.headers=ft.from(e.response.headers))),Promise.reject(e)}))}const Ct=t=>t instanceof ft?t.toJSON():t;function It(t,e){e=e||{};const n={};function i(t,e,n){return L.isPlainObject(t)&&L.isPlainObject(e)?L.merge.call({caseless:n},t,e):L.isPlainObject(e)?L.merge({},e):L.isArray(e)?e.slice():e}function r(t,e,n){return L.isUndefined(e)?L.isUndefined(t)?void 0:i(void 0,t,n):i(t,e,n)}function s(t,e){if(!L.isUndefined(e))return i(void 0,e)}function o(t,e){return L.isUndefined(e)?L.isUndefined(t)?void 0:i(void 0,t):i(void 0,e)}function a(n,r,s){return s in e?i(n,r):s in t?i(void 0,n):void 0}const h={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>r(Ct(t),Ct(e),!0)};return L.forEach(Object.keys(t).concat(Object.keys(e)),(function(i){const s=h[i]||r,o=s(t[i],e[i],i);L.isUndefined(o)&&s!==a||(n[i]=o)})),n}const Rt="1.2.2",Ot={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Ot[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Dt={};Ot.transitional=function(t,e,n){function i(t,e){return"[Axios v1.2.2] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,s)=>{if(!1===t)throw new j(i(r," has been removed"+(e?" in "+e:"")),j.ERR_DEPRECATED);return e&&!Dt[r]&&(Dt[r]=!0,console.warn(i(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,s)}};const Nt={assertOptions:function(t,e,n){if("object"!=typeof t)throw new j("options must be an object",j.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new j("option "+s+" must be "+n,j.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new j("Unknown option "+s,j.ERR_BAD_OPTION)}},validators:Ot},Lt=Nt.validators;class kt{constructor(t){this.defaults=t,this.interceptors={request:new X,response:new X}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=It(this.defaults,e);const{transitional:n,paramsSerializer:i,headers:r}=e;let s;void 0!==n&&Nt.assertOptions(n,{silentJSONParsing:Lt.transitional(Lt.boolean),forcedJSONParsing:Lt.transitional(Lt.boolean),clarifyTimeoutError:Lt.transitional(Lt.boolean)},!1),void 0!==i&&Nt.assertOptions(i,{encode:Lt.function,serialize:Lt.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=r&&L.merge(r.common,r[e.method]),s&&L.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=ft.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const h=[];let c;this.interceptors.response.forEach((function(t){h.push(t.fulfilled,t.rejected)}));let l,u=0;if(!a){const t=[_t.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,h),l=t.length,c=Promise.resolve(e);u<l;)c=c.then(t[u++],t[u++]);return c}l=o.length;let f=e;for(u=0;u<l;){const t=o[u++],e=o[u++];try{f=t(f)}catch(t){e.call(this,t);break}}try{c=_t.call(this,f)}catch(t){return Promise.reject(t)}for(u=0,l=h.length;u<l;)c=c.then(h[u++],h[u++]);return c}getUri(t){return W(bt((t=It(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}L.forEach(["delete","get","head","options"],(function(t){kt.prototype[t]=function(e,n){return this.request(It(n||{},{method:t,url:e,data:(n||{}).data}))}})),L.forEach(["post","put","patch"],(function(t){function e(e){return function(n,i,r){return this.request(It(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}kt.prototype[t]=e(),kt.prototype[t+"Form"]=e(!0)}));const Pt=kt;class xt{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const i=new Promise((t=>{n.subscribe(t),e=t})).then(t);return i.cancel=function(){n.unsubscribe(e)},i},t((function(t,i,r){n.reason||(n.reason=new mt(t,i,r),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new xt((function(e){t=e})),cancel:t}}}const jt=xt;const Ut={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ut).forEach((([t,e])=>{Ut[e]=t}));const Ft=Ut;const Mt=function e(n){const i=new Pt(n),r=t(Pt.prototype.request,i);return L.extend(r,Pt.prototype,i,{allOwnKeys:!0}),L.extend(r,i,null,{allOwnKeys:!0}),r.create=function(t){return e(It(n,t))},r}(st);Mt.Axios=Pt,Mt.CanceledError=mt,Mt.CancelToken=jt,Mt.isCancel=pt,Mt.VERSION=Rt,Mt.toFormData=V,Mt.AxiosError=j,Mt.Cancel=Mt.CanceledError,Mt.all=function(t){return Promise.all(t)},Mt.spread=function(t){return function(e){return t.apply(null,e)}},Mt.isAxiosError=function(t){return L.isObject(t)&&!0===t.isAxiosError},Mt.mergeConfig=It,Mt.AxiosHeaders=ft,Mt.formToJSON=t=>nt(L.isHTMLForm(t)?new FormData(t):t),Mt.HttpStatusCode=Ft,Mt.default=Mt;const Bt=Mt,Ht=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},Vt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0,c=r>>2,l=(3&r)<<4|o>>4;let u=(15&o)<<2|h>>6,f=63&h;a||(f=64,s||(u=64)),i.push(n[c],n[l],n[u],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ht(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==s||null==o||null==a)throw Error();const h=r<<2|s>>4;if(i.push(h),64!==o){const t=s<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},$t=function(t){return function(t){const e=Ht(t);return Vt.encodeByteArray(e,!0)}(t).replace(/\./g,"")},zt=function(t){try{return Vt.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qt=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Kt=()=>{try{return qt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&zt(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Gt=t=>{const e=(t=>{var e,n;return null===(n=null===(e=Kt())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jt.prototype.create)}}class Jt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(Yt,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new Xt(i,o,n)}}const Yt=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(Zt(n)&&Zt(s)){if(!Qt(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function Zt(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function te(t){return t&&t._delegate?t._delegate:t}class ee{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Wt;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:ne})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===ne?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:ne:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class re{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new ie(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const se=[];var oe;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(oe||(oe={}));const ae={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},he=oe.INFO,ce={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},le=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=ce[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class ue{constructor(t){this.name=t,this._logLevel=he,this._logHandler=le,this._userLogHandler=null,se.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?ae[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...t),this._logHandler(this,oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...t),this._logHandler(this,oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...t),this._logHandler(this,oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...t),this._logHandler(this,oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...t),this._logHandler(this,oe.ERROR,...t)}}let fe,de;const pe=new WeakMap,ge=new WeakMap,me=new WeakMap,ye=new WeakMap,be=new WeakMap;let ve={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ge.get(t);if("objectStoreNames"===e)return t.objectStoreNames||me.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Te(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function Ee(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(de||(de=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Se(this),e),Te(pe.get(this))}:function(...e){return Te(t.apply(Se(this),e))}:function(e,...n){const i=t.call(Se(this),e,...n);return me.set(i,e.sort?e.sort():[e]),Te(i)}}function we(t){return"function"==typeof t?Ee(t):(t instanceof IDBTransaction&&function(t){if(ge.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));ge.set(t,e)}(t),e=t,(fe||(fe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,ve):t);var e}function Te(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(Te(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&pe.set(e,t)})).catch((()=>{})),be.set(e,t),e}(t);if(ye.has(t))return ye.get(t);const e=we(t);return e!==t&&(ye.set(t,e),be.set(e,t)),e}const Se=t=>be.get(t);const Ae=["get","getKey","getAll","getAllKeys","count"],_e=["put","add","delete","clear"],Ce=new Map;function Ie(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(Ce.get(e))return Ce.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=_e.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Ae.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return Ce.set(e,s),s}ve=(t=>({...t,get:(e,n,i)=>Ie(e,n)||t.get(e,n,i),has:(e,n)=>!!Ie(e,n)||t.has(e,n)}))(ve);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Oe="@firebase/app",De="0.9.0",Ne=new ue("@firebase/app"),Le="[DEFAULT]",ke={[Oe]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Pe=new Map,xe=new Map;function je(t,e){try{t.container.addComponent(e)}catch(n){Ne.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ue(t){const e=t.name;if(xe.has(e))return Ne.debug(`There were multiple attempts to register component ${e}.`),!1;xe.set(e,t);for(const e of Pe.values())je(e,t);return!0}function Fe(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Me=new Jt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ee("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Me.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:Le,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw Me.create("bad-app-name",{appName:String(r)});if(n||(n=(()=>{var t;return null===(t=Kt())||void 0===t?void 0:t.config})()),!n)throw Me.create("no-options");const s=Pe.get(r);if(s){if(Qt(n,s.options)&&Qt(i,s.config))return s;throw Me.create("duplicate-app",{appName:r})}const o=new re(r);for(const t of xe.values())o.addComponent(t);const a=new Be(n,i,o);return Pe.set(r,a),a}function Ve(t,e,n){var i;let r=null!==(i=ke[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Ne.warn(t.join(" "))}Ue(new ee(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $e="firebase-heartbeat-store";let ze=null;function qe(){return ze||(ze=function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Te(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(Te(o.result),t.oldVersion,t.newVersion,Te(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore($e)}}).catch((t=>{throw Me.create("idb-open",{originalErrorMessage:t.message})}))),ze}async function Ke(t,e){try{const n=(await qe()).transaction($e,"readwrite"),i=n.objectStore($e);return await i.put(e,Ge(t)),n.done}catch(t){if(t instanceof Xt)Ne.warn(t.message);else{const e=Me.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Ne.warn(e.message)}}}function Ge(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Je(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Xe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Xe(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Ye(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ye(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=$t(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xe(){return(new Date).toISOString().substring(0,10)}class Je{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await qe()).transaction($e).objectStore($e).get(Ge(t))}catch(t){if(t instanceof Xt)Ne.warn(t.message);else{const e=Me.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Ne.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ke(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ke(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ye(t){return $t(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe;Qe="",Ue(new ee("platform-logger",(t=>new Re(t)),"PRIVATE")),Ue(new ee("heartbeat",(t=>new We(t)),"PRIVATE")),Ve(Oe,De,Qe),Ve(Oe,De,"esm2017"),Ve("fire-js","");var Ze,tn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},en={},nn=nn||{},rn=tn||self;function sn(){}function on(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function an(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var hn="closure_uid_"+(1e9*Math.random()>>>0),cn=0;function ln(t,e,n){return t.call.apply(t.bind,arguments)}function un(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function fn(t,e,n){return(fn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ln:un).apply(null,arguments)}function dn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function pn(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function gn(){this.s=this.s,this.o=this.o}gn.prototype.s=!1,gn.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,hn)&&t[hn]||(t[hn]=++cn))},gn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yn(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function bn(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(on(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function vn(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}vn.prototype.h=function(){this.defaultPrevented=!0};var En=function(){if(!rn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{rn.addEventListener("test",sn,e),rn.removeEventListener("test",sn,e)}catch(t){}return t}();function wn(t){return/^[\s\xa0]*$/.test(t)}var Tn=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Sn(t,e){return t<e?-1:t>e?1:0}function An(){var t=rn.navigator;return t&&(t=t.userAgent)?t:""}function _n(t){return-1!=An().indexOf(t)}function Cn(t){return Cn[" "](t),t}Cn[" "]=sn;var In,Rn,On=_n("Opera"),Dn=_n("Trident")||_n("MSIE"),Nn=_n("Edge"),Ln=Nn||Dn,kn=_n("Gecko")&&!(-1!=An().toLowerCase().indexOf("webkit")&&!_n("Edge"))&&!(_n("Trident")||_n("MSIE"))&&!_n("Edge"),Pn=-1!=An().toLowerCase().indexOf("webkit")&&!_n("Edge");function xn(){var t=rn.document;return t?t.documentMode:void 0}t:{var jn="",Un=(Rn=An(),kn?/rv:([^\);]+)(\)|;)/.exec(Rn):Nn?/Edge\/([\d\.]+)/.exec(Rn):Dn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Rn):Pn?/WebKit\/(\S+)/.exec(Rn):On?/(?:Version)[ \/]?(\S+)/.exec(Rn):void 0);if(Un&&(jn=Un?Un[1]:""),Dn){var Fn=xn();if(null!=Fn&&Fn>parseFloat(jn)){In=String(Fn);break t}}In=jn}var Mn,Bn={};function Hn(){return function(t){var e=Bn;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Tn(String(In)).split("."),n=Tn("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=Sn(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||Sn(0==r[2].length,0==s[2].length)||Sn(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(rn.document&&Dn){var Vn=xn();Mn=Vn||(parseInt(In,10)||void 0)}else Mn=void 0;var $n=Mn;function zn(t,e){if(vn.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kn){t:{try{Cn(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:qn[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&zn.X.h.call(this)}}pn(zn,vn);var qn={2:"touch",3:"pen",4:"mouse"};zn.prototype.h=function(){zn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Kn="closure_listenable_"+(1e6*Math.random()|0),Gn=0;function Wn(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++Gn,this.ba=this.ea=!1}function Xn(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Jn(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Yn(t){const e={};for(const n in t)e[n]=t[n];return e}const Qn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zn(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Qn.length;e++)n=Qn[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ti(t){this.src=t,this.g={},this.h=0}function ei(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=mn(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Xn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ni(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}ti.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=ni(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new Wn(e,this.src,s,!!i,r)).ea=n,t.push(e)),e};var ii="closure_lm_"+(1e6*Math.random()|0),ri={};function si(t,e,n,i,r){if(i&&i.once)return ai(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)si(t,e[s],n,i,r);return null}return n=pi(n),t&&t[Kn]?t.N(e,n,an(i)?!!i.capture:!!i,r):oi(t,e,n,!1,i,r)}function oi(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=an(r)?!!r.capture:!!r,a=fi(t);if(a||(t[ii]=a=new ti(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ui;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)En||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(li(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ai(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ai(t,e[s],n,i,r);return null}return n=pi(n),t&&t[Kn]?t.O(e,n,an(i)?!!i.capture:!!i,r):oi(t,e,n,!0,i,r)}function hi(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)hi(t,e[s],n,i,r);else i=an(i)?!!i.capture:!!i,n=pi(n),t&&t[Kn]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ni(s=t.g[e],n,i,r))&&(Xn(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=fi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ni(e,n,i,r)),(n=-1<t?e[t]:null)&&ci(n))}function ci(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Kn])ei(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(li(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=fi(e))?(ei(n,t),0==n.h&&(n.src=null,e[ii]=null)):Xn(t)}}}function li(t){return t in ri?ri[t]:ri[t]="on"+t}function ui(t,e){if(t.ba)t=!0;else{e=new zn(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&ci(t),t=n.call(i,e)}return t}function fi(t){return(t=t[ii])instanceof ti?t:null}var di="__closure_events_fn_"+(1e9*Math.random()>>>0);function pi(t){return"function"==typeof t?t:(t[di]||(t[di]=function(e){return t.handleEvent(e)}),t[di])}function gi(){gn.call(this),this.i=new ti(this),this.P=this,this.I=null}function mi(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new vn(e,t);else if(e instanceof vn)e.target=e.target||t;else{var r=e;Zn(e=new vn(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=yi(o,i,!0,e)&&r}if(r=yi(o=e.g=t,i,!0,e)&&r,r=yi(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=yi(o=e.g=n[s],i,!1,e)&&r}function yi(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,h=o.ha||o.src;o.ea&&ei(t.i,o),r=!1!==a.call(h,i)&&r}}return r&&!i.defaultPrevented}pn(gi,gn),gi.prototype[Kn]=!0,gi.prototype.removeEventListener=function(t,e,n,i){hi(this,t,e,n,i)},gi.prototype.M=function(){if(gi.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Xn(n[i]);delete e.g[t],e.h--}}this.I=null},gi.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},gi.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var bi=rn.JSON.stringify;function vi(){var t=Ci;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Ei,wi=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ti),(t=>t.reset()));class Ti{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Si(t){rn.setTimeout((()=>{throw t}),0)}function Ai(t,e){Ei||function(){var t=rn.Promise.resolve(void 0);Ei=function(){t.then(Ii)}}(),_i||(Ei(),_i=!0),Ci.add(t,e)}var _i=!1,Ci=new class{constructor(){this.h=this.g=null}add(t,e){const n=wi.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Ii(){for(var t;t=vi();){try{t.h.call(t.g)}catch(t){Si(t)}var e=wi;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_i=!1}function Ri(t,e){gi.call(this),this.h=t||1,this.g=e||rn,this.j=fn(this.lb,this),this.l=Date.now()}function Oi(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Di(t,e,n){if("function"==typeof t)n&&(t=fn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=fn(t.handleEvent,t)}return 2147483647<Number(e)?-1:rn.setTimeout(t,e||0)}function Ni(t){t.g=Di((()=>{t.g=null,t.i&&(t.i=!1,Ni(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}pn(Ri,gi),(Ze=Ri.prototype).ca=!1,Ze.R=null,Ze.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),mi(this,"tick"),this.ca&&(Oi(this),this.start()))}},Ze.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ze.M=function(){Ri.X.M.call(this),Oi(this),delete this.g};class Li extends gn{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ni(this)}M(){super.M(),this.g&&(rn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(t){gn.call(this),this.h=t,this.g={}}pn(ki,gn);var Pi=[];function xi(t,e,n,i){Array.isArray(n)||(n&&(Pi[0]=n.toString()),n=Pi);for(var r=0;r<n.length;r++){var s=si(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function ji(t){Jn(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ci(t)}),t),t.g={}}function Ui(){this.g=!0}function Fi(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return bi(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}ki.prototype.M=function(){ki.X.M.call(this),ji(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ui.prototype.Aa=function(){this.g=!1},Ui.prototype.info=function(){};var Mi={},Bi=null;function Hi(){return Bi=Bi||new gi}function Vi(t){vn.call(this,Mi.Pa,t)}function $i(t){const e=Hi();mi(e,new Vi(e))}function zi(t,e){vn.call(this,Mi.STAT_EVENT,t),this.stat=e}function qi(t){const e=Hi();mi(e,new zi(e,t))}function Ki(t,e){vn.call(this,Mi.Qa,t),this.size=e}function Gi(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return rn.setTimeout((function(){t()}),e)}Mi.Pa="serverreachability",pn(Vi,vn),Mi.STAT_EVENT="statevent",pn(zi,vn),Mi.Qa="timingevent",pn(Ki,vn);var Wi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Xi={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ji(){}function Yi(t){return t.h||(t.h=t.i())}function Qi(){}Ji.prototype.h=null;var Zi,tr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function er(){vn.call(this,"d")}function nr(){vn.call(this,"c")}function ir(){}function rr(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new ki(this),this.O=or,t=Ln?125:void 0,this.T=new Ri(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new sr}function sr(){this.i=null,this.g="",this.h=!1}pn(er,vn),pn(nr,vn),pn(ir,Ji),ir.prototype.g=function(){return new XMLHttpRequest},ir.prototype.i=function(){return{}},Zi=new ir;var or=45e3,ar={},hr={};function cr(t,e,n){t.K=1,t.v=Rr(Sr(e)),t.s=n,t.P=!0,lr(t,null)}function lr(t,e){t.F=Date.now(),pr(t),t.A=Sr(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Hr(n.i,"t",i),t.C=0,n=t.l.H,t.h=new sr,t.g=Bs(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Li(fn(t.La,t,t.g),t.N)),xi(t.S,t.g,"readystatechange",t.ib),e=t.H?Yn(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),$i(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var l=c[0];c=c[1];var u=l.split("_");o=2<=u.length&&"type"==u[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function ur(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function fr(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=dr(t,n),i==hr){4==e&&(t.o=4,qi(14),r=!1),Fi(t.j,t.m,null,"[Incomplete Response]");break}if(i==ar){t.o=4,qi(15),Fi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Fi(t.j,t.m,i,null),vr(t,i)}ur(t)&&i!=hr&&i!=ar&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,qi(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ls(e),e.K=!0,qi(11))):(Fi(t.j,t.m,n,"[Invalid Chunked Response]"),br(t),yr(t))}function dr(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?hr:(n=Number(e.substring(n,i)),isNaN(n)?ar:(i+=1)+n>e.length?hr:(e=e.substr(i,n),t.C=i+n,e))}function pr(t){t.V=Date.now()+t.O,gr(t,t.O)}function gr(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Gi(fn(t.gb,t),e)}function mr(t){t.B&&(rn.clearTimeout(t.B),t.B=null)}function yr(t){0==t.l.G||t.I||xs(t.l,t)}function br(t){mr(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Oi(t.T),ji(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function vr(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Gr(n.h,t)))if(!t.J&&Gr(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ps(n),As(n)}Ns(n),qi(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=Gi(fn(n.cb,n),6e3));if(1>=Kr(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Us(n,11)}else if((t.J||n.g==t)&&Ps(n),!wn(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=c[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const l=c[5];null!=l&&"number"==typeof l&&0<l&&(i=1.5*l,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Wr(s,s.h),s.h=null))}if(i.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Ir(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((i=n).sa=Ms(i,i.H?i.ka:null,i.V),o.J){Xr(i.h,o);var a=o,h=i.J;h&&a.setTimeout(h),a.B&&(mr(a),pr(a)),i.g=o}else Ds(i);0<n.i.length&&Cs(n)}else"stop"!=c[0]&&"close"!=c[0]||Us(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Us(n,7):Ss(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}$i()}catch(t){}}function Er(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(on(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(on(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(on(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(Ze=rr.prototype).setTimeout=function(t){this.O=t},Ze.ib=function(t){t=t.target;const e=this.L;e&&3==ys(t)?e.l():this.La(t)},Ze.La=function(t){try{if(t==this.g)t:{const l=ys(this.g);var e=this.g.Ea();this.g.aa();if(!(3>l)&&(3!=l||Ln||this.g&&(this.h.h||this.g.fa()||bs(this.g)))){this.I||4!=l||7==e||$i(),mr(this);var n=this.g.aa();this.Y=n;e:if(ur(this)){var i=bs(this.g);t="";var r=i.length,s=4==ys(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){br(this),yr(this);var o="";break e}this.h.i=new rn.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wn(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,qi(12),br(this),yr(this);break t}Fi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,vr(this,n)}this.P?(fr(this,l,o),Ln&&this.i&&3==l&&(xi(this.S,this.T,"tick",this.hb),this.T.start())):(Fi(this.j,this.m,o,null),vr(this,o)),4==l&&br(this),this.i&&!this.I&&(4==l?xs(this.l,this):(this.i=!1,pr(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,qi(12)):(this.o=0,qi(13)),br(this),yr(this)}}}catch(t){}},Ze.hb=function(){if(this.g){var t=ys(this.g),e=this.g.fa();this.C<e.length&&(mr(this),fr(this,t,e),this.i&&4!=t&&pr(this))}},Ze.cancel=function(){this.I=!0,br(this)},Ze.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&($i(),qi(17)),br(this),this.o=2,yr(this)):gr(this,this.V-t)};var wr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Tr){this.h=void 0!==e?e:t.h,Ar(this,t.j),this.s=t.s,this.g=t.g,_r(this,t.m),this.l=t.l,e=t.i;var n=new Ur;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cr(this,n),this.o=t.o}else t&&(n=String(t).match(wr))?(this.h=!!e,Ar(this,n[1]||"",!0),this.s=Or(n[2]||""),this.g=Or(n[3]||"",!0),_r(this,n[4]),this.l=Or(n[5]||"",!0),Cr(this,n[6]||"",!0),this.o=Or(n[7]||"")):(this.h=!!e,this.i=new Ur(null,this.h))}function Sr(t){return new Tr(t)}function Ar(t,e,n){t.j=n?Or(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _r(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cr(t,e,n){e instanceof Ur?(t.i=e,function(t,e){e&&!t.j&&(Fr(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Mr(this,e),Hr(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Dr(e,xr)),t.i=new Ur(e,t.h))}function Ir(t,e,n){t.i.set(e,n)}function Rr(t){return Ir(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Or(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Dr(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Nr),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Nr(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Dr(e,Lr,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Dr(e,Lr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Dr(n,"/"==n.charAt(0)?Pr:kr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Dr(n,jr)),t.join("")};var Lr=/[#\/\?@]/g,kr=/[#\?:]/g,Pr=/[#\?]/g,xr=/[#\?@]/g,jr=/#/g;function Ur(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fr(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Mr(t,e){Fr(t),e=Vr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Br(t,e){return Fr(t),e=Vr(t,e),t.g.has(e)}function Hr(t,e,n){Mr(t,e),0<n.length&&(t.i=null,t.g.set(Vr(t,e),yn(n)),t.h+=n.length)}function Vr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ze=Ur.prototype).add=function(t,e){Fr(this),this.i=null,t=Vr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ze.forEach=function(t,e){Fr(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},Ze.oa=function(){Fr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},Ze.W=function(t){Fr(this);let e=[];if("string"==typeof t)Br(this,t)&&(e=e.concat(this.g.get(Vr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Ze.set=function(t,e){return Fr(this),this.i=null,Br(this,t=Vr(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ze.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Ze.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function $r(t){this.l=t||zr,rn.PerformanceNavigationTiming?t=0<(t=rn.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(rn.g&&rn.g.Ga&&rn.g.Ga()&&rn.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zr=10;function qr(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Kr(t){return t.h?1:t.g?t.g.size:0}function Gr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Wr(t,e){t.g?t.g.add(e):t.h=e}function Xr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Jr(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return yn(t.i)}function Yr(){}function Qr(){this.g=new Yr}function Zr(t,e,n){const i=n||"";try{Er(t,(function(t,n){let r=t;an(t)&&(r=bi(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function ts(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function es(t){this.l=t.ac||null,this.j=t.jb||!1}function ns(t,e){gi.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=is,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$r.prototype.cancel=function(){if(this.i=Jr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Yr.prototype.stringify=function(t){return rn.JSON.stringify(t,void 0)},Yr.prototype.parse=function(t){return rn.JSON.parse(t,void 0)},pn(es,Ji),es.prototype.g=function(){return new ns(this.l,this.j)},es.prototype.i=function(t){return function(){return t}}({}),pn(ns,gi);var is=0;function rs(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function ss(t){t.readyState=4,t.l=null,t.j=null,t.A=null,os(t)}function os(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ze=ns.prototype).open=function(t,e){if(this.readyState!=is)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,os(this)},Ze.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||rn).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Ze.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ss(this)),this.readyState=is},Ze.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,os(this)),this.g&&(this.readyState=3,os(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==rn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;rs(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Ze.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ss(this):os(this),3==this.readyState&&rs(this)}},Ze.Va=function(t){this.g&&(this.response=this.responseText=t,ss(this))},Ze.Ua=function(t){this.g&&(this.response=t,ss(this))},Ze.ga=function(){this.g&&ss(this)},Ze.setRequestHeader=function(t,e){this.v.append(t,e)},Ze.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ze.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ns.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var as=rn.JSON.parse;function hs(t){gi.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cs,this.K=this.L=!1}pn(hs,gi);var cs="",ls=/^https?$/i,us=["POST","PUT"];function fs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ds(t),gs(t)}function ds(t){t.D||(t.D=!0,mi(t,"complete"),mi(t,"error"))}function ps(t){if(t.h&&void 0!==nn&&(!t.C[1]||4!=ys(t)||2!=t.aa()))if(t.v&&4==ys(t))Di(t.Ha,0,t);else if(mi(t,"readystatechange"),4==ys(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var r=String(t.H).match(wr)[1]||null;if(!r&&rn.self&&rn.self.location){var s=rn.self.location.protocol;r=s.substr(0,s.length-1)}i=!ls.test(r?r.toLowerCase():"")}n=i}if(n)mi(t,"complete"),mi(t,"success");else{t.m=6;try{var o=2<ys(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",ds(t)}}finally{gs(t)}}}function gs(t,e){if(t.g){ms(t);const n=t.g,i=t.C[0]?sn:null;t.g=null,t.C=null,e||mi(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function ms(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(rn.clearTimeout(t.A),t.A=null)}function ys(t){return t.g?t.g.readyState:0}function bs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case cs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function vs(t){let e="";return Jn(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Es(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=vs(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ir(t,e,n))}function ws(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ts(t){this.Ca=0,this.i=[],this.j=new Ui,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ws("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ws("baseRetryDelayMs",5e3,t),this.bb=ws("retryDelaySeedMs",1e4,t),this.$a=ws("forwardChannelMaxRetries",2,t),this.ta=ws("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new $r(t&&t.concurrentRequestLimit),this.Fa=new Qr,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Ss(t){if(_s(t),3==t.G){var e=t.U++,n=Sr(t.F);Ir(n,"SID",t.I),Ir(n,"RID",e),Ir(n,"TYPE","terminate"),Rs(t,n),(e=new rr(t,t.j,e,void 0)).K=2,e.v=Rr(Sr(n)),n=!1,rn.navigator&&rn.navigator.sendBeacon&&(n=rn.navigator.sendBeacon(e.v.toString(),"")),!n&&rn.Image&&((new Image).src=e.v,n=!0),n||(e.g=Bs(e.l,null),e.g.da(e.v)),e.F=Date.now(),pr(e)}Fs(t)}function As(t){t.g&&(Ls(t),t.g.cancel(),t.g=null)}function _s(t){As(t),t.u&&(rn.clearTimeout(t.u),t.u=null),Ps(t),t.h.cancel(),t.m&&("number"==typeof t.m&&rn.clearTimeout(t.m),t.m=null)}function Cs(t){qr(t.h)||t.m||(t.m=!0,Ai(t.Ja,t),t.C=0)}function Is(t,e){var n;n=e?e.m:t.U++;const i=Sr(t.F);Ir(i,"SID",t.I),Ir(i,"RID",n),Ir(i,"AID",t.T),Rs(t,i),t.o&&t.s&&Es(i,t.o,t.s),n=new rr(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Os(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Wr(t.h,n),cr(n,i,e)}function Rs(t,e){t.ia&&Jn(t.ia,(function(t,n){Ir(e,n,t)})),t.l&&Er({},(function(t,n){Ir(e,n,t)}))}function Os(t,e,n){n=Math.min(t.i.length,n);var i=t.l?fn(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{Zr(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function Ds(t){t.g||t.u||(t.Z=1,Ai(t.Ia,t),t.A=0)}function Ns(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Gi(fn(t.Ia,t),js(t,t.A)),t.A++,!0)}function Ls(t){null!=t.B&&(rn.clearTimeout(t.B),t.B=null)}function ks(t){t.g=new rr(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Sr(t.sa);Ir(e,"RID","rpc"),Ir(e,"SID",t.I),Ir(e,"CI",t.L?"0":"1"),Ir(e,"AID",t.T),Ir(e,"TYPE","xmlhttp"),Rs(t,e),t.o&&t.s&&Es(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Rr(Sr(e)),n.s=null,n.P=!0,lr(n,t)}function Ps(t){null!=t.v&&(rn.clearTimeout(t.v),t.v=null)}function xs(t,e){var n=null;if(t.g==e){Ps(t),Ls(t),t.g=null;var i=2}else{if(!Gr(t.h,e))return;n=e.D,Xr(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;mi(i=Hi(),new Ki(i,n)),Cs(t)}else Ds(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==i&&function(t,e){return!(Kr(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Gi(fn(t.Ja,t,e),js(t,t.C)),t.C++,0)))}(t,e)||2==i&&Ns(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Us(t,5);break;case 4:Us(t,10);break;case 3:Us(t,6);break;default:Us(t,2)}}function js(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Us(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=fn(t.kb,t);n||(n=new Tr("//www.google.com/images/cleardot.gif"),rn.location&&"http"==rn.location.protocol||Ar(n,"https"),Rr(n)),function(t,e){const n=new Ui;if(rn.Image){const i=new Image;i.onload=dn(ts,n,i,"TestLoadImage: loaded",!0,e),i.onerror=dn(ts,n,i,"TestLoadImage: error",!1,e),i.onabort=dn(ts,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=dn(ts,n,i,"TestLoadImage: timeout",!1,e),rn.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else qi(2);t.G=0,t.l&&t.l.va(e),Fs(t),_s(t)}function Fs(t){if(t.G=0,t.la=[],t.l){const e=Jr(t.h);0==e.length&&0==t.i.length||(bn(t.la,e),bn(t.la,t.i),t.h.i.length=0,yn(t.i),t.i.length=0),t.l.ua()}}function Ms(t,e,n){var i=n instanceof Tr?Sr(n):new Tr(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),_r(i,i.m);else{var r=rn.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Tr(null,void 0);i&&Ar(s,i),e&&(s.g=e),r&&_r(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Ir(i,n,e),Ir(i,"VER",t.ma),Rs(t,i),i}function Bs(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new hs(new es({jb:!0})):new hs(t.ra)).Ka(t.H),e}function Hs(){}function Vs(){if(Dn&&!(10<=Number($n)))throw Error("Environmental error: no available transport.")}function $s(t,e){gi.call(this),this.g=new Ts(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!wn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wn(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ks(this)}function zs(t){er.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function qs(){nr.call(this),this.status=1}function Ks(t){this.g=t}(Ze=hs.prototype).Ka=function(t){this.L=t},Ze.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Zi.g(),this.C=this.u?Yi(this.u):Yi(Zi),this.g.onreadystatechange=fn(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void fs(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=rn.FormData&&t instanceof rn.FormData,!(0<=mn(us,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ms(this),0<this.B&&((this.K=function(t){return Dn&&Hn()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=fn(this.qa,this)):this.A=Di(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){fs(this,t)}},Ze.qa=function(){void 0!==nn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,mi(this,"timeout"),this.abort(8))},Ze.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,mi(this,"complete"),mi(this,"abort"),gs(this))},Ze.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),gs(this,!0)),hs.X.M.call(this)},Ze.Ha=function(){this.s||(this.F||this.v||this.l?ps(this):this.fb())},Ze.fb=function(){ps(this)},Ze.aa=function(){try{return 2<ys(this)?this.g.status:-1}catch(t){return-1}},Ze.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Ze.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),as(e)}},Ze.Ea=function(){return this.m},Ze.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ze=Ts.prototype).ma=8,Ze.G=1,Ze.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new rr(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Yn(s),Zn(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Os(this,r,e),Ir(n=Sr(this.F),"RID",t),Ir(n,"CVER",22),this.D&&Ir(n,"X-HTTP-Session-Id",this.D),Rs(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(vs(s)))+"&"+e:this.o&&Es(n,this.o,s)),Wr(this.h,r),this.Ya&&Ir(n,"TYPE","init"),this.O?(Ir(n,"$req",e),Ir(n,"SID","null"),r.Z=!0,cr(r,n,null)):cr(r,n,e),this.G=2}}else 3==this.G&&(t?Is(this,t):0==this.i.length||qr(this.h)||Is(this))},Ze.Ia=function(){if(this.u=null,ks(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Gi(fn(this.eb,this),t)}},Ze.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,qi(10),As(this),ks(this))},Ze.cb=function(){null!=this.v&&(this.v=null,As(this),Ns(this),qi(19))},Ze.kb=function(t){t?(this.j.info("Successfully pinged google.com"),qi(2)):(this.j.info("Failed to ping google.com"),qi(1))},(Ze=Hs.prototype).xa=function(){},Ze.wa=function(){},Ze.va=function(){},Ze.ua=function(){},Ze.Ra=function(){},Vs.prototype.g=function(t,e){return new $s(t,e)},pn($s,gi),$s.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;qi(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ms(t,null,t.V),Cs(t)},$s.prototype.close=function(){Ss(this.g)},$s.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=bi(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Cs(e)},$s.prototype.M=function(){this.g.l=null,delete this.j,Ss(this.g),delete this.g,$s.X.M.call(this)},pn(zs,er),pn(qs,nr),pn(Ks,Hs),Ks.prototype.xa=function(){mi(this.g,"a")},Ks.prototype.wa=function(t){mi(this.g,new zs(t))},Ks.prototype.va=function(t){mi(this.g,new qs)},Ks.prototype.ua=function(){mi(this.g,"b")},Vs.prototype.createWebChannel=Vs.prototype.g,$s.prototype.send=$s.prototype.u,$s.prototype.open=$s.prototype.m,$s.prototype.close=$s.prototype.close,Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,Xi.COMPLETE="complete",Qi.EventType=tr,tr.OPEN="a",tr.CLOSE="b",tr.ERROR="c",tr.MESSAGE="d",gi.prototype.listen=gi.prototype.N,hs.prototype.listenOnce=hs.prototype.O,hs.prototype.getLastError=hs.prototype.Oa,hs.prototype.getLastErrorCode=hs.prototype.Ea,hs.prototype.getStatus=hs.prototype.aa,hs.prototype.getResponseJson=hs.prototype.Sa,hs.prototype.getResponseText=hs.prototype.fa,hs.prototype.send=hs.prototype.da,hs.prototype.setWithCredentials=hs.prototype.Ka;en.createWebChannelTransport=function(){return new Vs},en.getStatEventTarget=function(){return Hi()},en.ErrorCode=Wi,en.EventType=Xi,en.Event=Mi,en.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},en.FetchXmlHttpFactory=es,en.WebChannel=Qi,en.XhrIo=hs;const Gs="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ws.UNAUTHENTICATED=new Ws(null),Ws.GOOGLE_CREDENTIALS=new Ws("google-credentials-uid"),Ws.FIRST_PARTY=new Ws("first-party-uid"),Ws.MOCK_USER=new Ws("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xs="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=new ue("@firebase/firestore");function Ys(t,...e){if(Js.logLevel<=oe.DEBUG){const n=e.map(to);Js.debug(`Firestore (${Xs}): ${t}`,...n)}}function Qs(t,...e){if(Js.logLevel<=oe.ERROR){const n=e.map(to);Js.error(`Firestore (${Xs}): ${t}`,...n)}}function Zs(t,...e){if(Js.logLevel<=oe.WARN){const n=e.map(to);Js.warn(`Firestore (${Xs}): ${t}`,...n)}}function to(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t="Unexpected state"){const e=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: `+t;throw Qs(e),new Error(e)}function no(t,e){t||eo()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const io={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ro extends Xt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ao{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ws.UNAUTHENTICATED)))}shutdown(){}}class ho{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class co{constructor(t){this.t=t,this.currentUser=Ws.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new so;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new so,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Ys("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ys("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new so)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ys("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(no("string"==typeof e.accessToken),new oo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return no(null===t||"string"==typeof t),new Ws(t)}}class lo{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=Ws.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(no(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class uo{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}getToken(){return Promise.resolve(new lo(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Ws.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class po{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Ys("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Ys("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Ys("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):Ys("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(no("string"==typeof t.token),this.A=t.token,new fo(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function go(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=go(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function yo(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{constructor(t,e,n){void 0===e?e=0:e>t.length&&eo(),void 0===n?n=t.length-e:n>t.length-e&&eo(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===bo.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bo?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class vo extends bo{construct(t,e,n){return new vo(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ro(io.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new vo(e)}static emptyPath(){return new vo([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eo{constructor(t){this.path=t}static fromPath(t){return new Eo(vo.fromString(t))}static fromName(t){return new Eo(vo.fromString(t).popFirst(5))}static empty(){return new Eo(vo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===vo.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return vo.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Eo(new vo(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}wo.UNKNOWN_ID=-1;function To(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class So{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}So.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ao{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class _o{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new _o("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof _o&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Io{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Io(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Io(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return yo(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Io.EMPTY_BYTE_STRING=new Io("");new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ro(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Oo(t){return"string"==typeof t?Io.fromBase64String(t):Io.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class No{constructor(t,e){this.comparator=t,this.root=e||ko.EMPTY}insert(t,e){return new No(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ko.BLACK,null,null))}remove(t){return new No(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ko.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Lo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Lo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Lo(this.root,t,this.comparator,!0)}}class Lo{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ko{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:ko.RED,this.left=null!=i?i:ko.EMPTY,this.right=null!=r?r:ko.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new ko(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ko.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return ko.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ko.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ko.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw eo();if(this.right.isRed())throw eo();const t=this.left.check();if(t!==this.right.check())throw eo();return t+(this.isRed()?0:1)}}ko.EMPTY=null,ko.RED=!0,ko.BLACK=!1,ko.EMPTY=new class{constructor(){this.size=0}get key(){throw eo()}get value(){throw eo()}get color(){throw eo()}get left(){throw eo()}get right(){throw eo()}copy(t,e,n,i,r){return this}insert(t,e,n){return new ko(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Po{constructor(t){this.comparator=t,this.data=new No(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xo(this.data.getIterator())}getIteratorFrom(t){return new xo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Po))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Po(this.comparator);return e.data=t,e}}class xo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Uo(t){return new jo(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fo,Mo;(Mo=Fo||(Fo={}))[Mo.OK=0]="OK",Mo[Mo.CANCELLED=1]="CANCELLED",Mo[Mo.UNKNOWN=2]="UNKNOWN",Mo[Mo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Mo[Mo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Mo[Mo.NOT_FOUND=5]="NOT_FOUND",Mo[Mo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Mo[Mo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Mo[Mo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Mo[Mo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Mo[Mo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Mo[Mo.ABORTED=10]="ABORTED",Mo[Mo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Mo[Mo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Mo[Mo.INTERNAL=13]="INTERNAL",Mo[Mo.UNAVAILABLE=14]="UNAVAILABLE",Mo[Mo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new No(Eo.comparator);new No(Eo.comparator);new No(Eo.comparator),new Po(Eo.comparator);new Po(yo);const Bo=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ho=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Vo=Ho;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $o{constructor(){}ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(Ro(t.integerValue));else if("doubleValue"in t){const n=Ro(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),Co(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(Oo(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Do(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):eo()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),Eo.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}}$o.Ie=new $o;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class zo{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new zo(t,zo.DEFAULT_COLLECTION_PERCENTILE,zo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zo.DEFAULT_COLLECTION_PERCENTILE=10,zo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zo.DEFAULT=new zo(41943040,zo.DEFAULT_COLLECTION_PERCENTILE,zo.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zo.DISABLED=new zo(-1,0,0);function qo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&Ys("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new so,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Go(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ro(io.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wo(t,e){if(Qs("AsyncQueue",`${e}: ${t}`),To(t))return new ro(io.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xo(t,e,n){if(!n)throw new ro(io.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Jo(t){if(Eo.isDocumentKey(t))throw new ro(io.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yo(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":eo()}function Qo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ro(io.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yo(t);throw new ro(io.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zo=new Map;class ta{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new ro(io.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ro(io.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new ro(io.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ta({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ro(io.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ro(io.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ta(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ao;switch(t.type){case"gapi":const e=t.client;return new uo(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ro(io.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Zo.get(t);e&&(Ys("ComponentProvider","Removing Datastore"),Zo.delete(t),e.terminate())}(this),Promise.resolve()}}function na(t,e,n,i={}){var r;const s=(t=Qo(t,ea))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&Zs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Ws.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$t(JSON.stringify({alg:"none",type:"JWT"})),$t(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new ro(io.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ws(s)}t._authCredentials=new ho(new oo(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sa(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ia(this.firestore,t,this._key)}}class ra{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ra(this.firestore,t,this._query)}}class sa extends ra{constructor(t,e,n){super(t,e,Uo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ia(this.firestore,null,new Eo(t))}withConverter(t){return new sa(this.firestore,t,this._path)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Ws.UNAUTHENTICATED,this.clientId=mo.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ys("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ys("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ro(io.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new so;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Wo(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}class aa{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ko(this,"async_queue_retry"),this.Wc=()=>{const t=qo();t&&Ys("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=qo();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=qo();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new so;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!To(t))throw t;Ys("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Qs("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=Go.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(i),i}zc(){this.Kc&&eo()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}class ha extends ea{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new aa,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||la(this),this._firestoreClient.terminate()}}function ca(t,e){const n="string"==typeof t?t:e||"(default)",i=Fe("object"==typeof t?t:function(t="[DEFAULT]"){const e=Pe.get(t);if(!e&&t===Le)return He();if(!e)throw Me.create("no-app",{appName:t});return e}(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=Gt("firestore");t&&na(i,...t)}return i}function la(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Ao(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new oa(t._authCredentials,t._appCheckCredentials,t._queue,i)}new RegExp("[~\\*/\\[\\]]");!function(t,e=!0){Xs="9.15.0",Ue(new ee("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new ha(new co(t.getProvider("auth-internal")),new po(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ro(io.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _o(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),Ve(Gs,"3.8.0",t),Ve(Gs,"3.8.0","esm2017")}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ve("firebase","9.15.0","app"),ba("now does this work or gonna give err ? ");let ua,fa=document.createElement("button"),da=document.createElement("div"),pa=document.createElement("p"),ga=document.createElement("INPUT");ga.setAttribute("type","text"),ga.classList.add("msgplace");let ma=[];ga.addEventListener("keypress",(function(t){"Enter"===t.key&&(ma.push(ga.value),t.preventDefault(),ga.value="",console.log("messages here",ma))})),da.classList.add("offliechat"),da.append(fa),da.append(pa),da.append(ga),fa.textContent="offline chat",fa.classList.add("offlino");document.body;chrome.runtime.onMessage.addListener((function(t,e,n){console.log(t.txt)})),async function(){const t=await ua;console.log("calling",t);const e=await new Promise((t=>{setTimeout((()=>{let e=document.getElementsByClassName("banner-visible-area style-scope ytd-c4-tabbed-header-renderer");t(e)}),2e3)}));console.log("result should be here",e),await da.append(pa),await e[1].append(da),console.log("from inside the asynca call",ua)}(),console.log("do i need to update this for it to work ? "),console.log("Content script works!"),console.log("Must reload extension for modifications to take effect.");let ya=((t,e)=>{const n=ca(He({apiKey:"AIzaSyB2tzYmUwiAU0L6c2q2EYf0Gi94qpXo5NE",authDomain:"offline-chat-3120f.firebaseapp.com",projectId:"offline-chat-3120f",storageBucket:"offline-chat-3120f.appspot.com",messagingSenderId:"678853584763",appId:"1:678853584763:web:c166f2bebd78d5fceb3fde"}));!function(t,e,...n){if(t=te(t),Xo("collection","path",e),t instanceof ea){const i=vo.fromString(e,...n);return Jo(i),new sa(t,null,i)}{if(!(t instanceof ia||t instanceof sa))throw new ro(io.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(vo.fromString(e,...n));Jo(i),new sa(t.firestore,null,i)}}(n,"cities");return{txt:"this is from whatever",thecalcis:t+e,numbero:3}})(5,15);function ba(t){console.log("this is from index.js of content extension",t)}console.log("calc result  i hope",ya),(t=>{let e;e={text:"message here ig "},console.log("can i make this to show ? ",e);let n;n=3,Bt.get("https://ddragon.leagueoflegends.com/cdn/languages.json").then((function(t){console.log(t)})).catch((function(t){console.log(t)})),console.log("===> FROM THE PRINT MODULE:",t)})("wait this is not console.log wtf")})()})();