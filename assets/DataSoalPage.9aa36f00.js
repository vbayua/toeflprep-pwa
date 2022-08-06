import{_ as b,r as c,aA as m,o as q,c as v,w as o,e as h,b as a,Q as d,i as u,t as r,ag as x,ak as f,aF as S,g as $}from"./index.84a03356.js";import{Q as g,a as T}from"./QCard.e4543373.js";import{Q as A}from"./QCardActions.2fccd58c.js";import{Q as C}from"./QInput.19253bad.js";import{Q as D,a as p}from"./QTr.7ab39b7b.js";import{Q as O}from"./QTable.ad33ed59.js";import{Q as V}from"./QPage.45ee8f60.js";import"./use-dark.28ca17e4.js";import"./format.2a3572e1.js";import"./focus-manager.d6507951.js";import"./use-form.39c6ddc7.js";import"./QSeparator.ba6a8f71.js";import"./QList.bd040621.js";import"./QMarkupTable.d57badb1.js";import"./QSelect.7375c7f4.js";import"./QItem.f413186c.js";import"./QItemLabel.83c7f352.js";import"./QMenu.56008c92.js";import"./use-prevent-scroll.a70b7d0f.js";import"./QDialog.3ff4f6d7.js";import"./option-sizes.005a78de.js";const B=[{name:"question",align:"left",label:"Question",field:"question",sortable:!0},{name:"questionType",align:"right",label:"Type",field:"questionType",sortable:!0},{name:"correctAnswer",align:"right",label:"Correct Answer",field:"correctAnswer",sortable:!0},{name:"showAnswerOptions",align:"right",label:"Answer Options",field:"answerOptions"},{name:"actions",align:"right",label:"Actions"}],E={name:"DataSoalPage",setup(){const e=c(!1);return{showAnswers:c(!1),filter:c(""),columns:B,visible:e}},data(){return{rows:c([]),exam:c(""),questions:c([])}},computed:{questionData(){return this.exam.questions}},mounted(){this.$q.loading.show({message:"Loading Data Soal"});const e=this.$route.params.id;this.$store.dispatch("admin/getExamWithDataSoal",e).then(t=>{this.exam=t.data.exam,this.questions=t.data.exam.questions,this.$q.loading.hide()}).catch(t=>{this.$q.notify({message:`Error ${t.message}`}),this.$q.loading.hide()}).finally(()=>{this.visible=!1})},methods:{showOptions(){this.showAnswers=!0},async onDelete(e){try{await m.deleteQuestion(e),location.reload()}catch(t){console.log(t)}},async setInactive(e){try{const t="inactive";await m.updateExamStatus(e,t),location.reload()}catch(t){this.$q.notify({message:t.message,color:"negative"})}},async setActive(e){try{this.$q.loading.show({message:"Processing"});const t=await this.$store.dispatch("exam/getListeningQuestions",e),w=await this.$store.dispatch("exam/getStructureQuestions",e),n=await this.$store.dispatch("exam/getReadingQuestions",e),i=t.data.exam.questions.length,l=w.data.exam.questions.length,s=n.data.exam.questions.length,y=await this.checkListening(i),_=await this.checkStructure(l),Q=await this.checkReading(s);if(y&&_&&Q){const k="active";await m.updateExamStatus(e,k),this.$q.notify({message:"Test Published",color:"primary"}),location.reload()}}catch(t){this.$q.loading.hide(),this.$q.notify({message:`Error : ${t.message}`,color:"negative"})}finally{await this.$q.loading.hide()}},async checkListening(e){if(e<=0||e>30||e<30)return this.$q.notify({message:"Listening Questions must not be empty or less than 30"}),!1;if(e===30)return!0},async checkStructure(e){if(e<=0||e>25||e<25)return this.$q.notify({message:"Structure and Written Questions must not be empty or less than 30"}),!1;if(e===25)return!0},async checkReading(e){if(e<=0||e>40||e<40)return this.$q.notify({message:"Reading Questions must not be empty or less than 30"}),!1;if(e===40)return!0}}},L={class:"full-width"},P={key:0},R={class:"q-mt-md text-right"},N={class:"q-mt-md full-width"};function I(e,t,w,n,i,l){return q(),v(V,{padding:"",class:"column"},{default:o(()=>[h("div",L,[a(T,null,{default:o(()=>[a(g,null,{default:o(()=>[a(d,{flat:"",color:"primary",label:"Back",icon:"arrow_back",to:"/admin/exam-data"})]),_:1}),a(g,null,{default:o(()=>[u(r(i.exam.title),1)]),_:1}),a(g,null,{default:o(()=>[u(r(i.exam.status),1)]),_:1}),i.questions?(q(),x("div",P,[a(A,{align:"right"},{default:o(()=>[a(d,{flat:"",color:"secondary",label:"Set as Active",onClick:t[0]||(t[0]=f(s=>l.setActive(i.exam._id),["prevent"]))}),a(d,{flat:"",color:"secondary",label:"Set as Inactive",onClick:t[1]||(t[1]=f(s=>l.setInactive(i.exam._id),["prevent"]))})]),_:1})])):S("",!0)]),_:1})]),h("div",R,[a(d,{color:"primary",label:"Tambah Data Soal",to:{name:"questionform",params:{id:i.exam._id}}},null,8,["to"])]),h("div",N,[a(O,{title:"Questions",rows:l.questionData,columns:n.columns,filter:n.filter,"row-key":"title"},{"top-right":o(()=>[a(C,{modelValue:n.filter,"onUpdate:modelValue":t[2]||(t[2]=s=>n.filter=s),borderless:"",dense:"",debounce:"300",placeholder:"Search"},{append:o(()=>[a($,{name:"search"})]),_:1},8,["modelValue"])]),body:o(s=>[a(D,{props:s},{default:o(()=>[a(p,{key:"question",props:s},{default:o(()=>[u(r(s.row.question),1)]),_:2},1032,["props"]),a(p,{key:"questionType",props:s},{default:o(()=>[u(r(s.row.questionType),1)]),_:2},1032,["props"]),a(p,{key:"correctAnswer",props:s},{default:o(()=>[u(r(s.row.correctAnswer),1)]),_:2},1032,["props"]),a(p,{key:"showAnswerOptions",props:s},{default:o(()=>[u(r(s.row.answerOptions[0])+" | "+r(s.row.answerOptions[1])+" | "+r(s.row.answerOptions[2])+" | "+r(s.row.answerOptions[3]),1)]),_:2},1032,["props"]),a(p,{key:"actions",props:s},{default:o(()=>[a(d,{flat:"",round:"",color:"secondary",icon:"edit",dense:"",to:{name:"editquestionform",params:{id:i.exam._id,qid:s.row._id}}},null,8,["to"]),a(d,{flat:"",round:"",color:"negative",icon:"delete",dense:"",onClick:f(y=>l.onDelete(s.row._id),["prevent"])},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","columns","filter"])])]),_:1})}var le=b(E,[["render",I]]);export{le as default};
