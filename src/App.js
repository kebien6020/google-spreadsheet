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

  handleSubmit = () => {
    console.log(sheetUrl)
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
