import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth.js'


class Profile extends React.Component {



  render() {
    console.log("In PROFILE")
    return (
      <div>

       HI

      </div>
    )
  }
}


export default withAuth(Profile)
