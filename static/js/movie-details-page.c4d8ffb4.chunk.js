(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(57),c=a(0),i=a(3),r=a(9),s=a(120),l=a(55),o=a(97),u=a.n(o),d=a(1);function j(e){var t=e.poster_path,a=e.title,n=e.overview,c=e.genres,i=e.vote_average;return Object(d.jsxs)("div",{className:u.a.details,children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t),alt:a}),Object(d.jsxs)("div",{className:u.a.descriptionBlock,children:[Object(d.jsx)("h2",{className:u.a.generalTitle,children:a}),Object(d.jsxs)("p",{className:u.a.descriptionPart,children:["User Score: ",Object(d.jsxs)("span",{children:[10*i,"%"]})]}),Object(d.jsx)("h3",{className:u.a.title,children:"Overview"}),Object(d.jsx)("p",{className:u.a.descriptionPart,children:n}),Object(d.jsx)("h4",{className:u.a.title,children:"Genres"}),Object(d.jsx)("ul",{className:u.a.listGenres,children:c&&c.map((function(e){return Object(d.jsx)("li",{className:u.a.listEl,children:e.name},e.id)}))})]})]})}var v=a(19),h=a(98),b=a.n(h),_=Object(c.lazy)((function(){return a.e(1).then(a.bind(null,124))})),p=Object(c.lazy)((function(){return a.e(2).then(a.bind(null,119))}));function g(){var e=Object(i.i)().movieId,t=Object(i.j)(),a=Object(i.g)(),o=Object(c.useState)({poster_path:null,title:null,overview:null,vote_average:null,genres:null,id:null}),u=Object(n.a)(o,2),h=u[0],g=u[1];Object(c.useEffect)((function(){l.b(e).then((function(e){var t=e.poster_path,a=e.title,n=e.overview,c=e.vote_average,i=e.genres,r=e.id;return g({poster_path:t,title:a,overview:n,genres:i,vote_average:c,id:r})})).catch(console.log(Error))}),[e]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.a,{type:"button",onClick:function(){a.goBack()},variant:"outlined",color:"primary",children:"Go back"}),h&&Object(d.jsx)(j,{poster_path:h.poster_path,title:h.title,overview:h.overview,genres:h.genres,vote_average:h.vote_average,id:h.movieId}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:b.a.addInfo,children:"Additional information"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("ul",{className:b.a.list,children:[Object(d.jsx)("li",{className:b.a.listEl,children:Object(d.jsx)(r.c,{to:{pathname:"".concat(t.url,"/cast")},className:b.a.name,children:"Cast"})}),Object(d.jsx)("li",{className:b.a.listEl,children:Object(d.jsx)(r.c,{to:{pathname:"".concat(t.url,"/reviews")},className:b.a.name,children:"Reviews"})})]})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)(c.Suspense,{fallback:Object(d.jsx)(v.a,{}),children:[Object(d.jsx)(i.b,{path:"".concat(t.path,"/cast"),children:Object(d.jsx)(_,{})}),Object(d.jsx)(i.b,{path:"".concat(t.path,"/reviews"),children:Object(d.jsx)(p,{})})]})]})}},55:function(e,t,a){"use strict";a.d(t,"e",(function(){return s})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return u})),a.d(t,"d",(function(){return d}));var n=a(58),c=a.n(n),i="https://api.themoviedb.org/3",r="b4cae661bd383c29838501f5623954e9";function s(){return c.a.get("".concat(i,"/trending/all/day?api_key=").concat(r)).then((function(e){return e.data.results}))}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.a.get("".concat(i,"/search/movie?api_key=").concat(r,"&query=").concat(e,"&page=").concat(t,"include_adult=false")).then((function(e){return e.data}))}function o(e){return c.a.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(r,"&language=en-US")).then((function(e){return e.data}))}function u(e){return c.a.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(r,"&language=en-US")).then((function(e){return e.data}))}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.a.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(r,"&language=en-US&page=").concat(t)).then((function(e){return e.data}))}},97:function(e,t,a){e.exports={listGenres:"MovieDetails_listGenres__12MUn",listEl:"MovieDetails_listEl__1O03y",details:"MovieDetails_details__2dCcz",descriptionBlock:"MovieDetails_descriptionBlock__1zyH7",generalTitle:"MovieDetails_generalTitle__D_trx",title:"MovieDetails_title__1vMz0",descriptionPart:"MovieDetails_descriptionPart__uybS9"}},98:function(e,t,a){e.exports={addInfo:"MovieDetailsPage_addInfo__S6rED",list:"MovieDetailsPage_list__3mqvl",listEl:"MovieDetailsPage_listEl__YF2i4",name:"MovieDetailsPage_name__2CVr7"}}}]);
//# sourceMappingURL=movie-details-page.c4d8ffb4.chunk.js.map