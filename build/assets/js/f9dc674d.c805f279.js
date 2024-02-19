"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[67414],{87391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(74848),s=t(28453);const i={title:"Consul Registry Center",keywords:["Seata","Consul","Registry Center"],description:"Consul Registry Center."},o="Consul Registry",a={id:"user/registry/consul",title:"Consul Registry Center",description:"Consul Registry Center.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/registry/consul.md",sourceDirName:"user/registry",slug:"/user/registry/consul",permalink:"/docs/v1.6/user/registry/consul",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.6/user/registry/consul.md",tags:[],version:"v1.6",frontMatter:{title:"Consul Registry Center",keywords:["Seata","Consul","Registry Center"],description:"Consul Registry Center."},sidebar:"docs",previous:{title:"Etcd3 Registry Center",permalink:"/docs/v1.6/user/registry/etcd3"},next:{title:"Zookeeper Registry Center",permalink:"/docs/v1.6/user/registry/zookeeper"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Server-side configuration of registry",id:"server-side-configuration-of-registry",level:3},{value:"Client-side adding Maven dependencies",id:"client-side-adding-maven-dependencies",level:3},{value:"Client-side configuration",id:"client-side-configuration",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"consul-registry",children:"Consul Registry"}),"\n",(0,r.jsx)(n.p,{children:"Consul is an important registry implementation in the Seata component."}),"\n",(0,r.jsx)(n.p,{children:"This article is based on Seata 1.4.2 and registers Seata to Consul with file as the configuration center."}),"\n",(0,r.jsx)(n.p,{children:"Consul version recommended is 1.8+. The following text uses Consul 1.11.2 as an example."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.p,{children:["Before you register ",(0,r.jsx)(n.strong,{children:"Seata"})," to Consul, make sure that the Consul service is already running. If you are not familiar with the basic usage of Consul, you can refer to the ",(0,r.jsx)(n.a,{href:"https://www.consul.io/docs",children:"Consul official documentation"})," first."]}),"\n",(0,r.jsxs)(n.p,{children:["If you just want to experience it quickly, you can also use the following docker command to start a Consul container and access the Consul console at ",(0,r.jsx)(n.a,{href:"http://localhost:8500",children:"http://localhost:8500"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"docker run -d --name=consul -p 8500:8500 -p 8600:8600/udp consul:1.11.2 agent -dev -client=0.0.0.0 -ui\n"})}),"\n",(0,r.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsx)(n.p,{children:"Integrating Consul registry into Seata is very simple, with a Server-side and a Client-side."}),"\n",(0,r.jsx)(n.p,{children:'The Server-side only needs to configure the "registry".'}),"\n",(0,r.jsx)(n.p,{children:"The Client-side needs to add Maven dependencies and configure them."}),"\n",(0,r.jsx)(n.h3,{id:"server-side-configuration-of-registry",children:"Server-side configuration of registry"}),"\n",(0,r.jsxs)(n.p,{children:["Download ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/releases/tag/v1.4.2",children:"Seata 1.4.2 release"})," and extract it."]}),"\n",(0,r.jsxs)(n.p,{children:["Modify the corresponding configuration center in /conf/registry.conf, and refer to the rest of the ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/conf/registry.conf",children:"configuration"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'registry {\n  type = "consul"\n\n  consul {\n    # The cluster name registered to Consul, default is default\n    cluster = "default"\n    serverAddr = "127.0.0.1:8500"\n    aclToken = ""\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Execute /bin/seata-server.bat (Windows) or /bin/seata-server.sh (Unix) to start Seata. The service will run on port 8091 locally."}),"\n",(0,r.jsx)(n.p,{children:"Go to the Consul console to check if Seata is registered successfully."}),"\n",(0,r.jsx)(n.h3,{id:"client-side-adding-maven-dependencies",children:"Client-side adding Maven dependencies"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Taking a SpringBoot project as an example, add the following to the project's pom.xml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>io.seata</groupId>\n    <artifactId>seata-spring-boot-starter</artifactId>\n    <version>latest version (Seata version)</version>\n</dependency>\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-consul-discovery</artifactId>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"client-side-configuration",children:"Client-side configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Add the corresponding registry to application.yml, and refer to the rest of the ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/script/client/spring/application.yml",children:"configuration"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"seata:\n  registry:\n    consul:\n      server-addr: 127.0.0.1:8500\n  # Transaction group configuration, default name is my_test_tx_group in version 1.4.2, will be changed to default_tx_group in version 1.5\n  # For more information about transaction groups, please refer to https://seata.apache.org/docs/user/txgroup/transaction-group/\n  tx-service-group: my_test_tx_group\n  service:\n    # Mapping between transaction group and cluster\n    vgroup-mapping:\n      my_test_tx_group: default\n"})}),"\n",(0,r.jsx)(n.p,{children:"After completing the client configuration, start the application and wait for a moment. When the following log appears, you can officially experience the Seata service."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"register TM success. client version:1.4.2, server version:1.4.2,channel:[id: 0xa4675e28, L:/127.0.0.1:8238 - R:/127.0.0.1:8091]\nregister RM success. client version:1.4.2, server version:1.4.2,channel:[id: 0x408192d3, L:/127.0.0.1:8237 - R:/127.0.0.1:8091]\nregister success, cost 94 ms, version:1.4.2,role:RMROLE,channel:[id: 0x408192d3, L:/127.0.0.1:8237 - R:/127.0.0.1:8091]\nregister success, cost 94 ms, version:1.4.2,role:TMROLE,channel:[id: 0xa4675e28, L:/127.0.0.1:8238 - R:/127.0.0.1:8091]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);