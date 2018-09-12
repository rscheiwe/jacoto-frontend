import React, {Component} from 'react'
import { Input } from 'mdbreact'
import { Link } from 'react-router-dom'

class About extends Component {

  render() {

    return (
      <div style={{backgroundColor:'rgb(255,255,244)'}}>
      <div style={{
        height: '100vh',
        minWidth: '1024px',
        minHeight: '520px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position:'relative',
          minHeight:'520px',
          height:'100%',
          backgroundRepeat:'no-repeat'
        }}
        >
          <div style={{
            display:'flex',
            flexAlign:'center',
            alignItems:'center',
            height:'100%'
          }}>
          <div style={{
            alignSelf: 'flex-end',
            width:"70%",
            height:'calc(100% - 86px)',
            backgroundSize:'cover',
            position:'absolute',
            top: '17px',
            right:'18px',
            // zIndex:'0',
          }}>
              <img src='/images/jacoto_about.jpg'
                style={{
                  width:"350%",
                  backgroundSize:'cover',
                  backgroundPositionX: "50%",
                  backgroundPositionY: "50%"
                }} alt="background"
              />
          </div>

            <div style={{
              paddingLeft:'350px',
              zIndex:'1',
              flexAlign:'center',
              alingItems:'center'
            }}>
              <h1 style={{
                marginLeft:'0px'
              }}>
              <span className="aboutElement">
              </span>
                <span style={{
                  fontSize:'130px',
                  letterSpacing:'.055em',
                  fontFamily: 'Oswald'
                }}>
                  <b>About </b><img src='/images/jacoto_logo.png' style={{maxWidth:'400px'}}/>

                </span>

              </h1>
              <p style={{
                fontSize: '12px',
                letterSpacing: '0.4em',
                lineHeight: '2.4'
              }}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque vitae enim id aliquet. Quisque nec lorem pretium, posuere felis a, iaculis ex. Nulla tincidunt a nibh eget tempor.</b>
              </p>

            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div id="dead-row" />
      </div>
    )
  }
}

export default About
