(this["webpackJsonpreactmyadmin-node"]=this["webpackJsonpreactmyadmin-node"]||[]).push([[0],{49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t(5),a=t.n(c),u=t(11),s=t(15),o=t(0),i=t.n(o),l=t(19),j=t(28),d=t(29),p=function(){function e(){Object(j.a)(this,e)}return Object(d.a)(e,null,[{key:"request",value:function(){var e=Object(u.a)(a.a.mark((function e(){var n,t,r,c,u,s,o,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:"get",t=i.length>1&&void 0!==i[1]?i[1]:"",r=i.length>2&&void 0!==i[2]?i[2]:null,c=i.length>3&&void 0!==i[3]?i[3]:null,u={method:n,headers:Object(l.a)({Accept:"application/json"},c)},e.next=7,fetch(t,Object(l.a)(Object(l.a)({},r),u));case 7:return s=e.sent,o=[],e.prev=9,e.next=12,s.json();case 12:o=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),console.error(e.t0);case 18:return e.abrupt("return",{data:o,code:s.status,response:s});case 19:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var n=Object(u.a)(a.a.mark((function n(t,r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("get",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"post",value:function(){var n=Object(u.a)(a.a.mark((function n(t,r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("post",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"put",value:function(){var n=Object(u.a)(a.a.mark((function n(t,r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("put",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"patch",value:function(){var n=Object(u.a)(a.a.mark((function n(t,r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("patch",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()},{key:"delete",value:function(){var n=Object(u.a)(a.a.mark((function n(t,r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.request("delete",t,r,c);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}()}]),e}(),f=Object(o.createContext)();function b(e){var n=e.children,t=Object(o.useState)(!1),c=Object(s.a)(t,2),i=c[0],l=c[1],j=Object(o.useState)([]),d=Object(s.a)(j,2),p=d[0],b=d[1];function h(){return(h=Object(u.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(!0),l(!1);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]),Object(r.jsx)(f.Provider,{value:{connections:p,setConnections:b,loadingConnections:i,setLoadingConnections:l},children:n})}var h=t(17),O=t(3),v=t(30),x=t(13),m=t(12),y=t.n(m);function w(e){var n=e.children;return Object(r.jsx)("th",{children:n})}function g(e){var n=e.children;return Object(r.jsx)("thead",{children:n})}function k(e){var n=e.children;return Object(r.jsx)("tbody",{children:n})}function q(e){var n=e.children;return Object(r.jsx)("td",{children:n})}function S(e){var n=e.children;return Object(r.jsx)("tr",{children:n})}function C(e){var n=e.children;return Object(r.jsx)("table",{children:n})}var E=t(22),J=t(23);function P(){var e=Object(E.a)(["\n    display: flex;\n    margin: 50px;\n    &.center-children {\n        justify-content: center;\n        align-items: center;\n    }\n"]);return P=function(){return e},e}function T(){var e=Object(E.a)(["\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 1);\n    border: 2px solid var(--color-primary);\n    color: var(--color-primary);\n    text-decoration: none;\n    display: inline-flex;\n    border-radius: 4px;\n    font-weight: bold;\n    user-select: none;\n    background: none;\n    font-size: 1rem;\n    cursor: pointer;\n    padding: 15px;\n    outline: 0;\n    &:focus {\n        border-color: white;\n        color: white;\n    }\n"]);return T=function(){return e},e}var z=J.a.button(T()),A=J.a.div(P());function B(){var e=Object(o.useState)("categories"),n=Object(s.a)(e,2),t=n[0],c=(n[1],Object(o.useState)(!0)),i=Object(s.a)(c,2),l=(i[0],i[1]),j=Object(o.useState)([]),d=Object(s.a)(j,2),f=d[0],b=d[1];Object(o.useEffect)((function(){function e(){return(e=Object(u.a)(a.a.mark((function e(){var n,t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,p.get("/databases/tph");case 3:n=e.sent,n.code,t=n.data,l(!1),b(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(f);return Object(r.jsx)(A,{children:Object(r.jsx)(C,{children:function(){if(!f.length||!t)return null;var e,n=function(){var e;return null!==(e=f.find((function(e){return e.table===t})))&&void 0!==e?e:{columns:{},rows:[]}}(),c=[],a=Object(v.a)(n.columns);try{for(a.s();!(e=a.n()).done;){var u=e.value;c.push(n.columns[u])}}catch(o){a.e(o)}finally{a.f()}var s=n.rows.map((function(e){var n=[];for(var t in e)n.push(t);return Object(r.jsx)(S,{children:n.map((function(e){return Object(r.jsx)(q,{children:e})}))})}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{children:c.map((function(e){return Object(r.jsx)(w,{children:e})}))}),Object(r.jsx)(k,{children:s})]})}()})})}function F(){var e=Object(x.a)({start:{}})();Object(o.useContext)(f).connections;return Object(r.jsx)(A,{className:y()(e.start,"center-children"),children:Object(r.jsx)(z,{as:h.b,to:"/database/tph",children:"Test TPH db"})})}function H(){return Object(r.jsx)(h.a,{children:Object(r.jsxs)(O.c,{children:[Object(r.jsx)(O.a,{path:"/database/:name?",exact:!0,children:Object(r.jsx)(B,{})}),Object(r.jsx)(O.a,{children:Object(r.jsx)(F,{})})]})})}function I(){return Object(r.jsx)(b,{children:Object(r.jsx)(H,{})})}var L=t(35),M=t.n(L);t(49);M.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.b803aa30.chunk.js.map