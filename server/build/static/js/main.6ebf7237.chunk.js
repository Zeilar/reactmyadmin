(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(17),a=n(0),o=n.n(a),s=Object(a.createContext)();function u(e){var t,n=e.children,o=Object(a.useState)(null!==(t=JSON.parse(localStorage.getItem("connections")))&&void 0!==t?t:[]),u=Object(c.a)(o,2),i=u[0],l=u[1];return Object(a.useEffect)((function(){localStorage.setItem("connections",JSON.stringify(i))}),[i]),Object(r.jsx)(s.Provider,{value:{connections:i,setConnections:l},children:n})}var i=n(19),l=n(3),p=n(7),b=n.n(p),d=n(16),f=n(4),j=n(11),h=n(10),v=n(9),O=n.n(v);var x=n(20),m=n(21);function g(){var e=Object(x.a)(["\n    flex-direction: column;\n    display: flex;\n    margin: 50px;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return g=function(){return e},e}function y(){var e=Object(x.a)(["\n    color: var(--color-primary);\n    margin-bottom: 15px;\n    font-weight: bold;\n    display: flex;\n    font-size: 2rem;\n    & svg {\n        margin-right: 5px;\n        width: 2rem;\n    }\n"]);return y=function(){return e},e}function w(){var e=Object(x.a)(["\n    border: 2px solid var(--color-primary);\n    transition: all 0.05s ease-in-out;\n    box-shadow: 0 0 5px 0 black;\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:focus, &:hover {\n        color: white;\n    }\n    &:focus {\n        border-color: white;\n    }\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.35);\n    }\n"]);return w=function(){return e},e}var k=m.a.button(w()),S=m.a.h1(y()),q=m.a.div(g()),C=function(e){var t=e.children,n=e.scroll,c=void 0!==n&&n,a=Object(j.a)(e,["children","scroll"]);return Object(r.jsx)(q,Object(f.a)(Object(f.a)({style:{overflowX:c?"auto":null}},a),{},{children:t}))},J=n(27),z=n(34),E=n(35),I=function(){function e(){Object(z.a)(this,e)}return Object(E.a)(e,null,[{key:"request",value:function(){var e=Object(d.a)(b.a.mark((function e(){var t,n,r,c,a,o,s,u=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:"get",n=u.length>1&&void 0!==u[1]?u[1]:"",r=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:null,a={method:t,headers:Object(f.a)({Accept:"application/json"},c)},e.next=7,fetch(n,Object(f.a)(Object(f.a)({},r),a));case 7:return o=e.sent,s=[],e.prev=9,e.next=12,o.json();case 12:s=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:s,code:o.status,response:o});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(d.a)(b.a.mark((function t(n,r,c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("get",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(d.a)(b.a.mark((function t(n,r,c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("post",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"put",value:function(){var t=Object(d.a)(b.a.mark((function t(n,r,c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("put",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(d.a)(b.a.mark((function t(n,r,c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("patch",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(d.a)(b.a.mark((function t(n,r,c){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.request("delete",n,r,c);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}]),e}(),N=n(24),T=n.n(N);function P(){var e=Object(a.useContext)(s).connections,t=Object(l.f)().name,n=e.find((function(e){return(null===e||void 0===e?void 0:e.database)===t})),o=Object(a.useState)(null===n||void 0===n?void 0:n.activeTable),u=Object(c.a)(o,2),i=(u[0],u[1],Object(a.useState)(!0)),p=Object(c.a)(i,2),f=(p[0],p[1]),j=Object(a.useState)([]),h=Object(c.a)(j,2),v=h[0],O=h[1];Object(a.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,I.get("/databases/tph");case 3:t=e.sent,t.code,n=t.data,f(!1),O(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(v);return Object(r.jsxs)(C,{children:[Object(r.jsxs)(S,{children:[Object(r.jsx)(T.a,{path:J.a}),Object(r.jsx)("span",{children:t})]}),Object(r.jsx)(T.a,{path:J.b,spin:1,size:2})]})}function A(){var e=Object(h.a)({start:{}})();Object(a.useContext)(s).connections;return Object(r.jsx)(C,{className:O()(e.start,"center-children"),children:Object(r.jsx)(k,{as:i.b,to:"/database/tph",children:"Test TPH db"})})}function B(){return Object(r.jsx)(i.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/database/:name?",exact:!0,children:Object(r.jsx)(P,{})}),Object(r.jsx)(l.a,{children:Object(r.jsx)(A,{})})]})})}function H(){return Object(r.jsx)(u,{children:Object(r.jsx)(B,{})})}var M=n(36),X=n.n(M);n(50);X.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(H,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.6ebf7237.chunk.js.map