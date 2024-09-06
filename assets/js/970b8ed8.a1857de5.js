"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[35453],{650166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=n(785893),r=n(511151);const l={id:"account-profile-attribute-generator",title:"Account Profile Attribute Generator",pagination_label:"Account Profile Attribute Generator",sidebar_label:"Account Profile Attribute Generator",sidebar_class_name:"accountProfileAttributeGenerator",keywords:["cloud","rules","account profile","attribute generator"],description:"This rule generates complex account attribute values during provisioning, e.g. when creating an account.",slug:"/extensibility/rules/cloud-rules/account-profile-attribute-generator",tags:["Rules"]},a=void 0,s={id:"extensibility/rules/cloud-rules/account-profile-attribute-generator",title:"Account Profile Attribute Generator",description:"This rule generates complex account attribute values during provisioning, e.g. when creating an account.",source:"@site/docs/extensibility/rules/cloud-rules/account_profile_attribute_generator.md",sourceDirName:"extensibility/rules/cloud-rules",slug:"/extensibility/rules/cloud-rules/account-profile-attribute-generator",permalink:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/rules/cloud-rules/account_profile_attribute_generator.md",tags:[{inline:!0,label:"Rules",permalink:"/docs/tags/rules"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,frontMatter:{id:"account-profile-attribute-generator",title:"Account Profile Attribute Generator",pagination_label:"Account Profile Attribute Generator",sidebar_label:"Account Profile Attribute Generator",sidebar_class_name:"accountProfileAttributeGenerator",keywords:["cloud","rules","account profile","attribute generator"],description:"This rule generates complex account attribute values during provisioning, e.g. when creating an account.",slug:"/extensibility/rules/cloud-rules/account-profile-attribute-generator",tags:["Rules"]},sidebar:"openApiSidebar",previous:{title:"Cloud Executed Rules",permalink:"/docs/extensibility/rules/cloud-rules"},next:{title:"Account Profile Attribute Generator (from Template)",permalink:"/docs/extensibility/rules/cloud-rules/account-profile-attribute-generator-template"}},o={},u=[{value:"Overview",id:"overview",level:2},{value:"Execution",id:"execution",level:2},{value:"Input",id:"input",level:2},{value:"Output",id:"output",level:2},{value:"Template",id:"template",level:2},{value:"Example - Generate Username",id:"example---generate-username",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"This rule generates complex account attribute values during provisioning, e.g. when creating an account. You would typically use this rule when you are creating an account to generate attributes like usernames, first time passwords, or email addresses."}),"\n",(0,i.jsx)(t.h2,{id:"execution",children:"Execution"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Cloud Execution"})," - This rule executes in the Identity Security Cloud cloud, and it has read-only access to Identity Security Cloud data models, but it does not have access to on-premise sources or connectors."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Logging"})," - Logging statements are currently only visible to SailPoint personnel."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Rule Execution",src:n(544490).Z+"",width:"1594",height:"635"})}),"\n",(0,i.jsx)(t.h2,{id:"input",children:"Input"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Argument"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Purpose"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"log"}),(0,i.jsx)(t.td,{children:"org.apache.log4j.Logger"}),(0,i.jsxs)(t.td,{children:["Logger to log statements. ",(0,i.jsx)(t.em,{children:"Note: This executes in the cloud, and logging is currently not exposed to anyone other than SailPoint."})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"idn"}),(0,i.jsx)(t.td,{children:"sailpoint.server.IdnRuleUtil"}),(0,i.jsxs)(t.td,{children:["Provides a read-only starting point for using the SailPoint API. From this passed reference, the rule can interrogate the Identity Security Cloud data model including identities or account information via helper methods as described in ",(0,i.jsx)(t.a,{href:"/docs/extensibility/rules/rule-utility",children:"IdnRuleUtil"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"identity"}),(0,i.jsx)(t.td,{children:"sailpoint.object.Identity"}),(0,i.jsx)(t.td,{children:"Reference to identity object representing the identity being calculated."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"application"}),(0,i.jsx)(t.td,{children:"sailpoint.object.Application"}),(0,i.jsx)(t.td,{children:"Read-only reference to application object that represents the source to which provisioning is being done."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"field"}),(0,i.jsx)(t.td,{children:"sailpoint.object.Field"}),(0,i.jsx)(t.td,{children:"Field object used to get information about the attribute being generated."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"output",children:"Output"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Argument"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Purpose"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value"}),(0,i.jsx)(t.td,{children:"java.lang.Object"}),(0,i.jsx)(t.td,{children:"Value returned for the account attribute."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-xml",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule name="Example Rule" type="AttributeGenerator">\n  <Description>Describe your rule here.</Description>\n  <Source><![CDATA[\n\n  // Add your logic here.\n\n  ]]></Source>\n</Rule>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"example---generate-username",children:"Example - Generate Username"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'<?xml version=\'1.0\' encoding=\'UTF-8\'?>\n<!DOCTYPE Rule PUBLIC "sailpoint.dtd" "sailpoint.dtd">\n<Rule language="beanshell" name="Generate Username" type="AttributeGenerator">\n  <Description>This will generate a username.</Description>\n  <Source><![CDATA[\nimport sailpoint.tools.GeneralException;\nimport java.util.Iterator;\nimport sailpoint.object.*;\nimport java.util.ArrayList;\nimport sailpoint.api.*;\nimport sailpoint.object.*;\nimport java.util.Iterator;\nimport java.util.List;\nimport org.apache.commons.lang.StringUtils;\n\nint maxIteration = 1000;\n\npublic String generateUsername ( String firstName,  String lastName, int iteration ) {\n\n  // Data protection.\n  firstName = StringUtils.trimToNull( firstName );\n  lastName = StringUtils.trimToNull( lastName );\n\n  if ( ( firstName == null ) || ( lastName == null ) )\n  return null;\n\n  // This will hold the final username;\n  String username = null;\n\n  switch ( iteration ) {\n    case 0:\n      username = firstName + "." + lastName;\n      break;\n    default:\n      username = firstName + "." + lastName + ( iteration - 1 );\n      break;\n  }\n  if ( isUnique ( username ) )\n    return username;\n  else if ( iteration < maxIteration )\n    return generateUsername ( firstName,  lastName, ( iteration + 1 ) );\n  else\n    return null;\n}\n\npublic boolean isUnique ( String username ) throws GeneralException {\n  return !idn.accountExistsByDisplayName(application.getName(), username);\n}\n\nreturn generateUsername( identity.getFirstname(), identity.getLastname(), 0 );\n\n  ]]></Source>\n</Rule>\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},544490:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cloud_execution-7029b7fdcb50a6ea04ef055f18117067.png"}}]);