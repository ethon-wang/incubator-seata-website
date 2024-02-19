"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[13826],{22687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=n(74848),r=n(28453);const c={title:"SQL\u9650\u5236",keywords:["Seata"],description:"Seata SQL\u9650\u5236"},i="SQL\u9650\u5236",o={id:"user/sqlreference/sql-restrictions",title:"SQL\u9650\u5236",description:"Seata SQL\u9650\u5236",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5/user/sqlreference/sql-restrictions.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/sql-restrictions",permalink:"/zh-cn/docs/v1.5/user/sqlreference/sql-restrictions",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5/user/sqlreference/sql-restrictions.md",tags:[],version:"v1.5",frontMatter:{title:"SQL\u9650\u5236",keywords:["Seata"],description:"Seata SQL\u9650\u5236"},sidebar:"docs",previous:{title:"\u6570\u636e\u5e93\u7c7b\u578b\u652f\u6301",permalink:"/zh-cn/docs/v1.5/user/datasource"},next:{title:"DML\u8bed\u53e5",permalink:"/zh-cn/docs/v1.5/user/sqlreference/dml"}},a={},l=[{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:3}];function d(e){const t={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"sql\u9650\u5236",children:"SQL\u9650\u5236"}),"\n",(0,s.jsx)(t.p,{children:"Seata \u4e8b\u52a1\u76ee\u524d\u652f\u6301 INSERT\u3001UPDATE\u3001DELETE \u4e09\u7c7b DML \u8bed\u6cd5\u7684\u90e8\u5206\u529f\u80fd\uff0c\u8fd9\u4e9b\u7c7b\u578b\u90fd\u662f\u5df2\u7ecf\u7ecf\u8fc7Seata\u5f00\u6e90\u793e\u533a\u7684\u9a8c\u8bc1\u3002SQL \u7684\u652f\u6301\u8303\u56f4\u8fd8\u5728\u4e0d\u65ad\u6269\u5927\uff0c\u5efa\u8bae\u5728\u672c\u6587\u9650\u5236\u7684\u8303\u56f4\u5185\u4f7f\u7528\u3002\u5982\u679c\u60a8\u6709\u610f\u5e2e\u52a9\u793e\u533a\u652f\u6301\u66f4\u591a\u7c7b\u578b\u7684SQL\uff0c\u8bf7\u63d0\u4ea4PR\u7533\u8bf7\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u4f7f\u7528\u9650\u5236",children:"\u4f7f\u7528\u9650\u5236"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\u4e0d\u652f\u6301 SQL \u5d4c\u5957"}),"\n",(0,s.jsxs)(t.li,{children:["\u4e0d\u652f\u6301\u591a\u8868\u590d\u6742 SQL(\u81ea1.6.0\u7248\u672c\uff0cMySQL\u652f\u6301UPDATE JOIN\u8bed\u53e5\uff0c",(0,s.jsx)("a",{href:"./dml",children:"\u8be6\u60c5\u8bf7\u770b"})," )"]}),"\n",(0,s.jsx)(t.li,{children:"\u4e0d\u652f\u6301\u5b58\u50a8\u8fc7\u7a0b\u3001\u89e6\u53d1\u5668"}),"\n",(0,s.jsx)(t.li,{children:"\u90e8\u5206\u6570\u636e\u5e93\u4e0d\u652f\u6301\u6279\u91cf\u66f4\u65b0\uff0c\u5728\u4f7f\u7528 MySQL\u3001Mariadb\u3001PostgreSQL9.6+\u4f5c\u4e3a\u6570\u636e\u5e93\u65f6\u652f\u6301\u6279\u91cf\uff0c\u6279\u91cf\u66f4\u65b0\u65b9\u5f0f\u5982\u4e0b\u4ee5 Java \u4e3a\u4f8b"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'    // use JdbcTemplate\n    public void batchUpdate() {\n        jdbcTemplate.batchUpdate(\n            "update storage_tbl set count = count -1 where id = 1",\n            "update storage_tbl set count = count -1 where id = 2"\n\t\t);\n    }\n\n    // use Statement\n    public void batchUpdateTwo() {\n        statement.addBatch("update storage_tbl set count = count -1 where id = 1");\n        statement.addBatch("update storage_tbl set count = count -1 where id = 2");\n        statement.executeBatch();\n    }\n'})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},c=s.createContext(r);function i(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);