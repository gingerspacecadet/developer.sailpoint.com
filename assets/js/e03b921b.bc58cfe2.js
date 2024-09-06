"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[11417],{12355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=n(785893),r=n(511151);const i={id:"split",title:"Split",pagination_label:"Split",sidebar_label:"Split",sidebar_class_name:"split",keywords:["transforms","operations","split"],description:"Return the Nth element of a split array.",slug:"/extensibility/transforms/operations/split",tags:["Transforms","Transform Operations"]},a=void 0,l={id:"extensibility/transforms/operations/split",title:"Split",description:"Return the Nth element of a split array.",source:"@site/docs/extensibility/transforms/operations/split.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/split",permalink:"/docs/extensibility/transforms/operations/split",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/split.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,frontMatter:{id:"split",title:"Split",pagination_label:"Split",sidebar_label:"Split",sidebar_class_name:"split",keywords:["transforms","operations","split"],description:"Return the Nth element of a split array.",slug:"/extensibility/transforms/operations/split",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Rule",permalink:"/docs/extensibility/transforms/operations/rule"},next:{title:"Static",permalink:"/docs/extensibility/transforms/operations/static"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Use the split transform to use a specific character or regex string as a delimiter and convert a single incoming string into an array of values. This transform then returns the Nth element of that array. This transform is often useful when you want to split combined names into their constituent parts or when you want to simplify an ordered list of values into a single attribute."}),"\n",(0,s.jsx)(t.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,s.jsxs)(t.p,{children:["In addition to the standard ",(0,s.jsx)(t.code,{children:"type"})," and ",(0,s.jsx)(t.code,{children:"name"})," attributes, the split transform requires the ",(0,s.jsx)(t.code,{children:"delimiter"})," and ",(0,s.jsx)(t.code,{children:"index"})," attributes. These parameters, respectively, tell the transform what to use as the pattern to split the string with and which entry in the resulting array of values you want it to return."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "delimiter": ",",\n    "index": 5\n  },\n  "type": "split",\n  "name": "Split Transform"\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Required Attributes"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"type"})," - This must always be set to ",(0,s.jsx)(t.code,{children:"split"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"delimiter"})," - This can be either a single character or a regex expression. Transforms use it identify the break point between two substrings in the incoming data."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"index"})," - This is the integer value for the desired array element after the incoming data has been split into a list. The array is a 0-based object, so the first array element would be index 0, the second element would be index 1, etc."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional Attributes"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,s.jsx)(t.code,{children:"true"})," or ",(0,s.jsx)(t.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"throws"})," - This boolean (true/false) value indicates whether an exception is thrown and returned as an output when an index is out of bounds with the resulting array (i.e., the provided ",(0,s.jsx)(t.code,{children:"index"})," value is larger than the size of the array).","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'true - The transform returns "IndexOutOfBoundsException".'}),"\n",(0,s.jsx)(t.li,{children:"false - The transform returns null."}),"\n",(0,s.jsx)(t.li,{children:'If no throws value is provided, the transform defaults to true and returns an "IndexOutOfBoundsException".'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["This transform takes the incoming attribute configured in the Identity Profile attribute UI, splits it based on the colon ",(0,s.jsx)(t.code,{children:":"})," character, and returns the second array element (array index 1)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'Input: "abc:123"\nOutput: "123"\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "delimiter": ":",\n    "index": 1\n  },\n  "type": "split",\n  "name": "Split Transform"\n}\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)("p",{children:"\xa0"}),"\n",(0,s.jsx)(t.p,{children:'This transform takes the explicit string provided, splits it based on the space (" ") character, and returns the fourth word (array index 3).'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'Input: "The quick brown fox jumped over 10 lazy dogs"\nOutput: "fox"\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "input": "The quick brown fox jumped over 10 lazy dogs",\n    "delimiter": " ",\n    "index": 3,\n    "throws": true\n  },\n  "type": "split",\n  "name": "Split Transform"\n}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);