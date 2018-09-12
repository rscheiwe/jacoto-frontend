import React, { Component } from 'react'
import Adapter from '../Adapter.js'
import BrowseList from './BrowseList.js'
import TopicCard from './TopicCard.js'
import AdvancedSearchCard from './AdvancedSearchCard.js'
import ItemsCarousel from 'react-items-carousel';
import { Container } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
import '../Browse.css'

class AdvancedSearch extends Component {

  state = {
    courses:[],
    activeItemIndex: 0,
    clicked: null
  }

  toggle = (e) => {
    console.log("HERE", e.target.id)
    switch (e.target.id) {
      case 'topic-search-font':
        this.setState({ courses: [], clicked: "topics" })
        break
      case 'price-search-font':
        this.setState({ courses: [], clicked: "price" })
        break
      case 'length-search-font':
        this.setState({ courses: [], clicked: "length" })
        break
      case 'provider-search-font':
        this.setState({ courses: [], clicked: "provider" })
        break

    }
  }

  handleCourseFetch = (topic) => {
    Adapter.topicCourses(topic)
      .then(json => this.passCourses(json.data))
  }

  passCourses = (data) => {
    let element = document.getElementById('course-row')
    this.setState({
      courses: data
    }, () => element.scrollIntoView({behavior: "smooth"}))
  }

  galleryItemsAdvanced = () => {
    let topicList, topics, prices, lengths, providers, key
    switch (this.state.clicked) {
      case 'topics':
        key = "topic"
        topics = [{topic: 'Data Science', pic: require('./jacoto-data.jpg')},
                  {topic: 'Humanities', pic: require('./jacoto-humanities.jpg')},
                  {topic: 'Philosophy', pic: require('./jacoto-philosophy.jpg')},
                  {topic: 'Technologies', pic: require('./jacoto-technologies.jpg')},
                  {topic: 'Science', pic: require('./jacoto-science.png')}]
        return topicList = topics.map(topic => {
          // debugger
          return <TopicCard topic={topic['topic']} pic={topic['pic']} handleCourseFetch={ this.handleCourseFetch } option={key} />
        })

      case 'price':
        key = "price"
        prices = ["free", "cost"]
        return topicList = prices.map(topic => {
          return <TopicCard topic={topic} handleCourseFetch={ this.handleCourseFetch } option={key} />
        })

      case 'length':
        key = "length"
        lengths = ["self-paced", "<1 Month", "<6 Months"]
        return topicList = lengths.map(topic => {
          return <TopicCard topic={topic} handleCourseFetch={ this.handleCourseFetch } option={key} />
        })

      case 'provider':
        key = "provider"
        providers = ["MIT", "Udacity", "edX", "Coursera"]
        return topicList = providers.map(topic => {
          return <TopicCard topic={topic} handleCourseFetch={ this.handleCourseFetch } option={key} />
        })

      }
    }

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    console.log(this.state.courses)
    const {
          activeItemIndex,
          clicked
        } = this.state

    return (
      <div style={{backgroundColor:'rgb(255,255,244)'}}>
        <div className='main-div'>
          <div className='blanket-div'>
            <div className='flex-div'>
              <div className='img-div'>
                  <img className='img-back-advanced' alt="" src={require('./jacoto_book.jpg')} />
              </div>
              <div className='txt-div'>
                <h1>
                  <span className="advancedElement">
                  </span>
                    <span className='open-div-advanced'>
                      <b>Advanced</b>
                    </span>
                </h1>
                <p className='mirror-div'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque vitae enim id aliquet. Quisque nec lorem pretium, posuere felis a, iaculis ex. Nulla tincidunt a nibh eget tempor.</b>
                </p>
              </div> </div> </div> </div> <div>
        <br />
          <Container align='center' fluid>

            <AdvancedSearchCard option={'topic'} toggle={this.toggle}/>
            <AdvancedSearchCard option={'price'} toggle={this.toggle}/>
            <AdvancedSearchCard option={'length'} toggle={this.toggle}/>
            <AdvancedSearchCard option={'provider'} toggle={this.toggle}/>

          </Container>

          <div className="container-row">

            <Container className="mt-5">
              <ItemsCarousel
                numberOfCards={3.5}
                gutter={3}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}
                chevronWidth={36}
                rightChevron={'>'}
                leftChevron={'<'}
                outsideChevron={true}
              >
                { (this.state.clicked !== null ) ? this.galleryItemsAdvanced() : []}
              </ItemsCarousel>
            </Container>
          </div>
          <BrowseList courses={this.state.courses}/>
        </div>
      </div>
    )
  }
}

export default AdvancedSearch
