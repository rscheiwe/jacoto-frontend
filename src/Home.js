import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import { Responsive, Visibility } from 'semantic-ui-react'
import  { connect } from  'react-redux'

// import NavBar from './components/NavbarJacoto.js'
import CourseList from './components/CourseList.js'
import Header from './components/Header.js'
// import Gallery from './components/Gallery.js'
import Gallery2 from './components/Gallery2.js'
import MidRow from './components/MidRow.js'
import Midrow2 from './components/Midrow2.js'
import Adapter from './Adapter.js'
// import DownloadCSV from './DownloadCSV.js'
import { passCourses } from './actions/actions'

import './App.css';

class Home extends Component {

  componentDidMount() {
    this.handleFetch()
  }

  handleFetch = () => {
    Adapter.getCourses()
      .then(json => this.props.passCourses(json.data))
  }

  render() {
    
    return (

      <div style={{backgroundColor:'rgb(255,255,244)'}}>
        <header>
        </header>

        <Header />
        <MidRow />
        <Gallery2 />

        <Midrow2 />
        <CourseList />
      </div>

    );
  }
}

const mapStateToProps = state => {
  return { courses: state.course }
}

export default connect(mapStateToProps, { passCourses })(Home);
