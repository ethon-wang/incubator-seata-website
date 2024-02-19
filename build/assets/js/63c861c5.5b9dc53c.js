"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[94684],{31238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var n=r(74848),i=r(28453);const s={title:"Etcd3 Registry Center",keywords:["Seata","Etcd3","Registry Center"],description:"Etcd3 Registry Center."},c="Etcd3 Registry Center",o={id:"user/registry/etcd3",title:"Etcd3 Registry Center",description:"Etcd3 Registry Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.4/user/registry/etcd3.md",sourceDirName:"user/registry",slug:"/user/registry/etcd3",permalink:"/docs/v1.4/user/registry/etcd3",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.4/user/registry/etcd3.md",tags:[],version:"v1.4",frontMatter:{title:"Etcd3 Registry Center",keywords:["Seata","Etcd3","Registry Center"],description:"Etcd3 Registry Center."},sidebar:"docs",previous:{title:"Eureka Registry Center",permalink:"/docs/v1.4/user/registry/eureka"},next:{title:"Consul Registry Center",permalink:"/docs/v1.4/user/registry/consul"}},d={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Adding Maven Dependencies",id:"adding-maven-dependencies",level:3},{value:"Configuring the Registry Center on the Client Side",id:"configuring-the-registry-center-on-the-client-side",level:3},{value:"Configuring the Registry Center on the Server Side",id:"configuring-the-registry-center-on-the-server-side",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"etcd3-registry-center",children:"Etcd3 Registry Center"}),"\n",(0,n.jsx)(t.p,{children:"Etcd3 is an important implementation of the registry center in the Seata component."}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.p,{children:["Before integrating ",(0,n.jsx)(t.code,{children:"Etcd3"})," into your Seata project, make sure that the Etcd3 Server service has been started in the background. If you are not familiar with the basic usage of Etcd3, you can refer to the ",(0,n.jsx)(t.a,{href:"https://etcd.io/docs/v3.5/quickstart",children:"Etcd3 Quickstart"})," for a preliminary understanding. It is recommended to use Etcd3 version ",(0,n.jsx)(t.code,{children:"3.5.0"})," or above."]}),"\n",(0,n.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsx)(t.p,{children:'The steps to integrate Etcd3 registry center into Seata are very simple, and can be roughly divided into "Adding Maven Dependencies" and "Configuring the Registry Center".'}),"\n",(0,n.jsx)(t.h3,{id:"adding-maven-dependencies",children:"Adding Maven Dependencies"}),"\n",(0,n.jsxs)(t.p,{children:["First, you need to add the Maven dependency of ",(0,n.jsx)(t.code,{children:"jetcd-core"})," to your project's ",(0,n.jsx)(t.code,{children:"pom.xml"})," file. It is recommended to use jetcd-core version ",(0,n.jsx)(t.code,{children:"0.3.0+"}),". The version relationship between ",(0,n.jsx)(t.code,{children:"spring-cloud-starter-alibaba-seata"})," and the corresponding microservice version can be found in the ",(0,n.jsx)(t.a,{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",children:"Version Description"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version</version>\n</dependency>\n        \x3c!-- Etcd3 Client Dependency --\x3e\n<dependency>\n    <groupId>io.etcd</groupId>\n    <artifactId>jetcd-core</artifactId>\n    <version>0.3.0 or above</version>\n</dependency>\n\n"})}),"\n",(0,n.jsx)(t.h3,{id:"configuring-the-registry-center-on-the-client-side",children:"Configuring the Registry Center on the Client Side"}),"\n",(0,n.jsxs)(t.p,{children:["Add the corresponding configuration to ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml",children:(0,n.jsx)(t.strong,{children:"application.yml"})}),", and refer to the ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/client",children:"Configuration Reference"})," for other configurations."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"seata:\n  tx-service-group: default_tx_group\n  service:\n    vgroup-mapping:\n      my_test_tx_group: seata-server # Configure the value corresponding to registry.eureka.application in the server-side configuration here\n  registry:\n    type: etcd3\n    etcd3:\n      server-addr: http://localhost:2379\n"})}),"\n",(0,n.jsx)(t.h3,{id:"configuring-the-registry-center-on-the-server-side",children:"Configuring the Registry Center on the Server Side"}),"\n",(0,n.jsxs)(t.p,{children:["Add the corresponding configuration to ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/server/config/registry.conf",children:"registry.conf"}),", and refer to the ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/server",children:"Configuration Reference"})," for other configurations."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'registry {\n  type = "etcd3"\n \n  etcd3 {\n    serverAddr = "http://localhost:2379"\n  }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"After the configuration is completed, start the application to experience the Seata service."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>o});var n=r(96540);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);