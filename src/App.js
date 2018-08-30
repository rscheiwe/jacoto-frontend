import React, { Component } from 'react';
import logo from './logo.svg';
import UsersList from './components/UsersList.js'
import ConvertArrayOfObjectsToCSV from './ConvertArrayOfObjectsToCSV.js'
import DownloadCSV from './DownloadCSV.js'
import './App.css';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="csv-work">
          {/*<ConvertArrayOfObjectsToCSV data={this.state.users} />*/}
          <DownloadCSV data={this.state.users} />
          {/*<UsersList users={this.state.users} />*/}

        </div>

      </div>
    );
  }
}

export default App;
