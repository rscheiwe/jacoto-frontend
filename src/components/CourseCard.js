import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Col } from 'mdbreact';

class CourseCard extends React.Component {

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
        <Card id={this.props.course.id} href={`/courses/${this.props.course.id}`} className="course-card" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}>
        {!this.props.course.attributes.image ? <img src={"https://mdbootstrap.com/img/Photos/Others/images/43.jpg"} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}} alt="dummy-image"/> : <img src={this.props.course.attributes.image} alt={this.props.course.id} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}/>}
        <Card.Content>
          <h5 style={{textAlign:'center'}}>{this.props.course.attributes.title}</h5>
        <Card.Meta style={{paddingBottom:"20px"}}>
          <span className='provider' style={{padding:'10px', color:'gray'}}><small>Via <i>Udactiy</i></small></span>
        </Card.Meta>
        </Card.Content>
        <Card.Content extra  style={{position:"absolute", bottom:'10px', paddingTop:'15px'}} >
           <a onClick={this.handleClick}>
             {this.state.clicked === true ? <Icon name="heart" className="heart-colored" /> : <Icon name='heart outline' />}
          </a>
          <a>
            <Icon name='fork'/>
          </a>
        </Card.Content>
      </Card>
      </Col>
    )
  }
}
export default CourseCard

// <Card style={{height:'250px'}} className="zoom">
// <CardImage className="mh-20" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" key={ this.props.course.key } />
// <CardBody>
// <CardTitle>{this.props.course.title}</CardTitle>
// <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
// <Button href="#">Button</Button>
// </CardBody>
// </Card>

// export default CourseCard
