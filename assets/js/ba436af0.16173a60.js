"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[76318],{25667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(74848),s=r(28453);const i={title:"Introduction",keywords:["Seata","Registry Center"],description:"Registry Center Introduction."},o="Introduction",c={id:"user/registry/index",title:"Introduction",description:"Registry Center Introduction.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/registry/index.md",sourceDirName:"user/registry",slug:"/user/registry/",permalink:"/docs/v1.2/user/registry/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/registry/index.md",tags:[],version:"v1.2",frontMatter:{title:"Introduction",keywords:["Seata","Registry Center"],description:"Registry Center Introduction."},sidebar:"docs",previous:{title:"Zookeeper Configuration Center",permalink:"/docs/v1.2/user/configuration/zookeeper"},next:{title:"Nacos Registry Center",permalink:"/docs/v1.2/user/registry/nacos"}},a={},d=[];function l(e){const t={h1:"h1",li:"li",ol:"ol",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'What is a registry center? The registry center can be considered as the "address book" in a microservices architecture, which records the mapping relationship between services and service addresses. In a distributed architecture, services are registered here, and when a service needs to call other services, it looks up the address of the service here and makes the call. For example, the Seata client (TM, RM) discovers the address of the Seata server (TC) cluster and communicates with each other.'}),"\n",(0,n.jsx)(t.li,{children:"What is the difference between Seata's registry center and the registry centers of Dubbo and Spring Cloud? In a broad sense, there is no difference. The only difference is that the registry centers of Dubbo and Spring Cloud only work for their own components, while Seata's registry center also works for Seata itself. (Note: The registry centers of Dubbo and Spring Cloud are not related to Seata)"}),"\n",(0,n.jsxs)(t.li,{children:["What registry centers does Seata support?","\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Eureka"}),"\n",(0,n.jsx)(t.li,{children:"Consul"}),"\n",(0,n.jsx)(t.li,{children:"Nacos"}),"\n",(0,n.jsx)(t.li,{children:"Etcd"}),"\n",(0,n.jsx)(t.li,{children:"ZooKeeper"}),"\n",(0,n.jsx)(t.li,{children:"Sofa"}),"\n",(0,n.jsx)(t.li,{children:"Redis"}),"\n",(0,n.jsx)(t.li,{children:"File (direct connection)"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);