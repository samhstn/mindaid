import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

const styles = {
  textAlign: 'center',
}

export default (props) => {
  return (
    <Grid style={styles}>
      <Row>
        <Col xs={12}>
          <h3>Refer</h3>

            <div className="panel panel-default">
              <div className="panel-heading">
                Emergency Conacts
              </div>
              <div className="panel-body">
                <ul><li>
                  Call 999
                </li><li>
                  Go to their nearest Accident and Emergency (A&E)
                <li></li>
                  See their GP
                </li></ul>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                NHS Direct
              </div>
              <div className="panel-body">
                <p>
                  They can tell you about your local crisis support services, and also offer health advice 24 hours a day, 365 days a year
                </p><p>
                  Telephone: <a href="tel:111">111</a>
                </p><p>
                   Website: <a href="www.nhsdirect.nhs.uk">www.nhsdirect.nhs.uk</a>
                </p>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                In School
              </div>
              <div className="panel-body">

                <h5 style={{'font-weight': 'bold'}}>Special Education Needs Co-ordinator (SENCO)</h5>
                <p>
                  Our mental health SENCO is Mrs Jain. She offers consultations about children you are concerned about any morning 9-12.
                </p><p>
                  Email: <a href="mailto:MJain@school.ac.uk">MJain@school.ac.uk</a>
                </p><p>
                  Telephone: <a href="tel:07123456789">07123456789</a>
                </p>

                <h5 style={{'font-weight': 'bold'}}>School Counsellor</h5>
                <p>
                 Patrick Tweedle is the School Counsellor. In school Tuesdays
                 and Fridays. You can refer children at by email
                 or pupils can drop in Tuesdays 3-5pm.
                </p><p>
                  Email: <a href="mailto:p.tweedle@school.ac.uk">p.tweedle@school.ac.uk</a>
                </p>

                <h5 style={{'font-weight': 'bold'}}>Primary Mental Health Worker (PMHW)</h5>
                <p>
                  Zoe Johnson is our PMHW in school fortnightly on Thursdays.
                  Talk to your SENCO about your priority children for
                  discussion.
                </p><p>
                  Email: <a href="mailto:ZoeJJ@surreycamhs.org.uk">ZoeJJ@surreycamhs.org.uk</a>
                </p>

              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                In The Community
              </div>
              <div className="panel-body">

                <h5 style={{'font-weight': 'bold'}}>Primary Mental Health Worker (PMHW)</h5>
                <p>
                  Zoe Johnson is our PMHW in school fortnightly on Thursdays.
                  Talk to your SENCO about your priority children for
                  discussion.
                </p><p>
                  Email: <a href="mailto:ZoeJJ@surreycamhs.org.uk">ZoeJJ@surreycamhs.org.uk</a>
                </p>

                <h5 style={{'font-weight': 'bold'}}>Child Mental Health Team (CAMHS)</h5>
                <p>
                  Open 8am-8pm Monday to Friday and 9am -12pm Saturday.
                  Reserved for serious mental health problems (RED or AMBER+
                  risk only). Talk to your SENCO about your priority
                  children for referral.
                </p><p>
                  CAMHS One Stop Call: <a href="tel:0300 222 5755">0300 222 5755</a>
                </p><p>
                  Online Referral: <a href="http://www.youngminds.org.uk/contact">http:/\/www.youngminds.org.uk/contact</a>
                </p>

                <h5 style={{'font-weight': 'bold'}}>Behaviour Support Team</h5>
                <p>
                  Behavioural support for children at risk of exclusion with difficult to manage behaviour.
                </p><p>
                  Telephone: <a href="tel:0300 123 123">0300 123 123</a>
                </p><p>
                  Online Referral: <a href="http://www.example.org.uk/contact">http:/\/www.example.org.uk/contact</a>
                </p>

              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                Self Referral
              </div>
              <div className="panel-body">

                <h5 style={{'font-weight': 'bold'}}>Surrey East Young People Walk in Service</h5>
                <p>
                  Drop in charity provision for mental health run by
                  counsellors based in Staines Chimes Shopping Centre. Pupils
                  can drop in Mon-Fri 3-7pm.
                </p><p>
                  Email: <a href="mailto:ZoeJJ@surreycamhs.org.uk">ZoeJJ@surreycamhs.org.uk</a>
                </p>

                <h5 style={{'font-weight': 'bold'}}>Young Minds</h5>
                <p>
                  Young Minds is charity committed to improving the emotional
                  wellbeing and mental health of children and young people.
                  They undertake campaigns and research, make <a href="http://www.youngminds.org.uk/training_services/mental_health_info">resources</a>
                  available to professionals (including teachers) and run a
                  helpline for adults worried about the emotional problems,
                  behaviour or mental health of anyone up to the age of 25.
                  Open 8am-8pm Monday to Friday and 9am -12pm Saturday.
                </p><p>
                  Link: <a href="http://www.youngminds.org.uk">http:/\/www.youngminds.org.uk</a>
                </p>

                <h5 style={{'font-weight': 'bold'}}>Royal College of Psychiatrists (RCPSYCH)</h5>
                <p>
                  Provide specifically tailored information for young people,
                  parents, teachers and carers about mental health through
                  their Parents and Youth Info A-Z
                </p><p>
                  Parents and Youth Info <a href="www.rcpsych.ac.uk/healthadvice/parentsandyouthinfo.aspx">http:/\/www.rcpsych.ac.uk/healthadvice/parentsandyouthinfo.aspx</a>
                </p><p>
                  A - Z Complete index <a href="www.rcpsych.ac.uk/healthadvice/atozindex.aspx">http:/\/www.rcpsych.ac.uk/healthadvice/atozindex.aspx</a>
                </p>

                <h5 style={{'font-weight': 'bold'}}>ChildLine</h5>
                <p>
                  Childline is for young people up to the age of 19 to contact
                  regardless of the size of your problem. You can talk to a
                  Childline counsellor about anything and this is a free, private
                  and confidential service.
                </p><p>
                  Telephone: <a href="tel:08001111">08001111</a>
                </p><p>
                  Email: <a href="http://www.childline.org.uk/Talk/Pages/Email.aspx">http:/\/www.childline.org.uk/Talk/Pages/Email.aspx</a>
                </p><p>
                  Website: <a href="http://www.childline.org.uk">http:/\/www.childline.org.uk</a>
                </p>

              </div>
            </div>

        </Col>
      </Row>
    </Grid>
  )
}
