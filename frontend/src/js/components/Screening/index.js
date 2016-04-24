import React from 'react'
import {OverlayTrigger, Modal, Row, Col, Grid, Button} from 'react-bootstrap'
import Question from './Question.js'

export default class Screening extends React.Component {

  constructor() {
    super()
    this.state = {
      status: 'Offline',
      showModal: false,
      score: 0
    }
    this.changeStatus = this.changeStatus.bind(this)
    this.classTally = this.classTally.bind(this)
    this.totalTally = this.totalTally.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
  }

  changeStatus (newStatus) {
    this.setState({
      status: newStatus
    })
  }

  clickHandler () {
    this.totalTally()
    this.toggleModal()
  }

  toggleModal () {
    const newState = {}
    newState['showModal'] = !this.state['showModal']
    this.setState(newState)
  }

  classTally (classname, n) {
    let counter = 0
    const arr = document.getElementsByClassName(classname)
    for(let i=0; i< arr.length; i++){
      if(arr[i].checked === true){counter++}
    }
    return counter * n
  }

  totalTally () {
    this.classTally('notTrue')
    this.classTally('somewhatTrue')
    this.classTally('certainlyTrue')
    this.setState({
      score: this.classTally('notTrue', 1) + this.classTally('somewhatTrue', 2) + this.classTally('certainlyTrue', 3)
    })
    console.log(this.state.score);
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
          <Button onClick={this.clickHandler}>Submit</Button>
        </Row>
        <Modal show={this.state.showModal}
        onHide={this.toggleModal.bind(this, 'showViewModal')}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Results</h4>
            <p>{this.state.score}</p>
            {this.state.score >= 20 ? <p style={{color: "#d9534f"}}>High Risk</p> : this.state.score < 20 && this.state.score >= 10 ?
              <p style={{color: "#f0ad4e"}}>Medium Risk</p>  : <p style={{color: "#5cb85c"}}>Low Risk</p>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.toggleModal}>Close</Button>
          </Modal.Footer>
        </Modal>
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
  ],
  result: 0
}
