"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[47687],{57606:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var l=n(74848),t=n(28453);const a={title:"Apollo \u914d\u7f6e\u4e2d\u5fc3",keywords:["Seata","Apollo"],description:"Apollo \u914d\u7f6e\u4e2d\u5fc3\u3002"},c="Apollo \u914d\u7f6e\u4e2d\u5fc3",r={id:"user/configuration/apollo",title:"Apollo \u914d\u7f6e\u4e2d\u5fc3",description:"Apollo \u914d\u7f6e\u4e2d\u5fc3\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.8/user/configuration/apollo.md",sourceDirName:"user/configuration",slug:"/user/configuration/apollo",permalink:"/zh-cn/docs/v1.8/user/configuration/apollo",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.8/user/configuration/apollo.md",tags:[],version:"v1.8",frontMatter:{title:"Apollo \u914d\u7f6e\u4e2d\u5fc3",keywords:["Seata","Apollo"],description:"Apollo \u914d\u7f6e\u4e2d\u5fc3\u3002"},sidebar:"docs",previous:{title:"Nacos \u914d\u7f6e\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.8/user/configuration/nacos"},next:{title:"Etcd3 \u914d\u7f6e\u4e2d\u5fc3",permalink:"/zh-cn/docs/v1.8/user/configuration/etcd3"}},i={},s=[{value:"\u9884\u5907\u5de5\u4f5c",id:"\u9884\u5907\u5de5\u4f5c",level:2},{value:"\u5feb\u901f\u4e0a\u624b",id:"\u5feb\u901f\u4e0a\u624b",level:2},{value:"\u589e\u52a0 Maven \u4f9d\u8d56",id:"\u589e\u52a0-maven-\u4f9d\u8d56",level:3},{value:"Client \u7aef\u914d\u7f6e\u4e2d\u5fc3",id:"client-\u7aef\u914d\u7f6e\u4e2d\u5fc3",level:3},{value:"Server \u7aef\u914d\u7f6e\u4e2d\u5fc3",id:"server-\u7aef\u914d\u7f6e\u4e2d\u5fc3",level:3},{value:"\u4e0a\u4f20\u914d\u7f6e\u81f3 Apollo \u914d\u7f6e\u4e2d\u5fc3",id:"\u4e0a\u4f20\u914d\u7f6e\u81f3-apollo-\u914d\u7f6e\u4e2d\u5fc3",level:3}];function p(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.h1,{id:"apollo-\u914d\u7f6e\u4e2d\u5fc3",children:"Apollo \u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,l.jsx)(o.h2,{id:"\u9884\u5907\u5de5\u4f5c",children:"\u9884\u5907\u5de5\u4f5c"}),"\n",(0,l.jsxs)(o.p,{children:["\u5f53\u60a8\u5c06",(0,l.jsx)(o.code,{children:"apollo-client"}),"\u6574\u5408\u5230\u60a8\u7684 Seata \u5de5\u7a0b\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u540e\u53f0\u5df2\u7ecf\u542f\u52a8 Apollo \u670d\u52a1\u3002\u5982\u679c\u60a8\u5c1a\u4e14\u4e0d\u719f\u6089 Apollo \u7684\u57fa\u672c\u4f7f\u7528\u7684\u8bdd\uff0c\u53ef\u5148\u884c\u53c2\u8003 ",(0,l.jsx)(o.a,{href:"https://www.apolloconfig.com/",children:"Apollo \u5feb\u901f\u5165\u95e8"}),"\u3002\u5efa\u8bae\u4f7f\u7528 Apollo ",(0,l.jsx)(o.code,{children:"1.6.0"})," \u53ca\u4ee5\u4e0a\u7684\u7248\u672c\u3002"]}),"\n",(0,l.jsx)(o.h2,{id:"\u5feb\u901f\u4e0a\u624b",children:"\u5feb\u901f\u4e0a\u624b"}),"\n",(0,l.jsx)(o.p,{children:"Seata \u878d\u5408 Apollo \u914d\u7f6e\u4e2d\u5fc3\u7684\u64cd\u4f5c\u6b65\u9aa4\u975e\u5e38\u7b80\u5355\uff0c\u5927\u81f4\u6b65\u9aa4\u53ef\u5206\u4e3a\u201c\u589e\u52a0 Maven \u4f9d\u8d56\u201d\u4ee5\u53ca\u201c\u914d\u7f6e Apollo \u914d\u7f6e\u4e2d\u5fc3\u201c\u548c\u63d0\u4ea4\u914d\u7f6e\u81f3 Apollo-Server\u3002"}),"\n",(0,l.jsx)(o.h3,{id:"\u589e\u52a0-maven-\u4f9d\u8d56",children:"\u589e\u52a0 Maven \u4f9d\u8d56"}),"\n",(0,l.jsxs)(o.p,{children:["\u9996\u5148\uff0c\u60a8\u9700\u8981\u5c06 ",(0,l.jsx)(o.code,{children:"apollo-client"})," \u7684 Maven \u4f9d\u8d56\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee ",(0,l.jsx)(o.code,{children:"pom.xml"})," \u6587\u4ef6\u4e2d\uff0c\u5efa\u8bae\u4f7f\u7528 Seata ",(0,l.jsx)(o.code,{children:"1.4.0+"}),"\uff1a"]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-java",children:"           <dependency>\n                <groupId>io.seata</groupId>\n                <artifactId>seata-spring-boot-starter</artifactId>\n                <version>\u6700\u65b0\u7248</version>\n            </dependency>\n            <dependency>\n                <groupId>com.ctrip.framework.apollo</groupId>\n                <artifactId>apollo-client</artifactId>\n                <version>${apollo-client.version}</version>\n            </dependency>\n"})}),"\n",(0,l.jsx)(o.h3,{id:"client-\u7aef\u914d\u7f6e\u4e2d\u5fc3",children:"Client \u7aef\u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,l.jsxs)(o.p,{children:["\u5728 ",(0,l.jsx)(o.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml",children:(0,l.jsx)(o.strong,{children:"application.yml"})})," \u4e2d\u52a0\u5165\u5bf9\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,l.jsx)(o.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/client",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-yaml",children:"seata:\n  config:\n    type: apollo\n    apollo:\n      apollo-meta: http://192.168.1.204:8801\n      app-id: seata-server\n      namespace: application\n      apollo-accesskey-secret: ''\n"})}),"\n",(0,l.jsx)(o.h3,{id:"server-\u7aef\u914d\u7f6e\u4e2d\u5fc3",children:"Server \u7aef\u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,l.jsxs)(o.p,{children:["\u5728 ",(0,l.jsx)(o.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/server/config/registry.conf",children:"registry.conf"})," \u4e2d\u52a0\u5165\u5bf9\u5e94\u914d\u7f6e\u4e2d\u5fc3,\u5176\u4f59",(0,l.jsx)(o.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/server",children:"\u914d\u7f6e\u53c2\u8003"})]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{children:'config {\n  type = "apollo"\n\n  apollo {\n    appId = "seata-server"\n    apolloMeta = "http://192.168.1.204:8801"\n    namespace = "application"\n    apolloAccesskeySecret = ""\n  }\n}\n\n'})}),"\n",(0,l.jsx)(o.h3,{id:"\u4e0a\u4f20\u914d\u7f6e\u81f3-apollo-\u914d\u7f6e\u4e2d\u5fc3",children:"\u4e0a\u4f20\u914d\u7f6e\u81f3 Apollo \u914d\u7f6e\u4e2d\u5fc3"}),"\n",(0,l.jsxs)(o.p,{children:["\u53c2\u8003",(0,l.jsx)(o.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/config-center",children:"https://github.com/apache/incubator-seata/tree/develop/script/config-center"})," \u7684 config.txt \u5e76\u4fee\u6539,\u4e4b\u540e\u8fd0\u884c\u4ed3\u5e93\u4e2d\u63d0\u4f9b\u7684 Apollo \u811a\u672c,\u5c06\u4fe1\u606f\u63d0\u4ea4\u5230 Apollo \u63a7\u5236\u53f0, \u5982\u679c\u6709\u9700\u8981\u66f4\u6539,\u53ef\u76f4\u63a5\u901a\u8fc7\u63a7\u5236\u53f0\u66f4\u6539."]}),"\n",(0,l.jsx)(o.p,{children:"eg: sh ${SEATAPATH}/script/config-center/apollo/apollo-config.sh -h localhost -p 8070 -e DEV -a seata-server -c default -n application -d apollo -r apollo -t 3aa026fc8435d0fc4505b345b8fa4578fb646a2c"}),"\n",(0,l.jsxs)(o.p,{children:["\u8be6\u7ec6\u89e3\u6790\u53c2\u8003 ",(0,l.jsx)(o.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/README.md",children:"Readme \u6587\u6863"})]}),"\n",(0,l.jsx)(o.p,{children:"\u968f\u540e,\u542f\u52a8 Seata-Server \u548c Client\uff08\u4e1a\u52a1\u4fa7\uff09\u5e94\u7528\uff0c\u5982\u679c\u5728\u5bfc\u5165\u914d\u7f6e\u81f3 Apollo \u524d\uff0c\u5df2\u542f\u52a8 Seata-Server \u548c Client\uff08\u4e1a\u52a1\u4fa7\uff09\u5e94\u7528\u9700\u8981\u8fdb\u884c\u91cd\u542f\u3002"})]})}function d(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>c,x:()=>r});var l=n(96540);const t={},a=l.createContext(t);function c(e){const o=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),l.createElement(a.Provider,{value:o},e.children)}}}]);