"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[17127],{216272:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>b,contentTitle:()=>v,default:()=>q,frontMatter:()=>g,metadata:()=>y,toc:()=>N});var i=a(785893),l=a(511151),r=a(168562),n=a.n(r),t=(a(69957),a(496463)),o=(a(318438),a(998439)),d=a.n(o),p=(a(534168),a(603655)),c=a.n(p),m=a(313503),h=a.n(m),u=a(82479),x=a.n(u),j=a(555199),f=(a(645774),a(424455));const g={id:"patch-role-profiles",sidebar_label:"Update multiple role-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:"eJytVttuGzcQ/RVinleS44vSLtAHJXBRBUhq2EpfBKEYcWe1TLjkhhfbgrD/XgypmyPXddrug7QizwzP3A61AduRw6CsmVZQQodBNrdW042ztdLkoYCKvHSqYwyU8LmrMJBoow6q0ySc1TToMlpIa4JTyxisE4508usb1bGbgCsP5RzYQHQ794sCHH2L5MM7W62h3KSfylEFZXCRCmCfZAJvYddpJZPX0RfPdDbgZUMt8ltYdwQl2OUXkgEK6BzHFhT55NZq+nN/7AGOzuEaClCBWv/PblR1hPHBKbOCAmrrWgxQQoyqgr7Ip70SuyX1OnhfQFBBM+S4TINz6PPD+fSdNT7zPT8746+nNbx+7EgGqsQOKoIVKO5RK15L5YAfyLw19HsN5fw0ec9xhb74e+AHu4R+kQO5fI77O6zEbaYoBiIaXOpEX9q20xRo+P8Sn5qUlQ9s+hLvPxiVjrl2zjq/D+LquSCmJpAzqMUduXtyItmIgXAUojNUCWtENA2aSlMl6FFSsvQ/FNzLjUx85CmziWjJe1yRyOtLZVYiNCQyvgB6RE40lHBnnVsLb1sKDaMeyATx4KxZHXqR9+xeWJgEhgZKGD0dxwJ8SoRPtYhOQwlNCJ0vR6NNIIMmfMKW+qGxhtpO2zXRUNp2hJ2CAu7RKe6DPL97eI6uxqh5flC2JO2Jns0SXBhsSaD3asXp536KPtiWHMeyYH4yOhXWieCS0JGbRA5lvjjevuPsZx7HoH0xOCiONsGg3IKg2L78uhv2mf1KRgT+/GVto8uvafy50LcHybze1eNE4uZZreCixp+u6vHl4Ortm7eDy6vx+WB5UcvBufx5fFGPx1jjGI4k67UGx7r1Opt+0RegTG2ZLZc7l+DN8Gx4djRLn65vP4rJzfS0Vg2J3aaQaMSSRPS5XigleS/QVKK1larXgrvCRs8iZ6OT5IUyIiWTzL1y1rRkAk+UVpKMTyk0qW3g43SWct1ZH1o0Rzv/+vp7EsnmMMX/4ULNLRXoMYw6jYoFKs/OZjtm8+9aYlFAY33gjc1miZ4+O933vPwtkuPeXhyGKbV2AQ1hRS5101daQwnvM/PBjI9nuI7pHv1ei1gts8VEsn69iF0cScXNZPb+Nx6J7R+C1lZs5PCBuxQfoAQowGZFTH3PaxvQaFYRV4zNTvn5C/iUEfY=",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple role-profile contributor relationships' (patch-role-profiles)"},v=void 0,y={id:"api/nerm/v1/patch-role-profiles",title:"patch-role-profiles",description:"<Heading",source:"@site/docs/api/nerm/v1/patch-role-profiles.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/patch-role-profiles",permalink:"/docs/api/nerm/v1/patch-role-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple role-profile contributor relationships' (patch-role-profiles)",tags:[],version:"current",frontMatter:{id:"patch-role-profiles",sidebar_label:"Update multiple role-profile contributor relationships",hide_title:!0,hide_table_of_contents:!0,api:"eJytVttuGzcQ/RVinleS44vSLtAHJXBRBUhq2EpfBKEYcWe1TLjkhhfbgrD/XgypmyPXddrug7QizwzP3A61AduRw6CsmVZQQodBNrdW042ztdLkoYCKvHSqYwyU8LmrMJBoow6q0ySc1TToMlpIa4JTyxisE4508usb1bGbgCsP5RzYQHQ794sCHH2L5MM7W62h3KSfylEFZXCRCmCfZAJvYddpJZPX0RfPdDbgZUMt8ltYdwQl2OUXkgEK6BzHFhT55NZq+nN/7AGOzuEaClCBWv/PblR1hPHBKbOCAmrrWgxQQoyqgr7Ip70SuyX1OnhfQFBBM+S4TINz6PPD+fSdNT7zPT8746+nNbx+7EgGqsQOKoIVKO5RK15L5YAfyLw19HsN5fw0ec9xhb74e+AHu4R+kQO5fI77O6zEbaYoBiIaXOpEX9q20xRo+P8Sn5qUlQ9s+hLvPxiVjrl2zjq/D+LquSCmJpAzqMUduXtyItmIgXAUojNUCWtENA2aSlMl6FFSsvQ/FNzLjUx85CmziWjJe1yRyOtLZVYiNCQyvgB6RE40lHBnnVsLb1sKDaMeyATx4KxZHXqR9+xeWJgEhgZKGD0dxwJ8SoRPtYhOQwlNCJ0vR6NNIIMmfMKW+qGxhtpO2zXRUNp2hJ2CAu7RKe6DPL97eI6uxqh5flC2JO2Jns0SXBhsSaD3asXp536KPtiWHMeyYH4yOhXWieCS0JGbRA5lvjjevuPsZx7HoH0xOCiONsGg3IKg2L78uhv2mf1KRgT+/GVto8uvafy50LcHybze1eNE4uZZreCixp+u6vHl4Ortm7eDy6vx+WB5UcvBufx5fFGPx1jjGI4k67UGx7r1Opt+0RegTG2ZLZc7l+DN8Gx4djRLn65vP4rJzfS0Vg2J3aaQaMSSRPS5XigleS/QVKK1larXgrvCRs8iZ6OT5IUyIiWTzL1y1rRkAk+UVpKMTyk0qW3g43SWct1ZH1o0Rzv/+vp7EsnmMMX/4ULNLRXoMYw6jYoFKs/OZjtm8+9aYlFAY33gjc1miZ4+O933vPwtkuPeXhyGKbV2AQ1hRS5101daQwnvM/PBjI9nuI7pHv1ei1gts8VEsn69iF0cScXNZPb+Nx6J7R+C1lZs5PCBuxQfoAQowGZFTH3PaxvQaFYRV4zNTvn5C/iUEfY=",sidebar_class_name:"patch api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Update multiple role-profile contributor relationships' (patch-role-profiles)"},sidebar:"nermSideBar",previous:{title:"Create multiple role-profile contributor relationships",permalink:"/docs/api/nerm/v1/post-role-profiles"},next:{title:"Find role-profile contributor relationship by id",permalink:"/docs/api/nerm/v1/get-role-profile"}},b={},N=[];function _(e){const s={p:"p",...(0,l.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Update multiple role-profile contributor relationships"}),"\n",(0,i.jsx)(t.Z,{method:"patch",path:"/role_profiles"}),"\n",(0,i.jsx)(s.p,{children:"Update multiple role-profile contributor relationships"}),"\n",(0,i.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"role_profiles"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(h(),{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Expected response to a valid request"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"oneOf"})}),(0,i.jsxs)(x(),{children:[(0,i.jsx)(f.default,{label:"RoleProfiles",value:"0-item-properties",children:(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"role_profiles"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(h(),{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0}}),(0,i.jsx)(h(),{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",schema:{type:"string",minLength:32,maxLength:32,readOnly:!0}}),(0,i.jsx)(h(),{collapsible:!1,name:"role_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"profile_id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})}),(0,i.jsxs)(f.default,{label:"Job",value:"1-item-properties",children:[(0,i.jsx)(h(),{collapsible:!1,name:"info",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"job has started"}}),(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"job_status"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"job_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"3ce88e47ad6dba2ddf349d21"}}),(0,i.jsx)(h(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"queued"}})]})]})}),(0,i.jsx)(h(),{collapsible:!1,name:"status",required:!1,schemaName:"int",qualifierMessage:void 0,schema:{type:"int",example:200}})]})]})]})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(c(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad Request - unable to complete."})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"oneOf"})}),(0,i.jsxs)(x(),{children:[(0,i.jsx)(f.default,{label:"InvalidJson",value:"0-item-properties",children:(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."}})}),(0,i.jsxs)(f.default,{label:"ValidationErrors",value:"1-item-properties",children:[(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"}}),(0,i.jsx)(h(),{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}}})]})]})]})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(c(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error - returned on unhandled exceptions."})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(c(),{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}}}]);