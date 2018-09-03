import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { Container, Row, Col } from 'mdbreact';
import GalleryCard from './GalleryCard.js'


class Gallery extends React.Component {

  state = {
    courses: []
  }

  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
  };

  // componentDidMount= () => {
  //   this.setState({
  //     courses: this.props.courses
  //   })
  // }

  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  };

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  };


  galleryItems = (courses) => {

    courses = this.props.courses.map(course => {
      return <GalleryCard course={course} />
    })

    return (
      courses.map((item, i) => (
        <div key={`key-${i}`} className="gallery-card" style={{postion:'relative'}}><span>{item}</span></div>
      ))
    )
  };

  render() {
    console.log(this.props)
    console.log(this.props.courses)
    const items = this.galleryItems(this.props.courses);

    return (
      <Row >
      <Container className="mt-3">
      <AliceCarousel
        items={items}
        duration={400}
        autoPlay={false}
        startIndex = {1}
        swipeDisabled = {false}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        responsive={this.responsive}
        autoPlayActionDisabled={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}

      />
      </Container>
      </Row>
    );
  }
}

export default Gallery
