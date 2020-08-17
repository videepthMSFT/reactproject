import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HI</h1>
        <Person name="Max" age="28">
          Vishnu is good
        </Person>
      </div>
    )
  }
}

export default App
