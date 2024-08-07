import{_ as u}from"./Nr-DPtHyyo5.js";import{_ as m}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-WIFp_L1e.js";import{o as d,c as _,k as a,l,m as h,q as f,s as g,B as o,p as v,a as k,e as s,aa as n}from"./modules/vue-ChXK9OLe.js";import{I as w}from"./slidev/center-Birxyis9.js";import{u as x,f as $}from"./slidev/context-D2wJxYYO.js";import{_ as b}from"./index-BdNT01OU.js";import"./modules/unplugin-icons-3XJ2OEr2.js";import"./modules/shiki-DYeWAeyn.js";const r=e=>(v("data-v-b98c10f2"),e=e(),k(),e),F=r(()=>s("h1",null,"Reading the error message",-1)),C=r(()=>s("pre",{class:"shiki shiki-themes dark-plus light-plus slidev-code",style:{"--shiki-dark":"#D4D4D4","--shiki-light":"#000000","--shiki-dark-bg":"#1E1E1E","--shiki-light-bg":"#FFFFFF"}},[s("code",{class:"language-txt"},[s("span",{class:"line"},[s("span",null,"error[E0382]: borrow of moved value: `s1`")]),n(`
`),s("span",{class:"line"},[s("span",null," --> src/main.rs:5:28")]),n(`
`),s("span",{class:"line"},[s("span",null,"  |")]),n(`
`),s("span",{class:"line"},[s("span",null,'2 |     let s1 = String::from("hello");')]),n(`
`),s("span",{class:"line"},[s("span",null,"  |         -- move occurs because `s1` has type String, which doesn't implement the Copy trait")]),n(`
`),s("span",{class:"line"},[s("span",null,"3 |     let s2 = s1;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  |              -- value moved here")]),n(`
`),s("span",{class:"line"},[s("span",null,"4 |")]),n(`
`),s("span",{class:"line"},[s("span",null,'5 |     println!("{}, world!", s1);')]),n(`
`),s("span",{class:"line"},[s("span",null,"  |                            ^^ value borrowed here after move")]),n(`
`),s("span",{class:"line"},[s("span",null,"  |")]),n(`
`),s("span",{class:"line"},[s("span",null,"  = note: this error originates in the macro `$crate::format_args_nl` which comes from ...")]),n(`
`),s("span",{class:"line"},[s("span",null,"help: consider cloning the value if the performance cost is acceptable")]),n(`
`),s("span",{class:"line"},[s("span",null,"  |")]),n(`
`),s("span",{class:"line"},[s("span",null,"3 |     let s2 = s1.clone();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  |                ++++++++")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"For more information about this error, try `rustc --explain E0382`.")]),n(`
`),s("span",{class:"line"},[s("span",null,"error: could not compile `ownership` due to previous error")])])],-1)),I={__name:"ownership.md__slidev_56",setup(e){const{$slidev:S,$nav:y,$clicksContext:t,$clicks:B,$page:E,$renderContext:N,$frontmatter:p}=x();return t.setup(),(P,D)=>{const i=m,c=u;return d(),_(w,f(g(o($)(o(p),55))),{default:a(()=>[F,l(i,h({},{ranges:["all","1,5,13"]}),{default:a(()=>[C]),_:1},16),l(c)]),_:1},16)}}},A=b(I,[["__scopeId","data-v-b98c10f2"]]);export{A as default};
