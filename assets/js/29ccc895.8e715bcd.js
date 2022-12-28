"use strict";(self.webpackChunkmidl_docs=self.webpackChunkmidl_docs||[]).push([[108],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=o,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a="Billing",l={unversionedId:"tezos-rpc-billing",id:"tezos-rpc-billing",title:"Billing",description:"Our billing unit is the compute unit. All our plans offer free compute units.",source:"@site/docs/tezos-rpc-billing.md",sourceDirName:".",slug:"/tezos-rpc-billing",permalink:"/tezos-rpc-billing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Restrict by Origin",permalink:"/tezos-rpc-restrict-by-origin"},next:{title:"Tezos Baking Service",permalink:"/tezos-baking"}},c={},s=[{value:"Compute Units",id:"compute-units",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"billing"},"Billing"),(0,o.kt)("p",null,"Our billing unit is the ",(0,o.kt)("strong",{parentName:"p"},"compute unit"),". All our plans offer free compute units."),(0,o.kt)("p",null,"To pick the best suited to your needs, visit our ",(0,o.kt)("a",{parentName:"p",href:"https://midl.dev/tezos-rpc/"},"pricing page"),"."),(0,o.kt)("h2",{id:"compute-units"},"Compute Units"),(0,o.kt)("p",null,"Our innovating ",(0,o.kt)("strong",{parentName:"p"},"load balancing solution")," combines Archive and Rolling Octez nodes at every location:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"any request to a ",(0,o.kt)("strong",{parentName:"li"},"specific block")," identified by block hash or block number goes to the Archive Nodes and costs ",(0,o.kt)("strong",{parentName:"li"},"2 compute units")),(0,o.kt)("li",{parentName:"ul"},"any other request goes to the Rolling Nodes and costs ",(0,o.kt)("strong",{parentName:"li"},"1 compute unit"),"."),(0,o.kt)("li",{parentName:"ul"},"testnet queries are always free of charge.")),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# HEAD block query costs one compute unit\ncurl https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/chains/main/blocks/head\n\n# Query version costs one compute unit\ncurl https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/version\n\n# Archive query (by level) costs 2 compute units\ncurl https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/chains/main/blocks/999999/header\n\n# Archive query (by block hash) costs 2 compute units\ncurl https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/chains/main/blocks/BLh993Nn3BJPzFcnzuwW7ut4YxKCbFfBuZBm85bG7xRZL8jDXhb\n\n# Ghostnet queries cost 0 compute units\ncurl https://ghostnet.tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/chains/main/blocks/head/header\n")))}p.isMDXComponent=!0}}]);