"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[5568],{50929:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=l(74848),s=l(28453);const r={title:"Deploy Server",keywords:["Seata"],description:"The server can deploy by multiple metho - Directly, Docker, Docker-Compose, Kubernetes, Helm."},i="Deploy Server",d={id:"ops/deploy-server",title:"Deploy Server",description:"The server can deploy by multiple metho - Directly, Docker, Docker-Compose, Kubernetes, Helm.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.6/ops/deploy-server.md",sourceDirName:"ops",slug:"/ops/deploy-server",permalink:"/docs/v1.6/ops/deploy-server",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.6/ops/deploy-server.md",tags:[],version:"v1.6",frontMatter:{title:"Deploy Server",keywords:["Seata"],description:"The server can deploy by multiple metho - Directly, Docker, Docker-Compose, Kubernetes, Helm."},sidebar:"docs",previous:{title:"Beginner Deployment Guide",permalink:"/docs/v1.6/ops/deploy-guide-beginner"},next:{title:"Deploy Seata Server By Docker",permalink:"/docs/v1.6/ops/deploy-by-docker"}},c={},o=[{value:"Directly",id:"directly",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Deploy in container",id:"deploy-in-container",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"deploy-server",children:"Deploy Server"}),"\n",(0,n.jsx)(t.p,{children:"The server can deploy by multiple method: Directly, Docker, Docker-Compose, Kubernetes, Helm."}),"\n",(0,n.jsx)(t.h2,{id:"directly",children:"Directly"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Download the server application from ",(0,n.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/releases",children:"RELEASE"})," and unzip."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Startup"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"On Linux/Mac"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"$ sh ./bin/seata-server.sh\n"})}),"\n",(0,n.jsx)(t.p,{children:"On Windows"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cmd",children:"bin\\seata-server.bat\n"})}),"\n",(0,n.jsx)(t.h3,{id:"arguments",children:"Arguments"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Argument"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Fullname"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Effect"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-h"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"--host"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Specify IP in registry center"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Suggest to specify Virtural machine or cloud server, or will use internal IP"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-p"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"--port"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Specify startup port"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"default is 8091"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-m"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"--storeMode"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"The way to save transaction log"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Support ",(0,n.jsx)(t.code,{children:"file"})," and ",(0,n.jsx)(t.code,{children:"db"}),"default is  ",(0,n.jsx)(t.code,{children:"file"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-n"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"--serverNode"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Specify the seata-server node ID"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Like ",(0,n.jsx)(t.code,{children:"1"}),",",(0,n.jsx)(t.code,{children:"2"}),",",(0,n.jsx)(t.code,{children:"3"}),"..., default is ",(0,n.jsx)(t.code,{children:"1"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-e"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"--seataEnv"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Specify the environment of  seata-server"}),(0,n.jsxs)(t.td,{style:{textAlign:"left"},children:["Like ",(0,n.jsx)(t.code,{children:"dev"}),", ",(0,n.jsx)(t.code,{children:"test"})," etc. Then will use file like ",(0,n.jsx)(t.code,{children:"registry-dev.conf"})," as configuraiton"]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"For example\uff1a"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"$ sh ./bin/seata-server.sh -p 8091 -h 127.0.0.1 -m file\n"})}),"\n",(0,n.jsx)(t.h2,{id:"deploy-in-container",children:"Deploy in container"}),"\n",(0,n.jsx)(t.p,{children:"Now support these method\uff1a"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"./deploy-by-docker",children:"Deploy Seata Server By Docker"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"./deploy-by-kubernetes",children:"Deploy Seata Server By Kubernetes"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"./deploy-by-helm",children:"Deploy Seata Server By Helm"})}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>d});var n=l(96540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);