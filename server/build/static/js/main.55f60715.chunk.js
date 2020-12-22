(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(17),c=n(0),o=n.n(c),i=Object(c.createContext)();function s(e){var t,n=e.children,o=Object(c.useState)(null!==(t=JSON.parse(localStorage.getItem("connections")))&&void 0!==t?t:[]),s=Object(a.a)(o,2),u=s[0],l=s[1];return Object(c.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(u))}),[u]),Object(r.jsx)(i.Provider,{value:{connections:u,setConnections:l},children:n})}var u=n(21),l=n(3),b=n(8),d=n.n(b),j=n(16),h=n(4),p=n(11),f=n(9),O=n(7),v=n.n(O);function x(e){var t=e.children,n=e.className,a=Object(p.a)(e,["children","className"]),c=Object(f.a)({header:{padding:10}})();return Object(r.jsx)("th",Object(h.a)(Object(h.a)({className:v()(c.header,n)},a),{},{children:t}))}function m(e){var t=e.children,n=e.className,a=Object(p.a)(e,["children","className"]),c=Object(f.a)({thead:{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontSize:"1.25rem",textAlign:"left"}})();return Object(r.jsx)("thead",Object(h.a)(Object(h.a)({className:v()(c.thead,n)},a),{},{children:t}))}function g(e){var t=e.children,n=Object(p.a)(e,["children"]);return Object(r.jsx)("tbody",Object(h.a)(Object(h.a)({},n),{},{children:t}))}function y(e){var t=e.children,n=e.className,a=Object(p.a)(e,["children","className"]),c=Object(f.a)({cell:{padding:10}})();return Object(r.jsx)("td",Object(h.a)(Object(h.a)({className:v()(c.cell,n)},a),{},{children:t}))}function w(e){var t=e.children,n=e.className,a=Object(p.a)(e,["children","className"]),c=Object(f.a)({row:{backgroundColor:"var(--table-primary)","&:nth-child(odd)":{backgroundColor:"var(--table-secondary)"}}})();return Object(r.jsx)("tr",Object(h.a)(Object(h.a)({className:v()(c.row,n)},a),{},{children:t}))}function k(e){var t=e.children,n=Object(p.a)(e,["children"]),a=Object(f.a)({table:{maxWidth:"80vw"}})();return Object(r.jsx)("table",Object(h.a)(Object(h.a)({className:v()(a.table)},n),{},{children:t}))}var N=n(18),S=n(19);function C(){var e=Object(N.a)(["\n    flex-direction: column;\n    display: flex;\n    margin: 50px;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return C=function(){return e},e}function q(){var e=Object(N.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return q=function(){return e},e}function T(){var e=Object(N.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:focus, &:hover {\n        color: white;\n    }\n    &:focus {\n        border-color: white;\n    }\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n    }\n"]);return T=function(){return e},e}function z(){var e=Object(N.a)(["\n    flex-direction: column;\n    display: flex;\n"]);return z=function(){return e},e}function J(){var e=Object(N.a)(["\n    flex-direction: row;\n    display: flex;\n"]);return J=function(){return e},e}var L=S.a.div(J()),A=S.a.div(z()),B=S.a.button(T()),E=S.a.h1(q()),I=S.a.div(C()),M=function(e){var t=e.children,n=e.scroll,a=void 0!==n&&n,c=Object(p.a)(e,["children","scroll"]);return Object(r.jsx)(I,Object(h.a)(Object(h.a)({style:{overflowX:a?"auto":null}},c),{},{children:t}))},P=n(27),X=n(34),F=n(35),H=function(){function e(){Object(X.a)(this,e)}return Object(F.a)(e,null,[{key:"request",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r,a,c,o,i,s=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"get",n=s.length>1&&void 0!==s[1]?s[1]:"",r=s.length>2&&void 0!==s[2]?s[2]:null,a=s.length>3&&void 0!==s[3]?s[3]:null,c={method:t,headers:Object(h.a)({Accept:"application/json"},a)},e.next=7,fetch(n,Object(h.a)(Object(h.a)({},r),c));case 7:return o=e.sent,i=[],e.prev=9,e.next=12,o.json();case 12:i=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:i,code:o.status,response:o});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("get",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("post",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("put",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("patch",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("delete",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}]),e}(),R=n(24),W=n.n(R);function D(){var e,t=Object(f.a)({tableLinks:{marginRight:10},tableLink:{backgroundColor:"var(--table-primary)",textAlign:"left",cursor:"pointer",marginBottom:2,padding:20,border:0,"&.active":{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)"},"&:last-child":{marginBottom:0}}})(),n=Object(c.useContext)(i).connections,o=Object(l.f)().name,s=Object(c.useState)(null===(e=n.find((function(e){return(null===e||void 0===e?void 0:e.database)===o})))||void 0===e?void 0:e.activeTable),u=Object(a.a)(s,2),b=u[0],h=(u[1],Object(c.useState)(!0)),p=Object(a.a)(h,2),O=p[0],N=p[1],S=Object(c.useState)([]),C=Object(a.a)(S,2),q=C[0],T=C[1],z=Object(c.useState)(),J=Object(a.a)(z,2),B=J[0],I=J[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,H.get("/databases/tph");case 3:t=e.sent,n=t.code,r=t.data,N(!1),T(r),(n<200||n>=300)&&I("Something went wrong loading the database");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(r.jsxs)(M,{children:[Object(r.jsxs)(E,{children:[Object(r.jsx)(W.a,{path:P.a}),Object(r.jsx)("span",{children:o})]}),O?Object(r.jsx)(W.a,{className:"loading",path:P.b,spin:1,size:2}):Object(r.jsxs)(L,{style:{overflowX:"auto"},children:[Object(r.jsx)(A,{className:v()(t.tableLinks),as:"ul",children:q.map((function(e){var n=e.table;return Object(r.jsx)("li",{className:v()(t.tableLink,{active:n===b}),children:n},n)}))}),Object(r.jsx)(k,{children:function(){if(!q.length||!b)return null;var e=function(){var e;return null!==(e=q.find((function(e){return e.table===b})))&&void 0!==e?e:{columns:{},rows:[]}}(),t=[];for(var n in e.columns)t.push(n);var a=e.rows.map((function(e){var t=[];for(var n in e)t.push(e[n]);return Object(r.jsx)(w,{children:t.map((function(e){return Object(r.jsx)(y,{children:e},e)}))},Math.random())}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{children:t.map((function(e){return Object(r.jsx)(x,{children:e},e)}))}),Object(r.jsx)(g,{children:a})]})}()})]}),!O&&!q.length&&Object(r.jsx)("p",{className:"errorText",children:"The database is completely empty"}),B&&Object(r.jsx)("p",{className:"errorText",children:B})]})}function G(){var e=Object(f.a)({start:{}})();Object(c.useContext)(i).connections;return Object(r.jsx)(M,{className:v()(e.start,"center-children"),children:Object(r.jsx)(B,{as:u.b,to:"/database/tph",children:"Test TPH db"})})}function K(){return Object(r.jsx)(u.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/database/:name?",exact:!0,children:Object(r.jsx)(D,{})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(G,{})})]})})}function Q(){return Object(r.jsx)(s,{children:Object(r.jsx)(K,{})})}var U=n(36),V=n.n(U);n(50);V.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.55f60715.chunk.js.map