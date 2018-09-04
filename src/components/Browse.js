import React, {Component} from 'react'
import { Input } from 'mdbreact'
import Adapter from '../Adapter.js'
import CourseList from './CourseList.js'

class Browse extends Component {

  state = {
    searchTerm: '',
    courses: []
  }

  passCourses = (json) => {
    this.setState({
      courses: json
    })
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    Adapter.searchCourses(this.state.searchTerm)
      .then(json => {
        this.setSearchedCourses(json.data)
      })
    // if (this.state.searchTerm === null || this.state.searchTerm === "") return
    this.setState({
      searchTerm: ""
    })
  }

  setSearchedCourses = (data) => {
    let element = document.getElementById('course-row')
    this.setState({
      courses: data
    }, () => element.scrollIntoView({behavior: "smooth"}))
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
            alignSelf: 'flex-end',
            width:"70%",
            height:'calc(100% - 86px)',
            backgroundSize:'cover',
            position:'absolute',
            top: '17px',
            right:'18px',
            // zIndex:'0',
          }}>
              <img src={require('./jacoto_book.jpg')}
                style={{
                  width:"150%",
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
              <span className="searchElement">
              </span>
                <span style={{
                  fontSize:'130px',
                  letterSpacing:'.055em',
                  fontFamily: 'Oswald'
                }}>
                  <b>Search courses</b>
                  <form onSubmit={this.handleSubmit}>
                    <Input label="(topic, pace, etc.)" id="search-form" icon="search" onChange={this.handleChange} value={this.state.searchTerm} />
                  </form>

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
        <CourseList courses={this.state.courses} />
      </div>
      </div>
    )
  }
}

export default Browse
