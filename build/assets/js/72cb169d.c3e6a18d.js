"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[5561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),g=a,f=s["".concat(c,".").concat(g)]||s[g]||m[g]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u5feb\u901f\u642d\u5efa Element Plus \u5f00\u53d1\u811a\u624b\u67b6",authors:["xiongchun"],tags:["\u5ba2\u6237\u7aef\u5f00\u53d1","Web","Element Plus"],date:"2020-01-9",hide_table_of_contents:!1,slug:"element-plus-webpack"},l=void 0,i={permalink:"/blog/element-plus-webpack",source:"@site/blog/\u5feb\u901f\u642d\u5efa Element Plus \u5f00\u53d1\u811a\u624b\u67b6.md",title:"\u5feb\u901f\u642d\u5efa Element Plus \u5f00\u53d1\u811a\u624b\u67b6",description:"Element Plus \u662f\u57fa\u4e8e Vue 3\uff0c\u9762\u5411\u8bbe\u8ba1\u5e08\u548c\u5f00\u53d1\u8005\u7684 UI \u7ec4\u4ef6\u5e93\u3002",date:"2020-01-09T00:00:00.000Z",formattedDate:"2020\u5e741\u67089\u65e5",tags:[{label:"\u5ba2\u6237\u7aef\u5f00\u53d1",permalink:"/blog/tags/\u5ba2\u6237\u7aef\u5f00\u53d1"},{label:"Web",permalink:"/blog/tags/web"},{label:"Element Plus",permalink:"/blog/tags/element-plus"}],readingTime:2.05,hasTruncateMarker:!0,authors:[{name:"xiongchun",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiongchun.pulanit.com/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u5feb\u901f\u642d\u5efa Element Plus \u5f00\u53d1\u811a\u624b\u67b6",authors:["xiongchun"],tags:["\u5ba2\u6237\u7aef\u5f00\u53d1","Web","Element Plus"],date:"2020-01-9",hide_table_of_contents:!1,slug:"element-plus-webpack"},prevItem:{title:"\u57fa\u4e8e Lock4j \u7684\u5206\u5e03\u5f0f\u9501\u6700\u4f73\u5b9e\u8df5",permalink:"/blog/pangu-dev-framework-distributed-lock"},nextItem:{title:"\u57fa\u4e8e Laying Cache \u7684\u5206\u5e03\u5f0f\u591a\u7ea7\u7f13\u5b58\u65b9\u6848",permalink:"/blog/pangu-dev-framework-laying-cache"}},c={authorsImageUrls:[void 0]},u=[],p={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://element-plus.gitee.io/zh-CN"},"Element Plus")," \u662f\u57fa\u4e8e Vue 3\uff0c\u9762\u5411\u8bbe\u8ba1\u5e08\u548c\u5f00\u53d1\u8005\u7684 UI \u7ec4\u4ef6\u5e93\u3002"))}s.isMDXComponent=!0}}]);