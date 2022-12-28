"use strict";(self.webpackChunkmidl_docs=self.webpackChunkmidl_docs||[]).push([[215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},i="Tezos RPC Service",l={unversionedId:"tezos-rpc",id:"tezos-rpc",title:"Tezos RPC Service",description:"Tezos RPC Service unleashes your creativity on Tezos. Focus on your Web 3 application, and leave running the nodes to us.",source:"@site/docs/tezos-rpc.md",sourceDirName:".",slug:"/tezos-rpc",permalink:"/tezos-rpc",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Welcome to MIDL.dev Documentation",permalink:"/"},next:{title:"Tezos Baking Service",permalink:"/tezos-baking"}},c={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Create an Account",id:"create-an-account",level:3},{value:"Create a RPC",id:"create-a-rpc",level:3},{value:"Connect to your Tezos RPC",id:"connect-to-your-tezos-rpc",level:3},{value:"With CURL",id:"with-curl",level:4},{value:"With Taquito",id:"with-taquito",level:4},{value:"With pytezos",id:"with-pytezos",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tezos-rpc-service"},"Tezos RPC Service"),(0,r.kt)("p",null,"Tezos RPC Service unleashes your creativity on Tezos. Focus on your Web 3 application, and leave running the nodes to us."),(0,r.kt)("p",null,"Our full nodes are operated on top of a cloud-based platform. This guarantees highly redundant and reliable infrastructure with 24/7 monitoring."),(0,r.kt)("p",null,"We are multi-cloud and multi-region. Our geographical load-balancing directs you to the point-of-presence closest to you, while ensuring reliability."),(0,r.kt)("p",null,"All our plans include complimentary testnet (",(0,r.kt)("a",{parentName:"p",href:"https://teztnets.xyz/ghostnet"},"Ghostnet"),") endpoints."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"create-an-account"},"Create an Account"),(0,r.kt)("p",null,"To sign up for an account on the MIDL.dev website, enter your email address and password, and click Sign Up. You may also use your Google account to register."),(0,r.kt)("p",null,"To activate your account, verify your email address by clicking the link sent to your inbox."),(0,r.kt)("h3",{id:"create-a-rpc"},"Create a RPC"),(0,r.kt)("p",null,'Click on "Create Tezos RPC" and pick a name.'),(0,r.kt)("h3",{id:"connect-to-your-tezos-rpc"},"Connect to your Tezos RPC"),(0,r.kt)("p",null,"After creating your RPC, you have access to your RPC URL from the dashboard, for both Tezos Mainnet and Tezos Ghostnet (the permanent testnet of Tezos)."),(0,r.kt)("p",null,"The URL will look like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/")),(0,r.kt)("h4",{id:"with-curl"},"With CURL"),(0,r.kt)("p",null,"The following code queries the level of the most recent Tezos mainnet block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8/chains/main/blocks/head/header | jq .level\n")),(0,r.kt)("p",null,"To go further, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://tezos.gitlab.io/developer/rpc.html"},"Tezos RPC Documentation"),"."),(0,r.kt)("h4",{id:"with-taquito"},"With Taquito"),(0,r.kt)("p",null,"The following Typescript code grabs the balance of one mainnet address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { TezosToolkit } from '@taquito/taquito';\nconst Tezos = new TezosToolkit('https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8');\n\nTezos.tz\n  .getBalance('tz1MidLyXXvKWMmbRvKKeusDtP95NDJ5gAUx')\n  .then((balance) => console.log(`${balance.toNumber() / 1000000} \ua729`))\n  .catch((error) => console.log(JSON.stringify(error)));\n")),(0,r.kt)("p",null,"To go further, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://tezostaquito.io/"},"Taquito documentation"),"."),(0,r.kt)("h4",{id:"with-pytezos"},"With pytezos"),(0,r.kt)("p",null,"The following Python code grabs the balance of one mainnet address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from pytezos import pytezos\n\nmidl_rpc = "https://tezosrpc.midl.dev/ak-g5yvzhd6bba7z8"\naccount = pytezos.using(midl_rpc).account("tz1MidLyXXvKWMmbRvKKeusDtP95NDJ5gAUx")\nprint(str(int(account["balance"]) / 1000000) + " \ua729")\n')),(0,r.kt)("p",null,"To go further, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://pytezos.org"},"Pytezos documentation"),"."))}p.isMDXComponent=!0}}]);