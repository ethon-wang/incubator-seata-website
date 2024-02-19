"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[78374],{51677:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=i(74848),o=i(28453);const a={title:"Seata Config Module Source Code Analysis",author:"runze.zhao",keywords:["Seata","distributed transaction"],date:"2020/1/11"},r=void 0,s={permalink:"/blog/seata-analysis-config-modular",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/en/docusaurus-plugin-content-blog/seata-analysis-config-modular.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/seata-analysis-config-modular.md",title:"Seata Config Module Source Code Analysis",description:"1. Introduction",date:"2020-01-11T00:00:00.000Z",formattedDate:"January 11, 2020",tags:[],readingTime:5.52,hasTruncateMarker:!1,authors:[{name:"runze.zhao"}],frontMatter:{title:"Seata Config Module Source Code Analysis",author:"runze.zhao",keywords:["Seata","distributed transaction"],date:"2020/1/11"},unlisted:!1,prevItem:{title:"Seata High Availability Deployment Practice",permalink:"/blog/seata-ha-practice"},nextItem:{title:"Source Code Analysis of Seata-XID Propagation in Dubbo",permalink:"/blog/seata-analysis-dubbo-transmit-xid"}},c={authorsImageUrls:[void 0]},d=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Environment Configuration",id:"2-environment-configuration",level:2},{value:"3. Descriptive Configuration",id:"3-descriptive-configuration",level:2},{value:"4. Extension Configuration",id:"4-extension-configuration",level:2},{value:"5. Seata Source Code Analysis Series",id:"5-seata-source-code-analysis-series",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsxs)(n.p,{children:["According to the classification defined by ",(0,t.jsx)(n.a,{href:"https://www.iteye.com/blog/javatar-949527",children:"experts"}),", configurations can be categorized into three types: environment configuration, descriptive configuration, and extension configuration."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Environment configuration: Typically consists of discrete simple values like parameters for component startup, often in key-value pair format."}),"\n",(0,t.jsx)(n.li,{children:"Descriptive configuration: Pertains to business logic, such as transaction initiators and participants, and is usually embedded within the lifecycle management of the business. Descriptive configuration contains more information, sometimes with hierarchical relationships."}),"\n",(0,t.jsx)(n.li,{children:"Extension configuration: Products need to discover third-party implementations, requiring high aggregation of configurations. Examples include various configuration centers and registration centers. The common practice is to place the fully qualified class name files under the META-INF/services directory of the JAR file, with each line representing an implementation class name."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"2-environment-configuration",children:"2. Environment Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["When the Seata server is loaded, it uses ",(0,t.jsx)(n.code,{children:"resources/registry.conf"})," to determine the types of configuration centers and registration centers. Starting from version 1.0, Seata client not only loads configurations using the ",(0,t.jsx)(n.code,{children:"conf"})," file but also allows configuration through YAML files in Spring Boot using ",(0,t.jsx)(n.code,{children:"seata.config.{type}"})," for choosing the configuration center, similar to selecting the registration center. The source code for loading configurations via YAML is located in the ",(0,t.jsx)(n.code,{children:"io.seata.spring.boot.autoconfigure.properties.registry"})," package."]}),"\n",(0,t.jsxs)(n.p,{children:["If the user of the Seata client places both a ",(0,t.jsx)(n.code,{children:"conf"})," configuration file under ",(0,t.jsx)(n.code,{children:"resources"})," and configures via YAML files, the configuration in the YAML file will take precedence. Code example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"CURRENT_FILE_INSTANCE = null == extConfiguration ? configuration : extConfiguration;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Here, ",(0,t.jsx)(n.code,{children:"extConfiguration"})," is an instance of external configuration provided by the ",(0,t.jsx)(n.code,{children:"ExtConfigurationProvider#provide()"})," external configuration provider class, while ",(0,t.jsx)(n.code,{children:"configuration"})," is provided by another configuration provider class, ",(0,t.jsx)(n.code,{children:"ConfigurationProvider#provide()"}),". These two configuration provider classes are loaded through SPI in the static block of the ",(0,t.jsx)(n.code,{children:"ConfigurationFactory"})," in the config module."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"EnhancedServiceLoader.load(ExtConfigurationProvider.class).provide(configuration);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The selection of configuration center types discussed above is related to determining the configuration environment. Once the type of configuration center to be used is determined, the environment configuration is loaded through the corresponding configuration center. File-based configuration, represented by ",(0,t.jsx)(n.code,{children:"File"}),", is also considered a type of configuration center."]}),"\n",(0,t.jsxs)(n.p,{children:["Both the client and server obtain configuration parameters by using ",(0,t.jsx)(n.code,{children:"ConfigurationFactory#getInstance()"})," to get an instance of the configuration class, and then retrieve configuration parameters using the instance. The constants defining configuration keys are mainly found in the ",(0,t.jsx)(n.code,{children:"config"})," file under the ",(0,t.jsx)(n.code,{children:"core"})," module."]}),"\n",(0,t.jsxs)(n.p,{children:["The meanings of some important environment configuration properties are documented on the ",(0,t.jsx)(n.a,{href:"/docs/user/configurations/",children:"official website"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["During instantiation, the configuration parameters obtained through ",(0,t.jsx)(n.code,{children:"ConfigurationFactory"})," and injected into constructors require a restart to take effect. However, parameters obtained in real-time using ",(0,t.jsx)(n.code,{children:"ConfigurationFactory"})," become effective immediately when the configuration changes."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"config"})," module provides the ",(0,t.jsx)(n.code,{children:"ConfigurationChangeListener#onChangeEvent"})," interface method to modify internal attributes of instances. In this method, dynamic changes to properties are monitored, and if the properties used by the instance are found to have changed from the initial injection, the attributes stored in the instance are modified to align with the configuration center. This enables dynamic configuration updates."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class GlobalTransactionalInterceptor implements ConfigurationChangeListener {\nprivate volatile boolean disable = ConfigurationFactory.getInstance().getBoolean(ConfigurationKeys.DISABLE_GLOBAL_TRANSACTION,false);\n@Override public Object invoke(Param param) {\n   if(disable){//Transaction business processing}\n}\n@Override public void onChangeEvent(Param param) {\n   disable = param;\n}}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The code snippet above pertains to the pseudo-code related to the ",(0,t.jsx)(n.code,{children:"GlobalTransactionalInterceptor"})," and its degradation properties under the Spring module. When the ",(0,t.jsx)(n.code,{children:"GlobalTransactionalScanner"})," instantiates the interceptor class mentioned above, it registers the interceptor into the list of configuration change listeners. When a configuration change occurs, the listener is invoked:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"ConfigurationFactory.getInstance().addConfigListener(ConfigurationKeys.DISABLE_GLOBAL_TRANSACTION,(ConfigurationChangeListener)interceptor);\n"})}),"\n",(0,t.jsxs)(n.p,{children:['The term "degradation" refers to the scenario where a particular functionality of a service becomes unavailable. By dynamically configuring properties, this functionality can be turned off to avoid continuous attempts and failures. The ',(0,t.jsx)(n.code,{children:"interceptor#invoke()"})," method executes Seata transaction-related business only when the ",(0,t.jsx)(n.code,{children:"disable"})," attribute is set to true."]}),"\n",(0,t.jsx)(n.h2,{id:"3-descriptive-configuration",children:"3. Descriptive Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Descriptive configurations in general frameworks often contain abundant information, sometimes with hierarchical relationships. XML configuration is convenient for describing tree structures due to its strong descriptive capabilities. However, the current trend advocates for eliminating cumbersome prescriptive configurations in favor of using conventions."}),"\n",(0,t.jsx)(n.p,{children:"In Seata's AT (Automatic Transaction) mode, transaction processing is achieved through proxying data sources, resulting in minimal intrusion on the business logic. Simply identifying which business components need to enable global transactions during Seata startup can be achieved using annotations, thus facilitating descriptive configuration."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@GlobalTransactional(timeoutMills = 300000, name = "busi-doBiz")\npublic String doBiz(String msg) {}\n'})}),"\n",(0,t.jsx)(n.p,{children:"If using the TCC (Try-Confirm-Cancel) mode, transaction participants also need to annotate their involvement:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@TwoPhaseBusinessAction(name = "tccActionForSpringTest" , commitMethod = "commit", rollbackMethod = "rollback")\npublic boolean prepare(BusinessActionContext actionContext, int i);\npublic boolean commit(BusinessActionContext actionContext);\npublic boolean rollback(BusinessActionContext actionContext);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"4-extension-configuration",children:"4. Extension Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Extension configurations typically have high requirements for product aggregation because products need to discover third-party implementations and incorporate them into their internals."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img-blog.csdnimg.cn/20200110213751452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODA0NzM3,size_16,color_FFFFFF,t_70",alt:"Image Description"})}),"\n",(0,t.jsxs)(n.p,{children:["Here's an example of a custom configuration center provider class. Place a text file with the same name as the interface under META-INF/services, and the content of the file should be the implementation class of the interface. This follows the standard SPI (Service Provider Interface) approach. Then, modify the configuration file ",(0,t.jsx)(n.code,{children:"registry.conf"})," to set ",(0,t.jsx)(n.code,{children:"config.type=test"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["However, if you think that by doing so, Seata can recognize it and replace the configuration center, then you are mistaken. When Seata loads the configuration center, it encapsulates the value of the configuration center type specified in the configuration file using the enum ",(0,t.jsx)(n.code,{children:"ConfigType"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"private static Configuration buildConfiguration() {\n   configTypeName = \"test\";//The 'config.type' configured in 'registry.conf\n   configType = ConfigType.getType(configTypeName);//An exception will be thrown if ConfigType cannot be retrieved.\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If a configuration center type like ",(0,t.jsx)(n.code,{children:"test"})," is not defined in ",(0,t.jsx)(n.code,{children:"ConfigType"}),", it will throw an exception. Therefore, merely modifying the configuration file without changing the source code will not enable the use of configuration center provider classes other than those defined in ",(0,t.jsx)(n.code,{children:"ConfigType"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Currently, in version 1.0, the configuration center types defined in ",(0,t.jsx)(n.code,{children:"ConfigType"})," include: File, ZK, Nacos, Apollo, Consul, Etcd3, SpringCloudConfig, and Custom. If a user wishes to use a custom configuration center type, they can use the ",(0,t.jsx)(n.code,{children:"Custom"})," type."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img-blog.csdnimg.cn/20200110215249152.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODA0NzM3,size_16,color_FFFFFF,t_70",alt:"Image Description"})}),"\n",(0,t.jsxs)(n.p,{children:["One inelegant approach here is to provide an implementation class with a specified name ",(0,t.jsx)(n.code,{children:"ZK"})," but with a higher priority level (order=3) than the default ",(0,t.jsx)(n.code,{children:"ZK"})," implementation (which has order=1). This will make ",(0,t.jsx)(n.code,{children:"ConfigurationFactory"})," use ",(0,t.jsx)(n.code,{children:"TestConfigurationProvider"})," as the configuration center provider class."]}),"\n",(0,t.jsx)(n.p,{children:"Through the above steps, Seata can be configured to use our own provided code. Modules in Seata such as codec, compressor, discovery, integration, etc., all use the SPI mechanism to load functional classes, adhering to the design philosophy of microkernel + plug-in, treating third parties equally."}),"\n",(0,t.jsx)(n.h2,{id:"5-seata-source-code-analysis-series",children:"5. Seata Source Code Analysis Series"}),"\n",(0,t.jsxs)(n.p,{children:["Author: Zhao Runze, ",(0,t.jsx)(n.a,{href:"https://blog.csdn.net/qq_37804737/category_9530078.html",children:"Series Address"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(96540);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);