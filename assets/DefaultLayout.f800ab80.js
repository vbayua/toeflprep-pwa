import{j as R,n as T,r as m,a1 as N,k as s,p as f,q as O,Y as P,l as g,u as $,v as k,_ as S,a as j,o as A,c as I,w as r,b as u,f as D,e as E,i as K}from"./index.84a03356.js";import{Q as p,a as V,b as M}from"./QHeader.6e4d339d.js";import{b as U,Q as Y,a as G}from"./QLayout.0b4e0589.js";var J=R({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:_,emit:d}){const{proxy:{$q:v}}=$(),t=T(k,()=>{console.error("QFooter needs to be child of QLayout")}),i=m(parseInt(a.heightHint,10)),n=m(!0),b=m(N.value===!0||t.isContainer.value===!0?0:window.innerHeight),h=s(()=>a.reveal===!0||t.view.value.indexOf("F")>-1||v.platform.is.ios&&t.isContainer.value===!0),w=s(()=>t.isContainer.value===!0?t.containerHeight.value:b.value),y=s(()=>{if(a.modelValue!==!0)return 0;if(h.value===!0)return n.value===!0?i.value:0;const e=t.scroll.value.position+w.value+i.value-t.height.value;return e>0?e:0}),x=s(()=>a.modelValue!==!0||h.value===!0&&n.value!==!0),q=s(()=>a.modelValue===!0&&x.value===!0&&a.reveal===!0),C=s(()=>"q-footer q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-bottom"+(a.bordered===!0?" q-footer--bordered":"")+(x.value===!0?" q-footer--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus"+(h.value!==!0?" hidden":""):"")),H=s(()=>{const e=t.rows.value.bottom,o={};return e[0]==="l"&&t.left.space===!0&&(o[v.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(o[v.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),o});function l(e,o){t.update("footer",e,o)}function c(e,o){e.value!==o&&(e.value=o)}function z({height:e}){c(i,e),l("size",e)}function B(){if(a.reveal!==!0)return;const{direction:e,position:o,inflectionPoint:L}=t.scroll.value;c(n,e==="up"||o-L<100||t.height.value-w.value-o-i.value<300)}function F(e){q.value===!0&&c(n,!0),d("focusin",e)}f(()=>a.modelValue,e=>{l("space",e),c(n,!0),t.animate()}),f(y,e=>{l("offset",e)}),f(()=>a.reveal,e=>{e===!1&&c(n,a.modelValue)}),f(n,e=>{t.animate(),d("reveal",e)}),f([i,t.scroll,t.height],B),f(()=>v.screen.height,e=>{t.isContainer.value!==!0&&c(b,e)});const Q={};return t.instances.footer=Q,a.modelValue===!0&&l("size",i.value),l("space",a.modelValue),l("offset",y.value),O(()=>{t.instances.footer===Q&&(t.instances.footer=void 0,l("size",0),l("offset",0),l("space",!1))}),()=>{const e=P(_.default,[g(U,{debounce:0,onResize:z})]);return a.elevated===!0&&e.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g("footer",{class:C.value,style:H.value,onFocusin:F},e)}}});const W={},X=E("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1),Z=K(" TOEFL Preparation App ");function ee(a,_){const d=j("router-view");return A(),I(Y,{view:"hHh LpR fFf"},{default:r(()=>[u(M,{class:"bg-primary text-white"},{default:r(()=>[u(p,null,{default:r(()=>[u(V,null,{default:r(()=>[u(D,null,{default:r(()=>[X]),_:1}),Z]),_:1})]),_:1})]),_:1}),u(G,null,{default:r(()=>[u(d)]),_:1}),u(J,{class:"bg-grey-8 text-white"},{default:r(()=>[u(p,null,{default:r(()=>[u(V)]),_:1})]),_:1})]),_:1})}var le=S(W,[["render",ee]]);export{le as default};
