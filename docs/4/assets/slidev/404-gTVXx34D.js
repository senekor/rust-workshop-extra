import{d as m,N as f,z as h,r as x,o as n,b as v,e as t,aa as a,x as r,B as g,c as d,k as p,g as u,p as k,a as N}from"../modules/vue-D46aPLZD.js";import{a as S,_ as B}from"../index-CqXZRW8C.js";import"../modules/shiki-CTgMSF1B.js";const w=o=>(k("data-v-53098de1"),o=o(),N(),o),y={class:"grid justify-center text-center pt-15% gap-5"},C=w(()=>t("h1",{class:"text-9xl font-light"}," 404 ",-1)),I={class:"text-2xl"},R={class:"op-60"},V={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},G=m({__name:"404",setup(o){const{currentRoute:l}=f(),{total:i}=S(),s=h(()=>{const c=l.value.path.match(/\d+/);if(c){const e=+c[0];if(e>0&&e<=i.value)return e}return null});return(_,c)=>{const e=x("RouterLink");return n(),v("div",y,[t("div",null,[C,t("p",I,[a(" Page "),t("code",R,r(g(l).path),1),a(" not found ")])]),t("div",V,[s.value!==1?(n(),d(e,{key:0,to:"/",class:"page-link"},{default:p(()=>[a(" Go Home ")]),_:1})):u("v-if",!0),s.value?(n(),d(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:p(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):u("v-if",!0)])])}}}),z=B(G,[["__scopeId","data-v-53098de1"]]);export{z as default};
