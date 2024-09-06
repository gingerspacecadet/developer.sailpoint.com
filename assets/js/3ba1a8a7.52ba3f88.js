"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[92872],{181225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(785893),i=n(511151),c=n(841282),o=n(476828);const a={id:"sp-config",title:"SP-Config",description:"SP-Config",custom_edit_url:null},s=void 0,l={id:"api/beta/sp-config",title:"SP-Config",description:"SP-Config",source:"@site/docs/api/beta/sp-config.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/sp-config",permalink:"/docs/api/beta/sp-config",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"sp-config",title:"SP-Config",description:"SP-Config",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Update Source Correlation Configuration",permalink:"/docs/api/beta/put-correlation-config"},next:{title:"Initiates configuration objects export job",permalink:"/docs/api/beta/export-sp-config"}},d={},p=[];function u(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Import and export configuration for some objects between tenants."}),"\n","\n",(0,r.jsx)(c.Z,{items:(0,o.jA)().items})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},841282:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(667294),i=n(490512),c=n(476828),o=n(370393),a=n(585597),s=n(935096),l=n(633084),d=n(555199);const p={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var u=n(799603),m=n(921702);function f({href:e,children:t}){return r.createElement(o.Z,{href:e,className:(0,i.Z)("card padding--lg",p.cardContainer)},t)}function g({href:e,icon:t,title:n,description:c}){return r.createElement(f,{href:e},r.createElement(d.default,{as:"h2",className:(0,i.Z)("text--truncate",p.cardTitle),title:n},t," ",n),c&&r.createElement("p",{className:(0,i.Z)("text--truncate",p.cardDescription),title:c},c))}function b({item:e}){var t;const n=(0,c.LM)(e),i=function(){const{selectMessage:e}=(0,a.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?r.createElement(g,{href:n,icon:r.createElement(u.G,{icon:m.cC_,className:p.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:i(e.items.length)}):null}function h({item:e}){var t,n;const i=(0,s.Z)(e.href)?r.createElement(u.G,{icon:m.FL8,className:p.docCardIcon}):r.createElement(u.G,{icon:m.wlW,className:p.docCardIcon}),o=(0,c.xz)(null!=(t=e.docId)?t:void 0);return r.createElement(g,{href:e.href,icon:i,title:e.label,description:(null!=(n=e.description)?n:"<Heading"!=(null==o?void 0:o.description)&&"<span"!=(null==o?void 0:o.description))?null==o?void 0:o.description:e.label})}function C({item:e}){switch(e.type){case"link":return r.createElement(h,{item:e});case"category":return r.createElement(b,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,j=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,w=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&j(e,n,t[n]);if(E)for(var n of E(t))_.call(t,n)&&j(e,n,t[n]);return e};function x({className:e}){const t=(0,c.jA)();return r.createElement(N,{items:t.items,className:e})}function N(e){const{items:t,className:n}=e;if(!t)return r.createElement(x,w({},e));const o=(0,c.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(C,{item:e})))))}}}]);