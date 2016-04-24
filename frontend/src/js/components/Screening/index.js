import React from 'react'
import {Row, Col, Grid, Button} from 'react-bootstrap'
import Question from './Question.js'

export default class Screening extends React.Component {

  constructor() {
    super()
    this.classTally = this.classTally.bind(this)
    this.totalTally = this.totalTally.bind(this)
  }

  classTally (classname) {
    let counter = 0
    const arr = document.getElementsByClassName(classname)
    for(let i=0; i< arr.length; i++){
      if(arr[i].checked === true){counter++}
    }
    console.log(counter)
    return counter
  }

  totalTally () {
    this.classTally('notTrue')
    this.classTally('somewhatTrue')
    this.classTally('certainlyTrue')
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <h3>Question</h3>
          </Col>
          <Col md={2}>
            <h4>Not true</h4>
          </Col>
          <Col md={2}>
            <h4>Somewhat true</h4>
          </Col>
          <Col md={2}>
            <h4>Certainly true</h4>
          </Col>
        </Row>
        <div>{this.props.questions.map((n,i) => <Question question={n} name={i} key={i} />)}</div>
        <Row>
          <Button onClick={this.totalTally}>Submit</Button>
        </Row>
      </Grid>
    )
  }
}

Screening.defaultProps = {
  questions: [
    "Considerate of other people's feelings",
    'Restless, overactive, cannot stay still for long',
    'Often complains of headaches, stomach-aches or sickness',
    'Shares readily with other children (treats, toys, pencils etc.)',
    'Often has temper tantrums or hot tempers',
    'Rather solitary, tends to play alone',
    'Generally obedient, usually does what adults request',
    'Many worries, often seems worried'
  ]
}
