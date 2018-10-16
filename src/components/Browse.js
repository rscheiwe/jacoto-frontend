import React, {Component} from 'react'
import { Input } from 'mdbreact'
import Adapter from '../Adapter.js'
import CourseList from './CourseList.js'
// import BrowseList from './BrowseList.js'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { searchedCourses } from '../actions/actions'

import "../Browse.css"

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
    let element = document.getElementById('footer-dead')
    Adapter.searchCourses(this.state.searchTerm)
      .then(json => {
        this.props.searchedCourses(json.data)
      })
    this.setState({
      searchTerm: ""
    }, () => element.scrollIntoView({behavior: "smooth", block: "end", inline: "center"}))
  }

  render() {
    console.log(this.state)
    return (
      <div style={{backgroundColor:'rgb(255,255,244)'}}>
      <div className="main-div">
        <div className="blanket-div">
          <div className="flex-div">
          <div className="search-sub"
            >
              <img src='/images/jacoto_book_red.jpg'
                className= "search-image"
              />
          </div>

            <div className="search-break">
              <h1 style={{
                marginLeft:'0px'
              }}>
              <span className="searchElement">
              </span>
                <span className="search-open-div-advanced">
                  <b>Search courses</b>
                  <form className="searching" onSubmit={this.handleSubmit}>
                    <Input label="(topic, pace, etc.)" id="search-form" icon="search" onChange={this.handleChange} value={this.state.searchTerm} />
                  </form>

                </span>

              </h1>
              <p className="search-text"><b>Search our database of classes by topic.</b>
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
      <div id="dead-row" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { courses: state.courses }
}

export default connect(mapStateToProps, { searchedCourses })(Browse)
