const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingControls-CJ9zMOfH.js","assets/slidev/DrawingControls.vue_vue_type_style_index_0_lang-NwHCG2TF.js","assets/modules/unplugin-icons-IUUvLsgz.js","assets/modules/vue-AeYRawj-.js","assets/modules/shiki-BkEwMZsH.js","assets/modules/shiki-BPvBenZD.css","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-DO17-7rB.js","assets/index-CnM9YB70.js","assets/index-GB1vwk7v.css","assets/DrawingPreview-DWlgk9Co.css","assets/slidev/useWakeLock-0elY8vee.js","assets/slidev/IconButton.vue_vue_type_script_setup_true_lang-CGJBd-Ke.js","assets/slidev/context--J21XbTC.js","assets/useWakeLock-nOgX4on5.css","assets/DrawingControls-C5T1oZL5.css"])))=>i.map(i=>d[i]);
import{d as v,ab as z,o,c as u,B as e,b as f,e as l,f as N,i as C,g as i,ai as R,z as E,k as y,aj as $,aa as B,R as h,l as p,F as M,x as D,v as W,h as A,t as H}from"../modules/vue-AeYRawj-.js";import{v as k,a as P,w as I,x as b,y as w,z as L,A as T,d as V,B as O,l as S,D as U,E as j}from"../index-CnM9YB70.js";import{b as F,G,c as K,u as X,r as Y,a as q,S as J,_ as Q,o as Z}from"./useWakeLock-0elY8vee.js";import{c as ee,a as te}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-DO17-7rB.js";import{n as oe}from"../modules/unplugin-icons-IUUvLsgz.js";import"../modules/shiki-BkEwMZsH.js";import"./IconButton.vue_vue_type_script_setup_true_lang-CGJBd-Ke.js";import"./context--J21XbTC.js";const se="/rust-workshop/5/assets/logo-BYkHSa_O.png",ae={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ne=v({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(m,{emit:r}){const a=m,n=z(a,"modelValue",r);function d(){n.value=!1}return(_,s)=>(o(),u(R,null,[e(n)?(o(),f("div",ae,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:s[0]||(s[0]=c=>d())}),l("div",{class:C(["m-auto rounded-md bg-main shadow",a.class]),"dark:border":"~ main"},[N(_.$slots,"default")],2)])):i("v-if",!0)],1024))}}),le={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ie=["innerHTML"],re=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:se,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),B("dev ")])])],-1),ue=v({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(m,{emit:r}){const n=z(m,"modelValue",r),d=E(()=>typeof k.info=="string");return(_,s)=>(o(),u(ne,{modelValue:e(n),"onUpdate:modelValue":s[0]||(s[0]=c=>$(n)?n.value=c:null),class:"px-6 py-4"},{default:y(()=>[l("div",le,[d.value?(o(),f("div",{key:0,class:"mb-4",innerHTML:e(k).info},null,8,ie)):i("v-if",!0),re])]),_:1},8,["modelValue"]))}}),de=v({__name:"Controls",setup(m){const{isEmbedded:r}=P(),a=!k.drawings.presenterOnly&&!r.value,t=h();a&&I(()=>import("./DrawingControls-CJ9zMOfH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])).then(_=>t.value=_.default);const n=h(),d=h();return(_,s)=>(o(),f(M,null,[e(a)&&t.value?(o(),u(e(t),{key:0})):i("v-if",!0),p(F),p(G),n.value?(o(),u(e(n),{key:1})):i("v-if",!0),d.value?(o(),u(e(d),{key:2,modelValue:e(b),"onUpdate:modelValue":s[0]||(s[0]=c=>$(b)?b.value=c:null)},null,8,["modelValue"])):i("v-if",!0),e(k).info?(o(),u(ue,{key:3,modelValue:e(w),"onUpdate:modelValue":s[1]||(s[1]=c=>$(w)?w.value=c:null)},null,8,["modelValue"])):i("v-if",!0),p(K)],64))}}),ce=v({__name:"PrintStyle",setup(m){function r(a,{slots:t}){if(t.default)return W("style",t.default())}return(a,t)=>(o(),u(r,null,{default:y(()=>[B(" @page { size: "+D(e(L))+"px "+D(e(T))+"px; margin: 0px; } ",1)]),_:1}))}}),pe={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},me=v({__name:"PresenterMouse",setup(m){return(r,a)=>{const t=oe;return e(V).cursor?(o(),f("div",pe,[p(t,{class:"absolute stroke-white dark:stroke-black",style:A({left:`${e(V).cursor.x}%`,top:`${e(V).cursor.y}%`,strokeWidth:16})},null,8,["style"])])):i("v-if",!0)}}}),_e=l("div",{id:"twoslash-container"},null,-1),we=v({__name:"play",setup(m){const{next:r,prev:a,isPrintMode:t}=P(),{isDrawing:n}=ee(),d=H();function _(g){var x;S.value||g.button===0&&((x=g.target)==null?void 0:x.id)==="slide-container"&&(g.pageX/window.innerWidth>.5?r():a())}X(d),Y(),q();const s=E(()=>O.value||S.value),c=h();return(g,x)=>(o(),f(M,null,[e(t)?(o(),u(ce,{key:0})):i("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:d,class:C(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[p(te,{style:{background:"var(--slidev-slide-container-background, black)"},width:e(t)?e(U).width.value:void 0,"is-main":"",onPointerdown:_,onContextmenu:e(Z)},{default:y(()=>[p(J,{"render-context":"slide"}),p(me)]),controls:y(()=>[e(t)?i("v-if",!0):(o(),f("div",{key:0,class:C(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[s.value?"!opacity-100 right-0":"opacity-0 p-2",e(n)?"pointer-events-none":""]])},[p(Q,{persist:s.value},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),c.value&&e(S)?(o(),u(e(c),{key:0,resize:!0})):i("v-if",!0)],2),e(t)?i("v-if",!0):(o(),u(de,{key:1})),_e],64))}});export{we as default};
