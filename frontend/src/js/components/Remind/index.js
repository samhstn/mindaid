import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

export default class Refer extends Component {
  sendMessage () {
	axios.post('/sendText', {
    recipient: '00447985156114',
  })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (response) {
    console.log(response)
  });
  }
  render () {
    return (
      <div>
        <h3>Send a reminder</h3>
        <h5>Send a reminder message to yourself or your specialist: </h5>
        <p>
          <span>Number to message: </span><input type='text'></input>
        </p>
        <Button onClick={this.sendMessage}>Message</Button>
      </div>
    )
  }
}
