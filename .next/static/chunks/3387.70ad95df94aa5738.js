"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3387],{19841:function(t,e,i){i.d(e,{Z:function(){return m}});var n=i(82729),l=i(35944),a=i(70302),o=i(51024),r=i(86994),c=i(16829),s=i(46256),d=i(11163),u=i(9844),h=i(70351);function p(){let t=(0,n._)(["\n  .side-item {\n    margin-bottom: 10px;\n  }\n  a {\n    text-decoration: none;\n    font-weight: 600;\n  }\n  .fb-page {\n    .ant-card-body {\n      font-size: 20px;\n      a {\n        color: #0d8bf0 !important;\n      }\n    }\n  }\n  .topic {\n    .topic-item {\n      font-weight: 600;\n      cursor: pointer;\n      padding: 5px;\n    }\n  }\n"]);return p=function(){return t},t}let{Search:Z}=o.default,f=c.Z.div(p());function m(t){var e,i;let n=(0,d.useRouter)(),{search:o}=n.query,{homeData:c}=(0,u.Z)(),p=t=>{let e="/search/".concat(t);n.push(e,void 0,{shallow:!0})};return(0,l.BX)(f,{children:[(0,l.tZ)("div",{className:"side-item search-bar",children:(0,l.tZ)(a.default,{title:"T\xecm kiếm",style:{width:300},children:(0,l.tZ)(Z,{placeholder:"Nhập để t\xecm",onSearch:p,enterButton:!0,allowClear:!0,value:o})})}),(0,l.tZ)("div",{className:"side-item popular-content"}),(0,l.BX)("div",{className:"side-item topic",children:[(0,l.tZ)(a.default,{title:"Chuy\xean mục",style:{width:300},children:null==c?void 0:null===(e=c.category)||void 0===e?void 0:e.map(t=>(0,l.BX)("div",{className:"topic-item",onClick:()=>p(t),children:[(0,l.tZ)(r.default,{}),t.toLocaleUpperCase()]},t))}),(0,l.tZ)(a.default,{title:"B\xe0i viết mới",style:{width:300},children:null==c?void 0:null===(i=c.new_post)||void 0===i?void 0:i.map(t=>{var e;return(0,l.tZ)("div",{className:"topic-item",onClick:()=>{n.push("".concat(h.Z.POST,"/").concat(t.id))},children:(0,l.tZ)(a.default,{hoverable:!0,style:{width:"100%"},cover:(0,l.tZ)("img",{src:(null==t?void 0:null===(e=t.thumbnail)||void 0===e?void 0:e.image_path)||"",alt:"img",width:200,height:130}),children:(0,l.tZ)(s.Z,{title:null==t?void 0:t.name})})},t.id)})})]})]})}},6549:function(t,e,i){var n=i(82729),l=i(35944),a=i(98913),o=i.n(a),r=i(50549),c=i(70917);function s(){let t=(0,n._)(["\n        display: flex;\n        isplay: flex;\n        flex-wrap: wrap;\n        gap: 25px;\n        .doc-skeleton {\n          padding-left: 8px;\n          padding-right: 8px;\n        }\n      "]);return s=function(){return t},t}e.Z=function(t){return(0,l.tZ)("div",{css:(0,c.iv)(s()),children:o()(6).map((t,e)=>(0,l.BX)("div",{className:"doc-skeleton",children:[(0,l.tZ)(r.Z,{height:130,width:200}),(0,l.tZ)(r.Z,{height:10,width:200}),(0,l.tZ)(r.Z,{height:10,width:200}),(0,l.tZ)(r.Z,{height:20,width:130}),(0,l.tZ)(r.Z,{height:30,width:200})]},e))})}},9844:function(t,e,i){var n=i(88767),l=i(84626),a=i(45354);e.Z=()=>{let{data:t,error:e}=(0,n.useQuery)("home",l.Z.getHome,{staleTime:a.ok,keepPreviousData:!0,cacheTime:a.bQ,refetchOnWindowFocus:!1}),{data:i,error:o,refetch:r,isLoading:c}=(0,n.useQuery)("chat-history",l.Z.getChatHistory,{staleTime:a.ok,keepPreviousData:!0,cacheTime:a.bQ,refetchOnWindowFocus:!1});return{homeData:t,homeError:e,chatHistory:i,chatHistoryError:o,refetchChatList:r,chatLoading:c}}},43387:function(t,e,i){i.r(e);var n=i(82729),l=i(35944),a=i(36407),o=i(70302),r=i(5789),c=i(74253),s=i(36671),d=i(69843),u=i(55673),h=i(11163),p=i(67294),Z=i(73541),f=i(81591),m=i(19841),v=i(6549),g=i(84626),w=i(96507),C=i(24519),y=i(90455),x=i(70351),S=i(5005),L=i(49031),k=i(70917),_=i(45354),b=i(9473);function B(){let t=(0,n._)(["\n                font-size: 30px !important;\n              "]);return B=function(){return t},t}function N(){let t=(0,n._)(["\n              text-align: center;\n            "]);return N=function(){return t},t}e.default=()=>{var t,e;let[i,n]=(0,p.useState)(),[X,A]=(0,p.useState)(!1),E=(0,h.useRouter)(),O=(0,w.W)(),[T,H]=(0,p.useState)({page:1,limit:_.L8}),I=(0,b.v9)(t=>t.app.user),z=async t=>{let e=localStorage.getItem(C.BU.SESSION_KEY);A(!0);try{if(e){if(O.isClass){if(O.isClass){let e=await g.Z.listClasses(t.limit,t.page,"ALL"===O.topic?"":O.topic||"");n(e)}}else{let e=await g.Z.getAllCourses(t,"ALL"===O.topic?"":O.topic||"");n(e)}}else if(O.isClass){if(O.isClass){let e=await g.Z.getHomeClasses(t.limit,t.page,"ALL"===O.topic?"":O.topic||"");n(e)}}else{let e=await g.Z.getHomeCourses(t,"ALL"===O.topic?"":O.topic||"");n(e)}}catch(t){A(!1),console.log("Fetch Course Failed :>> ",t)}finally{A(!1)}};return(0,p.useEffect)(()=>{z(T)},[T]),(0,l.BX)("div",{children:[(0,l.tZ)(c.Z,{orientation:"left",children:(0,l.BX)(a.Z,{separator:(0,l.tZ)(L.default,{}),children:[(0,l.tZ)(a.Z.Item,{href:x.Z.HOME,children:(0,l.tZ)(S.default,{css:(0,k.iv)(B())})}),(0,l.tZ)(a.Z.Item,{children:O.header}),(0,l.tZ)(a.Z.Item,{children:(0,y.Rl)("ALL"===O.topic?"":O.topic||"")})]})}),(0,l.BX)(u.Z,{gutter:16,children:[(0,l.BX)(r.Z,{span:18,children:[(0,l.tZ)(o.default,{children:X?(0,l.tZ)(v.Z,{}):(0,l.tZ)(f.go,{children:(null==i?void 0:null===(t=i.results)||void 0===t?void 0:t.length)?null==i?void 0:null===(e=i.results)||void 0===e?void 0:e.map((t,e)=>{if(null==t||!t.test||(null==I?void 0:I.is_testing_user))return(0,l.tZ)(r.Z,{className:"item",children:(0,l.tZ)(Z.Z,{course:t})},e)}):(0,l.tZ)(s.default,{})})}),(0,l.tZ)("div",{css:(0,k.iv)(N()),children:(0,l.tZ)(d.default,{current:T.page,pageSize:T.limit,total:(null==i?void 0:i.count)||0,showSizeChanger:!1,hideOnSinglePage:!0,onChange:t=>{H({...T,page:t}),O.isClass?O.isClass&&E.push("".concat(x.Z.CLASS,"?topic=").concat(O.topic,"&header=").concat(O.header,"&isClass=true")):E.push("".concat(x.Z.COURSE,"?topic=").concat(O.topic,"&header=").concat(O.header))}})})]}),(0,l.tZ)(r.Z,{span:6,children:(0,l.tZ)(m.Z,{})})]})]})}}}]);