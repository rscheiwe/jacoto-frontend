import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Adapter from '../Adapter.js'
import { Card, Icon, Dimmer } from 'semantic-ui-react'
import { Col } from 'mdbreact';
import { addCourseToUser, removeCourseFromUser } from '../actions/actions.js'

class CourseCard extends Component {

  state = {
    clicked: false,
    animation: 'fade',
    active: false,
    duration: 1500,
    added_course: this.props.course
  }

  display = () => this.setState({ active: !this.state.active })
  handleHide = () => this.setState({ active: false })


  handleClick = (e) => {
    this.setState((prevState) => {
      return { clicked: !prevState.clicked }
    })
    this.handleCoursePass(e.target.id)
  }

  handleCoursePass = (course_id) => {
    if (this.state.clicked === false) {
      Adapter.addCourse(this.props.user.id, course_id)
      .then(json => {
        this.props.addCourseToUser(json)
      })
      .then(this.display())
      .then(setTimeout(() => {
        this.handleHide()
      }, 1500))
    } else {
      Adapter.addCourse(this.props.user.id, course_id)
      .then(json => {
        this.props.removeCourseFromUser(parseInt(json.data.course_id, 10))
      })
      .then(this.display())
      .then(setTimeout(() => {
        this.handleHide()
      }, 1500))
    }

  }

  render() {
    let image = ''
    switch (this.props.course.attributes.provider) {
      case 'MIT':
        image = './MIT.png'
        break;
      case 'Udacity':
        image= './Udacity_logo.png'
        break;
      default:
        image = './FutureLearn.png'
    }
    // console.log(this.state.added_course)
    return (
      // <div className="d-flex flex-wrap">
      <Col md="4" style={{padding:'15px'}}>

        <Card id={this.props.course.id} key={this.props.course.id} className="course-card" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}>

        {
          !this.props.course.attributes.image ?
          <Link to={`/courses/${this.props.course.id}`}><img src={"https://mdbootstrap.com/img/Photos/Others/images/43.jpg"} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}} alt="dummy0xcic1"/></Link>
          :

          <Link to={`/courses/${this.props.course.id}`}><img src={this.props.course.attributes.image} alt={this.props.course.id} className="img-fluid" alt="course0xcic1" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px', maxHeight:'200px'}} /></Link>

        }

        <Dimmer active={this.state.active} inverted onClickOutside={this.handleHide} style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}>
          <h4 style={{textAlign:'center', fontFamily:'Oswald', fontColor:'black', marginTop:'50%'}}>Added: <hr /> <i>{this.props.course.attributes.title} </i><br />to your favorites</h4>
        </Dimmer>

        <Card.Content>

          <Link to={`/courses/${this.props.course.id}`}><h5 style={{textAlign:'center', fontFamily:'Oswald', fontColor:'black'}}>{this.props.course.attributes.title}</h5></Link>
        <Card.Meta style={{paddingBottom:"20px"}}>
          <span className='provider' style={{padding:'10px', color:'gray'}}><small>Via <i>{this.props.course.attributes.provider}</i></small></span>
        </Card.Meta>
        </Card.Content>

        <Link to={`/courses/${this.props.course.id}`}>
        <span className="overlay">
          <span className="text">

            <img src={require({image})} style={{width:'250px'}} alt="provideroxxs1"/>
          </span>
        </span>
        </Link>

        <Card.Content extra  style={{position:"absolute", bottom:'10px', paddingTop:'15px'}} >

      {
          this.props.loggedIn === true ?
           <span onClick={this.handleClick} id={this.props.course.id}>

             {
               (this.state.clicked === true || (this.props.user && this.props.user.courses.find(course => course.id === parseInt(this.props.course.id, 10)))) ?
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

export default connect(mapStateToProps, { addCourseToUser, removeCourseFromUser })(CourseCard)

// export default CourseCard
