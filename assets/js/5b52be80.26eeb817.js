"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[21812],{50825:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(74848),r=t(28453);const i={title:"Beginner Deployment Guide",keywords:["Seata"],description:"Seata has three roles TC, TM and RM. TC (Server side) is deployed as a separate server, while TM and RM (Client side) are integrated by the business system."},o="Deployment Guide",s={id:"ops/deploy-guide-beginner",title:"Beginner Deployment Guide",description:"Seata has three roles TC, TM and RM. TC (Server side) is deployed as a separate server, while TM and RM (Client side) are integrated by the business system.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.8/ops/deploy-guide-beginner.md",sourceDirName:"ops",slug:"/ops/deploy-guide-beginner",permalink:"/docs/v1.8/ops/deploy-guide-beginner",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.8/ops/deploy-guide-beginner.md",tags:[],version:"v1.8",frontMatter:{title:"Beginner Deployment Guide",keywords:["Seata"],description:"Seata has three roles TC, TM and RM. TC (Server side) is deployed as a separate server, while TM and RM (Client side) are integrated by the business system."},sidebar:"docs",previous:{title:"Multi-configuration Isolation",permalink:"/docs/v1.8/ops/multi-configuration-isolation"},next:{title:"Deploy Server",permalink:"/docs/v1.8/ops/deploy-server"}},c={},l=[{value:"Seata Beginner Deployment Guide",id:"seata-beginner-deployment-guide",level:2},{value:"Resource Directory Introduction",id:"resource-directory-introduction",level:3},{value:"<a>Click to view</a>. You can also select the corresponding resource directory according to the version branch.",id:"click-to-view-you-can-also-select-the-corresponding-resource-directory-according-to-the-version-branch",level:4},{value:"Precautions",id:"precautions",level:3},{value:"Start Server",id:"start-server",level:3},{value:"Step 1: Startup package",id:"step-1-startup-package",level:4},{value:"Step 2: Create table (db only)",id:"step-2-create-table-db-only",level:4},{value:"Step 3: Modify store.mode",id:"step-3-modify-storemode",level:4},{value:"Step 4: Modify database connection|redis attribute configuration",id:"step-4-modify-database-connectionredis-attribute-configuration",level:4},{value:"Step 5: Start",id:"step-5-start",level:4},{value:"Business system integration Client",id:"business-system-integration-client",level:3},{value:"Step 1: Add seata dependency (single choice recommended)",id:"step-1-add-seata-dependency-single-choice-recommended",level:4},{value:"Step 2: Create undo_log table and configure parameters (AT mode only)",id:"step-2-create-undo_log-table-and-configure-parameters-at-mode-only",level:4},{value:"Step 3: Data source proxy (coexistence of automatic and manual configuration is not supported)",id:"step-3-data-source-proxy-coexistence-of-automatic-and-manual-configuration-is-not-supported",level:4},{value:"Step 4: Initialize GlobalTransactionScanner",id:"step-4-initialize-globaltransactionscanner",level:4},{value:"Step 5: Implement xid cross-service transfer",id:"step-5-implement-xid-cross-service-transfer",level:4},{value:"Business use",id:"business-use",level:2},{value:"Annotation interception",id:"annotation-interception",level:3},{value:"Global affairs",id:"global-affairs",level:4},{value:"TCC",id:"tcc",level:4},{value:"Pointcut expression",id:"pointcut-expression",level:3},{value:"Global affairs",id:"global-affairs-1",level:4}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"deployment-guide",children:"Deployment Guide"}),"\n",(0,a.jsx)(n.h2,{id:"seata-beginner-deployment-guide",children:"Seata Beginner Deployment Guide"}),"\n",(0,a.jsx)(n.p,{children:"Seata has three roles: TC, TM and RM. TC (Server side) is deployed as a separate server, while TM and RM (Client side) are integrated by the business system."}),"\n",(0,a.jsx)(n.h3,{id:"resource-directory-introduction",children:"Resource Directory Introduction"}),"\n",(0,a.jsxs)(n.h4,{id:"click-to-view-you-can-also-select-the-corresponding-resource-directory-according-to-the-version-branch",children:[(0,a.jsx)("a",{href:"https://github.com/apache/incubator-seata/tree/master/script",target:"_blank",children:"Click to view"}),". You can also select the corresponding resource directory according to the version branch."]}),"\n",(0,a.jsx)(n.p,{children:"-client"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Store client-side sql script (including undo_log table) and parameter configuration.\n-config-center\nEach configuration center parameter import script, config.txt (including server and client, formerly known as nacos-config.txt) is a genernal parameter file."}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"server"}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Store server-side database script (including lock_table, branch_table and global_table) and container configuration."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"precautions",children:"Precautions"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"seata-spring-boot-starter"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"It has the built-in GlobalTransactionScanner automatic initialization function. If initialization is implemented externally, please refer to SeataAutoConfiguration to ensure that the dependencies loads orderly.\nData source automatic proxy is turned on by default, and it can be turned off by configuring seata.enable-auto-data-source-proxy: false.\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"spring-cloud-starter-alibaba-seata"}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)("a",{href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",target:"_blank",children:"View release notes"}),". ",(0,a.jsx)("br",{}),"\n2.1.0 embeds seata-all 0.7.1, 2.1.1 embeds seata-all 0.9.0, 2.2.0 embeds seata-spring-boot-starter 1.0.0, 2.2.1 embeds seata-spring- boot-starter 1.1.0"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"    Solutions for 2.1.0 and 2.1.1 compatible starter:\nIn the @SpringBootApplication annotation, exclude com.alibaba.cloud.seata.GlobalTransactionAutoConfiguration in spring-cloud-starter-alibaba-seata\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Recommendations for spring-cloud-starter-alibaba-seata dependency configuration"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"            <dependency>\n                 <groupId>io.seata</groupId>\n                 <artifactId>seata-spring-boot-starter</artifactId>\n             </dependency>\n             <dependency>\n                 <groupId>com.alibaba.cloud</groupId>\n                 <artifactId>spring-cloud-starter-alibaba-seata</artifactId>\n                 <exclusions>\n                     <exclusion>\n                         <groupId>io.seata</groupId>\n                         <artifactId>seata-spring-boot-starter</artifactId>\n                     </exclusion>\n                 </exclusions>\n             </dependency>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"start-server",children:"Start Server"}),"\n",(0,a.jsx)(n.p,{children:"There are currently three server-side storage modes (store.mode): file, db, and redis. The file mode does not need to be changed and can be started directly. The following specifically explains the db and redis startup steps."}),"\n",(0,a.jsx)(n.p,{children:"Note: The file mode is a stand-alone mode. The global transaction session information is read and written in the memory and the local file root.data is persisted. So the performance is quite well;"}),"\n",(0,a.jsx)(n.p,{children:"The db mode is a high-availability mode. Global transaction session information is shared through db, but the corresponding performance is poor;"}),"\n",(0,a.jsx)(n.p,{children:"The redis mode is supported by Seata-Server 1.3 and above. It has high performance and risks losing transaction information. Please configure the redis persistence configuration suitable for the current scenario in advance."}),"\n",(0,a.jsx)(n.h4,{id:"step-1-startup-package",children:"Step 1: Startup package"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)("a",{href:"https://github.com/apache/incubator-seata/releases",target:"_blank",children:"Click to download"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Official DingTalk group (Group Number: 23171167, 1st group is already full, including 5,000 people, ",(0,a.jsx)("a",{href:"/community",target:"_blank",children:"2nd group"}),", group 3: 32033786\uff0cgroup 4: 60170003910), QQ group (Group Number: 254657148, group 2: 216012363). Please download packages in the group sharing file."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"step-2-create-table-db-only",children:"Step 2: Create table (db only)"}),"\n",(0,a.jsx)(n.p,{children:"Global transaction session information consists of three pieces of content, that is global transaction--\x3ebranch transaction--\x3eglobal lock, corresponding to the tables global_table, branch_table, and lock_table."}),"\n",(0,a.jsx)(n.h4,{id:"step-3-modify-storemode",children:"Step 3: Modify store.mode"}),"\n",(0,a.jsx)(n.p,{children:'Startup package: seata--\x3econf--\x3eapplication.yml, modify store.mode="db" or "redis"\nSource code: root directory--\x3eseata-server--\x3eresources--\x3eapplication.yml, modify store.mode="db" or "redis"'}),"\n",(0,a.jsx)(n.h4,{id:"step-4-modify-database-connectionredis-attribute-configuration",children:"Step 4: Modify database connection|redis attribute configuration"}),"\n",(0,a.jsx)(n.p,{children:"Startup package: seata--\x3econf--\x3eapplication.example.yml comes with additional configuration, copy its db|redis related configuration to application.yml, and modify store.db or store.redis related properties.\nSource code: Root directory--\x3eseata-server--\x3eresources--\x3eapplication.example.yml comes with additional configuration, copy its db|redis related configuration to application.yml, and modify store.db or store.redis related Attributes."}),"\n",(0,a.jsx)(n.h4,{id:"step-5-start",children:"Step 5: Start"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Source code startup: execute the main method in ServerApplication.java"}),"\n",(0,a.jsx)(n.li,{children:"Command to start: seata-server.sh -h 127.0.0.1 -p 8091 -m db"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"    -h: IP registered to the registration center\n    -p: Server rpc listening port\n    -m: Global transaction session information storage mode, file, db, redis. Read startup parameters first (Seata-Server 1.3 and above supports redis)\n    -n: Server node. When there are multiple servers, each node needs to be distinguished to generate transactionIds in different intervals to avoid conflicts.\n    -e: Multi-environment configuration please refers to https://seata.apache.org/docs/ops/multi-configuration-isolation/.\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)("a",{href:"/docs/ops/deploy-by-docker/",target:"_blank",children:"Click to view docker deployment"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Note: It is recommended to allocate 2G of heap memory and 1G of off-heap memory."}),"\n",(0,a.jsx)(n.h3,{id:"business-system-integration-client",children:"Business system integration Client"}),"\n",(0,a.jsx)(n.h4,{id:"step-1-add-seata-dependency-single-choice-recommended",children:"Step 1: Add seata dependency (single choice recommended)"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Depends on seata-all."}),"\n",(0,a.jsx)(n.li,{children:"Depends on seata-spring-boot-starter, supporting yml and properties configuration (.conf can be deleted), and relies on seata-all internally."}),"\n",(0,a.jsx)(n.li,{children:"Depends on spring-cloud-alibaba-seata, integrates seata internally, and implements xid transfer."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"step-2-create-undo_log-table-and-configure-parameters-at-mode-only",children:"Step 2: Create undo_log table and configure parameters (AT mode only)"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)("a",{href:"/docs/user/configurations/",target:"_blank",children:"View parameter configuration introduction"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"step-3-data-source-proxy-coexistence-of-automatic-and-manual-configuration-is-not-supported",children:"Step 3: Data source proxy (coexistence of automatic and manual configuration is not supported)"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If using seata-all"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Starting from version 0.9.0, seata supports automatic proxy data sources."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"1.1.0: seata-all cancels the attribute configuration and switches it to the annotation @EnableAutoDataSourceProxy, and you can choose jdk proxy or cglib proxy\n1.0.0: client.support.spring.datasource.autoproxy=true\n0.9.0: support.spring.datasource.autoproxy=true\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If XA mode is used, ",(0,a.jsx)(n.code,{children:'@EnableAutoDataSourceProxy(dataSourceProxyMode = "XA")'})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"For manual configuration, please refer to the example below"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'@Primary\n@Bean("dataSource")\npublic DataSource dataSource(DataSource druidDataSource) {\n    //AT agent (choose one of the two)\n    return new DataSourceProxy(druidDataSource);\n    //XA proxy\n    return new DataSourceProxyXA(druidDataSource)\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"If using seata-starter"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["When using automatic proxy data sources, you need to adjust the configuration file if you use XA mode\napplication.properties","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"seata.data-source-proxy-mode=XA  \n"})}),"\n","application.yml","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"seata:\n  data-source-proxy-mode: XA\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["How to turn off the data source automatic proxy of seata-spring-boot-starter?\napplication.properties","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"seata.enable-auto-data-source-proxy=false\n"})}),"\n","application.yml","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"seata:\n  enable-auto-data-source-proxy: false\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"step-4-initialize-globaltransactionscanner",children:"Step 4: Initialize GlobalTransactionScanner"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Manual"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-@Bean",children:'        @Bean\n        public GlobalTransactionScanner globalTransactionScanner() {\n            String applicationName = this.applicationContext.getEnvironment().getProperty("spring.application.name");\n            String txServiceGroup = this.seataProperties.getTxServiceGroup();\n            if (StringUtils.isEmpty(txServiceGroup)) {\n                txServiceGroup = applicationName + "-fescar-service-group";\n                this.seataProperties.setTxServiceGroup(txServiceGroup);\n            }\n   \n            return new GlobalTransactionScanner(applicationName, txServiceGroup);\n        }\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Automatic ",(0,a.jsx)("br",{}),"\nYou can introduce seata-spring-boot-starter, spring-cloud-starter-alibaba-seata and other jars"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"step-5-implement-xid-cross-service-transfer",children:"Step 5: Implement xid cross-service transfer"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Manual ",(0,a.jsx)("br",{}),"\nRefer to the various rpc implementation modules under the source code integration folder."]}),"\n",(0,a.jsxs)(n.li,{children:["Automatic ",(0,a.jsx)("br",{}),"\nSpringCloud users can introduce spring-cloud-starter-alibaba-seata, and xid transfer has been implemented internally."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"business-use",children:"Business use"}),"\n",(0,a.jsx)(n.h3,{id:"annotation-interception",children:"Annotation interception"}),"\n",(0,a.jsx)(n.h4,{id:"global-affairs",children:"Global affairs"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@GetMapping(value = "testCommit")\n@GlobalTransactional\npublic Object testCommit(@RequestParam(name = "id",defaultValue = "1") Integer id,\n    @RequestParam(name = "sum", defaultValue = "1") Integer sum) {\n    Boolean ok = productService.reduceStock(id, sum);\n    if (ok) {\n        LocalDateTime now = LocalDateTime.now();\n        Orders orders = new Orders();\n        orders.setCreateTime(now);\n        orders.setProductId(id);\n        orders.setReplaceTime(now);\n        orders.setSum(sum);\n        orderService.save(orders);\n        return "ok";\n    } else {\n        return "fail";\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h4,{id:"tcc",children:"TCC"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'/**\n * Define two-phase commit: name = bean name of the tcc (globally unique), commitMethod = commit (the two-phase confirmation method) and rollbackMethod = rollback (the two-phase cancellation method)\n * useTCCFence=true (enable anti-hanging)\n * BusinessActionContextParameter annotation passes parameters to the second stage\n *\n * @param params - input parameters\n * @return String\n */\n@TwoPhaseBusinessAction(name = "beanName", commitMethod = "commit", rollbackMethod = "rollback", useTCCFence = true)\npublic void insert(@BusinessActionContextParameter(paramName = "params") Map<String, String> params) {\n    logger.info("\u6b64\u5904\u53ef\u4ee5\u9884\u7559\u8d44\u6e90,\u6216\u8005\u5229\u7528tcc\u7684\u7279\u70b9,\u4e0eAT\u6df7\u7528,\u4e8c\u9636\u6bb5\u65f6\u5229\u7528\u4e00\u9636\u6bb5\u5728\u6b64\u5904\u5b58\u653e\u7684\u6d88\u606f,\u901a\u8fc7\u4e8c\u9636\u6bb5\u53d1\u51fa,\u6bd4\u5982redis,mq\u7b49\u64cd\u4f5c");\n}\n\n\n/**\n * The confirmation method can be named differently, but it must be consistent with commitMethod. The context can pass the parameters of the try method.\n *\n * @param context context\n * @return boolean\n */\npublic void commit(BusinessActionContext context) {\n    logger.info("\u9884\u7559\u8d44\u6e90\u771f\u6b63\u5904\u7406,\u6216\u8005\u53d1\u51famq\u6d88\u606f\u548credis\u5165\u5e93");\n}\n\n/**\n * Two-stage cancellation method\n *\n * @param context context\n * @return boolean\n */\npublic void rollback(BusinessActionContext context) {\n    logger.info("\u9884\u7559\u8d44\u6e90\u91ca\u653e,\u6216\u6e05\u9664\u4e00\u9636\u6bb5\u51c6\u5907\u8ba9\u4e8c\u9636\u6bb5\u63d0\u4ea4\u65f6\u53d1\u51fa\u7684\u6d88\u606f\u7f13\u5b58");\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"pointcut-expression",children:"Pointcut expression"}),"\n",(0,a.jsx)(n.h4,{id:"global-affairs-1",children:"Global affairs"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    @Bean\n    public AspectTransactionalInterceptor aspectTransactionalInterceptor () {\n        return new AspectTransactionalInterceptor();\n    }\n\n    @Bean\n    public Advisor txAdviceAdvisor(AspectTransactionalInterceptor aspectTransactionalInterceptor ) {\n        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();\n        pointcut.setExpression("Configure pointcut expression to enable global transaction interceptor");\n        return new DefaultPointcutAdvisor(pointcut, aspectTransactionalInterceptor);\n    }\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);