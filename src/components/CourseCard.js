import React, { Component } from 'react'
import { connect } from 'react-redux'
import Adapter from '../Adapter.js'
import { Card, Icon, Confirm, TransitionablePortal, Segment, Header } from 'semantic-ui-react'
import { Col } from 'mdbreact';
import { addCourseToUser } from '../actions/actions.js'

class CourseCard extends Component {

  state = {
    clicked: false,
    open: false,
    animation: 'fade',
    duration: 1500
  }

  show = () => this.setState({ open: true })
  handleCancel = () => this.setState({ open: false })

  handleClick = (e) => {
    this.setState((prevState) => {
      return { clicked: !prevState.clicked }
    })
    this.handleCoursePass(e.target.id)
  }

  handleCoursePass = (course_id) => {
    Adapter.addCourse(this.props.user.id, course_id)
    // .then(json => console.log(json))
    .then(json => this.props.addCourseToUser(json))


    this.show()

  }

  render() {
    console.log(this.props.user)
    return (
      // <div className="d-flex flex-wrap">
      <Col md="4" style={{padding:'15px'}}>
        <Card id={this.props.course.id} key={this.props.course.id} className="course-card" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}>
        {!this.props.course.attributes.image ? <img src={"https://mdbootstrap.com/img/Photos/Others/images/43.jpg"} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}} alt="dummy0xcic1"/> : <img src={this.props.course.attributes.image} alt={this.props.course.id} className="img-fluid" alt="course0xcic1" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}/>}

        <Card.Content>
          <h5 href={`/courses/${this.props.course.id}`} style={{textAlign:'center', fontFamily:'Oswald', fontColor:'black'}}>{this.props.course.attributes.title}</h5>
        <Card.Meta style={{paddingBottom:"20px"}}>
          <span className='provider' style={{padding:'10px', color:'gray'}}><small>Via <i>Udactiy</i></small></span>
        </Card.Meta>
        </Card.Content>
        {/*<div className="overlay">
          <div className="text">
            {this.props.course.attributes.title}
            <img src={require('./Udacity_logo.png')} style={{width:'250px'}} alt="provideroxxs1"/>
          </div>
        </div>*/}

        <Card.Content extra  style={{position:"absolute", bottom:'10px', paddingTop:'15px'}} >

      {
          this.props.loggedIn === true ?
           <span onClick={this.handleClick} id={this.props.course.id}>

             {
               (this.state.clicked === true || this.props.user.courses.find(course => course.id === parseInt(this.props.course.id))) ?
               <Icon name="heart" className="heart-colored" id={this.props.course.id}/>
               :
               <Icon name='heart outline' id={this.props.course.id}/>
             }
          </span>
          :
          null
        }

          <span>
            <Icon name='fork'/>
          </span>

          <TransitionablePortal open={this.state.open} >
            <Segment style={{ left: '10%', position: 'fixed', top: '30%', zIndex: 1000 }}>
              <Header>Course Added!</Header>
              <p></p>
              <p>To close, simply click the close button or click away</p>
            </Segment>
          </TransitionablePortal>

        </Card.Content>
      </Card>
      </Col>
    )
  }
}
//
const mapStateToProps = ({ user, loggedIn }) => {
  return { user, loggedIn }
}

export default connect(mapStateToProps, { addCourseToUser })(CourseCard)

// export default CourseCard
