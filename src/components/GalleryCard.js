import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import { Button, CardBody, Col, CardImage, CardTitle, CardText } from 'mdbreact';

class GalleryCard extends React.Component {

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

        <Card className="gallery-card" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px', height:'100% !important'}}>
          {!this.props.course.image ? <img src={"https://mdbootstrap.com/img/Photos/Others/images/43.jpg"} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}/> : <img src={this.props.course.image} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}/>}
          <Card.Content>

            <h5 style={{textAlign:'center'}}>{this.props.course.title}</h5>
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


    )
  }
}
export default GalleryCard
