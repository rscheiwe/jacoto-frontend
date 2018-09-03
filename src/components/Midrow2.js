import React from 'react'
import {Container} from 'mdbreact'
import { Grid, Header, Image } from 'semantic-ui-react'

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
              marginLeft:'173px'
            }}>
              <span style={{
                fontSize:'130px',
                letterSpacing:'.055em',
                fontFamily:'Franchise'
              }}>HELLO</span>
            </h1>
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
              <img src={require('./jacoto_book.jpg')}
                style={{
                  width:"100%",
                  backgroundSize:'cover'
                }}
              />
          </div>
        </div>
      </div>
    </div>


  )
}

export default Midrow2
