var ce=Object.defineProperty;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))de.call(t,o)&&H(e,o,t[o]);return e};import{d as x,u as me,r as _,a as G,o as v,c as K,w as c,b as n,e as a,N as he,f as fe,g as _e,z as ge,h as ve,i as ke,j as Y,k as ye,l as Ee,m as Fe,n as we,p as Ae,q as De,s as y,t as Ce,v as Ne,x as be,y as E,A as $,B as xe,C as $e,D as N,E as h,F as Z,G as Ie,H as Le,I,L as Pe,J as X,K as Be,M as Oe,O as Se,P as Te,Q as Ve,R as Re,S as Me,T as je,U as q,V as ze,W as Je,X as Ue,Y as He,Z as We,_ as Ge,$ as Ke,a0 as Ye,a1 as Ze}from"./vendor.e32a42c8.js";const Xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}};Xe();const qe=x({setup(e){return window.$message=me(),(t,o)=>null}}),Qe=x({setup(e){const t=_({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return(o,r)=>{const s=G("router-view");return v(),K(a(ke),{locale:a(ge),"date-locale":a(ve),"theme-overrides":t.value},{default:c(()=>[n(a(_e),null,{default:c(()=>[n(a(he),null,{default:c(()=>[n(a(fe),null,{default:c(()=>[n(qe),n(s)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),et="modulepreload",Q={},tt="/pikpak/",g=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${tt}${r}`,r in Q)return;Q[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":et,s||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),s)return new Promise((D,m)=>{u.addEventListener("load",D),u.addEventListener("error",m)})})).then(()=>t())};var ot="/pikpak/assets/logo1.08eb9157.png";const d=Y.create({});d.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");return e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://pp.iso9003.workers.dev"))===-1&&(e.url="https://pp.iso9003.workers.dev/"+e.url),e});let w=!1;d.interceptors.response.use(e=>e,e=>{var r;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const s=window.localStorage.getItem("pikpakLoginData"),i=s?JSON.parse(s):{};return i.username&&i.password&&!w?(console.log("wait",o.url),w=!0,d.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},i)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),w=!1,d(o))).catch(()=>(b.push("/login"),!1))):i.username&&i.password&&w?new Promise((u,D)=>{const m=setInterval(()=>{w||(clearInterval(m),u(d(o)))},100)}):(b.push("/login"),!1);default:window.$message.error(((r=t==null?void 0:t.data)==null?void 0:r.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const ee=Y.create({});ee.interceptors.request.use(e=>{var t;return e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"},((t=e.url)==null?void 0:t.indexOf("https://pp.iso9003.workers.dev"))===-1&&(e.url="https://pp.iso9003.workers.dev/"+e.url),e});const At=ee,te=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let r=Math.floor(o/10);return e=e/Math.pow(2,10*r),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[r]};const st=h("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[h("img",{src:"https://www.mypikpak.com/logo.png",class:"logo-box__icon",alt:""}),h("div",{class:"logo-box__text"},"PikPak")],-1),at={key:0,class:"content-bottom"},rt=E("\u4F1A\u5458\u7801"),nt={style:{"margin-bottom":"0"}},it=h("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\uFFE5119\u8D2D\u4E70\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),ut=E(" \u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),lt={class:"bottom-user-info"},ct={key:0,src:ot,class:"user-info-avatar"},pt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},dt={class:"user-info-name"},mt={key:0},ht={class:"action"},ft=E(" \u9000\u51FA\u767B\u5F55 "),_t=h("p",null,[h("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),gt=E("\u6DFB\u52A0"),vt=x({setup(e){const t=_(!1),o=l=>()=>q(I,null,{default:()=>q(l)}),r=ye(),s=Ee(),i=_([{label:"\u6587\u4EF6",key:"list",icon:o(He)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(ze)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(Je)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ue)}]),u=_(),D=()=>{d.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},m=_(),L=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{m.value=l.data}).catch(l=>{console.log(l)})},k=_(),oe=()=>{d.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var p;k.value=(p=l.data)==null?void 0:p.data})},se=(l,p)=>{console.log(p),r.push("/"+p.key)};Fe(()=>{D(),L(),oe()});const C=_(),F=_(!1),ae=()=>{d.post("https://api-drive.mypikpak.com/vip/v1/order/free",{activation_code:C.value}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),L()}).catch(l=>{console.log(l)}).finally(()=>{F.value=!1})},P=_(!1),re=l=>{P.value=l<800,t.value||(t.value=l<800)};we(s,()=>{P.value&&(t.value=!0)});const ne=Ae(),ie=()=>{ne.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{d.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),r.push("/login")}).catch(l=>{console.log(l)})}})};return(l,p)=>{const ue=G("router-view"),le=De("resize");return v(),y(je,null,[Ce(n(a(X),{"has-sider":"",onResize:re},{default:c(()=>[n(a(Ne),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=f=>t.value=!0),onExpand:p[2]||(p[2]=f=>t.value=!1),bordered:""},{default:c(()=>{var f,B,O,S,T,V,R,M,j,z,J;return[st,n(a(be),{options:i.value,value:String(a(s).name),"onUpdate:value":se},null,8,["options","value"]),t.value?N("",!0):(v(),y("div",at,[E($(a(te)((f=m.value)==null?void 0:f.quota.usage))+" / "+$(a(te)((B=m.value)==null?void 0:B.quota.limit))+" ",1),n(a(xe),{type:"primary",onClick:p[0]||(p[0]=Et=>F.value=!0)},{default:c(()=>[rt]),_:1}),((O=m.value)==null?void 0:O.quota)?(v(),K(a($e),{key:0,type:"line",percentage:Number((((S=m.value)==null?void 0:S.quota.usage)/((T=m.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):N("",!0),h("p",nt,[n(a(Z),{placement:"right"},{trigger:c(()=>[it]),default:c(()=>[ut]),_:1})])])),t.value?N("",!0):(v(),y("div",{key:1,class:Ie(["sider-bottom",{vip:((R=k.value)==null?void 0:R.status)==="ok"}])},[h("div",lt,[((M=k.value)==null?void 0:M.status)==="ok"?(v(),y("img",ct)):(v(),y("img",pt)),h("div",dt,[E($((j=u.value)==null?void 0:j.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),y("div",mt,[n(a(Le),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):N("",!0)]),h("div",ht,[n(a(Z),null,{trigger:c(()=>[n(a(I),{onClick:ie},{default:c(()=>[n(a(Pe))]),_:1})]),default:c(()=>[ft]),_:1})])])],2))]}),_:1},8,["collapsed"]),n(a(X),null,{default:c(()=>[n(a(Be),{style:{height:"100vh"}},{default:c(()=>[n(a(Oe),{style:{"max-height":"100vh"}},{default:c(()=>[n(ue)]),_:1})]),_:1})]),_:1})]),_:1},512),[[le]]),n(a(Me),{show:F.value,"onUpdate:show":p[5]||(p[5]=f=>F.value=f)},{default:c(()=>[n(a(Se),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[n(a(I),{onClick:p[3]||(p[3]=f=>F.value=!1)},{default:c(()=>[n(a(Te))]),_:1})]),action:c(()=>[n(a(Ve),{block:!0,type:"primary",disabled:!C.value,onClick:ae},{default:c(()=>[gt]),_:1},8,["disabled"])]),default:c(()=>[n(a(Re),{placeholder:"\u4F1A\u5458\u7801",value:C.value,"onUpdate:value":p[4]||(p[4]=f=>C.value=f)},null,8,["value"]),_t]),_:1})]),_:1},8,["show"])],64)}}}),kt=[{path:"/",name:"home",component:vt,redirect:"/list",beforeEnter:(e,t,o)=>{const r=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");!r||!r.access_token?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>g(()=>import("./list.da8e6a4b.js"),["assets/list.da8e6a4b.js","assets/list.764e0448.css","assets/vendor.e32a42c8.js"])},{path:"trash",name:"trash",component:()=>g(()=>import("./trash.a7b2bae4.js"),["assets/trash.a7b2bae4.js","assets/trash.99a3677d.css","assets/vendor.e32a42c8.js"])},{path:"setting",name:"setting",component:()=>g(()=>import("./setting.6b527046.js"),["assets/setting.6b527046.js","assets/setting.f947579c.css","assets/vendor.e32a42c8.js"])},{path:"share",name:"share",component:()=>g(()=>import("./share.459d0306.js"),["assets/share.459d0306.js","assets/share.4f9c11c6.css","assets/vendor.e32a42c8.js"])}]},{path:"/t/:id?",name:"test",component:()=>g(()=>import("./test.dcdd9d33.js"),["assets/test.dcdd9d33.js","assets/vendor.e32a42c8.js"])},{path:"/login",name:"login",component:()=>g(()=>import("./login.db43e6d3.js"),["assets/login.db43e6d3.js","assets/login.a8b45006.css","assets/vendor.e32a42c8.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>g(()=>import("./sms.f0919279.js"),["assets/sms.f0919279.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.e32a42c8.js"])},{path:"/register",name:"register",component:()=>g(()=>import("./register.50155338.js"),["assets/register.50155338.js","assets/register.5588ce76.css","assets/vendor.e32a42c8.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>g(()=>import("./testtest.20b7ec8f.js"),["assets/testtest.20b7ec8f.js","assets/vendor.e32a42c8.js"])}],yt=We({history:Ge(),routes:kt});var b=yt;const A=Ke(Qe);A.directive("resize",{mounted(e,t,o){e.$$erd=Ye({strategy:"scroll"}),e.$$erd.listenTo({},e,r=>{let s=r.offsetWidth,i=r.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(s,i)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=d;A.use(b);A.use(Ze,{router:b,siteIdList:[1280510106]});A.mount("#app");export{te as b,d as i,At as n};
