"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[36472],{4917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var n=a(785893),c=a(511151);const r={id:"source-data-read-customizer",title:"Source Data Read",pagination_label:"Source Data Read",sidebar_label:"Source Data Read",keywords:["connectivity","connectors","Source Data Read"],description:"Intercept the source data read command.",slug:"/connectivity/saas-connectivity/customizers/commands/source-data-read",tags:["Connectivity","Connector Command"]},o=void 0,d={id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/source-data-read-customizer",title:"Source Data Read",description:"Intercept the source data read command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/source-data-read.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/source-data-read",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/source-data-read",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/source-data-read.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,frontMatter:{id:"source-data-read-customizer",title:"Source Data Read",pagination_label:"Source Data Read",sidebar_label:"Source Data Read",keywords:["connectivity","connectors","Source Data Read"],description:"Intercept the source data read command.",slug:"/connectivity/saas-connectivity/customizers/commands/source-data-read",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Source Data Discover",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/source-data-discover"},next:{title:"Test Connection",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/test-connection"}},s={},i=[{value:"Overview",id:"overview",level:2},{value:"Example StdSourceDataReadInput",id:"example-stdsourcedatareadinput",level:3},{value:"Example StdSourceDataReadOutput",id:"example-stdsourcedatareadoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before source-data-read command",id:"before-source-data-read-command",level:3},{value:"After source-data-read command",id:"after-source-data-read-command",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["Use these commands to intercept the ",(0,n.jsx)(t.a,{href:"../../commands/source-data-read",children:"source-data-read"})," command."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"StdSourceDataReadInput"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"StdSourceDataReadOutput"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"example-stdsourcedatareadinput",children:"Example StdSourceDataReadInput"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'{\n    "sourceDataKey": "name",\n    "queryInput": {\n        "query": "fetchAll",\n        "limit": 10\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"example-stdsourcedatareadoutput",children:"Example StdSourceDataReadOutput"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"[\n  {\n    key: 'id',\n    label: 'Id',\n    subLabel: 'Airtable Base Id',\n  },\n  {\n    key: 'name',\n    label: 'Name',\n    subLabel: 'Airtable Source Table Name',\n  },\n];\n"})}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)(t.h3,{id:"before-source-data-read-command",children:"Before source-data-read command"}),"\n",(0,n.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"    .beforeStdSourceDataRead(async (context: Context, input: StdSourceDataReadInput) => {\n        logger.info(`Running before source data read. Query: ${input.queryInput?.query}`)\n        return input\n    })\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"input"})," object can be mutated and returned, but the same data type must still be returned."]}),"\n",(0,n.jsx)(t.h3,{id:"after-source-data-read-command",children:"After source-data-read command"}),"\n",(0,n.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"    .afterStdSourceDataRead(async (context: Context, output: StdSourceDataReadOutput) => {\n        logger.info(`Running after source data read first query record key: ${output[0].key}`)\n        return output\n    })\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"output"})," object can be mutated and returned, but the same data type must still be returned."]})]})}function l(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);