"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[96013],{20012:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var r=s(74848),a=s(28453);const n={title:"Prometheus",keywords:["Seata"],description:"Seata\u652f\u6301\u5728TC\u5f00\u542fMetrics\u6570\u636e\u91c7\u96c6\u5e76\u8f93\u51fa\u5230Prometheus\u76d1\u63a7\u7cfb\u7edf\u4e2d\u3002"},c="Prometheus Metrics \u914d\u7f6e\u6307\u5357",i={id:"user/apm/prometheus",title:"Prometheus",description:"Seata\u652f\u6301\u5728TC\u5f00\u542fMetrics\u6570\u636e\u91c7\u96c6\u5e76\u8f93\u51fa\u5230Prometheus\u76d1\u63a7\u7cfb\u7edf\u4e2d\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5/user/apm/prometheus.md",sourceDirName:"user/apm",slug:"/user/apm/prometheus",permalink:"/zh-cn/docs/v1.5/user/apm/prometheus",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.5/user/apm/prometheus.md",tags:[],version:"v1.5",frontMatter:{title:"Prometheus",keywords:["Seata"],description:"Seata\u652f\u6301\u5728TC\u5f00\u542fMetrics\u6570\u636e\u91c7\u96c6\u5e76\u8f93\u51fa\u5230Prometheus\u76d1\u63a7\u7cfb\u7edf\u4e2d\u3002"},sidebar:"docs",previous:{title:"SkyWalking",permalink:"/zh-cn/docs/v1.5/user/apm/skywalking"},next:{title:"\u6027\u80fd\u6d4b\u8bd5\u62a5\u544a",permalink:"/zh-cn/docs/v1.5/user/performance"}},o={},m=[{value:"\u5728 TC \u4e2d\u914d\u7f6e\u5f00\u542f Metrics",id:"\u5728-tc-\u4e2d\u914d\u7f6e\u5f00\u542f-metrics",level:3},{value:"\u6b65\u9aa4\u4e00\uff1a\u6253\u5f00 TC \u4e2d Metrics \u7684\u914d\u7f6e\u9879",id:"\u6b65\u9aa4\u4e00\u6253\u5f00-tc-\u4e2d-metrics-\u7684\u914d\u7f6e\u9879",level:4},{value:"\u6b65\u9aa4\u4e8c\uff1a\u4fee\u6539Prometheus\u914d\u7f6e\u6587\u4ef6\u5e76\u542f\u52a8Prometheus",id:"\u6b65\u9aa4\u4e8c\u4fee\u6539prometheus\u914d\u7f6e\u6587\u4ef6\u5e76\u542f\u52a8prometheus",level:4},{value:"\u6b65\u9aa4\u4e09\uff1a\u5728Prometheus UI\u6216Grafana\u4e2d\u67e5\u770bSeata TC\u7684Metrics",id:"\u6b65\u9aa4\u4e09\u5728prometheus-ui\u6216grafana\u4e2d\u67e5\u770bseata-tc\u7684metrics",level:4}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"prometheus-metrics-\u914d\u7f6e\u6307\u5357",children:"Prometheus Metrics \u914d\u7f6e\u6307\u5357"}),"\n",(0,r.jsx)(t.p,{children:"Seata\u652f\u6301\u5728TC\u5f00\u542fMetrics\u6570\u636e\u91c7\u96c6\u5e76\u8f93\u51fa\u5230Prometheus\u76d1\u63a7\u7cfb\u7edf\u4e2d\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"\u5728-tc-\u4e2d\u914d\u7f6e\u5f00\u542f-metrics",children:"\u5728 TC \u4e2d\u914d\u7f6e\u5f00\u542f Metrics"}),"\n",(0,r.jsx)(t.h4,{id:"\u6b65\u9aa4\u4e00\u6253\u5f00-tc-\u4e2d-metrics-\u7684\u914d\u7f6e\u9879",children:"\u6b65\u9aa4\u4e00\uff1a\u6253\u5f00 TC \u4e2d Metrics \u7684\u914d\u7f6e\u9879"}),"\n",(0,r.jsx)(t.p,{children:"Seata Server \u5df2\u7ecf\u5305\u542b\u4e86 metrics(seata-metrics-all)\u4f9d\u8d56, \u4f46\u662f\u9ed8\u8ba4\u662f\u5173\u95ed\u72b6\u6001\uff0c\u9700\u8981\u5f00\u542f metrics \u7684\u91c7\u96c6\u914d\u7f6e\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:"seata:\n  metrics:\n    enabled: true\n    registry-type: compact\n    exporter-list: prometheus\n    exporter-prometheus-port: 9898\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u8f93\u5165",(0,r.jsx)(t.code,{children:"http://tc-server-ip:9898/metrics"}),"\uff0c\u5373\u53ef\u83b7\u5f97\u6700\u65b0\u7684Metrics\u6570\u636e\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'# HELP seata seata\n# TYPE seata untyped\nseata_transaction{meter="counter",role="tc",status="committed",} 1358.0 1551946035372\nseata_transaction{meter="counter",role="tc",status="active",} 0.0 1551946035372\nseata_transaction{meter="summary",role="tc",statistic="count",status="committed",} 6.0 1551946035372\nseata_transaction{meter="summary",role="tc",statistic="total",status="committed",} 6.0 1551946035372\nseata_transaction{meter="summary",role="tc",statistic="tps",status="committed",} 1.6163793103448276 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="count",status="committed",} 6.0 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="total",status="committed",} 910.0 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="max",status="committed",} 164.0 1551946035372\nseata_transaction{meter="timer",role="tc",statistic="average",status="committed",} 151.66666666666666 1551946035372\n'})}),"\n",(0,r.jsx)(t.p,{children:"\u5f97\u5230\u4ee5\u4e0a\u7c7b\u4f3c\u6570\u636e\u8bc1\u660emertric\u5f00\u542f\u6210\u529f\u3002"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u63d0\u793a\uff1a"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"\u5982\u679c\u67d0\u4e9bTransaction\u72b6\u6001\u6ca1\u6709\u53d1\u751f\uff0c\u4f8b\u5982rollback\uff0c\u90a3\u4e48\u5bf9\u5e94\u7684Metrics\u6307\u6807\u4e5f\u4e0d\u4f1a\u5b58\u5728\uff08\u8f93\u51fa\uff09\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"\u6b65\u9aa4\u4e8c\u4fee\u6539prometheus\u914d\u7f6e\u6587\u4ef6\u5e76\u542f\u52a8prometheus",children:"\u6b65\u9aa4\u4e8c\uff1a\u4fee\u6539Prometheus\u914d\u7f6e\u6587\u4ef6\u5e76\u542f\u52a8Prometheus"}),"\n",(0,r.jsxs)(t.p,{children:["\u6253\u5f00Prometheus\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(t.code,{children:"prometheus.yml"}),"\uff0c\u5728 ",(0,r.jsx)(t.code,{children:"scrape_configs"})," \u4e2d\u589e\u52a0\u4e00\u9879\u6293\u53d6Seata TC\u7684Metrics\u6570\u636e\uff1a"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"scrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n    - targets: ['localhost:9090']\n\n  - job_name: 'seata'\n\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n\n    static_configs:\n    - targets: ['tc-server-ip:9898']\n"})}),"\n",(0,r.jsx)(t.h4,{id:"\u6b65\u9aa4\u4e09\u5728prometheus-ui\u6216grafana\u4e2d\u67e5\u770bseata-tc\u7684metrics",children:"\u6b65\u9aa4\u4e09\uff1a\u5728Prometheus UI\u6216Grafana\u4e2d\u67e5\u770bSeata TC\u7684Metrics"}),"\n",(0,r.jsxs)(t.p,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00Prometheus UI",(0,r.jsx)(t.code,{children:"http://localhost:9090/graph"}),"\uff0c\u9009\u62e9",(0,r.jsx)(t.code,{children:"seata_transaction"}),"\uff0c\u70b9\u51fb\u67e5\u8be2\uff0c\u5373\u53ef\u83b7\u53d6\u5230\u6700\u65b0\u6570\u636e\uff1a"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://img.alicdn.com/imgextra/i2/O1CN01r6916n1DiXhwH07dj_!!6000000000250-2-tps-1698-959.png",alt:"tc-prometheus"})}),"\n",(0,r.jsxs)(t.p,{children:["\u63a8\u8350\u5728Prometheus\u4e2d\u7ed3\u5408\u914d\u7f6e",(0,r.jsx)(t.a,{href:"https://prometheus.io/docs/visualization/grafana/",children:"Grafana"}),"\u83b7\u5f97\u66f4\u597d\u7684\u67e5\u8be2\u6548\u679c\uff1a"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://img.alicdn.com/imgextra/i2/O1CN01IdJk5G25B62KpD5If_!!6000000007487-2-tps-1694-973.png",alt:"tc-grafana"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u63d0\u793a\uff1a\u6b64\u914d\u7f6e\u662f\u5c06Prometheus\u4f5c\u4e3aGrafana\u7684\u6570\u636e\u6e90\uff0c\u56e0\u6b64\u6570\u636e\u5b8c\u5168\u76f8\u540c\uff0c\u53ea\u662f\u4f7f\u7528Grafana\u663e\u793a\u6548\u679c\u66f4\u4f73\u3002"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>i});var r=s(96540);const a={},n=r.createContext(a);function c(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);