"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[97478],{51061:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>l});var a=i(74848),s=i(28453);const n={title:"Release Notes",keywords:["Seata","Release Notes","2.0.x"],description:"2.0.x Release Notes"},h="Downloads",r={id:"release-notes",title:"Release Notes",description:"2.0.x Release Notes",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v2.0/release-notes.md",sourceDirName:".",slug:"/release-notes",permalink:"/docs/release-notes",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v2.0/release-notes.md",tags:[],version:"v2.0",frontMatter:{title:"Release Notes",keywords:["Seata","Release Notes","2.0.x"],description:"2.0.x Release Notes"},sidebar:"release-notes"},c={},l=[{value:"2.0.0 (2023-11-24)",id:"200-2023-11-24",level:3},{value:"Seata 2.0.0",id:"seata-200",level:3},{value:"feature",id:"feature",level:3},{value:"bugfix",id:"bugfix",level:3},{value:"optimize",id:"optimize",level:3},{value:"security",id:"security",level:3},{value:"test",id:"test",level:3},{value:"Contributors",id:"contributors",level:3},{value:"Link",id:"link",level:4}];function o(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"downloads",children:"Downloads"}),"\n",(0,a.jsx)(t.h1,{id:"seata",children:"Seata"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["GitHub: ",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata",children:"https://github.com/apache/incubator-seata"})]}),"\n",(0,a.jsxs)(t.p,{children:["Release Notes: ",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/releases",children:"https://github.com/apache/incubator-seata/releases"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"200-2023-11-24",children:"2.0.0 (2023-11-24)"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/archive/v2.0.0.zip",children:"source"})," |\n",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/releases/download/v2.0.0/seata-server-2.0.0.zip",children:"binary"})]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:(0,a.jsx)("mark",{children:"Release notes"})}),(0,a.jsx)(t.h3,{id:"seata-200",children:"Seata 2.0.0"}),(0,a.jsx)(t.p,{children:"Seata 2.0.0 Released"}),(0,a.jsx)(t.p,{children:"Seata is an easy-to-use, high-performance, open source distributed transaction solution."}),(0,a.jsx)(t.p,{children:"The version is updated as follows:"}),(0,a.jsx)(t.h3,{id:"feature",children:"feature"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5165",children:"#5165"}),"] optimize TCC structure, supporting API access. add integration layer module(seata-integration-tx-api) for transaction process definition and proxy enhancement."]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5352",children:"#5352"}),"] add jackson json parser and gson json parser for tcc business action context"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5377",children:"#5377"}),"] make AbstractHttpExecutor.class support http put"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5396",children:"#5396"}),"] TC log appender metric"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5118",children:"#5118"}),"] support two-stage concurrent notification execution"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5529",children:"#5529"}),"] docker image supports JVM parameter injection"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/3887",children:"#3887"}),"] add SQL Server database support in AT mode"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/4033",children:"#4033"}),"] add SQLServer support for Server DB storage mode"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5600",children:"#5600"}),"] feature: support trace the transaction link according to the XID"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5357",children:"#5357"}),"] feature: console integration saga-statemachine-designer"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5717",children:"#5717"}),"] compatible with file.conf and registry.conf configurations in version 1.4.2 and below"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5842",children:"#5842"}),"] adding metainfo to docker image"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5902",children:"#5902"}),"] support IPv6"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5907",children:"#5907"}),"] support polardb-x 2.0 in AT mode"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5932",children:"#5932"}),"] support Dameng database"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5946",children:"#5946"}),"] add sqlserver's adaptation to the console paging interface"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5226",children:"#5226"}),"] support raft cluster and store mode"]}),"\n"]}),(0,a.jsx)(t.h3,{id:"bugfix",children:"bugfix"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5677",children:"#5677"}),"] fix saga mode serviceTask inputParams json autoType convert exception"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5277",children:"#5277"}),"] fix server console has queried the released lock"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5282",children:"#5282"}),"] parallel request handle throw IndexOutOfBoundsException"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5294",children:"#5294"}),"] fix auto-increment of pk columns in PostgreSQL/Oracle in AT mode"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5298",children:"#5298"}),"] don't remove GlobalSession when retry rollback or retry commit timeout"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5304",children:"#5304"}),"] remove RollbackRetryTimeout sessions during in file storage recover"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5310",children:"#5310"}),"] fix that keywords don't add escaped characters"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5318",children:"#5318"}),"] fix G1 jvm parameter in jdk8"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5330",children:"#5330"}),"] fix bugs found in unit tests"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5337",children:"#5337"}),"] fix bugs found in feature#5165 about sorting problem of multiple interceptor under the spring used environment, by the way fix the BeforeTransaction(AfterTransaction) transaction ordering problem when the order is consistent"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5347",children:"#5347"}),"] Fix console print ",(0,a.jsx)(t.code,{children:"unauthorized error"})]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5355",children:"#5355"}),"] fix bug when customizing context-path"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5362",children:"#5362"}),"] fix When the rollback logic on the TC side returns RollbackFailed, the custom FailureHandler is not executed"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5373",children:"#5373"}),"] fix transaction timeout on client side not execute hook and failureHandler"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5395",children:"#5395"}),"] check if table meta cache should be refreshed in AT mode"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5426",children:"#5426"}),"] fix the GlobalTransactional annotation npe issue."]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5464",children:"#5464"}),"] fix global session is always begin in saga mode"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5478",children:"#5478"}),"] fix finished transaction swallows exception when committing"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5490",children:"#5490"}),"] fix method name not print in logs"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5449",children:"#5449"}),"] fix Oracle XA transaction reentrant issues"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5462",children:"#5462"}),"] fix if using ",(0,a.jsx)(t.code,{children:"@GlobalTransactional"})," in RM, ",(0,a.jsx)(t.code,{children:"ShouldNeverHappenException"})," will be thrown"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5498",children:"#5498"}),"] bugfix: fix the full table scan issue with 'setDate' condition in Oracle 10g"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5531",children:"#5531"}),"] fix the log file path was loaded incorrectly"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5523",children:"#5523"}),"] fix GlobalStatus=9 can't be cleared in DB storage mode"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5558",children:"#5558"}),"] fix mariadb rollback failed"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5556",children:"#5556"}),"] fix oracle insert undolog failed"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5579",children:"#5579"}),"] fix RM_CHANNELS get npe when resourceId is empty"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5577",children:"#5577"}),"] fix grpc interceptor xid unbinding problem"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5594",children:"#5594"}),"] fix log in participant transaction role"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5604",children:"#5604"}),"] fix the ",(0,a.jsx)(t.code,{children:"asyncCommit"})," and ",(0,a.jsx)(t.code,{children:"queueToRetryCommit"})," always failed in db mode"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5658",children:"#5658"}),"] bugfix: fix escaped characters for upper and lower case column names"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5661",children:"#5661"}),"] bugfix: the timeout is null when the connectionProxyXA connection is reused"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5679",children:"#5679"}),"] bugfix: fix compatibility between xxx.grouplist and grouplist.xxx configuration items"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5715",children:"#5715"}),"] fix get configuration item contains underlined error"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5748",children:"#5748"}),"] case of the pk col-name in the business sql is inconsistent with the case in the table metadata, resulting in a rollback failure"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5745",children:"#5745"}),"] fix the problem that the parameter prefix requirement of the setAttachment method in sofa-rpc is not met"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5762",children:"#5772"}),"] change some fields type of TableMetaCache to avoid integer overflow"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5794",children:"#5787"}),"] Solution cluster cannot be customized when redis serves as the registry"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5810",children:"#5810"}),"] fix XA transaction start exception and rollback failure caused by druid dependency conflict"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5821",children:"#5821"}),"] fix insert executor keywords unescape"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5835",children:"#5835"}),"] bugfix: fix TC retry rollback wrongly, after the XA transaction fail and rollback"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5880",children:"#5881"}),"] fix delete branch table unlock failed"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5930",children:"#5930"}),"] fix the issue of missing sentinel password in store redis mode"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5958",children:"#5958"}),"] required to be unlocked when a re-election occurs in a commit state"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5971",children:"#5971"}),'] fix some configurations that are not deprecated show "Deprecated"']}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5977",children:"#5977"}),"] fix that rpcserver is not closed when raftServer is closed"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5954",children:"#5954"}),"] fix the issue of saved branch session status does not match the actual branch session status"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5990",children:"#5990"}),"] fix the issue that the Lua script is not synchronized when the redis sentinel master node is down"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5997",children:"#5997"}),"] fix global transaction hook repeat execute"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6018",children:"#6018"}),"] fix incorrect metric report"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6024",children:"#6024"}),'] fix the white screen after click the "View Global Lock" button on the transaction info page in the console']}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6015",children:"#6015"}),"] fix can't integrate dubbo with spring"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6049",children:"#6049"}),"] fix registry type for raft under the network interruption did not carry out the sleep 1s"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6050",children:"#6050"}),"] change RaftServer#destroy to wait all shutdown procedures"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6033",children:"#6033"}),"] fix the isReference judgment logic in HSFRemotingParser, remove unnecessary judgment about FactoryBean"]}),"\n"]}),(0,a.jsx)(t.h3,{id:"optimize",children:"optimize"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5966",children:"#5966"}),"] decouple saga expression handling and remove evaluator package"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5928",children:"#5928"}),"] add Saga statelang semantic validation"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/4858",children:"#4858"}),"] reorganize the usage of task session manager"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/4881",children:"#4881"}),"] reorganize the usage of Sessionmanager and listener"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5273",children:"#5273"}),"] Optimize the compilation configuration of the ",(0,a.jsx)(t.code,{children:"protobuf-maven-plugin"})," plug-in to solve the problem of too long command lines in higher versions."]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5278",children:"#5278"}),"] clean multi-sessionmanager-instance pattern"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5302",children:"#5302"}),"] remove startup script the -Xmn configuration"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/4880",children:"#4880"}),"] optimize logs when commit/rollback catch an exception"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5322",children:"#5322"}),"] optimize the log of SPI"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5326",children:"#5326"}),"] add time info for global transaction timeout log"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5333",children:"#5328"}),"] add corresponding lua implementation for Redis mode of global transaction and transaction storage"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5341",children:"#5341"}),"] optimize gRPC Interceptor for TCC mode"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5342",children:"#5342"}),"] optimize the check of the delay value of the TCC fence log clean task"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5344",children:"#5344"}),"] add store mode,config type and registry type log info"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5351",children:"#5351"}),"] optimize RPC filter for TCC mode"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5354",children:"#5354"}),"] reconstruct the RPC integration module"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5370",children:"#5370"}),"] optimize transaction fail handler"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5431",children:"#5431"}),"] optimize github workflow"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5461",children:"#5461"}),"] optimize license workflow"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5456",children:"#5456"}),"] refactor ColumnUtils and EscapeHandler"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5438",children:"#5438"}),"] optimize code style properties"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5471",children:"#5471"}),"] optimize transaction log on client side"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5485",children:"#5485"}),"] optimize server log output"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/4907",children:"#4907"}),"] optimize thread scheduling and code"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5487",children:"#5487"}),"] mark the lockholder of branchsession as final"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5519",children:"#5519"}),"] optimize FenceHandler for oracle"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5501",children:"#5501"}),"] support updating transaction state with optimistic locking"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5419",children:"#5419"}),"] optimize images based on java 8/17 and support maven-3.9.0"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5549",children:"#5549"}),"] update expire gpg key and publish workflow"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5576",children:"#5576"}),"] The common fence clean task is only initiated when useTCCFence is set to true"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5623",children:"#5623"}),"] optimize possible conflict between asyncCommitting thread and retryCommitting thread"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5553",children:"#5553"}),"] support case-sensitive attributes for table and column metadata"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5563",children:"#5563"}),"] optimize: optimize channel availability thread log output"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5644",children:"#5644"}),"] optimize server logs print"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5680",children:"#5680"}),"] optimize escape character for case of columnNames"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5686",children:"#5686"}),"] optimize: optimize license check actions"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5714",children:"#5714"}),"] optimize distributed lock log"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5723",children:"#5723"}),"] optimize docker default timezone"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5779",children:"#5779"}),"] remove unnecessary log outputs and unify the log output path."]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5802",children:"#5802"}),"] set server's transaction level to READ_COMMITTED"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5783",children:"#5783"}),"] support the nacos application name property"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5524",children:"#5524"}),"] support for more operational commands in seata-server.sh"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5836",children:"#5836"}),"] separate MySQL from Mariadb implementations"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5869",children:"#5869"}),"] some minor syntax optimization"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5885",children:"#5885"}),"] optimize log in ConnectionProxyXA"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5894",children:"#5894"}),"] remove dependency without license"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5895",children:"#5895"}),"] remove 7z format compression support"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5896",children:"#5896"}),"] remove mariadb.jdbc dependency"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5384",children:"#5384"}),"] unified project version"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5419",children:"#5419"}),"] publish images based on java 8/17 and support maven-3.9.0"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5829",children:"#5829"}),"] fix codecov chart not display"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5878",children:"#5878"}),"] optimize ",(0,a.jsx)(t.code,{children:"httpcore"})," and ",(0,a.jsx)(t.code,{children:"httpclient"})," dependencies"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5917",children:"#5917"}),"] upgrade native-lib-loader version"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5926",children:"#5926"}),"] optimize some scripts related to Apollo"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5938",children:"#5938"}),"] support jmx port in seata"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5944",children:"#5944"}),"] optimize: fix build action warning"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5951",children:"#5951"}),"] remove un support config in jdk17"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5959",children:"#5959"}),"] modify code style and remove unused import"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6002",children:"#6002"}),"] remove fst serialization"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6045",children:"#6045"}),"] optimize derivative product check base on mysql"]}),"\n"]}),(0,a.jsx)(t.h3,{id:"security",children:"security"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5642",children:"#5642"}),"] add Hessian Serializer WhiteDenyList"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5694",children:"#5694"}),"] fix several node.js security vulnerabilities"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5801",children:"#5801"}),"] fix some dependencies vulnerability"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5805",children:"#5805"}),"] fix some serializer vulnerabilities"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5868",children:"#5868"}),"] fix npm package vulnerabilities"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5916",children:"#5916"}),"] upgrade nodejs dependency"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5942",children:"#5942"}),"] upgrade dependencies version"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5987",children:"#5987"}),"] upgrade some dependencies version"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6013",children:"#6013"}),"] upgrade seata-server spring version"]}),"\n"]}),(0,a.jsx)(t.h3,{id:"test",children:"test"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5308",children:"#5308"}),"] add unit test [FileLoader, ObjectHolder, StringUtils]"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5309",children:"#5309"}),"] add unit test [ArrayUtils, ConfigTools, MapUtil]"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5335",children:"#5335"}),"] add unit test [EnhancedServiceLoader,ExtensionDefinition,SizeUtilTest,ReflectionUtil,LowerCaseLinkHashMap,FileLoader,ObjectHolder]"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5367",children:"#5367"}),"] fix UpdateExecutorTest failed"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5383",children:"#5383"}),"] fix multi spring version test failed"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5391",children:"#5391"}),"] add unit test for config module"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5428",children:"#5428"}),"] fix FileTransactionStoreManagerTest failed"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5622",children:"#5622"}),"] add unit test [ExporterType, RegistryType]"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5637",children:"#5637"}),"] add unit test [BatchResultMessage, HeartbeatMessage, RegisterRMResponse, ResultCode, RegisterTMResponse, MergeResultMessage, MergedWarpMessage, Version]"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5893",children:"#5893"}),"] remove sofa test cases"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5845",children:"#5845"}),"] upgrade druid and add ",(0,a.jsx)(t.code,{children:"test-druid.yml"})]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5863",children:"#5863"}),"] fix unit test in java 21"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5986",children:"#5986"}),"] fix zookeeper UT failed"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5995",children:"#5995"}),"] add test cases for RaftClusterMetadataMsg"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6001",children:"#6001"}),"] add test cases for RaftMsgExecute under branch package"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/5996",children:"#5996"}),"] add test cases for RaftMsgExecute under global package"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6003",children:"#6003"}),"] add test cases for RaftMsgExecute under lock package"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6005",children:"#6005"}),"] fix saga async tests undefined behavior"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6009",children:"#6009"}),"] add test cases for RaftServerFactory"]}),"\n",(0,a.jsxs)(t.li,{children:["[",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/pull/6052",children:"#6052"}),"] upgrade springboot and spring version for server for test"]}),"\n"]}),(0,a.jsx)(t.h3,{id:"contributors",children:"Contributors"}),(0,a.jsx)(t.p,{children:"Thanks to these contributors for their code commits. Please report an unintended omission."}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/slievrly",children:"slievrly"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/xssdpgy",children:"xssdpgy"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/albumenj",children:"albumenj"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/PeppaO",children:"PeppaO"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/yuruixin",children:"yuruixin"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/JavaLionLi",children:"CrazyLionLi"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/xingfudeshi",children:"xingfudeshi"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/Bughue",children:"Bughue"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/pengten",children:"pengten"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/wangliang181230",children:"wangliang181230"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/GoodBoyCoder",children:"GoodBoyCoder"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/funky-eyes",children:"funky-eyes"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/isharpever",children:"isharpever"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/mxsm",children:"mxsm"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/liuqiufeng",children:"liuqiufeng"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/l81893521",children:"l81893521"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/dmego",children:"dmego"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/zsp419",children:"zsp419"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/tuwenlin",children:"tuwenlin"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/sixlei",children:"sixlei"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/wt-better",children:"yixia"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/capthua",children:"capthua"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/robynron",children:"robynron"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/XQDD",children:"XQDD"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/Weelerer",children:"Weelerer"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/Ifdevil",children:"Ifdevil"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/iquanzhan",children:"iquanzhan"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/leizhiyuan",children:"leizhiyuan"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/Aruato",children:"Aruato"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/ggbocoder",children:"ggbocoder"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/ptyin",children:"ptyin"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/jsbxyyx",children:"jsbxyyx"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/xxxcrel",children:"xxxcrel"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/fengzhenhai168",children:"fengzhenhai168"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/tobehardest",children:"tobehardest"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/leezongjie",children:"leezongjie"})}),"\n"]}),(0,a.jsx)(t.p,{children:"Also, we receive many valuable issues, questions and advices from our community. Thanks for you all."}),(0,a.jsx)(t.h4,{id:"link",children:"Link"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Seata:"})," ",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata",children:"https://github.com/apache/incubator-seata"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Seata-Samples:"})," ",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata-samples",children:"https://github.com/apache/incubator-seata-samples"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Release:"})," ",(0,a.jsx)(t.a,{href:"https://github.com/apache/incubator-seata/releases",children:"https://github.com/apache/incubator-seata/releases"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"WebSite:"})," ",(0,a.jsx)(t.a,{href:"https://seata.apache.org",children:"https://seata.apache.org"})]}),"\n"]})]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>h,x:()=>r});var a=i(96540);const s={},n=a.createContext(s);function h(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:h(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);