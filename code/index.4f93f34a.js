var Vn=Object.defineProperty,zn=Object.defineProperties;var Fn=Object.getOwnPropertyDescriptors;var Ve=Object.getOwnPropertySymbols;var Wn=Object.prototype.hasOwnProperty,qn=Object.prototype.propertyIsEnumerable;var ze=(e,t,r)=>t in e?Vn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,at=(e,t)=>{for(var r in t||(t={}))Wn.call(t,r)&&ze(e,r,t[r]);if(Ve)for(var r of Ve(t))qn.call(t,r)&&ze(e,r,t[r]);return e},lt=(e,t)=>zn(e,Fn(t));const Kn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};Kn();const Jn="modulepreload",Fe={},Gn="/discount-day/",We=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${Gn}${n}`,n in Fe)return;Fe[n]=!0;const i=n.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":Jn,i||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),i)return new Promise((d,a)=>{s.addEventListener("load",d),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=window,xe=Tt.ShadowRoot&&(Tt.ShadyCSS===void 0||Tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol(),qe=new WeakMap;class Wr{constructor(t,r,n){if(this._$cssResult$=!0,n!==Ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(xe&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=qe.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&qe.set(r,t))}return t}toString(){return this.cssText}}const Yn=e=>new Wr(typeof e=="string"?e:e+"",void 0,Ce),At=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Wr(r,e,Ce)},Xn=(e,t)=>{xe?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),i=Tt.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)})},Ke=xe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Yn(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yt;const Ut=window,Je=Ut.trustedTypes,Zn=Je?Je.emptyScript:"",Ge=Ut.reactiveElementPolyfillSupport,ue={toAttribute(e,t){switch(t){case Boolean:e=e?Zn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Pe=(e,t)=>t!==e&&(t==t||e==e),Xt={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:Pe};class J extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,n)=>{const i=this._$Ep(n,r);i!==void 0&&(this._$Ev.set(i,n),t.push(i))}),t}static createProperty(t,r=Xt){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const n=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(i){const o=this[t];this[r]=i,this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Xt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const i of n)this.createProperty(i,r[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)r.unshift(Ke(i))}else t!==void 0&&r.push(Ke(t));return r}static _$Ep(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)===null||n===void 0||n.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Xn(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$EO(t,r,n=Xt){var i;const o=this.constructor._$Ep(t,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:ue).toAttribute(r,n.type);this._$El=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(t,r){var n;const i=this.constructor,o=i._$Ev.get(t);if(o!==void 0&&this._$El!==o){const s=i.getPropertyOptions(o),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:ue;this._$El=o,this[o]=d.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,n){let i=!0;t!==void 0&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Pe)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),n.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(n)):this._$Ek()}catch(i){throw r=!1,this._$Ek(),i}r&&this._$AE(n)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}J.finalized=!0,J.elementProperties=new Map,J.elementStyles=[],J.shadowRootOptions={mode:"open"},Ge==null||Ge({ReactiveElement:J}),((Yt=Ut.reactiveElementVersions)!==null&&Yt!==void 0?Yt:Ut.reactiveElementVersions=[]).push("1.5.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zt;const Mt=window,tt=Mt.trustedTypes,Ye=tt?tt.createPolicy("lit-html",{createHTML:e=>e}):void 0,B=`lit$${(Math.random()+"").slice(9)}$`,qr="?"+B,Qn=`<${qr}>`,et=document,vt=(e="")=>et.createComment(e),gt=e=>e===null||typeof e!="object"&&typeof e!="function",Kr=Array.isArray,ti=e=>Kr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xe=/-->/g,Ze=/>/g,V=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qe=/'/g,tr=/"/g,Jr=/^(?:script|style|textarea|title)$/i,ei=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),T=ei(1),F=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),er=new WeakMap,Z=et.createTreeWalker(et,129,null,!1),ri=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":"",s=dt;for(let a=0;a<r;a++){const l=e[a];let u,c,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===dt?c[1]==="!--"?s=Xe:c[1]!==void 0?s=Ze:c[2]!==void 0?(Jr.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=V):c[3]!==void 0&&(s=V):s===V?c[0]===">"?(s=i!=null?i:dt,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?V:c[3]==='"'?tr:Qe):s===tr||s===Qe?s=V:s===Xe||s===Ze?s=dt:(s=V,i=void 0);const f=s===V&&e[a+1].startsWith("/>")?" ":"";o+=s===dt?l+Qn:h>=0?(n.push(u),l.slice(0,h)+"$lit$"+l.slice(h)+B+f):l+B+(h===-2?(n.push(void 0),a):f)}const d=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ye!==void 0?Ye.createHTML(d):d,n]};class bt{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let o=0,s=0;const d=t.length-1,a=this.parts,[l,u]=ri(t,r);if(this.el=bt.createElement(l,n),Z.currentNode=this.el.content,r===2){const c=this.el.content,h=c.firstChild;h.remove(),c.append(...h.childNodes)}for(;(i=Z.nextNode())!==null&&a.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(B)){const p=u[s++];if(c.push(h),p!==void 0){const f=i.getAttribute(p.toLowerCase()+"$lit$").split(B),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:m[2],strings:f,ctor:m[1]==="."?ii:m[1]==="?"?si:m[1]==="@"?ai:Ft})}else a.push({type:6,index:o})}for(const h of c)i.removeAttribute(h)}if(Jr.test(i.tagName)){const c=i.textContent.split(B),h=c.length-1;if(h>0){i.textContent=tt?tt.emptyScript:"";for(let p=0;p<h;p++)i.append(c[p],vt()),Z.nextNode(),a.push({type:2,index:++o});i.append(c[h],vt())}}}else if(i.nodeType===8)if(i.data===qr)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(B,c+1))!==-1;)a.push({type:7,index:o}),c+=B.length-1}o++}}static createElement(t,r){const n=et.createElement("template");return n.innerHTML=t,n}}function rt(e,t,r=e,n){var i,o,s,d;if(t===F)return t;let a=n!==void 0?(i=r._$Co)===null||i===void 0?void 0:i[n]:r._$Cl;const l=gt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,n)),n!==void 0?((s=(d=r)._$Co)!==null&&s!==void 0?s:d._$Co=[])[n]=a:r._$Cl=a),a!==void 0&&(t=rt(e,a._$AS(e,t.values),a,n)),t}class ni{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:n},parts:i}=this._$AD,o=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:et).importNode(n,!0);Z.currentNode=o;let s=Z.nextNode(),d=0,a=0,l=i[0];for(;l!==void 0;){if(d===l.index){let u;l.type===2?u=new St(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new li(s,this,t)),this.u.push(u),l=i[++a]}d!==(l==null?void 0:l.index)&&(s=Z.nextNode(),d++)}return o}p(t){let r=0;for(const n of this.u)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class St{constructor(t,r,n,i){var o;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cm=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=rt(this,t,r),gt(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==F&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ti(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==E&&gt(this._$AH)?this._$AA.nextSibling.data=t:this.T(et.createTextNode(t)),this._$AH=t}$(t){var r;const{values:n,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=bt.createElement(i.h,this.options)),i);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new ni(o,this),d=s.v(this.options);s.p(n),this.T(d),this._$AH=s}}_$AC(t){let r=er.get(t.strings);return r===void 0&&er.set(t.strings,r=new bt(t)),r}k(t){Kr(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const o of t)i===r.length?r.push(n=new St(this.O(vt()),this.O(vt()),this,this.options)):n=r[i],n._$AI(o),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class Ft{constructor(t,r,n,i,o){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,n,i){const o=this.strings;let s=!1;if(o===void 0)t=rt(this,t,r,0),s=!gt(t)||t!==this._$AH&&t!==F,s&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=rt(this,d[n+a],r,a),l===F&&(l=this._$AH[a]),s||(s=!gt(l)||l!==this._$AH[a]),l===E?t=E:t!==E&&(t+=(l!=null?l:"")+o[a+1]),this._$AH[a]=l}s&&!i&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class ii extends Ft{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}const oi=tt?tt.emptyScript:"";class si extends Ft{constructor(){super(...arguments),this.type=4}j(t){t&&t!==E?this.element.setAttribute(this.name,oi):this.element.removeAttribute(this.name)}}class ai extends Ft{constructor(t,r,n,i,o){super(t,r,n,i,o),this.type=5}_$AI(t,r=this){var n;if((t=(n=rt(this,t,r,0))!==null&&n!==void 0?n:E)===F)return;const i=this._$AH,o=t===E&&i!==E||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==E&&(i===E||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,t):this._$AH.handleEvent(t)}}class li{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}}const rr=Mt.litHtmlPolyfillSupport;rr==null||rr(bt,St),((Zt=Mt.litHtmlVersions)!==null&&Zt!==void 0?Zt:Mt.litHtmlVersions=[]).push("2.5.0");const di=(e,t,r)=>{var n,i;const o=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=o._$litPart$;if(s===void 0){const d=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=s=new St(t.insertBefore(vt(),d),d,void 0,r!=null?r:{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qt,te;class M extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const n=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=n.firstChild),n}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=di(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return F}}M.finalized=!0,M._$litElement$=!0,(Qt=globalThis.litElementHydrateSupport)===null||Qt===void 0||Qt.call(globalThis,{LitElement:M});const nr=globalThis.litElementPolyfillSupport;nr==null||nr({LitElement:M});((te=globalThis.litElementVersions)!==null&&te!==void 0?te:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=e=>t=>typeof t=="function"?((r,n)=>(customElements.define(r,n),n))(e,t):((r,n)=>{const{kind:i,elements:o}=n;return{kind:i,elements:o,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?lt(at({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function Wt(e){return(t,r)=>r!==void 0?((n,i,o)=>{i.constructor.createProperty(o,n)})(e,t,r):ci(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gr(e){return Wt(lt(at({},e),{state:!0}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ee;((ee=window.HTMLSlotElement)===null||ee===void 0?void 0:ee.prototype.assignedElements)!=null;function Lt(e){return e=e||[],Array.isArray(e)?e:[e]}function N(e){return`[Vaadin.Router] ${e}`}function hi(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Dt="module",Bt="nomodule",pe=[Dt,Bt];function ir(e){if(!e.match(/.+\.[m]?js$/))throw new Error(N(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function Yr(e){if(!e||!O(e.path))throw new Error(N('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!W(e.action)&&!Array.isArray(e.children)&&!W(e.children)&&!It(t)&&!r.some(n=>O(e[n])))throw new Error(N(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if(O(t))ir(t);else if(pe.some(n=>n in t))pe.forEach(n=>n in t&&ir(t[n]));else throw new Error(N('Expected route bundle to include either "'+Bt+'" or "'+Dt+'" keys, or both'));e.redirect&&["bundle","component"].forEach(n=>{n in e&&console.warn(N(`Route config "${e.path}" has both "redirect" and "${n}" properties, and "redirect" will always override the latter. Did you mean to only use "${n}"?`))})}function or(e){Lt(e).forEach(t=>Yr(t))}function sr(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===Dt?r.setAttribute("type",Dt):t===Bt&&r.setAttribute(Bt,""),r.async=!0),new Promise((n,i)=>{r.onreadystatechange=r.onload=o=>{r.__dynamicImportLoaded=!0,n(o)},r.onerror=o=>{r.parentNode&&r.parentNode.removeChild(r),i(o)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&n()})}function ui(e){return O(e)?sr(e):Promise.race(pe.filter(t=>t in e).map(t=>sr(e[t],t)))}function ut(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function It(e){return typeof e=="object"&&!!e}function W(e){return typeof e=="function"}function O(e){return typeof e=="string"}function Xr(e){const t=new Error(N(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const Y=new class{};function pi(e){const t=e.port,r=e.protocol,o=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${o}`}function ar(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let d=0;d<r.length;d++){const a=r[d];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||pi(t))!==window.location.origin)return;const{pathname:i,search:o,hash:s}=t;ut("go",{pathname:i,search:o,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const fi={activate(){window.document.addEventListener("click",ar)},inactivate(){window.document.removeEventListener("click",ar)}},mi=/Trident/.test(navigator.userAgent);mi&&!W(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function lr(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:n}=window.location;ut("go",{pathname:t,search:r,hash:n})}const vi={activate(){window.addEventListener("popstate",lr)},inactivate(){window.removeEventListener("popstate",lr)}};var st=nn,gi=ke,bi=$i,_i=tn,yi=rn,Zr="/",Qr="./",wi=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function ke(e,t){for(var r=[],n=0,i=0,o="",s=t&&t.delimiter||Zr,d=t&&t.delimiters||Qr,a=!1,l;(l=wi.exec(e))!==null;){var u=l[0],c=l[1],h=l.index;if(o+=e.slice(i,h),i=h+u.length,c){o+=c[1],a=!0;continue}var p="",f=e[i],m=l[2],S=l[3],P=l[4],x=l[5];if(!a&&o.length){var A=o.length-1;d.indexOf(o[A])>-1&&(p=o[A],o=o.slice(0,A))}o&&(r.push(o),o="",a=!1);var In=p!==""&&f!==void 0&&f!==p,jn=x==="+"||x==="*",Hn=x==="?"||x==="*",je=p||s,He=S||P;r.push({name:m||n++,prefix:p,delimiter:je,optional:Hn,repeat:jn,partial:In,pattern:He?Ei(He):"[^"+D(je)+"]+?"})}return(o||i<e.length)&&r.push(o+e.substr(i)),r}function $i(e,t){return tn(ke(e,t))}function tn(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(n,i){for(var o="",s=i&&i.encode||encodeURIComponent,d=0;d<e.length;d++){var a=e[d];if(typeof a=="string"){o+=a;continue}var l=n?n[a.name]:void 0,u;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var c=0;c<l.length;c++){if(u=s(l[c],a),!t[d].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(c===0?a.prefix:a.delimiter)+u}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(u=s(String(l),a),!t[d].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');o+=a.prefix+u;continue}if(a.optional){a.partial&&(o+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return o}}function D(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ei(e){return e.replace(/([=!:$/()])/g,"\\$1")}function en(e){return e&&e.sensitive?"":"i"}function Ai(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function Si(e,t,r){for(var n=[],i=0;i<e.length;i++)n.push(nn(e[i],t,r).source);return new RegExp("(?:"+n.join("|")+")",en(r))}function xi(e,t,r){return rn(ke(e,r),t,r)}function rn(e,t,r){r=r||{};for(var n=r.strict,i=r.start!==!1,o=r.end!==!1,s=D(r.delimiter||Zr),d=r.delimiters||Qr,a=[].concat(r.endsWith||[]).map(D).concat("$").join("|"),l=i?"^":"",u=e.length===0,c=0;c<e.length;c++){var h=e[c];if(typeof h=="string")l+=D(h),u=c===e.length-1&&d.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+D(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?l+=D(h.prefix)+"("+p+")?":l+="(?:"+D(h.prefix)+"("+p+"))?":l+=D(h.prefix)+"("+p+")"}}return o?(n||(l+="(?:"+s+")?"),l+=a==="$"?"$":"(?="+a+")"):(n||(l+="(?:"+s+"(?="+a+"))?"),u||(l+="(?="+s+"|"+a+")")),new RegExp(l,en(r))}function nn(e,t,r){return e instanceof RegExp?Ai(e,t):Array.isArray(e)?Si(e,t,r):xi(e,t,r)}st.parse=gi;st.compile=bi;st.tokensToFunction=_i;st.tokensToRegExp=yi;const{hasOwnProperty:Ci}=Object.prototype,fe=new Map;fe.set("|false",{keys:[],pattern:/(?:)/});function dr(e){try{return decodeURIComponent(e)}catch{return e}}function Pi(e,t,r,n,i){r=!!r;const o=`${e}|${r}`;let s=fe.get(o);if(!s){const l=[];s={keys:l,pattern:st(e,l,{end:r,strict:e===""})},fe.set(o,s)}const d=s.pattern.exec(t);if(!d)return null;const a=Object.assign({},i);for(let l=1;l<d.length;l++){const u=s.keys[l-1],c=u.name,h=d[l];(h!==void 0||!Ci.call(a,c))&&(u.repeat?a[c]=h?h.split(u.delimiter).map(dr):[]:a[c]=h&&dr(h))}return{path:d[0],keys:(n||[]).concat(s.keys),params:a}}function on(e,t,r,n,i){let o,s,d=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(l){if(e===l)return{done:!0};const u=e.__children=e.__children||e.children;if(!o&&(o=Pi(a,t,!u,n,i),o))return{done:!1,value:{route:e,keys:o.keys,params:o.params,path:o.path}};if(o&&u)for(;d<u.length;){if(!s){const h=u[d];h.parent=e;let p=o.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=on(h,t.substr(p),r,o.keys,o.params)}const c=s.next(l);if(!c.done)return{done:!1,value:c.value};s=null,d++}return{done:!0}}}}function ki(e){if(W(e.route.action))return e.route.action(e)}function Ti(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function Oi(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function Ni(e,t){const{route:r,path:n}=t;if(r&&!r.__synthetic){const i={path:n,route:r};if(!e.chain)e.chain=[];else if(r.parent){let o=e.chain.length;for(;o--&&e.chain[o].route&&e.chain[o].route!==r.parent;)e.chain.pop()}e.chain.push(i)}}class _t{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||ki,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){or(t);const r=[...Lt(t)];this.root.__children=r}addRoutes(t){return or(t),this.root.__children.push(...Lt(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,O(t)?{pathname:t}:t),n=on(this.root,this.__normalizePathname(r.pathname),this.baseUrl),i=this.resolveRoute;let o=null,s=null,d=r;function a(l,u=o.value.route,c){const h=c===null&&o.value.route;return o=s||n.next(h),s=null,!l&&(o.done||!Ti(u,o.value.route))?(s=o,Promise.resolve(Y)):o.done?Promise.reject(Xr(r)):(d=Object.assign(d?{chain:d.chain?d.chain.slice(0):[]}:{},r,o.value),Ni(d,o.value),Promise.resolve(i(d)).then(p=>p!=null&&p!==Y?(d.result=p.result||p,d):a(l,u,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const u=Oi(d);if(l?console.warn(u):l=new Error(u),l.context=l.context||d,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return d.result=this.errorHandler(l),d;throw l})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,n=this.constructor.__createUrl(t,r).href;if(n.slice(0,r.length)===r)return n.slice(r.length)}}_t.pathToRegexp=st;const{pathToRegexp:cr}=_t,hr=new Map;function sn(e,t,r){const n=t.name||t.component;if(n&&(e.has(n)?e.get(n).push(t):e.set(n,[t])),Array.isArray(r))for(let i=0;i<r.length;i++){const o=r[i];o.parent=t,sn(e,o,o.__children||o.children)}}function ur(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function pr(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Ri(e,t={}){if(!(e instanceof _t))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(n,i)=>{let o=ur(r,n);if(!o&&(r.clear(),sn(r,e.root,e.root.__children),o=ur(r,n),!o))throw new Error(`Route "${n}" not found`);let s=hr.get(o.fullPath);if(!s){let a=pr(o),l=o.parent;for(;l;){const p=pr(l);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const u=cr.parse(a),c=cr.tokensToFunction(u),h=Object.create(null);for(let p=0;p<u.length;p++)O(u[p])||(h[u[p].name]=!0);s={toPath:c,keys:h},hr.set(a,s),o.fullPath=a}let d=s.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const a={},l=Object.keys(i);for(let c=0;c<l.length;c++){const h=l[c];s.keys[h]||(a[h]=i[h])}const u=t.stringifyQueryParams(a);u&&(d+=u.charAt(0)==="?"?u:`?${u}`)}return d}}let fr=[];function Ui(e){fr.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),fr=e}const Mi=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Li=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function mr(e,t){return e.classList.add(t),new Promise(r=>{if(Mi(e)){const n=e.getBoundingClientRect(),i=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;e.setAttribute("style",`position: absolute; ${i}`),Li(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const Di=256;function re(e){return e!=null}function Bi(e){const t=Object.assign({},e);return delete t.next,t}function k({pathname:e="",search:t="",hash:r="",chain:n=[],params:i={},redirectFrom:o,resolver:s},d){const a=n.map(l=>l.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:d||a.length&&a[a.length-1]||null,params:i,redirectFrom:o,getUrl:(l={})=>Nt(H.pathToRegexp.compile(an(a))(Object.assign({},i,l)),s)}}function vr(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function Ii(e,t){t.location=k(e);const r=e.chain.map(n=>n.route).indexOf(e.route);return e.chain[r].element=t,t}function Ot(e,t,r){if(W(e))return e.apply(r,t)}function gr(e,t,r){return n=>{if(n&&(n.cancel||n.redirect))return n;if(r)return Ot(r[e],t,r)}}function ji(e,t){if(!Array.isArray(e)&&!It(e))throw new Error(N(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=Lt(e);for(let n=0;n<r.length;n++)Yr(r[n]),t.__children.push(r[n])}function kt(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function Nt(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function an(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class H extends _t{constructor(t,r){const n=document.head.querySelector("base"),i=n&&n.getAttribute("href");super([],Object.assign({baseUrl:i&&_t.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},r));this.resolveRoute=s=>this.__resolveRoute(s);const o=H.NavigationTrigger;H.setTriggers.apply(H,Object.keys(o).map(s=>o[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=k({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let n=Promise.resolve();W(r.children)&&(n=n.then(()=>r.children(Bi(t))).then(o=>{!re(o)&&!W(r.children)&&(o=r.children),ji(o,r)}));const i={redirect:o=>vr(t,o),component:o=>{const s=document.createElement(o);return this.__createdByRouter.set(s,!0),s}};return n.then(()=>{if(this.__isLatestRender(t))return Ot(r.action,[t,i],r)}).then(o=>{if(re(o)&&(o instanceof HTMLElement||o.redirect||o===Y))return o;if(O(r.redirect))return i.redirect(r.redirect);if(r.bundle)return ui(r.bundle).then(()=>{},()=>{throw new Error(N(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(o=>{if(re(o))return o;if(O(r.component))return i.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const n=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},O(t)?{pathname:t}:t,{__renderId:n});return this.ready=this.resolve(i).then(o=>this.__fullyResolveChain(o)).then(o=>{if(this.__isLatestRender(o)){const s=this.__previousContext;if(o===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=k(o),r&&this.__updateBrowserHistory(o,n===1),ut("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.__copyUnchangedElements(o,s),this.__previousContext=o,this.location;this.__addAppearingContent(o,s);const d=this.__animateIfNeeded(o);return this.__runOnAfterEnterCallbacks(o),this.__runOnAfterLeaveCallbacks(o,s),d.then(()=>{if(this.__isLatestRender(o))return this.__removeDisappearingContent(),this.__previousContext=o,this.location})}}).catch(o=>{if(n===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(i),kt(this.__outlet&&this.__outlet.children),this.location=k(Object.assign(i,{resolver:this})),ut("error",Object.assign({router:this,error:o},i)),o}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(n=>{const o=n!==r?n:t,d=Nt(an(n.chain),n.resolver)===n.pathname,a=(l,u=l.route,c)=>l.next(void 0,u,c).then(h=>h===null||h===Y?d?l:u.parent!==null?a(l,u.parent,h):h:h);return a(n).then(l=>{if(l===null||l===Y)throw Xr(o);return l&&l!==Y&&l!==n?this.__fullyResolveChain(o,l):this.__amendWithOnBeforeCallbacks(n)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?(Ii(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(n=>this.__findComponentContextAfterAllRedirects(n)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(N(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${hi(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},n=r.chain||[],i=t.chain;let o=Promise.resolve();const s=()=>({cancel:!0}),d=a=>vr(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,n.length){for(let a=0;a<Math.min(n.length,i.length)&&!(n[a].route!==i[a].route||n[a].path!==i[a].path&&n[a].element!==i[a].element||!this.__isReusableElement(n[a].element,i[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=i.length===n.length&&t.__divergedChainIndex==i.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=i.length-1;a>=0;a--)o=this.__runOnBeforeLeaveCallbacks(o,t,{prevent:s},n[a]);for(let a=0;a<i.length;a++)o=this.__runOnBeforeEnterCallbacks(o,t,{prevent:s,redirect:d},i[a]),n[a].element.location=k(t,n[a].route)}else for(let a=n.length-1;a>=t.__divergedChainIndex;a--)o=this.__runOnBeforeLeaveCallbacks(o,t,{prevent:s},n[a])}if(!t.__skipAttach)for(let a=0;a<i.length;a++)a<t.__divergedChainIndex?a<n.length&&n[a].element&&(n[a].element.location=k(t,n[a].route)):(o=this.__runOnBeforeEnterCallbacks(o,t,{prevent:s,redirect:d},i[a]),i[a].element&&(i[a].element.location=k(t,i[a].route)));return o.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,n,i){const o=k(r);return t.then(s=>{if(this.__isLatestRender(r))return gr("onBeforeLeave",[o,n,this],i.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,n,i){const o=k(r,i.route);return t.then(s=>{if(this.__isLatestRender(r))return gr("onBeforeEnter",[o,n,this],i.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,n){if(r>Di)throw new Error(N(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:n})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(N(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:n=""},i){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==n){const o=i?"replaceState":"pushState";window.history[o](null,document.title,t+r+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let n=this.__outlet;for(let i=0;i<t.__divergedChainIndex;i++){const o=r&&r.chain[i].element;if(o)if(o.parentNode===n)t.chain[i].element=o,n=o;else break}return n}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter(o=>this.__addedByRouter.get(o)&&o!==t.result);let i=n;for(let o=t.__divergedChainIndex;o<t.chain.length;o++){const s=t.chain[o].element;s&&(i.appendChild(s),this.__addedByRouter.set(s,!0),i===n&&this.__appearingContent.push(s),i=s)}}__removeDisappearingContent(){this.__disappearingContent&&kt(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(kt(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(!!r)for(let n=r.chain.length-1;n>=t.__divergedChainIndex&&this.__isLatestRender(t);n--){const i=r.chain[n].element;if(!!i)try{const o=k(t);Ot(i.onAfterLeave,[o,{},r.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&kt(i.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const n=t.chain[r].element||{},i=k(t,t.chain[r].route);Ot(n.onAfterEnter,[i,{},t.resolver],n)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],i=[],o=t.chain;let s;for(let d=o.length;d>0;d--)if(o[d-1].route.animate){s=o[d-1].route.animate;break}if(r&&n&&s){const d=It(s)&&s.leave||"leaving",a=It(s)&&s.enter||"entering";i.push(mr(r,d)),i.push(mr(n,a))}return Promise.all(i).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:n,hash:i}=t?t.detail:window.location;O(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:n,hash:i},!0))}static setTriggers(...t){Ui(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=Ri(this)),Nt(this.__urlForName(t,r),this)}urlForPath(t,r){return Nt(H.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:n,hash:i}=O(t)?this.__createUrl(t,"http://a"):t;return ut("go",{pathname:r,search:n,hash:i})}}const Hi=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Rt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Vi(){function e(){return!0}return ln(e)}function zi(){try{return Fi()?!0:Wi()?Rt?!qi():!Vi():!1}catch{return!1}}function Fi(){return localStorage.getItem("vaadin.developmentmode.force")}function Wi(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function qi(){return!!(Rt&&Object.keys(Rt).map(t=>Rt[t]).filter(t=>t.productionMode).length>0)}function ln(e,t){if(typeof e!="function")return;const r=Hi.exec(e.toString());if(r)try{e=new Function(r[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return e(t)}window.Vaadin=window.Vaadin||{};const br=function(e,t){if(window.Vaadin.developmentMode)return ln(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=zi());function Ki(){}const Ji=function(){if(typeof br=="function")return br(Ki)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Ji();H.NavigationTrigger={POPSTATE:vi,CLICK:fi};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _r=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,me=(e,t,r=null)=>{for(;t!==r;){const n=t.nextSibling;e.removeChild(t),t=n}},L=`{{lit-${String(Math.random()).slice(2)}}}`,dn=`<!--${L}-->`,yr=new RegExp(`${L}|${dn}`);class cn{constructor(t,r){this.parts=[],this.element=r;const n=[],i=[],o=document.createTreeWalker(r.content,133,null,!1);let s=0,d=-1,a=0;const{strings:l,values:{length:u}}=t;for(;a<u;){const c=o.nextNode();if(c!==null){if(d++,c.nodeType===1){if(c.hasAttributes()){const h=c.attributes,{length:p}=h;let f=0;for(let m=0;m<p;m++)wr(h[m].name,"$lit$")&&f++;for(;f-- >0;){const m=l[a],S=ve.exec(m)[2],P=S.toLowerCase()+"$lit$",x=c.getAttribute(P);c.removeAttribute(P);const A=x.split(yr);this.parts.push({type:"attribute",index:d,name:S,strings:A}),a+=A.length-1}}c.tagName==="TEMPLATE"&&(i.push(c),o.currentNode=c.content)}else if(c.nodeType===3){const h=c.data;if(h.indexOf(L)>=0){const p=c.parentNode,f=h.split(yr),m=f.length-1;for(let S=0;S<m;S++){let P,x=f[S];if(x==="")P=I();else{const A=ve.exec(x);A!==null&&wr(A[2],"$lit$")&&(x=x.slice(0,A.index)+A[1]+A[2].slice(0,-5)+A[3]),P=document.createTextNode(x)}p.insertBefore(P,c),this.parts.push({type:"node",index:++d})}f[m]===""?(p.insertBefore(I(),c),n.push(c)):c.data=f[m],a+=m}}else if(c.nodeType===8)if(c.data===L){const h=c.parentNode;c.previousSibling!==null&&d!==s||(d++,h.insertBefore(I(),c)),s=d,this.parts.push({type:"node",index:d}),c.nextSibling===null?c.data="":(n.push(c),d--),a++}else{let h=-1;for(;(h=c.data.indexOf(L,h+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=i.pop()}for(const c of n)c.parentNode.removeChild(c)}}const wr=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},hn=e=>e.index!==-1,I=()=>document.createComment(""),ve=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function $r(e,t){const{element:{content:r},parts:n}=e,i=document.createTreeWalker(r,133,null,!1);let o=pt(n),s=n[o],d=-1,a=0;const l=[];let u=null;for(;i.nextNode();){d++;const c=i.currentNode;for(c.previousSibling===u&&(u=null),t.has(c)&&(l.push(c),u===null&&(u=c)),u!==null&&a++;s!==void 0&&s.index===d;)s.index=u!==null?-1:s.index-a,o=pt(n,o),s=n[o]}l.forEach(c=>c.parentNode.removeChild(c))}const Gi=e=>{let t=e.nodeType===11?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},pt=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const n=e[r];if(hn(n))return r}return-1};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Yi=new WeakMap,yt=e=>typeof e=="function"&&Yi.has(e),R={},Er={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class ge{constructor(t,r,n){this.__parts=[],this.template=t,this.processor=r,this.options=n}update(t){let r=0;for(const n of this.__parts)n!==void 0&&n.setValue(t[r]),r++;for(const n of this.__parts)n!==void 0&&n.commit()}_clone(){const t=_r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let o,s=0,d=0,a=i.nextNode();for(;s<n.length;)if(o=n[s],hn(o)){for(;d<o.index;)d++,a.nodeName==="TEMPLATE"&&(r.push(a),i.currentNode=a.content),(a=i.nextNode())===null&&(i.currentNode=r.pop(),a=i.nextNode());if(o.type==="node"){const l=this.processor.handleTextExpression(this.options);l.insertAfterNode(a.previousSibling),this.__parts.push(l)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return _r&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Xi=` ${L} `;class un{constructor(t,r,n,i){this.strings=t,this.values=r,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let r="",n=!1;for(let i=0;i<t;i++){const o=this.strings[i],s=o.lastIndexOf("<!--");n=(s>-1||n)&&o.indexOf("-->",s+1)===-1;const d=ve.exec(o);r+=d===null?o+(n?Xi:dn):o.substr(0,d.index)+d[1]+d[2]+"$lit$"+d[3]+L}return r+=this.strings[t],r}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Te=e=>e===null||!(typeof e=="object"||typeof e=="function"),pn=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class fn{constructor(t,r,n){this.dirty=!0,this.element=t,this.name=r,this.strings=n,this.parts=[];for(let i=0;i<n.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new mn(this)}_getValue(){const t=this.strings,r=t.length-1;let n="";for(let i=0;i<r;i++){n+=t[i];const o=this.parts[i];if(o!==void 0){const s=o.value;if(Te(s)||!pn(s))n+=typeof s=="string"?s:String(s);else for(const d of s)n+=typeof d=="string"?d:String(d)}}return n+=t[r],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class mn{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===R||Te(t)&&t===this.value||(this.value=t,yt(t)||(this.committer.dirty=!0))}commit(){for(;yt(this.value);){const t=this.value;this.value=R,t(this)}this.value!==R&&this.committer.commit()}}class qt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(I()),this.endNode=t.appendChild(I())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=I()),t.__insert(this.endNode=I())}insertAfterPart(t){t.__insert(this.startNode=I()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;yt(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=R,r(this)}const t=this.__pendingValue;t!==R&&(Te(t)?t!==this.value&&this.__commitText(t):t instanceof un?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):pn(t)?this.__commitIterable(t):t===Er?(this.value=Er,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const r=this.startNode.nextSibling,n=typeof(t=t==null?"":t)=="string"?t:String(t);r===this.endNode.previousSibling&&r.nodeType===3?r.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const r=this.options.templateFactory(t);if(this.value instanceof ge&&this.value.template===r)this.value.update(t.values);else{const n=new ge(r,t.processor,this.options),i=n._clone();n.update(t.values),this.__commitNode(i),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const r=this.value;let n,i=0;for(const o of t)n=r[i],n===void 0&&(n=new qt(this.options),r.push(n),i===0?n.appendIntoPart(this):n.insertAfterPart(r[i-1])),n.setValue(o),n.commit(),i++;i<r.length&&(r.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){me(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Zi{constructor(t,r,n){if(this.value=void 0,this.__pendingValue=void 0,n.length!==2||n[0]!==""||n[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;yt(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=R,r(this)}if(this.__pendingValue===R)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=R}}class Qi extends fn{constructor(t,r,n){super(t,r,n),this.single=n.length===2&&n[0]===""&&n[1]===""}_createPart(){return new to(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class to extends mn{}let vn=!1;(()=>{try{const e={get capture(){return vn=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{}})();class eo{constructor(t,r,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=n,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(t){this.__pendingValue=t}commit(){for(;yt(this.__pendingValue);){const o=this.__pendingValue;this.__pendingValue=R,o(this)}if(this.__pendingValue===R)return;const t=this.__pendingValue,r=this.value,n=t==null||r!=null&&(t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive),i=t!=null&&(r==null||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=ro(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=R}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const ro=e=>e&&(vn?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function no(e){let t=wt.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},wt.set(e.type,t));let r=t.stringsArray.get(e.strings);if(r!==void 0)return r;const n=e.strings.join(L);return r=t.keyString.get(n),r===void 0&&(r=new cn(e,e.getTemplateElement()),t.keyString.set(n,r)),t.stringsArray.set(e.strings,r),r}const wt=new Map,K=new WeakMap;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const io=new class{handleAttributeExpressions(e,t,r,n){const i=t[0];return i==="."?new Qi(e,t.slice(1),r).parts:i==="@"?[new eo(e,t.slice(1),n.eventContext)]:i==="?"?[new Zi(e,t.slice(1),r)]:new fn(e,t,r).parts}handleTextExpression(e){return new qt(e)}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const C=(e,...t)=>new un(e,t,"html",io),gn=(e,t)=>`${e}--${t}`;let jt=!0;window.ShadyCSS===void 0?jt=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),jt=!1);const oo=e=>t=>{const r=gn(t.type,e);let n=wt.get(r);n===void 0&&(n={stringsArray:new WeakMap,keyString:new Map},wt.set(r,n));let i=n.stringsArray.get(t.strings);if(i!==void 0)return i;const o=t.strings.join(L);if(i=n.keyString.get(o),i===void 0){const s=t.getTemplateElement();jt&&window.ShadyCSS.prepareTemplateDom(s,e),i=new cn(t,s),n.keyString.set(o,i)}return n.stringsArray.set(t.strings,i),i},so=["html","svg"],bn=new Set,ao=(e,t,r)=>{bn.add(e);const n=r?r.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:o}=i;if(o===0)return void window.ShadyCSS.prepareTemplateStyles(n,e);const s=document.createElement("style");for(let l=0;l<o;l++){const u=i[l];u.parentNode.removeChild(u),s.textContent+=u.textContent}(l=>{so.forEach(u=>{const c=wt.get(gn(u,l));c!==void 0&&c.keyString.forEach(h=>{const{element:{content:p}}=h,f=new Set;Array.from(p.querySelectorAll("style")).forEach(m=>{f.add(m)}),$r(h,f)})})})(e);const d=n.content;r?function(l,u,c=null){const{element:{content:h},parts:p}=l;if(c==null)return void h.appendChild(u);const f=document.createTreeWalker(h,133,null,!1);let m=pt(p),S=0,P=-1;for(;f.nextNode();)for(P++,f.currentNode===c&&(S=Gi(u),c.parentNode.insertBefore(u,c));m!==-1&&p[m].index===P;){if(S>0){for(;m!==-1;)p[m].index+=S,m=pt(p,m);return}m=pt(p,m)}}(r,s,d.firstChild):d.insertBefore(s,d.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const a=d.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(r){d.insertBefore(s,d.firstChild);const l=new Set;l.add(s),$r(r,l)}};window.JSCompiler_renameProperty=(e,t)=>e;const be={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},_n=(e,t)=>t!==e&&(t==t||e==e),ne={attribute:!0,type:String,converter:be,reflect:!1,hasChanged:_n};class yn extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((r,n)=>{const i=this._attributeNameForProperty(n,r);i!==void 0&&(this._attributeToPropertyMap.set(i,n),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((r,n)=>this._classProperties.set(n,r))}}static createProperty(t,r=ne){if(this._ensureClassProperties(),this._classProperties.set(t,r),r.noAccessor||this.prototype.hasOwnProperty(t))return;const n=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,r);i!==void 0&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,r,n){return{get(){return this[r]},set(i){const o=this[t];this[r]=i,this._requestUpdate(t,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||ne}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(const i of n)this.createProperty(i,r[i])}}static _attributeNameForProperty(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,r,n=_n){return n(t,r)}static _propertyValueFromAttribute(t,r){const n=r.type,i=r.converter||be,o=typeof i=="function"?i:i.fromAttribute;return o?o(t,n):t}static _propertyValueToAttribute(t,r){if(r.reflect===void 0)return;const n=r.type,i=r.converter;return(i&&i.toAttribute||be.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,r)=>{if(this.hasOwnProperty(r)){const n=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,n)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,r)=>this[r]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,r,n){r!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,r,n=ne){const i=this.constructor,o=i._attributeNameForProperty(t,n);if(o!==void 0){const s=i._propertyValueToAttribute(r,n);if(s===void 0)return;this._updateState=8|this._updateState,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._updateState=-9&this._updateState}}_attributeToProperty(t,r){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(i!==void 0){const o=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(r,o),this._updateState=-17&this._updateState}}_requestUpdate(t,r){let n=!0;if(t!==void 0){const i=this.constructor,o=i.getPropertyOptions(t);i._valueHasChanged(this[t],r,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,r),o.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,r){return this._requestUpdate(t,r),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const r=this._changedProperties;try{t=this.shouldUpdate(r),t?this.update(r):this._markUpdated()}catch(n){throw t=!1,this._markUpdated(),n}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,n)=>this._propertyToAttribute(n,this[n],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}yn.finalized=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const lo=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function $(e){return(t,r)=>r!==void 0?((n,i,o)=>{i.constructor.createProperty(o,n)})(e,t,r):lo(e,t)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const wn="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$n=Symbol();class Ar{constructor(t,r){if(r!==$n)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(wn?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const co=(e,...t)=>{const r=t.reduce((n,i,o)=>n+(s=>{if(s instanceof Ar)return s.cssText;if(typeof s=="number")return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]);return new Ar(r,$n)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Sr={};class _e extends yn{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(t===void 0)this._styles=[];else if(Array.isArray(t)){const r=(o,s)=>o.reduceRight((d,a)=>Array.isArray(a)?r(a,d):(d.add(a),d),s),n=r(t,new Set),i=[];n.forEach(o=>i.unshift(o)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;t.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?wn?this.renderRoot.adoptedStyleSheets=t.map(r=>r.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(r=>r.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){const r=this.render();super.update(t),r!==Sr&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(n=>{const i=document.createElement("style");i.textContent=n.cssText,this.renderRoot.appendChild(i)}))}render(){return Sr}}_e.finalized=!0,_e.render=(e,t,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");const n=r.scopeName,i=K.has(t),o=jt&&t.nodeType===11&&!!t.host,s=o&&!bn.has(n),d=s?document.createDocumentFragment():t;if(((a,l,u)=>{let c=K.get(l);c===void 0&&(me(l,l.firstChild),K.set(l,c=new qt(Object.assign({templateFactory:no},u))),c.appendInto(l)),c.setValue(a),c.commit()})(e,d,Object.assign({templateFactory:oo(n)},r)),s){const a=K.get(d);K.delete(d);const l=a.value instanceof ge?a.value.template:void 0;ao(n,d,l),me(t,t.firstChild),t.appendChild(d),K.set(t,a)}!i&&o&&window.ShadyCSS.styleElement(t.host)};var y=function(e,t,r,n){var i,o=arguments.length,s=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,n);else for(var d=e.length-1;d>=0;d--)(i=e[d])&&(s=(o<3?i(s):o>3?i(t,r,s):i(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let _=class extends _e{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancel()})}static get styles(){return co`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch{console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch{return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),(await this.deferredprompt.userChoice).outcome==="accepted"){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let r=new CustomEvent("hide");this.dispatchEvent(r),e()})}render(){return C`${"standalone"in navigator&&navigator.standalone===!1||this.usecustom!==!0&&this.shouldShowInstall()&&this.installed===!1?C`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${this.openmodal===!0?C`<div id="installModalWrapper">${this.openmodal?C`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?C`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>C`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?C`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(e=>C`<div><img alt="App Screenshot" src="${e.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?C`<p id="iosText">${this.iosinstallinfotext}</p>`:C`<div id="buttonsContainer">${this.deferredprompt?C`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:C`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};var ie;y([$({type:String})],_.prototype,"manifestpath",void 0),y([$({type:String})],_.prototype,"iconpath",void 0),y([$({type:Object})],_.prototype,"manifestdata",void 0),y([$({type:Boolean})],_.prototype,"openmodal",void 0),y([$({type:Boolean})],_.prototype,"showopen",void 0),y([$({type:Boolean})],_.prototype,"isSupportingBrowser",void 0),y([$({type:Boolean})],_.prototype,"isIOS",void 0),y([$({type:Boolean})],_.prototype,"installed",void 0),y([$({type:Boolean})],_.prototype,"hasprompt",void 0),y([$({type:Boolean})],_.prototype,"usecustom",void 0),y([$({type:Array})],_.prototype,"relatedApps",void 0),y([$({type:String})],_.prototype,"explainer",void 0),y([$({type:String})],_.prototype,"featuresheader",void 0),y([$({type:String})],_.prototype,"descriptionheader",void 0),y([$({type:String})],_.prototype,"installbuttontext",void 0),y([$({type:String})],_.prototype,"cancelbuttontext",void 0),y([$({type:String})],_.prototype,"iosinstallinfotext",void 0),y([$()],_.prototype,"deferredprompt",void 0),_=y([(ie="pwa-install",e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(ie,e):((t,r)=>{const{kind:n,elements:i}=r;return{kind:n,elements:i,finisher(o){window.customElements.define(t,o)}}})(ie,e))],_);var Oe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ne=Symbol(),xr=new Map,En=class{constructor(e,t){if(this._$cssResult$=!0,t!==Ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=xr.get(this.cssText);return Oe&&e===void 0&&(xr.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},ho=e=>new En(typeof e=="string"?e:e+"",Ne),Kt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new En(r,Ne)},uo=(e,t)=>{Oe?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const n=document.createElement("style"),i=window.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)})},Cr=Oe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return ho(r)})(e):e,oe,Pr=window.trustedTypes,po=Pr?Pr.emptyScript:"",kr=window.reactiveElementPolyfillSupport,ye={toAttribute(e,t){switch(t){case Boolean:e=e?po:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},An=(e,t)=>t!==e&&(t==t||e==e),se={attribute:!0,type:String,converter:ye,reflect:!1,hasChanged:An},G=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const n=this._$Eh(r,t);n!==void 0&&(this._$Eu.set(n,r),e.push(n))}),e}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||se}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of r)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(Cr(n))}else e!==void 0&&t.push(Cr(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return uo(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=se){var n,i;const o=this.constructor._$Eh(e,r);if(o!==void 0&&r.reflect===!0){const s=((i=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&i!==void 0?i:ye.toAttribute)(t,r.type);this._$Ei=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}_$AK(e,t){var r,n,i;const o=this.constructor,s=o._$Eu.get(e);if(s!==void 0&&this._$Ei!==s){const d=o.getPropertyOptions(s),a=d.converter,l=(i=(n=(r=a)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof a=="function"?a:null)!==null&&i!==void 0?i:ye.fromAttribute;this._$Ei=s,this[s]=l(t,d.type),this._$Ei=null}}requestUpdate(e,t,r){let n=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||An)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,i)=>this[i]=n),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostUpdate)===null||i===void 0?void 0:i.call(n)}),this.update(r)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};G.finalized=!0,G.elementProperties=new Map,G.elementStyles=[],G.shadowRootOptions={mode:"open"},kr==null||kr({ReactiveElement:G}),((oe=globalThis.reactiveElementVersions)!==null&&oe!==void 0?oe:globalThis.reactiveElementVersions=[]).push("1.3.2");var ae,nt=globalThis.trustedTypes,Tr=nt?nt.createPolicy("lit-html",{createHTML:e=>e}):void 0,j=`lit$${(Math.random()+"").slice(9)}$`,Sn="?"+j,fo=`<${Sn}>`,it=document,$t=(e="")=>it.createComment(e),Et=e=>e===null||typeof e!="object"&&typeof e!="function",xn=Array.isArray,mo=e=>{var t;return xn(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Or=/-->/g,Nr=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Rr=/'/g,Ur=/"/g,Cn=/^(?:script|style|textarea|title)$/i,vo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Re=vo(1),q=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Mr=new WeakMap,go=(e,t,r)=>{var n,i;const o=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:t;let s=o._$litPart$;if(s===void 0){const d=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=s=new Jt(t.insertBefore($t(),d),d,void 0,r!=null?r:{})}return s._$AI(e),s},Q=it.createTreeWalker(it,129,null,!1),bo=(e,t)=>{const r=e.length-1,n=[];let i,o=t===2?"<svg>":"",s=ct;for(let a=0;a<r;a++){const l=e[a];let u,c,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===ct?c[1]==="!--"?s=Or:c[1]!==void 0?s=Nr:c[2]!==void 0?(Cn.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=z):c[3]!==void 0&&(s=z):s===z?c[0]===">"?(s=i!=null?i:ct,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,u=c[1],s=c[3]===void 0?z:c[3]==='"'?Ur:Rr):s===Ur||s===Rr?s=z:s===Or||s===Nr?s=ct:(s=z,i=void 0);const f=s===z&&e[a+1].startsWith("/>")?" ":"";o+=s===ct?l+fo:h>=0?(n.push(u),l.slice(0,h)+"$lit$"+l.slice(h)+j+f):l+j+(h===-2?(n.push(void 0),a):f)}const d=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Tr!==void 0?Tr.createHTML(d):d,n]},Ht=class{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,o=0;const s=e.length-1,d=this.parts,[a,l]=bo(e,t);if(this.el=Ht.createElement(a,r),Q.currentNode=this.el.content,t===2){const u=this.el.content,c=u.firstChild;c.remove(),u.append(...c.childNodes)}for(;(n=Q.nextNode())!==null&&d.length<s;){if(n.nodeType===1){if(n.hasAttributes()){const u=[];for(const c of n.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(j)){const h=l[o++];if(u.push(c),h!==void 0){const p=n.getAttribute(h.toLowerCase()+"$lit$").split(j),f=/([.?@])?(.*)/.exec(h);d.push({type:1,index:i,name:f[2],strings:p,ctor:f[1]==="."?yo:f[1]==="?"?$o:f[1]==="@"?Eo:Gt})}else d.push({type:6,index:i})}for(const c of u)n.removeAttribute(c)}if(Cn.test(n.tagName)){const u=n.textContent.split(j),c=u.length-1;if(c>0){n.textContent=nt?nt.emptyScript:"";for(let h=0;h<c;h++)n.append(u[h],$t()),Q.nextNode(),d.push({type:2,index:++i});n.append(u[c],$t())}}}else if(n.nodeType===8)if(n.data===Sn)d.push({type:2,index:i});else{let u=-1;for(;(u=n.data.indexOf(j,u+1))!==-1;)d.push({type:7,index:i}),u+=j.length-1}i++}}static createElement(e,t){const r=it.createElement("template");return r.innerHTML=e,r}};function ot(e,t,r=e,n){var i,o,s,d;if(t===q)return t;let a=n!==void 0?(i=r._$Cl)===null||i===void 0?void 0:i[n]:r._$Cu;const l=Et(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(e),a._$AT(e,r,n)),n!==void 0?((s=(d=r)._$Cl)!==null&&s!==void 0?s:d._$Cl=[])[n]=a:r._$Cu=a),a!==void 0&&(t=ot(e,a._$AS(e,t.values),a,n)),t}var _o=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:n}=this._$AD,i=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:it).importNode(r,!0);Q.currentNode=i;let o=Q.nextNode(),s=0,d=0,a=n[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new Jt(o,o.nextSibling,this,e):a.type===1?l=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(l=new Ao(o,this,e)),this.v.push(l),a=n[++d]}s!==(a==null?void 0:a.index)&&(o=Q.nextNode(),s++)}return i}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Jt=class{constructor(e,t,r,n){var i;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cg=(i=n==null?void 0:n.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ot(this,e,t),Et(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==q&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):mo(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==w&&Et(this._$AH)?this._$AA.nextSibling.data=e:this.k(it.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ht.createElement(n.h,this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.m(r);else{const o=new _o(i,this),s=o.p(this.options);o.m(r),this.k(s),this._$AH=o}}_$AC(e){let t=Mr.get(e.strings);return t===void 0&&Mr.set(e.strings,t=new Ht(e)),t}S(e){xn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new Jt(this.M($t()),this.M($t()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Gt=class{constructor(e,t,r,n,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){const i=this.strings;let o=!1;if(i===void 0)e=ot(this,e,t,0),o=!Et(e)||e!==this._$AH&&e!==q,o&&(this._$AH=e);else{const s=e;let d,a;for(e=i[0],d=0;d<i.length-1;d++)a=ot(this,s[r+d],t,d),a===q&&(a=this._$AH[d]),o||(o=!Et(a)||a!==this._$AH[d]),a===w?e=w:e!==w&&(e+=(a!=null?a:"")+i[d+1]),this._$AH[d]=a}o&&!n&&this.C(e)}C(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},yo=class extends Gt{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===w?void 0:e}},wo=nt?nt.emptyScript:"",$o=class extends Gt{constructor(){super(...arguments),this.type=4}C(e){e&&e!==w?this.element.setAttribute(this.name,wo):this.element.removeAttribute(this.name)}},Eo=class extends Gt{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=ot(this,e,t,0))!==null&&r!==void 0?r:w)===q)return;const n=this._$AH,i=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==w&&(n===w||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Ao=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ot(this,e)}},Lr=window.litHtmlPolyfillSupport;Lr==null||Lr(Ht,Jt),((ae=globalThis.litHtmlVersions)!==null&&ae!==void 0?ae:globalThis.litHtmlVersions=[]).push("2.2.4");var le,de,ft=class extends G{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=go(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return q}};ft.finalized=!0,ft._$litElement$=!0,(le=globalThis.litElementHydrateSupport)===null||le===void 0||le.call(globalThis,{LitElement:ft});var Dr=globalThis.litElementPolyfillSupport;Dr==null||Dr({LitElement:ft});((de=globalThis.litElementVersions)!==null&&de!==void 0?de:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ue=Kt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,So=Kt`
  ${Ue}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Pn=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}},xo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Co=e=>(...t)=>({_$litDirective$:e,values:t}),Po=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kn=Co(class extends Po{constructor(e){var t;if(super(e),e.type!==xo.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.et.add(o);return this.render(t)}const i=e.element.classList;this.et.forEach(o=>{o in t||(i.remove(o),this.et.delete(o))});for(const o in t){const s=!!t[o];s===this.et.has(o)||((n=this.st)===null||n===void 0?void 0:n.has(o))||(s?(i.add(o),this.et.add(o)):(i.remove(o),this.et.delete(o)))}return q}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tn=Object.defineProperty,ko=Object.defineProperties,To=Object.getOwnPropertyDescriptor,Oo=Object.getOwnPropertyDescriptors,Br=Object.getOwnPropertySymbols,No=Object.prototype.hasOwnProperty,Ro=Object.prototype.propertyIsEnumerable,Ir=(e,t,r)=>t in e?Tn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ct=(e,t)=>{for(var r in t||(t={}))No.call(t,r)&&Ir(e,r,t[r]);if(Br)for(var r of Br(t))Ro.call(t,r)&&Ir(e,r,t[r]);return e},Me=(e,t)=>ko(e,Oo(t)),v=(e,t,r,n)=>{for(var i=n>1?void 0:n?To(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&Tn(t,r,i),i},Le=e=>t=>typeof t=="function"?((r,n)=>(window.customElements.define(r,n),n))(e,t):((r,n)=>{const{kind:i,elements:o}=n;return{kind:i,elements:o,finisher(s){window.customElements.define(r,s)}}})(e,t),Uo=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Me(Ct({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function b(e){return(t,r)=>r!==void 0?((n,i,o)=>{i.constructor.createProperty(o,n)})(e,t,r):Uo(e,t)}function Mo(e){return b(Me(Ct({},e),{state:!0}))}var Lo=({finisher:e,descriptor:t})=>(r,n)=>{var i;if(n===void 0){const o=(i=r.originalKey)!==null&&i!==void 0?i:r.key,s=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:Me(Ct({},r),{key:o});return e!=null&&(s.finisher=function(d){e(d,o)}),s}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,n,t(n)),e==null||e(o,n)}};function Do(e,t){return Lo({descriptor:r=>{const n={get(){var i,o;return(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const i=typeof r=="symbol"?Symbol():"__"+r;n.get=function(){var o,s;return this[i]===void 0&&(this[i]=(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&s!==void 0?s:null),this[i]}}return n}})}var ce;((ce=window.HTMLSlotElement)===null||ce===void 0?void 0:ce.prototype.assignedElements)!=null;var Pt=class extends ft{};v([b()],Pt.prototype,"dir",2);v([b()],Pt.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we=class extends Pt{constructor(){super(...arguments);this.hasSlotController=new Pn(this,"footer","header","image")}render(){return Re`
      <div
        part="base"
        class=${kn({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};we.styles=So;we=v([Le("sl-card")],we);var Bo=Kt`
  ${Ue}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Io=class extends Event{constructor(e){super("formdata");this.formData=e}},jo=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new Io(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const n=this.getAll(e),i=n.indexOf(r.value);i!==-1&&n.splice(i,1),n.push(t),this.set(e,n)}else super.append(e,t);r.value=t}};function Ho(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function jr(){!window.FormData||Ho()||(window.FormData=jo,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?jr():window.addEventListener("DOMContentLoaded",()=>jr());var ht=new WeakMap,Vo=class{constructor(e,t){(this.host=e).addController(this),this.options=Ct({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,n)=>{r.value=n}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ht.has(this.form)||(ht.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ht.has(this.form)&&(this.form.reportValidity=ht.get(this.form),ht.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),n=this.options.value(this.host);!t&&typeof r=="string"&&typeof n!="undefined"&&(Array.isArray(n)?n.forEach(i=>{e.formData.append(r,i.toString())}):e.formData.append(r,n.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(n=>{t.hasAttribute(n)&&r.setAttribute(n,t.getAttribute(n))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},On=Symbol.for(""),zo=e=>{var t,r;if(((t=e)===null||t===void 0?void 0:t.r)===On)return(r=e)===null||r===void 0?void 0:r._$litStatic$},Hr=(e,...t)=>({_$litStatic$:t.reduce((r,n,i)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[i+1],e[0]),r:On}),Vr=new Map,Fo=e=>(t,...r)=>{const n=r.length;let i,o;const s=[],d=[];let a,l=0,u=!1;for(;l<n;){for(a=t[l];l<n&&(o=r[l],(i=zo(o))!==void 0);)a+=i+t[++l],u=!0;d.push(o),s.push(a),l++}if(l===n&&s.push(t[n]),u){const c=s.join("$$lit$$");(t=Vr.get(c))===void 0&&(s.raw=s,Vr.set(c,t=s)),r=d}return e(t,...r)},he=Fo(Re);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $e=new Set,Wo=new MutationObserver(Un),X=new Map,Nn=document.documentElement.dir||"ltr",Rn=document.documentElement.lang||navigator.language,mt;Wo.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function qo(...e){e.map(t=>{const r=t.$code.toLowerCase();X.has(r)?X.set(r,Object.assign(Object.assign({},X.get(r)),t)):X.set(r,t),mt||(mt=t)}),Un()}function Un(){Nn=document.documentElement.dir||"ltr",Rn=document.documentElement.lang||navigator.language,[...$e.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var Ko=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){$e.add(this.host)}hostDisconnected(){$e.delete(this.host)}dir(){return`${this.host.dir||Nn}`.toLowerCase()}lang(){return`${this.host.lang||Rn}`.toLowerCase()}term(e,...t){const r=this.lang().toLowerCase().slice(0,2),n=this.lang().length>2?this.lang().toLowerCase():"",i=X.get(n),o=X.get(r);let s;if(i&&i[e])s=i[e];else if(o&&o[e])s=o[e];else if(mt&&mt[e])s=mt[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof s=="function"?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},Mn=class extends Ko{},Jo={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};qo(Jo);var U=e=>e!=null?e:w;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zr(e,t,r){const n=new CustomEvent(t,Ct({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return e.dispatchEvent(n),n}var g=class extends Pt{constructor(){super(...arguments);this.formSubmitController=new Vo(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new Pn(this,"[default]","prefix","suffix"),this.localize=new Mn(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,zr(this,"sl-blur")}handleFocus(){this.hasFocus=!0,zr(this,"sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?Hr`a`:Hr`button`;return he`
      <${t}
        part="base"
        class=${kn({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${U(e?void 0:this.disabled)}
        type=${U(e?void 0:this.type)}
        name=${U(e?void 0:this.name)}
        value=${U(e?void 0:this.value)}
        href=${U(e?this.href:void 0)}
        target=${U(e?this.target:void 0)}
        download=${U(e?this.download:void 0)}
        rel=${U(e&&this.target?"noreferrer noopener":void 0)}
        role=${U(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?he`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?he`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};g.styles=Bo;v([Do(".button")],g.prototype,"button",2);v([Mo()],g.prototype,"hasFocus",2);v([b({reflect:!0})],g.prototype,"variant",2);v([b({reflect:!0})],g.prototype,"size",2);v([b({type:Boolean,reflect:!0})],g.prototype,"caret",2);v([b({type:Boolean,reflect:!0})],g.prototype,"disabled",2);v([b({type:Boolean,reflect:!0})],g.prototype,"loading",2);v([b({type:Boolean,reflect:!0})],g.prototype,"outline",2);v([b({type:Boolean,reflect:!0})],g.prototype,"pill",2);v([b({type:Boolean,reflect:!0})],g.prototype,"circle",2);v([b()],g.prototype,"type",2);v([b()],g.prototype,"name",2);v([b()],g.prototype,"value",2);v([b()],g.prototype,"href",2);v([b()],g.prototype,"target",2);v([b()],g.prototype,"download",2);v([b()],g.prototype,"form",2);v([b({attribute:"formaction"})],g.prototype,"formAction",2);v([b({attribute:"formmethod"})],g.prototype,"formMethod",2);v([b({attribute:"formnovalidate",type:Boolean})],g.prototype,"formNoValidate",2);v([b({attribute:"formtarget"})],g.prototype,"formTarget",2);g=v([Le("sl-button")],g);var Go=Kt`
  ${Ue}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Ee=class extends Pt{constructor(){super(...arguments);this.localize=new Mn(this)}render(){return Re`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ee.styles=Go;Ee=v([Le("sl-spinner")],Ee);const Ln=At`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var Yo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Dn=(e,t,r,n)=>{for(var i=n>1?void 0:n?Xo(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&Yo(t,r,i),i};let Ae=class extends M{constructor(){super();this.message="Welcome!"}static get styles(){return[Ln,At`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      sl-card::part(footer) {
        display: flex;
        justify-content: flex-end;
      }

      @media(min-width: 750px) {
        sl-card {
          width: 70vw;
        }
      }


      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }
    `]}async firstUpdated(){console.log("This is your home page")}render(){return T`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://github.com/pwa-builder/pwa-starter/wiki/Getting-Started">
                Documentation on Github</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://vaadin.github.io/vaadin-router/vaadin-router/demo/#vaadin-router-getting-started-demos"
                  >Vaadin Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${"/discount-day/"}about" variant="primary">Navigate to About</sl-button>
        </div>

        <pwa-install>Install PWA Starter</pwa-install>
      </main>
    `}};Dn([Wt()],Ae.prototype,"message",2);Ae=Dn([xt("app-home")],Ae);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=Symbol();class Qo{constructor(t,r,n){this.i=0,this.status=0,this.autoRun=!0,this.o=t,this.o.addController(this);const i=typeof r=="object"?r:{task:r,args:n};this.t=i.task,this.h=i.args,this.l=i.onComplete,this.u=i.onError,i.autoRun!==void 0&&(this.autoRun=i.autoRun),this.taskComplete=new Promise((o,s)=>{this.v=o,this._=s})}hostUpdated(){this.performTask()}async performTask(){var t;const r=(t=this.h)===null||t===void 0?void 0:t.call(this);this.shouldRun(r)&&this.run(r)}shouldRun(t){return this.autoRun&&this.m(t)}async run(t){var r,n,i;let o,s;t!=null||(t=(r=this.h)===null||r===void 0?void 0:r.call(this)),this.status!==2&&this.status!==3||(this.taskComplete=new Promise((a,l)=>{this.v=a,this._=l})),this.status=1,this.o.requestUpdate();const d=++this.i;try{o=await this.t(t)}catch(a){s=a}if(this.i===d){if(o===Zo)this.status=0;else{if(s===void 0){try{(n=this.l)===null||n===void 0||n.call(this,o)}catch{}this.status=2,this.v(o)}else{try{(i=this.u)===null||i===void 0||i.call(this,s)}catch{}this.status=3,this._(s)}this.T=o,this.k=s}this.o.requestUpdate()}}get value(){return this.T}get error(){return this.k}render(t){var r,n,i,o;switch(this.status){case 0:return(r=t.initial)===null||r===void 0?void 0:r.call(t);case 1:return(n=t.pending)===null||n===void 0?void 0:n.call(t);case 2:return(i=t.complete)===null||i===void 0?void 0:i.call(t,this.value);case 3:return(o=t.error)===null||o===void 0?void 0:o.call(t,this.error);default:this.status}}m(t){const r=this.p;return this.p=t,Array.isArray(t)&&Array.isArray(r)?t.length===r.length&&t.some((n,i)=>Pe(n,r[i])):t!==r}}const Bn=class extends Event{constructor(e){super(Bn.eventName,{bubbles:!0,cancelable:!1,composed:!0});this.activeDay=e}};let De=Bn;De.eventName="active-day-event";var ts=Object.defineProperty,es=Object.getOwnPropertyDescriptor,rs=(e,t,r,n)=>{for(var i=n>1?void 0:n?es(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&ts(t,r,i),i};let Se=class extends M{constructor(){super();this.dishes=[],this.day="monday",this._apiTask=new Qo(this,()=>fetch("http://localhost:3000/day").then(e=>e.json()),()=>this.dishes),window.addEventListener(De.eventName,e=>{this.day=e.activeDay,console.log(this.day)})}static get styles(){return[Ln]}render(){return T`
      <app-header></app-header>
      <main>
        ${this._apiTask.render({pending:()=>T`<sl-spinner></sl-spinner>`,error:()=>T`error`,complete:e=>T`<table>
              ${e.map(t=>T`<tr>
                    <td>${t.name}</td>
                    <td>${t.dish_name}</td>
                  </tr>`)}
            </table>`})}
        <app-day-selection></app-day-selection>
      </main>
    `}};Se=rs([xt("app-discount")],Se);var ns=Object.freeze(Object.defineProperty({__proto__:null,get AppDiscount(){return Se}},Symbol.toStringTag,{value:"Module"})),is=Object.defineProperty,os=Object.getOwnPropertyDescriptor,Be=(e,t,r,n)=>{for(var i=n>1?void 0:n?os(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&is(t,r,i),i};let Vt=class extends M{constructor(){super();this.title="PWA Starter",this.enableBack=!1}static get styles(){return At`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
        padding-left: 16px;
        padding-top: 12px;

        position: fixed;
        left: env(titlebar-area-x, 0);
        top: env(titlebar-area-y, 0);
        height: env(titlebar-area-height, 50px);
        width: env(titlebar-area-width, 100%);
        -webkit-app-region: drag;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav a {
        margin-left: 10px;
      }

      #back-button-block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 12em;
      }

      @media(prefers-color-scheme: light) {
        header {
          color: black;
        }

        nav a {
          color: initial;
        }
      }
    `}render(){return T`
      <header>

        <div id="back-button-block">
          ${this.enableBack?T`<sl-button href="${"/discount-day/"}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};Be([Wt({type:String})],Vt.prototype,"title",2);Be([Wt({type:Boolean})],Vt.prototype,"enableBack",2);Vt=Be([xt("app-header")],Vt);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ss(e,t){if(e!==void 0){let r=0;for(const n of e)yield t(n,r++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ls=e=>(...t)=>({_$litDirective$:e,values:t});class ds{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=ls(class extends ds{constructor(e){var t;if(super(e),e.type!==as.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,n;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.nt.add(o);return this.render(t)}const i=e.element.classList;this.nt.forEach(o=>{o in t||(i.remove(o),this.nt.delete(o))});for(const o in t){const s=!!t[o];s===this.nt.has(o)||((n=this.st)===null||n===void 0?void 0:n.has(o))||(s?(i.add(o),this.nt.add(o)):(i.remove(o),this.nt.delete(o)))}return F}});var hs=Object.defineProperty,us=Object.getOwnPropertyDescriptor,Ie=(e,t,r,n)=>{for(var i=n>1?void 0:n?us(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&hs(t,r,i),i};let zt=class extends M{constructor(){super();this.todayWeekIndex=new Date(Date.now()).getDay(),this.weekDays=[{name:"monday",today:!0,weekIndex:1},{name:"tuesday",today:!1,weekIndex:2},{name:"wednesday",today:!1,weekIndex:3},{name:"thursday",today:!1,weekIndex:4},{name:"friday",today:!1,weekIndex:5},{name:"saturday",today:!1,weekIndex:6},{name:"sunday",today:!1,weekIndex:0}],this._setActiveDay(this.todayWeekIndex)}static get styles(){return[At`
        .today {
          color: red;
        }
      `]}_setActiveDay(e){this.weekDays=this.weekDays.map(t=>t.weekIndex===e?lt(at({},t),{today:!0}):lt(at({},t),{today:!1}))}render(){return T`<ul>
      ${ss(this.weekDays,(e,t)=>T`
          <li
            @click=${()=>{this._setActiveDay(e.weekIndex),window.dispatchEvent(new De(e.name))}}
            class=${cs({today:e.today})}
          >
            ${e.name}
          </li>
        `)}
    </ul>`}};Ie([Gr()],zt.prototype,"todayWeekIndex",2);Ie([Gr()],zt.prototype,"weekDays",2);zt=Ie([xt("app-day-selection")],zt);var ps=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,ms=(e,t,r,n)=>{for(var i=n>1?void 0:n?fs(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(i=(n?s(t,r,i):s(i))||i);return n&&i&&ps(t,r,i),i};let Fr=class extends M{static get styles(){return At`
      main {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}firstUpdated(){var t;new H((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:"/discount-day/",animate:!0,children:[{path:"",component:"app-discount"},{path:"discount",component:"app-discount",action:async()=>{await We(()=>Promise.resolve().then(function(){return ns}),void 0)}},{path:"about",component:"app-about",action:async()=>{await We(()=>import("./app-about.a95b7398.js"),[])}}]}])}render(){return T`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};Fr=ms([xt("app-index")],Fr);export{Ln as a,xt as e,At as i,M as s,T as y};
//# sourceMappingURL=index.4f93f34a.js.map
