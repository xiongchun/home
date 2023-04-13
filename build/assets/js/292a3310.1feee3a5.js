"use strict";(self.webpackChunkdaxiong=self.webpackChunkdaxiong||[]).push([[769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),u=r(7094),s=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){const{lazy:t,block:r,defaultValue:l,values:m,groupId:d,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),h=(0,i.l)(g,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,u.U)(),[w,O]=(0,a.useState)(v),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=d){const e=y[d];null!=e&&e!==w&&g.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,r=E.indexOf(t),n=g[r].value;n!==w&&(x(t),O(n),null!=d&&k(d,String(n)))},P=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=E.indexOf(e.currentTarget)+1;t=E[r]??E[0];break}case"ArrowLeft":{const r=E.indexOf(e.currentTarget)-1;t=E[r]??E[E.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},b)},g.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:P,onClick:T},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,l.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},2411:(e,t,r)=>{r.r(t),r.d(t,{Highlight:()=>c,assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(5488),r(5162);const o={title:"\u76d8\u53e4 Admin \u7b80\u4ecb\u53ca\u5feb\u901f\u5165\u95e8",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","\u5ba2\u6237\u7aef\u5f00\u53d1","Web"],date:"2023-1-10",hide_table_of_contents:!1,slug:"pangu-dev-framework-admin-intro-quickstart"},l=void 0,i={permalink:"/blog/pangu-dev-framework-admin-intro-quickstart",source:"@site/blog/\u76d8\u53e4 Admin \u7b80\u4ecb\u53ca\u5feb\u901f\u5165\u95e8.md",title:"\u76d8\u53e4 Admin \u7b80\u4ecb\u53ca\u5feb\u901f\u5165\u95e8",description:"\u76d8\u53e4 Admin \u662f\u4e00\u5957\u57fa\u4e8e SCUI(Vue3\u3001Element-Plus) + \u76d8\u53e4\u670d\u52a1\u5f00\u53d1\u6846\u67b6\u7684\u4e2d\u540e\u53f0\u4e1a\u52a1\u7cfb\u7edf\u524d\u540e\u7aef\u7edf\u4e00\u89e3\u51b3\u65b9\u6848\u3002\u5e76\u9884\u7f6e\u4e86\u8f7b\u91cf\u6210\u719f\u7684 \u6743\u9650\u7cfb\u7edf\u53c2\u8003\u5b9e\u73b0 \u3002\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u5b83\u5feb\u901f\u642d\u5efa\u4e8c\u6b21\u5f00\u53d1\u811a\u624b\u67b6\uff0c\u5b9e\u73b0\u5546\u4e1a\u4e1a\u52a1\u903b\u8f91\u3002",date:"2023-01-10T00:00:00.000Z",formattedDate:"2023\u5e741\u670810\u65e5",tags:[{label:"\u670d\u52a1\u7aef\u5f00\u53d1",permalink:"/blog/tags/\u670d\u52a1\u7aef\u5f00\u53d1"},{label:"\u76d8\u53e4\u5f00\u53d1\u6846\u67b6",permalink:"/blog/tags/\u76d8\u53e4\u5f00\u53d1\u6846\u67b6"},{label:"\u5ba2\u6237\u7aef\u5f00\u53d1",permalink:"/blog/tags/\u5ba2\u6237\u7aef\u5f00\u53d1"},{label:"Web",permalink:"/blog/tags/web"}],readingTime:4.955,hasTruncateMarker:!0,authors:[{name:"xiongchun",title:"Pangu Framework maintainer",url:"https://gitee.com/xiong-chun",imageURL:"https://xiongchun.pulanit.com/img/xiongchun.jpg",key:"xiongchun"}],frontMatter:{title:"\u76d8\u53e4 Admin \u7b80\u4ecb\u53ca\u5feb\u901f\u5165\u95e8",authors:["xiongchun"],tags:["\u670d\u52a1\u7aef\u5f00\u53d1","\u76d8\u53e4\u5f00\u53d1\u6846\u67b6","\u5ba2\u6237\u7aef\u5f00\u53d1","Web"],date:"2023-1-10",hide_table_of_contents:!1,slug:"pangu-dev-framework-admin-intro-quickstart"},prevItem:{title:"\u76d8\u53e4\u5fae\u670d\u52a1\u5f00\u53d1\u6846\u67b6\u7b80\u4ecb",permalink:"/blog/pangu-framework-service-intro"},nextItem:{title:"\u76d8\u53e4 APP Starter \u7b80\u4ecb\u53ca\u5feb\u901f\u5165\u95e8",permalink:"/blog/pangu-app-intro-quickstart"}},u={authorsImageUrls:[void 0]},s=[],c=e=>{let{children:t,color:r}=e;return(0,a.kt)("span",{style:{backgroundColor:r,borderRadius:"3px",color:"#fff",padding:"0.1rem",margin:"0.2rem"}},t)},p={toc:s,Highlight:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pulanos.gitee.io/pangu-framework/admin/intro"},"\u76d8\u53e4 Admin")," \u662f\u4e00\u5957\u57fa\u4e8e ",(0,a.kt)("strong",{parentName:"p"},"SCUI"),"(Vue3\u3001Element-Plus) + ",(0,a.kt)("strong",{parentName:"p"},"\u76d8\u53e4\u670d\u52a1\u5f00\u53d1\u6846\u67b6"),"\u7684\u4e2d\u540e\u53f0\u4e1a\u52a1\u7cfb\u7edf\u524d\u540e\u7aef\u7edf\u4e00\u89e3\u51b3\u65b9\u6848\u3002\u5e76\u9884\u7f6e\u4e86\u8f7b\u91cf\u6210\u719f\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://pangu.pulanit.com/online-demo"},"\u6743\u9650\u7cfb\u7edf\u53c2\u8003\u5b9e\u73b0")," \u3002\u7528\u6237\u53ef\u4ee5\u57fa\u4e8e\u5b83\u5feb\u901f\u642d\u5efa\u4e8c\u6b21\u5f00\u53d1\u811a\u624b\u67b6\uff0c\u5b9e\u73b0\u5546\u4e1a\u4e1a\u52a1\u903b\u8f91\u3002"))}m.isMDXComponent=!0}}]);