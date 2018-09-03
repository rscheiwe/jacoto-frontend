import React from 'react';
import { Container, Row, Col } from 'mdbreact';
// import { Grid } from 'semantic-ui-react'
import CourseCard from './CourseCard.js'
import FilterMenu from './FilterMenu.js'

const CourseList = (props) => {
  const courseList = props.courses.map(course => {
    return <CourseCard course={course} />
  })

  return (

    <div>
      <FilterMenu />
      <div className="container-row" key="course-row">
        <Container className="mt-5">
          <ul className="flex-container">
            {courseList}
          </ul>
        </Container>
      </div>
    </div>


  )

}

export default CourseList
