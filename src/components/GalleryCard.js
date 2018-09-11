import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
// import { Col, CardImage, CardTitle, CardText } from 'mdbreact';

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
        <Card id={this.props.course.id} className="gallery-card"
          style={{
            borderTopLeftRadius:'25px',
            borderBottomRightRadius:'25px',
          }}>

          {!this.props.course.attributes.image ? <img src={"https://mdbootstrap.com/img/Photos/Others/images/43.jpg"} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}} alt="dummy003id"/> : <img src={this.props.course.attributes.image} alt={this.props.course.id} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}}/>}

          <Card.Content>

            <center><h5 style={{textAlign:'center', padding:'3px', fontSize:'1.5vw', fontFamily:'Oswald'}}>{this.props.course.attributes.title}</h5></center>
            <Card.Meta style={{paddingBottom:"20px"}}>
              <span className='provider' style={{padding:'10px', color:'gray', fontSize:'1.25vw'}}><small>Via <i>Udactiy</i></small></span>
            </Card.Meta>
          </Card.Content>

          <div className="overlay">
            <div className="text">
              
              <img src={require('./Udacity_logo.png')} alt="provider00d2" style={{width:'250px'}}/>
            </div>
          </div>

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
