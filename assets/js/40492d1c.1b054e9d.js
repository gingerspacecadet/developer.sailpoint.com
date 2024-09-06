"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[17179],{231535:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=s(785893),i=s(511151);const o={id:"python-sdk-getting-started",title:"Getting started with the Python SDK",pagination_label:"Python SDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"pythonsdk",keywords:["python","sdk","start"],description:"Learn how to use the Python SDK in this guide.",slug:"/tools/sdk/python/getting-started",tags:["SDK"]},r=void 0,a={id:"tools/sdk/python/python-sdk-getting-started",title:"Getting started with the Python SDK",description:"Learn how to use the Python SDK in this guide.",source:"@site/docs/tools/sdk/python/getting-started.md",sourceDirName:"tools/sdk/python",slug:"/tools/sdk/python/getting-started",permalink:"/docs/tools/sdk/python/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/getting-started.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,sidebarPosition:1,frontMatter:{id:"python-sdk-getting-started",title:"Getting started with the Python SDK",pagination_label:"Python SDK",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"pythonsdk",keywords:["python","sdk","start"],description:"Learn how to use the Python SDK in this guide.",slug:"/tools/sdk/python/getting-started",tags:["SDK"]},sidebar:"openApiSidebar",previous:{title:"Python SDK",permalink:"/docs/tools/sdk/python"},next:{title:"Create a resource",permalink:"/docs/tools/sdk/python/create"}},l={},h=[{value:"List Transforms",id:"list-transforms",level:2},{value:"Use query parameters to filter your tenant&#39;s transform list",id:"use-query-parameters-to-filter-your-tenants-transform-list",level:3},{value:"Use methods that return HTTP Info",id:"use-methods-that-return-http-info",level:2}];function d(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.p,{children:["Once your SDK is installed and configured, you can start accessing the SDK's different functionalities. To learn how to install and configure the Python SDK, refer to ",(0,n.jsx)(e.a,{href:"/docs/tools/sdk/python",children:"Installation and Configuration"}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"list-transforms",children:"List Transforms"}),"\n",(0,n.jsxs)(e.p,{children:["One of the most useful functionalities of the Python SDK is the ability to easily access all the ",(0,n.jsx)(e.a,{href:"/docs/api/v3",children:"V3 APIs"})," and ",(0,n.jsx)(e.a,{href:"/docs/api/beta",children:"Beta APIs"})," and implement them in your project."]}),"\n",(0,n.jsxs)(e.p,{children:["Here is an example of how to use the SDK to get a list of available ",(0,n.jsx)(e.a,{href:"/docs/extensibility/transforms",children:"transforms"}),". This example leverages the ",(0,n.jsx)(e.a,{href:"/docs/api/v3/list-transforms",children:"List Transforms endpoint"}),"."]}),"\n",(0,n.jsx)(e.p,{children:'Create a file in your project called "sdk.py" and copy this content into it:'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:'import sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nimport urllib3\n\nconfiguration = Configuration()\nwith sailpoint.v3.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = sailpoint.v3.TransformsApi(api_client)\n\n    # List transforms\n    try:\n        api_response = api_instance.list_transforms()\n        print("The response of TransformsApi->list_transforms:\\n")\n        print(api_response)\n    except Exception as e:\n        print("Exception when calling TransformsApi->list_transforms: %s\\n" % e)\n'})}),"\n",(0,n.jsx)(e.p,{children:"This example imports the V3 APIs, which allows you to call the List Transforms V3 endpoint in your code."}),"\n",(0,n.jsx)(e.p,{children:"To run the code, run this command:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-go",children:"python sdk.py\n"})}),"\n",(0,n.jsx)(e.p,{children:"The SDK will return a list of available transforms."}),"\n",(0,n.jsxs)(e.p,{children:["You can use this example as a guide for how to access all the V3 and Beta APIs (you would use ",(0,n.jsx)(e.code,{children:"import sailpoint.beta"})," to import the Beta APIs)."]}),"\n",(0,n.jsx)(e.h3,{id:"use-query-parameters-to-filter-your-tenants-transform-list",children:"Use query parameters to filter your tenant's transform list"}),"\n",(0,n.jsx)(e.p,{children:"With the same SDK function, you can use query parameters to limit the results of your transforms list to only the results you want."}),"\n",(0,n.jsxs)(e.p,{children:["Refer to the ",(0,n.jsx)(e.a,{href:"/docs/api/v3/list-transforms",children:"List Transforms endpoint specification"})," to view all its query parameters."]}),"\n",(0,n.jsx)(e.p,{children:'Here is an example that uses query parameters to limit the list to no more than 10 transforms that all start with the name "Test":'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",children:'import sailpoint\nimport sailpoint.v3\nfrom sailpoint.configuration import Configuration\nimport urllib3\n\nconfiguration = Configuration()\nwith sailpoint.v3.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = sailpoint.v3.TransformsApi(api_client)\n\n    # List transforms\n    try:\n        api_response = api_instance.list_transforms(filters=\'name sw "Test"\', limit=10)\n        print("The response of TransformsApi->list_transforms:\\n")\n        print(api_response)\n    except Exception as e:\n        print("Exception when calling TransformsApi->list_transforms: %s\\n" % e)\n'})}),"\n",(0,n.jsx)(e.p,{children:"To run the code, run this command:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-go",children:"python sdk.py\n"})}),"\n",(0,n.jsx)(e.p,{children:'The SDK will return a list of no more than 10 transforms that all start with the name "Test".'}),"\n",(0,n.jsx)(e.h2,{id:"use-methods-that-return-http-info",children:"Use methods that return HTTP Info"}),"\n",(0,n.jsx)(e.p,{children:"Each method has two versions - one returns only the response sent back from the endpoint, and the other returns the status and other HTTP info along with the response."}),"\n",(0,n.jsxs)(e.p,{children:["An example of the first method version is the ",(0,n.jsx)(e.code,{children:"list_transforms()"})," method from earlier example. This method returns the response from the endpoint but no status or headers."]}),"\n",(0,n.jsxs)(e.p,{children:["This is what the second method version would be: ",(0,n.jsx)(e.code,{children:"list_transforms_with_http_info()"}),". This method will return the response as well as status, headers and raw data from the endpoint."]})]})}function p(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}}}]);