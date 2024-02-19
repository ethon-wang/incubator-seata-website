"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[59009],{33670:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=n(74848),i=n(28453);const s={title:"Eureka Registry Center",keywords:["Seata","Eureka","Registry Center"],description:"Eureka Registry Center."},a="Eureka Registry",o={id:"user/registry/eureka",title:"Eureka Registry Center",description:"Eureka Registry Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.8/user/registry/eureka.md",sourceDirName:"user/registry",slug:"/user/registry/eureka",permalink:"/docs/v1.8/user/registry/eureka",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.8/user/registry/eureka.md",tags:[],version:"v1.8",frontMatter:{title:"Eureka Registry Center",keywords:["Seata","Eureka","Registry Center"],description:"Eureka Registry Center."},sidebar:"docs",previous:{title:"Nacos Registry Center",permalink:"/docs/v1.8/user/registry/nacos"},next:{title:"Etcd3 Registry Center",permalink:"/docs/v1.8/user/registry/etcd3"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Adding Maven Dependencies",id:"adding-maven-dependencies",level:3},{value:"Configuring the Registry on the Client Side",id:"configuring-the-registry-on-the-client-side",level:3},{value:"Server-side configuration of the registry center",id:"server-side-configuration-of-the-registry-center",level:3}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"eureka-registry",children:"Eureka Registry"}),"\n",(0,t.jsx)(r.p,{children:"Eureka is an important registry implementation in the Seata component."}),"\n",(0,t.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(r.p,{children:["Before integrating ",(0,t.jsx)(r.code,{children:"Eureka"})," into your Seata project, make sure that the Eureka Server service is already running in the background. If you are not familiar with the basic usage of Eureka, you can refer to the ",(0,t.jsx)(r.a,{href:"https://projects.spring.io/spring-cloud/spring-cloud.html#_service_discovery_eureka_clients",children:"Eureka Quick Start"})," for reference. It is recommended to use Eureka version ",(0,t.jsx)(r.code,{children:"2.X"})," or above."]}),"\n",(0,t.jsx)(r.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(r.p,{children:'The steps to integrate Eureka registry into Seata are very simple, and can be roughly divided into "Adding Maven Dependencies" and "Configuring the Registry".'}),"\n",(0,t.jsx)(r.h3,{id:"adding-maven-dependencies",children:"Adding Maven Dependencies"}),"\n",(0,t.jsxs)(r.p,{children:["First, you need to add the Maven dependency of ",(0,t.jsx)(r.code,{children:"spring-cloud-starter-netflix-eureka-client"})," to your project's ",(0,t.jsx)(r.code,{children:"pom.xml"})," file. It is recommended to use Seata ",(0,t.jsx)(r.code,{children:"1.4.0+"}),". For the version relationship between ",(0,t.jsx)(r.code,{children:"spring-cloud-starter-alibaba-seata"})," and the corresponding microservice version, please refer to the ",(0,t.jsx)(r.a,{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",children:"Version Description"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:"\x3c!-- seata dependency --\x3e\n<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version</version>\n</dependency>\n<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-seata</artifactId>\n    <version>2.1.2.RELEASE and above</version>\n    <exclusions>\n        <exclusion>\n            <groupId>io.seata</groupId>\n            <artifactId>seata-spring-boot-starter</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\n        \x3c!-- eureka client dependency --\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    <version>2.0.0.RELEASE and above</version>\n</dependency>\n"})}),"\n",(0,t.jsx)(r.h3,{id:"configuring-the-registry-on-the-client-side",children:"Configuring the Registry on the Client Side"}),"\n",(0,t.jsxs)(r.p,{children:["Add the corresponding configuration to ",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-seata/blob/1.8.0/script/client/spring/application.yml",children:(0,t.jsx)(r.strong,{children:"application.yml"})}),", and refer to the ",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-seata/tree/1.8.0/script/client",children:"Configuration Reference"})," for other configurations."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"seata:\n  tx-service-group: default_tx_group\n  service:\n    vgroup-mapping:\n      default_tx_group: seata-server # Configure the corresponding value of registry.eureka.application on the Server side here\n  registry:\n    type: eureka\n    eureka:\n      service-url: http://localhost:8761/eureka\n"})}),"\n",(0,t.jsx)(r.h3,{id:"server-side-configuration-of-the-registry-center",children:"Server-side configuration of the registry center"}),"\n",(0,t.jsxs)(r.p,{children:["Add the corresponding configuration center in ",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-seata/blob/1.8.0/server/src/main/resources/application.yml",children:"conf/application.yml"}),", and refer to the ",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-seata/blob/1.8.0/server/src/main/resources/application.example.yml",children:"configuration"})," for the rest."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"seata:\n  registry:\n    type: eureka\n    eureka:\n      service-url: http://localhost:8761/eureka\n      application: seata-server\n      weight: 1\n"})}),"\n",(0,t.jsx)(r.p,{children:"After that, when Seata-Server is started, the Server-side service will appear in the registry center list in the Eureka console. After configuring the Client, you can start the application to experience the Seata service."})]})}function l(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var t=n(96540);const i={},s=t.createContext(i);function a(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);