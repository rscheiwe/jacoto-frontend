import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'
// import { Col, CardImage, CardTitle, CardText } from 'mdbreact';

class GalleryCard extends React.Component {

  state = {
    clicked: false,
    image: './Udacity_logo.png'
  }

  handleClick = () => {
    this.setState((prevState) => {
      return { clicked: !prevState.clicked }
    })
  }




  render() {
    let image = ''
    let size = ''
    switch (this.props.course.attributes.provider) {
      case 'MIT':
        image = './MIT.png'
        size = '100px';
        break;
      case 'Udacity':
        image= './Udacity_logo.png'
        size = '250px'
        break;
      default:
        image = './FutureLearn.png'
        size = '100px';
    }
    return (
        <Card id={this.props.course.id} className="gallery-card"
          style={{
            borderTopLeftRadius:'25px',
            borderBottomRightRadius:'25px',
          }}>

          {!this.props.course.attributes.image ? <img src={"https://mdbootstrap.com/img/Photos/Others/images/43.jpg"} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px'}} alt="dummy003id"/> : <img src={this.props.course.attributes.image} alt={this.props.course.id} className="img-fluid" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px', maxHeight:'200px'}}/>}

          <Card.Content>

            <center><Link to={`/courses/${this.props.course.id}`}><h5 style={{textAlign:'center', padding:'3px', fontSize:'1.5vw', fontFamily:'Oswald'}}>{this.props.course.attributes.title}</h5></Link></center>
            <Card.Meta style={{paddingBottom:"20px"}}>
              <span className='provider' style={{padding:'10px', color:'gray', fontSize:'1.25vw'}}><small>Via <i>{this.props.course.attributes.provider}</i></small></span>
            </Card.Meta>
          </Card.Content>

          <Link to={`/courses/${this.props.course.id}`}>
          <span className="overlay">
            <span className="text">

              <img src={require(`${image}`)} alt="provider00d2" style={{width:`${size}`}}/>
            </span>
          </span>
          </Link>

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
