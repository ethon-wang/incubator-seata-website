"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[30606],{50599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var s=n(74848),l=n(28453);const r={title:"DML",keywords:["Seata"],description:"Seata DML"},i="DML",c={id:"user/sqlreference/dml",title:"DML",description:"Seata DML",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.3/user/sqlreference/dml.md",sourceDirName:"user/sqlreference",slug:"/user/sqlreference/dml",permalink:"/docs/v1.3/user/sqlreference/dml",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.3/user/sqlreference/dml.md",tags:[],version:"v1.3",frontMatter:{title:"DML",keywords:["Seata"],description:"Seata DML"},sidebar:"docs",previous:{title:"SQL Restrictions",permalink:"/docs/v1.3/user/sqlreference/sql-restrictions"},next:{title:"SQL Decoration",permalink:"/docs/v1.3/user/sqlreference/sql-decoration"}},d={},o=[];function x(e){const t={code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"dml",children:"DML"}),"\n",(0,s.jsx)(t.p,{children:"This article introduces the types of DML statements, SQL instances, and whether Seata supports them, helping you to use SQL more smoothly in Seata."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"SQL Examples"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Support\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"INSERT"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"INSERT INTO tb1_name (col_name,...) VALUES ({expr | FAULT},...),(...),..."})," or ",(0,s.jsx)(t.code,{children:"INSERT INTO tb1_name SET col_name={expr | DEFAULT}, ..."})," or ",(0,s.jsx)(t.code,{children:"INSERT INTO tb1_name (col_name,...) VALUES ({expr | FAULT},...) ON DUPLICATE KEY UPDATE field1=value1,...;"})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"UPDATE"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"UPDATE tb1_name SET col_name1=expr1 [, col_name2=expr2 ...][WHERE where_definition]"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DELETE"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"DELETE FROM tb1_name [WHERE where_definition]"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SELECT"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"SELECT [ALL | DISTINCT | DISTINCTROW ]select_expr, ... FROM tb1_name[WHERE where_definition]"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"REPLACE"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"REPLACE [LOW_PRIORITY | DELAYED][INTO] tb1_name [(col_name,...)]VALUES ({expr | DEFAULT},...),(...),..."})," or ",(0,s.jsx)(t.code,{children:"REPLACE [LOW_PRIORITY | DELAYED][INTO] tb1_nameSET col_name={expr | DEFAULT}, ..."})]}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"TRUNCATE"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"TRUNCATE [TABLE] tb1_name"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"No"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"UPDATE JOIN"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"UPDATE tb1_name tb1 JOIN tb2_name tb2 ON tb2.col_name=tb1.col_name SET tb1.col_name1=expr1 [, tb1.col_name2=expr2 ...][ [WHERE where_definition]"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Yes,since 1.6.0"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const l={},r=s.createContext(l);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);