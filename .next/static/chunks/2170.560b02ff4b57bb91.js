"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2170],{19841:function(t,n,e){e.d(n,{Z:function(){return v}});var i=e(82729),a=e(35944),l=e(70302),r=e(51024),o=e(86994),c=e(16829),d=e(46256),s=e(11163),u=e(9844),h=e(70351);function p(){let t=(0,i._)(["\n  .side-item {\n    margin-bottom: 10px;\n  }\n  a {\n    text-decoration: none;\n    font-weight: 600;\n  }\n  .fb-page {\n    .ant-card-body {\n      font-size: 20px;\n      a {\n        color: #0d8bf0 !important;\n      }\n    }\n  }\n  .topic {\n    .topic-item {\n      font-weight: 600;\n      cursor: pointer;\n      padding: 5px;\n    }\n  }\n"]);return p=function(){return t},t}let{Search:m}=r.default,f=c.Z.div(p());function v(t){var n,e;let i=(0,s.useRouter)(),{search:r}=i.query,{homeData:c}=(0,u.Z)(),p=t=>{let n="/search/".concat(t);i.push(n,void 0,{shallow:!0})};return(0,a.BX)(f,{children:[(0,a.tZ)("div",{className:"side-item search-bar",children:(0,a.tZ)(l.default,{title:"T\xecm kiếm",style:{width:300},children:(0,a.tZ)(m,{placeholder:"Nhập để t\xecm",onSearch:p,enterButton:!0,allowClear:!0,value:r})})}),(0,a.tZ)("div",{className:"side-item popular-content"}),(0,a.BX)("div",{className:"side-item topic",children:[(0,a.tZ)(l.default,{title:"Chuy\xean mục",style:{width:300},children:null==c?void 0:null===(n=c.category)||void 0===n?void 0:n.map(t=>(0,a.BX)("div",{className:"topic-item",onClick:()=>p(t),children:[(0,a.tZ)(o.default,{}),t.toLocaleUpperCase()]},t))}),(0,a.tZ)(l.default,{title:"B\xe0i viết mới",style:{width:300},children:null==c?void 0:null===(e=c.new_post)||void 0===e?void 0:e.map(t=>{var n;return(0,a.tZ)("div",{className:"topic-item",onClick:()=>{i.push("".concat(h.Z.POST,"/").concat(t.id))},children:(0,a.tZ)(l.default,{hoverable:!0,style:{width:"100%"},cover:(0,a.tZ)("img",{src:(null==t?void 0:null===(n=t.thumbnail)||void 0===n?void 0:n.image_path)||"",alt:"img",width:200,height:130}),children:(0,a.tZ)(d.Z,{title:null==t?void 0:t.name})})},t.id)})})]})]})}},17595:function(t,n,e){e.d(n,{Z:function(){return p}});var i=e(82729),a=e(35944),l=e(91633),r=e(16829),o=e(41664),c=e.n(o),d=e(70351),s=e(33264);function u(){let t=(0,i._)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 100%;\n  max-width: ",";\n  min-width: 200px;\n  min-height: 300px;\n  p {\n    margin: 0;\n  }\n  .ant-image {\n    float: left;\n    margin-right: 15px;\n    margin-bottom: 5px;\n    min-height: 150px;\n  }\n  .post-name {\n    font-weight: 700;\n    min-height: ",";\n    word-break: break-all;\n  }\n  .post-sumary {\n    font-style: italic;\n    font-weight: 500;\n    min-height: 80px;\n    /* text-align: left;\n    display: -webkit-box;\n    -webkit-line-clamp: 6;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: gray;\n    white-space: normal; */\n  }\n  .author {\n    font-family: 'Montserrat';\n    text-align: left;\n    font-size: 14px;\n    font-weight: 500;\n    font-style: italic;\n  }\n  .post-create {\n    margin: 10px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n  .postItem {\n    .post-detail {\n      display: ",";\n    }\n    width: 100%;\n    img {\n      width: 200px;\n      height: 130px;\n      aspect-ratio: auto 240/135;\n    }\n  }\n  .post-content {\n    width: ",";\n  }\n"]);return u=function(){return t},t}let h=r.Z.div(u(),t=>t.isSearch?"":"210px",t=>(t.isSearch,""),t=>t.isSearch?"flex":"grid",t=>t.isSearch?"100%":"");function p(t){var n,e;let{post:i,isSideBar:r,isSearch:o}=t;return(0,a.tZ)(h,{isSearch:!!o,children:(0,a.tZ)("div",{className:"postItem",children:(0,a.BX)(c(),{href:"".concat(d.Z.POST,"/").concat(i.id),className:"post-detail",children:[(0,a.tZ)(l.Z,{src:null==i?void 0:null===(n=i.thumbnail)||void 0===n?void 0:n.image_path,preview:!1}),(0,a.BX)("div",{className:"post-content",children:[(0,a.tZ)("p",{className:"post-name",children:null==i?void 0:i.name}),(null==i?void 0:i.author)&&(0,a.BX)("div",{className:"author",children:["T\xe1c giả: ",null==i?void 0:i.author]}),(0,a.tZ)("p",{className:"post-sumary",children:(null==i?void 0:i.content_summary.length)?"".concat((null==i?void 0:null===(e=i.content_summary)||void 0===e?void 0:e.slice(0,160))+"..."):""}),(0,a.tZ)("p",{className:"post-create",children:(0,s.q8)(null==i?void 0:i.created)})]})]})})})}},9844:function(t,n,e){var i=e(88767),a=e(84626),l=e(45354);n.Z=()=>{let{data:t,error:n}=(0,i.useQuery)("home",a.Z.getHome,{staleTime:l.ok,keepPreviousData:!0,cacheTime:l.bQ,refetchOnWindowFocus:!1}),{data:e,error:r,refetch:o,isLoading:c}=(0,i.useQuery)("chat-history",a.Z.getChatHistory,{staleTime:l.ok,keepPreviousData:!0,cacheTime:l.bQ,refetchOnWindowFocus:!1});return{homeData:t,homeError:n,chatHistory:e,chatHistoryError:r,refetchChatList:o,chatLoading:c}}},90455:function(t,n,e){e.d(n,{Rl:function(){return r},p6:function(){return l}});var i=e(30381),a=e.n(i);let l=t=>a()(t).format("DD/MM/YYYY"),r=t=>{if(!t)return;let n=t.toLocaleLowerCase().split(" "),e="";for(let t of n)e+=t[0].toUpperCase()+t.slice(1)+" ";return e.trim()}},82170:function(t,n,e){e.r(n);var i=e(82729),a=e(35944),l=e(5005),r=e(49031),o=e(70917),c=e(36407),d=e(70302),s=e(74253),u=e(36671),h=e(69843),p=e(5789),m=e(55673),f=e(11163),v=e(67294),g=e(19841),Z=e(17595),x=e(84626),w=e(96507),y=e(45354),b=e(90455),k=e(70351);function N(){let t=(0,i._)(["\n                font-size: 30px !important;\n              "]);return N=function(){return t},t}function S(){let t=(0,i._)(["\n              .ant-card-body {\n                display: grid;\n                grid-template-columns: repeat(3, 1fr);\n                gap: 10px;\n                padding: 12px;\n                &::before {\n                  display: none !important;\n                }\n                .ant-card {\n                  /* flex: 0 0 calc(25% - 20px); */\n                  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n                  &:hover {\n                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n                  }\n                  transition: all 1s ease;\n                }\n              }\n              .ant-empty {\n                grid-column: 1 / -1;\n              }\n            "]);return S=function(){return t},t}function _(){let t=(0,i._)(["\n              text-align: center;\n            "]);return _=function(){return t},t}n.default=()=>{var t,n,e;let[i,B]=(0,v.useState)(),C=(0,w.W)(),[X,T]=(0,v.useState)(!1),L=(0,f.useRouter)(),[O,P]=(0,v.useState)({page:(null==C?void 0:C.page)||1,limit:y.Ag}),z=async t=>{try{T(!0);let n=await x.Z.listPosts(t.limit,t.page,"ALL"===C.topic?"":C.topic||"",C.header);B(n)}catch(t){console.error(t)}finally{T(!1)}};return(0,v.useEffect)(()=>{P({...O,page:1})},[C.topic]),(0,v.useEffect)(()=>{z(O)},[O,C.header]),(0,a.BX)("div",{children:[(0,a.tZ)(s.Z,{orientation:"left",children:(0,a.BX)(c.Z,{separator:(0,a.tZ)(r.default,{}),children:[(0,a.tZ)(c.Z.Item,{href:k.Z.HOME,children:(0,a.tZ)(l.default,{css:(0,o.iv)(N())})}),(0,a.tZ)(c.Z.Item,{children:C.header}),(0,a.tZ)(c.Z.Item,{href:"",children:(0,b.Rl)("ALL"===C.topic?"":C.topic||"")})]})}),(0,a.BX)(m.Z,{gutter:16,children:[(0,a.BX)(p.Z,{span:18,children:[(0,a.tZ)("div",{className:"",css:(0,o.iv)(S()),children:(0,a.BX)(d.default,{children:[!!(null==i?void 0:null===(t=i.results)||void 0===t?void 0:t.length)&&(null==i?void 0:null===(n=i.results)||void 0===n?void 0:n.map(t=>(0,a.tZ)(d.default,{children:(0,a.tZ)(Z.Z,{post:t})},t.id))),!(null==i?void 0:null===(e=i.results)||void 0===e?void 0:e.length)&&(0,a.tZ)(u.default,{})]})}),(0,a.tZ)("div",{css:(0,o.iv)(_()),children:(0,a.tZ)(h.default,{current:C.page||O.page,pageSize:O.limit,total:(null==i?void 0:i.count)||0,showSizeChanger:!1,hideOnSinglePage:!0,onChange:t=>{P({...O,page:t}),L.push("".concat(k.Z.POST,"?topic=").concat(C.topic,"&header=").concat(C.header,"&page=").concat(t))}})})]}),(0,a.tZ)(p.Z,{span:6,children:(0,a.tZ)(g.Z,{})})]})]})}}}]);