import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router'

export default (props) => {
  return (
    <Jumbotron className='home'>
    <div className="btn-group-vertical" style={{width: '90%'}}>
      <Link className="btn btn-default" to="/listen"><h1>Listen</h1></Link>
      <Link className="btn btn-default" to="/screening"><h1>Screen</h1></Link>
      <Link className="btn btn-default" to="/learn"><h1>Learn</h1></Link>
      <Link className="btn btn-default" to="/refer"><h1>Refer</h1></Link>
      <Link className="btn btn-default" to="/remind"><h1>Remind</h1></Link>
    </div>
    </Jumbotron>
  )
}
