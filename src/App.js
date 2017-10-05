import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <form id="test-form">
          <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="Name"/>
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="email" placeholder="Email"/>
          </div>
          <div>
            <label>Message</label>
            <input type="text" name="message" placeholder="Message"/>
          </div>
          <div>
            <button type="submit" id="submit-form">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
