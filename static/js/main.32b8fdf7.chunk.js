(this["webpackJsonpvoice-to-text"]=this["webpackJsonpvoice-to-text"]||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),c=n(17),o=n.n(c),a=(n(31),n(14)),s=n(25),l=n(12),u=n.n(l),d=n(18),b=n(4),f=(n(33),n(22)),j=n(10),p=n(0),h=n(24),g=n(23),v=n(26),x=n(15);var O,m,w,y,k,C,S,N=function(e,t){var n=Object(r.useState)((function(){return function(e,t){var n=JSON.parse(localStorage.getItem(e));return null===n||""===n[1]?t:n||(t instanceof Function?t():t)}(e,t)})),i=Object(b.a)(n,2),c=i[0],o=i[1];return Object(r.useEffect)((function(){localStorage.setItem(e,JSON.stringify(c)),""===t[1]&&localStorage.removeItem(e)}),[c,e,t]),[c,o]},E=n(5),_=n(6),L=Object(_.a)(O||(O=Object(E.a)(["\n    *, *::after, *::before{\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n"]))),H=_.b.div(m||(m=Object(E.a)(["\n    z-index: 1;\n    display: flex;\n    position: absolute;\n    flex-direction: column-reverse;\n    width: fit-content;\n    height: fit-content;\n    padding: 5px;\n    align-items: flex-start;\n"]))),T=_.b.div(w||(w=Object(E.a)(["\n        width: ",";\n        display: flex;\n        flex-direction: column;\n        border-radius: 5px;\n        background-color: ",";\n        margin: 10px;\n        margin-top: 2px;\n        margin-left: 0;\n        visibility: hidden;\n        opacity: 0;\n        height: 0;\n        transition: 0.6s ease-in-out opacity, 0.2s ease-out visibility, 0.5s ease-out height;\n\n        \n        &.select{\n        visibility: visible;\n        opacity: 1;\n        overflow: hidden;\n        height: ",";\n        }\n"])),(function(e){var t=e.width;return"string"===typeof t?t:"200px"}),(function(e){var t=e.backgroundColor;return"string"===typeof t?t:"rgb(0, 119, 0)"}),(function(e){var t=e.height,n=e.children;return"string"===typeof t?t:n instanceof Array?"".concat(43*n.length,"px"):"50px"})),A=_.b.div(y||(y=Object(E.a)(["\n     padding: 10px;\n     margin: 1px;\n     border-radius: 5px;\n     cursor: pointer;\n\n    & label{\n        font-size: ",";\n        pointer-events: none;\n        color: ",";\n    }\n\n    & input{\n        display: none;\n    }\n\n    :hover{\n        background-color: ",";\n    }\n    :hover label{\n        color: ",";\n    }\n"])),(function(e){var t=e.fontSize;return"string"===typeof t?t:"18px"}),(function(e){var t=e.color;return t||"white"}),(function(e){var t=e.hoverBackgroundColor;return"string"===typeof t?t:"whitesmoke"}),(function(e){var t=e.hoverColor;return"string"===typeof t?t:"black"})),z=_.b.div(k||(k=Object(E.a)(["\n    display: flex;\n    justify-content:  space-between;\n    align-items:  center;\n    width: ",";\n    padding: 10px;\n    border-radius: 2px;\n    cursor: pointer;\n    background-color: ",";\n    height: ",";\n\n    border-radius: 5px;\n    & label{\n        color: ",";\n        font-size: ",";\n        pointer-events: none;\n    }\n\n"])),(function(e){var t=e.width;return"string"===typeof t?t:"200px"}),(function(e){var t=e.backgroundColor;return"string"===typeof t?t:" rgb(0, 119, 0)"}),(function(e){var t=e.selectedHeight;return"string"===typeof t?t:"50px"}),(function(e){var t=e.color;return"string"===typeof t?t:"white"}),(function(e){var t=e.fontSize;return"string"===typeof t?t:"18px"})),R=_.b.div(C||(C=Object(E.a)(["\n    justify-content:space-between;\n    display: flex;\n    flex-direction:row;\n    width: 10.5px;\n"]))),P=_.b.div(S||(S=Object(E.a)(["\n    background-color: white;\n    height: ",";\n    width: ",";\n    border-radius: 35%;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n    transition: 0.3s ease-in-out transform;   \n\n    &.arrow_up{\n        transform: ",";\n    }\n    &.arrow_down{\n        transform: ","\n    }\n"])),(function(e){var t=e.arrowHeight;return"string"===typeof t?t:"15px"}),(function(e){var t=e.arrowWidth;return"string"===typeof t?t:"3.2px"}),(function(e){return e.left?"rotateZ(30deg)":"rotateZ(-30deg)"}),(function(e){return e.left?"rotateZ(150deg)":"rotateZ(-150deg)"})),D=n(2),I=function(e){var t=e.width,n=e.backgroundColor,i=e.height,c=e.fontSize,o=e.color,a=e.hoverBackgroundColor,s=e.hoverColor,l=e.getValue,u=e.itemsList,d=e.arrowWidth,f=e.arrowHeight,j=e.selectedHeight,p=Object(r.useRef)(null),h=Object(r.useRef)(null),g=Object(r.useRef)(null),v=Object(r.useRef)(null),x=Object(r.useState)(!1),O=Object(b.a)(x,2),m=O[0],w=O[1],y=N("selectItem",[u instanceof Array?u[0][0]:"",u instanceof Array?u[0][1]:""]),k=Object(b.a)(y,2),C=k[0],S=k[1],E=Object(r.useState)(null),_=Object(b.a)(E,2),I=_[0],F=_[1],M=function(e){var t=e.target.children[0];F(t)},B=Object(r.useCallback)((function(){if(null!==I){var e=[I.id,I.innerHTML];S(e)}}),[I,S]);Object(r.useEffect)((function(){B()}),[I,B]),Object(r.useLayoutEffect)((function(){if(m)return h.current.classList.add("select"),g.current.classList.add("arrow_down"),void v.current.classList.add("arrow_down");h.current.classList.remove("select"),g.current.classList.remove("arrow_down"),v.current.classList.remove("arrow_down")}),[m]),Object(r.useEffect)((function(){m&&document.addEventListener("click",(function(e){"selected"!==e.target.id&&m&&w(!1)}))}),[m]),Object(r.useEffect)((function(){l instanceof Function&&l(C)}),[l,C]);var J=function(e,t){return Object(D.jsx)(P,{ref:t,arrowHeight:f,arrowWidth:d,left:e,className:"arrow_up"})};return Object(D.jsxs)(H,{children:[Object(D.jsx)(L,{}),Object(D.jsx)(T,{ref:h,width:t,backgroundColor:n,height:i,children:u instanceof Array?u.map((function(e){return t=e[0],n=e[1],Object(D.jsx)(A,{onClick:M,hoverBackgroundColor:a,hoverColor:s,fontSize:c,color:o,children:Object(D.jsx)("label",{htmlFor:t,id:t,value:t,children:n})},t);var t,n})):Object(D.jsx)(D.Fragment,{})}),Object(D.jsxs)(z,{onClick:function(e){e.preventDefault(),w((function(e){return!e}))},id:"selected",ref:p,width:t,backgroundColor:n,color:o,fontSize:c,selectedHeight:j,children:[Object(D.jsx)("label",{name:C[0]?C[0]:"",value:C[0]?C[0]:"",children:C[1]?C[1]:""}),Object(D.jsxs)(R,{children:[J(!0,g),J(!1,v)]})]})]})},F=window.speechRecognition||window.webkitSpeechRecognition,M=F&&new F,B=new SpeechSynthesisUtterance;M.interimResults=!0,M.continuous=!1;var J=[["en-US","English"],["ar-SA","Arabic"],["de-DE","German"],["fr-FR","French"],["es-ES","Spanish"],["tr-TR","Turkish"]],W=function(){var e=Object(r.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(),l=Object(b.a)(o,2),O=l[0],m=l[1],w=Object(r.useState)([]),y=Object(b.a)(w,2),k=y[0],C=y[1],S=Object(r.useState)({isClick:!1,target:null}),N=Object(b.a)(S,2),E=N[0],_=N[1],L=Object(r.useState)([]),H=Object(b.a)(L,2),T=H[0],A=H[1],z=Object(r.useState)({id:"",text:""}),R=Object(b.a)(z,2),P=R[0],F=R[1],W=Object(r.useState)(-1),Z=Object(b.a)(W,2),G=Z[0],V=Z[1],U=Object(r.useState)(!1),q=Object(b.a)(U,2),K=q[0],Q=q[1],X=Object(r.useRef)(null),Y=Object(r.useCallback)((function(e){return A(e)}),[A]),$=Object(x.b)({loading:!0,indicator:Object(D.jsx)(x.a,{className:"ball"})}),ee=$.containerProps,te=$.indicatorEl;Object(r.useEffect)((function(){K?X.current.classList.add("popup_fadein"):X.current.classList.remove("popup_fadein")}),[K]),Object(r.useEffect)((function(){M.lang=T[0],B.lang=T[0]}),[T]),Object(r.useEffect)((function(){ce()}),[n]),Object(r.useEffect)((function(){if(E.isClick){var e=E.target.parentElement.parentElement,t=e.children[1];if("remove"===E.target.id){var n=k.filter((function(e){return e.props.id!==t.id}));C(n)}else"copy"===E.target.id&&ne(e);_({isClick:!1,target:null})}}),[E.isClick,E.target,k,C]);var ne=function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.children[1],t.style.backgroundColor="green",e.next=4,navigator.clipboard.writeText(n.innerHTML);case 4:setInterval((function(){t.style.backgroundColor="whitesmoke"}),1e3);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=0,ie=function(e){e.preventDefault(),B.text=e.target.innerHTML,"P"===e.target.tagName?window.speechSynthesis.speak(B):"DIV"===e.target.tagName&&(2===++re&&(F({id:e.target.children[1].innerHTML,text:e.target.children[1].innerHTML}),Q(!0)),setTimeout((function(){return re=0}),200))},ce=function(){M.onend=function(){M.stop(),c(!1)},M.onresult=function(e){var t=e.results[0][0].transcript;m(i.a.createElement("p",{id:t,label:t},t))},M.onerror=function(e){console.log("Error occurred in recognition: "+e.error)}},oe=function(e){_({isClick:!0,target:e.target})},ae=function(e){_({isClick:!0,target:e.target})},se=function(e){if(e.preventDefault(),"CHANGE"===e.target.value&&""!==P.text){var t=k.filter((function(e,t){return e.props.id===P.id?V(t):e})),n=i.a.createElement("p",{id:P.text},P.text);t.splice(G,0,n),C(t),Q(!1)}else"CANCEL"===e.target.value&&Q(!1)};return Object(D.jsxs)("div",{className:"App",children:[Object(D.jsxs)("div",{className:"container",children:[Object(D.jsxs)("div",{className:"speechContainer box",children:[Object(D.jsx)("div",{className:"lang_continer",children:Object(D.jsx)(I,{width:"100px",selectedHeight:"30px",fontSize:"16px",arroWidth:"5px",arrowHeight:"13px",backgroundColor:"rgb(2,0,36)",getValue:Y,itemsList:J})}),Object(D.jsx)("h4",{children:"Press the button below to capture your speech"}),Object(D.jsxs)("div",{className:"bttn_container",children:[Object(D.jsx)("button",{type:"button",name:n?"stop":"start",onClick:function(e){e.preventDefault(),c((function(e){return!e})),"stop"===e.target.name?M.stop():"start"===e.target.name&&(M.start(),m(null))},children:Object(D.jsx)(p.b.Provider,{value:{color:n?"red":"black",size:35,boxShadow:"none"},children:n?Object(D.jsxs)("div",{className:"sp_st_container",children:[Object(D.jsx)(j.b,{}),"STOP"]}):Object(D.jsxs)("div",{className:"sp_st_container",children:[Object(D.jsx)(g.a,{}),"START"]})})}),Object(D.jsx)("button",{onClick:function(e){e.preventDefault(),c(!1),O&&O.props.children.length>0&&C((function(e){return[].concat(Object(s.a)(e),[O])})),m(null)},style:{backgroundColor:n?"#f6cf50":"#d4af37",cursor:n?"default":"pointer",pointerEvents:n?"none":"visible"},children:Object(D.jsx)(p.b.Provider,{value:{className:"btn_sv_icon"},children:Object(D.jsx)(h.a,{})})}),n?Object(D.jsx)("section",Object(a.a)(Object(a.a)({},ee),{},{children:te})):null]}),Object(D.jsx)("div",{className:"conv_text",children:O})]}),Object(D.jsxs)("div",{className:"textContainer box",children:[Object(D.jsx)("div",{className:"header",children:Object(D.jsx)("p",{children:"Saved notes"})}),k&&k.map((function(e,t){return function(e,t){return Object(D.jsxs)("div",{className:"saved_txt",onClick:ie,id:"cont".concat(t),"data-tip":"Press on the Text to hear it or double click to edit ",children:[Object(D.jsx)(v.a,{effect:"float",delayShow:500,type:"info"}),e,Object(D.jsx)("div",{className:"icon_container",children:Object(D.jsxs)(p.b.Provider,{value:{className:"prev_icon"},children:[Object(D.jsx)(f.a,{id:"copy",onClick:oe}),Object(D.jsx)(j.a,{id:"remove",onClick:ae})]})})]},t)}(e,t)}))]})]}),Object(D.jsx)("section",{ref:X,className:"popupContainer",children:Object(D.jsxs)("div",{className:"popupinnerContainer",children:[Object(D.jsx)("textarea",{type:"text",value:P.text,onChange:function(e){F((function(t){return{id:t.id,text:e.target.value}}))}}),Object(D.jsxs)("div",{className:"popup_btn_container",children:[Object(D.jsx)("input",{type:"button",value:"CANCEL",onClick:se}),Object(D.jsx)("input",{type:"button",value:"CHANGE",onClick:se})]})]})})]})};o.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(W,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.32b8fdf7.chunk.js.map