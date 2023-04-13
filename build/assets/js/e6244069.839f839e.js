"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[8393],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},g="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),g=u(r),s=a,c=g["".concat(i,".").concat(s)]||g[s]||k[s]||l;return r?n.createElement(c,o(o({ref:t},m),{},{components:r})):n.createElement(c,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[g]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={title:"\u76d8\u53e4\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:"2023-2-2",hide_table_of_contents:!1,slug:"pangu-dev-framework-intro"},o=void 0,p={permalink:"/blog/blog/pangu-dev-framework-intro",source:"@site/blog/\u76d8\u53e4\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb.md",title:"\u76d8\u53e4\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb",description:"\u300c\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u300d\u662f\u4e00\u5957\u8f7b\u91cf\u7a33\u5065\u7684\u5de5\u4e1a\u7ea7\u524d\u3001\u4e2d\u3001\u540e\u53f0\u4e09\u7ef4\u591a\u7aef\u884c\u4e1a\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u57fa\u5ea7\u3002\u57fa\u4e8e\u5546\u4e1a\u53cb\u597d\u7684 Apache-2.0 \u534f\u8bae\u514d\u8d39\u5f00\u6e90\u53d1\u5e03\uff0c\u5e0c\u671b\u4e0e\u5f00\u6e90\u793e\u533a\u4e00\u8d77 \u5206\u6790\u7ecf\u9a8c\u4f20\u9012\u4ef7\u503c\uff0c\u5171\u5efa\u5171\u4eab\u5f00\u6e90\u751f\u6001\u3002",date:"2023-02-02T00:00:00.000Z",formattedDate:"2023\u5e742\u67082\u65e5",tags:[{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/blog/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/blog/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"}],readingTime:7.3,hasTruncateMarker:!0,authors:[{name:"xiongchun",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiongchun.pulanit.com/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u76d8\u53e4\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"],date:"2023-2-2",hide_table_of_contents:!1,slug:"pangu-dev-framework-intro"},prevItem:{title:"\u57fa\u4e8e Seata AT \u6a21\u5f0f\u7684\u5206\u5e03\u5f0f\u4e8b\u52a1\u843d\u5730\u65b9\u6848",permalink:"/blog/blog/pangu-dev-framework-distributed-transaction"},nextItem:{title:"\u76d8\u53e4\u5fae\u670d\u52a1\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb",permalink:"/blog/blog/pangu-framework-service-intro"}},i={authorsImageUrls:[void 0]},u=[{value:"\u751f\u6001\u9879\u76ee",id:"\u751f\u6001\u9879\u76ee",level:2},{value:"\u9002\u7528\u573a\u666f",id:"\u9002\u7528\u573a\u666f",level:2},{value:"\u6838\u5fc3\u4ef7\u503c\u94fe",id:"\u6838\u5fc3\u4ef7\u503c\u94fe",level:2},{value:"\u5e38\u89c1 FAQ: \u76d8\u53e4\u5fae\u670d\u52a1\u6846\u67b6\uff08Dubbo \u751f\u6001\uff09\u548c Spring Cloud \u7684\u5bf9\u6bd4\u5206\u6790\uff1f",id:"\u5e38\u89c1-faq-\u76d8\u53e4\u5fae\u670d\u52a1\u6846\u67b6dubbo-\u751f\u6001\u548c-spring-cloud-\u7684\u5bf9\u6bd4\u5206\u6790",level:2},{value:"\u751f\u6001\u67b6\u6784\u56fe",id:"\u751f\u6001\u67b6\u6784\u56fe",level:2}],m={toc:u};function g(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u300c",(0,a.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"),"\u300d\u662f\u4e00\u5957\u8f7b\u91cf\u7a33\u5065\u7684\u5de5\u4e1a\u7ea7\u524d\u3001\u4e2d\u3001\u540e\u53f0\u4e09\u7ef4\u591a\u7aef\u884c\u4e1a\u6570\u5b57\u5316\u8d4b\u80fd\u5f00\u53d1\u57fa\u5ea7\u3002\u57fa\u4e8e\u5546\u4e1a\u53cb\u597d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache-2.0")," \u534f\u8bae",(0,a.kt)("strong",{parentName:"p"},"\u514d\u8d39\u5f00\u6e90"),"\u53d1\u5e03\uff0c\u5e0c\u671b\u4e0e\u5f00\u6e90\u793e\u533a\u4e00\u8d77 ",(0,a.kt)("strong",{parentName:"p"},"\u5206\u6790\u7ecf\u9a8c\u4f20\u9012\u4ef7\u503c\uff0c\u5171\u5efa\u5171\u4eab\u5f00\u6e90\u751f\u6001"),"\u3002"),(0,a.kt)("h2",{id:"\u751f\u6001\u9879\u76ee"},"\u751f\u6001\u9879\u76ee"),(0,a.kt)("p",null,"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u7531\u5982\u4e0b\u4e09\u4e2a\u5b50\u9879\u76ee\u7ec4\u6210\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/docs/intro"},(0,a.kt)("strong",{parentName:"a"},"\u76d8\u53e4\u5fae\u670d\u52a1\u5f00\u53d1\u6846\u67b6")),(0,a.kt)("br",{parentName:"p"}),"\n","\u4e00\u5957\u6784\u5efa\u4ee5\u300c\u670d\u52a1\u300d\u4e3a\u4e2d\u5fc3\u7684\u73b0\u4ee3\u5e94\u7528\u67b6\u6784\uff0c\u7528\u6237\u53ef\u4ee5\u5f00\u53d1\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5b9e\u73b0\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/admin/intro"},(0,a.kt)("strong",{parentName:"a"},"\u76d8\u53e4\u4e2d\u540e\u53f0\u4e1a\u52a1\u7cfb\u7edf\u5f00\u53d1\u811a\u624b\u67b6")),(0,a.kt)("br",{parentName:"p"}),"\n","\u4e00\u5957\u9884\u7f6e\u4e86\u6743\u9650\u7cfb\u7edf\u7684\u4e2d\u540e\u53f0\u524d\u540e\u7aef\u7edf\u4e00\u89e3\u51b3\u65b9\u6848\uff0c\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u6b64\u5feb\u901f\u642d\u5efa\u4e2d\u540e\u53f0\u4e1a\u52a1\u7cfb\u7edf\u4e8c\u6b21\u5f00\u53d1\u811a\u624b\u67b6\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/app/intro"},(0,a.kt)("strong",{parentName:"a"},"\u76d8\u53e4\u79fb\u52a8\u7aef\u591a\u5e73\u53f0\u5f00\u53d1\u811a\u624b\u67b6")),(0,a.kt)("br",{parentName:"p"}),"\n","\u4e00\u5957\u591a\u5e73\u53f0\u5feb\u901f\u5f00\u53d1\u811a\u624b\u67b6\uff0c\u7528\u6237\u53ef\u4ee5\u5feb\u901f\u5f00\u53d1 Android/IOS App\u3001\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u3001H5 \u5e94\u7528\u3002"))),(0,a.kt)("h2",{id:"\u9002\u7528\u573a\u666f"},"\u9002\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u57fa\u4e8e\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u7684\u524d\u3001\u4e2d\u3001\u540e\u53f0\u4e09\u7ef4\u591a\u7aef\u884c\u4e1a\u6570\u5b57\u5316\u8d4b\u80fd\u80fd\u529b\uff0c\u7528\u6237\u65e2\u80fd\u5feb\u901f\u6784\u5efa\u9762\u5411\uff08\u79fb\u52a8\uff09\u4e92\u8054\u7f51\u7684\u7535\u5546\u3001\u91d1\u878d\u3001\u4e91\u7aef SAAS \u670d\u52a1\u7b49\u5927\u5e76\u53d1\u9ad8\u53ef\u7528\u53ef\u6269\u5c55\u7684\u4e92\u8054\u7f51\u5e94\u7528\u573a\u666f\uff0c\u540c\u65f6\u4e5f\u80fd\u6ee1\u8db3\u8bf8\u5982 ERP \u3001CRM \u7b49\u5404\u79cd\u4f01\u4e1a\u6570\u5b57\u5316\u548c\u5404\u7ea7\u7535\u5b50\u653f\u52a1\u7cfb\u7edf\u7684\u4e2d\u5c0f\u89c4\u6a21\u4e1a\u52a1\u9700\u6c42\u3002"),(0,a.kt)("h2",{id:"\u6838\u5fc3\u4ef7\u503c\u94fe"},"\u6838\u5fc3\u4ef7\u503c\u94fe"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u521d\u7ea7\u7a0b\u5e8f\u5458"),(0,a.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u52a9\u4f60\u6210\u957f\u4e3a\u72ec\u6321\u4e00\u9762\u7684\u5168\u6808\u5f00\u53d1\u653b\u57ce\u72ee\uff0c\u6210\u4e3a\u56e2\u961f\u91cc\u6700\u9753\u7684\u90a3\u4e2a\u4ed4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e2d\u3001\u9ad8\u7ea7\u7a0b\u5e8f\u5458"),(0,a.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u52a9\u4f60\u6210\u957f\u4e3a\u624b\u6301\u9b54\u6756\u7684\u5168\u80fd\u578b\u67b6\u6784\u5e08 or \u6280\u672f\u7816\u5bb6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u67b6\u6784\u5e08\u3001\u6280\u672f\u51b3\u7b56\u8005"),(0,a.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u52a9\u4f60\u89c4\u907f\u6280\u672f\u9009\u578b\u8bd5\u9519\u98ce\u9669\uff0c\u4f18\u5316\u81ea\u5df1\u7684\u67b6\u6784\u5de5\u5177\u7bb1\uff0c\u66f4\u597d\u7684\u4e3a\u4e1a\u52a1\u670d\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4f01\u4e1a\u8001\u677f"),(0,a.kt)("br",{parentName:"li"}),"\u76d8\u53e4\u4e3a\u4f60\u964d\u4f4e\u7528\u4eba\u6210\u672c\uff0c\u592f\u5b9e\u4f01\u4e1a\u6570\u5b57\u5316\u57fa\u5ea7\uff0c\u771f\u6b63\u505a\u5230\u964d\u672c\u589e\u6548\u597d\u5e2e\u624b\uff0c\u6301\u7eed\u52a9\u529b\u4f01\u4e1a\u4e1a\u52a1\u589e\u957f\u3002")),(0,a.kt)("h2",{id:"\u5e38\u89c1-faq-\u76d8\u53e4\u5fae\u670d\u52a1\u6846\u67b6dubbo-\u751f\u6001\u548c-spring-cloud-\u7684\u5bf9\u6bd4\u5206\u6790"},"\u5e38\u89c1 FAQ: \u76d8\u53e4\u5fae\u670d\u52a1\u6846\u67b6\uff08Dubbo \u751f\u6001\uff09\u548c Spring Cloud \u7684\u5bf9\u6bd4\u5206\u6790\uff1f"),(0,a.kt)("p",null,"Dubbo \u751f\u6001 \u548c Spring Cloud \u90fd\u4fa7\u91cd\u4e8e\u5bf9\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u5e38\u89c1\u95ee\u9898\u6a21\u5f0f\u7684\u62bd\u8c61\u548c\u5b9e\u73b0\uff08\u5982\u670d\u52a1\u53d1\u73b0\u3001\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u914d\u7f6e\u7b49\uff09\uff0c\u5f62\u6210\u4e00\u5957\u5fae\u670d\u52a1\u6574\u4f53\u89e3\u51b3\u65b9\u6848\u3002\u540c\u65f6\u90fd\u5bf9 Spring\u3001Spring Boot \u90fd\u505a\u4e86\u5f88\u597d\u7684\u9002\u914d\uff0c\u90fd\u5b8c\u5168\u517c\u5bb9 Spring \u4f53\u7cfb\u7684\u5f00\u53d1\u6a21\u5f0f\u3002\u4f46\u662f\uff0c\u867d\u7136\u4e24\u8005\u6709\u5f88\u591a\u76f8\u4f3c\u4e4b\u5904\uff0c\u7531\u4e8e\u5b83\u4eec\u5728\u8bde\u751f\u80cc\u666f\u4e0e\u67b6\u6784\u8bbe\u8ba1\u4e0a\u7684\u5de8\u5927\u5dee\u5f02\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4e24\u8005\u5728\u6027\u80fd\u3001\u9002\u7528\u7684\u5fae\u670d\u52a1\u96c6\u7fa4\u89c4\u6a21\u3001\u751f\u4ea7\u7a33\u5b9a\u6027\u4fdd\u969c\u3001\u670d\u52a1\u6cbb\u7406\u7b49\u65b9\u9762\u90fd\u6709\u5f88\u5927\u5dee\u5f02\u3002")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spring Cloud \u4f18\u52bf"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a spring \u5bb6\u65cf\u6210\u5458\uff0c\u5929\u751f\u81ea\u5e26\u6d41\u91cf\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e00\u4e9b\u5e38\u7528\u7684\u5fae\u670d\u52a1\u6a21\u5f0f\u505a\u4e86\u62bd\u8c61\u4e14\u8986\u76d6\u8303\u56f4\u8f83\u5e7f\uff0c\u6709\u4e00\u90e8\u5206\u662f Dubbo \u751f\u6001\u6ca1\u6709\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e HTTP \u901a\u4fe1\uff0c\u5355\u4f53\u5f00\u53d1\u6a21\u5f0f\u5207\u6362\u5230\u5fae\u670d\u52a1\u5f00\u53d1\u6a21\u5f0f\u5b66\u4e60\u66f2\u7ebf\u5e73\u6ed1\uff1b\u52a0\u4e0a\u76f8\u5bf9\u5b8c\u5584\u7684\u5165\u95e8\u6587\u6863\u548c starters\uff0c",(0,a.kt)("del",{parentName:"li"},"\u8ba9\u5f00\u53d1\u8005",(0,a.kt)("strong",{parentName:"del"},"\u7b2c\u4e00\u611f\u89c9"),"\u8c8c\u4f3c\u66f4\u7b80\u5355\u6613\u7528"),"\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spring Cloud \u52a3\u52bf"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ea\u63d0\u4f9b\u62bd\u8c61\u6a21\u5f0f\u7684\u5b9a\u4e49\u4e0d\u63d0\u4f9b\u5b98\u65b9\u7a33\u5b9a\u5b9e\u73b0\uff0c\u5f00\u53d1\u8005\u53ea\u80fd\u5bfb\u6c42\u7c7b\u4f3c Netflix\u3001Alibaba\u3001Azure \u7b49\u4e0d\u540c\u5382\u5546\u7684\u5b9e\u73b0\u5957\u4ef6\uff0c\u800c\u6bcf\u4e2a\u5382\u5546\u652f\u6301\u7684\u5b8c\u5584\u5ea6\u3001\u7a33\u5b9a\u6027\u3001\u6d3b\u8dc3\u5ea6\u5404\u5f02\u3002\u5bfc\u81f4\u76f8\u5173\u6280\u672f\u6808\u76f8\u5bf9\u590d\u6742\u6df7\u4e71\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u5fae\u670d\u52a1\u5168\u5bb6\u6876\u7684\u7f8e\u8a89\u4f46\u5374\u4e0d\u662f\u80fd\u62ff\u6765\u5c31\u7528\u7684\u5168\u5bb6\u6876\u3002Demo \u4e0a\u624b\u5bb9\u6613\uff0c\u4f46\u96be\u4ee5\u5f62\u6210\u7a33\u5b9a\u3001\u6301\u7eed\u589e\u957f\u7684\u4f01\u4e1a\u6570\u5b57\u8d44\u4ea7\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u6cbb\u7406\u80fd\u529b\u76f8\u5bf9\u7b80\u5355\u4e14\u4e0d\u591f\u7075\u6d3b\u3002\u7f16\u7a0b\u6a21\u578b\u4e0e HTTP \u901a\u4fe1\u534f\u8bae\u7ed1\u5b9a\uff0c\u5728\u6027\u80fd\u3001\u4e0e\u5176\u4ed6 RPC \u4f53\u7cfb\u4e92\u901a\u4e0a\u5b58\u5728\u969c\u788d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u603b\u4f53\u67b6\u6784\u4e0e\u5b9e\u73b0\u53ea\u9002\u7528\u4e8e\u5c0f\u89c4\u6a21\u5fae\u670d\u52a1\u96c6\u7fa4\uff0c\u5f53\u96c6\u7fa4\u89c4\u6a21\u589e\u957f\u540e\u5c31\u4f1a\u9047\u5230\u5730\u5740\u63a8\u9001\u6548\u7387\u3001\u5185\u5b58\u5360\u7528\u7b49\u5404\u79cd\u74f6\u9888\u7684\u95ee\u9898\uff0c\u4f46\u6b64\u65f6\u8fc1\u79fb\u5230\u5176\u4ed6\u4f53\u7cfb\u5df2\u7ecf\u79ef\u91cd\u96be\u8fd4\u3002")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u800c\u4ee5\u4e0a\u8fd9\u4e9b\u70b9\uff0c\u90fd\u662f\u76d8\u53e4\u5fae\u670d\u52a1\u6846\u67b6\uff08Dubbo \u751f\u6001\uff09\u7684\u4f18\u52bf\u6240\u5728\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u5b8c\u5168\u652f\u6301 Spring & Spring Boot \u5f00\u53d1\u6a21\u5f0f\u7684\u540c\u65f6\uff0c\u5728\u670d\u52a1\u53d1\u73b0\u3001\u52a8\u6001\u914d\u7f6e\u7b49\u57fa\u7840\u6a21\u5f0f\u4e0a\u63d0\u4f9b\u4e0e Spring Cloud \u5bf9\u7b49\u7684\u80fd\u529b\u548c\u8d85\u8d8a\u592a\u591a\u7684\u7279\u6027\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u76d8\u53e4\u5fae\u670d\u52a1\u6846\u67b6\u7ee7\u627f\u4e86 Dubbo \u751f\u6001\u7684\u4f01\u4e1a\u7ea7\u5fae\u670d\u52a1\u5b9e\u8df5\u548c\u6cbb\u7406\u80fd\u529b\u3002\u5982\uff1a\u4f18\u96c5\u4e0a\u4e0b\u7ebf\u3001\u591a\u6ce8\u518c\u4e2d\u5fc3\u3001\u6d41\u91cf\u7ba1\u7406\u3001\u6743\u91cd\u52a8\u6001\u8c03\u6574\u3001\u6807\u7b7e\u8def\u7531\u3001\u6761\u4ef6\u8def\u7531\u7b49\u3002\u53ef\u652f\u6301\u767e\u4e07\u5b9e\u4f8b\u96c6\u7fa4\u6c34\u5e73\u6269\u5bb9\u7684\u8d85\u5927\u89c4\u6a21\u5fae\u670d\u52a1\u96c6\u7fa4\u3002\u968f\u7740 Dubbo-Go \u7248\u672c\u7684\u6210\u719f\uff0cJava \u548c Go \u5fae\u670d\u52a1\u751f\u6001\u4e92\u8054\u4e92\u901a\u5df2\u7ecf\u53d8\u4e3a\u73b0\u5b9e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u539f\u751f\u6574\u5408 Nacos\u3001Seata\u3001Sentinel\u3001ShenYu \u7b49\u6210\u719f\u7684\u5fae\u670d\u52a1\u751f\u6001\u7ec4\u4ef6\uff0c\u5c01\u88c5\u5404\u79cd Starters \u5e76\u63d0\u4f9b\u4e86\u5982\u672c\u7ad9\u8be6\u5b9e\u4e30\u5bcc\u7684\u6280\u672f\u6587\u6863\u3002\u4e0a\u624b\u548c\u7ef4\u62a4\u975e\u5e38\u7b80\u5355\u4fbf\u6377\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u80fd\u9002\u5e94\u98de\u901f\u589e\u957f\u7684\u4e1a\u52a1\u4fa7\u5bf9\u6280\u672f\u5e73\u53f0\u63d0\u51fa\u7684\u5404\u9879\u6311\u6218\uff0c\u5e76\u5728\u6b63\u786e\u7684\u9053\u8def\u4e0a\u4e0d\u65ad\u79ef\u7d2f\u6709\u6548\u589e\u503c\u7684\u4f01\u4e1a\u6570\u5b57\u8d44\u4ea7\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u7684\u76ee\u6807\u662f\u6253\u9020\u4f01\u4e1a\u5f00\u53d1\u57fa\u5ea7\uff0c\u6784\u5efa\u4f01\u4e1a\u7ea7\u5e94\u7528\uff0c\u5e76\u671f\u5f85\u5f62\u6210\u4f01\u4e1a\u4fdd\u503c\u589e\u503c\u7684\u6570\u5b57\u8d44\u4ea7\uff1b\u800c\u4e14\u5728\u672a\u6765\u7684\u6301\u4e45\u7ef4\u62a4\u4e2d\u80fd\u591f\u66f4\u7701\u5fc3\u3001\u66f4\u7a33\u5b9a\uff0c\u90a3\u4e48\u5efa\u8bae\u4f60\u80fd\u66f4\u6df1\u5165\u7684\u4e86\u89e3 ",(0,a.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/"},"\u76d8\u53e4\u5fae\u670d\u52a1\u6846\u67b6\uff08Dubbo \u751f\u6001\uff09")," \u7684\u4f7f\u7528\u548c\u5176\u63d0\u4f9b\u7684\u80fd\u529b\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bf4\u660e\uff1a\u4e0a\u8ff0\u7ed3\u8bba\u867d\u5df2\u5c3d\u91cf\u4fdd\u6301\u5ba2\u89c2\u4f46\u8003\u8651\u5230\u4e2a\u4eba\u8ba4\u77e5\u6c34\u5e73\u548c\u5148\u5165\u4e3a\u4e3b\u7684\u56e0\u7d20\uff0c\u9519\u6f0f\u4e4b\u5904\u5728\u6240\u96be\u514d\uff0c\u8bf7\u5404\u4f4d\u5ba2\u89c2\u81ea\u884c\u7504\u522b\u5224\u65ad\u3002")),(0,a.kt)("h2",{id:"\u751f\u6001\u67b6\u6784\u56fe"},"\u751f\u6001\u67b6\u6784\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u751f\u6001\u67b6\u6784\u56fe",src:r(7845).Z,title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u751f\u6001\u67b6\u6784\u56fe",width:"1572",height:"1314"})))}g.isMDXComponent=!0},7845:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/34-pangu-framework-840c102ba4cefa6ed6381d0dfb9cd2bf.png"}}]);