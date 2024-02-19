"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[88369],{57295:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(74848),c=n(28453);const o={hidden:!0,title:"Docker\u90e8\u7f72",keywords:["docker","docker-compose","ops"],description:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",author:"helloworlde",date:new Date("2019-11-25T00:00:00.000Z")},l="\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server (1.5.0\u53ca\u4ee5\u4e0a)",i={id:"ops/deploy-by-docker",title:"Docker\u90e8\u7f72",description:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.8/ops/deploy-by-docker.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker",permalink:"/zh-cn/docs/v1.8/ops/deploy-by-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.8/ops/deploy-by-docker.md",tags:[],version:"v1.8",frontMatter:{hidden:!0,title:"Docker\u90e8\u7f72",keywords:["docker","docker-compose","ops"],description:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server",author:"helloworlde",date:"2019-11-25T00:00:00.000Z"},sidebar:"docs",previous:{title:"\u76f4\u63a5\u90e8\u7f72",permalink:"/zh-cn/docs/v1.8/ops/deploy-server"},next:{title:"Docker compose\u90e8\u7f72",permalink:"/zh-cn/docs/v1.8/ops/deploy-by-docker-compose"}},a={},d=[{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u542f\u52a8seata-server\u5b9e\u4f8b",id:"\u542f\u52a8seata-server\u5b9e\u4f8b",level:4},{value:"\u6307\u5b9aseata-server IP\u548c\u7aef\u53e3 \u542f\u52a8",id:"\u6307\u5b9aseata-server-ip\u548c\u7aef\u53e3-\u542f\u52a8",level:4},{value:"Docker compose \u542f\u52a8",id:"docker-compose-\u542f\u52a8",level:4},{value:"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7",id:"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7",level:2},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2}];function t(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"\u4f7f\u7528-docker-\u90e8\u7f72-seata-server-150\u53ca\u4ee5\u4e0a",children:"\u4f7f\u7528 Docker \u90e8\u7f72 Seata Server (1.5.0\u53ca\u4ee5\u4e0a)"}),"\n",(0,r.jsx)("a",{href:"./deploy-by-docker-142",children:"\u67e5\u770b1.4.2\u7248\u672c"}),"\n",(0,r.jsx)(s.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u907f\u514d\u76f4\u63a5\u62c9\u53d6latest\u7248\u672c\u955c\u50cf\uff0clatest\u7248\u672c\u5e76\u4e0d\u4e00\u5b9a\u662f\u7a33\u5b9a\u7248\u672c\uff0c\u4e3a\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u95ee\u9898\uff0c\u8bf7\u5230",(0,r.jsx)(s.a,{href:"https://hub.docker.com/r/seataio/seata-server/tags",children:"docker\u955c\u50cf\u4ed3\u5e93"}),"\n\u786e\u5b9a\u8981\u62c9\u53d6\u7684\u955c\u50cf\u7248\u672c\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u82e5docker\u663e\u793a\u7684",(0,r.jsx)(s.code,{children:"date"}),"\u65f6\u95f4\u4e0d\u6b63\u786e\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e4b\u4e00\u8bbe\u7f6e\u3002","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u52a0\u5165docker\u73af\u5883\u53d8\u91cf TZ=Asia/Shanghai"}),"\n",(0,r.jsx)(s.li,{children:"\u6302\u8f7d\u5bbf\u4e3b\u673a\u7684\u65f6\u533a\u914d\u7f6e -v /etc/localtime:/etc/localtime -v /etc/timezone:/etc/timezone"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,r.jsx)(s.h4,{id:"\u542f\u52a8seata-server\u5b9e\u4f8b",children:"\u542f\u52a8seata-server\u5b9e\u4f8b"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ docker run --name seata-server -p 8091:8091 -p 7091:7091 seataio/seata-server:1.5.0\n"})}),"\n",(0,r.jsx)(s.h4,{id:"\u6307\u5b9aseata-server-ip\u548c\u7aef\u53e3-\u542f\u52a8",children:"\u6307\u5b9aseata-server IP\u548c\u7aef\u53e3 \u542f\u52a8"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ docker run --name seata-server \\\n        -p 8091:8091 \\\n        -p 7091:7091 \\\n        -e SEATA_IP=192.168.1.1 \\\n        -e SEATA_PORT=8091 \\\n        seataio/seata-server\n"})}),"\n",(0,r.jsx)(s.h4,{id:"docker-compose-\u542f\u52a8",children:"Docker compose \u542f\u52a8"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"docker-compose.yaml"})," \u793a\u4f8b"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'version: "3"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "8091:8091"\n      - "7091:7091"\n    environment:\n      - SEATA_PORT=8091\n      - STORE_MODE=file\n'})}),"\n",(0,r.jsx)(s.h2,{id:"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7",children:"\u5bb9\u5668\u547d\u4ee4\u884c\u53ca\u67e5\u770b\u65e5\u5fd7"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ docker exec -it seata-server sh\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ docker logs -f seata-server\n"})}),"\n",(0,r.jsx)(s.h2,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,r.jsxs)(s.p,{children:["\u81ea\u5b9a\u4e49\u914d\u7f6e\u6587\u4ef6\u9700\u8981\u901a\u8fc7\u6302\u8f7d\u6587\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u5c06\u5bbf\u4e3b\u673a\u4e0a\u7684 ",(0,r.jsx)(s.code,{children:"application.yml"}),"  \u6302\u8f7d\u5230\u5bb9\u5668\u4e2d\u76f8\u5e94\u7684\u76ee\u5f55"]}),"\n",(0,r.jsx)(s.p,{children:"\u9996\u5148\u542f\u52a8\u4e00\u4e2a\u7528\u6237\u5c06resources\u76ee\u5f55\u6587\u4ef6\u62f7\u51fa\u7684\u4e34\u65f6\u5bb9\u5668"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"docker run -d -p 8091:8091 -p 7091:7091  --name seata-serve seataio/seata-server:latest\ndocker cp seata-serve:/seata-server/resources /User/seata/config\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u62f7\u51fa\u540e\u53ef\u4ee5,\u53ef\u4ee5\u9009\u62e9\u4fee\u6539application.yml\u518dcp\u8fdb\u5bb9\u5668,\u6216\u8005rm\u4e34\u65f6\u5bb9\u5668,\u5982\u4e0b\u91cd\u65b0\u521b\u5efa,\u5e76\u505a\u597d\u6620\u5c04\u8def\u5f84\u8bbe\u7f6e"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u6307\u5b9a application.yml"}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"$ docker run --name seata-server \\\n        -p 8091:8091 \\\n        -p 7091:7091 \\\n        -v /User/seata/config:/seata-server/resources  \\\n        seataio/seata-server\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u5176\u4e2d ",(0,r.jsx)(s.code,{children:"-e"})," \u7528\u4e8e\u914d\u7f6e\u73af\u5883\u53d8\u91cf\uff0c ",(0,r.jsx)(s.code,{children:"-v"})," \u7528\u4e8e\u6302\u8f7d\u5bbf\u4e3b\u673a\u7684\u76ee\u5f55,\u5982\u679c\u662f\u4ee5file\u5b58\u50a8\u6a21\u5f0f\u8fd0\u884c,\u8bf7\u52a0\u4e0a-v /User/seata/sessionStore :/seata-server/sessionStore \u5c06file\u7684\u6570\u636e\u6587\u4ef6\u6620\u5c04\u5230\u5bbf\u4e3b\u673a,\u4ee5\u9632\u6570\u636e\u4e22\u5931(\u6ce8:/User/seata/config\u548c/User/seata/sessionStore\u53ef\u81ea\u5b9a\u4e49\u5bbf\u4e3b\u673a\u76ee\u5f55,\u65e0\u9700\u7167\u642c)"]}),"\n",(0,r.jsx)(s.p,{children:"\u63a5\u4e0b\u6765\u4f60\u53ef\u4ee5\u770b\u5230\u5bbf\u4e3b\u673a\u5bf9\u5e94\u76ee\u5f55\u4e0b\u5df2\u7ecf\u6709\u4e86,logback-spring.xml,application.example.yml,application.yml \u5982\u679c\u6bd4\u8f83\u719f\u6089springboot,\u90a3\u4e48\u63a5\u4e0b\u6765\u5c31\u5f88\u7b80\u5355\u4e86,\u53ea\u9700\u8981\u4fee\u6539application.yml\u5373\u53ef,\u8be6\u7ec6\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003application.example.yml,\u8be5\u6587\u4ef6\u5b58\u653e\u4e86\u6240\u6709\u53ef\u4f7f\u7528\u7684\u8be6\u7ec6\u914d\u7f6e"}),"\n",(0,r.jsx)(s.h2,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,r.jsx)(s.p,{children:"seata-server \u652f\u6301\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\uff1a"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"SEATA_IP"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"\u53ef\u9009, \u6307\u5b9aseata-server\u542f\u52a8\u7684IP, \u8be5IP\u7528\u4e8e\u5411\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u65f6\u4f7f\u7528, \u5982eureka\u7b49"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"SEATA_PORT"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u53ef\u9009, \u6307\u5b9aseata-server\u542f\u52a8\u7684\u7aef\u53e3, \u9ed8\u8ba4\u4e3a ",(0,r.jsx)(s.code,{children:"8091"})]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"STORE_MODE"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u53ef\u9009, \u6307\u5b9aseata-server\u7684\u4e8b\u52a1\u65e5\u5fd7\u5b58\u50a8\u65b9\u5f0f, \u652f\u6301",(0,r.jsx)(s.code,{children:"db"})," ,",(0,r.jsx)(s.code,{children:"file"}),",redis(Seata-Server 1.3\u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301), \u9ed8\u8ba4\u662f ",(0,r.jsx)(s.code,{children:"file"})]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"SERVER_NODE"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u53ef\u9009, \u7528\u4e8e\u6307\u5b9aseata-server\u8282\u70b9ID, \u5982 ",(0,r.jsx)(s.code,{children:"1"}),",",(0,r.jsx)(s.code,{children:"2"}),",",(0,r.jsx)(s.code,{children:"3"}),"..., \u9ed8\u8ba4\u4e3a ",(0,r.jsx)(s.code,{children:"\u6839\u636eip\u751f\u6210"})]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"SEATA_ENV"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u53ef\u9009, \u6307\u5b9a seata-server \u8fd0\u884c\u73af\u5883, \u5982 ",(0,r.jsx)(s.code,{children:"dev"}),", ",(0,r.jsx)(s.code,{children:"test"})," \u7b49, \u670d\u52a1\u542f\u52a8\u65f6\u4f1a\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"registry-dev.conf"})," \u8fd9\u6837\u7684\u914d\u7f6e"]}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"SEATA_CONFIG_NAME"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["\u53ef\u9009, \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e, \u5982 ",(0,r.jsx)(s.code,{children:"file:/root/registry"}),", \u5c06\u4f1a\u52a0\u8f7d ",(0,r.jsx)(s.code,{children:"/root/registry.conf"})," \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u679c\u9700\u8981\u540c\u65f6\u6307\u5b9a ",(0,r.jsx)(s.code,{children:"file.conf"}),"\u6587\u4ef6\uff0c\u9700\u8981\u5c06",(0,r.jsx)(s.code,{children:"registry.conf"}),"\u7684",(0,r.jsx)(s.code,{children:"config.file.name"}),"\u7684\u503c\u6539\u4e3a\u7c7b\u4f3c",(0,r.jsx)(s.code,{children:"file:/root/file.conf"}),"\uff1a"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>i});var r=n(96540);const c={},o=r.createContext(c);function l(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);