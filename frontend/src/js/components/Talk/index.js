import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const styles = {
  textAlign: 'center',
}
const repoLink = 'https://github.com/foundersandcoders'

export default (props) => {
  return (
    <Grid style={styles}>
      <Row>
        <Col xs={12}>
          <h3>Talk</h3>
          <ul style={{textAlign: 'left'}}><li>
          <strong>A</strong>ssess for risk of suicide or harm
          </li><li>
          <strong>L</strong>isten nonjudgmentally
          </li><li>
          <strong>G</strong>ive reassurance and information
          </li><li>
          <strong>E</strong>ncourage appropriate professional help
          </li><li>
          <strong>E</strong>ncourage self-help and other support strategies
          </li></ul>
        </Col>
      </Row>
    </Grid>
  )
}
