import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'
import UserOutput from './User/UserOutput'
import UserInput from './User/UserInput'
import ValidationInput from './Validation/Validation'
import CharInput from './Character/char'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'MAXd', age: 28 },
      { id: '2', name: 'RAM', age: 28 },
      { id: '3', name: 'SHYAM', age: 28 },
    ],
    userName: 'VP',
    toggle: false,
    lengthoftext: 0,
    actualtext: null,
    characters: null,
  }

  textChangeHandler = (event) => {
    const name = event.target.value
    const length = name.length
    const array = name.split('')

    this.setState({ lengthoftext: length, actualtext: name, characters: array })
  }

  textDeletionHandler = (charIndex) => {
    const chars = [...this.state.characters]
    chars.splice(charIndex, 1)
    this.setState({ characters: chars })

    const textback = chars.join('')
    this.setState({ actualtext: textback })

    const array = textback.split('')

    this.setState({
      lengthoftext: textback.length,
      actualtext: textback,
      characters: array,
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
            <UserOutput userName={this.state.userName}></UserOutput>
            <UserInput
              userName={this.state.userName}
              changed={this.userNameChangeHandler}
            ></UserInput>
            <hr />
            <input
              className="User"
              onChange={this.textChangeHandler}
              value={this.state.actualtext}
            />
            <p className="User">{this.state.lengthoftext}</p>
            <ValidationInput length={this.state.lengthoftext}></ValidationInput>
            {this.state.lengthoftext > 0
              ? this.state.characters.map((character, index) => {
                  return (
                    <CharInput
                      click={() => this.textDeletionHandler(index)}
                      valueText={character}
                      key={index}
                    />
                  )
                })
              : null}
            {/* <CharInput valueText={this.state.actualtext} /> */}
          </div>
        ) : null}
      </div>
    )
  }
}

export default App
