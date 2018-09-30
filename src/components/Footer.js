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
//
// <Footer color="blue lighten-1" className="font-small pt-4 mt-4" id="footer-dead">
//     <Container fluid className="text-center text-md-left">
//         <Row>
//         <Col sm="4">
//             <h5 className="title" style={{fontFamily:'Oswald'}}>Footer Content</h5>
//
//         </Col>
//         <Col sm="4">
//
//             <ul>
//               <li className="list-unstyled"><a href="/about" style={{fontFamily:'Oswald'}}>About</a></li>
//               <li className="list-unstyled"><a href="/contact" style={{fontFamily:'Oswald'}}>Contact Jacoto</a></li>
//             </ul>
//         </Col>
//         <Col sm="4">
//
//             <Input label="Sign-up for updates" icon="envelope" className="blue-grey-text" style={{fontFamily:'Oswald'}}/>
//         </Col>
//         </Row>
//     </Container>
//     <div className="footer-copyright text-center py-3">
//         <Container fluid style={{fontFamily:'Oswald'}}>
//             &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.richardscheiwe.com"> Richard Scheiwe</a>
//         </Container>
//     </div>
// </Footer>
