import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

const app = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'MAXd', age: 28 },
      { name: 'RAM', age: 28 },
      { name: 'SHYAM', age: 28 },
    ],
  })

  const switchNameHandler = () => {
    // console.log('clicked')
    setPersonState({
      persons: [
        { name: 'MAXdy', age: 25 },
        { name: 'RAM', age: 28 },
        { name: 'SHYAM', age: 28 },
      ],
    })
  }

  return (
    <div className="App">
      <h1>HI</h1>
      <button onClick={switchNameHandler}>Switch</button>
      <Person name={personState.persons[0].name} age="28">
        Vishnu is good
      </Person>
    </div>
  )
}

export default app
