"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[49516],{94404:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var s=r(74848),c=r(28453);const o={hidden:!0,title:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",keywords:["docker","docker-compose","ops"],description:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",author:"helloworlde",date:new Date("2019-11-25T00:00:00.000Z")},l="\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",i={id:"ops/deploy-by-docker-142",title:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",description:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-docker-142.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker-142",permalink:"/zh-cn/docs/next/ops/deploy-by-docker-142",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-docker-142.md",tags:[],version:"current",frontMatter:{hidden:!0,title:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",keywords:["docker","docker-compose","ops"],description:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",author:"helloworlde",date:"2019-11-25T00:00:00.000Z"}},d={},a=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u542f\u52a8seata-server\u5b9e\u4f8b",id:"\u542f\u52a8seata-server\u5b9e\u4f8b",level:4},{value:"\u6307\u5b9aseata-server IP\u548c\u7aef\u53e3 \u542f\u52a8",id:"\u6307\u5b9aseata-server-ip\u548c\u7aef\u53e3-\u542f\u52a8",level:4},{value:"Docker compose \u542f\u52a8",id:"docker-compose-\u542f\u52a8",level:4},{value:"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7",id:"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7",level:2},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2}];function t(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u4f7f\u7528-docker-\u90e8\u7f72-seata-server",children:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server"}),"\n",(0,s.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u907f\u514d\u76f4\u63a5\u62c9\u53d6latest\u7248\u672c\u955c\u50cf\uff0clatest\u7248\u672c\u5e76\u4e0d\u4e00\u5b9a\u662f\u7a33\u5b9a\u7248\u672c\uff0c\u4e3a\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u95ee\u9898\uff0c\u8bf7\u5230",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/seataio/seata-server/tags",children:"docker\u955c\u50cf\u4ed3\u5e93"}),"\u786e\u5b9a\u8981\u62c9\u53d6\u7684\u955c\u50cf\u7248\u672c\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,s.jsx)(n.h4,{id:"\u542f\u52a8seata-server\u5b9e\u4f8b",children:"\u542f\u52a8seata-server\u5b9e\u4f8b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ docker run --name seata-server -p 8091:8091 seataio/seata-server:1.4.2\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u6307\u5b9aseata-server-ip\u548c\u7aef\u53e3-\u542f\u52a8",children:"\u6307\u5b9aseata-server IP\u548c\u7aef\u53e3 \u542f\u52a8"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ docker run --name seata-server \\\n        -p 8091:8091 \\\n        -e SEATA_IP=192.168.1.1 \\\n        -e SEATA_PORT=8091 \\\n        seataio/seata-server\n"})}),"\n",(0,s.jsx)(n.h4,{id:"docker-compose-\u542f\u52a8",children:"Docker compose \u542f\u52a8"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"docker-compose.yaml"})," \u793a\u4f8b"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'version: "3"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "8091:8091"\n    environment:\n      - SEATA_PORT=8091\n      - STORE_MODE=file\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7",children:"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ docker exec -it seata-server sh\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ docker logs -f seata-server\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,s.jsxs)(n.p,{children:["\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u901a\u8fc7\u6302\u8f7d\u6587\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u5c06\u5bbf\u4e3b\u673a\u4e0a\u7684 ",(0,s.jsx)(n.code,{children:"registry.conf"})," \u548c ",(0,s.jsx)(n.code,{children:"file.conf"})," \u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\u76f8\u5e94\u7684\u76ee\u5f55"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6307\u5b9a registry.conf"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u65f6\u5fc5\u987b\u6307\u5b9a\u73af\u5883\u53d8\u91cf ",(0,s.jsx)(n.code,{children:"SEATA_CONFIG_NAME"}),", \u5e76\u4e14\u503c\u9700\u8981\u4ee5",(0,s.jsx)(n.code,{children:"file:"}),"\u5f00\u59cb, \u5982: ",(0,s.jsx)(n.code,{children:"file:/root/seata-config/registry"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ docker run --name seata-server \\\n        -p 8091:8091 \\\n        -e SEATA_CONFIG_NAME=file:/root/seata-config/registry \\\n        -v /User/seata/config:/root/seata-config  \\\n        seataio/seata-server\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"-e"})," \u7528\u4e8e\u914d\u7f6e\u73af\u5883\u53d8\u91cf\uff0c ",(0,s.jsx)(n.code,{children:"-v"})," \u7528\u4e8e\u6302\u8f7d\u5bbf\u4e3b\u673a\u7684\u76ee\u5f55"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6307\u5b9a file.conf"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u540c\u65f6\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"file.conf"})," \u914d\u7f6e\u6587\u4ef6\uff0c\u5219\u9700\u8981\u5728 ",(0,s.jsx)(n.code,{children:"registry.conf"})," \u6587\u4ef6\u4e2d\u5c06 ",(0,s.jsx)(n.code,{children:"config"})," \u914d\u7f6e\u6539\u4e3a\u4ee5\u4e0b\u5185\u5bb9\uff0c",(0,s.jsx)(n.code,{children:"name"})," \u7684\u503c\u4e3a\u5bb9\u5668\u4e2d\u5bf9\u5e94\u7684\u8def\u5f84"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'config {\n  type = "file"\n\n  file {\n    name = "file:/root/seata-config/file.conf"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,s.jsx)(n.p,{children:"seata-server \u652f\u6301\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SEATA_IP"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u53ef\u9009, \u6307\u5b9aseata-server\u542f\u52a8\u7684IP, \u8be5IP\u7528\u4e8e\u5411\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u65f6\u4f7f\u7528, \u5982eureka\u7b49"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SEATA_PORT"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53ef\u9009, \u6307\u5b9aseata-server\u542f\u52a8\u7684\u7aef\u53e3, \u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"8091"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"STORE_MODE"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53ef\u9009, \u6307\u5b9aseata-server\u7684\u4e8b\u52a1\u65e5\u5fd7\u5b58\u50a8\u65b9\u5f0f, \u652f\u6301",(0,s.jsx)(n.code,{children:"db"})," ,",(0,s.jsx)(n.code,{children:"file"}),",redis(Seata-Server 1.3\u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301), \u9ed8\u8ba4\u662f ",(0,s.jsx)(n.code,{children:"file"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SERVER_NODE"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53ef\u9009, \u7528\u4e8e\u6307\u5b9aseata-server\u8282\u70b9ID, \u5982 ",(0,s.jsx)(n.code,{children:"1"}),",",(0,s.jsx)(n.code,{children:"2"}),",",(0,s.jsx)(n.code,{children:"3"}),"..., \u9ed8\u8ba4\u4e3a ",(0,s.jsx)(n.code,{children:"\u6839\u636eip\u751f\u6210"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SEATA_ENV"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53ef\u9009, \u6307\u5b9a seata-server \u8fd0\u884c\u73af\u5883, \u5982 ",(0,s.jsx)(n.code,{children:"dev"}),", ",(0,s.jsx)(n.code,{children:"test"})," \u7b49, \u670d\u52a1\u542f\u52a8\u65f6\u4f1a\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"registry-dev.conf"})," \u8fd9\u6837\u7684\u914d\u7f6e"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"SEATA_CONFIG_NAME"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53ef\u9009, \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e, \u5982 ",(0,s.jsx)(n.code,{children:"file:/root/registry"}),", \u5c06\u4f1a\u52a0\u8f7d ",(0,s.jsx)(n.code,{children:"/root/registry.conf"})," \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u679c\u9700\u8981\u540c\u65f6\u6307\u5b9a ",(0,s.jsx)(n.code,{children:"file.conf"}),"\u6587\u4ef6\uff0c\u9700\u8981\u5c06",(0,s.jsx)(n.code,{children:"registry.conf"}),"\u7684",(0,s.jsx)(n.code,{children:"config.file.name"}),"\u7684\u503c\u6539\u4e3a\u7c7b\u4f3c",(0,s.jsx)(n.code,{children:"file:/root/file.conf"}),"\uff1a"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(96540);const c={},o=s.createContext(c);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);