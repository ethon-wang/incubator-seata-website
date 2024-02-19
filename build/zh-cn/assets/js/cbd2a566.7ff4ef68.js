"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[90824],{64140:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=n(74848),a=n(28453);const s={title:"Eureka \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Eureka"],description:"Eureka \u6ce8\u518c\u4e2d\u5fc3\u3002"},i="Eureka \u6ce8\u518c\u4e2d\u5fc3",c={id:"user/registry/eureka",title:"Eureka \u6ce8\u518c\u4e2d\u5fc3",description:"Eureka \u6ce8\u518c\u4e2d\u5fc3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/user/registry/eureka.md",sourceDirName:"user/registry",slug:"/user/registry/eureka",permalink:"/zh-cn/docs/v1.3/user/registry/eureka",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/user/registry/eureka.md",tags:[],version:"v1.3",frontMatter:{title:"Eureka \u6ce8\u518c\u4e2d\u5fc3",keywords:["Seata","Eureka"],description:"Eureka \u6ce8\u518c\u4e2d\u5fc3\u3002"},sidebar:"docs",previous:{title:"Nacos \u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.3/user/registry/nacos"},next:{title:"Etcd3 \u6ce8\u518c\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.3/user/registry/etcd3"}},o={},d=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u589e\u52a0 Maven \u4f9d\u8d56",id:"\u589e\u52a0-maven-\u4f9d\u8d56",level:3},{value:"Client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",level:3}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"eureka-\u6ce8\u518c\u4e2d\u5fc3",children:"Eureka \u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,t.jsx)(r.p,{children:"Eureka\u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684\u6ce8\u518c\u4e2d\u5fc3\u5b9e\u73b0."}),"\n",(0,t.jsx)(r.h2,{id:"\u9884\u5907\u5de5\u4f5c",children:"\u9884\u5907\u5de5\u4f5c"}),"\n",(0,t.jsxs)(r.p,{children:["\u5f53\u60a8\u5c06",(0,t.jsx)(r.code,{children:"Eureka"}),"\u6574\u5408\u5230\u60a8\u7684 Seata\u5de5\u7a0b\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u540e\u53f0\u5df2\u7ecf\u542f\u52a8 Eureka Server\u670d\u52a1\u3002\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 Eureka\u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,t.jsx)(r.a,{href:"https://projects.spring.io/spring-cloud/spring-cloud.html#_service_discovery_eureka_clients",children:"Eureka\u5feb\u901f\u5165\u95e8"}),"\u3002\u5efa\u8bae\u4f7f\u7528 Eureka ",(0,t.jsx)(r.code,{children:"2.X"})," \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,t.jsx)(r.p,{children:"Seata \u878d\u5408 Eureka\u6ce8\u518c\u4e2d\u5fc3\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a\u201c\u589e\u52a0 Maven \u4f9d\u8d56\u201d\u4ee5\u53ca\u201c\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3\u201c\u3002"}),"\n",(0,t.jsx)(r.h3,{id:"\u589e\u52a0-maven-\u4f9d\u8d56",children:"\u589e\u52a0 Maven \u4f9d\u8d56"}),"\n",(0,t.jsxs)(r.p,{children:["\u9996\u5148\uff0c\u60a8\u9700\u8981\u5c06 ",(0,t.jsx)(r.code,{children:"spring-cloud-starter-netflix-eureka-client"})," \u7684 Maven \u4f9d\u8d56\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee ",(0,t.jsx)(r.code,{children:"pom.xml"})," \u6587\u4ef6\u4e2d\uff0c",(0,t.jsx)(r.code,{children:"spring-cloud-starter-alibaba-seata"}),"\u7684\u7248\u672c\u4e0e\u5bf9\u5e94\u5fae\u670d\u52a1\u7248\u672c\u5bf9\u5e94\u5173\u7cfb\u8bf7\u53c2\u8003",(0,t.jsx)(r.a,{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",children:"\u7248\u672c\u8bf4\u660e"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-xml",children:"\x3c!-- seata \u4f9d\u8d56 --\x3e\n<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>\u6700\u65b0\u7248</version>\n</dependency>\n<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-seata</artifactId>\n    <version>2.1.2.RELEASE\u53ca\u4ee5\u4e0a\u7248\u672c</version>\n    <exclusions>\n        <exclusion>\n            <groupId>io.seata</groupId>\n            <artifactId>seata-spring-boot-starter</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\n        \x3c!-- eureka \u5ba2\u6237\u7aef\u4f9d\u8d56 --\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n    <version>2.0.0.RELEASE\u53ca\u4ee5\u4e0a\u7248\u672c</version>\n</dependency>\n"})}),"\n",(0,t.jsx)(r.h3,{id:"client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",children:"Client\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,t.jsxs)(r.p,{children:["\u5728 ",(0,t.jsx)(r.code,{children:"application.yml"})," \u4e2d\u52a0\u5165\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-seata/tree/1.3.0/script/client",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"seata:\n  tx-service-group: my_test_tx_group\n  service:\n    vgroup-mapping:\n      my_test_tx_group: seata-server # \u6b64\u5904\u914d\u7f6e\u5bf9\u5e94Server\u7aef\u914d\u7f6eregistry.eureka.application\u7684\u503c\n  registry:\n    type: eureka\n    eureka:\n      service-url: http://localhost:8761/eureka\n"})}),"\n",(0,t.jsx)(r.h3,{id:"server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3",children:"Server\u7aef\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3"}),"\n",(0,t.jsxs)(r.p,{children:["\u5728 ",(0,t.jsx)(r.code,{children:"conf/registry.conf"})," \u4e2d\u52a0\u5165\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-seata/blob/1.3.0/server/src/main/resources/file.conf.example",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'registry {\n  type = "eureka"\n \n  eureka {\n    serviceUrl = "http://localhost:8761/eureka"\n    application = "seata-server"\n    weight = "1"\n  }\n}\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u968f\u540e,\u542f\u52a8 Seata-Server \u540e\uff0c\u4f1a\u53d1\u73b0Server\u7aef\u7684\u670d\u52a1\u51fa\u73b0\u5728 Eureka\u63a7\u5236\u53f0\u4e2d\u7684\u6ce8\u518c\u4e2d\u5fc3\u5217\u8868\u4e2d. Client \u914d\u7f6e\u5b8c\u6210\u540e\u542f\u52a8\u5e94\u7528\u5c31\u53ef\u4ee5\u6b63\u5f0f\u4f53\u9a8c Seata \u670d\u52a1\u3002"})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(96540);const a={},s=t.createContext(a);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);