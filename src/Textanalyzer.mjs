import React, { useState } from "react";
import Button from "./Button.mjs";
import Summary from "./Summary.mjs";
export default function Textanalyzer(props) {
  const [text, setText] = useState("");
  const change = (e) => {
    setText(e.target.value);
  };
  const upper = () => {
    let c = text.toUpperCase();
    setText(c);
  };
  const lower = () => {
    let c = text.toLowerCase();
    setText(c);
  };
  const char=text.length;
 const words = text.split(" ").length;
  const ti=words * 0.08;

  const clear=()=>{
    setText(" ")
  }
  return (
    <>
    <div className="cenet">
      <div className="contain"  style={props.bc}>
        <h1>Enter your text</h1>
        <textarea
          cols="100"
          rows="10"
          onChange={change}
          value={text}
          placeholder="enter your text here"
        />
        <div className="btngrps">
          <Button upper={upper} title="Uppercase" />
          <Button upper={lower} title="Lowercase" />
          <Button upper={clear} title="Clear" />
        </div>
        <Summary time={ti} char={char} prev={text} words={words}/>
      </div>
      </div>
     
    </>
  );
}
