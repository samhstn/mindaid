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
          <h3>The Aggressive/Difficult Child</h3>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </Col>
        <Col xs={4} xsOffset={4}>
          <a href='https://www.minded.org.uk/course/view.php?id=87'><h4 style={{textAlign: 'center'}}>Link to MindEd</h4></a>
        </Col>
      </Row>
    </Grid>
  )
}
