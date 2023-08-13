import React from 'react'

export default function Summary(props) {
  return (
    <>
    <div className="summary" >
        <h1>Your Text Summary</h1>
    <p>{props.words} words and {props.char} characters</p>
    <p>{props.time} Minutes read</p>

    </div>
    <div className="preview">
        <h2>Preview</h2>
        <p>{props.prev.length>0? props.prev:"Enter sth to summerize"}</p>
    </div>
    </>
  )
}
