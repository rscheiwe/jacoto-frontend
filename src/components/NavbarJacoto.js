import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa, Container } from 'mdbreact';
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
// import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js'


class NavBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
          isWideEnough: false
      };
    this.clicked = this.clicked.bind(this);
  }

  clicked = () => {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

render() {

    return (
        <div>

            <Navbar className="navbar fixed-top navbar-expand-md navbar-transparent double-nav scrolling-navbar transparent">
            { !this.state.isWideEnough && <NavbarToggler onClick={this.clicked } />}
              <NavbarBrand href="/">
                <img src={require('./jacoto_logo.png')} width="100px" />
              </NavbarBrand>
              <div className="float-left">
                <a href="#" onClick={this.clicked} ><i className="fa fa-bars"></i><span className="sr-only" aria-hidden="true">Toggle side navigation</span></a>
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
            <img src={require('./jacoto_brand.png')} width="50px" />

            <ul className="nav navbar-nav nav-flex-icons ml-auto">

              <li className="nav-item">
                <a href="/contact" data-toggle="modal" data-target="#contactForm" className="nav-link waves-effect">
                  <Icon link name='envelope outline' /><span className="sr-only">Contact us</span>
                </a>
              </li>

            </ul>

            <a id="navbar-category-pro-react" className="login-modal-form" role="button">
              <span className="d-none d-lg-inline-block mr-1"><LoginForm /></span>
            </a>

            <a id="navbar-category-pro-react" className="login-modal-form" role="button">

              <span className="d-none d-lg-inline-block mr-1"><SignUpForm /></span>
            </a>
          </Navbar>



      </div>
    );
  }
}

export default NavBar;

// <li className="nav-item ">
// <a href="/profile/?id=0#messages" className="nav-link waves-effect headerNotifCountBadge">
// <i className="fa fa-comments"></i><span className="sr-only">Direct messages</span>
// </a>
// </li>
