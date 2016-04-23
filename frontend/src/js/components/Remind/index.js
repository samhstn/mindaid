import React, { Component } from 'react'

export default class Refer extends Component {
  changeFunc () {

  }
  render () {
    return (
      <div>
        <h1 onClick={this.changeFunc}>Message</h1>
      </div>
    )
  }
}
