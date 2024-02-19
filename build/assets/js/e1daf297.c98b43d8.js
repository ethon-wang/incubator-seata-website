"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[18208],{85653:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=a(74848),r=a(28453);const t={hidden:!0,title:"High Available Usage Deployment",keywords:["kubernetes","ops"],description:"High Available Usage Deployment",author:"helloworlde",date:new Date("2020-04-10T00:00:00.000Z")},o="High Available Usage Deployment",i={id:"ops/deploy-ha",title:"High Available Usage Deployment",description:"High Available Usage Deployment",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/ops/deploy-ha.md",sourceDirName:"ops",slug:"/ops/deploy-ha",permalink:"/docs/v1.2/ops/deploy-ha",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/ops/deploy-ha.md",tags:[],version:"v1.2",frontMatter:{hidden:!0,title:"High Available Usage Deployment",keywords:["kubernetes","ops"],description:"High Available Usage Deployment",author:"helloworlde",date:"2020-04-10T00:00:00.000Z"},sidebar:"docs",previous:{title:"Deploy Seata Server By Helm",permalink:"/docs/v1.2/ops/deploy-by-helm"}},l={},c=[{value:"Seata-Server",id:"seata-server",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"high-available-usage-deployment",children:"High Available Usage Deployment"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"High available usage deployment of Seata depends on registry center, configuration center and database."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"seata-server",children:"Seata-Server"}),"\n",(0,s.jsx)(n.p,{children:"The Seata-Server need registry center, and save transaction data into database, for example, use Nacos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Modify configuration in ",(0,s.jsx)(n.code,{children:"registry.conf"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'registry {\n  type = "nacos"\n\n  nacos {\n    application = "seata-server"\n    serverAddr = "192.168.199.2"\n    namespace = ""\n    cluster = "default"\n    username = ""\n    password = ""\n  }\n}\n\nconfig {\n  type = "nacos"\n  \n  nacos {\n    serverAddr = "192.168.199.2"\n    namespace = ""\n    group = "SEATA_GROUP"\n    username = ""\n    password = ""\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Modify configuration in configuration center"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"service.vgroupMapping.my_test_tx_group=default\nstore.mode=db\nstore.db.datasource=druid\nstore.db.dbType=mysql\nstore.db.driverClassName=com.mysql.jdbc.Driver\nstore.db.url=jdbc:mysql://192.168.199.2:30060/seata?useUnicode=true\nstore.db.user=root\nstore.db.password=123456\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Create table ",(0,s.jsx)(n.code,{children:"global_table"}),", ",(0,s.jsx)(n.code,{children:"branch_table"}),", ",(0,s.jsx)(n.code,{children:"lock_table"})," in database"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Please reference script on ",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db",children:"/script/server/db/"})]}),"\n",(0,s.jsx)(n.p,{children:"Now, startup multiple seata-server, and then the server is support high available usage."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"For example, using Kubernetes deploy, the configuration file like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  name: seata-ha-server\n  namespace: default\n  labels:\n    app.kubernetes.io/name: seata-ha-server\nspec:\n  type: ClusterIP\n  ports:\n    - port: 8091\n      protocol: TCP\n      name: http\n  selector:\n    app.kubernetes.io/name: seata-ha-server\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seata-ha-server\n  namespace: default\n  labels:\n    app.kubernetes.io/name: seata-ha-server\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: seata-ha-server\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: seata-ha-server\n    spec:\n      containers:\n        - name: seata-ha-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_CONFIG_NAME\n              value: file:/root/seata-config/registry\n          ports:\n            - name: http\n              containerPort: 8091\n              protocol: TCP\n          volumeMounts:\n            - name: seata-config\n              mountPath: /root/seata-config\n      volumes:\n        - name: seata-config\n          configMap:\n            name: seata-ha-server-config\n\n\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: seata-ha-server-config\ndata:\n  registry.conf: |\n    registry {\n        type = "nacos"\n        nacos {\n          application = "seata-server"\n          serverAddr = "192.168.199.2"\n        }\n    }\n    config {\n      type = "nacos"\n      nacos {\n        serverAddr = "192.168.199.2"\n        group = "SEATA_GROUP"\n      }\n    }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can reference ",(0,s.jsx)(n.a,{href:"/blog/seata-ha-practice",children:"seata-ha-deploy-practice"})," for more detail about practice of HA deploy."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var s=a(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);