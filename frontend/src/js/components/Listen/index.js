import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const styles = {
  textAlign: 'center',
}

export default (props) => {
  return (
    <Grid style={styles}>
      <Row>
        <Col xs={12}>
          <h3>Listen</h3>
          <ul style={{textAlign: 'left'}}><li>
          <strong>L</strong>isten nonjudgmentally and empathically
          </li><li>
          gather <strong>I</strong>nformation, ask open questions, don't push
          </li><li>
          assess people's risk of harm, <strong>S</strong>elf-harm or <strong>S</strong>uicide
          </li><li>
          <strong>T</strong>ell them useful information about their problem, reassure
          </li><li>
          <strong>E</strong>ncourage self-help and other support strategies
          </li><li>
          <strong>N</strong>ot alone, follow up and direct to appropriate professional help
          </li></ul>
          <h4>Helpful Questions</h4>
          <p>
          Can you tell me a bit more about what happened? How were you feeling at
          the time? How are you feeling about it now? What was going through your
          mind? Where is this happening? When things are at the worst they have
          been tell me how you were feeling? Are there any other things stressing
          you out at the moment? How are things at home?
          </p><p>
          Is there any thing that helps when you are feeling like this? Is there
          anyone you are close to who you can talk to about this? This is
          something people often go through – would you like some more
          information about it? Would you like to talk about this again? This
          sounds really important and something you need help with shall we book
          an appointment for you to talk to your personal advisor/the school
          counsellor/me again?
          </p>
        </Col>
      </Row>
    </Grid>
  )
}
