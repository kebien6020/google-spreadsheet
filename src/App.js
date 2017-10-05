import React, { Component } from 'react'
import './App.css'

const sheetUrl = process.env.REACT_APP_SHEET_URL

class App extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = async () => {
    // Converts {a:1,b:2} into 'a=1&b=2'
    const objToParams = obj =>
      Object.keys(obj)
        .map(key => [key, obj[key]])
        .map(([key, val]) => `${key}=${val}`)
        .join('&')

    // Serialize the state, ie. the form fields as query params
    const queryParams = '?' + objToParams(this.state)

    const response = await fetch(sheetUrl + queryParams)

    // If everything went well we are done, parse and log the response
    // just in case.
    // In a real app we would check the response to see that everything
    // went fine and show an error otherwise
    const result = await response.json()

    console.log(result)
  }

  render() {
    const { state } = this
    return (
      <div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            name="message"
            placeholder="Message"
            value={state.message}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App
