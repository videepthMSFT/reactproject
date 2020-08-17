import React from 'react'

const person = (props) => {
  return (
    <div>
      <p>
        I am {props.name} and age is {props.age}
        {props.children}
      </p>
    </div>
  )
}

export default person
