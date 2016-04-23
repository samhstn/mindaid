import React from 'react'

export default (props) => {
  return (
    <div style={{display: 'inline'}}>
      <h3>{props.question}</h3>
      <label><input className="notTrue" type='radio' name={props.name} /></label>
      <label><input className="somewhatTrue" type='radio' name={props.name} /></label>
      <label><input className="certainlyTrue" type='radio' name={props.name} /></label>
    </div>
  )
}
