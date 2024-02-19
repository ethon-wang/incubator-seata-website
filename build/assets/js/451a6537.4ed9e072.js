"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[73701],{62735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(74848),o=n(28453);const a={title:"In-Depth Analysis of Seata TCC Mode (1)",author:"Zhang Chenghui",keywords:["Seata\u3001distributed transaction\u3001TCC"],description:"Seata currently supports AT mode, XA mode, TCC mode, and SAGA mode. Previous articles have talked more about non-intrusive AT mode. Today, we will introduce TCC mode, which is also a two-phase commit.",date:"2022/01/18"},i="Preface",r={permalink:"/blog/seata-tcc",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-tcc.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-tcc.md",title:"In-Depth Analysis of Seata TCC Mode (1)",description:"Seata currently supports AT mode, XA mode, TCC mode, and SAGA mode. Previous articles have talked more about non-intrusive AT mode. Today, we will introduce TCC mode, which is also a two-phase commit.",date:"2022-01-18T00:00:00.000Z",formattedDate:"January 18, 2022",tags:[],readingTime:11.26,hasTruncateMarker:!1,authors:[{name:"Zhang Chenghui"}],frontMatter:{title:"In-Depth Analysis of Seata TCC Mode (1)",author:"Zhang Chenghui",keywords:["Seata\u3001distributed transaction\u3001TCC"],description:"Seata currently supports AT mode, XA mode, TCC mode, and SAGA mode. Previous articles have talked more about non-intrusive AT mode. Today, we will introduce TCC mode, which is also a two-phase commit.",date:"2022/01/18"},unlisted:!1,prevItem:{title:"Alibaba Seata Resolves Idempotence, Dangling, and Empty Rollback Issues in TCC Mode",permalink:"/blog/seata-tcc-fence"},nextItem:{title:"In-Depth Analysis of Seata AT Mode Transaction Isolation Levels and Global Lock Design",permalink:"/blog/seata-at-lock"}},c={authorsImageUrls:[void 0]},l=[{value:"Resource Parsing",id:"resource-parsing",level:2},{value:"Resource Management",id:"resource-management",level:2},{value:"Transaction Processing",id:"transaction-processing",level:2},{value:"How to handle empty rollback",id:"how-to-handle-empty-rollback",level:2},{value:"How to Handle Idempotent Operations",id:"how-to-handle-idempotent-operations",level:2},{value:"How to Handle Suspend",id:"how-to-handle-suspend",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Seata currently supports AT mode, XA mode, TCC mode, and SAGA mode. Previous articles have talked more about non-intrusive AT mode. Today, we will introduce TCC mode, which is also a two-phase commit."}),"\n",(0,s.jsx)(t.h1,{id:"what-is-tcc",children:"What is TCC"}),"\n",(0,s.jsx)(t.p,{children:"TCC is a two-phase commit protocol in distributed transactions. Its full name is Try-Confirm-Cancel. Their specific meanings are as follows:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Try: Check and reserve business resources;"}),"\n",(0,s.jsx)(t.li,{children:"Confirm: Commit the business transaction, i.e., the commit operation. If Try is successful, this step will definitely be successful;"}),"\n",(0,s.jsx)(t.li,{children:"Cancel: Cancel the business transaction, i.e., the rollback operation. This step will release the resources reserved in Try."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"TCC is an intrusive distributed transaction solution. All three operations need to be implemented by the business system itself, which has a significant impact on the business system. The design is relatively complex, but the advantage is that TCC does not rely on the database. It can manage resources across databases and applications, and can implement an atomic operation for different data access through intrusive coding, better solving the distributed transaction problems in various complex business scenarios."}),"\n",(0,s.jsx)("img",{src:"/img/blog/20220116160157.png",alt:"img",style:{zoom:"50%"}}),"\n",(0,s.jsx)(t.h1,{id:"seata-tcc-mode",children:"Seata TCC mode"}),"\n",(0,s.jsx)(t.p,{children:"Seata TCC mode follows the same principle as the general TCC mode. Let's first use Seata TCC mode to implement a distributed transaction:"}),"\n",(0,s.jsx)(t.p,{children:"Suppose there is a business that needs to use service A and service B to complete a transaction operation. We define a TCC interface for this service in service A:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'public interface TccActionOne {\n    @TwoPhaseBusinessAction(name = "DubboTccActionOne", commitMethod = "commit", rollbackMethod = "rollback")\n    public boolean prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "a") String a);\n\n    public boolean commit(BusinessActionContext actionContext);\n\n    public boolean rollback(BusinessActionContext actionContext);\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Similarly, we define a TCC interface for this service in service B:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'public interface TccActionTwo {\n    @TwoPhaseBusinessAction(name = "DubboTccActionTwo", commitMethod = "commit", rollbackMethod = "rollback")\n    public void prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "b") String b);\n\n    public void commit(BusinessActionContext actionContext);\n\n    public void rollback(BusinessActionContext actionContext);\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"In the business system, we start a global transaction and execute the TCC reserve resource methods for service A and service B:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@GlobalTransactional\npublic String doTransactionCommit(){\n    // Service A transaction participant\n    tccActionOne.prepare(null,"one");\n    // Service B transaction participant\n    tccActionTwo.prepare(null,"two");\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The example above demonstrates the implementation of a global transaction using Seata TCC mode. It can be seen that the TCC mode also uses the ",(0,s.jsx)(t.code,{children:"@GlobalTransactional"})," annotation to initiate a global transaction, while the TCC interfaces of Service A and Service B are transaction participants. Seata treats a TCC interface as a Resource, also known as a TCC Resource."]}),"\n",(0,s.jsxs)(t.p,{children:["TCC interfaces can be RPC or internal JVM calls, meaning that a TCC interface has both a sender and a caller identity. In the example above, the TCC interface is the sender in Service A and Service B, and the caller in the business system. If the TCC interface is a Dubbo RPC, the caller is a dubbo",":reference"," and the sender is a dubbo",":service","."]}),"\n",(0,s.jsx)("img",{src:"/img/blog/20220116161933.png",alt:"img",style:{zoom:"50%"}}),"\n",(0,s.jsx)(t.p,{children:"When Seata starts, it scans and parses the TCC interfaces. If a TCC interface is a sender, Seata registers the TCC Resource with the TC during startup, and each TCC Resource has a resource ID. If a TCC interface is a caller, Seata proxies the caller and intercepts the TCC interface calls. Similar to the AT mode, the proxy intercepts the call to the Try method, registers a branch transaction with the TC, and then executes the original RPC call."}),"\n",(0,s.jsx)(t.p,{children:"When the global transaction decides to commit/rollback, the TC will callback to the corresponding participant service to execute the Confirm/Cancel method of the TCC Resource using the resource ID registered by the branch."}),"\n",(0,s.jsx)(t.h1,{id:"how-seata-implements-tcc-mode",children:"How Seata Implements TCC Mode"}),"\n",(0,s.jsx)(t.p,{children:"From the above Seata TCC model, it can be seen that the TCC mode in Seata also follows the TC, TM, RM three-role model. How to implement TCC mode in these three-role models? I mainly summarize the implementation as resource parsing, resource management, and transaction processing."}),"\n",(0,s.jsx)(t.h2,{id:"resource-parsing",children:"Resource Parsing"}),"\n",(0,s.jsxs)(t.p,{children:["Resource parsing is the process of parsing and registering TCC interfaces. As mentioned earlier, TCC interfaces can be RPC or internal JVM calls. In the Seata TCC module, there is a remoting module that is specifically used to parse TCC interfaces with the ",(0,s.jsx)(t.code,{children:"TwoPhaseBusinessAction"})," annotation:"]}),"\n",(0,s.jsx)("img",{src:"/img/blog/20220116175059.png",alt:"img",style:{zoom:"50%"}}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"RemotingParser"})," interface mainly has methods such as ",(0,s.jsx)(t.code,{children:"isRemoting"}),", ",(0,s.jsx)(t.code,{children:"isReference"}),", ",(0,s.jsx)(t.code,{children:"isService"}),", ",(0,s.jsx)(t.code,{children:"getServiceDesc"}),", etc. The default implementation is ",(0,s.jsx)(t.code,{children:"DefaultRemotingParser"}),", and the parsing of various RPC protocols is executed in ",(0,s.jsx)(t.code,{children:"DefaultRemotingParser"}),". Seata has already implemented parsing of Dubbo, HSF, SofaRpc, and LocalTCC RPC protocols while also providing SPI extensibility for additional RPC protocol parsing classes."]}),"\n",(0,s.jsxs)(t.p,{children:["During the Seata startup process, the ",(0,s.jsx)(t.code,{children:"GlobalTransactionScanner"})," annotation is used for scanning and executes the following method:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"io.seata.spring.util.TCCBeanParserUtils#isTccAutoProxy"})}),"\n",(0,s.jsxs)(t.p,{children:["The purpose of this method is to determine if the bean has been TCC proxied. In the process, it first checks if the bean is a Remoting bean. If it is, it calls the ",(0,s.jsx)(t.code,{children:"getServiceDesc"})," method to parse the remoting bean, and if it is a sender, it registers the resource:"]}),"\n",(0,s.jsx)(t.p,{children:"io.seata.rm.tcc.remoting.parser.DefaultRemotingParser#parserRemotingServiceInfo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'public RemotingDesc parserRemotingServiceInfo(Object bean, String beanName, RemotingParser remotingParser){\n    RemotingDesc remotingBeanDesc = remotingParser.getServiceDesc(bean, beanName);\n    if(remotingBeanDesc == null){\n    return null;\n    }\n    remotingServiceMap.put(beanName, remotingBeanDesc);\n\n    Class<?> interfaceClass = remotingBeanDesc.getInterfaceClass();\n    Method[] methods = interfaceClass.getMethods();\n    if (remotingParser.isService(bean, beanName)) {\n        try {\n            //service bean, registry resource\n            Object targetBean = remotingBeanDesc.getTargetBean();\n            for (Method m : methods) {\n                TwoPhaseBusinessAction twoPhaseBusinessAction = m.getAnnotation(TwoPhaseBusinessAction.class);\n                if (twoPhaseBusinessAction != null) {\n                    TCCResource tccResource = new TCCResource();\n                    tccResource.setActionName(twoPhaseBusinessAction.name());\n                    tccResource.setTargetBean(targetBean);\n                    tccResource.setPrepareMethod(m);\n                    tccResource.setCommitMethodName(twoPhaseBusinessAction.commitMethod());\n                    tccResource.setCommitMethod(interfaceClass.getMethod(twoPhaseBusinessAction.commitMethod(),\n                    twoPhaseBusinessAction.commitArgsClasses()));\n                    tccResource.setRollbackMethodName(twoPhaseBusinessAction.rollbackMethod());\n                    tccResource.setRollbackMethod(interfaceClass.getMethod(twoPhaseBusinessAction.rollbackMethod(),\n                    twoPhaseBusinessAction.rollbackArgsClasses()));\n                    // set argsClasses\n                    tccResource.setCommitArgsClasses(twoPhaseBusinessAction.commitArgsClasses());\n                    tccResource.setRollbackArgsClasses(twoPhaseBusinessAction.rollbackArgsClasses());\n                    // set phase two method\'s keys\n                    tccResource.setPhaseTwoCommitKeys(this.getTwoPhaseArgs(tccResource.getCommitMethod(),\n                    twoPhaseBusinessAction.commitArgsClasses()));\n                    tccResource.setPhaseTwoRollbackKeys(this.getTwoPhaseArgs(tccResource.getRollbackMethod(),\n                    twoPhaseBusinessAction.rollbackArgsClasses()));\n                    // registry tcc resource\n                    DefaultResourceManager.get().registerResource(tccResource);\n                }\n            }\n        } catch (Throwable t) {\n            throw new FrameworkException(t, "parser remoting service error");\n        }\n    }\n    if (remotingParser.isReference(bean, beanName)) {\n        // reference bean, TCC proxy\n        remotingBeanDesc.setReference(true);\n    }\n    return remotingBeanDesc;\n    }\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The above method first calls the parsing class ",(0,s.jsx)(t.code,{children:"getServiceDesc"})," method to parse the remoting bean and puts the parsed ",(0,s.jsx)(t.code,{children:"remotingBeanDesc"})," into the local cache ",(0,s.jsx)(t.code,{children:"remotingServiceMap"}),". At the same time, it calls the parsing class ",(0,s.jsx)(t.code,{children:"isService"})," method to determine if it is the initiator. If it is the initiator, it parses the content of the ",(0,s.jsx)(t.code,{children:"TwoPhaseBusinessAction"})," annotation to generate a ",(0,s.jsx)(t.code,{children:"TCCResource"})," and registers it as a resource."]}),"\n",(0,s.jsx)(t.h2,{id:"resource-management",children:"Resource Management"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"1. Resource Registration"})}),"\n",(0,s.jsxs)(t.p,{children:["The resource for Seata TCC mode is called ",(0,s.jsx)(t.code,{children:"TCCResource"}),", and its resource manager is called ",(0,s.jsx)(t.code,{children:"TCCResourceManager"}),". As mentioned earlier, after parsing the TCC interface RPC resource, if it is the initiator, it will be registered as a resource:"]}),"\n",(0,s.jsx)(t.p,{children:"io.seata.rm.tcc.TCCResourceManager#registerResource"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"public void registerResource(Resource resource){\n    TCCResource tccResource=(TCCResource)resource;\n    tccResourceCache.put(tccResource.getResourceId(),tccResource);\n    super.registerResource(tccResource);\n    }\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"TCCResource"})," contains the relevant information of the TCC interface and is cached locally. It continues to call the parent class ",(0,s.jsx)(t.code,{children:"registerResource"})," method (which encapsulates communication methods) to register with the TC. The TCC resource's resourceId is the actionName, and the actionName is the name in the ",(0,s.jsx)(t.code,{children:"@TwoParseBusinessAction"})," annotation."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"2. Resource Commit/Rollback"})}),"\n",(0,s.jsx)(t.p,{children:"io.seata.rm.tcc.TCCResourceManager#branchCommit"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'public BranchStatus branchCommit(BranchType branchType,String xid,long branchId,String resourceId,\n    String applicationData)throws TransactionException{\n    TCCResource tccResource=(TCCResource)tccResourceCache.get(resourceId);\n    if(tccResource==null){\n    throw new ShouldNeverHappenException(String.format("TCC resource is not exist, resourceId: %s",resourceId));\n    }\n    Object targetTCCBean=tccResource.getTargetBean();\n    Method commitMethod=tccResource.getCommitMethod();\n    if(targetTCCBean==null||commitMethod==null){\n    throw new ShouldNeverHappenException(String.format("TCC resource is not available, resourceId: %s",resourceId));\n    }\n    try{\n    //BusinessActionContext\n    BusinessActionContext businessActionContext=getBusinessActionContext(xid,branchId,resourceId,\n    applicationData);\n    // ... ... \n    ret=commitMethod.invoke(targetTCCBean,args);\n    // ... ... \n    return result?BranchStatus.PhaseTwo_Committed:BranchStatus.PhaseTwo_CommitFailed_Retryable;\n    }catch(Throwable t){\n    String msg=String.format("commit TCC resource error, resourceId: %s, xid: %s.",resourceId,xid);\n    LOGGER.error(msg,t);\n    return BranchStatus.PhaseTwo_CommitFailed_Retryable;\n    }\n    }\n'})}),"\n",(0,s.jsx)(t.p,{children:"When the TM resolves the phase two commit, the TC will callback to the corresponding participant (i.e., TCC interface initiator) service to execute the Confirm/Cancel method of the TCC Resource registered by the branch."}),"\n",(0,s.jsxs)(t.p,{children:["In the resource manager, the corresponding ",(0,s.jsx)(t.code,{children:"TCCResource"})," will be found in the local cache based on the resourceId, and the corresponding ",(0,s.jsx)(t.code,{children:"BusinessActionContext"})," will be found based on xid, branchId, resourceId, and applicationData, and the parameters to be executed are in the context. Finally, the commit method of the ",(0,s.jsx)(t.code,{children:"TCCResource"})," is executed to perform the phase two commit."]}),"\n",(0,s.jsx)(t.p,{children:"The phase two rollback is similar."}),"\n",(0,s.jsx)(t.h2,{id:"transaction-processing",children:"Transaction Processing"}),"\n",(0,s.jsx)(t.p,{children:"As mentioned earlier, if the TCC interface is a caller, the Seata TCC proxy will be used to intercept the caller and register the branch before processing the actual RPC method call."}),"\n",(0,s.jsxs)(t.p,{children:["The method ",(0,s.jsx)(t.code,{children:"io.seata.spring.util.TCCBeanParserUtils#isTccAutoProxy"})," not only parses the TCC interface resources, but also determines whether the TCC interface is a caller. If it is a caller, it returns true:"]}),"\n",(0,s.jsx)(t.p,{children:"io.seata.spring.annotation.GlobalTransactionScanner#wrapIfNecessary"}),"\n",(0,s.jsx)("img",{src:"/img/blog/20220116192544.png",alt:"img",style:{zoom:"50%"}}),"\n",(0,s.jsxs)(t.p,{children:["As shown in the figure, when ",(0,s.jsx)(t.code,{children:"GlobalTransactionalScanner"})," scans the TCC interface caller (Reference), it will proxy and intercept it with ",(0,s.jsx)(t.code,{children:"TccActionInterceptor"}),", which implements ",(0,s.jsx)(t.code,{children:"MethodInterceptor"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"TccActionInterceptor"}),", it will also call ",(0,s.jsx)(t.code,{children:"ActionInterceptorHandler"})," to execute the interception logic, and the transaction-related processing is in the ",(0,s.jsx)(t.code,{children:"ActionInterceptorHandler#proceed"})," method:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:"public Object proceed(Method method, Object[] arguments, String xid, TwoPhaseBusinessAction businessAction, \n    Callback<Object> targetCallback) throws Throwable {\n    //Get action context from arguments, or create a new one and then reset to arguments\n    BusinessActionContext actionContext = getOrCreateActionContextAndResetToArguments(method.getParameterTypes(), arguments);\n    //Creating Branch Record\n    String branchId = doTccActionLogStore(method, arguments, businessAction, actionContext);\n    // ... ... \n    try {\n    // ... ...\n    return targetCallback.execute();\n    } finally {\n    try {\n    //to report business action context finally if the actionContext.getUpdated() is true\n    BusinessActionContextUtil.reportContext(actionContext);\n    } finally {\n    // ... ... \n    }\n    }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In the process of executing the first phase of the TCC interface, the ",(0,s.jsx)(t.code,{children:"doTccActionLogStore"})," method is called for branch registration, and the TCC-related information such as parameters is placed in the context. This context will be used for resource submission/rollback as mentioned above."]}),"\n",(0,s.jsx)(t.h1,{id:"how-to-control-exceptions",children:"How to control exceptions"}),"\n",(0,s.jsx)(t.p,{children:"In the process of executing the TCC model, various exceptions may occur, the most common of which are empty rollback, idempotence, and suspense. Here I will explain how Seata handles these three types of exceptions."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-handle-empty-rollback",children:"How to handle empty rollback"}),"\n",(0,s.jsx)(t.p,{children:"What is an empty rollback?"}),"\n",(0,s.jsx)(t.p,{children:"An empty rollback refers to a situation in a distributed transaction where the TM drives the second-phase rollback of the participant's Cancel method without calling the participant's Try method."}),"\n",(0,s.jsx)(t.p,{children:"How does an empty rollback occur?"}),"\n",(0,s.jsx)("img",{src:"/img/blog/20220116201900.png",alt:"img",style:{zoom:"50%"}}),"\n",(0,s.jsx)(t.p,{children:"As shown in the above figure, after the global transaction is opened, participant A will execute the first-phase RPC method after completing branch registration. If the machine where participant A is located crashes or there is a network anomaly at this time, the RPC call will fail, meaning that participant A's first-phase method did not execute successfully. However, the global transaction has already been opened, so Seata must progress to the final state. When the global transaction is rolled back, participant A's Cancel method will be called, resulting in an empty rollback."}),"\n",(0,s.jsx)(t.p,{children:"To prevent empty rollback, it is necessary to identify it in the Cancel method. How does Seata do this?"}),"\n",(0,s.jsx)(t.p,{children:"Seata's approach is to add a TCC transaction control table, which contains the XID and BranchID information of the transaction. A record is inserted when the Try method is executed, indicating that phase one has been executed. When the Cancel method is executed, this record is read. If the record does not exist, it means that the Try method was not executed."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-handle-idempotent-operations",children:"How to Handle Idempotent Operations"}),"\n",(0,s.jsx)(t.p,{children:"Idempotent operation refers to TC repeating the two-phase commit, so the Confirm/Cancel interface needs to support idempotent processing, which means that it will not cause duplicate resource submission or release."}),"\n",(0,s.jsx)(t.p,{children:"So how does idempotent operation arise?"}),"\n",(0,s.jsx)("img",{src:"/img/blog/20220116203816.png",alt:"img",style:{zoom:"50%"}}),"\n",(0,s.jsx)(t.p,{children:"As shown in the above figure, after participant A completes the two phases, network jitter or machine failure may cause TC not to receive the return result of participant A's execution of the two phases. TC will continue to make repeated calls until the two-phase execution result is successful."}),"\n",(0,s.jsx)(t.p,{children:"How does Seata handle idempotent operations?"}),"\n",(0,s.jsx)(t.p,{children:"Similarly, a status field is added to the TCC transaction control table. This field has 3 values:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"tried: 1"}),"\n",(0,s.jsx)(t.li,{children:"committed: 2"}),"\n",(0,s.jsx)(t.li,{children:"rollbacked: 3"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"After the execution of the two-phase Confirm/Cancel method, the status is changed to committed or rollbacked. When the two-phase Confirm/Cancel method is called repeatedly, checking the transaction status can solve the idempotent problem."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-handle-suspend",children:"How to Handle Suspend"}),"\n",(0,s.jsx)(t.p,{children:"Suspension refers to the two-phase Cancel method being executed before the phase Try method, because empty rollback is allowed. After the execution of the two-phase Cancel method, directly returning success, the global transaction has ended. However, because the Try method is executed later, this will cause the resources reserved by the phase Try method to never be committed or released."}),"\n",(0,s.jsx)(t.p,{children:"So how does suspension arise?"}),"\n",(0,s.jsx)("img",{src:"/img/blog/20220116205241.png",alt:"img",style:{zoom:"50%"}}),"\n",(0,s.jsx)(t.p,{children:"As shown in the above figure, when participant A's phase Try method is executed, network congestion occurs, and due to Seata's global transaction timeout limit, after the Try method times out, TM resolves to roll back the global transaction. After the rollback is completed, if the RPC request arrives at participant A at this time and the Try method is executed to reserve resources, it will cause suspension."}),"\n",(0,s.jsx)(t.p,{children:"How does Seata handle suspension?"}),"\n",(0,s.jsx)(t.p,{children:"Add a status to the TCC transaction control table:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"suspended: 4"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"When the two-phase Cancel method is executed, if it is found that there is no related record in the TCC transaction control table, it means that the two-phase Cancel method is executed before the phase Try method. Therefore, a record with status=4 is inserted. Then, when the phase Try method is executed, if status=4 is encountered, it means that the two-phase Cancel has been executed, and false is returned to prevent the phase Try method from succeeding."}),"\n",(0,s.jsx)(t.h1,{id:"author-introduction",children:"Author Introduction"}),"\n",(0,s.jsxs)(t.p,{children:['Zhang Chenghui, currently working at Ant Group, loves to share technology. He is the author of the WeChat public account "Advanced Backend," the author of the technical blog (',(0,s.jsx)(t.a,{href:"https://objcoding.com/",children:"https://objcoding.com/"}),"), a Seata Committer, and his GitHub ID is: objcoding."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(96540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);