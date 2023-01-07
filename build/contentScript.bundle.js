(()=>{var t={230:t=>{t.exports="object"==typeof self?self.FormData:window.FormData}},e={};function n(s){var r=e[s];if(void 0!==r)return r.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};(()=>{"use strict";n.d(s,{K:()=>jf});var t={};function e(t,e){return function(){return t.apply(e,arguments)}}n.r(t),n.d(t,{K:()=>jf});const{toString:r}=Object.prototype,{getPrototypeOf:i}=Object,o=(a=Object.create(null),t=>{const e=r.call(t);return a[e]||(a[e]=e.slice(8,-1).toLowerCase())});var a;const c=t=>(t=t.toLowerCase(),e=>o(e)===t),u=t=>e=>typeof e===t,{isArray:h}=Array,l=u("undefined");const d=c("ArrayBuffer");const f=u("string"),p=u("function"),g=u("number"),m=t=>null!==t&&"object"==typeof t,y=t=>{if("object"!==o(t))return!1;const e=i(t);return!(null!==e&&e!==Object.prototype&&null!==Object.getPrototypeOf(e)||Symbol.toStringTag in t||Symbol.iterator in t)},v=c("Date"),w=c("File"),E=c("Blob"),b=c("FileList"),T=c("URLSearchParams");function S(t,e,{allOwnKeys:n=!1}={}){if(null==t)return;let s,r;if("object"!=typeof t&&(t=[t]),h(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),i=r.length;let o;for(s=0;s<i;s++)o=r[s],e.call(null,t[o],o,t)}}function C(t,e){e=e.toLowerCase();const n=Object.keys(t);let s,r=n.length;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,A=t=>!l(t)&&t!==I;const _=(D="undefined"!=typeof Uint8Array&&i(Uint8Array),t=>D&&t instanceof D);var D;const N=c("HTMLFormElement"),k=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),R=c("RegExp"),O=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};S(n,((n,r)=>{!1!==e(n,r,t)&&(s[r]=n)})),Object.defineProperties(t,s)},L={isArray:h,isArrayBuffer:d,isBuffer:function(t){return null!==t&&!l(t)&&null!==t.constructor&&!l(t.constructor)&&p(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:t=>{const e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||r.call(t)===e||p(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){let e;return e="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&d(t.buffer),e},isString:f,isNumber:g,isBoolean:t=>!0===t||!1===t,isObject:m,isPlainObject:y,isUndefined:l,isDate:v,isFile:w,isBlob:E,isRegExp:R,isFunction:p,isStream:t=>m(t)&&p(t.pipe),isURLSearchParams:T,isTypedArray:_,isFileList:b,forEach:S,merge:function t(){const{caseless:e}=A(this)&&this||{},n={},s=(s,r)=>{const i=e&&C(n,r)||r;y(n[i])&&y(s)?n[i]=t(n[i],s):y(s)?n[i]=t({},s):h(s)?n[i]=s.slice():n[i]=s};for(let t=0,e=arguments.length;t<e;t++)arguments[t]&&S(arguments[t],s);return n},extend:(t,n,s,{allOwnKeys:r}={})=>(S(n,((n,r)=>{s&&p(n)?t[r]=e(n,s):t[r]=n}),{allOwnKeys:r}),t),trim:t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),inherits:(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},toFlatObject:(t,e,n,s)=>{let r,o,a;const c={};if(e=e||{},null==t)return e;do{for(r=Object.getOwnPropertyNames(t),o=r.length;o-- >0;)a=r[o],s&&!s(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&i(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:o,kindOfTest:c,endsWith:(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return-1!==s&&s===n},toArray:t=>{if(!t)return null;if(h(t))return t;let e=t.length;if(!g(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},forEachEntry:(t,e)=>{const n=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=n.next())&&!s.done;){const n=s.value;e.call(t,n[0],n[1])}},matchAll:(t,e)=>{let n;const s=[];for(;null!==(n=t.exec(e));)s.push(n);return s},isHTMLForm:N,hasOwnProperty:k,hasOwnProp:k,reduceDescriptors:O,freezeMethods:t=>{O(t,((e,n)=>{if(p(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const s=t[n];p(s)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(t,e)=>{const n={},s=t=>{t.forEach((t=>{n[t]=!0}))};return h(t)?s(t):s(String(t).split(e)),n},toCamelCase:t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(t,e)=>(t=+t,Number.isFinite(t)?t:e),findKey:C,global:I,isContextDefined:A,toJSONObject:t=>{const e=new Array(10),n=(t,s)=>{if(m(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[s]=t;const r=h(t)?[]:{};return S(t,((t,e)=>{const i=n(t,s+1);!l(i)&&(r[e]=i)})),e[s]=void 0,r}}return t};return n(t,0)}};function x(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r)}L.inherits(x,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:L.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const M=x.prototype,F={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{F[t]={value:t}})),Object.defineProperties(x,F),Object.defineProperty(M,"isAxiosError",{value:!0}),x.from=(t,e,n,s,r,i)=>{const o=Object.create(M);return L.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),x.call(o,t.message,e,n,s,r),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const P=x;const U=n(230);function V(t){return L.isPlainObject(t)||L.isArray(t)}function B(t){return L.endsWith(t,"[]")?t.slice(0,-2):t}function j(t,e,n){return t?t.concat(e).map((function(t,e){return t=B(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}const q=L.toFlatObject(L,{},null,(function(t){return/^is[A-Z]/.test(t)}));const K=function(t,e,n){if(!L.isObject(t))throw new TypeError("target must be an object");e=e||new(U||FormData);const s=(n=L.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!L.isUndefined(e[t])}))).metaTokens,r=n.visitor||h,i=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&((c=e)&&L.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator]);var c;if(!L.isFunction(r))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(L.isDate(t))return t.toISOString();if(!a&&L.isBlob(t))throw new P("Blob is not supported. Use a Buffer instead.");return L.isArrayBuffer(t)||L.isTypedArray(t)?a&&"function"==typeof Blob?new Blob([t]):Buffer.from(t):t}function h(t,n,r){let a=t;if(t&&!r&&"object"==typeof t)if(L.endsWith(n,"{}"))n=s?n:n.slice(0,-2),t=JSON.stringify(t);else if(L.isArray(t)&&function(t){return L.isArray(t)&&!t.some(V)}(t)||L.isFileList(t)||L.endsWith(n,"[]")&&(a=L.toArray(t)))return n=B(n),a.forEach((function(t,s){!L.isUndefined(t)&&null!==t&&e.append(!0===o?j([n],s,i):null===o?n:n+"[]",u(t))})),!1;return!!V(t)||(e.append(j(r,n,i),u(t)),!1)}const l=[],d=Object.assign(q,{defaultVisitor:h,convertValue:u,isVisitable:V});if(!L.isObject(t))throw new TypeError("data must be an object");return function t(n,s){if(!L.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+s.join("."));l.push(n),L.forEach(n,(function(n,i){!0===(!(L.isUndefined(n)||null===n)&&r.call(e,n,L.isString(i)?i.trim():i,s,d))&&t(n,s?s.concat(i):[i])})),l.pop()}}(t),e};function H(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function z(t,e){this._pairs=[],t&&K(t,this,e)}const $=z.prototype;$.append=function(t,e){this._pairs.push([t,e])},$.toString=function(t){const e=t?function(e){return t.call(this,e,H)}:H;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};const G=z;function Q(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function W(t,e,n){if(!e)return t;const s=n&&n.encode||Q,r=n&&n.serialize;let i;if(i=r?r(e,n):L.isURLSearchParams(e)?e.toString():new G(e,n).toString(s),i){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}const X=class{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){L.forEach(this.handlers,(function(e){null!==e&&t(e)}))}},Y={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},J="undefined"!=typeof URLSearchParams?URLSearchParams:G,Z=FormData,tt=(()=>{let t;return("undefined"==typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),et="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,nt={isBrowser:!0,classes:{URLSearchParams:J,FormData:Z,Blob},isStandardBrowserEnv:tt,isStandardBrowserWebWorkerEnv:et,protocols:["http","https","file","blob","url","data"]};const st=function(t){function e(t,n,s,r){let i=t[r++];const o=Number.isFinite(+i),a=r>=t.length;if(i=!i&&L.isArray(s)?s.length:i,a)return L.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!o;s[i]&&L.isObject(s[i])||(s[i]=[]);return e(t,n,s[i],r)&&L.isArray(s[i])&&(s[i]=function(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}(s[i])),!o}if(L.isFormData(t)&&L.isFunction(t.entries)){const n={};return L.forEachEntry(t,((t,s)=>{e(function(t){return L.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}(t),s,n,0)})),n}return null},rt={"Content-Type":void 0};const it={transitional:Y,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",s=n.indexOf("application/json")>-1,r=L.isObject(t);r&&L.isHTMLForm(t)&&(t=new FormData(t));if(L.isFormData(t))return s&&s?JSON.stringify(st(t)):t;if(L.isArrayBuffer(t)||L.isBuffer(t)||L.isStream(t)||L.isFile(t)||L.isBlob(t))return t;if(L.isArrayBufferView(t))return t.buffer;if(L.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let i;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(t,e){return K(t,new nt.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,s){return nt.isNode&&L.isBuffer(t)?(this.append(e,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}(t,this.formSerializer).toString();if((i=L.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return K(i?{"files[]":t}:t,e&&new e,this.formSerializer)}}return r||s?(e.setContentType("application/json",!1),function(t,e,n){if(L.isString(t))try{return(e||JSON.parse)(t),L.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){const e=this.transitional||it.transitional,n=e&&e.forcedJSONParsing,s="json"===this.responseType;if(t&&L.isString(t)&&(n&&!this.responseType||s)){const n=!(e&&e.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(t){if(n){if("SyntaxError"===t.name)throw P.from(t,P.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};L.forEach(["delete","get","head"],(function(t){it.headers[t]={}})),L.forEach(["post","put","patch"],(function(t){it.headers[t]=L.merge(rt)}));const ot=it,at=L.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ct=Symbol("internals");function ut(t){return t&&String(t).trim().toLowerCase()}function ht(t){return!1===t||null==t?t:L.isArray(t)?t.map(ht):String(t)}function lt(t,e,n,s){return L.isFunction(s)?s.call(this,e,n):L.isString(e)?L.isString(s)?-1!==e.indexOf(s):L.isRegExp(s)?s.test(e):void 0:void 0}class dt{constructor(t){t&&this.set(t)}set(t,e,n){const s=this;function r(t,e,n){const r=ut(e);if(!r)throw new Error("header name must be a non-empty string");const i=L.findKey(s,r);(!i||void 0===s[i]||!0===n||void 0===n&&!1!==s[i])&&(s[i||e]=ht(t))}const i=(t,e)=>L.forEach(t,((t,n)=>r(t,n,e)));return L.isPlainObject(t)||t instanceof this.constructor?i(t,e):L.isString(t)&&(t=t.trim())&&!/^[-_a-zA-Z]+$/.test(t.trim())?i((t=>{const e={};let n,s,r;return t&&t.split("\n").forEach((function(t){r=t.indexOf(":"),n=t.substring(0,r).trim().toLowerCase(),s=t.substring(r+1).trim(),!n||e[n]&&at[n]||("set-cookie"===n?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)})),e})(t),e):null!=t&&r(e,t,n),this}get(t,e){if(t=ut(t)){const n=L.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return function(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}(t);if(L.isFunction(e))return e.call(this,t,n);if(L.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=ut(t)){const n=L.findKey(this,t);return!(!n||e&&!lt(0,this[n],n,e))}return!1}delete(t,e){const n=this;let s=!1;function r(t){if(t=ut(t)){const r=L.findKey(n,t);!r||e&&!lt(0,n[r],r,e)||(delete n[r],s=!0)}}return L.isArray(t)?t.forEach(r):r(t),s}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const e=this,n={};return L.forEach(this,((s,r)=>{const i=L.findKey(n,r);if(i)return e[i]=ht(s),void delete e[r];const o=t?function(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete e[r],e[o]=ht(s),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return L.forEach(this,((n,s)=>{null!=n&&!1!==n&&(e[s]=t&&L.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=(this[ct]=this[ct]={accessors:{}}).accessors,n=this.prototype;function s(t){const s=ut(t);e[s]||(!function(t,e){const n=L.toCamelCase(" "+e);["get","set","has"].forEach((s=>{Object.defineProperty(t,s+n,{value:function(t,n,r){return this[s].call(this,e,t,n,r)},configurable:!0})}))}(n,t),e[s]=!0)}return L.isArray(t)?t.forEach(s):s(t),this}}dt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),L.freezeMethods(dt.prototype),L.freezeMethods(dt);const ft=dt;function pt(t,e){const n=this||ot,s=e||n,r=ft.from(s.headers);let i=s.data;return L.forEach(t,(function(t){i=t.call(n,i,r.normalize(),e?e.status:void 0)})),r.normalize(),i}function gt(t){return!(!t||!t.__CANCEL__)}function mt(t,e,n){P.call(this,null==t?"canceled":t,P.ERR_CANCELED,e,n),this.name="CanceledError"}L.inherits(mt,P,{__CANCEL__:!0});const yt=mt;const vt=nt.isStandardBrowserEnv?{write:function(t,e,n,s,r,i){const o=[];o.push(t+"="+encodeURIComponent(e)),L.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),L.isString(s)&&o.push("path="+s),L.isString(r)&&o.push("domain="+r),!0===i&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function wt(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(t,e):e}const Et=nt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function s(n){let s=n;return t&&(e.setAttribute("href",s),s=e.href),e.setAttribute("href",s),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=s(window.location.href),function(t){const e=L.isString(t)?s(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return!0};const bt=function(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r,i=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=s[o];r||(r=c),n[i]=a,s[i]=c;let h=o,l=0;for(;h!==i;)l+=n[h++],h%=t;if(i=(i+1)%t,i===o&&(o=(o+1)%t),c-r<e)return;const d=u&&c-u;return d?Math.round(1e3*l/d):void 0}};function Tt(t,e){let n=0;const s=bt(50,250);return r=>{const i=r.loaded,o=r.lengthComputable?r.total:void 0,a=i-n,c=s(a);n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&i<=o?(o-i)/c:void 0,event:r};u[e?"download":"upload"]=!0,t(u)}}const St={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise((function(e,n){let s=t.data;const r=ft.from(t.headers).normalize(),i=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}L.isFormData(s)&&(nt.isStandardBrowserEnv||nt.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";r.set("Authorization","Basic "+btoa(e+":"+n))}const u=wt(t.baseURL,t.url);function h(){if(!c)return;const s=ft.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(t,e,n){const s=n.config.validateStatus;n.status&&s&&!s(n.status)?e(new P("Request failed with status code "+n.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}((function(t){e(t),a()}),(function(t){n(t),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:s,config:t,request:c}),c=null}if(c.open(t.method.toUpperCase(),W(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(h)},c.onabort=function(){c&&(n(new P("Request aborted",P.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new P("Network Error",P.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const s=t.transitional||Y;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new P(e,s.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,t,c)),c=null},nt.isStandardBrowserEnv){const e=(t.withCredentials||Et(u))&&t.xsrfCookieName&&vt.read(t.xsrfCookieName);e&&r.set(t.xsrfHeaderName,e)}void 0===s&&r.setContentType(null),"setRequestHeader"in c&&L.forEach(r.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),L.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),i&&"json"!==i&&(c.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&c.addEventListener("progress",Tt(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Tt(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{c&&(n(!e||e.type?new yt(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const l=function(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}(u);l&&-1===nt.protocols.indexOf(l)?n(new P("Unsupported protocol "+l+":",P.ERR_BAD_REQUEST,t)):c.send(s||null)}))}};L.forEach(St,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){}Object.defineProperty(t,"adapterName",{value:e})}}));const Ct=t=>{t=L.isArray(t)?t:[t];const{length:e}=t;let n,s;for(let r=0;r<e&&(n=t[r],!(s=L.isString(n)?St[n.toLowerCase()]:n));r++);if(!s){if(!1===s)throw new P(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(L.hasOwnProp(St,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!L.isFunction(s))throw new TypeError("adapter is not a function");return s};function It(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new yt(null,t)}function At(t){It(t),t.headers=ft.from(t.headers),t.data=pt.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);return Ct(t.adapter||ot.adapter)(t).then((function(e){return It(t),e.data=pt.call(t,t.transformResponse,e),e.headers=ft.from(e.headers),e}),(function(e){return gt(e)||(It(t),e&&e.response&&(e.response.data=pt.call(t,t.transformResponse,e.response),e.response.headers=ft.from(e.response.headers))),Promise.reject(e)}))}const _t=t=>t instanceof ft?t.toJSON():t;function Dt(t,e){e=e||{};const n={};function s(t,e,n){return L.isPlainObject(t)&&L.isPlainObject(e)?L.merge.call({caseless:n},t,e):L.isPlainObject(e)?L.merge({},e):L.isArray(e)?e.slice():e}function r(t,e,n){return L.isUndefined(e)?L.isUndefined(t)?void 0:s(void 0,t,n):s(t,e,n)}function i(t,e){if(!L.isUndefined(e))return s(void 0,e)}function o(t,e){return L.isUndefined(e)?L.isUndefined(t)?void 0:s(void 0,t):s(void 0,e)}function a(n,r,i){return i in e?s(n,r):i in t?s(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>r(_t(t),_t(e),!0)};return L.forEach(Object.keys(t).concat(Object.keys(e)),(function(s){const i=c[s]||r,o=i(t[s],e[s],s);L.isUndefined(o)&&i!==a||(n[s]=o)})),n}const Nt="1.2.2",kt={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{kt[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Rt={};kt.transitional=function(t,e,n){function s(t,e){return"[Axios v1.2.2] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,r,i)=>{if(!1===t)throw new P(s(r," has been removed"+(e?" in "+e:"")),P.ERR_DEPRECATED);return e&&!Rt[r]&&(Rt[r]=!0,console.warn(s(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,i)}};const Ot={assertOptions:function(t,e,n){if("object"!=typeof t)throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const e=t[i],n=void 0===e||o(e,i,t);if(!0!==n)throw new P("option "+i+" must be "+n,P.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new P("Unknown option "+i,P.ERR_BAD_OPTION)}},validators:kt},Lt=Ot.validators;class xt{constructor(t){this.defaults=t,this.interceptors={request:new X,response:new X}}request(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},e=Dt(this.defaults,e);const{transitional:n,paramsSerializer:s,headers:r}=e;let i;void 0!==n&&Ot.assertOptions(n,{silentJSONParsing:Lt.transitional(Lt.boolean),forcedJSONParsing:Lt.transitional(Lt.boolean),clarifyTimeoutError:Lt.transitional(Lt.boolean)},!1),void 0!==s&&Ot.assertOptions(s,{encode:Lt.function,serialize:Lt.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),i=r&&L.merge(r.common,r[e.method]),i&&L.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete r[t]})),e.headers=ft.concat(i,r);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let h,l=0;if(!a){const t=[At.bind(this),void 0];for(t.unshift.apply(t,o),t.push.apply(t,c),h=t.length,u=Promise.resolve(e);l<h;)u=u.then(t[l++],t[l++]);return u}h=o.length;let d=e;for(l=0;l<h;){const t=o[l++],e=o[l++];try{d=t(d)}catch(t){e.call(this,t);break}}try{u=At.call(this,d)}catch(t){return Promise.reject(t)}for(l=0,h=c.length;l<h;)u=u.then(c[l++],c[l++]);return u}getUri(t){return W(wt((t=Dt(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}L.forEach(["delete","get","head","options"],(function(t){xt.prototype[t]=function(e,n){return this.request(Dt(n||{},{method:t,url:e,data:(n||{}).data}))}})),L.forEach(["post","put","patch"],(function(t){function e(e){return function(n,s,r){return this.request(Dt(r||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:s}))}}xt.prototype[t]=e(),xt.prototype[t+"Form"]=e(!0)}));const Mt=xt;class Ft{constructor(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;for(;e-- >0;)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const s=new Promise((t=>{n.subscribe(t),e=t})).then(t);return s.cancel=function(){n.unsubscribe(e)},s},t((function(t,s,r){n.reason||(n.reason=new yt(t,s,r),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;return{token:new Ft((function(e){t=e})),cancel:t}}}const Pt=Ft;const Ut={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ut).forEach((([t,e])=>{Ut[e]=t}));const Vt=Ut;const Bt=function t(n){const s=new Mt(n),r=e(Mt.prototype.request,s);return L.extend(r,Mt.prototype,s,{allOwnKeys:!0}),L.extend(r,s,null,{allOwnKeys:!0}),r.create=function(e){return t(Dt(n,e))},r}(ot);Bt.Axios=Mt,Bt.CanceledError=yt,Bt.CancelToken=Pt,Bt.isCancel=gt,Bt.VERSION=Nt,Bt.toFormData=K,Bt.AxiosError=P,Bt.Cancel=Bt.CanceledError,Bt.all=function(t){return Promise.all(t)},Bt.spread=function(t){return function(e){return t.apply(null,e)}},Bt.isAxiosError=function(t){return L.isObject(t)&&!0===t.isAxiosError},Bt.mergeConfig=Dt,Bt.AxiosHeaders=ft,Bt.formToJSON=t=>st(L.isHTMLForm(t)?new FormData(t):t),Bt.HttpStatusCode=Vt,Bt.default=Bt;const jt=Bt,qt=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},Kt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const r=t[e],i=e+1<t.length,o=i?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=r>>2,h=(3&r)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qt(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(i>>10)),e[s++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],i=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==i||null==o||null==a)throw Error();const c=r<<2|i>>4;if(s.push(c),64!==o){const t=i<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Ht=function(t){return function(t){const e=qt(t);return Kt.encodeByteArray(e,!0)}(t).replace(/\./g,"")},zt=function(t){try{return Kt.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
const $t=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Gt=()=>{try{return $t()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&zt(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},Qt=t=>{const e=(t=>{var e,n;return null===(n=null===(e=Gt())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]};
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
 */class Xt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yt.prototype.create)}}class Yt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?function(t,e){return t.replace(Jt,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new Xt(s,o,n)}}const Jt=/\{\$([^}]+)}/g;
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
 */function Zt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(te(n)&&te(i)){if(!Zt(n,i))return!1}else if(n!==i)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function te(t){return null!==t&&"object"==typeof t}
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
function ee(t){return t&&t._delegate?t._delegate:t}class ne{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const se="[DEFAULT]";
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
 */class re{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new Wt;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:se})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===se?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:se:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ie{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new re(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
const oe=[];var ae;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(ae||(ae={}));const ce={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},ue=ae.INFO,he={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},le=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=he[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class de{constructor(t){this.name=t,this._logLevel=ue,this._logHandler=le,this._userLogHandler=null,oe.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?ce[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}let fe,pe;const ge=new WeakMap,me=new WeakMap,ye=new WeakMap,ve=new WeakMap,we=new WeakMap;let Ee={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return me.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ye.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Se(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function be(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(pe||(pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Ce(this),e),Se(ge.get(this))}:function(...e){return Se(t.apply(Ce(this),e))}:function(e,...n){const s=t.call(Ce(this),e,...n);return ye.set(s,e.sort?e.sort():[e]),Se(s)}}function Te(t){return"function"==typeof t?be(t):(t instanceof IDBTransaction&&function(t){if(me.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));me.set(t,e)}(t),e=t,(fe||(fe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,Ee):t);var e}function Se(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(Se(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&ge.set(e,t)})).catch((()=>{})),we.set(e,t),e}(t);if(ve.has(t))return ve.get(t);const e=Te(t);return e!==t&&(ve.set(t,e),we.set(e,t)),e}const Ce=t=>we.get(t);const Ie=["get","getKey","getAll","getAllKeys","count"],Ae=["put","add","delete","clear"],_e=new Map;function De(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(_e.get(e))return _e.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Ae.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!Ie.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return _e.set(e,i),i}Ee=(t=>({...t,get:(e,n,s)=>De(e,n)||t.get(e,n,s),has:(e,n)=>!!De(e,n)||t.has(e,n)}))(Ee);
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
class Ne{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const ke="@firebase/app",Re="0.9.0",Oe=new de("@firebase/app"),Le="[DEFAULT]",xe={[ke]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Me=new Map,Fe=new Map;function Pe(t,e){try{t.container.addComponent(e)}catch(n){Oe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ue(t){const e=t.name;if(Fe.has(e))return Oe.debug(`There were multiple attempts to register component ${e}.`),!1;Fe.set(e,t);for(const e of Me.values())Pe(e,t);return!0}function Ve(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const Be=new Yt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class je{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ne("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Be.create("app-deleted",{appName:this._name})}}
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
 */function qe(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:Le,automaticDataCollectionEnabled:!1},e),r=s.name;if("string"!=typeof r||!r)throw Be.create("bad-app-name",{appName:String(r)});if(n||(n=(()=>{var t;return null===(t=Gt())||void 0===t?void 0:t.config})()),!n)throw Be.create("no-options");const i=Me.get(r);if(i){if(Zt(n,i.options)&&Zt(s,i.config))return i;throw Be.create("duplicate-app",{appName:r})}const o=new ie(r);for(const t of Fe.values())o.addComponent(t);const a=new je(n,s,o);return Me.set(r,a),a}function Ke(t,e,n){var s;let r=null!==(s=xe[t])&&void 0!==s?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${r}" with version "${e}":`];return i&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Oe.warn(t.join(" "))}Ue(new ne(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
const He="firebase-heartbeat-store";let ze=null;function $e(){return ze||(ze=function(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Se(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(Se(o.result),t.oldVersion,t.newVersion,Se(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(He)}}).catch((t=>{throw Be.create("idb-open",{originalErrorMessage:t.message})}))),ze}async function Ge(t,e){try{const n=(await $e()).transaction(He,"readwrite"),s=n.objectStore(He);return await s.put(e,Qe(t)),n.done}catch(t){if(t instanceof Xt)Oe.warn(t.message);else{const e=Be.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Oe.warn(e.message)}}}function Qe(t){return`${t.name}!${t.options.appId}`}
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
 */class We{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ye(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Xe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Xe(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Je(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Je(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=Ht(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xe(){return(new Date).toISOString().substring(0,10)}class Ye{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{return(await $e()).transaction(He).objectStore(He).get(Qe(t))}catch(t){if(t instanceof Xt)Oe.warn(t.message);else{const e=Be.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Oe.warn(e.message)}}}(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ge(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ge(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Je(t){return Ht(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var Ze;Ze="",Ue(new ne("platform-logger",(t=>new Ne(t)),"PRIVATE")),Ue(new ne("heartbeat",(t=>new We(t)),"PRIVATE")),Ke(ke,Re,Ze),Ke(ke,Re,"esm2017"),Ke("fire-js","");var tn,en="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},nn={},sn=sn||{},rn=en||self;function on(){}function an(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function cn(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var un="closure_uid_"+(1e9*Math.random()>>>0),hn=0;function ln(t,e,n){return t.call.apply(t.bind,arguments)}function dn(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function fn(t,e,n){return(fn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ln:dn).apply(null,arguments)}function pn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function gn(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function mn(){this.s=this.s,this.o=this.o}mn.prototype.s=!1,mn.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,un)&&t[un]||(t[un]=++hn))},mn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yn=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function vn(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function wn(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(an(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let r=0;r<s;r++)t[e+r]=n[r]}else t.push(n)}}function En(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}En.prototype.h=function(){this.defaultPrevented=!0};var bn=function(){if(!rn.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{rn.addEventListener("test",on,e),rn.removeEventListener("test",on,e)}catch(t){}return t}();function Tn(t){return/^[\s\xa0]*$/.test(t)}var Sn=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Cn(t,e){return t<e?-1:t>e?1:0}function In(){var t=rn.navigator;return t&&(t=t.userAgent)?t:""}function An(t){return-1!=In().indexOf(t)}function _n(t){return _n[" "](t),t}_n[" "]=on;var Dn,Nn,kn=An("Opera"),Rn=An("Trident")||An("MSIE"),On=An("Edge"),Ln=On||Rn,xn=An("Gecko")&&!(-1!=In().toLowerCase().indexOf("webkit")&&!An("Edge"))&&!(An("Trident")||An("MSIE"))&&!An("Edge"),Mn=-1!=In().toLowerCase().indexOf("webkit")&&!An("Edge");function Fn(){var t=rn.document;return t?t.documentMode:void 0}t:{var Pn="",Un=(Nn=In(),xn?/rv:([^\);]+)(\)|;)/.exec(Nn):On?/Edge\/([\d\.]+)/.exec(Nn):Rn?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Nn):Mn?/WebKit\/(\S+)/.exec(Nn):kn?/(?:Version)[ \/]?(\S+)/.exec(Nn):void 0);if(Un&&(Pn=Un?Un[1]:""),Rn){var Vn=Fn();if(null!=Vn&&Vn>parseFloat(Pn)){Dn=String(Vn);break t}}Dn=Pn}var Bn,jn={};function qn(){return function(t){var e=jn;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Sn(String(Dn)).split("."),n=Sn("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=Cn(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||Cn(0==r[2].length,0==i[2].length)||Cn(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(rn.document&&Rn){var Kn=Fn();Bn=Kn||(parseInt(Dn,10)||void 0)}else Bn=void 0;var Hn=Bn;function zn(t,e){if(En.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(xn){t:{try{_n(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:$n[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&zn.X.h.call(this)}}gn(zn,En);var $n={2:"touch",3:"pen",4:"mouse"};zn.prototype.h=function(){zn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gn="closure_listenable_"+(1e6*Math.random()|0),Qn=0;function Wn(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Qn,this.ba=this.ea=!1}function Xn(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Yn(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Jn(t){const e={};for(const n in t)e[n]=t[n];return e}const Zn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ts(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Zn.length;e++)n=Zn[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function es(t){this.src=t,this.g={},this.h=0}function ns(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=yn(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Xn(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ss(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}es.prototype.add=function(t,e,n,s,r){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=ss(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new Wn(e,this.src,i,!!s,r)).ea=n,t.push(e)),e};var rs="closure_lm_"+(1e6*Math.random()|0),is={};function os(t,e,n,s,r){if(s&&s.once)return cs(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)os(t,e[i],n,s,r);return null}return n=gs(n),t&&t[Gn]?t.N(e,n,cn(s)?!!s.capture:!!s,r):as(t,e,n,!1,s,r)}function as(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=cn(r)?!!r.capture:!!r,a=fs(t);if(a||(t[rs]=a=new es(t)),(n=a.add(e,n,s,o,i)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=ds;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)bn||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ls(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function cs(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)cs(t,e[i],n,s,r);return null}return n=gs(n),t&&t[Gn]?t.O(e,n,cn(s)?!!s.capture:!!s,r):as(t,e,n,!0,s,r)}function us(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)us(t,e[i],n,s,r);else s=cn(s)?!!s.capture:!!s,n=gs(n),t&&t[Gn]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ss(i=t.g[e],n,s,r))&&(Xn(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=fs(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ss(e,n,s,r)),(n=-1<t?e[t]:null)&&hs(n))}function hs(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[Gn])ns(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ls(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=fs(e))?(ns(n,t),0==n.h&&(n.src=null,e[rs]=null)):Xn(t)}}}function ls(t){return t in is?is[t]:is[t]="on"+t}function ds(t,e){if(t.ba)t=!0;else{e=new zn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&hs(t),t=n.call(s,e)}return t}function fs(t){return(t=t[rs])instanceof es?t:null}var ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function gs(t){return"function"==typeof t?t:(t[ps]||(t[ps]=function(e){return t.handleEvent(e)}),t[ps])}function ms(){mn.call(this),this.i=new es(this),this.P=this,this.I=null}function ys(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new En(e,t);else if(e instanceof En)e.target=e.target||t;else{var r=e;ts(e=new En(s,t),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=vs(o,s,!0,e)&&r}if(r=vs(o=e.g=t,s,!0,e)&&r,r=vs(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)r=vs(o=e.g=n[i],s,!1,e)&&r}function vs(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&ns(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}gn(ms,mn),ms.prototype[Gn]=!0,ms.prototype.removeEventListener=function(t,e,n,s){us(this,t,e,n,s)},ms.prototype.M=function(){if(ms.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Xn(n[s]);delete e.g[t],e.h--}}this.I=null},ms.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},ms.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var ws=rn.JSON.stringify;function Es(){var t=_s;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var bs,Ts=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ss),(t=>t.reset()));class Ss{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Cs(t){rn.setTimeout((()=>{throw t}),0)}function Is(t,e){bs||function(){var t=rn.Promise.resolve(void 0);bs=function(){t.then(Ds)}}(),As||(bs(),As=!0),_s.add(t,e)}var As=!1,_s=new class{constructor(){this.h=this.g=null}add(t,e){const n=Ts.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Ds(){for(var t;t=Es();){try{t.h.call(t.g)}catch(t){Cs(t)}var e=Ts;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}As=!1}function Ns(t,e){ms.call(this),this.h=t||1,this.g=e||rn,this.j=fn(this.lb,this),this.l=Date.now()}function ks(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Rs(t,e,n){if("function"==typeof t)n&&(t=fn(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=fn(t.handleEvent,t)}return 2147483647<Number(e)?-1:rn.setTimeout(t,e||0)}function Os(t){t.g=Rs((()=>{t.g=null,t.i&&(t.i=!1,Os(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}gn(Ns,ms),(tn=Ns.prototype).ca=!1,tn.R=null,tn.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ys(this,"tick"),this.ca&&(ks(this),this.start()))}},tn.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},tn.M=function(){Ns.X.M.call(this),ks(this),delete this.g};class Ls extends mn{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Os(this)}M(){super.M(),this.g&&(rn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(t){mn.call(this),this.h=t,this.g={}}gn(xs,mn);var Ms=[];function Fs(t,e,n,s){Array.isArray(n)||(n&&(Ms[0]=n.toString()),n=Ms);for(var r=0;r<n.length;r++){var i=os(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ps(t){Yn(t.g,(function(t,e){this.g.hasOwnProperty(e)&&hs(t)}),t),t.g={}}function Us(){this.g=!0}function Vs(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return ws(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}xs.prototype.M=function(){xs.X.M.call(this),Ps(this)},xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Us.prototype.Aa=function(){this.g=!1},Us.prototype.info=function(){};var Bs={},js=null;function qs(){return js=js||new ms}function Ks(t){En.call(this,Bs.Pa,t)}function Hs(t){const e=qs();ys(e,new Ks(e))}function zs(t,e){En.call(this,Bs.STAT_EVENT,t),this.stat=e}function $s(t){const e=qs();ys(e,new zs(e,t))}function Gs(t,e){En.call(this,Bs.Qa,t),this.size=e}function Qs(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return rn.setTimeout((function(){t()}),e)}Bs.Pa="serverreachability",gn(Ks,En),Bs.STAT_EVENT="statevent",gn(zs,En),Bs.Qa="timingevent",gn(Gs,En);var Ws={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Xs={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Ys(){}function Js(t){return t.h||(t.h=t.i())}function Zs(){}Ys.prototype.h=null;var tr,er={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function nr(){En.call(this,"d")}function sr(){En.call(this,"c")}function rr(){}function ir(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new xs(this),this.O=ar,t=Ln?125:void 0,this.T=new Ns(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new or}function or(){this.i=null,this.g="",this.h=!1}gn(nr,En),gn(sr,En),gn(rr,Ys),rr.prototype.g=function(){return new XMLHttpRequest},rr.prototype.i=function(){return{}},tr=new rr;var ar=45e3,cr={},ur={};function hr(t,e,n){t.K=1,t.v=Nr(Cr(e)),t.s=n,t.P=!0,lr(t,null)}function lr(t,e){t.F=Date.now(),gr(t),t.A=Cr(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),qr(n.i,"t",s),t.C=0,n=t.l.H,t.h=new or,t.g=ji(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ls(fn(t.La,t,t.g),t.N)),Fs(t.S,t.g,"readystatechange",t.ib),e=t.H?Jn(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Hs(),function(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function dr(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function fr(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=pr(t,n),s==ur){4==e&&(t.o=4,$s(14),r=!1),Vs(t.j,t.m,null,"[Incomplete Response]");break}if(s==cr){t.o=4,$s(15),Vs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Vs(t.j,t.m,s,null),Er(t,s)}dr(t)&&s!=ur&&s!=cr&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,$s(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Li(e),e.K=!0,$s(11))):(Vs(t.j,t.m,n,"[Invalid Chunked Response]"),wr(t),vr(t))}function pr(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?ur:(n=Number(e.substring(n,s)),isNaN(n)?cr:(s+=1)+n>e.length?ur:(e=e.substr(s,n),t.C=s+n,e))}function gr(t){t.V=Date.now()+t.O,mr(t,t.O)}function mr(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Qs(fn(t.gb,t),e)}function yr(t){t.B&&(rn.clearTimeout(t.B),t.B=null)}function vr(t){0==t.l.G||t.I||Fi(t.l,t)}function wr(t){yr(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,ks(t.T),Ps(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Er(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Qr(n.h,t)))if(!t.J&&Qr(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Mi(n),Ii(n)}Oi(n),$s(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=Qs(fn(n.cb,n),6e3));if(1>=Gr(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Ui(n,11)}else if((t.J||n.g==t)&&Mi(n),!Tn(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=u[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Wr(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,Dr(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((s=n).sa=Bi(s,s.H?s.ka:null,s.V),o.J){Xr(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(yr(a),gr(a)),s.g=o}else Ri(s);0<n.i.length&&_i(n)}else"stop"!=u[0]&&"close"!=u[0]||Ui(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ui(n,7):Ci(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Hs()}catch(t){}}function br(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(an(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(an(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(an(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}(tn=ir.prototype).setTimeout=function(t){this.O=t},tn.ib=function(t){t=t.target;const e=this.L;e&&3==vi(t)?e.l():this.La(t)},tn.La=function(t){try{if(t==this.g)t:{const h=vi(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||Ln||this.g&&(this.h.h||this.g.fa()||wi(this.g)))){this.I||4!=h||7==e||Hs(),yr(this);var n=this.g.aa();this.Y=n;e:if(dr(this)){var s=wi(this.g);t="";var r=s.length,i=4==vi(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){wr(this),vr(this);var o="";break e}this.h.i=new rn.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Tn(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,$s(12),wr(this),vr(this);break t}Vs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Er(this,n)}this.P?(fr(this,h,o),Ln&&this.i&&3==h&&(Fs(this.S,this.T,"tick",this.hb),this.T.start())):(Vs(this.j,this.m,o,null),Er(this,o)),4==h&&wr(this),this.i&&!this.I&&(4==h?Fi(this.l,this):(this.i=!1,gr(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,$s(12)):(this.o=0,$s(13)),wr(this),vr(this)}}}catch(t){}},tn.hb=function(){if(this.g){var t=vi(this.g),e=this.g.fa();this.C<e.length&&(yr(this),fr(this,t,e),this.i&&4!=t&&gr(this))}},tn.cancel=function(){this.I=!0,wr(this)},tn.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Hs(),$s(17)),wr(this),this.o=2,vr(this)):mr(this,this.V-t)};var Tr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Sr){this.h=void 0!==e?e:t.h,Ir(this,t.j),this.s=t.s,this.g=t.g,Ar(this,t.m),this.l=t.l,e=t.i;var n=new Ur;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),_r(this,n),this.o=t.o}else t&&(n=String(t).match(Tr))?(this.h=!!e,Ir(this,n[1]||"",!0),this.s=kr(n[2]||""),this.g=kr(n[3]||"",!0),Ar(this,n[4]),this.l=kr(n[5]||"",!0),_r(this,n[6]||"",!0),this.o=kr(n[7]||"")):(this.h=!!e,this.i=new Ur(null,this.h))}function Cr(t){return new Sr(t)}function Ir(t,e,n){t.j=n?kr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ar(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function _r(t,e,n){e instanceof Ur?(t.i=e,function(t,e){e&&!t.j&&(Vr(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Br(this,e),qr(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Rr(e,Fr)),t.i=new Ur(e,t.h))}function Dr(t,e,n){t.i.set(e,n)}function Nr(t){return Dr(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function kr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Rr(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Or),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Or(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Sr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Rr(e,Lr,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Rr(e,Lr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Rr(n,"/"==n.charAt(0)?Mr:xr,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Rr(n,Pr)),t.join("")};var Lr=/[#\/\?@]/g,xr=/[#\?:]/g,Mr=/[#\?]/g,Fr=/[#\?@]/g,Pr=/#/g;function Ur(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vr(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Br(t,e){Vr(t),e=Kr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function jr(t,e){return Vr(t),e=Kr(t,e),t.g.has(e)}function qr(t,e,n){Br(t,e),0<n.length&&(t.i=null,t.g.set(Kr(t,e),vn(n)),t.h+=n.length)}function Kr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(tn=Ur.prototype).add=function(t,e){Vr(this),this.i=null,t=Kr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},tn.forEach=function(t,e){Vr(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},tn.oa=function(){Vr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},tn.W=function(t){Vr(this);let e=[];if("string"==typeof t)jr(this,t)&&(e=e.concat(this.g.get(Kr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},tn.set=function(t,e){return Vr(this),this.i=null,jr(this,t=Kr(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},tn.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},tn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Hr(t){this.l=t||zr,rn.PerformanceNavigationTiming?t=0<(t=rn.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(rn.g&&rn.g.Ga&&rn.g.Ga()&&rn.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zr=10;function $r(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Gr(t){return t.h?1:t.g?t.g.size:0}function Qr(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Wr(t,e){t.g?t.g.add(e):t.h=e}function Xr(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Yr(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return vn(t.i)}function Jr(){}function Zr(){this.g=new Jr}function ti(t,e,n){const s=n||"";try{br(t,(function(t,n){let r=t;cn(t)&&(r=ws(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function ei(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(t){}}function ni(t){this.l=t.ac||null,this.j=t.jb||!1}function si(t,e){ms.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ri,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Hr.prototype.cancel=function(){if(this.i=Yr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Jr.prototype.stringify=function(t){return rn.JSON.stringify(t,void 0)},Jr.prototype.parse=function(t){return rn.JSON.parse(t,void 0)},gn(ni,Ys),ni.prototype.g=function(){return new si(this.l,this.j)},ni.prototype.i=function(t){return function(){return t}}({}),gn(si,ms);var ri=0;function ii(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function oi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ai(t)}function ai(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(tn=si.prototype).open=function(t,e){if(this.readyState!=ri)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ai(this)},tn.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||rn).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},tn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,oi(this)),this.readyState=ri},tn.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ai(this)),this.g&&(this.readyState=3,ai(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==rn.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ii(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},tn.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?oi(this):ai(this),3==this.readyState&&ii(this)}},tn.Va=function(t){this.g&&(this.response=this.responseText=t,oi(this))},tn.Ua=function(t){this.g&&(this.response=t,oi(this))},tn.ga=function(){this.g&&oi(this)},tn.setRequestHeader=function(t,e){this.v.append(t,e)},tn.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},tn.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(si.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ci=rn.JSON.parse;function ui(t){ms.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hi,this.K=this.L=!1}gn(ui,ms);var hi="",li=/^https?$/i,di=["POST","PUT"];function fi(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,pi(t),mi(t)}function pi(t){t.D||(t.D=!0,ys(t,"complete"),ys(t,"error"))}function gi(t){if(t.h&&void 0!==sn&&(!t.C[1]||4!=vi(t)||2!=t.aa()))if(t.v&&4==vi(t))Rs(t.Ha,0,t);else if(ys(t,"readystatechange"),4==vi(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var r=String(t.H).match(Tr)[1]||null;if(!r&&rn.self&&rn.self.location){var i=rn.self.location.protocol;r=i.substr(0,i.length-1)}s=!li.test(r?r.toLowerCase():"")}n=s}if(n)ys(t,"complete"),ys(t,"success");else{t.m=6;try{var o=2<vi(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",pi(t)}}finally{mi(t)}}}function mi(t,e){if(t.g){yi(t);const n=t.g,s=t.C[0]?on:null;t.g=null,t.C=null,e||ys(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function yi(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(rn.clearTimeout(t.A),t.A=null)}function vi(t){return t.g?t.g.readyState:0}function wi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hi:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ei(t){let e="";return Yn(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function bi(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Ei(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Dr(t,e,n))}function Ti(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Si(t){this.Ca=0,this.i=[],this.j=new Us,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ti("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ti("baseRetryDelayMs",5e3,t),this.bb=Ti("retryDelaySeedMs",1e4,t),this.$a=Ti("forwardChannelMaxRetries",2,t),this.ta=Ti("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Hr(t&&t.concurrentRequestLimit),this.Fa=new Zr,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Ci(t){if(Ai(t),3==t.G){var e=t.U++,n=Cr(t.F);Dr(n,"SID",t.I),Dr(n,"RID",e),Dr(n,"TYPE","terminate"),Ni(t,n),(e=new ir(t,t.j,e,void 0)).K=2,e.v=Nr(Cr(n)),n=!1,rn.navigator&&rn.navigator.sendBeacon&&(n=rn.navigator.sendBeacon(e.v.toString(),"")),!n&&rn.Image&&((new Image).src=e.v,n=!0),n||(e.g=ji(e.l,null),e.g.da(e.v)),e.F=Date.now(),gr(e)}Vi(t)}function Ii(t){t.g&&(Li(t),t.g.cancel(),t.g=null)}function Ai(t){Ii(t),t.u&&(rn.clearTimeout(t.u),t.u=null),Mi(t),t.h.cancel(),t.m&&("number"==typeof t.m&&rn.clearTimeout(t.m),t.m=null)}function _i(t){$r(t.h)||t.m||(t.m=!0,Is(t.Ja,t),t.C=0)}function Di(t,e){var n;n=e?e.m:t.U++;const s=Cr(t.F);Dr(s,"SID",t.I),Dr(s,"RID",n),Dr(s,"AID",t.T),Ni(t,s),t.o&&t.s&&bi(s,t.o,t.s),n=new ir(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ki(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Wr(t.h,n),hr(n,s,e)}function Ni(t,e){t.ia&&Yn(t.ia,(function(t,n){Dr(e,n,t)})),t.l&&br({},(function(t,n){Dr(e,n,t)}))}function ki(t,e,n){n=Math.min(t.i.length,n);var s=t.l?fn(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),i=!1;else try{ti(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(i){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function Ri(t){t.g||t.u||(t.Z=1,Is(t.Ia,t),t.A=0)}function Oi(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Qs(fn(t.Ia,t),Pi(t,t.A)),t.A++,!0)}function Li(t){null!=t.B&&(rn.clearTimeout(t.B),t.B=null)}function xi(t){t.g=new ir(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Cr(t.sa);Dr(e,"RID","rpc"),Dr(e,"SID",t.I),Dr(e,"CI",t.L?"0":"1"),Dr(e,"AID",t.T),Dr(e,"TYPE","xmlhttp"),Ni(t,e),t.o&&t.s&&bi(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Nr(Cr(e)),n.s=null,n.P=!0,lr(n,t)}function Mi(t){null!=t.v&&(rn.clearTimeout(t.v),t.v=null)}function Fi(t,e){var n=null;if(t.g==e){Mi(t),Li(t),t.g=null;var s=2}else{if(!Qr(t.h,e))return;n=e.D,Xr(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;ys(s=qs(),new Gs(s,n)),_i(t)}else Ri(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==s&&function(t,e){return!(Gr(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Qs(fn(t.Ja,t,e),Pi(t,t.C)),t.C++,0)))}(t,e)||2==s&&Oi(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Ui(t,5);break;case 4:Ui(t,10);break;case 3:Ui(t,6);break;default:Ui(t,2)}}function Pi(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ui(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=fn(t.kb,t);n||(n=new Sr("//www.google.com/images/cleardot.gif"),rn.location&&"http"==rn.location.protocol||Ir(n,"https"),Nr(n)),function(t,e){const n=new Us;if(rn.Image){const s=new Image;s.onload=pn(ei,n,s,"TestLoadImage: loaded",!0,e),s.onerror=pn(ei,n,s,"TestLoadImage: error",!1,e),s.onabort=pn(ei,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=pn(ei,n,s,"TestLoadImage: timeout",!1,e),rn.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else $s(2);t.G=0,t.l&&t.l.va(e),Vi(t),Ai(t)}function Vi(t){if(t.G=0,t.la=[],t.l){const e=Yr(t.h);0==e.length&&0==t.i.length||(wn(t.la,e),wn(t.la,t.i),t.h.i.length=0,vn(t.i),t.i.length=0),t.l.ua()}}function Bi(t,e,n){var s=n instanceof Sr?Cr(n):new Sr(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),Ar(s,s.m);else{var r=rn.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Sr(null,void 0);s&&Ir(i,s),e&&(i.g=e),r&&Ar(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Dr(s,n,e),Dr(s,"VER",t.ma),Ni(t,s),s}function ji(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new ui(new ni({jb:!0})):new ui(t.ra)).Ka(t.H),e}function qi(){}function Ki(){if(Rn&&!(10<=Number(Hn)))throw Error("Environmental error: no available transport.")}function Hi(t,e){ms.call(this),this.g=new Si(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Tn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Tn(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Gi(this)}function zi(t){nr.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function $i(){sr.call(this),this.status=1}function Gi(t){this.g=t}(tn=ui.prototype).Ka=function(t){this.L=t},tn.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():tr.g(),this.C=this.u?Js(this.u):Js(tr),this.g.onreadystatechange=fn(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void fi(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=rn.FormData&&t instanceof rn.FormData,!(0<=yn(di,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yi(this),0<this.B&&((this.K=function(t){return Rn&&qn()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=fn(this.qa,this)):this.A=Rs(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){fi(this,t)}},tn.qa=function(){void 0!==sn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ys(this,"timeout"),this.abort(8))},tn.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ys(this,"complete"),ys(this,"abort"),mi(this))},tn.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),mi(this,!0)),ui.X.M.call(this)},tn.Ha=function(){this.s||(this.F||this.v||this.l?gi(this):this.fb())},tn.fb=function(){gi(this)},tn.aa=function(){try{return 2<vi(this)?this.g.status:-1}catch(t){return-1}},tn.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},tn.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ci(e)}},tn.Ea=function(){return this.m},tn.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(tn=Si.prototype).ma=8,tn.G=1,tn.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new ir(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Jn(i),ts(i,this.S)):i=this.S),null!==this.o||this.N||(r.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ki(this,r,e),Dr(n=Cr(this.F),"RID",t),Dr(n,"CVER",22),this.D&&Dr(n,"X-HTTP-Session-Id",this.D),Ni(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Ei(i)))+"&"+e:this.o&&bi(n,this.o,i)),Wr(this.h,r),this.Ya&&Dr(n,"TYPE","init"),this.O?(Dr(n,"$req",e),Dr(n,"SID","null"),r.Z=!0,hr(r,n,null)):hr(r,n,e),this.G=2}}else 3==this.G&&(t?Di(this,t):0==this.i.length||$r(this.h)||Di(this))},tn.Ia=function(){if(this.u=null,xi(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Qs(fn(this.eb,this),t)}},tn.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,$s(10),Ii(this),xi(this))},tn.cb=function(){null!=this.v&&(this.v=null,Ii(this),Oi(this),$s(19))},tn.kb=function(t){t?(this.j.info("Successfully pinged google.com"),$s(2)):(this.j.info("Failed to ping google.com"),$s(1))},(tn=qi.prototype).xa=function(){},tn.wa=function(){},tn.va=function(){},tn.ua=function(){},tn.Ra=function(){},Ki.prototype.g=function(t,e){return new Hi(t,e)},gn(Hi,ms),Hi.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;$s(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Bi(t,null,t.V),_i(t)},Hi.prototype.close=function(){Ci(this.g)},Hi.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=ws(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&_i(e)},Hi.prototype.M=function(){this.g.l=null,delete this.j,Ci(this.g),delete this.g,Hi.X.M.call(this)},gn(zi,nr),gn($i,sr),gn(Gi,qi),Gi.prototype.xa=function(){ys(this.g,"a")},Gi.prototype.wa=function(t){ys(this.g,new zi(t))},Gi.prototype.va=function(t){ys(this.g,new $i)},Gi.prototype.ua=function(){ys(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,Hi.prototype.send=Hi.prototype.u,Hi.prototype.open=Hi.prototype.m,Hi.prototype.close=Hi.prototype.close,Ws.NO_ERROR=0,Ws.TIMEOUT=8,Ws.HTTP_ERROR=6,Xs.COMPLETE="complete",Zs.EventType=er,er.OPEN="a",er.CLOSE="b",er.ERROR="c",er.MESSAGE="d",ms.prototype.listen=ms.prototype.N,ui.prototype.listenOnce=ui.prototype.O,ui.prototype.getLastError=ui.prototype.Oa,ui.prototype.getLastErrorCode=ui.prototype.Ea,ui.prototype.getStatus=ui.prototype.aa,ui.prototype.getResponseJson=ui.prototype.Sa,ui.prototype.getResponseText=ui.prototype.fa,ui.prototype.send=ui.prototype.da,ui.prototype.setWithCredentials=ui.prototype.Ka;var Qi=nn.createWebChannelTransport=function(){return new Ki},Wi=nn.getStatEventTarget=function(){return qs()},Xi=nn.ErrorCode=Ws,Yi=nn.EventType=Xs,Ji=nn.Event=Bs,Zi=nn.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},to=nn.FetchXmlHttpFactory=ni,eo=nn.WebChannel=Zs,no=nn.XhrIo=ui;const so="@firebase/firestore";
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
 */class ro{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ro.UNAUTHENTICATED=new ro(null),ro.GOOGLE_CREDENTIALS=new ro("google-credentials-uid"),ro.FIRST_PARTY=new ro("first-party-uid"),ro.MOCK_USER=new ro("mock-user");
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
let io="9.15.0";
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
 */const oo=new de("@firebase/firestore");function ao(){return oo.logLevel}function co(t,...e){if(oo.logLevel<=ae.DEBUG){const n=e.map(lo);oo.debug(`Firestore (${io}): ${t}`,...n)}}function uo(t,...e){if(oo.logLevel<=ae.ERROR){const n=e.map(lo);oo.error(`Firestore (${io}): ${t}`,...n)}}function ho(t,...e){if(oo.logLevel<=ae.WARN){const n=e.map(lo);oo.warn(`Firestore (${io}): ${t}`,...n)}}function lo(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function fo(t="Unexpected state"){const e=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: `+t;throw uo(e),new Error(e)}function po(t,e){t||fo()}function go(t,e){return t}
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
 */const mo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class yo extends Xt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class vo{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class wo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Eo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ro.UNAUTHENTICATED)))}shutdown(){}}class bo{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class To{constructor(t){this.t=t,this.currentUser=ro.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new vo;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new vo,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{co("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(co("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new vo)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(co("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(po("string"==typeof e.accessToken),new wo(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return po(null===t||"string"==typeof t),new ro(t)}}class So{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=ro.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(po(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Co{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new So(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(ro.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Io{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ao{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&co("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,co("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{co("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):co("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(po("string"==typeof t.token),this.A=t.token,new Io(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function _o(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class Do{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=_o(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function No(t,e){return t<e?-1:t>e?1:0}function ko(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
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
class Ro{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new yo(mo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new yo(mo.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new yo(mo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new yo(mo.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ro.fromMillis(Date.now())}static fromDate(t){return Ro.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ro(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?No(this.nanoseconds,t.nanoseconds):No(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Oo{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Oo(t)}static min(){return new Oo(new Ro(0,0))}static max(){return new Oo(new Ro(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class Lo{constructor(t,e,n){void 0===e?e=0:e>t.length&&fo(),void 0===n?n=t.length-e:n>t.length-e&&fo(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Lo.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Lo?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class xo extends Lo{construct(t,e,n){return new xo(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new yo(mo.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new xo(e)}static emptyPath(){return new xo([])}}const Mo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fo extends Lo{construct(t,e,n){return new Fo(t,e,n)}static isValidIdentifier(t){return Mo.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fo.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Fo(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new yo(mo.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new yo(mo.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new yo(mo.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new yo(mo.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Fo(e)}static emptyPath(){return new Fo([])}}
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
 */class Po{constructor(t){this.path=t}static fromPath(t){return new Po(xo.fromString(t))}static fromName(t){return new Po(xo.fromString(t).popFirst(5))}static empty(){return new Po(xo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===xo.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return xo.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Po(new xo(t.slice()))}}
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
 */class Uo{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}Uo.UNKNOWN_ID=-1;function Vo(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=Oo.fromTimestamp(1e9===s?new Ro(n+1,0):new Ro(n,s));return new jo(r,Po.empty(),e)}function Bo(t){return new jo(t.readTime,t.key,-1)}class jo{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new jo(Oo.min(),Po.empty(),-1)}static max(){return new jo(Oo.max(),Po.empty(),-1)}}function qo(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Po.comparator(t.documentKey,e.documentKey),0!==n?n:No(t.largestBatchId,e.largestBatchId))}
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
 */const Ko="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ho{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function zo(t){if(t.code!==mo.FAILED_PRECONDITION||t.message!==Ko)throw t;co("LocalStore","Unexpectedly lost primary lease")}
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
 */class $o{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&fo(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new $o(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof $o?e:$o.resolve(e)}catch(t){return $o.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):$o.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):$o.reject(e)}static resolve(t){return new $o(((e,n)=>{e(t)}))}static reject(t){return new $o(((e,n)=>{n(t)}))}static waitFor(t){return new $o(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=$o.resolve(!1);for(const n of t)e=e.next((t=>t?$o.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new $o(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new $o(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}}
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
 */function Go(t){return"IndexedDbTransactionError"===t.name}
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
class Qo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}Qo.at=-1;
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
class Wo{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Xo{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Xo("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Xo&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function Yo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */function ta(t){return null==t}function ea(t){return 0===t&&1/t==-1/0}function na(t){return"number"==typeof t&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
class sa{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new sa(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new sa(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return No(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}sa.EMPTY_BYTE_STRING=new sa("");const ra=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ia(t){if(po(!!t),"string"==typeof t){let e=0;const n=ra.exec(t);if(po(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:oa(t.seconds),nanos:oa(t.nanos)}}function oa(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function aa(t){return"string"==typeof t?sa.fromBase64String(t):sa.fromUint8Array(t)}
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
 */function ca(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ua(t){const e=t.mapValue.fields.__previous_value__;return ca(e)?ua(e):e}function ha(t){const e=ia(t.mapValue.fields.__local_write_time__.timestampValue);return new Ro(e.seconds,e.nanos)}
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
 */const la={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function da(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ca(t)?4:Ia(t)?9007199254740991:10:fo()}function fa(t,e){if(t===e)return!0;const n=da(t);if(n!==da(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ha(t).isEqual(ha(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ia(t.timestampValue),s=ia(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return aa(t.bytesValue).isEqual(aa(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return oa(t.geoPointValue.latitude)===oa(e.geoPointValue.latitude)&&oa(t.geoPointValue.longitude)===oa(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return oa(t.integerValue)===oa(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=oa(t.doubleValue),s=oa(e.doubleValue);return n===s?ea(n)===ea(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return ko(t.arrayValue.values||[],e.arrayValue.values||[],fa);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(Yo(n)!==Yo(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!fa(n[t],s[t])))return!1;return!0}(t,e);default:return fo()}}function pa(t,e){return void 0!==(t.values||[]).find((t=>fa(t,e)))}function ga(t,e){if(t===e)return 0;const n=da(t),s=da(e);if(n!==s)return No(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return No(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=oa(t.integerValue||t.doubleValue),s=oa(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return ma(t.timestampValue,e.timestampValue);case 4:return ma(ha(t),ha(e));case 5:return No(t.stringValue,e.stringValue);case 6:return function(t,e){const n=aa(t),s=aa(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=No(n[t],s[t]);if(0!==e)return e}return No(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=No(oa(t.latitude),oa(e.latitude));return 0!==n?n:No(oa(t.longitude),oa(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=ga(n[t],s[t]);if(e)return e}return No(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===la.mapValue&&e===la.mapValue)return 0;if(t===la.mapValue)return 1;if(e===la.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let t=0;t<s.length&&t<i.length;++t){const e=No(s[t],i[t]);if(0!==e)return e;const o=ga(n[s[t]],r[i[t]]);if(0!==o)return o}return No(s.length,i.length)}(t.mapValue,e.mapValue);default:throw fo()}}function ma(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return No(t,e);const n=ia(t),s=ia(e),r=No(n.seconds,s.seconds);return 0!==r?r:No(n.nanos,s.nanos)}function ya(t){return va(t)}function va(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ia(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?aa(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Po.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=va(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${va(t.fields[r])}`;return n+"}"}(t.mapValue):fo();var e,n}function wa(t){return!!t&&"integerValue"in t}function Ea(t){return!!t&&"arrayValue"in t}function ba(t){return!!t&&"nullValue"in t}function Ta(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Sa(t){return!!t&&"mapValue"in t}function Ca(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Jo(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ca(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ca(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ia(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Aa{constructor(t,e){this.position=t,this.inclusive=e}}function _a(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?Po.comparator(Po.fromName(o.referenceValue),n.key):ga(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function Da(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fa(t.position[n],e.position[n]))return!1;return!0}
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
 */class Na{}class ka extends Na{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Ua(t,e,n):"array-contains"===e?new qa(t,n):"in"===e?new Ka(t,n):"not-in"===e?new Ha(t,n):"array-contains-any"===e?new za(t,n):new ka(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Va(t,n):new Ba(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ga(e,this.value)):null!==e&&da(this.value)===da(e)&&this.matchesComparison(ga(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return fo()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ra extends Na{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new Ra(t,e)}matches(t){return Oa(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Oa(t){return"and"===t.op}function La(t){return xa(t)&&Oa(t)}function xa(t){for(const e of t.filters)if(e instanceof Ra)return!1;return!0}function Ma(t){if(t instanceof ka)return t.field.canonicalString()+t.op.toString()+ya(t.value);{const e=t.filters.map((t=>Ma(t))).join(",");return`${t.op}(${e})`}}function Fa(t,e){return t instanceof ka?function(t,e){return e instanceof ka&&t.op===e.op&&t.field.isEqual(e.field)&&fa(t.value,e.value)}(t,e):t instanceof Ra?function(t,e){return e instanceof Ra&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&Fa(n,e.filters[s])),!0)}(t,e):void fo()}function Pa(t){return t instanceof ka?function(t){return`${t.field.canonicalString()} ${t.op} ${ya(t.value)}`}(t):t instanceof Ra?function(t){return t.op.toString()+" {"+t.getFilters().map(Pa).join(" ,")+"}"}(t):"Filter"}class Ua extends ka{constructor(t,e,n){super(t,e,n),this.key=Po.fromName(n.referenceValue)}matches(t){const e=Po.comparator(t.key,this.key);return this.matchesComparison(e)}}class Va extends ka{constructor(t,e){super(t,"in",e),this.keys=ja("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ba extends ka{constructor(t,e){super(t,"not-in",e),this.keys=ja("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ja(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Po.fromName(t.referenceValue)))}class qa extends ka{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ea(e)&&pa(e.arrayValue,this.value)}}class Ka extends ka{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&pa(this.value.arrayValue,e)}}class Ha extends ka{constructor(t,e){super(t,"not-in",e)}matches(t){if(pa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!pa(this.value.arrayValue,e)}}class za extends ka{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ea(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>pa(this.value.arrayValue,t)))}}
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
 */class $a{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ga(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
 */class Qa{constructor(t,e){this.comparator=t,this.root=e||Xa.EMPTY}insert(t,e){return new Qa(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xa.BLACK,null,null))}remove(t){return new Qa(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xa.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wa(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wa(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wa(this.root,t,this.comparator,!0)}}class Wa{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xa{constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:Xa.RED,this.left=null!=s?s:Xa.EMPTY,this.right=null!=r?r:Xa.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,r){return new Xa(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xa.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Xa.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xa.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xa.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw fo();if(this.right.isRed())throw fo();const t=this.left.check();if(t!==this.right.check())throw fo();return t+(this.isRed()?0:1)}}Xa.EMPTY=null,Xa.RED=!0,Xa.BLACK=!1,Xa.EMPTY=new class{constructor(){this.size=0}get key(){throw fo()}get value(){throw fo()}get color(){throw fo()}get left(){throw fo()}get right(){throw fo()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Xa(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ya{constructor(t){this.comparator=t,this.data=new Qa(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ja(this.data.getIterator())}getIteratorFrom(t){return new Ja(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ya))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ya(this.comparator);return e.data=t,e}}class Ja{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Za{constructor(t){this.fields=t,t.sort(Fo.comparator)}static empty(){return new Za([])}unionWith(t){let e=new Ya(Fo.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Za(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ko(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class tc{constructor(t){this.value=t}static empty(){return new tc({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Sa(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ca(e)}setAll(t){let e=Fo.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=Ca(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());Sa(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fa(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Sa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Jo(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new tc(Ca(this.value))}}function ec(t){const e=[];return Jo(t.fields,((t,n)=>{const s=new Fo([t]);if(Sa(n)){const t=ec(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Za(e)
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
 */}class nc{constructor(t,e,n,s,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(t){return new nc(t,0,Oo.min(),Oo.min(),Oo.min(),tc.empty(),0)}static newFoundDocument(t,e,n,s){return new nc(t,1,e,Oo.min(),n,s,0)}static newNoDocument(t,e){return new nc(t,2,e,Oo.min(),Oo.min(),tc.empty(),0)}static newUnknownDocument(t,e){return new nc(t,3,e,Oo.min(),Oo.min(),tc.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Oo.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=tc.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=tc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Oo.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof nc&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new nc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class sc{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.ft=null}}function rc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new sc(t,e,n,s,r,i,o)}function ic(t){const e=go(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Ma(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ta(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ya(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ya(t))).join(",")),e.ft=t}return e.ft}function oc(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ga(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fa(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Da(t.startAt,e.startAt)&&Da(t.endAt,e.endAt)}function ac(t){return Po.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class cc{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function uc(t,e,n,s,r,i,o,a){return new cc(t,e,n,s,r,i,o,a)}function hc(t){return new cc(t)}function lc(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function dc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function fc(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function pc(t){return null!==t.collectionGroup}function gc(t){const e=go(t);if(null===e.dt){e.dt=[];const t=fc(e),n=dc(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new $a(t)),e.dt.push(new $a(Fo.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new $a(Fo.keyField(),t))}}}return e.dt}function mc(t){const e=go(t);if(!e._t)if("F"===e.limitType)e._t=rc(e.path,e.collectionGroup,gc(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of gc(e)){const e="desc"===n.dir?"asc":"desc";t.push(new $a(n.field,e))}const n=e.endAt?new Aa(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Aa(e.startAt.position,e.startAt.inclusive):null;e._t=rc(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e._t}function yc(t,e,n){return new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return oc(mc(t),mc(e))&&t.limitType===e.limitType}function wc(t){return`${ic(mc(t))}|lt:${t.limitType}`}function Ec(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Pa(t))).join(", ")}]`),ta(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ya(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ya(t))).join(",")),`Target(${e})`}(mc(t))}; limitType=${t.limitType})`}function bc(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Po.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of gc(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=_a(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,gc(t),e))&&!(t.endAt&&!function(t,e,n){const s=_a(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,gc(t),e))}(t,e)}function Tc(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sc(t){return(e,n)=>{let s=!1;for(const r of gc(t)){const t=Cc(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function Cc(t,e,n){const s=t.field.isKeyField()?Po.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?ga(s,r):fo()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return fo()}}
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
 */function Ic(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function Ac(t){return{integerValue:""+t}}function _c(t,e){return na(e)?Ac(e):Ic(t,e)}
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
 */class Dc{constructor(){this._=void 0}}function Nc(t,e,n){return t instanceof Oc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Lc?xc(t,e):t instanceof Mc?Fc(t,e):function(t,e){const n=Rc(t,e),s=Uc(n)+Uc(t.gt);return wa(n)&&wa(t.gt)?Ac(s):Ic(t.yt,s)}(t,e)}function kc(t,e,n){return t instanceof Lc?xc(t,e):t instanceof Mc?Fc(t,e):n}function Rc(t,e){return t instanceof Pc?wa(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class Oc extends Dc{}class Lc extends Dc{constructor(t){super(),this.elements=t}}function xc(t,e){const n=Vc(e);for(const e of t.elements)n.some((t=>fa(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Mc extends Dc{constructor(t){super(),this.elements=t}}function Fc(t,e){let n=Vc(e);for(const e of t.elements)n=n.filter((t=>!fa(t,e)));return{arrayValue:{values:n}}}class Pc extends Dc{constructor(t,e){super(),this.yt=t,this.gt=e}}function Uc(t){return oa(t.integerValue||t.doubleValue)}function Vc(t){return Ea(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class Bc{constructor(t,e){this.version=t,this.transformResults=e}}class jc{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new jc}static exists(t){return new jc(void 0,t)}static updateTime(t){return new jc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Kc{}function Hc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new tu(t.key,jc.none()):new Wc(t.key,t.data,jc.none());{const n=t.data,s=tc.empty();let r=new Ya(Fo.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new Xc(t.key,s,new Za(r.toArray()),jc.none())}}function zc(t,e,n){t instanceof Wc?function(t,e,n){const s=t.value.clone(),r=Jc(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Xc?function(t,e,n){if(!qc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Jc(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Yc(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function $c(t,e,n,s){return t instanceof Wc?function(t,e,n,s){if(!qc(t.precondition,e))return n;const r=t.value.clone(),i=Zc(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof Xc?function(t,e,n,s){if(!qc(t.precondition,e))return n;const r=Zc(t.fieldTransforms,s,e),i=e.data;return i.setAll(Yc(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return qc(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Gc(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=Rc(s.transform,t||null);null!=r&&(null===n&&(n=tc.empty()),n.set(s.field,r))}return n||null}function Qc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ko(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Lc&&e instanceof Lc||t instanceof Mc&&e instanceof Mc?ko(t.elements,e.elements,fa):t instanceof Pc&&e instanceof Pc?fa(t.gt,e.gt):t instanceof Oc&&e instanceof Oc}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wc extends Kc{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xc extends Kc{constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Yc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Jc(t,e,n){const s=new Map;po(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,kc(o,a,n[r]))}return s}function Zc(t,e,n){const s=new Map;for(const r of t){const t=r.transform,i=n.data.field(r.field);s.set(r.field,Nc(t,i,e))}return s}class tu extends Kc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eu extends Kc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class nu{constructor(t){this.count=t}}
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
 */var su,ru;function iu(t){switch(t){default:return fo();case mo.CANCELLED:case mo.UNKNOWN:case mo.DEADLINE_EXCEEDED:case mo.RESOURCE_EXHAUSTED:case mo.INTERNAL:case mo.UNAVAILABLE:case mo.UNAUTHENTICATED:return!1;case mo.INVALID_ARGUMENT:case mo.NOT_FOUND:case mo.ALREADY_EXISTS:case mo.PERMISSION_DENIED:case mo.FAILED_PRECONDITION:case mo.ABORTED:case mo.OUT_OF_RANGE:case mo.UNIMPLEMENTED:case mo.DATA_LOSS:return!0}}function ou(t){if(void 0===t)return uo("GRPC error has no .code"),mo.UNKNOWN;switch(t){case su.OK:return mo.OK;case su.CANCELLED:return mo.CANCELLED;case su.UNKNOWN:return mo.UNKNOWN;case su.DEADLINE_EXCEEDED:return mo.DEADLINE_EXCEEDED;case su.RESOURCE_EXHAUSTED:return mo.RESOURCE_EXHAUSTED;case su.INTERNAL:return mo.INTERNAL;case su.UNAVAILABLE:return mo.UNAVAILABLE;case su.UNAUTHENTICATED:return mo.UNAUTHENTICATED;case su.INVALID_ARGUMENT:return mo.INVALID_ARGUMENT;case su.NOT_FOUND:return mo.NOT_FOUND;case su.ALREADY_EXISTS:return mo.ALREADY_EXISTS;case su.PERMISSION_DENIED:return mo.PERMISSION_DENIED;case su.FAILED_PRECONDITION:return mo.FAILED_PRECONDITION;case su.ABORTED:return mo.ABORTED;case su.OUT_OF_RANGE:return mo.OUT_OF_RANGE;case su.UNIMPLEMENTED:return mo.UNIMPLEMENTED;case su.DATA_LOSS:return mo.DATA_LOSS;default:return fo()}}(ru=su||(su={}))[ru.OK=0]="OK",ru[ru.CANCELLED=1]="CANCELLED",ru[ru.UNKNOWN=2]="UNKNOWN",ru[ru.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ru[ru.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ru[ru.NOT_FOUND=5]="NOT_FOUND",ru[ru.ALREADY_EXISTS=6]="ALREADY_EXISTS",ru[ru.PERMISSION_DENIED=7]="PERMISSION_DENIED",ru[ru.UNAUTHENTICATED=16]="UNAUTHENTICATED",ru[ru.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ru[ru.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ru[ru.ABORTED=10]="ABORTED",ru[ru.OUT_OF_RANGE=11]="OUT_OF_RANGE",ru[ru.UNIMPLEMENTED=12]="UNIMPLEMENTED",ru[ru.INTERNAL=13]="INTERNAL",ru[ru.UNAVAILABLE=14]="UNAVAILABLE",ru[ru.DATA_LOSS=15]="DATA_LOSS";
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
class au{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Jo(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Zo(this.inner)}size(){return this.innerSize}}
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
 */const cu=new Qa(Po.comparator);function uu(){return cu}const hu=new Qa(Po.comparator);function lu(...t){let e=hu;for(const n of t)e=e.insert(n.key,n);return e}function du(t){let e=hu;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function fu(){return gu()}function pu(){return gu()}function gu(){return new au((t=>t.toString()),((t,e)=>t.isEqual(e)))}const mu=new Qa(Po.comparator),yu=new Ya(Po.comparator);function vu(...t){let e=yu;for(const n of t)e=e.add(n);return e}const wu=new Ya(No);function Eu(){return wu}
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
 */class bu{constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Tu.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new bu(Oo.min(),s,Eu(),uu(),vu())}}class Tu{constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Tu(n,e,vu(),vu(),vu())}}
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
 */class Su{constructor(t,e,n,s){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=s}}class Cu{constructor(t,e){this.targetId=t,this.Et=e}}class Iu{constructor(t,e,n=sa.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Au{constructor(){this.At=0,this.Rt=Nu(),this.bt=sa.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=vu(),e=vu(),n=vu();return this.Rt.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:fo()}})),new Tu(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=Nu()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class _u{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=uu(),this.qt=Du(),this.Ut=new Ya(No)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:fo()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,s=this.Yt(e);if(s){const t=s.target;if(ac(t))if(0===n){const n=new Po(t.path);this.Qt(e,n,nc.newNoDocument(n,Oo.min()))}else po(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,s)=>{const r=this.Yt(s);if(r){if(n.current&&ac(r.target)){const e=new Po(r.target.path);null!==this.Lt.get(e)||this.te(s,e)||this.Qt(s,e,nc.newNoDocument(e,t))}n.St&&(e.set(s,n.Ct()),n.xt())}}));let n=vu();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const s=new bu(t,e,this.Ut,this.Lt,n);return this.Lt=uu(),this.qt=Du(),this.Ut=new Ya(No),s}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const s=this.Wt(t);this.te(t,e)?s.Nt(e,1):s.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new Au,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new Ya(No),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||co("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Au),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}}function Du(){return new Qa(Po.comparator)}function Nu(){return new Qa(Po.comparator)}
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
 */const ku={asc:"ASCENDING",desc:"DESCENDING"},Ru={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ou={and:"AND",or:"OR"};class Lu{constructor(t,e){this.databaseId=t,this.wt=e}}function xu(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mu(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Fu(t,e){return xu(t,e.toTimestamp())}function Pu(t){return po(!!t),Oo.fromTimestamp(function(t){const e=ia(t);return new Ro(e.seconds,e.nanos)}(t))}function Uu(t,e){return function(t){return new xo(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Vu(t){const e=xo.fromString(t);return po(ih(e)),e}function Bu(t,e){return Uu(t.databaseId,e.path)}function ju(t,e){const n=Vu(e);if(n.get(1)!==t.databaseId.projectId)throw new yo(mo.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new yo(mo.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Po(zu(n))}function qu(t,e){return Uu(t.databaseId,e)}function Ku(t){const e=Vu(t);return 4===e.length?xo.emptyPath():zu(e)}function Hu(t){return new xo(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zu(t){return po(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function $u(t,e,n){return{name:Bu(t,e),fields:n.value.mapValue.fields}}function Gu(t,e){let n;if(e instanceof Wc)n={update:$u(t,e.key,e.value)};else if(e instanceof tu)n={delete:Bu(t,e.key)};else if(e instanceof Xc)n={update:$u(t,e.key,e.data),updateMask:rh(e.fieldMask)};else{if(!(e instanceof eu))return fo();n={verify:Bu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Oc)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Lc)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Mc)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Pc)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw fo()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Fu(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:fo()}(t,e.precondition)),n}function Qu(t,e){return{documents:[qu(t,e.path)]}}function Wu(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=qu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0!==t.length)return sh(Ra.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:eh(t.field),direction:Ju(t.dir)}}(t)))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(t,e){return t.wt||ta(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Xu(t){let e=Ku(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){po(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Yu(t);return e instanceof Ra&&La(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new $a(nh(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ta(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Aa(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Aa(n,e)}(n.endAt)),uc(e,r,o,i,a,"F",c,u)}function Yu(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=nh(t.unaryFilter.field);return ka.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=nh(t.unaryFilter.field);return ka.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=nh(t.unaryFilter.field);return ka.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=nh(t.unaryFilter.field);return ka.create(r,"!=",{nullValue:"NULL_VALUE"});default:return fo()}}(t):void 0!==t.fieldFilter?function(t){return ka.create(nh(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fo()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Ra.create(t.compositeFilter.filters.map((t=>Yu(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return fo()}}(t.compositeFilter.op))}(t):fo()}function Ju(t){return ku[t]}function Zu(t){return Ru[t]}function th(t){return Ou[t]}function eh(t){return{fieldPath:t.canonicalString()}}function nh(t){return Fo.fromServerFormat(t.fieldPath)}function sh(t){return t instanceof ka?function(t){if("=="===t.op){if(Ta(t.value))return{unaryFilter:{field:eh(t.field),op:"IS_NAN"}};if(ba(t.value))return{unaryFilter:{field:eh(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Ta(t.value))return{unaryFilter:{field:eh(t.field),op:"IS_NOT_NAN"}};if(ba(t.value))return{unaryFilter:{field:eh(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eh(t.field),op:Zu(t.op),value:t.value}}}(t):t instanceof Ra?function(t){const e=t.getFilters().map((t=>sh(t)));return 1===e.length?e[0]:{compositeFilter:{op:th(t.op),filters:e}}}(t):fo()}function rh(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ih(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const oh=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ah=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ch=ah;
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
 */
class uh{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&zc(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=$c(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=$c(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=pu();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=Hc(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(Oo.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),vu())}isEqual(t){return this.batchId===t.batchId&&ko(this.mutations,t.mutations,((t,e)=>Qc(t,e)))&&ko(this.baseMutations,t.baseMutations,((t,e)=>Qc(t,e)))}}class hh{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){po(t.mutations.length===n.length);let s=mu;const r=t.mutations;for(let t=0;t<r.length;t++)s=s.insert(r[t].key,n[t].version);return new hh(t,e,n,s)}}
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
 */class lh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class dh{constructor(t,e,n,s,r=Oo.min(),i=Oo.min(),o=sa.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(t){return new dh(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new dh(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new dh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class fh{constructor(t){this.ie=t}}function ph(t){const e=Xu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?yc(e,e.limit,"L"):e}
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
class gh{constructor(){}ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(oa(t.integerValue));else if("doubleValue"in t){const n=oa(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),ea(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(aa(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Ia(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):fo()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),Po.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}}gh.Ie=new gh;
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
class mh{constructor(){this.Je=new yh}addToCollectionParentIndex(t,e){return this.Je.add(e),$o.resolve()}getCollectionParents(t,e){return $o.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return $o.resolve()}deleteFieldIndex(t,e){return $o.resolve()}getDocumentsMatchingTarget(t,e){return $o.resolve(null)}getIndexType(t,e){return $o.resolve(0)}getFieldIndexes(t,e){return $o.resolve([])}getNextCollectionGroupToUpdate(t){return $o.resolve(null)}getMinOffset(t,e){return $o.resolve(jo.min())}getMinOffsetFromCollectionGroup(t,e){return $o.resolve(jo.min())}updateCollectionGroup(t,e,n){return $o.resolve()}updateIndexEntries(t,e){return $o.resolve()}}class yh{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Ya(xo.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Ya(xo.comparator)).toArray()}}
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
 */new Uint8Array(0);class vh{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new vh(t,vh.DEFAULT_COLLECTION_PERCENTILE,vh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */vh.DEFAULT_COLLECTION_PERCENTILE=10,vh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vh.DEFAULT=new vh(41943040,vh.DEFAULT_COLLECTION_PERCENTILE,vh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vh.DISABLED=new vh(-1,0,0);
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
class wh{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new wh(0)}static vn(){return new wh(-1)}}
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
class Eh{constructor(){this.changes=new au((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,nc.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?$o.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class bh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Th{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&$c(n.mutation,t,Za.empty(),Ro.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,vu()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=vu()){const s=fu();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=lu();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=fu();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,vu())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=uu();const i=gu(),o=gu();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof Xc)?r=r.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),$c(o.mutation,e,o.mutation.getFieldMask(),Ro.now()))})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new bh(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=gu();let s=new Qa(((t,e)=>t-e)),r=vu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Za.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||vu()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=pu();c.forEach((t=>{if(!r.has(t)){const s=Hc(e.get(t),n.get(t));null!==s&&u.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return $o.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Po.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):pc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):$o.resolve(fu());let o=-1,a=r;return i.next((e=>$o.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?$o.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,vu()))).next((t=>({batchId:o,changes:du(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Po(e)).next((t=>{let e=lu();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let r=lu();return this.indexManager.getCollectionParents(t,s).next((i=>$o.forEach(i,(i=>{const o=function(t,e){return new cc(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((r=>(s=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,nc.newInvalidDocument(n)))}));let n=lu();return s.forEach(((s,r)=>{const i=t.get(s);void 0!==i&&$c(i.mutation,r,Za.empty(),Ro.now()),bc(e,r)&&(n=n.insert(s,r))})),n}))}}
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
 */class Sh{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return $o.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Pu(n.createTime)}),$o.resolve()}getNamedQuery(t,e){return $o.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:ph(t.bundledQuery),readTime:Pu(t.readTime)}}(e)),$o.resolve()}}
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
 */class Ch{constructor(){this.overlays=new Qa(Po.comparator),this.es=new Map}getOverlay(t,e){return $o.resolve(this.overlays.get(e))}getOverlays(t,e){const n=fu();return $o.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.oe(t,e,s)})),$o.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),$o.resolve()}getOverlaysForCollection(t,e,n){const s=fu(),r=e.length+1,i=new Po(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return $o.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new Qa(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=fu(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=fu(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return $o.resolve(o)}oe(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new lh(e,n));let r=this.es.get(e);void 0===r&&(r=vu(),this.es.set(e,r)),this.es.set(e,r.add(n.key))}}
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
 */class Ih{constructor(){this.ns=new Ya(Ah.ss),this.rs=new Ya(Ah.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ah(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Ah(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new Po(new xo([])),n=new Ah(e,t),s=new Ah(e,t+1),r=[];return this.rs.forEachInRange([n,s],(t=>{this.cs(t),r.push(t.key)})),r}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new Po(new xo([])),n=new Ah(e,t),s=new Ah(e,t+1);let r=vu();return this.rs.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new Ah(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ah{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return Po.comparator(t.key,e.key)||No(t._s,e._s)}static os(t,e){return No(t._s,e._s)||Po.comparator(t.key,e.key)}}
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
 */class _h{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Ya(Ah.ss)}checkEmpty(t){return $o.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new uh(r,e,n,s);this.mutationQueue.push(i);for(const e of s)this.gs=this.gs.add(new Ah(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return $o.resolve(i)}lookupMutationBatch(t,e){return $o.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),r=s<0?0:s;return $o.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return $o.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return $o.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ah(e,0),s=new Ah(e,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,s],(t=>{const e=this.ys(t._s);r.push(e)})),$o.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ya(No);return e.forEach((t=>{const e=new Ah(t,0),s=new Ah(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],(t=>{n=n.add(t._s)}))})),$o.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;Po.isDocumentKey(r)||(r=r.child(""));const i=new Ah(new Po(r),0);let o=new Ya(No);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)}),i),$o.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){po(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return $o.forEach(e.mutations,(s=>{const r=new Ah(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Ah(e,0),s=this.gs.firstAfterOrEqual(n);return $o.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,$o.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class Dh{constructor(t){this.Es=t,this.docs=new Qa(Po.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return $o.resolve(n?n.document.mutableCopy():nc.newInvalidDocument(e))}getEntries(t,e){let n=uu();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():nc.newInvalidDocument(t))})),$o.resolve(n)}getAllFromCollection(t,e,n){let s=uu();const r=new Po(e.child("")),i=this.docs.getIteratorFrom(r);for(;i.hasNext();){const{key:t,value:{document:r}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||qo(Bo(r),n)<=0||(s=s.insert(r.key,r.mutableCopy()))}return $o.resolve(s)}getAllFromCollectionGroup(t,e,n,s){fo()}As(t,e){return $o.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Nh(this)}getSize(t){return $o.resolve(this.size)}}class Nh extends Eh{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)})),$o.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
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
 */class kh{constructor(t){this.persistence=t,this.Rs=new au((t=>ic(t)),oc),this.lastRemoteSnapshotVersion=Oo.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ih,this.targetCount=0,this.vs=wh.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),$o.resolve()}getLastRemoteSnapshotVersion(t){return $o.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $o.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),$o.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),$o.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new wh(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,$o.resolve()}updateTargetData(t,e){return this.Dn(e),$o.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,$o.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.Rs.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),$o.waitFor(r).next((()=>s))}getTargetCount(t){return $o.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return $o.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),$o.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),$o.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),$o.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return $o.resolve(n)}containsKey(t,e){return $o.resolve(this.Ps.containsKey(e))}}
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
 */class Rh{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new Qo(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new kh(this),this.indexManager=new mh,this.remoteDocumentCache=function(t){return new Dh(t)}((t=>this.referenceDelegate.xs(t))),this.yt=new fh(e),this.Ns=new Sh(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ch,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new _h(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){co("MemoryPersistence","Starting transaction:",t);const s=new Oh(this.Ss.next());return this.referenceDelegate.ks(),n(s).next((t=>this.referenceDelegate.Os(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ms(t,e){return $o.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Oh extends Ho{constructor(t){super(),this.currentSequenceNumber=t}}class Lh{constructor(t){this.persistence=t,this.Fs=new Ih,this.$s=null}static Bs(t){return new Lh(t)}get Ls(){if(this.$s)return this.$s;throw fo()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),$o.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),$o.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),$o.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $o.forEach(this.Ls,(n=>{const s=Po.fromPath(n);return this.qs(t,s).next((t=>{t||e.removeEntry(s,Oo.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return $o.or([()=>$o.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
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
 */
class xh{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}static Ci(t,e){let n=vu(),s=vu();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new xh(t,e.fromCache,n,s)}}
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
 */class Mh{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next((r=>r||this.Oi(t,e,s,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(lc(e))return $o.resolve(null);let n=mc(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=yc(e,null,"F"),n=mc(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const r=vu(...s);return this.Ni.getDocuments(t,r).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Fi(e,s);return this.$i(e,i,r,n.readTime)?this.ki(t,yc(e,null,"F")):this.Bi(t,i,e,n)}))))})))))}Oi(t,e,n,s){return lc(e)||s.isEqual(Oo.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((r=>{const i=this.Fi(e,r);return this.$i(e,i,n,s)?this.Mi(t,e):(ao()<=ae.DEBUG&&co("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ec(e)),this.Bi(t,i,e,Vo(s,-1)))}))}Fi(t,e){let n=new Ya(Sc(t));return e.forEach(((e,s)=>{bc(t,s)&&(n=n.add(s))})),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mi(t,e){return ao()<=ae.DEBUG&&co("QueryEngine","Using full collection scan to execute query:",Ec(e)),this.Ni.getDocumentsMatchingQuery(t,e,jo.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class Fh{constructor(t,e,n,s){this.persistence=t,this.Li=e,this.yt=s,this.qi=new Qa(No),this.Ui=new au((t=>ic(t)),oc),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Th(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}}function Ph(t,e,n,s){return new Fh(t,e,n,s)}async function Uh(t,e){const n=go(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=vu();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function Vh(t){const e=go(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Bh(t,e,n){let s=vu(),r=vu();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=uu();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(Oo.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):co("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Wi:s,zi:r}}))}function jh(t,e){const n=go(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function qh(t,e){const n=go(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Cs.getTargetData(t,e).next((r=>r?(s=r,$o.resolve(s)):n.Cs.allocateTargetId(t).next((r=>(s=new dh(e,r,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.qi.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function Kh(t,e,n){const s=go(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Go(t))throw t;co("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function Hh(t,e,n){const s=go(t);let r=Oo.min(),i=vu();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=go(t),r=s.Ui.get(n);return void 0!==r?$o.resolve(s.qi.get(r)):s.Cs.getTargetData(e,n)}(s,t,mc(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.Li.getDocumentsMatchingQuery(t,e,n?r:Oo.min(),n?i:vu()))).next((t=>(zh(s,Tc(e),t),{documents:t,Hi:i})))))}function zh(t,e,n){let s=t.Ki.get(e)||Oo.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ki.set(e,s)}class $h{constructor(){this.activeTargetIds=Eu()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Gh{constructor(){this.Lr=new $h,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new $h,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Qh{Ur(t){}shutdown(){}}
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
 */class Wh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){co("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){co("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Xh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class Yh{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
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
 */class Jh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,s,r){const i=this.ho(t,e);co("RestConnection","Sending: ",i,n);const o={};return this.lo(o,s,r),this.fo(t,i,o,n).then((t=>(co("RestConnection","Received: ",t),t)),(e=>{throw ho("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}_o(t,e,n,s,r,i){return this.ao(t,e,n,s,r)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+io,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=Xh[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,s){return new Promise(((r,i)=>{const o=new no;o.setWithCredentials(!0),o.listenOnce(Yi.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Xi.NO_ERROR:const e=o.getResponseJson();co("Connection","XHR received:",JSON.stringify(e)),r(e);break;case Xi.TIMEOUT:co("Connection",'RPC "'+t+'" timed out'),i(new yo(mo.DEADLINE_EXCEEDED,"Request time out"));break;case Xi.HTTP_ERROR:const n=o.getStatus();if(co("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(mo).indexOf(e)>=0?e:mo.UNKNOWN}(e.status);i(new yo(t,e.message))}else i(new yo(mo.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new yo(mo.UNAVAILABLE,"Connection failed."));break;default:fo()}}finally{co("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Qi(),i=Wi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new to({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");co("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let u=!1,h=!1;const l=new Yh({Hr:t=>{h?co("Connection","Not sending because WebChannel is closed:",t):(u||(co("Connection","Opening WebChannel transport."),c.open(),u=!0),co("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,eo.EventType.OPEN,(()=>{h||co("Connection","WebChannel transport opened.")})),d(c,eo.EventType.CLOSE,(()=>{h||(h=!0,co("Connection","WebChannel transport closed"),l.io())})),d(c,eo.EventType.ERROR,(t=>{h||(h=!0,ho("Connection","WebChannel transport errored:",t),l.io(new yo(mo.UNAVAILABLE,"The operation could not be completed")))})),d(c,eo.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];po(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){co("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=su[t];if(void 0!==e)return ou(e)}(t),n=r.message;void 0===e&&(e=mo.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,l.io(new yo(e,n)),c.close()}else co("Connection","WebChannel received:",n),l.ro(n)}})),d(i,Ji.STAT_EVENT,(t=>{t.stat===Zi.PROXY?co("Connection","Detected buffering proxy"):t.stat===Zi.NOPROXY&&co("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.so()}),0),l}}
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
 */function Zh(){return"undefined"!=typeof document?document:null}
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
 */function tl(t){return new Lu(t,!0)}class el{constructor(t,e,n=1e3,s=1.5,r=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=s,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),s=Math.max(0,e-n);s>0&&co("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
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
 */class nl{constructor(t,e,n,s,r,i,o,a){this.Hs=t,this.vo=n,this.Vo=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new el(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===mo.RESOURCE_EXHAUSTED?(uo(e.toString()),uo("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===mo.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new yo(mo.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return co("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(co("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class sl extends nl{constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.yt=r}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:fo()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(t,e){return t.wt?(po(void 0===e||"string"==typeof e),sa.fromBase64String(e||"")):(po(void 0===e||e instanceof Uint8Array),sa.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?mo.UNKNOWN:ou(t.code);return new yo(e,t.message||"")}(o);n=new Iu(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ju(t,s.document.name),i=Pu(s.document.updateTime),o=s.document.createTime?Pu(s.document.createTime):Oo.min(),a=new tc({mapValue:{fields:s.document.fields}}),c=nc.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Su(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ju(t,s.document),i=s.readTime?Pu(s.readTime):Oo.min(),o=nc.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Su([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ju(t,s.document),i=s.removedTargetIds||[];n=new Su([],i,r,null)}else{if(!("filter"in e))return fo();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new nu(s),i=t.targetId;n=new Cu(i,r)}}return n}(this.yt,t),n=function(t){if(!("targetChange"in t))return Oo.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Oo.min():e.readTime?Pu(e.readTime):Oo.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=Hu(this.yt),e.addTarget=function(t,e){let n;const s=e.target;return n=ac(s)?{documents:Qu(t,s)}:{query:Wu(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Mu(t,e.resumeToken):e.snapshotVersion.compareTo(Oo.min())>0&&(n.readTime=xu(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return fo()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=Hu(this.yt),e.removeTarget=t,this.Bo(e)}}class rl extends nl{constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(po(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=function(t,e){return t&&t.length>0?(po(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Pu(t.updateTime):Pu(e);return n.isEqual(Oo.min())&&(n=Pu(e)),new Bc(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Pu(t.commitTime);return this.listener.Zo(n,e)}return po(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=Hu(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Gu(this.yt,t)))};this.Bo(e)}}
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
 */class il extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=s,this.nu=!1}su(){if(this.nu)throw new yo(mo.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.ao(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===mo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new yo(mo.UNKNOWN,t.toString())}))}_o(t,e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection._o(t,e,n,r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===mo.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new yo(mo.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class ol{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(uo(e),this.ou=!1):co("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
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
 */class al{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{ml(this)&&(co("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=go(t);e._u.add(4),await ul(e),e.gu.set("Unknown"),e._u.delete(4),await cl(e)}(this))}))})),this.gu=new ol(n,s)}}async function cl(t){if(ml(t))for(const e of t.wu)await e(!0)}async function ul(t){for(const e of t.wu)await e(!1)}function hl(t,e){const n=go(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),gl(n)?pl(n):xl(n).ko()&&dl(n,e))}function ll(t,e){const n=go(t),s=xl(n);n.du.delete(e),s.ko()&&fl(n,e),0===n.du.size&&(s.ko()?s.Fo():ml(n)&&n.gu.set("Unknown"))}function dl(t,e){t.yu.Ot(e.targetId),xl(t).zo(e)}function fl(t,e){t.yu.Ot(e),xl(t).Ho(e)}function pl(t){t.yu=new _u({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),xl(t).start(),t.gu.uu()}function gl(t){return ml(t)&&!xl(t).No()&&t.du.size>0}function ml(t){return 0===go(t)._u.size}function yl(t){t.yu=void 0}async function vl(t){t.du.forEach(((e,n)=>{dl(t,e)}))}async function wl(t,e){yl(t),gl(t)?(t.gu.hu(e),pl(t)):t.gu.set("Unknown")}async function El(t,e,n){if(t.gu.set("Online"),e instanceof Iu&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.du.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.du.delete(s),t.yu.removeTarget(s))}(t,e)}catch(n){co("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await bl(t,n)}else if(e instanceof Su?t.yu.Kt(e):e instanceof Cu?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Oo.min()))try{const e=await Vh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.du.get(s);r&&t.du.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(sa.EMPTY_BYTE_STRING,n.snapshotVersion)),fl(t,e);const s=new dh(n.target,e,1,n.sequenceNumber);dl(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){co("RemoteStore","Failed to raise snapshot:",e),await bl(t,e)}}async function bl(t,e,n){if(!Go(e))throw e;t._u.add(1),await ul(t),t.gu.set("Offline"),n||(n=()=>Vh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{co("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await cl(t)}))}function Tl(t,e){return e().catch((n=>bl(t,n,e)))}async function Sl(t){const e=go(t),n=Ml(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Cl(e);)try{const t=await jh(e.localStore,s);if(null===t){0===e.fu.length&&n.Fo();break}s=t.batchId,Il(e,t)}catch(t){await bl(e,t)}Al(e)&&_l(e)}function Cl(t){return ml(t)&&t.fu.length<10}function Il(t,e){t.fu.push(e);const n=Ml(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Al(t){return ml(t)&&!Ml(t).No()&&t.fu.length>0}function _l(t){Ml(t).start()}async function Dl(t){Ml(t).eu()}async function Nl(t){const e=Ml(t);for(const n of t.fu)e.Xo(n.mutations)}async function kl(t,e,n){const s=t.fu.shift(),r=hh.from(s,e,n);await Tl(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Sl(t)}async function Rl(t,e){e&&Ml(t).Yo&&await async function(t,e){if(iu(n=e.code)&&n!==mo.ABORTED){const n=t.fu.shift();Ml(t).Mo(),await Tl(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Sl(t)}var n}(t,e),Al(t)&&_l(t)}async function Ol(t,e){const n=go(t);n.asyncQueue.verifyOperationInProgress(),co("RemoteStore","RemoteStore received new credentials");const s=ml(n);n._u.add(3),await ul(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await cl(n)}async function Ll(t,e){const n=go(t);e?(n._u.delete(2),await cl(n)):e||(n._u.add(2),await ul(n),n.gu.set("Unknown"))}function xl(t){return t.pu||(t.pu=function(t,e,n){const s=go(t);return s.su(),new sl(e,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,n)
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
 */}(t.datastore,t.asyncQueue,{Yr:vl.bind(null,t),Zr:wl.bind(null,t),Wo:El.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),gl(t)?pl(t):t.gu.set("Unknown")):(await t.pu.stop(),yl(t))}))),t.pu}function Ml(t){return t.Iu||(t.Iu=function(t,e,n){const s=go(t);return s.su(),new rl(e,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,n)}(t.datastore,t.asyncQueue,{Yr:Dl.bind(null,t),Zr:Rl.bind(null,t),tu:Nl.bind(null,t),Zo:kl.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await Sl(t)):(await t.Iu.stop(),t.fu.length>0&&(co("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
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
 */}class Fl{constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new vo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new Fl(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new yo(mo.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pl(t,e){if(uo("AsyncQueue",`${e}: ${t}`),Go(t))return new yo(mo.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Ul{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Po.comparator(e.key,n.key):(t,e)=>Po.comparator(t.key,e.key),this.keyedMap=lu(),this.sortedSet=new Qa(this.comparator)}static emptySet(t){return new Ul(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ul))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Ul;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Vl{constructor(){this.Tu=new Qa(Po.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):fo():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Bl{constructor(t,e,n,s,r,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Bl(t,e,Ul.emptySet(e),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&vc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
 */class jl{constructor(){this.Au=void 0,this.listeners=[]}}class ql{constructor(){this.queries=new au((t=>wc(t)),vc),this.onlineState="Unknown",this.Ru=new Set}}async function Kl(t,e){const n=go(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new jl),r)try{i.Au=await n.onListen(s)}catch(t){const n=Pl(t,`Initialization of query '${Ec(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Gl(n)}async function Hl(t,e){const n=go(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function zl(t,e){const n=go(t);let s=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.Pu(t)&&(s=!0);r.Au=t}}s&&Gl(n)}function $l(t,e,n){const s=go(t),r=s.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);s.queries.delete(e)}function Gl(t){t.Ru.forEach((t=>{t.next()}))}class Ql{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Bl(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Bl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
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
 */
class Wl{constructor(t){this.key=t}}class Xl{constructor(t){this.key=t}}class Yl{constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=vu(),this.mutatedKeys=vu(),this.Gu=Sc(t),this.Qu=new Ul(this.Gu)}get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new Vl,s=e?e.Qu:this.Qu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=bc(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Hu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Gu(h,a)>0||c&&this.Gu(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Qu:i,zu:n,$i:o,mutatedKeys:r}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const r=t.zu.Eu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fo()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const i=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==r.length||a?{snapshot:new Bl(this.query,t.Qu,s,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:i}:{Xu:i}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Vl,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=vu(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new Xl(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Wl(n))})),e}tc(t){this.qu=t.Hi,this.Ku=vu();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Bl.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class Jl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Zl{constructor(t){this.key=t,this.nc=!1}}class td{constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.sc={},this.ic=new au((t=>wc(t)),vc),this.rc=new Map,this.oc=new Set,this.uc=new Qa(Po.comparator),this.cc=new Map,this.ac=new Ih,this.hc={},this.lc=new Map,this.fc=wh.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function ed(t,e){const n=wd(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const t=await qh(n.localStore,mc(e));n.isPrimaryClient&&hl(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await nd(n,e,s,"current"===i,t.resumeToken)}return r}async function nd(t,e,n,s,r){t._c=(e,n,s)=>async function(t,e,n,s){let r=e.view.Wu(n);r.$i&&(r=await Hh(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return fd(t,e.targetId,o.Xu),o.snapshot}(t,e,n,s);const i=await Hh(t.localStore,e,!0),o=new Yl(e,i.Hi),a=o.Wu(i.documents),c=Tu.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,r),u=o.applyChanges(a,t.isPrimaryClient,c);fd(t,n,u.Xu);const h=new Jl(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function sd(t,e){const n=go(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter((t=>!vc(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Kh(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),ll(n.remoteStore,s.targetId),ld(n,s.targetId)})).catch(zo)):(ld(n,s.targetId),await Kh(n.localStore,s.targetId,!0))}async function rd(t,e){const n=go(t);try{const t=await function(t,e){const n=go(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const o=[];e.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(sa.EMPTY_BYTE_STRING,Oo.min()).withLastLimboFreeSnapshotVersion(Oo.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,i)&&o.push(n.Cs.updateTargetData(t,u))}));let a=uu(),c=vu();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Bh(t,i,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!s.isEqual(Oo.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return $o.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.qi=r,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.cc.get(e);s&&(po(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.nc=!0:t.modifiedDocuments.size>0?po(s.nc):t.removedDocuments.size>0&&(po(s.nc),s.nc=!1))})),await md(n,t,e)}catch(t){await zo(t)}}function id(t,e,n){const s=go(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ic.forEach(((n,s)=>{const r=s.view.bu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=go(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(s=!0)})),s&&Gl(n)}(s.eventManager,e),t.length&&s.sc.Wo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function od(t,e,n){const s=go(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let t=new Qa(Po.comparator);t=t.insert(i,nc.newNoDocument(i,Oo.min()));const n=vu().add(i),r=new bu(Oo.min(),new Map,new Ya(No),t,n);await rd(s,r),s.uc=s.uc.remove(i),s.cc.delete(e),gd(s)}else await Kh(s.localStore,e,!1).then((()=>ld(s,e,n))).catch(zo)}async function ad(t,e){const n=go(t),s=e.batch.batchId;try{const t=await function(t,e){const n=go(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=$o.resolve();return i.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);po(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=vu();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);hd(n,s,null),ud(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await md(n,t)}catch(t){await zo(t)}}async function cd(t,e,n){const s=go(t);try{const t=await function(t,e){const n=go(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(po(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);hd(s,e,n),ud(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await md(s,t)}catch(n){await zo(n)}}function ud(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function hd(t,e,n){const s=go(t);let r=s.hc[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||dd(t,e)}))}function dd(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(ll(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),gd(t))}function fd(t,e,n){for(const s of n)s instanceof Wl?(t.ac.addReference(s.key,e),pd(t,s)):s instanceof Xl?(co("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||dd(t,s.key)):fo()}function pd(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(co("SyncEngine","New document in limbo: "+n),t.oc.add(s),gd(t))}function gd(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Po(xo.fromString(e)),s=t.fc.next();t.cc.set(s,new Zl(n)),t.uc=t.uc.insert(n,s),hl(t.remoteStore,new dh(mc(hc(n.path)),s,2,Qo.at))}}async function md(t,e,n){const s=go(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach(((t,a)=>{o.push(s._c(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=xh.Ci(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.sc.Wo(r),await async function(t,e){const n=go(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>$o.forEach(e,(e=>$o.forEach(e.Si,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>$o.forEach(e.Di,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Go(t))throw t;co("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qi.get(e),s=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(s);n.qi=n.qi.insert(e,r)}}}(s.localStore,i))}async function yd(t,e){const n=go(t);if(!n.currentUser.isEqual(e)){co("SyncEngine","User change. New user:",e.toKey());const t=await Uh(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new yo(mo.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.lc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await md(n,t.ji)}}function vd(t,e){const n=go(t),s=n.cc.get(e);if(s&&s.nc)return vu().add(s.key);{let t=vu();const s=n.rc.get(e);if(!s)return t;for(const e of s){const s=n.ic.get(e);t=t.unionWith(s.view.ju)}return t}}function wd(t){const e=go(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=rd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vd.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=od.bind(null,e),e.sc.Wo=zl.bind(null,e.eventManager),e.sc.wc=$l.bind(null,e.eventManager),e}function Ed(t){const e=go(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ad.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=cd.bind(null,e),e}class bd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=tl(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Ph(this.persistence,new Mh,t.initialUser,this.yt)}yc(t){return new Rh(Lh.Bs,this.yt)}gc(t){return new Gh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Td{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>id(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=yd.bind(null,this.syncEngine),await Ll(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ql}createDatastore(t){const e=tl(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Jh(s));var s;return function(t,e,n,s){return new il(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>id(this.syncEngine,t,0),i=Wh.C()?new Wh:new Qh,new al(e,n,s,r,i);var e,n,s,r,i}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new td(t,e,n,s,r,i);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=go(t);co("RemoteStore","RemoteStore shutting down."),e._u.add(5),await ul(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
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
 */function Sd(t,e,n){if(!n)throw new yo(mo.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Cd(t){if(!Po.isDocumentKey(t))throw new yo(mo.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Id(t){if(Po.isDocumentKey(t))throw new yo(mo.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ad(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":fo()}function _d(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new yo(mo.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ad(t);throw new yo(mo.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
const Dd=new Map;class Nd{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new yo(mo.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new yo(mo.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new yo(mo.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class kd{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new yo(mo.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new yo(mo.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nd(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Eo;switch(t.type){case"gapi":const e=t.client;return new Co(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new yo(mo.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Dd.get(t);e&&(co("ComponentProvider","Removing Datastore"),Dd.delete(t),e.terminate())}(this),Promise.resolve()}}function Rd(t,e,n,s={}){var r;const i=(t=_d(t,kd))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&ho("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=ro.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ht(JSON.stringify({alg:"none",type:"JWT"})),Ht(JSON.stringify(i)),""].join(".")}
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
 */(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new yo(mo.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ro(i)}t._authCredentials=new bo(new wo(e,n))}}
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
 */class Od{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xd(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Od(this.firestore,t,this._key)}}class Ld{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ld(this.firestore,t,this._query)}}class xd extends Ld{constructor(t,e,n){super(t,e,hc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Od(this.firestore,null,new Po(t))}withConverter(t){return new xd(this.firestore,t,this._path)}}function Md(t,e,...n){if(t=ee(t),1===arguments.length&&(e=Do.R()),Sd("doc","path",e),t instanceof kd){const s=xo.fromString(e,...n);return Cd(s),new Od(t,null,new Po(s))}{if(!(t instanceof Od||t instanceof xd))throw new yo(mo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xo.fromString(e,...n));return Cd(s),new Od(t.firestore,t instanceof xd?t.converter:null,new Po(s))}}
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
 */
class Fd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):uo("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
 */
class Pd{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=ro.UNAUTHENTICATED,this.clientId=Do.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{co("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(co("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new yo(mo.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new vo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Pl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Ud(t,e){t.asyncQueue.verifyOperationInProgress(),co("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Uh(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Vd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bd(t);co("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Ol(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ol(e.remoteStore,n))),t.onlineComponents=e}async function Bd(t){return t.offlineComponents||(co("FirestoreClient","Using default OfflineComponentProvider"),await Ud(t,new bd)),t.offlineComponents}async function jd(t){return t.onlineComponents||(co("FirestoreClient","Using default OnlineComponentProvider"),await Vd(t,new Td)),t.onlineComponents}function qd(t){return jd(t).then((t=>t.syncEngine))}async function Kd(t){const e=await jd(t),n=e.eventManager;return n.onListen=ed.bind(null,e.syncEngine),n.onUnlisten=sd.bind(null,e.syncEngine),n}function Hd(t,e,n={}){const s=new vo;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new Fd({next:i=>{e.enqueueAndForget((()=>Hl(t,o)));const a=i.docs.has(n);!a&&i.fromCache?r.reject(new yo(mo.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&s&&"server"===s.source?r.reject(new yo(mo.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(i)},error:t=>r.reject(t)}),o=new Ql(hc(n.path),i,{includeMetadataChanges:!0,Nu:!0});return Kl(t,o)}(await Kd(t),t.asyncQueue,e,n,s))),s.promise}class zd{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new el(this,"async_queue_retry"),this.Wc=()=>{const t=Zh();t&&co("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=Zh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=Zh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new vo;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!Go(t))throw t;co("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw uo("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const s=Fl.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(s),s}zc(){this.Kc&&fo()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}function $d(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
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
 */(t)}class Gd extends kd{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new zd,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wd(this),this._firestoreClient.terminate()}}function Qd(t){return t._firestoreClient||Wd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wd(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Wo(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}
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
 */(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Pd(t._authCredentials,t._appCheckCredentials,t._queue,s)}
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
class Xd{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xd(sa.fromBase64String(t))}catch(t){throw new yo(mo.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Xd(sa.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class Yd{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new yo(mo.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fo(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Jd{constructor(t){this._methodName=t}}
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
 */class Zd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new yo(mo.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new yo(mo.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return No(this._lat,t._lat)||No(this._long,t._long)}}
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
 */const tf=/^__.*__$/;class ef{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Xc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Wc(t,this.data,e,this.fieldTransforms)}}function nf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fo()}}class sf{constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=s,void 0===r&&this.na(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new sf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ia({path:n,oa:!1});return s.ua(t),s}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.ia({path:n,oa:!1});return s.na(),s}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return gf(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(nf(this.sa)&&tf.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class rf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||tl(t)}da(t,e,n,s=!1){return new sf({sa:t,methodName:e,fa:n,path:Fo.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function of(t){const e=t._freezeSettings(),n=tl(t._databaseId);return new rf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function af(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);lf("Data must be an object, but it was:",o,s);const a=uf(s,o);let c,u;if(i.merge)c=new Za(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=df(e,s,n);if(!o.contains(r))throw new yo(mo.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);mf(t,r)||t.push(r)}c=new Za(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new ef(new tc(a),c,u)}function cf(t,e){if(hf(t=ee(t)))return lf("Unsupported field value:",e,t),uf(t,e);if(t instanceof Jd)return function(t,e){if(!nf(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=cf(r,e.aa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=ee(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return _c(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ro.fromDate(t);return{timestampValue:xu(e.yt,n)}}if(t instanceof Ro){const n=new Ro(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:xu(e.yt,n)}}if(t instanceof Zd)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Xd)return{bytesValue:Mu(e.yt,t._byteString)};if(t instanceof Od){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Uu(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Ad(t)}`)}(t,e)}function uf(t,e){const n={};return Zo(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jo(t,((t,s)=>{const r=cf(s,e.ra(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function hf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ro||t instanceof Zd||t instanceof Xd||t instanceof Od||t instanceof Jd)}function lf(t,e,n){if(!hf(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=Ad(n);throw"an object"===s?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function df(t,e,n){if((e=ee(e))instanceof Yd)return e._internalPath;if("string"==typeof e)return pf(t,e);throw gf("Field path arguments must be of type string or ",t,!1,void 0,n)}const ff=new RegExp("[~\\*/\\[\\]]");function pf(t,e,n){if(e.search(ff)>=0)throw gf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yd(...e.split("."))._internalPath}catch(s){throw gf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gf(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new yo(mo.INVALID_ARGUMENT,a+t+c)}function mf(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class yf{constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Od(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new vf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(wf("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class vf extends yf{data(){return super.data()}}function wf(t,e){return"string"==typeof e?pf(t,e):e instanceof Yd?e._internalPath:e._delegate._internalPath}
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
 */function Ef(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new yo(mo.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bf{convertValue(t,e="none"){switch(da(t)){case 0:return null;case 1:return t.booleanValue;case 2:return oa(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(aa(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw fo()}}convertObject(t,e){const n={};return Jo(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Zd(oa(t.latitude),oa(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ua(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ha(t));default:return null}}convertTimestamp(t){const e=ia(t);return new Ro(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=xo.fromString(t);po(ih(n));const s=new Xo(n.get(1),n.get(3)),r=new Po(n.popFirst(5));return s.isEqual(e)||uo(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
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
 */function Tf(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
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
class Sf{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Cf extends yf{constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new If(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(wf("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class If extends Cf{data(t={}){return super.data(t)}}class Af{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Sf(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new If(this._firestore,this._userDataWriter,n.key,n,new Sf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new yo(mo.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new If(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Sf(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new If(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Sf(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:_f(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function _f(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fo()}}class Df extends bf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xd(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Od(this.firestore,null,e)}}function Nf(t,e){return function(t,e){const n=new vo;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const s=Ed(t);try{const t=await function(t,e){const n=go(t),s=Ro.now(),r=e.reduce(((t,e)=>t.add(e.key)),vu());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=uu(),c=vu();return n.Gi.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{i=r;const o=[];for(const t of e){const e=Gc(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new Xc(t.key,e,ec(e.value.mapValue),jc.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:du(i)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.hc[t.currentUser.toKey()];s||(s=new Qa(No)),s=s.insert(e,n),t.hc[t.currentUser.toKey()]=s}(s,t.batchId,n),await md(s,t.changes),await Sl(s.remoteStore)}catch(t){const e=Pl(t,"Failed to persist write");n.reject(e)}}(await qd(t),e,n))),n.promise}(Qd(t),e)}function kf(t,e,n){const s=n.docs.get(e._key),r=new Df(t);return new Cf(t,r,e._key,s,new Sf(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */!function(t,e=!0){io="9.15.0",Ue(new ne("firestore",((t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),i=new Gd(new To(t.getProvider("auth-internal")),new Ao(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new yo(mo.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(t.options.projectId,e)}(r,n),r);return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i}),"PUBLIC").setMultipleInstances(!0)),Ke(so,"3.8.0",t),Ke(so,"3.8.0","esm2017")}();let Rf;
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
Ke("firebase","9.15.0","app");console.log("objmsg in backend",t.objmsg);const Of=function(t,e){const n="object"==typeof t?t:function(t="[DEFAULT]"){const e=Me.get(t);if(!e&&t===Le)return qe();if(!e)throw Be.create("no-app",{appName:t});return e}(),s="string"==typeof t?t:e||"(default)",r=Ve(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const t=Qt("firestore");t&&Rd(r,...t)}return r}(qe({apiKey:"AIzaSyB2tzYmUwiAU0L6c2q2EYf0Gi94qpXo5NE",authDomain:"offline-chat-3120f.firebaseapp.com",projectId:"offline-chat-3120f",storageBucket:"offline-chat-3120f.appspot.com",messagingSenderId:"678853584763",appId:"1:678853584763:web:c166f2bebd78d5fceb3fde"}));let Lf,xf;async function Mf(){const t=Md(Of,"cities","user3"),e=await
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
function(t){t=_d(t,Od);const e=_d(t.firestore,Gd);return Hd(Qd(e),t._key).then((n=>kf(e,t,n)))}(t);!function(t,...e){var n,s,r;t=ee(t);let i={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||$d(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if($d(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(s=t.error)||void 0===s?void 0:s.bind(t),e[o+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let c,u,h;if(t instanceof Od)u=_d(t.firestore,Gd),h=hc(t._key.path),c={next:n=>{e[o]&&e[o](kf(u,t,n))},error:e[o+1],complete:e[o+2]};else{const n=_d(t,Ld);u=_d(n.firestore,Gd),h=n._query;const s=new Df(u);c={next:t=>{e[o]&&e[o](new Af(u,s,n,t))},error:e[o+1],complete:e[o+2]},Ef(t._query)}(function(t,e,n,s){const r=new Fd(s),i=new Ql(e,r,n);t.asyncQueue.enqueueAndForget((async()=>Kl(await Kd(t),i)))})(Qd(u),h,a,c)}(t,{includeMetadataChanges:!0},(t=>{xf=t.data(),console.log("sureit works",xf)}));return e.exists()?(console.log("Document data:",e.data()),Lf=e.data(),Rf=e.data()):console.log("No such document!"),xf}let Ff=document.createElement("button"),Pf=document.createElement("div"),Uf=document.createElement("p"),Vf=document.createElement("INPUT");Vf.setAttribute("type","text"),Vf.classList.add("msgplace");let Bf={messages:[]};Vf.addEventListener("keypress",(function(t){"Enter"===t.key&&(Bf.messages.push(Vf.value),t.preventDefault(),Vf.value="",console.log("messages here",Bf))})),Pf.classList.add("offliechat"),Pf.append(Ff),Pf.append(Uf),Pf.append(Vf),Ff.textContent="offline chat",Ff.classList.add("offlino");document.body;chrome.runtime.onMessage.addListener((function(t,e,n){console.log(t.txt)})),async function(){const t=await new Promise((t=>{setTimeout((()=>{let e=document.getElementsByClassName("banner-visible-area style-scope ytd-c4-tabbed-header-renderer");t(e)}),2e3)}));console.log("result should be here",t),await Pf.append(Uf),await t[1].append(Pf);let e=await Mf();console.log("result of firebase",e)}();((t,e)=>{const n=function(t,e,...n){if(t=ee(t),Sd("collection","path",e),t instanceof kd){const s=xo.fromString(e,...n);return Id(s),new xd(t,null,s)}{if(!(t instanceof Od||t instanceof xd))throw new yo(mo.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(xo.fromString(e,...n));return Id(s),new xd(t.firestore,null,s)}}(Of,"cities");!async function(){let t=await jf();console.log("how does this testing fun work",t),await function(t,e,n){t=_d(t,Od);const s=_d(t.firestore,Gd),r=Tf(t.converter,e,n);return Nf(s,[af(of(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,jc.none())])}(Md(n,"user3"),{whatever:"just work blabla"})}();console.log("first one",Rf)})();function jf(){console.log("this is from index.js of content extension");let t=new Proxy(Bf,{get:(t,e,n)=>console.log("property should be here ig",e)});return console.log("this is after let proxy",t.messages),t}console.log("do i need to update this for it to work ? "),console.log("Content script works!"),console.log("Must reload extension for modifications to take effect."),(t=>{let e;e={text:"message here ig "},console.log("can i make this to show ? ",e);let n;n=3,jt.get("https://ddragon.leagueoflegends.com/cdn/languages.json").then((function(t){console.log(t)})).catch((function(t){console.log(t)})),console.log("===> FROM THE PRINT MODULE:",t)})("wait this is not console.log wtf")})()})();