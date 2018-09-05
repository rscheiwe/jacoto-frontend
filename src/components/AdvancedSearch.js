import React, { Component } from 'react'
import Adapter from '../Adapter.js'
import CourseList from './CourseList.js'
import { Container, Divider } from 'semantic-ui-react'


class AdvancedSearch extends Component {

  state = {
    courses:[]
  }

  toggle = (e) => {
    console.log(e)
  }



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
              // zIndex:'1',
              // paddingRight:'350px',
              // alignSelf: 'flex-end',
              width:"100%",
              height:'calc(100% - 86px)',
              backgroundSize:'cover',
              // position:'absolute',
              top: '17px',
              right:'18px',
              // zIndex:'0',
            }}>
                  <img src={require('./jacoto_book.jpg')}
                  style={{

                    width:"150%",
                    backgroundSize:'cover',
                    align:'left',
                    backgroundPositionX: "50%",
                    backgroundPositionY: "50%"
                  }} alt="background"
                />
            </div>

              <div style={{
                paddingLeft:'-350px',
                zIndex:'1',
                flexAlign:'center',
                alingItems:'center'
              }}>
                <h1 style={{
                  // marginLeft:'120px'
                }}>
                <span className="advancedElement">
                </span>
                  <span style={{
                    fontSize:'130px',
                    letterSpacing:'.055em',
                    fontFamily: 'Oswald'
                  }}>
                    <b>Advanced</b>


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
        <div>
        <br />
          <Container align='center' fluid>
            <a id="topic-search" onClick={this.toggle} className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light" role="button">
              Topic<i className="fa fa-sign-in ml-2"></i>
            </a>
            <a id="price-search" onClick={this.toggle} className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light" role="button">
              Price<i className="fa fa-sign-in ml-2"></i>
            </a>
            <button id="length-search" onClick={this.toggle} className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light" role="button">
              Length<i className="fa fa-sign-in ml-2"></i>
            </button>

          </Container>
        </div>
      </div>
    )
  }
}





export default AdvancedSearch
