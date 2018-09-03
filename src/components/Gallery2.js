import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import GalleryCard from './GalleryCard.js'

import { Container, Row, Col } from 'mdbreact';

export default class Test extends React.Component {

  // state = {
  //   courses: [],
  //   activeItemIndex: 0
  // }

  galleryItems = (courses) => {

    courses = this.props.courses.map(course => {
      return <GalleryCard course={course} />
    })

    return (
      courses.map((item, i) => (
        <div key={`key-${i}`}
            className="gallery-card"
            style={{
              paddingTop:'20px',
              paddingBottom:'20px',
              background:'rgb(255,255,244)',
              display:'flex',
              flexDirection:'row',
              flexWrap:'wrap'
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
        <h2>Feature Courses</h2>
        <hr />
        <ItemsCarousel

          numberOfCards={3}
          gutter={2}
          showSlither={true}
          firstAndLastGutter={true}
          freeScrolling={true}

          chevronWidth={24}
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron={false}
          style={{height:'450px', display:'flex'}}
        >
          {courses}
        </ItemsCarousel>
        </Container>
        </div>

    );
  }
}
