import React from 'react'
// import {} from 'react-bootstrap'
import Question from './Question.js'

export default class Screening extends React.Component {
  render () {
    console.log(this.props.questions)
    return (
      <div>{this.props.questions.map((n,i) => <Question question={n} name={i}/>)}</div>
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
