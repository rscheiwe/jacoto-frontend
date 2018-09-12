import React from 'react'
// import {Container} from 'mdbreact'
// import { Grid, Header, Image } from 'semantic-ui-react'

const Midrow2 = () => {

  return (
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
            paddingLeft:'350px',
            zIndex:'1'
          }}>
            <h1 style={{
              marginLeft:'0px'
            }}>
              <span className="lineElement">
              </span>
              <span style={{
                fontSize:'130px',
                letterSpacing:'.055em',
                fontFamily: 'Oswald'
              }}><b>Learn Anywhere</b></span>
            </h1>
            <p style={{
              fontSize: '12px',
              letterSpacing: '0.4em',
              lineHeight: '2.4'
            }}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque vitae enim id aliquet. Quisque nec lorem pretium, posuere felis a, iaculis ex. Nulla tincidunt a nibh eget tempor.</b>
            </p>
          </div>

          <div style={{
            background:'50%',
            width:"50%",
            height:'calc(100% - 17px)',
            backgroundSize:'cover',
            position:'absolute',
            top: '17px',
            right:'18px',
            zIndex:'0'
          }}>
              <img src='/images/jacoto_book.jpg'
                style={{
                  width:"100%",
                  backgroundSize:'cover'
                }} alt=""
              />
          </div>
        </div>
      </div>
    </div>


  )
}

export default Midrow2
