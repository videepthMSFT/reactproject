import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'MAXd', age: 28 },
      { name: 'RAM', age: 28 },
      { name: 'SHYAM', age: 28 },
    ],
  }

  switchNameHandler = (newName) => {
    // console.log('clicked')
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'RAM', age: 28 },
        { name: 'SHYAM', age: 28 },
      ],
    })
  }

  render() {
    return (
      <div className="App">
        <h1>HI</h1>
        <button onClick={this.switchNameHandler.bind(this, 'vishnu')}>
          Switch
        </button>
        <Person
          name={this.state.persons[0].name}
          age="28"
          click={() => this.switchNameHandler('praveen')}
        >
          Vishnu is good
        </Person>
      </div>
    )
  }
}

export default App
