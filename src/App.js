import React, { Component } from 'react';


import CourseList from './components/CourseList.js'
import Header from './components/Header.js'
import NavBar from './components/NavbarJacoto.js'
import DownloadCSV from './DownloadCSV.js'

import './App.css';

class App extends Component {

  state = {
    courses: []
  }

  componentDidMount() {
    this.handleFetch()
  }

  handleFetch = () => {
    fetch("https://www.udacity.com/public-api/v1/courses")
      .then(res => res.json())
      .then(json => this.passUsers(json.courses.slice(0, 10)))
  }

  passUsers = (json) => {
    this.setState({
      courses: json
    })
  }

  render() {
    // console.log(this.state.courses)
    return (
      <div style={{backgroundColor:'rgb(255,255,244)'}}>
        <header>
        <NavBar />
        </header>
          <Header />

          <CourseList courses={this.state.courses} />

          <DownloadCSV data={this.state.courses} />

      </div>

    );
  }
}

export default App;
