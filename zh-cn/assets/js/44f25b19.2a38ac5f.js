"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[76248],{67645:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=s(74848),c=s(28453);const o={hidden:!0,title:"\u4f7f\u7528 Docker compose \u5feb\u901f\u90e8\u7f72 Seata Server",keywords:["docker-compose","ops"],description:"\u4f7f\u7528 Docker-compose \u5feb\u901f\u90e8\u7f72 Seata Server",author:"zouwei",date:new Date("2021-12-05T00:00:00.000Z")},a="\u4f7f\u7528 docker-compose \u90e8\u7f72 Seata Server",i={id:"ops/deploy-by-docker-compose-142",title:"\u4f7f\u7528 Docker compose \u5feb\u901f\u90e8\u7f72 Seata Server",description:"\u4f7f\u7528 Docker-compose \u5feb\u901f\u90e8\u7f72 Seata Server",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.0/ops/deploy-by-docker-compose-142.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker-compose-142",permalink:"/zh-cn/docs/ops/deploy-by-docker-compose-142",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v2.0/ops/deploy-by-docker-compose-142.md",tags:[],version:"v2.0",frontMatter:{hidden:!0,title:"\u4f7f\u7528 Docker compose \u5feb\u901f\u90e8\u7f72 Seata Server",keywords:["docker-compose","ops"],description:"\u4f7f\u7528 Docker-compose \u5feb\u901f\u90e8\u7f72 Seata Server",author:"zouwei",date:"2021-12-05T00:00:00.000Z"}},t={},d=[{value:"\u5386\u53f2\u7248\u672c\u90e8\u7f72",id:"\u5386\u53f2\u7248\u672c\u90e8\u7f72",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"<a>\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cfile\u5b58\u50a8</a>",id:"\u65e0\u6ce8\u518c\u4e2d\u5fc3file\u5b58\u50a8",level:3},{value:"<a>\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cDB\u5b58\u50a8</a>",id:"\u65e0\u6ce8\u518c\u4e2d\u5fc3db\u5b58\u50a8",level:3},{value:"<a>nacos\u6ce8\u518c\u4e2d\u5fc3\uff0cdb\u5b58\u50a8</a>",id:"nacos\u6ce8\u518c\u4e2d\u5fc3db\u5b58\u50a8",level:3},{value:"<a>\u9ad8\u53ef\u7528\u90e8\u7f72</a>",id:"\u9ad8\u53ef\u7528\u90e8\u7f72",level:3},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u4f7f\u7528-docker-compose-\u90e8\u7f72-seata-server",children:"\u4f7f\u7528 docker-compose \u90e8\u7f72 Seata Server"}),"\n",(0,r.jsx)(n.h2,{id:"\u5386\u53f2\u7248\u672c\u90e8\u7f72",children:"\u5386\u53f2\u7248\u672c\u90e8\u7f72"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/ops/deploy-by-docker-compose-142/",children:"1.5.0\u4ee5\u524d\u7248\u672c"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/ops/deploy-by-docker-compose/",children:"1.5.0\u4ee5\u540e\u7248\u672c(\u542b1.5.0)"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u907f\u514d\u76f4\u63a5\u62c9\u53d6latest\u7248\u672c\u955c\u50cf\uff0clatest\u7248\u672c\u5e76\u4e0d\u4e00\u5b9a\u662f\u7a33\u5b9a\u7248\u672c\uff0c\u4e3a\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u95ee\u9898\uff0c\u8bf7\u5230",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/seataio/seata-server/tags",children:"docker\u955c\u50cf\u4ed3\u5e93"}),"\u786e\u5b9a\u8981\u62c9\u53d6\u7684\u955c\u50cf\u7248\u672c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"#file-file",children:"\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cfile\u5b58\u50a8"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"#file-db",children:"\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cdb\u5b58\u50a8"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"#nacos-db",children:"nacos\u6ce8\u518c\u4e2d\u5fc3\uff0cdb\u5b58\u50a8"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"#ha-nacos-db",children:"\u9ad8\u53ef\u7528\u90e8\u7f72"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u65e0\u6ce8\u518c\u4e2d\u5fc3file\u5b58\u50a8",children:(0,r.jsx)("a",{id:"file-file",children:"\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cfile\u5b58\u50a8"})}),"\n",(0,r.jsx)(n.p,{children:"\u8be5\u6a21\u5f0f\u4e0b\uff0c\u4e0d\u9700\u8981\u6ce8\u518c\u4e2d\u5fc3\uff0c\u4e5f\u4e0d\u9700\u8981\u4efb\u4f55\u7b2c\u4e09\u65b9\u5b58\u50a8\u4e2d\u5fc3\u3002"}),"\n",(0,r.jsx)(n.p,{children:"docker-compose.yaml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "8091:8091"\n    environment:\n      - SEATA_PORT=8091\n      - STORE_MODE=file\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u65e0\u6ce8\u518c\u4e2d\u5fc3db\u5b58\u50a8",children:(0,r.jsx)("a",{id:"file-db",children:"\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff0cDB\u5b58\u50a8"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["db\u6a21\u5f0f\u9700\u8981\u5728\u6570\u636e\u5e93\u521b\u5efa\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\uff0c",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db",children:"[\u5efa\u8868\u811a\u672c]"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff081\uff09\u51c6\u5907file.conf\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f\u652f\u6301\u53ef\u53c2\u8003",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt",children:"\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"# \u5b58\u50a8\u6a21\u5f0f\nstore.mode=db\n\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# \u9700\u8981\u6839\u636emysql\u7684\u7248\u672c\u8c03\u6574driverClassName\n# mysql8\u53ca\u4ee5\u4e0a\u7248\u672c\u5bf9\u5e94\u7684driver\uff1acom.mysql.cj.jdbc.Driver\n# mysql8\u4ee5\u4e0b\u7248\u672c\u7684driver\uff1acom.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\n# \u6ce8\u610f\u6839\u636e\u751f\u4ea7\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\u53c2\u6570host\u548cport\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n# \u6570\u636e\u5e93\u7528\u6237\u540d\nstore.db.user=\n# \u7528\u6237\u540d\u5bc6\u7801\nstore.db.password=\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff082\uff09\u51c6\u5907registry.conf\u6587\u4ef6"})}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u6ce8\u518c\u4e2d\u5fc3\u652f\u6301\u53ef\u53c2\u8003",(0,r.jsx)("a",{href:"/docs/user/registry/",children:"\u6ce8\u518c\u4e2d\u5fc3"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u914d\u7f6e\u4e2d\u5fc3\u652f\u6301\u53ef\u53c2\u8003",(0,r.jsx)("a",{href:"/docs/user/configuration/",children:"\u914d\u7f6e\u4e2d\u5fc3"})]}),"\n",(0,r.jsx)(n.p,{children:"\u76f4\u8fde\u6a21\u5f0f\uff08\u65e0\u6ce8\u518c\u4e2d\u5fc3\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'registry {\n  type = "file"\n}\n\nconfig {\n  type = "file"\n  \n  file {\n    name="file:/root/seata-config/file.conf"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff083\uff09\u51c6\u5907docker-compose.yaml\u6587\u4ef6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "8091:8091"\n    environment:\n      - SEATA_PORT=8091\n      - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n    volumes:\n    # \u9700\u8981\u628afile.conf\u548cregistry.conf\u90fd\u653e\u5230./seata-server/config\u6587\u4ef6\u5939\u4e2d\n      - "./seata-server/config:/root/seata-config"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"nacos\u6ce8\u518c\u4e2d\u5fc3db\u5b58\u50a8",children:(0,r.jsx)("a",{id:"nacos-db",children:"nacos\u6ce8\u518c\u4e2d\u5fc3\uff0cdb\u5b58\u50a8"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["db\u6a21\u5f0f\u9700\u8981\u5728\u6570\u636e\u5e93\u521b\u5efa\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\uff0c",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db",children:"[\u5efa\u8868\u811a\u672c]"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff081\uff09\u51c6\u5907registry.conf\u6587\u4ef6"})}),"\n",(0,r.jsx)(n.p,{children:"nacos\u6ce8\u518c\u4e2d\u5fc3\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u6ce8\u518c\u4e2d\u5fc3\u652f\u6301\u53ef\u53c2\u8003",(0,r.jsx)("a",{href:"/docs/user/registry/",children:"\u6ce8\u518c\u4e2d\u5fc3"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u914d\u7f6e\u4e2d\u5fc3\u652f\u6301\u53ef\u53c2\u8003",(0,r.jsx)("a",{href:"/docs/user/configuration/",children:"\u914d\u7f6e\u4e2d\u5fc3"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'registry {\n  type = "nacos"\n  \n  nacos {\n  # seata\u670d\u52a1\u6ce8\u518c\u5728nacos\u4e0a\u7684\u522b\u540d\uff0c\u5ba2\u6237\u7aef\u901a\u8fc7\u8be5\u522b\u540d\u8c03\u7528\u670d\u52a1\n    application = "seata-server"\n  # \u8bf7\u6839\u636e\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u914d\u7f6enacos\u670d\u52a1\u7684ip\u548c\u7aef\u53e3\n    serverAddr = "127.0.0.1:8848"\n  # nacos\u4e0a\u6307\u5b9a\u7684namespace\n    namespace = ""\n    cluster = "default"\n    username = "nacos"\n    password = "nacos"\n  }\n}\n\nconfig {\n  type = "nacos"\n  \n  nacos {\n    # \u8bf7\u6839\u636e\u5b9e\u9645\u751f\u4ea7\u73af\u5883\u914d\u7f6enacos\u670d\u52a1\u7684ip\u548c\u7aef\u53e3\n    serverAddr = "127.0.0.1:8848"\n    # nacos\u4e0a\u6307\u5b9a\u7684namespace\n    namespace = ""\n    group = "SEATA_GROUP"\n    username = "nacos"\n    password = "nacos"\n  # \u4ecev1.4.2\u7248\u672c\u5f00\u59cb\uff0c\u5df2\u652f\u6301\u4ece\u4e00\u4e2aNacos dataId\u4e2d\u83b7\u53d6\u6240\u6709\u914d\u7f6e\u4fe1\u606f,\u4f60\u53ea\u9700\u8981\u989d\u5916\u6dfb\u52a0\u4e00\u4e2adataId\u914d\u7f6e\u9879\n    dataId: "seataServer.properties"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff082\uff09\u51c6\u5907nacos\u914d\u7f6e\u4e2d\u5fc3\u914d\u7f6e"})}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f\u652f\u6301\u53ef\u53c2\u8003",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt",children:"\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u4f60\u9700\u8981\u5728nacos\u65b0\u5efa\u914d\u7f6e\uff0c\u6b64\u5904dataId\u4e3aseataServer.properties"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"# \u5b58\u50a8\u6a21\u5f0f\nstore.mode=db\n\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# \u9700\u8981\u6839\u636emysql\u7684\u7248\u672c\u8c03\u6574driverClassName\n# mysql8\u53ca\u4ee5\u4e0a\u7248\u672c\u5bf9\u5e94\u7684driver\uff1acom.mysql.cj.jdbc.Driver\n# mysql8\u4ee5\u4e0b\u7248\u672c\u7684driver\uff1acom.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\n# \u6ce8\u610f\u6839\u636e\u751f\u4ea7\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\u53c2\u6570host\u548cport\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n# \u6570\u636e\u5e93\u7528\u6237\u540d\nstore.db.user=\n# \u7528\u6237\u540d\u5bc6\u7801\nstore.db.password=\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff083\uff09\u51c6\u5907docker-compose.yaml\u6587\u4ef6"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "8091:8091"\n    environment:\n      # \u6307\u5b9aseata\u670d\u52a1\u542f\u52a8\u7aef\u53e3\n      - SEATA_PORT=8091\n      # \u6ce8\u518c\u5230nacos\u4e0a\u7684ip\u3002\u5ba2\u6237\u7aef\u5c06\u901a\u8fc7\u8be5ip\u8bbf\u95eeseata\u670d\u52a1\u3002\n      # \u6ce8\u610f\u516c\u7f51ip\u548c\u5185\u7f51ip\u7684\u5dee\u5f02\u3002\n      - SEATA_IP=127.0.0.1\n      - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n    volumes:\n    # \u56e0\u4e3aregistry.conf\u4e2d\u662fnacos\u914d\u7f6e\u4e2d\u5fc3\uff0c\u53ea\u9700\u8981\u628aregistry.conf\u653e\u5230./seata-server/config\u6587\u4ef6\u5939\u4e2d\n      - "./seata-server/config:/root/seata-config"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u9ad8\u53ef\u7528\u90e8\u7f72",children:(0,r.jsx)("a",{id:"ha-nacos-db",children:"\u9ad8\u53ef\u7528\u90e8\u7f72"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"seata\u9ad8\u53ef\u7528\u4f9d\u8d56\u4e8e\u6ce8\u518c\u4e2d\u5fc3\u3001\u6570\u636e\u5e93\uff0c\u53ef\u4e0d\u4f9d\u8d56\u914d\u7f6e\u4e2d\u5fc3\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["db\u6a21\u5f0f\u9700\u8981\u5728\u6570\u636e\u5e93\u521b\u5efa\u5bf9\u5e94\u7684\u8868\u7ed3\u6784\uff0c",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db",children:"[\u5efa\u8868\u811a\u672c]"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff081\uff09\u51c6\u5907file.conf\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f\u652f\u6301\u53ef\u53c2\u8003",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt",children:"\u66f4\u591a\u5b58\u50a8\u6a21\u5f0f"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"# \u5b58\u50a8\u6a21\u5f0f\nstore.mode=db\n\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# \u9700\u8981\u6839\u636emysql\u7684\u7248\u672c\u8c03\u6574driverClassName\n# mysql8\u53ca\u4ee5\u4e0a\u7248\u672c\u5bf9\u5e94\u7684driver\uff1acom.mysql.cj.jdbc.Driver\n# mysql8\u4ee5\u4e0b\u7248\u672c\u7684driver\uff1acom.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\n# \u6ce8\u610f\u6839\u636e\u751f\u4ea7\u5b9e\u9645\u60c5\u51b5\u8c03\u6574\u53c2\u6570host\u548cport\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n# \u6570\u636e\u5e93\u7528\u6237\u540d\nstore.db.user=\n# \u7528\u6237\u540d\u5bc6\u7801\nstore.db.password=\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff082\uff09\u51c6\u5907registry.conf\u6587\u4ef6"})}),"\n",(0,r.jsx)(n.p,{children:"nacos\u6ce8\u518c\u4e2d\u5fc3\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u6ce8\u518c\u4e2d\u5fc3\u652f\u6301\u53ef\u53c2\u8003",(0,r.jsx)("a",{href:"/docs/user/registry/",children:"\u6ce8\u518c\u4e2d\u5fc3"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u914d\u7f6e\u4e2d\u5fc3\u652f\u6301\u53ef\u53c2\u8003",(0,r.jsx)("a",{href:"/docs/user/configuration/",children:"\u914d\u7f6e\u4e2d\u5fc3"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'registry {\n  type = "nacos"\n  \n  nacos {\n  # seata\u670d\u52a1\u6ce8\u518c\u5728nacos\u4e0a\u7684\u522b\u540d\uff0c\u5ba2\u6237\u7aef\u901a\u8fc7\u8be5\u522b\u540d\u8c03\u7528\u670d\u52a1\n    application = "seata-server"\n  # nacos\u670d\u52a1\u7684ip\u548c\u7aef\u53e3\n    serverAddr = "127.0.0.1:8848"\n  # nacos\u4e0a\u6307\u5b9a\u7684namespace\n    namespace = ""\n    cluster = "default"\n    username = "nacos"\n    password = "nacos"\n  }\n}\n\nconfig {\n  type = "file"\n  \n  file {\n    name="file:/root/seata-config/file.conf"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff083\uff09\u51c6\u5907docker-compose.yaml\u6587\u4ef6"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u53ea\u8981\u4fdd\u6301\u914d\u7f6e\u4e00\u81f4\uff0cseata\u670d\u52a1\u53ef\u5728\u4e00\u53f0\u673a\u5668\u4e0a\u90e8\u7f72\u591a\u5b9e\u4f8b\uff0c\u4e5f\u53ef\u540c\u65f6\u90e8\u7f72\u5728\u591a\u53f0\u4e0d\u540c\u7684\u4e3b\u673a\u4e0b\u9762\u5b9e\u73b0\u670d\u52a1\u9ad8\u53ef\u7528\u3002\n",(0,r.jsx)(n.a,{href:"/docs/ops/deploy-ha/",children:"\u9ad8\u53ef\u7528\u90e8\u7f72"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n  # seata\u670d\u52a11\n  seata-server-1:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "8091:8091"\n    environment:\n      # \u6307\u5b9aseata\u670d\u52a1\u542f\u52a8\u7aef\u53e3\n      - SEATA_PORT=8091\n      # \u6ce8\u518c\u5230nacos\u4e0a\u7684ip\u3002\u5ba2\u6237\u7aef\u5c06\u901a\u8fc7\u8be5ip\u8bbf\u95eeseata\u670d\u52a1\u3002\n      # \u6ce8\u610f\u516c\u7f51ip\u548c\u5185\u7f51ip\u7684\u5dee\u5f02\u3002\n      - SEATA_IP=127.0.0.1\n      - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n    volumes:\n    # \u9700\u8981\u628afile.conf\u548cregistry.conf\u90fd\u653e\u5230./seata-server/config\u6587\u4ef6\u5939\u4e2d\n      - "./seata-server/config:/root/seata-config"\n  # seata\u670d\u52a12\n  seata-server-2:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "8092:8092"\n    environment:\n      # \u6307\u5b9aseata\u670d\u52a1\u542f\u52a8\u7aef\u53e3\n      - SEATA_PORT=8092\n      # \u6ce8\u518c\u5230nacos\u4e0a\u7684ip\u3002\u5ba2\u6237\u7aef\u5c06\u901a\u8fc7\u8be5ip\u8bbf\u95eeseata\u670d\u52a1\u3002\n      # \u6ce8\u610f\u516c\u7f51ip\u548c\u5185\u7f51ip\u7684\u5dee\u5f02\u3002\n      - SEATA_IP=127.0.0.1\n      - SEATA_CONFIG_NAME=file:/root/seata-config/registry\n    volumes:\n    # \u9700\u8981\u628afile.conf\u548cregistry.conf\u90fd\u653e\u5230./seata-server/config\u6587\u4ef6\u5939\u4e2d\n      - "./seata-server/config:/root/seata-config"\n  \n  # seata\u670d\u52a13......seata\u670d\u52a1N\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"seata-server \u652f\u6301\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_IP"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u53ef\u9009, \u6307\u5b9aseata-server\u542f\u52a8\u7684IP, \u8be5IP\u7528\u4e8e\u5411\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u65f6\u4f7f\u7528, \u5982eureka\u7b49"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_PORT"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u53ef\u9009, \u6307\u5b9aseata-server\u542f\u52a8\u7684\u7aef\u53e3, \u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"8091"})]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"STORE_MODE"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u53ef\u9009, \u6307\u5b9aseata-server\u7684\u4e8b\u52a1\u65e5\u5fd7\u5b58\u50a8\u65b9\u5f0f, \u652f\u6301",(0,r.jsx)(n.code,{children:"db"}),", ",(0,r.jsx)(n.code,{children:"file"}),", ",(0,r.jsx)(n.code,{children:"redis"}),"(Seata-Server 1.3\u53ca\u4ee5\u4e0a\u7248\u672c\u652f\u6301), \u9ed8\u8ba4\u662f ",(0,r.jsx)(n.code,{children:"file"})]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SERVER_NODE"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u53ef\u9009, \u7528\u4e8e\u6307\u5b9aseata-server\u8282\u70b9ID, \u5982 ",(0,r.jsx)(n.code,{children:"1"}),",",(0,r.jsx)(n.code,{children:"2"}),",",(0,r.jsx)(n.code,{children:"3"}),"..., \u9ed8\u8ba4\u4e3a ",(0,r.jsx)(n.code,{children:"\u6839\u636eip\u751f\u6210"})]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_ENV"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u53ef\u9009, \u6307\u5b9a seata-server \u8fd0\u884c\u73af\u5883, \u5982 ",(0,r.jsx)(n.code,{children:"dev"}),", ",(0,r.jsx)(n.code,{children:"test"})," \u7b49, \u670d\u52a1\u542f\u52a8\u65f6\u4f1a\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"registry-dev.conf"})," \u8fd9\u6837\u7684\u914d\u7f6e"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_CONFIG_NAME"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u53ef\u9009, \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u4f4d\u7f6e, \u5982 ",(0,r.jsx)(n.code,{children:"file:/root/registry"}),", \u5c06\u4f1a\u52a0\u8f7d ",(0,r.jsx)(n.code,{children:"/root/registry.conf"})," \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\u679c\u9700\u8981\u540c\u65f6\u6307\u5b9a ",(0,r.jsx)(n.code,{children:"file.conf"}),"\u6587\u4ef6\uff0c\u9700\u8981\u5c06",(0,r.jsx)(n.code,{children:"registry.conf"}),"\u7684",(0,r.jsx)(n.code,{children:"config.file.name"}),"\u7684\u503c\u6539\u4e3a\u7c7b\u4f3c",(0,r.jsx)(n.code,{children:"file:/root/file.conf"}),"\uff1a"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var r=s(96540);const c={},o=r.createContext(c);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);