import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

const styles = {
  textAlign: 'center',
  margin: '4em auto'
}
const repoLink = 'https://github.com/foundersandcoders'

export default (props) => {
  return (
    <Grid style={styles}>
      <Row>
        <Col xs={12}>
          <h3>Learn</h3>
          <ul><li><Link to="anxiety">
          10 Things To Know About Anxiety
          </Link></li><li><Link to="depression">
          10 Things To Know About Depression
          </Link></li><li><Link to="self-harm">
          10 Things To Know About Self Harm
          </Link></li><li><Link to="behaviour">
          10 Things To Know About Behaviour
          </Link></li></ul>
        </Col>
      </Row>
    </Grid>
  )
}
