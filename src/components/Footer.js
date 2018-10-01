import React from 'react';
import { Col, Container, Row } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
          <div style={{paddingTop:'20px', paddingBottom:'10px', background:'rgb(255,255,244)'}} >
            <hr className="style-four"/>
            <Container fluid className="text-center text-md-left">
              <Row>
                <Col sm="4">
                  <div className="footer-copyright text-center py-3" id="footer-dead">
                      <Container fluid style={{fontFamily:'Oswald'}}>
                          <small>&copy; {(new Date().getFullYear())} Copyright: <a href="https://www.richardscheiwe.com"> Richard Scheiwe</a></small>
                      </Container>
                    <br />
                  </div>
                </Col>
                <Col sm="4">
                <a href='/'><div className='hoja'>
                  <div className="footer-copyright text-center py-3" >
                    <img src='/images/jacoto_logo.png' width="80px" alt="logo" />
                  </div>
                  </div></a>
                </Col>
                <Col sm="4">
                  <div className="footer-copyright text-center py-3" >
                    <Container fluid style={{fontFamily:'Oswald'}}>
                      <small>
                        <a href="/browse">  Browse  </a>
                        <a href="/contact" style={{padding:'10px'}}> Contact  </a>
                        <a href="/about">  About  </a>
                      </small>
                    </Container>
                  </div>
                </Col>
              </Row>
             </Container>
        </div>
        );
    }
}

export default FooterPage;
