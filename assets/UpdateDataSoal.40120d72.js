import{Q as l,a as q}from"./QCard.e4543373.js";import{Q as c}from"./QSelect.7375c7f4.js";import{Q as r}from"./QInput.19253bad.js";import{_ as V,r as n,aA as h,aG as b,o as Q,c as A,w as s,b as o,ak as y,h as p,aj as d,Q as g,e as u}from"./index.84a03356.js";import{Q as O}from"./QSpace.44c390bd.js";import{Q as C}from"./QFile.7911c0a8.js";import{Q as T}from"./QForm.354579a1.js";import{Q as U}from"./QPage.45ee8f60.js";import"./use-dark.28ca17e4.js";import"./QItem.f413186c.js";import"./QItemLabel.83c7f352.js";import"./QMenu.56008c92.js";import"./use-prevent-scroll.a70b7d0f.js";import"./focus-manager.d6507951.js";import"./QDialog.3ff4f6d7.js";import"./use-form.39c6ddc7.js";import"./format.2a3572e1.js";const S={name:"AddQuestionPage",setup(){return{question:n(""),questionType:n(null),options:["Listening Comprehension","Structure and Written","Reading Comprehension"],questionPart:n(""),paragraphs:n(""),correctAnswer:n(""),file_path:n(null),partOptions:["A","B","C"],audiofile:n(null),option1:n("Option 1"),option2:n("Option 2"),option3:n("Option 3"),option4:n("Option 4"),correctAnswerr:n(null),answerIsAdded:n(!1)}},data(){return{answer:n(""),answerOptions:n([])}},mounted(){h.getQuestion(this.$route.params.qid).then(a=>{this.question=a.data.question.question,this.questionType=a.data.question.questionType,this.paragraphs=a.data.question.paragraphs,this.correctAnswer=a.data.question.correctAnswer,this.option1=a.data.question.answerOptions[0],this.option2=a.data.question.answerOptions[1],this.option3=a.data.question.answerOptions[2],this.option4=a.data.question.answerOptions[3]},a=>{console.log(a)})},methods:{async onClick(){this.answerOptions.length>0?(this.answerOptions=[],this.answerOptions.push(this.option1,this.option2,this.option3,this.option4)):this.answerOptions.push(this.option1,this.option2,this.option3,this.option4),this.answerIsAdded=!0},checkFileType(a){return a.filter(t=>t.type==="audio/mpeg")},onFileRejected(a){this.$q.notify({type:"negative",message:`${a.length} file(s) did not pass validation constraints`})},async onSubmit(){try{this.$q.loading.show({message:"Adding new Question"});const a=[...this.answerOptions];if(this.audiofile){const t=this.audiofile,f=new FormData;f.append("audiofile",this.audiofile),await b.post("/azureBlob/upload",f,{headers:{"Content-Type":"multiform/form-data"}});const w=await(await h.getFileInfo(t.name)).data.blobUrl,m={question:this.question,type:this.questionType,part:this.questionPart,paragraphs:this.paragraphs,audioUrl:w,answers:a,correctAnswer:this.correctAnswerr,testExam:this.$route.params.id};await h.updateQuestion(this.$route.params.qid,m)}else{const t={question:this.question,type:this.questionType,part:this.questionPart,paragraphs:this.paragraphs,audioUrl:"",answers:a,correctAnswer:this.correctAnswerr,testExam:this.$route.params.id};await h.updateQuestion(this.$route.params.qid,t)}}catch(a){console.log(a),this.$q.loading.hide(),this.$q.notify({message:a,color:"negative"})}finally{this.$q.loading.hide(),this.$router.back(),this.$q.notify({message:"Update Successful"})}}}},_=u("div",{class:"text-h6 text-center"}," Edit Data Soal ",-1),x=u("small",null,"A",-1),v=u("small",null,"B",-1),k=u("small",null,"C",-1),P=u("small",null,"D",-1),B={class:"row"};function E(a,t,f,e,w,m){return Q(),A(U,{padding:"",class:"flex flex-center"},{default:s(()=>[o(q,{class:"full-width"},{default:s(()=>[o(T,{class:"q-gutter-md",onSubmit:y(m.onSubmit,["prevent"]),onReset:a.onReset},{default:s(()=>[o(l,null,{default:s(()=>[_]),_:1}),o(l,null,{default:s(()=>[o(c,{modelValue:e.questionType,"onUpdate:modelValue":t[0]||(t[0]=i=>e.questionType=i),label:"Select Question Type","transition-show":"jump-up","transition-hide":"jump-up",filled:"",options:e.options,readonly:""},null,8,["modelValue","options"])]),_:1}),p(o(l,null,{default:s(()=>[o(r,{modelValue:e.question,"onUpdate:modelValue":t[1]||(t[1]=i=>e.question=i),type:"text",label:"Question"},null,8,["modelValue"])]),_:1},512),[[d,e.questionType]]),p(o(l,null,{default:s(()=>[o(r,{modelValue:e.paragraphs,"onUpdate:modelValue":t[2]||(t[2]=i=>e.paragraphs=i),name:"paragraphs",type:"textarea",label:"Reading Paragraph"},null,8,["modelValue"])]),_:1},512),[[d,e.questionType==="Reading Comprehension"]]),p(o(l,null,{default:s(()=>[o(r,{modelValue:e.option1,"onUpdate:modelValue":t[3]||(t[3]=i=>e.option1=i),type:"text",label:"Enter answer",dense:""},{prepend:s(()=>[x]),_:1},8,["modelValue"]),o(r,{modelValue:e.option2,"onUpdate:modelValue":t[4]||(t[4]=i=>e.option2=i),type:"text",label:"Enter answer",dense:""},{prepend:s(()=>[v]),_:1},8,["modelValue"]),o(r,{modelValue:e.option3,"onUpdate:modelValue":t[5]||(t[5]=i=>e.option3=i),type:"text",label:"Enter answer",dense:""},{prepend:s(()=>[k]),_:1},8,["modelValue"]),o(r,{modelValue:e.option4,"onUpdate:modelValue":t[6]||(t[6]=i=>e.option4=i),type:"text",label:"Enter answer",dense:""},{prepend:s(()=>[P]),_:1},8,["modelValue"]),o(g,{flat:"",color:"primary",label:"Add Answer Options",onClick:y(m.onClick,["prevent"])},null,8,["onClick"]),o(O),o(c,{modelValue:e.correctAnswerr,"onUpdate:modelValue":t[7]||(t[7]=i=>e.correctAnswerr=i),options:w.answerOptions,hint:"To add Correct Answer please click the button above after adding your options",label:"Correct Answer",filled:""},null,8,["modelValue","options"])]),_:1},512),[[d,e.questionType]]),p(o(l,null,{default:s(()=>[o(c,{modelValue:e.questionPart,"onUpdate:modelValue":t[8]||(t[8]=i=>e.questionPart=i),"transition-show":"jump-up","transition-hide":"jump-up",label:"Question Part",filled:"",options:e.partOptions},null,8,["modelValue","options"])]),_:1},512),[[d,e.questionType==="Listening Comprehension"]]),p(o(l,null,{default:s(()=>[o(C,{modelValue:e.audiofile,"onUpdate:modelValue":t[9]||(t[9]=i=>e.audiofile=i),name:"audiofile",clearable:"",filled:"",accept:".mp3, audio/mpeg",hint:"Only support .mp3 audio file",label:"Audio File"},null,8,["modelValue"])]),_:1},512),[[d,e.questionType==="Listening Comprehension"]]),p(o(l,null,{default:s(()=>[u("div",B,[o(g,{class:"full-width",flat:"",color:"secondary",label:"Cancel",to:{name:"datasoal",params:{id:a.$route.params.id}}},null,8,["to"]),o(g,{class:"full-width",type:"submit",color:"primary",label:"Save"})])]),_:1},512),[[d,e.questionType]])]),_:1},8,["onSubmit","onReset"])]),_:1})]),_:1})}var $=V(S,[["render",E]]);export{$ as default};
