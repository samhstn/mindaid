import React from 'react'
import {Link, Modal, Row, Col, Grid, Button} from 'react-bootstrap'
import Question from './Question.js'
import axios from 'axios'

export default class Screen extends React.Component {

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

  sendMessage () {
  	axios.post('/sendText', {
      recipient: '00447enterNo'
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (response) {
      console.log(response)
    })
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col md={6} sm={6} xs={6}>
            <h3>Question</h3>
          </Col>
          <Col md={2} sm={2} xs={2}>
            <h5>Not true</h5>
          </Col>
          <Col md={2} sm={2} xs={2}>
            <h5>Somewhat true</h5>
          </Col>
          <Col md={2} sm={2} xs={2}>
            <h5>Certainly true</h5>
          </Col>
        </Row>
        <div>{this.props.questions.map((n,i) => <Question question={n} name={i} key={i} />)}</div>
        <Row>
          <Button onClick={this.clickHandler}>Submit</Button>
        </Row>
        <Modal show={this.state.showModal}
        onHide={this.toggleModal.bind(this, 'showViewModal')}>
          <Modal.Header closeButton>
            <Modal.Title>Screening Results</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Col sm={4}>
            <h4 >Score: {this.state.score}</h4>
          </Col>
            {this.state.score >= 20 ?
            <div>
              <Col sm={4}>
                <p style={{color: "#d9534f"}}>High Risk</p>
              </Col>
              <Col sm={8}>
                <h4>Referal resources</h4>
                <a style={{display: 'block'}}href='http://www.youngminds.org.uk/'>Young Minds Mental Health Services</a>
                <a href='http://www.centreformentalhealth.org.uk/crisis-contacts'>Center for Mental Health</a>
              </Col>
            </div>
            : this.state.score < 20 && this.state.score >= 10 ?
              <p style={{color: "#f0ad4e"}}>Medium Risk</p>  : <p style={{color: "#5cb85c"}}>Low Risk</p>
            }
            <Button onClick={this.sendMessage}>Set Reminder</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.toggleModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Grid>
    )
  }
}

Screen.defaultProps = {
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
