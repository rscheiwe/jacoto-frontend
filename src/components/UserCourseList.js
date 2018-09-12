import React from 'react';
// import { connect } from 'react-redux'
import { Container } from 'mdbreact';
import UserCourseCard from './UserCourseCard.js'


const UserCourseList = (props) => {
  let courseList = !props.usercourses ?

  null

  :

  props.usercourses.map(course => {
    return <UserCourseCard course={course} key={course.id} />
  })


  return (

    <div>

      <div className="container-row" id="course-row" key="course-row">
        <Container className="mt-5">
          <ul className="flex-container">
            {courseList}
          </ul>
        </Container>
      </div>
    </div>

  )

}

export default UserCourseList
