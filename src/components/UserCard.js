import React from 'react'

const UserCard = (props) => {

  return (
    <div className="user-card">
      <img src={props.user.picture} width="120" />
      <h4>{props.user.name}</h4>
    </div>
  )
}

export default UserCard
