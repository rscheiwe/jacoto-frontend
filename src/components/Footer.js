import React from 'react';
import { Input, Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="blue lighten-1" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col sm="4">
                        <h5 className="title">Footer Content</h5>

                    </Col>
                    <Col sm="4">
                        <h5 className="title">Links</h5>
                        <ul>
                        <li className="list-unstyled"><a href="#!">Link 1</a></li>
                        <li className="list-unstyled"><a href="#!">Link 2</a></li>
                        <li className="list-unstyled"><a href="#!">Link 3</a></li>
                        <li className="list-unstyled"><a href="#!">Link 4</a></li>
                        </ul>
                    </Col>
                    <Col sm="4">
                        <h5 className="title">Sign Up</h5>
                        <Input label="Example label" icon="envelope" className="blue-grey-text"/>
                    </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.richardscheiwe.com.com"> Richard Scheiwe</a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
