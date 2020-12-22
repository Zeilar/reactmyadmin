(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{50:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t(17),a=t(0),o=t.n(a),s=Object(a.createContext)();function u(e){var n,t=e.children,o=Object(a.useState)(null!==(n=JSON.parse(localStorage.getItem("connections")))&&void 0!==n?n:[]),u=Object(c.a)(o,2),i=u[0],l=u[1];return Object(a.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(i))}),[i]),Object(r.jsx)(s.Provider,{value:{connections:i,setConnections:l},children:t})}var i=t(19),l=t(3),b=t(7),d=t.n(b),j=t(16),h=t(4),f=t(11),p=t(10),O=t(9),v=t.n(O);function x(e){var n=e.children,t=e.className,c=Object(f.a)(e,["children","className"]),a=Object(p.a)({header:{padding:10}})();return Object(r.jsx)("th",Object(h.a)(Object(h.a)({className:v()(a.header,t)},c),{},{children:n}))}function m(e){var n=e.children,t=e.className,c=Object(f.a)(e,["children","className"]),a=Object(p.a)({thead:{backgroundColor:"rgb(26, 64, 74)",color:"var(--color-primary)",fontSize:"1.25rem",textAlign:"left"}})();return Object(r.jsx)("thead",Object(h.a)(Object(h.a)({className:v()(a.thead,t)},c),{},{children:n}))}function g(e){var n=e.children,t=Object(f.a)(e,["children"]);return Object(r.jsx)("tbody",Object(h.a)(Object(h.a)({},t),{},{children:n}))}function y(e){var n=e.children,t=e.className,c=Object(f.a)(e,["children","className"]),a=Object(p.a)({cell:{padding:10}})();return Object(r.jsx)("td",Object(h.a)(Object(h.a)({className:v()(a.cell,t)},c),{},{children:n}))}function w(e){var n=e.children,t=e.className,c=Object(f.a)(e,["children","className"]),a=Object(p.a)({row:{backgroundColor:"var(--table-primary)","&:nth-child(odd)":{backgroundColor:"var(--table-secondary)"}}})();return Object(r.jsx)("tr",Object(h.a)(Object(h.a)({className:v()(a.row,t)},c),{},{children:n}))}function k(e){var n=e.children,t=Object(f.a)(e,["children"]),c=Object(p.a)({table:{maxWidth:"80vw"}})();return Object(r.jsx)("table",Object(h.a)(Object(h.a)({className:v()(c.table)},t),{},{children:n}))}var N=t(20),S=t(21);function C(){var e=Object(N.a)(["\n    flex-direction: column;\n    display: flex;\n    margin: 50px;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return C=function(){return e},e}function q(){var e=Object(N.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return q=function(){return e},e}function J(){var e=Object(N.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:focus, &:hover {\n        color: white;\n    }\n    &:focus {\n        border-color: white;\n    }\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n    }\n"]);return J=function(){return e},e}var z=S.a.button(J()),E=S.a.h1(q()),I=S.a.div(C()),A=function(e){var n=e.children,t=e.scroll,c=void 0!==t&&t,a=Object(f.a)(e,["children","scroll"]);return Object(r.jsx)(I,Object(h.a)(Object(h.a)({style:{overflowX:c?"auto":null}},a),{},{children:n}))},M=t(35),P=t(32),T=t(33),B=function(){function e(){Object(P.a)(this,e)}return Object(T.a)(e,null,[{key:"request",value:function(){var e=Object(j.a)(d.a.mark((function e(){var n,t,r,c,a,o,s,u=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>0&&void 0!==u[0]?u[0]:"get",t=u.length>1&&void 0!==u[1]?u[1]:"",r=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:null,a={method:n,headers:Object(h.a)({Accept:"application/json"},c)},e.next=7,fetch(t,Object(h.a)(Object(h.a)({},r),a));case 7:return o=e.sent,s=[],e.prev=9,e.next=12,o.json();case 12:s=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:s,code:o.status,response:o});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var n=Object(j.a)(d.a.mark((function n(t,r,c){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("get",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"post",value:function(){var n=Object(j.a)(d.a.mark((function n(t,r,c){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("post",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"put",value:function(){var n=Object(j.a)(d.a.mark((function n(t,r,c){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("put",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"patch",value:function(){var n=Object(j.a)(d.a.mark((function n(t,r,c){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("patch",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"delete",value:function(){var n=Object(j.a)(d.a.mark((function n(t,r,c){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("delete",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()}]),e}(),F=t(34),H=t.n(F);function W(){var e=Object(a.useContext)(s).connections,n=Object(l.f)().name;console.log(e);var t=e.find((function(e){return(null===e||void 0===e?void 0:e.database)===n}));console.log(t);var o=Object(a.useState)(!0),u=Object(c.a)(o,2),i=(u[0],u[1]),b=Object(a.useState)(),h=Object(c.a)(b,2),f=h[0],p=(h[1],Object(a.useState)([])),O=Object(c.a)(p,2),v=O[0],N=O[1];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var n,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,B.get("/databases/tph");case 3:n=e.sent,n.code,t=n.data,i(!1),N(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(v);return Object(r.jsxs)(A,{children:[Object(r.jsxs)(E,{children:[Object(r.jsx)(H.a,{path:M.a}),Object(r.jsx)("span",{children:n})]}),Object(r.jsx)(k,{children:function(){if(!v.length||!f)return null;var e=function(){var e;return null!==(e=v.find((function(e){return e.table===f})))&&void 0!==e?e:{columns:{},rows:[]}}(),n=[];for(var t in e.columns)n.push(t);var c=e.rows.map((function(e){var n=[];for(var t in e)n.push(e[t]);return Object(r.jsx)(w,{children:n.map((function(e){return Object(r.jsx)(y,{children:e},e)}))},Math.random())}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{children:n.map((function(e){return Object(r.jsx)(x,{children:e},e)}))}),Object(r.jsx)(g,{children:c})]})}()})]})}function X(){var e=Object(p.a)({start:{}})();Object(a.useContext)(s).connections;return Object(r.jsx)(A,{className:v()(e.start,"center-children"),children:Object(r.jsx)(z,{as:i.b,to:"/database/tph",children:"Test TPH db"})})}function D(){return Object(r.jsx)(i.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/database/:name?",exact:!0,children:Object(r.jsx)(W,{})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(X,{})})]})})}function G(){return Object(r.jsx)(u,{children:Object(r.jsx)(D,{})})}var K=t(36),L=t.n(K);t(50);L.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.264877f8.chunk.js.map