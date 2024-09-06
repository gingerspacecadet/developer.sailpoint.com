"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[64824],{396147:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>r});var t=i(785893),o=i(511151);const c={id:"connector-spec-radio",title:"Radio",pagination_label:"Radio",sidebar_label:"Radio",keywords:["connectivity","connectors","connector-spec","radio"],description:"Details on using the Radio item",slug:"/connectivity/saas-connectivity/connector-spec/radio",tags:["Connectivity","Connector Spec"]},a=void 0,s={id:"connectivity/saas-connectivity/connector-spec/connector-spec-radio",title:"Radio",description:"Details on using the Radio item",source:"@site/docs/connectivity/saas-connectivity/connector-spec/radio.md",sourceDirName:"connectivity/saas-connectivity/connector-spec",slug:"/connectivity/saas-connectivity/connector-spec/radio",permalink:"/docs/connectivity/saas-connectivity/connector-spec/radio",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-spec/radio.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Spec",permalink:"/docs/tags/connector-spec"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,frontMatter:{id:"connector-spec-radio",title:"Radio",pagination_label:"Radio",sidebar_label:"Radio",keywords:["connectivity","connectors","connector-spec","radio"],description:"Details on using the Radio item",slug:"/connectivity/saas-connectivity/connector-spec/radio",tags:["Connectivity","Connector Spec"]},sidebar:"openApiSidebar",previous:{title:"List",permalink:"/docs/connectivity/saas-connectivity/connector-spec/list"},next:{title:"Select",permalink:"/docs/connectivity/saas-connectivity/connector-spec/select"}},l={},r=[{value:"How to use the radio type in the connector spec",id:"how-to-use-the-radio-type-in-the-connector-spec",level:2},{value:"Example radio item type",id:"example-radio-item-type",level:3},{value:"Example dependency on earlier select field",id:"example-dependency-on-earlier-select-field",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"how-to-use-the-radio-type-in-the-connector-spec",children:"How to use the radio type in the connector spec"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.code,{children:"radio"})," type to create radio buttons for users to interact with to select from a predefined set of values."]}),"\n",(0,t.jsx)(n.p,{children:"This is an example implementation:"}),"\n",(0,t.jsx)(n.h3,{id:"example-radio-item-type",children:"Example radio item type"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n    "key": "airtableURL",\n    "type": "radio",\n    "label": "Airtable URL",\n    "required": true,\n    "options": [\n        {\n            "label": "Standard",\n            "value": "standard"\n        },\n        {\n            "label": "Custom",\n            "value": "custom"\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"radio input type",src:i(353588).Z+"",width:"165",height:"131"})}),"\n",(0,t.jsx)(n.p,{children:"You can also create dependencies on other fields so they are hidden until the selection is made. This same type of dependency can be built into any field and linked by using the parentKey/parentValue fields."}),"\n",(0,t.jsx)(n.h3,{id:"example-dependency-on-earlier-select-field",children:"Example dependency on earlier select field"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'{\n    "key": "baseUrl",\n    "type": "text",\n    "label": "Base URL",\n    "parentKey": "airtableURL",\n    "parentValue": "custom",\n    "placeholder": "https://{your domain}",\n    "required": true\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},353588:(e,n,i)=>{i.d(n,{Z:()=>t});const t="data:image/png;base64,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"}}]);