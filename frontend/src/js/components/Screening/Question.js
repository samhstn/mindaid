import React from 'react'
import {Col, Row} from 'react-bootstrap'

export default (props) => {
  return (
    <div>
      <Row>
        <Col md={6}>
          <p style={{display: 'inline'}}>{props.question}</p>
        </Col>
        <Col md={2}>
        <label><input className="notTrue" type='radio' name={props.name} /></label>
        </Col>
        <Col md={2}>
        <label><input className="somewhatTrue" type='radio' name={props.name} /></label>
        </Col>
        <Col md={2}>
        <label><input className="certainlyTrue" type='radio' name={props.name} /></label>
        </Col>
      </Row>
    </div>
  )
}
