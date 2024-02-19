"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[11942],{33955:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>r});var i=s(74848),a=s(28453);const t={title:"Seata SAGA \u6a21\u5f0f",keywords:["Seata"],description:"Saga\u6a21\u5f0f\u662fSEATA\u63d0\u4f9b\u7684\u957f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u5728Saga\u6a21\u5f0f\u4e2d\uff0c\u4e1a\u52a1\u6d41\u7a0b\u4e2d\u6bcf\u4e2a\u53c2\u4e0e\u8005\u90fd\u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\uff0c\u5f53\u51fa\u73b0\u67d0\u4e00\u4e2a\u53c2\u4e0e\u8005\u5931\u8d25\u5219\u8865\u507f\u524d\u9762\u5df2\u7ecf\u6210\u529f\u7684\u53c2\u4e0e\u8005\uff0c\u4e00\u9636\u6bb5\u6b63\u5411\u670d\u52a1\u548c\u4e8c\u9636\u6bb5\u8865\u507f\u670d\u52a1\u90fd\u7531\u4e1a\u52a1\u5f00\u53d1\u5b9e\u73b0\u3002"},l="SEATA Saga \u6a21\u5f0f",d={id:"dev/mode/saga-mode",title:"Seata SAGA \u6a21\u5f0f",description:"Saga\u6a21\u5f0f\u662fSEATA\u63d0\u4f9b\u7684\u957f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u5728Saga\u6a21\u5f0f\u4e2d\uff0c\u4e1a\u52a1\u6d41\u7a0b\u4e2d\u6bcf\u4e2a\u53c2\u4e0e\u8005\u90fd\u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\uff0c\u5f53\u51fa\u73b0\u67d0\u4e00\u4e2a\u53c2\u4e0e\u8005\u5931\u8d25\u5219\u8865\u507f\u524d\u9762\u5df2\u7ecf\u6210\u529f\u7684\u53c2\u4e0e\u8005\uff0c\u4e00\u9636\u6bb5\u6b63\u5411\u670d\u52a1\u548c\u4e8c\u9636\u6bb5\u8865\u507f\u670d\u52a1\u90fd\u7531\u4e1a\u52a1\u5f00\u53d1\u5b9e\u73b0\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/dev/mode/saga-mode.md",sourceDirName:"dev/mode",slug:"/dev/mode/saga-mode",permalink:"/zh-cn/docs/v1.3/dev/mode/saga-mode",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.3/dev/mode/saga-mode.md",tags:[],version:"v1.3",frontMatter:{title:"Seata SAGA \u6a21\u5f0f",keywords:["Seata"],description:"Saga\u6a21\u5f0f\u662fSEATA\u63d0\u4f9b\u7684\u957f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u5728Saga\u6a21\u5f0f\u4e2d\uff0c\u4e1a\u52a1\u6d41\u7a0b\u4e2d\u6bcf\u4e2a\u53c2\u4e0e\u8005\u90fd\u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\uff0c\u5f53\u51fa\u73b0\u67d0\u4e00\u4e2a\u53c2\u4e0e\u8005\u5931\u8d25\u5219\u8865\u507f\u524d\u9762\u5df2\u7ecf\u6210\u529f\u7684\u53c2\u4e0e\u8005\uff0c\u4e00\u9636\u6bb5\u6b63\u5411\u670d\u52a1\u548c\u4e8c\u9636\u6bb5\u8865\u507f\u670d\u52a1\u90fd\u7531\u4e1a\u52a1\u5f00\u53d1\u5b9e\u73b0\u3002"},sidebar:"docs",previous:{title:"Seata TCC \u6a21\u5f0f",permalink:"/zh-cn/docs/v1.3/dev/mode/tcc-mode"},next:{title:"Seata XA \u6a21\u5f0f",permalink:"/zh-cn/docs/v1.3/dev/mode/xa-mode"}},c={},r=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Saga\u7684\u5b9e\u73b0\uff1a",id:"saga\u7684\u5b9e\u73b0",level:2},{value:"\u57fa\u4e8e\u72b6\u6001\u673a\u5f15\u64ce\u7684 Saga \u5b9e\u73b0\uff1a",id:"\u57fa\u4e8e\u72b6\u6001\u673a\u5f15\u64ce\u7684-saga-\u5b9e\u73b0",level:3},{value:"\u8bbe\u8ba1",id:"\u8bbe\u8ba1",level:2},{value:"\u72b6\u6001\u673a\u5f15\u64ce\u539f\u7406:",id:"\u72b6\u6001\u673a\u5f15\u64ce\u539f\u7406",level:3},{value:"\u72b6\u6001\u673a\u5f15\u64ce\u8bbe\u8ba1:",id:"\u72b6\u6001\u673a\u5f15\u64ce\u8bbe\u8ba1",level:3},{value:"\u72b6\u6001\u673a\u7684\u9ad8\u53ef\u7528\u8bbe\u8ba1\uff1a",id:"\u72b6\u6001\u673a\u7684\u9ad8\u53ef\u7528\u8bbe\u8ba1",level:3}];function h(e){const n={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"seata-saga-\u6a21\u5f0f",children:"SEATA Saga \u6a21\u5f0f"}),"\n",(0,i.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,i.jsx)(n.p,{children:"Saga\u6a21\u5f0f\u662fSEATA\u63d0\u4f9b\u7684\u957f\u4e8b\u52a1\u89e3\u51b3\u65b9\u6848\uff0c\u5728Saga\u6a21\u5f0f\u4e2d\uff0c\u4e1a\u52a1\u6d41\u7a0b\u4e2d\u6bcf\u4e2a\u53c2\u4e0e\u8005\u90fd\u63d0\u4ea4\u672c\u5730\u4e8b\u52a1\uff0c\u5f53\u51fa\u73b0\u67d0\u4e00\u4e2a\u53c2\u4e0e\u8005\u5931\u8d25\u5219\u8865\u507f\u524d\u9762\u5df2\u7ecf\u6210\u529f\u7684\u53c2\u4e0e\u8005\uff0c\u4e00\u9636\u6bb5\u6b63\u5411\u670d\u52a1\u548c\u4e8c\u9636\u6bb5\u8865\u507f\u670d\u52a1\u90fd\u7531\u4e1a\u52a1\u5f00\u53d1\u5b9e\u73b0\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://img.alicdn.com/tfs/TB1Y2kuw7T2gK0jSZFkXXcIQFXa-445-444.png",alt:"Saga\u6a21\u5f0f\u793a\u610f\u56fe"})}),"\n",(0,i.jsx)(n.p,{children:"\u7406\u8bba\u57fa\u7840\uff1aHector & Kenneth \u53d1\u8868\u8bba\u2f42 Sagas \uff081987\uff09"}),"\n",(0,i.jsx)(n.h2,{id:"saga\u7684\u5b9e\u73b0",children:"Saga\u7684\u5b9e\u73b0\uff1a"}),"\n",(0,i.jsx)(n.h3,{id:"\u57fa\u4e8e\u72b6\u6001\u673a\u5f15\u64ce\u7684-saga-\u5b9e\u73b0",children:"\u57fa\u4e8e\u72b6\u6001\u673a\u5f15\u64ce\u7684 Saga \u5b9e\u73b0\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524dSEATA\u63d0\u4f9b\u7684Saga\u6a21\u5f0f\u662f\u57fa\u4e8e\u72b6\u6001\u673a\u5f15\u64ce\u6765\u5b9e\u73b0\u7684\uff0c\u673a\u5236\u662f\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u901a\u8fc7\u72b6\u6001\u56fe\u6765\u5b9a\u4e49\u670d\u52a1\u8c03\u7528\u7684\u6d41\u7a0b\u5e76\u751f\u6210 json \u72b6\u6001\u8bed\u8a00\u5b9a\u4e49\u6587\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u72b6\u6001\u56fe\u4e2d\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u662f\u8c03\u7528\u4e00\u4e2a\u670d\u52a1\uff0c\u8282\u70b9\u53ef\u4ee5\u914d\u7f6e\u5b83\u7684\u8865\u507f\u8282\u70b9"}),"\n",(0,i.jsx)(n.li,{children:"\u72b6\u6001\u56fe json \u7531\u72b6\u6001\u673a\u5f15\u64ce\u9a71\u52a8\u6267\u884c\uff0c\u5f53\u51fa\u73b0\u5f02\u5e38\u65f6\u72b6\u6001\u5f15\u64ce\u53cd\u5411\u6267\u884c\u5df2\u6210\u529f\u8282\u70b9\u5bf9\u5e94\u7684\u8865\u507f\u8282\u70b9\u5c06\u4e8b\u52a1\u56de\u6eda"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6ce8\u610f: \u5f02\u5e38\u53d1\u751f\u65f6\u662f\u5426\u8fdb\u884c\u8865\u507f\u4e5f\u53ef\u7531\u7528\u6237\u81ea\u5b9a\u4e49\u51b3\u5b9a"}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"\u53ef\u4ee5\u5b9e\u73b0\u670d\u52a1\u7f16\u6392\u9700\u6c42\uff0c\u652f\u6301\u5355\u9879\u9009\u62e9\u3001\u5e76\u53d1\u3001\u5b50\u6d41\u7a0b\u3001\u53c2\u6570\u8f6c\u6362\u3001\u53c2\u6570\u6620\u5c04\u3001\u670d\u52a1\u6267\u884c\u72b6\u6001\u5224\u65ad\u3001\u5f02\u5e38\u6355\u83b7\u7b49\u529f\u80fd"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u72b6\u6001\u56fe:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u793a\u4f8b\u72b6\u6001\u56fe",src:s(56107).A+"",width:"508",height:"543"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8bbe\u8ba1",children:"\u8bbe\u8ba1"}),"\n",(0,i.jsx)(n.h3,{id:"\u72b6\u6001\u673a\u5f15\u64ce\u539f\u7406",children:"\u72b6\u6001\u673a\u5f15\u64ce\u539f\u7406:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u72b6\u6001\u673a\u5f15\u64ce\u539f\u7406",src:s(66453).A+"",width:"936",height:"672"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u56fe\u4e2d\u7684\u72b6\u6001\u56fe\u662f\u5148\u6267\u884cstateA, \u518d\u6267\u884cstateB\uff0c\u7136\u540e\u6267\u884cstateC"}),"\n",(0,i.jsx)(n.li,{children:'"\u72b6\u6001"\u7684\u6267\u884c\u662f\u57fa\u4e8e\u4e8b\u4ef6\u9a71\u52a8\u7684\u6a21\u578b\uff0cstateA\u6267\u884c\u5b8c\u6210\u540e\uff0c\u4f1a\u4ea7\u751f\u8def\u7531\u6d88\u606f\u653e\u5165EventQueue\uff0c\u4e8b\u4ef6\u6d88\u8d39\u7aef\u4eceEventQueue\u53d6\u51fa\u6d88\u606f\uff0c\u6267\u884cstateB'}),"\n",(0,i.jsx)(n.li,{children:'\u5728\u6574\u4e2a\u72b6\u6001\u673a\u542f\u52a8\u65f6\u4f1a\u8c03\u7528Seata Server\u5f00\u542f\u5206\u5e03\u5f0f\u4e8b\u52a1\uff0c\u5e76\u751f\u4ea7xid, \u7136\u540e\u8bb0\u5f55"\u72b6\u6001\u673a\u5b9e\u4f8b"\u542f\u52a8\u4e8b\u4ef6\u5230\u672c\u5730\u6570\u636e\u5e93'}),"\n",(0,i.jsx)(n.li,{children:'\u5f53\u6267\u884c\u5230\u4e00\u4e2a"\u72b6\u6001"\u65f6\u4f1a\u8c03\u7528Seata Server\u6ce8\u518c\u5206\u652f\u4e8b\u52a1\uff0c\u5e76\u751f\u4ea7branchId, \u7136\u540e\u8bb0\u5f55"\u72b6\u6001\u5b9e\u4f8b"\u5f00\u59cb\u6267\u884c\u4e8b\u4ef6\u5230\u672c\u5730\u6570\u636e\u5e93'}),"\n",(0,i.jsx)(n.li,{children:'\u5f53\u4e00\u4e2a"\u72b6\u6001"\u6267\u884c\u5b8c\u6210\u540e\u4f1a\u8bb0\u5f55"\u72b6\u6001\u5b9e\u4f8b"\u6267\u884c\u7ed3\u675f\u4e8b\u4ef6\u5230\u672c\u5730\u6570\u636e\u5e93, \u7136\u540e\u8c03\u7528Seata Server\u4e0a\u62a5\u5206\u652f\u4e8b\u52a1\u7684\u72b6\u6001'}),"\n",(0,i.jsx)(n.li,{children:'\u5f53\u6574\u4e2a\u72b6\u6001\u673a\u6267\u884c\u5b8c\u6210, \u4f1a\u8bb0\u5f55"\u72b6\u6001\u673a\u5b9e\u4f8b"\u6267\u884c\u5b8c\u6210\u4e8b\u4ef6\u5230\u672c\u5730\u6570\u636e\u5e93, \u7136\u540e\u8c03\u7528Seata Server\u63d0\u4ea4\u6216\u56de\u6eda\u5206\u5e03\u5f0f\u4e8b\u52a1'}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u72b6\u6001\u673a\u5f15\u64ce\u8bbe\u8ba1",children:"\u72b6\u6001\u673a\u5f15\u64ce\u8bbe\u8ba1:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u72b6\u6001\u673a\u5f15\u64ce\u8bbe\u8ba1",src:s(88483).A+"",width:"1044",height:"702"})}),"\n",(0,i.jsx)(n.p,{children:"\u72b6\u6001\u673a\u5f15\u64ce\u7684\u8bbe\u8ba1\u4e3b\u8981\u5206\u6210\u4e09\u5c42, \u4e0a\u5c42\u4f9d\u8d56\u4e0b\u5c42\uff0c\u4ece\u4e0b\u5f80\u4e0a\u5206\u522b\u662f\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Eventing \u5c42:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b9e\u73b0\u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784, \u53ef\u4ee5\u538b\u5165\u4e8b\u4ef6, \u5e76\u7531\u6d88\u8d39\u7aef\u6d88\u8d39\u4e8b\u4ef6, \u672c\u5c42\u4e0d\u5173\u5fc3\u4e8b\u4ef6\u662f\u4ec0\u4e48\u6d88\u8d39\u7aef\u6267\u884c\u4ec0\u4e48\uff0c\u7531\u4e0a\u5c42\u5b9e\u73b0"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["ProcessController \u5c42:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'\u7531\u4e8e\u4e0a\u5c42\u7684Eventing\u9a71\u52a8\u4e00\u4e2a\u201c\u7a7a\u201d\u6d41\u7a0b\u5f15\u64ce\u7684\u6267\u884c\uff0c"state"\u7684\u884c\u4e3a\u548c\u8def\u7531\u90fd\u672a\u5b9e\u73b0, \u7531\u4e0a\u5c42\u5b9e\u73b0'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:'\u57fa\u4e8e\u4ee5\u4e0a\u4e24\u5c42\u7406\u8bba\u4e0a\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6269\u5c55\u4efb\u4f55"\u6d41\u7a0b"\u5f15\u64ce'}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["StateMachineEngine \u5c42:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5b9e\u73b0\u72b6\u6001\u673a\u5f15\u64ce\u6bcf\u79cdstate\u7684\u884c\u4e3a\u548c\u8def\u7531\u903b\u8f91"}),"\n",(0,i.jsx)(n.li,{children:"\u63d0\u4f9b API\u3001\u72b6\u6001\u673a\u8bed\u8a00\u4ed3\u5e93"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u72b6\u6001\u673a\u7684\u9ad8\u53ef\u7528\u8bbe\u8ba1",children:"\u72b6\u6001\u673a\u7684\u9ad8\u53ef\u7528\u8bbe\u8ba1\uff1a"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u72b6\u6001\u673a\u7684\u9ad8\u53ef\u7528",src:s(14727).A+"",width:"728",height:"656"})}),"\n",(0,i.jsx)(n.p,{children:"\u72b6\u6001\u673a\u5f15\u64ce\u662f\u65e0\u72b6\u6001\u7684\uff0c\u5b83\u662f\u5185\u5d4c\u5728\u5e94\u7528\u4e2d\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u5e94\u7528\u6b63\u5e38\u8fd0\u884c\u65f6\uff08\u56fe\u4e2d\u4e0a\u534a\u90e8\u5206\uff09\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u72b6\u6001\u673a\u5f15\u64ce\u4f1a\u4e0a\u62a5\u72b6\u6001\u5230Seata Server\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u72b6\u6001\u673a\u6267\u884c\u65e5\u5fd7\u5b58\u50a8\u5728\u4e1a\u52a1\u7684\u6570\u636e\u5e93\u4e2d\uff1b"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u4e00\u53f0\u5e94\u7528\u5b9e\u4f8b\u5b95\u673a\u65f6\uff08\u56fe\u4e2d\u4e0b\u534a\u90e8\u5206\uff09\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Seata Server \u4f1a\u611f\u77e5\u5230\uff0c\u5e76\u53d1\u9001\u4e8b\u52a1\u6062\u590d\u8bf7\u6c42\u5230\u8fd8\u5b58\u6d3b\u7684\u5e94\u7528\u5b9e\u4f8b\uff1b"}),"\n",(0,i.jsx)(n.li,{children:"\u72b6\u6001\u673a\u5f15\u64ce\u6536\u5230\u4e8b\u52a1\u6062\u590d\u8bf7\u6c42\u540e\uff0c\u4ece\u6570\u636e\u5e93\u91cc\u88c5\u8f7d\u65e5\u5fd7\uff0c\u5e76\u6062\u590d\u72b6\u6001\u673a\u4e0a\u4e0b\u6587\u7ee7\u7eed\u6267\u884c\uff1b"}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},14727:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/SagaEngineHA-d538cf16094433b07ec905b5c0746fdb.png"},56107:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/demo_statelang-90f1fc01bfaf3a795c3b3357e1046f16.png"},88483:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/saga_engine-41e75396b108b8e6c157d08766368124.png"},66453:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/saga_engine_mechanism-38f1563ee8316a5dcabeeba27f511f79.png"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(96540);const a={},t=i.createContext(a);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);