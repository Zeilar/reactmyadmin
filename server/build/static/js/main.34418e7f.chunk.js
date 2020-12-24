(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(17),c=n(0),o=n.n(c),s=Object(c.createContext)();function i(e){var t,n=e.children,o=Object(c.useState)(null!==(t=JSON.parse(localStorage.getItem("connections")))&&void 0!==t?t:[]),i=Object(a.a)(o,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(u))}),[u]),Object(r.jsx)(s.Provider,{value:{connections:u,setConnections:l},children:n})}var u=n(18),l=n(3),b=n(5),d=n.n(b),j=n(14),p=n(4),h=n(11),f=n(9),O=n(7),v=n.n(O);function x(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(r.jsx)("tbody",Object(p.a)(Object(p.a)({},n),{},{children:t}))}function m(e){var t=e.children,n=e.className,a=Object(h.a)(e,["children","className"]),c=Object(f.a)({cell:{textOverflow:"ellipsis",overflow:"hidden",maxWidth:"20rem",padding:10}})();return Object(r.jsx)("td",Object(p.a)(Object(p.a)({className:v()(c.cell,n)},a),{},{children:t}))}function g(e){var t=e.children,n=e.className,a=Object(h.a)(e,["children","className"]),c=Object(f.a)({row:{backgroundColor:"var(--table-primary)","&:nth-child(odd)":{backgroundColor:"var(--table-secondary)"}}})();return Object(r.jsx)("tr",Object(p.a)(Object(p.a)({className:v()(c.row,n)},a),{},{children:t}))}function w(e){var t=e.children,n=e.className,a=Object(h.a)(e,["children","className"]),c=Object(f.a)({table:{position:"relative",width:"80vw"}})();return Object(r.jsx)("table",Object(p.a)(Object(p.a)({className:v()(c.table,n)},a),{},{children:t}))}var y=n(19),k=n(20);function N(){var e=Object(y.a)(["\n    margin: var(--container-margin);\n    flex-direction: column;\n    display: flex;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return N=function(){return e},e}function S(){var e=Object(y.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return S=function(){return e},e}function C(){var e=Object(y.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n        color: white;\n    }\n"]);return C=function(){return e},e}function T(){var e=Object(y.a)(["\n    flex-direction: column;\n    display: flex;\n"]);return T=function(){return e},e}function q(){var e=Object(y.a)(["\n    flex-direction: row;\n    display: flex;\n"]);return q=function(){return e},e}var z=k.a.div(q()),E=k.a.div(T()),J=k.a.button(C()),L=k.a.h1(S()),B=k.a.div(N()),I=function(e){var t=e.children,n=e.scroll,a=void 0!==n&&n,c=Object(h.a)(e,["children","scroll"]);return Object(r.jsx)(B,Object(p.a)(Object(p.a)({style:{overflowX:a?"auto":null}},c),{},{children:t}))},W=n(23),A=n(34),P=n(35),X=function(){function e(){Object(A.a)(this,e)}return Object(P.a)(e,null,[{key:"request",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r,a,c,o,s,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"get",n=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:null,c={method:t,headers:Object(p.a)({Accept:"application/json"},a)},e.next=7,fetch(n,Object(p.a)(Object(p.a)({},r),c));case 7:return o=e.sent,s=[],e.prev=9,e.next=12,o.json();case 12:s=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:s,code:o.status,response:o});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("get",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("post",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("put",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("patch",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("delete",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}]),e}(),D=n(22),F=n.n(D);function H(){var e=Object(f.a)({tableLinks:{marginRight:10},tableLink:{backgroundColor:"var(--table-primary)",textDecoration:"none",fontSize:"1.25rem",textAlign:"left",cursor:"pointer",marginBottom:2,padding:15,border:0,"&:hover":{backgroundColor:"var(--table-secondary)"},"&.active":{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontWeight:"bold"},"&:last-child":{marginBottom:0}},rows:{maxWidth:"calc(100vw - var(--container-margin))",position:"relative",overflowX:"auto"}})(),t=(Object(c.useContext)(s).setConnections,Object(l.f)()),n=t.name,o=t.activeTable,i=(t.page,Object(c.useState)([])),b=Object(a.a)(i,2),p=(b[0],b[1]),h=Object(c.useState)([]),O=Object(a.a)(h,2),y=O[0],k=O[1],N=Object(c.useState)([]),S=Object(a.a)(N,2),C=(S[0],S[1]),T=Object(c.useState)(!0),q=Object(a.a)(T,2),J=q[0],B=q[1],A=Object(c.useState)(!0),P=Object(a.a)(A,2),D=(P[0],P[1]),H=Object(c.useState)(),M=Object(a.a)(H,2),R=M[0],G=M[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),e.next=3,X.get("/databases/".concat(n));case 3:t=e.sent,r=t.code,a=t.data,B(!1),k(a),(r<200||r>=300)&&G("Something went wrong loading the database");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.useEffect)((function(){Object(j.a)(d.a.mark((function e(){var t,r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){return(c=Object(j.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/databases/".concat(n,"/").concat(o,"/columns"));case 2:t=e.sent,r=t.code,a=t.data,p(a),(r<200||r>=300)&&G("Something went wrong loading the table columns");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},a=function(){return c.apply(this,arguments)},r=function(){return(r=Object(j.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/databases/".concat(n,"/").concat(o));case 2:t=e.sent,r=t.code,a=t.data,C(a),(r<200||r>=300)&&G("Something went wrong loading the table rows");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},t=function(){return r.apply(this,arguments)},D(!0),e.next=7,a();case 7:return e.next=9,t();case 9:D(!1);case 10:case"end":return e.stop()}}),e)})))()}),[n,o]),Object(r.jsxs)(I,{children:[J?Object(r.jsx)(F.a,{className:"loading",path:W.b,spin:1,size:2}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(L,{children:[Object(r.jsx)(F.a,{path:W.a}),Object(r.jsx)("span",{children:n})]}),Object(r.jsxs)(z,{className:v()(e.rows),children:[Object(r.jsx)(E,{className:v()(e.tableLinks),as:"ul",children:y.map((function(t){var a=t.table;return Object(r.jsx)(u.b,{className:v()(e.tableLink),to:"/database/".concat(n,"/").concat(a),children:a},a)}))}),Object(r.jsx)(w,{children:Object(r.jsx)(x,{children:Object(r.jsx)(g,{children:Object(r.jsx)(m,{children:Object(r.jsx)(F.a,{className:"loading center",path:W.b,spin:1,size:2})})})})})]})]}),!J&&!y.length&&Object(r.jsx)("p",{className:"errorText",children:"The database is completely empty"}),R&&Object(r.jsx)("p",{className:"errorText",children:R})]})}function M(){var e=Object(f.a)({start:{}})();Object(c.useContext)(s).connections;return Object(r.jsx)(I,{className:v()(e.start,"center-children"),children:Object(r.jsx)(J,{as:u.b,to:"/database/tph",children:"Test TPH db"})})}function R(){return Object(r.jsx)(u.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/database/:name/:activeTable?/:page?",exact:!0,children:Object(r.jsx)(H,{})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(M,{})})]})})}function G(){return Object(r.jsx)(i,{children:Object(r.jsx)(R,{})})}var K=n(36),Q=n.n(K);n(50);Q.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.34418e7f.chunk.js.map