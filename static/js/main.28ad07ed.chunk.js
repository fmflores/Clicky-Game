(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(3),o=a.n(s),r=(a(9),a(1)),l=(a(10),function(e){var t=e.navState;return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-success",style:{justifyContent:"space-around",boxShadow:"0 0 10px 0"}},n.a.createElement("a",{className:"navbar-brand",href:"/"},"CLICKY GAME"),n.a.createElement("span",{className:"nav-item active"},n.a.createElement("h4",null,t.msg)),n.a.createElement("span",{className:"nav-item"},n.a.createElement("h4",null,"SCORE : ",t.score," | TOP SCORE : ",t.ts))))}),i=function(){return n.a.createElement("div",{className:"jumbotron",style:{textAlign:"center"}},n.a.createElement("h1",null,"Clicky Game!"),n.a.createElement("h4",null,"Click on an image to earn points, but don't click on any more than once!"))},m=function(e){var t=e.arr,a=e.shuffle;return n.a.createElement(n.a.Fragment,null,t.map((function(e){return n.a.createElement("div",{className:"col-3 mt-2",key:e,style:{maxHeight:"150px"}},n.a.createElement("img",{onClick:function(){return a(e)},className:"img-fluid",style:{overflowY:"hidden"},src:e}))})))};var g=function(){var e=Object(c.useState)({msg:"Click An Image to Begin!",score:0,ts:0}),t=Object(r.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)({imgs:["https://img1.looper.com/img/gallery/the-strange-problem-steve-carell-had-while-filming-the-office/intro-1587676724.jpg","https://static.accessonline.com/uploads/2011/04/Steve-Carell-The-Office-Farewell.jpg","https://img2.looper.com/img/gallery/the-funniest-michael-scott-quotes-from-the-office/michael-scott-declares-bankruptcy-1566232193.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCrRtYglKG50nFdZrLhLNihsLM2_u6CguOGQb-CimbGUdQ63Bw&usqp=CAU","https://miro.medium.com/max/500/1*xDIevNE7HEMiJQVTYg0qDQ.png","https://nofilmschool.com/sites/default/files/styles/article_wide/public/the-office-michael-scott-best-impressions.jpg?itok=pXdFEsto","https://static2.srcdn.com/wordpress/wp-content/uploads/2019/07/Steve-Carell-as-Michael-Scott-In-The-Office-Series-Finale.jpg","https://pbs.twimg.com/profile_images/959108779555074051/PLd8LODr_400x400.jpg","https://static.highsnobiety.com/thumbor/sNzOPq9n__CO9WDo0Fw0SLcHFwc=/fit-in/1200x720/smart/static.highsnobiety.com/wp-content/uploads/2019/12/12123128/the-office-threat-level-midnight-movie-00.jpg","https://img.cinemablend.com/filter:scale/cb/f/6/c/4/a/1/f6c4a130350731b026f260de0931aaab7c53667b4036527988f71cfc9116941e.jpg?mw=600","https://img.cinemablend.com/filter:scale/quill/5/c/e/b/6/4/5ceb6463894fa7418c959d6d70054006a1f16485.jpg?mw=600","https://www.nydailynews.com/resizer/KV3_wa3e99bqG7ZEnhbA9Tv55YI=/415x313/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/GSJUV4ARYC5DVHP4JFICREA2JA.jpg"],clicked:[]}),g=Object(r.a)(o,2),p=g[0],h=g[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(l,{navState:a}),n.a.createElement(i,null),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement(m,{arr:p.imgs,shuffle:function(e){p.clicked.includes(e)?(a.score===a.ts?alert("CONGRATS! NEW TOP SCORE: ".concat(a.score)):alert("Game Over! Total Score: ".concat(a.score," Top Score: ").concat(a.ts)),s({msg:"Click An Image to Begin!",score:0,ts:a.ts}),h({imgs:p.imgs,clicked:[]}),console.log("Game reset.")):(h({imgs:p.imgs.sort((function(e,t){return Math.random()-.5})),clicked:p.clicked.concat([e])}),a.score===a.ts?s({score:a.score+1,ts:a.ts+1}):s({score:a.score+1,ts:a.ts}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.28ad07ed.chunk.js.map