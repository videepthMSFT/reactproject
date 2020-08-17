import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
import UserOutput from './User/UserOutput'
import UserInput from './User/UserInput'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'MAXd', age: 28 },
      { id: '2', name: 'RAM', age: 28 },
      { id: '3', name: 'SHYAM', age: 28 },
    ],
    userName: 'VP',
    toggle: false,
  }

  userNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value,
    })
  }

  deletePersonhandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    })

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons,
    })
  }

  toggleHandler = () => {
    this.setState({
      toggle: !this.state.toggle,
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
        <button style={style} onClick={this.toggleHandler}>
          Switch
        </button>
        {this.state.toggle ? (
          <div>
            {this.state.persons.map((person, index) => {
              return (
                <Person
                  click={() => this.deletePersonhandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangeHandler(event, person.id)}
                />
              )
            })}
            {/* <Person
              name={this.state.persons[0].name}
              age="28"
              click={() => this.switchNameHandler('praveen')}
              changed={this.nameChangeHandler}
            >
              Vishnu is good
            </Person> */}
            <UserOutput userName={this.state.userName}></UserOutput>
            <UserInput
              userName={this.state.userName}
              changed={this.userNameChangeHandler}
            ></UserInput>
          </div>
        ) : null}
      </div>
    )
  }
}

export default App
