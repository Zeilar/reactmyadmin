(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(14),c=n(0),o=n.n(c),s=Object(c.createContext)();function i(e){var t,n=e.children,o=Object(c.useState)(null!==(t=JSON.parse(localStorage.getItem("connections")))&&void 0!==t?t:[]),i=Object(a.a)(o,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(u))}),[u]),Object(r.jsx)(s.Provider,{value:{connections:u,setConnections:l},children:n})}var u=n(21),l=n(4),b=n(5),p=n.n(b),d=n(15),j=n(3),f=n(10),h=n(18),O=n(19);function v(){var e=Object(h.a)(["\n    margin: var(--container-margin);\n    flex-direction: column;\n    display: flex;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return v=function(){return e},e}function x(){var e=Object(h.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return x=function(){return e},e}function m(){var e=Object(h.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n        color: white;\n    }\n"]);return m=function(){return e},e}function g(){var e=Object(h.a)(["\n    flex-direction: column;\n    display: flex;\n"]);return g=function(){return e},e}function w(){var e=Object(h.a)(["\n    flex-direction: row;\n    display: flex;\n"]);return w=function(){return e},e}var y=O.a.div(w()),k=O.a.div(g()),N=O.a.button(m()),S=O.a.h1(x()),C=O.a.div(v()),z=function(e){var t=e.children,n=e.scroll,a=void 0!==n&&n,c=Object(f.a)(e,["children","scroll"]);return Object(r.jsx)(C,Object(j.a)(Object(j.a)({style:{overflowX:a?"auto":null}},c),{},{children:t}))},T=n(8),q=n(23),E=n(6),J=n.n(E),W=n(22),B=n.n(W);function I(e){var t=e.spinner,n=void 0!==t&&t,a=e.size,c=void 0===a?2:a,o=e.spin,s=void 0===o?1:o,i=e.className,u=void 0===i?"":i,l=Object(f.a)(e,["spinner","size","spin","className"]),b=Object(T.a)({"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.1},"100%":{opacity:1}},database:{animation:"$pulse 1.5s infinite"},loading:{color:"var(--color-primary)",margin:"auto","&.center":{transform:"translate(-50%, -50%)",position:"absolute",left:"50%",top:"50%"}}})();return n?Object(r.jsx)(B.a,Object(j.a)({className:J()(b.loading,u),path:q.b,size:c,spin:s},l)):Object(r.jsx)(B.a,Object(j.a)({className:J()(b.database,b.loading,u),path:q.a,size:c},l))}var L=n(34),A=n(35),P=function(){function e(){Object(L.a)(this,e)}return Object(A.a)(e,null,[{key:"request",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,r,a,c,o,s,i=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"get",n=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:null,c={method:t,headers:Object(j.a)({Accept:"application/json"},a)},e.next=7,fetch(n,Object(j.a)(Object(j.a)({},r),c));case 7:return o=e.sent,s=[],e.prev=9,e.next=12,o.json();case 12:s=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:s,code:o.status,response:o});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(d.a)(p.a.mark((function t(n,r,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("get",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(d.a)(p.a.mark((function t(n,r,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("post",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(d.a)(p.a.mark((function t(n,r,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("put",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(d.a)(p.a.mark((function t(n,r,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("patch",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(d.a)(p.a.mark((function t(n,r,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("delete",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}]),e}();n(36);function X(e){var t=e.children,n=e.className,a=Object(f.a)(e,["children","className"]),c=Object(T.a)({table:{position:"relative",width:"80vw"}})();return Object(r.jsx)("table",Object(j.a)(Object(j.a)({className:J()(c.table,n)},a),{},{children:t}))}function D(){var e=Object(T.a)({tableLinks:{marginRight:10},tableLink:{backgroundColor:"var(--table-primary)",textDecoration:"none",fontSize:"1.25rem",textAlign:"left",cursor:"pointer",marginBottom:2,padding:15,border:0,"&:hover":{backgroundColor:"var(--table-secondary)"},"&.active":{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontWeight:"bold"},"&:last-child":{marginBottom:0}},rows:{maxWidth:"calc(100vw - var(--container-margin))",position:"relative",overflowX:"auto"},tableWrapper:{position:"relative",width:"80vw"}})(),t=(Object(c.useContext)(s).setConnections,Object(l.f)()),n=t.name,o=t.activeTable,i=(t.page,Object(c.useState)([])),u=Object(a.a)(i,2),b=u[0],j=u[1],f=Object(c.useState)([]),h=Object(a.a)(f,2),O=h[0],v=h[1],x=Object(c.useState)([]),m=Object(a.a)(x,2),g=m[0],w=m[1],N=Object(c.useState)(!0),C=Object(a.a)(N,2),E=C[0],W=C[1],L=Object(c.useState)(!0),A=Object(a.a)(L,2),D=A[0],F=A[1],H=Object(c.useState)(),M=Object(a.a)(H,2),R=M[0],$=M[1];return Object(c.useEffect)((function(){Object(d.a)(p.a.mark((function e(){var t,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),e.next=3,P.get("/databases/".concat(n));case 3:t=e.sent,r=t.code,a=t.data,W(!1),v(a),(r<200||r>=300)&&$("Something went wrong loading the database");case 9:case"end":return e.stop()}}),e)})))()}),[n]),Object(c.useEffect)((function(){O.length>0&&Object(d.a)(p.a.mark((function e(){var t,r,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){return(c=Object(d.a)(p.a.mark((function e(){var t,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/databases/".concat(n,"/").concat(o,"/columns"));case 2:t=e.sent,r=t.code,a=t.data,j(a),(r<200||r>=300)&&$("Something went wrong loading the table columns");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},a=function(){return c.apply(this,arguments)},r=function(){return(r=Object(d.a)(p.a.mark((function e(){var t,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("go 2"),e.next=3,P.get("/databases/".concat(n,"/").concat(o));case 3:t=e.sent,r=t.code,a=t.data,w(a),(r<200||r>=300)&&$("Something went wrong loading the table rows");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)},t=function(){return r.apply(this,arguments)},console.log("1"),F(!0),e.next=8,a();case 8:return e.next=10,t();case 10:F(!1);case 11:case"end":return e.stop()}}),e)})))()}),[n,o,O]),Object(r.jsxs)(z,{children:[E?Object(r.jsx)(I,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(S,{children:[Object(r.jsx)(B.a,{path:q.a}),Object(r.jsx)("span",{children:n})]}),Object(r.jsxs)(y,{className:J()(e.rows),children:[Object(r.jsx)(k,{className:J()(e.tableLinks),as:"ul"}),Object(r.jsx)("div",{className:J()(e.tableWrapper),children:D?Object(r.jsx)(I,{className:"center"}):Object(r.jsx)(X,{columns:b,rows:g,actions:[]})})]})]}),!E&&!O.length&&!R&&Object(r.jsx)("p",{className:"errorText",children:"The database is completely empty"}),R&&Object(r.jsx)("p",{className:"errorText",children:R})]})}function F(){var e=Object(T.a)({start:{}})();Object(c.useContext)(s).connections;return Object(r.jsx)(z,{className:J()(e.start,"center-children"),children:Object(r.jsx)(N,{as:u.b,to:"/database/tph",children:"Test TPH db"})})}function H(){return Object(r.jsx)(u.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/database/:name/:activeTable?/:page?",exact:!0,children:Object(r.jsx)(D,{})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(F,{})})]})})}function M(){return Object(r.jsx)(i,{children:Object(r.jsx)(H,{})})}var R=n(37),$=n.n(R);n(51);$.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(M,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.2d901b5a.chunk.js.map