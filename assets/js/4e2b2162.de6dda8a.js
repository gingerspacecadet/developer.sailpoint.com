"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[76250],{551472:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var t=r(785893),s=r(511151);const o={id:"preparing-subscriber-service",title:"Preparing a Subscriber Service",pagination_title:"Preparing a Subscriber Service",sidebar_label:"Preparing a Subscriber Service",sidebar_position:2,sidebar_class_name:"preparingSubscriberService",keywords:["event","triggers","subscriber"],description:"Before you can subscribe to an event trigger, you must prepare a service that can accept incoming HTTP requests from the event trigger service.",slug:"/extensibility/event-triggers/preparing-subscriber-service",tags:["Event Triggers"]},n=void 0,a={id:"extensibility/event-triggers/preparing-subscriber-service",title:"Preparing a Subscriber Service",description:"Before you can subscribe to an event trigger, you must prepare a service that can accept incoming HTTP requests from the event trigger service.",source:"@site/docs/extensibility/event-triggers/preparing-a-subscriber-service.md",sourceDirName:"extensibility/event-triggers",slug:"/extensibility/event-triggers/preparing-subscriber-service",permalink:"/docs/extensibility/event-triggers/preparing-subscriber-service",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/preparing-a-subscriber-service.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,sidebarPosition:2,frontMatter:{id:"preparing-subscriber-service",title:"Preparing a Subscriber Service",pagination_title:"Preparing a Subscriber Service",sidebar_label:"Preparing a Subscriber Service",sidebar_position:2,sidebar_class_name:"preparingSubscriberService",keywords:["event","triggers","subscriber"],description:"Before you can subscribe to an event trigger, you must prepare a service that can accept incoming HTTP requests from the event trigger service.",slug:"/extensibility/event-triggers/preparing-subscriber-service",tags:["Event Triggers"]},sidebar:"openApiSidebar",previous:{title:"Trigger Types",permalink:"/docs/extensibility/event-triggers/trigger-types"},next:{title:"Subscribing to a Trigger",permalink:"/docs/extensibility/event-triggers/subscribing-to-trigger"}},c={},p=[{value:"Webhook Testing Service",id:"webhook-testing-service",level:2},{value:"Native SaaS Workflows",id:"native-saas-workflows",level:2},{value:"No-code Provider",id:"no-code-provider",level:2},{value:"Custom Application",id:"custom-application",level:2}];function l(e){const i={a:"a",h2:"h2",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Before you can subscribe to an event trigger, you must prepare a service that can accept incoming HTTP requests from the event trigger service. More specifically, your client service must accept a POST request to an endpoint of its choosing, with the ability to parse the JSON data sent by the trigger. There are many ways to accomplish this, but this guide covers four of the most common types of client services you can build to handle event triggers."}),"\n",(0,t.jsx)(i.h2,{id:"webhook-testing-service",children:"Webhook Testing Service"}),"\n",(0,t.jsxs)(i.p,{children:["There are many webhook testing websites that generate a unique URL you can use to subscribe to an event trigger and explore the data sent by the trigger. One site is ",(0,t.jsx)(i.a,{href:"https://webhook.site",children:"https://webhook.site"}),". This site generates a unique URL whenever you open it, which you can copy and paste into the subscription configuration in Identity Security Cloud. Any events that the trigger generates will be sent to this website for you to analyze."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Webhook.site",src:r(148500).Z+"",width:"2559",height:"809"})}),"\n",(0,t.jsx)(i.p,{children:"The purpose of webhook testing services is to make it easy to set up a trigger and see the data of the events that will eventually be sent to your production service. This can help in the early development process when you explore the data the event trigger sends and how to best access the data you need."}),"\n",(0,t.jsx)(i.h2,{id:"native-saas-workflows",children:"Native SaaS Workflows"}),"\n",(0,t.jsxs)(i.p,{children:["Some SaaS vendors provide built-in workflow builders in their products so you do not have to use a no-code provider. Slack, for example, has a premium ",(0,t.jsx)(i.a,{href:"https://slack.com/help/articles/360035692513-Guide-to-Workflow-Builder",children:"workflow builder"})," feature that generates a unique URL you can use to configure your subscription. Slack's workflow builder can then listen for events sent by your trigger and perform Slack specific actions on the data, like sending a user a message when his or her access request is approved."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Slack workflow",src:r(287980).Z+"",width:"1020",height:"669"})}),"\n",(0,t.jsx)(i.h2,{id:"no-code-provider",children:"No-code Provider"}),"\n",(0,t.jsx)(i.p,{children:"No-code/low-code providers, like Zapier and Microsoft Power Automate, make it easy to consume event triggers and perform actions based on the event data. They are popular solutions for those looking to prototype or quickly create automated business processes, and they cater to novices and advanced users alike. Each no-code provider has documentation about how to create a new workflow and subscribe to an event trigger or webhook, so you must find the relevant documentation for your no-code provider to learn how to set one up. Zapier has the ability to configure a webhook action that generates a unique URL you can configure in your event trigger subscription."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Zapier webhook",src:r(263769).Z+"",width:"1106",height:"936"})}),"\n",(0,t.jsx)(i.h2,{id:"custom-application",children:"Custom Application"}),"\n",(0,t.jsxs)(i.p,{children:["A custom application is one you write in a language of your choosing and host in your own infrastructure, cloud, or on-premise. This is the most advanced option for implementing an event trigger client service. Although it requires a great deal of skill and knowledge to build, deploy, and operate your own service that can consume requests over HTTP, a custom application offers the most power and flexibility to implement your use cases. You can learn more about custom applications by checking out our ",(0,t.jsx)(i.a,{href:"https://github.com/sailpoint-oss/event-trigger-examples",children:"Event Trigger Example Application"}),"."]})]})}function u(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},287980:(e,i,r)=>{r.d(i,{Z:()=>t});const t=r.p+"assets/images/slack-workflow-5b29c40e5f68a774b29b4a95699e5d93.png"},148500:(e,i,r)=>{r.d(i,{Z:()=>t});const t=r.p+"assets/images/webhook-site-b3ff15d1022cbd53c27aa731f9cbea40.png"},263769:(e,i,r)=>{r.d(i,{Z:()=>t});const t=r.p+"assets/images/zapier-webhook-67e786bdc875a9aaeb30d44126667915.png"}}]);