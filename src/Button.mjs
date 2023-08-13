import React from 'react'

export default function Button(props) {
  return (
    <div>
         <button onClick={props.upper}>{props.title}</button>
    </div>
  )
}
