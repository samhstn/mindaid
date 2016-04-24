import React from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'

const styles = {
  textAlign: 'center',
}
const repoLink = 'https://github.com/foundersandcoders'

export default (props) => {
  return (
    <Grid style={styles}>
      <Row>
        <Col xs={12}>
          <h3>Learn</h3>

          <Link to="anxiety">
            <div className="panel panel-default">
              <div className="panel-heading">
                The Worried Child
              </div>
              <div className="panel-body">
                Ten things you should know about anxiety to help you help your students
              </div>
            </div>
          </Link>

          <Link to="behaviour">
            <div className="panel panel-default">
              <div className="panel-heading">
                The Aggressive/Difficult Child
              </div>
              <div className="panel-body">
                Ten things you should know about behaviour to help you help your students
              </div>
            </div>
          </Link>

          <Link to="depression">
            <div className="panel panel-default">
              <div className="panel-heading">
                Sad and Isolated Child
              </div>
              <div className="panel-body">
                Ten things you should know about depression to help you help your students
              </div>
            </div>
          </Link>

          <Link to="self-harm">
            <div className="panel panel-default">
              <div className="panel-heading">
                Self-harm and Risky Behaviour
              </div>
              <div className="panel-body">
                Ten things you should know about self harm to help you help your students
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </Grid>
  )
}
