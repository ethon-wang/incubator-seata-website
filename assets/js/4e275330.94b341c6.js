"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[64382],{40306:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(74848),a=t(28453);const i={title:"In-Depth Analysis of Seata AT Mode Transaction Isolation Levels and Global Lock Design",author:"chenghui.zhang",keywords:["Seata","distributed transaction","AT mode","Transaction","GlobalLock"],description:"The transaction isolation in Seata AT mode is built on the basis of local isolation levels of supporting transactions. Assuming a database local isolation level of Read Committed or higher, Seata designs a global write-exclusive lock maintained by the transaction coordinator to ensure write isolation between transactions. Meanwhile, the default isolation level for global transactions is defined at Read Uncommitted.",date:"2022/01/12"},s="Preface",l={permalink:"/blog/seata-at-lock",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-at-lock.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-at-lock.md",title:"In-Depth Analysis of Seata AT Mode Transaction Isolation Levels and Global Lock Design",description:"The transaction isolation in Seata AT mode is built on the basis of local isolation levels of supporting transactions. Assuming a database local isolation level of Read Committed or higher, Seata designs a global write-exclusive lock maintained by the transaction coordinator to ensure write isolation between transactions. Meanwhile, the default isolation level for global transactions is defined at Read Uncommitted.",date:"2022-01-12T00:00:00.000Z",formattedDate:"January 12, 2022",tags:[],readingTime:7.015,hasTruncateMarker:!1,authors:[{name:"chenghui.zhang"}],frontMatter:{title:"In-Depth Analysis of Seata AT Mode Transaction Isolation Levels and Global Lock Design",author:"chenghui.zhang",keywords:["Seata","distributed transaction","AT mode","Transaction","GlobalLock"],description:"The transaction isolation in Seata AT mode is built on the basis of local isolation levels of supporting transactions. Assuming a database local isolation level of Read Committed or higher, Seata designs a global write-exclusive lock maintained by the transaction coordinator to ensure write isolation between transactions. Meanwhile, the default isolation level for global transactions is defined at Read Uncommitted.",date:"2022/01/12"},unlisted:!1,prevItem:{title:"In-Depth Analysis of Seata TCC Mode (1)",permalink:"/blog/seata-tcc"},nextItem:{title:"Q&A on the New Version of Snowflake Algorithm",permalink:"/blog/seata-snowflake-explain"}},r={authorsImageUrls:[void 0]},c=[{value:"1. Execution Process",id:"1-execution-process",level:2},{value:"2. Submission Process",id:"2-submission-process",level:2},{value:"GlobalLock Annotation Explanation",id:"globallock-annotation-explanation",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Seata AT mode is a non-intrusive distributed transaction solution. Seata internally implements a proxy layer for database operations. When using Seata AT mode, we actually use the built-in data source proxy DataSourceProxy provided by Seata. Seata adds a lot of logic in this proxy layer, such as inserting rollback undo_log records and checking global locks."}),"\n",(0,o.jsx)(n.p,{children:"Why check global locks? This is because the transaction isolation of Seata AT mode is based on the local isolation level of supporting transactions. Under the premise of database local isolation level of read committed or above, Seata designs a global write exclusive lock maintained by the transaction coordinator to ensure write isolation between transactions. At the same time, global transactions are by default defined at the read uncommitted isolation level."}),"\n",(0,o.jsx)(n.h1,{id:"understanding-seata-transaction-isolation-levels",children:"Understanding Seata Transaction Isolation Levels"}),"\n",(0,o.jsx)(n.p,{children:"Before discussing Seata transaction isolation levels, let's review the isolation levels of database transactions. Currently, there are four types of database transaction isolation levels, from lowest to highest:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Read uncommitted"}),"\n",(0,o.jsx)(n.li,{children:"Read committed"}),"\n",(0,o.jsx)(n.li,{children:"Repeatable read"}),"\n",(0,o.jsx)(n.li,{children:"Serializable"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The default isolation level for databases is usually read committed, such as Oracle, while some databases default to repeatable read, such as MySQL. Generally, the read committed isolation level of databases can satisfy the majority of business scenarios."}),"\n",(0,o.jsx)(n.p,{children:"We know that a Seata transaction is a global transaction, which includes several local transaction branches. During the execution of a global transaction (before the global transaction is completed), if a local transaction commits and Seata does not take any measures, it may lead to reading of committed local transactions, causing dirty reads. If a local transaction that has been committed before the global transaction commits is modified, it may cause dirty writes."}),"\n",(0,o.jsx)(n.p,{children:"From this, we can see that traditional dirty reads involve reading uncommitted data, while Seata's dirty reads involve reading data that has not been committed under the global transaction, where the global transaction may include multiple local transactions. The fact that one local transaction commits does not mean that the global transaction commits."}),"\n",(0,o.jsx)(n.p,{children:"Working under the read committed isolation level is fine for the vast majority of applications. In fact, the majority of scenarios that work under the read uncommitted isolation level also work fine."}),"\n",(0,o.jsx)(n.p,{children:"In extreme scenarios, if an application needs to achieve global read committed, Seata also provides a global lock mechanism to implement global transaction read committed. However, by default, Seata's global transactions work under the read uncommitted isolation level to ensure efficiency in the majority of scenarios."}),"\n",(0,o.jsx)(n.h1,{id:"implementation-of-global-locks",children:"Implementation of Global Locks"}),"\n",(0,o.jsx)(n.p,{children:"In AT mode, Seata uses the internal data source proxy DataSourceProxy, and the implementation of global locks is hidden within this proxy. Let's see what happens during the execution and submission processes."}),"\n",(0,o.jsx)(n.h2,{id:"1-execution-process",children:"1. Execution Process"}),"\n",(0,o.jsxs)(n.p,{children:["The execution process is in the StatementProxy class. During execution, if the executed SQL is ",(0,o.jsx)(n.code,{children:"select for update"}),", the SelectForUpdateExecutor class is used. If the executed method is annotated with ",(0,o.jsx)(n.code,{children:"@GlobalTransactional"})," or ",(0,o.jsx)(n.code,{children:"@GlobalLock"}),", it checks if there is a global lock. If a global lock exists, it rolls back the local transaction and continuously competes to obtain local and global locks through a while loop."]}),"\n",(0,o.jsx)(n.p,{children:"io.seata.rm.datasource.exec.SelectForUpdateExecutor#doExecute"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'public T doExecute(Object... args) throws Throwable {\n    Connection conn = statementProxy.getConnection();\n    // ... ...\n    try {\n        // ... ...\n        while (true) {\n            try {\n                // ... ...\n                if (RootContext.inGlobalTransaction() || RootContext.requireGlobalLock()) {\n                    // Do the same thing under either @GlobalTransactional or @GlobalLock, \n                    // that only check the global lock  here.\n                    statementProxy.getConnectionProxy().checkLock(lockKeys);\n                } else {\n                    throw new RuntimeException("Unknown situation!");\n                }\n                break;\n            } catch (LockConflictException lce) {\n                if (sp != null) {\n                    conn.rollback(sp);\n                } else {\n                    conn.rollback();\n                }\n                // trigger retry\n                lockRetryController.sleep(lce);\n            }\n        }\n    } finally {\n        // ...\n    }\n'})}),"\n",(0,o.jsx)(n.h2,{id:"2-submission-process",children:"2. Submission Process"}),"\n",(0,o.jsx)(n.p,{children:"The submission process occurs in the doCommit method of ConnectionProxy."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["If the executed method is annotated with ",(0,o.jsx)(n.code,{children:"@GlobalTransactional"}),", it will acquire the global lock during branch registration:"]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Requesting TC to register a branch"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"io.seata.rm.datasource.ConnectionProxy#register"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"private void register() throws TransactionException {\n    if (!context.hasUndoLog() || !context.hasLockKey()) {\n        return;\n    }\n    Long branchId = DefaultResourceManager.get().branchRegister(BranchType.AT, getDataSourceProxy().getResourceId(),\n                                                                null, context.getXid(), null, context.buildLockKeys());\n    context.setBranchId(branchId);\n}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"When a TC registers a branch, it obtains a global lock"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"io.seata.server.transaction.at.ATCore#branchSessionLock"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'protected void branchSessionLock(GlobalSession globalSession, BranchSession branchSession) throws TransactionException {\n    if (!branchSession.lock()) {\n        throw new BranchTransactionException(LockKeyConflict, String\n                                             .format("Global lock acquire failed xid = %s branchId = %s", globalSession.getXid(),\n                                                     branchSession.getBranchId()));\n    }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"2\uff09If the execution method has a '@GlobalLock' annotation, the global lock is checked for existence before committing, and if it does, an exception is thrown:"}),"\n",(0,o.jsx)(n.p,{children:"io.seata.rm.datasource.ConnectionProxy#processLocalCommitWithGlobalLocks"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"private void processLocalCommitWithGlobalLocks() throws SQLException {\n    checkLock(context.buildLockKeys());\n    try {\n        targetConnection.commit();\n    } catch (Throwable ex) {\n        throw new SQLException(ex);\n    }\n    context.reset();\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"globallock-annotation-explanation",children:"GlobalLock Annotation Explanation"}),"\n",(0,o.jsxs)(n.p,{children:["From the execution process and submission process, it can be seen that since opening a global transaction with the ",(0,o.jsx)(n.code,{children:"@GlobalTransactional"})," annotation can check if the global lock exists before transaction submission, why does Seata still provide a ",(0,o.jsx)(n.code,{children:"@GlobalLock"})," annotation?"]}),"\n",(0,o.jsxs)(n.p,{children:["This is because not all database operations require opening a global transaction, and opening a global transaction is a relatively heavy operation that involves initiating RPC processes to TC. The ",(0,o.jsx)(n.code,{children:"@GlobalLock"})," annotation only checks the existence of the global lock during the execution process and does not initiate a global transaction. Therefore, when there is no need for a global transaction but the global lock needs to be checked to avoid dirty reads and writes, using the ",(0,o.jsx)(n.code,{children:"@GlobalLock"})," annotation is a lighter operation."]}),"\n",(0,o.jsx)(n.h1,{id:"how-to-prevent-dirty-writes",children:"How to Prevent Dirty Writes"}),"\n",(0,o.jsx)(n.p,{children:"Let's first understand how dirty writes occur when using Seata AT mode:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20211226164628.png",alt:""})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Note: Other processes in the branch transaction execution are omitted."})}),"\n",(0,o.jsx)(n.p,{children:"When Business One starts a global transaction containing branch transaction A (modifying A) and branch transaction B (modifying B), Business Two modifies A. Business One's branch transaction A obtains a local lock before Business Two, waiting for Business One to complete the execution of branch transaction A. Business Two then obtains the local lock, modifies A, and commits it to the database. However, Business One encounters an exception during the execution of branch transaction A. Since the data of branch transaction A has been modified by Business Two, Business One's global transaction cannot be rolled back."}),"\n",(0,o.jsx)(n.p,{children:"How to prevent dirty writes?"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Business Two uses ",(0,o.jsx)(n.code,{children:"@GlobalTransactional"})," annotation:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20211226210337.png",alt:""})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Note: Other processes in the branch transaction execution are omitted."})}),"\n",(0,o.jsx)(n.p,{children:"During the execution of the global transaction by Business Two, when registering the branch transaction before the submission of branch transaction A and acquiring the global lock, it finds that Business One's global lock has not been released yet. Therefore, Business Two cannot commit and throws an exception to roll back, thus preventing dirty writes."}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["Business Two uses ",(0,o.jsx)(n.code,{children:"@GlobalLock"})," annotation:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20211226210502.png",alt:""})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Note: Other processes in the branch transaction execution are omitted."})}),"\n",(0,o.jsxs)(n.p,{children:["Similar to the effect of ",(0,o.jsx)(n.code,{children:"@GlobalTransactional"})," annotation, but without the need to open a global transaction, it only checks the existence of the global lock before local transaction submission."]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Business Two uses ",(0,o.jsx)(n.code,{children:"@GlobalLock"})," annotation + ",(0,o.jsx)(n.code,{children:"select for update"})," statement:"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20211226172358.png",alt:""})}),"\n",(0,o.jsxs)(n.p,{children:["If a ",(0,o.jsx)(n.code,{children:"select for update"})," statement is added, it checks the existence of the global lock before the update operation. Business Two can only execute the updateA operation after the global lock is released."]}),"\n",(0,o.jsxs)(n.p,{children:["If only ",(0,o.jsx)(n.code,{children:"@Transactional"})," is used, there is a possibility of dirty writes. The fundamental reason is that without the GlobalLock annotation, the global lock is not checked, which may lead to another global transaction finding that a branch transaction has been modified when rolling back. Therefore, adding ",(0,o.jsx)(n.code,{children:"select for update"})," also has a benefit, which is that it allows for retries."]}),"\n",(0,o.jsx)(n.h1,{id:"how-to-prevent-dirty-reads",children:"How to Prevent Dirty Reads"}),"\n",(0,o.jsx)(n.p,{children:"Dirty reads in Seata AT mode refer to the scenario where data from a branch transaction that has been committed is read by another business before the global transaction is committed. Essentially, this is because Seata's default global transaction isolation level is read uncommitted."}),"\n",(0,o.jsx)(n.p,{children:"So how to prevent dirty reads?"}),"\n",(0,o.jsxs)(n.p,{children:["Business Two queries A with ",(0,o.jsx)(n.code,{children:"@GlobalLock"})," annotation + ",(0,o.jsx)(n.code,{children:"select for update"})," statement:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://gitee.com/objcoding/md-picture/raw/master/img/20211226210633.png",alt:""})}),"\n",(0,o.jsxs)(n.p,{children:["Adding the ",(0,o.jsx)(n.code,{children:"select for update"})," statement checks the existence of the global lock before executing the SQL. The SQL can only be executed after the global lock is acquired, thus preventing dirty reads."]}),"\n",(0,o.jsx)(n.h1,{id:"author-bio",children:"Author Bio:"}),"\n",(0,o.jsxs)(n.p,{children:['Zhang Chenghui currently works at Ant Group and is passionate about sharing technology. He is the author of the WeChat public account "\u540e\u7aef\u8fdb\u9636" (Backend Advancement) and the owner of the technical blog (',(0,o.jsx)(n.a,{href:"https://objcoding.com/",children:"https://objcoding.com/"}),"). He is also a Seata Contributor with GitHub ID: objcoding."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var o=t(96540);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);