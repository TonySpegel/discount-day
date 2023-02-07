var qn=Object.defineProperty,Kn=Object.defineProperties;var Yn=Object.getOwnPropertyDescriptors;var vi=Object.getOwnPropertySymbols;var Jn=Object.prototype.hasOwnProperty,Gn=Object.prototype.propertyIsEnumerable;var bi=(e,t,r)=>t in e?qn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ee=(e,t)=>{for(var r in t||(t={}))Jn.call(t,r)&&bi(e,r,t[r]);if(vi)for(var r of vi(t))Gn.call(t,r)&&bi(e,r,t[r]);return e},re=(e,t)=>Kn(e,Yn(t));const Xn=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};Xn();const Zn="modulepreload",yi={},Qn="/discount-day/",ur=function(t,r){return!r||r.length===0?t():Promise.all(r.map(i=>{if(i=`${Qn}${i}`,i in yi)return;yi[i]=!0;const o=i.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":Zn,o||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),o)return new Promise((l,a)=>{s.addEventListener("load",l),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=window,ei=Oe.ShadowRoot&&(Oe.ShadyCSS===void 0||Oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ri=Symbol(),_i=new WeakMap;class Ro{constructor(t,r,i){if(this._$cssResult$=!0,i!==ri)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(ei&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=_i.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&_i.set(r,t))}return t}toString(){return this.cssText}}const ts=e=>new Ro(typeof e=="string"?e:e+"",void 0,ri),Lt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,o,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new Ro(r,e,ri)},es=(e,t)=>{ei?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),o=Oe.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,e.appendChild(i)})},wi=ei?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return ts(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pr;const Ue=window,$i=Ue.trustedTypes,rs=$i?$i.emptyScript:"",xi=Ue.reactiveElementPolyfillSupport,Dr={toAttribute(e,t){switch(t){case Boolean:e=e?rs:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ii=(e,t)=>t!==e&&(t==t||e==e),fr={attribute:!0,type:String,converter:Dr,reflect:!1,hasChanged:ii};class Mt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,i)=>{const o=this._$Ep(i,r);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,r=fr){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(o){const n=this[t];this[r]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||fr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of i)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)r.unshift(wi(o))}else t!==void 0&&r.push(wi(t));return r}static _$Ep(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,i;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return es(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostConnected)===null||i===void 0?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostDisconnected)===null||i===void 0?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EO(t,r,i=fr){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const s=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Dr).toAttribute(r,i.type);this._$El=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,r){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const s=o.getPropertyOptions(n),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Dr;this._$El=n,this[n]=l.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ii)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(i)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,i)=>this._$EO(i,this[i],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Mt.finalized=!0,Mt.elementProperties=new Map,Mt.elementStyles=[],Mt.shadowRootOptions={mode:"open"},xi==null||xi({ReactiveElement:Mt}),((pr=Ue.reactiveElementVersions)!==null&&pr!==void 0?pr:Ue.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mr;const ze=window,Vt=ze.trustedTypes,Ai=Vt?Vt.createPolicy("lit-html",{createHTML:e=>e}):void 0,pt=`lit$${(Math.random()+"").slice(9)}$`,Do="?"+pt,is=`<${Do}>`,Wt=document,fe=(e="")=>Wt.createComment(e),me=e=>e===null||typeof e!="object"&&typeof e!="function",No=Array.isArray,os=e=>No(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ei=/-->/g,Si=/>/g,xt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ci=/'/g,ki=/"/g,Mo=/^(?:script|style|textarea|title)$/i,ns=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),N=ns(1),Pt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Pi=new WeakMap,jt=Wt.createTreeWalker(Wt,129,null,!1),ss=(e,t)=>{const r=e.length-1,i=[];let o,n=t===2?"<svg>":"",s=ie;for(let a=0;a<r;a++){const c=e[a];let u,d,h=-1,p=0;for(;p<c.length&&(s.lastIndex=p,d=s.exec(c),d!==null);)p=s.lastIndex,s===ie?d[1]==="!--"?s=Ei:d[1]!==void 0?s=Si:d[2]!==void 0?(Mo.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=xt):d[3]!==void 0&&(s=xt):s===xt?d[0]===">"?(s=o!=null?o:ie,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?xt:d[3]==='"'?ki:Ci):s===ki||s===Ci?s=xt:s===Ei||s===Si?s=ie:(s=xt,o=void 0);const g=s===xt&&e[a+1].startsWith("/>")?" ":"";n+=s===ie?c+is:h>=0?(i.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+pt+g):c+pt+(h===-2?(i.push(void 0),a):g)}const l=n+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ai!==void 0?Ai.createHTML(l):l,i]};class ge{constructor({strings:t,_$litType$:r},i){let o;this.parts=[];let n=0,s=0;const l=t.length-1,a=this.parts,[c,u]=ss(t,r);if(this.el=ge.createElement(c,i),jt.currentNode=this.el.content,r===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(o=jt.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const h of o.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(pt)){const p=u[s++];if(d.push(h),p!==void 0){const g=o.getAttribute(p.toLowerCase()+"$lit$").split(pt),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:v[2],strings:g,ctor:v[1]==="."?ls:v[1]==="?"?ds:v[1]==="@"?hs:rr})}else a.push({type:6,index:n})}for(const h of d)o.removeAttribute(h)}if(Mo.test(o.tagName)){const d=o.textContent.split(pt),h=d.length-1;if(h>0){o.textContent=Vt?Vt.emptyScript:"";for(let p=0;p<h;p++)o.append(d[p],fe()),jt.nextNode(),a.push({type:2,index:++n});o.append(d[h],fe())}}}else if(o.nodeType===8)if(o.data===Do)a.push({type:2,index:n});else{let d=-1;for(;(d=o.data.indexOf(pt,d+1))!==-1;)a.push({type:7,index:n}),d+=pt.length-1}n++}}static createElement(t,r){const i=Wt.createElement("template");return i.innerHTML=t,i}}function qt(e,t,r=e,i){var o,n,s,l;if(t===Pt)return t;let a=i!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[i]:r._$Cl;const c=me(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),c===void 0?a=void 0:(a=new c(e),a._$AT(e,r,i)),i!==void 0?((s=(l=r)._$Co)!==null&&s!==void 0?s:l._$Co=[])[i]=a:r._$Cl=a),a!==void 0&&(t=qt(e,a._$AS(e,t.values),a,i)),t}class as{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:i},parts:o}=this._$AD,n=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Wt).importNode(i,!0);jt.currentNode=n;let s=jt.nextNode(),l=0,a=0,c=o[0];for(;c!==void 0;){if(l===c.index){let u;c.type===2?u=new Ae(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new us(s,this,t)),this.u.push(u),c=o[++a]}l!==(c==null?void 0:c.index)&&(s=jt.nextNode(),l++)}return n}p(t){let r=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Ae{constructor(t,r,i,o){var n;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=o,this._$Cm=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=qt(this,t,r),me(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==Pt&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):os(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==T&&me(this._$AH)?this._$AA.nextSibling.data=t:this.T(Wt.createTextNode(t)),this._$AH=t}$(t){var r;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ge.createElement(o.h,this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===n)this._$AH.p(i);else{const s=new as(n,this),l=s.v(this.options);s.p(i),this.T(l),this._$AH=s}}_$AC(t){let r=Pi.get(t.strings);return r===void 0&&Pi.set(t.strings,r=new ge(t)),r}k(t){No(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,o=0;for(const n of t)o===r.length?r.push(i=new Ae(this.O(fe()),this.O(fe()),this,this.options)):i=r[o],i._$AI(n),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class rr{constructor(t,r,i,o,n){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,i,o){const n=this.strings;let s=!1;if(n===void 0)t=qt(this,t,r,0),s=!me(t)||t!==this._$AH&&t!==Pt,s&&(this._$AH=t);else{const l=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=qt(this,l[i+a],r,a),c===Pt&&(c=this._$AH[a]),s||(s=!me(c)||c!==this._$AH[a]),c===T?t=T:t!==T&&(t+=(c!=null?c:"")+n[a+1]),this._$AH[a]=c}s&&!o&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class ls extends rr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const cs=Vt?Vt.emptyScript:"";class ds extends rr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,cs):this.element.removeAttribute(this.name)}}class hs extends rr{constructor(t,r,i,o,n){super(t,r,i,o,n),this.type=5}_$AI(t,r=this){var i;if((t=(i=qt(this,t,r,0))!==null&&i!==void 0?i:T)===Pt)return;const o=this._$AH,n=t===T&&o!==T||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==T&&(o===T||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,i;typeof this._$AH=="function"?this._$AH.call((i=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class us{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){qt(this,t)}}const Ti=ze.litHtmlPolyfillSupport;Ti==null||Ti(ge,Ae),((mr=ze.litHtmlVersions)!==null&&mr!==void 0?mr:ze.litHtmlVersions=[]).push("2.6.1");const ps=(e,t,r)=>{var i,o;const n=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let s=n._$litPart$;if(s===void 0){const l=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=s=new Ae(t.insertBefore(fe(),l),l,void 0,r!=null?r:{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gr,vr;class et extends Mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const i=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=i.firstChild),i}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=ps(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Pt}}et.finalized=!0,et._$litElement$=!0,(gr=globalThis.litElementHydrateSupport)===null||gr===void 0||gr.call(globalThis,{LitElement:et});const Oi=globalThis.litElementPolyfillSupport;Oi==null||Oi({LitElement:et});((vr=globalThis.litElementVersions)!==null&&vr!==void 0?vr:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fs=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?re(ee({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function wt(e){return(t,r)=>r!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(e,t,r):fs(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Uo(e){return wt(re(ee({},e),{state:!0}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var br;((br=window.HTMLSlotElement)===null||br===void 0?void 0:br.prototype.assignedElements)!=null;function Be(e){return e=e||[],Array.isArray(e)?e:[e]}function J(e){return`[Vaadin.Router] ${e}`}function ms(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Ie="module",je="nomodule",Nr=[Ie,je];function Li(e){if(!e.match(/.+\.[m]?js$/))throw new Error(J(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function zo(e){if(!e||!Y(e.path))throw new Error(J('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!Tt(e.action)&&!Array.isArray(e.children)&&!Tt(e.children)&&!He(t)&&!r.some(i=>Y(e[i])))throw new Error(J(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if(Y(t))Li(t);else if(Nr.some(i=>i in t))Nr.forEach(i=>i in t&&Li(t[i]));else throw new Error(J('Expected route bundle to include either "'+je+'" or "'+Ie+'" keys, or both'));e.redirect&&["bundle","component"].forEach(i=>{i in e&&console.warn(J(`Route config "${e.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function Ri(e){Be(e).forEach(t=>zo(t))}function Di(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===Ie?r.setAttribute("type",Ie):t===je&&r.setAttribute(je,""),r.async=!0),new Promise((i,o)=>{r.onreadystatechange=r.onload=n=>{r.__dynamicImportLoaded=!0,i(n)},r.onerror=n=>{r.parentNode&&r.parentNode.removeChild(r),o(n)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&i()})}function gs(e){return Y(e)?Di(e):Promise.race(Nr.filter(t=>t in e).map(t=>Di(e[t],t)))}function le(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function He(e){return typeof e=="object"&&!!e}function Tt(e){return typeof e=="function"}function Y(e){return typeof e=="string"}function Bo(e){const t=new Error(J(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const zt=new class{};function vs(e){const t=e.port,r=e.protocol,n=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${n}`}function Ni(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let l=0;l<r.length;l++){const a=r[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||vs(t))!==window.location.origin)return;const{pathname:o,search:n,hash:s}=t;le("go",{pathname:o,search:n,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const bs={activate(){window.document.addEventListener("click",Ni)},inactivate(){window.document.removeEventListener("click",Ni)}},ys=/Trident/.test(navigator.userAgent);ys&&!Tt(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function Mi(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:i}=window.location;le("go",{pathname:t,search:r,hash:i})}const _s={activate(){window.addEventListener("popstate",Mi)},inactivate(){window.removeEventListener("popstate",Mi)}};var Zt=Wo,ws=oi,$s=Ss,xs=Ho,As=Vo,Io="/",jo="./",Es=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function oi(e,t){for(var r=[],i=0,o=0,n="",s=t&&t.delimiter||Io,l=t&&t.delimiters||jo,a=!1,c;(c=Es.exec(e))!==null;){var u=c[0],d=c[1],h=c.index;if(n+=e.slice(o,h),o=h+u.length,d){n+=d[1],a=!0;continue}var p="",g=e[o],v=c[2],y=c[3],b=c[4],w=c[5];if(!a&&n.length){var _=n.length-1;l.indexOf(n[_])>-1&&(p=n[_],n=n.slice(0,_))}n&&(r.push(n),n="",a=!1);var O=p!==""&&g!==void 0&&g!==p,L=w==="+"||w==="*",ht=w==="?"||w==="*",R=p||s,q=y||b;r.push({name:v||i++,prefix:p,delimiter:R,optional:ht,repeat:L,partial:O,pattern:q?Cs(q):"[^"+ut(R)+"]+?"})}return(n||o<e.length)&&r.push(n+e.substr(o)),r}function Ss(e,t){return Ho(oi(e,t))}function Ho(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(i,o){for(var n="",s=o&&o.encode||encodeURIComponent,l=0;l<e.length;l++){var a=e[l];if(typeof a=="string"){n+=a;continue}var c=i?i[a.name]:void 0,u;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(u=s(c[d],a),!t[l].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');n+=(d===0?a.prefix:a.delimiter)+u}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(u=s(String(c),a),!t[l].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');n+=a.prefix+u;continue}if(a.optional){a.partial&&(n+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return n}}function ut(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Cs(e){return e.replace(/([=!:$/()])/g,"\\$1")}function Fo(e){return e&&e.sensitive?"":"i"}function ks(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function Ps(e,t,r){for(var i=[],o=0;o<e.length;o++)i.push(Wo(e[o],t,r).source);return new RegExp("(?:"+i.join("|")+")",Fo(r))}function Ts(e,t,r){return Vo(oi(e,r),t,r)}function Vo(e,t,r){r=r||{};for(var i=r.strict,o=r.start!==!1,n=r.end!==!1,s=ut(r.delimiter||Io),l=r.delimiters||jo,a=[].concat(r.endsWith||[]).map(ut).concat("$").join("|"),c=o?"^":"",u=e.length===0,d=0;d<e.length;d++){var h=e[d];if(typeof h=="string")c+=ut(h),u=d===e.length-1&&l.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+ut(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?c+=ut(h.prefix)+"("+p+")?":c+="(?:"+ut(h.prefix)+"("+p+"))?":c+=ut(h.prefix)+"("+p+")"}}return n?(i||(c+="(?:"+s+")?"),c+=a==="$"?"$":"(?="+a+")"):(i||(c+="(?:"+s+"(?="+a+"))?"),u||(c+="(?="+s+"|"+a+")")),new RegExp(c,Fo(r))}function Wo(e,t,r){return e instanceof RegExp?ks(e,t):Array.isArray(e)?Ps(e,t,r):Ts(e,t,r)}Zt.parse=ws;Zt.compile=$s;Zt.tokensToFunction=xs;Zt.tokensToRegExp=As;const{hasOwnProperty:Os}=Object.prototype,Mr=new Map;Mr.set("|false",{keys:[],pattern:/(?:)/});function Ui(e){try{return decodeURIComponent(e)}catch{return e}}function Ls(e,t,r,i,o){r=!!r;const n=`${e}|${r}`;let s=Mr.get(n);if(!s){const c=[];s={keys:c,pattern:Zt(e,c,{end:r,strict:e===""})},Mr.set(n,s)}const l=s.pattern.exec(t);if(!l)return null;const a=Object.assign({},o);for(let c=1;c<l.length;c++){const u=s.keys[c-1],d=u.name,h=l[c];(h!==void 0||!Os.call(a,d))&&(u.repeat?a[d]=h?h.split(u.delimiter).map(Ui):[]:a[d]=h&&Ui(h))}return{path:l[0],keys:(i||[]).concat(s.keys),params:a}}function qo(e,t,r,i,o){let n,s,l=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(c){if(e===c)return{done:!0};const u=e.__children=e.__children||e.children;if(!n&&(n=Ls(a,t,!u,i,o),n))return{done:!1,value:{route:e,keys:n.keys,params:n.params,path:n.path}};if(n&&u)for(;l<u.length;){if(!s){const h=u[l];h.parent=e;let p=n.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=qo(h,t.substr(p),r,n.keys,n.params)}const d=s.next(c);if(!d.done)return{done:!1,value:d.value};s=null,l++}return{done:!0}}}}function Rs(e){if(Tt(e.route.action))return e.route.action(e)}function Ds(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function Ns(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function Ms(e,t){const{route:r,path:i}=t;if(r&&!r.__synthetic){const o={path:i,route:r};if(!e.chain)e.chain=[];else if(r.parent){let n=e.chain.length;for(;n--&&e.chain[n].route&&e.chain[n].route!==r.parent;)e.chain.pop()}e.chain.push(o)}}class ve{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||Rs,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){Ri(t);const r=[...Be(t)];this.root.__children=r}addRoutes(t){return Ri(t),this.root.__children.push(...Be(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,Y(t)?{pathname:t}:t),i=qo(this.root,this.__normalizePathname(r.pathname),this.baseUrl),o=this.resolveRoute;let n=null,s=null,l=r;function a(c,u=n.value.route,d){const h=d===null&&n.value.route;return n=s||i.next(h),s=null,!c&&(n.done||!Ds(u,n.value.route))?(s=n,Promise.resolve(zt)):n.done?Promise.reject(Bo(r)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},r,n.value),Ms(l,n.value),Promise.resolve(o(l)).then(p=>p!=null&&p!==zt?(l.result=p.result||p,l):a(c,u,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const u=Ns(l);if(c?console.warn(u):c=new Error(u),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,i=this.constructor.__createUrl(t,r).href;if(i.slice(0,r.length)===r)return i.slice(r.length)}}ve.pathToRegexp=Zt;const{pathToRegexp:zi}=ve,Bi=new Map;function Ko(e,t,r){const i=t.name||t.component;if(i&&(e.has(i)?e.get(i).push(t):e.set(i,[t])),Array.isArray(r))for(let o=0;o<r.length;o++){const n=r[o];n.parent=t,Ko(e,n,n.__children||n.children)}}function Ii(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function ji(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Us(e,t={}){if(!(e instanceof ve))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(i,o)=>{let n=Ii(r,i);if(!n&&(r.clear(),Ko(r,e.root,e.root.__children),n=Ii(r,i),!n))throw new Error(`Route "${i}" not found`);let s=Bi.get(n.fullPath);if(!s){let a=ji(n),c=n.parent;for(;c;){const p=ji(c);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const u=zi.parse(a),d=zi.tokensToFunction(u),h=Object.create(null);for(let p=0;p<u.length;p++)Y(u[p])||(h[u[p].name]=!0);s={toPath:d,keys:h},Bi.set(a,s),n.fullPath=a}let l=s.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const a={},c=Object.keys(o);for(let d=0;d<c.length;d++){const h=c[d];s.keys[h]||(a[h]=o[h])}const u=t.stringifyQueryParams(a);u&&(l+=u.charAt(0)==="?"?u:`?${u}`)}return l}}let Hi=[];function zs(e){Hi.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),Hi=e}const Bs=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Is=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function Fi(e,t){return e.classList.add(t),new Promise(r=>{if(Bs(e)){const i=e.getBoundingClientRect(),o=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${o}`),Is(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const js=256;function yr(e){return e!=null}function Hs(e){const t=Object.assign({},e);return delete t.next,t}function K({pathname:e="",search:t="",hash:r="",chain:i=[],params:o={},redirectFrom:n,resolver:s},l){const a=i.map(c=>c.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:l||a.length&&a[a.length-1]||null,params:o,redirectFrom:n,getUrl:(c={})=>Re(gt.pathToRegexp.compile(Yo(a))(Object.assign({},o,c)),s)}}function Vi(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function Fs(e,t){t.location=K(e);const r=e.chain.map(i=>i.route).indexOf(e.route);return e.chain[r].element=t,t}function Le(e,t,r){if(Tt(e))return e.apply(r,t)}function Wi(e,t,r){return i=>{if(i&&(i.cancel||i.redirect))return i;if(r)return Le(r[e],t,r)}}function Vs(e,t){if(!Array.isArray(e)&&!He(e))throw new Error(J(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=Be(e);for(let i=0;i<r.length;i++)zo(r[i]),t.__children.push(r[i])}function Pe(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function Re(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function Yo(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class gt extends ve{constructor(t,r){const i=document.head.querySelector("base"),o=i&&i.getAttribute("href");super([],Object.assign({baseUrl:o&&ve.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},r));this.resolveRoute=s=>this.__resolveRoute(s);const n=gt.NavigationTrigger;gt.setTriggers.apply(gt,Object.keys(n).map(s=>n[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=K({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let i=Promise.resolve();Tt(r.children)&&(i=i.then(()=>r.children(Hs(t))).then(n=>{!yr(n)&&!Tt(r.children)&&(n=r.children),Vs(n,r)}));const o={redirect:n=>Vi(t,n),component:n=>{const s=document.createElement(n);return this.__createdByRouter.set(s,!0),s}};return i.then(()=>{if(this.__isLatestRender(t))return Le(r.action,[t,o],r)}).then(n=>{if(yr(n)&&(n instanceof HTMLElement||n.redirect||n===zt))return n;if(Y(r.redirect))return o.redirect(r.redirect);if(r.bundle)return gs(r.bundle).then(()=>{},()=>{throw new Error(J(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(n=>{if(yr(n))return n;if(Y(r.component))return o.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const i=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},Y(t)?{pathname:t}:t,{__renderId:i});return this.ready=this.resolve(o).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const s=this.__previousContext;if(n===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=K(n),r&&this.__updateBrowserHistory(n,i===1),le("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,s),this.__previousContext=n,this.location;this.__addAppearingContent(n,s);const l=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,s),l.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(i===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(o),Pe(this.__outlet&&this.__outlet.children),this.location=K(Object.assign(o,{resolver:this})),le("error",Object.assign({router:this,error:n},o)),n}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(i=>{const n=i!==r?i:t,l=Re(Yo(i.chain),i.resolver)===i.pathname,a=(c,u=c.route,d)=>c.next(void 0,u,d).then(h=>h===null||h===zt?l?c:u.parent!==null?a(c,u.parent,h):h:h);return a(i).then(c=>{if(c===null||c===zt)throw Bo(n);return c&&c!==zt&&c!==i?this.__fullyResolveChain(n,c):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?(Fs(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(J(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${ms(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},i=r.chain||[],o=t.chain;let n=Promise.resolve();const s=()=>({cancel:!0}),l=a=>Vi(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,o.length)&&!(i[a].route!==o[a].route||i[a].path!==o[a].path&&i[a].element!==o[a].element||!this.__isReusableElement(i[a].element,o[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=o.length===i.length&&t.__divergedChainIndex==o.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=o.length-1;a>=0;a--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:s},i[a]);for(let a=0;a<o.length;a++)n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:s,redirect:l},o[a]),i[a].element.location=K(t,i[a].route)}else for(let a=i.length-1;a>=t.__divergedChainIndex;a--)n=this.__runOnBeforeLeaveCallbacks(n,t,{prevent:s},i[a])}if(!t.__skipAttach)for(let a=0;a<o.length;a++)a<t.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=K(t,i[a].route)):(n=this.__runOnBeforeEnterCallbacks(n,t,{prevent:s,redirect:l},o[a]),o[a].element&&(o[a].element.location=K(t,o[a].route)));return n.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,i,o){const n=K(r);return t.then(s=>{if(this.__isLatestRender(r))return Wi("onBeforeLeave",[n,i,this],o.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,i,o){const n=K(r,o.route);return t.then(s=>{if(this.__isLatestRender(r))return Wi("onBeforeEnter",[n,i,this],o.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,i){if(r>js)throw new Error(J(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:i})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(J(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:i=""},o){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==i){const n=o?"replaceState":"pushState";window.history[n](null,document.title,t+r+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let i=this.__outlet;for(let o=0;o<t.__divergedChainIndex;o++){const n=r&&r.chain[o].element;if(n)if(n.parentNode===i)t.chain[o].element=n,i=n;else break}return i}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(n=>this.__addedByRouter.get(n)&&n!==t.result);let o=i;for(let n=t.__divergedChainIndex;n<t.chain.length;n++){const s=t.chain[n].element;s&&(o.appendChild(s),this.__addedByRouter.set(s,!0),o===i&&this.__appearingContent.push(s),o=s)}}__removeDisappearingContent(){this.__disappearingContent&&Pe(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Pe(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(!!r)for(let i=r.chain.length-1;i>=t.__divergedChainIndex&&this.__isLatestRender(t);i--){const o=r.chain[i].element;if(!!o)try{const n=K(t);Le(o.onAfterLeave,[n,{},r.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&Pe(o.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const i=t.chain[r].element||{},o=K(t,t.chain[r].route);Le(i.onAfterEnter,[o,{},t.resolver],i)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],o=[],n=t.chain;let s;for(let l=n.length;l>0;l--)if(n[l-1].route.animate){s=n[l-1].route.animate;break}if(r&&i&&s){const l=He(s)&&s.leave||"leaving",a=He(s)&&s.enter||"entering";o.push(Fi(r,l)),o.push(Fi(i,a))}return Promise.all(o).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:i,hash:o}=t?t.detail:window.location;Y(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:i,hash:o},!0))}static setTriggers(...t){zs(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=Us(this)),Re(this.__urlForName(t,r),this)}urlForPath(t,r){return Re(gt.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:i,hash:o}=Y(t)?this.__createUrl(t,"http://a"):t;return le("go",{pathname:r,search:i,hash:o})}}const Ws=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,De=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function qs(){function e(){return!0}return Jo(e)}function Ks(){try{return Ys()?!0:Js()?De?!Gs():!qs():!1}catch{return!1}}function Ys(){return localStorage.getItem("vaadin.developmentmode.force")}function Js(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Gs(){return!!(De&&Object.keys(De).map(t=>De[t]).filter(t=>t.productionMode).length>0)}function Jo(e,t){if(typeof e!="function")return;const r=Ws.exec(e.toString());if(r)try{e=new Function(r[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return e(t)}window.Vaadin=window.Vaadin||{};const qi=function(e,t){if(window.Vaadin.developmentMode)return Jo(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ks());function Xs(){}const Zs=function(){if(typeof qi=="function")return qi(Xs)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Zs();gt.NavigationTrigger={POPSTATE:_s,CLICK:bs};/**
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
 */const Ki=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,Ur=(e,t,r=null)=>{for(;t!==r;){const i=t.nextSibling;e.removeChild(t),t=i}},lt=`{{lit-${String(Math.random()).slice(2)}}}`,Go=`<!--${lt}-->`,Yi=new RegExp(`${lt}|${Go}`);class Xo{constructor(t,r){this.parts=[],this.element=r;const i=[],o=[],n=document.createTreeWalker(r.content,133,null,!1);let s=0,l=-1,a=0;const{strings:c,values:{length:u}}=t;for(;a<u;){const d=n.nextNode();if(d!==null){if(l++,d.nodeType===1){if(d.hasAttributes()){const h=d.attributes,{length:p}=h;let g=0;for(let v=0;v<p;v++)Ji(h[v].name,"$lit$")&&g++;for(;g-- >0;){const v=c[a],y=zr.exec(v)[2],b=y.toLowerCase()+"$lit$",w=d.getAttribute(b);d.removeAttribute(b);const _=w.split(Yi);this.parts.push({type:"attribute",index:l,name:y,strings:_}),a+=_.length-1}}d.tagName==="TEMPLATE"&&(o.push(d),n.currentNode=d.content)}else if(d.nodeType===3){const h=d.data;if(h.indexOf(lt)>=0){const p=d.parentNode,g=h.split(Yi),v=g.length-1;for(let y=0;y<v;y++){let b,w=g[y];if(w==="")b=ft();else{const _=zr.exec(w);_!==null&&Ji(_[2],"$lit$")&&(w=w.slice(0,_.index)+_[1]+_[2].slice(0,-5)+_[3]),b=document.createTextNode(w)}p.insertBefore(b,d),this.parts.push({type:"node",index:++l})}g[v]===""?(p.insertBefore(ft(),d),i.push(d)):d.data=g[v],a+=v}}else if(d.nodeType===8)if(d.data===lt){const h=d.parentNode;d.previousSibling!==null&&l!==s||(l++,h.insertBefore(ft(),d)),s=l,this.parts.push({type:"node",index:l}),d.nextSibling===null?d.data="":(i.push(d),l--),a++}else{let h=-1;for(;(h=d.data.indexOf(lt,h+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=o.pop()}for(const d of i)d.parentNode.removeChild(d)}}const Ji=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},Zo=e=>e.index!==-1,ft=()=>document.createComment(""),zr=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Gi(e,t){const{element:{content:r},parts:i}=e,o=document.createTreeWalker(r,133,null,!1);let n=ce(i),s=i[n],l=-1,a=0;const c=[];let u=null;for(;o.nextNode();){l++;const d=o.currentNode;for(d.previousSibling===u&&(u=null),t.has(d)&&(c.push(d),u===null&&(u=d)),u!==null&&a++;s!==void 0&&s.index===l;)s.index=u!==null?-1:s.index-a,n=ce(i,n),s=i[n]}c.forEach(d=>d.parentNode.removeChild(d))}const Qs=e=>{let t=e.nodeType===11?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},ce=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const i=e[r];if(Zo(i))return r}return-1};/**
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
 */const ta=new WeakMap,be=e=>typeof e=="function"&&ta.has(e),G={},Xi={};/**
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
 */class Br{constructor(t,r,i){this.__parts=[],this.template=t,this.processor=r,this.options=i}update(t){let r=0;for(const i of this.__parts)i!==void 0&&i.setValue(t[r]),r++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const t=Ki?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],i=this.template.parts,o=document.createTreeWalker(t,133,null,!1);let n,s=0,l=0,a=o.nextNode();for(;s<i.length;)if(n=i[s],Zo(n)){for(;l<n.index;)l++,a.nodeName==="TEMPLATE"&&(r.push(a),o.currentNode=a.content),(a=o.nextNode())===null&&(o.currentNode=r.pop(),a=o.nextNode());if(n.type==="node"){const c=this.processor.handleTextExpression(this.options);c.insertAfterNode(a.previousSibling),this.__parts.push(c)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));s++}else this.__parts.push(void 0),s++;return Ki&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
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
 */const ea=` ${lt} `;class Qo{constructor(t,r,i,o){this.strings=t,this.values=r,this.type=i,this.processor=o}getHTML(){const t=this.strings.length-1;let r="",i=!1;for(let o=0;o<t;o++){const n=this.strings[o],s=n.lastIndexOf("<!--");i=(s>-1||i)&&n.indexOf("-->",s+1)===-1;const l=zr.exec(n);r+=l===null?n+(i?ea:Go):n.substr(0,l.index)+l[1]+l[2]+"$lit$"+l[3]+lt}return r+=this.strings[t],r}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}/**
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
 */const ni=e=>e===null||!(typeof e=="object"||typeof e=="function"),tn=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class en{constructor(t,r,i){this.dirty=!0,this.element=t,this.name=r,this.strings=i,this.parts=[];for(let o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}_createPart(){return new rn(this)}_getValue(){const t=this.strings,r=t.length-1;let i="";for(let o=0;o<r;o++){i+=t[o];const n=this.parts[o];if(n!==void 0){const s=n.value;if(ni(s)||!tn(s))i+=typeof s=="string"?s:String(s);else for(const l of s)i+=typeof l=="string"?l:String(l)}}return i+=t[r],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class rn{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===G||ni(t)&&t===this.value||(this.value=t,be(t)||(this.committer.dirty=!0))}commit(){for(;be(this.value);){const t=this.value;this.value=G,t(this)}this.value!==G&&this.committer.commit()}}class ir{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(ft()),this.endNode=t.appendChild(ft())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=ft()),t.__insert(this.endNode=ft())}insertAfterPart(t){t.__insert(this.startNode=ft()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;be(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=G,r(this)}const t=this.__pendingValue;t!==G&&(ni(t)?t!==this.value&&this.__commitText(t):t instanceof Qo?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):tn(t)?this.__commitIterable(t):t===Xi?(this.value=Xi,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const r=this.startNode.nextSibling,i=typeof(t=t==null?"":t)=="string"?t:String(t);r===this.endNode.previousSibling&&r.nodeType===3?r.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const r=this.options.templateFactory(t);if(this.value instanceof Br&&this.value.template===r)this.value.update(t.values);else{const i=new Br(r,t.processor,this.options),o=i._clone();i.update(t.values),this.__commitNode(o),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const r=this.value;let i,o=0;for(const n of t)i=r[o],i===void 0&&(i=new ir(this.options),r.push(i),o===0?i.appendIntoPart(this):i.insertAfterPart(r[o-1])),i.setValue(n),i.commit(),o++;o<r.length&&(r.length=o,this.clear(i&&i.endNode))}clear(t=this.startNode){Ur(this.startNode.parentNode,t.nextSibling,this.endNode)}}class ra{constructor(t,r,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;be(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=G,r(this)}if(this.__pendingValue===G)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=G}}class ia extends en{constructor(t,r,i){super(t,r,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new oa(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class oa extends rn{}let on=!1;(()=>{try{const e={get capture(){return on=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{}})();class na{constructor(t,r,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=o=>this.handleEvent(o)}setValue(t){this.__pendingValue=t}commit(){for(;be(this.__pendingValue);){const n=this.__pendingValue;this.__pendingValue=G,n(this)}if(this.__pendingValue===G)return;const t=this.__pendingValue,r=this.value,i=t==null||r!=null&&(t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive),o=t!=null&&(r==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=sa(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=G}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const sa=e=>e&&(on?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function aa(e){let t=ye.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},ye.set(e.type,t));let r=t.stringsArray.get(e.strings);if(r!==void 0)return r;const i=e.strings.join(lt);return r=t.keyString.get(i),r===void 0&&(r=new Xo(e,e.getTemplateElement()),t.keyString.set(i,r)),t.stringsArray.set(e.strings,r),r}const ye=new Map,Nt=new WeakMap;/**
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
 */const la=new class{handleAttributeExpressions(e,t,r,i){const o=t[0];return o==="."?new ia(e,t.slice(1),r).parts:o==="@"?[new na(e,t.slice(1),i.eventContext)]:o==="?"?[new ra(e,t.slice(1),r)]:new en(e,t,r).parts}handleTextExpression(e){return new ir(e)}};/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const H=(e,...t)=>new Qo(e,t,"html",la),nn=(e,t)=>`${e}--${t}`;let Fe=!0;window.ShadyCSS===void 0?Fe=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Fe=!1);const ca=e=>t=>{const r=nn(t.type,e);let i=ye.get(r);i===void 0&&(i={stringsArray:new WeakMap,keyString:new Map},ye.set(r,i));let o=i.stringsArray.get(t.strings);if(o!==void 0)return o;const n=t.strings.join(lt);if(o=i.keyString.get(n),o===void 0){const s=t.getTemplateElement();Fe&&window.ShadyCSS.prepareTemplateDom(s,e),o=new Xo(t,s),i.keyString.set(n,o)}return i.stringsArray.set(t.strings,o),o},da=["html","svg"],sn=new Set,ha=(e,t,r)=>{sn.add(e);const i=r?r.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:n}=o;if(n===0)return void window.ShadyCSS.prepareTemplateStyles(i,e);const s=document.createElement("style");for(let c=0;c<n;c++){const u=o[c];u.parentNode.removeChild(u),s.textContent+=u.textContent}(c=>{da.forEach(u=>{const d=ye.get(nn(u,c));d!==void 0&&d.keyString.forEach(h=>{const{element:{content:p}}=h,g=new Set;Array.from(p.querySelectorAll("style")).forEach(v=>{g.add(v)}),Gi(h,g)})})})(e);const l=i.content;r?function(c,u,d=null){const{element:{content:h},parts:p}=c;if(d==null)return void h.appendChild(u);const g=document.createTreeWalker(h,133,null,!1);let v=ce(p),y=0,b=-1;for(;g.nextNode();)for(b++,g.currentNode===d&&(y=Qs(u),d.parentNode.insertBefore(u,d));v!==-1&&p[v].index===b;){if(y>0){for(;v!==-1;)p[v].index+=y,v=ce(p,v);return}v=ce(p,v)}}(r,s,l.firstChild):l.insertBefore(s,l.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const a=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(r){l.insertBefore(s,l.firstChild);const c=new Set;c.add(s),Gi(r,c)}};window.JSCompiler_renameProperty=(e,t)=>e;const Ir={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},an=(e,t)=>t!==e&&(t==t||e==e),_r={attribute:!0,type:String,converter:Ir,reflect:!1,hasChanged:an};class ln extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((r,i)=>{const o=this._attributeNameForProperty(i,r);o!==void 0&&(this._attributeToPropertyMap.set(o,i),t.push(o))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((r,i)=>this._classProperties.set(i,r))}}static createProperty(t,r=_r){if(this._ensureClassProperties(),this._classProperties.set(t,r),r.noAccessor||this.prototype.hasOwnProperty(t))return;const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,r);o!==void 0&&Object.defineProperty(this.prototype,t,o)}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(o){const n=this[t];this[r]=o,this._requestUpdate(t,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||_r}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(const o of i)this.createProperty(o,r[o])}}static _attributeNameForProperty(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,r,i=an){return i(t,r)}static _propertyValueFromAttribute(t,r){const i=r.type,o=r.converter||Ir,n=typeof o=="function"?o:o.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,r){if(r.reflect===void 0)return;const i=r.type,o=r.converter;return(o&&o.toAttribute||Ir.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,r)=>{if(this.hasOwnProperty(r)){const i=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,r)=>this[r]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,r,i){r!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,r,i=_r){const o=this.constructor,n=o._attributeNameForProperty(t,i);if(n!==void 0){const s=o._propertyValueToAttribute(r,i);if(s===void 0)return;this._updateState=8|this._updateState,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._updateState=-9&this._updateState}}_attributeToProperty(t,r){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(t);if(o!==void 0){const n=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(r,n),this._updateState=-17&this._updateState}}_requestUpdate(t,r){let i=!0;if(t!==void 0){const o=this.constructor,n=o.getPropertyOptions(t);o._valueHasChanged(this[t],r,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,r),n.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,r){return this._requestUpdate(t,r),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const r=this._changedProperties;try{t=this.shouldUpdate(r),t?this.update(r):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,i)=>this._propertyToAttribute(i,this[i],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}ln.finalized=!0;/**
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
 */const ua=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function P(e){return(t,r)=>r!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(e,t,r):ua(e,t)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const cn="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dn=Symbol();class Zi{constructor(t,r){if(r!==dn)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(cn?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const pa=(e,...t)=>{const r=t.reduce((i,o,n)=>i+(s=>{if(s instanceof Zi)return s.cssText;if(typeof s=="number")return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[n+1],e[0]);return new Zi(r,dn)};/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Qi={};class jr extends ln{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(t===void 0)this._styles=[];else if(Array.isArray(t)){const r=(n,s)=>n.reduceRight((l,a)=>Array.isArray(a)?r(a,l):(l.add(a),l),s),i=r(t,new Set),o=[];i.forEach(n=>o.unshift(n)),this._styles=o}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;t.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?cn?this.renderRoot.adoptedStyleSheets=t.map(r=>r.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(r=>r.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){const r=this.render();super.update(t),r!==Qi&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{const o=document.createElement("style");o.textContent=i.cssText,this.renderRoot.appendChild(o)}))}render(){return Qi}}jr.finalized=!0,jr.render=(e,t,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");const i=r.scopeName,o=Nt.has(t),n=Fe&&t.nodeType===11&&!!t.host,s=n&&!sn.has(i),l=s?document.createDocumentFragment():t;if(((a,c,u)=>{let d=Nt.get(c);d===void 0&&(Ur(c,c.firstChild),Nt.set(c,d=new ir(Object.assign({templateFactory:aa},u))),d.appendInto(c)),d.setValue(a),d.commit()})(e,l,Object.assign({templateFactory:ca(i)},r)),s){const a=Nt.get(l);Nt.delete(l);const c=a.value instanceof Br?a.value.template:void 0;ha(i,l,c),Ur(t,t.firstChild),t.appendChild(l),Nt.set(t,a)}!o&&n&&window.ShadyCSS.styleElement(t.host)};var k=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let C=class extends jr{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancel()})}static get styles(){return pa`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch{console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch{return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),(await this.deferredprompt.userChoice).outcome==="accepted"){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let r=new CustomEvent("hide");this.dispatchEvent(r),e()})}render(){return H`${"standalone"in navigator&&navigator.standalone===!1||this.usecustom!==!0&&this.shouldShowInstall()&&this.installed===!1?H`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${this.openmodal===!0?H`<div id="installModalWrapper">${this.openmodal?H`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?H`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>H`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?H`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(e=>H`<div><img alt="App Screenshot" src="${e.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?H`<p id="iosText">${this.iosinstallinfotext}</p>`:H`<div id="buttonsContainer">${this.deferredprompt?H`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:H`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};var wr;k([P({type:String})],C.prototype,"manifestpath",void 0),k([P({type:String})],C.prototype,"iconpath",void 0),k([P({type:Object})],C.prototype,"manifestdata",void 0),k([P({type:Boolean})],C.prototype,"openmodal",void 0),k([P({type:Boolean})],C.prototype,"showopen",void 0),k([P({type:Boolean})],C.prototype,"isSupportingBrowser",void 0),k([P({type:Boolean})],C.prototype,"isIOS",void 0),k([P({type:Boolean})],C.prototype,"installed",void 0),k([P({type:Boolean})],C.prototype,"hasprompt",void 0),k([P({type:Boolean})],C.prototype,"usecustom",void 0),k([P({type:Array})],C.prototype,"relatedApps",void 0),k([P({type:String})],C.prototype,"explainer",void 0),k([P({type:String})],C.prototype,"featuresheader",void 0),k([P({type:String})],C.prototype,"descriptionheader",void 0),k([P({type:String})],C.prototype,"installbuttontext",void 0),k([P({type:String})],C.prototype,"cancelbuttontext",void 0),k([P({type:String})],C.prototype,"iosinstallinfotext",void 0),k([P()],C.prototype,"deferredprompt",void 0),C=k([(wr="pwa-install",e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(wr,e):((t,r)=>{const{kind:i,elements:o}=r;return{kind:i,elements:o,finisher(n){window.customElements.define(t,n)}}})(wr,e))],C);var Ne=window,si=Ne.ShadowRoot&&(Ne.ShadyCSS===void 0||Ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ai=Symbol(),to=new WeakMap,hn=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ai)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(si&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=to.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&to.set(t,e))}return e}toString(){return this.cssText}},fa=e=>new hn(typeof e=="string"?e:e+"",void 0,ai),tt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,o,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new hn(r,e,ai)},ma=(e,t)=>{si?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),o=Ne.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,e.appendChild(i)})},eo=si?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return fa(r)})(e):e,$r,Ve=window,ro=Ve.trustedTypes,ga=ro?ro.emptyScript:"",io=Ve.reactiveElementPolyfillSupport,Hr={toAttribute(e,t){switch(t){case Boolean:e=e?ga:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},un=(e,t)=>t!==e&&(t==t||e==e),xr={attribute:!0,type:String,converter:Hr,reflect:!1,hasChanged:un},Ut=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=xr){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||xr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(eo(i))}else e!==void 0&&t.push(eo(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ma(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=xr){var i;const o=this.constructor._$Ep(e,r);if(o!==void 0&&r.reflect===!0){const n=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:Hr).toAttribute(t,r.type);this._$El=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,o=i._$Ev.get(e);if(o!==void 0&&this._$El!==o){const n=i.getPropertyOptions(o),s=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?n.converter:Hr;this._$El=o,this[o]=s.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||un)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,o)=>this[o]=i),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ut.finalized=!0,Ut.elementProperties=new Map,Ut.elementStyles=[],Ut.shadowRootOptions={mode:"open"},io==null||io({ReactiveElement:Ut}),(($r=Ve.reactiveElementVersions)!==null&&$r!==void 0?$r:Ve.reactiveElementVersions=[]).push("1.6.1");var Ar,We=window,Kt=We.trustedTypes,oo=Kt?Kt.createPolicy("lit-html",{createHTML:e=>e}):void 0,mt=`lit$${(Math.random()+"").slice(9)}$`,pn="?"+mt,va=`<${pn}>`,Yt=document,_e=(e="")=>Yt.createComment(e),we=e=>e===null||typeof e!="object"&&typeof e!="function",fn=Array.isArray,ba=e=>fn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,no=/-->/g,so=/>/g,At=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ao=/'/g,lo=/"/g,mn=/^(?:script|style|textarea|title)$/i,ya=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Z=ya(1),yt=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),co=new WeakMap,Ht=Yt.createTreeWalker(Yt,129,null,!1),_a=(e,t)=>{const r=e.length-1,i=[];let o,n=t===2?"<svg>":"",s=oe;for(let a=0;a<r;a++){const c=e[a];let u,d,h=-1,p=0;for(;p<c.length&&(s.lastIndex=p,d=s.exec(c),d!==null);)p=s.lastIndex,s===oe?d[1]==="!--"?s=no:d[1]!==void 0?s=so:d[2]!==void 0?(mn.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=At):d[3]!==void 0&&(s=At):s===At?d[0]===">"?(s=o!=null?o:oe,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?At:d[3]==='"'?lo:ao):s===lo||s===ao?s=At:s===no||s===so?s=oe:(s=At,o=void 0);const g=s===At&&e[a+1].startsWith("/>")?" ":"";n+=s===oe?c+va:h>=0?(i.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+mt+g):c+mt+(h===-2?(i.push(void 0),a):g)}const l=n+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[oo!==void 0?oo.createHTML(l):l,i]},qe=class{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,n=0;const s=e.length-1,l=this.parts,[a,c]=_a(e,t);if(this.el=qe.createElement(a,r),Ht.currentNode=this.el.content,t===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(i=Ht.nextNode())!==null&&l.length<s;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const d of i.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(mt)){const h=c[n++];if(u.push(d),h!==void 0){const p=i.getAttribute(h.toLowerCase()+"$lit$").split(mt),g=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:g[2],strings:p,ctor:g[1]==="."?$a:g[1]==="?"?Aa:g[1]==="@"?Ea:nr})}else l.push({type:6,index:o})}for(const d of u)i.removeAttribute(d)}if(mn.test(i.tagName)){const u=i.textContent.split(mt),d=u.length-1;if(d>0){i.textContent=Kt?Kt.emptyScript:"";for(let h=0;h<d;h++)i.append(u[h],_e()),Ht.nextNode(),l.push({type:2,index:++o});i.append(u[d],_e())}}}else if(i.nodeType===8)if(i.data===pn)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(mt,u+1))!==-1;)l.push({type:7,index:o}),u+=mt.length-1}o++}}static createElement(e,t){const r=Yt.createElement("template");return r.innerHTML=e,r}};function Jt(e,t,r=e,i){var o,n,s,l;if(t===yt)return t;let a=i!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[i]:r._$Cl;const c=we(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),c===void 0?a=void 0:(a=new c(e),a._$AT(e,r,i)),i!==void 0?((s=(l=r)._$Co)!==null&&s!==void 0?s:l._$Co=[])[i]=a:r._$Cl=a),a!==void 0&&(t=Jt(e,a._$AS(e,t.values),a,i)),t}var wa=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:r},parts:i}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Yt).importNode(r,!0);Ht.currentNode=o;let n=Ht.nextNode(),s=0,l=0,a=i[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new or(n,n.nextSibling,this,e):a.type===1?c=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(c=new Sa(n,this,e)),this.u.push(c),a=i[++l]}s!==(a==null?void 0:a.index)&&(n=Ht.nextNode(),s++)}return o}p(e){let t=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},or=class{constructor(e,t,r,i){var o;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cm=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Jt(this,e,t),we(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==yt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ba(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==S&&we(this._$AH)?this._$AA.nextSibling.data=e:this.T(Yt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=qe.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.p(r);else{const n=new wa(o,this),s=n.v(this.options);n.p(r),this.T(s),this._$AH=n}}_$AC(e){let t=co.get(e.strings);return t===void 0&&co.set(e.strings,t=new qe(e)),t}k(e){fn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new or(this.O(_e()),this.O(_e()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},nr=class{constructor(e,t,r,i,o){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const o=this.strings;let n=!1;if(o===void 0)e=Jt(this,e,t,0),n=!we(e)||e!==this._$AH&&e!==yt,n&&(this._$AH=e);else{const s=e;let l,a;for(e=o[0],l=0;l<o.length-1;l++)a=Jt(this,s[r+l],t,l),a===yt&&(a=this._$AH[l]),n||(n=!we(a)||a!==this._$AH[l]),a===S?e=S:e!==S&&(e+=(a!=null?a:"")+o[l+1]),this._$AH[l]=a}n&&!i&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},$a=class extends nr{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}},xa=Kt?Kt.emptyScript:"",Aa=class extends nr{constructor(){super(...arguments),this.type=4}j(e){e&&e!==S?this.element.setAttribute(this.name,xa):this.element.removeAttribute(this.name)}},Ea=class extends nr{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){var r;if((e=(r=Jt(this,e,t,0))!==null&&r!==void 0?r:S)===yt)return;const i=this._$AH,o=e===S&&i!==S||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==S&&(i===S||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Sa=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Jt(this,e)}},ho=We.litHtmlPolyfillSupport;ho==null||ho(qe,or),((Ar=We.litHtmlVersions)!==null&&Ar!==void 0?Ar:We.litHtmlVersions=[]).push("2.6.1");var Ca=(e,t,r)=>{var i,o;const n=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let s=n._$litPart$;if(s===void 0){const l=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=s=new or(t.insertBefore(_e(),l),l,void 0,r!=null?r:{})}return s._$AI(e),s},Er,Sr,de=class extends Ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Ca(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return yt}};de.finalized=!0,de._$litElement$=!0,(Er=globalThis.litElementHydrateSupport)===null||Er===void 0||Er.call(globalThis,{LitElement:de});var uo=globalThis.litElementPolyfillSupport;uo==null||uo({LitElement:de});((Sr=globalThis.litElementVersions)!==null&&Sr!==void 0?Sr:globalThis.litElementVersions=[]).push("3.2.0");/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var ot=tt`
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
`,ka=tt`
  ${ot}

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
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,li=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function Pa(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var gn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},vn=e=>(...t)=>({_$litDirective$:e,values:t}),bn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Rt=vn(class extends bn{constructor(e){var t;if(super(e),e.type!==gn.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((r=this.st)===null||r===void 0)&&r.has(n))&&this.nt.add(n);return this.render(t)}const o=e.element.classList;this.nt.forEach(n=>{n in t||(o.remove(n),this.nt.delete(n))});for(const n in t){const s=!!t[n];s===this.nt.has(n)||((i=this.st)===null||i===void 0?void 0:i.has(n))||(s?(o.add(n),this.nt.add(n)):(o.remove(n),this.nt.delete(n)))}return yt}});/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var yn=Object.defineProperty,Ta=Object.defineProperties,Oa=Object.getOwnPropertyDescriptor,La=Object.getOwnPropertyDescriptors,Ke=Object.getOwnPropertySymbols,_n=Object.prototype.hasOwnProperty,wn=Object.prototype.propertyIsEnumerable,po=(e,t,r)=>t in e?yn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))_n.call(t,r)&&po(e,r,t[r]);if(Ke)for(var r of Ke(t))wn.call(t,r)&&po(e,r,t[r]);return e},Q=(e,t)=>Ta(e,La(t)),ci=(e,t)=>{var r={};for(var i in e)_n.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&Ke)for(var i of Ke(e))t.indexOf(i)<0&&wn.call(e,i)&&(r[i]=e[i]);return r},f=(e,t,r,i)=>{for(var o=i>1?void 0:i?Oa(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&yn(t,r,o),o},nt=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(s){customElements.define(r,s)}}})(e,t),Ra=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Q(A({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function m(e){return(t,r)=>r!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(e,t,r):Ra(e,t)}function sr(e){return m(Q(A({},e),{state:!0}))}var Da=({finisher:e,descriptor:t})=>(r,i)=>{var o;if(i===void 0){const n=(o=r.originalKey)!==null&&o!==void 0?o:r.key,s=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(r.key)}:Q(A({},r),{key:n});return e!=null&&(s.finisher=function(l){e(l,n)}),s}{const n=r.constructor;t!==void 0&&Object.defineProperty(r,i,t(i)),e==null||e(n,i)}};function z(e,t){return Da({descriptor:r=>{const i={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const o=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var n,s;return this[o]===void 0&&(this[o]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&s!==void 0?s:null),this[o]}}return i}})}var Cr;((Cr=window.HTMLSlotElement)===null||Cr===void 0?void 0:Cr.prototype.assignedElements)!=null;var W=class extends de{emit(e,t){const r=new CustomEvent(e,A({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}};f([m()],W.prototype,"dir",2);f([m()],W.prototype,"lang",2);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Fr=class extends W{constructor(){super(...arguments);this.hasSlotController=new li(this,"footer","header","image")}render(){return Z`
      <div
        part="base"
        class=${Rt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Fr.styles=ka;Fr=f([nt("sl-card")],Fr);var ne=new WeakMap,fo=new WeakMap,se=new WeakMap,Na=class{constructor(e,t){(this.host=e).addController(this),this.options=A({form:r=>{if(r.hasAttribute("form")&&r.getAttribute("form")!==""){const i=r.getRootNode(),o=r.getAttribute("form");if(o)return i.getElementById(o)}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,i)=>r.value=i},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){this.detachForm(),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.checkValidity())}attachForm(e){e?(this.form=e,ne.has(this.form)?ne.get(this.form).add(this.host):ne.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),se.has(this.form)||(se.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&((e=ne.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),se.has(this.form)&&(this.form.reportValidity=se.get(this.form),se.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),o=this.host.tagName.toLowerCase()==="sl-button";!t&&!o&&typeof r=="string"&&r.length>0&&typeof i!="undefined"&&(Array.isArray(i)?i.forEach(n=>{e.formData.append(r,n.toString())}):e.formData.append(r,i.toString()))}handleFormSubmit(e){var t;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=ne.get(this.form))==null||t.forEach(o=>{this.setUserInteracted(o,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){fo.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){var t;const r=this.host,i=Boolean(fo.get(r)),o=Boolean(r.required);(t=this.form)!=null&&t.noValidate?(r.removeAttribute("data-required"),r.removeAttribute("data-optional"),r.removeAttribute("data-invalid"),r.removeAttribute("data-valid"),r.removeAttribute("data-user-invalid"),r.removeAttribute("data-user-valid")):(r.toggleAttribute("data-required",o),r.toggleAttribute("data-optional",!o),r.toggleAttribute("data-invalid",!e),r.toggleAttribute("data-valid",e),r.toggleAttribute("data-user-invalid",!e&&i),r.toggleAttribute("data-user-valid",e&&i))}updateValidity(){const e=this.host;this.setValidity(e.checkValidity())}},Ma=tt`
  ${ot}

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

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
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

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
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
    height: auto;
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
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
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
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
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

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,$n=Symbol.for(""),Ua=e=>{if((e==null?void 0:e.r)===$n)return e==null?void 0:e._$litStatic$},Ye=(e,...t)=>({_$litStatic$:t.reduce((r,i,o)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:$n}),mo=new Map,za=e=>(t,...r)=>{const i=r.length;let o,n;const s=[],l=[];let a,c=0,u=!1;for(;c<i;){for(a=t[c];c<i&&(n=r[c],(o=Ua(n))!==void 0);)a+=o+t[++c],u=!0;l.push(n),s.push(a),c++}if(c===i&&s.push(t[i]),u){const d=s.join("$$lit$$");(t=mo.get(d))===void 0&&(s.raw=s,mo.set(d,t=s)),r=l}return e(t,...r)},Me=za(Z);/*! Bundled license information:

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/var Vr=new Set,Ba=new MutationObserver(En),Bt=new Map,xn=document.documentElement.dir||"ltr",An=document.documentElement.lang||navigator.language,he;Ba.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Ia(...e){e.map(t=>{const r=t.$code.toLowerCase();Bt.has(r)?Bt.set(r,Object.assign(Object.assign({},Bt.get(r)),t)):Bt.set(r,t),he||(he=t)}),En()}function En(){xn=document.documentElement.dir||"ltr",An=document.documentElement.lang||navigator.language,[...Vr.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var ja=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Vr.add(this.host)}hostDisconnected(){Vr.delete(this.host)}dir(){return`${this.host.dir||xn}`.toLowerCase()}lang(){return`${this.host.lang||An}`.toLowerCase()}term(e,...t){var r,i;const o=new Intl.Locale(this.lang()),n=o==null?void 0:o.language.toLowerCase(),s=(i=(r=o==null?void 0:o.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",l=Bt.get(`${n}-${s}`),a=Bt.get(n);let c;if(l&&l[e])c=l[e];else if(a&&a[e])c=a[e];else if(he&&he[e])c=he[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof c=="function"?c(...t):c}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},ar=class extends ja{},Ha={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Ia(Ha);var E=e=>e!=null?e:S;/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/function dt(e,t){const r=A({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:n}=i,s=Array.isArray(e)?e:[e];i.update=function(l){s.forEach(a=>{const c=a;if(l.has(c)){const u=l.get(c),d=this[c];u!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](u,d)}}),n.call(this,l)}}}var $=class extends W{constructor(){super(...arguments);this.formControlController=new Na(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new li(this,"[default]","prefix","suffix"),this.localize=new ar(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Ye`a`:Ye`button`;return Me`
      <${t}
        part="base"
        class=${Rt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${E(e?void 0:this.disabled)}
        type=${E(e?void 0:this.type)}
        title=${this.title}
        name=${E(e?void 0:this.name)}
        value=${E(e?void 0:this.value)}
        href=${E(e?this.href:void 0)}
        target=${E(e?this.target:void 0)}
        download=${E(e?this.download:void 0)}
        rel=${E(e&&this.target?"noreferrer noopener":void 0)}
        role=${E(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Me` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Me`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};$.styles=Ma;f([z(".button")],$.prototype,"button",2);f([sr()],$.prototype,"hasFocus",2);f([sr()],$.prototype,"invalid",2);f([m()],$.prototype,"title",2);f([m({reflect:!0})],$.prototype,"variant",2);f([m({reflect:!0})],$.prototype,"size",2);f([m({type:Boolean,reflect:!0})],$.prototype,"caret",2);f([m({type:Boolean,reflect:!0})],$.prototype,"disabled",2);f([m({type:Boolean,reflect:!0})],$.prototype,"loading",2);f([m({type:Boolean,reflect:!0})],$.prototype,"outline",2);f([m({type:Boolean,reflect:!0})],$.prototype,"pill",2);f([m({type:Boolean,reflect:!0})],$.prototype,"circle",2);f([m()],$.prototype,"type",2);f([m()],$.prototype,"name",2);f([m()],$.prototype,"value",2);f([m()],$.prototype,"href",2);f([m()],$.prototype,"target",2);f([m()],$.prototype,"download",2);f([m()],$.prototype,"form",2);f([m({attribute:"formaction"})],$.prototype,"formAction",2);f([m({attribute:"formenctype"})],$.prototype,"formEnctype",2);f([m({attribute:"formmethod"})],$.prototype,"formMethod",2);f([m({attribute:"formnovalidate",type:Boolean})],$.prototype,"formNoValidate",2);f([m({attribute:"formtarget"})],$.prototype,"formTarget",2);f([dt("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);$=f([nt("sl-button")],$);var Fa=tt`
  ${ot}

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
`,Wr=class extends W{constructor(){super(...arguments);this.localize=new ar(this)}render(){return Z`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Wr.styles=Fa;Wr=f([nt("sl-spinner")],Wr);var qr="";function go(e){qr=e}function Va(){if(!qr){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)go(t.getAttribute("data-shoelace"));else{const r=e.find(o=>/shoelace(\.min)?\.js($|\?)/.test(o.src));let i="";r&&(i=r.getAttribute("src")),go(i.split("/").slice(0,-1).join("/"))}}return qr.replace(/\/$/,"")}var Wa={name:"default",resolver:e=>`${Va()}/assets/icons/${e}.svg`},qa=Wa,vo={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ka={name:"system",resolver:e=>e in vo?`data:image/svg+xml,${encodeURIComponent(vo[e])}`:""},Ya=Ka,Ja=[qa,Ya],Kr=[];function Ga(e){Kr.push(e)}function Xa(e){Kr=Kr.filter(t=>t!==e)}function bo(e){return Ja.find(t=>t.name===e)}var kr=new Map;function Za(e,t="cors"){if(kr.has(e))return kr.get(e);const r=fetch(e,{mode:t}).then(async i=>({ok:i.ok,status:i.status,html:await i.text()}));return kr.set(e,r),r}var Pr=new Map;async function Qa(e){if(Pr.has(e))return Pr.get(e);const t=await Za(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const i=document.createElement("div");i.innerHTML=t.html;const o=i.firstElementChild;r.svg=(o==null?void 0:o.tagName.toLowerCase())==="svg"?o.outerHTML:""}return Pr.set(e,r),r}var tl=tt`
  ${ot}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Yr=class extends bn{constructor(e){if(super(e),this.it=S,e.type!==gn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===S||e==null)return this._t=void 0,this.it=e;if(e===yt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Yr.directiveName="unsafeHTML",Yr.resultType=1;var Jr=class extends Yr{};Jr.directiveName="unsafeSVG",Jr.resultType=2;var el=vn(Jr),Tr,it=class extends W{constructor(){super(...arguments);this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Ga(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Xa(this)}getUrl(){const e=bo(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=bo(this.library),r=this.getUrl();if(Tr||(Tr=new DOMParser),r)try{const i=await Qa(r);if(r!==this.getUrl())return;if(i.ok){const n=Tr.parseFromString(i.svg,"text/html").body.querySelector("svg");n!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,n),this.svg=n.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return Z` ${el(this.svg)} `}};it.styles=tl;f([sr()],it.prototype,"svg",2);f([m({reflect:!0})],it.prototype,"name",2);f([m()],it.prototype,"src",2);f([m()],it.prototype,"label",2);f([m({reflect:!0})],it.prototype,"library",2);f([dt("label")],it.prototype,"handleLabelChange",1);f([dt(["name","src","library"])],it.prototype,"setIcon",1);it=f([nt("sl-icon")],it);/*! Bundled license information:

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-svg.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/const Sn=Lt`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var rl=Object.defineProperty,il=Object.getOwnPropertyDescriptor,Cn=(e,t,r,i)=>{for(var o=i>1?void 0:i?il(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&rl(t,r,o),o};let Gr=class extends et{constructor(){super();this.message="Welcome!"}static get styles(){return[Sn,Lt`
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
    `]}async firstUpdated(){console.log("This is your home page")}render(){return N`
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
    `}};Cn([wt()],Gr.prototype,"message",2);Gr=Cn([Xt("app-home")],Gr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ol=Symbol();class nl{constructor(t,r,i){this.i=0,this.status=0,this.autoRun=!0,this.o=t,this.o.addController(this);const o=typeof r=="object"?r:{task:r,args:i};this.t=o.task,this.h=o.args,this.l=o.onComplete,this.u=o.onError,o.autoRun!==void 0&&(this.autoRun=o.autoRun),this.taskComplete=new Promise((n,s)=>{this.v=n,this._=s})}hostUpdated(){this.performTask()}async performTask(){var t;const r=(t=this.h)===null||t===void 0?void 0:t.call(this);this.shouldRun(r)&&this.run(r)}shouldRun(t){return this.autoRun&&this.m(t)}async run(t){var r,i,o;let n,s;t!=null||(t=(r=this.h)===null||r===void 0?void 0:r.call(this)),this.status!==2&&this.status!==3||(this.taskComplete=new Promise((a,c)=>{this.v=a,this._=c})),this.status=1,this.o.requestUpdate();const l=++this.i;try{n=await this.t(t)}catch(a){s=a}if(this.i===l){if(n===ol)this.status=0;else{if(s===void 0){try{(i=this.l)===null||i===void 0||i.call(this,n)}catch{}this.status=2,this.v(n)}else{try{(o=this.u)===null||o===void 0||o.call(this,s)}catch{}this.status=3,this._(s)}this.T=n,this.k=s}this.o.requestUpdate()}}get value(){return this.T}get error(){return this.k}render(t){var r,i,o,n;switch(this.status){case 0:return(r=t.initial)===null||r===void 0?void 0:r.call(t);case 1:return(i=t.pending)===null||i===void 0?void 0:i.call(t);case 2:return(o=t.complete)===null||o===void 0?void 0:o.call(t,this.value);case 3:return(n=t.error)===null||n===void 0?void 0:n.call(t,this.error);default:this.status}}m(t){const r=this.p;return this.p=t,Array.isArray(t)&&Array.isArray(r)?t.length===r.length&&t.some((i,o)=>ii(i,r[o])):t!==r}}function sl(e){return function(t){return class extends t{constructor(...r){super(...r);at.set(this,[]),Object.keys(this).forEach(o=>{const n=Object.getOwnPropertyDescriptor(this,o);n!=null&&n.writable&&_o(t,this,o,e,n.value)});const i=cl.get(t.prototype);if(i)for(const o of i)Object.getOwnPropertyDescriptor(this,o)||_o(t,this,o,e);!(e!=null&&e.noSeal)&&Object.seal(this)}}}}function yo(e,t,r){var i,o;if(e.value instanceof Object&&at.has(e.value)&&at.set(e.value,at.get(e.value).filter(({parent:n})=>n!=e)),t instanceof Object&&at.has(t)&&((i=at.get(t))===null||i===void 0||i.push({parent:e,propKey:r})),t instanceof Array)for(const n of t)n instanceof Object&&at.has(n)&&((o=at.get(n))===null||o===void 0||o.push({parent:e,propKey:r}))}function _o(e,t,r,i,o){const n=ll(dl(e,r,i)),s=new al(t,r,n,o);yo(s,o,r),Object.defineProperty(t,r,{enumerable:!0,set(l){if(s.options.lock&&s.options.lock.symbol!==pl)throw new ul(s.key);yo(s,l,r),s.options.set(s,l)},get(){return kt&&s.observers.add(kt),s==null?void 0:s.options.get(s)}})}class al{constructor(t,r,i,o){this.parent=t,this.key=r,this.options=i,this._value=o,this.observers=new Set,this.options.init&&(this._value=this.options.init(this,o),i.notifyOnInit&&this.notifyObservers())}get value(){return this._value}set value(t){this._value=t,this.notifyObservers()}notifyObservers(){for(const r of this.observers.keys())r.update();for(const r of this.options.observers)r(new Set([this]));const t=at.get(this.parent);for(const{parent:r}of t)r.notifyObservers()}}function ll({observers:e=[],notifyOnInit:t=!1,noSeal:r=!1,lock:i=null,init:o=function(a,c){return c},set:n=function(a,c){a.value!==c&&(a.value=c)},get:s=function(a){return a.value}}={}){return{lock:i,set:n,get:s,init:o,observers:e,notifyOnInit:t,noSeal:r}}function kn(){return function(e,t){const r=Symbol(t),i=Symbol(t);return{set:function(o){this[i]=new hl(this),this[r]=o},get:function(){return kt=this[i],this[r]}}}}const cl=new WeakMap;function dl(e,t,r={},i={}){let o=wo.get(e);o||(o=new Map,wo.set(e,o));const n=Object.assign(Object.assign(Object.assign({},r),o.get(t)||{}),i);return o.set(t,n),n}class hl{constructor(t){this.host=t,t.addController(this)}update(){const t=kt;kt=this,this.host.requestUpdate(),this.host.updateComplete.then(()=>{kt=t})}hostConnected(){this.host.updateComplete.then(()=>{kt=void 0})}}class ul extends Error{constructor(t){super(`Access to '${t}' is locked. Needs unlocked context for access!`)}}const wo=new WeakMap,at=new WeakMap;let kt,pl=null;const fl="0.0.24",Pn=()=>new Date(Date.now()).toLocaleDateString("en-US",{weekday:"long"}).toLowerCase(),ml=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],gl=e=>ml.includes(e),vl=e=>{const t=window.location.search;return new URLSearchParams(t).get(e)};var bl=Object.defineProperty,yl=Object.getOwnPropertyDescriptor,_l=(e,t,r,i)=>{for(var o=i>1?void 0:i?yl(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&bl(t,r,o),o};let Xr=class{constructor(){this.urlDayParam=vl("day"),this.weekDay=this.urlDayParam&&gl(this.urlDayParam)?this.urlDayParam:Pn()}};Xr=_l([sl()],Xr);const Tn=new Xr,wl=async e=>new Promise(t=>{setTimeout(()=>t(),e)}),$l=async(e,t=!0)=>(t&&await wl(500),await(await fetch(e)).json());var xl=Object.defineProperty,Al=Object.getOwnPropertyDescriptor,On=(e,t,r,i)=>{for(var o=i>1?void 0:i?Al(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&xl(t,r,o),o};let Je=class extends et{constructor(){super();this._apiTask=new nl(this,()=>$l(`http://localhost:3000/day/${this.state.weekDay}`),()=>[this.state.weekDay]),this.state=Tn,console.log({endPoint:"eyyo"})}static get styles(){return[Sn,Lt`
        :host {
          --base-gap: 16px;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: var(--base-gap);
          padding: 0;
          list-style-type: none;
        }

        #version {
          position: fixed;
          bottom: 32px;
          left: 32px;
        }
      `]}render(){return N`
      <app-header></app-header>
      <main>
        ${this._apiTask.render({pending:()=>N`<sl-spinner></sl-spinner>`,error:()=>N`error`,complete:e=>N`<ul>
              ${e.map(t=>N`
                    <li>
                      <app-discount-card
                        discountName=${t.name}
                        business=${t.business}
                        category=${t.category}
                        price=${t.price}
                      ></app-discount-card>
                    </li>
                  `)}
            </ul>`})}
        <app-day-selection></app-day-selection>
        <span id="version">${fl}</span>
      </main>
    `}};On([kn()],Je.prototype,"state",2);Je=On([Xt("app-discount")],Je);var El=Object.freeze(Object.defineProperty({__proto__:null,get AppDiscount(){return Je}},Symbol.toStringTag,{value:"Module"})),Sl=Object.defineProperty,Cl=Object.getOwnPropertyDescriptor,di=(e,t,r,i)=>{for(var o=i>1?void 0:i?Cl(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&Sl(t,r,o),o};let Ge=class extends et{constructor(){super();this.title="Discount Day",this.enableBack=!1}static get styles(){return Lt`
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
    `}render(){return N`
      <header>

        <div id="back-button-block">
          ${this.enableBack?N`<sl-button href="${"/discount-day/"}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};di([wt({type:String})],Ge.prototype,"title",2);di([wt({type:Boolean})],Ge.prototype,"enableBack",2);Ge=di([Xt("app-header")],Ge);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*kl(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pl={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Tl=e=>(...t)=>({_$litDirective$:e,values:t});class Ol{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ll=Tl(class extends Ol{constructor(e){var t;if(super(e),e.type!==Pl.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((r=this.st)===null||r===void 0)&&r.has(n))&&this.nt.add(n);return this.render(t)}const o=e.element.classList;this.nt.forEach(n=>{n in t||(o.remove(n),this.nt.delete(n))});for(const n in t){const s=!!t[n];s===this.nt.has(n)||((i=this.st)===null||i===void 0?void 0:i.has(n))||(s?(o.add(n),this.nt.add(n)):(o.remove(n),this.nt.delete(n)))}return Pt}});var Rl=tt`
  ${ot}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function $o(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function Ln(e){var t,r;const i=[];function o(l){l instanceof HTMLElement&&(i.push(l),l.shadowRoot!==null&&l.shadowRoot.mode==="open"&&o(l.shadowRoot)),[...l.children].forEach(a=>o(a))}o(e);const n=(t=i.find(l=>$o(l)))!=null?t:null,s=(r=i.reverse().find(l=>$o(l)))!=null?r:null;return{start:n,end:s}}var ae=[],Dl=class{constructor(e){this.tabDirection="forward",this.element=e,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){ae.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ae=ae.filter(e=>e!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ae[ae.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:e,end:t}=Ln(this.element),r=this.tabDirection==="forward"?e:t;typeof(r==null?void 0:r.focus)=="function"&&r.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(e){e.key==="Tab"&&e.shiftKey&&(this.tabDirection="backward",requestAnimationFrame(()=>this.checkFocus()))}handleKeyUp(){this.tabDirection="forward"}};function Nl(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var Zr=new Set;function Ml(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Or(e){if(Zr.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=Ml();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Lr(e){Zr.delete(e),Zr.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scrollbar-width"))}function Ul(e,t,r="vertical",i="smooth"){const o=Nl(e,t),n=o.top+t.scrollTop,s=o.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,u=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<l?t.scrollTo({left:s,behavior:i}):s+e.clientWidth>a&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(n<c?t.scrollTo({top:n,behavior:i}):n+e.clientHeight>u&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:i}))}function Xe(e,t){return new Promise(r=>{function i(o){o.target===e&&(e.removeEventListener(t,i),r())}e.addEventListener(t,i)})}function St(e,t,r){return new Promise(i=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Q(A({},r),{duration:zl()?0:r.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function zl(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function It(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const i=requestAnimationFrame(r);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}var Rn=new Map,Bl=new WeakMap;function Il(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function xo(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function B(e,t){Rn.set(e,Il(t))}function Ct(e,t,r){const i=Bl.get(e);if(i!=null&&i[t])return xo(i[t],r.dir);const o=Rn.get(t);return o?xo(o,r.dir):{keyframes:[],options:{duration:0}}}function Ao(e){return e.charAt(0).toUpperCase()+e.slice(1)}var M=class extends W{constructor(){super(...arguments);this.hasSlotController=new li(this,"footer"),this.localize=new ar(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.modal=new Dl(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Or(this)))}disconnectedCallback(){super.disconnectedCallback(),Lr(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=Ct(this,"drawer.denyClose",{dir:this.localize.dir()});St(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDocumentKeyDown(e){this.open&&!this.contained&&e.key==="Escape"&&(e.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Or(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([It(this.drawer),It(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=Ct(this,`drawer.show${Ao(this.placement)}`,{dir:this.localize.dir()}),r=Ct(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([St(this.panel,t.keyframes,t.options),St(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Lr(this)),await Promise.all([It(this.drawer),It(this.overlay)]);const e=Ct(this,`drawer.hide${Ao(this.placement)}`,{dir:this.localize.dir()}),t=Ct(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([St(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),St(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Or(this)),this.open&&this.contained&&(this.modal.deactivate(),Lr(this))}async show(){if(!this.open)return this.open=!0,Xe(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Xe(this,"sl-after-hide")}render(){return Z`
      <div
        part="base"
        class=${Rt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${E(this.noHeader?this.label:void 0)}
          aria-labelledby=${E(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":Z`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};M.styles=Rl;f([z(".drawer")],M.prototype,"drawer",2);f([z(".drawer__panel")],M.prototype,"panel",2);f([z(".drawer__overlay")],M.prototype,"overlay",2);f([m({type:Boolean,reflect:!0})],M.prototype,"open",2);f([m({reflect:!0})],M.prototype,"label",2);f([m({reflect:!0})],M.prototype,"placement",2);f([m({type:Boolean,reflect:!0})],M.prototype,"contained",2);f([m({attribute:"no-header",type:Boolean,reflect:!0})],M.prototype,"noHeader",2);f([dt("open",{waitUntilFirstUpdate:!0})],M.prototype,"handleOpenChange",1);f([dt("contained",{waitUntilFirstUpdate:!0})],M.prototype,"handleNoModalChange",1);M=f([nt("sl-drawer")],M);B("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});B("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});B("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});B("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});B("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});B("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});B("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});B("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});B("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});B("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});B("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var jl=tt`
  ${ot}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,U=class extends W{constructor(){super(...arguments);this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?Ye`a`:Ye`button`;return Me`
      <${t}
        part="base"
        class=${Rt({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${E(e?void 0:this.disabled)}
        type=${E(e?void 0:"button")}
        href=${E(e?this.href:void 0)}
        target=${E(e?this.target:void 0)}
        download=${E(e?this.download:void 0)}
        rel=${E(e&&this.target?"noreferrer noopener":void 0)}
        role=${E(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${E(this.name)}
          library=${E(this.library)}
          src=${E(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};U.styles=jl;f([z(".icon-button")],U.prototype,"button",2);f([sr()],U.prototype,"hasFocus",2);f([m()],U.prototype,"name",2);f([m()],U.prototype,"library",2);f([m()],U.prototype,"src",2);f([m()],U.prototype,"href",2);f([m()],U.prototype,"target",2);f([m()],U.prototype,"download",2);f([m()],U.prototype,"label",2);f([m({type:Boolean,reflect:!0})],U.prototype,"disabled",2);U=f([nt("sl-icon-button")],U);var Hl=tt`
  ${ot}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,D=class extends W{constructor(){super(...arguments);this.localize=new ar(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(e){var t;if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,o;const n=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(e){const t=e.target;Ul(t,this.panel)}handlePanelSelect(e){const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(e){if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.defaultSlot.assignedElements({flatten:!0}),i=r[0],o=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),r.length>0&&requestAnimationFrame(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>Ln(i).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Xe(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Xe(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await It(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Ct(this,"dropdown.show",{dir:this.localize.dir()});await St(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await It(this);const{keyframes:e,options:t}=Ct(this,"dropdown.hide",{dir:this.localize.dir()});await St(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return Z`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${Rt({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        ></slot>
      </sl-popup>
    `}};D.styles=Hl;f([z(".dropdown")],D.prototype,"popup",2);f([z(".dropdown__trigger")],D.prototype,"trigger",2);f([z(".dropdown__panel")],D.prototype,"panel",2);f([m({type:Boolean,reflect:!0})],D.prototype,"open",2);f([m({reflect:!0})],D.prototype,"placement",2);f([m({type:Boolean,reflect:!0})],D.prototype,"disabled",2);f([m({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],D.prototype,"stayOpenOnSelect",2);f([m({attribute:!1})],D.prototype,"containingElement",2);f([m({type:Number})],D.prototype,"distance",2);f([m({type:Number})],D.prototype,"skidding",2);f([m({type:Boolean})],D.prototype,"hoist",2);f([dt("open",{waitUntilFirstUpdate:!0})],D.prototype,"handleOpenChange",1);D=f([nt("sl-dropdown")],D);B("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});B("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var Fl=tt`
  ${ot}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;function Qt(e){return e.split("-")[1]}function hi(e){return e==="y"?"height":"width"}function vt(e){return e.split("-")[0]}function Ee(e){return["top","bottom"].includes(vt(e))?"x":"y"}function Eo(e,t,r){let{reference:i,floating:o}=e;const n=i.x+i.width/2-o.width/2,s=i.y+i.height/2-o.height/2,l=Ee(t),a=hi(l),c=i[a]/2-o[a]/2,u=l==="x";let d;switch(vt(t)){case"top":d={x:n,y:i.y-o.height};break;case"bottom":d={x:n,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:s};break;case"left":d={x:i.x-o.width,y:s};break;default:d={x:i.x,y:i.y}}switch(Qt(t)){case"start":d[l]-=c*(r&&u?-1:1);break;case"end":d[l]+=c*(r&&u?-1:1)}return d}var Vl=async(e,t,r)=>{const{placement:i="bottom",strategy:o="absolute",middleware:n=[],platform:s}=r,l=n.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Eo(c,i,a),h=i,p={},g=0;for(let v=0;v<l.length;v++){const{name:y,fn:b}=l[v],{x:w,y:_,data:O,reset:L}=await b({x:u,y:d,initialPlacement:i,placement:h,strategy:o,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:t}});u=w!=null?w:u,d=_!=null?_:d,p=Q(A({},p),{[y]:A(A({},p[y]),O)}),L&&g<=50&&(g++,typeof L=="object"&&(L.placement&&(h=L.placement),L.rects&&(c=L.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):L.rects),{x:u,y:d}=Eo(c,h,a)),v=-1)}return{x:u,y:d,placement:h,strategy:o,middlewareData:p}};function Dn(e){return typeof e!="number"?function(t){return A({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function Ze(e){return Q(A({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function ui(e,t){var r;t===void 0&&(t={});const{x:i,y:o,platform:n,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=t,g=Dn(p),v=l[h?d==="floating"?"reference":"floating":d],y=Ze(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(v)))==null||r?v:v.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),b=d==="floating"?Q(A({},s.floating),{x:i,y:o}):s.reference,w=await(n.getOffsetParent==null?void 0:n.getOffsetParent(l.floating)),_=await(n.isElement==null?void 0:n.isElement(w))&&await(n.getScale==null?void 0:n.getScale(w))||{x:1,y:1},O=Ze(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:w,strategy:a}):b);return{top:(y.top-O.top+g.top)/_.y,bottom:(O.bottom-y.bottom+g.bottom)/_.y,left:(y.left-O.left+g.left)/_.x,right:(O.right-y.right+g.right)/_.x}}var Wl=Math.min,Et=Math.max;function Qr(e,t,r){return Et(e,Wl(t,r))}var ql=e=>({name:"arrow",options:e,async fn(t){const{element:r,padding:i=0}=e||{},{x:o,y:n,placement:s,rects:l,platform:a}=t;if(r==null)return{};const c=Dn(i),u={x:o,y:n},d=Ee(s),h=hi(d),p=await a.getDimensions(r),g=d==="y"?"top":"left",v=d==="y"?"bottom":"right",y=l.reference[h]+l.reference[d]-u[d]-l.floating[h],b=u[d]-l.reference[d],w=await(a.getOffsetParent==null?void 0:a.getOffsetParent(r));let _=w?d==="y"?w.clientHeight||0:w.clientWidth||0:0;_===0&&(_=l.floating[h]);const O=y/2-b/2,L=c[g],ht=_-p[h]-c[v],R=_/2-p[h]/2+O,q=Qr(L,R,ht),Ce=Qt(s)!=null&&R!=q&&l.reference[h]/2-(R<L?c[g]:c[v])-p[h]/2<0;return{[d]:u[d]-(Ce?R<L?L-R:ht-R:0),data:{[d]:q,centerOffset:R-q}}}}),Kl=["top","right","bottom","left"];Kl.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var Yl={left:"right",right:"left",bottom:"top",top:"bottom"};function Qe(e){return e.replace(/left|right|bottom|top/g,t=>Yl[t])}function Jl(e,t,r){r===void 0&&(r=!1);const i=Qt(e),o=Ee(e),n=hi(o);let s=o==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=Qe(s)),{main:s,cross:Qe(s)}}var Gl={start:"end",end:"start"};function Rr(e){return e.replace(/start|end/g,t=>Gl[t])}var Xl=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:i,middlewareData:o,rects:n,initialPlacement:s,platform:l,elements:a}=t,c=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0}=c,y=ci(c,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]),b=vt(i),w=vt(s)===s,_=await(l.isRTL==null?void 0:l.isRTL(a.floating)),O=h||(w||!v?[Qe(s)]:function(I){const st=Qe(I);return[Rr(I),st,Rr(st)]}(s));h||g==="none"||O.push(...function(I,st,Dt,ke){const $t=Qt(I);let j=function(te,hr,Fn){const mi=["left","right"],gi=["right","left"],Vn=["top","bottom"],Wn=["bottom","top"];switch(te){case"top":case"bottom":return Fn?hr?gi:mi:hr?mi:gi;case"left":case"right":return hr?Vn:Wn;default:return[]}}(vt(I),Dt==="start",ke);return $t&&(j=j.map(te=>te+"-"+$t),st&&(j=j.concat(j.map(Rr)))),j}(s,v,g,_));const L=[s,...O],ht=await ui(t,y),R=[];let q=((r=o.flip)==null?void 0:r.overflows)||[];if(u&&R.push(ht[b]),d){const{main:I,cross:st}=Jl(i,n,_);R.push(ht[I],ht[st])}if(q=[...q,{placement:i,overflows:R}],!R.every(I=>I<=0)){var Ce;const I=(((Ce=o.flip)==null?void 0:Ce.index)||0)+1,st=L[I];if(st)return{data:{index:I,overflows:q},reset:{placement:st}};let Dt="bottom";switch(p){case"bestFit":{var fi;const ke=(fi=q.map($t=>[$t,$t.overflows.filter(j=>j>0).reduce((j,te)=>j+te,0)]).sort(($t,j)=>$t[1]-j[1])[0])==null?void 0:fi[0].placement;ke&&(Dt=ke);break}case"initialPlacement":Dt=s}if(i!==Dt)return{reset:{placement:Dt}}}return{}}}},Zl=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:i}=t,o=await async function(n,s){const{placement:l,platform:a,elements:c}=n,u=await(a.isRTL==null?void 0:a.isRTL(c.floating)),d=vt(l),h=Qt(l),p=Ee(l)==="x",g=["left","top"].includes(d)?-1:1,v=u&&p?-1:1,y=typeof s=="function"?s(n):s;let{mainAxis:b,crossAxis:w,alignmentAxis:_}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:A({mainAxis:0,crossAxis:0,alignmentAxis:null},y);return h&&typeof _=="number"&&(w=h==="end"?-1*_:_),p?{x:w*v,y:b*g}:{x:b*g,y:w*v}}(t,e);return{x:r+o.x,y:i+o.y,data:o}}}};function Ql(e){return e==="x"?"y":"x"}var tc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:o}=t,n=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:a={fn:b=>{let{x:w,y:_}=b;return{x:w,y:_}}}}=n,c=ci(n,["mainAxis","crossAxis","limiter"]),u={x:r,y:i},d=await ui(t,c),h=Ee(vt(o)),p=Ql(h);let g=u[h],v=u[p];if(s){const b=h==="y"?"bottom":"right";g=Qr(g+d[h==="y"?"top":"left"],g,g-d[b])}if(l){const b=p==="y"?"bottom":"right";v=Qr(v+d[p==="y"?"top":"left"],v,v-d[b])}const y=a.fn(Q(A({},t),{[h]:g,[p]:v}));return Q(A({},y),{data:{x:y.x-r,y:y.y-i}})}}},So=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:i,platform:o,elements:n}=t,s=e,{apply:l=()=>{}}=s,a=ci(s,["apply"]),c=await ui(t,a),u=vt(r),d=Qt(r);let h,p;u==="top"||u==="bottom"?(h=u,p=d===(await(o.isRTL==null?void 0:o.isRTL(n.floating))?"start":"end")?"left":"right"):(p=u,h=d==="end"?"top":"bottom");const g=Et(c.left,0),v=Et(c.right,0),y=Et(c.top,0),b=Et(c.bottom,0),w={availableHeight:i.floating.height-(["left","right"].includes(r)?2*(y!==0||b!==0?y+b:Et(c.top,c.bottom)):c[h]),availableWidth:i.floating.width-(["top","bottom"].includes(r)?2*(g!==0||v!==0?g+v:Et(c.left,c.right)):c[p])};await l(A(A({},t),w));const _=await o.getDimensions(n.floating);return i.floating.width!==_.width||i.floating.height!==_.height?{reset:{rects:!0}}:{}}}};function F(e){var t;return((t=e.ownerDocument)==null?void 0:t.defaultView)||window}function rt(e){return F(e).getComputedStyle(e)}function _t(e){return Mn(e)?(e.nodeName||"").toLowerCase():""}var Te;function Nn(){if(Te)return Te;const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?(Te=e.brands.map(t=>t.brand+"/"+t.version).join(" "),Te):navigator.userAgent}function ct(e){return e instanceof F(e).HTMLElement}function X(e){return e instanceof F(e).Element}function Mn(e){return e instanceof F(e).Node}function Co(e){return typeof ShadowRoot=="undefined"?!1:e instanceof F(e).ShadowRoot||e instanceof ShadowRoot}function lr(e){const{overflow:t,overflowX:r,overflowY:i,display:o}=rt(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(o)}function ec(e){return["table","td","th"].includes(_t(e))}function ti(e){const t=/firefox/i.test(Nn()),r=rt(e),i=r.backdropFilter||r.WebkitBackdropFilter;return r.transform!=="none"||r.perspective!=="none"||!!i&&i!=="none"||t&&r.willChange==="filter"||t&&!!r.filter&&r.filter!=="none"||["transform","perspective"].some(o=>r.willChange.includes(o))||["paint","layout","strict","content"].some(o=>{const n=r.contain;return n!=null&&n.includes(o)})}function Un(){return!/^((?!chrome|android).)*safari/i.test(Nn())}function pi(e){return["html","body","#document"].includes(_t(e))}var ko=Math.min,ue=Math.max,tr=Math.round;function zn(e){const t=rt(e);let r=parseFloat(t.width),i=parseFloat(t.height);const o=e.offsetWidth,n=e.offsetHeight,s=tr(r)!==o||tr(i)!==n;return s&&(r=o,i=n),{width:r,height:i,fallback:s}}function Bn(e){return X(e)?e:e.contextElement}var In={x:1,y:1};function Ft(e){const t=Bn(e);if(!ct(t))return In;const r=t.getBoundingClientRect(),{width:i,height:o,fallback:n}=zn(t);let s=(n?tr(r.width):r.width)/i,l=(n?tr(r.height):r.height)/o;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}function Ot(e,t,r,i){var o,n;t===void 0&&(t=!1),r===void 0&&(r=!1);const s=e.getBoundingClientRect(),l=Bn(e);let a=In;t&&(i?X(i)&&(a=Ft(i)):a=Ft(e));const c=l?F(l):window,u=!Un()&&r;let d=(s.left+(u&&((o=c.visualViewport)==null?void 0:o.offsetLeft)||0))/a.x,h=(s.top+(u&&((n=c.visualViewport)==null?void 0:n.offsetTop)||0))/a.y,p=s.width/a.x,g=s.height/a.y;if(l){const v=F(l),y=i&&X(i)?F(i):i;let b=v.frameElement;for(;b&&i&&y!==v;){const w=Ft(b),_=b.getBoundingClientRect(),O=getComputedStyle(b);_.x+=(b.clientLeft+parseFloat(O.paddingLeft))*w.x,_.y+=(b.clientTop+parseFloat(O.paddingTop))*w.y,d*=w.x,h*=w.y,p*=w.x,g*=w.y,d+=_.x,h+=_.y,b=F(b).frameElement}}return{width:p,height:g,top:h,right:d+p,bottom:h+g,left:d,x:d,y:h}}function bt(e){return((Mn(e)?e.ownerDocument:e.document)||window.document).documentElement}function cr(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function jn(e){return Ot(bt(e)).left+cr(e).scrollLeft}function rc(e,t,r){const i=ct(t),o=bt(t),n=Ot(e,!0,r==="fixed",t);let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(i||!i&&r!=="fixed")if((_t(t)!=="body"||lr(o))&&(s=cr(t)),ct(t)){const a=Ot(t,!0);l.x=a.x+t.clientLeft,l.y=a.y+t.clientTop}else o&&(l.x=jn(o));return{x:n.left+s.scrollLeft-l.x,y:n.top+s.scrollTop-l.y,width:n.width,height:n.height}}function $e(e){if(_t(e)==="html")return e;const t=e.assignedSlot||e.parentNode||(Co(e)?e.host:null)||bt(e);return Co(t)?t.host:t}function Po(e){return ct(e)&&rt(e).position!=="fixed"?e.offsetParent:null}function To(e){const t=F(e);let r=Po(e);for(;r&&ec(r)&&rt(r).position==="static";)r=Po(r);return r&&(_t(r)==="html"||_t(r)==="body"&&rt(r).position==="static"&&!ti(r))?t:r||function(i){let o=$e(i);for(;ct(o)&&!pi(o);){if(ti(o))return o;o=$e(o)}return null}(e)||t}function Hn(e){const t=$e(e);return pi(t)?e.ownerDocument.body:ct(t)&&lr(t)?t:Hn(t)}function pe(e,t){var r;t===void 0&&(t=[]);const i=Hn(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),n=F(i);return o?t.concat(n,n.visualViewport||[],lr(i)?i:[]):t.concat(i,pe(i))}function Oo(e,t,r){return t==="viewport"?Ze(function(i,o){const n=F(i),s=bt(i),l=n.visualViewport;let a=s.clientWidth,c=s.clientHeight,u=0,d=0;if(l){a=l.width,c=l.height;const h=Un();(h||!h&&o==="fixed")&&(u=l.offsetLeft,d=l.offsetTop)}return{width:a,height:c,x:u,y:d}}(e,r)):X(t)?function(i,o){const n=Ot(i,!0,o==="fixed"),s=n.top+i.clientTop,l=n.left+i.clientLeft,a=ct(i)?Ft(i):{x:1,y:1},c=i.clientWidth*a.x,u=i.clientHeight*a.y,d=l*a.x,h=s*a.y;return{top:h,left:d,right:d+c,bottom:h+u,x:d,y:h,width:c,height:u}}(t,r):Ze(function(i){var o;const n=bt(i),s=cr(i),l=(o=i.ownerDocument)==null?void 0:o.body,a=ue(n.scrollWidth,n.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),c=ue(n.scrollHeight,n.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0);let u=-s.scrollLeft+jn(i);const d=-s.scrollTop;return rt(l||n).direction==="rtl"&&(u+=ue(n.clientWidth,l?l.clientWidth:0)-a),{width:a,height:c,x:u,y:d}}(bt(e)))}var ic={getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:i,strategy:o}=e;const n=r==="clippingAncestors"?function(c,u){const d=u.get(c);if(d)return d;let h=pe(c).filter(y=>X(y)&&_t(y)!=="body"),p=null;const g=rt(c).position==="fixed";let v=g?$e(c):c;for(;X(v)&&!pi(v);){const y=rt(v),b=ti(v);(g?b||p:b||y.position!=="static"||!p||!["absolute","fixed"].includes(p.position))?p=y:h=h.filter(w=>w!==v),v=$e(v)}return u.set(c,h),h}(t,this._c):[].concat(r),s=[...n,i],l=s[0],a=s.reduce((c,u)=>{const d=Oo(t,u,o);return c.top=ue(d.top,c.top),c.right=ko(d.right,c.right),c.bottom=ko(d.bottom,c.bottom),c.left=ue(d.left,c.left),c},Oo(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:i}=e;const o=ct(r),n=bt(r);if(r===n)return t;let s={scrollLeft:0,scrollTop:0},l={x:1,y:1};const a={x:0,y:0};if((o||!o&&i!=="fixed")&&((_t(r)!=="body"||lr(n))&&(s=cr(r)),ct(r))){const c=Ot(r);l=Ft(r),a.x=c.x+r.clientLeft,a.y=c.y+r.clientTop}return{width:t.width*l.x,height:t.height*l.y,x:t.x*l.x-s.scrollLeft*l.x+a.x,y:t.y*l.y-s.scrollTop*l.y+a.y}},isElement:X,getDimensions:function(e){return zn(e)},getOffsetParent:To,getDocumentElement:bt,getScale:Ft,async getElementRects(e){let{reference:t,floating:r,strategy:i}=e;const o=this.getOffsetParent||To,n=this.getDimensions;return{reference:rc(t,await o(r),i),floating:A({x:0,y:0},await n(r))}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>rt(e).direction==="rtl"};function oc(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:s=!0,animationFrame:l=!1}=i,a=o&&!l,c=a||n?[...X(e)?pe(e):e.contextElement?pe(e.contextElement):[],...pe(t)]:[];c.forEach(p=>{a&&p.addEventListener("scroll",r,{passive:!0}),n&&p.addEventListener("resize",r)});let u,d=null;if(s){let p=!0;d=new ResizeObserver(()=>{p||r(),p=!1}),X(e)&&!l&&d.observe(e),X(e)||!e.contextElement||l||d.observe(e.contextElement),d.observe(t)}let h=l?Ot(e):null;return l&&function p(){const g=Ot(e);!h||g.x===h.x&&g.y===h.y&&g.width===h.width&&g.height===h.height||r(),h=g,u=requestAnimationFrame(p)}(),r(),()=>{var p;c.forEach(g=>{a&&g.removeEventListener("scroll",r),n&&g.removeEventListener("resize",r)}),(p=d)==null||p.disconnect(),d=null,l&&cancelAnimationFrame(u)}}var nc=(e,t,r)=>{const i=new Map,o=A({platform:ic},r),n=Q(A({},o.platform),{_c:i});return Vl(e,t,Q(A({},o),{platform:n}))},x=class extends W{constructor(){super(...arguments);this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){!this.anchorEl||(this.cleanup=oc(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Zl({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(So({apply:({rects:t})=>{const r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Xl({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(tc({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(So({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(ql({element:this.arrowEl,padding:this.arrowPadding})),nc(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy}).then(({x:t,y:r,middlewareData:i,placement:o})=>{const n=getComputedStyle(this).direction==="rtl",s={top:"bottom",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];if(this.setAttribute("data-current-placement",o),Object.assign(this.popup.style,{left:`${t}px`,top:`${r}px`}),this.arrow){const l=i.arrow.x,a=i.arrow.y;let c="",u="",d="",h="";if(this.arrowPlacement==="start"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?p:"",h=n?"":p}else if(this.arrowPlacement==="end"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":p,h=n?p:"",d=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",c=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof l=="number"?`${l}px`:"",c=typeof a=="number"?`${a}px`:"");Object.assign(this.arrowEl.style,{top:c,right:u,bottom:d,left:h,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return Z`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${Rt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Z`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};x.styles=Fl;f([z(".popup")],x.prototype,"popup",2);f([z(".popup__arrow")],x.prototype,"arrowEl",2);f([m()],x.prototype,"anchor",2);f([m({type:Boolean,reflect:!0})],x.prototype,"active",2);f([m({reflect:!0})],x.prototype,"placement",2);f([m({reflect:!0})],x.prototype,"strategy",2);f([m({type:Number})],x.prototype,"distance",2);f([m({type:Number})],x.prototype,"skidding",2);f([m({type:Boolean})],x.prototype,"arrow",2);f([m({attribute:"arrow-placement"})],x.prototype,"arrowPlacement",2);f([m({attribute:"arrow-padding",type:Number})],x.prototype,"arrowPadding",2);f([m({type:Boolean})],x.prototype,"flip",2);f([m({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],x.prototype,"flipFallbackPlacements",2);f([m({attribute:"flip-fallback-strategy"})],x.prototype,"flipFallbackStrategy",2);f([m({type:Object})],x.prototype,"flipBoundary",2);f([m({attribute:"flip-padding",type:Number})],x.prototype,"flipPadding",2);f([m({type:Boolean})],x.prototype,"shift",2);f([m({type:Object})],x.prototype,"shiftBoundary",2);f([m({attribute:"shift-padding",type:Number})],x.prototype,"shiftPadding",2);f([m({attribute:"auto-size"})],x.prototype,"autoSize",2);f([m()],x.prototype,"sync",2);f([m({type:Object})],x.prototype,"autoSizeBoundary",2);f([m({attribute:"auto-size-padding",type:Number})],x.prototype,"autoSizePadding",2);x=f([nt("sl-popup")],x);var sc=tt`
  ${ot}

  :host {
    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,V=class extends W{constructor(){super(...arguments);this.type="normal",this.checked=!1,this.value="",this.disabled=!1}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel=="undefined"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Pa(this.defaultSlot)}render(){return Z`
      <div
        part="base"
        class=${Rt({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};V.styles=sc;f([z("slot:not([name])")],V.prototype,"defaultSlot",2);f([z(".menu-item")],V.prototype,"menuItem",2);f([m()],V.prototype,"type",2);f([m({type:Boolean,reflect:!0})],V.prototype,"checked",2);f([m()],V.prototype,"value",2);f([m({type:Boolean,reflect:!0})],V.prototype,"disabled",2);f([dt("checked")],V.prototype,"handleCheckedChange",1);f([dt("disabled")],V.prototype,"handleDisabledChange",1);f([dt("type")],V.prototype,"handleTypeChange",1);V=f([nt("sl-menu-item")],V);var ac=tt`
  ${ot}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,er=class extends W{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}handleClick(e){const r=e.target.closest("sl-menu-item");!r||r.disabled||r.inert||(r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}}))}handleKeyDown(e){if(e.key==="Enter"){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let i=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return Z`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};er.styles=ac;f([z("slot")],er.prototype,"defaultSlot",2);er=f([nt("sl-menu")],er);var lc=Object.defineProperty,cc=Object.getOwnPropertyDescriptor,dr=(e,t,r,i)=>{for(var o=i>1?void 0:i?cc(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&lc(t,r,o),o};let xe=class extends et{constructor(){super();this.day=Tn,this.weekDays=[{name:"monday",selected:!1,weekIndex:1},{name:"tuesday",selected:!1,weekIndex:2},{name:"wednesday",selected:!1,weekIndex:3},{name:"thursday",selected:!1,weekIndex:4},{name:"friday",selected:!1,weekIndex:5},{name:"saturday",selected:!1,weekIndex:6},{name:"sunday",selected:!1,weekIndex:0}],this.isOpen=!1,this._selectDay=e=>{this.weekDays=this.weekDays.map(t=>t.name===e?re(ee({},t),{selected:!0}):re(ee({},t),{selected:!1}))},this._updateUrlParam=e=>{const t=new URLSearchParams(window.location.search);t.set("day",e);const r=`${window.location.pathname}?${t.toString()}`;history.pushState(null,"",r)},this._updateDay=e=>{this.day.weekDay=e,this._selectDay(e),this._updateUrlParam(e)},this._selectDay(this.day.weekDay)}static get styles(){return[Lt`
        ol {
          display: grid;
          gap: 8px;
          grid-template-columns: repeat(3, 1fr);

          padding: 0;

          list-style-type: none;
          text-transform: capitalize;
        }

        .day {
          display: inline-block;
          box-sizing: border-box;

          border-radius: 8px;
          border: 1px solid var(--sl-color-purple-800);
          padding: 8px 16px;
          width: 100%;

          text-align: center;
        }

        .selected {
          background-color: var(--sl-color-purple-800);
          color: white;
        }

        sl-drawer::part(panel) {
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }
      `]}render(){return N`
      <span>or </span>
      <span @click=${()=>this._updateDay(Pn())}>today</span>

      <sl-drawer ?open=${this.isOpen} label="Drawer" placement="bottom">
        <sl-dropdown>
          <sl-button slot="trigger" caret>Select a day</sl-button>
          <sl-menu>
            ${kl(this.weekDays,e=>N`
                <sl-menu-item
                  @click=${()=>this._updateDay(e.name)}
                  class="${Ll({selected:e.selected})}"
                  value=${e.name}
                  >${e.name}</sl-menu-item
                >
              `)}
          </sl-menu>
        </sl-dropdown>

        <sl-button slot="footer" variant="primary">Close</sl-button>
      </sl-drawer>

      <sl-button @click=${()=>this.isOpen=!this.isOpen}
        >Filter
      </sl-button>
    `}};dr([kn()],xe.prototype,"day",2);dr([Uo()],xe.prototype,"weekDays",2);dr([Uo()],xe.prototype,"isOpen",2);xe=dr([Xt("app-day-selection")],xe);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dc(e,t,r){return e?t():r==null?void 0:r()}var hc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,Se=(e,t,r,i)=>{for(var o=i>1?void 0:i?uc(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&hc(t,r,o),o};let Gt=class extends et{constructor(){super(...arguments);this.business="",this.category="",this.discountName="",this.price=4.9,this.formatPrice=e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(e)}static get styles(){return[Lt`
        .discount-card {
          border: 2px solid lightblue;
          padding: 16px;
          border-radius: 16px;

          display: grid;
          grid-template-areas:
            'symbol . . price'
            'business . .  price';
        }

        #price {
          grid-area: price;
          align-self: center;
          justify-self: flex-end;
        }

        .name-category {
          text-transform: capitalize;
        }

        .business {
          grid-area: business;
        }
      `]}render(){return N`
      <div class="discount-card">
        <span class="name-category">
          ${dc(this.discountName,()=>N`${this.discountName}`,()=>N`${this.category}`)}
        </span>

        <span class="business">${this.business}</span>
        <data id="price" value=${this.price}
          >${this.formatPrice(this.price)}</data
        >
      </div>
    `}};Se([wt({type:String})],Gt.prototype,"business",2);Se([wt({type:String})],Gt.prototype,"category",2);Se([wt({type:String})],Gt.prototype,"discountName",2);Se([wt({type:Number})],Gt.prototype,"price",2);Gt=Se([Xt("app-discount-card")],Gt);var pc=Object.defineProperty,fc=Object.getOwnPropertyDescriptor,mc=(e,t,r,i)=>{for(var o=i>1?void 0:i?fc(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&pc(t,r,o),o};let Lo=class extends et{static get styles(){return Lt`
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
    `}constructor(){super()}firstUpdated(){var t;new gt((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:"/discount-day/",animate:!0,children:[{path:"",component:"app-discount"},{path:"discount",component:"app-discount",action:async()=>{await ur(()=>Promise.resolve().then(function(){return El}),void 0)}},{path:"about",component:"app-about",action:async()=>{await ur(()=>import("./app-about.9cdb19c7.js"),[])}},{path:"stats",component:"app-stats",action:async()=>{await ur(()=>import("./app-stats.99e0606b.js"),[])}}]}])}render(){return N`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};Lo=mc([Xt("app-index")],Lo);export{Sn as a,Xt as e,$l as g,nl as h,Lt as i,et as s,Uo as t,N as y};
//# sourceMappingURL=index.4b0b7547.js.map
