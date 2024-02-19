"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[52774],{58650:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=a(74848),i=a(28453);const o={title:"Seata config \u6a21\u5757\u6e90\u7801\u5206\u6790",author:"\u8d75\u6da6\u6cfd",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"],date:"2020/1/11"},r=void 0,s={permalink:"/zh-cn/blog/seata-analysis-config-modular",editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-blog/seata-analysis-config-modular.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/seata-analysis-config-modular.md",title:"Seata config \u6a21\u5757\u6e90\u7801\u5206\u6790",description:"\u4e00 . \u5bfc\u8bfb",date:"2020-01-11T00:00:00.000Z",formattedDate:"2020\u5e741\u670811\u65e5",tags:[],readingTime:7.74,hasTruncateMarker:!1,authors:[{name:"\u8d75\u6da6\u6cfd"}],frontMatter:{title:"Seata config \u6a21\u5757\u6e90\u7801\u5206\u6790",author:"\u8d75\u6da6\u6cfd",keywords:["Seata\u3001\u5206\u5e03\u5f0f\u4e8b\u52a1"],date:"2020/1/11"},unlisted:!1,prevItem:{title:"Seata \u9ad8\u53ef\u7528\u90e8\u7f72\u5b9e\u8df5",permalink:"/zh-cn/blog/seata-ha-practice"},nextItem:{title:"\u6e90\u7801\u5206\u6790Seata-XID\u4f20\u9012 Dubbo\u7bc7",permalink:"/zh-cn/blog/seata-analysis-dubbo-transmit-xid"}},c={authorsImageUrls:[void 0]},l=[{value:"\u4e00 . \u5bfc\u8bfb",id:"\u4e00--\u5bfc\u8bfb",level:2},{value:"\u4e8c. \u73af\u5883\u914d\u7f6e",id:"\u4e8c-\u73af\u5883\u914d\u7f6e",level:2},{value:"\u4e09. \u63cf\u8ff0\u914d\u7f6e",id:"\u4e09-\u63cf\u8ff0\u914d\u7f6e",level:2},{value:"\u56db .\u6269\u5c55\u914d\u7f6e",id:"\u56db-\u6269\u5c55\u914d\u7f6e",level:2},{value:"\u4e94 . seata \u6e90\u7801\u5206\u6790\u7cfb\u5217\u5730\u5740",id:"\u4e94--seata-\u6e90\u7801\u5206\u6790\u7cfb\u5217\u5730\u5740",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u4e00--\u5bfc\u8bfb",children:"\u4e00 . \u5bfc\u8bfb"}),"\n",(0,t.jsxs)(n.p,{children:["\u6839\u636e",(0,t.jsx)(n.a,{href:"https://www.iteye.com/blog/javatar-949527",children:"\u5927\u4f6c"}),"\u5b9a\u4e49\u7684\u5206\u7c7b\uff0c\u914d\u7f6e\u53ef\u4ee5\u6709\u4e09\u79cd\uff1a\u73af\u5883\u914d\u7f6e\u3001\u63cf\u8ff0\u914d\u7f6e\u3001\u6269\u5c55\u914d\u7f6e\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u73af\u5883\u914d\u7f6e\uff1a\u50cf\u4e00\u4e9b\u7ec4\u4ef6\u542f\u52a8\u65f6\u7684\u53c2\u6570\u7b49\uff0c\u901a\u5e38\u662f\u79bb\u6563\u7684\u7b80\u5355\u503c\uff0c\u591a\u662f key-value \u578b\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u63cf\u8ff0\u914d\u7f6e\uff1a\u4e0e\u4e1a\u52a1\u903b\u8f91\u76f8\u5173\uff0c\u6bd4\u5982\uff1a\u4e8b\u52a1\u53d1\u8d77\u65b9\u548c\u53c2\u4e0e\u65b9\uff0c\u901a\u5e38\u4f1a\u5d4c\u5230\u4e1a\u52a1\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\u4e2d\u3002\u63cf\u8ff0\u914d\u7f6e\u4fe1\u606f\u8f83\u591a\uff0c\u751a\u81f3\u6709\u5c42\u6b21\u5173\u7cfb\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6269\u5c55\u914d\u7f6e\uff1a\u4ea7\u54c1\u9700\u8981\u53d1\u73b0\u7b2c\u4e09\u65b9\u5b9e\u73b0\uff0c\u5bf9\u914d\u7f6e\u7684\u805a\u5408\u8981\u6c42\u6bd4\u8f83\u9ad8\uff0c\u6bd4\u5982\uff1a\u5404\u79cd\u914d\u7f6e\u4e2d\u5fc3\u548c\u6ce8\u518c\u4e2d\u5fc3\uff0c\u901a\u5e38\u505a\u6cd5\u662f\u5728 jar \u5305\u7684 META-INF/services \u4e0b\u653e\u7f6e\u63a5\u53e3\u7c7b\u5168\u540d\u6587\u4ef6\uff0c\u5185\u5bb9\u4e3a\u6bcf\u884c\u4e00\u4e2a\u5b9e\u73b0\u7c7b\u7c7b\u540d\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e8c-\u73af\u5883\u914d\u7f6e",children:"\u4e8c. \u73af\u5883\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"seata server \u5728\u52a0\u8f7d\u7684\u65f6\u5019\uff0c\u4f1a\u4f7f\u7528 resources/registry.conf \u6765\u786e\u5b9a\u914d\u7f6e\u4e2d\u5fc3\u548c\u6ce8\u518c\u4e2d\u5fc3\u7684\u7c7b\u578b\u3002\u800c seata client \u5728 1.0 \u7248\u672c\u540e\uff0c\u4e0d\u4ec5\u80fd\u4f7f\u7528 conf \u6587\u4ef6\u8fdb\u884c\u914d\u7f6e\u7684\u52a0\u8f7d\uff0c\u4e5f\u53ef\u4ee5\u5728 springboot \u7684 yml \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u4f7f\u7528 seata.config.{type} \u6765\u8fdb\u884c\u914d\u7f6e\u4e2d\u5fc3\u7684\u9009\u62e9\uff0c\u6ce8\u518c\u4e2d\u5fc3\u4e0e\u4e4b\u7c7b\u4f3c\u3002\u901a\u8fc7 yml \u52a0\u8f7d\u914d\u7f6e\u7684\u6e90\u7801\u5728 io.seata.spring.boot.autoconfigure.properties.registry \u5305\u4e0b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c seata \u5ba2\u6237\u7aef\u7684\u4f7f\u7528\u8005\u65e2\u5728 resources \u4e0b\u653e\u4e86 conf \u914d\u7f6e\u6587\u4ef6\u53c8\u5728 yml \u6587\u4ef6\u4e2d\u914d\u7f6e\uff0c\u90a3\u4e48\u4f1a\u4f18\u5148\u4f7f\u7528 yml \u4e2d\u914d\u7f6e\u7684\u3002\u4ee3\u7801\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"CURRENT_FILE_INSTANCE = null == extConfiguration ? configuration : extConfiguration;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u91cc extConfiguration \u662f\u5916\u90e8\u914d\u7f6e\u5b9e\u4f8b\uff0c\u5373 ExtConfigurationProvider#provide() \u5916\u90e8\u914d\u7f6e\u63d0\u4f9b\u7c7b\u63d0\u4f9b\u7684\uff0c\u800c configuration \u662f\u53e6\u4e00\u4e2a\u914d\u7f6e\u63d0\u4f9b\u7c7b\u63d0\u4f9b\u7684 ConfigurationProvider#provide()\uff0c\u8fd9\u4e24\u4e2a\u914d\u7f6e\u63d0\u4f9b\u7c7b\u662f\u5728 config \u6a21\u5757 ConfigurationFactory \u9759\u6001\u5757\u4e2d\uff0c\u901a\u8fc7 SPI \u7684\u65b9\u5f0f\u52a0\u8f7d\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"EnhancedServiceLoader.load(ExtConfigurationProvider.class).provide(configuration);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u9762\u8bf4\u7684\u662f\u914d\u7f6e\u4e2d\u5fc3\u7c7b\u578b\u7684\u9009\u62e9\uff0c\u800c\u914d\u7f6e\u73af\u5883\u7684\u52a0\u8f7d\uff0c\u662f\u5728\u786e\u5b9a\u4e86\u4f7f\u7528\u4ec0\u4e48\u914d\u7f6e\u4e2d\u5fc3\u7c7b\u578b\u540e\uff0c\u518d\u901a\u8fc7\u76f8\u5e94\u7684\u914d\u7f6e\u4e2d\u5fc3\u52a0\u8f7d\u73af\u5883\u914d\u7f6e\u3002File \u5373\u6587\u672c\u65b9\u5f0f\u914d\u7f6e\u4e5f\u662f\u4e00\u79cd\u914d\u7f6e\u4e2d\u5fc3\u3002"}),"\n",(0,t.jsx)(n.p,{children:"client \u548c server \u83b7\u53d6\u914d\u7f6e\u53c2\u6570\uff0c\u662f\u901a\u8fc7 ConfigurationFactory#getInstance() \u83b7\u53d6\u914d\u7f6e\u7c7b\u5b9e\u4f8b\uff0c\u518d\u4f7f\u7528\u914d\u7f6e\u7c7b\u5b9e\u4f8b\u83b7\u53d6\u914d\u7f6e\u53c2\u6570\uff0c\u914d\u7f6e\u7684 key \u8fd9\u4e9b\u5e38\u91cf\u7684\u5b9a\u4e49\uff0c\u4e3b\u8981\u5728 core \u6a21\u5757\u4e0b config \u6587\u4ef6\u4e2d\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e00\u4e9b\u91cd\u8981\u7684\u73af\u5883\u914d\u7f6e\u5c5e\u6027\u7684\u610f\u4e49\uff0c",(0,t.jsx)(n.a,{href:"/docs/user/configurations/",children:"\u5b98\u7f51\u90fd\u6709\u4ecb\u7ecd"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5b9e\u4f8b\u5316\u7684\u65f6\u5019\u901a\u8fc7 ConfigurationFactory \u83b7\u53d6\u540e\u6ce8\u5165\u6784\u9020\u51fd\u6570\u4e2d\u7684\uff0c\u9700\u8981\u91cd\u542f\u624d\u80fd\u751f\u6548\uff0c\u800c\u5728\u4f7f\u7528\u65f6\u901a\u8fc7 ConfigurationFactory \u5b9e\u65f6\u83b7\u53d6\u7684\uff0c\u914d\u7f6e\u6539\u4e86\u5c31\u53ef\u4ee5\u751f\u6548\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u662f config \u6a21\u5757\u63d0\u4f9b\u4e86 ConfigurationChangeListener#onChangeEvent \u63a5\u53e3\u65b9\u6cd5\u6765\u4fee\u6539\u5b9e\u4f8b\u5185\u90e8\u7684\u5c5e\u6027\u3002\u5373\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\uff0c\u76d1\u542c\u52a8\u6001\u53d8\u5316\u7684\u5c5e\u6027\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u81ea\u8eab\u4f7f\u7528\u7684\u5c5e\u6027\u548c\u521a\u5f00\u59cb\u6ce8\u5165\u65f6\u4e0d\u4e00\u6837\u4e86\uff0c\u5c31\u4fee\u6539\u5b9e\u4f8b\u4e2d\u4fdd\u5b58\u7684\u5c5e\u6027\uff0c\u548c\u914d\u7f6e\u4e2d\u5fc3\u4fdd\u6301\u4e00\u81f4\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u52a8\u6001\u914d\u7f6e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public class GlobalTransactionalInterceptor implements ConfigurationChangeListener {\nprivate volatile boolean disable = ConfigurationFactory.getInstance().getBoolean(ConfigurationKeys.DISABLE_GLOBAL_TRANSACTION,false);\n@Override public Object invoke(Param param) {\n   if(disable){//\u4e8b\u52a1\u4e1a\u52a1\u5904\u7406}\n}\n@Override public void onChangeEvent(Param param) {\n   disable = param;\n}}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u9762\u662f spring \u6a21\u5757\u4e0b\u7684 GlobalTransactionalInterceptor \u4e0e\u964d\u7ea7\u5c5e\u6027\u76f8\u5173\u7684\u4f2a\u4ee3\u7801\u3002 GlobalTrarnsactionalScanner \u5728\u4e0a\u9762\u7684 interceptor \u7c7b\u88ab\u5b9e\u4f8b\u5316\u65f6\uff0c\u628a interceptor \u6ce8\u518c\u5230\u4e86\u914d\u7f6e\u53d8\u5316\u76d1\u542c\u5217\u8868\u4e2d\uff0c\u5f53\u914d\u7f6e\u88ab\u6539\u53d8\u7684\u65f6\u5019\uff0c\u4f1a\u8c03\u7528\u76d1\u542c\u5668\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"ConfigurationFactory.getInstance().addConfigListener(ConfigurationKeys.DISABLE_GLOBAL_TRANSACTION,(ConfigurationChangeListener)interceptor);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u964d\u7ea7\u7684\u610f\u601d\u662f\uff0c\u5f53\u670d\u52a1\u67d0\u4e00\u9879\u529f\u80fd\u4e0d\u53ef\u7528\u7684\u65f6\u5019\uff0c\u901a\u8fc7\u52a8\u6001\u914d\u7f6e\u7684\u5c5e\u6027\uff0c\u628a\u67d0\u4e00\u9879\u529f\u80fd\u7ed9\u5173\u4e86\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u907f\u514d\u4e00\u76f4\u5c1d\u8bd5\u5931\u8d25\u7684\u5904\u7406\u3002interceptor#invoke() \u53ea\u6709\u5f53\u8fd9\u4e2a disable \u5c5e\u6027\u4e3a true \u65f6\uff0c\u624d\u4f1a\u6267\u884c seata \u4e8b\u52a1\u76f8\u5173\u4e1a\u52a1\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e09-\u63cf\u8ff0\u914d\u7f6e",children:"\u4e09. \u63cf\u8ff0\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u822c\u6027\u6846\u67b6\u63cf\u8ff0\u6027\u914d\u7f6e\u901a\u5e38\u4fe1\u606f\u6bd4\u8f83\u591a\uff0c\u751a\u81f3\u6709\u5c42\u6b21\u5173\u7cfb\uff0c\u7528 xml \u914d\u7f6e\u6bd4\u8f83\u65b9\u4fbf\uff0c\u56e0\u4e3a\u6811\u7ed3\u6784\u63cf\u8ff0\u6027\u66f4\u5f3a\u3002\u800c\u73b0\u5728\u7684\u4e60\u60ef\u90fd\u5728\u63d0\u5021\u53bb\u7e41\u7410\u7684\u7ea6\u675f\u6027\u914d\u7f6e\uff0c\u91c7\u7528\u7ea6\u5b9a\u7684\u65b9\u5f0f\u3002"}),"\n",(0,t.jsx)(n.p,{children:"seata AT \u6a21\u5f0f\u662f\u901a\u8fc7\u4ee3\u7406\u6570\u636e\u6e90\u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u4e8b\u52a1\u5904\u7406\uff0c\u5bf9\u4e1a\u52a1\u65b9\u5165\u4fb5\u8f83\u5c0f\uff0c\u53ea\u9700\u8ba9 seata \u5728\u542f\u52a8\u65f6\uff0c\u8bc6\u522b\u54ea\u4e9b\u4e1a\u52a1\u65b9\u9700\u8981\u5f00\u542f\u5168\u5c40\u4e8b\u52a1\uff0c\u6240\u4ee5\u7528\u6ce8\u89e3\u5c31\u53ef\u4ee5\u5b9e\u73b0\u63cf\u8ff0\u6027\u914d\u7f6e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@GlobalTransactional(timeoutMills = 300000, name = "busi-doBiz")\npublic String doBiz(String msg) {}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u662f tcc \u6a21\u5f0f\uff0c\u4e8b\u52a1\u53c2\u4e0e\u65b9\u8fd8\u9700\u4f7f\u7528\u6ce8\u89e3\u6807\u8bc6\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@TwoPhaseBusinessAction(name = "tccActionForSpringTest" , commitMethod = "commit", rollbackMethod = "rollback")\npublic boolean prepare(BusinessActionContext actionContext, int i);\npublic boolean commit(BusinessActionContext actionContext);\npublic boolean rollback(BusinessActionContext actionContext);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u56db-\u6269\u5c55\u914d\u7f6e",children:"\u56db .\u6269\u5c55\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u6269\u5c55\u914d\u7f6e\uff0c\u901a\u5e38\u5bf9\u4ea7\u54c1\u7684\u805a\u5408\u8981\u6c42\u6bd4\u8f83\u9ad8\uff0c\u56e0\u4e3a\u4ea7\u54c1\u9700\u8981\u53d1\u73b0\u7b2c\u4e09\u65b9\u5b9e\u73b0\uff0c\u5c06\u5176\u52a0\u5165\u4ea7\u54c1\u5185\u90e8\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://img-blog.csdnimg.cn/20200110213751452.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODA0NzM3,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u8fd9\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u914d\u7f6e\u4e2d\u5fc3\u63d0\u4f9b\u7c7b\u7684\u4f8b\u5b50\uff0c\u5728 META-INF/services \u4e0b\u653e\u7f6e\u4e00\u4e2a\u63a5\u53e3\u540c\u540d\u7684\u6587\u672c\u6587\u4ef6\uff0c\u6587\u4ef6\u7684\u5185\u5bb9\u4e3a\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\u3002\u8fd9\u662f\u6807\u51c6\u7684 spi \u65b9\u5f0f\u3002\u7136\u540e\u4fee\u6539\u914d\u7f6e\u6587\u4ef6 registry.conf \u4e2d\u7684 config.type=test \u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f46\u662f\u5982\u679c\u4f60\u8ba4\u4e3a\u8fd9\u6837\u5c31\u53ef\u4ee5\u88ab seata \u8bc6\u522b\u5230\uff0c\u5e76\u4e14\u66ff\u6362\u6389\u914d\u7f6e\u4e2d\u5fc3\uff0c\u90a3\u4f60\u5c31\u9519\u4e86\u3002seata \u5728\u52a0\u8f7d\u914d\u7f6e\u4e2d\u5fc3\u7684\u65f6\u5019\uff0c\u4f7f\u7528 enum ConfigType \u5305\u88f9\u4e86\u4e00\u4e0b\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u7684\u914d\u7f6e\u4e2d\u5fc3\u7684\u7c7b\u578b\u7684\u503c\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'private static Configuration buildConfiguration() {\n   configTypeName = "test";//registry.conf\u4e2d\u914d\u7f6e\u7684config.type\n   configType = ConfigType.getType(configTypeName);//ConfigType\u83b7\u53d6\u4e0d\u5230\u4f1a\u629b\u5f02\u5e38\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5728 ConfigType \u4e2d\u6ca1\u6709\u5b9a\u4e49 test \u8fd9\u79cd\u914d\u7f6e\u4e2d\u5fc3\u7c7b\u578b\uff0c\u90a3\u4e48\u4f1a\u629b\u5f02\u5e38\u3002\u6240\u4ee5\u5355\u7eaf\u7684\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u800c\u4e0d\u6539\u53d8\u6e90\u7801\u662f\u65e0\u6cd5\u4f7f\u7528 ConfigType \u4e2d\u5b9a\u4e49\u7684\u914d\u7f6e\u4e2d\u5fc3\u63d0\u4f9b\u7c7b\u4ee5\u5916\u7684\u914d\u7f6e\u4e2d\u5fc3\u63d0\u4f9b\u7c7b\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u76ee\u524d 1.0 \u7248\u672c\u5728 ConfigType \u4e2d\u5b9a\u4e49\u7684\u914d\u7f6e\u4e2d\u5fc3\u7c7b\u578b\u6709\uff1aFile,ZK,Nacos,Apollo,Consul,Etcd3,SpringCloudConfig,Custom\u3002\u5982\u679c\u7528\u6237\u60f3\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u914d\u7f6e\u4e2d\u5fc3\u7c7b\u578b\uff0c\u53ef\u4ee5\u4f7f\u7528 Custom \u8fd9\u79cd\u7c7b\u578b\u3002"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:"https://img-blog.csdnimg.cn/20200110215249152.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3ODA0NzM3,size_16,color_FFFFFF,t_70",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"}),"\n\u8fd9\u91cc\u53ef\u4ee5\u4f7f\u7528\u4e0d\u4f18\u96c5\u7684\u65b9\u5f0f\uff0c\u5373\u63d0\u4f9b\u4e00\u4e2a\u6307\u5b9a\u540d\u79f0 ZK \u4f46\u662f\u7ea7\u522b order=3 \u66f4\u9ad8\u7684\u5b9e\u73b0\u7c7b\uff08ZK \u9ed8\u8ba4 order=1\uff09\uff0c\u5c31\u53ef\u4ee5\u8ba9 ConfigurationFactory \u4f7f\u7528 TestConfigurationProvider \u4f5c\u4e3a\u914d\u7f6e\u4e2d\u5fc3\u63d0\u4f9b\u7c7b\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u9762\u7684\u6b65\u9aa4\uff0c\u5c31\u53ef\u4ee5\u8ba9 seata \u4f7f\u7528\u6211\u4eec\u81ea\u5df1\u63d0\u4f9b\u7684\u4ee3\u7801\u3002seata \u4e2d codec\u3001compressor\u3001discovery\u3001integration \u7b49\u6a21\u5757\uff0c\u90fd\u662f\u4f7f\u7528 spi \u673a\u5236\u52a0\u8f7d\u529f\u80fd\u7c7b\uff0c\u7b26\u5408\u5fae\u5185\u6838 + \u63d2\u4ef6\u5316\uff0c\u5e73\u7b49\u5bf9\u5f85\u7b2c\u4e09\u65b9\u7684\u8bbe\u8ba1\u601d\u60f3\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e94--seata-\u6e90\u7801\u5206\u6790\u7cfb\u5217\u5730\u5740",children:"\u4e94 . seata \u6e90\u7801\u5206\u6790\u7cfb\u5217\u5730\u5740"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f5c\u8005\uff1a\u8d75\u6da6\u6cfd\uff0c",(0,t.jsx)(n.a,{href:"https://blog.csdn.net/qq_37804737/category_9530078.html",children:"\u7cfb\u5217\u5730\u5740"}),"\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>s});var t=a(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);