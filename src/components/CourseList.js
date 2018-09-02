import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import { Grid } from 'semantic-ui-react'
// import Lightbox from 'react-image-lightbox';
import CourseCard from './CourseCard.js'
import FilterMenu from './FilterMenu.js'
// require ('mdbreact/docs/pages/pro/Lightbox.css');

const CourseList = (props) => {
  console.log(props.courses)
  const courseList = props.courses.map(course => {
    return <CourseCard course={course} />
  })

  return (
    // <div className="container-row" key="course-row">
    // <Container className="mt-5">
    //   <div>
    //
    //
    //     <ul className="flex-container">
    //       {courseList}
    //     </ul>
    //   </div>
    // </Container>
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
