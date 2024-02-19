"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[36159],{36043:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=o(74848),i=o(28453);const r={title:"Apollo Configuration Center",keywords:["Seata","Apollo"],description:"Apollo Configuration Center."},a="Apollo Configuration Center",c={id:"user/configuration/apollo",title:"Apollo Configuration Center",description:"Apollo Configuration Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/configuration/apollo.md",sourceDirName:"user/configuration",slug:"/user/configuration/apollo",permalink:"/docs/v1.6/user/configuration/apollo",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/configuration/apollo.md",tags:[],version:"v1.6",frontMatter:{title:"Apollo Configuration Center",keywords:["Seata","Apollo"],description:"Apollo Configuration Center."},sidebar:"docs",previous:{title:"Nacos Configuration Center",permalink:"/docs/v1.6/user/configuration/nacos"},next:{title:"Etcd3 Configuration Center",permalink:"/docs/v1.6/user/configuration/etcd3"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Adding Maven Dependencies",id:"adding-maven-dependencies",level:3},{value:"Client-side Configuration Center",id:"client-side-configuration-center",level:3},{value:"Server-side Configuration Center",id:"server-side-configuration-center",level:3},{value:"Upload Configuration to Apollo Configuration Center",id:"upload-configuration-to-apollo-configuration-center",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"apollo-configuration-center",children:"Apollo Configuration Center"}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:["Before integrating ",(0,t.jsx)(n.code,{children:"apollo-client"})," into your Seata project, make sure that the Apollo service has been started on the backend. If you are not familiar with the basic usage of Apollo, you can refer to the ",(0,t.jsx)(n.a,{href:"https://www.apolloconfig.com/",children:"Apollo Quick Start"})," for preliminary understanding. It is recommended to use Apollo version ",(0,t.jsx)(n.code,{children:"1.6.0"})," or above."]}),"\n",(0,t.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(n.p,{children:'The steps to integrate Seata with the Apollo Configuration Center are very simple and can be roughly divided into "Adding Maven Dependencies" and "Configuring the Apollo Configuration Center" and "submitting the configuration to Apollo-Server".'}),"\n",(0,t.jsx)(n.h3,{id:"adding-maven-dependencies",children:"Adding Maven Dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["First, you need to add the Maven dependency of ",(0,t.jsx)(n.code,{children:"apollo-client"})," to your project's ",(0,t.jsx)(n.code,{children:"pom.xml"})," file. It is recommended to use Seata ",(0,t.jsx)(n.code,{children:"1.4.0+"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"           <dependency>\n                <groupId>io.seata</groupId>\n                <artifactId>seata-spring-boot-starter</artifactId>\n                <version>latest version</version>\n            </dependency>\n            <dependency>\n                <groupId>com.ctrip.framework.apollo</groupId>\n                <artifactId>apollo-client</artifactId>\n                <version>${apollo-client.version}</version>\n            </dependency>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"client-side-configuration-center",children:"Client-side Configuration Center"}),"\n",(0,t.jsxs)(n.p,{children:["Add the corresponding configuration center in ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml",children:(0,t.jsx)(n.strong,{children:"application.yml"})}),", and refer to the rest of the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/client",children:"configuration"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"seata:\n  config:\n    type: apollo\n    apollo:\n      apollo-meta: http://192.168.1.204:8801\n      app-id: seata-server\n      namespace: application\n      apollo-accesskey-secret: ''\n"})}),"\n",(0,t.jsx)(n.h3,{id:"server-side-configuration-center",children:"Server-side Configuration Center"}),"\n",(0,t.jsxs)(n.p,{children:["Add the corresponding configuration center in ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/server/config/registry.conf",children:"registry.conf"}),", and refer to the rest of the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/server",children:"configuration"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'config {\n  type = "apollo"\n\n  apollo {\n    appId = "seata-server"\n    apolloMeta = "http://192.168.1.204:8801"\n    namespace = "application"\n    apolloAccesskeySecret = ""\n  }\n}\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"upload-configuration-to-apollo-configuration-center",children:"Upload Configuration to Apollo Configuration Center"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/config-center",children:"config.txt"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/config-center",children:"https://github.com/apache/incubator-seata/tree/develop/script/config-center"})," and make modifications. Then run the provided Apollo script in the repository to submit the information to the Apollo console. If there is a need for changes, they can be directly made through the console."]}),"\n",(0,t.jsx)(n.p,{children:"eg: sh ${SEATAPATH}/script/config-center/apollo/apollo-config.sh -h localhost -p 8070 -e DEV -a seata-server -c default -n application -d apollo -r apollo -t 3aa026fc8435d0fc4505b345b8fa4578fb646a2c"}),"\n",(0,t.jsxs)(n.p,{children:["For detailed analysis, refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/README.md",children:"Readme document"})]}),"\n",(0,t.jsx)(n.p,{children:"Then, start the Seata-Server and Client (business side) applications. If the Seata-Server and Client (business side) applications were already started before importing the configuration to Apollo, they need to be restarted."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var t=o(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);