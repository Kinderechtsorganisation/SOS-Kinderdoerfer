import{_ as z,n as C,K as _,L as f,k as s,d as i,h as n,y as p,w as r,g as l,F as h,t as m,v as k,aj as $,D as w,a4 as B}from"./entry.0q7qStI1.js";import{_ as S}from"./client-only.CgloTKKH.js";import{u as N}from"./useHref.CWOQqZdD.js";import{u as D}from"./parameterStore.Dxg1pa_I.js";import{m as P}from"./mapBlok.DVokeng5.js";import"./routeUtils.CNLPeGG_.js";const V={props:{blok:{required:!0,type:Object,default(){return{text:"Button"}}},loading:Boolean,isChild:{type:Boolean,default(){return!0}}},emits:["click"],setup(e,t){const{href:a,hrefNoParams:o}=N(e.blok,t.attrs);return{href:a,hrefNoParams:o}},data(){return{isServer:!1}},computed:{...P(["text",{name:"type",optional:!0},{name:"target",optional:!0},{name:"icon",optional:!0},{name:"icon_after",optional:!0},{name:"size",optional:!0},{name:"weight",optional:!0},{name:"additional_classes",optional:!0}]),...C(D,["getParams"]),classes(){const e=[`cta-${this.type}-button`];return this.weight&&e.push(`btn-${this.weight}`),this.additional_classes&&e.push(this.additional_classes),this.isChild||e.push("container"),e}}};function j(e,t,a,o,v,g){const d=w,c=B,b=S,y=_("editable");return f((s(),i("div",{class:r(g.classes)},[f(n(c,{pill:"",variant:e.$attrs.variant||e.type||"primary",size:e.$attrs.size||e.size||"",href:o.hrefNoParams,target:e.target?"_blank":"_self",class:r({"has-icon":e.icon&&e.text,"icon-reverse":e.icon&&e.icon_after,"no-text":e.icon&&!e.text}),onClick:t[0]||(t[0]=u=>e.$emit("click",u))},{default:p(()=>[e.icon?(s(),i("span",{key:0,class:r(`im-${e.icon}`)},null,2)):l("",!0),a.loading?(s(),i(h,{key:1},[n(d,{small:""}),m(" ")],64)):l("",!0),m(k(e.text),1)]),_:1},8,["variant","size","href","target","class"]),[[$,v.isServer]]),n(b,null,{default:p(()=>[n(c,{pill:"",variant:e.$attrs.variant||e.type||"primary",size:e.$attrs.size||e.size||"",href:o.href,target:e.target?"_blank":"_self",disabled:e.$attrs.disabled,class:r({"has-icon":e.icon&&e.text,"icon-reverse":e.icon&&e.icon_after,"no-text":e.icon&&!e.text}),onClick:t[1]||(t[1]=u=>e.$emit("click",u))},{default:p(()=>[e.icon?(s(),i("span",{key:0,class:r(`im-${e.icon}`)},null,2)):l("",!0),a.loading?(s(),i(h,{key:1},[n(d,{small:""}),m(" ")],64)):l("",!0),m(k(e.text),1)]),_:1},8,["variant","size","href","target","disabled","class"])]),_:1})],2)),[[y,a.blok]])}const K=z(V,[["render",j],["__scopeId","data-v-22fe9a64"]]);export{K as default};
