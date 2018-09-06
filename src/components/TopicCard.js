import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { Col } from 'mdbreact';

class TopicCard extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { clicked: !prevState.clicked }
    })
  }

  toggleFetch = () => {
    let topic = this.props.topic.split(' ').join('-').toLowerCase()
    this.props.handleCourseFetch(topic)

  }

  render() {
    return (
      // <div className="d-flex flex-wrap">
      <Col md="3" style={{padding:'15px'}}>
        <Card onClick={this.toggleFetch} id="x" className="course-card" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px', minWidth:'200px', minHeight:'200px'}}>



        <Card.Content>
          <h5 style={{textAlign:'center', fontFamily:'Oswald', fontColor:'black'}}>{this.props.topic}</h5>

        </Card.Content>

        <Card.Content extra  style={{position:"absolute", bottom:'10px', paddingTop:'15px'}} >

        </Card.Content>
      </Card>
      </Col>
    )
  }
}
export default TopicCard

// <Card style={{height:'250px'}} className="zoom">
// <CardImage className="mh-20" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" key={ this.props.course.key } />
// <CardBody>
// <CardTitle>{this.props.course.title}</CardTitle>
// <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
// <Button href="#">Button</Button>
// </CardBody>
// </Card>

// export default CourseCard
