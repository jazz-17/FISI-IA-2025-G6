import{d as m,h as a,J as y,K as S,S as g}from"./runtime-dom.esm-bundler.BkhbUjvi.js";const A=()=>{},b=m({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:t,value:n,hydrate:r}){if(!n)return()=>null;let c=r?"astro-slot":"astro-static-slot";return()=>a(c,{name:t,innerHTML:n})}});let p=new WeakMap;const x=t=>async(n,r,c,{client:f})=>{if(!t.hasAttribute("ssr"))return;const l=n.name?`${n.name} Host`:void 0,u={};for(const[s,o]of Object.entries(c))u[s]=()=>a(b,{value:o,name:s==="default"?void 0:s});const i=f!=="only",d=i?y:S;let e=p.get(t);if(e)e.props=r,e.slots=u,e.component.$forceUpdate();else{e={props:r,slots:u};const s=d({name:l,render(){let o=a(n,e.props,e.slots);return e.component=this,h(n.setup)&&(o=a(g,null,o)),o}});s.config.idPrefix=t.getAttribute("prefix"),await A(),s.mount(t,i),p.set(t,e),t.addEventListener("astro:unmount",()=>s.unmount(),{once:!0})}};function h(t){const n=t?.constructor;return n&&n.name==="AsyncFunction"}export{x as default};
