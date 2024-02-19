"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[61706],{46438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(74848),a=n(28453);const i={title:"Integration of Spring Cloud with Seata for Distributed Transaction - TCC Mode",keywords:["TCC","Seata","Spring Cloud","Distributed","Transaction"],description:"This article mainly introduces the integration of Spring Cloud with Seata for distributed transaction using the TCC mode.",author:"gongxing(zhijian.tan)",date:new Date("2021-01-23T00:00:00.000Z")},r="Integration of Spring Cloud with Seata for Distributed Transaction - TCC Mode",s={permalink:"/blog/integrate-seata-tcc-mode-with-spring-cloud",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/integrate-seata-tcc-mode-with-spring-cloud.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/integrate-seata-tcc-mode-with-spring-cloud.md",title:"Integration of Spring Cloud with Seata for Distributed Transaction - TCC Mode",description:"This article mainly introduces the integration of Spring Cloud with Seata for distributed transaction using the TCC mode.",date:"2021-01-23T00:00:00.000Z",formattedDate:"January 23, 2021",tags:[],readingTime:5.76,hasTruncateMarker:!1,authors:[{name:"gongxing(zhijian.tan)"}],frontMatter:{title:"Integration of Spring Cloud with Seata for Distributed Transaction - TCC Mode",keywords:["TCC","Seata","Spring Cloud","Distributed","Transaction"],description:"This article mainly introduces the integration of Spring Cloud with Seata for distributed transaction using the TCC mode.",author:"gongxing(zhijian.tan)",date:"2021-01-23T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Seata Application-Side Startup Process Analysis \u2014 How RM & TM Connect with TC",permalink:"/blog/seata-client-start-analysis-01"},nextItem:{title:"Analysis of Seata Configuration Management Principles",permalink:"/blog/seata-config-manager"}},c={authorsImageUrls:[void 0]},l=[{value:"3.1 build seata server",id:"31-build-seata-server",level:2},{value:"3.2 build TM",id:"32-build-tm",level:2},{value:"3.3 build RM-TCC",id:"33-build-rm-tcc",level:2},{value:"3.3.1 Defining TCC Interface",id:"331-defining-tcc-interface",level:3},{value:"3.3.2 Business Implementation of TCC Interface",id:"332-business-implementation-of-tcc-interface",level:3},{value:"3.3.3 Starting a Global Transaction in TM and Invoking RM-TCC Interface",id:"333-starting-a-global-transaction-in-tm-and-invoking-rm-tcc-interface",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"This article will introduce how to integrate Seata (1.4.0) with Spring Cloud and Feign using the TCC mode. In practice, Seata's AT mode can meet about 80% of our distributed transaction needs. However, when dealing with operations on databases and middleware (such as Redis) that do not support transactions, or when using databases that are not currently supported by the AT mode (currently AT supports MySQL, Oracle, and PostgreSQL), cross-company service invocations, cross-language application invocations, or the need for manual control of the entire two-phase commit process, we need to combine the TCC mode. Moreover, the TCC mode also supports mixed usage with the AT mode."}),"\n",(0,o.jsx)(t.h1,{id:"\u4e00the-concept-of-tcc-mode",children:"\u4e00\u3001The concept of TCC mode"}),"\n",(0,o.jsx)(t.p,{children:"In Seata, a distributed global transaction follows a two-phase commit model with a Try-[Confirm/Cancel] pattern. Both the AT (Automatic Transaction) mode and the TCC (Try-Confirm-Cancel) mode in Seata are implementations of the two-phase commit. The main differences between them are as follows:"}),"\n",(0,o.jsx)(t.p,{children:"AT mode is based on relational databases that support local ACID transactions (currently supporting MySQL, Oracle, and PostgreSQL):"}),"\n",(0,o.jsx)(t.p,{children:"The first phase, prepare: In the local transaction, it combines the submission of business data updates and the recording of corresponding rollback logs.\nThe second phase, commit: It immediately completes successfully and automatically asynchronously cleans up the rollback logs.\nThe second phase, rollback: It automatically generates compensation operations through the rollback logs to complete data rollback."}),"\n",(0,o.jsx)(t.p,{children:"On the other hand, TCC mode does not rely on transaction support from underlying data resources:"}),"\n",(0,o.jsx)(t.p,{children:"The first phase, prepare: It calls a custom-defined prepare logic.\nThe second phase, commit: It calls a custom-defined commit logic.\nThe second phase, rollback: It calls a custom-defined rollback logic."}),"\n",(0,o.jsx)(t.p,{children:"TCC mode refers to the ability to include custom-defined branch transactions in the management of global transactions."}),"\n",(0,o.jsx)(t.p,{children:"In summary, Seata's TCC mode is a manual implementation of the AT mode that allows you to define the processing logic for the two phases without relying on the undo_log used in the AT mode."}),"\n",(0,o.jsx)(t.h1,{id:"\u4e8cprepare",children:"\u4e8c\u3001prepare"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["regist center ",(0,o.jsx)(t.a,{href:"https://nacos.io/zh-cn/",title:"nacos",children:"nacos"})]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/docs/ops/deploy-guide-beginner/",title:"seata\u670d\u52a1\u7aef(TC\uff09",children:"seata server(TC\uff09"})}),"\n"]}),"\n",(0,o.jsx)(t.h1,{id:"\u4e09building-tm-and-tcc-rm",children:"\u4e09\u3001Building TM and TCC-RM"}),"\n",(0,o.jsx)(t.p,{children:"This chapter focuses on the implementation of TCC using Spring Cloud + Feign. For the project setup, please refer to the source code (this project provides demos for both AT mode and TCC mode)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/tanzzj/springcloud-seata-feign",title:"\u670d\u52a1\u7aef\u642d\u5efa\u6587\u6863",children:"DEMO"})}),"\n",(0,o.jsx)(t.h2,{id:"31-build-seata-server",children:"3.1 build seata server"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/ops/deploy-guide-beginner/",title:"\u670d\u52a1\u7aef\u642d\u5efa\u6587\u6863",children:"build server doc"})}),"\n",(0,o.jsx)(t.h2,{id:"32-build-tm",children:"3.2 build TM"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/tanzzj/springcloud-seata-feign/tree/master/service-tm",children:"service-tm"})}),"\n",(0,o.jsx)(t.h2,{id:"33-build-rm-tcc",children:"3.3 build RM-TCC"}),"\n",(0,o.jsx)(t.h3,{id:"331-defining-tcc-interface",children:"3.3.1 Defining TCC Interface"}),"\n",(0,o.jsx)(t.p,{children:"Since we are using Spring Cloud + Feign, which relies on HTTP for communication, we can use @LocalTCC here. It is important to note that @LocalTCC must be annotated on the interface. This interface can be a regular business interface as long as it implements the corresponding methods for the two-phase commit in TCC. The TCC-related annotations are as follows:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"@LocalTCC: Used for TCC in the Spring Cloud + Feign mode."}),"\n",(0,o.jsx)(t.li,{children:"@TwoPhaseBusinessAction: Annotates the try method. The name attribute represents the bean name of the current TCC method, which can be the method name (globally unique). The commitMethod attribute points to the commit method, and the rollbackMethod attribute points to the transaction rollback method. After specifying these three methods, Seata will automatically invoke the commit or rollback method based on the success or failure of the global transaction."}),"\n",(0,o.jsx)(t.li,{children:"@BusinessActionContextParameter: Annotates the parameters to be passed to the second phase (commitMethod/rollbackMethod) methods."}),"\n",(0,o.jsx)(t.li,{children:"BusinessActionContext: Represents the TCC transaction context."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'/**\n * Here we define the TCC interface.\n * It must be defined on the interface.\n * We are using Spring Cloud for remote invocation.\n * Therefore, we can use LocalTCC here.\n *\n */\n@LocalTCC\npublic interface TccService {\n \n    /**\n     * Define the two-phase commit.\n     * name = The bean name of this TCC, globally unique.\n     * commitMethod = The method for the second phase confirmation.\n     * rollbackMethod = The method for the second phase cancellation.\n     * Use the BusinessActionContextParameter annotation to pass parameters to the second phase.\n     *\n     * @param params  \n     * @return String\n     */\n    @TwoPhaseBusinessAction(name = "insert", commitMethod = "commitTcc", rollbackMethod = "cancel")\n    String insert(\n            @BusinessActionContextParameter(paramName = "params") Map<String, String> params\n    );\n \n    /**\n     *  The confirmation method can be named differently, but it must be consistent with the commitMethod.\n     *  The context can be used to pass the parameters from the try method.\n     * @param context \n     * @return boolean\n     */\n    boolean commitTcc(BusinessActionContext context);\n \n    /**\n     * two phase cancel\n     *\n     * @param context \n     * @return boolean\n     */\n    boolean cancel(BusinessActionContext context);\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"332-business-implementation-of-tcc-interface",children:"3.3.2 Business Implementation of TCC Interface"}),"\n",(0,o.jsx)(t.p,{children:"To keep the code concise, we will combine the routing layer with the business layer for explanation here. However, in actual projects, this may not be the case."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Using @Transactional in the try method allows for direct rollback of operations in relational databases through Spring transactions. The rollback of operations in non-relational databases or other middleware can be handled in the rollbackMethod."}),"\n",(0,o.jsx)(t.li,{children:'By using context.getActionContext("params"), you can retrieve the parameters defined in the try phase and perform business rollback operations on these parameters in the second phase.'}),"\n",(0,o.jsx)(t.li,{children:"Note 1: It is not advisable to catch exceptions here (similarly, handle exceptions with aspects), as doing so would cause TCC to recognize the operation as successful, and the second phase would directly execute the commitMethod."}),"\n",(0,o.jsx)(t.li,{children:"Note 2: In TCC mode, it is the responsibility of the developer to ensure idempotence and transaction suspension prevention."}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'@Slf4j\n@RestController\npublic class TccServiceImpl implements  TccService {\n \n    @Autowired\n    TccDAO tccDAO;\n \n    /**\n     * tcc t\uff08try\uff09method\n     * Choose the actual business execution logic or resource reservation logic based on the actual business scenario.\n     *\n     * @param params - name\n     * @return String\n     */\n    @Override\n    @PostMapping("/tcc-insert")\n    @Transactional(rollbackFor = Exception.class, propagation = Propagation.REQUIRED)\n    public String insert(@RequestBody Map<String, String> params) {\n        log.info("xid = " + RootContext.getXID());\n        //todo Perform actual operations or operations on MQ, Redis, etc.\n        tccDAO.insert(params);\n        //Remove the following annotations to throw an exception\n        //throw new RuntimeException("\u670d\u52a1tcc\u6d4b\u8bd5\u56de\u6eda");\n        return "success";\n    }\n \n    /**\n     * TCC service confirm method\n     * If resource reservation is used in the first phase, the reserved resources should be committed during the second phase confirmation\n     * @param context \n     * @return boolean\n     */\n    @Override\n    public boolean commitTcc(BusinessActionContext context) {\n        log.info("xid = " + context.getXid() + "\u63d0\u4ea4\u6210\u529f");\n        //todo If resource reservation is used in the first phase, resources should be committed here.\n        return true;\n    }\n \n    /**\n     * tcc  cancel method\n     *\n     * @param context \n     * @return boolean\n     */\n    @Override\n    public boolean cancel(BusinessActionContext context) {\n        //todo Here, write the rollback operations for middleware or non-relational databases.\n        System.out.println("please manually rollback this data:" + context.getActionContext("params"));\n        return true;\n    }\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"333-starting-a-global-transaction-in-tm-and-invoking-rm-tcc-interface",children:"3.3.3 Starting a Global Transaction in TM and Invoking RM-TCC Interface"}),"\n",(0,o.jsx)(t.p,{children:"Please refer to the project source code in section 3.2."}),"\n",(0,o.jsx)(t.p,{children:"With this, the integration of TCC mode with Spring Cloud is complete."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var o=n(96540);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);