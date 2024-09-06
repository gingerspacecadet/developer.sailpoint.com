"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[60192],{46948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var c=n(785893),i=n(511151);const a={id:"account-disable-customizer",title:"Account Disable",pagination_label:"Account Disable",sidebar_label:"Account Disable",keywords:["connectivity","connectors","Account Disable"],description:"Intercept the account disable command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-disable",tags:["Connectivity","Connector Command"]},o=void 0,s={id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-disable-customizer",title:"Account Disable",description:"Intercept the account disable command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-disable.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/account-disable",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-disable",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-disable.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,frontMatter:{id:"account-disable-customizer",title:"Account Disable",pagination_label:"Account Disable",sidebar_label:"Account Disable",keywords:["connectivity","connectors","Account Disable"],description:"Intercept the account disable command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-disable",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Delete",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-delete"},next:{title:"Account Enable",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-enable"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountDisableInput",id:"example-stdaccountdisableinput",level:3},{value:"Example StdAccountDisableOutput",id:"example-stdaccountdisableoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-disable command",id:"before-account-disable-command",level:3},{value:"After account-disable command",id:"after-account-disable-command",level:3}];function r(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,c.jsxs)(t.p,{children:["Use these commands to intercept the ",(0,c.jsx)(t.a,{href:"../../commands/account-disable",children:"account-disable"})," command."]}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,c.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,c.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountDisableInput"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,c.jsx)(t.td,{style:{textAlign:"center"},children:"StdAccountDisableOutput"})]})]})]}),"\n",(0,c.jsx)(t.h3,{id:"example-stdaccountdisableinput",children:"Example StdAccountDisableInput"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n'})}),"\n",(0,c.jsx)(t.h3,{id:"example-stdaccountdisableoutput",children:"Example StdAccountDisableOutput"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,c.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,c.jsx)(t.h3,{id:"before-account-disable-command",children:"Before account-disable command"}),"\n",(0,c.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:"    .beforeStdAccountDisable(async (context: Context, input: StdAccountDisableInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n"})}),"\n",(0,c.jsxs)(t.p,{children:["The ",(0,c.jsx)(t.code,{children:"input"})," object can be mutated and returned, but the same data type must still be returned."]}),"\n",(0,c.jsx)(t.h3,{id:"after-account-disable-command",children:"After account-disable command"}),"\n",(0,c.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-javascript",children:"    .afterStdAccountDisable(async (context: Context, output: StdAccountDisableOutput) => {\n        logger.info(`Running after account disable for account ${output.identity}`)\n        return output\n    })\n"})}),"\n",(0,c.jsxs)(t.p,{children:["The ",(0,c.jsx)(t.code,{children:"output"})," object can be mutated and returned, but the same data type must still be returned."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}}}]);