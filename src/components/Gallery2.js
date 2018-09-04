import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import GalleryCard from './GalleryCard.js'

import { Container, Row, Col } from 'mdbreact';

export default class Gallery2 extends React.Component {

  galleryItems = (courses) => {

    courses = this.props.courses.map(course => {
      return <GalleryCard course={course} />
    })

    return (
      courses.map((item, i) => (
        <div key={`key-${i}`}
            className="gallery-card"
            style={{
              paddingTop:'25px',
              paddingBottom:'10px',
              background:'rgb(255,255,244)'
            }}
              >
          <span>
            {item}
          </span>
        </div>
      ))
    )
  };


  render() {
    console.log(this.props.courses)

    const courses = this.galleryItems(this.props.courses);
    const activeItemIndex = 0

    return (
      <div className="container-row">
        <Container className="mt-5">
        <h2 style={{fontFamily:'Oswald', letterSpacing:'.5em', textAlign:'right'}}>Feature Courses</h2>
        <hr />
        <ItemsCarousel

          numberOfCards={3.5}
          gutter={2}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={true}

          chevronWidth={24}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={false}
          style={{
            minHeight:'375px',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
          className="flex-container"
        >
          {courses}
        </ItemsCarousel>
        </Container>
        </div>

    );
  }
}
