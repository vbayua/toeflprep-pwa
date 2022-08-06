import{Q as h}from"./QSeparator.ba6a8f71.js";import{Q as d}from"./QInput.19253bad.js";import{Q as m,a as p}from"./QCard.e4543373.js";import{_ as f,r as n,o as g,c as _,w as a,e as o,b as s,Q as w}from"./index.84a03356.js";import{Q as x}from"./QForm.354579a1.js";import{Q as b}from"./QPage.45ee8f60.js";import"./use-dark.28ca17e4.js";import"./format.2a3572e1.js";import"./focus-manager.d6507951.js";import"./use-form.39c6ddc7.js";const Q={},q={name:"LoginPage",components:Q,setup(){const t=n(null),r=n(null),u=n(null),e=n(null);return{username:t,usernameref:r,usernamerules:[l=>!!l||"* Required"],password:u,passwordref:e,passwordrules:[l=>!!l||"* Required"]}},data(){return{message:""}},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn},currentUser(){return this.$store.state.auth.user}},created(){this.loggedIn&&this.currentUser.roles[0]==="admin"?this.$router.push("/home"):this.$router.push("/admin/")},methods:{async handleLogin(){try{this.$q.loading.show({message:"Authenticating"});const t={username:this.username,password:this.password};await this.$store.dispatch("auth/login",t),console.log(this.currentUser.roles),this.currentUser.roles[0]==="admin"?this.$router.push("/admin/home"):this.$router.push("/home")}catch(t){this.$q.loading.hide(),this.$q.notify({message:`Error : ${t.message}`,color:"negative"})}finally{this.$q.loading.hide()}}}},$={class:"full-width",style:{"max-width":"400px"}},y=o("div",{class:"q-mt-md text-center text-h5"},[o("div",{class:"text-h6 text-blue-10"}," TOEFL PREPARATION "),o("span",{class:"text-subtitle1 text-blue-12"}," Log In ")],-1),V={class:"column"};function v(t,r,u,e,l,c){return g(),_(b,{class:"flex flex-center"},{default:a(()=>[o("div",$,[s(p,{elevated:"",bordered:"",class:"column"},{default:a(()=>[y,s(h,{inset:"",dark:""}),s(x,{class:"q-gutter-md",onSubmit:c.handleLogin},{default:a(()=>[s(m,null,{default:a(()=>[s(d,{ref:"usernameref",modelValue:e.username,"onUpdate:modelValue":r[0]||(r[0]=i=>e.username=i),filled:"",type:"text",class:"q-mb-auto",label:"Username",rules:e.usernamerules},null,8,["modelValue","rules"]),s(d,{ref:"passwordref",modelValue:e.password,"onUpdate:modelValue":r[1]||(r[1]=i=>e.password=i),filled:"",type:"password",class:"q-mb-auto",label:"Password",rules:e.passwordrules},null,8,["modelValue","rules"])]),_:1}),s(m,null,{default:a(()=>[o("div",V,[s(w,{type:"submit",color:"primary",class:"col",size:"20px",label:"Login"})])]),_:1})]),_:1},8,["onSubmit"])]),_:1})])]),_:1})}var E=f(q,[["render",v]]);export{E as default};
