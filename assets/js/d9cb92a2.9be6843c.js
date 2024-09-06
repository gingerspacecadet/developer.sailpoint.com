"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[44008],{614121:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=i(785893),n=i(511151);const a={id:"access-request-postapproval",title:"Access Request Decision",pagination_label:"Access Request Decision",sidebar_label:"Access Request Decision",sidebar_class_name:"accessRequestDecision",keywords:["event","trigger","access","request","postapproval","decision","post","approval","available"],description:"Fires after an access request is approved.",slug:"/extensibility/event-triggers/triggers/access-request-decision",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},r=void 0,c={id:"extensibility/event-triggers/available/access-request-postapproval",title:"Access Request Decision",description:"Fires after an access request is approved.",source:"@site/docs/extensibility/event-triggers/available/access-request-decision.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/access-request-decision",permalink:"/docs/extensibility/event-triggers/triggers/access-request-decision",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/access-request-decision.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{inline:!0,label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{inline:!0,label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,frontMatter:{id:"access-request-postapproval",title:"Access Request Decision",pagination_label:"Access Request Decision",sidebar_label:"Access Request Decision",sidebar_class_name:"accessRequestDecision",keywords:["event","trigger","access","request","postapproval","decision","post","approval","available"],description:"Fires after an access request is approved.",slug:"/extensibility/event-triggers/triggers/access-request-decision",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Available Event Triggers",permalink:"/docs/extensibility/event-triggers/available"},next:{title:"Access Request Dynamic Approval",permalink:"/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval"}},o={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"event-context",children:"Event Context"}),"\n",(0,t.jsx)(s.p,{children:"The SailPoint Identity Security Cloud platform now includes event triggers within the access request approval workflow. The 'Access Request Decision' event trigger provides more proactive governance and ensures users can quickly obtain needed access."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Flow",src:i(714361).Z+"",width:"1170",height:"183"})}),"\n",(0,t.jsx)(s.p,{children:"When an access request is approved, some uses cases for this trigger include the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Notify the requester that the access request has been approved or denied."}),"\n",(0,t.jsx)(s.li,{children:"Notify the administrator or system to take the appropriate provisioning actions for the requested access."}),"\n",(0,t.jsx)(s.li,{children:"Notify a third party system to trigger another action (e.g. customer feedback survey, initiate another business process), or it can be used for auditing once an access request decision has been made."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The 'Access Request Decision' event trigger is a flexible way to extend the access request workflow after access is approved for the requester."}),"\n",(0,t.jsx)(s.p,{children:"This is an example input from this trigger:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "accessRequestId": "2c91808b6ef1d43e016efba0ce470904",\n  "requestedFor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "requestedItemsStatus": [\n    {\n      "id": "2c91808b6ef1d43e016efba0ce470904",\n      "name": "Engineering Access",\n      "description": "Access to engineering database",\n      "type": "ACCESS_PROFILE",\n      "operation": "Add",\n      "comment": "William needs this access to do his job.",\n      "clientMetadata": {\n        "applicationName": "My application"\n      },\n      "approvalInfo": [\n        {\n          "approvalComment": "This access looks good.  Approved.",\n          "approvalDecision": "APPROVED",\n          "approverName": "Stephen.Austin",\n          "approver": {\n            "type": "IDENTITY",\n            "id": "2c91808568c529c60168cca6f90c1313",\n            "name": "William Wilson"\n          }\n        }\n      ]\n    }\n  ],\n  "requestedBy": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  }\n}\n'})}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"clientMetadata"})," is determined by the user that invoked ",(0,t.jsx)(s.code,{children:"create-access-request"})," and can contain any value at runtime that was specified in the access request."]})}),"\n",(0,t.jsx)(s.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Trigger Type"}),": ",(0,t.jsx)(s.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},714361:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/access-request-postapproval-path-03f63e35625b518eb7d82fe91480af3d.png"}}]);