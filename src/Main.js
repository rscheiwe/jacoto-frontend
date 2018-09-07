import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home.js'
import About from './components/About.js'
import Browse from './components/Browse.js'
import Contact from './components/Contact.js'
import { connect } from 'react-redux'
import Course from './components/Course.js'
import Profile from './components/Profile.js'
import AdvancedSearch from './components/AdvancedSearch.js'
import { withRouter } from 'react-router-dom'

import { fetchCurrentUser } from './actions/actions.js'

class Main extends React.Component {
  //
  // componentDidMount() {
  componentDidMount() {
    if (localStorage.getItem('token') && !this.props.loggedIn) this.props.fetchCurrentUser()
  }

  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/courses/:id' component={Course}/>
          <Redirect from='/courses' to='/browse'/>
          <Route exact path='/browse/advanced' component={AdvancedSearch}/>
          <Route path='/profile' component={Profile} />
          <Route path='/browse' component={Browse}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
        </Switch>
      </main>
    )}
}

const mapStateToProps = state => ({ loggedIn: state.loggedIn })

export default withRouter(connect(mapStateToProps, {fetchCurrentUser})(Main))
