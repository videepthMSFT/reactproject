import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
import UserOutput from './User/UserOutput'
import UserInput from './User/UserInput'

class App extends Component {
  state = {
    persons: [
      { name: 'MAXd', age: 28 },
      { name: 'RAM', age: 28 },
      { name: 'SHYAM', age: 28 },
    ],
    userName: 'VP',
  }

  userNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value,
    })
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 25 },
        { name: 'RAM', age: 28 },
        { name: 'SHYAM', age: 28 },
      ],
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    return (
      <div className="App">
        <h1>HI</h1>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'vishnu')}
        >
          Switch
        </button>
        <Person
          name={this.state.persons[0].name}
          age="28"
          click={() => this.switchNameHandler('praveen')}
          changed={this.nameChangeHandler}
        >
          Vishnu is good
        </Person>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserInput
          userName={this.state.userName}
          changed={this.userNameChangeHandler}
        ></UserInput>
      </div>
    )
  }
}

export default App
