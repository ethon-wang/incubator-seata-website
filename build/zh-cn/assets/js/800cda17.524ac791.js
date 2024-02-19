"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[45081],{28461:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(74848),i=s(28453);const r={title:"\u591a\u914d\u7f6e\u9694\u79bb",keywords:["Seata"],description:"Seata\u4ece0.6.1\u7248\u672c\u5f00\u59cb\u652f\u6301\u591a\u914d\u7f6e\u9694\u79bb\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u914d\u7f6e\u3002"},o="\u591a\u914d\u7f6e\u9694\u79bb",l={id:"ops/multi-configuration-isolation",title:"\u591a\u914d\u7f6e\u9694\u79bb",description:"Seata\u4ece0.6.1\u7248\u672c\u5f00\u59cb\u652f\u6301\u591a\u914d\u7f6e\u9694\u79bb\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u914d\u7f6e\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.0/ops/multi-configuration-isolation.md",sourceDirName:"ops",slug:"/ops/multi-configuration-isolation",permalink:"/zh-cn/docs/v1.0/ops/multi-configuration-isolation",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.0/ops/multi-configuration-isolation.md",tags:[],version:"v1.0",frontMatter:{title:"\u591a\u914d\u7f6e\u9694\u79bb",keywords:["Seata"],description:"Seata\u4ece0.6.1\u7248\u672c\u5f00\u59cb\u652f\u6301\u591a\u914d\u7f6e\u9694\u79bb\uff0c\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u914d\u7f6e\u3002"},sidebar:"docs",previous:{title:"\u7248\u672c\u5347\u7ea7\u6307\u5357",permalink:"/zh-cn/docs/v1.0/ops/upgrade"},next:{title:"\u65b0\u4eba\u6587\u6863",permalink:"/zh-cn/docs/v1.0/ops/deploy-guide-beginner"}},c={},a=[{value:"\u7528\u4f8b",id:"\u7528\u4f8b",level:2},{value:"1.\u73af\u5883\u914d\u7f6e",id:"1\u73af\u5883\u914d\u7f6e",level:3},{value:"2.\u91cd\u547d\u540d\u65b0\u7684\u914d\u7f6e\u6587\u4ef6",id:"2\u91cd\u547d\u540d\u65b0\u7684\u914d\u7f6e\u6587\u4ef6",level:3}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u591a\u914d\u7f6e\u9694\u79bb",children:"\u591a\u914d\u7f6e\u9694\u79bb"}),"\n",(0,t.jsx)(e.p,{children:"Seata\u4ece0.6.1\u7248\u672c\u5f00\u59cb\u652f\u6301\u591a\u914d\u7f6e\u9694\u79bb\uff0c\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8fdb\u884c\u914d\u7f6e\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u7528\u4f8b",children:"\u7528\u4f8b"}),"\n",(0,t.jsx)(e.p,{children:"\u5047\u8bbe\u6211\u4eec\u73b0\u5728\u6709\u4e00\u4e2a\u6d4b\u8bd5\u73af\u5883\uff0c\u6211\u4eec\u53ea\u60f3\u8bfb\u53d6\u6d4b\u8bd5\u73af\u5883\u5bf9\u5e94\u7684\u914d\u7f6e\u9879\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"1\u73af\u5883\u914d\u7f6e",children:"1.\u73af\u5883\u914d\u7f6e"}),"\n",(0,t.jsx)(e.p,{children:"Seata \u63d0\u4f9b\u4e86\u4e24\u79cd\u8bbe\u7f6e\u4e0d\u540c\u73af\u5883\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"-e test"}),"\uff0c\u5176\u4e2dtest\u662f\u73af\u5883\u540d\u79f0\u3002(",(0,t.jsx)(e.strong,{children:"\u4ec5\u9002\u7528\u4e8e\u670d\u52a1\u5668\u7aef"}),")"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"\n\u4f8b\u5982\uff0c\u5728Linux\u4e0b\u4f7f\u7528\u547d\u4ee4\uff1a\n\nsh Seata-server.sh -e test\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["[ ",(0,t.jsx)(e.strong,{children:"\u63a8\u8350"})," ] \u4f7f\u7528",(0,t.jsx)(e.strong,{children:"SEATA_ENV"}),"\u4f5c\u4e3a\u73af\u5883\u53d8\u91cf\u7684\u952e\uff0c\u5176\u503c\u662f\u73af\u5883\u540d\u79f0\u3002\uff08",(0,t.jsx)(e.strong,{children:"\u4ec5\u9002\u7528\u4e8e\u5ba2\u6237\u7aef"}),"\uff09"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"\n\u4f8b\u5982\uff0c\u5728Linux\u4e0b\u4f7f\u7528\u547d\u4ee4\uff1a\n\n#vi /etc/profile \n\nexport SEATA_ENV=test\n\n:wq\n\n#source /etc/profile\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["[ ",(0,t.jsx)(e.strong,{children:"\u63a8\u8350"})," ]\u4f7f\u7528",(0,t.jsx)(e.strong,{children:"seataEnv"}),"\u4f5c\u4e3ajvm\u9009\u9879\u7684\u952e\uff0c\u5b83\u7684\u503c\u5c06\u662f\u73af\u5883\u7684\u540d\u79f0\u3002\uff08",(0,t.jsx)(e.strong,{children:"\u4ec5\u9002\u7528\u4e8e\u5ba2\u6237\u7aef"}),"\uff09"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"-DseataEnv=test\n"})}),"\n",(0,t.jsx)(e.h3,{id:"2\u91cd\u547d\u540d\u65b0\u7684\u914d\u7f6e\u6587\u4ef6",children:"2.\u91cd\u547d\u540d\u65b0\u7684\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u590d\u5236 file.conf \u5e76\u5c06\u5176\u91cd\u547d\u540d\u4e3a file-env.conf\uff0c\u5176\u4e2d env \u662f\u73af\u5883\u540d\u79f0\u3002\u4f8b\u5982 ",(0,t.jsx)(e.strong,{children:"file-test.conf"})]}),"\n",(0,t.jsxs)(e.li,{children:["\u5c06registry.conf \u590d\u5236\u5e76\u91cd\u547d\u540d\u4e3a registry-env.conf\uff0c\u5176\u4e2d env \u662f\u73af\u5883\u7684\u540d\u79f0\u3002\u4f8b\u5982 ",(0,t.jsx)(e.strong,{children:"registry-test.conf"})]}),"\n",(0,t.jsx)(e.li,{children:"\u5728registry-test.conf\u6587\u4ef6\u4e2d\uff0c\u8fdb\u884c\u5982\u4e0b\u4fee\u6539\uff1a"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'registry {\n...\nfile {\n    name = "file-test.conf"\n  }\n\nconfig {\n...\nfile {\n    name = "file-test.conf"\n  }\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u505a\u5b8c\u4ee5\u4e0a\u7684\u6240\u6709\u6b65\u9aa4\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u5f00\u59cb\u4f7f\u7528 Seata \u914d\u7f6e\u9694\u79bb\u4e86\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>l});var t=s(96540);const i={},r=t.createContext(i);function o(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);