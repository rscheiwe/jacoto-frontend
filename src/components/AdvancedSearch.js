import React, { Component } from 'react'
import Adapter from '../Adapter.js'
import CourseList from './CourseList.js'
import TopicCard from './TopicCard.js'
import ItemsCarousel from 'react-items-carousel';
import { Container, Divider } from 'semantic-ui-react'


class AdvancedSearch extends Component {

  state = {
    courses:[],
    activeItemIndex: 0,
    clicked: null

  }

  toggle = (e) => {
    console.log(e.target.id)
    if (e.target.id === 'topic-search') {
      this.setState({
        courses: [],
        clicked: "topics"
      })
    } else if (e.target.id === 'price-search') {
      this.setState({
        courses: [],
        clicked: "price"
      })
    } else if (e.target.id === 'length-search') {
      this.setState({
        courses: [],
        clicked: "length"
      })
    } else if (e.target.id === 'provider-search') {
      this.setState({
        courses: [],
        clicked: "provider"
      })
    }
  }

  handleCourseFetch = (topic) => {
    console.log("HI", topic )
    Adapter.topicCourses(topic)
      .then(json => this.passCourses(json.data))
  }

  passCourses = (data) => {
    let element = document.getElementById('course-row')
    this.setState({
      courses: data
    }, () => element.scrollIntoView({behavior: "smooth"})
  )
  }

  galleryItemsAdvanced = () => {
    let topicList;
    let topics;
    let prices;
    let lengths;
    let providers;
    if (this.state.clicked === 'topics') {
      topics = ['Data Science', 'Humanities', 'Philosophy', 'Technologies', 'Science']
      return topicList = topics.map(topic => {
        return <TopicCard topic={topic} handleCourseFetch={ this.handleCourseFetch }/>
      })
    } else if (this.state.clicked === 'price') {
      prices = ["free", "cost"]
      return topicList = prices.map(topic => {
        return <TopicCard topic={topic} handleCourseFetch={ this.handleCourseFetch }/>
      })
    } else if (this.state.clicked === 'length') {
      lengths = ["self-paced", "<1 Month", "<6 Months"]
      return topicList = lengths.map(topic => {
        return <TopicCard topic={topic} handleCourseFetch={ this.handleCourseFetch }/>
      })
    } else if (this.state.clicked === 'provider') {
      providers = ["MIT", "Udacity", "edX", "Coursera"]
      return topicList = providers.map(topic => {
        return <TopicCard topic={topic} handleCourseFetch={ this.handleCourseFetch }/>
      })
    }
  }


  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {

    const {
          activeItemIndex,
          clicked
        } = this.state

    // let topics = this.galleryItemsAdvanced()
    return (
      <div style={{backgroundColor:'rgb(255,255,244)'}}>
        <div style={{
          height: '100vh',
          minWidth: '1024px',
          minHeight: '520px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position:'relative',
            minHeight:'520px',
            height:'100%',
            backgroundRepeat:'no-repeat'
          }}
          >
            <div style={{
              display:'flex',
              flexAlign:'center',
              alignItems:'center',
              height:'100%'
            }}>
            <div style={{
              // zIndex:'1',
              // paddingRight:'350px',
              // alignSelf: 'flex-end',
              width:"100%",
              height:'calc(100% - 86px)',
              backgroundSize:'cover',
              // position:'absolute',
              top: '17px',
              right:'18px',
              // zIndex:'0',
            }}>
                  <img src={require('./jacoto_book.jpg')}
                  style={{

                    width:"150%",
                    backgroundSize:'cover',
                    align:'left',
                    backgroundPositionX: "50%",
                    backgroundPositionY: "50%"
                  }} alt="background"
                />
            </div>

              <div style={{
                paddingLeft:'-350px',
                zIndex:'1',
                flexAlign:'center',
                alingItems:'center'
              }}>
                <h1 style={{
                  // marginLeft:'120px'
                }}>
                <span className="advancedElement">
                </span>
                  <span style={{
                    fontSize:'130px',
                    letterSpacing:'.055em',
                    fontFamily: 'Oswald'
                  }}>
                    <b>Advanced</b>


                  </span>

                </h1>
                <p style={{
                  fontSize: '12px',
                  letterSpacing: '0.4em',
                  lineHeight: '2.4'
                }}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque vitae enim id aliquet. Quisque nec lorem pretium, posuere felis a, iaculis ex. Nulla tincidunt a nibh eget tempor.</b>
                </p>

              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
        <div>
        <br />
          <Container align='center' fluid>
          <span className="search-button">
            <a className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light" role="button" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px', minWidth:'200px'}}>
              <h5>Topic</h5>
              <i className="fa fa-sign-in ml-2"></i>
              <div className="overlay" onClick={this.toggle} id="topic-search" >
                <div className="text" onClick={this.toggle} id="topic-search">
                  <h5 onClick={this.toggle} id="topic-search">Topic</h5>
                </div>
              </div>
            </a>
            </span>
            <span className="search-button">
            <a className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light" role="button" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px', minWidth:'200px'}}>
              <h5>Price</h5><i className="fa fa-sign-in ml-2"></i>
              <div className="overlay" id="price-search" onClick={this.toggle} >
                <div className="text" id="price-search" onClick={this.toggle}>
                  <h5 id="price-search" onClick={this.toggle}>Price</h5>
                </div>
              </div>
            </a>
            </span>
            <span className="search-button">
            <a className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light" role="button" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px', minWidth:'200px'}}>
              <h5>Length</h5><i className="fa fa-sign-in ml-2"></i>
              <div className="overlay" id="length-search" onClick={this.toggle} >
                <div className="text" id="length-search" onClick={this.toggle}>
                  <h5 id="length-search" onClick={this.toggle}>Length</h5>
                </div>
              </div>
            </a>
            </span>
            <span className="search-button">
            <a className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light" role="button" style={{borderTopLeftRadius:'25px', borderBottomRightRadius:'25px', minWidth:'200px'}}>
              <h5>Provider</h5><i className="fa fa-sign-in ml-2"></i>
              <div className="overlay" id="provider-search" onClick={this.toggle} >
                <div className="text" id="provider-search" onClick={this.toggle}>
                  <h5 id="provider-search" onClick={this.toggle}>Provider</h5>
                </div>
              </div>
            </a>
            </span>

          </Container>

          <div className="container-row">

            <h2 style={{fontFamily:'Oswald', letterSpacing:'.5em', textAlign:'right'}}></h2>
            <hr />
            <Container className="mt-5">
            <ItemsCarousel
              numberOfCards={3}
              gutter={0}
              showSlither={true}
              firstAndLastGutter={true}
              freeScrolling={false}

              requestToChangeActive={this.changeActiveItem}
              activeItemIndex={activeItemIndex}
              activePosition={'center'}

              chevronWidth={24}
              rightChevron={'>'}
              leftChevron={'<'}
              outsideChevron={true}
            >
              { (this.state.clicked !== null ) ? this.galleryItemsAdvanced() : []}

            </ItemsCarousel>
            </Container>
            </div>

          <CourseList courses={this.state.courses} />
        </div>
      </div>
    )
  }
}





export default AdvancedSearch
