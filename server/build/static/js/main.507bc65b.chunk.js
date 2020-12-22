(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(17),a=n(0),s=n.n(a),o=Object(a.createContext)();function i(e){var t,n=e.children,s=Object(a.useState)(null!==(t=JSON.parse(localStorage.getItem("connections")))&&void 0!==t?t:[]),i=Object(c.a)(s,2),u=i[0],l=i[1];return Object(a.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(u))}),[u]),Object(r.jsx)(o.Provider,{value:{connections:u,setConnections:l},children:n})}var u=n(21),l=n(3),b=n(7),d=n.n(b),j=n(16),h=n(4),f=n(11),p=n(9),O=n(8),x=n.n(O);function v(e){var t=e.children,n=e.className,c=Object(f.a)(e,["children","className"]),a=Object(p.a)({header:{padding:10}})();return Object(r.jsx)("th",Object(h.a)(Object(h.a)({className:x()(a.header,n)},c),{},{children:t}))}function m(e){var t=e.children,n=e.className,c=Object(f.a)(e,["children","className"]),a=Object(p.a)({thead:{backgroundColor:"rgb(26, 64, 74)",color:"var(--color-primary)",fontSize:"1.25rem",textAlign:"left"}})();return Object(r.jsx)("thead",Object(h.a)(Object(h.a)({className:x()(a.thead,n)},c),{},{children:t}))}function g(e){var t=e.children,n=Object(f.a)(e,["children"]);return Object(r.jsx)("tbody",Object(h.a)(Object(h.a)({},n),{},{children:t}))}function y(e){var t=e.children,n=e.className,c=Object(f.a)(e,["children","className"]),a=Object(p.a)({cell:{padding:10}})();return Object(r.jsx)("td",Object(h.a)(Object(h.a)({className:x()(a.cell,n)},c),{},{children:t}))}function w(e){var t=e.children,n=e.className,c=Object(f.a)(e,["children","className"]),a=Object(p.a)({row:{backgroundColor:"var(--table-primary)","&:nth-child(odd)":{backgroundColor:"var(--table-secondary)"}}})();return Object(r.jsx)("tr",Object(h.a)(Object(h.a)({className:x()(a.row,n)},c),{},{children:t}))}function k(e){var t=e.children,n=Object(f.a)(e,["children"]),c=Object(p.a)({table:{maxWidth:"80vw"}})();return Object(r.jsx)("table",Object(h.a)(Object(h.a)({className:x()(c.table)},n),{},{children:t}))}var N=n(18),S=n(19);function C(){var e=Object(N.a)(["\n    flex-direction: column;\n    display: flex;\n    margin: 50px;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return C=function(){return e},e}function q(){var e=Object(N.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return q=function(){return e},e}function T(){var e=Object(N.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:focus, &:hover {\n        color: white;\n    }\n    &:focus {\n        border-color: white;\n    }\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n    }\n"]);return T=function(){return e},e}function z(){var e=Object(N.a)(["\n    flex-direction: column;\n    display: flex;\n"]);return z=function(){return e},e}function J(){var e=Object(N.a)(["\n    flex-direction: row;\n    display: flex;\n"]);return J=function(){return e},e}var E=S.a.div(J()),I=S.a.div(z()),A=S.a.button(T()),L=S.a.h1(q()),M=S.a.div(C()),P=function(e){var t=e.children,n=e.scroll,c=void 0!==n&&n,a=Object(f.a)(e,["children","scroll"]);return Object(r.jsx)(M,Object(h.a)(Object(h.a)({style:{overflowX:c?"auto":null}},a),{},{children:t}))},B=n(27),F=n(34),H=n(35),W=function(){function e(){Object(F.a)(this,e)}return Object(H.a)(e,null,[{key:"request",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r,c,a,s,o,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"get",n=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2&&void 0!==i[2]?i[2]:null,c=i.length>3&&void 0!==i[3]?i[3]:null,a={method:t,headers:Object(h.a)({Accept:"application/json"},c)},e.next=7,fetch(n,Object(h.a)(Object(h.a)({},r),a));case 7:return s=e.sent,o=[],e.prev=9,e.next=12,s.json();case 12:o=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:o,code:s.status,response:s});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("get",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("post",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("put",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("patch",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("delete",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}]),e}(),X=n(24),D=n.n(X);function G(){var e=Object(p.a)({tableLink:{backgroundColor:"var(--table-primary)",padding:20,border:0}})(),t=Object(a.useContext)(o).connections,n=Object(l.f)().name,s=t.find((function(e){return(null===e||void 0===e?void 0:e.database)===n})),i=Object(a.useState)(null===s||void 0===s?void 0:s.activeTable),u=Object(c.a)(i,2),b=u[0],h=(u[1],Object(a.useState)(!0)),f=Object(c.a)(h,2),O=f[0],N=f[1],S=Object(a.useState)([]),C=Object(c.a)(S,2),q=C[0],T=C[1],z=Object(a.useState)(),J=Object(c.a)(z,2),A=J[0],M=J[1];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,W.get("/databases/tph");case 3:t=e.sent,n=t.code,r=t.data,N(!1),T(r),(n<200||n>=300)&&M("Something went wrong loading the database");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(r.jsxs)(P,{children:[Object(r.jsxs)(L,{children:[Object(r.jsx)(D.a,{path:B.a}),Object(r.jsx)("span",{children:n})]}),O?Object(r.jsx)(D.a,{className:"loading",path:B.b,spin:1,size:2}):Object(r.jsxs)(E,{children:[Object(r.jsx)(I,{as:"ul",children:q.map((function(t){return Object(r.jsx)("li",{children:Object(r.jsx)("button",{className:x()(e.tableLink),children:t})})}))}),Object(r.jsx)(k,{children:function(){if(!q.length||!b)return null;var e=function(){var e;return null!==(e=q.find((function(e){return e.table===b})))&&void 0!==e?e:{columns:{},rows:[]}}(),t=[];for(var n in e.columns)t.push(n);var c=e.rows.map((function(e){var t=[];for(var n in e)t.push(e[n]);return Object(r.jsx)(w,{children:t.map((function(e){return Object(r.jsx)(y,{children:e},e)}))},Math.random())}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{children:t.map((function(e){return Object(r.jsx)(v,{children:e},e)}))}),Object(r.jsx)(g,{children:c})]})}()})]}),!O&&!q.length&&Object(r.jsx)("p",{className:"errorText",children:"The database is completely empty"}),A&&Object(r.jsx)("p",{className:"errorText",children:A})]})}function K(){var e=Object(p.a)({start:{}})();Object(a.useContext)(o).connections;return Object(r.jsx)(P,{className:x()(e.start,"center-children"),children:Object(r.jsx)(A,{as:u.b,to:"/database/tph",children:"Test TPH db"})})}function Q(){return Object(r.jsx)(u.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/database/:name?",exact:!0,children:Object(r.jsx)(G,{})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(K,{})})]})})}function R(){return Object(r.jsx)(i,{children:Object(r.jsx)(Q,{})})}var U=n(36),V=n.n(U);n(50);V.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.507bc65b.chunk.js.map