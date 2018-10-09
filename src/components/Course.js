import React, { Component } from 'react'
import Adapter from '../Adapter.js'
import { passCourse } from '../actions/actions'
import  { connect } from  'react-redux'
import "../Browse.css"

class Course extends Component {


  componentDidMount() {
    const id = this.props.match.params.id
    Adapter.readCourse(id)
      .then(json=> {
        this.props.passCourse(json.data)
      })
  }


  render() {
    return(
      <div className="course-main">
        <div className="course-sub">
          <div className="course-next">
            <div className="course-mirror">
              <h1 className="course-title">

                <span className="course-heading">
                {!this.props.course ?
                    null
                    :
                    this.props.course.attributes.title
                  }
                </span>
              </h1>
              <div className="course-one">
              <span className="descriptionElement">
              </span>
                <p className="course-description">{!this.props.course ?
                    null
                    :
                    this.props.course.attributes.summary.substring(0,250)
                  }

                </p>
                <p className="course-link">{!this.props.course ?
                    null
                    :
                    <a href={this.props.course.attributes.slug} target="_blank" >
                    Course Homepage
                    </a>
                  }

                </p>
              </div>
            </div>
            <div className="course-image">
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
