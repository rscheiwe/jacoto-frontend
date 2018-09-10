import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Col } from 'mdbreact';

class CourseCard extends Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { clicked: !prevState.clicked }
    })
  }

  render() {
    return (
      // <div className="d-flex flex-wrap">
      <Col md="4" style={{padding:'15px'}}>
        <Card id={this.props.course.id} key={this.props.course.id} href={`/courses/${this.props.course.id}`} className="course-card" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}>
        {!this.props.course.attributes.image ? <img src={"https://mdbootstrap.com/img/Photos/Others/images/43.jpg"} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}} alt="dummy0xcic1"/> : <img src={this.props.course.attributes.image} alt={this.props.course.id} className="img-fluid" alt="course0xcic1" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}/>}

        <Card.Content>
          <h5 style={{textAlign:'center', fontFamily:'Oswald', fontColor:'black'}}>{this.props.course.attributes.title}</h5>
        <Card.Meta style={{paddingBottom:"20px"}}>
          <span className='provider' style={{padding:'10px', color:'gray'}}><small>Via <i>Udactiy</i></small></span>
        </Card.Meta>
        </Card.Content>
        <div className="overlay">
          <div className="text">
            {this.props.course.attributes.title}
            <img src={require('./Udacity_logo.png')} style={{width:'250px'}} alt="provideroxxs1"/>
          </div>
        </div>

        <Card.Content extra  style={{position:"absolute", bottom:'10px', paddingTop:'15px'}} >
           <span onClick={this.handleClick}>
             {this.state.clicked === true ? <Icon name="heart" className="heart-colored" /> : <Icon name='heart outline' />}
          </span>
          <span>
            <Icon name='fork'/>
          </span>
        </Card.Content>
      </Card>
      </Col>
    )
  }
}
export default CourseCard
