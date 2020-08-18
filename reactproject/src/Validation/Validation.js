import React from 'react'

const validationInput = (props) => {
  return (
    <div>
      {props.length > 0 ? (
        <div className="User">
          {props.length < 5 ? (
            <h2>Text is too short</h2>
          ) : props.length > 10 ? (
            <h2>text is too long</h2>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default validationInput
