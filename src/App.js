import React, { useState, Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Jumbo from "./components/Jumbo";
import Game from "./components/Game";
function App() {
  const [navState, setNavState] = useState({
    msg: "Click An Image to Begin!",
    score: 0,
    ts: 0,
  });
  const [pics, setPics] = useState({
    imgs: [
      "https://img1.looper.com/img/gallery/the-strange-problem-steve-carell-had-while-filming-the-office/intro-1587676724.jpg",
      "https://static.accessonline.com/uploads/2011/04/Steve-Carell-The-Office-Farewell.jpg",
      "https://img2.looper.com/img/gallery/the-funniest-michael-scott-quotes-from-the-office/michael-scott-declares-bankruptcy-1566232193.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCrRtYglKG50nFdZrLhLNihsLM2_u6CguOGQb-CimbGUdQ63Bw&usqp=CAU",
      "https://miro.medium.com/max/500/1*xDIevNE7HEMiJQVTYg0qDQ.png",
      "https://nofilmschool.com/sites/default/files/styles/article_wide/public/the-office-michael-scott-best-impressions.jpg?itok=pXdFEsto",
      "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/07/Steve-Carell-as-Michael-Scott-In-The-Office-Series-Finale.jpg",
      "https://pbs.twimg.com/profile_images/959108779555074051/PLd8LODr_400x400.jpg",
      "https://static.highsnobiety.com/thumbor/sNzOPq9n__CO9WDo0Fw0SLcHFwc=/fit-in/1200x720/smart/static.highsnobiety.com/wp-content/uploads/2019/12/12123128/the-office-threat-level-midnight-movie-00.jpg",
      "https://img.cinemablend.com/filter:scale/cb/f/6/c/4/a/1/f6c4a130350731b026f260de0931aaab7c53667b4036527988f71cfc9116941e.jpg?mw=600",
      "https://img.cinemablend.com/filter:scale/quill/5/c/e/b/6/4/5ceb6463894fa7418c959d6d70054006a1f16485.jpg?mw=600",
      "https://www.nydailynews.com/resizer/KV3_wa3e99bqG7ZEnhbA9Tv55YI=/415x313/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/GSJUV4ARYC5DVHP4JFICREA2JA.jpg",
    ],
    clicked: [],
  });

  const reset = () => {
    setNavState({ msg: 'Wrong! Try again', score: 0, ts: navState.ts })
    setPics({ imgs: pics.imgs, clicked: [] });
  };

  const shuffle = (url) => {
    if (pics.clicked.includes(url)) {
      reset();
      console.log('Game reset.')
    } else {
      setPics({
        imgs: pics.imgs.sort((a, b) => Math.random() - 0.5),
        clicked: pics.clicked.concat([url]),
      });
      navState.score === navState.ts ?
        setNavState({ msg: 'You guessed right!', score: navState.score + 1, ts: navState.ts + 1 }) : 
        setNavState({ msg: 'You guessed right!', score: navState.score + 1, ts: navState.ts });

    }
  };

  return (
    <>
      <Nav navState={navState} />
      <Jumbo />
      <div className="container">
        <div className="row">
          <Game arr={pics.imgs} shuffle={shuffle} />
        </div>
      </div>
    </>
  );
}

export default App;
