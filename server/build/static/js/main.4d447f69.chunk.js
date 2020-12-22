(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(17),c=n(0),o=n.n(c),i=Object(c.createContext)();function s(e){var t,n=e.children,o=Object(c.useState)(null!==(t=JSON.parse(localStorage.getItem("connections")))&&void 0!==t?t:[]),s=Object(a.a)(o,2),l=s[0],u=s[1];return Object(c.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(l))}),[l]),Object(r.jsx)(i.Provider,{value:{connections:l,setConnections:u},children:n})}var l=n(21),u=n(3),d=n(8),b=n.n(d),j=n(16),h=n(4),f=n(11),p=n(9),O=n(7),v=n.n(O);function m(e){var t=e.children,n=e.className,a=Object(f.a)(e,["children","className"]),c=Object(p.a)({header:{padding:10}})();return Object(r.jsx)("th",Object(h.a)(Object(h.a)({className:v()(c.header,n)},a),{},{children:t}))}function x(e){var t=e.children,n=e.className,a=Object(f.a)(e,["children","className"]),c=Object(p.a)({thead:{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontSize:"1.25rem",textAlign:"left"}})();return Object(r.jsx)("thead",Object(h.a)(Object(h.a)({className:v()(c.thead,n)},a),{},{children:t}))}function g(e){var t=e.children,n=Object(f.a)(e,["children"]);return Object(r.jsx)("tbody",Object(h.a)(Object(h.a)({},n),{},{children:t}))}function y(e){var t=e.children,n=e.className,a=Object(f.a)(e,["children","className"]),c=Object(p.a)({cell:{textOverflow:"ellipsis",overflow:"hidden",maxWidth:"20rem",padding:10}})();return Object(r.jsx)("td",Object(h.a)(Object(h.a)({className:v()(c.cell,n)},a),{},{children:t}))}function w(e){var t=e.children,n=e.className,a=Object(f.a)(e,["children","className"]),c=Object(p.a)({row:{backgroundColor:"var(--table-primary)","&:nth-child(odd)":{backgroundColor:"var(--table-secondary)"}}})();return Object(r.jsx)("tr",Object(h.a)(Object(h.a)({className:v()(c.row,n)},a),{},{children:t}))}function k(e){var t=e.children,n=e.className,a=Object(f.a)(e,["children","className"]),c=Object(p.a)({table:{width:"80vw"}})();return Object(r.jsx)("table",Object(h.a)(Object(h.a)({className:v()(c.table,n)},a),{},{children:t}))}var N=n(18),S=n(19);function C(){var e=Object(N.a)(["\n    margin: var(--container-margin);\n    flex-direction: column;\n    display: flex;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return C=function(){return e},e}function q(){var e=Object(N.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return q=function(){return e},e}function T(){var e=Object(N.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:focus, &:hover {\n        color: white;\n    }\n    &:focus {\n        border-color: white;\n    }\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n    }\n"]);return T=function(){return e},e}function z(){var e=Object(N.a)(["\n    flex-direction: column;\n    display: flex;\n"]);return z=function(){return e},e}function J(){var e=Object(N.a)(["\n    flex-direction: row;\n    display: flex;\n"]);return J=function(){return e},e}var L=S.a.div(J()),A=S.a.div(z()),B=S.a.button(T()),E=S.a.h1(q()),I=S.a.div(C()),P=function(e){var t=e.children,n=e.scroll,a=void 0!==n&&n,c=Object(f.a)(e,["children","scroll"]);return Object(r.jsx)(I,Object(h.a)(Object(h.a)({style:{overflowX:a?"auto":null}},c),{},{children:t}))},W=n(27),M=n(34),X=n(35),F=function(){function e(){Object(M.a)(this,e)}return Object(X.a)(e,null,[{key:"request",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,r,a,c,o,i,s=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"get",n=s.length>1&&void 0!==s[1]?s[1]:"",r=s.length>2&&void 0!==s[2]?s[2]:null,a=s.length>3&&void 0!==s[3]?s[3]:null,c={method:t,headers:Object(h.a)({Accept:"application/json"},a)},e.next=7,fetch(n,Object(h.a)(Object(h.a)({},r),c));case 7:return o=e.sent,i=[],e.prev=9,e.next=12,o.json();case 12:i=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:i,code:o.status,response:o});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(j.a)(b.a.mark((function t(n,r,a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("get",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(j.a)(b.a.mark((function t(n,r,a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("post",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(j.a)(b.a.mark((function t(n,r,a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("put",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(j.a)(b.a.mark((function t(n,r,a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("patch",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(j.a)(b.a.mark((function t(n,r,a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("delete",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}]),e}(),H=n(24),K=n.n(H);function R(){var e,t=Object(p.a)({tableLinks:{marginRight:10},tableLink:{backgroundColor:"var(--table-primary)",textAlign:"left",cursor:"pointer",marginBottom:2,padding:15,border:0,"&.active":{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontWeight:"bold"},"&:last-child":{marginBottom:0}}})(),n=Object(c.useContext)(i).connections,o=Object(u.f)().name,s=Object(c.useState)(null===(e=n.find((function(e){return(null===e||void 0===e?void 0:e.database)===o})))||void 0===e?void 0:e.activeTable),l=Object(a.a)(s,2),d=l[0],h=l[1],f=Object(c.useState)(!0),O=Object(a.a)(f,2),N=O[0],S=O[1],C=Object(c.useState)([]),q=Object(a.a)(C,2),T=q[0],z=q[1],J=Object(c.useState)(),B=Object(a.a)(J,2),I=B[0],M=B[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.next=3,F.get("/databases/tph");case 3:t=e.sent,n=t.code,r=t.data,S(!1),z(r),(n<200||n>=300)&&M("Something went wrong loading the database");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(r.jsxs)(P,{children:[Object(r.jsxs)(E,{children:[Object(r.jsx)(K.a,{path:W.a}),Object(r.jsx)("span",{children:o})]}),N?Object(r.jsx)(K.a,{className:"loading",path:W.b,spin:1,size:2}):Object(r.jsxs)(L,{style:{overflowX:"auto",maxWidth:"calc(100vw - var(--container-margin))"},children:[Object(r.jsx)(A,{className:v()(t.tableLinks),as:"ul",children:T.map((function(e){var n=e.table;return Object(r.jsx)("li",{className:v()(t.tableLink,{active:n===d}),onClick:function(){return h(n)},children:n},n)}))}),Object(r.jsx)(k,{children:function(){if(!T.length||!d)return null;var e=function(){var e;return null!==(e=T.find((function(e){return e.table===d})))&&void 0!==e?e:{columns:{},rows:[]}}(),t=[];for(var n in e.columns)t.push(Object(r.jsx)(m,{title:e.columns[n].primaryKey?"Primary key":null,children:n},n));var a=e.rows.map((function(e){var t=[];for(var n in e)t.push(e[n]);return console.log(t[0]),Object(r.jsx)(w,{children:t.map((function(e){return Object(r.jsx)(y,{},e)}))},Math.random())}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{children:t}),Object(r.jsx)(g,{children:a})]})}()})]}),!N&&!T.length&&Object(r.jsx)("p",{className:"errorText",children:"The database is completely empty"}),I&&Object(r.jsx)("p",{className:"errorText",children:I})]})}function D(){var e=Object(p.a)({start:{}})();Object(c.useContext)(i).connections;return Object(r.jsx)(P,{className:v()(e.start,"center-children"),children:Object(r.jsx)(B,{as:l.b,to:"/database/tph",children:"Test TPH db"})})}function G(){return Object(r.jsx)(l.a,{children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/database/:name?",exact:!0,children:Object(r.jsx)(R,{})}),Object(r.jsx)(u.a,{children:Object(r.jsx)(D,{})})]})})}function Q(){return Object(r.jsx)(s,{children:Object(r.jsx)(G,{})})}var U=n(36),V=n.n(U);n(50);V.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.4d447f69.chunk.js.map