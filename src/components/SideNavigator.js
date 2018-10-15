import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, Collapse } from 'mdbreact';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

import { connect } from 'react-redux'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'
import { logoutUser } from '../actions/actions.js'


class SideNavigator extends Component {
  state = {
    collapse: false

  };

  clicked = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  toggle = () => {
    this.props.logoutUser()
    localStorage.removeItem('token')

  }

  componentDidMount() {}

  render() {
      const { activeItem } = this.state

      return(
          <div className='sideNavigator' >
            <div className="float-right" >
              <a onClick={this.clicked} ><i className="fa fa-bars"></i><span className="sr-only" aria-hidden="true">Toggle side navigation</span></a>
            </div>
          <Collapse isOpen = { this.state.collapse } >
              <div className='full height'>
                  <div className='toc'>
                      <Menu className='inverted vertical left fixed'>
                          <Menu.Item>

                          <a href='/'><div className="hoja-nav">
                              <NavbarBrand href="/">
                              <img src='/images/jacoto_logo.png' width="90px" style={{marginLeft:'-10px'}} alt="logo"/>

                              </NavbarBrand>
                            </div></a>

                              </Menu.Item>
                                  <Menu.Item className='search-button' name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
                                  <a href="/browse" className="profile-trigger" role="button">
                                    <span >
                                        <span
                                              className="btn btn-outline btn-sm my-0 ml-3 waves-effect waves-light"
                                              role="button">Browse<i className="fa fa-search ml-2"></i>
                                        </span>
                                    </span>
                                  </a>
                                  </Menu.Item>
                                  <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
                                  <a href="/about" className="profile-trigger" role="button">
                                    <span >
                                        <span
                                              className="btn btn-outline btn-sm my-0 ml-3 waves-effect waves-light"
                                              role="button">About<i className="fa fa-info ml-2"></i>
                                        </span>
                                    </span>
                                  </a>
                                  </Menu.Item>

                                  {
                                    this.props.loggedIn === false ?
                                    <span>
                                  <Menu.Item className='search-button' name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                                    <a className="login-modal-form" role="button">
                                      <span ><LoginForm /></span>
                                    </a>
                                  </Menu.Item>

                                  <Menu.Item className='search-button' name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                    <a className="login-modal-form" role="button">
                                      <span ><SignUpForm /></span>
                                    </a>
                                  </Menu.Item>
                                  </span>
                                  :
                                  <span>
                                  <a href="/profile" className="profile-trigger" role="button">
                                    <span >
                                      <span
                                            className="btn btn-outline-unique btn-sm my-0 ml-3 waves-effect waves-light"
                                            role="button">Profile<i className="fa fa-user ml-2"></i>
                                      </span>
                                    </span>
                                  </a>
                                  <a className="search-button" role="button">
                                    <span >
                                      <span
                                            onClick={this.toggle}
                                            className="btn btn-outline-unique btn-sm my-0 ml-3 waves-effect waves-light"
                                            role="button">
                                        Logout<i className="fa fa-sign-in ml-2"></i>
                                      </span>
                                    </span>
                                  </a>
                                  </span>
                                }

                      </Menu>
                  </div>

              </div>
              </Collapse>
          </div>
      )
  }
}

const mapStateToProps = ({ user, loggedIn }) => {
  return { user, loggedIn }
}

export default connect(mapStateToProps, { logoutUser })(SideNavigator);


{/*  <Dropdown item text='More'>
<Dropdown.Menu>
<Dropdown.Item icon='edit' text='Edit Profile' />
<Dropdown.Item icon='globe' text='Choose Language' />
<Dropdown.Item icon='settings' text='Account Settings' />
</Dropdown.Menu>
</Dropdown> */}
