"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[56102],{92296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=n(74848),a=n(28453);const i={title:"Seata TCC Mode",keywords:["Seata","TCC"],description:"User guide for Seata TCC mode"},o="Seata TCC Mode",r={id:"user/mode/tcc",title:"Seata TCC Mode",description:"User guide for Seata TCC mode",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/user/mode/tcc.md",sourceDirName:"user/mode",slug:"/user/mode/tcc",permalink:"/docs/next/user/mode/tcc",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/current/user/mode/tcc.md",tags:[],version:"current",frontMatter:{title:"Seata TCC Mode",keywords:["Seata","TCC"],description:"User guide for Seata TCC mode"},sidebar:"docs",previous:{title:"Seata AT Mode",permalink:"/docs/next/user/mode/at"},next:{title:"Seata Saga Mode",permalink:"/docs/next/user/mode/saga"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"Use Cases",id:"use-cases",level:3},{value:"Overall Mechanism",id:"overall-mechanism",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Getting Started",id:"getting-started",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"seata-tcc-mode",children:"Seata TCC Mode"}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"TCC Mode is a distributed transaction solution supported by Seata that allows fine-grained control by business entities. It is an intrusive solution, meaning it directly impacts the service layer, independent of the underlying database. TCC Mode is the second transaction mode supported by Seata, initially contributed by Ant Financial. Its distributed transaction model operates directly on the service layer, does not rely on the underlying database, offers flexibility in choosing the granularity of business resource locking, reduces resource lock holding time, exhibits good scalability, and is designed for independently deployable SOA services."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Overview of a global transaction",src:n(95308).A+"",width:"853",height:"482"})}),"\n",(0,s.jsxs)(t.p,{children:["In this document, we will focus on the usage of Seata TCC Mode. If you are interested in the principles behind TCC Mode and want to understand how Seata TCC addresses idempotence, empty rollback, and hanging issues, please refer to the corresponding ",(0,s.jsx)(t.a,{href:"../../dev/mode/tcc-mode",children:"Developer Guide"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"advantages",children:"Advantages"}),"\n",(0,s.jsx)(t.p,{children:"TCC is entirely independent of the underlying database, allowing for the management of resources across databases and applications, providing more granular control to business entities."}),"\n",(0,s.jsx)(t.h3,{id:"disadvantages",children:"Disadvantages"}),"\n",(0,s.jsx)(t.p,{children:"TCC is an intrusive distributed transaction solution that requires business systems to implement the Try, Confirm, and Cancel operations. It has a significant impact on business systems and is relatively complex in design."}),"\n",(0,s.jsx)(t.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,s.jsx)(t.p,{children:"TCC Mode is a high-performance distributed transaction solution suitable for scenarios with high performance requirements, such as core systems."}),"\n",(0,s.jsx)(t.h2,{id:"overall-mechanism",children:"Overall Mechanism"}),"\n",(0,s.jsx)(t.p,{children:'In the two-phase commit protocol, the Resource Manager (RM) needs to provide "prepare," "commit," and "rollback" operations. The Transaction Manager (TM) coordinates all Resource Managers in two phases. In the first phase, it queries all Resource Managers to check if the "prepare" is successful. If all resources are prepared successfully, it executes the "commit" operations in the second phase. Otherwise, it executes the "rollback" operations, ensuring that the final state of all resources is consistent, either all committed or all rolled back.'}),"\n",(0,s.jsx)(t.p,{children:"There are many ways to implement Resource Managers, and TCC (Try-Confirm-Cancel) is a service-oriented implementation of Resource Managers. TCC is a mature distributed transaction solution used to address data consistency issues in operations across databases and services. TCC, with its Try, Confirm, and Cancel methods, is implemented by business code, making it a service-oriented Resource Manager."}),"\n",(0,s.jsx)(t.p,{children:"The TCC Try operation serves as the first phase, responsible for checking and reserving resources. The Confirm operation is the second-phase commit operation, executing the actual business logic. Cancel is the second-phase rollback operation, canceling the reserved resources and reverting them to their initial state."}),"\n",(0,s.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(t.p,{children:'In contrast to AT Mode, where data source proxy is used to shield distributed transaction details, in TCC Mode, business entities need to define the "prepare," "commit," and "rollback" for TCC resources. For example:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'public interface TccActionOne {\n    @TwoPhaseBusinessAction(name = "DubboTccActionOne", commitMethod = "commit", rollbackMethod = "rollback")\n    public boolean prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "a") String a);\n    public boolean commit(BusinessActionContext actionContext);\n    public boolean rollback(BusinessActionContext actionContext);\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Seata treats a TCC interface as a resource, also known as a TCC Resource. The core annotation in the business interface is ",(0,s.jsx)(t.code,{children:"@TwoPhaseBusinessAction"}),", indicating that the current method uses TCC Mode for transaction management and specifying the Try, Confirm, and Cancel phases. The ",(0,s.jsx)(t.code,{children:"name"})," attribute registers a globally unique TCC bean name for the current transaction. The three execution phases of TCC Mode are:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Try phase: Reserving operational resources (Prepare). The method executed in this phase is the one annotated with ",(0,s.jsx)(t.code,{children:"@TwoPhaseBusinessAction"}),", such as the ",(0,s.jsx)(t.code,{children:"prepare"})," method in the example code."]}),"\n",(0,s.jsxs)(t.li,{children:["Confirm phase: Executing the main business logic (Commit). This phase uses the method specified by the ",(0,s.jsx)(t.code,{children:"commitMethod"})," attribute to perform the Confirm work."]}),"\n",(0,s.jsxs)(t.li,{children:["Cancel phase: Transaction rollback (Rollback). This phase uses the method specified by the ",(0,s.jsx)(t.code,{children:"rollbackMethod"})," attribute to perform the Cancel work."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Additionally, in TCC Mode, you can use the ",(0,s.jsx)(t.code,{children:"BusinessActionContext"})," to pass query parameters in the transaction context. The attributes include:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"xid"}),": Global transaction ID."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"branchId"}),": Branch transaction ID."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"actionName"}),": Branch resource ID (resource ID)."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"actionContext"}),": Parameters passed by the business, which can be annotated with ",(0,s.jsx)(t.code,{children:"@BusinessActionContextParameter"})," to indicate the parameters to be passed."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["After defining the TCC interface, you can open a distributed transaction using ",(0,s.jsx)(t.code,{children:"@GlobalTransactional"}),", similar to AT Mode:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@GlobalTransactional\npublic String doTransactionCommit(){\n    tccActionOne.prepare(null,"one");\n    tccActionTwo.prepare(null,"two");\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Note that if TCC participants are local beans (non-remote RPC services), you need to add the ",(0,s.jsx)(t.code,{children:"@LocalTCC"})," annotation to the interface definition, as shown in the following example:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'@LocalTCC\npublic interface TccActionTwo {\n    @TwoPhaseBusinessAction(name = "TccActionTwo", commitMethod = "commit", rollbackMethod = "rollback")\n    public boolean prepare(BusinessActionContext actionContext, @BusinessActionContextParameter(paramName = "a") String a);\n    public boolean commit(BusinessActionContext actionContext);\n    public boolean rollback(BusinessActionContext actionContext);\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsxs)(t.p,{children:["Follow the ",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata-samples/tree/master/tcc",children:"seata-samples/tcc"})," section for several examples to experiment with. You can start ",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata-samples/tree/master/tcc/local-tcc-sample",children:"local-tcc-example"})," to view an example of local bean usage or ",(0,s.jsx)(t.a,{href:"https://github.com/apache/incubator-seata-samples/tree/master/tcc/local-tcc-sample",children:"dubbo-tcc-example"})," for a remote TCC example."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},95308:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/seata_tcc-1-1f7a834639aa755d73fa2af435c4f042.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);