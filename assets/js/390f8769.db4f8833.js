"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[70209],{90939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(785893),r=n(511151);const a={id:"manager-correlation-rule",title:"Manager Correlation Rule",pagination_label:"Manager Correlation Rule",sidebar_label:"Manager Correlation Rule",sidebar_class_name:"managerCorrelationRule",keywords:["cloud","rules","manager correlation"],description:"This rule calculates a manager relationship between identities.",slug:"/extensibility/rules/cloud-rules/manager-correlation-rule",tags:["Rules"]},l=void 0,s={id:"extensibility/rules/cloud-rules/manager-correlation-rule",title:"Manager Correlation Rule",description:"This rule calculates a manager relationship between identities.",source:"@site/docs/extensibility/rules/cloud-rules/manager_correlation_rule.md",sourceDirName:"extensibility/rules/cloud-rules",slug:"/extensibility/rules/cloud-rules/manager-correlation-rule",permalink:"/docs/extensibility/rules/cloud-rules/manager-correlation-rule",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/manager_correlation_rule.md",tags:[{inline:!0,label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,frontMatter:{id:"manager-correlation-rule",title:"Manager Correlation Rule",pagination_label:"Manager Correlation Rule",sidebar_label:"Manager Correlation Rule",sidebar_class_name:"managerCorrelationRule",keywords:["cloud","rules","manager correlation"],description:"This rule calculates a manager relationship between identities.",slug:"/extensibility/rules/cloud-rules/manager-correlation-rule",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Identity Attribute Rule",permalink:"/docs/extensibility/rules/cloud-rules/identity-attribute-rule"},next:{title:"Transform Rule",permalink:"/docs/extensibility/rules/cloud-rules/transform-rule"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example - Find a manager based on the manager.email attribute",id:"example---find-a-manager-based-on-the-manageremail-attribute",level:2}];function u(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"This rule calculates a manager relationship between identities."}),"\n",(0,i.jsx)(t.p,{children:"Use this rule to correlate an identity's manager for the following scenarios:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The authoritative source has multiple accounts for an identity and you must pick the manager data from the ",(0,i.jsx)(t.code,{children:"active"})," account."]}),"\n",(0,i.jsx)(t.li,{children:"You need to do a lookup from an employee number to other data."}),"\n",(0,i.jsx)(t.li,{children:"The identity changes types, for example, from consultant to employee with the manager coming from a different authoritative source."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The manager correlation rule runs before configured manager account correlation."}),"\n",(0,i.jsx)(t.h2,{id:"execution",children:"Execution"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cloud Execution"})," - This rule executes in the Identity Security Cloud cloud, and it has read-only access to Identity Security Cloud data models, but it does not have access to on-premise sources or connectors."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Logging"})," - Logging statements are currently only visible to SailPoint personnel."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Rule Execution",src:n(544490).Z+"",width:"1594",height:"635"})}),"\n",(0,i.jsx)(t.h2,{id:"input",children:"Input"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Argument"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Purpose"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"log"}),(0,i.jsx)(t.td,{children:"org.apache.log4j.Logger"}),(0,i.jsxs)(t.td,{children:["Logger to log statements. ",(0,i.jsx)(t.em,{children:"Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint."})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"idn"}),(0,i.jsx)(t.td,{children:"sailpoint.server.IdnRuleUtil"}),(0,i.jsxs)(t.td,{children:["Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the Identity Security Cloud data model including identities or account information via helper methods as described in ",(0,i.jsx)(t.a,{href:"/docs/extensibility/rules/rule-utility",children:"IdnRuleUtil"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"link"}),(0,i.jsx)(t.td,{children:"sailpoint.object.Link"}),(0,i.jsx)(t.td,{children:"Read-only representation of account data that has been aggregated. Use this as a basis to determine manager linkages to a specific manager identity."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"managerAttributeValue"}),(0,i.jsx)(t.td,{children:"java.lang.Object"}),(0,i.jsx)(t.td,{children:"Attribute value stored in the manager attribute."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Argument"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Purpose"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"returnMap"}),(0,i.jsx)(t.td,{children:"java.util.Map"}),(0,i.jsxs)(t.td,{children:["Map object containing a reference to the identity attributes to identify the manager's identity. These should contain both ",(0,i.jsx)(t.code,{children:"identityAttributeName"})," and ",(0,i.jsx)(t.code,{children:"identityAttributeValue"})," as keys."]})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="ManagerCorrelation">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"example---find-a-manager-based-on-the-manageremail-attribute",children:"Example - Find a manager based on the manager.email attribute"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Manager Email Correlation" type="ManagerCorrelation">\n  <Description>Finds a manager based on the manager.email attribute.</Description>\n  <Source><![CDATA[\n\nMap returnMap = new HashMap();\n\nString managerEmail = link.getAttribute( "manager.email" );\nreturnMap.put( "identityAttributeName", "email");\nreturnMap.put( "identityAttributeValue", managerEmail );\n\nreturn returnMap;\n\n  ]]></Source>\n</Rule>\n'})})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},544490:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);