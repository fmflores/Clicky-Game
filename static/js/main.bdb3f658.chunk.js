(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(3),o=a.n(s),i=(a(9),a(1)),r=(a(10),function(e){var t=e.navState;return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-light bg-success",style:{justifyContent:"space-around",boxShadow:"0 0 10px 0"}},c.a.createElement("a",{className:"navbar-brand",href:"./"},"CLICKY GAME"),c.a.createElement("span",{className:"nav-item active"},c.a.createElement("h5",null,t.msg)),c.a.createElement("span",{className:"nav-item"},c.a.createElement("h5",null,"SCORE : ",t.score," | TOP SCORE : ",t.ts))))}),l=function(){return c.a.createElement("div",{className:"jumbotron",style:{textAlign:"center"}},c.a.createElement("h1",null,"Clicky Game!"),c.a.createElement("h4",null,"Click on an image to earn points, but don't click on any more than once!"))},m=function(e){var t=e.arr,a=e.shuffle;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("div",{className:"col-3 mt-2",key:e,style:{maxHeight:"150px"}},c.a.createElement("img",{onClick:function(){return a(e)},className:"img-fluid",style:{overflowY:"hidden"},src:e}))})))};var g=function(){var e=Object(n.useState)({msg:"Click An Image to Begin!",score:0,ts:0}),t=Object(i.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)({imgs:["https://img1.looper.com/img/gallery/the-strange-problem-steve-carell-had-while-filming-the-office/intro-1587676724.jpg","https://static.accessonline.com/uploads/2011/04/Steve-Carell-The-Office-Farewell.jpg","https://img2.looper.com/img/gallery/the-funniest-michael-scott-quotes-from-the-office/michael-scott-declares-bankruptcy-1566232193.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCrRtYglKG50nFdZrLhLNihsLM2_u6CguOGQb-CimbGUdQ63Bw&usqp=CAU","https://miro.medium.com/max/500/1*xDIevNE7HEMiJQVTYg0qDQ.png","https://nofilmschool.com/sites/default/files/styles/article_wide/public/the-office-michael-scott-best-impressions.jpg?itok=pXdFEsto","https://static2.srcdn.com/wordpress/wp-content/uploads/2019/07/Steve-Carell-as-Michael-Scott-In-The-Office-Series-Finale.jpg","https://pbs.twimg.com/profile_images/959108779555074051/PLd8LODr_400x400.jpg","https://static.highsnobiety.com/thumbor/sNzOPq9n__CO9WDo0Fw0SLcHFwc=/fit-in/1200x720/smart/static.highsnobiety.com/wp-content/uploads/2019/12/12123128/the-office-threat-level-midnight-movie-00.jpg","https://img.cinemablend.com/filter:scale/cb/f/6/c/4/a/1/f6c4a130350731b026f260de0931aaab7c53667b4036527988f71cfc9116941e.jpg?mw=600","https://img.cinemablend.com/filter:scale/quill/5/c/e/b/6/4/5ceb6463894fa7418c959d6d70054006a1f16485.jpg?mw=600","https://www.nydailynews.com/resizer/KV3_wa3e99bqG7ZEnhbA9Tv55YI=/415x313/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/GSJUV4ARYC5DVHP4JFICREA2JA.jpg"],clicked:[]}),g=Object(i.a)(o,2),u=g[0],h=g[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(r,{navState:a}),c.a.createElement(l,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(m,{arr:u.imgs,shuffle:function(e){u.clicked.includes(e)?(s({msg:"You guessed wrong!",score:0,ts:a.ts}),h({imgs:u.imgs,clicked:[]}),console.log("Game reset.")):(h({imgs:u.imgs.sort((function(e,t){return Math.random()-.5})),clicked:u.clicked.concat([e])}),a.score===a.ts?s({msg:"You guessed right!",score:a.score+1,ts:a.ts+1}):s({msg:"You guessed right!",score:a.score+1,ts:a.ts}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.bdb3f658.chunk.js.map