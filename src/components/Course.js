import React, { Component } from 'react'
import Adapter from '../Adapter.js'
import { passCourse } from '../actions/actions'
import  { connect } from  'react-redux'


class Course extends Component {

  // state = {
  //   course: null
  // }

  componentDidMount() {
    const id = this.props.match.params.id
    Adapter.readCourse(id)
      .then(json=> {
        this.props.passCourse(json.data)
      })
  }

  // passCourse = (data) => {
  //   this.setState({
  //     course: data
  //   })
  // }

  render() {
    // console.log(this.state.course)
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
                }}>{
                    this.props.course.attributes.title
                  }
                </span>
              </h1>
              <div>
              <span className="descriptionElement">
              </span>
                <p style={{
                  fontSize:'12px',
                  letterSpacing:'0.4em',
                  lineHeight:'2.3'
                  // marginLeft:'20%'
                }}>{!this.props.course ?
                    null
                    :
                    this.props.course.attributes.summary.substring(0,250)
                  }

                </p>
                <p style={{
                  fontSize:'17px',
                  marginBottom:'-17px',
                  letterSpacing:'0.4em',
                  lineHeight:'2.3',
                  marginLeft: '150px'
                }}>{!this.props.course ?
                    null
                    :
                    this.props.course.attributes.slug
                  }

                </p>
              </div>
            </div>
            <div style={{
              height:'52%',
              backgroundSize:'cover',
              backgroundRepeat:'no repeat'
            }}>
              {!this.props.course ?
                null
                :
                <img className="courseImageIndividual" alt="course00xci" src={this.props.course.attributes.image}
/>
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

const mapStateToProps = state => {
  return { course: state.course }
}

export default connect(mapStateToProps, { passCourse })(Course)
