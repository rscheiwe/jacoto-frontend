import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Loader } from 'semantic-ui-react'
import { fetchCurrentUser } from '../actions/actions.js'

const withAuth = WrappedComponent => {
  class AuthorizedComponent extends React.Component {
    // componentDidMount() {
      // POTENTIAL SECURITY FLAW!!! my tokens don't expire

    // componentDidMount() {
    //   if (localStorage.getItem('token') && !this.props.loggedIn) this.props.fetchCurrentUser()
    // }



    render() {
      // console.log(this.props)
       // if (localStorage.getItem('token')&& this.props.loggedIn)
      if (localStorage.getItem('token')) {
        return <WrappedComponent />
      } else if (localStorage.getItem('token') && this.props.authenticatingUser) {
        return <Loader active inline="centered" />
      } else {
        return <Redirect to="/" />
      }
    }
  }

  return connect(
    mapStateToProps, {fetchCurrentUser}
  )(AuthorizedComponent)
}

const mapStateToProps = (state ) => {
  // console.log(state)
  return {
  user: state.user,
  loggedIn: state.loggedIn,
  authenticatingUser: state.authenticatingUser
}}

export default withAuth
