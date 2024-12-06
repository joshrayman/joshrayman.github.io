var lt=Object.defineProperty;var ct=(r,t,e)=>t in r?lt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var V=(r,t,e)=>ct(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,B=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),F=new WeakMap;let st=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(B&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&F.set(e,t))}return t}toString(){return this.cssText}};const dt=r=>new st(typeof r=="string"?r:r+"",void 0,j),pt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new st(e,r,j)},ut=(r,t)=>{if(B)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=O.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},K=B?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return dt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:$t,getOwnPropertyDescriptor:mt,getOwnPropertyNames:gt,getOwnPropertySymbols:_t,getPrototypeOf:yt}=Object,m=globalThis,W=m.trustedTypes,At=W?W.emptyScript:"",M=m.reactiveElementPolyfillSupport,x=(r,t)=>r,D={toAttribute(r,t){switch(t){case Boolean:r=r?At:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},it=(r,t)=>!ft(r,t),q={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),m.litPropertyMetadata??(m.litPropertyMetadata=new WeakMap);class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=q){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&$t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=mt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const l=i==null?void 0:i.call(this);o.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??q}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const t=yt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,s=[...gt(e),..._t(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(K(i))}else t!==void 0&&e.push(K(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:D).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:D;this._$Em=i,this[i]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??it)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[x("elementProperties")]=new Map,A[x("finalized")]=new Map,M==null||M({ReactiveElement:A}),(m.reactiveElementVersions??(m.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,H=C.trustedTypes,J=H?H.createPolicy("lit-html",{createHTML:r=>r}):void 0,rt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,ot="?"+$,vt=`<${ot}>`,y=document,S=()=>y.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",I=Array.isArray,bt=r=>I(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",R=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,G=/>/g,g=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,X=/"/g,nt=/^(?:script|style|textarea|title)$/i,wt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),Y=wt(1),v=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),tt=new WeakMap,_=y.createTreeWalker(y,129);function at(r,t){if(!I(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return J!==void 0?J.createHTML(t):t}const xt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=w;for(let l=0;l<e;l++){const a=r[l];let c,p,h=-1,u=0;for(;u<a.length&&(n.lastIndex=u,p=n.exec(a),p!==null);)u=n.lastIndex,n===w?p[1]==="!--"?n=Z:p[1]!==void 0?n=G:p[2]!==void 0?(nt.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=g):p[3]!==void 0&&(n=g):n===g?p[0]===">"?(n=i??w,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?g:p[3]==='"'?X:Q):n===X||n===Q?n=g:n===Z||n===G?n=w:(n=g,i=void 0);const f=n===g&&r[l+1].startsWith("/>")?" ":"";o+=n===w?a+vt:h>=0?(s.push(c),a.slice(0,h)+rt+a.slice(h)+$+f):a+$+(h===-2?l:f)}return[at(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class k{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[c,p]=xt(t,e);if(this.el=k.createElement(c,s),_.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=_.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(rt)){const u=p[n++],f=i.getAttribute(h).split($),U=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:U[2],strings:f,ctor:U[1]==="."?Et:U[1]==="?"?St:U[1]==="@"?Pt:N}),i.removeAttribute(h)}else h.startsWith($)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(nt.test(i.tagName)){const h=i.textContent.split($),u=h.length-1;if(u>0){i.textContent=H?H.emptyScript:"";for(let f=0;f<u;f++)i.append(h[f],S()),_.nextNode(),a.push({type:2,index:++o});i.append(h[u],S())}}}else if(i.nodeType===8)if(i.data===ot)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf($,h+1))!==-1;)a.push({type:7,index:o}),h+=$.length-1}o++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function b(r,t,e=r,s){var n,l;if(t===v)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=P(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=b(r,i._$AS(r,t.values),i,s)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??y).importNode(e,!0);_.currentNode=i;let o=_.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new T(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new kt(o,this,t)),this._$AV.push(c),a=s[++l]}n!==(a==null?void 0:a.index)&&(o=_.nextNode(),n++)}return _.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class T{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==v&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=k.createElement(at(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new Ct(i,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new k(t)),e}k(t){I(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new T(this.O(S()),this.O(S()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=b(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==v,n&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=b(this,l[s+a],e,a),c===v&&(c=this._$AH[a]),n||(n=!P(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class St extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Pt extends N{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??d)===v)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class kt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const L=C.litHtmlPolyfillSupport;L==null||L(k,T),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.2.1");const Tt=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new T(t.insertBefore(S(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class E extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return v}}var et;E._$litElement$=!0,E.finalized=!0,(et=globalThis.litElementHydrateSupport)==null||et.call(globalThis,{LitElement:E});const z=globalThis.litElementPolyfillSupport;z==null||z({LitElement:E});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");const Ut=[{url:"https://theshadowcommittee.bandcamp.com/track/winterval-armistice-electro",name:"winterval"},{url:"https://observablehq.com/@joshrayman/uk-17ge-majority-explorer",name:"tree"},{url:"https://observablehq.com/d/975fc8993e7de784",name:"all i want"},{url:"https://theshadowcommittee.bandcamp.com/track/hark-the-herald-angels-sing",name:"hark"}];class ht extends E{constructor(){super(),console.log("page show"),this.text="",this.exitTransition=!1,window.addEventListener("pageshow",()=>{console.log("page show"),this.exitTransition=!1})}connectedCallback(){super.connectedCallback(),this._onKeyDown=this._onKeyDown.bind(this),document.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._onKeyDown)}_onKeyDown(t){this.error=!1,t.key==="Enter"?(this._openPage(this.text),this.text=""):t.key==="Escape"?this.text="":t.key==="Backspace"?this.text=this.text.slice(0,-1):t.key.length===1&&(this.text+=t.key)}async _openPage(){console.log("open page",this.text);const t=Ut.find(e=>e.name===this.text.toLowerCase());if(t){this.exitTransition=!0,await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>setTimeout(s,500));const e=t.url;await new Promise(s=>setTimeout(s,500)),document.startViewTransition?await document.startViewTransition(()=>{window.location.href=e}).finished:window.location.href=e}else{this.error=!0,this.text="";return}}render(){return Y`
      <div class="computer">
        <div class="screen ${this.exitTransition?"exit-transition":""}">
          <slot></slot><br>
          ${this.error?Y`<p class="error">Error: ${this.text} not found</p>`:""}
          <p>$ ${this.text}<span>_</span></p>

<pre>
    *
   /.\\
   /.\\
  /*. \\
  /*..\\
 /*. ..\\
/.*... .\\
/.,*....\\
   |||
</pre>
<pre class="accent">
    *
      
      
   *   
   *   
  *     
  *      
   *     
   
</pre>
<pre class="accent2">
     
      
      
     o 
       
    o   
      o  
         
    
</pre>
<pre class="accent3">
     
      
      
       
       
        
         
         
   |||
</pre>
        </div>
        <div class="plinth"></div>
        <div class="tower">
          <div class="power-button"></div>
          <div class="floppy-drive">
            <div class="floppy-drive-slot"></div>
          </div>
          <div class="speaker"></div>
          <div class="logo"></div>
        </div>
      </div>
    `}_onClick(){this.count++}static get styles(){return pt`
      :host {
        --base-size: 30;
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
      }

      @media (max-width: 768px) {
        :host {
          --base-size: 50;
        }
      }

      .computer {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .screen {
        font-family: monospace;
        background-color: #002200;
        color: #00ff00;
        border: 4px solid #F5F5DC;
        border-radius: 3px;
        padding: 20px;
        position: relative;
        z-index: 1;
        overflow: hidden;

        width: calc(var(--base-size) * 1vw);
        height: calc(var(--base-size) * 1vw);
        
        &.exit-transition {
          transition: transform 1s ease-in, color 0.1s ease-in;
          transform-origin: center;

          transform: scale(10);
          color: #002200;
        }

        & span {
          animation: blink 1s step-end infinite;
        }

        & pre {
          margin: 0;
          position: absolute;
          bottom: 1ch;
          right: 1ch;


          &.accent {
            color: #ffff00;
          }

          &.accent2 {
            color: #ff0000;
            animation: blink-accent2 5s step-end infinite;
          }

          &.accent3 {
            color: brown;
          }
        }
      }

      @keyframes blink-accent2 {
        from, to {
          color: #ff0000;
        }
        90% {
          color: transparent;
        }
      }

      .plinth {
        width: calc(var(--base-size) * 0.8vw);
        height: 30px;
        background-color: #C5C5AC;
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
      }

      .tower {
        background-color: #F5F5DC;
        border-radius: 3px;
        width: calc(var(--base-size) * 1.2vw);
        height: calc(var(--base-size) * 0.3vw);
        padding: 20px;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          "power-button floppy-drive"
          "speaker logo";

        & .power-button {
          background-color: #F5F5DC;
          border: 2px solid #C5C5AC;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          grid-area: power-button;
        }

        & .floppy-drive {
          background-color: #C5C5AC;
          border: 2px solid #C5C5AC;
          width: 100%;
          max-width: 150px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          grid-area: floppy-drive;
          margin: 0 auto;
        }

        & .floppy-drive-slot {
          background-color: #222;
          border: 2px solid #C5C5AC;
          width: 90%;
          max-width: 125px;
          width: 125px;
          height: 5px;
        }

        & .speaker {
          background-image: repeating-linear-gradient(
            90deg,
            #65656C,
            #65656C 5px,
            #B5B59C 5px,
            #B5B59C 10px
          );
          background-color: #C5C5AC;
          border: 2px solid #C5C5AC;
          grid-area: speaker;
          width: 90%
          max-width: 205px;
        }

        & .logo {
          background-color: #C5C5AC;
          border: 2px solid #C5C5AC;
          grid-area: logo;
          width: 2vw;
          max-width: 30px;
          height: 2vw;
          max-height: 30px;
          margin-left: auto;
          margin-top: auto;
        }
      }

      @keyframes blink {
        from, to {
          background-color: #002200;
        }
        50% {
          background-color: #00ff00;
        }
      }
    `}}V(ht,"properties",{error:{type:Boolean},exitTransition:{type:Boolean},text:{type:String}});window.customElements.define("terminal-graphic",ht);
