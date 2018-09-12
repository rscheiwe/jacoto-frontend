import React from 'react';
// import { connect } from 'react-redux'
import { Container } from 'mdbreact';
import CourseCard from './CourseCard.js'


const BrowseList = (props) => {
  const courseList = props.courses.map(course => {
    return <CourseCard course={course} />
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

export default BrowseList
