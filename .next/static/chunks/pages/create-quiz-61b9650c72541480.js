(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{66476:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-quiz",function(){return t(39963)}])},45561:function(n,e,t){"use strict";var i=t(82729),l=t(35944),o=t(51024),r=t(8799),a=t(67294),d=t(11278),c=t(62816),u=t(70917);function s(){let n=(0,i._)(["\n    position: relative;\n    z-index: 1;\n    input {\n      font-size: 20px;\n      font-weight: 600;\n      font-style: italic;\n      color: #3f3939 !important;\n      font-family: 'Montserrat';\n    }\n    .s-label {\n      top: ",";\n      font-size: ",";\n      opacity: 1;\n      font-weight: 700;\n      transition-property: top, font-size, opacity;\n      transition-duration: 0.1s;\n      transition-timing-function: linear;\n      margin-bottom: 5px;\n      display: inline-block;\n    }\n    .eyes {\n      position: absolute;\n      top: 50px;\n      right: 15px;\n      color: #051d29;\n      .anticon {\n        font-size: 24px;\n      }\n    }\n    input {\n      border-radius: 0;\n      font-size: 14px;\n      border: 1px solid;\n      background-color: transparent;\n      height: 100%;\n      min-height: 46px;\n      border-radius: 3px;\n      &:hover {\n        border-color: ",";\n      }\n      &:focus {\n        // border: 1px solid ",";\n        box-shadow: none;\n      }\n    }\n    .forgot-pwd-input-base,\n    .bg-input-base {\n      &:-webkit-autofill,\n      &:-webkit-autofill:hover,\n      &:-webkit-autofill:focus,\n      &:-webkit-autofill:active {\n        border: 1px solid rgba(255, 255, 255, 0.2) !important;\n        -webkit-text-fill-color: #fff !important;\n        -webkit-box-shadow: 0 0 0px 1000px #000 inset;\n      }\n    }\n\n    .status {\n      position: absolute;\n      z-index: 2;\n      top: 16px;\n      right: 15px;\n      width: 19px;\n      height: 19px;\n    }\n    .tip {\n      font-style: normal;\n      font-weight: normal;\n      font-size: 18px;\n      line-height: 22px;\n      letter-spacing: 0.01em;\n      color: #fff;\n      opacity: 0.7;\n    }\n    &.login-field {\n      input {\n        font-size: 20px;\n        font-weight: 600;\n        font-style: italic;\n        color: #3f3939 !important;\n        font-family: 'Montserrat';\n      }\n\n      width: 100%;\n      .s-label {\n        margin: 0 0 0 10px;\n        color: #000;\n      }\n      /* text-align: center; */\n      border-bottom: 4px solid transparent;\n      /* border-image: linear-gradient(0.25turn, rgba(255, 249, 34), rgba(255, 0, 128), rgba(56, 2, 155, 0)); */\n      border-image: linear-gradient(\n        207deg,\n        rgba(66, 103, 212, 1) 20%,\n        rgba(66, 146, 212, 1) 53%,\n        rgba(197, 22, 240, 1) 84%,\n        rgba(0, 212, 255, 1) 100%\n      );\n      border-image-slice: 1;\n      min-height: 46px !important;\n      input {\n        border: none;\n        &:-webkit-autofill,\n        &:-webkit-autofill:hover,\n        &:-webkit-autofill:focus,\n        &:-webkit-autofill:active {\n          -webkit-box-shadow: 0 0 0 30px white inset !important;\n        }\n      }\n    }\n    &.register-field {\n      .s-label {\n        margin: 0 0 0 10px;\n      }\n      width: 100%;\n      /* text-align: center; */\n      border-bottom: 4px solid transparent;\n      /* border-image: linear-gradient(0.25turn, rgba(255, 249, 34), rgba(255, 0, 128), rgba(56, 2, 155, 0)); */\n      border-image: linear-gradient(\n        207deg,\n        rgba(66, 103, 212, 1) 20%,\n        rgba(66, 146, 212, 1) 53%,\n        rgba(197, 22, 240, 1) 84%,\n        rgba(0, 212, 255, 1) 100%\n      );\n      border-image-slice: 1;\n      min-height: 46px !important;\n      input {\n        border: none;\n        &:-webkit-autofill,\n        &:-webkit-autofill:hover,\n        &:-webkit-autofill:focus,\n        &:-webkit-autofill:active {\n          -webkit-box-shadow: 0 0 0 30px white inset !important;\n        }\n      }\n    }\n    &.company-field {\n      input {\n        background-color: #fff !important;\n        min-height: 46px !important;\n      }\n    }\n    &.email-field {\n      input {\n        background-color: #fff !important;\n        min-height: 46px !important;\n      }\n    }\n    &.password-field {\n      input {\n        background-color: #fff !important;\n        min-height: 46px !important;\n      }\n    }\n    &.firstName-field {\n      input {\n        background-color: #fff !important;\n        min-height: 46px !important;\n      }\n    }\n    &.lastName-field {\n      input {\n        background-color: #fff !important;\n        min-height: 46px !important;\n      }\n    }\n    &.confirm-field {\n      input {\n        background-color: #fff !important;\n        min-height: 46px !important;\n      }\n    }\n    &.name-field {\n      input {\n        background-color: #fff !important;\n        min-height: 46px !important;\n      }\n    }\n    &.market-field {\n      input {\n        background-color: #fff !important;\n        min-height: 46px !important;\n      }\n    }\n    &.dre-field {\n      input {\n        background-color: #fff !important;\n        min-height: 46px !important;\n      }\n    }\n    &.website-field {\n      input {\n        background-color: #fff !important;\n        min-height: 40px !important;\n      }\n    }\n    &.website-lookup-field {\n      input {\n        background-color: #fff !important;\n        min-height: 46px !important;\n      }\n    }\n    &.password-protected {\n      .s-label {\n        display: block;\n        margin-bottom: 5px;\n        font-weight: 700;\n      }\n      input {\n        display: block;\n        width: 100%;\n        min-height: 38px;\n        padding: 8px 12px;\n        margin-bottom: 10px;\n        font-size: 14px;\n        line-height: 1.42857143;\n        color: #333333;\n        vertical-align: middle;\n        background-color: #ffffff;\n        border: 1px solid #cccccc;\n        border-radius: 5px;\n        &:focus {\n          border: 1px solid ",";\n          box-shadow: none;\n        }\n      }\n    }\n    .ant-input-affix-wrapper {\n      input {\n        &:focus {\n          border: none;\n        }\n      }\n    }\n  "]);return s=function(){return n},n}function p(){let n=(0,i._)(["\n              &.ant-input-number-group-wrapper {\n                width: 100%;\n                .ant-input-number {\n                  border-color: #cccccc !important;\n                }\n              }\n            "]);return p=function(){return n},n}let h=(n,e,t)=>{let i=n;return e||(i=!0),(0,u.iv)(s(),i?"7px":"-30px","17px",d.Z.text.blackColor,d.Z.text.blueColor,d.Z.text.blueColor)};e.Z=n=>{let{requiredMark:e,label:t,hasError:i,isSubmitting:d,className:s,isForceFocus:m,handleChange:f,handleBlur:g,handleFocus:v,onInput:x,value:Z,showEye:b,type:w,placeholder:y,handleChangeNumber:_,suffix:C,...q}=n,[k,S]=(0,a.useState)(!!Z),[F,z]=(0,a.useState)(!Z),[I,E]=(0,a.useState)(w),N=n=>{v&&v(n),S(!0)},T=n=>{g&&g(n),S(!1)};return(0,l.BX)("div",{className:s,css:[h(m||k,F,i)],children:[t&&(0,l.tZ)("label",{className:"s-label",children:"".concat(t).concat(e?"*":"")}),"number"!==w?(0,l.tZ)(o.default,{...q,type:I,placeholder:y,value:Z,onBlur:T,onFocus:N,onChange:n=>{f&&f(n),"number"!==w&&n.target.value&&n.target.value.length>0?z(!1):z(!0)},onInput:x}):(0,l.tZ)("div",{children:(0,l.tZ)(r.Z,{addonAfter:C,...q,type:I,placeholder:y,value:Z,onBlur:T,onFocus:N,onChange:_,min:0,css:(0,u.iv)(p())})}),b&&(0,l.tZ)("div",{className:"eyes",children:"password"===I?(0,l.tZ)(c.EyeOutlined,{onClick:()=>{E("text")}}):(0,l.tZ)(c.EyeInvisibleOutlined,{onClick:()=>{E("password")}})})]})}},31178:function(n,e,t){"use strict";t.d(e,{h2:function(){return u}});var i,l,o=t(82729),r=t(35944);t(67294);var a=t(16829);function d(){let n=(0,o._)(["\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background-color: #fff;\n    z-index: 9999;\n    display: grid;\n    justify-content: center;\n    align-items: center;\n    .loader {\n      width: 100vw;\n      height: 100vh;\n      border: 1px solid mistyrose;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      background-image: url('/loading.gif');\n      background-position: center center;\n      background-repeat: no-repeat;\n    }\n  "]);return d=function(){return n},n}function c(){let n=(0,o._)(["\n  min-height: 100px;\n  height: 100%;\n  background-color: #e7edf3;\n"]);return c=function(){return n},n}let u=n=>{let{cssName:e,isLoading:t}=n;if(!t)return null;let i=a.Z.div(d());return(0,r.tZ)(i,{className:"".concat(e),children:(0,r.tZ)("div",{className:"loader",children:(0,r.tZ)("div",{id:"ld3"})})})};(i=l||(l={})).CENTER="CENTER",i.TOP="TOP",a.Z.div(c())},65967:function(n,e,t){"use strict";var i=t(35944),l=t(41609),o=t.n(l),r=t(11163),a=t(67294),d=t(9473),c=t(31178),u=t(84626),s=t(66455),p=t(70805),h=t(90246),m=t(24519);e.Z=n=>{let{children:e}=n,t=(0,d.I0)(),l=(0,d.v9)(n=>n.app.user),f=(0,d.v9)(n=>n.app.header);(0,r.useRouter)();let[g,v]=(0,a.useState)(!0),x=async()=>{try{if(o()(l)){let n=await s.Z.myInfo();t(p.xZ.setMyProfile(n))}if(o()(f)){let n=await u.Z.listHeaders();t(p.xZ.setAppHeader(n))}}catch(n){(0,h.w)()}finally{v(!1)}},Z=async()=>{let n=localStorage.getItem(m.BU.SESSION_KEY);n?x():(v(!1),(0,h.w)())};return a.useEffect(()=>{Z()},[]),(0,i.tZ)(a.Fragment,{children:g?(0,i.tZ)(c.h2,{isLoading:!0}):e})}},66455:function(n,e,t){"use strict";var i=t(57527),l=t(84626);e.Z=class{static myInfo(){return i.x.get(l.Q.me())}static register(n,e,t,o){return i.x.post(l.Q.register(),{email:n,password1:e,password2:t,full_name:o})}static existEmail(n){return i.x.get(l.Q.existEmail(n))}static resetPwd(n){return i.x.post(l.Q.resetPwd(),{email:n})}static changePwd(n,e,t){return i.x.post(l.Q.changePwd(),{old_password:n,password1:e,password2:t})}}},39963:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return np}});var i=t(82729),l=t(35944),o=t(97935),r=t(5005),a=t(10526),d=t(32615),c=t(70917),u=t(16829),s=t(65400),p=t.n(s),h=t(5789),m=t(74253),f=t(1825),g=t(97538),v=t(56697),x=t(55673),Z=t(74048),b=t(2307),w=t(14104),y=t(50361),_=t.n(y),C=t(11163),q=t(67294),k=t(45561),S=t(65967),F=t(43888),z=t(4851),I=t(36671),E=t(64749),N=t(89552);function T(){let n=(0,i._)(["\n    position: relative;\n    z-index: 1;\n    width: 100%;\n    .ant-select {\n      min-height: 46px;\n      height: fit-content;\n      .ant-select-selection-overflow {\n        padding: 10px;\n      }\n      .ant-select-selection-placeholder {\n        padding-left: 10px;\n      }\n    }\n    .ant-select-arrow .anticon:not(.ant-select-suffix) {\n      pointer-events: none;\n    }\n    .s-label {\n      top: ",";\n      font-size: ",";\n      opacity: 1;\n      font-weight: 700;\n      transition-property: top, font-size, opacity;\n      transition-duration: 0.1s;\n      transition-timing-function: linear;\n      margin-bottom: 5px;\n      display: inline-block;\n    }\n  "]);return T=function(){return n},n}function X(){let n=(0,i._)(["\n  height: 20px;\n"]);return X=function(){return n},n}let B=n=>{let{iconStyle:e,...t}=n,i=(0,l.tZ)(z.default,{style:{fontSize:29,...e},spin:!0});return(0,l.tZ)(N.default,{...t,indicator:i})},V=(n,e,t)=>{let i=n;return e||(i=!0),(0,c.iv)(T(),i?"7px":"-30px","16px")},A=(0,u.Z)(E.default)(X());var D=n=>{let{requiredMark:e,label:t,hasError:i,className:o,isForceFocus:r,handleChange:a,handleBlur:d,handleFocus:c,value:u,itemSelect:s,placeholder:p,isGetContainer:h,suffixIcon:m,isLoading:f=!1,handlePopupScroll:g,loadingMoreMailing:v,...x}=n,Z=q.useRef(null),[b,w]=(0,q.useState)(!!u),[y,_]=(0,q.useState)(!u);return(0,l.BX)("div",{className:o,css:[V(r||b,y,i)],children:[t&&(0,l.BX)("label",{className:"s-label",onClick:()=>{var n;null===(n=Z.current)||void 0===n||n.focus()},children:[t,e?(0,l.tZ)("span",{className:"mark",children:"*"}):""]}),(0,l.tZ)(B,{spinning:f,children:(0,l.tZ)(A,{showArrow:!0,onChange:n=>{a&&a(n),n&&+n>0?_(!1):_(!0)},suffixIcon:m,onBlur:n=>{d&&d(n),w(!1)},onFocus:n=>{c&&c(n),w(!0)},mode:"multiple",notFoundContent:v?"Loading...":(0,l.tZ)(I.default,{className:"empty-data",image:I.default.PRESENTED_IMAGE_SIMPLE}),ref:Z,filterOption:!g,placeholder:p,value:""!==u?u:null,onPopupScroll:g,getPopupContainer:h?()=>document.getElementById("market"):()=>document.body,...x,children:null==s?void 0:s.map((n,e)=>(0,l.tZ)(E.default.Option,{value:n.value,label:n.label,children:n.label},n.value+e))})})]})},Q=t(84626),O=t(34317),P=t(70351),H=t(33264),L=t(57632);function W(){let n=(0,i._)(["\n          padding: 30px;\n          border: 1px solid #000;\n          margin: 10px;\n          border-width: 5px;\n          border-style: double;\n          .select-group {\n            display: flex;\n            gap: 15px;\n            margin-left: 20px;\n            align-items: end;\n            justify-content: space-between;\n            .course-field {\n              max-width: 300px;\n            }\n            .ant-input {\n              min-height: 46px !important;\n            }\n            .quiz-name-group {\n              display: flex;\n              gap: 15px;\n              align-items: center;\n            }\n          }\n          .quiz-header {\n            margin-top: 10px;\n            display: flex;\n            gap: 10px;\n            &.header {\n              margin-left: 20px;\n              margin-bottom: 20px;\n            }\n            div {\n              background-color: #2db7f5;\n              color: #fff;\n              padding: 5px;\n              border-radius: 5px;\n              text-align: center;\n            }\n            .stt {\n              width: 50px;\n            }\n            .time {\n              width: 110px;\n            }\n            .type {\n              width: 50px;\n            }\n            .content,\n            .option {\n              width: 220px;\n            }\n            .ans {\n              width: 200px;\n            }\n            .action {\n              width: 200px;\n            }\n          }\n        "]);return W=function(){return n},n}function M(){let n=(0,i._)(["\n            .course-field {\n              max-width: unset;\n            }\n            .ant-input,\n            .ant-input-number {\n              width: 100%;\n            }\n          "]);return M=function(){return n},n}function j(){let n=(0,i._)(["\n                      max-width: 500px;\n                      margin-bottom: 10px;\n                    "]);return j=function(){return n},n}function U(){let n=(0,i._)(["\n                      max-width: 500px;\n                      margin-bottom: 10px;\n                    "]);return U=function(){return n},n}function R(){let n=(0,i._)(["\n                  &.ant-col-24 {\n                    display: flex;\n                    gap: 20px;\n                    flex-wrap: wrap;\n                  }\n                "]);return R=function(){return n},n}function Y(){let n=(0,i._)(["\n                          height: 100%;\n                          .s-label {\n                            font-weight: 500;\n                            color: rgba(0, 0, 0, 0.88);\n                            font-size: 14px;\n                            display: block;\n                          }\n                          input {\n                            width: 300px;\n                          }\n                        "]);return Y=function(){return n},n}function G(){let n=(0,i._)(["\n                          max-width: 500px;\n                          margin-bottom: 10px;\n                        "]);return G=function(){return n},n}function K(){let n=(0,i._)(["\n                          max-width: 500px;\n                          margin-bottom: 10px;\n                        "]);return K=function(){return n},n}function J(){let n=(0,i._)(["\n                      input {\n                        width: 100%;\n                      }\n                    "]);return J=function(){return n},n}function $(){let n=(0,i._)(["\n                              height: 100%;\n                              .s-label {\n                                font-weight: 500;\n                                color: rgba(0, 0, 0, 0.88);\n                                font-size: 14px;\n                                display: block;\n                              }\n                              input {\n                                width: 300px;\n                              }\n                            "]);return $=function(){return n},n}function nn(){let n=(0,i._)(["\n                      input {\n                        width: 100%;\n                      }\n                    "]);return nn=function(){return n},n}function ne(){let n=(0,i._)(["\n                              height: 100%;\n                              .s-label {\n                                font-weight: 500;\n                                color: rgba(0, 0, 0, 0.88);\n                                font-size: 14px;\n                                display: block;\n                              }\n                              input {\n                                width: 300px;\n                              }\n                            "]);return ne=function(){return n},n}function nt(){let n=(0,i._)(["\n                              max-width: 500px;\n                              margin-bottom: 10px;\n                            "]);return nt=function(){return n},n}function ni(){let n=(0,i._)(["\n                              max-width: 500px;\n                              margin-bottom: 10px;\n                            "]);return ni=function(){return n},n}function nl(){let n=(0,i._)(["\n                  white-space: pre-wrap;\n                "]);return nl=function(){return n},n}function no(){let n=(0,i._)(["\n                    max-width: 500px;\n                    margin-bottom: 10px;\n                  "]);return no=function(){return n},n}function nr(){let n=(0,i._)(["\n                      display: flex;\n                      gap: 20px;\n                      .fiSe {\n                        max-width: 200px;\n                        overflow: hidden;\n                        text-wrap: nowrap;\n                        text-overflow: ellipsis;\n                        cursor: pointer;\n                      }\n                    "]);return nr=function(){return n},n}function na(){let n=(0,i._)(["\n                      display: flex;\n                      gap: 20px;\n                      .fiSe {\n                        max-width: 200px;\n                        overflow: hidden;\n                        text-wrap: nowrap;\n                        text-overflow: ellipsis;\n                        cursor: pointer;\n                      }\n                    "]);return na=function(){return n},n}function nd(){let n=(0,i._)(["\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n              "]);return nd=function(){return n},n}function nc(){let n=(0,i._)(["\n  .quiz-name {\n    font-weight: 700;\n    font-size: 22px;\n    font-style: italic;\n  }\n  .quiz-section-btn {\n    display: flex;\n    gap: 10px;\n    .ant-btn {\n      min-width: 120px;\n    }\n  }\n  .quiz-header {\n    div {\n      background-color: #f5f5f5;\n      color: #000;\n      font-weight: 500;\n    }\n\n    .stt,\n    .time,\n    .type,\n    .content,\n    .option,\n    .ans,\n    .action {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .type {\n      width: 120px;\n    }\n    .content,\n    .option,\n    .ans {\n      padding: 10px;\n      text-align: left;\n    }\n\n    .ans-pair {\n      .ans-fi,\n      .ans-se {\n        max-width: 100px;\n        text-overflow: ellipsis;\n        text-wrap: nowrap;\n        white-space: nowrap;\n        overflow: hidden;\n      }\n    }\n\n    .action {\n      .action-grp {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n      }\n    }\n  }\n"]);return nc=function(){return n},n}let nu=()=>{var n,e;let[t]=g.Z.useForm(),[i,o]=(0,q.useState)(""),[a,u]=(0,q.useState)([]),[s,m]=(0,q.useState)({open:!1,questionData:null}),[v,b]=(0,q.useState)(null),y=(0,C.useRouter)(),S=g.Z.useWatch("numAns",{form:t,preserve:!0}),z=g.Z.useWatch("type",{form:t,preserve:!0}),I=g.Z.useWatch("numFirstCol",{form:t,preserve:!0}),E=g.Z.useWatch("numSecondCol",{form:t,preserve:!0}),N=g.Z.useWatch("content",{form:t,preserve:!0}),T=g.Z.useWatch("hiddenWord",{form:t,preserve:!0}),X=async()=>{try{let n=await Q.Z.listQuiz();u(n)}catch(n){console.log(n)}};(0,q.useEffect)(()=>{X()},[]);let B=(0,q.useMemo)(()=>(0,H.mx)(_()(N)||"",_()(T)||[]),[N,T]),V=async()=>{m({open:!0,questionData:null});try{let n=await Q.Z.createQuiz({name:i});b(n.id)}catch(n){console.log(n.message)}o("")},A=async n=>{let{value:e,isUpdateQuestion:i=!1,continueCreateQuestion:l=!1}=n,o={};if(e.type===O.S.CHOICES){let n={};H.Do.slice(0,S||4).forEach((t,i)=>{n[t]=e["option.".concat(i+1)]});let t=Object.keys(n).map(e=>({choice:void 0,answer_type:O.ze.TEXT,answer:n[e],choice_name:e}));o={id:void 0,order:e.order,time_limit:e.time,choices:t,content:e.question,correct_answer:e.correct_ans,question_type:O.S.CHOICES,content_type:O.ze.TEXT}}else if(e.type===O.S.MATCH){let n=Array.from({length:I},(n,e)=>e+1).map(n=>({id:(0,L.Z)(),content_type:O.ze.TEXT,content:e["firstCol.".concat(n)]})),t=Array.from({length:E},(n,e)=>e+1).map(n=>({id:(0,L.Z)(),content_type:O.ze.TEXT,content:e["secondCol.".concat(n)]})),i=Array.from({length:I*E||0},(n,e)=>e+1).map((i,l)=>{var o,r;return[null==n?void 0:null===(o=n[e["ansFiCol.".concat(i)]])||void 0===o?void 0:o.id,null==t?void 0:null===(r=t[e["ansSeCol.".concat(i)]])||void 0===r?void 0:r.id]});o={id:void 0,order:e.order,time_limit:e.time,content:e.question,first_column:n,second_column:t,correct_answer:i,question_type:O.S.MATCH,content_type:O.ze.TEXT}}else if(e.type===O.S.FILL){let n=e.content.split(" ").filter(n=>" "!==n).map((n,t)=>({id:t+1,word:(0,H.kT)(n),hidden:e.hiddenWord.includes((0,H.kT)(n))}));o={id:void 0,order:e.order,time_limit:e.time,title:e.question,content:e.content,full_content:e.content,hidden_words:n,question_type:O.S.FILL}}if(v){if(i){var r;await Q.Z.editQuestion({quiz_id:v,question:{...o,id:(null===(r=s.questionData)||void 0===r?void 0:r.id)||""}})}else await Q.Z.createQuestion({quiz_id:v,question:{...o}});X(),t.resetFields(),l||m({open:!1,questionData:null})}},nr=async n=>{await Q.Z.deleteQuiz(n),X()},na=n=>{var e,t,i,l,o,r,a,d,c,u,s,p,h,m,f,g,v,x,Z,b,w,y;console.log("questionData",n);let _={};null==n||null===(t=n.choices_question)||void 0===t||null===(e=t.choices)||void 0===e||e.forEach((n,e)=>{_["option.".concat(e+1)]=n.answer}),null==n||null===(l=n.match_question)||void 0===l||null===(i=l.first_column)||void 0===i||i.forEach((n,e)=>{_["firstCol.".concat(e+1)]=n.content}),null==n||null===(r=n.match_question)||void 0===r||null===(o=r.second_column)||void 0===o||o.forEach((n,e)=>{_["secondCol.".concat(e+1)]=n.content}),null==n||null===(d=n.match_question)||void 0===d||null===(a=d.correct_answer)||void 0===a||a.forEach((e,t)=>{var i,l;let o=null===(i=n.match_question)||void 0===i?void 0:i.first_column.findIndex(n=>n.id===e[0]),r=null===(l=n.match_question)||void 0===l?void 0:l.second_column.findIndex(n=>n.id===e[1]);"number"==typeof o&&o>=0&&(_["ansFiCol.".concat(t+1)]=o),"number"==typeof r&&r>=0&&(_["ansSeCol.".concat(t+1)]=r)});let C={type:(null==n?void 0:n.question_type)||O.S.CHOICES,time:(null==n?void 0:n.time_limit)||"",question:(null==n?void 0:null===(c=n.choices_question)||void 0===c?void 0:c.content)||(null===(u=n.match_question)||void 0===u?void 0:u.content)||(null===(s=n.fill_blank_question)||void 0===s?void 0:s.title),numAns:(null==n?void 0:null===(h=n.choices_question)||void 0===h?void 0:null===(p=h.choices)||void 0===p?void 0:p.length)||4,..._,correct_ans:null==n?void 0:null===(m=n.choices_question)||void 0===m?void 0:m.correct_answer.name,numFirstCol:(null===(g=n.match_question)||void 0===g?void 0:null===(f=g.first_column)||void 0===f?void 0:f.length)||1,numSecondCol:(null===(x=n.match_question)||void 0===x?void 0:null===(v=x.second_column)||void 0===v?void 0:v.length)||1,content:null===(Z=n.fill_blank_question)||void 0===Z?void 0:Z.full_content,hiddenWord:null===(y=n.fill_blank_question)||void 0===y?void 0:null===(w=y.hidden_words)||void 0===w?void 0:null===(b=w.filter(n=>n.hidden))||void 0===b?void 0:b.map(n=>n.word),order:n.order||n.order||n.order};return C};return(0,q.useEffect)(()=>(s.questionData&&s.open?t.setFieldsValue(na(s.questionData)):t.setFieldsValue({numAns:4,type:O.S.CHOICES,numFirstCol:1,numSecondCol:1,hiddenWord:[],content:"",question:"",time:""}),t.resetFields()),[s.open]),(0,l.BX)("div",{children:[(0,l.BX)("div",{css:(0,c.iv)(W()),children:[(0,l.BX)("div",{className:"select-group",children:[(0,l.BX)("div",{className:"quiz-name-group",children:[(0,l.tZ)("div",{className:"quiz-name",children:(0,l.tZ)(k.Z,{label:"Ti\xeau đề quiz",placeholder:"Ti\xeau đề quiz",value:i,handleChange:n=>o(n.target.value)})}),(0,l.tZ)(p(),{type:"primary",onClick:V,disabled:!(null==i?void 0:i.length),icon:(0,l.tZ)(d.default,{}),children:"Tạo bộ quiz mới"})]}),(0,l.tZ)("div",{children:(0,l.tZ)(p(),{type:"primary",onClick:()=>y.push(P.Z.HOME),icon:(0,l.tZ)(r.default,{}),children:"Về trang chủ"})})]}),(0,l.tZ)(ns,{title:i,listQuiz:a,onAddNewQuestion:n=>{m({open:!0,questionData:null}),b(n)},onDeleteQuizItem:async n=>{await Q.Z.deleteQuestion([n]),X()},onEditQuizItem:(n,e)=>{b(n),m({open:!0,questionData:e})},onDeleteQuiz:nr})]}),(0,l.tZ)(f.Z,{title:"Tạo quiz cho ".concat(i||"..."),width:"100%",onClose:()=>{m({open:!1,questionData:null}),t.resetFields()},open:s.open,destroyOnClose:!0,children:(0,l.BX)(g.Z,{layout:"vertical",onFinish:n=>A({value:n,continueCreateQuestion:!1,isUpdateQuestion:!1}),form:t,initialValues:s.questionData?na(s.questionData):{numAns:4,type:O.S.CHOICES,numFirstCol:1,numSecondCol:1,hiddenWord:[],content:""},css:(0,c.iv)(M()),children:[(0,l.BX)(x.Z,{gutter:16,children:[(0,l.tZ)(h.Z,{span:8,children:(0,l.tZ)(g.Z.Item,{name:"type",label:"Loại Quiz",rules:[{required:!0,message:"Chọn loại c\xe2u hỏi"}],children:(0,l.tZ)(F.Z,{className:"course-field",placeholder:"Chọn loại c\xe2u hỏi",name:"type",type:"string",itemSelect:Object.keys(O.S).map(n=>({value:n,label:n})),handleChange:(n,e)=>{t.setFieldValue("type",n)},value:t.getFieldValue("type"),disabled:!!s.questionData})})}),(0,l.tZ)(h.Z,{span:8,children:(0,l.tZ)(g.Z.Item,{name:"time",label:"Thời gian",rules:[{required:!1},()=>({validator:(n,e)=>e&&e<0?Promise.reject("Thời gian l\xe0 một số dương."):Promise.resolve()})],children:(0,l.tZ)(k.Z,{placeholder:"Nhập thời gian",value:t.getFieldValue("time"),handleChangeNumber:n=>t.setFieldValue("time",n),type:"number",suffix:"(s)"})})}),(0,l.tZ)(h.Z,{span:8,children:(0,l.tZ)(g.Z.Item,{name:"order",label:"Thứ tự",rules:[{required:!1,message:"Điền thứ tự."}],children:(0,l.tZ)(k.Z,{placeholder:"Nhập thứ tự",value:t.getFieldValue("order"),handleChangeNumber:n=>t.setFieldValue("order",n),type:"number"})})})]}),(0,l.tZ)(x.Z,{gutter:16,children:(0,l.tZ)(h.Z,{span:24,children:(0,l.tZ)(g.Z.Item,{name:"question",label:"C\xe2u hỏi",rules:[{required:!0,message:"Điền c\xe2u hỏi quiz"}],children:(0,l.tZ)(k.Z,{name:"question",placeholder:"Nhập c\xe2u hỏi",value:t.getFieldValue("question"),handleChange:n=>t.setFieldValue("question",n.target.value)})})})}),z===O.S.CHOICES?(0,l.BX)(x.Z,{gutter:16,children:[(0,l.BX)(h.Z,{span:8,children:[(0,l.tZ)("p",{style:{width:"100%"},children:"Số phương \xe1n"}),(0,l.tZ)(g.Z.Item,{name:"numAns",rules:[{required:!0,message:"Chọn đ\xe1p \xe1n đ\xfang"}],shouldUpdate:!0,children:(0,l.tZ)(F.Z,{className:"course-field",placeholder:"Chọn số đ\xe1p \xe1n",type:"string",itemSelect:Array.from({length:H.Do.length},(n,e)=>e+1).map(n=>({value:n,label:n})),handleChange:n=>{t.setFieldValue("numAns",n)},value:t.getFieldValue("numAns"),css:(0,c.iv)(j())})})]}),(0,l.BX)(h.Z,{span:8,children:[(0,l.tZ)("p",{style:{width:"100%"},children:"Phương \xe1n đ\xfang"}),(0,l.tZ)(g.Z.Item,{name:"correct_ans",rules:[{required:!0,message:"Chọn đ\xe1p \xe1n đ\xfang"}],children:(0,l.tZ)(F.Z,{className:"course-field",placeholder:"Chọn đ\xe1p \xe1n đ\xfang",type:"string",itemSelect:H.Do.slice(0,S||4).map(n=>({value:n,label:n})),handleChange:n=>{t.setFieldValue("correct_ans",n)},value:t.getFieldValue("correct_ans"),css:(0,c.iv)(U())})})]}),(0,l.tZ)(h.Z,{span:24,css:(0,c.iv)(R()),children:H.Do.slice(0,S||4).map((n,e)=>(0,l.tZ)(g.Z.Item,{name:"option.".concat(e+1),rules:[{required:!0,message:"Điền đ\xe1p \xe1n ".concat(n)}],children:(0,l.tZ)(k.Z,{label:"Đ\xe1p \xe1n ".concat(n),name:n,placeholder:"Đ\xe1p \xe1n ".concat(n),value:t.getFieldValue("option.".concat([e+1])),handleChange:n=>{console.log("e",n),t.setFieldValue("option.".concat([e+1]),n.target.value)},css:(0,c.iv)(Y())})},n))})]}):z===O.S.MATCH?(0,l.BX)(x.Z,{gutter:16,children:[(0,l.BX)(h.Z,{span:16,children:[(0,l.BX)(x.Z,{gutter:16,children:[(0,l.BX)(h.Z,{span:12,children:[(0,l.tZ)("p",{style:{width:"100%"},children:"Số phương \xe1n cột 1"}),(0,l.tZ)(g.Z.Item,{name:"numFirstCol",shouldUpdate:!0,rules:[{required:!0,message:"Chọn số phương \xe1n cột 1"}],children:(0,l.tZ)(F.Z,{className:"course-field",placeholder:"Chọn số phương \xe1n cột 1",type:"string",itemSelect:Array.from({length:H.Do.length},(n,e)=>e+1).map(n=>({value:n,label:n})),handleChange:n=>{t.setFieldValue("numFirstCol",n)},value:t.getFieldValue("numFirstCol"),css:(0,c.iv)(G())})})]}),(0,l.BX)(h.Z,{span:12,children:[(0,l.tZ)("p",{style:{width:"100%"},children:"Số phương \xe1n cột 2"}),(0,l.tZ)(g.Z.Item,{name:"numSecondCol",rules:[{required:!0,message:"Chọn số phương \xe1n cột 2"}],children:(0,l.tZ)(F.Z,{className:"course-field",placeholder:"Chọn số phương \xe1n cột 2",type:"string",itemSelect:Array.from({length:H.Do.length},(n,e)=>e+1).map(n=>({value:n,label:n})),handleChange:n=>{t.setFieldValue("numSecondCol",n)},value:t.getFieldValue("numSecondCol"),css:(0,c.iv)(K())})})]})]}),(0,l.BX)(x.Z,{gutter:16,children:[(0,l.tZ)(h.Z,{span:12,css:(0,c.iv)(J()),children:Array.from({length:I},(n,e)=>e+1).map(n=>(0,l.tZ)(g.Z.Item,{name:"firstCol.".concat(n),rules:[{required:!0,message:"Điền phương \xe1n ".concat(n)}],children:(0,l.tZ)(k.Z,{label:"Phương \xe1n ".concat(n),placeholder:"Phương \xe1n ".concat(n),value:t.getFieldValue(n),handleChange:e=>t.setFieldValue("firstCol.".concat([n]),e.target.value),css:(0,c.iv)($())})},n))}),(0,l.tZ)(h.Z,{span:12,css:(0,c.iv)(nn()),children:H.Do.slice(0,E||1).map((n,e)=>(0,l.tZ)(g.Z.Item,{name:"secondCol.".concat(e+1),rules:[{required:!0,message:"Điền phương \xe1n ".concat(n)}],children:(0,l.tZ)(k.Z,{label:"Phương \xe1n ".concat(n),placeholder:"Phương \xe1n ".concat(n),value:t.getFieldValue("secondCol.".concat([e+1])),handleChange:n=>t.setFieldValue("secondCol.".concat([e+1]),n.target.value),css:(0,c.iv)(ne())})},n))})]})]}),(0,l.tZ)(h.Z,{span:8,children:(0,l.BX)(x.Z,{gutter:16,children:[(0,l.BX)(h.Z,{span:12,children:[(0,l.tZ)("p",{style:{width:"100%"},children:"Đ\xe1p \xe1n cột 1"}),Array.from({length:I*E||0},(n,e)=>e+1).map((n,e)=>(0,l.tZ)(g.Z.Item,{name:"ansFiCol.".concat(n),rules:[{required:!1,message:"Chọn đ\xe1p cột 1"}],children:(0,l.tZ)(F.Z,{className:"course-field",placeholder:"Chọn đ\xe1p \xe1n cột 1",type:"string",itemSelect:Array.from({length:I},(n,e)=>e+1).map((n,e)=>({value:e,label:"Phương \xe1n "+n})),handleChange:e=>{t.setFieldValue("ansFiCol.".concat(n),e)},value:t.getFieldValue("ansFiCol.".concat(n)),css:(0,c.iv)(nt())})},e))]}),(0,l.BX)(h.Z,{span:12,children:[(0,l.tZ)("p",{style:{width:"100%"},children:"Đ\xe1p \xe1n cột 2"}),Array.from({length:I*E||0},(n,e)=>e+1).map((n,e)=>(0,l.tZ)(g.Z.Item,{name:"ansSeCol.".concat(n),rules:[{required:!1,message:"Chọn đ\xe1p cột 2"}],children:(0,l.tZ)(F.Z,{className:"course-field",placeholder:"Chọn đ\xe1p cột 2",type:"string",itemSelect:H.Do.slice(0,E||1).map((n,e)=>({value:e,label:"Phương \xe1n "+n})),handleChange:e=>{t.setFieldValue("ansSeCol.".concat(n),e)},value:t.getFieldValue("ansSeCol.".concat(n)),css:(0,c.iv)(ni())},e)},e))]})]})})]}):z===O.S.FILL?(0,l.BX)("div",{children:[(0,l.tZ)(g.Z.Item,{name:"content",label:"Nội dung",rules:[{required:!0,message:"Điền nội dung c\xe2u."}],children:(0,l.tZ)(w.default,{rows:4,name:"content",placeholder:"Nhập nội dung",value:t.getFieldValue("content"),onChange:n=>t.setFieldValue("content",n.target.value)})}),(0,l.tZ)("div",{className:"render-content",css:(0,c.iv)(nl()),children:B}),(0,l.tZ)(g.Z.Item,{name:"hiddenWord",shouldUpdate:!0,rules:[{required:!0,message:"Chọn từ để ẩn"}],children:(0,l.tZ)(D,{name:"hiddenWord",label:"Từ ẩn",className:"course-field",placeholder:"Chọn từ để ẩn",type:"string",itemSelect:null==N?void 0:null===(e=N.split(" "))||void 0===e?void 0:null===(n=e.filter(n=>{var e;return(null===(e=(0,H.kT)(n))||void 0===e?void 0:e.trim())!==""}))||void 0===n?void 0:n.map(n=>({value:(0,H.kT)(n),label:(0,H.kT)(n)})),handleChange:n=>{t.setFieldValue("hiddenWord",n)},value:t.getFieldValue("hiddenWord")||[],css:(0,c.iv)(no())})})]}):(0,l.tZ)("div",{}),(0,l.tZ)(x.Z,{children:(0,l.tZ)(Z.default,{children:s.questionData?(0,l.tZ)(p(),{onClick:()=>{let n=t.getFieldsValue();t.validateFields();let e=t.getFieldsError();e.every(n=>0===n.errors.length)&&A({value:n,continueCreateQuestion:!1,isUpdateQuestion:!0}),t.resetFields(),m(n=>({...n,open:!1}))},children:"Lưu Thay Đổi"}):(0,l.BX)(l.HY,{children:[(0,l.tZ)(p(),{onClick:()=>{v&&!a.some(n=>n.id===v)&&nr(v),t.resetFields(),m(n=>({...n,open:!1}))},children:"Huỷ"}),(0,l.tZ)(p(),{type:"dashed",onClick:async()=>{let n=t.getFieldsValue();t.validateFields();let e=t.getFieldsError();e.every(n=>0===n.errors.length)&&A({value:n,continueCreateQuestion:!0,isUpdateQuestion:!1})},children:"Tạo v\xe0 Th\xeam"}),(0,l.tZ)(p(),{type:"primary",htmlType:"submit",children:"Tạo"})]})})})]})})]})},ns=n=>{let{title:e,listQuiz:t,onAddNewQuestion:i,onDeleteQuizItem:r,onEditQuizItem:d,onDeleteQuiz:u}=n,[s,h]=(0,q.useState)({open:null,id:""}),f=n=>{var e;let i=null===(e=t.find(e=>{var t;return null===(t=e.questions)||void 0===t?void 0:t.some(e=>e.id===n.id)}))||void 0===e?void 0:e.id;d(i||"",n)},g=[{title:"STT",dataIndex:"order",key:"order",width:80,className:"stt"},{title:"Thời gian",dataIndex:"time_limit",key:"time_limit",width:100},{title:"Loại",dataIndex:"question_type",key:"question_type",width:120},{title:"C\xe2u hỏi",key:"content",width:150,render:(n,e)=>{if(e.question_type===O.S.CHOICES)return(0,l.tZ)("div",{children:e.choices_question.content});if(e.question_type===O.S.MATCH){var t;return(0,l.tZ)("div",{children:null===(t=e.match_question)||void 0===t?void 0:t.content})}if(e.question_type===O.S.FILL)return(0,l.tZ)("div",{children:e.fill_blank_question.title})}},{title:"Lựa chọn",dataIndex:"option",key:"option",width:400,render:(n,e)=>{if(e.question_type===O.S.CHOICES){var t;return(0,l.tZ)("div",{children:null===(t=e.choices_question)||void 0===t?void 0:t.choices.map((n,e)=>(0,l.BX)("div",{children:[n.choice_name,": ",n.answer]},n.choice_name+e))})}if(e.question_type===O.S.MATCH){let n=e.match_question.first_column,t=e.match_question.second_column;return(0,l.tZ)("div",{children:Array.from({length:Math.max(n.length,t.length)},(n,e)=>e+1).map((e,i)=>{var r,a,d,u,s,p;return(0,l.BX)("div",{css:(0,c.iv)(nr()),children:[(0,l.tZ)("div",{className:"fiSe",title:null==n?void 0:null===(r=n[i])||void 0===r?void 0:r.content,children:null==n?void 0:null===(a=n[i])||void 0===a?void 0:a.content}),(null==n?void 0:null===(d=n[i])||void 0===d?void 0:d.content)&&(null==t?void 0:null===(u=t[i])||void 0===u?void 0:u.content)&&(0,l.tZ)(o.default,{}),(0,l.tZ)("div",{className:"fiSe",title:null==t?void 0:null===(s=t[i])||void 0===s?void 0:s.content,children:null==t?void 0:null===(p=t[i])||void 0===p?void 0:p.content})]},i)})})}if(e.question_type===O.S.FILL)return(0,l.tZ)("div",{children:e.fill_blank_question.content})}},{title:"Đ\xe1p \xe1n",key:"ans",width:400,render:(n,e)=>{if(e.question_type===O.S.CHOICES)return(0,l.tZ)("div",{children:e.choices_question.correct_answer.name});if(e.question_type===O.S.MATCH){let n=e.match_question.first_column,t=e.match_question.second_column,i=(n,e)=>{var t;return null===(t=e.find(e=>e.id===n))||void 0===t?void 0:t.content};return(0,l.tZ)("div",{children:e.match_question.correct_answer.map((e,o)=>{let r=i(e[0],n),d=i(e[1],t);return(0,l.BX)("div",{css:(0,c.iv)(na()),children:[(0,l.tZ)("div",{className:"fiSe",title:r,children:r}),!!r&&!!d&&(0,l.tZ)(a.default,{}),(0,l.tZ)("div",{className:"fiSe",title:d,children:d})]},e+o)})})}if(e.question_type===O.S.FILL){var t,i;return(0,l.tZ)("div",{children:null===(i=e.fill_blank_question.hidden_words)||void 0===i?void 0:null===(t=i.filter(n=>n.hidden))||void 0===t?void 0:t.map((n,e)=>(0,l.BX)("div",{children:[e+1," - ",n.word]},n.id))})}}},{title:"Sửa / Xo\xe1",key:"action",width:100,render:(n,e)=>(0,l.tZ)("div",{className:"action",children:(0,l.BX)("div",{className:"action-grp",css:(0,c.iv)(nd()),children:[(0,l.tZ)(p(),{type:"primary",ghost:!0,onClick:()=>{f(e)},children:"Edit"}),(0,l.tZ)(p(),{onClick:()=>r(e.id),type:"dashed",danger:!0,ghost:!0,children:"Delete"})]})})}];return(0,l.tZ)("div",{children:null==t?void 0:t.map((n,e)=>(0,l.BX)("div",{children:[(0,l.tZ)(m.Z,{children:n.name}),(0,l.BX)(Z.default,{style:{marginBottom:16},children:[(0,l.tZ)(p(),{type:"primary",onClick:()=>{i(n.id)},children:"Th\xeam c\xe2u hỏi"}),(0,l.tZ)(p(),{type:"primary",danger:!0,onClick:()=>{h({open:n.id,id:n.id})},children:'Xo\xe1 quiz "'.concat(n.name,'"')})]}),(0,l.tZ)(b.Z,{dataSource:null==n?void 0:n.questions,columns:g,scroll:{x:1080},pagination:!1}),(0,l.tZ)(v.default,{title:"Xo\xe1 Quiz ".concat(n.name),open:n.id===s.open,onOk:()=>{u(s.id),h(n=>({...n,open:null}))},centered:!0,onCancel:()=>h(n=>({...n,open:null})),okText:"X\xe1c nhận",cancelText:"Huỷ",children:(0,l.tZ)("p",{children:"X\xe1c nhận xo\xe1"})})]},n.id))})};u.Z.div(nc());var np=()=>(0,l.tZ)(q.Fragment,{children:(0,l.tZ)(S.Z,{children:(0,l.tZ)(nu,{})})})}},function(n){n.O(0,[2728,2887,1024,1711,1073,3686,9774,2888,179],function(){return n(n.s=66476)}),_N_E=n.O()}]);