var Ao=Object.defineProperty,Eo=Object.defineProperties;var So=Object.getOwnPropertyDescriptors;var Yr=Object.getOwnPropertySymbols;var Co=Object.prototype.hasOwnProperty,ko=Object.prototype.propertyIsEnumerable;var Jr=(e,t,r)=>t in e?Ao(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Vt=(e,t)=>{for(var r in t||(t={}))Co.call(t,r)&&Jr(e,r,t[r]);if(Yr)for(var r of Yr(t))ko.call(t,r)&&Jr(e,r,t[r]);return e},Ft=(e,t)=>Eo(e,So(t));const Po=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}};Po();const To="modulepreload",Gr={},Oo="/discount-day/",Xr=function(t,r){return!r||r.length===0?t():Promise.all(r.map(i=>{if(i=`${Oo}${i}`,i in Gr)return;Gr[i]=!0;const n=i.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${o}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":To,n||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),n)return new Promise((l,a)=>{s.addEventListener("load",l),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=window,Rr=be.ShadowRoot&&(be.ShadyCSS===void 0||be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Lr=Symbol(),Zr=new WeakMap;class gn{constructor(t,r,i){if(this._$cssResult$=!0,i!==Lr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(Rr&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Zr.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Zr.set(r,t))}return t}toString(){return this.cssText}}const Ro=e=>new gn(typeof e=="string"?e:e+"",void 0,Lr),At=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new gn(r,e,Lr)},Lo=(e,t)=>{Rr?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),n=be.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)})},Qr=Rr?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Ro(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ke;const xe=window,ti=xe.trustedTypes,No=ti?ti.emptyScript:"",ei=xe.reactiveElementPolyfillSupport,ur={toAttribute(e,t){switch(t){case Boolean:e=e?No:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Nr=(e,t)=>t!==e&&(t==t||e==e),Ye={attribute:!0,type:String,converter:ur,reflect:!1,hasChanged:Nr};class St extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((r,i)=>{const n=this._$Ep(i,r);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,r=Ye){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(t,r),!r.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(n){const o=this[t];this[r]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ye}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const n of i)this.createProperty(n,r[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)r.unshift(Qr(n))}else t!==void 0&&r.push(Qr(t));return r}static _$Ep(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(r=>r(this))}addController(t){var r,i;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var t;const r=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Lo(r,this.constructor.elementStyles),r}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostConnected)===null||i===void 0?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostDisconnected)===null||i===void 0?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EO(t,r,i=Ye){var n;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const s=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ur).toAttribute(r,i.type);this._$El=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(t,r){var i;const n=this.constructor,o=n._$Ev.get(t);if(o!==void 0&&this._$El!==o){const s=n.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:ur;this._$El=o,this[o]=l.fromAttribute(r,s.type),this._$El=null}}requestUpdate(t,r,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Nr)(this[t],r)?(this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,o)=>this[o]=n),this._$Ei=void 0);let r=!1;const i=this._$AL;try{r=this.shouldUpdate(i),r?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(i)):this._$Ek()}catch(n){throw r=!1,this._$Ek(),n}r&&this._$AE(i)}willUpdate(t){}_$AE(t){var r;(r=this._$ES)===null||r===void 0||r.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((r,i)=>this._$EO(i,this[i],r)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}St.finalized=!0,St.elementProperties=new Map,St.elementStyles=[],St.shadowRootOptions={mode:"open"},ei==null||ei({ReactiveElement:St}),((Ke=xe.reactiveElementVersions)!==null&&Ke!==void 0?Ke:xe.reactiveElementVersions=[]).push("1.5.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Je;const Ae=window,Rt=Ae.trustedTypes,ri=Rt?Rt.createPolicy("lit-html",{createHTML:e=>e}):void 0,lt=`lit$${(Math.random()+"").slice(9)}$`,vn="?"+lt,Do=`<${vn}>`,Lt=document,ee=(e="")=>Lt.createComment(e),re=e=>e===null||typeof e!="object"&&typeof e!="function",bn=Array.isArray,Mo=e=>bn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ii=/-->/g,ni=/>/g,bt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oi=/'/g,si=/"/g,yn=/^(?:script|style|textarea|title)$/i,Uo=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),R=Uo(1),$t=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),ai=new WeakMap,Tt=Lt.createTreeWalker(Lt,129,null,!1),zo=(e,t)=>{const r=e.length-1,i=[];let n,o=t===2?"<svg>":"",s=Wt;for(let a=0;a<r;a++){const c=e[a];let u,d,h=-1,p=0;for(;p<c.length&&(s.lastIndex=p,d=s.exec(c),d!==null);)p=s.lastIndex,s===Wt?d[1]==="!--"?s=ii:d[1]!==void 0?s=ni:d[2]!==void 0?(yn.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=bt):d[3]!==void 0&&(s=bt):s===bt?d[0]===">"?(s=n!=null?n:Wt,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?bt:d[3]==='"'?si:oi):s===si||s===oi?s=bt:s===ii||s===ni?s=Wt:(s=bt,n=void 0);const m=s===bt&&e[a+1].startsWith("/>")?" ":"";o+=s===Wt?c+Do:h>=0?(i.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+lt+m):c+lt+(h===-2?(i.push(void 0),a):m)}const l=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ri!==void 0?ri.createHTML(l):l,i]};class ie{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let o=0,s=0;const l=t.length-1,a=this.parts,[c,u]=zo(t,r);if(this.el=ie.createElement(c,i),Tt.currentNode=this.el.content,r===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(n=Tt.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const h of n.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(lt)){const p=u[s++];if(d.push(h),p!==void 0){const m=n.getAttribute(p.toLowerCase()+"$lit$").split(lt),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:v[2],strings:m,ctor:v[1]==="."?Io:v[1]==="?"?Ho:v[1]==="@"?Vo:je})}else a.push({type:6,index:o})}for(const h of d)n.removeAttribute(h)}if(yn.test(n.tagName)){const d=n.textContent.split(lt),h=d.length-1;if(h>0){n.textContent=Rt?Rt.emptyScript:"";for(let p=0;p<h;p++)n.append(d[p],ee()),Tt.nextNode(),a.push({type:2,index:++o});n.append(d[h],ee())}}}else if(n.nodeType===8)if(n.data===vn)a.push({type:2,index:o});else{let d=-1;for(;(d=n.data.indexOf(lt,d+1))!==-1;)a.push({type:7,index:o}),d+=lt.length-1}o++}}static createElement(t,r){const i=Lt.createElement("template");return i.innerHTML=t,i}}function Nt(e,t,r=e,i){var n,o,s,l;if(t===$t)return t;let a=i!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[i]:r._$Cl;const c=re(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),c===void 0?a=void 0:(a=new c(e),a._$AT(e,r,i)),i!==void 0?((s=(l=r)._$Co)!==null&&s!==void 0?s:l._$Co=[])[i]=a:r._$Cl=a),a!==void 0&&(t=Nt(e,a._$AS(e,t.values),a,i)),t}class Bo{constructor(t,r){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var r;const{el:{content:i},parts:n}=this._$AD,o=((r=t==null?void 0:t.creationScope)!==null&&r!==void 0?r:Lt).importNode(i,!0);Tt.currentNode=o;let s=Tt.nextNode(),l=0,a=0,c=n[0];for(;c!==void 0;){if(l===c.index){let u;c.type===2?u=new de(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new Fo(s,this,t)),this.u.push(u),c=n[++a]}l!==(c==null?void 0:c.index)&&(s=Tt.nextNode(),l++)}return o}p(t){let r=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class de{constructor(t,r,i,n){var o;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cm=(o=n==null?void 0:n.isConnected)===null||o===void 0||o}get _$AU(){var t,r;return(r=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&r!==void 0?r:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=Nt(this,t,r),re(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==$t&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mo(t)?this.k(t):this.g(t)}O(t,r=this._$AB){return this._$AA.parentNode.insertBefore(t,r)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==P&&re(this._$AH)?this._$AA.nextSibling.data=t:this.T(Lt.createTextNode(t)),this._$AH=t}$(t){var r;const{values:i,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ie.createElement(n.h,this.options)),n);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===o)this._$AH.p(i);else{const s=new Bo(o,this),l=s.v(this.options);s.p(i),this.T(l),this._$AH=s}}_$AC(t){let r=ai.get(t.strings);return r===void 0&&ai.set(t.strings,r=new ie(t)),r}k(t){bn(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,n=0;for(const o of t)n===r.length?r.push(i=new de(this.O(ee()),this.O(ee()),this,this.options)):i=r[n],i._$AI(o),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,r);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var r;this._$AM===void 0&&(this._$Cm=t,(r=this._$AP)===null||r===void 0||r.call(this,t))}}class je{constructor(t,r,i,n,o){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,r=this,i,n){const o=this.strings;let s=!1;if(o===void 0)t=Nt(this,t,r,0),s=!re(t)||t!==this._$AH&&t!==$t,s&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=Nt(this,l[i+a],r,a),c===$t&&(c=this._$AH[a]),s||(s=!re(c)||c!==this._$AH[a]),c===P?t=P:t!==P&&(t+=(c!=null?c:"")+o[a+1]),this._$AH[a]=c}s&&!n&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Io extends je{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}const jo=Rt?Rt.emptyScript:"";class Ho extends je{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,jo):this.element.removeAttribute(this.name)}}class Vo extends je{constructor(t,r,i,n,o){super(t,r,i,n,o),this.type=5}_$AI(t,r=this){var i;if((t=(i=Nt(this,t,r,0))!==null&&i!==void 0?i:P)===$t)return;const n=this._$AH,o=t===P&&n!==P||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==P&&(n===P||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r,i;typeof this._$AH=="function"?this._$AH.call((i=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Fo{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Nt(this,t)}}const li=Ae.litHtmlPolyfillSupport;li==null||li(ie,de),((Je=Ae.litHtmlVersions)!==null&&Je!==void 0?Je:Ae.litHtmlVersions=[]).push("2.5.0");const Wo=(e,t,r)=>{var i,n;const o=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let s=o._$litPart$;if(s===void 0){const l=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=s=new de(t.insertBefore(ee(),l),l,void 0,r!=null?r:{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ge,Xe;class H extends St{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,r;const i=super.createRenderRoot();return(t=(r=this.renderOptions).renderBefore)!==null&&t!==void 0||(r.renderBefore=i.firstChild),i}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Wo(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return $t}}H.finalized=!0,H._$litElement$=!0,(Ge=globalThis.litElementHydrateSupport)===null||Ge===void 0||Ge.call(globalThis,{LitElement:H});const ci=globalThis.litElementPolyfillSupport;ci==null||ci({LitElement:H});((Xe=globalThis.litElementVersions)!==null&&Xe!==void 0?Xe:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:n,elements:o}=i;return{kind:n,elements:o,finisher(s){customElements.define(r,s)}}})(e,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qo=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Ft(Vt({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function mt(e){return(t,r)=>r!==void 0?((i,n,o)=>{n.constructor.createProperty(o,i)})(e,t,r):qo(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ko(e){return mt(Ft(Vt({},e),{state:!0}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ze;((Ze=window.HTMLSlotElement)===null||Ze===void 0?void 0:Ze.prototype.assignedElements)!=null;function Ee(e){return e=e||[],Array.isArray(e)?e:[e]}function I(e){return`[Vaadin.Router] ${e}`}function Yo(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const Se="module",Ce="nomodule",pr=[Se,Ce];function di(e){if(!e.match(/.+\.[m]?js$/))throw new Error(I(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function _n(e){if(!e||!B(e.path))throw new Error(I('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,r=["component","redirect","bundle"];if(!xt(e.action)&&!Array.isArray(e.children)&&!xt(e.children)&&!ke(t)&&!r.some(i=>B(e[i])))throw new Error(I(`Expected route config "${e.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(t)if(B(t))di(t);else if(pr.some(i=>i in t))pr.forEach(i=>i in t&&di(t[i]));else throw new Error(I('Expected route bundle to include either "'+Ce+'" or "'+Se+'" keys, or both'));e.redirect&&["bundle","component"].forEach(i=>{i in e&&console.warn(I(`Route config "${e.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function hi(e){Ee(e).forEach(t=>_n(t))}function ui(e,t){let r=document.head.querySelector('script[src="'+e+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",e),t===Se?r.setAttribute("type",Se):t===Ce&&r.setAttribute(Ce,""),r.async=!0),new Promise((i,n)=>{r.onreadystatechange=r.onload=o=>{r.__dynamicImportLoaded=!0,i(o)},r.onerror=o=>{r.parentNode&&r.parentNode.removeChild(r),n(o)},r.parentNode===null?document.head.appendChild(r):r.__dynamicImportLoaded&&i()})}function Jo(e){return B(e)?ui(e):Promise.race(pr.filter(t=>t in e).map(t=>ui(e[t],t)))}function Jt(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function ke(e){return typeof e=="object"&&!!e}function xt(e){return typeof e=="function"}function B(e){return typeof e=="string"}function wn(e){const t=new Error(I(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const kt=new class{};function Go(e){const t=e.port,r=e.protocol,o=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${o}`}function pi(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const r=e.composedPath?e.composedPath():e.path||[];for(let l=0;l<r.length;l++){const a=r[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||Go(t))!==window.location.origin)return;const{pathname:n,search:o,hash:s}=t;Jt("go",{pathname:n,search:o,hash:s})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const Xo={activate(){window.document.addEventListener("click",pi)},inactivate(){window.document.removeEventListener("click",pi)}},Zo=/Trident/.test(navigator.userAgent);Zo&&!xt(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var r=document.createEvent("Event");return r.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),r.state=t.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);function fi(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:r,hash:i}=window.location;Jt("go",{pathname:t,search:r,hash:i})}const Qo={activate(){window.addEventListener("popstate",fi)},inactivate(){window.removeEventListener("popstate",fi)}};var It=Cn,ts=Dr,es=os,rs=An,is=Sn,$n="/",xn="./",ns=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Dr(e,t){for(var r=[],i=0,n=0,o="",s=t&&t.delimiter||$n,l=t&&t.delimiters||xn,a=!1,c;(c=ns.exec(e))!==null;){var u=c[0],d=c[1],h=c.index;if(o+=e.slice(n,h),n=h+u.length,d){o+=d[1],a=!0;continue}var p="",m=e[n],v=c[2],b=c[3],y=c[4],$=c[5];if(!a&&o.length){var _=o.length-1;l.indexOf(o[_])>-1&&(p=o[_],o=o.slice(0,_))}o&&(r.push(o),o="",a=!1);var L=p!==""&&m!==void 0&&m!==p,T=$==="+"||$==="*",ot=$==="?"||$==="*",st=p||s,D=b||y;r.push({name:v||i++,prefix:p,delimiter:st,optional:ot,repeat:T,partial:L,pattern:D?ss(D):"[^"+at(st)+"]+?"})}return(o||n<e.length)&&r.push(o+e.substr(n)),r}function os(e,t){return An(Dr(e,t))}function An(e){for(var t=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(i,n){for(var o="",s=n&&n.encode||encodeURIComponent,l=0;l<e.length;l++){var a=e[l];if(typeof a=="string"){o+=a;continue}var c=i?i[a.name]:void 0,u;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(u=s(c[d],a),!t[l].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(d===0?a.prefix:a.delimiter)+u}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(u=s(String(c),a),!t[l].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');o+=a.prefix+u;continue}if(a.optional){a.partial&&(o+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return o}}function at(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ss(e){return e.replace(/([=!:$/()])/g,"\\$1")}function En(e){return e&&e.sensitive?"":"i"}function as(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function ls(e,t,r){for(var i=[],n=0;n<e.length;n++)i.push(Cn(e[n],t,r).source);return new RegExp("(?:"+i.join("|")+")",En(r))}function cs(e,t,r){return Sn(Dr(e,r),t,r)}function Sn(e,t,r){r=r||{};for(var i=r.strict,n=r.start!==!1,o=r.end!==!1,s=at(r.delimiter||$n),l=r.delimiters||xn,a=[].concat(r.endsWith||[]).map(at).concat("$").join("|"),c=n?"^":"",u=e.length===0,d=0;d<e.length;d++){var h=e[d];if(typeof h=="string")c+=at(h),u=d===e.length-1&&l.indexOf(h[h.length-1])>-1;else{var p=h.repeat?"(?:"+h.pattern+")(?:"+at(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;t&&t.push(h),h.optional?h.partial?c+=at(h.prefix)+"("+p+")?":c+="(?:"+at(h.prefix)+"("+p+"))?":c+=at(h.prefix)+"("+p+")"}}return o?(i||(c+="(?:"+s+")?"),c+=a==="$"?"$":"(?="+a+")"):(i||(c+="(?:"+s+"(?="+a+"))?"),u||(c+="(?="+s+"|"+a+")")),new RegExp(c,En(r))}function Cn(e,t,r){return e instanceof RegExp?as(e,t):Array.isArray(e)?ls(e,t,r):cs(e,t,r)}It.parse=ts;It.compile=es;It.tokensToFunction=rs;It.tokensToRegExp=is;const{hasOwnProperty:ds}=Object.prototype,fr=new Map;fr.set("|false",{keys:[],pattern:/(?:)/});function mi(e){try{return decodeURIComponent(e)}catch{return e}}function hs(e,t,r,i,n){r=!!r;const o=`${e}|${r}`;let s=fr.get(o);if(!s){const c=[];s={keys:c,pattern:It(e,c,{end:r,strict:e===""})},fr.set(o,s)}const l=s.pattern.exec(t);if(!l)return null;const a=Object.assign({},n);for(let c=1;c<l.length;c++){const u=s.keys[c-1],d=u.name,h=l[c];(h!==void 0||!ds.call(a,d))&&(u.repeat?a[d]=h?h.split(u.delimiter).map(mi):[]:a[d]=h&&mi(h))}return{path:l[0],keys:(i||[]).concat(s.keys),params:a}}function kn(e,t,r,i,n){let o,s,l=0,a=e.path||"";return a.charAt(0)==="/"&&(r&&(a=a.substr(1)),r=!0),{next(c){if(e===c)return{done:!0};const u=e.__children=e.__children||e.children;if(!o&&(o=hs(a,t,!u,i,n),o))return{done:!1,value:{route:e,keys:o.keys,params:o.params,path:o.path}};if(o&&u)for(;l<u.length;){if(!s){const h=u[l];h.parent=e;let p=o.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),s=kn(h,t.substr(p),r,o.keys,o.params)}const d=s.next(c);if(!d.done)return{done:!1,value:d.value};s=null,l++}return{done:!0}}}}function us(e){if(xt(e.route.action))return e.route.action(e)}function ps(e,t){let r=t;for(;r;)if(r=r.parent,r===e)return!0;return!1}function fs(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=(e.route||{}).path;return r&&(t+=` Resolution had failed on route: '${r}'`),t}function ms(e,t){const{route:r,path:i}=t;if(r&&!r.__synthetic){const n={path:i,route:r};if(!e.chain)e.chain=[];else if(r.parent){let o=e.chain.length;for(;o--&&e.chain[o].route&&e.chain[o].route!==r.parent;)e.chain.pop()}e.chain.push(n)}}class ne{constructor(t,r={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=r.baseUrl||"",this.errorHandler=r.errorHandler,this.resolveRoute=r.resolveRoute||us,this.context=Object.assign({resolver:this},r.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){hi(t);const r=[...Ee(t)];this.root.__children=r}addRoutes(t){return hi(t),this.root.__children.push(...Ee(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const r=Object.assign({},this.context,B(t)?{pathname:t}:t),i=kn(this.root,this.__normalizePathname(r.pathname),this.baseUrl),n=this.resolveRoute;let o=null,s=null,l=r;function a(c,u=o.value.route,d){const h=d===null&&o.value.route;return o=s||i.next(h),s=null,!c&&(o.done||!ps(u,o.value.route))?(s=o,Promise.resolve(kt)):o.done?Promise.reject(wn(r)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},r,o.value),ms(l,o.value),Promise.resolve(n(l)).then(p=>p!=null&&p!==kt?(l.result=p.result||p,l):a(c,u,p)))}return r.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const u=fs(l);if(c?console.warn(u):c=new Error(u),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(t,r){return new URL(t,r)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const r=this.__effectiveBaseUrl,i=this.constructor.__createUrl(t,r).href;if(i.slice(0,r.length)===r)return i.slice(r.length)}}ne.pathToRegexp=It;const{pathToRegexp:gi}=ne,vi=new Map;function Pn(e,t,r){const i=t.name||t.component;if(i&&(e.has(i)?e.get(i).push(t):e.set(i,[t])),Array.isArray(r))for(let n=0;n<r.length;n++){const o=r[n];o.parent=t,Pn(e,o,o.__children||o.children)}}function bi(e,t){const r=e.get(t);if(r&&r.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return r&&r[0]}function yi(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function gs(e,t={}){if(!(e instanceof ne))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(i,n)=>{let o=bi(r,i);if(!o&&(r.clear(),Pn(r,e.root,e.root.__children),o=bi(r,i),!o))throw new Error(`Route "${i}" not found`);let s=vi.get(o.fullPath);if(!s){let a=yi(o),c=o.parent;for(;c;){const p=yi(c);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const u=gi.parse(a),d=gi.tokensToFunction(u),h=Object.create(null);for(let p=0;p<u.length;p++)B(u[p])||(h[u[p].name]=!0);s={toPath:d,keys:h},vi.set(a,s),o.fullPath=a}let l=s.toPath(n,t)||"/";if(t.stringifyQueryParams&&n){const a={},c=Object.keys(n);for(let d=0;d<c.length;d++){const h=c[d];s.keys[h]||(a[h]=n[h])}const u=t.stringifyQueryParams(a);u&&(l+=u.charAt(0)==="?"?u:`?${u}`)}return l}}let _i=[];function vs(e){_i.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),_i=e}const bs=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},ys=(e,t)=>{const r=()=>{e.removeEventListener("animationend",r),t()};e.addEventListener("animationend",r)};function wi(e,t){return e.classList.add(t),new Promise(r=>{if(bs(e)){const i=e.getBoundingClientRect(),n=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;e.setAttribute("style",`position: absolute; ${n}`),ys(e,()=>{e.classList.remove(t),e.removeAttribute("style"),r()})}else e.classList.remove(t),r()})}const _s=256;function Qe(e){return e!=null}function ws(e){const t=Object.assign({},e);return delete t.next,t}function z({pathname:e="",search:t="",hash:r="",chain:i=[],params:n={},redirectFrom:o,resolver:s},l){const a=i.map(c=>c.route);return{baseUrl:s&&s.baseUrl||"",pathname:e,search:t,hash:r,routes:a,route:l||a.length&&a[a.length-1]||null,params:n,redirectFrom:o,getUrl:(c={})=>_e(ht.pathToRegexp.compile(Tn(a))(Object.assign({},n,c)),s)}}function $i(e,t){const r=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:r}}}function $s(e,t){t.location=z(e);const r=e.chain.map(i=>i.route).indexOf(e.route);return e.chain[r].element=t,t}function ye(e,t,r){if(xt(e))return e.apply(r,t)}function xi(e,t,r){return i=>{if(i&&(i.cancel||i.redirect))return i;if(r)return ye(r[e],t,r)}}function xs(e,t){if(!Array.isArray(e)&&!ke(e))throw new Error(I(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const r=Ee(e);for(let i=0;i<r.length;i++)_n(r[i]),t.__children.push(r[i])}function ve(e){if(e&&e.length){const t=e[0].parentNode;for(let r=0;r<e.length;r++)t.removeChild(e[r])}}function _e(e,t){const r=t.__effectiveBaseUrl;return r?t.constructor.__createUrl(e.replace(/^\//,""),r).pathname:e}function Tn(e){return e.map(t=>t.path).reduce((t,r)=>r.length?t.replace(/\/$/,"")+"/"+r.replace(/^\//,""):t,"")}class ht extends ne{constructor(t,r){const i=document.head.querySelector("base"),n=i&&i.getAttribute("href");super([],Object.assign({baseUrl:n&&ne.__createUrl(n,document.URL).pathname.replace(/[^\/]*$/,"")},r));this.resolveRoute=s=>this.__resolveRoute(s);const o=ht.NavigationTrigger;ht.setTriggers.apply(ht,Object.keys(o).map(s=>o[s])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=z({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const r=t.route;let i=Promise.resolve();xt(r.children)&&(i=i.then(()=>r.children(ws(t))).then(o=>{!Qe(o)&&!xt(r.children)&&(o=r.children),xs(o,r)}));const n={redirect:o=>$i(t,o),component:o=>{const s=document.createElement(o);return this.__createdByRouter.set(s,!0),s}};return i.then(()=>{if(this.__isLatestRender(t))return ye(r.action,[t,n],r)}).then(o=>{if(Qe(o)&&(o instanceof HTMLElement||o.redirect||o===kt))return o;if(B(r.redirect))return n.redirect(r.redirect);if(r.bundle)return Jo(r.bundle).then(()=>{},()=>{throw new Error(I(`Bundle not found: ${r.bundle}. Check if the file name is correct`))})}).then(o=>{if(Qe(o))return o;if(B(r.component))return n.component(r.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,r=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),r||this.__onNavigationEvent(),this.ready}render(t,r){const i=++this.__lastStartedRenderId,n=Object.assign({search:"",hash:""},B(t)?{pathname:t}:t,{__renderId:i});return this.ready=this.resolve(n).then(o=>this.__fullyResolveChain(o)).then(o=>{if(this.__isLatestRender(o)){const s=this.__previousContext;if(o===s)return this.__updateBrowserHistory(s,!0),this.location;if(this.location=z(o),r&&this.__updateBrowserHistory(o,i===1),Jt("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.__copyUnchangedElements(o,s),this.__previousContext=o,this.location;this.__addAppearingContent(o,s);const l=this.__animateIfNeeded(o);return this.__runOnAfterEnterCallbacks(o),this.__runOnAfterLeaveCallbacks(o,s),l.then(()=>{if(this.__isLatestRender(o))return this.__removeDisappearingContent(),this.__previousContext=o,this.location})}}).catch(o=>{if(i===this.__lastStartedRenderId)throw r&&this.__updateBrowserHistory(n),ve(this.__outlet&&this.__outlet.children),this.location=z(Object.assign(n,{resolver:this})),Jt("error",Object.assign({router:this,error:o},n)),o}),this.ready}__fullyResolveChain(t,r=t){return this.__findComponentContextAfterAllRedirects(r).then(i=>{const o=i!==r?i:t,l=_e(Tn(i.chain),i.resolver)===i.pathname,a=(c,u=c.route,d)=>c.next(void 0,u,d).then(h=>h===null||h===kt?l?c:u.parent!==null?a(c,u.parent,h):h:h);return a(i).then(c=>{if(c===null||c===kt)throw wn(o);return c&&c!==kt&&c!==i?this.__fullyResolveChain(o,c):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(t){const r=t.result;return r instanceof HTMLElement?($s(t,r),Promise.resolve(t)):r.redirect?this.__redirect(r.redirect,t.__redirectCount,t.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):r instanceof Error?Promise.reject(r):Promise.reject(new Error(I(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Yo(r)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(r=>r===this.__previousContext||r===t?r:this.__fullyResolveChain(r))}__runOnBeforeCallbacks(t){const r=this.__previousContext||{},i=r.chain||[],n=t.chain;let o=Promise.resolve();const s=()=>({cancel:!0}),l=a=>$i(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,n.length)&&!(i[a].route!==n[a].route||i[a].path!==n[a].path&&i[a].element!==n[a].element||!this.__isReusableElement(i[a].element,n[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=n.length===i.length&&t.__divergedChainIndex==n.length&&this.__isReusableElement(t.result,r.result),t.__skipAttach){for(let a=n.length-1;a>=0;a--)o=this.__runOnBeforeLeaveCallbacks(o,t,{prevent:s},i[a]);for(let a=0;a<n.length;a++)o=this.__runOnBeforeEnterCallbacks(o,t,{prevent:s,redirect:l},n[a]),i[a].element.location=z(t,i[a].route)}else for(let a=i.length-1;a>=t.__divergedChainIndex;a--)o=this.__runOnBeforeLeaveCallbacks(o,t,{prevent:s},i[a])}if(!t.__skipAttach)for(let a=0;a<n.length;a++)a<t.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=z(t,i[a].route)):(o=this.__runOnBeforeEnterCallbacks(o,t,{prevent:s,redirect:l},n[a]),n[a].element&&(n[a].element.location=z(t,n[a].route)));return o.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,r,i,n){const o=z(r);return t.then(s=>{if(this.__isLatestRender(r))return xi("onBeforeLeave",[o,i,this],n.element)(s)}).then(s=>{if(!(s||{}).redirect)return s})}__runOnBeforeEnterCallbacks(t,r,i,n){const o=z(r,n.route);return t.then(s=>{if(this.__isLatestRender(r))return xi("onBeforeEnter",[o,i,this],n.element)(s)})}__isReusableElement(t,r){return t&&r?this.__createdByRouter.get(t)&&this.__createdByRouter.get(r)?t.localName===r.localName:t===r:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,r,i){if(r>_s)throw new Error(I(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(r||0)+1,__renderId:i})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(I(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:r="",hash:i=""},n){if(window.location.pathname!==t||window.location.search!==r||window.location.hash!==i){const o=n?"replaceState":"pushState";window.history[o](null,document.title,t+r+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,r){let i=this.__outlet;for(let n=0;n<t.__divergedChainIndex;n++){const o=r&&r.chain[n].element;if(o)if(o.parentNode===i)t.chain[n].element=o,i=o;else break}return i}__addAppearingContent(t,r){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(t,r);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(o=>this.__addedByRouter.get(o)&&o!==t.result);let n=i;for(let o=t.__divergedChainIndex;o<t.chain.length;o++){const s=t.chain[o].element;s&&(n.appendChild(s),this.__addedByRouter.set(s,!0),n===i&&this.__appearingContent.push(s),n=s)}}__removeDisappearingContent(){this.__disappearingContent&&ve(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ve(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,r){if(!!r)for(let i=r.chain.length-1;i>=t.__divergedChainIndex&&this.__isLatestRender(t);i--){const n=r.chain[i].element;if(!!n)try{const o=z(t);ye(n.onAfterLeave,[o,{},r.resolver],n)}finally{this.__disappearingContent.indexOf(n)>-1&&ve(n.children)}}}__runOnAfterEnterCallbacks(t){for(let r=t.__divergedChainIndex;r<t.chain.length&&this.__isLatestRender(t);r++){const i=t.chain[r].element||{},n=z(t,t.chain[r].route);ye(i.onAfterEnter,[n,{},t.resolver],i)}}__animateIfNeeded(t){const r=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],n=[],o=t.chain;let s;for(let l=o.length;l>0;l--)if(o[l-1].route.animate){s=o[l-1].route.animate;break}if(r&&i&&s){const l=ke(s)&&s.leave||"leaving",a=ke(s)&&s.enter||"entering";n.push(wi(r,l)),n.push(wi(i,a))}return Promise.all(n).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:r,search:i,hash:n}=t?t.detail:window.location;B(this.__normalizePathname(r))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:r,search:i,hash:n},!0))}static setTriggers(...t){vs(t)}urlForName(t,r){return this.__urlForName||(this.__urlForName=gs(this)),_e(this.__urlForName(t,r),this)}urlForPath(t,r){return _e(ht.pathToRegexp.compile(t)(r),this)}static go(t){const{pathname:r,search:i,hash:n}=B(t)?this.__createUrl(t,"http://a"):t;return Jt("go",{pathname:r,search:i,hash:n})}}const As=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,we=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Es(){function e(){return!0}return On(e)}function Ss(){try{return Cs()?!0:ks()?we?!Ps():!Es():!1}catch{return!1}}function Cs(){return localStorage.getItem("vaadin.developmentmode.force")}function ks(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ps(){return!!(we&&Object.keys(we).map(t=>we[t]).filter(t=>t.productionMode).length>0)}function On(e,t){if(typeof e!="function")return;const r=As.exec(e.toString());if(r)try{e=new Function(r[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return e(t)}window.Vaadin=window.Vaadin||{};const Ai=function(e,t){if(window.Vaadin.developmentMode)return On(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ss());function Ts(){}const Os=function(){if(typeof Ai=="function")return Ai(Ts)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});Os();ht.NavigationTrigger={POPSTATE:Qo,CLICK:Xo};/**
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
 */const Ei=typeof window!="undefined"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,mr=(e,t,r=null)=>{for(;t!==r;){const i=t.nextSibling;e.removeChild(t),t=i}},J=`{{lit-${String(Math.random()).slice(2)}}}`,Rn=`<!--${J}-->`,Si=new RegExp(`${J}|${Rn}`);class Ln{constructor(t,r){this.parts=[],this.element=r;const i=[],n=[],o=document.createTreeWalker(r.content,133,null,!1);let s=0,l=-1,a=0;const{strings:c,values:{length:u}}=t;for(;a<u;){const d=o.nextNode();if(d!==null){if(l++,d.nodeType===1){if(d.hasAttributes()){const h=d.attributes,{length:p}=h;let m=0;for(let v=0;v<p;v++)Ci(h[v].name,"$lit$")&&m++;for(;m-- >0;){const v=c[a],b=gr.exec(v)[2],y=b.toLowerCase()+"$lit$",$=d.getAttribute(y);d.removeAttribute(y);const _=$.split(Si);this.parts.push({type:"attribute",index:l,name:b,strings:_}),a+=_.length-1}}d.tagName==="TEMPLATE"&&(n.push(d),o.currentNode=d.content)}else if(d.nodeType===3){const h=d.data;if(h.indexOf(J)>=0){const p=d.parentNode,m=h.split(Si),v=m.length-1;for(let b=0;b<v;b++){let y,$=m[b];if($==="")y=ct();else{const _=gr.exec($);_!==null&&Ci(_[2],"$lit$")&&($=$.slice(0,_.index)+_[1]+_[2].slice(0,-5)+_[3]),y=document.createTextNode($)}p.insertBefore(y,d),this.parts.push({type:"node",index:++l})}m[v]===""?(p.insertBefore(ct(),d),i.push(d)):d.data=m[v],a+=v}}else if(d.nodeType===8)if(d.data===J){const h=d.parentNode;d.previousSibling!==null&&l!==s||(l++,h.insertBefore(ct(),d)),s=l,this.parts.push({type:"node",index:l}),d.nextSibling===null?d.data="":(i.push(d),l--),a++}else{let h=-1;for(;(h=d.data.indexOf(J,h+1))!==-1;)this.parts.push({type:"node",index:-1}),a++}}else o.currentNode=n.pop()}for(const d of i)d.parentNode.removeChild(d)}}const Ci=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},Nn=e=>e.index!==-1,ct=()=>document.createComment(""),gr=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ki(e,t){const{element:{content:r},parts:i}=e,n=document.createTreeWalker(r,133,null,!1);let o=Gt(i),s=i[o],l=-1,a=0;const c=[];let u=null;for(;n.nextNode();){l++;const d=n.currentNode;for(d.previousSibling===u&&(u=null),t.has(d)&&(c.push(d),u===null&&(u=d)),u!==null&&a++;s!==void 0&&s.index===l;)s.index=u!==null?-1:s.index-a,o=Gt(i,o),s=i[o]}c.forEach(d=>d.parentNode.removeChild(d))}const Rs=e=>{let t=e.nodeType===11?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},Gt=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const i=e[r];if(Nn(i))return r}return-1};/**
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
 */const Ls=new WeakMap,oe=e=>typeof e=="function"&&Ls.has(e),j={},Pi={};/**
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
 */class vr{constructor(t,r,i){this.__parts=[],this.template=t,this.processor=r,this.options=i}update(t){let r=0;for(const i of this.__parts)i!==void 0&&i.setValue(t[r]),r++;for(const i of this.__parts)i!==void 0&&i.commit()}_clone(){const t=Ei?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let o,s=0,l=0,a=n.nextNode();for(;s<i.length;)if(o=i[s],Nn(o)){for(;l<o.index;)l++,a.nodeName==="TEMPLATE"&&(r.push(a),n.currentNode=a.content),(a=n.nextNode())===null&&(n.currentNode=r.pop(),a=n.nextNode());if(o.type==="node"){const c=this.processor.handleTextExpression(this.options);c.insertAfterNode(a.previousSibling),this.__parts.push(c)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return Ei&&(document.adoptNode(t),customElements.upgrade(t)),t}}/**
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
 */const Ns=` ${J} `;class Dn{constructor(t,r,i,n){this.strings=t,this.values=r,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let r="",i=!1;for(let n=0;n<t;n++){const o=this.strings[n],s=o.lastIndexOf("<!--");i=(s>-1||i)&&o.indexOf("-->",s+1)===-1;const l=gr.exec(o);r+=l===null?o+(i?Ns:Rn):o.substr(0,l.index)+l[1]+l[2]+"$lit$"+l[3]+J}return r+=this.strings[t],r}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}/**
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
 */const Mr=e=>e===null||!(typeof e=="object"||typeof e=="function"),Mn=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Un{constructor(t,r,i){this.dirty=!0,this.element=t,this.name=r,this.strings=i,this.parts=[];for(let n=0;n<i.length-1;n++)this.parts[n]=this._createPart()}_createPart(){return new zn(this)}_getValue(){const t=this.strings,r=t.length-1;let i="";for(let n=0;n<r;n++){i+=t[n];const o=this.parts[n];if(o!==void 0){const s=o.value;if(Mr(s)||!Mn(s))i+=typeof s=="string"?s:String(s);else for(const l of s)i+=typeof l=="string"?l:String(l)}}return i+=t[r],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class zn{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===j||Mr(t)&&t===this.value||(this.value=t,oe(t)||(this.committer.dirty=!0))}commit(){for(;oe(this.value);){const t=this.value;this.value=j,t(this)}this.value!==j&&this.committer.commit()}}class He{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(ct()),this.endNode=t.appendChild(ct())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=ct()),t.__insert(this.endNode=ct())}insertAfterPart(t){t.__insert(this.startNode=ct()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(this.startNode.parentNode===null)return;for(;oe(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=j,r(this)}const t=this.__pendingValue;t!==j&&(Mr(t)?t!==this.value&&this.__commitText(t):t instanceof Dn?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):Mn(t)?this.__commitIterable(t):t===Pi?(this.value=Pi,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const r=this.startNode.nextSibling,i=typeof(t=t==null?"":t)=="string"?t:String(t);r===this.endNode.previousSibling&&r.nodeType===3?r.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const r=this.options.templateFactory(t);if(this.value instanceof vr&&this.value.template===r)this.value.update(t.values);else{const i=new vr(r,t.processor,this.options),n=i._clone();i.update(t.values),this.__commitNode(n),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const r=this.value;let i,n=0;for(const o of t)i=r[n],i===void 0&&(i=new He(this.options),r.push(i),n===0?i.appendIntoPart(this):i.insertAfterPart(r[n-1])),i.setValue(o),i.commit(),n++;n<r.length&&(r.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){mr(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Ds{constructor(t,r,i){if(this.value=void 0,this.__pendingValue=void 0,i.length!==2||i[0]!==""||i[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=r,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;oe(this.__pendingValue);){const r=this.__pendingValue;this.__pendingValue=j,r(this)}if(this.__pendingValue===j)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=j}}class Ms extends Un{constructor(t,r,i){super(t,r,i),this.single=i.length===2&&i[0]===""&&i[1]===""}_createPart(){return new Us(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Us extends zn{}let Bn=!1;(()=>{try{const e={get capture(){return Bn=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{}})();class zs{constructor(t,r,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=n=>this.handleEvent(n)}setValue(t){this.__pendingValue=t}commit(){for(;oe(this.__pendingValue);){const o=this.__pendingValue;this.__pendingValue=j,o(this)}if(this.__pendingValue===j)return;const t=this.__pendingValue,r=this.value,i=t==null||r!=null&&(t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive),n=t!=null&&(r==null||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=Bs(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=j}handleEvent(t){typeof this.value=="function"?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Bs=e=>e&&(Bn?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function Is(e){let t=se.get(e.type);t===void 0&&(t={stringsArray:new WeakMap,keyString:new Map},se.set(e.type,t));let r=t.stringsArray.get(e.strings);if(r!==void 0)return r;const i=e.strings.join(J);return r=t.keyString.get(i),r===void 0&&(r=new Ln(e,e.getTemplateElement()),t.keyString.set(i,r)),t.stringsArray.set(e.strings,r),r}const se=new Map,Et=new WeakMap;/**
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
 */const js=new class{handleAttributeExpressions(e,t,r,i){const n=t[0];return n==="."?new Ms(e,t.slice(1),r).parts:n==="@"?[new zs(e,t.slice(1),i.eventContext)]:n==="?"?[new Ds(e,t.slice(1),r)]:new Un(e,t,r).parts}handleTextExpression(e){return new He(e)}};/**
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
 */typeof window!="undefined"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const M=(e,...t)=>new Dn(e,t,"html",js),In=(e,t)=>`${e}--${t}`;let Pe=!0;window.ShadyCSS===void 0?Pe=!1:window.ShadyCSS.prepareTemplateDom===void 0&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Pe=!1);const Hs=e=>t=>{const r=In(t.type,e);let i=se.get(r);i===void 0&&(i={stringsArray:new WeakMap,keyString:new Map},se.set(r,i));let n=i.stringsArray.get(t.strings);if(n!==void 0)return n;const o=t.strings.join(J);if(n=i.keyString.get(o),n===void 0){const s=t.getTemplateElement();Pe&&window.ShadyCSS.prepareTemplateDom(s,e),n=new Ln(t,s),i.keyString.set(o,n)}return i.stringsArray.set(t.strings,n),n},Vs=["html","svg"],jn=new Set,Fs=(e,t,r)=>{jn.add(e);const i=r?r.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:o}=n;if(o===0)return void window.ShadyCSS.prepareTemplateStyles(i,e);const s=document.createElement("style");for(let c=0;c<o;c++){const u=n[c];u.parentNode.removeChild(u),s.textContent+=u.textContent}(c=>{Vs.forEach(u=>{const d=se.get(In(u,c));d!==void 0&&d.keyString.forEach(h=>{const{element:{content:p}}=h,m=new Set;Array.from(p.querySelectorAll("style")).forEach(v=>{m.add(v)}),ki(h,m)})})})(e);const l=i.content;r?function(c,u,d=null){const{element:{content:h},parts:p}=c;if(d==null)return void h.appendChild(u);const m=document.createTreeWalker(h,133,null,!1);let v=Gt(p),b=0,y=-1;for(;m.nextNode();)for(y++,m.currentNode===d&&(b=Rs(u),d.parentNode.insertBefore(u,d));v!==-1&&p[v].index===y;){if(b>0){for(;v!==-1;)p[v].index+=b,v=Gt(p,v);return}v=Gt(p,v)}}(r,s,l.firstChild):l.insertBefore(s,l.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const a=l.querySelector("style");if(window.ShadyCSS.nativeShadow&&a!==null)t.insertBefore(a.cloneNode(!0),t.firstChild);else if(r){l.insertBefore(s,l.firstChild);const c=new Set;c.add(s),ki(r,c)}};window.JSCompiler_renameProperty=(e,t)=>e;const br={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return e!==null;case Number:return e===null?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Hn=(e,t)=>t!==e&&(t==t||e==e),tr={attribute:!0,type:String,converter:br,reflect:!1,hasChanged:Hn};class Vn extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((r,i)=>{const n=this._attributeNameForProperty(i,r);n!==void 0&&(this._attributeToPropertyMap.set(n,i),t.push(n))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;t!==void 0&&t.forEach((r,i)=>this._classProperties.set(i,r))}}static createProperty(t,r=tr){if(this._ensureClassProperties(),this._classProperties.set(t,r),r.noAccessor||this.prototype.hasOwnProperty(t))return;const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,r);n!==void 0&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,r,i){return{get(){return this[r]},set(n){const o=this[t];this[r]=n,this._requestUpdate(t,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||tr}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const r=this.properties,i=[...Object.getOwnPropertyNames(r),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(r):[]];for(const n of i)this.createProperty(n,r[n])}}static _attributeNameForProperty(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}static _valueHasChanged(t,r,i=Hn){return i(t,r)}static _propertyValueFromAttribute(t,r){const i=r.type,n=r.converter||br,o=typeof n=="function"?n:n.fromAttribute;return o?o(t,i):t}static _propertyValueToAttribute(t,r){if(r.reflect===void 0)return;const i=r.type,n=r.converter;return(n&&n.toAttribute||br.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,r)=>{if(this.hasOwnProperty(r)){const i=this[r];delete this[r],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(r,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,r)=>this[r]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,r,i){r!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,r,i=tr){const n=this.constructor,o=n._attributeNameForProperty(t,i);if(o!==void 0){const s=n._propertyValueToAttribute(r,i);if(s===void 0)return;this._updateState=8|this._updateState,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._updateState=-9&this._updateState}}_attributeToProperty(t,r){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(n!==void 0){const o=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(r,o),this._updateState=-17&this._updateState}}_requestUpdate(t,r){let i=!0;if(t!==void 0){const n=this.constructor,o=n.getPropertyOptions(t);n._valueHasChanged(this[t],r,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,r),o.reflect!==!0||16&this._updateState||(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,r){return this._requestUpdate(t,r),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch{}const t=this.performUpdate();return t!=null&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const r=this._changedProperties;try{t=this.shouldUpdate(r),t?this.update(r):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(r)),this.updated(r))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((r,i)=>this._propertyToAttribute(i,this[i],r)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Vn.finalized=!0;/**
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
 */const Ws=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function k(e){return(t,r)=>r!==void 0?((i,n,o)=>{n.constructor.createProperty(o,i)})(e,t,r):Ws(e,t)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Fn="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wn=Symbol();class Ti{constructor(t,r){if(r!==Wn)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return this._styleSheet===void 0&&(Fn?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const qs=(e,...t)=>{const r=t.reduce((i,n,o)=>i+(s=>{if(s instanceof Ti)return s.cssText;if(typeof s=="number")return s;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${s}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)})(n)+e[o+1],e[0]);return new Ti(r,Wn)};/**
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
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Oi={};class yr extends Vn{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(t===void 0)this._styles=[];else if(Array.isArray(t)){const r=(o,s)=>o.reduceRight((l,a)=>Array.isArray(a)?r(a,l):(l.add(a),l),s),i=r(t,new Set),n=[];i.forEach(o=>n.unshift(o)),this._styles=n}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;t.length!==0&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow?Fn?this.renderRoot.adoptedStyleSheets=t.map(r=>r.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(r=>r.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(t){const r=this.render();super.update(t),r!==Oi&&this.constructor.render(r,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{const n=document.createElement("style");n.textContent=i.cssText,this.renderRoot.appendChild(n)}))}render(){return Oi}}yr.finalized=!0,yr.render=(e,t,r)=>{if(!r||typeof r!="object"||!r.scopeName)throw new Error("The `scopeName` option is required.");const i=r.scopeName,n=Et.has(t),o=Pe&&t.nodeType===11&&!!t.host,s=o&&!jn.has(i),l=s?document.createDocumentFragment():t;if(((a,c,u)=>{let d=Et.get(c);d===void 0&&(mr(c,c.firstChild),Et.set(c,d=new He(Object.assign({templateFactory:Is},u))),d.appendInto(c)),d.setValue(a),d.commit()})(e,l,Object.assign({templateFactory:Hs(i)},r)),s){const a=Et.get(l);Et.delete(l);const c=a.value instanceof vr?a.value.template:void 0;Fs(i,l,c),mr(t,t.firstChild),t.appendChild(l),Et.set(t,a)}!n&&o&&window.ShadyCSS.styleElement(t.host)};var C=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,r):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,r,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let S=class extends yr{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",e=>this.handleInstallPromptEvent(e)),document.addEventListener("keyup",e=>{e.key==="Escape"&&this.cancel()})}static get styles(){return qs`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#openButton:focus{outline:auto;outline:-webkit-focus-ring-color auto 1px}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch{console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(e){this.deferredprompt=e,this.hasprompt=!0,e.preventDefault()}checkManifest(e){e.icons&&e.icons[0]?e.name?e.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const e=await fetch(this.manifestpath),t=await e.json();if(this.manifestdata=t,this.manifestdata)return this.checkManifest(this.manifestdata),t}catch{return null}}scrollToLeft(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:-e.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const e=this.shadowRoot.querySelector("#screenshots");e.scrollBy({left:e.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let e=new CustomEvent("show");this.dispatchEvent(e)}closePrompt(){this.openmodal=!1;let e=new CustomEvent("hide");this.dispatchEvent(e)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let e=new CustomEvent("show");if(this.dispatchEvent(e),(await this.deferredprompt.userChoice).outcome==="accepted"){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((e,t)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let r=new CustomEvent("hide");this.dispatchEvent(r),e()})}render(){return M`${"standalone"in navigator&&navigator.standalone===!1||this.usecustom!==!0&&this.shouldShowInstall()&&this.installed===!1?M`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${this.openmodal===!0?M`<div id="installModalWrapper">${this.openmodal?M`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?M`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(e=>M`<li>${e}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?M`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(e=>M`<div><img alt="App Screenshot" src="${e.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?M`<p id="iosText">${this.iosinstallinfotext}</p>`:M`<div id="buttonsContainer">${this.deferredprompt?M`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:M`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};var er;C([k({type:String})],S.prototype,"manifestpath",void 0),C([k({type:String})],S.prototype,"iconpath",void 0),C([k({type:Object})],S.prototype,"manifestdata",void 0),C([k({type:Boolean})],S.prototype,"openmodal",void 0),C([k({type:Boolean})],S.prototype,"showopen",void 0),C([k({type:Boolean})],S.prototype,"isSupportingBrowser",void 0),C([k({type:Boolean})],S.prototype,"isIOS",void 0),C([k({type:Boolean})],S.prototype,"installed",void 0),C([k({type:Boolean})],S.prototype,"hasprompt",void 0),C([k({type:Boolean})],S.prototype,"usecustom",void 0),C([k({type:Array})],S.prototype,"relatedApps",void 0),C([k({type:String})],S.prototype,"explainer",void 0),C([k({type:String})],S.prototype,"featuresheader",void 0),C([k({type:String})],S.prototype,"descriptionheader",void 0),C([k({type:String})],S.prototype,"installbuttontext",void 0),C([k({type:String})],S.prototype,"cancelbuttontext",void 0),C([k({type:String})],S.prototype,"iosinstallinfotext",void 0),C([k()],S.prototype,"deferredprompt",void 0),S=C([(er="pwa-install",e=>typeof e=="function"?((t,r)=>(window.customElements.define(t,r),r))(er,e):((t,r)=>{const{kind:i,elements:n}=r;return{kind:i,elements:n,finisher(o){window.customElements.define(t,o)}}})(er,e))],S);var $e=window,Ur=$e.ShadowRoot&&($e.ShadyCSS===void 0||$e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zr=Symbol(),Ri=new WeakMap,qn=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==zr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ur&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Ri.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ri.set(t,e))}return e}toString(){return this.cssText}},Ks=e=>new qn(typeof e=="string"?e:e+"",void 0,zr),rt=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,n,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new qn(r,e,zr)},Ys=(e,t)=>{Ur?e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):t.forEach(r=>{const i=document.createElement("style"),n=$e.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,e.appendChild(i)})},Li=Ur?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return Ks(r)})(e):e,rr,Te=window,Ni=Te.trustedTypes,Js=Ni?Ni.emptyScript:"",Di=Te.reactiveElementPolyfillSupport,_r={toAttribute(e,t){switch(t){case Boolean:e=e?Js:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Kn=(e,t)=>t!==e&&(t==t||e==e),ir={attribute:!0,type:String,converter:_r,reflect:!1,hasChanged:Kn},Ct=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const i=this._$Ep(r,t);i!==void 0&&(this._$Ev.set(i,r),e.push(i))}),e}static createProperty(e,t=ir){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ir}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of r)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(Li(i))}else e!==void 0&&t.push(Li(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ys(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=ir){var i;const n=this.constructor._$Ep(e,r);if(n!==void 0&&r.reflect===!0){const o=(((i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?r.converter:_r).toAttribute(t,r.type);this._$El=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,n=i._$Ev.get(e);if(n!==void 0&&this._$El!==n){const o=i.getPropertyOptions(n),s=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?o.converter:_r;this._$El=n,this[n]=s.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||Kn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ct.finalized=!0,Ct.elementProperties=new Map,Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Di==null||Di({ReactiveElement:Ct}),((rr=Te.reactiveElementVersions)!==null&&rr!==void 0?rr:Te.reactiveElementVersions=[]).push("1.4.2");var nr,Oe=window,Dt=Oe.trustedTypes,Mi=Dt?Dt.createPolicy("lit-html",{createHTML:e=>e}):void 0,dt=`lit$${(Math.random()+"").slice(9)}$`,Yn="?"+dt,Gs=`<${Yn}>`,Mt=document,ae=(e="")=>Mt.createComment(e),le=e=>e===null||typeof e!="object"&&typeof e!="function",Jn=Array.isArray,Xs=e=>Jn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ui=/-->/g,zi=/>/g,yt=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bi=/'/g,Ii=/"/g,Gn=/^(?:script|style|textarea|title)$/i,Zs=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),et=Zs(1),pt=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),ji=new WeakMap,Ot=Mt.createTreeWalker(Mt,129,null,!1),Qs=(e,t)=>{const r=e.length-1,i=[];let n,o=t===2?"<svg>":"",s=qt;for(let a=0;a<r;a++){const c=e[a];let u,d,h=-1,p=0;for(;p<c.length&&(s.lastIndex=p,d=s.exec(c),d!==null);)p=s.lastIndex,s===qt?d[1]==="!--"?s=Ui:d[1]!==void 0?s=zi:d[2]!==void 0?(Gn.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=yt):d[3]!==void 0&&(s=yt):s===yt?d[0]===">"?(s=n!=null?n:qt,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?yt:d[3]==='"'?Ii:Bi):s===Ii||s===Bi?s=yt:s===Ui||s===zi?s=qt:(s=yt,n=void 0);const m=s===yt&&e[a+1].startsWith("/>")?" ":"";o+=s===qt?c+Gs:h>=0?(i.push(u),c.slice(0,h)+"$lit$"+c.slice(h)+dt+m):c+dt+(h===-2?(i.push(void 0),a):m)}const l=o+(e[r]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Mi!==void 0?Mi.createHTML(l):l,i]},Re=class{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,o=0;const s=e.length-1,l=this.parts,[a,c]=Qs(e,t);if(this.el=Re.createElement(a,r),Ot.currentNode=this.el.content,t===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(i=Ot.nextNode())!==null&&l.length<s;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const d of i.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(dt)){const h=c[o++];if(u.push(d),h!==void 0){const p=i.getAttribute(h.toLowerCase()+"$lit$").split(dt),m=/([.?@])?(.*)/.exec(h);l.push({type:1,index:n,name:m[2],strings:p,ctor:m[1]==="."?ea:m[1]==="?"?ia:m[1]==="@"?na:Fe})}else l.push({type:6,index:n})}for(const d of u)i.removeAttribute(d)}if(Gn.test(i.tagName)){const u=i.textContent.split(dt),d=u.length-1;if(d>0){i.textContent=Dt?Dt.emptyScript:"";for(let h=0;h<d;h++)i.append(u[h],ae()),Ot.nextNode(),l.push({type:2,index:++n});i.append(u[d],ae())}}}else if(i.nodeType===8)if(i.data===Yn)l.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(dt,u+1))!==-1;)l.push({type:7,index:n}),u+=dt.length-1}n++}}static createElement(e,t){const r=Mt.createElement("template");return r.innerHTML=e,r}};function Ut(e,t,r=e,i){var n,o,s,l;if(t===pt)return t;let a=i!==void 0?(n=r._$Co)===null||n===void 0?void 0:n[i]:r._$Cl;const c=le(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==c&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),c===void 0?a=void 0:(a=new c(e),a._$AT(e,r,i)),i!==void 0?((s=(l=r)._$Co)!==null&&s!==void 0?s:l._$Co=[])[i]=a:r._$Cl=a),a!==void 0&&(t=Ut(e,a._$AS(e,t.values),a,i)),t}var ta=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:r},parts:i}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Mt).importNode(r,!0);Ot.currentNode=n;let o=Ot.nextNode(),s=0,l=0,a=i[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new Ve(o,o.nextSibling,this,e):a.type===1?c=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(c=new oa(o,this,e)),this.u.push(c),a=i[++l]}s!==(a==null?void 0:a.index)&&(o=Ot.nextNode(),s++)}return n}p(e){let t=0;for(const r of this.u)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Ve=class{constructor(e,t,r,i){var n;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cm=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ut(this,e,t),le(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==pt&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Xs(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==A&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(Mt.createTextNode(e)),this._$AH=e}$(e){var t;const{values:r,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Re.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.p(r);else{const o=new ta(n,this),s=o.v(this.options);o.p(r),this.T(s),this._$AH=o}}_$AC(e){let t=ji.get(e.strings);return t===void 0&&ji.set(e.strings,t=new Re(e)),t}k(e){Jn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new Ve(this.O(ae()),this.O(ae()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Fe=class{constructor(e,t,r,i,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const n=this.strings;let o=!1;if(n===void 0)e=Ut(this,e,t,0),o=!le(e)||e!==this._$AH&&e!==pt,o&&(this._$AH=e);else{const s=e;let l,a;for(e=n[0],l=0;l<n.length-1;l++)a=Ut(this,s[r+l],t,l),a===pt&&(a=this._$AH[l]),o||(o=!le(a)||a!==this._$AH[l]),a===A?e=A:e!==A&&(e+=(a!=null?a:"")+n[l+1]),this._$AH[l]=a}o&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}},ea=class extends Fe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},ra=Dt?Dt.emptyScript:"",ia=class extends Fe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==A?this.element.setAttribute(this.name,ra):this.element.removeAttribute(this.name)}},na=class extends Fe{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=Ut(this,e,t,0))!==null&&r!==void 0?r:A)===pt)return;const i=this._$AH,n=e===A&&i!==A||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==A&&(i===A||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},oa=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ut(this,e)}},Hi=Oe.litHtmlPolyfillSupport;Hi==null||Hi(Re,Ve),((nr=Oe.litHtmlVersions)!==null&&nr!==void 0?nr:Oe.litHtmlVersions=[]).push("2.4.0");var sa=(e,t,r)=>{var i,n;const o=(i=r==null?void 0:r.renderBefore)!==null&&i!==void 0?i:t;let s=o._$litPart$;if(s===void 0){const l=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=s=new Ve(t.insertBefore(ae(),l),l,void 0,r!=null?r:{})}return s._$AI(e),s},or,sr,Xt=class extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=sa(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return pt}};Xt.finalized=!0,Xt._$litElement$=!0,(or=globalThis.litElementHydrateSupport)===null||or===void 0||or.call(globalThis,{LitElement:Xt});var Vi=globalThis.litElementPolyfillSupport;Vi==null||Vi({LitElement:Xt});((sr=globalThis.litElementVersions)!==null&&sr!==void 0?sr:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gt=rt`
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
`,aa=rt`
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
`,Xn=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};function la(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var Zn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Qn=e=>(...t)=>({_$litDirective$:e,values:t}),to=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var he=Qn(class extends to{constructor(e){var t;if(super(e),e.type!==Zn.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.nt.add(o);return this.render(t)}const n=e.element.classList;this.nt.forEach(o=>{o in t||(n.remove(o),this.nt.delete(o))});for(const o in t){const s=!!t[o];s===this.nt.has(o)||((i=this.st)===null||i===void 0?void 0:i.has(o))||(s?(n.add(o),this.nt.add(o)):(n.remove(o),this.nt.delete(o)))}return pt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var eo=Object.defineProperty,ca=Object.defineProperties,da=Object.getOwnPropertyDescriptor,ha=Object.getOwnPropertyDescriptors,Le=Object.getOwnPropertySymbols,ro=Object.prototype.hasOwnProperty,io=Object.prototype.propertyIsEnumerable,Fi=(e,t,r)=>t in e?eo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))ro.call(t,r)&&Fi(e,r,t[r]);if(Le)for(var r of Le(t))io.call(t,r)&&Fi(e,r,t[r]);return e},V=(e,t)=>ca(e,ha(t)),Br=(e,t)=>{var r={};for(var i in e)ro.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&Le)for(var i of Le(e))t.indexOf(i)<0&&io.call(e,i)&&(r[i]=e[i]);return r},f=(e,t,r,i)=>{for(var n=i>1?void 0:i?da(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&eo(t,r,n),n},vt=e=>t=>typeof t=="function"?((r,i)=>(customElements.define(r,i),i))(e,t):((r,i)=>{const{kind:n,elements:o}=i;return{kind:n,elements:o,finisher(s){customElements.define(r,s)}}})(e,t),ua=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?V(E({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function g(e){return(t,r)=>r!==void 0?((i,n,o)=>{n.constructor.createProperty(o,i)})(e,t,r):ua(e,t)}function Ir(e){return g(V(E({},e),{state:!0}))}var pa=({finisher:e,descriptor:t})=>(r,i)=>{var n;if(i===void 0){const o=(n=r.originalKey)!==null&&n!==void 0?n:r.key,s=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:V(E({},r),{key:o});return e!=null&&(s.finisher=function(l){e(l,o)}),s}{const o=r.constructor;t!==void 0&&Object.defineProperty(r,i,t(i)),e==null||e(o,i)}};function it(e,t){return pa({descriptor:r=>{const i={get(){var n,o;return(o=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const n=typeof r=="symbol"?Symbol():"__"+r;i.get=function(){var o,s;return this[n]===void 0&&(this[n]=(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(e))!==null&&s!==void 0?s:null),this[n]}}return i}})}var ar;((ar=window.HTMLSlotElement)===null||ar===void 0?void 0:ar.prototype.assignedElements)!=null;var W=class extends Xt{emit(e,t){const r=new CustomEvent(e,E({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}};f([g()],W.prototype,"dir",2);f([g()],W.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wr=class extends W{constructor(){super(...arguments);this.hasSlotController=new Xn(this,"footer","header","image")}render(){return et`
      <div
        part="base"
        class=${he({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};wr.styles=aa;wr=f([vt("sl-card")],wr);var Kt=new WeakMap,Wi=new WeakMap,Yt=new WeakMap,fa=class{constructor(e,t){(this.host=e).addController(this),this.options=E({form:r=>r.closest("form"),name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,setValue:(r,i)=>r.value=i},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleUserInput=this.handleUserInput.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(Kt.has(this.form)?Kt.get(this.form).add(this.host):Kt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Yt.has(this.form)||(Yt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())),this.host.addEventListener("sl-input",this.handleUserInput)}hostDisconnected(){var e;this.form&&((e=Kt.get(this.form))==null||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Yt.has(this.form)&&(this.form.reportValidity=Yt.get(this.form),Yt.delete(this.form)),this.form=void 0),this.host.removeEventListener("sl-input",this.handleUserInput)}hostUpdated(){var e;const t=this.host,r=Boolean(Wi.get(t)),i=Boolean(t.invalid),n=Boolean(t.required);(e=this.form)!=null&&e.noValidate?(t.removeAttribute("data-required"),t.removeAttribute("data-optional"),t.removeAttribute("data-invalid"),t.removeAttribute("data-valid"),t.removeAttribute("data-user-invalid"),t.removeAttribute("data-user-valid")):(t.toggleAttribute("data-required",n),t.toggleAttribute("data-optional",!n),t.toggleAttribute("data-invalid",i),t.toggleAttribute("data-valid",!i),t.toggleAttribute("data-user-invalid",i&&r),t.toggleAttribute("data-user-valid",!i&&r))}handleFormData(e){const t=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";!t&&!n&&typeof r=="string"&&r.length>0&&typeof i!="undefined"&&(Array.isArray(i)?i.forEach(o=>{e.formData.append(r,o.toString())}):e.formData.append(r,i.toString()))}handleFormSubmit(e){var t;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=Kt.get(this.form))==null||t.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1)}async handleUserInput(){await this.host.updateComplete,this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if(typeof t.reportValidity=="function"&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){Wi.set(e,t),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}},ma=rt`
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
  :host(.sl-button-group__button:not(.sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover))
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
`,no=Symbol.for(""),ga=e=>{if((e==null?void 0:e.r)===no)return e==null?void 0:e._$litStatic$},qi=(e,...t)=>({_$litStatic$:t.reduce((r,i,n)=>r+(o=>{if(o._$litStatic$!==void 0)return o._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${o}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[n+1],e[0]),r:no}),Ki=new Map,va=e=>(t,...r)=>{const i=r.length;let n,o;const s=[],l=[];let a,c=0,u=!1;for(;c<i;){for(a=t[c];c<i&&(o=r[c],(n=ga(o))!==void 0);)a+=n+t[++c],u=!0;l.push(o),s.push(a),c++}if(c===i&&s.push(t[i]),u){const d=s.join("$$lit$$");(t=Ki.get(d))===void 0&&(s.raw=s,Ki.set(d,t=s)),r=l}return e(t,...r)},lr=va(et);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $r=new Set,ba=new MutationObserver(ao),Pt=new Map,oo=document.documentElement.dir||"ltr",so=document.documentElement.lang||navigator.language,Zt;ba.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function ya(...e){e.map(t=>{const r=t.$code.toLowerCase();Pt.has(r)?Pt.set(r,Object.assign(Object.assign({},Pt.get(r)),t)):Pt.set(r,t),Zt||(Zt=t)}),ao()}function ao(){oo=document.documentElement.dir||"ltr",so=document.documentElement.lang||navigator.language,[...$r.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}var _a=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){$r.add(this.host)}hostDisconnected(){$r.delete(this.host)}dir(){return`${this.host.dir||oo}`.toLowerCase()}lang(){return`${this.host.lang||so}`.toLowerCase()}term(e,...t){var r,i;const n=new Intl.Locale(this.lang()),o=n==null?void 0:n.language.toLowerCase(),s=(i=(r=n==null?void 0:n.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",l=Pt.get(`${o}-${s}`),a=Pt.get(o);let c;if(l&&l[e])c=l[e];else if(a&&a[e])c=a[e];else if(Zt&&Zt[e])c=Zt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof c=="function"?c(...t):c}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}},jr=class extends _a{},wa={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};ya(wa);var K=e=>e!=null?e:A;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function G(e,t){const r=E({waitUntilFirstUpdate:!1},t);return(i,n)=>{const{update:o}=i;if(e in i){const s=e;i.update=function(l){if(l.has(s)){const a=l.get(s),c=this[s];a!==c&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](a,c)}o.call(this,l)}}}}var w=class extends W{constructor(){super(...arguments);this.formSubmitController=new fa(this,{form:e=>{if(e.hasAttribute("form")){const t=e.getRootNode(),r=e.getAttribute("form");return t.getElementById(r)}return e.closest("form")}}),this.hasSlotController=new Xn(this,"[default]","prefix","suffix"),this.localize=new jr(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href=""}firstUpdated(){this.isButton()&&(this.invalid=!this.button.checkValidity())}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&(this.button.disabled=this.disabled,this.invalid=!this.button.checkValidity())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.invalid=!this.button.checkValidity())}render(){const e=this.isLink(),t=e?qi`a`:qi`button`;return lr`
      <${t}
        part="base"
        class=${he({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${K(e?void 0:this.disabled)}
        type=${K(e?void 0:this.type)}
        title=${this.title}
        name=${K(e?void 0:this.name)}
        value=${K(e?void 0:this.value)}
        href=${K(e?this.href:void 0)}
        target=${K(e?this.target:void 0)}
        download=${K(e?this.download:void 0)}
        rel=${K(e&&this.target?"noreferrer noopener":void 0)}
        role=${K(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?lr` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?lr`<sl-spinner></sl-spinner>`:""}
      </${t}>
    `}};w.styles=ma;f([it(".button")],w.prototype,"button",2);f([Ir()],w.prototype,"hasFocus",2);f([Ir()],w.prototype,"invalid",2);f([g()],w.prototype,"title",2);f([g({reflect:!0})],w.prototype,"variant",2);f([g({reflect:!0})],w.prototype,"size",2);f([g({type:Boolean,reflect:!0})],w.prototype,"caret",2);f([g({type:Boolean,reflect:!0})],w.prototype,"disabled",2);f([g({type:Boolean,reflect:!0})],w.prototype,"loading",2);f([g({type:Boolean,reflect:!0})],w.prototype,"outline",2);f([g({type:Boolean,reflect:!0})],w.prototype,"pill",2);f([g({type:Boolean,reflect:!0})],w.prototype,"circle",2);f([g()],w.prototype,"type",2);f([g()],w.prototype,"name",2);f([g()],w.prototype,"value",2);f([g()],w.prototype,"href",2);f([g()],w.prototype,"target",2);f([g()],w.prototype,"download",2);f([g()],w.prototype,"form",2);f([g({attribute:"formaction"})],w.prototype,"formAction",2);f([g({attribute:"formenctype"})],w.prototype,"formEnctype",2);f([g({attribute:"formmethod"})],w.prototype,"formMethod",2);f([g({attribute:"formnovalidate",type:Boolean})],w.prototype,"formNoValidate",2);f([g({attribute:"formtarget"})],w.prototype,"formTarget",2);f([G("disabled",{waitUntilFirstUpdate:!0})],w.prototype,"handleDisabledChange",1);w=f([vt("sl-button")],w);var $a=rt`
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
      rotate: 0deg;
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      rotate: 450deg;
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      rotate: 1080deg;
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,xr=class extends W{constructor(){super(...arguments);this.localize=new jr(this)}render(){return et`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};xr.styles=$a;xr=f([vt("sl-spinner")],xr);var Ar="";function Yi(e){Ar=e}function xa(){if(!Ar){const e=[...document.getElementsByTagName("script")],t=e.find(r=>r.hasAttribute("data-shoelace"));if(t)Yi(t.getAttribute("data-shoelace"));else{const r=e.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src));let i="";r&&(i=r.getAttribute("src")),Yi(i.split("/").slice(0,-1).join("/"))}}return Ar.replace(/\/$/,"")}var Aa={name:"default",resolver:e=>`${xa()}/assets/icons/${e}.svg`},Ea=Aa,Ji={caret:`
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
  `},Sa={name:"system",resolver:e=>e in Ji?`data:image/svg+xml,${encodeURIComponent(Ji[e])}`:""},Ca=Sa,ka=[Ea,Ca],Er=[];function Pa(e){Er.push(e)}function Ta(e){Er=Er.filter(t=>t!==e)}function Gi(e){return ka.find(t=>t.name===e)}var cr=new Map;function Oa(e,t="cors"){if(cr.has(e))return cr.get(e);const r=fetch(e,{mode:t}).then(async i=>({ok:i.ok,status:i.status,html:await i.text()}));return cr.set(e,r),r}var dr=new Map;async function Ra(e){if(dr.has(e))return dr.get(e);const t=await Oa(e),r={ok:t.ok,status:t.status,svg:null};if(t.ok){const i=document.createElement("div");i.innerHTML=t.html;const n=i.firstElementChild;r.svg=(n==null?void 0:n.tagName.toLowerCase())==="svg"?n.outerHTML:""}return dr.set(e,r),r}var La=rt`
  ${gt}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Sr=class extends to{constructor(e){if(super(e),this.it=A,e.type!==Zn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===A||e==null)return this._t=void 0,this.it=e;if(e===pt)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Sr.directiveName="unsafeHTML",Sr.resultType=1;var Cr=class extends Sr{};Cr.directiveName="unsafeSVG",Cr.resultType=2;var Na=Qn(Cr),hr,F=class extends W{constructor(){super(...arguments);this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),Pa(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ta(this)}getUrl(){const e=Gi(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=Gi(this.library),r=this.getUrl();if(hr||(hr=new DOMParser),r)try{const i=await Ra(r);if(r!==this.getUrl())return;if(i.ok){const o=hr.parseFromString(i.svg,"text/html").body.querySelector("svg");o!==null?((e=t==null?void 0:t.mutator)==null||e.call(t,o),this.svg=o.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}render(){return et` ${Na(this.svg)} `}};F.styles=La;f([Ir()],F.prototype,"svg",2);f([g({reflect:!0})],F.prototype,"name",2);f([g()],F.prototype,"src",2);f([g()],F.prototype,"label",2);f([g({reflect:!0})],F.prototype,"library",2);f([G("label")],F.prototype,"handleLabelChange",1);f([G("name"),G("src"),G("library")],F.prototype,"setIcon",1);F=f([vt("sl-icon")],F);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lo=At`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 80px;
  }
`;var Da=Object.defineProperty,Ma=Object.getOwnPropertyDescriptor,co=(e,t,r,i)=>{for(var n=i>1?void 0:i?Ma(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&Da(t,r,n),n};let kr=class extends H{constructor(){super();this.message="Welcome!"}static get styles(){return[lo,At`
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
    `}};co([mt()],kr.prototype,"message",2);kr=co([Bt("app-home")],kr);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ua=Symbol();class za{constructor(t,r,i){this.i=0,this.status=0,this.autoRun=!0,this.o=t,this.o.addController(this);const n=typeof r=="object"?r:{task:r,args:i};this.t=n.task,this.h=n.args,this.l=n.onComplete,this.u=n.onError,n.autoRun!==void 0&&(this.autoRun=n.autoRun),this.taskComplete=new Promise((o,s)=>{this.v=o,this._=s})}hostUpdated(){this.performTask()}async performTask(){var t;const r=(t=this.h)===null||t===void 0?void 0:t.call(this);this.shouldRun(r)&&this.run(r)}shouldRun(t){return this.autoRun&&this.m(t)}async run(t){var r,i,n;let o,s;t!=null||(t=(r=this.h)===null||r===void 0?void 0:r.call(this)),this.status!==2&&this.status!==3||(this.taskComplete=new Promise((a,c)=>{this.v=a,this._=c})),this.status=1,this.o.requestUpdate();const l=++this.i;try{o=await this.t(t)}catch(a){s=a}if(this.i===l){if(o===Ua)this.status=0;else{if(s===void 0){try{(i=this.l)===null||i===void 0||i.call(this,o)}catch{}this.status=2,this.v(o)}else{try{(n=this.u)===null||n===void 0||n.call(this,s)}catch{}this.status=3,this._(s)}this.T=o,this.k=s}this.o.requestUpdate()}}get value(){return this.T}get error(){return this.k}render(t){var r,i,n,o;switch(this.status){case 0:return(r=t.initial)===null||r===void 0?void 0:r.call(t);case 1:return(i=t.pending)===null||i===void 0?void 0:i.call(t);case 2:return(n=t.complete)===null||n===void 0?void 0:n.call(t,this.value);case 3:return(o=t.error)===null||o===void 0?void 0:o.call(t,this.error);default:this.status}}m(t){const r=this.p;return this.p=t,Array.isArray(t)&&Array.isArray(r)?t.length===r.length&&t.some((i,n)=>Nr(i,r[n])):t!==r}}function Ba(e){return function(t){return class extends t{constructor(...r){super(...r);Y.set(this,[]),Object.keys(this).forEach(n=>{const o=Object.getOwnPropertyDescriptor(this,n);o!=null&&o.writable&&Zi(t,this,n,e,o.value)});const i=Ha.get(t.prototype);if(i)for(const n of i)Object.getOwnPropertyDescriptor(this,n)||Zi(t,this,n,e);!(e!=null&&e.noSeal)&&Object.seal(this)}}}}function Xi(e,t,r){var i,n;if(e.value instanceof Object&&Y.has(e.value)&&Y.set(e.value,Y.get(e.value).filter(({parent:o})=>o!=e)),t instanceof Object&&Y.has(t)&&((i=Y.get(t))===null||i===void 0||i.push({parent:e,propKey:r})),t instanceof Array)for(const o of t)o instanceof Object&&Y.has(o)&&((n=Y.get(o))===null||n===void 0||n.push({parent:e,propKey:r}))}function Zi(e,t,r,i,n){const o=ja(Va(e,r,i)),s=new Ia(t,r,o,n);Xi(s,n,r),Object.defineProperty(t,r,{enumerable:!0,set(l){if(s.options.lock&&s.options.lock.symbol!==qa)throw new Wa(s.key);Xi(s,l,r),s.options.set(s,l)},get(){return wt&&s.observers.add(wt),s==null?void 0:s.options.get(s)}})}class Ia{constructor(t,r,i,n){this.parent=t,this.key=r,this.options=i,this._value=n,this.observers=new Set,this.options.init&&(this._value=this.options.init(this,n),i.notifyOnInit&&this.notifyObservers())}get value(){return this._value}set value(t){this._value=t,this.notifyObservers()}notifyObservers(){for(const r of this.observers.keys())r.update();for(const r of this.options.observers)r(new Set([this]));const t=Y.get(this.parent);for(const{parent:r}of t)r.notifyObservers()}}function ja({observers:e=[],notifyOnInit:t=!1,noSeal:r=!1,lock:i=null,init:n=function(a,c){return c},set:o=function(a,c){a.value!==c&&(a.value=c)},get:s=function(a){return a.value}}={}){return{lock:i,set:o,get:s,init:n,observers:e,notifyOnInit:t,noSeal:r}}function ho(){return function(e,t){const r=Symbol(t),i=Symbol(t);return{set:function(n){this[i]=new Fa(this),this[r]=n},get:function(){return wt=this[i],this[r]}}}}const Ha=new WeakMap;function Va(e,t,r={},i={}){let n=Qi.get(e);n||(n=new Map,Qi.set(e,n));const o=Object.assign(Object.assign(Object.assign({},r),n.get(t)||{}),i);return n.set(t,o),o}class Fa{constructor(t){this.host=t,t.addController(this)}update(){const t=wt;wt=this,this.host.requestUpdate(),this.host.updateComplete.then(()=>{wt=t})}hostConnected(){this.host.updateComplete.then(()=>{wt=void 0})}}class Wa extends Error{constructor(t){super(`Access to '${t}' is locked. Needs unlocked context for access!`)}}const Qi=new WeakMap,Y=new WeakMap;let wt,qa=null;const uo=()=>new Date(Date.now()).toLocaleDateString("en-US",{weekday:"long"}).toLowerCase(),Ka=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],Ya=e=>Ka.includes(e),Ja=e=>{const t=window.location.search;return new URLSearchParams(t).get(e)};var Ga=Object.defineProperty,Xa=Object.getOwnPropertyDescriptor,Za=(e,t,r,i)=>{for(var n=i>1?void 0:i?Xa(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&Ga(t,r,n),n};let Pr=class{constructor(){this.urlDayParam=Ja("day"),this.weekDay=this.urlDayParam&&Ya(this.urlDayParam)?this.urlDayParam:uo()}};Pr=Za([Ba()],Pr);const po=new Pr,Qa=async e=>new Promise(t=>{setTimeout(()=>t(),e)}),tl=async(e,t=!0)=>(t&&await Qa(500),await(await fetch(e)).json());var el=Object.defineProperty,rl=Object.getOwnPropertyDescriptor,fo=(e,t,r,i)=>{for(var n=i>1?void 0:i?rl(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&el(t,r,n),n};let Ne=class extends H{constructor(){super(...arguments);this._apiTask=new za(this,()=>tl(`http://localhost:3000/day/${this.state.weekDay}`),()=>[this.state.weekDay]),this.state=po}static get styles(){return[lo,At`
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
    `}};fo([ho()],Ne.prototype,"state",2);Ne=fo([Bt("app-discount")],Ne);var il=Object.freeze(Object.defineProperty({__proto__:null,get AppDiscount(){return Ne}},Symbol.toStringTag,{value:"Module"})),nl=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,Hr=(e,t,r,i)=>{for(var n=i>1?void 0:i?ol(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&nl(t,r,n),n};let De=class extends H{constructor(){super();this.title="Discount Day",this.enableBack=!1}static get styles(){return At`
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
    `}};Hr([mt({type:String})],De.prototype,"title",2);Hr([mt({type:Boolean})],De.prototype,"enableBack",2);De=Hr([Bt("app-header")],De);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*sl(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const al={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ll=e=>(...t)=>({_$litDirective$:e,values:t});class cl{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dl=ll(class extends cl{constructor(e){var t;if(super(e),e.type!==al.ATTRIBUTE||e.name!=="class"||((t=e.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.nt===void 0){this.nt=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!(!((r=this.st)===null||r===void 0)&&r.has(o))&&this.nt.add(o);return this.render(t)}const n=e.element.classList;this.nt.forEach(o=>{o in t||(n.remove(o),this.nt.delete(o))});for(const o in t){const s=!!t[o];s===this.nt.has(o)||((i=this.st)===null||i===void 0?void 0:i.has(o))||(s?(n.add(o),this.nt.add(o)):(n.remove(o),this.nt.delete(o)))}return $t}});var hl=rt`
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
`;function tn(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||e.hasAttribute("aria-disabled")&&e.getAttribute("aria-disabled")!=="false"||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||e.offsetParent===null||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function ul(e){var t,r;const i=[];function n(l){l instanceof HTMLElement&&(i.push(l),l.shadowRoot!==null&&l.shadowRoot.mode==="open"&&n(l.shadowRoot)),[...l.children].forEach(a=>n(a))}n(e);const o=(t=i.find(l=>tn(l)))!=null?t:null,s=(r=i.reverse().find(l=>tn(l)))!=null?r:null;return{start:o,end:s}}function pl(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function fl(e,t,r="vertical",i="smooth"){const n=pl(e,t),o=n.top+t.scrollTop,s=n.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,u=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<l?t.scrollTo({left:s,behavior:i}):s+e.clientWidth>a&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(o<c?t.scrollTo({top:o,behavior:i}):o+e.clientHeight>u&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:i}))}function en(e,t){return new Promise(r=>{function i(n){n.target===e&&(e.removeEventListener(t,i),r())}e.addEventListener(t,i)})}function rn(e,t,r){return new Promise(i=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const n=e.animate(t,V(E({},r),{duration:ml()?0:r.duration}));n.addEventListener("cancel",i,{once:!0}),n.addEventListener("finish",i,{once:!0})})}function ml(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function nn(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const i=requestAnimationFrame(r);t.addEventListener("cancel",()=>i,{once:!0}),t.addEventListener("finish",()=>i,{once:!0}),t.cancel()})))}var mo=new Map,gl=new WeakMap;function vl(e){return e!=null?e:{keyframes:[],options:{duration:0}}}function on(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function go(e,t){mo.set(e,vl(t))}function sn(e,t,r){const i=gl.get(e);if(i!=null&&i[t])return on(i[t],r.dir);const n=mo.get(t);return n?on(n,r.dir):{keyframes:[],options:{duration:0}}}var O=class extends W{constructor(){super(...arguments);this.localize=new jr(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleKeyDown(e){this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())}handleDocumentKeyDown(e){var t;if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,n;const o=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(n=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:n.activeElement:document.activeElement;(!this.containingElement||(o==null?void 0:o.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(e){const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(e){const t=e.target;fl(t,this.panel)}handlePanelSelect(e){const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(e){if(e.key==="Escape"&&this.open){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.defaultSlot.assignedElements({flatten:!0}),i=r[0],n=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||this.show(),r.length>0&&requestAnimationFrame(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(n),n.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>ul(i).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,en(this,"sl-after-show")}async hide(){if(!!this.open)return this.open=!1,en(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await nn(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=sn(this,"dropdown.show",{dir:this.localize.dir()});await rn(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await nn(this);const{keyframes:e,options:t}=sn(this,"dropdown.hide",{dir:this.localize.dir()});await rn(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return et`
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
        class=${he({dropdown:!0,"dropdown--open":this.open})}
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
    `}};O.styles=hl;f([it(".dropdown")],O.prototype,"popup",2);f([it(".dropdown__trigger")],O.prototype,"trigger",2);f([it(".dropdown__panel")],O.prototype,"panel",2);f([g({type:Boolean,reflect:!0})],O.prototype,"open",2);f([g({reflect:!0})],O.prototype,"placement",2);f([g({type:Boolean,reflect:!0})],O.prototype,"disabled",2);f([g({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],O.prototype,"stayOpenOnSelect",2);f([g({attribute:!1})],O.prototype,"containingElement",2);f([g({type:Number})],O.prototype,"distance",2);f([g({type:Number})],O.prototype,"skidding",2);f([g({type:Boolean})],O.prototype,"hoist",2);f([G("open",{waitUntilFirstUpdate:!0})],O.prototype,"handleOpenChange",1);O=f([vt("sl-dropdown")],O);go("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});go("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var bl=rt`
  ${gt}

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
`;function jt(e){return e.split("-")[0]}function ue(e){return e.split("-")[1]}function pe(e){return["top","bottom"].includes(jt(e))?"x":"y"}function Vr(e){return e==="y"?"height":"width"}function an(e,t,r){let{reference:i,floating:n}=e;const o=i.x+i.width/2-n.width/2,s=i.y+i.height/2-n.height/2,l=pe(t),a=Vr(l),c=i[a]/2-n[a]/2,u=l==="x";let d;switch(jt(t)){case"top":d={x:o,y:i.y-n.height};break;case"bottom":d={x:o,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:s};break;case"left":d={x:i.x-n.width,y:s};break;default:d={x:i.x,y:i.y}}switch(ue(t)){case"start":d[l]-=c*(r&&u?-1:1);break;case"end":d[l]+=c*(r&&u?-1:1)}return d}var yl=async(e,t,r)=>{const{placement:i="bottom",strategy:n="absolute",middleware:o=[],platform:s}=r,l=o.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:n}),{x:u,y:d}=an(c,i,a),h=i,p={},m=0;for(let v=0;v<l.length;v++){const{name:b,fn:y}=l[v],{x:$,y:_,data:L,reset:T}=await y({x:u,y:d,initialPlacement:i,placement:h,strategy:n,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:t}});u=$!=null?$:u,d=_!=null?_:d,p=V(E({},p),{[b]:E(E({},p[b]),L)}),T&&m<=50&&(m++,typeof T=="object"&&(T.placement&&(h=T.placement),T.rects&&(c=T.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:n}):T.rects),{x:u,y:d}=an(c,h,a)),v=-1)}return{x:u,y:d,placement:h,strategy:n,middlewareData:p}};function vo(e){return typeof e!="number"?function(t){return E({top:0,right:0,bottom:0,left:0},t)}(e):{top:e,right:e,bottom:e,left:e}}function Me(e){return V(E({},e),{top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height})}async function Fr(e,t){var r;t===void 0&&(t={});const{x:i,y:n,platform:o,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=t,m=vo(p),v=l[h?d==="floating"?"reference":"floating":d],b=Me(await o.getClippingRect({element:(r=await(o.isElement==null?void 0:o.isElement(v)))==null||r?v:v.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),y=Me(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:d==="floating"?V(E({},s.floating),{x:i,y:n}):s.reference,offsetParent:await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),strategy:a}):s[d]);return{top:b.top-y.top+m.top,bottom:y.bottom-b.bottom+m.bottom,left:b.left-y.left+m.left,right:y.right-b.right+m.right}}var _l=Math.min,_t=Math.max;function Tr(e,t,r){return _t(e,_l(t,r))}var wl=e=>({name:"arrow",options:e,async fn(t){const{element:r,padding:i=0}=e!=null?e:{},{x:n,y:o,placement:s,rects:l,platform:a}=t;if(r==null)return{};const c=vo(i),u={x:n,y:o},d=pe(s),h=ue(s),p=Vr(d),m=await a.getDimensions(r),v=d==="y"?"top":"left",b=d==="y"?"bottom":"right",y=l.reference[p]+l.reference[d]-u[d]-l.floating[p],$=u[d]-l.reference[d],_=await(a.getOffsetParent==null?void 0:a.getOffsetParent(r));let L=_?d==="y"?_.clientHeight||0:_.clientWidth||0:0;L===0&&(L=l.floating[p]);const T=y/2-$/2,ot=c[v],st=L-m[p]-c[b],D=L/2-m[p]/2+T,N=Tr(ot,D,st),q=(h==="start"?c[v]:c[b])>0&&D!==N&&l.reference[p]<=l.floating[p];return{[d]:u[d]-(q?D<ot?ot-D:st-D:0),data:{[d]:N,centerOffset:D-N}}}}),$l={left:"right",right:"left",bottom:"top",top:"bottom"};function Ue(e){return e.replace(/left|right|bottom|top/g,t=>$l[t])}function xl(e,t,r){r===void 0&&(r=!1);const i=ue(e),n=pe(e),o=Vr(n);let s=n==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Ue(s)),{main:s,cross:Ue(s)}}var Al={start:"end",end:"start"};function ln(e){return e.replace(/start|end/g,t=>Al[t])}var El=["top","right","bottom","left"];El.reduce((e,t)=>e.concat(t,t+"-start",t+"-end"),[]);var Sl=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r;const{placement:i,middlewareData:n,rects:o,initialPlacement:s,platform:l,elements:a}=t,c=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",flipAlignment:m=!0}=c,v=Br(c,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),b=jt(i),y=h||(b===s||!m?[Ue(s)]:function(N){const q=Ue(N);return[ln(N),q,ln(q)]}(s)),$=[s,...y],_=await Fr(t,v),L=[];let T=((r=n.flip)==null?void 0:r.overflows)||[];if(u&&L.push(_[b]),d){const{main:N,cross:q}=xl(i,o,await(l.isRTL==null?void 0:l.isRTL(a.floating)));L.push(_[N],_[q])}if(T=[...T,{placement:i,overflows:L}],!L.every(N=>N<=0)){var ot,st;const N=((ot=(st=n.flip)==null?void 0:st.index)!=null?ot:0)+1,q=$[N];if(q)return{data:{index:N,overflows:T},reset:{placement:q}};let me="bottom";switch(p){case"bestFit":{var D;const Kr=(D=T.map(ge=>[ge,ge.overflows.filter(Ht=>Ht>0).reduce((Ht,xo)=>Ht+xo,0)]).sort((ge,Ht)=>ge[1]-Ht[1])[0])==null?void 0:D[0].placement;Kr&&(me=Kr);break}case"initialPlacement":me=s}if(i!==me)return{reset:{placement:me}}}return{}}}},Cl=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:r,y:i}=t,n=await async function(o,s){const{placement:l,platform:a,elements:c}=o,u=await(a.isRTL==null?void 0:a.isRTL(c.floating)),d=jt(l),h=ue(l),p=pe(l)==="x",m=["left","top"].includes(d)?-1:1,v=u&&p?-1:1,b=typeof s=="function"?s(o):s;let{mainAxis:y,crossAxis:$,alignmentAxis:_}=typeof b=="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:E({mainAxis:0,crossAxis:0,alignmentAxis:null},b);return h&&typeof _=="number"&&($=h==="end"?-1*_:_),p?{x:$*v,y:y*m}:{x:y*m,y:$*v}}(t,e);return{x:r+n.x,y:i+n.y,data:n}}}};function kl(e){return e==="x"?"y":"x"}var Pl=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:n}=t,o=e,{mainAxis:s=!0,crossAxis:l=!1,limiter:a={fn:y=>{let{x:$,y:_}=y;return{x:$,y:_}}}}=o,c=Br(o,["mainAxis","crossAxis","limiter"]),u={x:r,y:i},d=await Fr(t,c),h=pe(jt(n)),p=kl(h);let m=u[h],v=u[p];if(s){const y=h==="y"?"bottom":"right";m=Tr(m+d[h==="y"?"top":"left"],m,m-d[y])}if(l){const y=p==="y"?"bottom":"right";v=Tr(v+d[p==="y"?"top":"left"],v,v-d[y])}const b=a.fn(V(E({},t),{[h]:m,[p]:v}));return V(E({},b),{data:{x:b.x-r,y:b.y-i}})}}},cn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:i,platform:n,elements:o}=t,s=e,{apply:l=()=>{}}=s,a=Br(s,["apply"]),c=await Fr(t,a),u=jt(r),d=ue(r);let h,p;u==="top"||u==="bottom"?(h=u,p=d===(await(n.isRTL==null?void 0:n.isRTL(o.floating))?"start":"end")?"left":"right"):(p=u,h=d==="end"?"top":"bottom");const m=_t(c.left,0),v=_t(c.right,0),b=_t(c.top,0),y=_t(c.bottom,0),$={availableHeight:i.floating.height-(["left","right"].includes(r)?2*(b!==0||y!==0?b+y:_t(c.top,c.bottom)):c[h]),availableWidth:i.floating.width-(["top","bottom"].includes(r)?2*(m!==0||v!==0?m+v:_t(c.left,c.right)):c[p])};await l(E(E({},t),$));const _=await n.getDimensions(o.floating);return i.floating.width!==_.width||i.floating.height!==_.height?{reset:{rects:!0}}:{}}}};function bo(e){return e&&e.document&&e.location&&e.alert&&e.setInterval}function nt(e){if(e==null)return window;if(!bo(e)){const t=e.ownerDocument;return t&&t.defaultView||window}return e}function X(e){return nt(e).getComputedStyle(e)}function ft(e){return bo(e)?"":e?(e.nodeName||"").toLowerCase():""}function yo(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(t=>t.brand+"/"+t.version).join(" "):navigator.userAgent}function Z(e){return e instanceof nt(e).HTMLElement}function Q(e){return e instanceof nt(e).Element}function dn(e){return typeof ShadowRoot=="undefined"?!1:e instanceof nt(e).ShadowRoot||e instanceof ShadowRoot}function We(e){const{overflow:t,overflowX:r,overflowY:i,display:n}=X(e);return/auto|scroll|overlay|hidden/.test(t+i+r)&&!["inline","contents"].includes(n)}function Tl(e){return["table","td","th"].includes(ft(e))}function Or(e){const t=/firefox/i.test(yo()),r=X(e),i=r.backdropFilter||r.WebkitBackdropFilter;return r.transform!=="none"||r.perspective!=="none"||!!i&&i!=="none"||t&&r.willChange==="filter"||t&&!!r.filter&&r.filter!=="none"||["transform","perspective"].some(n=>r.willChange.includes(n))||["paint","layout","strict","content"].some(n=>{const o=r.contain;return o!=null&&o.includes(n)})}function _o(){return!/^((?!chrome|android).)*safari/i.test(yo())}function Wr(e){return["html","body","#document"].includes(ft(e))}var hn=Math.min,Qt=Math.max,ze=Math.round;function tt(e,t,r){var i,n,o,s;t===void 0&&(t=!1),r===void 0&&(r=!1);const l=e.getBoundingClientRect();let a=1,c=1;t&&Z(e)&&(a=e.offsetWidth>0&&ze(l.width)/e.offsetWidth||1,c=e.offsetHeight>0&&ze(l.height)/e.offsetHeight||1);const u=Q(e)?nt(e):window,d=!_o()&&r,h=(l.left+(d&&(i=(n=u.visualViewport)==null?void 0:n.offsetLeft)!=null?i:0))/a,p=(l.top+(d&&(o=(s=u.visualViewport)==null?void 0:s.offsetTop)!=null?o:0))/c,m=l.width/a,v=l.height/c;return{width:m,height:v,top:p,right:h+m,bottom:p+v,left:h,x:h,y:p}}function ut(e){return(t=e,(t instanceof nt(t).Node?e.ownerDocument:e.document)||window.document).documentElement;var t}function qe(e){return Q(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function wo(e){return tt(ut(e)).left+qe(e).scrollLeft}function Ol(e,t,r){const i=Z(t),n=ut(t),o=tt(e,i&&function(a){const c=tt(a);return ze(c.width)!==a.offsetWidth||ze(c.height)!==a.offsetHeight}(t),r==="fixed");let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(i||!i&&r!=="fixed")if((ft(t)!=="body"||We(n))&&(s=qe(t)),Z(t)){const a=tt(t,!0);l.x=a.x+t.clientLeft,l.y=a.y+t.clientTop}else n&&(l.x=wo(n));return{x:o.left+s.scrollLeft-l.x,y:o.top+s.scrollTop-l.y,width:o.width,height:o.height}}function ce(e){if(ft(e)==="html")return e;const t=e.assignedSlot||e.parentNode||(dn(e)?e.host:null)||ut(e);return dn(t)?t.host:t}function un(e){return Z(e)&&X(e).position!=="fixed"?e.offsetParent:null}function pn(e){const t=nt(e);let r=un(e);for(;r&&Tl(r)&&X(r).position==="static";)r=un(r);return r&&(ft(r)==="html"||ft(r)==="body"&&X(r).position==="static"&&!Or(r))?t:r||function(i){let n=ce(i);for(;Z(n)&&!Wr(n);){if(Or(n))return n;n=ce(n)}return null}(e)||t}function $o(e){const t=ce(e);return Wr(t)?e.ownerDocument.body:Z(t)&&We(t)?t:$o(t)}function te(e,t){var r;t===void 0&&(t=[]);const i=$o(e),n=i===((r=e.ownerDocument)==null?void 0:r.body),o=nt(i),s=n?[o].concat(o.visualViewport||[],We(i)?i:[]):i,l=t.concat(s);return n?l:l.concat(te(s))}function fn(e,t,r){return t==="viewport"?Me(function(i,n){const o=nt(i),s=ut(i),l=o.visualViewport;let a=s.clientWidth,c=s.clientHeight,u=0,d=0;if(l){a=l.width,c=l.height;const h=_o();(h||!h&&n==="fixed")&&(u=l.offsetLeft,d=l.offsetTop)}return{width:a,height:c,x:u,y:d}}(e,r)):Q(t)?function(i,n){const o=tt(i,!1,n==="fixed"),s=o.top+i.clientTop,l=o.left+i.clientLeft;return{top:s,left:l,x:l,y:s,right:l+i.clientWidth,bottom:s+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(t,r):Me(function(i){var n;const o=ut(i),s=qe(i),l=(n=i.ownerDocument)==null?void 0:n.body,a=Qt(o.scrollWidth,o.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),c=Qt(o.scrollHeight,o.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0);let u=-s.scrollLeft+wo(i);const d=-s.scrollTop;return X(l||o).direction==="rtl"&&(u+=Qt(o.clientWidth,l?l.clientWidth:0)-a),{width:a,height:c,x:u,y:d}}(ut(e)))}var Rl={getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:i,strategy:n}=e;const o=r==="clippingAncestors"?function(c){let u=te(c).filter(m=>Q(m)&&ft(m)!=="body"),d=null;const h=X(c).position==="fixed";let p=h?ce(c):c;for(;Q(p)&&!Wr(p);){const m=X(p),v=Or(p);(h?v||d:v||m.position!=="static"||!d||!["absolute","fixed"].includes(d.position))?d=m:u=u.filter(b=>b!==p),p=ce(p)}return u}(t):[].concat(r),s=[...o,i],l=s[0],a=s.reduce((c,u)=>{const d=fn(t,u,n);return c.top=Qt(d.top,c.top),c.right=hn(d.right,c.right),c.bottom=hn(d.bottom,c.bottom),c.left=Qt(d.left,c.left),c},fn(t,l,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{rect:t,offsetParent:r,strategy:i}=e;const n=Z(r),o=ut(r);if(r===o)return t;let s={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if((n||!n&&i!=="fixed")&&((ft(r)!=="body"||We(o))&&(s=qe(r)),Z(r))){const a=tt(r,!0);l.x=a.x+r.clientLeft,l.y=a.y+r.clientTop}return V(E({},t),{x:t.x-s.scrollLeft+l.x,y:t.y-s.scrollTop+l.y})},isElement:Q,getDimensions:function(e){if(Z(e))return{width:e.offsetWidth,height:e.offsetHeight};const t=tt(e);return{width:t.width,height:t.height}},getOffsetParent:pn,getDocumentElement:ut,async getElementRects(e){let{reference:t,floating:r,strategy:i}=e;const n=this.getOffsetParent||pn,o=this.getDimensions;return{reference:Ol(t,await n(r),i),floating:E({x:0,y:0},await o(r))}},getClientRects:e=>Array.from(e.getClientRects()),isRTL:e=>X(e).direction==="rtl"};function Ll(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:o=!0,elementResize:s=!0,animationFrame:l=!1}=i,a=n&&!l,c=a||o?[...Q(e)?te(e):e.contextElement?te(e.contextElement):[],...te(t)]:[];c.forEach(p=>{a&&p.addEventListener("scroll",r,{passive:!0}),o&&p.addEventListener("resize",r)});let u,d=null;if(s){let p=!0;d=new ResizeObserver(()=>{p||r(),p=!1}),Q(e)&&!l&&d.observe(e),Q(e)||!e.contextElement||l||d.observe(e.contextElement),d.observe(t)}let h=l?tt(e):null;return l&&function p(){const m=tt(e);!h||m.x===h.x&&m.y===h.y&&m.width===h.width&&m.height===h.height||r(),h=m,u=requestAnimationFrame(p)}(),r(),()=>{var p;c.forEach(m=>{a&&m.removeEventListener("scroll",r),o&&m.removeEventListener("resize",r)}),(p=d)==null||p.disconnect(),d=null,l&&cancelAnimationFrame(u)}}var Nl=(e,t,r)=>yl(e,t,E({platform:Rl},r)),x=class extends W{constructor(){super(...arguments);this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){!this.anchorEl||(this.cleanup=Ll(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[Cl({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(cn({apply:({rects:t})=>{const r=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=r?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Sl({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(Pl({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(cn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:r})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${r}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(wl({element:this.arrowEl,padding:this.arrowPadding})),Nl(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy}).then(({x:t,y:r,middlewareData:i,placement:n})=>{const o=getComputedStyle(this).direction==="rtl",s={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${t}px`,top:`${r}px`}),this.arrow){const l=i.arrow.x,a=i.arrow.y;let c="",u="",d="",h="";if(this.arrowPlacement==="start"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";c=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=o?p:"",h=o?"":p}else if(this.arrowPlacement==="end"){const p=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=o?"":p,h=o?p:"",d=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(h=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",c=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(h=typeof l=="number"?`${l}px`:"",c=typeof a=="number"?`${a}px`:"");Object.assign(this.arrowEl.style,{top:c,right:u,bottom:d,left:h,[s]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return et`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${he({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?et`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};x.styles=bl;f([it(".popup")],x.prototype,"popup",2);f([it(".popup__arrow")],x.prototype,"arrowEl",2);f([g()],x.prototype,"anchor",2);f([g({type:Boolean,reflect:!0})],x.prototype,"active",2);f([g({reflect:!0})],x.prototype,"placement",2);f([g({reflect:!0})],x.prototype,"strategy",2);f([g({type:Number})],x.prototype,"distance",2);f([g({type:Number})],x.prototype,"skidding",2);f([g({type:Boolean})],x.prototype,"arrow",2);f([g({attribute:"arrow-placement"})],x.prototype,"arrowPlacement",2);f([g({attribute:"arrow-padding",type:Number})],x.prototype,"arrowPadding",2);f([g({type:Boolean})],x.prototype,"flip",2);f([g({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],x.prototype,"flipFallbackPlacements",2);f([g({attribute:"flip-fallback-strategy"})],x.prototype,"flipFallbackStrategy",2);f([g({type:Object})],x.prototype,"flipBoundary",2);f([g({attribute:"flip-padding",type:Number})],x.prototype,"flipPadding",2);f([g({type:Boolean})],x.prototype,"shift",2);f([g({type:Object})],x.prototype,"shiftBoundary",2);f([g({attribute:"shift-padding",type:Number})],x.prototype,"shiftPadding",2);f([g({attribute:"auto-size"})],x.prototype,"autoSize",2);f([g()],x.prototype,"sync",2);f([g({type:Object})],x.prototype,"autoSizeBoundary",2);f([g({attribute:"auto-size-padding",type:Number})],x.prototype,"autoSizePadding",2);x=f([vt("sl-popup")],x);var Dl=rt`
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
`,Be=class extends W{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!!this.isMenuItem(e))}handleClick(e){const r=e.target.closest("sl-menu-item");(r==null?void 0:r.disabled)===!1&&(r.type==="checkbox"&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}}))}handleKeyDown(e){if(e.key==="Enter"){const t=this.getCurrentItem();e.preventDefault(),t==null||t.click()}if(e.key===" "&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let i=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return et`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Be.styles=Dl;f([it("slot")],Be.prototype,"defaultSlot",2);Be=f([vt("sl-menu")],Be);var Ml=rt`
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
`,U=class extends W{constructor(){super(...arguments);this.type="normal",this.checked=!1,this.value="",this.disabled=!1}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel=="undefined"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return la(this.defaultSlot)}render(){return et`
      <div
        part="base"
        class=${he({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
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
    `}};U.styles=Ml;f([it("slot:not([name])")],U.prototype,"defaultSlot",2);f([it(".menu-item")],U.prototype,"menuItem",2);f([g()],U.prototype,"type",2);f([g({type:Boolean,reflect:!0})],U.prototype,"checked",2);f([g()],U.prototype,"value",2);f([g({type:Boolean,reflect:!0})],U.prototype,"disabled",2);f([G("checked")],U.prototype,"handleCheckedChange",1);f([G("disabled")],U.prototype,"handleDisabledChange",1);f([G("type")],U.prototype,"handleTypeChange",1);U=f([vt("sl-menu-item")],U);var Ul=Object.defineProperty,zl=Object.getOwnPropertyDescriptor,qr=(e,t,r,i)=>{for(var n=i>1?void 0:i?zl(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&Ul(t,r,n),n};let Ie=class extends H{constructor(){super();this.day=po,this.weekDays=[{name:"monday",selected:!1,weekIndex:1},{name:"tuesday",selected:!1,weekIndex:2},{name:"wednesday",selected:!1,weekIndex:3},{name:"thursday",selected:!1,weekIndex:4},{name:"friday",selected:!1,weekIndex:5},{name:"saturday",selected:!1,weekIndex:6},{name:"sunday",selected:!1,weekIndex:0}],this._selectDay=e=>{this.weekDays=this.weekDays.map(t=>t.name===e?Ft(Vt({},t),{selected:!0}):Ft(Vt({},t),{selected:!1}))},this._updateUrlParam=e=>{const t=new URLSearchParams(window.location.search);t.set("day",e);const r=`${window.location.pathname}?${t.toString()}`;history.pushState(null,"",r)},this._updateDay=e=>{this.day.weekDay=e,this._selectDay(e),this._updateUrlParam(e)},this._selectDay(this.day.weekDay)}static get styles(){return[At`
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
          ${sl(this.weekDays,e=>R`
              <sl-menu-item
                @click=${()=>this._updateDay(e.name)}
                class="${dl({selected:e.selected})}"
                value=${e.name}
                >${e.name}</sl-menu-item
              >
            `)}
        </sl-menu>
      </sl-dropdown>

      <span>or </span>
      <span @click=${()=>this._updateDay(uo())}>today</span>
    `}};qr([ho()],Ie.prototype,"day",2);qr([Ko()],Ie.prototype,"weekDays",2);Ie=qr([Bt("app-day-selection")],Ie);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bl(e,t,r){return e?t():r==null?void 0:r()}var Il=Object.defineProperty,jl=Object.getOwnPropertyDescriptor,fe=(e,t,r,i)=>{for(var n=i>1?void 0:i?jl(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&Il(t,r,n),n};let zt=class extends H{constructor(){super(...arguments);this.business="",this.category="",this.discountName="",this.price=4.9,this.formatPrice=e=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(e)}static get styles(){return[At`
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
          ${Bl(this.discountName,()=>R`${this.discountName}`,()=>R`${this.category}`)}
        </span>

        <span class="business">${this.business}</span>
        <data id="price" value=${this.price}
          >${this.formatPrice(this.price)}</data
        >
      </div>
    `}};fe([mt({type:String})],zt.prototype,"business",2);fe([mt({type:String})],zt.prototype,"category",2);fe([mt({type:String})],zt.prototype,"discountName",2);fe([mt({type:Number})],zt.prototype,"price",2);zt=fe([Bt("app-discount-card")],zt);var Hl=Object.defineProperty,Vl=Object.getOwnPropertyDescriptor,Fl=(e,t,r,i)=>{for(var n=i>1?void 0:i?Vl(t,r):t,o=e.length-1,s;o>=0;o--)(s=e[o])&&(n=(i?s(t,r,n):s(n))||n);return i&&n&&Hl(t,r,n),n};let mn=class extends H{static get styles(){return At`
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
    `}constructor(){super()}firstUpdated(){var t;new ht((t=this.shadowRoot)==null?void 0:t.querySelector("#routerOutlet")).setRoutes([{path:"/discount-day/",animate:!0,children:[{path:"",component:"app-discount"},{path:"discount",component:"app-discount",action:async()=>{await Xr(()=>Promise.resolve().then(function(){return il}),void 0)}},{path:"about",component:"app-about",action:async()=>{await Xr(()=>import("./app-about.82c1be68.js"),[])}}]}])}render(){return R`
      <div>
        <main>
          <div id="routerOutlet"></div>
        </main>
      </div>
    `}};mn=Fl([Bt("app-index")],mn);export{lo as a,Bt as e,At as i,H as s,R as y};
//# sourceMappingURL=index.6cacaad5.js.map
