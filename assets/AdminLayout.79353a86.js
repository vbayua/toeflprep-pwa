import{_ as v,d as w,r as h,a as $,o as i,c as n,w as t,b as e,Q as m,e as l,t as _,f as b,g as d,h as f,i as u,R as p}from"./index.84a03356.js";import{Q as y,a as S,b as k}from"./QHeader.6e4d339d.js";import{Q as U}from"./QSpace.44c390bd.js";import{Q as q}from"./QMenu.56008c92.js";import{Q as c,a as s}from"./QItem.f413186c.js";import{Q as g}from"./QSeparator.ba6a8f71.js";import{Q as C}from"./QList.bd040621.js";import{Q as L,a as V}from"./QDrawer.d327ee82.js";import{Q as D,a as T}from"./QLayout.0b4e0589.js";import"./use-prevent-scroll.a70b7d0f.js";import"./focus-manager.d6507951.js";import"./use-dark.28ca17e4.js";import"./format.2a3572e1.js";const A=w({name:"AdminLayout",components:{},setup(){return{drawer:h(!1),miniState:h(!0)}},computed:{currentUser(){return this.$store.state.auth.user}},mounted(){!this.currentUser&&this.currentUser.roles[0]==="user"&&(this.$q.notify({message:"Unauthorized!",color:"negative"}),this.$router.push("/auth/login"))},methods:{async logout(){try{this.$q.loading.show({message:"Signing out"}),await this.$store.dispatch("auth/logout"),await this.$router.push("/auth/login")}catch(a){this.$q.loading.hide(),this.$q.notify({message:a.message,color:"negative"})}finally{this.$q.loading.hide()}}}}),B=u(" TOEFL Preparation "),H={class:"text-left q-mr-sm"},z={class:"row no-wrap q-pa-md"},I={class:"column items-center"},M={class:"text-subtitle1"},N=u(" Home "),P=u(" Data Ujian "),R=u(" Data Hasil ");function j(a,o,x,E,F,O){const Q=$("router-view");return i(),n(D,{view:"hHh Lpr lff"},{default:t(()=>[e(k,{elevated:""},{default:t(()=>[e(y,null,{default:t(()=>[e(m,{flat:"",round:"",dense:"",icon:"menu",onClick:o[0]||(o[0]=r=>a.drawer=!a.drawer)}),e(S,null,{default:t(()=>[B]),_:1}),e(U),e(m,{flat:"",padding:"2px 10px","icon-right":"admin_panel_settings"},{default:t(()=>[l("div",H,_(a.currentUser.name),1),e(q,null,{default:t(()=>[l("div",z,[l("div",I,[e(b,{size:"72px"},{default:t(()=>[e(d,{name:"account_circle"})]),_:1}),l("div",M,_(a.currentUser.name),1),e(m,{color:"primary",label:"Logout",push:"",size:"md",onClick:a.logout},null,8,["onClick"])])])]),_:1})]),_:1})]),_:1})]),_:1}),e(V,{modelValue:a.drawer,"onUpdate:modelValue":o[1]||(o[1]=r=>a.drawer=r),"show-if-above":"",mini:a.miniState,"mini-to-overlay":"",width:200,breakpoint:500,bordered:"",class:"bg-grey-3",onMouseover:o[2]||(o[2]=r=>a.miniState=!1),onMouseout:o[3]||(o[3]=r=>a.miniState=!0)},{default:t(()=>[e(L,{class:"fit"},{default:t(()=>[e(C,{padding:""},{default:t(()=>[f((i(),n(c,{clickable:"",to:"/admin"},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(d,{name:"home"})]),_:1}),e(s,null,{default:t(()=>[N]),_:1})]),_:1})),[[p]]),e(g),f((i(),n(c,{clickable:"",to:"/admin/exam-data"},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(d,{name:"assignment"})]),_:1}),e(s,null,{default:t(()=>[P]),_:1})]),_:1})),[[p]]),f((i(),n(c,{clickable:"",to:"/admin/results-data"},{default:t(()=>[e(s,{avatar:""},{default:t(()=>[e(d,{name:"assignment_turned_in"})]),_:1}),e(s,null,{default:t(()=>[R]),_:1})]),_:1})),[[p]]),e(g)]),_:1})]),_:1})]),_:1},8,["modelValue","mini"]),e(T,null,{default:t(()=>[e(Q)]),_:1})]),_:1})}var ie=v(A,[["render",j]]);export{ie as default};
