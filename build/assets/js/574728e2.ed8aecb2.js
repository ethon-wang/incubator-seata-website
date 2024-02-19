"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[57187],{3232:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>h,toc:()=>l});var a=t(74848),n=t(28453);const s={title:"Seata 1.6.0 Released with Significant Performance Improvement",author:"Seata Community",keywords:["seata","distributed transaction","1.6.0"],description:"Seata 1.6.0 Released with Significant Performance Improvement",date:"2022/12/17"},r=void 0,h={permalink:"/blog/seata-1.6.0",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-1.6.0.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-1.6.0.md",title:"Seata 1.6.0 Released with Significant Performance Improvement",description:"Seata 1.6.0 Released with Significant Performance Improvement",date:"2022-12-17T00:00:00.000Z",formattedDate:"December 17, 2022",tags:[],readingTime:5.13,hasTruncateMarker:!1,authors:[{name:"Seata Community"}],frontMatter:{title:"Seata 1.6.0 Released with Significant Performance Improvement",author:"Seata Community",keywords:["seata","distributed transaction","1.6.0"],description:"Seata 1.6.0 Released with Significant Performance Improvement",date:"2022/12/17"},unlisted:!1,prevItem:{title:"6 Major Topics Now Open for Selection | Welcome to Apply for Seata Open Source Summer",permalink:"/blog/iscas2023"},nextItem:{title:"Seata 1.5.2 Released with XID Load Balancing Support",permalink:"/blog/seata-1.5.2"}},c={authorsImageUrls:[void 0]},l=[{value:"Seata 1.6.0 Released with Significant Performance Improvement",id:"seata-160-released-with-significant-performance-improvement",level:3},{value:"feature\uff1a",id:"feature",level:3},{value:"Bug Fixes:",id:"bug-fixes",level:3},{value:"Optimization:",id:"optimization",level:3},{value:"Testing:",id:"testing",level:3},{value:"Link",id:"link",level:4}];function o(e){const i={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h3,{id:"seata-160-released-with-significant-performance-improvement",children:"Seata 1.6.0 Released with Significant Performance Improvement"}),"\n",(0,a.jsx)(i.p,{children:"Seata is an open-source distributed transaction solution that provides high performance and easy-to-use distributed transaction services."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Download Links for seata-server:"})}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/archive/v1.6.0.zip",children:"source"})," |\n",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/releases/download/v1.6.0/seata-server-1.6.0.zip",children:"binary"})]}),"\n",(0,a.jsx)(i.p,{children:"Updates in this version:"}),"\n",(0,a.jsx)(i.h3,{id:"feature",children:"feature\uff1a"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4863",children:"#4863"}),"] Support for multiple primary keys in Oracle and PostgreSQL"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4649",children:"#4649"}),"] Support for multiple registry centers in seata-server"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4779",children:"#4779"}),"] Support for Apache Dubbo3"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4479",children:"#4479"}),"] TCC annotations can now be added to interfaces and implementation classes"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4877",children:"#4877"}),"] Client SDK supports JDK17"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4914",children:"#4914"}),"] Support for update join syntax for MySQL"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4542",children:"#4542"}),"] Support for Oracle timestamp type"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5111",children:"#5111"}),"] Support for Nacos contextPath configuration"]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4802",children:"#4802"}),"] Dockerfile supports arm64"]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"bug-fixes",children:"Bug Fixes:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4780",children:"#4780"}),"] Fixed the issue where TimeoutRollbacked event wasn't sent after a successful timeout rollback."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4954",children:"#4954"}),"] Fixed NullPointerException when the output expression was incorrect."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4817",children:"#4817"}),"] Fixed the problem with non-standard configuration in higher versions of Spring Boot."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4838",children:"#4838"}),"] Fixed the issue where undo log wasn't generated when using Statement.executeBatch()."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4533",children:"#4533"}),"] Fixed inaccurate metric data caused by duplicate events handling for handleRetryRollbacking."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4912",children:"#4912"}),"] Fixed the issue where mysql InsertOnDuplicateUpdate couldn't correctly match column names due to inconsistent case."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4543",children:"#4543"}),"] Fixed support for Oracle nclob data type."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4915",children:"#4915"}),"] Fixed the problem of not obtaining ServerRecoveryProperties attributes."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4919",children:"#4919"}),"] Fixed the issue where XID's port and address appeared as null:0."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4928",children:"#4928"}),"] Fixed NPE issue in rpcContext.getClientRMHolderMap."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4953",children:"#4953"}),"] Fixed the issue where InsertOnDuplicateUpdate could bypass primary key modification."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4978",children:"#4978"}),"] Fixed kryo support for cyclic dependencies."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4985",children:"#4985"}),"] Fixed the issue of duplicate undo_log id."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4874",children:"#4874"}),"] Fixed startup failure with OpenJDK 11."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5018",children:"#5018"}),"] Fixed server startup failure issue due to loader path using relative path in startup script."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5004",children:"#5004"}),"] Fixed the issue of duplicate row data in mysql update join."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5032",children:"#5032"}),"] Fixed the abnormal SQL statement in mysql InsertOnDuplicateUpdate due to incorrect calculation of condition parameter fill position."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5033",children:"#5033"}),"] Fixed NullPointerException issue in SQL statement of InsertOnDuplicateUpdate due to missing insert column field."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5038",children:"#5038"}),"] Fixed SagaAsyncThreadPoolProperties conflict issue."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5050",children:"#5050"}),"] Fixed the issue where global status under Saga mode wasn't correctly changed to Committed."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5052",children:"#5052"}),"] Fixed placeholder parameter issue in update join condition."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5031",children:"#5031"}),"] Fixed the issue of using null value index as query condition in InsertOnDuplicateUpdate."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5075",children:"#5075"}),"] Fixed the inability to intercept SQL statements with no primary key and unique index in InsertOnDuplicateUpdate."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5093",children:"#5093"}),"] Fixed accessKey loss issue after seata server restart."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5092",children:"#5092"}),"] Fixed the issue of incorrect AutoConfiguration order when seata and jpa are used together."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5109",children:"#5109"}),"] Fixed NPE issue when @GlobalTransactional is not applied on RM side."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5098",children:"#5098"}),"] Disabled oracle implicit cache for Druid."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4860",children:"#4860"}),"] Fixed metrics tag override issue."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5028",children:"#5028"}),"] Fixed null value issue in insert on duplicate SQL."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5078",children:"#5078"}),"] Fixed interception issue for SQL statements without primary keys and unique keys."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5097",children:"#5097"}),"] Fixed accessKey loss issue when Server restarts."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5131",children:"#5131"}),"] Fixed issue where XAConn cannot rollback when in active state."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5134",children:"#5134"}),"] Fixed issue where hikariDataSource auto proxy fails in some cases."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5163",children:"#5163"}),"] Fixed compilation failure in higher versions of JDK."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"optimization",children:"Optimization:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4681",children:"#4681"}),"] Optimized the process of competing locks."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4774",children:"#4774"}),"] Optimized mysql8 dependency in seataio/seata-server image."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4750",children:"#4750"}),"] Optimized the release of global locks in AT branch to not use xid."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4790",children:"#4790"}),"] Added automatic OSSRH github action publishing."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4765",children:"#4765"}),"] XA mode in mysql8.0.29 and above no longer holds connection to the second phase."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4797",children:"#4797"}),"] Optimized all github actions scripts."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4800",children:"#4800"}),"] Added NOTICE file."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4761",children:"#4761"}),"] Used hget instead of hmget in RedisLocker."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4414",children:"#4414"}),"] Removed log4j dependency."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4836",children:"#4836"}),"] Improved readability of BaseTransactionalExecutor#buildLockKey(TableRecords rowsIncludingPK) method."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4865",children:"#4865"}),"] Fixed security vulnerabilities in Saga visualization designer GGEditor."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4590",children:"#4590"}),"] Dynamic configuration support for automatic degradation switch."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4490",children:"#4490"}),"] Optimized tccfence record table to delete by index."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4911",children:"#4911"}),"] Added header and license checks."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4917",children:"#4917"}),"] Upgraded package-lock.json to fix vulnerabilities."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4924",children:"#4924"}),"] Optimized pom dependencies."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4932",children:"#4932"}),"] Extracted default values for some configurations."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4925",children:"#4925"}),"] Optimized javadoc comments."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4921",children:"#4921"}),"] Fixed security vulnerabilities in console module and upgraded skywalking-eyes version."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4936",children:"#4936"}),"] Optimized storage configuration reading."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4946",children:"#4946"}),"] Passed SQL exceptions encountered when acquiring locks to the client."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4962",children:"#4962"}),"] Optimized build configuration and corrected base image of docker image."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4974",children:"#4974"}),"] Removed limitation on querying globalStatus quantity under redis mode."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4981",children:"#4981"}),"] Improved error message when tcc fence record cannot be found."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4995",children:"#4995"}),"] Fixed duplicate primary key query conditions in the SQL statement after mysql InsertOnDuplicateUpdate."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5047",children:"#5047"}),"] Removed unused code."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5051",children:"#5051"}),"] When undolog generates dirty write during rollback, throw exception BranchRollbackFailed_Unretriable."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5075",children:"#5075"}),"] Intercept insert on duplicate update statements without primary keys and unique indexes."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5104",children:"#5104"}),"] ConnectionProxy is no longer dependent on druid."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5124",children:"#5124"}),"] Support deleting TCC fence record table for oracle."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4968",children:"#4468"}),"] Support kryo 5.3.0."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4807",children:"#4807"}),"] Optimized image and OSS repository publishing pipelines."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4445",children:"#4445"}),"] Optimized transaction timeout judgment."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4958",children:"#4958"}),"] Optimized execution of triggerAfterCommit() for timeout transactions."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4582",children:"#4582"}),"] Optimized transaction sorting in redis storage mode."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4963",children:"#4963"}),"] Added ARM64 pipeline CI testing."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4434",children:"#4434"}),"] Removed seata-server CMS GC parameters."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"testing",children:"Testing:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4411",children:"#4411"}),"] Tested Oracle database AT mode type support."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/4794",children:"#4794"}),"] Refactored code and attempted to fix unit test ",(0,a.jsx)(i.code,{children:"DataSourceProxyTest.getResourceIdTest()"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["[",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/pull/5101",children:"#5101"}),"] Fixed ClassNotFoundException issue in zk registration and configuration center ",(0,a.jsx)(i.code,{children:"DataSourceProxyTest.getResourceIdTest()"}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"Special thanks to the following contributors for their code contributions. If there are any unintentional omissions, please report."}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/slievrly",children:"slievrly"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/renliangyu857",children:"renliangyu857"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/wangliang181230",children:"wangliang181230"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/funky-eyes",children:"funky-eyes"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/tuwenlin",children:"tuwenlin"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/conghuhu",children:"conghuhu"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/a1104321118",children:"a1104321118"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/duanqiaoyanyu",children:"duanqiaoyanyu"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/robynron",children:"robynron"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/lcmvs",children:"lcmvs"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/github-ganyu",children:"github-ganyu"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/1181954449",children:"1181954449"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/zw201913",children:"zw201913"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/wingchi-leung",children:"wingchi-leung"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/AlexStocks",children:"AlexStocks"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/liujunlin5168",children:"liujunlin5168"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/pengten",children:"pengten"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/liuqiufeng",children:"liuqiufeng"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/yujianfei1986",children:"yujianfei1986"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/Bughue",children:"Bughue"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/AlbumenJ",children:"AlbumenJ"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/doubleDimple",children:"doubleDimple"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/jsbxyyx",children:"jsbxyyx"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/tuwenlin",children:"tuwenlin"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/JavaLionLi",children:"CrazyLionLi"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/whxxxxx",children:"whxxxxx"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/neillee95",children:"neillee95"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/crazy-sheep",children:"crazy-sheep"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/zhangzq7",children:"zhangzq7"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/l81893521",children:"l81893521"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/zhuyoufeng",children:"zhuyoufeng"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/xingfudeshi",children:"xingfudeshi"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/odidev",children:"odidev"})}),"\n",(0,a.jsx)(i.li,{children:(0,a.jsx)(i.a,{href:"https://github.com/miaoxueyu",children:"miaoxueyu"})}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"At the same time, we have received many valuable issues and suggestions from the community, and we are very grateful to everyone."}),"\n",(0,a.jsx)(i.h4,{id:"link",children:"Link"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Seata:"})," ",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata",children:"https://github.com/apache/incubator-seata"})]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Seata-Samples:"})," ",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata-samples",children:"https://github.com/apache/incubator-seata-samples"})]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Release:"})," ",(0,a.jsx)(i.a,{href:"https://github.com/apache/incubator-seata/releases",children:"https://github.com/apache/incubator-seata/releases"})]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"WebSite:"})," ",(0,a.jsx)(i.a,{href:"https://seata.apache.org",children:"https://seata.apache.org"})]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>h});var a=t(96540);const n={},s=a.createContext(n);function r(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function h(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);