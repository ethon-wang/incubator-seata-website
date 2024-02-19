"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[95223],{85361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(74848),i=t(28453);const s={title:"Transaction Group Introduction",keywords:["Seata"],description:"Seata transaction grouping."},o="Introduction",a={id:"user/txgroup/transaction-group",title:"Transaction Group Introduction",description:"Seata transaction grouping.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/txgroup/transaction-group.md",sourceDirName:"user/txgroup",slug:"/user/txgroup/transaction-group",permalink:"/docs/v1.2/user/txgroup/transaction-group",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-docs/version-v1.2/user/txgroup/transaction-group.md",tags:[],version:"v1.2",frontMatter:{title:"Transaction Group Introduction",keywords:["Seata"],description:"Seata transaction grouping."},sidebar:"docs",previous:{title:"Seata XA Mode",permalink:"/docs/v1.2/user/mode/xa"},next:{title:"Transaction Group and High Availability",permalink:"/docs/v1.2/user/txgroup/transaction-group-and-ha"}},c={},l=[{value:"What is a transaction group?",id:"what-is-a-transaction-group",level:3},{value:"How to find the backend Seata cluster for the transaction group?",id:"how-to-find-the-backend-seata-cluster-for-the-transaction-group",level:3},{value:"Why is it designed this way instead of directly using the service name?",id:"why-is-it-designed-this-way-instead-of-directly-using-the-service-name",level:3},{value:"Transaction Group Usage Case",id:"transaction-group-usage-case",level:2},{value:"Category 1: Built-in File",id:"category-1-built-in-file",level:3},{value:"Seata Server-side",id:"seata-server-side",level:4},{value:"Client-side",id:"client-side",level:4},{value:"Type 2: Registry Center and Configuration Center (Using Nacos as an Example)",id:"type-2-registry-center-and-configuration-center-using-nacos-as-an-example",level:3},{value:"Seata Server",id:"seata-server",level:4},{value:"Client side",id:"client-side-1",level:4},{value:"Client side (SpringBoot)",id:"client-side-springboot",level:4}];function d(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.h3,{id:"what-is-a-transaction-group",children:"What is a transaction group?"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Transaction group: The logical resource of Seata can be defined by the application (client) according to the needs of microservices, with each group having a unique name."}),"\n",(0,r.jsx)(n.li,{children:"Cluster: A cluster is made up of one or more nodes of the Seata server. When using the application (client), the mapping relationship between the transaction logic group and the Seata server cluster needs to be specified."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"how-to-find-the-backend-seata-cluster-for-the-transaction-group",children:"How to find the backend Seata cluster for the transaction group?"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"First, the application (client) configures the transaction group (txServiceGroup parameter of the GlobalTransactionScanner constructor). If the application is SpringBoot, it is configured through seata.tx-service-group."}),"\n",(0,r.jsxs)(n.li,{children:["The application (client) will use the user-configured configuration center to find service.vgroupMapping.[",(0,r.jsx)(n.em,{children:"transaction group configuration item"}),"], and the value of the configuration item is the name of the TC cluster. If the application is SpringBoot, it is configured through seata.service.vgroup-mapping.transaction group name=cluster name."]}),"\n",(0,r.jsx)(n.li,{children:"With the cluster name, the program constructs the service name by adding a certain prefix and suffix to the cluster name. The service name implementation varies in different configuration centers (provided that Seata-Server has completed service registration and Seata-Server reports that the cluster name is consistent with the cluster name configured by the application (client))."}),"\n",(0,r.jsx)(n.li,{children:"With the service name, the program goes to the corresponding registration center to pull the service list of the corresponding service name and obtain the real backend TC service list (i.e., the Seata-Server cluster node list)."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"why-is-it-designed-this-way-instead-of-directly-using-the-service-name",children:"Why is it designed this way instead of directly using the service name?"}),"\n",(0,r.jsx)(n.p,{children:"There is an additional layer of configuration to map the transaction group to the cluster. With this design, the transaction group can serve as the logical isolation unit of resources. When a cluster failure occurs, failover can be quickly performed by switching to the corresponding group, reducing the impact of the failure to the service level. However, this requires a sufficient number of server clusters."}),"\n",(0,r.jsx)(n.h2,{id:"transaction-group-usage-case",children:"Transaction Group Usage Case"}),"\n",(0,r.jsx)(n.p,{children:"Seata registration and configuration centers are divided into two categories:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Built-in File"}),"\n",(0,r.jsx)(n.li,{children:"Third-party registration (configuration) centers, such as Nacos, etc. There are no constraints between the registration center and the configuration center, and different specific options can be used for each."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"category-1-built-in-file",children:"Category 1: Built-in File"}),"\n",(0,r.jsx)(n.h4,{id:"seata-server-side",children:"Seata Server-side"}),"\n",(0,r.jsx)(n.p,{children:"registry.conf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'registry {\n  # file, nacos, eureka, redis, zk, consul, etcd3, sofa\n  type = "file"                ---------------\x3e Use file as the registry center\n}\nconfig {\n  # file, nacos, apollo, zk, consul, etcd3\n  type = "file"                ---------------\x3e Use file as the configuration center\n  file {\n    name = "file.conf"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Start Seata Server in file or db mode, see the node at the top of the article: Start Seata Server"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"client-side",children:"Client-side"}),"\n",(0,r.jsx)(n.p,{children:"registry.conf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'registry {\n  # file, nacos, eureka, redis, zk, consul, etcd3, sofa\n  type = "file"                ---------------\x3e Use file as the registry center\n}\nconfig {\n  # file, nacos, apollo, zk, consul, etcd3\n  type = "file"                ---------------\x3e Use file as the configuration center\n  file {\n    name = "file.conf"         ---------------\x3e Configuration parameter storage file\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"file.conf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'    service {\n      vgroupMapping.my_test_tx_group = "default"\n      default.grouplist = "127.0.0.1:8091"\n    }\n'})}),"\n",(0,r.jsx)(n.p,{children:"application.properties"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"seata.tx-service-group=my_test_tx_group ---------------\x3e Transaction group configuration (default value is default_tx_group after v1.5)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Read configuration\nLoad the configuration parameters of file.conf through FileConfiguration locally"}),"\n",(0,r.jsx)(n.li,{children:'Get transaction group (load configuration when the service starts)\nFor spring/springboot, it can be configured in yml or properties, and the corresponding value "my_test_tx_group" is the transaction group name. If not configured, the default value is the concatenation of spring.application.name value and "-seata-service-group" as the group name.'}),"\n",(0,r.jsx)(n.li,{children:'Find TC cluster name\nConcatenate the transaction group name "my_test_tx_group" into "service.vgroupMapping.my_test_tx_group" and find the TC cluster name clusterName as "default"'}),"\n",(0,r.jsx)(n.li,{children:'Query TC service\nConcatenate "service."+clusterName+".grouplist" to find the real TC service address 127.0.0.1:8091'}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"type-2-registry-center-and-configuration-center-using-nacos-as-an-example",children:"Type 2: Registry Center and Configuration Center (Using Nacos as an Example)"}),"\n",(0,r.jsx)(n.h4,{id:"seata-server",children:"Seata Server"}),"\n",(0,r.jsx)(n.p,{children:"registry.conf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'registry {\n  # file, nacos, eureka, redis, zk, consul, etcd3, sofa\n  type = "nacos"                  ---------------\x3e Use Nacos as the registry center\n  nacos {\n    application = "seata-server"  ---------------\x3e Specify the service name registered in Nacos registry center\n    group = "SEATA_GROUP"         ---------------\x3e Specify the group name registered in Nacos registry center\n    serverAddr = "localhost"      ---------------\x3e Nacos registry center IP:port\n    namespace = ""                ---------------\x3e Nacos namespace ID, "" represents the reserved public namespace in Nacos, users should not configure namespace = "public"\n    cluster = "default"           ---------------\x3e Specify the cluster name registered in Nacos registry center\n  }\n}\nconfig {\n  # file, nacos, apollo, zk, consul, etcd3\n  type = "nacos"                  ------------\x3e Use Nacos as the configuration center\n  nacos {\n    serverAddr = "localhost"      ---------------\x3e Nacos registry center IP:port\n    namespace = ""\n    group = "SEATA_GROUP"         ---------------\x3e Nacos configuration center group name\n    dataId = "seataServer.properties"  ---------------\x3e Nacos configuration center configuration ID\n  }\n}\n\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Configuration Center Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"README-zh.md"})," or ",(0,r.jsx)(n.code,{children:"README.md"})," file in the installation directory ",(0,r.jsx)(n.code,{children:"conf"})," of Seata Server introduces the common script URL links required by Seata, including three types: client configuration and SQL, Seata Server deployment SQL and scripts, and configuration center configuration templates and scripts.\nAmong them, there are files and directories under ",(0,r.jsx)(n.code,{children:"script/config-center"})," as follows:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"README.md     User guide"}),"\n",(0,r.jsx)(n.li,{children:"config.txt    Configuration template (including Server and Client)"}),"\n",(0,r.jsx)(n.li,{children:"nacos/        Python and shell scripts for pushing to Nacos"}),"\n",(0,r.jsx)(n.li,{children:"apollo/       Shell scripts for pushing to Apollo"}),"\n",(0,r.jsx)(n.li,{children:"consul/       Shell scripts for pushing to Consul"}),"\n",(0,r.jsx)(n.li,{children:"etcd3/        Shell scripts for pushing to etcd3"}),"\n",(0,r.jsx)(n.li,{children:"zk/           Shell scripts for pushing to ZooKeeper"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The configuration items in the ",(0,r.jsx)(n.code,{children:"config.txt"})," template need to be selected and modified according to the actual situation.\nThen configure them to the configuration center: you can refer to the user guide in ",(0,r.jsx)(n.code,{children:"README.md"})," to push them to the configuration center through scripts. You can also manually copy the contents of ",(0,r.jsx)(n.code,{children:"config.txt"})," to the configuration center (for example, through the web page of Nacos configuration center). After the configuration is completed, check if the results are correct."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Registered in the registry center\nStart ",(0,r.jsx)(n.code,{children:"seata-server"})," and register it in the Nacos registry center. Check the service list in the Nacos console to confirm if the registration is successful."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"client-side-1",children:"Client side"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'seata.tx-service-group=my_test_tx_group ---------------\x3e Transaction group configuration (default value is default_tx_group after v1.5)\nregistry {\n  # file, nacos, eureka, redis, zk, consul, etcd3, sofa\n  type = "nacos"                ---------------\x3e Get TC service from Nacos\n  nacos {\n    serverAddr = "localhost"\n    namespace = ""\n  }\n}\nconfig {\n  # file, nacos, apollo, zk, consul, etcd3\n  type = "nacos"                ---------------\x3e Use Nacos as the configuration center\n  nacos {\n    serverAddr = "localhost"\n    namespace = ""\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"client-side-springboot",children:"Client side (SpringBoot)"}),"\n",(0,r.jsx)(n.p,{children:"application.properties"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"seata.tx-service-group=my_test_tx_group ---------------\x3e Transaction group configuration (default value is default_tx_group after v1.5)\nseata.service.vgroup-mapping.my_test_tx_group=default  ---------------\x3e Specify the transaction group to cluster mapping (the cluster name on the right side of the equal sign should be consistent with the cluster registered in Seata-server)\nseata.registry.type=nacos      ---------------\x3e Use Nacos as the registry center\nseata.registry.nacos.server-addr=nacos registry center IP:port\nseata.registry.nacos.application=seata-server     ---------------\x3e Seata service name (should be consistent with the actual registered service name in seata-server)\nseata.registry.nacos.group=SEATA_GROUP            ---------------\x3e Seata group name (should be consistent with the actual registered group name in seata-server)\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"In addition: If the Client does not obtain the seata-server service information through Nacos, but directly specifies the IP and port information of the seata-server service-side node, the nacos-related configurations in the above application.properties can be changed to the following two configurations:"}),"\n",(0,r.jsx)(n.p,{children:"seata.registry.type=file       ----\x3e Not recommended for production environment"}),"\n",(0,r.jsx)(n.p,{children:"seata.service.grouplist.cluster_beijing=127.0.0.1:8091    ----\x3e vgroup-mapping (server-side cluster) information of each seata-server node"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Read configuration\nYou can read seata configuration parameters remotely through NacosConfiguration"}),"\n",(0,r.jsx)(n.li,{children:'Get transaction group (load configuration when the service starts)\nFor spring/springboot, it can be configured in yml or properties. The corresponding value "my_test_tx_group" is the transaction group name. If not configured, the default value is the concatenation of spring.application.name value + "-seata-service-group" as the group name.'}),"\n",(0,r.jsx)(n.li,{children:'Find TC cluster name\nConcatenate the transaction group name "my_test_tx_group" to "service.vgroupMapping.my_test_tx_group" and find the TC cluster name "default" from the configuration center.'}),"\n",(0,r.jsx)(n.li,{children:"Find TC service\nFind the real TC service list in the registry center based on serverAddr, namespace, and clusterName."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Note: serverAddr and namespace should be consistent with the Server-side, and clusterName should be consistent with the Server-side cluster."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);