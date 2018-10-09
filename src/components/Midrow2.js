import React from 'react'
import '../Browse.css'

const Midrow2 = () => {

  return (
    <div className="head-div">
      <div className="blanket-div">
        <div className="flex-div">
          <div className="midrow-txt">
            <h1 style={{
              marginLeft:'0px'
            }}>
              <span className="lineElement">
              </span>
              <span className="midrow-content" style={{
                fontSize:'120px',
                letterSpacing:'.055em',
                fontFamily: 'Oswald'
              }}><b>Learn Anywhere</b></span>
            </h1>
            <p className="midrow-desc" style={{
              fontSize: '14px',
              letterSpacing: '0.4em',
              lineHeight: '2.4',
              padding:'2em'
            }}><b>With our course selection, you don't have to jump around between multiple websites. We'll feed you all those sites' courses, and you can save them here for later viewing.</b>
            </p>
          </div>

          <div style={{
            background:'50%',
            width:"50%",
            height:'calc(100% - 17px)',
            backgroundSize:'cover',
            position:'absolute',
            top: '17px',
            right:'18px',
            zIndex:'0'
          }}>
              <img src='/images/jacoto_book_red.jpg'
                style={{
                  width:"100%",
                  backgroundSize:'cover'
                }} alt=""
              />
          </div>
        </div>
      </div>
    </div>


  )
}

export default Midrow2
