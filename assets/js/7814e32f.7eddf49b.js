"use strict";(self.webpackChunkmidl_docs=self.webpackChunkmidl_docs||[]).push([[7],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="Tezos Endpoint Services",l={unversionedId:"tezos-endpoints",id:"tezos-endpoints",title:"Tezos Endpoint Services",description:"Tezos Endpoint Services unleash your creativity on Tezos. Focus on your Web 3 application, we run the infrastructure for you.",source:"@site/docs/tezos-endpoints.md",sourceDirName:".",slug:"/tezos-endpoints",permalink:"/tezos-endpoints",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to MIDL.dev Documentation",permalink:"/"},next:{title:"Getting Started",permalink:"/tezos-endpoints-getting-started"}},s={},p=[{value:"The MIDL.dev Platform",id:"the-midldev-platform",level:2},{value:"Archive nodes",id:"archive-nodes",level:2},{value:"Indexer Endpoints powered by TzKT",id:"indexer-endpoints-powered-by-tzkt",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tezos-endpoint-services"},"Tezos Endpoint Services"),(0,o.kt)("p",null,"Tezos Endpoint Services unleash your creativity on Tezos. Focus on your Web 3 application, we run the infrastructure for you."),(0,o.kt)("p",null,"We operate full nodes and an indexing service powered by ",(0,o.kt)("a",{parentName:"p",href:"https://tzkt.io"},"TzKT"),"."),(0,o.kt)("h2",{id:"the-midldev-platform"},"The MIDL.dev Platform"),(0,o.kt)("p",null,"Our nodes are operated on top of a cloud-based platform. This guarantees highly redundant and reliable infrastructure with 24/7 monitoring."),(0,o.kt)("p",null,"We are multi-cloud and multi-region. Our geographical load-balancing directs you to the point-of-presence closest to you, while ensuring reliability."),(0,o.kt)("p",null,"Our current points of presence are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"North America (Digitalocean Toronto)"),(0,o.kt)("li",{parentName:"ul"},"Europe (Digitalocean Amsterdam)")),(0,o.kt)("p",null,"All our plans include complimentary testnet (",(0,o.kt)("a",{parentName:"p",href:"https://teztnets.xyz/ghostnet"},"Ghostnet"),") endpoints."),(0,o.kt)("h2",{id:"archive-nodes"},"Archive nodes"),(0,o.kt)("p",null,"We support ",(0,o.kt)("strong",{parentName:"p"},"archive queries"),". Our innovative load balancing system routes queries between:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'fast "rolling nodes" containing only recent data, optimized for speed,'),(0,o.kt)("li",{parentName:"ul"},'"archive nodes" containing all data since Tezos genesis, ideal for running indexers.')),(0,o.kt)("p",null,"It is all transparent to you: any RPC endpoint on our platform supports archive queries."),(0,o.kt)("p",null,"Some queries may be priced differently. See ",(0,o.kt)("a",{parentName:"p",href:"tezos-endpoints-pricing"},"Pricing"),"."),(0,o.kt)("h2",{id:"indexer-endpoints-powered-by-tzkt"},"Indexer Endpoints powered by TzKT"),(0,o.kt)("p",null,"Our indexer endpoint offer additional features not available with the regular Tezos RPC Endpoint:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"query all tokens owned by an address,"),(0,o.kt)("li",{parentName:"ul"},"look up an operation by hash,"),(0,o.kt)("li",{parentName:"ul"},"query operation history for an account,"),(0,o.kt)("li",{parentName:"ul"},"and many more.")),(0,o.kt)("p",null,"For more information, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.tezos.com/build/blockchain-indexers/"},"TzKT section of the Tezos wiki"),"."))}c.isMDXComponent=!0}}]);