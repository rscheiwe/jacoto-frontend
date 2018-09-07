import React, {Component} from 'react'
import { Input } from 'mdbreact'
import Adapter from '../Adapter.js'
import CourseList from './CourseList.js'
import BrowseList from './BrowseList.js'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchedCourses } from '../actions/actions'

class Browse extends Component {

  state = {
    searchTerm: ''
  }

  componentDidMount() {
    this.props.searchedCourses([])
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let element = document.getElementById('course-row')
    Adapter.searchCourses(this.state.searchTerm)
      .then(json => {
        this.props.searchedCourses(json.data)
      })
    this.setState({
      searchTerm: ""
    }, () => element.scrollIntoView({behavior: "smooth"}))
  }

  render() {
    console.log(this.state)
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
              <Link to="/browse/advanced" id="navbar-category-gettingstarted-react" onClick={this.toggle} className="btn btn-outline-unique btn-sm my-0 ml-3 waves-effect waves-light" role="button" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px', minWidth:'200px'}}>
                Advanced Search<i className="fa fa-sign-in ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <CourseList />
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { courses: state.courses }
}

export default connect(mapStateToProps, { searchedCourses })(Browse)
