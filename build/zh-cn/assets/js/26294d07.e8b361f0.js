"use strict";(self.webpackChunkseata_website=self.webpackChunkseata_website||[]).push([[49519],{37964:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=i(74848),l=i(28453);const r={title:"\u4e3aSeata\u8d21\u732e",keywords:["Seata"],description:"\u5982\u679c\u60a8\u6709\u5174\u8da3\u653b\u514bSeata\uff0c\u6b22\u8fce\u60a8\u3002\u9996\u5148\uff0c\u6211\u4eec\u975e\u5e38\u9f13\u52b1\u8fd9\u79cd\u610f\u613f\u3002\u8fd9\u662f\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u7684\u5217\u8868\u3002"},c="\u4e3aSeata\u8d21\u732e",d={id:"developers/guide_dev",title:"\u4e3aSeata\u8d21\u732e",description:"\u5982\u679c\u60a8\u6709\u5174\u8da3\u653b\u514bSeata\uff0c\u6b22\u8fce\u60a8\u3002\u9996\u5148\uff0c\u6211\u4eec\u975e\u5e38\u9f13\u52b1\u8fd9\u79cd\u610f\u613f\u3002\u8fd9\u662f\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u7684\u5217\u8868\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/developers/guide_dev.md",sourceDirName:"developers",slug:"/developers/guide_dev",permalink:"/zh-cn/docs/v1.4/developers/guide_dev",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-seata-website/blob/docusaurus/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4/developers/guide_dev.md",tags:[],version:"v1.4",frontMatter:{title:"\u4e3aSeata\u8d21\u732e",keywords:["Seata"],description:"\u5982\u679c\u60a8\u6709\u5174\u8da3\u653b\u514bSeata\uff0c\u6b22\u8fce\u60a8\u3002\u9996\u5148\uff0c\u6211\u4eec\u975e\u5e38\u9f13\u52b1\u8fd9\u79cd\u610f\u613f\u3002\u8fd9\u662f\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u7684\u5217\u8868\u3002"},sidebar:"developers",previous:{title:"\u62a5\u544a\u5b89\u5168\u95ee\u9898",permalink:"/zh-cn/docs/v1.4/developers/contributor-guide/reporting-security-issues_dev"},next:{title:"\u7ed9\u95ee\u9898\u6253\u6807\u7b7e",permalink:"/zh-cn/docs/v1.4/developers/committer-guide/label-an-issue-guide_dev"}},t={},h=[{value:"\u8bdd\u9898",id:"\u8bdd\u9898",level:2},{value:"\u62a5\u544a\u5b89\u5168\u95ee\u9898",id:"\u62a5\u544a\u5b89\u5168\u95ee\u9898",level:2},{value:"\u62a5\u544a\u4e00\u822c\u95ee\u9898",id:"\u62a5\u544a\u4e00\u822c\u95ee\u9898",level:2},{value:"\u4ee3\u7801\u548c\u6587\u6863\u8d21\u732e",id:"\u4ee3\u7801\u548c\u6587\u6863\u8d21\u732e",level:2},{value:"\u5de5\u4f5c\u51c6\u5907",id:"\u5de5\u4f5c\u51c6\u5907",level:3},{value:"\u5206\u652f\u5b9a\u4e49",id:"\u5206\u652f\u5b9a\u4e49",level:3},{value:"\u63d0\u4ea4\u89c4\u5219",id:"\u63d0\u4ea4\u89c4\u5219",level:3},{value:"\u63d0\u4ea4\u8baf\u606f",id:"\u63d0\u4ea4\u8baf\u606f",level:4},{value:"\u63d0\u4ea4\u5185\u5bb9",id:"\u63d0\u4ea4\u5185\u5bb9",level:4},{value:"PR \u8bf4\u660e",id:"pr-\u8bf4\u660e",level:3},{value:"\u6d4b\u8bd5\u7528\u4f8b\u8d21\u732e",id:"\u6d4b\u8bd5\u7528\u4f8b\u8d21\u732e",level:2},{value:"\u81f4\u529b\u4e8e\u5e2e\u52a9\u4efb\u4f55\u4e8b\u60c5",id:"\u81f4\u529b\u4e8e\u5e2e\u52a9\u4efb\u4f55\u4e8b\u60c5",level:2},{value:"\u4ee3\u7801\u98ce\u683c",id:"\u4ee3\u7801\u98ce\u683c",level:2},{value:"\u6307\u5bfc\u65b9\u9488",id:"\u6307\u5bfc\u65b9\u9488",level:3},{value:"IDE\u63d2\u4ef6\u5b89\u88c5\uff08\u4e0d\u5fc5\u8981\uff09",id:"ide\u63d2\u4ef6\u5b89\u88c5\u4e0d\u5fc5\u8981",level:3},{value:"idea IDE",id:"idea-ide",level:4},{value:"eclipse IDE",id:"eclipse-ide",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u4e3aseata\u8d21\u732e",children:"\u4e3aSeata\u8d21\u732e"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u60a8\u6709\u5174\u8da3\u653b\u514bSeata\uff0c\u6b22\u8fce\u60a8\u3002\u9996\u5148\uff0c\u6211\u4eec\u975e\u5e38\u9f13\u52b1\u8fd9\u79cd\u610f\u613f\u3002\u8fd9\u662f\u4e3a\u60a8\u63d0\u4f9b\u5e2e\u52a9\u7684\u5217\u8868\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u8bdd\u9898",children:"\u8bdd\u9898"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E6%8A%A5%E5%91%8A%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98",children:"\u62a5\u544a\u5b89\u5168\u95ee\u9898"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E6%8A%A5%E5%91%8A%E4%B8%80%E8%88%AC%E9%97%AE%E9%A2%98",children:"\u62a5\u544a\u4e00\u822c\u95ee\u9898"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E4%BB%A3%E7%A0%81%E5%92%8C%E6%96%87%E6%A1%A3%E8%B4%A1%E7%8C%AE",children:"\u4ee3\u7801\u548c\u6587\u6863\u8d21\u732e"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E6%B5%8B%E8%AF%95%E7%94%A8%E4%BE%8B%E8%B4%A1%E7%8C%AE",children:"\u6d4b\u8bd5\u7528\u4f8b\u8d21\u732e"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E8%87%B4%E5%8A%9B%E4%BA%8E%E5%B8%AE%E5%8A%A9%E4%BB%BB%E4%BD%95%E4%BA%8B%E6%83%85",children:"\u81f4\u529b\u4e8e\u5e2e\u52a9\u4efb\u4f55\u4e8b\u60c5"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#%E4%BB%A3%E7%A0%81%E9%A3%8E%E6%A0%BC",children:"\u4ee3\u7801\u98ce\u683c"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u62a5\u544a\u5b89\u5168\u95ee\u9898",children:"\u62a5\u544a\u5b89\u5168\u95ee\u9898"}),"\n",(0,s.jsxs)(n.p,{children:["\u5b89\u5168\u95ee\u9898\u5e94\u8be5\u59cb\u7ec8\u5f97\u5230\u8ba4\u771f\u5bf9\u5f85\u3002\u6309\u7167\u6211\u4eec\u901a\u5e38\u7684\u539f\u5219\uff0c\u6211\u4eec\u4e0d\u9f13\u52b1\u4efb\u4f55\u4eba\u6563\u5e03\u5b89\u5168\u95ee\u9898\u3002\u5982\u679c\u60a8\u53d1\u73b0Seata\u7684\u5b89\u5168\u95ee\u9898\uff0c\u8bf7\u4e0d\u8981\u516c\u5f00\u8ba8\u8bba\uff0c\u751a\u81f3\u4e0d\u8981\u516c\u5f00\u95ee\u9898\u3002\u76f8\u53cd\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u5411\u6211\u4eec\u53d1\u9001\u4e00\u5c01\u79c1\u4eba\u7535\u5b50\u90ae\u4ef6\u81f3 ",(0,s.jsx)(n.a,{href:"mailto:private@seata.apache.org",children:"private@seata.apache.org"}),"\u8fdb\u884c\u4e3e\u62a5\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u62a5\u544a\u4e00\u822c\u95ee\u9898",children:"\u62a5\u544a\u4e00\u822c\u95ee\u9898"}),"\n",(0,s.jsxs)(n.p,{children:["\u5766\u767d\u5730\u8bf4\uff0c\u6211\u4eec\u8ba4\u4e3aSeata\u7684\u6bcf\u4f4d\u7528\u6237\u90fd\u662f\u975e\u5e38\u53cb\u597d\u7684\u8d21\u732e\u8005\u3002\u4f53\u9a8cSeata\u4e4b\u540e\uff0c\u60a8\u53ef\u80fd\u4f1a\u5bf9\u9879\u76ee\u6709\u4e00\u4e9b\u53cd\u9988\u3002\u7136\u540e\u968f\u65f6\u901a\u8fc7",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/issues/new/choose",children:"NEW ISSUE"}),"\u6253\u5f00",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/issues/new/choose",children:"\u95ee\u9898"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u4e3a\u6211\u4eec\u5728\u4e00\u4e2a\u5206\u5e03\u5f0f\u7684\u65b9\u5f0f\u5408\u4f5c\u9879\u76eeSeata\uff0c\u6211\u4eec\u5bf9\u6b64\u8868\u793a\u8d5e\u8d4f",(0,s.jsx)(n.strong,{children:"\u7f16\u5199\u826f\u597d"}),"\uff0c",(0,s.jsx)(n.strong,{children:"\u8be6\u7ec6"}),"\uff0c",(0,s.jsx)(n.strong,{children:"\u660e\u786e"}),"\u7684\u95ee\u9898\u62a5\u544a\u3002\u4e3a\u4e86\u63d0\u9ad8\u6c9f\u901a\u6548\u7387\uff0c\u6211\u4eec\u5e0c\u671b\u6bcf\u4e2a\u4eba\u90fd\u53ef\u4ee5\u641c\u7d22\u60a8\u7684\u95ee\u9898\u662f\u5426\u5728\u641c\u7d22\u5217\u8868\u4e2d\u3002\u5982\u679c\u53d1\u73b0\u5b83\u5b58\u5728\uff0c\u8bf7\u5728\u73b0\u6709\u95ee\u9898\u4e0b\u7684\u8bc4\u8bba\u4e2d\u6dfb\u52a0\u60a8\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u800c\u4e0d\u8981\u6253\u5f00\u4e00\u4e2a\u5168\u65b0\u7684issue\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u4f7f\u95ee\u9898\u8be6\u7ec6\u4fe1\u606f\u5c3d\u53ef\u80fd\u5730\u6807\u51c6\uff0c\u6211\u4eec\u4e3a\u95ee\u9898\u62a5\u544a\u8005\u8bbe\u7f6e\u4e86\u201c ",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/.github/ISSUE_TEMPLATE",children:"\u95ee\u9898\u6a21\u677f"})," \u201d\u3002\u8bf7",(0,s.jsx)(n.strong,{children:"\u52a1\u5fc5"}),"\u6309\u7167\u8bf4\u660e\u586b\u5199\u6a21\u677f\u4e2d\u7684\u5b57\u6bb5\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u6253\u5f00\u4e00\u4e2a\u95ee\u9898\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u9519\u8bef\u62a5\u544a"}),"\n",(0,s.jsx)(n.li,{children:"\u529f\u80fd\u8981\u6c42"}),"\n",(0,s.jsx)(n.li,{children:"\u6027\u80fd\u95ee\u9898"}),"\n",(0,s.jsx)(n.li,{children:"\u529f\u80fd\u63d0\u6848"}),"\n",(0,s.jsx)(n.li,{children:"\u529f\u80fd\u8bbe\u8ba1"}),"\n",(0,s.jsx)(n.li,{children:"\u9700\u8981\u5e2e\u52a9"}),"\n",(0,s.jsx)(n.li,{children:"doc\u4e0d\u5b8c\u6574"}),"\n",(0,s.jsx)(n.li,{children:"\u6d4b\u8bd5\u6539\u8fdb"}),"\n",(0,s.jsx)(n.li,{children:"\u6709\u5173\u9879\u76ee\u7684\u4efb\u4f55\u95ee\u9898"}),"\n",(0,s.jsx)(n.li,{children:"\u7b49\u7b49"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u53e6\u5916\uff0c\u6211\u4eec\u5fc5\u987b\u63d0\u9192\u60a8\uff0c\u5728\u586b\u5199\u65b0issue\u65f6\uff0c\u8bf7\u8bb0\u4f4f\u4ece\u60a8\u7684\u5e16\u5b50\u4e2d\u5220\u9664\u654f\u611f\u6570\u636e\u3002\u654f\u611f\u6570\u636e\u53ef\u4ee5\u662f\u5bc6\u7801\uff0c\u5bc6\u94a5\uff0c\u7f51\u7edc\u4f4d\u7f6e\uff0c\u79c1\u4eba\u4e1a\u52a1\u6570\u636e\u7b49\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4ee3\u7801\u548c\u6587\u6863\u8d21\u732e",children:"\u4ee3\u7801\u548c\u6587\u6863\u8d21\u732e"}),"\n",(0,s.jsx)(n.p,{children:"\u9f13\u52b1\u91c7\u53d6\u4e00\u5207\u63aa\u65bd\u4f7fSeata\u9879\u76ee\u53d8\u5f97\u66f4\u597d\u3002\u5728GitHub\u4e0a\uff0cSeata\u7684\u6bcf\u4e2a\u6539\u8fdb\u90fd\u53ef\u4ee5\u901a\u8fc7PR\uff08\u62c9\u53d6\u8bf7\u6c42\u7684\u7f29\u5199\uff09\u6765\u5b9e\u73b0\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u53d1\u73b0\u9519\u5b57\uff0c\u8bf7\u5c1d\u8bd5\u89e3\u51b3\uff01"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u53d1\u73b0\u9519\u8bef\uff0c\u8bf7\u5c1d\u8bd5\u4fee\u590d\u5b83\uff01"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u53d1\u73b0\u4e00\u4e9b\u5197\u4f59\u4ee3\u7801\uff0c\u8bf7\u5c1d\u8bd5\u5c06\u5176\u5220\u9664\uff01"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u53d1\u73b0\u7f3a\u5c11\u4e00\u4e9b\u6d4b\u8bd5\u7528\u4f8b\uff0c\u8bf7\u5c1d\u8bd5\u6dfb\u52a0\u5b83\u4eec\uff01"}),"\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u60a8\u53ef\u4ee5\u589e\u5f3a\u529f\u80fd\uff0c\u8bf7",(0,s.jsx)(n.strong,{children:"\u4e0d\u8981"}),"\u72b9\u8c6b\uff01"]}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u53d1\u73b0\u9690\u5f0f\u4ee3\u7801\uff0c\u8bf7\u5c1d\u8bd5\u6dfb\u52a0\u6ce8\u91ca\u4ee5\u4f7f\u5176\u6e05\u6670\uff01"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u60a8\u53d1\u73b0\u4ee3\u7801\u4e11\u964b\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u6784\u5b83\uff01"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u53ef\u4ee5\u5e2e\u52a9\u6539\u5584\u6587\u6863\uff0c\u90a3\u5c31\u518d\u597d\u4e0d\u8fc7\u4e86\uff01"}),"\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u53d1\u73b0\u6587\u6863\u4e0d\u6b63\u786e\uff0c\u8bf7\u76f4\u63a5\u89e3\u51b3\u8be5\u95ee\u9898\uff01"}),"\n",(0,s.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u4e0d\u53ef\u80fd\u5b8c\u5168\u5217\u51fa\u5b83\u4eec\u3002\u53ea\u8981\u8bb0\u4f4f\u4e00\u4e2a\u539f\u5219\uff1a"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u671f\u5f85\u60a8\u7684\u4efb\u4f55\u56de\u590d\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u4e8e\u60a8\u5df2\u51c6\u5907\u597d\u901a\u8fc7PR\u6539\u5584Seata\uff0c\u56e0\u6b64\u5efa\u8bae\u60a8\u5728\u6b64\u5904\u67e5\u770bPR\u89c4\u5219\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/CONTRIBUTING.md#workspace-preparation",children:"\u5de5\u4f5c\u51c6\u5907"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/CONTRIBUTING.md#branch-definition",children:"\u5206\u652f\u5b9a\u4e49"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/CONTRIBUTING.md#commit-rules",children:"\u63d0\u4ea4\u89c4\u5219"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/CONTRIBUTING.md#pr-description",children:"PR\u8bf4\u660e"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5de5\u4f5c\u51c6\u5907",children:"\u5de5\u4f5c\u51c6\u5907"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u63d0\u51faPR\uff0c\u6211\u4eec\u5047\u8bbe\u60a8\u5df2\u7ecf\u6ce8\u518c\u4e86GitHub ID\u3002\u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5b8c\u6210\u51c6\u5907\u5de5\u4f5c\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORK"})," Seata\u5206\u652f\u5230\u60a8\u7684\u5b58\u50a8\u5e93\u3002\u8981\u4f7f\u6b64\u5de5\u4f5c\u6709\u6548\uff0c\u60a8\u53ea\u9700\u8981\u5355\u51fb",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata",children:"apache/incubator-seata"}),"\u4e3b\u9875\u53f3\u8fb9\u7684\u6309\u94aeFork \u3002\u7136\u540e\uff0c\u60a8\u5c06\u5728",(0,s.jsx)(n.code,{children:"https://github.com/<your-username>/incubator-seata"}),"\u4e2d",(0,s.jsx)(n.code,{children:"your-username"}),"\u627e\u5230\u60a8\u7684\u5b58\u50a8\u5e93\uff0c\u8fd9\u662f\u60a8\u7684GitHub\u7528\u6237\u540d\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CLONE"}),"\u60a8\u81ea\u5df1\u7684\u5b58\u50a8\u5e93\u4ee5\u5728\u672c\u5730\u8fdb\u884c\u5f00\u53d1\u3002\u7528\u4e8e",(0,s.jsx)(n.code,{children:"git clone git@github.com:<your-username>/seata.git"}),"\u5c06\u5b58\u50a8\u5e93\u514b\u9686\u5230\u672c\u5730\u8ba1\u7b97\u673a\u3002\u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u65b0\u5206\u652f\u6765\u5b8c\u6210\u60a8\u5e0c\u671b\u8fdb\u884c\u7684\u66f4\u6539\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Set Remote"}),"\u4e0a\u6e38\u8bbe\u7f6e\u4e3a",(0,s.jsx)(n.code,{children:"git@github.com:apache/incubator-seata.git"}),"\u4f7f\u7528\u4ee5\u4e0b\u4e24\u4e2a\u547d\u4ee4\uff1a"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git remote add upstream git@github.com:apache/incubator-seata.git\ngit remote set-url --push upstream no-pushing\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u6b64\u8fdc\u7a0b\u8bbe\u7f6e\uff0c\u60a8\u53ef\u4ee5\u50cf\u8fd9\u6837\u68c0\u67e5git\u8fdc\u7a0b\u914d\u7f6e\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ git remote -v\norigin     git@github.com:<your-username>/seata.git (fetch)\norigin     git@github.com:<your-username>/seata.git (push)\nupstream   git@github.com:apache/incubator-seata.git (fetch)\nupstream   no-pushing (push)\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u52a0\u4e0a\u8fd9\u4e00\u70b9\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u5c06\u672c\u5730\u5206\u652f\u4e0e\u4e0a\u6e38\u5206\u652f\u540c\u6b65\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u5206\u652f\u5b9a\u4e49",children:"\u5206\u652f\u5b9a\u4e49"}),"\n",(0,s.jsxs)(n.p,{children:["\u73b0\u5728\uff0c\u6211\u4eec\u5047\u8bbe\u901a\u8fc7\u62c9\u53d6\u8bf7\u6c42\u6240\u505a\u7684\u6240\u6709\u8d21\u732e\u90fd\u662f\u9488\u5bf9Seata\u4e2d\u7684",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/tree/develop",children:"\u5206\u652f\u53d1\u5c55"}),"\u3002\u5728\u505a\u51fa\u8d21\u732e\u4e4b\u524d\uff0c\u4e86\u89e3\u5206\u652f\u5b9a\u4e49\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f5c\u4e3a\u8d21\u732e\u8005\uff0c\u8bf7\u518d\u6b21\u8bb0\u4f4f\uff0c\u901a\u8fc7\u62c9\u53d6\u8bf7\u6c42\u8fdb\u884c\u7684\u6bcf\u4e2a\u8d21\u732e\u90fd\u662f\u4e3a\u4e86\u5206\u652f\u53d1\u5c55\u3002\u5728Seata\u9879\u76ee\u4e2d\uff0c\u8fd8\u6709\u5176\u4ed6\u51e0\u4e2a\u5206\u652f\uff0c\u6211\u4eec\u901a\u5e38\u79f0\u5b83\u4eec\u4e3a\u53d1\u5e03\u5206\u652f\uff08\u4f8b\u59820.6.0\u30010.6.1\uff09\uff0c\u529f\u80fd\u5206\u652f\uff0c\u4fee\u8865\u7a0b\u5e8f\u5206\u652f\u548c\u4e3b\u5206\u652f\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6b63\u5f0f\u53d1\u5e03\u7248\u672c\u65f6\uff0c\u5c06\u6709\u4e00\u4e2a\u53d1\u5e03\u5206\u652f\uff0c\u5e76\u4ee5\u7248\u672c\u53f7\u547d\u540d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53d1\u5e03\u4e4b\u540e\uff0c\u6211\u4eec\u5c06\u53d1\u5e03\u5206\u652f\u7684\u63d0\u4ea4\u5408\u5e76\u5230master\u5206\u652f\u4e2d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u53d1\u73b0\u67d0\u4e2a\u7248\u672c\u4e2d\u5b58\u5728\u9519\u8bef\u65f6\uff0c\u6211\u4eec\u5c06\u51b3\u5b9a\u5728\u66f4\u9ad8\u7248\u672c\u4e2d\u8fdb\u884c\u4fee\u590d\u6216\u5728\u7279\u5b9a\u4fee\u8865\u7a0b\u5e8f\u7248\u672c\u4e2d\u8fdb\u884c\u4fee\u590d\u3002\u5f53\u6211\u4eec\u51b3\u5b9a\u4fee\u590d\u6b64\u4fee\u8865\u7a0b\u5e8f\u7248\u672c\u65f6\uff0c\u6211\u4eec\u5c06\u6839\u636e\u76f8\u5e94\u7684\u53d1\u884c\u5206\u652f\u68c0\u51fa\u8be5\u4fee\u8865\u7a0b\u5e8f\u5206\u652f\uff0c\u6267\u884c\u4ee3\u7801\u4fee\u590d\u548c\u9a8c\u8bc1\uff0c\u7136\u540e\u5c06\u5176\u5408\u5e76\u5230\u5f00\u53d1\u5206\u652f\u548cmaster\u5206\u652f\u4e2d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u66f4\u5927\u7684\u529f\u80fd\uff0c\u6211\u4eec\u5c06\u62c9\u51fa\u529f\u80fd\u5206\u652f\u4ee5\u8fdb\u884c\u5f00\u53d1\u548c\u9a8c\u8bc1\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u63d0\u4ea4\u89c4\u5219",children:"\u63d0\u4ea4\u89c4\u5219"}),"\n",(0,s.jsx)(n.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u5728Seata\u4e2d\uff0c\u6211\u4eec\u5728\u63d0\u4ea4\u65f6\u8981\u8ba4\u771f\u5bf9\u5f85\u4e24\u4e2a\u89c4\u5219\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/CONTRIBUTING.md#commit-message",children:"\u63d0\u4ea4\u8baf\u606f"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/CONTRIBUTING.md#commit-content",children:"\u63d0\u4ea4\u5185\u5bb9"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u63d0\u4ea4\u8baf\u606f",children:"\u63d0\u4ea4\u8baf\u606f"}),"\n",(0,s.jsxs)(n.p,{children:["\u63d0\u4ea4\u6d88\u606f\u53ef\u4ee5\u5e2e\u52a9\u5ba1\u7a3f\u4eba\u66f4\u597d\u5730\u4e86\u89e3\u63d0\u4ea4\u7684PR\u7684\u76ee\u7684\u3002\u5b83\u4e5f\u53ef\u4ee5\u5e2e\u52a9\u52a0\u5feb\u4ee3\u7801\u5ba1\u67e5\u8fc7\u7a0b\u3002\u6211\u4eec\u9f13\u52b1\u8d21\u732e\u8005",(0,s.jsx)(n.strong,{children:"\u6e05\u695a\u660e\u767d"}),"\u63d0\u4ea4\u6d88\u606f\u800c\u4e0d\u662f\u6a21\u68f1\u4e24\u53ef\u7684\u6d88\u606f\u3002\u901a\u5e38\uff0c\u6211\u4eec\u63d0\u5021\u4ee5\u4e0b\u63d0\u4ea4\u6d88\u606f\u7c7b\u578b\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"docs\uff1axxxx\u3002\u4f8b\u5982\uff0c\u201c docs\uff1a\u6dfb\u52a0\u6709\u5173Seata\u7fa4\u96c6\u5b89\u88c5\u7684\u6587\u6863\u201d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"feature\uff1axxxx\u3002\u4f8b\u5982\uff0c\u201c\u65b0\u529f\u80fd\uff1a\u5728AT\u6a21\u5f0f\u4e0b\u652f\u6301oracle\u201d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"bugfix\uff1axxxx\u3002\u4f8b\u5982\uff0c\u201c\u9519\u8bef\u4fee\u6b63\uff1a\u4fee\u6b63\u4e86\u8f93\u5165nil\u53c2\u6570\u65f6\u7684\u9519\u8bef\u201d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"refactor\uff1axxxx\u3002\u4f8b\u5982\uff0c\u201c\u91cd\u6784\uff1a\u7b80\u5316\u4ee5\u4f7f\u4ee3\u7801\u66f4\u5177\u53ef\u8bfb\u6027\u201d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"test\uff1axxx\u3002\u4f8b\u5982\uff0c\u201c\u6d4b\u8bd5\uff1a\u4e3afunc InsertIntoArray\u6dfb\u52a0\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\u201d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5176\u4ed6\u53ef\u8bfb\u548c\u663e\u5f0f\u7684\u8868\u8fbe\u65b9\u5f0f\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u53e6\u4e00\u65b9\u9762\uff0c\u6211\u4eec\u4e0d\u9f13\u52b1\u6350\u52a9\u8005\u50cf\u4ee5\u4e0b\u65b9\u5f0f\u63d0\u4ea4\u6d88\u606f\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.del,{children:"\u4fee\u6b63\u9519\u8bef"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.del,{children:"\u66f4\u65b0"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.del,{children:"\u6dfb\u52a0\u6587\u6863"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u8ff7\u8def\u4e86\uff0c\u8bf7\u53c2\u9605\u300a",(0,s.jsx)(n.a,{href:"http://chris.beams.io/posts/git-commit/",children:"\u5982\u4f55\u7f16\u5199Git\u63d0\u4ea4\u6d88\u606f"}),"\u300b\u4f5c\u4e3a\u5f00\u59cb\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u63d0\u4ea4\u5185\u5bb9",children:"\u63d0\u4ea4\u5185\u5bb9"}),"\n",(0,s.jsx)(n.p,{children:"\u63d0\u4ea4\u5185\u5bb9\u8868\u793a\u4e00\u6b21\u63d0\u4ea4\u4e2d\u5305\u542b\u7684\u6240\u6709\u5185\u5bb9\u66f4\u6539\u3002\u6211\u4eec\u6700\u597d\u5c06\u5185\u5bb9\u5305\u542b\u5728\u4e00\u4e2a\u63d0\u4ea4\u4e2d\uff0c\u8fd9\u6837\u53ef\u4ee5\u5728\u6ca1\u6709\u4efb\u4f55\u5176\u4ed6\u63d0\u4ea4\u5e2e\u52a9\u7684\u60c5\u51b5\u4e0b\u652f\u6301\u5ba1\u9605\u8005\u7684\u5b8c\u6574\u5ba1\u9605\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u4e00\u6b21\u63d0\u4ea4\u4e2d\u7684\u5185\u5bb9\u53ef\u4ee5\u4f20\u9012CI\u4ee5\u907f\u514d\u4ee3\u7801\u6df7\u4e71\u3002\u7b80\u800c\u8a00\u4e4b\uff0c\u6211\u4eec\u8981\u8bb0\u4f4f\u4e09\u4e2a\u5c0f\u89c4\u5219\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u907f\u514d\u5728\u63d0\u4ea4\u4e2d\u8fdb\u884c\u5f88\u5927\u7684\u66f4\u6539\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u6bcf\u6b21\u63d0\u4ea4\u5747\u5b8c\u6574\u4e14\u53ef\u5ba1\u67e5\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u63d0\u4ea4\u65f6\u68c0\u67e5git config\uff08",(0,s.jsx)(n.code,{children:"user.name"}),"\uff0c",(0,s.jsx)(n.code,{children:"user.email"}),"\uff09\u4ee5\u786e\u4fdd\u5b83\u4e0e\u60a8\u7684github ID\u76f8\u5173\u8054\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u53e6\u5916\uff0c\u5728\u4ee3\u7801\u66f4\u6539\u90e8\u5206\uff0c\u6211\u4eec\u5efa\u8bae\u6240\u6709\u8d21\u732e\u8005\u90fd\u5e94\u9605\u8bfb",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/CONTRIBUTING.md#code-style",children:"Seata"}),"\u7684",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/CONTRIBUTING.md#code-style",children:"\u4ee3\u7801\u6837\u5f0f"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u65e0\u8bba\u63d0\u4ea4\u6d88\u606f\u8fd8\u662f\u63d0\u4ea4\u5185\u5bb9\uff0c\u6211\u4eec\u90fd\u66f4\u52a0\u6ce8\u91cd\u4ee3\u7801\u5ba1\u67e5\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"pr-\u8bf4\u660e",children:"PR \u8bf4\u660e"}),"\n",(0,s.jsxs)(n.p,{children:["PR\u662f\u66f4\u6539Seata\u9879\u76ee\u6587\u4ef6\u7684\u552f\u4e00\u65b9\u6cd5\u3002\u4e3a\u4e86\u5e2e\u52a9\u5ba1\u7a3f\u4eba\u66f4\u597d\u5730\u5b9e\u73b0\u76ee\u6807\uff0cPR \u8bf4\u660e\u4e0d\u80fd\u592a\u8be6\u7ec6\u3002\u6211\u4eec\u9f13\u52b1\u8d21\u732e\u8005\u9075\u5faa",(0,s.jsx)(n.a,{href:"https://github.com/apache/incubator-seata/blob/develop/.github/PULL_REQUEST_TEMPLATE.md",children:"PR\u6a21\u677f"}),"\u5b8c\u6210\u8bf7\u6c42\u8bf7\u6c42\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6d4b\u8bd5\u7528\u4f8b\u8d21\u732e",children:"\u6d4b\u8bd5\u7528\u4f8b\u8d21\u732e"}),"\n",(0,s.jsx)(n.p,{children:"\u4efb\u4f55\u6d4b\u8bd5\u7528\u4f8b\u90fd\u5c06\u53d7\u5230\u6b22\u8fce\u3002\u5f53\u524d\uff0cSeata\u529f\u80fd\u6d4b\u8bd5\u7528\u4f8b\u662f\u9ad8\u5ea6\u4f18\u5148\u7684\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e\u5355\u5143\u6d4b\u8bd5\uff0c\u60a8\u9700\u8981\u521b\u5efa\u4e00\u4e2a",(0,s.jsx)(n.code,{children:"xxxTest.java"}),"\u5728\u540c\u4e00\u6a21\u5757\u7684\u6d4b\u8bd5\u76ee\u5f55\u4e2d\u547d\u540d\u7684\u6d4b\u8bd5\u6587\u4ef6\u3002\u63a8\u8350\u60a8\u4f7f\u7528junit5 UT\u6846\u67b6"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u96c6\u6210\u6d4b\u8bd5\uff0c\u60a8\u53ef\u4ee5\u5c06\u96c6\u6210\u6d4b\u8bd5\u653e\u5728\u6d4b\u8bd5\u76ee\u5f55\u6216seata-test\u6a21\u5757\u4e2d\u3002\u5efa\u8bae\u4f7f\u7528 mockito \u6d4b\u8bd5\u6846\u67b6\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u81f4\u529b\u4e8e\u5e2e\u52a9\u4efb\u4f55\u4e8b\u60c5",children:"\u81f4\u529b\u4e8e\u5e2e\u52a9\u4efb\u4f55\u4e8b\u60c5"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u9009\u62e9GitHub\u4f5c\u4e3aSeata\u5408\u4f5c\u7684\u4e3b\u8981\u573a\u6240\u3002\u56e0\u6b64\uff0cSeata\u7684\u6700\u65b0\u66f4\u65b0\u59cb\u7ec8\u5728\u8fd9\u91cc\u3002\u5c3d\u7ba1\u901a\u8fc7PR\u6350\u6b3e\u662f\u4e00\u79cd\u660e\u786e\u7684\u5e2e\u52a9\u65b9\u5f0f\uff0c\u4f46\u6211\u4eec\u4ecd\u7136\u547c\u5401\u5176\u4ed6\u65b9\u5f0f\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5982\u679c\u53ef\u4ee5\u7684\u8bdd\uff0c\u56de\u590d\u4ed6\u4eba\u7684\u95ee\u9898\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u5e2e\u52a9\u89e3\u51b3\u5176\u4ed6\u7528\u6237\u7684\u95ee\u9898\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u5e2e\u52a9\u5ba1\u67e5\u4ed6\u4eba\u7684PR\u8bbe\u8ba1\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u5e2e\u52a9\u5ba1\u67e5PR\u4e2d\u5176\u4ed6\u4eba\u7684\u4ee3\u7801\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u8ba8\u8bba\u6709\u5173Seata\u7684\u95ee\u9898\uff0c\u4ee5\u4f7f\u4e8b\u60c5\u66f4\u52a0\u6e05\u6670\uff1b"}),"\n",(0,s.jsx)(n.li,{children:"\u5728GitHub\u4e4b\u5916\u5021\u5bfcSeata\u6280\u672f;"}),"\n",(0,s.jsx)(n.li,{children:"\u5728Seata\u4e0a\u5199\u535a\u5ba2\uff0c\u7b49\u7b49\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4ee3\u7801\u98ce\u683c",children:"\u4ee3\u7801\u98ce\u683c"}),"\n",(0,s.jsx)(n.p,{children:"Seata\u4ee3\u7801\u6837\u5f0f\u7b26\u5408\u963f\u91cc\u5df4\u5df4Java\u7f16\u7801\u51c6\u5219\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u6307\u5bfc\u65b9\u9488",children:"\u6307\u5bfc\u65b9\u9488"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://alibaba.github.io/Alibaba-Java-Coding-Guidelines/",children:"\u963f\u91cc\u5df4\u5df4Java\u7f16\u7801\u6307\u5357"})}),"\n",(0,s.jsx)(n.h3,{id:"ide\u63d2\u4ef6\u5b89\u88c5\u4e0d\u5fc5\u8981",children:"IDE\u63d2\u4ef6\u5b89\u88c5\uff08\u4e0d\u5fc5\u8981\uff09"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"\u5982\u679c\u8981\u5728\u7f16\u7801\u65f6\u53d1\u73b0\u95ee\u9898\uff0c\u5219\u65e0\u9700\u5b89\u88c5\u3002"})}),"\n",(0,s.jsx)(n.h4,{id:"idea-ide",children:"idea IDE"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/alibaba/p3c/blob/master/idea-plugin/README.md",children:"p3c-idea-plugin-install"})}),"\n",(0,s.jsx)(n.h4,{id:"eclipse-ide",children:"eclipse IDE"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/alibaba/p3c/blob/master/eclipse-plugin/README.md",children:"p3c-eclipse-plugin-install"}),"\n\u603b\u4e4b\uff0c",(0,s.jsx)(n.strong,{children:"\u4efb\u4f55\u5e2e\u52a9\u90fd\u662f\u8d21\u732e\u3002"})]})]})}function o(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>d});var s=i(96540);const l={},r=s.createContext(l);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);