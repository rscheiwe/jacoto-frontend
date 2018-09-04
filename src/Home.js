import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Responsive, Visibility } from 'semantic-ui-react'
import NavBar from './components/NavbarJacoto.js'
import CourseList from './components/CourseList.js'
import Header from './components/Header.js'
import Gallery from './components/Gallery.js'
import Gallery2 from './components/Gallery2.js'
import MidRow from './components/MidRow.js'
import Midrow2 from './components/Midrow2.js'
import Adapter from './Adapter.js'
import DownloadCSV from './DownloadCSV.js'

import './App.css';

class Home extends Component {

  state = {
    courses: []
  }

  componentDidMount() {
    this.handleFetch()
  }

  handleFetch = () => {
    Adapter.getCourses()
      .then(json => this.passCourses(json.data))
      // .then(json => this.passCourses(json.courses.slice(0, 10)))
  }

  passCourses = (data) => {
    this.setState({
      courses: data
    })
  }

  render() {
    return (
      // <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      // <Visibility
      //     once={false}
      //   >
      <div style={{backgroundColor:'rgb(255,255,244)'}}>
        <header>
        </header>

          <Header />
          <Gallery2 courses={this.state.courses}/>

        {/*  <MidRow /> */}
          <Midrow2 />
          <CourseList courses={this.state.courses} />
          <DownloadCSV data={this.state.courses} />


      </div>
      // </Visibility>
      // </Responsive>
    );
  }
}

export default Home;
