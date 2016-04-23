import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router'

export default (props) => {
  return (
    <Jumbotron className='home'>
      <Link to="/talk"><h1>Talk</h1></Link>
      <Link to="/screen"><h1>Screen</h1></Link>
      <Link to="/learn"><h1>Learn</h1></Link>
      <Link to="/refer"><h1>Refer</h1></Link>
      <Link to="/remind"><h1>Remind</h1></Link>
    </Jumbotron>
  )
}
