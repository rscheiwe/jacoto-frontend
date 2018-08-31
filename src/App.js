import React, { Component } from 'react';



import DownloadCSV from './DownloadCSV.js'
import './App.scss';

class App extends Component {

  state = {
    users: []
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
      users: json
    })
  }

  render() {
    console.log(this.state.users)
    return (
      <div className="hoja">JACOTO



          {/*<DownloadCSV data={this.state.users} />*/}



      </div>
    );
  }
}

export default App;
