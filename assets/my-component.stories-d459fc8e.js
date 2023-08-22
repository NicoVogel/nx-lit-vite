import{e as T,A as O,r as j,s as N,x as a}from"./directive-helpers-c0f65773.js";import{r as k,M as P,C as _,f as v,A as S}from"./chunk-S4VUQJ4A-8ad637b3.js";import{u as x}from"./index-b6003417.js";import"./iframe-11f168a0.js";import"../sb-preview/runtime.js";import"./index-bab9eea1.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},D=n=>(...t)=>({_$litDirective$:n,values:t});let R=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=(n,t)=>{var e,o;const r=n._$AN;if(r===void 0)return!1;for(const s of r)(o=(e=s)._$AO)===null||o===void 0||o.call(e,t,!1),l(s,t);return!0},p=n=>{let t,e;do{if((t=n._$AM)===void 0)break;e=t._$AN,e.delete(n),n=t}while((e==null?void 0:e.size)===0)},A=n=>{for(let t;t=n._$AM;n=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(n))break;e.add(n),I(t)}};function F(n){this._$AN!==void 0?(p(this),this._$AM=n,A(this)):this._$AM=n}function L(n,t=!1,e=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let s=e;s<o.length;s++)l(o[s],!1),p(o[s]);else o!=null&&(l(o,!1),p(o));else l(this,n)}const I=n=>{var t,e,o,r;n.type==w.CHILD&&((t=(o=n)._$AP)!==null&&t!==void 0||(o._$AP=L),(e=(r=n)._$AQ)!==null&&e!==void 0||(r._$AQ=F))};class U extends R{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,o){super._$AT(t,e,o),A(this),this.isConnected=t._$AU}_$AO(t,e=!0){var o,r;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)===null||o===void 0||o.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),e&&(l(this,t),p(this))}setValue(t){if(T(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class z extends U{constructor(){super(...arguments),this.prevData={}}render(t){return O}update(t,[e]){var o;this.element!==t.element&&(this.element=t.element),this.host=((o=t.options)===null||o===void 0?void 0:o.host)||this.element,this.apply(e),this.groom(e),this.prevData={...e}}apply(t){if(!t)return;const{prevData:e,element:o}=this;for(const r in t){const s=t[r];s!==e[r]&&(o[r]=s)}}groom(t){const{prevData:e,element:o}=this;if(e)for(const r in e)(!t||!(r in t)&&o[r]===e[r])&&(o[r]=void 0)}}const C=D(z);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=n=>t=>typeof t=="function"?((e,o)=>(customElements.define(e,o),o))(n,t):((e,o)=>{const{kind:r,elements:s}=o;return{kind:r,elements:s,finisher(c){customElements.define(e,c)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}},B=(n,t,e)=>{t.constructor.createProperty(e,n)};function b(n){return(t,e)=>e!==void 0?B(n,t,e):H(n,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var h;((h=window.HTMLSlotElement)===null||h===void 0?void 0:h.prototype.assignedElements)!=null;const X=`:host{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}.card{padding:2em}.hint{color:#888}button{color:#fff;border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){button{background-color:#f9f9f9;color:#000}}
`;var Q=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,f=(n,t,e,o)=>{for(var r=o>1?void 0:o?Y(t,e):t,s=n.length-1,c;s>=0;s--)(c=n[s])&&(r=(o?c(t,e,r):c(r))||r);return o&&r&&Q(t,e,r),r};let m=class extends N{constructor(){super(...arguments),this.hint="Some hint",this.count=0}render(){return a`
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="hint">${this.hint}</p>
    `}_onClick(){this.count++}};m.styles=j(X);f([b()],m.prototype,"hint",2);f([b({type:Number})],m.prototype,"count",2);m=f([V("my-component")],m);var g={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q=k,J=Symbol.for("react.element"),K=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,G=q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z={key:!0,ref:!0,__self:!0,__source:!0};function E(n,t,e){var o,r={},s=null,c=null;e!==void 0&&(s=""+e),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(c=t.ref);for(o in t)W.call(t,o)&&!Z.hasOwnProperty(o)&&(r[o]=t[o]);if(n&&n.defaultProps)for(o in t=n.defaultProps,t)r[o]===void 0&&(r[o]=t[o]);return{$$typeof:J,type:n,key:s,ref:c,props:r,_owner:G.current}}d.Fragment=K;d.jsx=E;d.jsxs=E;g.exports=d;var i=g.exports;function $(n){const t=Object.assign({h1:"h1",h2:"h2"},x(),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(P,{title:"Components/MyComponent",argTypes:{hint:{control:"text",description:"hint text",table:{defaultValue:"Some hint"}},count:{control:"number",description:"start value",table:{defaultValue:0}}}}),`
`,i.jsx(t.h1,{id:"mycomponent",children:"MyComponent"}),`
`,i.jsx(_,{children:i.jsx(v,{name:"MyComponent",args:{hint:"Test",count:1},children:e=>a` <my-component ${C(e)}> </my-component> `})}),`
`,i.jsx(S,{story:"MyComponent"}),`
`,i.jsx(t.h2,{id:"fixed-values",children:"fixed values"}),`
`,i.jsx(_,{children:i.jsx(v,{name:"MyComponentFixed",children:a` <my-component hint="Fixed value" count="42"> </my-component> `})})]})}function tt(n={}){const{wrapper:t}=Object.assign({},x(),n.components);return t?i.jsx(t,{...n,children:i.jsx($,{...n})}):$(n)}const y=n=>a` <my-component ${C(n)}> </my-component> `;y.storyName="MyComponent";y.args={hint:"Test",count:1};y.parameters={storySource:{source:"options => html` <my-component ${spreadProps(options)}> </my-component> `"}};const M=()=>a` <my-component hint="Fixed value" count="42"> </my-component> `;M.storyName="MyComponentFixed";M.parameters={storySource:{source:'html` <my-component hint="Fixed value" count="42"> </my-component> `'}};const u={title:"Components/MyComponent",argTypes:{hint:{control:"text",description:"hint text",table:{defaultValue:"Some hint"}},count:{control:"number",description:"start value",table:{defaultValue:0}}},tags:["stories-mdx"],includeStories:["myComponent","myComponentFixed"]};u.parameters=u.parameters||{};u.parameters.docs={...u.parameters.docs||{},page:tt};const mt=["myComponent","myComponentFixed"];export{mt as __namedExportsOrder,u as default,y as myComponent,M as myComponentFixed};
//# sourceMappingURL=my-component.stories-d459fc8e.js.map
