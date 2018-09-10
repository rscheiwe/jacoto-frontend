import React from 'react';
import { Input, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { loginUser } from '../actions/actions.js'

class LoginForm extends React.Component {
  state = {
      modal: false,
      input: "",
      pass: ""
    };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handlePass = (e) => {
    this.setState({
      pass: e.target.value
    })
  }

  handleLogin = () => {
    this.props.loginUser(this.state.input, this.state.pass)
    console.log(this.state.input, this.state.pass)
  }

  render() {
    return (
      <div>
        <span id="navbar-category-gettingstarted-react" onClick={this.toggle} className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light" role="button">
          LOGIN<i className="fa fa-sign-in ml-2"></i>
        </span>
          <Form>
            <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                <form >
                  <Input label="Your Email" icon="envelope" onChange={this.handleChange} />
                  <Input label="Type your password" icon="lock" onChange={this.handlePass}/>
                </form>
                </ModalBody>
              <ModalFooter>
              <span id="navbar-category-gettingstarted-react" onClick={this.handleLogin} className="btn btn-info btn-sm my-0 ml-3 waves-effect waves-light" role="button">
                LOGIN<i className="fa fa-sign-in ml-2"></i>
              </span>
              </ModalFooter>
            </Modal>
          </Form>
        </div>
    );
  }
}


export default connect(null, {loginUser})(LoginForm);
