import React from 'react'

const CourseCard = (props) => {
  console.log(props.course.title)
  return (
    <div className="course-card" key={ props.course.key }>
      <img src={props.course.picture} width="120" />
      <h4 style={{textAlign:'center'}}>{props.course.title}</h4>
    </div>
  )
}

export default CourseCard
