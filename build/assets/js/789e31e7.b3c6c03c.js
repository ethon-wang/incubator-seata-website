"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[40332],{15178:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=n(74848),i=n(28453);const o={title:"Zookeeper Registry Center",keywords:["Seata","Zookeeper","Registry Center"],description:"Zookeeper Registry Center."},s="ZooKeeper Registry Center",a={id:"user/registry/zookeeper",title:"Zookeeper Registry Center",description:"Zookeeper Registry Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.7/user/registry/zookeeper.md",sourceDirName:"user/registry",slug:"/user/registry/zookeeper",permalink:"/docs/v1.7/user/registry/zookeeper",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.7/user/registry/zookeeper.md",tags:[],version:"v1.7",frontMatter:{title:"Zookeeper Registry Center",keywords:["Seata","Zookeeper","Registry Center"],description:"Zookeeper Registry Center."},sidebar:"docs",previous:{title:"Consul Registry Center",permalink:"/docs/v1.7/user/registry/consul"},next:{title:"Api Guide",permalink:"/docs/v1.7/user/api"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Server-side Registry Center Configuration",id:"server-side-registry-center-configuration",level:3},{value:"Client-side Configuration",id:"client-side-configuration",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"zookeeper-registry-center",children:"ZooKeeper Registry Center"}),"\n",(0,t.jsx)(r.p,{children:"ZooKeeper serves as a critical registry center implementation within the Seata component."}),"\n",(0,t.jsx)(r.p,{children:"This document is based on Seata 1.7.0, demonstrating how to register Seata with ZooKeeper using a file as the configuration center."}),"\n",(0,t.jsx)(r.p,{children:"It is recommended to use ZooKeeper version 3.4.13 or above. The following example uses ZooKeeper version 3.4.14."}),"\n",(0,t.jsx)(r.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(r.p,{children:["Before registering ",(0,t.jsx)(r.strong,{children:"Seata"})," with ZooKeeper, ensure that the ZooKeeper service is running. If you are unfamiliar with basic ZooKeeper usage, you can refer to the ",(0,t.jsx)(r.a,{href:"https://zookeeper.apache.org/doc/r3.4.14/index.html",children:"ZooKeeper official documentation"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,t.jsx)(r.p,{children:'Integrating Seata with ZooKeeper involves simple steps, roughly categorized as "Adding Maven Dependencies" and "Configuring the Registry Center."'}),"\n",(0,t.jsx)(r.h3,{id:"server-side-registry-center-configuration",children:"Server-side Registry Center Configuration"}),"\n",(0,t.jsxs)(r.p,{children:["Download ",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-seata/releases/tag/v1.7.0",children:"Seata 1.7.0 release"})," and extract the files."]}),"\n",(0,t.jsxs)(r.p,{children:["Modify the corresponding configuration in ",(0,t.jsx)(r.code,{children:"/conf/application.yaml"}),". For other configuration options, refer to the ",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-seata/blob/develop/server/src/main/resources/application.example.yml",children:"Seata configuration reference"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:'seata:\n  registry:\n    type: zk\n    zk:\n      cluster: default\n      server-addr: 127.0.0.1:2181\n      session-timeout: 6000\n      connect-timeout: 2000\n      username: ""\n      password: ""\n'})}),"\n",(0,t.jsxs)(r.p,{children:["Execute ",(0,t.jsx)(r.code,{children:"/bin/seata-server.bat"})," (Windows) or ",(0,t.jsx)(r.code,{children:"/bin/seata-server.sh"})," (Unix) to start Seata. The service will run on the local port 8091. Open the ZooKeeper command-line client and enter ",(0,t.jsx)(r.code,{children:"ls /registry/zk/default"}),", check if the node address is listed, indicating successful registration (as shown below)."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"[zk: localhost:2181(CONNECTED) 1] ls /registry/zk/default\n[127.0.0.1:8091]\n"})}),"\n",(0,t.jsx)(r.h3,{id:"client-side-configuration",children:"Client-side Configuration"}),"\n",(0,t.jsxs)(r.p,{children:["If you are using the ",(0,t.jsx)(r.code,{children:"io.seata:seata-spring-boot-starter"})," dependency, you need to add the following ZooKeeper configuration in the application.yml file. For additional configurations, please refer to the ",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-seata/blob/1.7.0/script/client/spring/application.yml",children:"configuration reference"}),"\n:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"seata:\n  registry:\n    type: zk\n    zk:\n      server-addr: 127.0.0.1:2181\n      session-timeout: 6000\n      connect-timeout: 2000\n      username:\n      password:\n  tx-service-group: default_tx_group\n  service:\n    vgroup-mapping:\n      default_tx_group: default\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Alternatively, if you are using the ",(0,t.jsx)(r.code,{children:"io.seata:seata-all"})," dependency, add the ZooKeeper configuration in the registry.conf file. For additional configurations, please refer to the ",(0,t.jsx)(r.a,{href:"https://github.com/apache/incubator-seata/tree/1.7.0/script/client/conf",children:"configuration reference"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'  zk {\n    serverAddr = "127.0.0.1:2181"\n    sessionTimeout = 6000\n    connectTimeout = 2000\n    username = ""\n    password = ""\n  }\n'})}),"\n",(0,t.jsx)(r.p,{children:"After configuring the client, start the application and wait for a moment, the Seata service will be operational soon."})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>a});var t=n(96540);const i={},o=t.createContext(i);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);