import React from "react";

export default ({navState}) => <>
<nav class="navbar navbar-expand-lg navbar-light bg-success" style={{justifyContent:"space-around",boxShadow:"0 0 10px 0"}}>
  <a class="navbar-brand" href="/">CLICKY GAME</a>
      <span class="nav-item active">
            <h4>{navState.msg}</h4>
      </span>
      <span class="nav-item">
        <h4>SCORE : {navState.score} | TOP SCORE : {navState.ts}</h4>
      </span>
    </nav>
</>