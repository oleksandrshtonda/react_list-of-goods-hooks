(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var o,n=s(7),c=s.n(n),r=s(5),a=s(1),i=(s(12),s(13),s(3));!function(e){e.ALPHABET="alphabet",e.LENGTH="length",e.NO_SORT=""}(o||(o={}));var l=o;function u(e){var t=e.sortBy,s=e.setSortBy,o=e.setReversed,n=e.setGoods,c=e.originalGoods,r=e.reversed;switch(t){case l.NO_SORT:o(!1),n(c),s(l.NO_SORT);break;case l.ALPHABET:s(l.ALPHABET);var a=c.sort((function(e,t){return e.localeCompare(t)}));n(r?a.reverse():a);break;case l.LENGTH:s(l.LENGTH);var u=c.sort((function(e,t){return e.length-t.length}));n(r?Object(i.a)(u).reverse():Object(i.a)(u))}}var b=s(0),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],O=function(){var e=Object(a.useState)(l.NO_SORT),t=Object(r.a)(e,2),s=t[0],o=t[1],n=Object(a.useState)(!1),c=Object(r.a)(n,2),O=c[0],j=c[1],h=Object(a.useState)([].concat(d)),v=Object(r.a)(h,2),g=v[0],f=v[1],N=function(e){return{sortBy:e,setSortBy:o,setReversed:j,setGoods:f,originalGoods:[].concat(d),reversed:O}};return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:"button is-info ".concat(s!==l.ALPHABET&&"is-light"),onClick:function(){u(N(l.ALPHABET))},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:"button is-success ".concat(s!==l.LENGTH&&"is-light"),onClick:function(){u(N(l.LENGTH))},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:"button is-warning ".concat(!0!==O&&"is-light"),onClick:function(){!function(e){var t=e.goods,s=e.reversed,o=e.setReversed,n=e.setGoods;o(!s),n(Object(i.a)(t).reverse())}({goods:g,reversed:O,setReversed:j,setGoods:f})},children:"Reverse"}),(s!==l.NO_SORT||!0===O)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){u(N(l.NO_SORT))},children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(e){return Object(b.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})};c.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e3ce3d8b.chunk.js.map