import React from 'react';
import { connect } from 'react-redux'
import { Container } from 'mdbreact';
import Spinner from './Spinner.js'
// import { Grid } from 'semantic-ui-react'
import CourseCard from './CourseCard.js'
// import FilterMenu from './FilterMenu.js'


const CourseList = (props) => {

  // console.log(props.usercourses)
  const courseList = props.courses.map(course => {
    return <CourseCard course={course} key={course.id}/>
  })

  return (

    <div>

      <div className="container-row" id="course-row" key="course-row">
        <Container className="mt-5">
        {courseList.length > 1 ?
          <ul className="flex-container">
            {courseList}
          </ul>
          :
          <div className="container-row">
            <Spinner />
          </div>
          }
        </Container>
      </div>
    </div>
  )
}

const mapStateToProps = state => state


export default connect(mapStateToProps)(CourseList)
