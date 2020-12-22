(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{50:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t(5),a=t.n(c),u=t(11),s=t(15),o=t(0),i=t.n(o),l=t(19),p=t(29),d=t(30),f=function(){function e(){Object(p.a)(this,e)}return Object(d.a)(e,null,[{key:"request",value:function(){var e=Object(u.a)(a.a.mark((function e(){var n,t,r,c,u,s,o,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"get",t=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2&&void 0!==i[2]?i[2]:null,c=i.length>3&&void 0!==i[3]?i[3]:null,u={method:n,headers:Object(l.a)({Accept:"application/json"},c)},e.next=7,fetch(t,Object(l.a)(Object(l.a)({},r),u));case 7:return s=e.sent,o=[],e.prev=9,e.next=12,s.json();case 12:o=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:o,code:s.status,response:s});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var n=Object(u.a)(a.a.mark((function n(t,r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("get",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"post",value:function(){var n=Object(u.a)(a.a.mark((function n(t,r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("post",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"put",value:function(){var n=Object(u.a)(a.a.mark((function n(t,r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("put",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"patch",value:function(){var n=Object(u.a)(a.a.mark((function n(t,r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("patch",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"delete",value:function(){var n=Object(u.a)(a.a.mark((function n(t,r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("delete",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()}]),e}(),b=Object(o.createContext)();function j(e){var n=e.children,t=Object(o.useState)(!1),c=Object(s.a)(t,2),i=c[0],l=c[1],p=Object(o.useState)([]),d=Object(s.a)(p,2),f=d[0],j=d[1];function h(){return(h=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0),l(!1);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),Object(r.jsx)(b.Provider,{value:{connections:f,setConnections:j,loadingConnections:i,setLoadingConnections:l},children:n})}var h=t(18),v=t(3),x=t(13),O=t(12),m=t.n(O);function y(e){var n=e.children;return Object(r.jsx)("thead",{children:n})}function w(e){var n=e.children;return Object(r.jsx)("tbody",{children:n})}function g(e){var n=e.children;return Object(r.jsx)("table",{children:n})}var k=t(22),q=t(23);function C(){var e=Object(k.a)(["\n    display: flex;\n    margin: 50px;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return C=function(){return e},e}function S(){var e=Object(k.a)(["\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 1);\n    border: 2px solid var(--color-primary);\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:focus {\n        border-color: white;\n        color: white;\n    }\n"]);return S=function(){return e},e}var E=q.a.button(S()),J=q.a.div(C());t(44);function P(){var e=Object(o.useState)("categories"),n=Object(s.a)(e,2),t=n[0],c=(n[1],Object(o.useState)([])),i=Object(s.a)(c,2),l=i[0],p=i[1];Object(o.useEffect)((function(){function e(){return(e=Object(u.a)(a.a.mark((function e(){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/databases/tph");case 2:n=e.sent,n.code,t=n.data,p(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(l);var d=function(){var e;return null!==(e=l.find((function(e){return e.table===t})))&&void 0!==e?e:{columns:[],rows:[]}};return Object(r.jsx)(J,{children:Object(r.jsx)(g,{children:l.length&&t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y,{children:d().columns.map((function(e){var n=[];for(var t in e)n.push(e[t]);return n}))}),Object(r.jsx)(w,{children:d().rows.map((function(e){var n=[];for(var t in e)n.push(e[t]);return n}))})]}):null})})}function T(){var e=Object(x.a)({start:{}})();Object(o.useContext)(b).connections;return Object(r.jsx)(J,{className:m()(e.start,"center-children"),children:Object(r.jsx)(E,{as:h.b,to:"/database/tph",children:"Test TPH db"})})}function z(){return Object(r.jsx)(h.a,{children:Object(r.jsxs)(v.c,{children:[Object(r.jsx)(v.a,{path:"/database/:name?",exact:!0,children:Object(r.jsx)(P,{})}),Object(r.jsx)(v.a,{children:Object(r.jsx)(T,{})})]})})}function A(){return Object(r.jsx)(j,{children:Object(r.jsx)(z,{})})}var B=t(20),F=t.n(B);t(50);F.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.9c3de752.chunk.js.map