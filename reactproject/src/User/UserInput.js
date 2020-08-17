import React from 'react'
import './User.css'

const userInput = (props) => {
  return (
    <div className="User">
      <input onChange={props.changed} type="text" value={props.userName} />
    </div>
  )
}

export default userInput
