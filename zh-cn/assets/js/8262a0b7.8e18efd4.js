"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[77015],{28025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(74848),s=t(28453);const a={title:"Seata Spring\u652f\u6301",keywords:["Seata"],description:"Seata Spring\u652f\u6301\u3002"},o="Spring\u652f\u6301",i={id:"user/spring",title:"Seata Spring\u652f\u6301",description:"Seata Spring\u652f\u6301\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/spring.md",sourceDirName:"user",slug:"/user/spring",permalink:"/zh-cn/docs/v1.6/user/spring",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.6/user/spring.md",tags:[],version:"v1.6",frontMatter:{title:"Seata Spring\u652f\u6301",keywords:["Seata"],description:"Seata Spring\u652f\u6301\u3002"}},c={},l=[{value:"\u6ce8\u89e3\u62e6\u622a",id:"\u6ce8\u89e3\u62e6\u622a",level:2},{value:"\u5168\u5c40\u4e8b\u52a1",id:"\u5168\u5c40\u4e8b\u52a1",level:3},{value:"TCC",id:"tcc",level:3},{value:"\u5207\u70b9\u8868\u8fbe\u5f0f",id:"\u5207\u70b9\u8868\u8fbe\u5f0f",level:2},{value:"\u5168\u5c40\u4e8b\u52a1",id:"\u5168\u5c40\u4e8b\u52a1-1",level:3}];function u(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"spring\u652f\u6301",children:"Spring\u652f\u6301"}),"\n",(0,r.jsx)(n.h2,{id:"\u6ce8\u89e3\u62e6\u622a",children:"\u6ce8\u89e3\u62e6\u622a"}),"\n",(0,r.jsx)(n.h3,{id:"\u5168\u5c40\u4e8b\u52a1",children:"\u5168\u5c40\u4e8b\u52a1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'@GetMapping(value = "testCommit")\n@GlobalTransactional\npublic Object testCommit(@RequestParam(name = "id",defaultValue = "1") Integer id,\n    @RequestParam(name = "sum", defaultValue = "1") Integer sum) {\n    Boolean ok = productService.reduceStock(id, sum);\n    if (ok) {\n        LocalDateTime now = LocalDateTime.now();\n        Orders orders = new Orders();\n        orders.setCreateTime(now);\n        orders.setProductId(id);\n        orders.setReplaceTime(now);\n        orders.setSum(sum);\n        orderService.save(orders);\n        return "ok";\n    } else {\n        return "fail";\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"tcc",children:"TCC"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'/**\n * \u5b9a\u4e49\u4e24\u9636\u6bb5\u63d0\u4ea4 name = \u8be5tcc\u7684bean\u540d\u79f0,\u5168\u5c40\u552f\u4e00 commitMethod = commit \u4e3a\u4e8c\u9636\u6bb5\u786e\u8ba4\u65b9\u6cd5 rollbackMethod = rollback \u4e3a\u4e8c\u9636\u6bb5\u53d6\u6d88\u65b9\u6cd5\n * useTCCFence=true \u4e3a\u5f00\u542f\u9632\u60ac\u6302\n * BusinessActionContextParameter\u6ce8\u89e3 \u4f20\u9012\u53c2\u6570\u5230\u4e8c\u9636\u6bb5\u4e2d\n *\n * @param params  -\u5165\u53c2\n * @return String\n */\n@TwoPhaseBusinessAction(name = "beanName", commitMethod = "commit", rollbackMethod = "rollback", useTCCFence = true)\npublic void insert(@BusinessActionContextParameter(paramName = "params") Map<String, String> params) {\n    logger.info("\u6b64\u5904\u53ef\u4ee5\u9884\u7559\u8d44\u6e90,\u6216\u8005\u5229\u7528tcc\u7684\u7279\u70b9,\u4e0eAT\u6df7\u7528,\u4e8c\u9636\u6bb5\u65f6\u5229\u7528\u4e00\u9636\u6bb5\u5728\u6b64\u5904\u5b58\u653e\u7684\u6d88\u606f,\u901a\u8fc7\u4e8c\u9636\u6bb5\u53d1\u51fa,\u6bd4\u5982redis,mq\u7b49\u64cd\u4f5c");\n}\n\n/**\n * \u786e\u8ba4\u65b9\u6cd5\u3001\u53ef\u4ee5\u53e6\u547d\u540d\uff0c\u4f46\u8981\u4fdd\u8bc1\u4e0ecommitMethod\u4e00\u81f4 context\u53ef\u4ee5\u4f20\u9012try\u65b9\u6cd5\u7684\u53c2\u6570\n *\n * @param context \u4e0a\u4e0b\u6587\n * @return boolean\n */\npublic void commit(BusinessActionContext context) {\n    logger.info("\u9884\u7559\u8d44\u6e90\u771f\u6b63\u5904\u7406,\u6216\u8005\u53d1\u51famq\u6d88\u606f\u548credis\u5165\u5e93");\n}\n\n/**\n * \u4e8c\u9636\u6bb5\u53d6\u6d88\u65b9\u6cd5\n *\n * @param context \u4e0a\u4e0b\u6587\n * @return boolean\n */\npublic void rollback(BusinessActionContext context) {\n    logger.info("\u9884\u7559\u8d44\u6e90\u91ca\u653e,\u6216\u6e05\u9664\u4e00\u9636\u6bb5\u51c6\u5907\u8ba9\u4e8c\u9636\u6bb5\u63d0\u4ea4\u65f6\u53d1\u51fa\u7684\u6d88\u606f\u7f13\u5b58");\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5207\u70b9\u8868\u8fbe\u5f0f",children:"\u5207\u70b9\u8868\u8fbe\u5f0f"}),"\n",(0,r.jsx)(n.h3,{id:"\u5168\u5c40\u4e8b\u52a1-1",children:"\u5168\u5c40\u4e8b\u52a1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'    @Bean\n    public AspectTransactionalInterceptor aspectTransactionalInterceptor () {\n        return new AspectTransactionalInterceptor();\n    }\n\n    @Bean\n    public Advisor txAdviceAdvisor(AspectTransactionalInterceptor aspectTransactionalInterceptor ) {\n        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();\n        pointcut.setExpression("\u914d\u7f6e\u5207\u70b9\u8868\u8fbe\u5f0f\u4f7f\u5168\u5c40\u4e8b\u52a1\u62e6\u622a\u5668\u751f\u6548");\n        return new DefaultPointcutAdvisor(pointcut, aspectTransactionalInterceptor);\n    }\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);