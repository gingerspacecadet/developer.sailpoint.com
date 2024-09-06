"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[11462],{466317:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(785893),s=i(511151);const r={id:"transforms-in-provisioning-policies",title:"Transforms in Provisioning Policies",pagination_label:"Transforms in Provisioning Policies",sidebar_label:"Transforms in Provisioning Policies",sidebar_class_name:"transformsInProvisioningPolicies",keywords:["transforms","guides","provisioning","policies"],description:"Learn how to use transforms in your provisioning policies!",sidebar_position:3,slug:"/extensibility/transforms/guides/transforms-in-provisioning-policies",tags:["Transforms","Guides","Provisioning","Policies"]},a=void 0,o={id:"extensibility/transforms/guides/transforms-in-provisioning-policies",title:"Transforms in Provisioning Policies",description:"Learn how to use transforms in your provisioning policies!",source:"@site/docs/extensibility/transforms/guides/provisioning-policy-transform.md",sourceDirName:"extensibility/transforms/guides",slug:"/extensibility/transforms/guides/transforms-in-provisioning-policies",permalink:"/docs/extensibility/transforms/guides/transforms-in-provisioning-policies",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/guides/provisioning-policy-transform.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Guides",permalink:"/docs/tags/guides"},{inline:!0,label:"Provisioning",permalink:"/docs/tags/provisioning"},{inline:!0,label:"Policies",permalink:"/docs/tags/policies"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,sidebarPosition:3,frontMatter:{id:"transforms-in-provisioning-policies",title:"Transforms in Provisioning Policies",pagination_label:"Transforms in Provisioning Policies",sidebar_label:"Transforms in Provisioning Policies",sidebar_class_name:"transformsInProvisioningPolicies",keywords:["transforms","guides","provisioning","policies"],description:"Learn how to use transforms in your provisioning policies!",sidebar_position:3,slug:"/extensibility/transforms/guides/transforms-in-provisioning-policies",tags:["Transforms","Guides","Provisioning","Policies"]},sidebar:"openApiSidebar",previous:{title:"Generate Temporary Password",permalink:"/docs/extensibility/transforms/guides/temporary-password"},next:{title:"Lifecycle State Transform",permalink:"/docs/extensibility/transforms/guides/lifecycle-state-transform"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Create provisioning policy",id:"create-provisioning-policy",level:2},{value:"Add to the Create policy",id:"add-to-the-create-policy",level:2},{value:"Add the transform to your existing policy",id:"add-the-transform-to-your-existing-policy",level:2},{value:"Next Steps",id:"next-steps",level:2}];function u(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(e.p,{children:["In this guide, you will learn how to use ",(0,t.jsx)(e.a,{href:"/docs/api/v3/transforms",children:"Identity Security Cloud's Transforms"})," in a provisioning policy for a source. This can be useful if you need to hide the attribute in your identity attribute list but still need the attribute during provisioning."]}),"\n",(0,t.jsx)(e.h2,{id:"create-provisioning-policy",children:"Create provisioning policy"}),"\n",(0,t.jsx)(e.p,{children:"Use the Create provisioning policy for new users who have been granted access to a source and need to be provisioned on that source. You can define the custom attributes you want to create during the provisioning process. You can use transforms to modify the data before sending it to the source."}),"\n",(0,t.jsxs)(e.p,{children:["First, call the ",(0,t.jsx)(e.a,{href:"/docs/api/v3/get-provisioning-policy",children:"Get Provisioning Policy API"})," for the source you want to add your transform to."]}),"\n",(0,t.jsx)(e.p,{children:"This is an example create provisioning policy response for a source:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "name": "Account",\n  "description": null,\n  "usageType": "CREATE",\n  "fields": [\n    {\n      "name": "email",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "email"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "string",\n      "isMultiValued": false\n    },\n    {\n      "name": "displayName",\n      "transform": {\n        "type": "lower",\n        "attributes": {\n          "input": {\n            "type": "identityAttribute",\n            "attributes": {\n              "name": "displayName"\n            }\n          }\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "string",\n      "isMultiValued": false\n    },\n    {\n      "name": "firstName",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "firstName"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "string",\n      "isMultiValued": false\n    },\n    {\n      "name": "lastName",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "lastName"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "string",\n      "isMultiValued": false\n    },\n    {\n      "name": "hireDate",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "hireDate"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "string",\n      "isMultiValued": false\n    },\n    {\n      "name": "enabled",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "enabled"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "boolean",\n      "isMultiValued": false\n    },\n    {\n      "name": "locked",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "locked"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "boolean",\n      "isMultiValued": false\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"add-to-the-create-policy",children:"Add to the Create policy"}),"\n",(0,t.jsxs)(e.p,{children:["This transform concatenates the identityAttributes ",(0,t.jsx)(e.code,{children:"firstName"}),", ",(0,t.jsx)(e.code,{children:"lastName"}),", the two digit month of the ",(0,t.jsx)(e.code,{children:"hireDate"})," and the static string ",(0,t.jsx)(e.code,{children:"Rt4e!"})," to form a temporaryPassword."]}),"\n",(0,t.jsxs)(e.admonition,{type:"caution",children:[(0,t.jsxs)(e.mdxAdmonitionTitle,{children:["You must use the ",(0,t.jsx)(e.code,{children:"identityAttribute"})," type when you're writing transforms in provisioning policies. The ",(0,t.jsx)(e.code,{children:"accountAttribute"})," type won't work during provisioning. :::"]}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "name": "temporaryPassword",\n  "transform": {\n    "type": "concat",\n    "attributes": {\n      "values": [\n        {\n          "type": "identityAttribute",\n          "attributes": {\n            "name": "firstName"\n          }\n        },\n        {\n          "type": "identityAttribute",\n          "attributes": {\n            "name": "lastName"\n          }\n        },\n        {\n          "type": "substring",\n          "attributes": {\n            "input": {\n              "type": "identityAttribute",\n              "attributes": {\n                "name": "hireDate"\n              }\n            },\n            "start": 5,\n            "end": 7\n          }\n        },\n        {\n          "type": "static",\n          "attributes": {\n            "value": "Rt4e!"\n          }\n        }\n      ]\n    }\n  },\n  "attributes": {},\n  "isRequired": false,\n  "type": "boolean",\n  "isMultiValued": false\n}\n'})}),(0,t.jsxs)(e.p,{children:["If you assume the given attributes have the following values, this transform would create the temporaryPassword attribute as ",(0,t.jsx)(e.code,{children:"johndoe12Rt4e!"}),"."]}),(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Identity Attribute"}),(0,t.jsx)(e.th,{children:"Value"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"firstName"}),(0,t.jsx)(e.td,{children:"john"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"lastName"}),(0,t.jsx)(e.td,{children:"doe"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"hireDate"}),(0,t.jsx)(e.td,{children:"2023-12-13"})]})]})]}),(0,t.jsx)(e.h2,{id:"add-the-transform-to-your-existing-policy",children:"Add the transform to your existing policy"}),(0,t.jsxs)(e.p,{children:["Upload your complete CREATE provisioning policy by using the ",(0,t.jsx)(e.a,{href:"/docs/api/v3/create-provisioning-policy",children:"Create Provisioning Policy API"}),", or use the ",(0,t.jsx)(e.a,{href:"/docs/api/v3/put-provisioning-policy",children:"Update Provisioning Policy API"})," to update an existing provisioning policy."]}),(0,t.jsx)(e.p,{children:"This is the example response with the full policy, along with the new attribute:"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "name": "Account",\n  "description": null,\n  "usageType": "CREATE",\n  "fields": [\n    {\n      "name": "email",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "email"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "string",\n      "isMultiValued": false\n    },\n    {\n      "name": "displayName",\n      "transform": {\n        "type": "lower",\n        "attributes": {\n          "input": {\n            "type": "identityAttribute",\n            "attributes": {\n              "name": "displayName"\n            }\n          }\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "string",\n      "isMultiValued": false\n    },\n    {\n      "name": "firstName",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "firstName"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "string",\n      "isMultiValued": false\n    },\n    {\n      "name": "lastName",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "lastName"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "string",\n      "isMultiValued": false\n    },\n    {\n      "name": "hireDate",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "hireDate"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "string",\n      "isMultiValued": false\n    },\n    {\n      "name": "temporaryPassword",\n      "transform": {\n        "type": "concat",\n        "attributes": {\n          "values": [\n            {\n              "type": "identityAttribute",\n              "attributes": {\n                "name": "firstName"\n              }\n            },\n            {\n              "type": "identityAttribute",\n              "attributes": {\n                "name": "lastName"\n              }\n            },\n            {\n              "type": "substring",\n              "attributes": {\n                "input": {\n                  "type": "identityAttribute",\n                  "attributes": {\n                    "name": "hireDate"\n                  }\n                },\n                "start": 5,\n                "end": 7\n              }\n            },\n            {\n              "type": "static",\n              "attributes": {\n                "value": "Rt4e!"\n              }\n            }\n          ]\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "boolean",\n      "isMultiValued": false\n    },\n    {\n      "name": "enabled",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "enabled"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "boolean",\n      "isMultiValued": false\n    },\n    {\n      "name": "locked",\n      "transform": {\n        "type": "identityAttribute",\n        "attributes": {\n          "name": "locked"\n        }\n      },\n      "attributes": {},\n      "isRequired": false,\n      "type": "boolean",\n      "isMultiValued": false\n    }\n  ]\n}\n'})}),(0,t.jsx)(e.h2,{id:"next-steps",children:"Next Steps"}),(0,t.jsxs)(e.p,{children:["For more information on all available transforms, refer to ",(0,t.jsx)(e.a,{href:"/docs/extensibility/transforms/operations",children:"Transform Operations"}),". If you're having trouble creating your transform in provisioning policies, reach out with your question in the ",(0,t.jsx)(e.a,{href:"https://developer.sailpoint.com/discuss/",children:"Developer Community Forum"}),"!"]})]})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}}}]);