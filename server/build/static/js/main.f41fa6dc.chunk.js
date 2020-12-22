(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(17),a=n(0),s=n.n(a),o=Object(a.createContext)();function i(e){var t,n=e.children,s=Object(a.useState)(null!==(t=JSON.parse(localStorage.getItem("connections")))&&void 0!==t?t:[]),i=Object(c.a)(s,2),u=i[0],l=i[1];return Object(a.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(u))}),[u]),Object(r.jsx)(o.Provider,{value:{connections:u,setConnections:l},children:n})}var u=n(19),l=n(3),b=n(7),d=n.n(b),j=n(16),h=n(4),O=n(11),p=n(10),f=n(9),v=n.n(f);function x(e){var t=e.children,n=e.className,c=Object(O.a)(e,["children","className"]),a=Object(p.a)({header:{padding:10}})();return Object(r.jsx)("th",Object(h.a)(Object(h.a)({className:v()(a.header,n)},c),{},{children:t}))}function m(e){var t=e.children,n=e.className,c=Object(O.a)(e,["children","className"]),a=Object(p.a)({thead:{backgroundColor:"rgb(26, 64, 74)",color:"var(--color-primary)",fontSize:"1.25rem",textAlign:"left"}})();return Object(r.jsx)("thead",Object(h.a)(Object(h.a)({className:v()(a.thead,n)},c),{},{children:t}))}function g(e){var t=e.children,n=Object(O.a)(e,["children"]);return Object(r.jsx)("tbody",Object(h.a)(Object(h.a)({},n),{},{children:t}))}function y(e){var t=e.children,n=e.className,c=Object(O.a)(e,["children","className"]),a=Object(p.a)({cell:{padding:10}})();return Object(r.jsx)("td",Object(h.a)(Object(h.a)({className:v()(a.cell,n)},c),{},{children:t}))}function w(e){var t=e.children,n=e.className,c=Object(O.a)(e,["children","className"]),a=Object(p.a)({row:{backgroundColor:"var(--table-primary)","&:nth-child(odd)":{backgroundColor:"var(--table-secondary)"}}})();return Object(r.jsx)("tr",Object(h.a)(Object(h.a)({className:v()(a.row,n)},c),{},{children:t}))}function k(e){var t=e.children,n=Object(O.a)(e,["children"]),c=Object(p.a)({table:{maxWidth:"80vw"}})();return Object(r.jsx)("table",Object(h.a)(Object(h.a)({className:v()(c.table)},n),{},{children:t}))}var N=n(20),S=n(21);function C(){var e=Object(N.a)(["\n    flex-direction: column;\n    display: flex;\n    margin: 50px;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return C=function(){return e},e}function q(){var e=Object(N.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return q=function(){return e},e}function T(){var e=Object(N.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:focus, &:hover {\n        color: white;\n    }\n    &:focus {\n        border-color: white;\n    }\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n    }\n"]);return T=function(){return e},e}var z=S.a.button(T()),J=S.a.h1(q()),E=S.a.div(C()),I=function(e){var t=e.children,n=e.scroll,c=void 0!==n&&n,a=Object(O.a)(e,["children","scroll"]);return Object(r.jsx)(E,Object(h.a)(Object(h.a)({style:{overflowX:c?"auto":null}},a),{},{children:t}))},A=n(27),M=n(34),P=n(35),B=function(){function e(){Object(M.a)(this,e)}return Object(P.a)(e,null,[{key:"request",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r,c,a,s,o,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"get",n=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2&&void 0!==i[2]?i[2]:null,c=i.length>3&&void 0!==i[3]?i[3]:null,a={method:t,headers:Object(h.a)({Accept:"application/json"},c)},e.next=7,fetch(n,Object(h.a)(Object(h.a)({},r),a));case 7:return s=e.sent,o=[],e.prev=9,e.next=12,s.json();case 12:o=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:o,code:s.status,response:s});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("get",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("post",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("put",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("patch",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("delete",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}]),e}(),F=n(24),H=n.n(F);function W(){var e=Object(a.useContext)(o).connections,t=Object(l.f)().name,n=e.find((function(e){return(null===e||void 0===e?void 0:e.database)===t})),s=Object(a.useState)(null===n||void 0===n?void 0:n.activeTable),i=Object(c.a)(s,2),u=i[0],b=(i[1],Object(a.useState)(!0)),h=Object(c.a)(b,2),O=h[0],p=h[1],f=Object(a.useState)([]),v=Object(c.a)(f,2),N=v[0],S=v[1],C=Object(a.useState)(),q=Object(c.a)(C,2),T=q[0],z=q[1];Object(a.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,B.get("/databases/tph");case 3:t=e.sent,n=t.code,r=t.data,p(!1),S(r),(n<200||n>=300)&&z("Something went wrong loading the database");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(r.jsxs)(I,{children:[Object(r.jsxs)(J,{children:[Object(r.jsx)(H.a,{path:A.a}),Object(r.jsx)("span",{children:t})]}),O?Object(r.jsx)(H.a,{className:"loading",path:A.b,spin:1,size:2}):Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"yes"}),Object(r.jsx)("div",{children:"no"}),Object(r.jsx)(k,{children:function(){if(!N.length||!u)return null;var e=function(){var e;return null!==(e=N.find((function(e){return e.table===u})))&&void 0!==e?e:{columns:{},rows:[]}}(),t=[];for(var n in e.columns)t.push(n);var c=e.rows.map((function(e){var t=[];for(var n in e)t.push(e[n]);return Object(r.jsx)(w,{children:t.map((function(e){return Object(r.jsx)(y,{children:e},e)}))},Math.random())}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{children:t.map((function(e){return Object(r.jsx)(x,{children:e},e)}))}),Object(r.jsx)(g,{children:c})]})}()})]}),!O&&!N.length&&Object(r.jsx)("p",{className:"errorText",children:"The database is completely empty"}),T&&Object(r.jsx)("p",{className:"errorText",children:T})]})}function X(){var e=Object(p.a)({start:{}})();Object(a.useContext)(o).connections;return Object(r.jsx)(I,{className:v()(e.start,"center-children"),children:Object(r.jsx)(z,{as:u.b,to:"/database/tph",children:"Test TPH db"})})}function D(){return Object(r.jsx)(u.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/database/:name?",exact:!0,children:Object(r.jsx)(W,{})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(X,{})})]})})}function G(){return Object(r.jsx)(i,{children:Object(r.jsx)(D,{})})}var K=n(36),L=n.n(K);n(50);L.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f41fa6dc.chunk.js.map