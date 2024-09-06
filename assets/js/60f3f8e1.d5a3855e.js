"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[32989],{875200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(785893),s=n(511151);const i={id:"right-pad",title:"Right Pad",pagination_label:"Right Pad",sidebar_label:"Right Pad",sidebar_class_name:"rightPad",keywords:["transforms","operations","right pad"],description:"Add padding to the right of an incoming string.",slug:"/extensibility/transforms/operations/right-pad",tags:["Transforms","Transform Operations"]},a=void 0,o={id:"extensibility/transforms/operations/right-pad",title:"Right Pad",description:"Add padding to the right of an incoming string.",source:"@site/docs/extensibility/transforms/operations/right-pad.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/right-pad",permalink:"/docs/extensibility/transforms/operations/right-pad",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/right-pad.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,frontMatter:{id:"right-pad",title:"Right Pad",pagination_label:"Right Pad",sidebar_label:"Right Pad",sidebar_class_name:"rightPad",keywords:["transforms","operations","right pad"],description:"Add padding to the right of an incoming string.",slug:"/extensibility/transforms/operations/right-pad",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"RFC5646",permalink:"/docs/extensibility/transforms/operations/rfc-5646"},next:{title:"Rule",permalink:"/docs/extensibility/transforms/operations/rule"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(t.p,{children:"Use the right pad transform to pad an incoming string with a user-supplied character out to a specific number of characters. This transform is often useful for data normalization situations in which data such as employee IDs are not uniform in length but need to be for downstream systems."}),"\n",(0,r.jsx)(t.admonition,{title:"Other Considerations",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"If the input to the right pad transform is null, the transform returns a null value."}),"\n"]})}),"\n",(0,r.jsx)(t.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,r.jsxs)(t.p,{children:["In addition to the standard ",(0,r.jsx)(t.code,{children:"type"})," and ",(0,r.jsx)(t.code,{children:"name"})," attributes, the right pad transform requires the ",(0,r.jsx)(t.code,{children:"length"})," attribute, which tells the transform how many characters to pad the incoming string to."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "padding": "0",\n    "length": "5"\n  },\n  "type": "rightPad",\n  "name": "Right Pad Transform"\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Required Attributes"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"type"})," - This must always be set to ",(0,r.jsx)(t.code,{children:"rightPad"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"length"})," - This is an integer value for the final output string's desired length."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Optional Attributes"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,r.jsx)(t.code,{children:"true"})," or ",(0,r.jsx)(t.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"padding"})," - This string value represents the character the transform will pad the incoming data to to get to the desired length.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'If no padding value is provided, the transform defaults to a single space (" ") character for padding.'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:'This transform takes the incoming attribute configured in the Identity Profile attribute UI and ensures it is padded out to 8 characters in length by adding "0"s to the right.'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'Input: "1234"\nOutput: "12340000"\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "padding": "0",\n    "length": "8"\n  },\n  "type": "rightPad",\n  "name": "Right Pad Transform"\n}\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)("p",{children:"\xa0"}),"\n",(0,r.jsx)(t.p,{children:'This example takes the user\'s employeeID attribute from the HR source and ensures it is padded out to 7 characters in length by adding "x"s to the right.'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'Input: "1234"\nOutput: "1234xxx"\n'})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "padding": "x",\n    "length": "7",\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "employeeID"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "rightPad",\n  "name": "Right Pad Transform"\n}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);