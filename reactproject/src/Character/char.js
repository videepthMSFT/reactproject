import React from 'react'

const charInput = (props) => {
  const style = {
    backgroundColor: 'white',
    display: 'inline-block',
    margin: '16px',
    font: 'inherit',
    border: '1px solid black',
    padding: '16px',
  }

  return (
    <div>
      <div onClick={props.click} style={style}>
        {props.valueText}
      </div>
    </div>
  )
}

export default charInput
