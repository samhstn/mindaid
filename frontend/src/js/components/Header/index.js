import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = { menuOpen: false }
    this.goBack = this.goBack.bind(this)
  }

  goBack() {
    window.history.back()
  }

  render () {
    return (
      <Navbar
        expanded={this.state.menuOpen}
        onToggle={() => { this.setState({ menuOpen: !this.state.menuOpen }) }}
        className='top-menu'
        fixedTop={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>
              <img src={this.props.logoUrl} style={{height: '100%', width: 'auto', marginTop: '0px'}}></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse pullRight>
          <Nav pullRight>
            <li style={{color: '#d8e9ef'}}onClick={this.goBack}>Go Back</li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
