import{Q as a}from"./QPage.45ee8f60.js";import{_ as o,d as n,af as r,o as s,c,w as d,e as t,t as i}from"./index.84a03356.js";const p=n({name:"BoardUser",data(){return{content:""}},mounted(){r.getUserBoard().then(e=>{this.content=e.data},e=>{this.content=e.toString()})}}),_=t("h2",null,"User Board",-1);function f(e,u,l,h,m,B){return s(),c(a,{padding:""},{default:d(()=>[_,t("h5",null,i(e.content),1)]),_:1})}var $=o(p,[["render",f]]);export{$ as default};
