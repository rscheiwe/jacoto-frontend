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
    console.log(this.props.course.attributes)
    return (
        <Card className="gallery-card"
          style={{
            borderTopLeftRadius:'25px',
            borderBottomRightRadius:'25px',
          }}>

          {!this.props.course.attributes.image ? <img src={"https://mdbootstrap.com/img/Photos/Others/images/43.jpg"} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}/> : <img src={this.props.course.attributes.image} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}/>}
          <Card.Content>

            <center><h5 style={{textAlign:'center', padding:'3px', fontSize:'1.5vw'}}>{this.props.course.attributes.title}</h5></center>
            <Card.Meta style={{paddingBottom:"20px"}}>
              <span className='provider' style={{padding:'10px', color:'gray', fontSize:'1.25vw'}}><small>Via <i>Udactiy</i></small></span>
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
