import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router'

export default (props) => {
  return (
    <Jumbotron className='home'>
    <div className="btn-group-vertical" style={{width: '90%'}}>
      <Link className="btn btn-default" to="/talk"><h1>Talk</h1></Link>
      <Link className="btn btn-default" to="/screen"><h1>Screen</h1></Link>
      <Link className="btn btn-default" to="/learn"><h1>Learn</h1></Link>
      <Link className="btn btn-default" to="/refer"><h1>Refer</h1></Link>
      <Link className="btn btn-default" to="/remind"><h1>Remind</h1></Link>
    </div>
    </Jumbotron>
  )
}
