"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[12871],{45924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=t(74848),i=t(28453);const a={title:"Nacos Configuration Center",keywords:["Seata","Nacos"],description:"Nacos Configuration Center."},r="Nacos Configuration Center",s={id:"user/configuration/nacos",title:"Nacos Configuration Center",description:"Nacos Configuration Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.4/user/configuration/nacos.md",sourceDirName:"user/configuration",slug:"/user/configuration/nacos",permalink:"/docs/v1.4/user/configuration/nacos",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.4/user/configuration/nacos.md",tags:[],version:"v1.4",frontMatter:{title:"Nacos Configuration Center",keywords:["Seata","Nacos"],description:"Nacos Configuration Center."},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/v1.4/user/configuration/"},next:{title:"Apollo Configuration Center",permalink:"/docs/v1.4/user/configuration/apollo"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Add Maven Dependencies",id:"add-maven-dependencies",level:3},{value:"Client-side Configuration Center",id:"client-side-configuration-center",level:3},{value:"Server-side Configuration Center",id:"server-side-configuration-center",level:3},{value:"Upload Configuration to Nacos Configuration Center",id:"upload-configuration-to-nacos-configuration-center",level:3},{value:"Configuration through dataId",id:"configuration-through-dataid",level:4},{value:"Upload Configuration to Nacos Using Script",id:"upload-configuration-to-nacos-using-script",level:4}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"nacos-configuration-center",children:"Nacos Configuration Center"}),"\n",(0,o.jsx)(n.p,{children:"Nacos is an important configuration center implementation in the Seata component."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["Before integrating ",(0,o.jsx)(n.code,{children:"nacos-client"})," into your Seata project, make sure that the Nacos service is already started in the background. If you are not familiar with the basic usage of Nacos, you can refer to the ",(0,o.jsx)(n.a,{href:"https://nacos.io/en-us/docs/quick-start.html",children:"Nacos Quick Start"})," first. It is recommended to use Nacos version ",(0,o.jsx)(n.code,{children:"1.2.0"})," or above."]}),"\n",(0,o.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,o.jsx)(n.p,{children:'The steps to integrate Seata with Nacos configuration center are very simple, and can be roughly divided into "adding Maven dependencies" and "configuring Nacos configuration center" and submitting the configuration to Nacos-Server.'}),"\n",(0,o.jsx)(n.h3,{id:"add-maven-dependencies",children:"Add Maven Dependencies"}),"\n",(0,o.jsxs)(n.p,{children:["First, you need to add the Maven dependency of ",(0,o.jsx)(n.code,{children:"nacos-client"})," to your project's ",(0,o.jsx)(n.code,{children:"pom.xml"})," file, it is recommended to use Seata ",(0,o.jsx)(n.code,{children:"1.4.0+"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version</version>\n</dependency>\n<dependency>\n    <groupId>com.alibaba.nacos</groupId>\n    <artifactId>nacos-client</artifactId>\n    <version>1.2.0 or above</version>\n</dependency>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"client-side-configuration-center",children:"Client-side Configuration Center"}),"\n",(0,o.jsxs)(n.p,{children:["Add the corresponding configuration center in ",(0,o.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml",children:(0,o.jsx)(n.strong,{children:"application.yml"})}),", other ",(0,o.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/client",children:"configuration references"})," are available."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"seata:\n  config:\n    type: nacos\n    nacos:\n      server-addr: 127.0.0.1:8848\n      group: 'SEATA_GROUP'\n      namespace: ''\n      username: 'nacos'\n      password: 'nacos'\n"})}),"\n",(0,o.jsx)(n.h3,{id:"server-side-configuration-center",children:"Server-side Configuration Center"}),"\n",(0,o.jsxs)(n.p,{children:["Add the corresponding configuration center in ",(0,o.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/server/config/registry.conf",children:"registry.conf"}),", other ",(0,o.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/server",children:"configuration references"})," are available."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'config {\n  type = "nacos"\n\n  nacos {\n    serverAddr = "127.0.0.1:8848"\n    group = "SEATA_GROUP"\n    namespace = ""\n    username = "nacos"\n    password = "nacos"\n  }\n}\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"upload-configuration-to-nacos-configuration-center",children:"Upload Configuration to Nacos Configuration Center"}),"\n",(0,o.jsx)(n.h4,{id:"configuration-through-dataid",children:"Configuration through dataId"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Starting from version 1.4.2, it is supported to obtain all configuration information from a Nacos dataId. You just need to add an additional dataId configuration item."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["First, you need to create a new configuration in Nacos. The dataId here is seataServer.properties, and the configuration content refers to ",(0,o.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/config-center/config.txt",children:"https://github.com/apache/incubator-seata/tree/develop/script/config-center/config.txt"})," and modify it as needed."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"In the client, modify the configuration as follows:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"seata:\n  config:\n    type: nacos\n    nacos:\n      server-addr: 127.0.0.1:8848\n      group: 'SEATA_GROUP'\n      namespace: ''\n      dataId: 'seataServer.properties'\n      username: 'nacos'\n      password: 'nacos'\n"})}),"\n",(0,o.jsx)(n.h4,{id:"upload-configuration-to-nacos-using-script",children:"Upload Configuration to Nacos Using Script"}),"\n",(0,o.jsxs)(n.p,{children:["Refer to ",(0,o.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/config-center/config.txt",children:"https://github.com/apache/incubator-seata/tree/develop/script/config-center/config.txt"})," and make modifications. Then run the provided Nacos script in the repository to submit the information to the Nacos console. If any changes are needed, they can be directly made through the console."]}),"\n",(0,o.jsx)(n.p,{children:"Example: sh ${SEATAPATH}/script/config-center/nacos/nacos-config.sh -h localhost -p 8848 -g SEATA_GROUP -t 5a3c7d6c-f497-4d68-a71a-2e5e3340b3ca -u username -w password"}),"\n",(0,o.jsxs)(n.p,{children:["For detailed instructions, refer to the ",(0,o.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/README.md",children:"Readme document"})]}),"\n",(0,o.jsx)(n.p,{children:"Afterwards, start the Seata-Server and Client (business side) applications. If the Seata-Server and Client (business side) applications were already started before importing the configuration to Nacos, they need to be restarted."}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["This post is translated using ChatGPT, please ",(0,o.jsx)(n.a,{href:"https://github.com/linyuxuanlin/Wiki_MkDocs/issues/new",children:(0,o.jsx)(n.strong,{children:"feedback"})})," if any omissions."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(96540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);