import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem } from 'mdbreact';
import { Link, withRouter } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'


class NavBar extends Component {
  state = {
    collapse: false,
    isWideEnough: false
  };

  clicked = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle = () => {
    console.log("CLICKED")
    console.log(this.props.user.id)
  }

render() {
  // console.log(this.props)
    return (
        <div>

            <Navbar className="navbar fixed-top navbar-expand-md navbar-transparent double-nav scrolling-navbar transparent">
            { !this.state.isWideEnough && <NavbarToggler onClick={this.clicked } />}
              <NavbarBrand href="/">
                <img src={require('./jacoto_brand.png')} width="50px" alt="brand"/>
                <img src={require('./jacoto_logo.png')} width="100px" alt="logo"/>
              </NavbarBrand>
              <div className="float-left">
                <a onClick={this.clicked} ><i className="fa fa-bars"></i><span className="sr-only" aria-hidden="true">Toggle side navigation</span></a>
              </div>
                <Collapse isOpen = { this.state.collapse } >

                  <NavbarNav left>
                    <NavItem active>
                        <Link className="nav-link" to='/'>Home</Link>
                    </NavItem>

                    <NavItem>
                        <Link className="nav-link" to='/browse'>Browse</Link>
                    </NavItem>

                    <NavItem>
                        <Link className="nav-link" to='/about'>About</Link>
                    </NavItem>

                    { this.props.loggedIn === true ?
                      <NavItem>
                          <Link className="nav-link" to='/profile'>Profile</Link>
                      </NavItem>
                      :
                      null
                    }
                  </NavbarNav>

              </Collapse>

              <div className="mr-auto">
                <span className="d-none d-md-inline-block">

                <a id="navbar-category-gettingstarted-react" className="btn btn-info btn-sm my-0 ml-3 waves-effect waves-light" href="/" role="button">
                  <span className="d-none d-lg-inline-block mr-1"></span>
                  <i className="fa fa-download"></i>
                </a>
                <a id="navbar-category-pro-react" className="btn btn-unique btn-sm my-0 waves-effect waves-light" href="/" role="button">
                  <span className="d-none d-lg-inline-block mr-1"></span>
                  <i className="fa fa-diamond"></i>
              </a>

                <span id="dynamicContentWrapper-mainNavbar2"></span>
              </span>
            </div>


            <ul className="nav navbar-nav nav-flex-icons ml-auto">

              <li className="nav-item">
                <a href="/contact" data-toggle="modal" data-target="#contactForm" className="nav-link waves-effect">
                  <Icon link name='envelope outline' /><span className="sr-only">Contact us</span>
                </a>
              </li>

            </ul>


          {
            this.props.loggedIn === false ?
            <div>
              <a id="navbar-category-pro-react" className="login-modal-form" role="button">
                <span className="d-none d-lg-inline-block mr-1"><LoginForm /></span>
              </a>
              <a id="navbar-category-pro-react" className="login-modal-form" role="button">
                <span className="d-none d-lg-inline-block mr-1"><SignUpForm /></span>
              </a>
            </div>
            :
            <a id="navbar-category-pro-react" className="login-modal-form" role="button">
              <span className="d-none d-lg-inline-block mr-1">
                <span id="navbar-category-gettingstarted-react"
                      onClick={this.toggle}
                      className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light"
                      role="button">
                  Logout<i className="fa fa-sign-in ml-2"></i>
                </span>
              </span>
            </a>
          }

          </Navbar>



      </div>
    );
  }
}

const mapStateToProps = ({ user, loggedIn }) => {
  return { user, loggedIn }
}

export default connect(mapStateToProps)(NavBar);
