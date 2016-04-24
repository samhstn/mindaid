import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default (props) => {
  return (
    <Grid >
      <Row>
        <Col xs={12}>
          <h3 style={{textAlign: 'center'}}>Common Problems: 10 Things To Know About The Sad And Isolated Child</h3>
          <ol>
            <li>Young people get sad, tearful, and lonely. This is entirely normal, and to be expected.</li>
            <li>Life stressors and events can trigger these feelings e.g. breaking friendships, parental arguments, death of someone close. Sometimes events assume more importance to young people than they would to an adult.</li>
            <li>For a few young people these feelings last longer or are more severe and we call it depression. Around 3-4% of teenagers and 1% of 7-12 year olds develop a clinical depression per year.</li>
            <li> Depression Behaviours to look out for: tearfulness, irritability, loss of energy, difficulty focusing or concentrating, loss of pleasure in usual activities, trouble sleeping (waking early), loss of appetite or over eating, school work dropping off, isolation from friends.</li>
            <li>Depression Thoughts to look out for: Thinking you are not worthwhile. Ideas of hurting oneself or of suicide. Guilty thoughts. Thinking about things over and over again.</li>
            <li>At least four of these signs would need to be happening for over 2 weeks for us to think the young person might be experiencing depression. They would be happening for more than half the time and be impacting on the young person day to day life.</li>
            <li>Depression can cause self-harm, and it can worsen existing self-harm. If a child is self-harming you should always try to gently find out more about it.</li>
            <li>
              It is important to take an episode of depression in young people seriously as it
              <ul>
                <li>often returns (50% of young people will have another episode within 5 years)</li>
                <li>can carry on into adulthood (25% of adults with depression first experienced it before the age of 21 years).</li>
                <li>Is associated with other problems such as anxiety or heavy drinking/drug taking.</li>
              </ul>
            </li>
            <li>One of the most effective ways to tackle depression with young people involves talking to them about their problems using cognitive-behaviour therapy.</li>
            <li>Encouraging children to restart small enjoyable activities and encouraging them to talk to people they trust about their feelings is a good first step.</li>
          </ol>
        </Col>
        <Col xs={4} xsOffset={4}>
            <a href='https://www.minded.org.uk/course/view.php?id=81'><h4 style={{textAlign: 'center'}}>Link to MindEd</h4></a>
        </Col>
      </Row>
    </Grid>
  )
}
