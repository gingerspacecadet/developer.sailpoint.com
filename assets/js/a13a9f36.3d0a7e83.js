"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[34053],{82617:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var i=s(785893),r=s(511151);const n={id:"typescript-sdk-retries",title:"Retries with The TypeScript SDK",pagination_label:"Retries",sidebar_label:"Retries",sidebar_position:7,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","retry"],description:"Learn how to configure retries when using the TypeScript SDK.",slug:"/tools/sdk/typescript/retries",tags:["SDK"]},o=void 0,a={id:"tools/sdk/typescript/typescript-sdk-retries",title:"Retries with The TypeScript SDK",description:"Learn how to configure retries when using the TypeScript SDK.",source:"@site/docs/tools/sdk/typescript/retries.md",sourceDirName:"tools/sdk/typescript",slug:"/tools/sdk/typescript/retries",permalink:"/docs/tools/sdk/typescript/retries",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/typescript/retries.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,sidebarPosition:7,frontMatter:{id:"typescript-sdk-retries",title:"Retries with The TypeScript SDK",pagination_label:"Retries",sidebar_label:"Retries",sidebar_position:7,sidebar_class_name:"typescriptsdk",keywords:["tsc","typescript","sdk","retry"],description:"Learn how to configure retries when using the TypeScript SDK.",slug:"/tools/sdk/typescript/retries",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Search",permalink:"/docs/tools/sdk/typescript/search"},next:{title:"Error Handling",permalink:"/docs/tools/sdk/typescript/error-handling"}},p={},c=[];function l(e){const t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The SDK supports retry logic in the case of an unexpected error. You are able to configure the number of retries and the delay between retries. This logic is implemented in lines 7-12:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",metastring:"showLineNumbers",children:"import {\n  Configuration,\n  axiosRetry,\n  AccountsApi,\n  Paginator,\n} from 'sailpoint-api-client';\n\nconst getPaginatedAccounts = async () => {\n  let apiConfig = new Configuration();\n  apiConfig.retriesConfig = {\n    retries: 4,\n    retryDelay: axiosRetry.exponentialDelay,\n    onRetry(retryCount, error, requestConfig) {\n      console.log(`retrying due to request error, try number ${retryCount}`);\n    },\n  };\n  let api = new AccountsApi(apiConfig);\n\n  const val = await Paginator.paginate(api, api.listAccounts, {limit: 100}, 10);\n\n  console.log(val);\n};\n\ngetPaginatedAccounts();\n"})}),"\n",(0,i.jsx)(t.p,{children:"Run this command to compile and run the code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"tsc src/index.ts && node src/index.js\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);