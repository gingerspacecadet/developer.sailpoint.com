"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[27818],{447214:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>o});var s=i(785893),r=i(511151);const n={id:"standard-collection-parameters",title:"Standard Collection Parameters",pagination_label:"Standard Collection Parameters",sidebar_label:"Standard Collection Parameters",sidebar_position:5,sidebar_class_name:"standardCollectionParameters",keywords:["standard collection parameters","filter","pagination","paginate","sort"],description:"ISC API pagination, filtering, and sorting.",tags:["Standard Collection Parameters","Filter","Sort","Pagination"]},l=void 0,a={id:"api/standard-collection-parameters",title:"Standard Collection Parameters",description:"ISC API pagination, filtering, and sorting.",source:"@site/docs/api/standard-collection-parameters.md",sourceDirName:"api",slug:"/api/standard-collection-parameters",permalink:"/docs/api/standard-collection-parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/api/standard-collection-parameters.md",tags:[{inline:!0,label:"Standard Collection Parameters",permalink:"/docs/tags/standard-collection-parameters"},{inline:!0,label:"Filter",permalink:"/docs/tags/filter"},{inline:!0,label:"Sort",permalink:"/docs/tags/sort"},{inline:!0,label:"Pagination",permalink:"/docs/tags/pagination"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1725608518e3,sidebarPosition:5,frontMatter:{id:"standard-collection-parameters",title:"Standard Collection Parameters",pagination_label:"Standard Collection Parameters",sidebar_label:"Standard Collection Parameters",sidebar_position:5,sidebar_class_name:"standardCollectionParameters",keywords:["standard collection parameters","filter","pagination","paginate","sort"],description:"ISC API pagination, filtering, and sorting.",tags:["Standard Collection Parameters","Filter","Sort","Pagination"]},sidebar:"isc_v3_sidebar",previous:{title:"API Versioning Strategy",permalink:"/docs/api/api-versioning-strategy"},next:{title:"Rate Limiting",permalink:"/docs/api/rate-limit"}},d={},o=[{value:"Paginating Results",id:"paginating-results",level:2},{value:"Paginating Search Queries",id:"paginating-search-queries",level:2},{value:"Example of Paginating Search Results",id:"example-of-paginating-search-results",level:3},{value:"Filtering Results",id:"filtering-results",level:2},{value:"Data Types",id:"data-types",level:3},{value:"Filter Syntax",id:"filter-syntax",level:3},{value:"Primitive Operators",id:"primitive-operators",level:3},{value:"Composite Operators",id:"composite-operators",level:3},{value:"Escaping Special Characters in a Filter",id:"escaping-special-characters-in-a-filter",level:3},{value:"Known Limitations",id:"known-limitations",level:3},{value:"Sorting Results",id:"sorting-results",level:2},{value:"Putting it all Together",id:"putting-it-all-together",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Many endpoints in the Identity Security Cloud API support a generic syntax for paginating, filtering and sorting the results. A collection endpoint has the following characteristics:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The HTTP verb is always GET."}),"\n",(0,s.jsxs)(t.li,{children:["The last component in the URL is a plural noun (ex. ",(0,s.jsx)(t.code,{children:"/v3/public-identities"}),")."]}),"\n",(0,s.jsx)(t.li,{children:"The return value from a successful request is always an array of JSON objects. This array may be empty if there are no results."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"paginating-results",children:"Paginating Results"}),"\n",(0,s.jsx)(t.p,{children:"Use the following optional query parameters to achieve pagination:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Constraints"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"limit"})}),(0,s.jsx)(t.td,{children:"Integer specifying the maximum number of records to return in a single API call. If it is not specified, a default limit is used."}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"250"})," for list endpoints, ",(0,s.jsx)(t.code,{children:"10000"})," for search endpoint"]}),(0,s.jsxs)(t.td,{children:["Maxiumum of 250 records per page for list endpoints, 10000 records per page for the ",(0,s.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/v3/search",children:"Search endpoint"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"offset"})}),(0,s.jsxs)(t.td,{children:["Integer specifying the offset of the first result from the beginning of the collection. The ",(0,s.jsx)(t.strong,{children:"offset"})," value is record-based, not page-based, and the index starts at 0. For example, ",(0,s.jsx)(t.strong,{children:"offset=0"})," and ",(0,s.jsx)(t.strong,{children:"limit=20"})," returns records 0-19, but ",(0,s.jsx)(t.strong,{children:"offset=1"})," and ",(0,s.jsx)(t.strong,{children:"limit=20"})," returns records 1-20."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0"})}),(0,s.jsx)(t.td,{children:"Between 0 and the last record index."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"count"})}),(0,s.jsxs)(t.td,{children:["Boolean indicating whether a total count is returned, factoring in any filter parameters, in the ",(0,s.jsx)(t.strong,{children:"X-Total-Count"})," response header. The value is the total size of the collection that would be returned if ",(0,s.jsx)(t.strong,{children:"limit"})," and ",(0,s.jsx)(t.strong,{children:"offset"})," were ignored. For example, if the total number of records is 1000, then count=true would return 1000 in the ",(0,s.jsx)(t.strong,{children:"X-Total-Count"})," header. Because requesting a total count can have performance impact, do not send ",(0,s.jsx)(t.strong,{children:"count=true"})," if that value is not being used."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsxs)(t.td,{children:["Must be ",(0,s.jsx)(t.code,{children:"true"})," or ",(0,s.jsx)(t.code,{children:"false"})]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Examples:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["GET ",(0,s.jsx)(t.code,{children:"/v3/public-identities?limit=2"})]}),"\n",(0,s.jsxs)(t.li,{children:["GET ",(0,s.jsx)(t.code,{children:"/v3/public-identities?limit=20&offset=4"})]}),"\n",(0,s.jsxs)(t.li,{children:["GET ",(0,s.jsx)(t.code,{children:"/v3/public-identities?count=true"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"paginating-search-queries",children:"Paginating Search Queries"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/v3/search",children:"search API"})," in Identity Security Cloud leverages ",(0,s.jsx)(t.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html",children:"Elasticsearch"}),' functionality, which returns a maximum of 10,000 records by default. However, you can page more than 10,000 records by using the "searchAfter" property.']}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"searchAfter"})," capability provides the ability to page on sorted field values, instead of offset paging. For example, if you sort by ID and page 100 records at a time, you can take the 1st page of 100 records, pass the last ID from that record set into your next search, and the next search will return the next 100 records after that ID. You continue that pattern of using the last value passed into ",(0,s.jsx)(t.code,{children:"searchAfter"})," until the end of the result set. This allows you to page past the 10,000 record limit until you reach the final record."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Required Properties for Paginating Search Results"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Property"})}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"query"})}),(0,s.jsx)(t.td,{children:"The Query JSON object. Refer to the following Query JSON Object table for details."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"sort"})}),(0,s.jsxs)(t.td,{children:["The array list of the fields to sort by. This is required if you are using the ",(0,s.jsx)(t.code,{children:"searchAfter"})," approach. You can use ",(0,s.jsx)(t.code,{children:"-fieldName"})," for descending searches (optional)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"searchAfter"})}),(0,s.jsx)(t.td,{children:"You can use this instead of offset to get past the 10,000 paging result record limit, passing the last value(s) of your sort fields from the previous result set into the next result set until you get the total number of results or the end of results (optional)."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"example-of-paginating-search-results",children:"Example of Paginating Search Results"}),"\n",(0,s.jsxs)(t.p,{children:["Here is an example of a search API call with ",(0,s.jsx)(t.code,{children:"searchAfter"})," paging. The first query will get the first set of results. The default limit for search is 10,000, which is different from other collection endpoints. For this example, the query is set to page 100 records at a time. Paginating search queries also requires the ",(0,s.jsx)(t.code,{children:"sort"})," property to be set to ",(0,s.jsx)(t.code,{children:"id"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"POST"})," ",(0,s.jsx)(t.code,{children:"https://{tenant}.api.identitynow.com/v3/search?limit=100&count=true"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "indices": ["identities"],\n  "query": {\n    "query": "*"\n  },\n  "sort": ["id"]\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This query will return 100 records. To get the next 100 records, find the last record's ",(0,s.jsx)(t.code,{children:"id"})," and use it in the next query's ",(0,s.jsx)(t.code,{children:"searchAfter"})," property."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"POST"})," ",(0,s.jsx)(t.code,{children:"https://{tenant}.api.identitynow.com/v3/search?limit=100&count=true"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "indices": ["identities"],\n  "query": {\n    "query": "*"\n  },\n  "sort": ["id"],\n  "searchAfter": ["2c9180835d38ca0c015d606b50851b1e"]\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"This will get the next 100 records in the search query. Repeat this process until no more records return."}),"\n",(0,s.jsx)(t.h2,{id:"filtering-results",children:"Filtering Results"}),"\n",(0,s.jsxs)(t.p,{children:["Any collection with a ",(0,s.jsx)(t.code,{children:"filters"})," parameter supports filtering. This means that an item is only included in the returned array if the filters expression evaluates to true for that item. Check the available request parameters for the collection endpoint you are using to see if it supports filtering."]}),"\n",(0,s.jsx)(t.h3,{id:"data-types",children:"Data Types"}),"\n",(0,s.jsx)(t.p,{children:"Filter expressions are applicable to fields of the following types:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Numeric"}),"\n",(0,s.jsxs)(t.li,{children:["Boolean: either ",(0,s.jsx)(t.strong,{children:"true"})," or ",(0,s.jsx)(t.strong,{children:"false"})]}),"\n",(0,s.jsx)(t.li,{children:"Strings. Enumerated values are a special case of this."}),"\n",(0,s.jsxs)(t.li,{children:["Date-time. In V3, all date time values are in ISO-8601 format, as specified in ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc3339",children:"RFC 3339 - Date and Time on the Internet: Timestamps"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"filter-syntax",children:"Filter Syntax"}),"\n",(0,s.jsx)(t.p,{children:"The V3 filter syntax is similar to, but not exactly the same as, that specified by the SCIM standard. These are some key differences:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A slightly different set of supported operators"}),"\n",(0,s.jsx)(t.li,{children:'Case-sensitivity of operators. All V3 filter operators are in lowercase; specifying "EQ" instead of "eq" is not allowed.'}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"primitive-operators",children:"Primitive Operators"}),"\n",(0,s.jsx)(t.p,{children:"These filter operators apply directly to fields and their values:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Operator"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ca"})}),(0,s.jsx)(t.td,{children:"True if the collection-valued field contains all the listed values."}),(0,s.jsx)(t.td,{children:'groups ca ("Venezia","Firenze")'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"co"})}),(0,s.jsx)(t.td,{children:"True if the value of the field contains the specified value as a substring.(Applicable to string-valued fields only.)"}),(0,s.jsx)(t.td,{children:'name co "Rajesh"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"eq"})}),(0,s.jsx)(t.td,{children:"True if the value of the field indicated by the first operand is equal to the value specified by the second operand."}),(0,s.jsx)(t.td,{children:'identitySummary.id eq "2c9180846e85e4b8016eafeba20c1314"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ge"})}),(0,s.jsx)(t.td,{children:"True if the value of the field indicated by the first operand is greater or equal to the value specified by the second operand."}),(0,s.jsxs)(t.td,{children:["daysUntilEscalation ge 7",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),'name ge "Genaro"']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gt"})}),(0,s.jsx)(t.td,{children:"True if the value of the field indicated by the first operand is greater than the value specified by the second operand."}),(0,s.jsxs)(t.td,{children:["daysUntilEscalation gt 7",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),'name gt "Genaro"',(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"created gt 2018-12-18T23:05:55Z"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"in"})}),(0,s.jsx)(t.td,{children:"True if the field value is\xa0in the list of values."}),(0,s.jsx)(t.td,{children:'accountActivityItemId in ("2c9180846b0a0583016b299f210c1314","2c9180846b0a0581016b299e82560c1314")'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"le"})}),(0,s.jsx)(t.td,{children:"True if the value of the field indicated by the first operand is less or equal to the value specified by the second operand."}),(0,s.jsxs)(t.td,{children:["daysUntilEscalation le 7",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),'name le "Genaro"']})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lt"})}),(0,s.jsx)(t.td,{children:"True if the value of the field indicated by the first operand is\xa0less than the value specified by the second operand."}),(0,s.jsxs)(t.td,{children:["daysUntilEscalation lt 7",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),'name lt "Genaro"',(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"created lt 2018-12-18T23:05:55Z"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"ne"})}),(0,s.jsx)(t.td,{children:"True if the value of the field indicated by the first operand is not equal to the value specified by the second operand."}),(0,s.jsx)(t.td,{children:'type ne "ROLE"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"pr"})}),(0,s.jsx)(t.td,{children:"True if the field is\xa0present, that is, not null."}),(0,s.jsx)(t.td,{children:"pr accountRequestInfo"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"isnull"})}),(0,s.jsx)(t.td,{children:"True if the field is\xa0null."}),(0,s.jsx)(t.td,{children:"lastUsed isnull"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"sw"})}),(0,s.jsx)(t.td,{children:"True if the value of the field starts with the specified value.(Applicable to string-valued fields only.)"}),(0,s.jsx)(t.td,{children:'name sw "Rajesh"'})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"composite-operators",children:"Composite Operators"}),"\n",(0,s.jsx)(t.p,{children:"These operators are applied to other filter expressions:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Operator"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"and"})}),(0,s.jsx)(t.td,{children:"True if both the filter-valued operands are true."}),(0,s.jsx)(t.td,{children:'startDate gt 2018 and name sw "Genaro"'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"not"})}),(0,s.jsx)(t.td,{children:"True if the filter-valued operand is false."}),(0,s.jsx)(t.td,{children:'not groups ca ("Venezia","Firenze")'})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"or"})}),(0,s.jsx)(t.td,{children:"True if either of the filter-valued operands are true."}),(0,s.jsx)(t.td,{children:'startDate gt 2018 or name sw "Genaro"'})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"escaping-special-characters-in-a-filter",children:"Escaping Special Characters in a Filter"}),"\n",(0,s.jsxs)(t.p,{children:["Certain characters must be escaped before they can be used in a filter expression. For example, the following filter expression attempting to find all sources with the name ",(0,s.jsx)(t.code,{children:"#Employees"})," will produce a 400 error:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'/v3/sources?filters=name eq "#Employees"'})}),"\n",(0,s.jsx)(t.p,{children:"To properly escape this filter, do the following:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'/v3/sources?filters=name eq "%23Employees"'})}),"\n",(0,s.jsx)(t.p,{children:"If you are searching for a string containing double quotes, use the following escape sequence:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'/v3/sources/?filters=name eq "\\"Employees\\""'})}),"\n",(0,s.jsxs)(t.p,{children:["The following table lists the special characters that are incompatible with ",(0,s.jsx)(t.code,{children:"filters"})," and how to escape them."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Character"}),(0,s.jsx)(t.th,{children:"Escape Sequence"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"#"}),(0,s.jsx)(t.td,{children:"%23"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"%"}),(0,s.jsx)(t.td,{children:"%25"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"&"}),(0,s.jsx)(t.td,{children:"%26"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"\\"}),(0,s.jsx)(t.td,{children:"\\\\"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:'"'}),(0,s.jsx)(t.td,{children:'\\"'})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"known-limitations",children:"Known Limitations"}),"\n",(0,s.jsx)(t.p,{children:"Although filter expressions are a very general mechanism, individual API endpoints will only support filtering on a specific set of fields that are relevant to that endpoint, and will frequently only support a subset of operations for each field. For example, an endpoint might allow filtering on the name field but not support use of the co operator on that field. Consult the documentation for each API endpoint to determine what fields and operators can be used. Attempts to use an unsupported filter expression will result in a 400 Bad Request response."}),"\n",(0,s.jsx)(t.p,{children:"Examples:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:'/v3/public-identities?filters=email eq "john.doe@example.com"'})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:'/v3/public-identities?filters=firstname sw "john" or email sw "joe"'})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"not prop1 eq val1 or prop2 eq val2 and prop3 eq val3"})," is equivalent to ",(0,s.jsx)(t.code,{children:"(not (prop1 eq val1)) or ((prop2 eq val2) and (prop3 eq val3))"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"not (prop1 eq val1 or prop2 eq val2) and prop3 eq val3"})," is equivalent to ",(0,s.jsx)(t.code,{children:"(not ((prop1 eq val1) or (prop2 eq val2))) and (prop3 eq val3)"})]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Spaces in URLs must be escaped with ",(0,s.jsx)(t.code,{children:"%20"}),". Most programming languages, frameworks, libraries, and tools will do this for you, but some won't. In the event that your tool doesn't escape spaces, you will need to format your query as ",(0,s.jsx)(t.code,{children:'/v3/public-identities?filters=email%20eq%20"john.doe@example.com"'})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Double quotes may need to be escaped with ",(0,s.jsx)(t.code,{children:"%22"}),". Most programming languages, frameworks, libraries, and tools will do this for you, but some won't. In the event that your tool doesn't escape quotes, you will need to format your query as ",(0,s.jsx)(t.code,{children:"/v3/public-identities?filters=email%20eq%20%22john.doe@example.com%22"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["You must escape spaces in URLs with ",(0,s.jsx)(t.code,{children:"%20"}),". Most programming languages, frameworks, libraries, and tools do this for you, but some do not. In the event that your tool does not escape spaces, you must format your query as ",(0,s.jsx)(t.code,{children:'/v3/public-identities?filters=email%20eq%20"john.doe@example.com"'})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Unless explicitly noted otherwise, strings are compared lexicographically. Most comparisons are not case sensitive. Any situations where the comparisons are case sensitive will be called out."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Date-times are compared temporally; an earlier date-time is less than a later date-time."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The usual precedence and associativity of the composite operators applies, with ",(0,s.jsx)(t.strong,{children:"not"})," having higher priority than ",(0,s.jsx)(t.strong,{children:"and"}),", which in turn has higher priority than ",(0,s.jsx)(t.strong,{children:"or"}),". You can use parentheses to override this precedence."]}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"sorting-results",children:"Sorting Results"}),"\n",(0,s.jsxs)(t.p,{children:["Result sorting is supported with the standard ",(0,s.jsx)(t.code,{children:"sorters"}),' parameter. Its syntax is a set of comma-separated field names. You may optionally prefix each field name with a "-" character, indicating that the sort is descending based on the value of that field. Otherwise, the sort is ascending.']}),"\n",(0,s.jsxs)(t.p,{children:["For example, to sort primarily by ",(0,s.jsx)(t.strong,{children:"type"})," in ascending order, and secondarily by ",(0,s.jsx)(t.strong,{children:"modified date"})," in descending order, use ",(0,s.jsx)(t.code,{children:"sorters=type,-modified"})]}),"\n",(0,s.jsx)(t.h2,{id:"putting-it-all-together",children:"Putting it all Together"}),"\n",(0,s.jsx)(t.p,{children:"Pagination, filters, and sorters can be mixed and match to achieve the desired output for a given collection endpoint. Here are some examples:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:'/v3/public-identities?limit=20&filters=firstname eq "john"&sorters=-name'})," returns the first 20 identities that have a first name of John and are sorted in descending order by full name."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"/v3/account-activities?limit=10&offset=2&sorters=-created"})," sorts the results by descending created time, so the most recent activities appear first. The limit and offset returns the 3rd page of this sorted response with 10 records displayed."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);