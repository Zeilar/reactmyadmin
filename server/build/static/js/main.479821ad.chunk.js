(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(17),c=n(0),o=n.n(c),s=Object(c.createContext)();function i(e){var t,n=e.children,o=Object(c.useState)(null!==(t=JSON.parse(localStorage.getItem("connections")))&&void 0!==t?t:[]),i=Object(a.a)(o,2),l=i[0],u=i[1];return Object(c.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(l))}),[l]),Object(r.jsx)(s.Provider,{value:{connections:l,setConnections:u},children:n})}var l=n(18),u=n(3),b=n(5),d=n.n(b),j=n(15),h=n(4),p=n(11),f=n(9),O=n(8),v=n.n(O);function m(e){var t=e.children,n=e.className,a=Object(p.a)(e,["children","className"]),c=Object(f.a)({header:{padding:10}})();return Object(r.jsx)("th",Object(h.a)(Object(h.a)({className:v()(c.header,n)},a),{},{children:t}))}function x(e){var t=e.children,n=e.className,a=Object(p.a)(e,["children","className"]),c=Object(f.a)({thead:{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontSize:"1.25rem",textAlign:"left"}})();return Object(r.jsx)("thead",Object(h.a)(Object(h.a)({className:v()(c.thead,n)},a),{},{children:t}))}function g(e){var t=e.children,n=Object(p.a)(e,["children"]);return Object(r.jsx)("tbody",Object(h.a)(Object(h.a)({},n),{},{children:t}))}function y(e){var t=e.children,n=e.className,a=Object(p.a)(e,["children","className"]),c=Object(f.a)({cell:{textOverflow:"ellipsis",overflow:"hidden",maxWidth:"20rem",padding:10}})();return Object(r.jsx)("td",Object(h.a)(Object(h.a)({className:v()(c.cell,n)},a),{},{children:t}))}function w(e){var t=e.children,n=e.className,a=Object(p.a)(e,["children","className"]),c=Object(f.a)({row:{backgroundColor:"var(--table-primary)","&:nth-child(odd)":{backgroundColor:"var(--table-secondary)"}}})();return Object(r.jsx)("tr",Object(h.a)(Object(h.a)({className:v()(c.row,n)},a),{},{children:t}))}function k(e){var t=e.children,n=e.className,a=Object(p.a)(e,["children","className"]),c=Object(f.a)({table:{width:"80vw"}})();return Object(r.jsx)("table",Object(h.a)(Object(h.a)({className:v()(c.table,n)},a),{},{children:t}))}var N=n(19),S=n(20);function C(){var e=Object(N.a)(["\n    margin: var(--container-margin);\n    flex-direction: column;\n    display: flex;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return C=function(){return e},e}function T(){var e=Object(N.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return T=function(){return e},e}function q(){var e=Object(N.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n        color: white;\n    }\n"]);return q=function(){return e},e}function z(){var e=Object(N.a)(["\n    flex-direction: column;\n    display: flex;\n"]);return z=function(){return e},e}function E(){var e=Object(N.a)(["\n    flex-direction: row;\n    display: flex;\n"]);return E=function(){return e},e}var J=S.a.div(E()),L=S.a.div(z()),A=S.a.button(q()),B=S.a.h1(T()),I=S.a.div(C()),P=function(e){var t=e.children,n=e.scroll,a=void 0!==n&&n,c=Object(p.a)(e,["children","scroll"]);return Object(r.jsx)(I,Object(h.a)(Object(h.a)({style:{overflowX:a?"auto":null}},c),{},{children:t}))},W=n(27),F=n(34),M=n(35),X=function(){function e(){Object(F.a)(this,e)}return Object(M.a)(e,null,[{key:"request",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r,a,c,o,s,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"get",n=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:null,c={method:t,headers:Object(h.a)({Accept:"application/json"},a)},e.next=7,fetch(n,Object(h.a)(Object(h.a)({},r),c));case 7:return o=e.sent,s=[],e.prev=9,e.next=12,o.json();case 12:s=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:s,code:o.status,response:o});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("get",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("post",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("put",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("patch",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("delete",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}]),e}(),D=n(24),H=n.n(D);function K(){var e=Object(f.a)({tableLinks:{marginRight:10},tableLink:{backgroundColor:"var(--table-primary)",textDecoration:"none",fontSize:"1.25rem",textAlign:"left",cursor:"pointer",marginBottom:2,padding:15,border:0,"&:hover":{backgroundColor:"var(--table-secondary)"},"&.active":{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontWeight:"bold"},"&:last-child":{marginBottom:0}}})(),t=(Object(c.useContext)(s).setConnections,Object(u.f)()),n=t.name,o=t.activeTable,i=(t.page,Object(c.useState)([])),b=Object(a.a)(i,2),h=b[0],p=b[1],O=Object(c.useState)([]),N=Object(a.a)(O,2),S=N[0],C=N[1],T=Object(c.useState)([]),q=Object(a.a)(T,2),z=q[0],E=q[1],A=Object(c.useState)(!0),I=Object(a.a)(A,2),F=I[0],M=I[1],D=Object(c.useState)(),K=Object(a.a)(D,2),R=K[0],G=K[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,X.get("/databases/".concat(n));case 3:t=e.sent,r=t.code,a=t.data,M(!1),C(a),(r<200||r>=300)&&G("Something went wrong loading the database");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/databases/".concat(n,"/").concat(o));case 2:t=e.sent,r=t.code,a=t.data,E(a),(r<200||r>=300)&&G("Something went wrong loading the table rows");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(j.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.get("/databases/".concat(n,"/").concat(o,"/columns"));case 2:t=e.sent,r=t.code,a=t.data,p(a),(r<200||r>=300)&&G("Something went wrong loading the table columns");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o&&(function(){t.apply(this,arguments)}(),function(){e.apply(this,arguments)}())}),[n,o]),Object(r.jsxs)(P,{children:[F?Object(r.jsx)(H.a,{className:"loading",path:W.b,spin:1,size:2}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(B,{children:[Object(r.jsx)(H.a,{path:W.a}),Object(r.jsx)("span",{children:n})]}),Object(r.jsxs)(J,{style:{overflowX:"auto",maxWidth:"calc(100vw - var(--container-margin))"},children:[Object(r.jsx)(L,{className:v()(e.tableLinks),as:"ul",children:S.map((function(t){var a=t.table;return Object(r.jsx)(l.b,{className:v()(e.tableLink),to:"/database/".concat(n,"/").concat(a),children:a},a)}))}),Object(r.jsx)(k,{children:function(){if(console.log(h,o),h.length&&o){for(var e in h)h.push(Object(r.jsx)(m,{title:h[e].primaryKey?"Primary key":null,children:e},e));var t=z.map((function(e){var t=[];for(var n in e)t.push(e[n]);return Object(r.jsx)(w,{children:t.map((function(e){return Object(r.jsx)(y,{title:(null===e||void 0===e?void 0:e.length)>=150?e:null,children:(null===e||void 0===e?void 0:e.length)>=150?"".concat(e.substring(0,150)," ..."):e},e)}))},Math.random())}));return console.log(t),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{children:[]}),Object(r.jsx)(g,{children:t})]})}}()})]})]}),!F&&!S.length&&Object(r.jsx)("p",{className:"errorText",children:"The database is completely empty"}),R&&Object(r.jsx)("p",{className:"errorText",children:R})]})}function R(){var e=Object(f.a)({start:{}})();Object(c.useContext)(s).connections;return Object(r.jsx)(P,{className:v()(e.start,"center-children"),children:Object(r.jsx)(A,{as:l.b,to:"/database/tph",children:"Test TPH db"})})}function G(){return Object(r.jsx)(l.a,{children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/database/:name/:activeTable?/:page?",exact:!0,children:Object(r.jsx)(K,{})}),Object(r.jsx)(u.a,{children:Object(r.jsx)(R,{})})]})})}function Q(){return Object(r.jsx)(i,{children:Object(r.jsx)(G,{})})}var U=n(36),V=n.n(U);n(50);V.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.479821ad.chunk.js.map