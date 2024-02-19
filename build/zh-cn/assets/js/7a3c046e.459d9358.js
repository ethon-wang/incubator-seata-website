"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[63590],{54732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var c=n(74848),r=n(28453);const i={title:"Etcd3 \u914d\u7f6e\u4e2d\u5fc3",keywords:["Seata","Etcd3"],description:"Etcd3 \u914d\u7f6e\u4e2d\u5fc3\u3002"},s="Etcd3 \u914d\u7f6e\u4e2d\u5fc3",d={id:"user/configuration/etcd3",title:"Etcd3 \u914d\u7f6e\u4e2d\u5fc3",description:"Etcd3 \u914d\u7f6e\u4e2d\u5fc3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/configuration/etcd3.md",sourceDirName:"user/configuration",slug:"/user/configuration/etcd3",permalink:"/zh-cn/docs/v1.6/user/configuration/etcd3",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/configuration/etcd3.md",tags:[],version:"v1.6",frontMatter:{title:"Etcd3 \u914d\u7f6e\u4e2d\u5fc3",keywords:["Seata","Etcd3"],description:"Etcd3 \u914d\u7f6e\u4e2d\u5fc3\u3002"},sidebar:"docs",previous:{title:"Apollo \u914d\u7f6e\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.6/user/configuration/apollo"},next:{title:"Consul \u914d\u7f6e\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.6/user/configuration/consul"}},a={},o=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u589e\u52a0 Maven \u4f9d\u8d56",id:"\u589e\u52a0-maven-\u4f9d\u8d56",level:3},{value:"Client \u7aef\u914d\u7f6e\u4e2d\u5fc3",id:"client-\u7aef\u914d\u7f6e\u4e2d\u5fc3",level:3},{value:"Server \u7aef\u914d\u7f6e\u4e2d\u5fc3",id:"server-\u7aef\u914d\u7f6e\u4e2d\u5fc3",level:3},{value:"\u4e0a\u4f20\u914d\u7f6e\u81f3 Etcd3 \u914d\u7f6e\u4e2d\u5fc3",id:"\u4e0a\u4f20\u914d\u7f6e\u81f3-etcd3-\u914d\u7f6e\u4e2d\u5fc3",level:3},{value:"\u901a\u8fc7\u811a\u672c\u4e0a\u4f20\u914d\u7f6e\u5230 Etcd3",id:"\u901a\u8fc7\u811a\u672c\u4e0a\u4f20\u914d\u7f6e\u5230-etcd3",level:4}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"etcd3-\u914d\u7f6e\u4e2d\u5fc3",children:"Etcd3 \u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,c.jsx)(t.p,{children:"Etcd3 \u662f Seata \u7ec4\u4ef6\u4e2d\u91cd\u8981\u7684\u914d\u7f6e\u4e2d\u5fc3\u5b9e\u73b0."}),"\n",(0,c.jsx)(t.h2,{id:"\u9884\u5907\u5de5\u4f5c",children:"\u9884\u5907\u5de5\u4f5c"}),"\n",(0,c.jsxs)(t.p,{children:["\u5f53\u60a8\u5c06",(0,c.jsx)(t.code,{children:"Etcd3"}),"\u6574\u5408\u5230\u60a8\u7684 Seata \u5de5\u7a0b\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u540e\u53f0\u5df2\u7ecf\u542f\u52a8 Etcd3 Server \u670d\u52a1\u3002\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 Etcd3 \u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,c.jsx)(t.a,{href:"https://etcd.io/docs/v3.5/quickstart",children:"Etcd3 \u5feb\u901f\u5165\u95e8"}),"\u3002\u5efa\u8bae\u4f7f\u7528 Etcd3 ",(0,c.jsx)(t.code,{children:"3.5.0"})," \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u3002"]}),"\n",(0,c.jsx)(t.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,c.jsx)(t.p,{children:"Seata \u878d\u5408 Etcd3 \u6ce8\u518c\u4e2d\u5fc3\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a\u201c\u589e\u52a0 Maven \u4f9d\u8d56\u201d\u4ee5\u53ca\u201c\u914d\u7f6e\u6ce8\u518c\u4e2d\u5fc3\u201c\u3002"}),"\n",(0,c.jsx)(t.h3,{id:"\u589e\u52a0-maven-\u4f9d\u8d56",children:"\u589e\u52a0 Maven \u4f9d\u8d56"}),"\n",(0,c.jsxs)(t.p,{children:["\u9996\u5148\uff0c\u60a8\u9700\u8981\u5c06 ",(0,c.jsx)(t.code,{children:"jetcd-core"})," \u7684 Maven \u4f9d\u8d56\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee ",(0,c.jsx)(t.code,{children:"pom.xml"})," \u6587\u4ef6\u4e2d\uff0c\u5efa\u8bae\u4f7f\u7528 jetcd-core ",(0,c.jsx)(t.code,{children:"0.3.0+"}),",",(0,c.jsx)(t.code,{children:"spring-cloud-starter-alibaba-seata"}),"\u7684\u7248\u672c\u4e0e\u5bf9\u5e94\u5fae\u670d\u52a1\u7248\u672c\u5bf9\u5e94\u5173\u7cfb\u8bf7\u53c2\u8003",(0,c.jsx)(t.a,{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",children:"\u7248\u672c\u8bf4\u660e"})]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-xml",children:"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>\u6700\u65b0\u7248</version>\n</dependency>\n        \x3c!-- Etcd3 \u5ba2\u6237\u7aef\u4f9d\u8d56 --\x3e\n<dependency>\n    <groupId>io.etcd</groupId>\n    <artifactId>jetcd-core</artifactId>\n    <version>0.3.0\u53ca\u4ee5\u4e0a</version>\n</dependency>\n"})}),"\n",(0,c.jsx)(t.h3,{id:"client-\u7aef\u914d\u7f6e\u4e2d\u5fc3",children:"Client \u7aef\u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,c.jsxs)(t.p,{children:["\u5728 ",(0,c.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml",children:(0,c.jsx)(t.strong,{children:"application.yml"})})," \u4e2d\u52a0\u5165\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,c.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/client",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-yaml",children:"seata:\n  config:\n    type: etcd3\n    etcd3:\n      server-addr: http://localhost:2379\n"})}),"\n",(0,c.jsx)(t.h3,{id:"server-\u7aef\u914d\u7f6e\u4e2d\u5fc3",children:"Server \u7aef\u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,c.jsxs)(t.p,{children:["\u5728 ",(0,c.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/server/config/registry.conf",children:"registry.conf"})," \u4e2d\u52a0\u5165\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,c.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/server",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:'config {\n  type = "etcd3"\n\n  etcd3 {\n    serverAddr = "http://localhost:2379"\n  }\n}\n\n'})}),"\n",(0,c.jsx)(t.h3,{id:"\u4e0a\u4f20\u914d\u7f6e\u81f3-etcd3-\u914d\u7f6e\u4e2d\u5fc3",children:"\u4e0a\u4f20\u914d\u7f6e\u81f3 Etcd3 \u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,c.jsx)(t.h4,{id:"\u901a\u8fc7\u811a\u672c\u4e0a\u4f20\u914d\u7f6e\u5230-etcd3",children:"\u901a\u8fc7\u811a\u672c\u4e0a\u4f20\u914d\u7f6e\u5230 Etcd3"}),"\n",(0,c.jsxs)(t.p,{children:["\u53c2\u8003",(0,c.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/config-center",children:"https://github.com/apache/incubator-seata/tree/develop/script/config-center"})," \u7684 config.txt \u5e76\u4fee\u6539,\u4e4b\u540e\u8fd0\u884c\u4ed3\u5e93\u4e2d\u63d0\u4f9b\u7684 etcd3 \u811a\u672c,\u5c06\u4fe1\u606f\u63d0\u4ea4\u5230 Etcd3 \u670d\u52a1\u7aef,\u5982\u679c\u6709\u9700\u8981\u66f4\u6539,\u53ef\u76f4\u63a5\u901a\u8fc7\u63a7\u5236\u53f0\u66f4\u6539."]}),"\n",(0,c.jsx)(t.p,{children:"eg: sh ${SEATAPATH}/script/config-center/etcd3/etcd3-config.sh -h localhost -p 2379"}),"\n",(0,c.jsxs)(t.p,{children:["\u8be6\u7ec6\u89e3\u6790\u53c2\u8003 ",(0,c.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/README.md",children:"Readme \u6587\u6863"})]}),"\n",(0,c.jsx)(t.p,{children:"\u968f\u540e,\u542f\u52a8 Seata-Server \u548c Client\uff08\u4e1a\u52a1\u4fa7\uff09\u5e94\u7528\uff0c\u5982\u679c\u5728\u5bfc\u5165\u914d\u7f6e\u81f3 Etcd3 \u524d\uff0c\u5df2\u542f\u52a8 Seata-Server \u548c Client\uff08\u4e1a\u52a1\u4fa7\uff09\u5e94\u7528\u9700\u8981\u8fdb\u884c\u91cd\u542f\u3002"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>d});var c=n(96540);const r={},i=c.createContext(r);function s(e){const t=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),c.createElement(i.Provider,{value:t},e.children)}}}]);