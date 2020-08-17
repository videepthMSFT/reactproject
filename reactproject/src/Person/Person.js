import React from 'react'

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        I am {props.name} and age is {props.age}
      </p>
      {props.children}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person
