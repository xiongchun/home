"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(b,u(u({ref:t},s),{},{components:n})):a.createElement(b,u({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:r,u[1]=o;for(var p=2;p<l;p++)u[p]=n[p];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function u(e){let{children:t,hidden:n,className:u}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,u),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),u=n(2389),o=n(7392),i=n(7094),p=n(2466);const s="tabList__CuJ",d="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:u,values:c,groupId:m,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,i.U)(),[v,w]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=m){const e=f[m];null!=e&&e!==v&&g.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==v&&(S(t),w(a),null!=m&&N(m,String(a)))},I=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},b)},g.map((e=>{let{value:t,label:n,attributes:u}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>x.push(e),onKeyDown:I,onClick:T},u,{className:(0,l.Z)("tabs__item",d,u?.className,{"tabs__item--active":v===t})}),n??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,u.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},9501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),u=n(5162);const o={slug:"pangu-dev-framework-apache-shenyu",title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u4e0b\u901a\u8fc7 ShenYu \u7f51\u5173\u5b9e\u73b0 HTTP \u5230 Dubbo \u670d\u52a1\u7684\u4ee3\u7406",authors:["xiongchun"],tags:["\u4e2d\u95f4\u4ef6","ShenYu","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","\u670d\u52a1\u7aef\u5f00\u53d1"],date:new Date("2022-01-29T00:00:00.000Z"),hide_table_of_contents:!1},i=void 0,p={permalink:"/home/blog/pangu-dev-framework-apache-shenyu",source:"@site/blog/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u96c6\u6210 ShenYu \u7f51\u5173.md",title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u4e0b\u901a\u8fc7 ShenYu \u7f51\u5173\u5b9e\u73b0 HTTP \u5230 Dubbo \u670d\u52a1\u7684\u4ee3\u7406",description:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6 \u63d0\u4f9b\u4e86\u4e24\u79cd\u5b9e\u73b0\u5fae\u670d\u52a1\u7f51\u5173\u7684\u65b9\u6848\uff08\u8be6\u89c1\u8fd9\u91cc\uff09\u3002\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u57fa\u4e8e Apache ShenYu \u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f\u3002",date:"2022-01-29T00:00:00.000Z",formattedDate:"2022\u5e741\u670829\u65e5",tags:[{label:"\u4e2d\u95f4\u4ef6",permalink:"/home/blog/tags/\u4e2d\u95f4\u4ef6"},{label:"ShenYu",permalink:"/home/blog/tags/shen-yu"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/home/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"},{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/home/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"}],readingTime:9.48,hasTruncateMarker:!0,authors:[{name:"\u7a0b\u5e8f\u5458\u8001\u718a",title:"Pangu Framework maintainer",url:"https://xiongchun.pulanit.com",imageURL:"https://xiongchun.github.io/pangu-framework/home/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{slug:"pangu-dev-framework-apache-shenyu",title:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u4e0b\u901a\u8fc7 ShenYu \u7f51\u5173\u5b9e\u73b0 HTTP \u5230 Dubbo \u670d\u52a1\u7684\u4ee3\u7406",authors:["xiongchun"],tags:["\u4e2d\u95f4\u4ef6","ShenYu","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","\u670d\u52a1\u7aef\u5f00\u53d1"],date:"2022-01-29T00:00:00.000Z",hide_table_of_contents:!1},prevItem:{title:"\u57fa\u4e8e Caddy \u90e8\u7f72\u76d8\u53e4 Admin",permalink:"/home/blog/deploy-pangu-admin-by-caddy"},nextItem:{title:"TLog \u52a9\u529b\u76d8\u53e4\u6846\u67b6\u5b9e\u73b0\u5fae\u670d\u52a1\u94fe\u8def\u65e5\u5fd7\u8ffd\u8e2a",permalink:"/home/blog/tlog"}},s={authorsImageUrls:[void 0]},d=[{value:"ShenYu \u7f51\u5173\u4ecb\u7ecd",id:"shenyu-\u7f51\u5173\u4ecb\u7ecd",level:2},{value:"\u76f8\u5173\u540d\u8bcd\u89e3\u91ca",id:"\u76f8\u5173\u540d\u8bcd\u89e3\u91ca",level:3},{value:"\u7f51\u5173\u8c03\u7528\u7ed3\u6784\u56fe",id:"\u7f51\u5173\u8c03\u7528\u7ed3\u6784\u56fe",level:3},{value:"ShenYu \u7f51\u5173\u5b9e\u6218",id:"shenyu-\u7f51\u5173\u5b9e\u6218",level:2},{value:"\u5b89\u88c5\u76f8\u5173\u6a21\u5757",id:"\u5b89\u88c5\u76f8\u5173\u6a21\u5757",level:3},{value:"\u672c\u5730\u914d\u7f6e",id:"\u672c\u5730\u914d\u7f6e",level:3},{value:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e",id:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e",level:4},{value:"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3",id:"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3",level:3},{value:"\u6539\u9020 Dubbo \u670d\u52a1\u7aef\uff0c\u81ea\u52a8\u4e0a\u4f20\u63a5\u53e3\u5143\u6570\u636e",id:"\u6539\u9020-dubbo-\u670d\u52a1\u7aef\u81ea\u52a8\u4e0a\u4f20\u63a5\u53e3\u5143\u6570\u636e",level:4},{value:"\u542f\u52a8\u5165\u53e3",id:"\u542f\u52a8\u5165\u53e3",level:3},{value:"\u7f51\u5173\u8bf7\u6c42URL",id:"\u7f51\u5173\u8bf7\u6c42url",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:4},{value:"\u8bf7\u6c42\u793a\u4f8b",id:"\u8bf7\u6c42\u793a\u4f8b",level:4},{value:"\u672c\u8303\u4f8b\u6e90\u7801",id:"\u672c\u8303\u4f8b\u6e90\u7801",level:3},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],c={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6")," \u63d0\u4f9b\u4e86\u4e24\u79cd\u5b9e\u73b0\u5fae\u670d\u52a1\u7f51\u5173\u7684\u65b9\u6848\uff08",(0,r.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/docs/quick-start/gateway/intro"},"\u8be6\u89c1\u8fd9\u91cc"),"\uff09\u3002\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u57fa\u4e8e Apache ShenYu \u7684\u6cdb\u5316\u8c03\u7528\u6a21\u5f0f\u3002"),(0,r.kt)("h2",{id:"shenyu-\u7f51\u5173\u4ecb\u7ecd"},"ShenYu \u7f51\u5173\u4ecb\u7ecd"),(0,r.kt)("p",null,"ShenYu \u7f51\u5173\u57fa\u4e8e WebFlex \u975e\u963b\u585e\u6a21\u578b\u901a\u8fc7\u6cdb\u5316\u8c03\u7528\u540e\u7aef Dubbo \u670d\u52a1\u3002\u4e0d\u9700\u8981\u5f15\u5165\u670d\u52a1\u63a5\u53e3\u5305\u5373\u53ef\u8c03\u7528\u540e\u7aef Dubbo \u670d\u52a1\u8f6c\u6362\u4e3a HTTP API\u3002\u540c\u65f6\u7f51\u5173\u652f\u6301\u9274\u6743\u3001\u52a8\u6001\u9650\u6d41\u3001\u7194\u65ad\u3001\u9632\u706b\u5899\u3001\u7070\u5ea6\u53d1\u5e03\u7b49\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5b9e\u73b0\u539f\u7406"),(0,r.kt)("br",{parentName:"li"}),"\u57fa\u4e8e Spring Webflex\uff0c\u4f9d\u8d56 Netty \u6846\u67b6\u6216 Servlet 3.1+ \u5bb9\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dubbo \u96c6\u6210"),(0,r.kt)("br",{parentName:"li"}),"\u4e0d\u4f9d\u8d56\u63a5\u53e3 JAR\uff0c\u6cdb\u5316\u8c03\u7528 Dubbo \u670d\u52a1\u3002\uff08\u9700\u8981\u7ef4\u62a4\u63a5\u53e3\u5143\u6570\u636e\uff0c\u6709\u4e00\u5b9a\u7684\u6027\u80fd\u635f\u8017\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6027\u80fd & \u590d\u6742\u5ea6"),(0,r.kt)("br",{parentName:"li"}),"\u7f51\u5173\u81ea\u8eab\u6027\u80fd\u8f83\u9ad8\uff08Webflex\u975e\u963b\u585e\u6a21\u578b\uff09\u3002\u90e8\u7f72\u548c\u8fd0\u7ef4\u7f51\u5173\u7cfb\u7edf\u5e26\u6765\u4e00\u5b9a\u7684\u6210\u672c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5176\u5b83\u7279\u6027"),(0,r.kt)("br",{parentName:"li"}),"\u652f\u6301\u6d41\u91cf\u63a7\u5236\u3001\u9274\u6743\u3001\u7194\u65ad\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u3002")),(0,r.kt)("h3",{id:"\u76f8\u5173\u540d\u8bcd\u89e3\u91ca"},"\u76f8\u5173\u540d\u8bcd\u89e3\u91ca"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shenyu-admin"),(0,r.kt)("br",{parentName:"li"}),"\u7f51\u5173\u63d2\u4ef6\u548c\u5143\u6570\u636e\u4fe1\u606f\u914d\u7f6e\u7ba1\u7406\u540e\u53f0\u3002\u72ec\u7acb JAR\uff0c\u9700\u8981\u5355\u72ec\u90e8\u7f72\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shenyu-gateway"),(0,r.kt)("br",{parentName:"li"}),"\u7f51\u5173\u6a21\u5757\uff0c\u4ee3\u7406 Http \u8bf7\u6c42\uff0c\u6cdb\u5316\u8c03\u7528\u540e\u7aef Dubbo \u670d\u52a1\u3002\u6b64\u6a21\u5757\u8d1f\u8d23\u63a5\u6536 Http \u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u6570\u636e\u540c\u6b65"),(0,r.kt)("br",{parentName:"li"}),"\u6570\u636e\u540c\u6b65\u662f\u6307\u5728 ShenYu-Admin \u540e\u53f0\u64cd\u4f5c\u6570\u636e\u4ee5\u540e\uff0c\u4f7f\u7528\u4f55\u79cd\u7b56\u7565\u5c06\u6570\u636e\u540c\u6b65\u5230 ShenYu Gateway \u7f51\u5173\u6a21\u5757\u3002ShenYu \u5f53\u524d\u652f\u6301 ZooKeeper\u3001WebSocket\u3001Http \u957f\u8f6e\u8be2\u3001Nacos \u3001Etcd \u548c Consul \u8fdb\u884c\u6570\u636e\u540c\u6b65\u3002\u76d8\u53e4\u5f00\u53d1\u4f7f\u7528\u7684\u662f WebSocket \u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u540c\u6b65\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u63d2\u4ef6"),(0,r.kt)("br",{parentName:"li"}),"ShenYu \u4f7f\u7528\u63d2\u4ef6\u5316\u8bbe\u8ba1\u601d\u60f3\uff0c\u5b9e\u73b0\u63d2\u4ef6\u7684\u70ed\u63d2\u62d4\u3002\u5185\u7f6e\u4e30\u5bcc\u7684\u63d2\u4ef6\uff0c\u5305\u62ec RPC \u4ee3\u7406\u3001\u7194\u65ad\u548c\u9650\u6d41\u3001\u6743\u9650\u8ba4\u8bc1\u3001\u76d1\u63a7\u7b49\u7b49\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9009\u62e9\u5668"),(0,r.kt)("br",{parentName:"li"}),"\u6bcf\u4e2a\u63d2\u4ef6\u53ef\u8bbe\u7f6e\u591a\u4e2a\u9009\u62e9\u5668\uff0c\u5bf9\u6d41\u91cf\u8fdb\u884c\u521d\u6b65\u7b5b\u9009\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u89c4\u5219"),(0,r.kt)("br",{parentName:"li"}),"\u6bcf\u4e2a\u9009\u62e9\u5668\u53ef\u8bbe\u7f6e\u591a\u4e2a\u89c4\u5219\uff0c\u5bf9\u6d41\u91cf\u8fdb\u884c\u66f4\u7ec6\u7c92\u5ea6\u7684\u63a7\u5236\u3002")),(0,r.kt)("h3",{id:"\u7f51\u5173\u8c03\u7528\u7ed3\u6784\u56fe"},"\u7f51\u5173\u8c03\u7528\u7ed3\u6784\u56fe"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u7f51\u5173\u7cfb\u7edf",src:n(8067).Z,width:"1248",height:"626"})),(0,r.kt)("h2",{id:"shenyu-\u7f51\u5173\u5b9e\u6218"},"ShenYu \u7f51\u5173\u5b9e\u6218"),(0,r.kt)("p",null,"ShenYu \u7f51\u5173\u63d0\u4f9b\u7684\u529f\u80fd\u975e\u5e38\u591a\uff0c\u8fd9\u91cc\u6211\u4eec\u53ea\u5173\u6ce8 HTTP \u8bf7\u6c42\u4ee3\u7406\u529f\u80fd\u3002\u5373\u4ee3\u7406\u524d\u7aef HTTP \u8bf7\u6c42\uff0c\u901a\u8fc7 Dubbo \u6cdb\u5316\u8c03\u7528\u540e\u7aef Dubbo \u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"\u5b89\u88c5\u76f8\u5173\u6a21\u5757"},"\u5b89\u88c5\u76f8\u5173\u6a21\u5757"),(0,r.kt)(l.Z,{defaultValue:"parent",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"parent",label:"\u76d8\u53e4 Parent",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<parent>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-parent</artifactId>\n    <version>latest.version.xxx</version>\n    <relativePath/>\n</parent>\n"))),(0,r.kt)(u.Z,{value:"dependency1",label:"\u57fa\u7840\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,r.kt)(u.Z,{value:"dependency2",label:"Dubbo \u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>com.gitee.pulanos.pangu</groupId>\n    <artifactId>pangu-dubbo-spring-boot-starter</artifactId>\n</dependency>\n"))),(0,r.kt)(u.Z,{value:"dependency3",label:"\u7f51\u5173\u6a21\u5757",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-webflux</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-gateway</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-sync-data-websocket</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-apache-dubbo</artifactId>\n</dependency>\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u57fa\u4e8e ShenYu \u7f51\u5173\u5f00\u53d1\u6a21\u5f0f\u4e0d\u9700\u8981\u5f15\u5165 Dubbo \u670d\u52a1\u63a5\u53e3 Jar\uff0c\u7f51\u5173\u4f1a\u6839\u636e\u670d\u52a1\u63a5\u53e3\u7684\u5143\u6570\u636e\u4fe1\u606f\uff0c\u6cdb\u5316\u8c03\u7528 Dubbo \u670d\u52a1\u63a5\u53e3\u3002\u670d\u52a1\u63a5\u53e3\u7684\u5143\u6570\u636e\u4fe1\u606f\u5219\u6839\u636e Dubbo \u670d\u52a1\u5e94\u7528\u4e2d\u7684\u914d\u7f6e\u81ea\u52a8\u4e0a\u4f20\u5230 ShenYu \u7f51\u5173\u7ba1\u7406\u7cfb\u7edf\u3002\u6b64\u5185\u5bb9\u5728\u4e0b\u6587\u4f1a\u7ee7\u7eed\u8bb2\u89e3\u3002")),(0,r.kt)("h3",{id:"\u672c\u5730\u914d\u7f6e"},"\u672c\u5730\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e3a\u4fbf\u4e8e\u7406\u89e3\uff0c\u672c\u6587\u57fa\u4e8e\u672c\u5730\u914d\u7f6e\u7684\u65b9\u5f0f\u7f16\u5199\u3002\u82e5\u6539\u4e3a\u6807\u51c6\u7684 Nacos \u914d\u7f6e\u4e2d\u5fc3\u6a21\u5f0f\uff0c\u8bf7\u53c2\u9605\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/docs/advanced-guide/nacos-config-center"},"\u914d\u7f6e\u4e2d\u5fc3")," \u7ae0\u8282\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'server:\n  port: 9090\n\nspring:\n  main:\n    allow-bean-definition-overriding: true\n\nshenyu:\n  cross:\n    enabled: true\n    allowedHeaders:\n    allowedMethods: "*"\n    allowedOrigin: "*"\n    allowedExpose: "*"\n    maxAge: "18000"\n    allowCredentials: true\n  switchConfig:\n    local: true\n  file:\n    enabled: true\n    maxSize : 10\n  sync:\n    websocket:\n      urls: ${shenyu.websocket.urls:ws://localhost:9095/websocket}\n  dubbo:\n    parameter: multi\n  exclude:\n    enabled: false\n    paths:\n      - /favicon.ico\n  extPlugin:\n    path:\n    enabled: true\n    threads: 1\n    scheduleTime: 300\n    scheduleDelay: 30\n  scheduler:\n    enabled: false\n    type: fixed\n    threads: 16\n  upstreamCheck:\n    enabled: false\n    timeout: 3000\n    healthyThreshold: 1\n    unhealthyThreshold: 1\n    interval: 5000\n    printEnabled: true\n    printInterval: 60000\n')),(0,r.kt)("h4",{id:"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e"},"\u5173\u952e\u914d\u7f6e\u9879\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shenyu.sync.websocket.urls"),(0,r.kt)("br",{parentName:"li"}),"\u8868\u793a\u7f51\u5173\u548c ShenYu Admin \u4e4b\u95f4\u4f7f\u7528 Websocket \u7684\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u540c\u6b65\uff0c\u8fd9\u91cc\u662f\u914d\u7f6e ShenYu Admin \u63d0\u4f9b\u7684 Websocket \u6570\u636e\u540c\u6b65\u670d\u52a1\u7684\u5730\u5740\uff08\u652f\u6301\u96c6\u7fa4\uff0c\u9017\u53f7\u5206\u5272\uff09\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0a\u8868\u4e2d\u63d0\u5230\u5230 ShenYu Admin \u662f ShenYu \u7f51\u5173\u6846\u67b6\u7684\u914d\u7f6e & \u5143\u6570\u636e\u7ba1\u7406\u540e\u53f0\u3002\u8fd9\u91cc\u5305\u542b\u4e86\u7f51\u5173\u6a21\u5757\u81ea\u5df1\u7684\u914d\u7f6e\u4fe1\u606f\u4e5f\u5305\u542b\u4e86\u540e\u53f0\u670d\u52a1\u63a5\u53e3\u5143\u6570\u636e\u4fe1\u606f\uff0c\u8fd9\u7406\u7684\u914d\u7f6e\u4fe1\u606f\u548c\u5143\u6570\u636e\u4fe1\u606f\u9700\u8981\u548c\u7f51\u5173\u6a21\u5757\u540c\u6b65\u3002ShenYu \u652f\u6301\u591a\u79cd\u6570\u636e\u540c\u6b65\u65b9\u6848\uff0cWebsocket \u53ea\u662f\u76d8\u53e4\u5f00\u53d1\u9009\u7528\u7684\u4e00\u79cd\u7f3a\u7701\u65b9\u6848\u3002")),(0,r.kt)("h3",{id:"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3"},"\u8c03\u7528\u5fae\u670d\u52a1\u63a5\u53e3"),(0,r.kt)("p",null,"\u57fa\u4e8e ShenYu \u7684\u7f51\u5173\u5f00\u53d1\u6a21\u5f0f\u65e2\u4e0d\u9700\u8981\u5f15\u5165\u670d\u52a1\u63a5\u53e3 JAR\uff0c\u4e5f\u4e0d\u9700\u8981\u7f16\u5199\u5177\u4f53\u7684\u8c03\u7528\u4ee3\u7801\u3002\u5b8c\u5168\u7531\u7f51\u5173\u6839\u636e\u670d\u52a1\u63a5\u53e3\u5143\u6570\u636e\u8fdb\u884c Dubbo \u6cdb\u5316\u8c03\u7528\u3002"),(0,r.kt)("admonition",{title:"\u90a3\u4e48\u95ee\u9898\u6765\u4e86\uff0c\u7f51\u5173\u662f\u5982\u4f55\u77e5\u9053 Dubbo \u670d\u52a1\u63a5\u53e3\u5143\u6570\u636e\u7684\u5462\uff1f",type:"caution"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ShenYu Admin \u540e\u53f0\u7cfb\u7edf\uff0c\u300e\u57fa\u7840\u914d\u7f6e->\u5143\u6570\u636e\u7ba1\u7406\u300f\u83dc\u5355\uff0c\u624b\u5de5\u65b0\u589e\u6bcf\u4e00\u4e2a\u63a5\u53e3\u7684\u5143\u6570\u636e\uff0c\u7136\u540e\u5c06\u6570\u636e\u81ea\u52a8\u540c\u6b65\u5230\u7f51\u5173\u6a21\u5757\u3002\uff08\u4e0d\u5efa\u8bae\uff0c\u91cf\u5927\u7684\u8bdd\u592a\u7e41\u7410\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9Dubbo\u670d\u52a1\u63d0\u4f9b\u8005\u589e\u52a0 ShenYu Client \u652f\u6301\uff0c\u901a\u8fc7\u5728\u63a5\u53e3\u65b9\u6cd5\u4e0a\u4f7f\u7528\u6ce8\u89e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"@ShenyuDubboClient")," \u6765\u81ea\u52a8\u91c7\u96c6\u4e0a\u4f20\u63a5\u53e3\u5143\u6570\u636e\u5230 ShenYu Admin\uff0c\u7136\u540e\u5c06\u6570\u636e\u81ea\u52a8\u540c\u6b65\u5230\u7f51\u5173\u6a21\u5757\u3002\uff08\u5177\u4f53\u5b9e\u73b0\u89c1\u4e0b\u6587\u6240\u8ff0\uff09"))),(0,r.kt)("h4",{id:"\u6539\u9020-dubbo-\u670d\u52a1\u7aef\u81ea\u52a8\u4e0a\u4f20\u63a5\u53e3\u5143\u6570\u636e"},"\u6539\u9020 Dubbo \u670d\u52a1\u7aef\uff0c\u81ea\u52a8\u4e0a\u4f20\u63a5\u53e3\u5143\u6570\u636e"),(0,r.kt)("p",null,"\u5bf9\u539f Dubbo \u670d\u52a1\u7aef\u505a\u4e00\u4e9b\u914d\u7f6e\u53d8\u66f4\uff0c\u4f7f\u5176\u80fd\u81ea\u52a8\u5c06\u63a5\u53e3\u5143\u6570\u636e\u4e0a\u4f20\u5230 ShenYu Admin \u540e\u53f0\u7cfb\u7edf\u3002\n",(0,r.kt)("strong",{parentName:"p"},"\u5b89\u88c5 ShenYu Client \u4f9d\u8d56\u5305")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-client-apache-dubbo</artifactId>\n</dependency>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u589e\u52a0\u914d\u7f6e\u9879")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"shenyu.client.register-type=http\nshenyu.client.server-lists=${shenyu.server-lists:http://localhost:9095}\nshenyu.client.props.contextPath=/dubbo\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shenyu.client.register-type"),(0,r.kt)("br",{parentName:"li"}),"\u670d\u52a1\u63a5\u53e3\u5143\u6570\u636e\u91c7\u96c6\u65b9\u5f0f\uff0c\u53ef\u9009 http \u76f4\u8fde\u6a21\u5f0f\u6216\u914d\u7f6e\u4e2d\u5fc3 zookeeper\u3001etcd\u3001consul \u548c nacos\u3002\u76d8\u53e4\u5f00\u53d1\u91c7\u96c6\u63a5\u53e3\u5143\u6570\u636e\u7f3a\u7701\u9009\u62e9 http \u76f4\u63a5 ShenYu Admin \u7684\u65b9\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shenyu.client.server-lists"),(0,r.kt)("br",{parentName:"li"}),"ShenYu Admin \u5730\u5740\u6216\u914d\u7f6e\u4e2d\u5fc3\u5730\u5740\u3002\u96c6\u7fa4\u65f6\u591a\u4e2a\u5730\u5740\u7528\u9017\u53f7\u5206\u5f00\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"shenyu.client.props.contextPath"),(0,r.kt)("br",{parentName:"li"}),"\u672c\u670d\u52a1\u5728\u7f51\u5173\u4e2d\u7684\u8def\u7531\u524d\u7f00,\u53ef\u81ea\u5b9a\u4e49\u6309\u9700\u914d\u7f6e\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u4e0a\u62a5\u670d\u52a1\u63a5\u53e3\u5143\u6570\u636e"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5728 Dubbo \u670d\u52a1\u5b9e\u73b0\u7c7b\u7684\u65b9\u6cd5\u4e0a\u4f7f\u7528\u6ce8\u89e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"@ShenyuDubboClient")," \u6807\u8bb0\uff0c\u8868\u793a\u8be5\u63a5\u53e3\u65b9\u6cd5\u5143\u6570\u636e\u81ea\u52a8\u4e0a\u4f20\u5230 ShenYu Admin\u3002\u5982\u4e0b\u4ee3\u7801\u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'@Service(version = "1.0.0", group = "pangu-examples-dubbo-gateway-service")\npublic class UserServiceImpl implements UserService {\n\n    @Override\n    @ShenyuDubboClient(path = "/findUserEntity", desc = "\u67e5\u8be2\u7528\u6237\u4fe1\u606f")\n    public UserEntity findUserEntity(Long id) {\n        ...\n        return userEntity;\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u7f51\u5173\u6cdb\u5316\u8c03\u7528 Dubbo \u670d\u52a1\u6240\u9700\u7684\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740"),(0,r.kt)("br",{parentName:"p"}),"\n","\u901a\u8fc7 ShenYu Admin \u540e\u53f0\u7cfb\u7edf\u300e\u57fa\u7840\u914d\u7f6e->\u63d2\u4ef6\u7ba1\u7406\u300f\u83dc\u5355\uff0c\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo\u63d2\u4ef6")," \u5e76\u586b\u5165\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\u3002\u6bd4\u5982\uff0c\u6211\u6d4b\u8bd5\u7528\u7684\u6ce8\u518c\u4e2d\u5fc3\u5730\u5740\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"nacos://169.188.88.140:1688?namespace=pangu-dev"),"\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u6846\u67b6\u7f51\u5173",src:n(3131).Z,width:"2848",height:"1360"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u542f\u670d\u52a1\u63d0\u4f9b\u8005"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fdb\u5165 ShenYu Admin \u540e\u53f0\u7cfb\u7edf\u7684\u300e\u57fa\u7840\u914d\u7f6e->\u5143\u6570\u636e\u7ba1\u7406\u300f\u83dc\u5355\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u4e0a\u62a5\u7684\u670d\u52a1\u5143\u6570\u636e\u4fe1\u606f\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u7f51\u5173",src:n(7184).Z,width:"2860",height:"912"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fdb\u5165 ShenYu Admin \u540e\u53f0\u7cfb\u7edf\u7684\u300e\u63d2\u4ef6\u5217\u8868-> proxy -> dubbo\u300f\u83dc\u5355\uff0c\u4f1a\u770b\u5230\u81ea\u52a8\u6ce8\u518c\u7684\u9009\u62e9\u5668\u548c\u89c4\u5219\u4fe1\u606f\u3002\u5982\u4e0b\u56fe\u6240\u793a\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u76d8\u53e4\u5f00\u53d1\u7f51\u5173",src:n(2312).Z,width:"2842",height:"652"})),(0,r.kt)("h3",{id:"\u542f\u52a8\u5165\u53e3"},"\u542f\u52a8\u5165\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"@SpringBootApplication\npublic class WebApiGatewayApplication {\n    public static void main(String[] args) {\n        PanGuApplicationBuilder.init(WebApiGatewayApplication.class).run(args);\n    }\n}\n")),(0,r.kt)("h3",{id:"\u7f51\u5173\u8bf7\u6c42url"},"\u7f51\u5173\u8bf7\u6c42URL"),(0,r.kt)("p",null,"\u81f3\u6b64\uff0c\u7f51\u5173\u5c31\u53ef\u4ee5\u8c03\u7528 Dubbo \u670d\u52a1\u4e86\u3002\u4f46\u662f\uff0c\u5982\u4f55\u786e\u5b9a Dubbo \u670d\u52a1\u5bf9\u5e94\u7684\u8bf7\u6c42 url \u5730\u5740\u5462\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7531\u7f51\u5173\u6a21\u5757\u914d\u7f6e\u6587\u4ef6\u53ef\u77e5\u7f51\u5173\u5e94\u7528\u7aef\u53e3\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"9090"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"Dubbo \u670d\u52a1\u7684\u914d\u7f6e\u9879 shenyu.client.props.contextPath \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"/dubbo"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"Dubbo \u65b9\u6cd5\u901a\u8fc7 @ShenyuDubboClient \u6807\u8bb0\u7684 path \u5c5e\u6027\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"/findUserEntity"),"\u3002  ")),(0,r.kt)("p",null,"\u7efc\u4e0a\uff0cDubbo \u670d\u52a1 UserService#findUserEntity \u7684\u5b8c\u6574\u8bf7\u6c42\u5730\u5740\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/dubbo/findUserEntity"),"\u3002"),(0,r.kt)("h4",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("p",null,"\u901a\u8fc7 http \u534f\u8bae\uff0cpost \u65b9\u5f0f\u8bbf\u95ee\u7f51\u5173\u3002\u5728 http body \u4e2d\u4f20\u5165 json \u683c\u5f0f\u7684\u53c2\u6570\u3002"),(0,r.kt)("h4",{id:"\u8bf7\u6c42\u793a\u4f8b"},"\u8bf7\u6c42\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="CURL\u811a\u672c"',title:'"CURL\u811a\u672c"'},"curl --location --request POST 'http://127.0.0.1:9090/dubbo/findUserEntity' \\\n--header 'Content-Type: application/json' \\\n--data '{id=1}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="\u8fd4\u56de\u7ed3\u679c"',title:'"\u8fd4\u56de\u7ed3\u679c"'},'{\n    "code": 200,\n    "message": "Access to success!",\n    "data": {\n        "name": "\u4e91\u5357\u7a0b\u5e8f\u5458\u8001\u718a",\n        "id": 1,\n        "userType": 2,\n    }\n}\n')),(0,r.kt)("h3",{id:"\u672c\u8303\u4f8b\u6e90\u7801"},"\u672c\u8303\u4f8b\u6e90\u7801"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-api"},"pangu-examples-dubbo-api"),"\uff1aDubbo \u670d\u52a1\u63a5\u53e3\u5305"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-dubbo-gateway-shenyu-service"},"pangu-examples-dubbo-gateway-shenyu-service"),"\uff1aDubbo \u670d\u52a1\u63d0\u4f9b\u8005\uff08\u652f\u6301\u63a5\u53e3\u5143\u6570\u636e\u4e0a\u4f20\u5230\u7f51\u5173\u7cfb\u7edf\uff09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/pulanos/pangu-framework/tree/master/pangu-examples/pangu-examples-webapi-gateway-shenyu-based"},"pangu-examples-webapi-gateway-shenyu-based"),"\uff1a\u57fa\u4e8e ShenYu \u7f51\u5173\u5c06 Dubbo \u670d\u52a1\u53d1\u5e03\u4e3a HTTP \u63a5\u53e3")),(0,r.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulanos.gitee.io/pangu-framework/docs/quick-start/how-to-create-http-api"},"\u5982\u4f55\u53d1\u5e03\u5fae\u670d\u52a1 (API \u7f51\u5173)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pulanos.gitee.io/pangu-framework/docs/intro"},"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb"))))}m.isMDXComponent=!0},7184:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-pangu-framework-shenyu-metadata-b69293c799df617306c587fdcb78dd94.png"},2312:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/3-pangu-framework-shenyu-plugin-3b3a6ed16d27836a25a2a7037423f553.png"},3131:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4-pangu-framework-shenyu-dubbo-8571bbae9d99ba6e3c2b539b5409af0b.png"},8067:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/9-pangu-framework-shenyu-268b830aa5b8f7bbedf8afa2685721ec.png"}}]);