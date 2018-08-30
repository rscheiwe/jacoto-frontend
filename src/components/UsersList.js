import React from 'react'
import UserCard from './UserCard.js'

const UsersList = (props) => {

  const usersList = props.users.map(user => {
    return <UserCard user={user} />
  })

  return (
    <div className="container-row">
      {usersList}
    </div>
  )

}

export default UsersList
