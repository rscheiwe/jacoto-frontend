import React, {Component} from 'react'


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
              <img className="about-img" src='/images/jacoto_about.jpg'
                 alt="background"
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
                  <b>About </b><img src='/images/jacoto_logo.png' style={{maxWidth:'400px'}} alt="logo"/>

                </span>

              </h1>
              <p style={{
                fontSize: '14px',
                letterSpacing: '0.4em',
                lineHeight: '2.4'
              }}>
              </p>

            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
      <div className="dead-row" >
      Jacoto is inspired by the freedom to learn. Named after the 18th-century French philosopher of education,
      Joseph Jacoto, our mission is to provide access to learning through online courses.
      </div>
      </div>
    )
  }
}

export default About
