(this.webpackJsonpmoviedb=this.webpackJsonpmoviedb||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(8),i=c.n(r),l=(c(6),c.p,c(7),c(2)),o=c(4),j=c.n(o),u=c(9),b=c(5);function d(e){var t=e.movie;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:t.title+" poster"}),Object(a.jsxs)("div",{className:"card--content",children:[Object(a.jsx)("h3",{className:"card--title",children:t.title}),Object(a.jsx)("p",{children:Object(a.jsxs)("small",{className:"small--text",children:["Release Date: ",t.release_date]})}),Object(a.jsx)("p",{children:Object(a.jsxs)("small",{className:"small--text",children:["Rating: ",t.vote_average]})}),Object(a.jsx)("p",{className:"card--desc",children:t.overview})]})]})}function m(){var e,t=Object(n.useState)(""),c=Object(b.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)([]),o=Object(b.a)(i,2),m=o[0],h=o[1],p=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c="https://api.themoviedb.org/3/search/movie?api_key=8ecc45cf73e2ad17ef14065cbc4524b3&language=en-US&query=".concat(s,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(c);case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,h(n.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{className:"form",onSubmit:p,children:[Object(a.jsx)("label",{htmlFor:"query",className:"label",children:" Movie Name"}),Object(a.jsx)("input",(e={className:"",name:"query",type:"text"},Object(l.a)(e,"className","query"),Object(l.a)(e,"placeholder","e.g. Mrs.Doubtfire"),Object(l.a)(e,"value",s),Object(l.a)(e,"onChange",(function(e){return r(e.target.value)})),e)),Object(a.jsx)("button",{type:"submit",className:"button",children:"Search"})]}),Object(a.jsx)("div",{className:"card-list",children:m.filter((function(e){return e.poster_path})).map((function(e){return Object(a.jsx)(d,{movie:e},e.id)}))})]})}var h=function(){return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"title",children:"React Movie Search"}),Object(a.jsx)(m,{})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),p()},6:function(e,t,c){},7:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.817da043.chunk.js.map