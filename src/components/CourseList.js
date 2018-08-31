import React from 'react'
import CourseCard from './CourseCard.js'

const CourseList = (props) => {
  console.log(props.courses)
  const courseList = props.courses.map(course => {
    return <CourseCard course={course} />
  })

  return (
    <div className="container-row" key="course-row">
      {courseList}
    </div>
  )

}

export default CourseList
