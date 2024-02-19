"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[22936],{74176:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=o(74848),t=o(28453);const r={title:"Consul Configuration Center",keywords:["Seata","Consul"],description:"Consul Configuration Center."},s="Consul Configuration Center",a={id:"user/configuration/consul",title:"Consul Configuration Center",description:"Consul Configuration Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/configuration/consul.md",sourceDirName:"user/configuration",slug:"/user/configuration/consul",permalink:"/docs/v1.6/user/configuration/consul",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/configuration/consul.md",tags:[],version:"v1.6",frontMatter:{title:"Consul Configuration Center",keywords:["Seata","Consul"],description:"Consul Configuration Center."},sidebar:"docs",previous:{title:"Etcd3 Configuration Center",permalink:"/docs/v1.6/user/configuration/etcd3"},next:{title:"Zookeeper Configuration Center",permalink:"/docs/v1.6/user/configuration/zookeeper"}},c={},l=[{value:"Preparation",id:"preparation",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Configure Consul as the Configuration Center",id:"configure-consul-as-the-configuration-center",level:3},{value:"Submit Key-Value Configuration to Consul",id:"submit-key-value-configuration-to-consul",level:3},{value:"Client-side Configuration of Consul as Configuration Center",id:"client-side-configuration-of-consul-as-configuration-center",level:3},{value:"Client-side Configuration",id:"client-side-configuration",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"consul-configuration-center",children:"Consul Configuration Center"}),"\n",(0,i.jsxs)(n.p,{children:["Based on ",(0,i.jsx)(n.a,{href:"/docs/user/registry/consul",children:"Using Consul as a Registry"}),", put Seata configuration into Consul."]}),"\n",(0,i.jsx)(n.p,{children:"This article is based on Seata 1.4.2, and Consul version 1.8+ is recommended. Consul 1.11.2 is used as an example in the following text."}),"\n",(0,i.jsx)(n.h2,{id:"preparation",children:"Preparation"}),"\n",(0,i.jsx)(n.p,{children:"Before using Consul as the Seata configuration center, make sure that the Consul service has been started."}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsx)(n.p,{children:"The steps to configure Consul as the Seata configuration center are very simple and can be divided into the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Configure Consul as the configuration center for seata-server."}),"\n",(0,i.jsx)(n.li,{children:"Submit Key-Value configuration to Consul."}),"\n",(0,i.jsx)(n.li,{children:"Configure Consul as the configuration center for the client."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"configure-consul-as-the-configuration-center",children:"Configure Consul as the Configuration Center"}),"\n",(0,i.jsx)(n.p,{children:"First, make sure that your Consul service has been started."}),"\n",(0,i.jsxs)(n.p,{children:["In the Seata directory /conf/registry.conf, add the corresponding configuration center. For other configuration references, please refer to ",(0,i.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/server/config/registry.conf",children:"here"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'config {\n  type = "consul"\n\n  consul {\n    serverAddr = "127.0.0.1:8500"\n    aclToken = ""\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"At this time, when starting the Seata service, the following information will be prompted. You can close the service first."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"config operation timeout,cost:5015 ms,op:GET,dataId:store.mode\nconfig operation timeout,cost:5006 ms,op:GET,dataId:metrics.enabled\nconfig operation timeout,cost:5001 ms,op:GET,dataId:transport.threadFactory.bossThreadPrefix\nconfig operation timeout,cost:5009 ms,op:GET,dataId:transport.threadFactory.workerThreadPrefix\n# Other similar information is omitted here~\n"})}),"\n",(0,i.jsx)(n.h3,{id:"submit-key-value-configuration-to-consul",children:"Submit Key-Value Configuration to Consul"}),"\n",(0,i.jsx)(n.p,{children:"The above error message appears because the corresponding configuration is missing in Consul. Please submit the configuration to Consul Key/Value in one of the following ways:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Through the Consul console UI, Key/Value -> create."}),"\n",(0,i.jsxs)(n.li,{children:["Through ",(0,i.jsx)(n.a,{href:"https://www.consul.io/api-docs/kv",children:"HTTP requests"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Through ",(0,i.jsx)(n.a,{href:"https://www.consul.io/commands/kv",children:"Consul command-line tools"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Recommended: Use the official provided script to upload the configuration"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tips"}),": For version 1.4.2, you need to create key-value one by one. Starting from version 1.5.0, it supports key corresponding to a file."]}),"\n",(0,i.jsxs)(n.p,{children:["Taking store.mode=file as an example, submit the configuration corresponding to the error message. You can find the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/config.txt",children:"default configuration"})," here."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-properties",children:"store.mode=file\nstore.publicKey=\nstore.file.dir=file_store/data\nstore.file.maxBranchSessionSize=16384\n# The remaining configuration items are omitted~\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Recommended to use official script:"})," The above methods 1~3 require adding configurations one by one, which is cumbersome. To address this, the official provides a ",(0,i.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/consul/consul-config.sh",children:"script"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/config.txt",children:"default configuration"})," for quickly adding configurations."]}),"\n",(0,i.jsxs)(n.p,{children:["Place the config.txt file in the ",(0,i.jsx)(n.strong,{children:"parent directory"})," of consul-config.sh, and adjust the configuration in config.txt according to your needs (mainly seata.mode and configurations with prefixes seata.file, seata.db, and seata.redis)."]}),"\n",(0,i.jsx)(n.p,{children:"Execute the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh {PATH}/consul-config.sh -h localhost -p 8500\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For specific operations, refer to the ",(0,i.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/1.4.2/script/config-center/README.md",children:"README.md"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Restart the Seata service at this point, and you will find that there are no more errors, indicating that Consul is successfully used as the configuration center. If you need to adjust the configuration later, you can go to the console to modify the corresponding configuration separately, and restart the service after modification."}),"\n",(0,i.jsx)(n.h3,{id:"client-side-configuration-of-consul-as-configuration-center",children:"Client-side Configuration of Consul as Configuration Center"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Taking a SpringBoot project as an example, add the following to the project's pom.xml file:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"\n<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version (Seata version)</version>\n</dependency>\n<dependency>\n<groupId>org.springframework.cloud</groupId>\n<artifactId>spring-cloud-starter-consul-config</artifactId>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"client-side-configuration",children:"Client-side Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["Add the corresponding configuration center in application.yml, and refer to other ",(0,i.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml",children:"configurations"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"seata:\n  config:\n    type: consul\n    consul:\n      server-addr: 127.0.0.1:8500\n"})}),"\n",(0,i.jsx)(n.p,{children:"Restart the Client."})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var i=o(96540);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);