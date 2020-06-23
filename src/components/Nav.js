import React from "react";

export default ({navState}) => <>
<nav className="navbar navbar-expand-lg navbar-light bg-success" style={{justifyContent:"space-around",boxShadow:"0 0 10px 0"}}>
  <a className="navbar-brand" href="./">CLICKY GAME</a>
      <span className="nav-item active">
            <h4>{navState.msg}</h4>
      </span>
      <span className="nav-item">
        <h4>SCORE : {navState.score} | TOP SCORE : {navState.ts}</h4>
      </span>
    </nav>
</>