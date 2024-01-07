"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[3929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,g=c["".concat(u,".").concat(m)]||c[m]||b[m]||o;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(7462),n=r(7294),o=r(6010),l=r(2389),i=r(7392),u=r(7094),s=r(2466);const p="tabList__CuJ",c="tabItem_LNqP";function b(e){const{lazy:t,block:r,defaultValue:l,values:b,groupId:m,className:g}=e,d=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=b??d.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),h=(0,i.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??d.find((e=>e.props.default))?.props.value??d[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:T}=(0,u.U)(),[k,P]=(0,n.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:D}=(0,s.o5)();if(null!=m){const e=y[m];null!=e&&e!==k&&f.some((t=>t.value===e))&&P(e)}const w=e=>{const t=e.currentTarget,r=O.indexOf(t),a=f[r].value;a!==k&&(D(t),P(a),null!=m&&T(m,String(a)))},C=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;t=O[r]??O[0];break}case"ArrowLeft":{const r=O.indexOf(e.currentTarget)-1;t=O[r]??O[O.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},g)},f.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>O.push(e),onKeyDown:C,onClick:w},l,{className:(0,o.Z)("tabs__item",c,l?.className,{"tabs__item--active":k===t})}),r??t)}))),t?(0,n.cloneElement)(d.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},d.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function m(e){const t=(0,l.Z)();return n.createElement(b,(0,a.Z)({key:String(t)},e))}},236:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));r(5488),r(5162);const o={title:"\u57fa\u4e8e Dubbo3 \u7684 Triple \u534f\u8bae\u5b9e\u73b0\u6d88\u606f\u7684\u6d41\u5f0f\u901a\u4fe1",authors:["xiongchun"],tags:["Dubbo3","Triple","\u6d88\u606f\u63a8\u9001","\u6d41\u5f0f\u901a\u4fe1","\u670d\u52a1\u7aef\u5f00\u53d1"],date:"2023-7-20",hide_table_of_contents:!1,slug:"dubbo/triple/stream_push"},l=void 0,i={permalink:"/home/blog/dubbo/triple/stream_push",source:"@site/blog/\u57fa\u4e8e Dubbo3 \u7684 Triple \u534f\u8bae\u5b9e\u73b0\u6d88\u606f\u6d41\u5f0f\u901a\u4fe1.md",title:"\u57fa\u4e8e Dubbo3 \u7684 Triple \u534f\u8bae\u5b9e\u73b0\u6d88\u606f\u7684\u6d41\u5f0f\u901a\u4fe1",description:"Apache Dubbo \u7684\u5927\u7248\u672c Dubbo3 \u53d1\u5e03\u6709\u4e00\u6bb5\u65f6\u95f4\u4e86\u3002\u6700\u8fd1\u82b1\u65f6\u95f4\u770b\u4e86\u4e00\u4e0b\uff0c\u6700\u4e3a\u4eae\u773c\u7684\u5c31\u662f\u63a8\u51fa\u4e86\u5168\u65b0\u7684\u57fa\u4e8e HTTP/2 \u4e14\u5b8c\u5168\u517c\u5bb9 gRPC \u7684 Triple \u901a\u4fe1\u534f\u8bae\u3002 Triple \u534f\u8bae\u4f7f\u7528 Protocol Buffers \u4f5c\u4e3a\u5e8f\u5217\u5316\u683c\u5f0f\uff0c\u4f46 Triple \u5b9e\u73b0\u5e76\u4e0d\u7ed1\u5b9a IDL\uff0c\u6bd4\u5982\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Java Interface \u5b9a\u4e49\u548c\u53d1\u5e03 Triple \u670d\u52a1\u3002\u8fd9\u60f3\u5fc5\u662f\u4e60\u60ef\u4e86\u9762\u5411 Java \u63a5\u53e3\u7f16\u7a0b\u7684\u7528\u6237\u7684\u798f\u97f3\u554a\uff0c\u5426\u5219\u6bcf\u4e2a\u670d\u52a1\u90fd\u5f97\u53bb\u5b9a\u4e49\u4e00\u4e2a IDL \u7684\u8bdd\u5c31\u592a\u7e41\u7410\u4e86\u3002Triple \u534f\u8bae\u5b8c\u5168\u517c\u5bb9 gRPC \u7684\u610f\u601d\u5c31\u662f\u8bf4\uff0cTriple \u6d88\u8d39\u7aef\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u6ce8\u518c\u5230 Dubbo \u670d\u52a1\u4e2d\u5fc3\u7684 gRPC \u63d0\u4f9b\u8005\uff0cgRPC\u7684\u6d88\u8d39\u7aef\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 Triple \u63d0\u4f9b\u8005\u3002\uff08\u6ce8\u610f\uff1aTriple \u534f\u8bae\u81ea\u8eab\u5e76\u4e0d\u4f9d\u8d56 gRPC, \u53ea\u662f\u534f\u8bae\u5b9e\u73b0\u4e0a\u517c\u5bb9\u4e86 gRPC \u89c4\u8303\uff0cTriple \u4ec5\u4f9d\u8d56 protobuf-java \u505a\u5e8f\u5217\u5316\uff09",date:"2023-07-20T00:00:00.000Z",formattedDate:"2023\u5e747\u670820\u65e5",tags:[{label:"Dubbo3",permalink:"/home/blog/tags/dubbo-3"},{label:"Triple",permalink:"/home/blog/tags/triple"},{label:"\u6d88\u606f\u63a8\u9001",permalink:"/home/blog/tags/\u6d88\u606f\u63a8\u9001"},{label:"\u6d41\u5f0f\u901a\u4fe1",permalink:"/home/blog/tags/\u6d41\u5f0f\u901a\u4fe1"},{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/home/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"}],readingTime:7.27,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u5927\u718a",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiongchun.pulanit.com/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u57fa\u4e8e Dubbo3 \u7684 Triple \u534f\u8bae\u5b9e\u73b0\u6d88\u606f\u7684\u6d41\u5f0f\u901a\u4fe1",authors:["xiongchun"],tags:["Dubbo3","Triple","\u6d88\u606f\u63a8\u9001","\u6d41\u5f0f\u901a\u4fe1","\u670d\u52a1\u7aef\u5f00\u53d1"],date:"2023-7-20",hide_table_of_contents:!1,slug:"dubbo/triple/stream_push"},prevItem:{title:"\u5927\u8bed\u8a00\u6a21\u578b\u4e89\u9738\u8d5b\uff0c\u6587\u5fc3\u4e00\u8a00 VS Bard VS ChatGPT",permalink:"/home/blog/llm-baidu-yiyan-google-bard-openai-chatgpt"},nextItem:{title:"\u57fa\u4e8e Zipkin \u548c OpenTelemetry Java Agent \u5b9e\u73b0\u7cfb\u7edf\u8c03\u7528\u94fe\u8def\u8ddf\u8e2a",permalink:"/home/blog/observability/zipkin-opentelemetry-java-agent-tracing-quickstart"}},u={authorsImageUrls:[void 0]},s=[],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cn.dubbo.apache.org/en/"},"Apache Dubbo")," \u7684\u5927\u7248\u672c Dubbo3 \u53d1\u5e03\u6709\u4e00\u6bb5\u65f6\u95f4\u4e86\u3002\u6700\u8fd1\u82b1\u65f6\u95f4\u770b\u4e86\u4e00\u4e0b\uff0c\u6700\u4e3a\u4eae\u773c\u7684\u5c31\u662f\u63a8\u51fa\u4e86\u5168\u65b0\u7684\u57fa\u4e8e HTTP/2 \u4e14\u5b8c\u5168\u517c\u5bb9 gRPC \u7684 Triple \u901a\u4fe1\u534f\u8bae\u3002 Triple \u534f\u8bae\u4f7f\u7528 Protocol Buffers \u4f5c\u4e3a\u5e8f\u5217\u5316\u683c\u5f0f\uff0c\u4f46 Triple \u5b9e\u73b0\u5e76\u4e0d\u7ed1\u5b9a IDL\uff0c\u6bd4\u5982\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Java Interface \u5b9a\u4e49\u548c\u53d1\u5e03 Triple \u670d\u52a1\u3002\u8fd9\u60f3\u5fc5\u662f\u4e60\u60ef\u4e86\u9762\u5411 Java \u63a5\u53e3\u7f16\u7a0b\u7684\u7528\u6237\u7684\u798f\u97f3\u554a\uff0c\u5426\u5219\u6bcf\u4e2a\u670d\u52a1\u90fd\u5f97\u53bb\u5b9a\u4e49\u4e00\u4e2a IDL \u7684\u8bdd\u5c31\u592a\u7e41\u7410\u4e86\u3002Triple \u534f\u8bae\u5b8c\u5168\u517c\u5bb9 gRPC \u7684\u610f\u601d\u5c31\u662f\u8bf4\uff0cTriple \u6d88\u8d39\u7aef\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u6ce8\u518c\u5230 Dubbo \u670d\u52a1\u4e2d\u5fc3\u7684 gRPC \u63d0\u4f9b\u8005\uff0cgRPC\u7684\u6d88\u8d39\u7aef\u4e5f\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 Triple \u63d0\u4f9b\u8005\u3002\uff08\u6ce8\u610f\uff1aTriple \u534f\u8bae\u81ea\u8eab\u5e76\u4e0d\u4f9d\u8d56 gRPC, \u53ea\u662f\u534f\u8bae\u5b9e\u73b0\u4e0a\u517c\u5bb9\u4e86 gRPC \u89c4\u8303\uff0cTriple \u4ec5\u4f9d\u8d56 protobuf-java \u505a\u5e8f\u5217\u5316\uff09"))}c.isMDXComponent=!0}}]);