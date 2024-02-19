"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[21694],{12718:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=a(74848),t=a(28453);const r={hidden:!0,title:"Deploy Seata Server By Kubernetes",keywords:["kubernetes","ops"],description:"Deploy Seata Server By Kubernetes",author:"helloworlde",date:new Date("2022-07-23T00:00:00.000Z")},o="Deploy Seata Server By Kubernetes",i={id:"ops/deploy-by-kubernetes",title:"Deploy Seata Server By Kubernetes",description:"Deploy Seata Server By Kubernetes",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.0/ops/deploy-by-kubernetes.md",sourceDirName:"ops",slug:"/ops/deploy-by-kubernetes",permalink:"/docs/v1.0/ops/deploy-by-kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.0/ops/deploy-by-kubernetes.md",tags:[],version:"v1.0",frontMatter:{hidden:!0,title:"Deploy Seata Server By Kubernetes",keywords:["kubernetes","ops"],description:"Deploy Seata Server By Kubernetes",author:"helloworlde",date:"2022-07-23T00:00:00.000Z"},sidebar:"docs",previous:{title:"Deploy Seata Server By Docker Compose",permalink:"/docs/v1.0/ops/deploy-by-docker-compose-142"},next:{title:"Deploy Seata Server By Helm",permalink:"/docs/v1.0/ops/deploy-by-helm"}},c={},l=[{value:"Last Updated",id:"last-updated",level:3},{value:"Quick Start",id:"quick-start",level:3},{value:"Custom configuration",id:"custom-configuration",level:2},{value:"Environment",id:"environment",level:3},{value:"Use specify configuration file",id:"use-specify-configuration-file",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"deploy-seata-server-by-kubernetes",children:"Deploy Seata Server By Kubernetes"}),"\n",(0,s.jsx)(n.h3,{id:"last-updated",children:"Last Updated"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"2022.07.23 \u9002\u914d Seata 1.5.x \u589e\u52a0\u63a7\u5236\u53f0\u9ed8\u8ba4\u7aef\u53e37091\uff1bseata-sever \u57281.5.x \u4ee5\u4e0b\u7248\u672c\u8bfb\u53d6conf\u914d\u7f6e\u66f4\u6539\u4e3ayml\u914d\u7f6e\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsxs)(n.p,{children:["Create file ",(0,s.jsx)(n.code,{children:"seata-server.yaml"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Service\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  type: NodePort\n  ports:\n    - port: 8091\n      nodePort: 30091\n      protocol: TCP\n      name: service\n    - port: 7091\n      nodePort: 30092\n      protocol: TCP\n      name: console\n  selector:\n    k8s-app: seata-server\n\n---\n\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      k8s-app: seata-server\n  template:\n    metadata:\n      labels:\n        k8s-app: seata-server\n    spec:\n      containers:\n        - name: seata-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_PORT\n              value: "8091"\n            - name: STORE_MODE\n              value: file\n          ports:\n            - name: service\n              containerPort: 8091\n              protocol: TCP\n            - name: console\n              containerPort: 7091\n              protocol: TCP\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ kubectl apply -f seata-server.yaml\n"})}),"\n",(0,s.jsx)(n.h2,{id:"custom-configuration",children:"Custom configuration"}),"\n",(0,s.jsx)(n.h3,{id:"environment",children:"Environment"}),"\n",(0,s.jsxs)(n.p,{children:["The environment is same with Docker, can reference ",(0,s.jsx)(n.a,{href:"./deploy-by-docker",children:"Deploy Seata Server By Docker"})]}),"\n",(0,s.jsx)(n.h3,{id:"use-specify-configuration-file",children:"Use specify configuration file"}),"\n",(0,s.jsxs)(n.p,{children:["Can specify configuration file by mount files or use ConfigMap, and then need specify environment ",(0,s.jsx)(n.code,{children:"SEATA_CONFIG_NAME"}),", the value need start with ",(0,s.jsx)(n.code,{children:"file:"}),", like ",(0,s.jsx)(n.code,{children:"file:/root/seata-config/registry"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Deployment"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: seata-server\n  namespace: default\n  labels:\n    k8s-app: seata-server\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      k8s-app: seata-server\n  template:\n    metadata:\n      labels:\n        k8s-app: seata-server\n    spec:\n      containers:\n        - name: seata-server\n          image: docker.io/seataio/seata-server:latest\n          imagePullPolicy: IfNotPresent\n          env:\n            - name: SEATA_CONFIG_NAME\n              value: file:/seata-server/conf/\n          ports:\n            - name: service\n              containerPort: 8091\n              protocol: TCP\n            - name: console\n              containerPort: 7091\n              protocol: TCP\n          volumeMounts:\n            - name: seata-config\n              mountPath: /root/seata-config\n      volumes:\n        - name: seata-config\n          configMap:\n            name: seata-server-config\n\n---\n1.5.x \u4ee5\u4e0b\u7248\u672c ConfigMap\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: seata-server-config\ndata:\n  registry.conf: |\n    registry {\n        type = "nacos"\n        nacos {\n          application = "seata-server"\n          serverAddr = "127.0.0.1:8848"\n        }\n    }\n    config {\n      type = "nacos"\n      nacos {\n        serverAddr = "127.0.0.1:8848"\n        group = "SEATA_GROUP"\n      }\n    }\n\n---\n1.5.x \u7248\u672c ConfigMap\n---\n\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: seata-server-config\ndata:\n  application.yml: |\n    server:\n      port: 7091\n    \n    spring:\n      application:\n        name: seata-server\n    \n    logging:\n      config: classpath:logback-spring.xml\n      file:\n        path: ${user.home}/logs/seata\n    \n    console:\n      user:\n        username: seata\n        password: seata\n    \n    seata:\n      config:\n        # support: nacos, consul, apollo, zk, etcd3\n        type: nacos\n        nacos:\n          server-addr: 127.0.0.1:8848\n          group: SEATA_GROUP\n          username: xxx\n          password: xxx\n          ##if use MSE Nacos with auth, mutex with username/password attribute\n          #access-key: ""\n          #secret-key: ""\n          data-id: seataServer.properties\n      registry:\n        # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n        type: nacos\n        nacos:\n          application: seata-server\n          server-addr: 127.0.0.1:8848\n          group: SEATA_GROUP\n          cluster: default\n          username: xxx\n          password: xxx\n          ##if use MSE Nacos with auth, mutex with username/password attribute\n          #access-key: ""\n          #secret-key: ""\n      store:\n        # support: file \u3001 db \u3001 redis\n        mode: db\n        db:\n          datasource: druid\n          db-type: mysql\n          driver-class-name: com.mysql.cj.jdbc.Driver\n          url: jdbc:mysql://xxx:3306/seata\n          user: xxx\n          password: xxx\n          min-conn: 5\n          max-conn: 100\n      security:\n        secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017\n        tokenValidityInMilliseconds: 1800000\n        ignore:\n          urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var s=a(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);