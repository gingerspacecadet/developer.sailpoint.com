"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[27980],{868625:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=n(785893),r=n(511151);const s={id:"go-sdk-patch",title:"Updating resources with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Update a resource",sidebar_position:3,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","update"],description:"Learn how to update resources with the Golang SDK.",slug:"/tools/sdk/go/update",tags:["SDK","Software Development Kit"]},a=void 0,i={id:"tools/sdk/go/go-sdk-patch",title:"Updating resources with the Go SDK",description:"Learn how to update resources with the Golang SDK.",source:"@site/docs/tools/sdk/go/updating-resources.md",sourceDirName:"tools/sdk/go",slug:"/tools/sdk/go/update",permalink:"/docs/tools/sdk/go/update",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/updating-resources.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"},{inline:!0,label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,sidebarPosition:3,frontMatter:{id:"go-sdk-patch",title:"Updating resources with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Update a resource",sidebar_position:3,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","update"],description:"Learn how to update resources with the Golang SDK.",slug:"/tools/sdk/go/update",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go/create"},next:{title:"Go SDK",permalink:"/docs/tools/sdk/go/delete"}},d={},p=[];function l(e){const o={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:["Here is an example update WorkGroup script which will update the description for the previously created Workgroup from ",(0,t.jsx)(o.a,{href:"/docs/tools/sdk/go/create",children:"Create a Resource"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:'package main\n\nimport (\n "context"\n "encoding/json"\n "fmt"\n "os"\n\n sailpoint "github.com/sailpoint-oss/golang-sdk"\n "github.com/sailpoint-oss/golang-sdk/beta"\n)\n\nfunc main() {\n\n ctx := context.TODO()\n configuration := sailpoint.NewDefaultConfiguration()\n apiClient := sailpoint.NewAPIClient(configuration)\n\n workgroup, r, err := apiClient.Beta.GovernanceGroupsApi.ListWorkgroups(ctx).Filters(`name eq "DB Access Governance Group"`).Execute()\n\n if err != nil {\n  fmt.Fprintf(os.Stderr, "Error when retrieving workgroup`: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n }\n\n updatedDescription := `This is an updated description for the workgroup.`\n newDescriptionValue := beta.JsonPatchOperationValue{String: &updatedDescription}\n patchArray := []beta.JsonPatchOperation{{Op: "replace", Path: "/description", Value: &newDescriptionValue}}\n\n updatedWorkgroup, request, errorMessage := apiClient.Beta.GovernanceGroupsApi.PatchWorkgroup(ctx, *workgroup[0].Id).JsonPatchOperation(patchArray).Execute()\n\n if errorMessage != nil {\n  fmt.Fprintf(os.Stderr, "Error when updating workgroup`: %v\\n", errorMessage)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", request)\n }\n\n b, _ := json.MarshalIndent(updatedWorkgroup, "", "  ")\n fmt.Fprint(os.Stdout, string(b))\n\n}\n\n'})}),"\n",(0,t.jsx)(o.p,{children:"To run the code, run this command:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-go",children:"go run sdk.go\n"})}),"\n",(0,t.jsx)(o.p,{children:"The updated WorkGroup will be returned by the SDK:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-json",children:'{\n  "created": "2023-12-04T19:37:28Z",\n  "description": "This is an updated description for the workgroup.",\n  "modified": "2023-12-04T19:37:28Z",\n  "name": "DB Access Governance Group",\n  "owner": {\n    "displayName": "Brian Mendoza",\n    "emailAddress": null,\n    "id": "0003c25c365e492381d4e557b6159f9b",\n    "name": "Brian Mendoza",\n    "type": "IDENTITY"\n  }\n}\n'})})]})}function c(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);