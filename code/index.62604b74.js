var $o=Object.defineProperty,xo=Object.defineProperties;var Ao=Object.getOwnPropertyDescriptors;var Vr=Object.getOwnPropertySymbols;var So=Object.prototype.hasOwnProperty,Eo=Object.prototype.propertyIsEnumerable;var Fr=(e,t,r)=>t in e?$o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Wt=(e,t)=>{for(var r in t||(t={}))So.call(t,r)&&Fr(e,r,t[r]);if(Vr)for(var r of Vr(t))Eo.call(t,r)&&Fr(e,r,t[r]);return e},qt=(e,t)=>xo(e,Ao(t));const Co=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}};Co();const Po="modulepreload",Wr={},ko="/discount-day/",qr=function(t,r){return!r||r.length===0?t():Promise.all(r.map(i=>{if(i=`${ko}${i}`,i in Wr)return;Wr[i]=!0;const n=i.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":Po,n||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),n)return new Promise((l,a)=>{s.addEventListener("load",l),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=window,kr=ve.ShadowRoot&&(ve.ShadyCSS===void 0||ve.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tr=Symbol(),Kr=new WeakMap;class hn{constructor(t,r,i){if(this._$cssResult$=!0,i!==Tr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(kr&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Kr.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Kr.set(r,t))}return t}toString(){return this.cssText}}const To=e=>new hn(typeof e=="string"?e:e+"",void 0,Tr),At=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new hn(r,e,Tr)},Oo=(e,t)=>{kr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),n=ve.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)})},Yr=kr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return To(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fe;const we=window,Xr=we.trustedTypes,Ro=Xr?Xr.emptyScript:"",Jr=we.reactiveElementPolyfillSupport,cr={toAttribute(e,t){switch(t){case Boolean:e=e?Ro:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Or=(e,t)=>t!==e&&(t==t||e==e),We={attribute:!0,type:String,converter:cr,reflect:!1,hasChanged:Or};class Et extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,i)=>{const n=this._$Ep(i,r);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,r=We){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(n){const o=this[t];this[r]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||We}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const n of i)this.createProperty(n,r[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(Yr(n))}else t!==void 0&&r.push(Yr(t));return r}static _$Ep(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,i;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Oo(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostConnected)===null||i===void 0?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostDisconnected)===null||i===void 0?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EO(t,r,i=We){var n;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const s=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:cr).toAttribute(r,i.type);this._$El=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Ev.get(t);if(o!==void 0&&this._$El!==o){const s=n.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:cr;this._$El=o,this[o]=l.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Or)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,o)=>this[o]=n),this._$Ei=void 0);let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(i)):this._$Ek()}catch(n){throw r=!1,this._$Ek(),n}r&&this._$AE(i)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,i)=>this._$EO(i,this[i],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Et.finalized=!0,Et.elementProperties=new Map,Et.elementStyles=[],Et.shadowRootOptions={mode:"open"},Jr==null||Jr({ReactiveElement:Et}),((Fe=we.reactiveElementVersions)!==null&&Fe!==void 0?Fe:we.reactiveElementVersions=[]).push("1.5.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qe;const $e=window,Lt=$e.trustedTypes,Gr=Lt?Lt.createPolicy("lit-html",{createHTML:e=>e}):void 0,lt=`lit$${(Math.random()+"").slice(9)}$`,un="?"+lt,Lo=`<${un}>`,Nt=document,ee=(e="")=>Nt.createComment(e),re=e=>e===null||typeof e!="object"&&typeof e!="function",pn=Array.isArray,No=e=>pn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Kt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zr=/-->/g,Qr=/>/g,bt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ti=/'/g,ei=/"/g,fn=/^(?:script|style|textarea|title)$/i,Do=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),R=Do(1),$t=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),ri=new WeakMap,Tt=Nt.createTreeWalker(Nt,129,null,!1),Mo=(e,t)=>{const r=e.length-1,i=[];let n,o=t===2?"<svg>":"",s=Kt;for(let a=0;a<r;a++){const c=e[a];let h,d,u=-1,p=0;for(;p<c.length&&(s.lastIndex=p,d=s.exec(c),d!==null);)p=s.lastIndex,s===Kt?d[1]==="!--"?s=Zr:d[1]!==void 0?s=Qr:d[2]!==void 0?(fn.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=bt):d[3]!==void 0&&(s=bt):s===bt?d[0]===">"?(s=n!=null?n:Kt,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?bt:d[3]==='"'?ei:ti):s===ei||s===ti?s=bt:s===Zr||s===Qr?s=Kt:(s=bt,n=void 0);const m=s===bt&&e[a+1].startsWith("/>")?" ":"";o+=s===Kt?c+Lo:u>=0?(i.push(h),c.slice(0,u)+"$lit$"+c.slice(u)+lt+m):c+lt+(u===-2?(i.push(void 0),a):m)}const l=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Gr!==void 0?Gr.createHTML(l):l,i]};class ie{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let o=0,s=0;const l=t.length-1,a=this.parts,[c,h]=Mo(t,r);if(this.el=ie.createElement(c,i),Tt.currentNode=this.el.content,r===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(n=Tt.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const u of n.getAttributeNames())if(u.endsWith("$lit$")||u.startsWith(lt)){const p=h[s++];if(d.push(u),p!==void 0){const m=n.getAttribute(p.toLowerCase()+"$lit$").split(lt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:g[2],strings:m,ctor:g[1]==="."?zo:g[1]==="?"?Io:g[1]==="@"?Ho:ze})}else a.push({type:6,index:o})}for(const u of d)n.removeAttribute(u)}if(fn.test(n.tagName)){const d=n.textContent.split(lt),u=d.length-1;if(u>0){n.textContent=Lt?Lt.emptyScript:"";for(let p=0;p<u;p++)n.append(d[p],ee()),Tt.nextNode(),a.push({type:2,index:++o});n.append(d[u],ee())}}}else if(n.nodeType===8)if(n.data===un)a.push({type:2,index:o});else{let d=-1;for(;(d=n.data.indexOf(lt,d+1))!==-1;)a.push({type:7,index:o}),d+=lt.length-1}o++}}static createElement(t,r){const i=Nt.createElement("template");return i.innerHTML=t,i}}function Dt(e,t,r=e,i){var n,o,s,l;if(t===$t)return t;let a=i!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[i]:r._$Cl;const c=re(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),c===void 0?a=void 0:(a=new c(e),a._$AT(e,r,i)),i!==void 0?((s=(l=r)._$Co)!==null&&s!==void 0?s:l._$Co=[])[i]=a:r._$Cl=a),a!==void 0&&(t=Dt(e,a._$AS(e,t.values),a,i)),t}class Uo{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:i},parts:n}=this._$AD,o=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Nt).importNode(i,!0);Tt.currentNode=o;let s=Tt.nextNode(),l=0,a=0,c=n[0];for(;c!==void 0;){if(l===c.index){let h;c.type===2?h=new ce(s,s.nextSibling,this,t):c.type===1?h=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(h=new jo(s,this,t)),this.u.push(h),c=n[++a]}l!==(c==null?void 0:c.index)&&(s=Tt.nextNode(),l++)}return o}p(t){let r=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class ce{constructor(t,r,i,n){var o;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cm=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Dt(this,t,r),re(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==$t&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):No(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==T&&re(this._$AH)?this._$AA.nextSibling.data=t:this.T(Nt.createTextNode(t)),this._$AH=t}$(t){var r;const{values:i,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ie.createElement(n.h,this.options)),n);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.p(i);else{const s=new Uo(o,this),l=s.v(this.options);s.p(i),this.T(l),this._$AH=s}}_$AC(t){let r=ri.get(t.strings);return r===void 0&&ri.set(t.strings,r=new ie(t)),r}k(t){pn(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const o of t)n===r.length?r.push(i=new ce(this.O(ee()),this.O(ee()),this,this.options)):i=r[n],i._$AI(o),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class ze{constructor(t,r,i,n,o){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,i,n){const o=this.strings;let s=!1;if(o===void 0)t=Dt(this,t,r,0),s=!re(t)||t!==this._$AH&&t!==$t,s&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=Dt(this,l[i+a],r,a),c===$t&&(c=this._$AH[a]),s||(s=!re(c)||c!==this._$AH[a]),c===T?t=T:t!==T&&(t+=(c!=null?c:"")+o[a+1]),this._$AH[a]=c}s&&!n&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class zo extends ze{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const Bo=Lt?Lt.emptyScript:"";class Io extends ze{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,Bo):this.element.removeAttribute(this.name)}}class Ho extends ze{constructor(t,r,i,n,o){super(t,r,i,n,o),this.type=5}_$AI(t,r=this){var i;if((t=(i=Dt(this,t,r,0))!==null&&i!==void 0?i:T)===$t)return;const n=this._$AH,o=t===T&&n!==T||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==T&&(n===T||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,i;typeof this._$AH=="function"?this._$AH.call((i=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class jo{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Dt(this,t)}}const ii=$e.litHtmlPolyfillSupport;ii==null||ii(ie,ce),((qe=$e.litHtmlVersions)!==null&&qe!==void 0?qe:$e.litHtmlVersions=[]).push("2.5.0");const Vo=(e,t,r)=>{var i,n;const o=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let s=o._$litPart$;if(s===void 0){const l=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=s=new ce(t.insertBefore(ee(),l),l,void 0,r!=null?r:{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ke,Ye;class V extends Et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const i=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=i.firstChild),i}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Vo(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return $t}}V.finalized=!0,V._$litElement$=!0,(Ke=globalThis.litElementHydrateSupport)===null||Ke===void 0||Ke.call(globalThis,{LitElement:V});const ni=globalThis.litElementPolyfillSupport;ni==null||ni({LitElement:V});((Ye=globalThis.litElementVersions)!==null&&Ye!==void 0?Ye:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:n,elements:o}=i;return{kind:n,elements:o,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fo=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?qt(Wt({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function mt(e){return(t,r)=>r!==void 0?((i,n,o)=>{n.constructor.createProperty(o,i)})(e,t,r):Fo(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wo(e){return mt(qt(Wt({},e),{state:!0}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xe;((Xe=window.HTMLSlotElement)===null||Xe===void 0?void 0:Xe.prototype.assignedElements)!=null;function xe(e){return e=e||[],Array.isArray(e)?e:[e]}function I(e){return`[Vaadin.Router] ${e}`}function qo(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Ae="module",Se="nomodule",dr=[Ae,Se];function oi(e){if(!e.match(/.+\.[m]?js$/))throw new Error(I(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function mn(e){if(!e||!B(e.path))throw new Error(I('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!xt(e.action)&&!Array.isArray(e.children)&&!xt(e.children)&&!Ee(t)&&!r.some(i=>B(e[i])))throw new Error(I(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if(B(t))oi(t);else if(dr.some(i=>i in t))dr.forEach(i=>i in t&&oi(t[i]));else throw new Error(I('Expected route bundle to include either "'+Se+'" or "'+Ae+'" keys, or both'));e.redirect&&["bundle","component"].forEach(i=>{i in e&&console.warn(I(`Route config "${e.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function si(e){xe(e).forEach(t=>mn(t))}function ai(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===Ae?r.setAttribute("type",Ae):t===Se&&r.setAttribute(Se,""),r.async=!0),new Promise((i,n)=>{r.onreadystatechange=r.onload=o=>{r.__dynamicImportLoaded=!0,i(o)},r.onerror=o=>{r.parentNode&&r.parentNode.removeChild(r),n(o)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&i()})}function Ko(e){return B(e)?ai(e):Promise.race(dr.filter(t=>t in e).map(t=>ai(e[t],t)))}function Jt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function Ee(e){return typeof e=="object"&&!!e}function xt(e){return typeof e=="function"}function B(e){return typeof e=="string"}function gn(e){const t=new Error(I(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const Pt=new class{};function Yo(e){const t=e.port,r=e.protocol,o=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${o}`}function li(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let l=0;l<r.length;l++){const a=r[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||Yo(t))!==window.location.origin)return;const{pathname:n,search:o,hash:s}=t;Jt("go",{pathname:n,search:o,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const Xo={activate(){window.document.addEventListener("click",li)},inactivate(){window.document.removeEventListener("click",li)}},Jo=/Trident/.test(navigator.userAgent);Jo&&!xt(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function ci(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:i}=window.location;Jt("go",{pathname:t,search:r,hash:i})}const Go={activate(){window.addEventListener("popstate",ci)},inactivate(){window.removeEventListener("popstate",ci)}};var jt=$n,Zo=Rr,Qo=is,ts=yn,es=wn,vn="/",bn="./",rs=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Rr(e,t){for(var r=[],i=0,n=0,o="",s=t&&t.delimiter||vn,l=t&&t.delimiters||bn,a=!1,c;(c=rs.exec(e))!==null;){var h=c[0],d=c[1],u=c.index;if(o+=e.slice(n,u),n=u+h.length,d){o+=d[1],a=!0;continue}var p="",m=e[n],g=c[2],b=c[3],y=c[4],w=c[5];if(!a&&o.length){var _=o.length-1;l.indexOf(o[_])>-1&&(p=o[_],o=o.slice(0,_))}o&&(r.push(o),o="",a=!1);var C=p!==""&&m!==void 0&&m!==p,nt=w==="+"||w==="*",ot=w==="?"||w==="*",st=p||s,D=b||y;r.push({name:g||i++,prefix:p,delimiter:st,optional:ot,repeat:nt,partial:C,pattern:D?ns(D):"[^"+at(st)+"]+?"})}return(o||n<e.length)&&r.push(o+e.substr(n)),r}function is(e,t){return yn(Rr(e,t))}function yn(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(i,n){for(var o="",s=n&&n.encode||encodeURIComponent,l=0;l<e.length;l++){var a=e[l];if(typeof a=="string"){o+=a;continue}var c=i?i[a.name]:void 0,h;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(h=s(c[d],a),!t[l].test(h))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(d===0?a.prefix:a.delimiter)+h}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(h=s(String(c),a),!t[l].test(h))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+h+'"');o+=a.prefix+h;continue}if(a.optional){a.partial&&(o+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return o}}function at(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ns(e){return e.replace(/([=!:$/()])/g,"\\$1")}function _n(e){return e&&e.sensitive?"":"i"}function os(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function ss(e,t,r){for(var i=[],n=0;n<e.length;n++)i.push($n(e[n],t,r).source);return new RegExp("(?:"+i.join("|")+")",_n(r))}function as(e,t,r){return wn(Rr(e,r),t,r)}function wn(e,t,r){r=r||{};for(var i=r.strict,n=r.start!==!1,o=r.end!==!1,s=at(r.delimiter||vn),l=r.delimiters||bn,a=[].concat(r.endsWith||[]).map(at).concat("$").join("|"),c=n?"^":"",h=e.length===0,d=0;d<e.length;d++){var u=e[d];if(typeof u=="string")c+=at(u),h=d===e.length-1&&l.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+at(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;t&&t.push(u),u.optional?u.partial?c+=at(u.prefix)+"("+p+")?":c+="(?:"+at(u.prefix)+"("+p+"))?":c+=at(u.prefix)+"("+p+")"}}return o?(i||(c+="(?:"+s+")?"),c+=a==="$"?"$":"(?="+a+")"):(i||(c+="(?:"+s+"(?="+a+"))?"),h||(c+="(?="+s+"|"+a+")")),new RegExp(c,_n(r))}function $n(e,t,r){return e instanceof RegExp?os(e,t):Array.isArray(e)?ss(e,t,r):as(e,t,r)}jt.parse=Zo;jt.compile=Qo;jt.tokensToFunction=ts;jt.tokensToRegExp=es;const{hasOwnProperty:ls}=Object.prototype,hr=new Map;hr.set("|false",{keys:[],pattern:/(?:)/});function di(e){try{return decodeURIComponent(e)}catch{return e}}function cs(e,t,r,i,n){r=!!r;const o=`${e}|${r}`;let s=hr.get(o);if(!s){const c=[];s={keys:c,pattern:jt(e,c,{end:r,strict:e===""})},hr.set(o,s)}const l=s.pattern.exec(t);if(!l)return null;const a=Object.assign({},n);for(let c=1;c<l.length;c++){const h=s.keys[c-1],d=h.name,u=l[c];(u!==void 0||!ls.call(a,d))&&(h.repeat?a[d]=u?u.split(h.delimiter).map(di):[]:a[d]=u&&di(u))}return{path:l[0],keys:(i||[]).concat(s.keys),params:a}}function xn(e,t,r,i,n){let o,s,l=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(c){if(e===c)return{done:!0};const h=e.__children=e.__children||e.children;if(!o&&(o=cs(a,t,!h,i,n),o))return{done:!1,value:{route:e,keys:o.keys,params:o.params,path:o.path}};if(o&&h)for(;l<h.length;){if(!s){const u=h[l];u.parent=e;let p=o.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=xn(u,t.substr(p),r,o.keys,o.params)}const d=s.next(c);if(!d.done)return{done:!1,value:d.value};s=null,l++}return{done:!0}}}}function ds(e){if(xt(e.route.action))return e.route.action(e)}function hs(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function us(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function ps(e,t){const{route:r,path:i}=t;if(r&&!r.__synthetic){const n={path:i,route:r};if(!e.chain)e.chain=[];else if(r.parent){let o=e.chain.length;for(;o--&&e.chain[o].route&&e.chain[o].route!==r.parent;)e.chain.pop()}e.chain.push(n)}}class ne{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||ds,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){si(t);const r=[...xe(t)];this.root.__children=r}addRoutes(t){return si(t),this.root.__children.push(...xe(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,B(t)?{pathname:t}:t),i=xn(this.root,this.__normalizePathname(r.pathname),this.baseUrl),n=this.resolveRoute;let o=null,s=null,l=r;function a(c,h=o.value.route,d){const u=d===null&&o.value.route;return o=s||i.next(u),s=null,!c&&(o.done||!hs(h,o.value.route))?(s=o,Promise.resolve(Pt)):o.done?Promise.reject(gn(r)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},r,o.value),ps(l,o.value),Promise.resolve(n(l)).then(p=>p!=null&&p!==Pt?(l.result=p.result||p,l):a(c,h,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const h=us(l);if(c?console.warn(h):c=new Error(h),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,i=this.constructor.__createUrl(t,r).href;if(i.slice(0,r.length)===r)return i.slice(r.length)}}ne.pathToRegexp=jt;const{pathToRegexp:hi}=ne,ui=new Map;function An(e,t,r){const i=t.name||t.component;if(i&&(e.has(i)?e.get(i).push(t):e.set(i,[t])),Array.isArray(r))for(let n=0;n<r.length;n++){const o=r[n];o.parent=t,An(e,o,o.__children||o.children)}}function pi(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function fi(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function fs(e,t={}){if(!(e instanceof ne))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(i,n)=>{let o=pi(r,i);if(!o&&(r.clear(),An(r,e.root,e.root.__children),o=pi(r,i),!o))throw new Error(`Route "${i}" not found`);let s=ui.get(o.fullPath);if(!s){let a=fi(o),c=o.parent;for(;c;){const p=fi(c);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const h=hi.parse(a),d=hi.tokensToFunction(h),u=Object.create(null);for(let p=0;p<h.length;p++)B(h[p])||(u[h[p].name]=!0);s={toPath:d,keys:u},ui.set(a,s),o.fullPath=a}let l=s.toPath(n,t)||"/";if(t.stringifyQueryParams&&n){const a={},c=Object.keys(n);for(let d=0;d<c.length;d++){const u=c[d];s.keys[u]||(a[u]=n[u])}const h=t.stringifyQueryParams(a);h&&(l+=h.charAt(0)==="?"?h:`?${h}`)}return l}}let mi=[];function ms(e){mi.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),mi=e}const gs=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},vs=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function gi(e,t){return e.classList.add(t),new Promise(r=>{if(gs(e)){const i=e.getBoundingClientRect(),n=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${n}`),vs(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const bs=256;function Je(e){return e!=null}function ys(e){const t=Object.assign({},e);return delete t.next,t}function z({pathname:e="",search:t="",hash:r="",chain:i=[],params:n={},redirectFrom:o,resolver:s},l){const a=i.map(c=>c.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:l||a.length&&a[a.length-1]||null,params:n,redirectFrom:o,getUrl:(c={})=>ye(ht.pathToRegexp.compile(Sn(a))(Object.assign({},n,c)),s)}}function vi(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function _s(e,t){t.location=z(e);const r=e.chain.map(i=>i.route).indexOf(e.route);return e.chain[r].element=t,t}function be(e,t,r){if(xt(e))return e.apply(r,t)}function bi(e,t,r){return i=>{if(i&&(i.cancel||i.redirect))return i;if(r)return be(r[e],t,r)}}function ws(e,t){if(!Array.isArray(e)&&!Ee(e))throw new Error(I(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=xe(e);for(let i=0;i<r.length;i++)mn(r[i]),t.__children.push(r[i])}function ge(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function ye(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function Sn(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class ht extends ne{constructor(t,r){const i=document.head.querySelector("base"),n=i&&i.getAttribute("href");super([],Object.assign({baseUrl:n&&ne.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},r));this.resolveRoute=s=>this.__resolveRoute(s);const o=ht.NavigationTrigger;ht.setTriggers.apply(ht,Object.keys(o).map(s=>o[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=z({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let i=Promise.resolve();xt(r.children)&&(i=i.then(()=>r.children(ys(t))).then(o=>{!Je(o)&&!xt(r.children)&&(o=r.children),ws(o,r)}));const n={redirect:o=>vi(t,o),component:o=>{const s=document.createElement(o);return this.__createdByRouter.set(s,!0),s}};return i.then(()=>{if(this.__isLatestRender(t))return be(r.action,[t,n],r)}).then(o=>{if(Je(o)&&(o instanceof HTMLElement||o.redirect||o===Pt))return o;if(B(r.redirect))return n.redirect(r.redirect);if(r.bundle)return Ko(r.bundle).then(()=>{},()=>{throw new Error(I(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(o=>{if(Je(o))return o;if(B(r.component))return n.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const i=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},B(t)?{pathname:t}:t,{__renderId:i});return this.ready=this.resolve(n).then(o=>this.__fullyResolveChain(o)).then(o=>{if(this.__isLatestRender(o)){const s=this.__previousContext;if(o===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=z(o),r&&this.__updateBrowserHistory(o,i===1),Jt("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.__copyUnchangedElements(o,s),this.__previousContext=o,this.location;this.__addAppearingContent(o,s);const l=this.__animateIfNeeded(o);return this.__runOnAfterEnterCallbacks(o),this.__runOnAfterLeaveCallbacks(o,s),l.then(()=>{if(this.__isLatestRender(o))return this.__removeDisappearingContent(),this.__previousContext=o,this.location})}}).catch(o=>{if(i===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(n),ge(this.__outlet&&this.__outlet.children),this.location=z(Object.assign(n,{resolver:this})),Jt("error",Object.assign({router:this,error:o},n)),o}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(i=>{const o=i!==r?i:t,l=ye(Sn(i.chain),i.resolver)===i.pathname,a=(c,h=c.route,d)=>c.next(void 0,h,d).then(u=>u===null||u===Pt?l?c:h.parent!==null?a(c,h.parent,u):u:u);return a(i).then(c=>{if(c===null||c===Pt)throw gn(o);return c&&c!==Pt&&c!==i?this.__fullyResolveChain(o,c):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?(_s(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(I(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${qo(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},i=r.chain||[],n=t.chain;let o=Promise.resolve();const s=()=>({cancel:!0}),l=a=>vi(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,n.length)&&!(i[a].route!==n[a].route||i[a].path!==n[a].path&&i[a].element!==n[a].element||!this.__isReusableElement(i[a].element,n[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=n.length===i.length&&t.__divergedChainIndex==n.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=n.length-1;a>=0;a--)o=this.__runOnBeforeLeaveCallbacks(o,t,{prevent:s},i[a]);for(let a=0;a<n.length;a++)o=this.__runOnBeforeEnterCallbacks(o,t,{prevent:s,redirect:l},n[a]),i[a].element.location=z(t,i[a].route)}else for(let a=i.length-1;a>=t.__divergedChainIndex;a--)o=this.__runOnBeforeLeaveCallbacks(o,t,{prevent:s},i[a])}if(!t.__skipAttach)for(let a=0;a<n.length;a++)a<t.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=z(t,i[a].route)):(o=this.__runOnBeforeEnterCallbacks(o,t,{prevent:s,redirect:l},n[a]),n[a].element&&(n[a].element.location=z(t,n[a].route)));return o.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,i,n){const o=z(r);return t.then(s=>{if(this.__isLatestRender(r))return bi("onBeforeLeave",[o,i,this],n.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,i,n){const o=z(r,n.route);return t.then(s=>{if(this.__isLatestRender(r))return bi("onBeforeEnter",[o,i,this],n.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,i){if(r>bs)throw new Error(I(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:i})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(I(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:i=""},n){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==i){const o=n?"replaceState":"pushState";window.history[o](null,document.title,t+r+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let i=this.__outlet;for(let n=0;n<t.__divergedChainIndex;n++){const o=r&&r.chain[n].element;if(o)if(o.parentNode===i)t.chain[n].element=o,i=o;else break}return i}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(o=>this.__addedByRouter.get(o)&&o!==t.result);let n=i;for(let o=t.__divergedChainIndex;o<t.chain.length;o++){const s=t.chain[o].element;s&&(n.appendChild(s),this.__addedByRouter.set(s,!0),n===i&&this.__appearingContent.push(s),n=s)}}__removeDisappearingContent(){this.__disappearingContent&&ge(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ge(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(!!r)for(let i=r.chain.length-1;i>=t.__divergedChainIndex&&this.__isLatestRender(t);i--){const n=r.chain[i].element;if(!!n)try{const o=z(t);be(n.onAfterLeave,[o,{},r.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&ge(n.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const i=t.chain[r].element||{},n=z(t,t.chain[r].route);be(i.onAfterEnter,[n,{},t.resolver],i)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],n=[],o=t.chain;let s;for(let l=o.length;l>0;l--)if(o[l-1].route.animate){s=o[l-1].route.animate;break}if(r&&i&&s){const l=Ee(s)&&s.leave||"leaving",a=Ee(s)&&s.enter||"entering";n.push(gi(r,l)),n.push(gi(i,a))}return Promise.all(n).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:i,hash:n}=t?t.detail:window.location;B(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:i,hash:n},!0))}static setTriggers(...t){ms(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=fs(this)),ye(this.__urlForName(t,r),this)}urlForPath(t,r){return ye(ht.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:i,hash:n}=B(t)?this.__createUrl(t,"http://a"):t;return Jt("go",{pathname:r,search:i,hash:n})}}const $s=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,_e=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function xs(){function e(){return!0}return En(e)}function As(){try{return Ss()?!0:Es()?_e?!Cs():!xs():!1}catch{return!1}}function Ss(){return localStorage.getItem("vaadin.developmentmode.force")}function Es(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Cs(){return!!(_e&&Object.keys(_e).map(t=>_e[t]).filter(t=>t.productionMode).length>0)}function En(e,t){if(typeof e!="function")return;const r=$s.exec(e.toString());if(r)try{e=new Function(r[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return e(t)}window.Vaadin=window.Vaadin||{};const yi=function(e,t){if(window.Vaadin.developmentMode)return En(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=As());function Ps(){}const ks=function(){if(typeof yi=="function")return yi(Ps)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});ks();ht.NavigationTrigger={POPSTATE:Go,CLICK:Xo};/**
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
 */const _i=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,ur=(e,t,r=null)=>{for(;t!==r;){const i=t.nextSibling;e.removeChild(t),t=i}},J=`{{lit-${String(Math.random()).slice(2)}}}`,Cn=`<!--${J}-->`,wi=new RegExp(`${J}|${Cn}`);class Pn{constructor(t,r){this.parts=[],this.element=r;const i=[],n=[],o=document.createTreeWalker(r.content,133,null,!1);let s=0,l=-1,a=0;const{strings:c,values:{length:h}}=t;for(;a<h;){const d=o.nextNode();if(d!==null){if(l++,d.nodeType===1){if(d.hasAttributes()){const u=d.attributes,{length:p}=u;let m=0;for(let g=0;g<p;g++)$i(u[g].name,"$lit$")&&m++;for(;m-- >0;){const g=c[a],b=pr.exec(g)[2],y=b.toLowerCase()+"$lit$",w=d.getAttribute(y);d.removeAttribute(y);const _=w.split(wi);this.parts.push({type:"attribute",index:l,name:b,strings:_}),a+=_.length-1}}d.tagName==="TEMPLATE"&&(n.push(d),o.currentNode=d.content)}else if(d.nodeType===3){const u=d.data;if(u.indexOf(J)>=0){const p=d.parentNode,m=u.split(wi),g=m.length-1;for(let b=0;b<g;b++){let y,w=m[b];if(w==="")y=ct();else{const _=pr.exec(w);_!==null&&$i(_[2],"$lit$")&&(w=w.slice(0,_.index)+_[1]+_[2].slice(0,-5)+_[3]),y=document.createTextNode(w)}p.insertBefore(y,d),this.parts.push({type:"node",index:++l})}m[g]===""?(p.insertBefore(ct(),d),i.push(d)):d.data=m[g],a+=g}}else if(d.nodeType===8)if(d.data===J){const u=d.parentNode;d.previousSibling!==null&&l!==s||(l++,u.insertBefore(ct(),d)),s=l,this.parts.push({type:"node",index:l}),d.nextSibling===null?d.data="":(i.push(d),l--),a++}else{let u=-1;for(;(u=d.data.indexOf(J,u+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=n.pop()}for(const d of i)d.parentNode.removeChild(d)}}const $i=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},kn=e=>e.index!==-1,ct=()=>document.createComment(""),pr=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function xi(e,t){const{element:{content:r},parts:i}=e,n=document.createTreeWalker(r,133,null,!1);let o=Gt(i),s=i[o],l=-1,a=0;const c=[];let h=null;for(;n.nextNode();){l++;const d=n.currentNode;for(d.previousSibling===h&&(h=null),t.has(d)&&(c.push(d),h===null&&(h=d)),h!==null&&a++;s!==void 0&&s.index===l;)s.index=h!==null?-1:s.index-a,o=Gt(i,o),s=i[o]}c.forEach(d=>d.parentNode.removeChild(d))}const Ts=e=>{let t=e.nodeType===11?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},Gt=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const i=e[r];if(kn(i))return r}return-1};/**
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
 */const Os=new WeakMap,oe=e=>typeof e=="function"&&Os.has(e),H={},Ai={};/**
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
 */class fr{constructor(t,r,i){this.__parts=[],this.template=t,this.processor=r,this.options=i}update(t){let r=0;for(const i of this.__parts)i!==void 0&&i.setValue(t[r]),r++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const t=_i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,s=0,l=0,a=n.nextNode();for(;s<i.length;)if(o=i[s],kn(o)){for(;l<o.index;)l++,a.nodeName==="TEMPLATE"&&(r.push(a),n.currentNode=a.content),(a=n.nextNode())===null&&(n.currentNode=r.pop(),a=n.nextNode());if(o.type==="node"){const c=this.processor.handleTextExpression(this.options);c.insertAfterNode(a.previousSibling),this.__parts.push(c)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return _i&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
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
 */const Rs=` ${J} `;class Tn{constructor(t,r,i,n){this.strings=t,this.values=r,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let r="",i=!1;for(let n=0;n<t;n++){const o=this.strings[n],s=o.lastIndexOf("<!--");i=(s>-1||i)&&o.indexOf("-->",s+1)===-1;const l=pr.exec(o);r+=l===null?o+(i?Rs:Cn):o.substr(0,l.index)+l[1]+l[2]+"$lit$"+l[3]+J}return r+=this.strings[t],r}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}/**
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
 */const Lr=e=>e===null||!(typeof e=="object"||typeof e=="function"),On=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Rn{constructor(t,r,i){this.dirty=!0,this.element=t,this.name=r,this.strings=i,this.parts=[];for(let n=0;n<i.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new Ln(this)}_getValue(){const t=this.strings,r=t.length-1;let i="";for(let n=0;n<r;n++){i+=t[n];const o=this.parts[n];if(o!==void 0){const s=o.value;if(Lr(s)||!On(s))i+=typeof s=="string"?s:String(s);else for(const l of s)i+=typeof l=="string"?l:String(l)}}return i+=t[r],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Ln{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===H||Lr(t)&&t===this.value||(this.value=t,oe(t)||(this.committer.dirty=!0))}commit(){for(;oe(this.value);){const t=this.value;this.value=H,t(this)}this.value!==H&&this.committer.commit()}}class Be{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(ct()),this.endNode=t.appendChild(ct())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=ct()),t.__insert(this.endNode=ct())}insertAfterPart(t){t.__insert(this.startNode=ct()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;oe(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=H,r(this)}const t=this.__pendingValue;t!==H&&(Lr(t)?t!==this.value&&this.__commitText(t):t instanceof Tn?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):On(t)?this.__commitIterable(t):t===Ai?(this.value=Ai,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const r=this.startNode.nextSibling,i=typeof(t=t==null?"":t)=="string"?t:String(t);r===this.endNode.previousSibling&&r.nodeType===3?r.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const r=this.options.templateFactory(t);if(this.value instanceof fr&&this.value.template===r)this.value.update(t.values);else{const i=new fr(r,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const r=this.value;let i,n=0;for(const o of t)i=r[n],i===void 0&&(i=new Be(this.options),r.push(i),n===0?i.appendIntoPart(this):i.insertAfterPart(r[n-1])),i.setValue(o),i.commit(),n++;n<r.length&&(r.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){ur(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Ls{constructor(t,r,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;oe(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=H,r(this)}if(this.__pendingValue===H)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=H}}class Ns extends Rn{constructor(t,r,i){super(t,r,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new Ds(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Ds extends Ln{}let Nn=!1;(()=>{try{const e={get capture(){return Nn=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{}})();class Ms{constructor(t,r,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(t){this.__pendingValue=t}commit(){for(;oe(this.__pendingValue);){const o=this.__pendingValue;this.__pendingValue=H,o(this)}if(this.__pendingValue===H)return;const t=this.__pendingValue,r=this.value,i=t==null||r!=null&&(t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive),n=t!=null&&(r==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=Us(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=H}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Us=e=>e&&(Nn?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function zs(e){let t=se.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},se.set(e.type,t));let r=t.stringsArray.get(e.strings);if(r!==void 0)return r;const i=e.strings.join(J);return r=t.keyString.get(i),r===void 0&&(r=new Pn(e,e.getTemplateElement()),t.keyString.set(i,r)),t.stringsArray.set(e.strings,r),r}const se=new Map,St=new WeakMap;/**
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
 */const Bs=new class{handleAttributeExpressions(e,t,r,i){const n=t[0];return n==="."?new Ns(e,t.slice(1),r).parts:n==="@"?[new Ms(e,t.slice(1),i.eventContext)]:n==="?"?[new Ls(e,t.slice(1),r)]:new Rn(e,t,r).parts}handleTextExpression(e){return new Be(e)}};/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const M=(e,...t)=>new Tn(e,t,"html",Bs),Dn=(e,t)=>`${e}--${t}`;let Ce=!0;window.ShadyCSS===void 0?Ce=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Ce=!1);const Is=e=>t=>{const r=Dn(t.type,e);let i=se.get(r);i===void 0&&(i={stringsArray:new WeakMap,keyString:new Map},se.set(r,i));let n=i.stringsArray.get(t.strings);if(n!==void 0)return n;const o=t.strings.join(J);if(n=i.keyString.get(o),n===void 0){const s=t.getTemplateElement();Ce&&window.ShadyCSS.prepareTemplateDom(s,e),n=new Pn(t,s),i.keyString.set(o,n)}return i.stringsArray.set(t.strings,n),n},Hs=["html","svg"],Mn=new Set,js=(e,t,r)=>{Mn.add(e);const i=r?r.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:o}=n;if(o===0)return void window.ShadyCSS.prepareTemplateStyles(i,e);const s=document.createElement("style");for(let c=0;c<o;c++){const h=n[c];h.parentNode.removeChild(h),s.textContent+=h.textContent}(c=>{Hs.forEach(h=>{const d=se.get(Dn(h,c));d!==void 0&&d.keyString.forEach(u=>{const{element:{content:p}}=u,m=new Set;Array.from(p.querySelectorAll("style")).forEach(g=>{m.add(g)}),xi(u,m)})})})(e);const l=i.content;r?function(c,h,d=null){const{element:{content:u},parts:p}=c;if(d==null)return void u.appendChild(h);const m=document.createTreeWalker(u,133,null,!1);let g=Gt(p),b=0,y=-1;for(;m.nextNode();)for(y++,m.currentNode===d&&(b=Ts(h),d.parentNode.insertBefore(h,d));g!==-1&&p[g].index===y;){if(b>0){for(;g!==-1;)p[g].index+=b,g=Gt(p,g);return}g=Gt(p,g)}}(r,s,l.firstChild):l.insertBefore(s,l.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const a=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(r){l.insertBefore(s,l.firstChild);const c=new Set;c.add(s),xi(r,c)}};window.JSCompiler_renameProperty=(e,t)=>e;const mr={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Un=(e,t)=>t!==e&&(t==t||e==e),Ge={attribute:!0,type:String,converter:mr,reflect:!1,hasChanged:Un};class zn extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((r,i)=>{const n=this._attributeNameForProperty(i,r);n!==void 0&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((r,i)=>this._classProperties.set(i,r))}}static createProperty(t,r=Ge){if(this._ensureClassProperties(),this._classProperties.set(t,r),r.noAccessor||this.prototype.hasOwnProperty(t))return;const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(n){const o=this[t];this[r]=n,this._requestUpdate(t,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Ge}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(const n of i)this.createProperty(n,r[n])}}static _attributeNameForProperty(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,r,i=Un){return i(t,r)}static _propertyValueFromAttribute(t,r){const i=r.type,n=r.converter||mr,o=typeof n=="function"?n:n.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,r){if(r.reflect===void 0)return;const i=r.type,n=r.converter;return(n&&n.toAttribute||mr.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,r)=>{if(this.hasOwnProperty(r)){const i=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,r)=>this[r]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,r,i){r!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,r,i=Ge){const n=this.constructor,o=n._attributeNameForProperty(t,i);if(o!==void 0){const s=n._propertyValueToAttribute(r,i);if(s===void 0)return;this._updateState=8|this._updateState,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._updateState=-9&this._updateState}}_attributeToProperty(t,r){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(n!==void 0){const o=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(r,o),this._updateState=-17&this._updateState}}_requestUpdate(t,r){let i=!0;if(t!==void 0){const n=this.constructor,o=n.getPropertyOptions(t);n._valueHasChanged(this[t],r,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,r),o.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,r){return this._requestUpdate(t,r),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const r=this._changedProperties;try{t=this.shouldUpdate(r),t?this.update(r):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,i)=>this._propertyToAttribute(i,this[i],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}zn.finalized=!0;/**
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
 */const Vs=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function k(e){return(t,r)=>r!==void 0?((i,n,o)=>{n.constructor.createProperty(o,i)})(e,t,r):Vs(e,t)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Bn="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,In=Symbol();class Si{constructor(t,r){if(r!==In)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(Bn?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Fs=(e,...t)=>{const r=t.reduce((i,n,o)=>i+(s=>{if(s instanceof Si)return s.cssText;if(typeof s=="number")return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[o+1],e[0]);return new Si(r,In)};/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Ei={};class gr extends zn{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(t===void 0)this._styles=[];else if(Array.isArray(t)){const r=(o,s)=>o.reduceRight((l,a)=>Array.isArray(a)?r(a,l):(l.add(a),l),s),i=r(t,new Set),n=[];i.forEach(o=>n.unshift(o)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;t.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?Bn?this.renderRoot.adoptedStyleSheets=t.map(r=>r.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(r=>r.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){const r=this.render();super.update(t),r!==Ei&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{const n=document.createElement("style");n.textContent=i.cssText,this.renderRoot.appendChild(n)}))}render(){return Ei}}gr.finalized=!0,gr.render=(e,t,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");const i=r.scopeName,n=St.has(t),o=Ce&&t.nodeType===11&&!!t.host,s=o&&!Mn.has(i),l=s?document.createDocumentFragment():t;if(((a,c,h)=>{let d=St.get(c);d===void 0&&(ur(c,c.firstChild),St.set(c,d=new Be(Object.assign({templateFactory:zs},h))),d.appendInto(c)),d.setValue(a),d.commit()})(e,l,Object.assign({templateFactory:Is(i)},r)),s){const a=St.get(l);St.delete(l);const c=a.value instanceof fr?a.value.template:void 0;js(i,l,c),ur(t,t.firstChild),t.appendChild(l),St.set(t,a)}!n&&o&&window.ShadyCSS.styleElement(t.host)};var P=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let E=class extends gr{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancel()})}static get styles(){return Fs`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch{console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch{return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),(await this.deferredprompt.userChoice).outcome==="accepted"){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let r=new CustomEvent("hide");this.dispatchEvent(r),e()})}render(){return M`${"standalone"in navigator&&navigator.standalone===!1||this.usecustom!==!0&&this.shouldShowInstall()&&this.installed===!1?M`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${this.openmodal===!0?M`<div id="installModalWrapper">${this.openmodal?M`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?M`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>M`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?M`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(e=>M`<div><img alt="App Screenshot" src="${e.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?M`<p id="iosText">${this.iosinstallinfotext}</p>`:M`<div id="buttonsContainer">${this.deferredprompt?M`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:M`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};var Ze;P([k({type:String})],E.prototype,"manifestpath",void 0),P([k({type:String})],E.prototype,"iconpath",void 0),P([k({type:Object})],E.prototype,"manifestdata",void 0),P([k({type:Boolean})],E.prototype,"openmodal",void 0),P([k({type:Boolean})],E.prototype,"showopen",void 0),P([k({type:Boolean})],E.prototype,"isSupportingBrowser",void 0),P([k({type:Boolean})],E.prototype,"isIOS",void 0),P([k({type:Boolean})],E.prototype,"installed",void 0),P([k({type:Boolean})],E.prototype,"hasprompt",void 0),P([k({type:Boolean})],E.prototype,"usecustom",void 0),P([k({type:Array})],E.prototype,"relatedApps",void 0),P([k({type:String})],E.prototype,"explainer",void 0),P([k({type:String})],E.prototype,"featuresheader",void 0),P([k({type:String})],E.prototype,"descriptionheader",void 0),P([k({type:String})],E.prototype,"installbuttontext",void 0),P([k({type:String})],E.prototype,"cancelbuttontext",void 0),P([k({type:String})],E.prototype,"iosinstallinfotext",void 0),P([k()],E.prototype,"deferredprompt",void 0),E=P([(Ze="pwa-install",e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(Ze,e):((t,r)=>{const{kind:i,elements:n}=r;return{kind:i,elements:n,finisher(o){window.customElements.define(t,o)}}})(Ze,e))],E);var Nr=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Dr=Symbol(),Ci=new Map,Hn=class{constructor(e,t){if(this._$cssResult$=!0,t!==Dr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=Ci.get(this.cssText);return Nr&&e===void 0&&(Ci.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},Ws=e=>new Hn(typeof e=="string"?e:e+"",Dr),et=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new Hn(r,Dr)},qs=(e,t)=>{Nr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),n=window.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)})},Pi=Nr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Ws(r)})(e):e,Qe,ki=window.trustedTypes,Ks=ki?ki.emptyScript:"",Ti=window.reactiveElementPolyfillSupport,vr={toAttribute(e,t){switch(t){case Boolean:e=e?Ks:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},jn=(e,t)=>t!==e&&(t==t||e==e),tr={attribute:!0,type:String,converter:vr,reflect:!1,hasChanged:jn},Ct=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const i=this._$Eh(r,t);i!==void 0&&(this._$Eu.set(i,r),e.push(i))}),e}static createProperty(e,t=tr){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||tr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Pi(i))}else e!==void 0&&t.push(Pi(e));return t}static _$Eh(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return qs(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=tr){var i,n;const o=this.constructor._$Eh(e,r);if(o!==void 0&&r.reflect===!0){const s=((n=(i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&n!==void 0?n:vr.toAttribute)(t,r.type);this._$Ei=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}_$AK(e,t){var r,i,n;const o=this.constructor,s=o._$Eu.get(e);if(s!==void 0&&this._$Ei!==s){const l=o.getPropertyOptions(s),a=l.converter,c=(n=(i=(r=a)===null||r===void 0?void 0:r.fromAttribute)!==null&&i!==void 0?i:typeof a=="function"?a:null)!==null&&n!==void 0?n:vr.fromAttribute;this._$Ei=s,this[s]=c(t,l.type),this._$Ei=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||jn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,n)=>this[n]=i),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$ES(r,this[r],t)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};Ct.finalized=!0,Ct.elementProperties=new Map,Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Ti==null||Ti({ReactiveElement:Ct}),((Qe=globalThis.reactiveElementVersions)!==null&&Qe!==void 0?Qe:globalThis.reactiveElementVersions=[]).push("1.3.2");var er,Mt=globalThis.trustedTypes,Oi=Mt?Mt.createPolicy("lit-html",{createHTML:e=>e}):void 0,dt=`lit$${(Math.random()+"").slice(9)}$`,Vn="?"+dt,Ys=`<${Vn}>`,Ut=document,ae=(e="")=>Ut.createComment(e),le=e=>e===null||typeof e!="object"&&typeof e!="function",Fn=Array.isArray,Xs=e=>{var t;return Fn(e)||typeof((t=e)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ri=/-->/g,Li=/>/g,yt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ni=/'/g,Di=/"/g,Wn=/^(?:script|style|textarea|title)$/i,Js=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),Q=Js(1),pt=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Mi=new WeakMap,Gs=(e,t,r)=>{var i,n;const o=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let s=o._$litPart$;if(s===void 0){const l=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=s=new Ie(t.insertBefore(ae(),l),l,void 0,r!=null?r:{})}return s._$AI(e),s},Ot=Ut.createTreeWalker(Ut,129,null,!1),Zs=(e,t)=>{const r=e.length-1,i=[];let n,o=t===2?"<svg>":"",s=Yt;for(let a=0;a<r;a++){const c=e[a];let h,d,u=-1,p=0;for(;p<c.length&&(s.lastIndex=p,d=s.exec(c),d!==null);)p=s.lastIndex,s===Yt?d[1]==="!--"?s=Ri:d[1]!==void 0?s=Li:d[2]!==void 0?(Wn.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=yt):d[3]!==void 0&&(s=yt):s===yt?d[0]===">"?(s=n!=null?n:Yt,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?yt:d[3]==='"'?Di:Ni):s===Di||s===Ni?s=yt:s===Ri||s===Li?s=Yt:(s=yt,n=void 0);const m=s===yt&&e[a+1].startsWith("/>")?" ":"";o+=s===Yt?c+Ys:u>=0?(i.push(h),c.slice(0,u)+"$lit$"+c.slice(u)+dt+m):c+dt+(u===-2?(i.push(void 0),a):m)}const l=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Oi!==void 0?Oi.createHTML(l):l,i]},Pe=class{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0;const s=e.length-1,l=this.parts,[a,c]=Zs(e,t);if(this.el=Pe.createElement(a,r),Ot.currentNode=this.el.content,t===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(i=Ot.nextNode())!==null&&l.length<s;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const d of i.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(dt)){const u=c[o++];if(h.push(d),u!==void 0){const p=i.getAttribute(u.toLowerCase()+"$lit$").split(dt),m=/([.?@])?(.*)/.exec(u);l.push({type:1,index:n,name:m[2],strings:p,ctor:m[1]==="."?ta:m[1]==="?"?ra:m[1]==="@"?ia:He})}else l.push({type:6,index:n})}for(const d of h)i.removeAttribute(d)}if(Wn.test(i.tagName)){const h=i.textContent.split(dt),d=h.length-1;if(d>0){i.textContent=Mt?Mt.emptyScript:"";for(let u=0;u<d;u++)i.append(h[u],ae()),Ot.nextNode(),l.push({type:2,index:++n});i.append(h[d],ae())}}}else if(i.nodeType===8)if(i.data===Vn)l.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(dt,h+1))!==-1;)l.push({type:7,index:n}),h+=dt.length-1}n++}}static createElement(e,t){const r=Ut.createElement("template");return r.innerHTML=e,r}};function zt(e,t,r=e,i){var n,o,s,l;if(t===pt)return t;let a=i!==void 0?(n=r._$Cl)===null||n===void 0?void 0:n[i]:r._$Cu;const c=le(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),c===void 0?a=void 0:(a=new c(e),a._$AT(e,r,i)),i!==void 0?((s=(l=r)._$Cl)!==null&&s!==void 0?s:l._$Cl=[])[i]=a:r._$Cu=a),a!==void 0&&(t=zt(e,a._$AS(e,t.values),a,i)),t}var Qs=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:i}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ut).importNode(r,!0);Ot.currentNode=n;let o=Ot.nextNode(),s=0,l=0,a=i[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new Ie(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new na(o,this,e)),this.v.push(c),a=i[++l]}s!==(a==null?void 0:a.index)&&(o=Ot.nextNode(),s++)}return n}m(e){let t=0;for(const r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Ie=class{constructor(e,t,r,i){var n;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cg=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=zt(this,e,t),le(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==pt&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Xs(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==A&&le(this._$AH)?this._$AA.nextSibling.data=e:this.k(Ut.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Pe.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.m(r);else{const o=new Qs(n,this),s=o.p(this.options);o.m(r),this.k(s),this._$AH=o}}_$AC(e){let t=Mi.get(e.strings);return t===void 0&&Mi.set(e.strings,t=new Pe(e)),t}S(e){Fn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new Ie(this.M(ae()),this.M(ae()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},He=class{constructor(e,t,r,i,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const n=this.strings;let o=!1;if(n===void 0)e=zt(this,e,t,0),o=!le(e)||e!==this._$AH&&e!==pt,o&&(this._$AH=e);else{const s=e;let l,a;for(e=n[0],l=0;l<n.length-1;l++)a=zt(this,s[r+l],t,l),a===pt&&(a=this._$AH[l]),o||(o=!le(a)||a!==this._$AH[l]),a===A?e=A:e!==A&&(e+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a}o&&!i&&this.C(e)}C(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},ta=class extends He{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===A?void 0:e}},ea=Mt?Mt.emptyScript:"",ra=class extends He{constructor(){super(...arguments),this.type=4}C(e){e&&e!==A?this.element.setAttribute(this.name,ea):this.element.removeAttribute(this.name)}},ia=class extends He{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=zt(this,e,t,0))!==null&&r!==void 0?r:A)===pt)return;const i=this._$AH,n=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==A&&(i===A||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},na=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){zt(this,e)}},Ui=window.litHtmlPolyfillSupport;Ui==null||Ui(Pe,Ie),((er=globalThis.litHtmlVersions)!==null&&er!==void 0?er:globalThis.litHtmlVersions=[]).push("2.2.4");var rr,ir,Zt=class extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=Gs(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return pt}};Zt.finalized=!0,Zt._$litElement$=!0,(rr=globalThis.litElementHydrateSupport)===null||rr===void 0||rr.call(globalThis,{LitElement:Zt});var zi=globalThis.litElementPolyfillSupport;zi==null||zi({LitElement:Zt});((ir=globalThis.litElementVersions)!==null&&ir!==void 0?ir:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gt=et`
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
`,oa=et`
  ${gt}

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
`,qn=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function Kn(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var Yn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Xn=e=>(...t)=>({_$litDirective$:e,values:t}),Jn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var de=Xn(class extends Jn{constructor(e){var t;if(super(e),e.type!==Yn.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.et===void 0){this.et=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.et.add(o);return this.render(t)}const n=e.element.classList;this.et.forEach(o=>{o in t||(n.remove(o),this.et.delete(o))});for(const o in t){const s=!!t[o];s===this.et.has(o)||((i=this.st)===null||i===void 0?void 0:i.has(o))||(s?(n.add(o),this.et.add(o)):(n.remove(o),this.et.delete(o)))}return pt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gn=Object.defineProperty,sa=Object.defineProperties,aa=Object.getOwnPropertyDescriptor,la=Object.getOwnPropertyDescriptors,ke=Object.getOwnPropertySymbols,Zn=Object.prototype.hasOwnProperty,Qn=Object.prototype.propertyIsEnumerable,Bi=(e,t,r)=>t in e?Gn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,S=(e,t)=>{for(var r in t||(t={}))Zn.call(t,r)&&Bi(e,r,t[r]);if(ke)for(var r of ke(t))Qn.call(t,r)&&Bi(e,r,t[r]);return e},j=(e,t)=>sa(e,la(t)),Mr=(e,t)=>{var r={};for(var i in e)Zn.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&ke)for(var i of ke(e))t.indexOf(i)<0&&Qn.call(e,i)&&(r[i]=e[i]);return r},f=(e,t,r,i)=>{for(var n=i>1?void 0:i?aa(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&Gn(t,r,n),n},vt=e=>t=>typeof t=="function"?((r,i)=>(window.customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:n,elements:o}=i;return{kind:n,elements:o,finisher(s){window.customElements.define(r,s)}}})(e,t),ca=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?j(S({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function v(e){return(t,r)=>r!==void 0?((i,n,o)=>{n.constructor.createProperty(o,i)})(e,t,r):ca(e,t)}function to(e){return v(j(S({},e),{state:!0}))}var da=({finisher:e,descriptor:t})=>(r,i)=>{var n;if(i===void 0){const o=(n=r.originalKey)!==null&&n!==void 0?n:r.key,s=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:j(S({},r),{key:o});return e!=null&&(s.finisher=function(l){e(l,o)}),s}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,i,t(i)),e==null||e(o,i)}};function rt(e,t){return da({descriptor:r=>{const i={get(){var n,o;return(o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const n=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var o,s;return this[n]===void 0&&(this[n]=(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&s!==void 0?s:null),this[n]}}return i}})}var nr;((nr=window.HTMLSlotElement)===null||nr===void 0?void 0:nr.prototype.assignedElements)!=null;var K=class extends Zt{};f([v()],K.prototype,"dir",2);f([v()],K.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var br=class extends K{constructor(){super(...arguments);this.hasSlotController=new qn(this,"footer","header","image")}render(){return Q`
      <div
        part="base"
        class=${de({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
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
    `}};br.styles=oa;br=f([vt("sl-card")],br);var ha=et`
  ${gt}

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
`,ua=class extends Event{constructor(e){super("formdata");this.formData=e}},pa=class extends FormData{constructor(e){var t=(...r)=>{super(...r)};e?(t(e),this.form=e,e.dispatchEvent(new ua(this))):t()}append(e,t){if(!this.form)return super.append(e,t);let r=this.form.elements[e];if(r||(r=document.createElement("input"),r.type="hidden",r.name=e,this.form.appendChild(r)),this.has(e)){const i=this.getAll(e),n=i.indexOf(r.value);n!==-1&&i.splice(n,1),i.push(t),this.set(e,i)}else super.append(e,t);r.value=t}};function fa(){const e=document.createElement("form");let t=!1;return document.body.append(e),e.addEventListener("submit",r=>{new FormData(r.target),r.preventDefault()}),e.addEventListener("formdata",()=>t=!0),e.dispatchEvent(new Event("submit",{cancelable:!0})),e.remove(),t}function Ii(){!window.FormData||fa()||(window.FormData=pa,window.addEventListener("submit",e=>{e.defaultPrevented||new FormData(e.target)}))}document.readyState==="complete"?Ii():window.addEventListener("DOMContentLoaded",()=>Ii());var Xt=new WeakMap,ma=class{constructor(e,t){(this.host=e).addController(this),this.options=S({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,i)=>{r.value=i}},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Xt.has(this.form)||(Xt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Xt.has(this.form)&&(this.form.reportValidity=Xt.get(this.form),Xt.delete(this.form)),this.form=void 0)}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host);!t&&typeof r=="string"&&typeof i!="undefined"&&(Array.isArray(i)?i.forEach(n=>{e.formData.append(r,n.toString())}):e.formData.append(r,i.toString()))}handleFormSubmit(e){const t=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&!t&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&["formaction","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))}),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},eo=Symbol.for(""),ga=e=>{var t,r;if(((t=e)===null||t===void 0?void 0:t.r)===eo)return(r=e)===null||r===void 0?void 0:r._$litStatic$},Hi=(e,...t)=>({_$litStatic$:t.reduce((r,i,n)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[n+1],e[0]),r:eo}),ji=new Map,va=e=>(t,...r)=>{const i=r.length;let n,o;const s=[],l=[];let a,c=0,h=!1;for(;c<i;){for(a=t[c];c<i&&(o=r[c],(n=ga(o))!==void 0);)a+=n+t[++c],h=!0;l.push(o),s.push(a),c++}if(c===i&&s.push(t[i]),h){const d=s.join("$$lit$$");(t=ji.get(d))===void 0&&(s.raw=s,ji.set(d,t=s)),r=l}return e(t,...r)},or=va(Q);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yr=new Set,ba=new MutationObserver(no),kt=new Map,ro=document.documentElement.dir||"ltr",io=document.documentElement.lang||navigator.language,Qt;ba.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function ya(...e){e.map(t=>{const r=t.$code.toLowerCase();kt.has(r)?kt.set(r,Object.assign(Object.assign({},kt.get(r)),t)):kt.set(r,t),Qt||(Qt=t)}),no()}function no(){ro=document.documentElement.dir||"ltr",io=document.documentElement.lang||navigator.language,[...yr.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var _a=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){yr.add(this.host)}hostDisconnected(){yr.delete(this.host)}dir(){return`${this.host.dir||ro}`.toLowerCase()}lang(){return`${this.host.lang||io}`.toLowerCase()}term(e,...t){const r=this.lang().toLowerCase().slice(0,2),i=this.lang().length>2?this.lang().toLowerCase():"",n=kt.get(i),o=kt.get(r);let s;if(n&&n[e])s=n[e];else if(o&&o[e])s=o[e];else if(Qt&&Qt[e])s=Qt[e];else return console.error(`No translation found for: ${String(e)}`),e;return typeof s=="function"?s(...t):s}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},Ur=class extends _a{},wa={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};ya(wa);var U=e=>e!=null?e:A;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(e,t,r){const i=new CustomEvent(t,S({bubbles:!0,cancelable:!1,composed:!0,detail:{}},r));return e.dispatchEvent(i),i}function Vi(e,t){return new Promise(r=>{function i(n){n.target===e&&(e.removeEventListener(t,i),r())}e.addEventListener(t,i)})}var x=class extends K{constructor(){super(...arguments);this.formSubmitController=new ma(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new qn(this,"[default]","prefix","suffix"),this.localize=new Ur(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,N(this,"sl-blur")}handleFocus(){this.hasFocus=!0,N(this,"sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const e=!!this.href,t=e?Hi`a`:Hi`button`;return or`
      <${t}
        part="base"
        class=${de({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
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
        ${this.caret?or`
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
        ${this.loading?or`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};x.styles=ha;f([rt(".button")],x.prototype,"button",2);f([to()],x.prototype,"hasFocus",2);f([v({reflect:!0})],x.prototype,"variant",2);f([v({reflect:!0})],x.prototype,"size",2);f([v({type:Boolean,reflect:!0})],x.prototype,"caret",2);f([v({type:Boolean,reflect:!0})],x.prototype,"disabled",2);f([v({type:Boolean,reflect:!0})],x.prototype,"loading",2);f([v({type:Boolean,reflect:!0})],x.prototype,"outline",2);f([v({type:Boolean,reflect:!0})],x.prototype,"pill",2);f([v({type:Boolean,reflect:!0})],x.prototype,"circle",2);f([v()],x.prototype,"type",2);f([v()],x.prototype,"name",2);f([v()],x.prototype,"value",2);f([v()],x.prototype,"href",2);f([v()],x.prototype,"target",2);f([v()],x.prototype,"download",2);f([v()],x.prototype,"form",2);f([v({attribute:"formaction"})],x.prototype,"formAction",2);f([v({attribute:"formmethod"})],x.prototype,"formMethod",2);f([v({attribute:"formnovalidate",type:Boolean})],x.prototype,"formNoValidate",2);f([v({attribute:"formtarget"})],x.prototype,"formTarget",2);x=f([vt("sl-button")],x);var $a=et`
  ${gt}

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
`,_r=class extends K{constructor(){super(...arguments);this.localize=new Ur(this)}render(){return Q`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};_r.styles=$a;_r=f([vt("sl-spinner")],_r);const oo=At`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var xa=Object.defineProperty,Aa=Object.getOwnPropertyDescriptor,so=(e,t,r,i)=>{for(var n=i>1?void 0:i?Aa(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&xa(t,r,n),n};let wr=class extends V{constructor(){super();this.message="Welcome!"}static get styles(){return[oo,At`
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
    `]}async firstUpdated(){console.log("This is your home page")}render(){return R`
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
    `}};so([mt()],wr.prototype,"message",2);wr=so([Ht("app-home")],wr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sa=Symbol();class Ea{constructor(t,r,i){this.i=0,this.status=0,this.autoRun=!0,this.o=t,this.o.addController(this);const n=typeof r=="object"?r:{task:r,args:i};this.t=n.task,this.h=n.args,this.l=n.onComplete,this.u=n.onError,n.autoRun!==void 0&&(this.autoRun=n.autoRun),this.taskComplete=new Promise((o,s)=>{this.v=o,this._=s})}hostUpdated(){this.performTask()}async performTask(){var t;const r=(t=this.h)===null||t===void 0?void 0:t.call(this);this.shouldRun(r)&&this.run(r)}shouldRun(t){return this.autoRun&&this.m(t)}async run(t){var r,i,n;let o,s;t!=null||(t=(r=this.h)===null||r===void 0?void 0:r.call(this)),this.status!==2&&this.status!==3||(this.taskComplete=new Promise((a,c)=>{this.v=a,this._=c})),this.status=1,this.o.requestUpdate();const l=++this.i;try{o=await this.t(t)}catch(a){s=a}if(this.i===l){if(o===Sa)this.status=0;else{if(s===void 0){try{(i=this.l)===null||i===void 0||i.call(this,o)}catch{}this.status=2,this.v(o)}else{try{(n=this.u)===null||n===void 0||n.call(this,s)}catch{}this.status=3,this._(s)}this.T=o,this.k=s}this.o.requestUpdate()}}get value(){return this.T}get error(){return this.k}render(t){var r,i,n,o;switch(this.status){case 0:return(r=t.initial)===null||r===void 0?void 0:r.call(t);case 1:return(i=t.pending)===null||i===void 0?void 0:i.call(t);case 2:return(n=t.complete)===null||n===void 0?void 0:n.call(t,this.value);case 3:return(o=t.error)===null||o===void 0?void 0:o.call(t,this.error);default:this.status}}m(t){const r=this.p;return this.p=t,Array.isArray(t)&&Array.isArray(r)?t.length===r.length&&t.some((i,n)=>Or(i,r[n])):t!==r}}function Ca(e){return function(t){return class extends t{constructor(...r){super(...r);X.set(this,[]),Object.keys(this).forEach(n=>{const o=Object.getOwnPropertyDescriptor(this,n);o!=null&&o.writable&&Wi(t,this,n,e,o.value)});const i=Ta.get(t.prototype);if(i)for(const n of i)Object.getOwnPropertyDescriptor(this,n)||Wi(t,this,n,e);!(e!=null&&e.noSeal)&&Object.seal(this)}}}}function Fi(e,t,r){var i,n;if(e.value instanceof Object&&X.has(e.value)&&X.set(e.value,X.get(e.value).filter(({parent:o})=>o!=e)),t instanceof Object&&X.has(t)&&((i=X.get(t))===null||i===void 0||i.push({parent:e,propKey:r})),t instanceof Array)for(const o of t)o instanceof Object&&X.has(o)&&((n=X.get(o))===null||n===void 0||n.push({parent:e,propKey:r}))}function Wi(e,t,r,i,n){const o=ka(Oa(e,r,i)),s=new Pa(t,r,o,n);Fi(s,n,r),Object.defineProperty(t,r,{enumerable:!0,set(l){if(s.options.lock&&s.options.lock.symbol!==Na)throw new La(s.key);Fi(s,l,r),s.options.set(s,l)},get(){return wt&&s.observers.add(wt),s==null?void 0:s.options.get(s)}})}class Pa{constructor(t,r,i,n){this.parent=t,this.key=r,this.options=i,this._value=n,this.observers=new Set,this.options.init&&(this._value=this.options.init(this,n),i.notifyOnInit&&this.notifyObservers())}get value(){return this._value}set value(t){this._value=t,this.notifyObservers()}notifyObservers(){for(const r of this.observers.keys())r.update();for(const r of this.options.observers)r(new Set([this]));const t=X.get(this.parent);for(const{parent:r}of t)r.notifyObservers()}}function ka({observers:e=[],notifyOnInit:t=!1,noSeal:r=!1,lock:i=null,init:n=function(a,c){return c},set:o=function(a,c){a.value!==c&&(a.value=c)},get:s=function(a){return a.value}}={}){return{lock:i,set:o,get:s,init:n,observers:e,notifyOnInit:t,noSeal:r}}function ao(){return function(e,t){const r=Symbol(t),i=Symbol(t);return{set:function(n){this[i]=new Ra(this),this[r]=n},get:function(){return wt=this[i],this[r]}}}}const Ta=new WeakMap;function Oa(e,t,r={},i={}){let n=qi.get(e);n||(n=new Map,qi.set(e,n));const o=Object.assign(Object.assign(Object.assign({},r),n.get(t)||{}),i);return n.set(t,o),o}class Ra{constructor(t){this.host=t,t.addController(this)}update(){const t=wt;wt=this,this.host.requestUpdate(),this.host.updateComplete.then(()=>{wt=t})}hostConnected(){this.host.updateComplete.then(()=>{wt=void 0})}}class La extends Error{constructor(t){super(`Access to '${t}' is locked. Needs unlocked context for access!`)}}const qi=new WeakMap,X=new WeakMap;let wt,Na=null;const lo=()=>new Date(Date.now()).toLocaleDateString("en-US",{weekday:"long"}).toLowerCase(),Da=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],Ma=e=>Da.includes(e),Ua=e=>{const t=window.location.search;return new URLSearchParams(t).get(e)};var za=Object.defineProperty,Ba=Object.getOwnPropertyDescriptor,Ia=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ba(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&za(t,r,n),n};let $r=class{constructor(){this.urlDayParam=Ua("day"),this.weekDay=this.urlDayParam&&Ma(this.urlDayParam)?this.urlDayParam:lo()}};$r=Ia([Ca()],$r);const co=new $r,Ha=async e=>new Promise(t=>{setTimeout(()=>t(),e)}),ja=async(e,t=!0)=>(t&&await Ha(500),await(await fetch(e)).json());var Va=Object.defineProperty,Fa=Object.getOwnPropertyDescriptor,ho=(e,t,r,i)=>{for(var n=i>1?void 0:i?Fa(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&Va(t,r,n),n};let Te=class extends V{constructor(){super(...arguments);this._apiTask=new Ea(this,()=>ja(`http://localhost:3000/day/${this.state.weekDay}`),()=>[this.state.weekDay]),this.state=co}static get styles(){return[oo,At`
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
      `]}render(){return R`
      <app-header></app-header>
      <main>
        ${this._apiTask.render({pending:()=>R`<sl-spinner></sl-spinner>`,error:()=>R`error`,complete:e=>R`<ul>
              ${e.map(t=>R`
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
      </main>
    `}};ho([ao()],Te.prototype,"state",2);Te=ho([Ht("app-discount")],Te);var Wa=Object.freeze(Object.defineProperty({__proto__:null,get AppDiscount(){return Te}},Symbol.toStringTag,{value:"Module"})),qa=Object.defineProperty,Ka=Object.getOwnPropertyDescriptor,zr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ka(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&qa(t,r,n),n};let Oe=class extends V{constructor(){super();this.title="Discount Day",this.enableBack=!1}static get styles(){return At`
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
    `}render(){return R`
      <header>

        <div id="back-button-block">
          ${this.enableBack?R`<sl-button href="${"/discount-day/"}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};zr([mt({type:String})],Oe.prototype,"title",2);zr([mt({type:Boolean})],Oe.prototype,"enableBack",2);Oe=zr([Ht("app-header")],Oe);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ya(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ja=e=>(...t)=>({_$litDirective$:e,values:t});class Ga{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Za=Ja(class extends Ga{constructor(e){var t;if(super(e),e.type!==Xa.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.nt.add(o);return this.render(t)}const n=e.element.classList;this.nt.forEach(o=>{o in t||(n.remove(o),this.nt.delete(o))});for(const o in t){const s=!!t[o];s===this.nt.has(o)||((i=this.st)===null||i===void 0?void 0:i.has(o))||(s?(n.add(o),this.nt.add(o)):(n.remove(o),this.nt.delete(o)))}return $t}});var Qa=et`
  ${gt}

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
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function Ki(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function tl(e){var t,r;const i=[];function n(l){l instanceof HTMLElement&&(i.push(l),l.shadowRoot!==null&&l.shadowRoot.mode==="open"&&n(l.shadowRoot)),[...l.children].forEach(a=>n(a))}n(e);const o=(t=i.find(l=>Ki(l)))!=null?t:null,s=(r=i.reverse().find(l=>Ki(l)))!=null?r:null;return{start:o,end:s}}function el(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function rl(e,t,r="vertical",i="smooth"){const n=el(e,t),o=n.top+t.scrollTop,s=n.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,h=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<l?t.scrollTo({left:s,behavior:i}):s+e.clientWidth>a&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(o<c?t.scrollTo({top:o,behavior:i}):o+e.clientHeight>h&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:i}))}function Yi(e,t,r){return new Promise(i=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,j(S({},r),{duration:il()?0:r.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function il(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Xi(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const i=requestAnimationFrame(r);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}var uo=new Map,nl=new WeakMap;function ol(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function Ji(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function po(e,t){uo.set(e,ol(t))}function Gi(e,t,r){const i=nl.get(e);if(i!=null&&i[t])return Ji(i[t],r.dir);const n=uo.get(t);return n?Ji(n,r.dir):{keyframes:[],options:{duration:0}}}function Rt(e,t){const r=S({waitUntilFirstUpdate:!1},t);return(i,n)=>{const{update:o}=i;if(e in i){const s=e;i.update=function(l){if(l.has(s)){const a=l.get(s),c=this[s];a!==c&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](a,c)}o.call(this,l)}}}}var O=class extends K{constructor(){super(...arguments);this.localize=new Ur(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];typeof(t==null?void 0:t.focus)=="function"&&t.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleDocumentKeyDown(e){var t;if(e.key==="Escape"){this.hide(),this.focusOnTrigger();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,n;const o=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(n=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:n.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(e){const t=e.target;rl(t,this.panel)}handlePanelSelect(e){const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(e){if(e.key==="Escape"){this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.defaultSlot.assignedElements({flatten:!0}),i=r[0],n=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),r.length>0&&requestAnimationFrame(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(n),n.focus())}));const o=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!o.includes(e.key)&&t.typeToSelect(e)}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const r=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find(n=>tl(n).start);let i;if(r){switch(r.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=r.button;break;default:i=r}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Vi(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,Vi(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){N(this,"sl-show"),this.addOpenListeners(),await Xi(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=Gi(this,"dropdown.show",{dir:this.localize.dir()});await Yi(this.popup.popup,e,t),N(this,"sl-after-show")}else{N(this,"sl-hide"),this.removeOpenListeners(),await Xi(this);const{keyframes:e,options:t}=Gi(this,"dropdown.hide",{dir:this.localize.dir()});await Yi(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,N(this,"sl-after-hide")}}render(){return Q`
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
        class=${de({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <div
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        >
          <slot></slot>
        </div>
      </sl-popup>
    `}};O.styles=Qa;f([rt(".dropdown")],O.prototype,"popup",2);f([rt(".dropdown__trigger")],O.prototype,"trigger",2);f([rt(".dropdown__panel")],O.prototype,"panel",2);f([v({type:Boolean,reflect:!0})],O.prototype,"open",2);f([v({reflect:!0})],O.prototype,"placement",2);f([v({type:Boolean,reflect:!0})],O.prototype,"disabled",2);f([v({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],O.prototype,"stayOpenOnSelect",2);f([v({attribute:!1})],O.prototype,"containingElement",2);f([v({type:Number})],O.prototype,"distance",2);f([v({type:Number})],O.prototype,"skidding",2);f([v({type:Boolean})],O.prototype,"hoist",2);f([Rt("open",{waitUntilFirstUpdate:!0})],O.prototype,"handleOpenChange",1);O=f([vt("sl-dropdown")],O);po("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}});po("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var sl=et`
  ${gt}

  :host {
    --arrow-size: 4px;
    --arrow-color: var(--sl-color-neutral-1000);

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
    width: calc(var(--arrow-size) * 2);
    height: calc(var(--arrow-size) * 2);
    transform: rotate(45deg);
    background: var(--arrow-color);
    z-index: -1;
  }
`;function Vt(e){return e.split("-")[0]}function he(e){return e.split("-")[1]}function ue(e){return["top","bottom"].includes(Vt(e))?"x":"y"}function Br(e){return e==="y"?"height":"width"}function Zi(e,t,r){let{reference:i,floating:n}=e;const o=i.x+i.width/2-n.width/2,s=i.y+i.height/2-n.height/2,l=ue(t),a=Br(l),c=i[a]/2-n[a]/2,h=l==="x";let d;switch(Vt(t)){case"top":d={x:o,y:i.y-n.height};break;case"bottom":d={x:o,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:s};break;case"left":d={x:i.x-n.width,y:s};break;default:d={x:i.x,y:i.y}}switch(he(t)){case"start":d[l]-=c*(r&&h?-1:1);break;case"end":d[l]+=c*(r&&h?-1:1)}return d}var al=async(e,t,r)=>{const{placement:i="bottom",strategy:n="absolute",middleware:o=[],platform:s}=r,l=await(s.isRTL==null?void 0:s.isRTL(t));let a=await s.getElementRects({reference:e,floating:t,strategy:n}),{x:c,y:h}=Zi(a,i,l),d=i,u={},p=0;for(let m=0;m<o.length;m++){const{name:g,fn:b}=o[m],{x:y,y:w,data:_,reset:C}=await b({x:c,y:h,initialPlacement:i,placement:d,strategy:n,middlewareData:u,rects:a,platform:s,elements:{reference:e,floating:t}});c=y!=null?y:c,h=w!=null?w:h,u=j(S({},u),{[g]:S(S({},u[g]),_)}),C&&p<=50&&(p++,typeof C=="object"&&(C.placement&&(d=C.placement),C.rects&&(a=C.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:n}):C.rects),{x:c,y:h}=Zi(a,d,l)),m=-1)}return{x:c,y:h,placement:d,strategy:n,middlewareData:u}};function fo(e){return typeof e!="number"?function(t){return S({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function Re(e){return j(S({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function Ir(e,t){var r;t===void 0&&(t={});const{x:i,y:n,platform:o,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=t,m=fo(p),g=l[u?d==="floating"?"reference":"floating":d],b=Re(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(g)))==null||r?g:g.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),y=Re(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:d==="floating"?j(S({},s.floating),{x:i,y:n}):s.reference,offsetParent:await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),strategy:a}):s[d]);return{top:b.top-y.top+m.top,bottom:y.bottom-b.bottom+m.bottom,left:b.left-y.left+m.left,right:y.right-b.right+m.right}}var ll=Math.min,_t=Math.max;function xr(e,t,r){return _t(e,ll(t,r))}var cl=e=>({name:"arrow",options:e,async fn(t){const{element:r,padding:i=0}=e!=null?e:{},{x:n,y:o,placement:s,rects:l,platform:a}=t;if(r==null)return{};const c=fo(i),h={x:n,y:o},d=ue(s),u=he(s),p=Br(d),m=await a.getDimensions(r),g=d==="y"?"top":"left",b=d==="y"?"bottom":"right",y=l.reference[p]+l.reference[d]-h[d]-l.floating[p],w=h[d]-l.reference[d],_=await(a.getOffsetParent==null?void 0:a.getOffsetParent(r));let C=_?d==="y"?_.clientHeight||0:_.clientWidth||0:0;C===0&&(C=l.floating[p]);const nt=y/2-w/2,ot=c[g],st=C-m[p]-c[b],D=C/2-m[p]/2+nt,L=xr(ot,D,st),Y=(u==="start"?c[g]:c[b])>0&&D!==L&&l.reference[p]<=l.floating[p];return{[d]:h[d]-(Y?D<ot?ot-D:st-D:0),data:{[d]:L,centerOffset:D-L}}}}),dl={left:"right",right:"left",bottom:"top",top:"bottom"};function Le(e){return e.replace(/left|right|bottom|top/g,t=>dl[t])}function hl(e,t,r){r===void 0&&(r=!1);const i=he(e),n=ue(e),o=Br(n);let s=n==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Le(s)),{main:s,cross:Le(s)}}var ul={start:"end",end:"start"};function Qi(e){return e.replace(/start|end/g,t=>ul[t])}var pl=["top","right","bottom","left"];pl.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var fl=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:i,middlewareData:n,rects:o,initialPlacement:s,platform:l,elements:a}=t,c=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",flipAlignment:m=!0}=c,g=Mr(c,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),b=Vt(i),y=u||(b===s||!m?[Le(s)]:function(L){const Y=Le(L);return[Qi(L),Y,Qi(Y)]}(s)),w=[s,...y],_=await Ir(t,g),C=[];let nt=((r=n.flip)==null?void 0:r.overflows)||[];if(h&&C.push(_[b]),d){const{main:L,cross:Y}=hl(i,o,await(l.isRTL==null?void 0:l.isRTL(a.floating)));C.push(_[L],_[Y])}if(nt=[...nt,{placement:i,overflows:C}],!C.every(L=>L<=0)){var ot,st;const L=((ot=(st=n.flip)==null?void 0:st.index)!=null?ot:0)+1,Y=w[L];if(Y)return{data:{index:L,overflows:nt},reset:{placement:Y}};let fe="bottom";switch(p){case"bestFit":{var D;const jr=(D=nt.map(me=>[me,me.overflows.filter(Ft=>Ft>0).reduce((Ft,wo)=>Ft+wo,0)]).sort((me,Ft)=>me[1]-Ft[1])[0])==null?void 0:D[0].placement;jr&&(fe=jr);break}case"initialPlacement":fe=s}if(i!==fe)return{reset:{placement:fe}}}return{}}}},ml=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:i}=t,n=await async function(o,s){const{placement:l,platform:a,elements:c}=o,h=await(a.isRTL==null?void 0:a.isRTL(c.floating)),d=Vt(l),u=he(l),p=ue(l)==="x",m=["left","top"].includes(d)?-1:1,g=h&&p?-1:1,b=typeof s=="function"?s(o):s;let{mainAxis:y,crossAxis:w,alignmentAxis:_}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:S({mainAxis:0,crossAxis:0,alignmentAxis:null},b);return u&&typeof _=="number"&&(w=u==="end"?-1*_:_),p?{x:w*g,y:y*m}:{x:y*m,y:w*g}}(t,e);return{x:r+n.x,y:i+n.y,data:n}}}};function gl(e){return e==="x"?"y":"x"}var vl=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:n}=t,o=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:a={fn:y=>{let{x:w,y:_}=y;return{x:w,y:_}}}}=o,c=Mr(o,["mainAxis","crossAxis","limiter"]),h={x:r,y:i},d=await Ir(t,c),u=ue(Vt(n)),p=gl(u);let m=h[u],g=h[p];if(s){const y=u==="y"?"bottom":"right";m=xr(m+d[u==="y"?"top":"left"],m,m-d[y])}if(l){const y=p==="y"?"bottom":"right";g=xr(g+d[p==="y"?"top":"left"],g,g-d[y])}const b=a.fn(j(S({},t),{[u]:m,[p]:g}));return j(S({},b),{data:{x:b.x-r,y:b.y-i}})}}},tn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:i,platform:n,elements:o}=t,s=e,{apply:l=()=>{}}=s,a=Mr(s,["apply"]),c=await Ir(t,a),h=Vt(r),d=he(r);let u,p;h==="top"||h==="bottom"?(u=h,p=d===(await(n.isRTL==null?void 0:n.isRTL(o.floating))?"start":"end")?"left":"right"):(p=h,u=d==="end"?"top":"bottom");const m=_t(c.left,0),g=_t(c.right,0),b=_t(c.top,0),y=_t(c.bottom,0),w={availableHeight:i.floating.height-(["left","right"].includes(r)?2*(b!==0||y!==0?b+y:_t(c.top,c.bottom)):c[u]),availableWidth:i.floating.width-(["top","bottom"].includes(r)?2*(m!==0||g!==0?m+g:_t(c.left,c.right)):c[p])};await l(S(S({},t),w));const _=await n.getDimensions(o.floating);return i.floating.width!==_.width||i.floating.height!==_.height?{reset:{rects:!0}}:{}}}};function mo(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function it(e){if(e==null)return window;if(!mo(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function F(e){return it(e).getComputedStyle(e)}function G(e){return mo(e)?"":e?(e.nodeName||"").toLowerCase():""}function go(){const e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function W(e){return e instanceof it(e).HTMLElement}function ft(e){return e instanceof it(e).Element}function Bt(e){return typeof ShadowRoot=="undefined"?!1:e instanceof it(e).ShadowRoot||e instanceof ShadowRoot}function je(e){const{overflow:t,overflowX:r,overflowY:i}=F(e);return/auto|scroll|overlay|hidden/.test(t+i+r)}function bl(e){return["table","td","th"].includes(G(e))}function en(e){const t=/firefox/i.test(go()),r=F(e);return r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].includes(r.willChange)||t&&r.willChange==="filter"||t&&!!r.filter&&r.filter!=="none"}function vo(){return!/^((?!chrome|android).)*safari/i.test(go())}var rn=Math.min,te=Math.max,Ne=Math.round;function Z(e,t,r){var i,n,o,s;t===void 0&&(t=!1),r===void 0&&(r=!1);const l=e.getBoundingClientRect();let a=1,c=1;t&&W(e)&&(a=e.offsetWidth>0&&Ne(l.width)/e.offsetWidth||1,c=e.offsetHeight>0&&Ne(l.height)/e.offsetHeight||1);const h=ft(e)?it(e):window,d=!vo()&&r,u=(l.left+(d&&(i=(n=h.visualViewport)==null?void 0:n.offsetLeft)!=null?i:0))/a,p=(l.top+(d&&(o=(s=h.visualViewport)==null?void 0:s.offsetTop)!=null?o:0))/c,m=l.width/a,g=l.height/c;return{width:m,height:g,top:p,right:u+m,bottom:p+g,left:u,x:u,y:p}}function ut(e){return(t=e,(t instanceof it(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function Ve(e){return ft(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function bo(e){return Z(ut(e)).left+Ve(e).scrollLeft}function yl(e,t,r){const i=W(t),n=ut(t),o=Z(e,i&&function(a){const c=Z(a);return Ne(c.width)!==a.offsetWidth||Ne(c.height)!==a.offsetHeight}(t),r==="fixed");let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(i||!i&&r!=="fixed")if((G(t)!=="body"||je(n))&&(s=Ve(t)),W(t)){const a=Z(t,!0);l.x=a.x+t.clientLeft,l.y=a.y+t.clientTop}else n&&(l.x=bo(n));return{x:o.left+s.scrollLeft-l.x,y:o.top+s.scrollTop-l.y,width:o.width,height:o.height}}function yo(e){return G(e)==="html"?e:e.assignedSlot||e.parentNode||(Bt(e)?e.host:null)||ut(e)}function nn(e){return W(e)&&F(e).position!=="fixed"?function(t){let{offsetParent:r}=t,i=t,n=!1;for(;i&&i!==r;){const{assignedSlot:o}=i;if(o){let s=o.offsetParent;if(F(o).display==="contents"){const l=o.hasAttribute("style"),a=o.style.display;o.style.display=F(i).display,s=o.offsetParent,o.style.display=a,l||o.removeAttribute("style")}i=o,r!==s&&(r=s,n=!0)}else if(Bt(i)&&i.host&&n)break;i=Bt(i)&&i.host||i.parentNode}return r}(e):null}function Ar(e){const t=it(e);let r=nn(e);for(;r&&bl(r)&&F(r).position==="static";)r=nn(r);return r&&(G(r)==="html"||G(r)==="body"&&F(r).position==="static"&&!en(r))?t:r||function(i){let n=yo(i);for(Bt(n)&&(n=n.host);W(n)&&!["html","body"].includes(G(n));){if(en(n))return n;{const o=n.parentNode;n=Bt(o)?o.host:o}}return null}(e)||t}function on(e){if(W(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=Z(e);return{width:t.width,height:t.height}}function _o(e){const t=yo(e);return["html","body","#document"].includes(G(t))?e.ownerDocument.body:W(t)&&je(t)?t:_o(t)}function De(e,t){var r;t===void 0&&(t=[]);const i=_o(e),n=i===((r=e.ownerDocument)==null?void 0:r.body),o=it(i),s=n?[o].concat(o.visualViewport||[],je(i)?i:[]):i,l=t.concat(s);return n?l:l.concat(De(s))}function sn(e,t,r){return t==="viewport"?Re(function(i,n){const o=it(i),s=ut(i),l=o.visualViewport;let a=s.clientWidth,c=s.clientHeight,h=0,d=0;if(l){a=l.width,c=l.height;const u=vo();(u||!u&&n==="fixed")&&(h=l.offsetLeft,d=l.offsetTop)}return{width:a,height:c,x:h,y:d}}(e,r)):ft(t)?function(i,n){const o=Z(i,!1,n==="fixed"),s=o.top+i.clientTop,l=o.left+i.clientLeft;return{top:s,left:l,x:l,y:s,right:l+i.clientWidth,bottom:s+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(t,r):Re(function(i){var n;const o=ut(i),s=Ve(i),l=(n=i.ownerDocument)==null?void 0:n.body,a=te(o.scrollWidth,o.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),c=te(o.scrollHeight,o.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0);let h=-s.scrollLeft+bo(i);const d=-s.scrollTop;return F(l||o).direction==="rtl"&&(h+=te(o.clientWidth,l?l.clientWidth:0)-a),{width:a,height:c,x:h,y:d}}(ut(e)))}function _l(e){const t=De(e),r=["absolute","fixed"].includes(F(e).position)&&W(e)?Ar(e):e;return ft(r)?t.filter(i=>ft(i)&&function(n,o){const s=o.getRootNode==null?void 0:o.getRootNode();if(n.contains(o))return!0;if(s&&Bt(s)){let l=o;do{if(l&&n===l)return!0;l=l.parentNode||l.host}while(l)}return!1}(i,r)&&G(i)!=="body"):[]}var wl={getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:i,strategy:n}=e;const o=[...r==="clippingAncestors"?_l(t):[].concat(r),i],s=o[0],l=o.reduce((a,c)=>{const h=sn(t,c,n);return a.top=te(h.top,a.top),a.right=rn(h.right,a.right),a.bottom=rn(h.bottom,a.bottom),a.left=te(h.left,a.left),a},sn(t,s,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:i}=e;const n=W(r),o=ut(r);if(r===o)return t;let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((n||!n&&i!=="fixed")&&((G(r)!=="body"||je(o))&&(s=Ve(r)),W(r))){const a=Z(r,!0);l.x=a.x+r.clientLeft,l.y=a.y+r.clientTop}return j(S({},t),{x:t.x-s.scrollLeft+l.x,y:t.y-s.scrollTop+l.y})},isElement:ft,getDimensions:on,getOffsetParent:Ar,getDocumentElement:ut,getElementRects:e=>{let{reference:t,floating:r,strategy:i}=e;return{reference:yl(t,Ar(r),i),floating:j(S({},on(r)),{x:0,y:0})}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>F(e).direction==="rtl"};function $l(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:o=!0,elementResize:s=!0,animationFrame:l=!1}=i,a=n&&!l,c=o&&!l,h=a||c?[...ft(e)?De(e):[],...De(t)]:[];h.forEach(m=>{a&&m.addEventListener("scroll",r,{passive:!0}),c&&m.addEventListener("resize",r)});let d,u=null;if(s){let m=!0;u=new ResizeObserver(()=>{m||r(),m=!1}),ft(e)&&!l&&u.observe(e),u.observe(t)}let p=l?Z(e):null;return l&&function m(){const g=Z(e);!p||g.x===p.x&&g.y===p.y&&g.width===p.width&&g.height===p.height||r(),p=g,d=requestAnimationFrame(m)}(),r(),()=>{var m;h.forEach(g=>{a&&g.removeEventListener("scroll",r),c&&g.removeEventListener("resize",r)}),(m=u)==null||m.disconnect(),u=null,l&&cancelAnimationFrame(d)}}var xl=(e,t,r)=>al(e,t,S({platform:wl},r)),$=class extends K{constructor(){super(...arguments);this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="initial",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){!this.anchorEl||(this.cleanup=$l(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}reposition(){if(!this.active||!this.anchorEl)return;const e=[ml({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(tn({apply:({rects:t})=>{const r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(fl({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(vl({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(tn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(cl({element:this.arrowEl,padding:this.arrowPadding})),xl(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy}).then(({x:t,y:r,middlewareData:i,placement:n})=>{const o={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${t}px`,top:`${r}px`}),this.arrow){const s=i.arrow.x,l=i.arrow.y;let a="",c="",h="",d="";this.arrowPlacement==="start"?(d=typeof s=="number"?`${this.arrowPadding}px`:"",a=typeof l=="number"?`${this.arrowPadding}px`:""):this.arrowPlacement==="end"?(c=typeof s=="number"?`${this.arrowPadding}px`:"",h=typeof l=="number"?`${this.arrowPadding}px`:""):this.arrowPlacement==="center"?(d=typeof s=="number"?"calc(50% - var(--arrow-size))":"",a=typeof l=="number"?"calc(50% - var(--arrow-size))":""):(d=typeof s=="number"?`${s}px`:"",a=typeof l=="number"?`${l}px`:""),Object.assign(this.arrowEl.style,{top:a,right:c,bottom:h,left:d,[o]:"calc(var(--arrow-size) * -1)"})}}),N(this,"sl-reposition")}render(){return Q`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${de({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Q`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};$.styles=sl;f([rt(".popup")],$.prototype,"popup",2);f([rt(".popup__arrow")],$.prototype,"arrowEl",2);f([v()],$.prototype,"anchor",2);f([v({type:Boolean,reflect:!0})],$.prototype,"active",2);f([v({reflect:!0})],$.prototype,"placement",2);f([v({reflect:!0})],$.prototype,"strategy",2);f([v({type:Number})],$.prototype,"distance",2);f([v({type:Number})],$.prototype,"skidding",2);f([v({type:Boolean})],$.prototype,"arrow",2);f([v({attribute:"arrow-placement"})],$.prototype,"arrowPlacement",2);f([v({attribute:"arrow-padding",type:Number})],$.prototype,"arrowPadding",2);f([v({type:Boolean})],$.prototype,"flip",2);f([v({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],$.prototype,"flipFallbackPlacements",2);f([v({attribute:"flip-fallback-strategy"})],$.prototype,"flipFallbackStrategy",2);f([v({type:Object})],$.prototype,"flipBoundary",2);f([v({attribute:"flip-padding",type:Number})],$.prototype,"flipPadding",2);f([v({type:Boolean})],$.prototype,"shift",2);f([v({type:Object})],$.prototype,"shiftBoundary",2);f([v({attribute:"shift-padding",type:Number})],$.prototype,"shiftPadding",2);f([v({attribute:"auto-size"})],$.prototype,"autoSize",2);f([v()],$.prototype,"sync",2);f([v({type:Object})],$.prototype,"autoSizeBoundary",2);f([v({attribute:"auto-size-padding",type:Number})],$.prototype,"autoSizePadding",2);$=f([vt("sl-popup")],$);var Al=et`
  ${gt}

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
`,Me=class extends K{constructor(){super(...arguments);this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(e={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.getAttribute("role")!=="menuitem"||!e.includeDisabled&&t.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){const t=this.getAllItems({includeDisabled:!1}),r=e.disabled?t[0]:e;t.forEach(i=>{i.setAttribute("tabindex",i===r?"0":"-1")})}typeToSelect(e){var t;const r=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?e.metaKey||e.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const i of r){const n=(t=i.shadowRoot)==null?void 0:t.querySelector("slot:not([name])");if(Kn(n).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(i),i.focus();break}}}handleClick(e){const r=e.target.closest("sl-menu-item");(r==null?void 0:r.disabled)===!1&&N(this,"sl-select",{detail:{item:r}})}handleKeyDown(e){if(e.key==="Enter"){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems({includeDisabled:!1}),r=this.getCurrentItem();let i=r?t.indexOf(r):0;if(t.length>0){e.preventDefault(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus();return}}this.typeToSelect(e)}handleMouseDown(e){const t=e.target;t.getAttribute("role")==="menuitem"&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems({includeDisabled:!1});e.length>0&&this.setCurrentItem(e[0])}render(){return Q`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Me.styles=Al;f([rt("slot")],Me.prototype,"defaultSlot",2);Me=f([vt("sl-menu")],Me);var Sl=et`
  ${gt}

  :host {
    display: block;
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
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
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
`,q=class extends K{constructor(){super(...arguments);this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return Kn(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel=="undefined"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,N(this,"sl-label-change"))}render(){return Q`
      <div
        part="base"
        class=${de({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check-lg" library="system" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};q.styles=Sl;f([rt("slot:not([name])")],q.prototype,"defaultSlot",2);f([rt(".menu-item")],q.prototype,"menuItem",2);f([v({type:Boolean,reflect:!0})],q.prototype,"checked",2);f([v()],q.prototype,"value",2);f([v({type:Boolean,reflect:!0})],q.prototype,"disabled",2);f([Rt("checked")],q.prototype,"handleCheckedChange",1);f([Rt("disabled")],q.prototype,"handleDisabledChange",1);q=f([vt("sl-menu-item")],q);var El=et`
  ${gt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Sr="";function an(e){Sr=e}function Cl(){if(!Sr){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)an(t.getAttribute("data-shoelace"));else{const r=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src));let i="";r&&(i=r.getAttribute("src")),an(i.split("/").slice(0,-1).join("/"))}}return Sr.replace(/\/$/,"")}var Pl={name:"default",resolver:e=>`${Cl()}/assets/icons/${e}.svg`},kl=Pl,ln={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
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
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Tl={name:"system",resolver:e=>e in ln?`data:image/svg+xml,${encodeURIComponent(ln[e])}`:""},Ol=Tl,Rl=[kl,Ol],Er=[];function Ll(e){Er.push(e)}function Nl(e){Er=Er.filter(t=>t!==e)}function cn(e){return Rl.find(t=>t.name===e)}var sr=new Map;function Dl(e,t="cors"){if(sr.has(e))return sr.get(e);const r=fetch(e,{mode:t}).then(async i=>({ok:i.ok,status:i.status,html:await i.text()}));return sr.set(e,r),r}var ar=new Map;async function Ml(e){if(ar.has(e))return ar.get(e);const t=await Dl(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const i=document.createElement("div");i.innerHTML=t.html;const n=i.firstElementChild;r.svg=(n==null?void 0:n.tagName.toLowerCase())==="svg"?n.outerHTML:""}return ar.set(e,r),r}var Cr=class extends Jn{constructor(e){if(super(e),this.it=A,e.type!==Yn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===A||e==null)return this.ft=void 0,this.it=e;if(e===pt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Cr.directiveName="unsafeHTML",Cr.resultType=1;var Pr=class extends Cr{};Pr.directiveName="unsafeSVG",Pr.resultType=2;var Ul=Xn(Pr),lr,tt=class extends K{constructor(){super(...arguments);this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Ll(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Nl(this)}getUrl(){const e=cn(this.library);return this.name&&e?e.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var e;const t=cn(this.library),r=this.getUrl();if(lr||(lr=new DOMParser),r)try{const i=await Ml(r);if(r!==this.getUrl())return;if(i.ok){const o=lr.parseFromString(i.svg,"text/html").body.querySelector("svg");o!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,o),this.svg=o.outerHTML,N(this,"sl-load")):(this.svg="",N(this,"sl-error"))}else this.svg="",N(this,"sl-error")}catch{N(this,"sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const e=typeof this.label=="string"&&this.label.length>0;return Q` <div
      part="base"
      class="icon"
      role=${U(e?"img":void 0)}
      aria-label=${U(e?this.label:void 0)}
      aria-hidden=${U(e?void 0:"true")}
    >
      ${Ul(this.svg)}
    </div>`}};tt.styles=El;f([to()],tt.prototype,"svg",2);f([v({reflect:!0})],tt.prototype,"name",2);f([v()],tt.prototype,"src",2);f([v()],tt.prototype,"label",2);f([v({reflect:!0})],tt.prototype,"library",2);f([Rt("name"),Rt("src"),Rt("library")],tt.prototype,"setIcon",1);tt=f([vt("sl-icon")],tt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zl=Object.defineProperty,Bl=Object.getOwnPropertyDescriptor,Hr=(e,t,r,i)=>{for(var n=i>1?void 0:i?Bl(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&zl(t,r,n),n};let Ue=class extends V{constructor(){super();this.day=co,this.weekDays=[{name:"monday",selected:!1,weekIndex:1},{name:"tuesday",selected:!1,weekIndex:2},{name:"wednesday",selected:!1,weekIndex:3},{name:"thursday",selected:!1,weekIndex:4},{name:"friday",selected:!1,weekIndex:5},{name:"saturday",selected:!1,weekIndex:6},{name:"sunday",selected:!1,weekIndex:0}],this._selectDay=e=>{this.weekDays=this.weekDays.map(t=>t.name===e?qt(Wt({},t),{selected:!0}):qt(Wt({},t),{selected:!1}))},this._updateUrlParam=e=>{const t=new URLSearchParams(window.location.search);t.set("day",e);const r=`${window.location.pathname}?${t.toString()}`;history.pushState(null,"",r)},this._updateDay=e=>{this.day.weekDay=e,this._selectDay(e),this._updateUrlParam(e)},this._selectDay(this.day.weekDay)}static get styles(){return[At`
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
      `]}render(){return R`
      <sl-dropdown>
        <sl-button slot="trigger" caret>Select a day</sl-button>
        <sl-menu>
          ${Ya(this.weekDays,e=>R`
              <sl-menu-item
                @click=${()=>this._updateDay(e.name)}
                class="${Za({selected:e.selected})}"
                value=${e.name}
                >${e.name}</sl-menu-item
              >
            `)}
        </sl-menu>
      </sl-dropdown>

      <span>or </span>
      <span @click=${()=>this._updateDay(lo())}>today</span>
    `}};Hr([ao()],Ue.prototype,"day",2);Hr([Wo()],Ue.prototype,"weekDays",2);Ue=Hr([Ht("app-day-selection")],Ue);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Il(e,t,r){return e?t():r==null?void 0:r()}var Hl=Object.defineProperty,jl=Object.getOwnPropertyDescriptor,pe=(e,t,r,i)=>{for(var n=i>1?void 0:i?jl(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&Hl(t,r,n),n};let It=class extends V{constructor(){super(...arguments);this.business="",this.category="",this.discountName="",this.price=4.9,this.formatPrice=e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(e)}static get styles(){return[At`
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
      `]}render(){return R`
      <div class="discount-card">
        <span class="name-category">
          ${Il(this.discountName,()=>R`${this.discountName}`,()=>R`${this.category}`)}
        </span>

        <span class="business">${this.business}</span>
        <data id="price" value=${this.price}
          >${this.formatPrice(this.price)}</data
        >
      </div>
    `}};pe([mt({type:String})],It.prototype,"business",2);pe([mt({type:String})],It.prototype,"category",2);pe([mt({type:String})],It.prototype,"discountName",2);pe([mt({type:Number})],It.prototype,"price",2);It=pe([Ht("app-discount-card")],It);var Vl=Object.defineProperty,Fl=Object.getOwnPropertyDescriptor,Wl=(e,t,r,i)=>{for(var n=i>1?void 0:i?Fl(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&Vl(t,r,n),n};let dn=class extends V{static get styles(){return At`
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
    `}constructor(){super()}firstUpdated(){var t;new ht((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:"/discount-day/",animate:!0,children:[{path:"",component:"app-discount"},{path:"discount",component:"app-discount",action:async()=>{await qr(()=>Promise.resolve().then(function(){return Wa}),void 0)}},{path:"about",component:"app-about",action:async()=>{await qr(()=>import("./app-about.19088ba0.js"),[])}}]}])}render(){return R`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};dn=Wl([Ht("app-index")],dn);export{oo as a,Ht as e,At as i,V as s,R as y};
//# sourceMappingURL=index.62604b74.js.map
