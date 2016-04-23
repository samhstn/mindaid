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
          <h3>10 Things To Know About Behaviour</h3>
          <p>Anxiety is an emotion characterized by an unpleasant state of
          inner turmoil, often accompanied by nervous behavior, such as pacing
          back and forth, somatic complaints, and rumination.[2] It is the
          subjectively unpleasant feelings of dread over anticipated events,
          such as the feeling of imminent death.[3] Anxiety is not the same as
          fear, which is a response to a real or perceived immediate threat,[4]
          whereas anxiety is the expectation of future threat.[4] Anxiety is a
          feeling of fear, uneasiness, and worry, usually generalized and
          unfocused as an overreaction to a situation that is only subjectively
          seen as menacing.[5] It is often accompanied by muscular tension,[4]
          restlessness, fatigue and problems in concentration. Anxiety can be
          appropriate, but when experienced regularly the individual may suffer
          from an anxiety disorder.[4]</p>
          <p>People facing anxiety may withdraw from situations which have
          provoked anxiety in the past.[6] There are various types of anxiety.
          Existential anxiety can occur when a person faces angst, an
          existential crisis, or nihilistic feelings. People can also face
          mathematical anxiety, somatic anxiety, stage fright, or test anxiety.
          Social anxiety and stranger anxiety are caused when people are
          apprehensive around strangers or other people in general.
          Furthermore, anxiety has been linked with physical symptoms such as
          IBS and can heighten other mental health illnesses such as OCD and
          panic disorder.</p>
          <p>Anxiety can be either a short term "state" or a long term "trait".
          Whereas trait anxiety represents worrying about future events, close
          to the concept of neuroticism,[7] anxiety disorders are a group of
          mental disorders characterized by feelings of anxiety and fear.[8]
          Anxiety disorders are partly genetic but may also be due to drug use,
  including alcohol, caffeine, and benzodiazepines (which are often prescribed
      to treat anxiety), as well as withdrawal from drugs of abuse. They often
    occur with other mental disorders, particularly bipolar disorder, eating
    disorders, major depressive disorder, or certain personality disorders.
    Common treatment options include lifestyle changes, medication, and
    therapy.</p>
        </Col>
      </Row>
    </Grid>
  )
}
