import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, Collapse } from 'mdbreact';
// import { Link } from 'react-router-dom'
// import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'
import { logoutUser } from '../actions/actions.js'
import SideNavigator from './SideNavigator.js'


class NavBar extends Component {
  state = {
    collapse: false

  };

  clicked = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle = () => {
    // console.log("CLICKED")
    // console.log(this.props.user.id)
    this.props.logoutUser()
    localStorage.removeItem('token')

  }

render() {
  // console.log(this.props)
    return (
      <div style={{background:'rgb(255,255,244)'}}>
      <SideNavigator />
        <div className='navigation'>

            <Navbar className="navbar fixed-top navbar-expand-md navbar-transparent double-nav scrolling-navbar transparent">

            <a href='/'><div className="hoja-nav">
                <NavbarBrand href="/">
                <img src='/images/jacoto_logo.png' width="90px" style={{marginLeft:'-10px'}} alt="logo"/>

                </NavbarBrand>
              </div></a>

              <div className="float-left" style={{paddingLeft:'35px'}}>
                <a onClick={this.clicked} ><i className="fa fa-bars"></i><span className="sr-only" aria-hidden="true">Toggle side navigation</span></a>
              </div>
                <Collapse isOpen = { this.state.collapse } >

                    <a href="/browse" id="navbar-category-pro-react" className="profile-trigger" role="button">
                      <span >
                          <span id="navbar-category-gettingstarted-react"
                                className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light"
                                role="button">Browse<i className="fa fa-search ml-2"></i>
                          </span>
                      </span>
                    </a>
                    <a href="/about" id="navbar-category-pro-react" className="profile-trigger" role="button">
                      <span >
                      {/*<span className="d-none d-lg-inline-block mr-1">*/}
                          <span id="navbar-category-gettingstarted-react"
                                className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light"
                                role="button">About<i className="fa fa-info ml-2"></i>
                          </span>
                      </span>
                    </a>

              </Collapse>

          {
            this.props.loggedIn === false ?
            <ul className="nav navbar-nav nav-flex-icons ml-auto">
              <li className="nav-item">
                <a id="navbar-category-pro-react" className="login-modal-form" role="button">
                  <span className="d-lg-inline-block mr-1"><LoginForm /></span>
                  {/*<span className="d-none d-lg-inline-block mr-1"><LoginForm /></span>*/}
                </a>
              </li>
              <li className="nav-item">
                <a id="navbar-category-pro-react" className="login-modal-form" role="button">
                  <span className="d-lg-inline-block mr-1"><SignUpForm /></span>
                </a>
              </li>
            </ul>
            :
            <NavbarNav right>
            <ul className="nav navbar-nav nav-flex-icons ml-auto">
              <li className="nav-item">
            <a href="/profile" id="navbar-category-pro-react" className="profile-trigger" role="button">
              <span className="d-lg-inline-block mr-1">
                <span id="navbar-category-gettingstarted-react"
                      className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light"
                      role="button">Profile<i className="fa fa-user ml-2"></i>
                </span>
              </span>
            </a>
            </li>
            <li className="nav-item">
            <a id="navbar-category-pro-react" className="login-modal-form" role="button">
              <span className="d-lg-inline-block mr-1">
                <span id="navbar-category-gettingstarted-react"
                      onClick={this.toggle}
                      className="btn btn-outline-unique btn-sm my-0 ml-3 waves-effect waves-light"
                      role="button">
                  Logout<i className="fa fa-sign-in ml-2"></i>
                </span>
              </span>
            </a>
            </li>
          </ul>
            </NavbarNav>
          }
          </Navbar>
      </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user, loggedIn }) => {
  return { user, loggedIn }
}

export default connect(mapStateToProps, { logoutUser })(NavBar);
