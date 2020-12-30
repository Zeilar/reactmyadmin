(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(14),c=n(0),o=n.n(c),s=Object(c.createContext)();function i(e){var t,n=e.children,o=Object(c.useState)(null!==(t=JSON.parse(localStorage.getItem("connections")))&&void 0!==t?t:[]),i=Object(a.a)(o,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(u))}),[u]),Object(r.jsx)(s.Provider,{value:{connections:u,setConnections:l},children:n})}var u=n(18),l=n(4),b=n(6),p=n.n(b),d=n(15),j=n(3),f=n(10),h=n(8),v=n(5),O=n.n(v);n(31);function x(e){var t=e.children,n=e.className,a=Object(f.a)(e,["children","className"]),c=Object(h.a)({table:{position:"relative",width:"80vw"}})();return Object(r.jsx)("table",Object(j.a)(Object(j.a)({className:O()(c.table,n)},a),{},{children:t}))}var m=n(19),g=n(20);function w(){var e=Object(m.a)(["\n    margin: var(--container-margin);\n    flex-direction: column;\n    display: flex;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return w=function(){return e},e}function y(){var e=Object(m.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return y=function(){return e},e}function k(){var e=Object(m.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n        color: white;\n    }\n"]);return k=function(){return e},e}function N(){var e=Object(m.a)(["\n    flex-direction: column;\n    display: flex;\n"]);return N=function(){return e},e}function S(){var e=Object(m.a)(["\n    flex-direction: row;\n    display: flex;\n"]);return S=function(){return e},e}var C=g.a.div(S()),z=g.a.div(N()),T=g.a.button(k()),q=g.a.h1(y()),E=g.a.div(w()),J=function(e){var t=e.children,n=e.scroll,a=void 0!==n&&n,c=Object(f.a)(e,["children","scroll"]);return Object(r.jsx)(E,Object(j.a)(Object(j.a)({style:{overflowX:a?"auto":null}},c),{},{children:t}))},L=n(23),W=n(22),B=n.n(W);function I(e){var t=e.spinner,n=void 0!==t&&t,a=e.size,c=void 0===a?2:a,o=e.spin,s=void 0===o?1:o,i=e.className,u=void 0===i?"":i,l=Object(f.a)(e,["spinner","size","spin","className"]),b=Object(h.a)({"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.1},"100%":{opacity:1}},database:{animation:"$pulse 1.5s infinite"},loading:{color:"var(--color-primary)",margin:"auto","&.center":{transform:"translate(-50%, -50%)",position:"absolute",left:"50%",top:"50%"}}})();return n?Object(r.jsx)(B.a,Object(j.a)({className:O()(b.loading,u),path:L.b,size:c,spin:s},l)):Object(r.jsx)(B.a,Object(j.a)({className:O()(b.database,b.loading,u),path:L.a,size:c},l))}var A=n(35),P=n(36),X=function(){function e(){Object(A.a)(this,e)}return Object(P.a)(e,null,[{key:"request",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,n,r,a,c,o,s,i=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"get",n=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:null,c={method:t,headers:Object(j.a)({Accept:"application/json"},a)},e.next=7,fetch(n,Object(j.a)(Object(j.a)({},r),c));case 7:return o=e.sent,s=[],e.prev=9,e.next=12,o.json();case 12:s=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:s,code:o.status,response:o});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(d.a)(p.a.mark((function t(n,r,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("get",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(d.a)(p.a.mark((function t(n,r,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("post",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(d.a)(p.a.mark((function t(n,r,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("put",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(d.a)(p.a.mark((function t(n,r,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("patch",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(d.a)(p.a.mark((function t(n,r,a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("delete",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}]),e}();function D(){var e=Object(h.a)({tableLinks:{marginRight:10},tableLink:{backgroundColor:"var(--table-primary)",textDecoration:"none",fontSize:"1.25rem",textAlign:"left",cursor:"pointer",marginBottom:2,padding:15,border:0,"&:hover":{backgroundColor:"var(--table-secondary)"},"&.active":{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontWeight:"bold"},"&:last-child":{marginBottom:0}},rows:{maxWidth:"calc(100vw - var(--container-margin))",position:"relative",overflowX:"auto"},tableWrapper:{position:"relative",width:"80vw"}})(),t=(Object(c.useContext)(s).setConnections,Object(l.f)()),n=t.name,o=t.activeTable,i=(t.page,Object(c.useState)([])),b=Object(a.a)(i,2),j=b[0],f=b[1],v=Object(c.useState)([]),m=Object(a.a)(v,2),g=m[0],w=m[1],y=Object(c.useState)([]),k=Object(a.a)(y,2),N=k[0],S=k[1],T=Object(c.useState)(!0),E=Object(a.a)(T,2),W=E[0],A=E[1],P=Object(c.useState)(!0),D=Object(a.a)(P,2),F=D[0],H=D[1],M=Object(c.useState)(),R=Object(a.a)(M,2),$=R[0],G=R[1];return Object(c.useEffect)((function(){Object(d.a)(p.a.mark((function e(){var t,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),e.next=3,X.get("/databases/".concat(n));case 3:t=e.sent,r=t.code,a=t.data,A(!1),w(a),(r<200||r>=300)&&G("Something went wrong loading the database");case 9:case"end":return e.stop()}}),e)})))()}),[n]),Object(c.useEffect)((function(){Object(d.a)(p.a.mark((function e(){var t,r,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=function(){return(c=Object(d.a)(p.a.mark((function e(){var t,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/databases/".concat(n,"/").concat(o,"/columns"));case 2:t=e.sent,r=t.code,a=t.data,f(a),(r<200||r>=300)&&G("Something went wrong loading the table columns");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},a=function(){return c.apply(this,arguments)},r=function(){return(r=Object(d.a)(p.a.mark((function e(){var t,r,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/databases/".concat(n,"/").concat(o));case 2:t=e.sent,r=t.code,a=t.data,S(a),(r<200||r>=300)&&G("Something went wrong loading the table rows");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},t=function(){return r.apply(this,arguments)},H(!0),a(),t(),H(!1);case 8:case"end":return e.stop()}}),e)})))()}),[n,o]),Object(r.jsxs)(J,{children:[W?Object(r.jsx)(I,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(q,{children:[Object(r.jsx)(B.a,{path:L.a}),Object(r.jsx)("span",{children:n})]}),Object(r.jsxs)(C,{className:O()(e.rows),children:[Object(r.jsx)(z,{className:O()(e.tableLinks),as:"ul",children:!$&&g.map((function(t){var a=t.table;return Object(r.jsx)(u.b,{className:O()(e.tableLink),to:"/database/".concat(n,"/").concat(a),children:a},a)}))}),Object(r.jsx)("div",{className:O()(e.tableWrapper),children:F?Object(r.jsx)(I,{className:"center"}):Object(r.jsx)(x,{columns:j,rows:N,actions:[]})})]})]}),!W&&!g.length&&!$&&Object(r.jsx)("p",{className:"errorText",children:"The database is completely empty"}),$&&Object(r.jsx)("p",{className:"errorText",children:$})]})}function F(){var e=Object(h.a)({start:{}})();Object(c.useContext)(s).connections;return Object(r.jsx)(J,{className:O()(e.start,"center-children"),children:Object(r.jsx)(T,{as:u.b,to:"/database/tph",children:"Test TPH db"})})}function H(){return Object(r.jsx)(u.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/database/:name/:activeTable?/:page?",exact:!0,children:Object(r.jsx)(D,{})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(F,{})})]})})}function M(){return Object(r.jsx)(i,{children:Object(r.jsx)(H,{})})}var R=n(37),$=n.n(R);n(51);$.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(M,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e0610508.chunk.js.map