"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[66489],{39176:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=t(74848),s=t(28453);const o={title:"Seata XA Mode",keywords:["Seata","XA"],description:"User guide for Seata XA mode"},i="Seata XA Mode",r={id:"user/mode/xa",title:"Seata XA Mode",description:"User guide for Seata XA mode",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/mode/xa.md",sourceDirName:"user/mode",slug:"/user/mode/xa",permalink:"/docs/v1.2/user/mode/xa",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/mode/xa.md",tags:[],version:"v1.2",frontMatter:{title:"Seata XA Mode",keywords:["Seata","XA"],description:"User guide for Seata XA mode"},sidebar:"docs",previous:{title:"Seata Saga Mode",permalink:"/docs/v1.2/user/mode/saga"},next:{title:"Transaction Group Introduction",permalink:"/docs/v1.2/user/txgroup/transaction-group"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Overall Mechanism",id:"overall-mechanism",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Getting Started",id:"getting-started",level:2}];function l(e){const a={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"seata-xa-mode",children:"Seata XA Mode"}),"\n",(0,n.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(a.p,{children:"XA Mode is a transaction mode supported from version 1.2. The XA specification is a Distributed Transaction Processing (DTP) standard defined by the X/Open organization. Seata XA Mode utilizes the support of the XA protocol by transaction resources (databases, message services, etc.) to manage branch transactions using the mechanisms of the XA protocol."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:"https://img.alicdn.com/tfs/TB1hSpccIVl614jSZKPXXaGjpXa-1330-924.png",alt:"Overview of a global transaction"})}),"\n",(0,n.jsxs)(a.p,{children:["In this document, we will focus on the usage of Seata XA Mode. If you are interested in the principles behind XA Mode, please read the corresponding ",(0,n.jsx)(a.a,{href:"../../dev/mode/xa-mode",children:"Developer Guide"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"advantages",children:"Advantages"}),"\n",(0,n.jsx)(a.p,{children:"Unlike other transaction modes supported by Seata, the XA protocol requires transaction resources themselves to support the specification and protocol. This ensures effective isolation of data from any perspective, meeting global data consistency. Some additional advantages include:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Non-intrusive to business: Similar to AT Mode, XA Mode is non-intrusive to business, not imposing additional burdens on application design and development."}),"\n",(0,n.jsx)(a.li,{children:"Wide database support: The XA protocol is widely supported by mainstream relational databases, requiring no additional adaptation for use."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"disadvantages",children:"Disadvantages"}),"\n",(0,n.jsx)(a.p,{children:"After XA prepare, the branch transaction enters a blocking stage and must wait for XA commit or XA rollback. The transaction resource is not released for a long time, leading to a long lock cycle. Additionally, intervention at the application layer is not possible, resulting in poor performance."}),"\n",(0,n.jsx)(a.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsx)(a.p,{children:"Suitable for migrating old applications to the Seata platform based on the XA protocol. Using XA Mode provides a smoother transition, especially for database applications not adapted to AT Mode."}),"\n",(0,n.jsx)(a.h2,{id:"overall-mechanism",children:"Overall Mechanism"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Execution Phase:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["Rollback Capability: Business SQL operations are performed within the XA branch, and the support of resources for the XA protocol ensures ",(0,n.jsx)(a.em,{children:"rollback capability"}),"."]}),"\n",(0,n.jsxs)(a.li,{children:["Persistence: After the XA branch is completed, XA prepare is executed. Similarly, the support of resources for the XA protocol ensures ",(0,n.jsx)(a.em,{children:"persistence"})," (i.e., any subsequent accidents will not prevent rollback)."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["Completion Phase:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Branch Commit: Execute XA branch commit."}),"\n",(0,n.jsx)(a.li,{children:"Branch Rollback: Execute XA branch rollback."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,n.jsxs)(a.p,{children:["Using XA Mode is almost identical to AT Mode in terms of usage. The only difference lies in the replacement of the data source proxy: use ",(0,n.jsx)(a.code,{children:"DataSourceProxyXA"})," instead of ",(0,n.jsx)(a.code,{children:"DataSourceProxy"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'public class DataSourceProxy {\n    @Bean("dataSourceProxy")\n    public DataSource dataSource(DruidDataSource druidDataSource) {\n        // DataSourceProxyXA for XA mode\n        return new DataSourceProxyXA(druidDataSource);\n        // DataSourceProxy for AT mode\n        // return new DataSourceProxy(druidDataSource);\n    }\n}\n'})}),"\n",(0,n.jsx)(a.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(a.p,{children:["Follow the examples in ",(0,n.jsx)(a.a,{href:"https://github.com/apache/incubator-seata-samples/tree/master/tcc",children:"seata-samples/xa"})," for experimentation."]})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>r});var n=t(96540);const s={},o=n.createContext(s);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);