var Re=Object.defineProperty;var Be=(t,e,n)=>e in t?Re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ie=(t,e,n)=>(Be(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function b(){}function K(t,e){for(const n in e)t[n]=e[n];return t}function xe(t){return t()}function he(){return Object.create(null)}function N(t){t.forEach(xe)}function re(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function He(t){return Object.keys(t).length===0}function je(t,...e){if(t==null){for(const r of e)r(void 0);return b}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pe(t){return t&&re(t.destroy)?t.destroy:b}function T(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode&&t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function ke(t){return document.createTextNode(t)}function q(){return ke(" ")}function ae(){return ke("")}function A(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Te(t){return Array.from(t.childNodes)}function Z(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function We(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function ee(t,e){return new t(e)}let J;function X(t){J=t}function ce(){if(!J)throw new Error("Function called outside component initialization");return J}function Se(t){ce().$$.after_update.push(t)}function ze(t){ce().$$.on_destroy.push(t)}function Ie(){const t=ce();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const a=We(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,a)}),!a.defaultPrevented}return!0}}function me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const Y=[],ge=[];let V=[];const be=[],Ae=Promise.resolve();let oe=!1;function Ce(){oe||(oe=!0,Ae.then(Ee))}function Oe(){return Ce(),Ae}function le(t){V.push(t)}const se=new Set;let O=0;function Ee(){if(O!==0)return;const t=J;do{try{for(;O<Y.length;){const e=Y[O];O++,X(e),Ue(e.$$)}}catch(e){throw Y.length=0,O=0,e}for(X(null),Y.length=0,O=0;ge.length;)ge.pop()();for(let e=0;e<V.length;e+=1){const n=V[e];se.has(n)||(se.add(n),n())}V.length=0}while(Y.length);for(;be.length;)be.pop()();oe=!1,se.clear(),X(t)}function Ue(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(le)}}function Ye(t){const e=[],n=[];V.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),V=e}const G=new Set;let W;function fe(){W={r:0,c:[],p:W}}function ue(){W.r||N(W.c),W=W.p}function R(t,e){t&&t.i&&(G.delete(t),t.i(e))}function B(t,e,n,r){if(t&&t.o){if(G.has(t))return;G.add(t),W.c.push(()=>{G.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function te(t,e){const n={},r={},i={$$scope:1};let a=t.length;for(;a--;){const c=t[a],o=e[a];if(o){for(const s in c)s in o||(r[s]=1);for(const s in o)i[s]||(n[s]=o[s],i[s]=1);t[a]=o}else for(const s in c)i[s]=1}for(const c in r)c in n||(n[c]=void 0);return n}function ne(t){return typeof t=="object"&&t!==null?t:{}}function S(t){t&&t.c()}function j(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),le(()=>{const a=t.$$.on_mount.map(xe).filter(re);t.$$.on_destroy?t.$$.on_destroy.push(...a):N(a),t.$$.on_mount=[]}),i.forEach(le)}function P(t,e){const n=t.$$;n.fragment!==null&&(Ye(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ve(t,e){t.$$.dirty[0]===-1&&(Y.push(t),Ce(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,r,i,a,c=null,o=[-1]){const s=J;X(t);const l=t.$$={fragment:null,ctx:[],props:a,update:b,not_equal:i,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:he(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let h=!1;if(l.ctx=n?n(t,e.props||{},(y,C,...E)=>{const _=E.length?E[0]:C;return l.ctx&&i(l.ctx[y],l.ctx[y]=_)&&(!l.skip_bound&&l.bound[y]&&l.bound[y](_),h&&Ve(t,y)),C}):[],l.update(),h=!0,N(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const y=Te(e.target);l.fragment&&l.fragment.l(y),y.forEach(p)}else l.fragment&&l.fragment.c();e.intro&&R(t.$$.fragment),j(t,e.target,e.anchor),Ee()}X(s)}class D{constructor(){ie(this,"$$");ie(this,"$$set")}$destroy(){P(this,1),this.$destroy=b}$on(e,n){if(!re(n))return b;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!He(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ne);const U=[];function Me(t,e){return{subscribe:Le(t,e).subscribe}}function Le(t,e=b){let n;const r=new Set;function i(o){if(z(t,o)&&(t=o,n)){const s=!U.length;for(const l of r)l[1](),U.push(l,t);if(s){for(let l=0;l<U.length;l+=2)U[l][0](U[l+1]);U.length=0}}}function a(o){i(o(t))}function c(o,s=b){const l=[o,s];return r.add(l),r.size===1&&(n=e(i,a)||b),o(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:c}}function $e(t,e,n){const r=!Array.isArray(t),i=r?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const a=e.length<2;return Me(n,(c,o)=>{let s=!1;const l=[];let h=0,y=b;const C=()=>{if(h)return;y();const _=e(r?l[0]:l,c,o);a?c(_):y=re(_)?_:b},E=i.map((_,M)=>je(_,L=>{l[M]=L,h&=~(1<<M),s&&C()},()=>{h|=1<<M}));return s=!0,C(),function(){N(E),y(),s=!1}})}function Fe(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,i,a,c=[],o="",s=t.split("/");for(s[0]||s.shift();i=s.shift();)n=i[0],n==="*"?(c.push("wild"),o+="/(.*)"):n===":"?(r=i.indexOf("?",1),a=i.indexOf(".",1),c.push(i.substring(1,~r?r:~a?a:i.length)),o+=~r&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(o+=(~r?"?":"")+"\\"+i.substring(a))):o+="/"+i;return{keys:c,pattern:new RegExp("^"+o+"/?$","i")}}function De(t){let e,n,r;const i=[t[2]];var a=t[0];function c(o,s){let l={};for(let h=0;h<i.length;h+=1)l=K(l,i[h]);return s!==void 0&&s&4&&(l=K(l,te(i,[ne(o[2])]))),{props:l}}return a&&(e=ee(a,c(t)),e.$on("routeEvent",t[7])),{c(){e&&S(e.$$.fragment),n=ae()},m(o,s){e&&j(e,o,s),m(o,n,s),r=!0},p(o,s){if(s&1&&a!==(a=o[0])){if(e){fe();const l=e;B(l.$$.fragment,1,0,()=>{P(l,1)}),ue()}a?(e=ee(a,c(o,s)),e.$on("routeEvent",o[7]),S(e.$$.fragment),R(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}else if(a){const l=s&4?te(i,[ne(o[2])]):{};e.$set(l)}},i(o){r||(e&&R(e.$$.fragment,o),r=!0)},o(o){e&&B(e.$$.fragment,o),r=!1},d(o){o&&p(n),e&&P(e,o)}}}function Qe(t){let e,n,r;const i=[{params:t[1]},t[2]];var a=t[0];function c(o,s){let l={};for(let h=0;h<i.length;h+=1)l=K(l,i[h]);return s!==void 0&&s&6&&(l=K(l,te(i,[s&2&&{params:o[1]},s&4&&ne(o[2])]))),{props:l}}return a&&(e=ee(a,c(t)),e.$on("routeEvent",t[6])),{c(){e&&S(e.$$.fragment),n=ae()},m(o,s){e&&j(e,o,s),m(o,n,s),r=!0},p(o,s){if(s&1&&a!==(a=o[0])){if(e){fe();const l=e;B(l.$$.fragment,1,0,()=>{P(l,1)}),ue()}a?(e=ee(a,c(o,s)),e.$on("routeEvent",o[6]),S(e.$$.fragment),R(e.$$.fragment,1),j(e,n.parentNode,n)):e=null}else if(a){const l=s&6?te(i,[s&2&&{params:o[1]},s&4&&ne(o[2])]):{};e.$set(l)}},i(o){r||(e&&R(e.$$.fragment,o),r=!0)},o(o){e&&B(e.$$.fragment,o),r=!1},d(o){o&&p(n),e&&P(e,o)}}}function Xe(t){let e,n,r,i;const a=[Qe,De],c=[];function o(s,l){return s[1]?0:1}return e=o(t),n=c[e]=a[e](t),{c(){n.c(),r=ae()},m(s,l){c[e].m(s,l),m(s,r,l),i=!0},p(s,[l]){let h=e;e=o(s),e===h?c[e].p(s,l):(fe(),B(c[h],1,1,()=>{c[h]=null}),ue(),n=c[e],n?n.p(s,l):(n=c[e]=a[e](s),n.c()),R(n,1),n.m(r.parentNode,r))},i(s){i||(R(n),i=!0)},o(s){B(n),i=!1},d(s){s&&p(r),c[e].d(s)}}}function ve(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const de=Me(null,function(e){e(ve());const n=()=>{e(ve())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});$e(de,t=>t.location);$e(de,t=>t.querystring);const ye=Le(void 0);function Je(t,e){if(e=_e(e),!t||!t.tagName||t.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return we(t,e),{update(n){n=_e(n),we(t,n)}}}function Ze(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function we(t,e){let n=e.href||t.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",r=>{r.preventDefault(),e.disabled||Ge(r.currentTarget.getAttribute("href"))})}function _e(t){return t&&typeof t=="string"?{href:t}:t||{}}function Ge(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}function Ke(t,e,n){let{routes:r={}}=e,{prefix:i=""}=e,{restoreScrollState:a=!1}=e;class c{constructor(f,d){if(!d||typeof d!="function"&&(typeof d!="object"||d._sveltesparouter!==!0))throw Error("Invalid component object");if(!f||typeof f=="string"&&(f.length<1||f.charAt(0)!="/"&&f.charAt(0)!="*")||typeof f=="object"&&!(f instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:x,keys:v}=Fe(f);this.path=f,typeof d=="object"&&d._sveltesparouter===!0?(this.component=d.component,this.conditions=d.conditions||[],this.userData=d.userData,this.props=d.props||{}):(this.component=()=>Promise.resolve(d),this.conditions=[],this.props={}),this._pattern=x,this._keys=v}match(f){if(i){if(typeof i=="string")if(f.startsWith(i))f=f.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const $=f.match(i);if($&&$[0])f=f.substr($[0].length)||"/";else return null}}const d=this._pattern.exec(f);if(d===null)return null;if(this._keys===!1)return d;const x={};let v=0;for(;v<this._keys.length;){try{x[this._keys[v]]=decodeURIComponent(d[v+1]||"")||null}catch{x[this._keys[v]]=null}v++}return x}async checkConditions(f){for(let d=0;d<this.conditions.length;d++)if(!await this.conditions[d](f))return!1;return!0}}const o=[];r instanceof Map?r.forEach((u,f)=>{o.push(new c(f,u))}):Object.keys(r).forEach(u=>{o.push(new c(u,r[u]))});let s=null,l=null,h={};const y=Ie();async function C(u,f){await Oe(),y(u,f)}let E=null,_=null;a&&(_=u=>{u.state&&(u.state.__svelte_spa_router_scrollY||u.state.__svelte_spa_router_scrollX)?E=u.state:E=null},window.addEventListener("popstate",_),Se(()=>{Ze(E)}));let M=null,L=null;const I=de.subscribe(async u=>{M=u;let f=0;for(;f<o.length;){const d=o[f].match(u.location);if(!d){f++;continue}const x={route:o[f].path,location:u.location,querystring:u.querystring,userData:o[f].userData,params:d&&typeof d=="object"&&Object.keys(d).length?d:null};if(!await o[f].checkConditions(x)){n(0,s=null),L=null,C("conditionsFailed",x);return}C("routeLoading",Object.assign({},x));const v=o[f].component;if(L!=v){v.loading?(n(0,s=v.loading),L=v,n(1,l=v.loadingParams),n(2,h={}),C("routeLoaded",Object.assign({},x,{component:s,name:s.name,params:l}))):(n(0,s=null),L=null);const $=await v();if(u!=M)return;n(0,s=$&&$.default||$),L=v}d&&typeof d=="object"&&Object.keys(d).length?n(1,l=d):n(1,l=null),n(2,h=o[f].props),C("routeLoaded",Object.assign({},x,{component:s,name:s.name,params:l})).then(()=>{ye.set(l)});return}n(0,s=null),L=null,ye.set(void 0)});ze(()=>{I(),_&&window.removeEventListener("popstate",_)});function H(u){me.call(this,t,u)}function Q(u){me.call(this,t,u)}return t.$$set=u=>{"routes"in u&&n(3,r=u.routes),"prefix"in u&&n(4,i=u.prefix),"restoreScrollState"in u&&n(5,a=u.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=a?"manual":"auto")},[s,l,h,r,i,a,H,Q]}class et extends D{constructor(e){super(),F(this,e,Ke,Xe,z,{routes:3,prefix:4,restoreScrollState:5})}}const qe="/website/assets/hv_logo-CQ_8QKHT.webp";function tt(t){let e;return{c(){e=w("div"),e.innerHTML='<a href="mailto:halovair@gmail.com" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:56px;height:56px;padding:0;margin:3px;color:#ffffff;" class="svelte-r3rqep"><svg class="niftybutton-email" style="display:block;fill:currentColor" data-donate="true" data-tag="ema" data-name="Email" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><title>Email icon</title><path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path></svg></a> <a href="https://www.facebook.com/halovair" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:56px;height:56px;padding:0;margin:3px;color:#ffffff;" class="svelte-r3rqep"><svg class="niftybutton-facebook" style="display:block;fill:currentColor" data-donate="true" data-tag="fac" data-name="Facebook" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><title>Facebook social icon</title><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"></path></svg></a><a href="https://www.tiktok.com/@halovair" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:56px;height:56px;padding:0;margin:3px;color:#ffffff;" class="svelte-r3rqep"><svg class="niftybutton-tiktok" style="display:block;fill:currentColor" data-donate="true" data-tag="tic" data-name="TikTok" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><title>TikTok social icon</title><path d="M 386.160156 141.550781 C 383.457031 140.15625 380.832031 138.625 378.285156 136.964844 C 370.878906 132.070312 364.085938 126.300781 358.058594 119.785156 C 342.976562 102.523438 337.339844 85.015625 335.265625 72.757812 L 335.351562 72.757812 C 333.617188 62.582031 334.332031 56 334.441406 56 L 265.742188 56 L 265.742188 321.648438 C 265.742188 325.214844 265.742188 328.742188 265.589844 332.226562 C 265.589844 332.660156 265.550781 333.058594 265.523438 333.523438 C 265.523438 333.714844 265.523438 333.917969 265.484375 334.117188 C 265.484375 334.167969 265.484375 334.214844 265.484375 334.265625 C 264.011719 353.621094 253.011719 370.976562 236.132812 380.566406 C 227.472656 385.496094 217.675781 388.078125 207.707031 388.066406 C 175.699219 388.066406 149.757812 361.964844 149.757812 329.734375 C 149.757812 297.5 175.699219 271.398438 207.707031 271.398438 C 213.765625 271.394531 219.789062 272.347656 225.550781 274.226562 L 225.632812 204.273438 C 190.277344 199.707031 154.621094 210.136719 127.300781 233.042969 C 115.457031 243.328125 105.503906 255.605469 97.882812 269.316406 C 94.984375 274.316406 84.042969 294.410156 82.714844 327.015625 C 81.882812 345.523438 87.441406 364.699219 90.089844 372.625 L 90.089844 372.792969 C 91.757812 377.457031 98.214844 393.382812 108.742188 406.808594 C 117.230469 417.578125 127.253906 427.035156 138.5 434.882812 L 138.5 434.714844 L 138.667969 434.882812 C 171.925781 457.484375 208.800781 456 208.800781 456 C 215.183594 455.742188 236.566406 456 260.851562 444.492188 C 287.785156 431.734375 303.117188 412.726562 303.117188 412.726562 C 312.914062 401.367188 320.703125 388.425781 326.148438 374.449219 C 332.367188 358.109375 334.441406 338.507812 334.441406 330.675781 L 334.441406 189.742188 C 335.273438 190.242188 346.375 197.582031 346.375 197.582031 C 346.375 197.582031 362.367188 207.832031 387.316406 214.507812 C 405.214844 219.257812 429.332031 220.257812 429.332031 220.257812 L 429.332031 152.058594 C 420.882812 152.976562 403.726562 150.308594 386.160156 141.550781 Z M 386.160156 141.550781"></path></svg></a><a href="https://www.instagram.com/halovair/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:56px;height:56px;padding:0;margin:3px;color:#ffffff;" class="svelte-r3rqep"><svg class="niftybutton-instagram" style="display:block;fill:currentColor" data-donate="true" data-tag="ins" data-name="Instagram" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><title>Instagram social icon</title><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path><circle cx="351.5" cy="160.5" r="21.5"></circle></svg></a><a href="https://www.youtube.com/channel/UCCz07gPaFYIYyRNJMfLUyTw" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:56px;height:56px;padding:0;margin:3px;color:#ffffff;" class="svelte-r3rqep"><svg class="niftybutton-youtube" style="display:block;fill:currentColor" data-donate="true" data-tag="you" data-name="YouTube" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><title>YouTube social icon</title><path d="M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z"></path></svg></a><a href="https://open.spotify.com/artist/4qjr6ECyk3yhokw8onrIAu" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:56px;height:56px;padding:0;margin:3px;color:#ffffff;" class="svelte-r3rqep"><svg class="niftybutton-spotify" style="display:block;fill:currentColor" data-donate="true" data-tag="spo" data-name="Spotify" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet"><title>Spotify social icon</title><path d="M256 78c-98.3 0-178 79.7-178 178 0 98.31 79.7 178 178 178 98.31 0 178-79.69 178-178 0-98.3-79.69-178-178-178zm81.63 256.73a11.09 11.09 0 0 1-15.26 3.68c-41.8-25.53-94.4-31.31-156.37-17.16a11.1 11.1 0 0 1-4.93-21.64c67.8-15.49 125.96-8.82 172.88 19.86a11.1 11.1 0 0 1 3.68 15.26zm21.79-48.47a13.88 13.88 0 0 1-19.1 4.57c-47.84-29.4-120.77-37.92-177.36-20.74a13.9 13.9 0 0 1-17.32-9.25 13.9 13.9 0 0 1 9.25-17.3c64.65-19.62 145.01-10.12 199.96 23.64a13.87 13.87 0 0 1 4.56 19.08zm1.87-50.47c-57.37-34.07-152.02-37.2-206.8-20.58a16.65 16.65 0 1 1-9.66-31.87c62.88-19.08 167.4-15.4 233.45 23.81a16.63 16.63 0 0 1 5.82 22.82 16.63 16.63 0 0 1-22.8 5.82h-.01z"></path></svg></a> <a href="https://halovair.bandcamp.com/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;border:0;width:56px;height:56px;padding:0;margin:3px;color:#ffffff;" class="svelte-r3rqep"><svg width="45" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="64" height="64" fill="url(#pattern0_60_3)"></rect><defs><pattern id="pattern0_60_3" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_60_3" transform="scale(0.015625)"></use></pattern><image id="image0_60_3" width="64" height="64" xlink:href="data:image/png;base64,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"></image></defs></svg></a>',Z(e,"display","flex"),Z(e,"flex-wrap","wrap"),Z(e,"align-items","center"),Z(e,"justify-content","center")},m(n,r){m(n,e,r)},p:b,i:b,o:b,d(n){n&&p(e)}}}class nt extends D{constructor(e){super(),F(this,e,null,tt,z,{})}}function rt(t){let e;return{c(){e=w("div"),e.innerHTML='<div class="ml-form-align-center"><div class="ml-form-embedWrapper embedForm"><div class="ml-form-embedBody ml-form-embedBodyDefault row-form"><div class="ml-form-embedContent" style=""><h4>HALO VAIR NEWSLETTER</h4> <p>Signup for news, upcoming gigs, media and more!</p></div> <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/105774/forms/61188382265443689/subscribe" data-code="" method="post" target="_blank"><div class="ml-form-formContent"><div class="ml-form-fieldRow ml-last-item"><div class="ml-field-group ml-field-email ml-validate-email ml-validate-required"><input aria-label="email" aria-required="true" type="email" class="form-control svelte-n6b2ph" data-inputmask="" name="fields[email]" placeholder="Email" autocomplete="email" aria-invalid="false"/> <div data-lastpass-icon-root="" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div></div></div> <input type="hidden" name="ml-submit" value="1" aria-invalid="false" class="svelte-n6b2ph"/> <div class="ml-form-embedSubmit"><button type="submit" class="primary svelte-n6b2ph">Subscribe</button> <button disabled="disabled" style="display: none;" type="button" class="loading svelte-n6b2ph"><div class="ml-form-embedSubmitLoad"></div> <span class="sr-only">Loading...</span></button></div> <input type="hidden" name="anticsrf" value="true" aria-invalid="false" class="svelte-n6b2ph"/></form></div> <div class="ml-form-successBody row-success" style="display: none"><div class="ml-form-successContent"><h4>Thank you!</h4> <p>You have successfully joined our subscriber list.</p></div></div></div></div>',A(e,"id","mlb2-937635"),A(e,"class","form-container svelte-n6b2ph")},m(n,r){m(n,e,r)},p:b,i:b,o:b,d(n){n&&p(e)}}}class it extends D{constructor(e){super(),F(this,e,null,rt,z,{})}}function st(t){let e,n,r,i,a,c,o,s,l,h,y,C,E,_,M,L,I,H,Q,u,f,d,x,v,$,pe;return i=new nt({}),H=new it({}),{c(){e=w("a"),e.innerHTML=`<img src="${qe}" class="logo svelte-1cf7tvq" alt="Vite Logo"/>`,n=q(),r=w("div"),S(i.$$.fragment),a=q(),c=w("div"),o=q(),s=w("div"),l=w("a"),l.textContent="Bio & Press",h=q(),y=w("p"),y.textContent="Quality, spaced out, wall-of-sound Rock from GTA/Toronto, Canada",C=q(),E=w("div"),E.innerHTML='<iframe width="5120" height="315" src="https://www.youtube.com/embed/MZRogU-LTgk?si=WnCKT6ms8aR9tMlH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" class="svelte-1cf7tvq"></iframe>',_=q(),M=w("div"),M.innerHTML='<iframe title="Spotify" style="border-radius:12px" src="https://open.spotify.com/embed/artist/4qjr6ECyk3yhokw8onrIAu?utm_source=generator" width="100%" height="500" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',L=q(),I=w("div"),S(H.$$.fragment),Q=q(),u=w("div"),f=w("span"),f.textContent=`Halo Vair ${new Date().getFullYear()} © - All Rights Reserved`,d=q(),x=w("div"),A(e,"href","/"),A(c,"class","vertical-line svelte-1cf7tvq"),A(l,"class","link-wrapper-text svelte-1cf7tvq"),A(l,"href","/bio"),A(s,"class","link-wrapper svelte-1cf7tvq"),A(r,"class","nav-wrapper svelte-1cf7tvq"),A(E,"class","video-container svelte-1cf7tvq"),A(M,"class","spotify-container svelte-1cf7tvq"),A(u,"class","footer svelte-1cf7tvq"),A(x,"class","background svelte-1cf7tvq")},m(g,k){m(g,e,k),m(g,n,k),m(g,r,k),j(i,r,null),T(r,a),T(r,c),T(r,o),T(r,s),T(s,l),m(g,h,k),m(g,y,k),m(g,C,k),m(g,E,k),m(g,_,k),m(g,M,k),m(g,L,k),m(g,I,k),j(H,I,null),m(g,Q,k),m(g,u,k),T(u,f),m(g,d,k),m(g,x,k),v=!0,$||(pe=Pe(Je.call(null,l)),$=!0)},p:b,i(g){v||(R(i.$$.fragment,g),R(H.$$.fragment,g),v=!0)},o(g){B(i.$$.fragment,g),B(H.$$.fragment,g),v=!1},d(g){g&&(p(e),p(n),p(r),p(h),p(y),p(C),p(E),p(_),p(M),p(L),p(I),p(Q),p(u),p(d),p(x)),P(i),P(H),$=!1,pe()}}}class ot extends D{constructor(e){super(),F(this,e,null,st,z,{})}}function lt(t){let e,n,r,i,a,c;return{c(){e=w("a"),e.innerHTML=`<img src="${qe}" class="logo svelte-1prwrod" alt="Vite Logo"/>`,n=q(),r=w("div"),i=w("span"),i.textContent=`Halo Vair ${new Date().getFullYear()} © - All Rights Reserved`,a=q(),c=w("div"),A(e,"href","/"),A(r,"class","footer svelte-1prwrod"),A(c,"class","background svelte-1prwrod")},m(o,s){m(o,e,s),m(o,n,s),m(o,r,s),T(r,i),m(o,a,s),m(o,c,s)},p:b,i:b,o:b,d(o){o&&(p(e),p(n),p(r),p(a),p(c))}}}class at extends D{constructor(e){super(),F(this,e,null,lt,z,{})}}function ct(t){let e,n,r;return n=new et({props:{routes:t[0]}}),{c(){e=w("main"),S(n.$$.fragment)},m(i,a){m(i,e,a),j(n,e,null),r=!0},p:b,i(i){r||(R(n.$$.fragment,i),r=!0)},o(i){B(n.$$.fragment,i),r=!1},d(i){i&&p(e),P(n)}}}function ft(t){return[{"/website/":ot,"/website/bio":at}]}class ut extends D{constructor(e){super(),F(this,e,ft,ct,z,{})}}new ut({target:document.getElementById("app")});
