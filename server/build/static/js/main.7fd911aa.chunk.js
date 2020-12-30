(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(14),c=n(0),o=n.n(c),s=Object(c.createContext)();function i(e){var t,n=e.children,o=Object(c.useState)(null!==(t=JSON.parse(localStorage.getItem("connections")))&&void 0!==t?t:[]),i=Object(r.a)(o,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(u))}),[u]),Object(a.jsx)(s.Provider,{value:{connections:u,setConnections:l},children:n})}var u=n(18),l=n(4),d=n(6),b=n.n(d),j=n(15),p=n(3),h=n(10),f=n(8),O=n(5),v=n.n(O);function m(e){var t=e.children,n=e.className,r=Object(h.a)(e,["children","className"]),c=Object(f.a)({header:{padding:10}})();return Object(a.jsx)("th",Object(p.a)(Object(p.a)({className:v()(c.header,n)},r),{},{children:t}))}function x(e){var t=e.children,n=e.className,r=Object(h.a)(e,["children","className"]),c=Object(f.a)({thead:{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontSize:"1.25rem",textAlign:"left"}})();return Object(a.jsx)("thead",Object(p.a)(Object(p.a)({className:v()(c.thead,n)},r),{},{children:t}))}function g(e){var t=e.children,n=Object(h.a)(e,["children"]);return Object(a.jsx)("tbody",Object(p.a)(Object(p.a)({},n),{},{children:t}))}var y=n(31);function w(e){var t=e.children,n=e.className,o=void 0===n?"":n,s=e.data,i=void 0===s?"":s,u=Object(h.a)(e,["children","className","data"]),l=Object(f.a)({cell:{textOverflow:"ellipsis",overflow:"hidden",maxWidth:"20rem",padding:10},input:{backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",resize:"none",padding:8}})(),d=Object(c.useState)(i),b=Object(r.a)(d,2),j=b[0],O=b[1],m=Object(c.useState)(!1),x=Object(r.a)(m,2),g=x[0],w=x[1],k=Object(y.a)((function(){w(!1)}));return Object(c.useEffect)((function(){window.addEventListener("keydown",(function(e){"Enter"===e.key&&(O(i),w(!1))}))}),[]),Object(a.jsx)("td",Object(p.a)(Object(p.a)({className:v()(l.cell,o),onDoubleClick:function(){return w(!0)},ref:k},u),{},{children:g?Object(a.jsx)("textarea",{onChange:function(e){return O(e.target.value)},rows:Math.ceil(j.length/17),className:v()(l.input),value:j}):t}))}function k(e){var t=e.children,n=e.className,r=(e.data,Object(h.a)(e,["children","className","data"])),c=Object(f.a)({row:{backgroundColor:"var(--table-primary)","&:nth-child(odd)":{backgroundColor:"var(--table-secondary)"}}})();return Object(a.jsx)("tr",Object(p.a)(Object(p.a)({className:v()(c.row,n)},r),{},{children:t}))}function N(e){var t=e.children,n=e.className,r=Object(h.a)(e,["children","className"]),c=Object(f.a)({table:{position:"relative",width:"80vw"}})();return Object(a.jsx)("table",Object(p.a)(Object(p.a)({className:v()(c.table,n)},r),{},{children:t}))}var S=n(19),C=n(20);function z(){var e=Object(S.a)(["\n    margin: var(--container-margin);\n    flex-direction: column;\n    display: flex;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return z=function(){return e},e}function E(){var e=Object(S.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return E=function(){return e},e}function T(){var e=Object(S.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n        color: white;\n    }\n"]);return T=function(){return e},e}function q(){var e=Object(S.a)(["\n    flex-direction: column;\n    display: flex;\n"]);return q=function(){return e},e}function L(){var e=Object(S.a)(["\n    flex-direction: row;\n    display: flex;\n"]);return L=function(){return e},e}var W=C.a.div(L()),J=C.a.div(q()),A=C.a.button(T()),B=C.a.h1(E()),I=C.a.div(z()),M=function(e){var t=e.children,n=e.scroll,r=void 0!==n&&n,c=Object(h.a)(e,["children","scroll"]);return Object(a.jsx)(I,Object(p.a)(Object(p.a)({style:{overflowX:r?"auto":null}},c),{},{children:t}))},P=n(23),D=n(22),F=n.n(D);function X(e){var t=e.spinner,n=void 0!==t&&t,r=e.size,c=void 0===r?2:r,o=e.spin,s=void 0===o?1:o,i=e.className,u=void 0===i?"":i,l=Object(h.a)(e,["spinner","size","spin","className"]),d=Object(f.a)({"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.1},"100%":{opacity:1}},database:{animation:"$pulse 1.5s infinite"},loading:{color:"var(--color-primary)",margin:"auto","&.center":{transform:"translate(-50%, -50%)",position:"absolute",left:"50%",top:"50%"}}})();return n?Object(a.jsx)(F.a,Object(p.a)({className:v()(d.loading,u),path:P.b,size:c,spin:s},l)):Object(a.jsx)(F.a,Object(p.a)({className:v()(d.database,d.loading,u),path:P.a,size:c},l))}var H=n(35),K=n(36),R=function(){function e(){Object(H.a)(this,e)}return Object(K.a)(e,null,[{key:"request",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n,a,r,c,o,s,i=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"get",n=i.length>1&&void 0!==i[1]?i[1]:"",a=i.length>2&&void 0!==i[2]?i[2]:null,r=i.length>3&&void 0!==i[3]?i[3]:null,c={method:t,headers:Object(p.a)({Accept:"application/json"},r)},e.next=7,fetch(n,Object(p.a)(Object(p.a)({},a),c));case 7:return o=e.sent,s=[],e.prev=9,e.next=12,o.json();case 12:s=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:s,code:o.status,response:o});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(j.a)(b.a.mark((function t(n,a,r){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("get",n,a,r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(j.a)(b.a.mark((function t(n,a,r){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("post",n,a,r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(j.a)(b.a.mark((function t(n,a,r){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("put",n,a,r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(j.a)(b.a.mark((function t(n,a,r){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("patch",n,a,r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(j.a)(b.a.mark((function t(n,a,r){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("delete",n,a,r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()}]),e}();function $(){var e=Object(f.a)({tableLinks:{marginRight:10},tableLink:{backgroundColor:"var(--table-primary)",textDecoration:"none",fontSize:"1.25rem",textAlign:"left",cursor:"pointer",marginBottom:2,padding:15,border:0,"&:hover":{backgroundColor:"var(--table-secondary)"},"&.active":{backgroundColor:"var(--color-primary-dark)",color:"var(--color-primary)",fontWeight:"bold"},"&:last-child":{marginBottom:0}},rows:{maxWidth:"calc(100vw - var(--container-margin))",position:"relative",overflowX:"auto"},tableWrapper:{position:"relative",width:"80vw"}})(),t=(Object(c.useContext)(s).setConnections,Object(l.f)()),n=t.name,o=t.activeTable,i=(t.page,Object(c.useState)([])),d=Object(r.a)(i,2),p=d[0],h=d[1],O=Object(c.useState)([]),y=Object(r.a)(O,2),S=y[0],C=y[1],z=Object(c.useState)([]),E=Object(r.a)(z,2),T=E[0],q=E[1],L=Object(c.useState)(!0),A=Object(r.a)(L,2),I=A[0],D=A[1],H=Object(c.useState)(!0),K=Object(r.a)(H,2),$=K[0],G=K[1],Q=Object(c.useState)(),U=Object(r.a)(Q,2),V=U[0],Y=U[1];return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(b.a.mark((function e(){var t,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,R.get("/databases/".concat(n));case 3:t=e.sent,a=t.code,r=t.data,D(!1),C(r),(a<200||a>=300)&&Y("Something went wrong loading the database");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(c.useEffect)((function(){Object(j.a)(b.a.mark((function e(){var t,a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){return(c=Object(j.a)(b.a.mark((function e(){var t,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get("/databases/".concat(n,"/").concat(o,"/columns"));case 2:t=e.sent,a=t.code,r=t.data,h(r),(a<200||a>=300)&&Y("Something went wrong loading the table columns");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},r=function(){return c.apply(this,arguments)},a=function(){return(a=Object(j.a)(b.a.mark((function e(){var t,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get("/databases/".concat(n,"/").concat(o));case 2:t=e.sent,a=t.code,r=t.data,q(r),(a<200||a>=300)&&Y("Something went wrong loading the table rows");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)},t=function(){return a.apply(this,arguments)},G(!0),e.next=7,r();case 7:return e.next=9,t();case 9:G(!1);case 10:case"end":return e.stop()}}),e)})))()}),[n,o]),Object(a.jsxs)(M,{children:[I?Object(a.jsx)(X,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(B,{children:[Object(a.jsx)(F.a,{path:P.a}),Object(a.jsx)("span",{children:n})]}),Object(a.jsxs)(W,{className:v()(e.rows),children:[Object(a.jsx)(J,{className:v()(e.tableLinks),as:"ul",children:S.map((function(t){var r=t.table;return Object(a.jsx)(u.b,{className:v()(e.tableLink),to:"/database/".concat(n,"/").concat(r),children:r},r)}))}),Object(a.jsx)("div",{className:v()(e.tableWrapper),children:$?Object(a.jsx)(X,{className:"center"}):Object(a.jsx)(N,{children:function(){if(o){var e=[];for(var t in p)e.push(Object(a.jsx)(m,{title:p[t].primaryKey?"Primary key":null,children:t},t));var n=T.map((function(e){var t=[];for(var n in e)t.push(e[n]);return Object(a.jsx)(k,{data:e,children:t.map((function(e){return Object(a.jsx)(w,{title:(null===e||void 0===e?void 0:e.length)>=150?e:null,data:e,children:(null===e||void 0===e?void 0:e.length)>=150?"".concat(e.substring(0,150)," ..."):e},e)}))},Math.random())}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x,{children:e}),Object(a.jsx)(g,{children:n})]})}}()})})]})]}),!I&&!S.length&&Object(a.jsx)("p",{className:"errorText",children:"The database is completely empty"}),V&&Object(a.jsx)("p",{className:"errorText",children:V})]})}function G(){var e=Object(f.a)({start:{}})();Object(c.useContext)(s).connections;return Object(a.jsx)(M,{className:v()(e.start,"center-children"),children:Object(a.jsx)(A,{as:u.b,to:"/database/tph",children:"Test TPH db"})})}function Q(){return Object(a.jsx)(u.a,{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/database/:name/:activeTable?/:page?",exact:!0,children:Object(a.jsx)($,{})}),Object(a.jsx)(l.a,{children:Object(a.jsx)(G,{})})]})})}function U(){return Object(a.jsx)(i,{children:Object(a.jsx)(Q,{})})}var V=n(37),Y=n.n(V);n(51);Y.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.7fd911aa.chunk.js.map