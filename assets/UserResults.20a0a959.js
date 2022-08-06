import{_ as y,r as m,aA as h,o as _,c as $,w as o,e as k,b as r,g as v,Q,i as s,t as i}from"./index.84a03356.js";import{Q as x}from"./QInput.19253bad.js";import{Q as T}from"./QSeparator.ba6a8f71.js";import{Q as L,a as d}from"./QTr.7ab39b7b.js";import{Q as U}from"./QTable.ad33ed59.js";import{Q as V}from"./QPage.45ee8f60.js";import"./use-dark.28ca17e4.js";import"./format.2a3572e1.js";import"./focus-manager.d6507951.js";import"./use-form.39c6ddc7.js";import"./QList.bd040621.js";import"./QMarkupTable.d57badb1.js";import"./QSelect.7375c7f4.js";import"./QItem.f413186c.js";import"./QItemLabel.83c7f352.js";import"./QMenu.56008c92.js";import"./use-prevent-scroll.a70b7d0f.js";import"./QDialog.3ff4f6d7.js";import"./option-sizes.005a78de.js";function g(e){setTimeout(()=>{window.URL.revokeObjectURL(e.href)},1e4),e.remove()}function B(e,l,u={}){const{mimeType:t,byteOrderMark:n,encoding:c}=typeof u=="string"?{mimeType:u}:u,a=c!==void 0?new TextEncoder(c).encode([l]):l,b=n!==void 0?[n,a]:[a],R=new Blob(b,{type:t||"application/octet-stream"}),p=document.createElement("a");p.href=window.URL.createObjectURL(R),p.setAttribute("download",e),typeof p.download=="undefined"&&p.setAttribute("target","_blank"),p.classList.add("hidden"),p.style.position="fixed",document.body.appendChild(p);try{return p.click(),g(p),!0}catch(S){return g(p),S}}const f=[{name:"username",align:"left",label:"Username",field:"username",sortable:!0,format:e=>`${e}`},{name:"name",align:"left",label:"Name",field:"name",sortable:!0,format:e=>`${e}`},{name:"listeningRaw",align:"left",label:"Listening Raw",field:"listeningRaw",sortable:!0,format:e=>`${e}`},{name:"structureRaw",align:"left",label:"Structure Raw",field:"structureRaw",sortable:!0,format:e=>`${e}`},{name:"readingRaw",align:"left",label:"Reading Raw",field:"readingRaw",sortable:!0,format:e=>`${e}`},{name:"listeningScaled",align:"left",label:"Listening Scaled",field:"listeningScaled",sortable:!0,format:e=>`${e}`},{name:"structureScaled",align:"left",label:"Structure Scaled",field:"structureScaled",sortable:!0,format:e=>`${e}`},{name:"readingScaled",align:"left",label:"Reading Scaled",field:"readingScaled",sortable:!0,format:e=>`${e}`},{name:"totalRaw",align:"left",label:"Raw Score",field:"totalRaw",sortable:!0,format:e=>`${e}`},{name:"totalScaled",align:"left",label:"Scaled Score",field:"totalScaled",sortable:!0,format:e=>`${e}`},{name:"date",align:"left",label:"Date",field:"date",format:e=>`${e}`}];function w(e,l,u){let t=l!==void 0?l(e,u):e;return t=t==null?"":String(t),t=t.split('"').join('""'),`"${t}"`}const I={name:"UserResultss",setup(){return{filter:m(""),columns:f}},data(){return{results:m([])}},mounted(){this.$q.loading.show({message:"Loading Results Data"});const e=this.$route.params.id;h.getExamResults(e).then(l=>{this.results=l.data.result,this.$q.loading.hide()},l=>{this.$q.loading.hide(),this.$q.notify({message:`Error ${l.message}`})})},methods:{exportTable(){const e=[f.map(t=>w(t.label))].concat(this.results.map(t=>f.map(n=>w(typeof n.field=="function"?n.field(t):t[n.field===void 0?n.name:n.field],n.format,t)).join(","))).join(`\r
`),l=new Date().toISOString();B(`${l}-toeflprep-report.csv`,"\uFEFF"+e,"text/csv")!==!0&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}}};function j(e,l,u,t,n,c){return _(),$(V,{padding:""},{default:o(()=>[k("div",null,[r(U,{title:"Data Hasil TOEFL Preparation",rows:n.results,columns:t.columns,"row-key":"date",separator:"cells"},{"top-right":o(()=>[r(x,{modelValue:t.filter,"onUpdate:modelValue":l[0]||(l[0]=a=>t.filter=a),borderless:"",dense:"",debounce:"300",placeholder:"Search"},{append:o(()=>[r(v,{name:"search"})]),_:1},8,["modelValue"]),r(T,{spaced:"",inset:"",vertical:"",dark:""}),r(Q,{color:"primary","icon-right":"archive",label:"Print Report","no-caps":"",to:{name:"printreport",params:{id:e.$route.params.id}}},null,8,["to"])]),body:o(a=>[r(L,{props:a},{default:o(()=>[r(d,{key:"username",props:a},{default:o(()=>[s(i(a.row.userId.username),1)]),_:2},1032,["props"]),r(d,{key:"name",props:a},{default:o(()=>[s(i(a.row.userId.name),1)]),_:2},1032,["props"]),r(d,{key:"listeningRaw",props:a},{default:o(()=>[s(i(a.row.listeningRaw),1)]),_:2},1032,["props"]),r(d,{key:"structureRaw",props:a},{default:o(()=>[s(i(a.row.structureRaw),1)]),_:2},1032,["props"]),r(d,{key:"readingRaw",props:a},{default:o(()=>[s(i(a.row.readingRaw),1)]),_:2},1032,["props"]),r(d,{key:"listeningScaled",props:a},{default:o(()=>[s(i(a.row.listeningScaled),1)]),_:2},1032,["props"]),r(d,{key:"structureScaled",props:a},{default:o(()=>[s(i(a.row.structureScaled),1)]),_:2},1032,["props"]),r(d,{key:"readingScaled",props:a},{default:o(()=>[s(i(a.row.readingScaled),1)]),_:2},1032,["props"]),r(d,{key:"totalRaw",props:a},{default:o(()=>[s(i(a.row.totalRaw),1)]),_:2},1032,["props"]),r(d,{key:"totalScaled",props:a},{default:o(()=>[s(i(a.row.totalScaled),1)]),_:2},1032,["props"]),r(d,{key:"date",props:a},{default:o(()=>[s(i(a.row.date),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])])]),_:1})}var ee=y(I,[["render",j]]);export{ee as default};
