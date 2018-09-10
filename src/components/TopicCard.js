import React from 'react'
import { Card } from 'semantic-ui-react'
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

  toggleFetch = (e) => {
    if (e.target.className.includes("topic")) {
      let topic = this.props.topic.split(' ').join('-').toLowerCase()
      this.props.handleCourseFetch(topic)
    } else if (e.target.className.includes("price")) {

    } else if (e.target.className.includes("length")) {

    } else if (e.target.className.includes("provider")) {

    }

  }

  render() {
    return (
      <Col md="3" style={{padding:'15px'}} >
        <span className={this.props.option}>
          <Card className={"course-card " + this.props.option} onClick={ this.toggleFetch } style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px', minWidth:'200px', minHeight:'200px'}}>



            <Card.Content>
              <h5 style={{textAlign:'center', fontFamily:'Oswald', fontColor:'black'}}>{this.props.topic}</h5>

            </Card.Content>

            <Card.Content extra  style={{position:"absolute", bottom:'10px', paddingTop:'15px'}} >

            </Card.Content>
          </Card>
        </span>
      </Col>
    )
  }
}
export default TopicCard
