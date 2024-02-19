"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[5712],{34598:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=s(74848),t=s(28453);const o={hidden:!0,title:"Deploy Seata Server By Docker Compose",keywords:["docker-compose","ops"],description:"Deploy Seata Server By Docker Compose",author:"zouwei",date:new Date("2022-09-06T00:00:00.000Z")},a="Deploy Seata Server By Docker Compose",i={id:"ops/deploy-by-docker-compose",title:"Deploy Seata Server By Docker Compose",description:"Deploy Seata Server By Docker Compose",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ops/deploy-by-docker-compose.md",sourceDirName:"ops",slug:"/ops/deploy-by-docker-compose",permalink:"/docs/next/ops/deploy-by-docker-compose",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/current/ops/deploy-by-docker-compose.md",tags:[],version:"current",frontMatter:{hidden:!0,title:"Deploy Seata Server By Docker Compose",keywords:["docker-compose","ops"],description:"Deploy Seata Server By Docker Compose",author:"zouwei",date:"2022-09-06T00:00:00.000Z"},sidebar:"docs",previous:{title:"Deploy Seata Server By Docker",permalink:"/docs/next/ops/deploy-by-docker"},next:{title:"Deploy Seata Server By Kubernetes",permalink:"/docs/next/ops/deploy-by-kubernetes"}},c={},l=[{value:"Precautions",id:"precautions",level:2},{value:"Use custom configuration file",id:"use-custom-configuration-file",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"<a>No Registration Center, File Storage</a>",id:"no-registration-center-file-storage",level:3},{value:"<a>No Registration Center, db Storage</a>",id:"no-registration-center-db-storage",level:3},{value:"<a>Nacos Registration Center, db Storage</a>",id:"nacos-registration-center-db-storage",level:3},{value:"<a>High Available Usage Deployment</a>",id:"high-available-usage-deployment",level:3},{value:"Environment variables",id:"environment-variables",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploy-seata-server-by-docker-compose",children:"Deploy Seata Server By Docker Compose"}),"\n",(0,r.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Please avoid directly pulling the latest version image. The latest version is not necessarily a stable version. To avoid unnecessary problems, please go to ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/seataio/seata-server/tags",children:"docker image warehouse"})," to determine the image version to be pulled."]}),"\n",(0,r.jsx)(n.li,{children:"Starting from Seata Server version 1.5.0, the configuration file has been changed to application.yml. So when using custom configuration, you need to copy the native configuration first."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"use-custom-configuration-file",children:"Use custom configuration file"}),"\n",(0,r.jsx)(n.p,{children:"In order to obtain the configuration file of seata server 1.5.0, we need to first start a service of seata server 1.5.0, then copy the default configuration file from the started container instance, and then modify it."}),"\n",(0,r.jsx)(n.p,{children:"docker-compose.yaml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Next, copy the resource file in the ",(0,r.jsx)(n.code,{children:"/seata-server/resources"})," location in the container to the specified location of the host through the ",(0,r.jsx)(n.code,{children:"docker cp"})," command.\nIn the specified location of the host, we can see the corresponding ",(0,r.jsx)(n.code,{children:"application.yml"})," configuration file, and the relevant configuration only needs to modify this file."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The configuration of ",(0,r.jsx)(n.code,{children:"application.yml"})," can refer to ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/server/src/main/resources/application.example.yml",children:"application.example.yml"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"#file-file",children:"No Registration Center, File Storage"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"#file-db",children:"No Registration Center, db Storage"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"#nacos-db",children:"Nacos Registration Center, db Storage"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)("a",{href:"#ha-nacos-db",children:"High Available Usage Deployment"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"no-registration-center-file-storage",children:(0,r.jsx)("a",{id:"file-file",children:"No Registration Center, File Storage"})}),"\n",(0,r.jsx)(n.p,{children:"In this mode, there is no need for a registration center or any third-party storage center."}),"\n",(0,r.jsx)(n.p,{children:"docker-compose.yaml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:${latest-release-version}\n    hostname: seata-server\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - SEATA_PORT=8091\n      - STORE_MODE=file\n'})}),"\n",(0,r.jsx)(n.h3,{id:"no-registration-center-db-storage",children:(0,r.jsx)("a",{id:"file-db",children:"No Registration Center, db Storage"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The db mode needs to create the corresponding table structure in the database, please refer to ",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db",children:"[table creation script]"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff081\uff09application.yml"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The configuration of ",(0,r.jsx)(n.code,{children:"application.yml"})," can refer to ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/server/src/main/resources/application.example.yml",children:"application.example.yml"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more storage mode support, please refer to ",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt",children:"More Storage Modes"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'server:\n  port: 7091\n\nspring:\n  application:\n    name: seata-server\n\nlogging:\n  config: classpath:logback-spring.xml\n  file:\n    path: ${user.home}/logs/seata\n  extend:\n    logstash-appender:\n      destination: 127.0.0.1:4560\n    kafka-appender:\n      bootstrap-servers: 127.0.0.1:9092\n      topic: logback_to_logstash\n\nconsole:\n  user:\n    username: seata\n    password: seata\n\nseata:\n  config:\n    # support: nacos, consul, apollo, zk, etcd3\n    type: file\n  registry:\n    # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n    type: file\n  store:\n    # support: file \u3001 db \u3001 redis\n    mode: db\n    db:\n      datasource: druid\n      dbType: mysql\n      # Need to adjust driverClassName according to mysql version\n      # Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n      # Driver for versions below mysql8 is: com.mysql.jdbc.Driver\n      driverClassName: com.mysql.cj.jdbc.Driver\n      url: jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\n      user: "username"\n      password: "password"\n      \n  #  server:\n  #    service-port: 8091 #If not configured, the default is \'${server.port} + 1000\'\n  security:\n    secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017\n    tokenValidityInMilliseconds: 1800000\n    ignore:\n      urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff082\uff09Prepare file: docker-compose.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:1.5.2\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - STORE_MODE=db\n      # Register the seata server with SEATA_IP as the host\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8091\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime" # Set the system time zone\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  # Set the time zone\n      # Suppose we copy the resource file to the relative path `./seata-server/resources` via the `docker cp` command\n      # If you have questions, please read [Precautions] and [Using Custom Configuration Files] above\n      - "./seata-server/resources:/seata-server/resources"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"nacos-registration-center-db-storage",children:(0,r.jsx)("a",{id:"nacos-db",children:"Nacos Registration Center, db Storage"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The db mode needs to create the corresponding table structure in the database, please refer to ",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db",children:"[table creation script]"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff081\uff09application.yml"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The configuration of ",(0,r.jsx)(n.code,{children:"application.yml"})," can refer to ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/server/src/main/resources/application.example.yml",children:"application.example.yml"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Nacos Registration Center."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"server:\n  port: 7091\n\nspring:\n  application:\n    name: seata-server\n\nlogging:\n  config: classpath:logback-spring.xml\n  file:\n    path: ${user.home}/logs/seata\n  extend:\n    logstash-appender:\n      destination: 127.0.0.1:4560\n    kafka-appender:\n      bootstrap-servers: 127.0.0.1:9092\n      topic: logback_to_logstash\n\nconsole:\n  user:\n    username: seata\n    password: seata\n\nseata:\n  config:\n    # support: nacos, consul, apollo, zk, etcd3\n    type: nacos\n    nacos:\n      server-addr: nacos_ip:nacos_port\n      namespace: seata-server\n      group: SEATA_GROUP\n      username: nacos\n      password: nacos\n      data-id: seataServer.properties\n\n  registry:\n    # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: nacos_ip:nacos_port\n      group: SEATA_GROUP\n      namespace: seata-server\n      # TC cluster name\n      cluster: default\n      username: nacos\n      password: nacos\n#  server:\n#    service-port: 8091 #If not configured, the default is '${server.port} + 1000'\n  security:\n    secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017\n    tokenValidityInMilliseconds: 1800000\n    ignore:\n      urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff082\uff09Prepare nacos configuration center configuration"})}),"\n",(0,r.jsxs)(n.p,{children:["For more storage mode support, please refer to ",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt",children:"More Storage Modes"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"You need to create a new configuration in nacos, where the dataId is seataServer.properties"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:'store.mode=db\n#-----db-----\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# Need to adjust driverClassName according to mysql version\n# Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n# Driver for versions below mysql8 is: com.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\nstore.db.user= "username"\nstore.db.password= "password"\n# Number of initial database connections\nstore.db.minConn=1\n# Maximum number of database connections\nstore.db.maxConn=20\n# Maximum wait time when getting connection. The default value is 5000 milliseconds.\nstore.db.maxWait=5000\n# Global transaction table name. The default value is global_table.\nstore.db.globalTable=global_table\n# Branch transaction table name. The default value is branch_table.\nstore.db.branchTable=branch_table\n# Global lock table name. The default value is lock_table.\nstore.db.lockTable=lock_table\n# Maximum number of global transactions queried at one time. The default value is 100.\nstore.db.queryLimit=100\n\n\n# Undo retention days. The default value is 7 days, log_status=1 (Appendix 3) and undo that is not cleaned up properly\nserver.undo.logSaveDays=7\n# Undo cleanup thread interval time. The default value is 86400000 milliseconds.\nserver.undo.logDeletePeriod=86400000\n# Two-stage commit retry timeout. The units are ms, s, m, h, d, corresponding to milliseconds, seconds, minutes, hours, days, default milliseconds. The default value of -1 means unlimited retries.\n# Formula: timeout>=now-globalTransactionBeginTime, if it\'s true means that the timeout will not be retried.\n# Note: After the timeout period is reached, no retries will be made. So there is a risk of data inconsistency, unless the business can calibrate the data by itself, otherwise use with caution.\nserver.maxCommitRetryTimeout=-1\n# Two-phase rollback retry timeout\nserver.maxRollbackRetryTimeout=-1\n# Two-phase commit incomplete state Global transaction retry commit thread interval time. The default value is 1000 milliseconds.\nserver.recovery.committingRetryPeriod=1000\n# Two-phase asynchronous commit status retry submission thread interval time. The default value is 1000 milliseconds.\nserver.recovery.asynCommittingRetryPeriod=1000\n# Two-stage rollback state retry rollback thread interval time. The default value is 1000 milliseconds.\nserver.recovery.rollbackingRetryPeriod=1000\n# Timeout Status Detection Retry Thread Interval. The default value is 1000 milliseconds, and if timeout is detected, then it puts the global transaction into the rollback session manager.\nserver.recovery.timeoutRetryPeriod=1000\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff083\uff09Prepare file: docker-compose.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n  seata-server:\n    image: seataio/seata-server:1.5.2\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - STORE_MODE=db\n      # Register the seata server with SEATA_IP as the host\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8091\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime" # Set the system time zone\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  # Set the time zone\n      # Suppose we copy the resource file to the relative path `./seata-server/resources` via the `docker cp` command\n      # If you have questions, please read [Precautions] and [Using Custom Configuration Files] above\n      - "./seata-server/resources:/seata-server/resources"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"high-available-usage-deployment",children:(0,r.jsx)("a",{id:"ha-nacos-db",children:"High Available Usage Deployment"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Seata high availability usage deployment relies on the registration center and database, but does not depend on the configuration center. ",(0,r.jsx)("br",{}),"\nEnsure that multiple Seata Servers use the same registry and the same storage center to form a highly available deployment.",(0,r.jsx)("br",{}),"\nThe db mode needs to create the corresponding table structure in the database,  please refer to ",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/tree/develop/script/server/db",children:"[table creation script]"}),".",(0,r.jsx)("br",{})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff081\uff09application.yml"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The configuration of ",(0,r.jsx)(n.code,{children:"application.yml"})," can refer to ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/server/src/main/resources/application.example.yml",children:"application.example.yml"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more storage mode support, please refer to ",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt",children:"More Storage Modes"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"server:\n  port: 7091\n\nspring:\n  application:\n    name: seata-server\n\nlogging:\n  config: classpath:logback-spring.xml\n  file:\n    path: ${user.home}/logs/seata\n  extend:\n    logstash-appender:\n      destination: 127.0.0.1:4560\n    kafka-appender:\n      bootstrap-servers: 127.0.0.1:9092\n      topic: logback_to_logstash\n\nconsole:\n  user:\n    username: seata\n    password: seata\n\nseata:\n  config:\n    # support: nacos, consul, apollo, zk, etcd3\n    type: nacos\n    nacos:\n      server-addr: nacos_ip:nacos_port\n      namespace: seata-server\n      group: SEATA_GROUP\n      usernam: nacos\n      password: nacos\n      data-id: seataServer.properties\n\n  registry:\n    # support: nacos, eureka, redis, zk, consul, etcd3, sofa\n    type: nacos\n    nacos:\n      application: seata-server\n      server-addr: nacos_ip:nacos_port\n      group: SEATA_GROUP\n      namespace: seata-server\n      # TC cluster name\n      cluster: default\n      username: nacos\n      password: nacos\n    #  store:\n    # support: file \u3001 db \u3001 redis\n  #    mode: file\n  #  server:\n  #    service-port: 8091 #If not configured, the default is '${server.port} + 1000'\n  security:\n    secretKey: SeataSecretKey0c382ef121d778043159209298fd40bf3850a017\n    tokenValidityInMilliseconds: 1800000\n    ignore:\n      urls: /,/**/*.css,/**/*.js,/**/*.html,/**/*.map,/**/*.svg,/**/*.png,/**/*.ico,/console-fe/public/**,/api/v1/auth/login\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff082\uff09Prepare nacos configuration center configuration"})}),"\n",(0,r.jsxs)(n.p,{children:["For more storage mode support, please refer to ",(0,r.jsx)("a",{href:"https://github.com/apache/incubator-seata/blob/develop/script/config-center/config.txt",children:"More Storage Modes"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"You need to create a new configuration in nacos, where the dataId is seataServer.properties"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:'store.mode=db\n#-----db-----\nstore.db.datasource=druid\nstore.db.dbType=mysql\n# Need to adjust driverClassName according to mysql version\n# Driver corresponding to mysql8 and above versions is: com.mysql.cj.jdbc.Driver\n# Driver for versions below mysql8 is: com.mysql.jdbc.Driver\nstore.db.driverClassName=com.mysql.cj.jdbc.Driver\nstore.db.url=jdbc:mysql://127.0.0.1:3306/seata-server?useUnicode=true&characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useSSL=false\nstore.db.user= "username"\nstore.db.password= "password"\n# Number of initial database connections\nstore.db.minConn=1\n# Maximum number of database connections\nstore.db.maxConn=20\n# Maximum wait time when getting connection. The default value is 5000 milliseconds.\nstore.db.maxWait=5000\n# Global transaction table name. The default value is global_table.\nstore.db.globalTable=global_table\n# Branch transaction table name. The default value is branch_table.\nstore.db.branchTable=branch_table\n# Global lock table name. The default value is lock_table.\nstore.db.lockTable=lock_table\n# Maximum number of global transactions queried at one time. The default value is 100.\nstore.db.queryLimit=100\n\n# Undo retention days. The default value is 7 days, log_status=1 (Appendix 3) and undo that is not cleaned up properly\nserver.undo.logSaveDays=7\n# Undo cleanup thread interval time. The default value is 86400000 milliseconds.\nserver.undo.logDeletePeriod=86400000\n# Two-stage commit retry timeout. The units are ms, s, m, h, d, corresponding to milliseconds, seconds, minutes, hours, days, default milliseconds. The default value of -1 means unlimited retries.\n# Formula: timeout>=now-globalTransactionBeginTime, if it\'s true means that the timeout will not be retried.\n# Note: After the timeout period is reached, no retries will be made. So there is a risk of data inconsistency, unless the business can calibrate the data by itself, otherwise use with caution.\nserver.maxCommitRetryTimeout=-1\n# Two-phase rollback retry timeout\nserver.maxRollbackRetryTimeout=-1\n# Two-phase commit incomplete state Global transaction retry commit thread interval time. The default value is 1000 milliseconds.\nserver.recovery.committingRetryPeriod=1000\n# Two-phase asynchronous commit status retry submission thread interval time. The default value is 1000 milliseconds.\nserver.recovery.asynCommittingRetryPeriod=1000\n# Two-stage rollback state retry rollback thread interval time. The default value is 1000 milliseconds.\nserver.recovery.rollbackingRetryPeriod=1000\n# Timeout Status Detection Retry Thread Interval. The default value is 1000 milliseconds, and if timeout is detected, then it puts the global transaction into the rollback session manager.\nserver.recovery.timeoutRetryPeriod=1000\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\uff083\uff09Prepare file: docker-compose.yaml"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["As long as the configuration is consistent, the seata service can be deployed on multiple instances on one machine or on multiple different hosts at the same time to achieve high service availability. ",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ops/deploy-ha",children:"High Availability Usage Deployment"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'version: "3.1"\nservices:\n  seata-server-1:\n    image: seataio/seata-server:${latest-release-version}\n    ports:\n      - "7091:7091"\n      - "8091:8091"\n    environment:\n      - STORE_MODE=db\n      # Register the seata server with SEATA_IP as the host\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8091\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime" # Set the system time zone\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  # Set the time zone\n      # Suppose we copy the resource file to the relative path `./seata-server/resources` via the `docker cp` command\n      # If you have questions, please read [Precautions] and [Using Custom Configuration Files] above\n      - "./seata-server/resources:/seata-server/resources"\n\n  seata-server-2:\n    image: seataio/seata-server:${latest-release-version}\n    ports:\n      - "7092:7091"\n      - "8092:8092"\n    environment:\n      - STORE_MODE=db\n      # Register the seata server with SEATA_IP as the host\n      - SEATA_IP=seata_ip\n      - SEATA_PORT=8091\n    volumes:\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/localtime" # Set the system time zone\n      - "/usr/share/zoneinfo/Asia/Shanghai:/etc/timezone"  # Set the time zone\n      # Suppose we copy the resource file to the relative path `./seata-server/resources` via the `docker cp` command\n      # If you have questions, please read [Precautions] and [Using Custom Configuration Files] above\n      - "./seata-server/resources:/seata-server/resources"\n\n  # seata Service 3......seata Service N\n'})}),"\n",(0,r.jsx)(n.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,r.jsx)(n.p,{children:"seata-server supports the following environment variables:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_IP"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Optional. It specifies the IP started by seata-server. This IP is used when registering with the registration center, such as eureka, etc."}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_PORT"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Optional. It is used to specify the port where seata-server starts. The default port is ",(0,r.jsx)(n.code,{children:"8091"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"STORE_MODE"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Optional. It is used to specify the transaction log storage method of seata-server, supports ",(0,r.jsx)(n.code,{children:"db"}),", ",(0,r.jsx)(n.code,{children:"file"}),", ",(0,r.jsx)(n.code,{children:"redis"})," (supported by Seata-Server 1.3 and above). The default value is ",(0,r.jsx)(n.code,{children:"file"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SERVER_NODE"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Optional. It is used to specify the seata-server node ID, such as ",(0,r.jsx)(n.code,{children:"1"}),",",(0,r.jsx)(n.code,{children:"2"}),",",(0,r.jsx)(n.code,{children:"3"}),"... The default value is ",(0,r.jsx)(n.code,{children:"generated based on ip"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_ENV"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Optional. It is used to specify the seata-server operating environment, such as ",(0,r.jsx)(n.code,{children:"dev"}),", ",(0,r.jsx)(n.code,{children:"test"}),", etc. When the service is started, configurations such as ",(0,r.jsx)(n.code,{children:"registry-dev.conf"})," will be used."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"SEATA_CONFIG_NAME"})}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Optional. It is used to specify the configuration file location, such as ",(0,r.jsx)(n.code,{children:"file:/root/registry"}),", which will load ",(0,r.jsx)(n.code,{children:"/root/registry.conf"})," as the configuration file. If you need to specify the ",(0,r.jsx)(n.code,{children:"file.conf"})," file at the same time, you need to change the value of ",(0,r.jsx)(n.code,{children:"config.file.name"})," in ",(0,r.jsx)(n.code,{children:"registry.conf"})," to something like ",(0,r.jsx)(n.code,{children:"file:/root/file.conf"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>i});var r=s(96540);const t={},o=r.createContext(t);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);