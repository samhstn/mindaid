import React, { Component } from 'react'
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
        <h1 onClick={this.sendMessage}>Message</h1>
      </div>
    )
  }
}
