import React, { useState } from "react";

export default function Nav(props) {

  return (
    <>
      <div className="navbar" style={props.ini}>
        <div className="head">
          <h2 style={props.cc}>MinalTextUtils</h2>
          <h2 style={props.cc}>About</h2>
        </div>
        <button onClick={props.fun} className="box">
          <i className="fa-regular fa-lightbulb" />
        </button>
      </div>
    </>
  );
}
