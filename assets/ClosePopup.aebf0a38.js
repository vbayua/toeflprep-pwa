import{M as s,x as d}from"./index.84a03356.js";import{n as i,o as a}from"./use-prevent-scroll.a70b7d0f.js";function p(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var h=s({name:"close-popup",beforeMount(e,{value:t}){const o={depth:p(t),handler(r){o.depth!==0&&setTimeout(()=>{const n=i(e);n!==void 0&&a(n,r,o.depth)})},handlerKey(r){d(r,13)===!0&&o.handler(r)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=p(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});export{h as C};
