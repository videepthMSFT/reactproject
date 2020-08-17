import React from 'react'
import './User.css'

const userOutput = (props) => {
  return (
    <div className="User">
      <p>P1{props.userName}</p>
      <p>P2</p>
    </div>
  )
}

export default userOutput
