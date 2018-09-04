import React, { Component } from 'react'
import Adapter from '../Adapter.js'

class Course extends Component {

  state = {
    course: null
  }

  componentDidMount() {
    const id = this.props.match.params.id
    Adapter.readCourse(id)
      .then(json=> {
        this.passCourse(json.data)
      })
  }

  passCourse = (data) => {
    this.setState({
      course: data
    })
  }

  render() {
    console.log(this.state.course)
    return(
      <div style={{
        height: '100vh',
        minWidth: '1024px',
        minHeight: '520px',
        position: 'relative',
        overflow: 'hidden',
        bacgroundRepeat:'no-repeat',
        backgroundColor: 'rgb(255,255,244)'
      }}>
        <div style={{
          height: '100%',
          minHeight: '520px',
          position: 'relative'
        }}>
          <div style={{
            height: '100%',
            paddingLeft: '79px'
          }}>
            <div style={{
              height:'48%',
              paddingTop:'1%',
              position:'relative',
              zIndex:'1',
              display:'flex',
              justifyContent:'center',
              alignItems:'center'
            }}>
              <h1 style={{
                marginTop:'0px',
                marginRight:'80px',
                marginBottom:'-20px',
                marginLeft:'-68px',
                display:'flex',
                alignItems:'center',
                flexDirection:'row-reverse'
              }}>
                <span style={{
                  fontSize:'105px',
                  letterSpacing:'0.2em',
                  fontFamily:'Oswald',
                  marginLeft:'15px'
                }}>{!this.state.course ?
                    null
                    :
                    this.state.course.attributes.title
                  }
                </span>
              </h1>
              <div>
                <p style={{
                  fontSize:'12px',
                  letterSpacing:'0.4em',
                  lineHeight:'2.3'
                }}>{!this.state.course ?
                    null
                    :
                    this.state.course.attributes.summary.substring(0,250)
                  }

                </p>
                <p style={{
                  fontSize:'17px',
                  marginBottom:'-17px',
                  letterSpacing:'0.4em',
                  lineHeight:'2.3'
                }}>{!this.state.course ?
                    null
                    :
                    this.state.course.attributes.slug
                  }

                </p>
              </div>
            </div>
            <div style={{
              height:'52%',
              backgroundSize:'cover',
              backgroundRepeat:'no repeat'
            }}>{!this.state.course ?
                null
                :
                <img src={this.state.course.attributes.image} style={{maxWidth:'700px', minWidth:'700px'}}/>
              }

            </div>
          </div>
        </div>
        <span style={{
          position:'absolute',
          top:'50%',
          marginTop:'-91px',
          zIndex:'1'
        }}>
          <span style={{
            padding:'4px 0px 4px 31px',
            position:'relative'
          }}>
          </span>
        </span>
      </div>
    )
  }
}

export default Course
