import React from "react";

export default ({navState}) => <>
<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-success" style={{justifyContent:"space-around",boxShadow:"0 0 10px 0"}}>
  <a className="navbar-brand" href="./">CLICKY GAME</a>
      <span className="nav-item active">
            <h5>{navState.msg}</h5>
      </span>
      <span className="nav-item">
        <h5>SCORE : {navState.score} | TOP SCORE : {navState.ts}</h5>
      </span>
    </nav>
</>