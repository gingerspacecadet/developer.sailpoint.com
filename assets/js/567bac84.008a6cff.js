"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[86726],{380092:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(785893),i=t(511151);const r={id:"index-of",title:"Index Of",pagination_label:"Index Of",sidebar_label:"Index Of",sidebar_class_name:"indexOf",keywords:["transforms","operations","index","of"],description:"Get the location of a specific substring within a value.",slug:"/extensibility/transforms/operations/index-of",tags:["Transforms","Transform Operations"]},o=void 0,a={id:"extensibility/transforms/operations/index-of",title:"Index Of",description:"Get the location of a specific substring within a value.",source:"@site/docs/extensibility/transforms/operations/index-of.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/index-of",permalink:"/docs/extensibility/transforms/operations/index-of",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/index-of.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,frontMatter:{id:"index-of",title:"Index Of",pagination_label:"Index Of",sidebar_label:"Index Of",sidebar_class_name:"indexOf",keywords:["transforms","operations","index","of"],description:"Get the location of a specific substring within a value.",slug:"/extensibility/transforms/operations/index-of",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Identity Attribute",permalink:"/docs/extensibility/transforms/operations/identity-attribute"},next:{title:"ISO3166",permalink:"/docs/extensibility/transforms/operations/iso-3166"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Use the index of transform to get the location of a specific substring within an incoming value. This transform is often useful in conjunction with the substring transform for getting parts of strings that can be dynamic in length or composition. If the substring you are searching for does not occur within the data, the transform returns -1."}),"\n",(0,s.jsx)(n.admonition,{title:"Other Considerations",type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the substring you are searching for occurs multiple times within the incoming data, the transform returns the location of the first occurrence. If you want the last occurrence of a substring, use the ",(0,s.jsx)(n.a,{href:"/docs/extensibility/transforms/operations/last-index-of",children:"Last Index Of"})," transform. If you want an occurrence that is neither first nor last, use the ",(0,s.jsx)(n.a,{href:"/docs/extensibility/transforms/operations/substring",children:"Substring"})," transform."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,s.jsxs)(n.p,{children:["The indexOf transform requires only the substring which you want to search for, along with the ",(0,s.jsx)(n.code,{children:"type"})," and ",(0,s.jsx)(n.code,{children:"name"})," attributes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "substring": "admin_"\n  },\n  "type": "indexOf",\n  "name": "Index Of Transform"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Required Attributes"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"type"})," - This must always be set to ",(0,s.jsx)(n.code,{children:"indexOf"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"substring"})," - This is the string whose beginning location within the incoming data you want to find."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optional Attributes"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,s.jsx)(n.code,{children:"true"})," or ",(0,s.jsx)(n.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"input"})," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:'The "admin_" substring occurs at the very beginning of the input string, so this transform returns 0.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Input: "admin_jsmith"\nOutput: "0"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "substring": "admin_"\n  },\n  "type": "indexOf",\n  "name": "Index Of Transform"\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)("p",{children:"\xa0"}),"\n",(0,s.jsx)(n.p,{children:'Though the letter "b" occurs multiple times throughout the input string, the first time it occurs is within the index location 1, so the transform returns that value.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'Input: "abcabcabc"\nOutput: "1"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "attributes": {\n    "substring": "b"\n  },\n  "type": "indexOf",\n  "name": "Index Of Transform"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);