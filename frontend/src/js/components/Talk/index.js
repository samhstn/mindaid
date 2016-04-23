import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

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
          <h3>Talk</h3>
          <ul><li>
          A ssess for risk of suicide or harm
          </li><li>
          L isten nonjudgmentally
          </li><li>
          G ive reassurance and information
          </li><li>
          E ncourage appropriate professional help
          </li><li>
          E ncourage self-help and other support strategies
          </li></ul>
        </Col>
      </Row>
    </Grid>
  )
}
