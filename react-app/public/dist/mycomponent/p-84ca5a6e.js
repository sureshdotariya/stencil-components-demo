let t,e,n,o=0,l=!1,s=!1,r=!1,c=!1;const i="undefined"!=typeof window?window:{},a=i.document||{head:{}},u={t:0,o:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,o)=>t.addEventListener(e,n,o),rel:(t,e,n,o)=>t.removeEventListener(e,n,o)},f=(()=>(a.head.attachShadow+"").indexOf("[native")>-1)(),m=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),p=new WeakMap,$=t=>p.get(t),d=(t,e)=>p.set(e.l=t,e),y=(t,e)=>e in t,w=t=>console.error(t),h=new Map,b=new Map,_=[],v=[],j=[],g=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&u.t?R(M):u.raf(M))},S=(t,e)=>{let n=0,o=0;for(;n<t.length&&(o=performance.now())<e;)try{t[n++](o)}catch(l){w(l)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},M=()=>{o++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){w(e)}t.length=0})(_);const t=2==(6&u.t)?performance.now()+10*Math.ceil(o*(1/22)):1/0;S(v,t),S(j,t),v.length>0&&(j.push(...v),v.length=0),(l=_.length+v.length+j.length>0)?u.raf(M):o=0},R=t=>Promise.resolve().then(t),k=g(v,!0),P={},O=t=>"object"==(t=typeof t)||"function"===t,U=()=>i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_mycomponent("./p-73bc5e11.js").then(()=>{u.s=i.__stencil_cssshim}),L=()=>{u.s=i.__stencil_cssshim;const t=Array.from(a.querySelectorAll("script")).find(t=>new RegExp("/mycomponent(\\.esm)?\\.js($|\\?|#)").test(t.src)||"mycomponent"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,i.location.href)).href,C(e.resourcesUrl,t),window.customElements?Promise.resolve(e):__sc_import_mycomponent("./p-3b66a627.js").then(()=>e))},C=(t,e)=>{const n=`__sc_import_${"mycomponent".replace(/\s|-/g,"_")}`;try{i[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(o){const l=new Map;i[n]=o=>{const s=new URL(o,t).href;let r=l.get(s);if(!r){const t=a.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),r=new Promise(e=>{t.onload=()=>{e(i[n].m),t.remove()}}),l.set(s,r),a.head.appendChild(t)}return r}}},x=new WeakMap,E=t=>"sc-"+t,T=(t,e,...n)=>{let o=null,l=null,s=!1,r=!1,c=[];const i=e=>{for(let n=0;n<e.length;n++)o=e[n],Array.isArray(o)?i(o):null!=o&&"boolean"!=typeof o&&((s="function"!=typeof t&&!O(o))&&(o=String(o)),s&&r?c[c.length-1].i+=o:c.push(s?A(null,o):o),r=s)};if(i(n),e){e.name&&(l=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=A(t,null);return a.u=e,c.length>0&&(a.p=c),a.$=l,a},A=(t,e)=>({t:0,h:t,i:e,_:null,p:null,u:null,$:null}),F={},H=(t,e,n,o,l,s)=>{if(n===o)return;let r=y(t,e),c=e.toLowerCase();if("class"===e){const e=t.classList,l=W(n),s=W(o);e.remove(...l.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!l.includes(t)))}else if(r||"o"!==e[0]||"n"!==e[1]){const c=O(o);if((r||c&&null!==o)&&!l)try{if(t.tagName.includes("-"))t[e]=o;else{let l=null==o?"":o;"list"===e?r=!1:null!=n&&t[e]==l||(t[e]=l)}}catch(a){}null==o||!1===o?t.removeAttribute(e):(!r||4&s||l)&&!c&&t.setAttribute(e,o=!0===o?"":o)}else e="-"===e[2]?e.slice(3):y(i,c)?c.slice(2):c[2]+e.slice(3),n&&u.rel(t,e,n,!1),o&&u.ael(t,e,o,!1)},N=/\s/,W=t=>t?t.split(N):[],q=(t,e,n,o)=>{const l=11===e._.nodeType&&e._.host?e._.host:e._,s=t&&t.u||P,r=e.u||P;for(o in s)o in r||H(l,o,s[o],void 0,n,e.t);for(o in r)H(l,o,s[o],r[o],n,e.t)},B=(o,l,r,i)=>{let u,f,m,p=l.p[r],$=0;if(s||(c=!0,"slot"===p.h&&(t&&i.classList.add(t+"-s"),p.t|=p.p?2:1)),null!==p.i)u=p._=a.createTextNode(p.i);else if(1&p.t)u=p._=a.createTextNode("");else if(u=p._=a.createElement(2&p.t?"slot-fb":p.h),q(null,p,!1),null!=t&&u["s-si"]!==t&&u.classList.add(u["s-si"]=t),p.p)for($=0;$<p.p.length;++$)f=B(o,p,$,u),f&&u.appendChild(f);return u["s-hn"]=n,3&p.t&&(u["s-sr"]=!0,u["s-cr"]=e,u["s-sn"]=p.$||"",m=o&&o.p&&o.p[r],m&&m.h===p.h&&o._&&V(o._,!1)),u},V=(t,e)=>{u.t|=1;const o=t.childNodes;for(let l=o.length-1;l>=0;l--){const t=o[l];t["s-hn"]!==n&&t["s-ol"]&&(J(t).insertBefore(t,I(t)),t["s-ol"].remove(),t["s-ol"]=void 0,c=!0),e&&V(t,e)}u.t&=-2},z=(t,e,o,l,s,r)=>{let c,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(i.shadowRoot&&i.tagName===n&&(i=i.shadowRoot);s<=r;++s)l[s]&&(c=B(null,o,s,t),c&&(l[s]._=c,i.insertBefore(c,I(e))))},D=(t,e,n,o,l)=>{for(;e<=n;++e)(o=t[e])&&(r=!0,(l=o._)["s-ol"]?l["s-ol"].remove():V(l,!0),l.remove())},G=(t,e)=>t.h===e.h&&("slot"!==t.h||t.$===e.$),I=t=>t&&t["s-ol"]||t,J=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,K=(t,e)=>{const n=e._=t._,o=t.p,l=e.p;let s;null===e.i?("slot"===e.h||q(t,e,!1),null!==o&&null!==l?((t,e,n,o)=>{let l,s=0,r=0,c=e.length-1,i=e[0],a=e[c],u=o.length-1,f=o[0],m=o[u];for(;s<=c&&r<=u;)null==i?i=e[++s]:null==a?a=e[--c]:null==f?f=o[++r]:null==m?m=o[--u]:G(i,f)?(K(i,f),i=e[++s],f=o[++r]):G(a,m)?(K(a,m),a=e[--c],m=o[--u]):G(i,m)?("slot"!==i.h&&"slot"!==m.h||V(i._.parentNode,!1),K(i,m),t.insertBefore(i._,a._.nextSibling),i=e[++s],m=o[--u]):G(a,f)?("slot"!==i.h&&"slot"!==m.h||V(a._.parentNode,!1),K(a,f),t.insertBefore(a._,i._),a=e[--c],f=o[++r]):(l=B(e&&e[r],n,r,t),f=o[++r],l&&J(i._).insertBefore(l,I(i._)));s>c?z(t,null==o[u+1]?null:o[u+1]._,n,o,r,u):r>u&&D(e,s,c)})(n,o,e,l):null!==l?(null!==t.i&&(n.textContent=""),z(n,null,e,l,0,l.length-1)):null!==o&&D(o,0,o.length-1)):(s=n["s-cr"])?s.parentNode.textContent=e.i:t.i!==e.i&&(n.data=e.i)},Q=t=>{let e,n,o,l,s,r,c=t.childNodes;for(n=0,o=c.length;n<o;n++)if(e=c[n],1===e.nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,l=0;l<o;l++)if(c[l]["s-hn"]!==e["s-hn"])if(r=c[l].nodeType,""!==s){if(1===r&&s===c[l].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==c[l].textContent.trim()){e.hidden=!0;break}Q(e)}},X=[],Y=t=>{let e,n,o,l,s=t.childNodes,c=s.length,i=0,a=0,u=0;for(c=s.length;i<c;i++){if(e=s[i],e["s-sr"]&&(n=e["s-cr"]))for(o=n.parentNode.childNodes,l=e["s-sn"],a=o.length-1;a>=0;a--)n=o[a],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(u=n.nodeType,((3===u||8===u)&&""===l||1===u&&null===n.getAttribute("slot")&&""===l||1===u&&n.getAttribute("slot")===l)&&(X.some(t=>t.v===n)||(r=!0,n["s-sn"]=l,X.push({j:e,v:n}))));1===e.nodeType&&Y(e)}},Z=(t,e)=>{e&&!t.g&&e["s-p"].push(new Promise(e=>t.g=e))},tt=(t,e,n,o)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const l=e.l,s=()=>et(t,e,n,l,o);return Z(e,e.S),st(void 0,()=>k(s))},et=(o,l,i,m,p)=>{const $=o["s-rc"];p&&((t,e)=>{const n=((t,e)=>{let n=E(e.M),o=b.get(n);if(t=11===t.nodeType?t:a,o)if("string"==typeof o){let e,l=x.get(t=t.head||t);l||x.set(t,l=new Set),l.has(n)||(e=a.createElement("style"),e.innerHTML=o,t.insertBefore(e,t.querySelector("link")),l&&l.add(n))}else t.adoptedStyleSheets.includes(o)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,o]);return n})(f&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(o,i),((o,l,i,m)=>{n=o.tagName;const p=l.R||A(null,null),$=(d=m)&&d.h===F?m:T(null,null,m);var d;if(i.k&&($.u=$.u||{},i.k.forEach(([t,e])=>$.u[e]=o[t])),$.h=null,$.t|=4,l.R=$,$._=p._=o.shadowRoot||o,t=o["s-sc"],e=o["s-cr"],s=f&&0!=(1&i.t),r=!1,K(p,$),c){Y($._);for(let t=0;t<X.length;t++){const e=X[t];if(!e.v["s-ol"]){const t=a.createTextNode("");t["s-nr"]=e.v,e.v.parentNode.insertBefore(e.v["s-ol"]=t,e.v)}}u.t|=1;for(let t=0;t<X.length;t++){const e=X[t],n=e.j.parentNode;let o=e.j.nextSibling,l=e.v["s-ol"];for(;l=l.previousSibling;){let t=l["s-nr"];if(t&&t["s-sn"]===e.v["s-sn"]&&n===t.parentNode&&(t=t.nextSibling,!t||!t["s-nr"])){o=t;break}}(!o&&n!==e.v.parentNode||e.v.nextSibling!==o)&&e.v!==o&&n.insertBefore(e.v,o)}u.t&=-2}r&&Q($._),X.length=0})(o,l,i,nt(m)),l.t&=-17,l.t|=2,$&&($.forEach(t=>t()),o["s-rc"]=void 0);{const t=o["s-p"],e=()=>ot(o,l,i);0===t.length?e():(Promise.all(t).then(e),l.t|=4,t.length=0)}},nt=t=>{try{t=t.render()}catch(e){w(e)}return t},ot=(t,e,n)=>{const o=e.S;64&e.t||(e.t|=64,t.classList.add("hydrated"),e.P(t),o||lt()),e.O(t),e.g&&(e.g(),e.g=void 0),512&e.t&&R(()=>tt(t,e,n,!1)),e.t&=-517},lt=()=>{a.documentElement.classList.add("hydrated"),u.t|=2},st=(t,e)=>t&&t.then?t.then(e):e(),rt=(t,e,n)=>{if(e.U){const o=Object.entries(e.U),l=t.prototype;if(o.forEach(([t,[o]])=>{31&o||2&n&&32&o?Object.defineProperty(l,t,{get(){return e=t,$(this).L.get(e);var e},set(n){((t,e,n,o)=>{const l=$(this),s=l.C,r=l.L.get(e),c=l.t,i=l.l;var a,u;u=o.U[e][0],(n=null==(a=n)||O(a)?a:4&u?"false"!==a&&(""===a||!!a):1&u?String(a):a)===r||8&c&&void 0!==r||(l.L.set(e,n),i&&2==(18&c)&&tt(s,l,o,!1))})(0,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(l,t,{value(...e){const n=$(this);return n.T.then(()=>n.l[t](...e))}})}),1&n){const n=new Map;l.attributeChangedCallback=function(t,e,o){u.jmp(()=>{const e=n.get(t);this[e]=(null!==o||"boolean"!=typeof this[e])&&o})},t.observedAttributes=o.filter(([t,e])=>15&e[0]).map(([t,o])=>{const l=o[1]||t;return n.set(l,t),512&o[0]&&e.k.push([t,l]),l})}}return t},ct=(t,e={})=>{const n=[],o=e.exclude||[],l=a.head,s=i.customElements,r=l.querySelector("meta[charset]"),c=a.createElement("style"),d=[];let y,_=!0;Object.assign(u,e),u.o=new URL(e.resourcesUrl||"./",a.baseURI).href,e.syncQueue&&(u.t|=4),t.forEach(t=>t[1].forEach(e=>{const l={t:e[0],M:e[1],U:e[2],A:e[3]};l.U=e[2],l.k=[],!f&&1&l.t&&(l.t|=8);const r=l.M,c=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,C:t,L:new Map};e.T=new Promise(t=>e.O=t),e.F=new Promise(t=>e.P=t),t["s-p"]=[],t["s-rc"]=[],p.set(t,e)})(t=this),1&l.t&&(f?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){y&&(clearTimeout(y),y=null),_?d.push(this):u.jmp(()=>((t,e)=>{if(0==(1&u.t)){const n=()=>{},o=$(t);if(!(1&o.t)){o.t|=1,(4&e.t||8&e.t)&&(t=>{const e=t["s-cr"]=a.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){Z(o,o.S=e);break}}e.U&&Object.entries(e.U).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),R(()=>(async(t,e,n,o,l)=>{if(0==(32&e.t)){e.t|=32;{if((l=(t=>{const e=t.M.replace(/-/g,"_"),n=t.H,o=h.get(n);return o?o[e]:__sc_import_mycomponent(`./${n}.entry.js`).then(t=>(h.set(n,t),t[e]),w)})(n)).then){const t=()=>{};l=await l,t()}l.isProxied||(rt(l,n,2),l.isProxied=!0);const t=()=>{};e.t|=8;try{new l(e)}catch(c){w(c)}e.t&=-9,t()}const t=E(n.M);if(!b.has(t)&&l.style){const e=()=>{};let o=l.style;8&n.t&&(o=await __sc_import_mycomponent("./p-affe7c09.js").then(e=>e.scopeCss(o,t,!1))),((t,e,n)=>{let o=b.get(t);m&&n?(o=o||new CSSStyleSheet,o.replace(e)):o=e,b.set(t,o)})(t,o,!!(1&n.t)),e()}}const s=e.S,r=()=>tt(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(t,o,e))}n()}})(this,l))}disconnectedCallback(){u.jmp(()=>{})}forceUpdate(){((t,e)=>{{const n=$(t);n.C.isConnected&&2==(18&n.t)&&tt(t,n,e,!1)}})(this,l)}componentOnReady(){return $(this).F}};l.H=t[0],o.includes(r)||s.get(r)||(n.push(r),s.define(r,rt(c,l,1)))})),c.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),l.insertBefore(c,r?r.nextSibling:l.firstChild),_=!1,d.length>0?d.forEach(t=>t.connectedCallback()):u.jmp(()=>y=setTimeout(lt,30,"timeout"))},it=(t,e,n)=>{const o=at(t);return{emit:t=>{const l=new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t});return o.dispatchEvent(l),l}}},at=t=>$(t).C;export{F as H,U as a,ct as b,it as c,T as h,L as p,d as r};