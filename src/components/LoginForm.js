import React from 'react';
import { Input, Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
<div>
      <a id="navbar-category-gettingstarted-react" onClick={this.toggle} className="btn btn-info btn-sm my-0 ml-3 waves-effect waves-light" role="button">
        LOGIN<i className="fa fa-sign-in ml-2"></i>
      </a>
        {/*<Button className="btn btn-info btn-sm my-0 ml-3 waves-effect waves-light" onClick={this.toggle}>Login<i className="fa fa-sign-in ml-2"></i></Button>*/}
        <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              <Input label="Your Email" icon="envelope" />
              <Input label="Type your password" icon="lock" />
            </ModalBody>
          <ModalFooter>
          <a id="navbar-category-gettingstarted-react" onClick={this.toggle} className="btn btn-info btn-sm my-0 ml-3 waves-effect waves-light" role="button">
            LOGIN<i className="fa fa-sign-in ml-2"></i>
          </a>
          </ModalFooter>
        </Modal>
</div>
    );
  }
}

export default ModalPage;
