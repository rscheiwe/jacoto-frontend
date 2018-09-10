import React from 'react';
import { Input, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { Form } from 'semantic-ui-react'

class LoginForm extends React.Component {
  state = {
      modal: false
    };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
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
                  <Input label="Your Email" icon="envelope" />
                  <Input label="Type your password" icon="lock" />
                </ModalBody>
              <ModalFooter>
              <span id="navbar-category-gettingstarted-react" onClick={this.toggle} className="btn btn-info btn-sm my-0 ml-3 waves-effect waves-light" role="button">
                LOGIN<i className="fa fa-sign-in ml-2"></i>
              </span>
              </ModalFooter>
            </Modal>
          </Form>
        </div>
    );
  }
}

export default LoginForm;
