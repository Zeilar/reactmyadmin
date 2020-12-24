(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(17),c=n(0),s=n.n(c),o=Object(c.createContext)();function i(e){var t,n=e.children,s=Object(c.useState)(null!==(t=JSON.parse(localStorage.getItem("connections")))&&void 0!==t?t:[]),i=Object(a.a)(s,2),l=i[0],u=i[1];return Object(c.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(l))}),[l]),Object(r.jsx)(o.Provider,{value:{connections:l,setConnections:u},children:n})}var l=n(20),u=n(4),b=n(5),d=n.n(b),j=n(14),p=n(3),h=n(10),f=n(8),O=n(6),v=n.n(O);function m(e){var t=e.children,n=e.className,a=Object(h.a)(e,["children","className"]),c=Object(f.a)({header:{padding:10}})();return Object(r.jsx)("th",Object(p.a)(Object(p.a)({className:v()(c.header,n)},a),{},{children:t}))}function x(e){var t=e.children,n=e.className,a=Object(h.a)(e,["children","className"]),c=Object(f.a)({thead:{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontSize:"1.25rem",textAlign:"left"}})();return Object(r.jsx)("thead",Object(p.a)(Object(p.a)({className:v()(c.thead,n)},a),{},{children:t}))}function g(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(r.jsx)("tbody",Object(p.a)(Object(p.a)({},n),{},{children:t}))}function y(e){var t=e.children,n=e.className,a=Object(h.a)(e,["children","className"]),c=Object(f.a)({cell:{textOverflow:"ellipsis",overflow:"hidden",maxWidth:"20rem",padding:10}})();return Object(r.jsx)("td",Object(p.a)(Object(p.a)({className:v()(c.cell,n)},a),{},{children:t}))}function w(e){var t=e.children,n=e.className,a=Object(h.a)(e,["children","className"]),c=Object(f.a)({row:{backgroundColor:"var(--table-primary)","&:nth-child(odd)":{backgroundColor:"var(--table-secondary)"}}})();return Object(r.jsx)("tr",Object(p.a)(Object(p.a)({className:v()(c.row,n)},a),{},{children:t}))}function k(e){var t=e.children,n=e.className,a=Object(h.a)(e,["children","className"]),c=Object(f.a)({table:{position:"relative",width:"80vw"}})();return Object(r.jsx)("table",Object(p.a)(Object(p.a)({className:v()(c.table,n)},a),{},{children:t}))}var N=n(21),S=n(22);function C(){var e=Object(N.a)(["\n    margin: var(--container-margin);\n    flex-direction: column;\n    display: flex;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return C=function(){return e},e}function z(){var e=Object(N.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return z=function(){return e},e}function T(){var e=Object(N.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n        color: white;\n    }\n"]);return T=function(){return e},e}function q(){var e=Object(N.a)(["\n    flex-direction: column;\n    display: flex;\n"]);return q=function(){return e},e}function W(){var e=Object(N.a)(["\n    flex-direction: row;\n    display: flex;\n"]);return W=function(){return e},e}var E=S.a.div(W()),J=S.a.div(q()),L=S.a.button(T()),A=S.a.h1(z()),B=S.a.div(C()),I=function(e){var t=e.children,n=e.scroll,a=void 0!==n&&n,c=Object(h.a)(e,["children","scroll"]);return Object(r.jsx)(B,Object(p.a)(Object(p.a)({style:{overflowX:a?"auto":null}},c),{},{children:t}))},P=n(19),F=n(18),M=n.n(F);function X(e){var t=e.spinner,n=void 0!==t&&t,a=e.size,c=void 0===a?2:a,s=e.spin,o=void 0===s?1:s,i=e.className,l=void 0===i?"":i,u=Object(h.a)(e,["spinner","size","spin","className"]),b=Object(f.a)({"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.25},"100%":{opacity:1}},database:{animation:"$pulse 2s infinite"},loading:{color:"var(--color-primary)",margin:"auto","&.center":{transform:"translate(-50%, -50%)",position:"absolute",left:"50%",top:"50%"}}})();return n?Object(r.jsx)(M.a,Object(p.a)({className:v()(b.loading,l),path:P.b,size:c,spin:o},u)):Object(r.jsx)(M.a,Object(p.a)({className:v()(b.database,b.loading,l),path:P.a,size:c},u))}var D=n(34),H=n(35),K=function(){function e(){Object(D.a)(this,e)}return Object(H.a)(e,null,[{key:"request",value:function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,r,a,c,s,o,i=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"get",n=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:null,c={method:t,headers:Object(p.a)({Accept:"application/json"},a)},e.next=7,fetch(n,Object(p.a)(Object(p.a)({},r),c));case 7:return s=e.sent,o=[],e.prev=9,e.next=12,s.json();case 12:o=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:o,code:s.status,response:s});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("get",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("post",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("put",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("patch",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(j.a)(d.a.mark((function t(n,r,a){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("delete",n,r,a);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}]),e}();function R(){var e=Object(f.a)({tableLinks:{marginRight:10},tableLink:{backgroundColor:"var(--table-primary)",textDecoration:"none",fontSize:"1.25rem",textAlign:"left",cursor:"pointer",marginBottom:2,padding:15,border:0,"&:hover":{backgroundColor:"var(--table-secondary)"},"&.active":{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontWeight:"bold"},"&:last-child":{marginBottom:0}},rows:{maxWidth:"calc(100vw - var(--container-margin))",position:"relative",overflowX:"auto"},tableWrapper:{position:"relative",width:"80vw"}})(),t=(Object(c.useContext)(o).setConnections,Object(u.f)()),n=t.name,s=t.activeTable,i=(t.page,Object(c.useState)([])),b=Object(a.a)(i,2),p=b[0],h=b[1],O=Object(c.useState)([]),N=Object(a.a)(O,2),S=N[0],C=N[1],z=Object(c.useState)([]),T=Object(a.a)(z,2),q=T[0],W=T[1],L=Object(c.useState)(!0),B=Object(a.a)(L,2),F=B[0],D=B[1],H=Object(c.useState)(!0),R=Object(a.a)(H,2),$=R[0],G=R[1],Q=Object(c.useState)(),U=Object(a.a)(Q,2),V=U[0],Y=U[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,K.get("/databases/".concat(n));case 3:t=e.sent,r=t.code,a=t.data,D(!1),C(a),(r<200||r>=300)&&Y("Something went wrong loading the database");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.useEffect)((function(){Object(j.a)(d.a.mark((function e(){var t,r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){return(c=Object(j.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("/databases/".concat(n,"/").concat(s,"/columns"));case 2:t=e.sent,r=t.code,a=t.data,h(a),(r<200||r>=300)&&Y("Something went wrong loading the table columns");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},a=function(){return c.apply(this,arguments)},r=function(){return(r=Object(j.a)(d.a.mark((function e(){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.get("/databases/".concat(n,"/").concat(s));case 2:t=e.sent,r=t.code,a=t.data,W(a),(r<200||r>=300)&&Y("Something went wrong loading the table rows");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},t=function(){return r.apply(this,arguments)},G(!0),e.next=7,a();case 7:return e.next=9,t();case 9:G(!1);case 10:case"end":return e.stop()}}),e)})))()}),[n,s]),Object(r.jsxs)(I,{children:[F?Object(r.jsx)(M.a,{className:"loading",path:P.b,spin:1,size:2}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(A,{children:[Object(r.jsx)(M.a,{path:P.a}),Object(r.jsx)("span",{children:n})]}),Object(r.jsxs)(E,{className:v()(e.rows),children:[Object(r.jsx)(J,{className:v()(e.tableLinks),as:"ul",children:S.map((function(t){var a=t.table;return Object(r.jsx)(l.b,{className:v()(e.tableLink),to:"/database/".concat(n,"/").concat(a),children:a},a)}))}),Object(r.jsx)("div",{className:v()(e.tableWrapper),children:$?Object(r.jsx)(M.a,{className:"loading center",path:P.b,spin:1,size:2}):Object(r.jsx)(k,{children:function(){if(s){var e=[];for(var t in p)e.push(Object(r.jsx)(m,{title:p[t].primaryKey?"Primary key":null,children:t},t));var n=q.map((function(e){var t=[];for(var n in e)t.push(e[n]);return Object(r.jsx)(w,{children:t.map((function(e){return Object(r.jsx)(y,{title:(null===e||void 0===e?void 0:e.length)>=150?e:null,children:(null===e||void 0===e?void 0:e.length)>=150?"".concat(e.substring(0,150)," ..."):e},e)}))},Math.random())}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{children:e}),Object(r.jsx)(g,{children:n})]})}}()})})]})]}),!F&&!S.length&&Object(r.jsx)("p",{className:"errorText",children:"The database is completely empty"}),V&&Object(r.jsx)("p",{className:"errorText",children:V}),Object(r.jsx)(X,{})]})}function $(){var e=Object(f.a)({start:{}})();Object(c.useContext)(o).connections;return Object(r.jsx)(I,{className:v()(e.start,"center-children"),children:Object(r.jsx)(L,{as:l.b,to:"/database/tph",children:"Test TPH db"})})}function G(){return Object(r.jsx)(l.a,{children:Object(r.jsxs)(u.c,{children:[Object(r.jsx)(u.a,{path:"/database/:name/:activeTable?/:page?",exact:!0,children:Object(r.jsx)(R,{})}),Object(r.jsx)(u.a,{children:Object(r.jsx)($,{})})]})})}function Q(){return Object(r.jsx)(i,{children:Object(r.jsx)(G,{})})}var U=n(36),V=n.n(U);n(50);V.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.203a9e3b.chunk.js.map