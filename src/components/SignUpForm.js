import React from 'react';
import { Input, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { Form } from 'semantic-ui-react'
import { signUpUser } from '../actions/actions.js'
import { connect } from 'react-redux'

class SignUpForm extends React.Component {

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

  handleSignup = () => {
    this.props.signUpUser(this.state.input, this.state.pass)
  }

  render() {
    return (
      <div>
        <span id="navbar-category-gettingstarted-react" onClick={this.toggle} className="btn btn-unique btn-sm my-0 ml-3 waves-effect waves-light" role="button">
          Sign Up<i className="fa fa-user-plus ml-2"></i>
        </span>
          {/*<Button className="btn btn-info btn-sm my-0 ml-3 waves-effect waves-light" onClick={this.toggle}>Login<i className="fa fa-sign-in ml-2"></i></Button>*/}
          <Form>
            <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
              <ModalHeader toggle={this.toggle}>Sign-up with Jacoto</ModalHeader>
                <ModalBody>
                  <Input label="Your Email" icon="envelope" className="login-control" onChange={this.handleChange}/>
                  <Input label="Type your password" icon="lock" onChange={this.handlePass}/>
                </ModalBody>
                <ModalFooter>
                  <Form.Checkbox inline label='I agree to the terms and conditions' required />
                </ModalFooter>
                <span id="navbar-category-gettingstarted-react" onClick={this.handleSignup} className="btn btn-info btn-sm my-0 ml-3 waves-effect waves-light" role="button">
                  Sign Up<i className="fa fa-user-plus ml-2"></i>
                </span>
              <br />
            </Modal>
          </Form>
        </div>
    );
  }
}

export default connect(null, {signUpUser})(SignUpForm);
