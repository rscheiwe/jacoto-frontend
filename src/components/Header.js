import React from 'react'
import '../Browse.css'


const Header = () => {
  return (

    <div style={{backgroundColor:'rgb(255,255,244)'}}>
      <div className='head-div'>
        <div className='blanket-div'>
          <div className='flex-div'>
            <div className='img-div'>
                <img className='img-back-advanced' alt="" src={require('./jacoto-header.jpg')} />
            </div>
            <div className='txt-div'>
              <h1>
                <span className="advancedElement">
                </span>
                  <span className='open-div-advanced'>
                    <img src='/images/jacoto_logo.png' alt="" width="350px"/>
                  </span>
              </h1>
              <p className='mirror-div'><b>Over 20K online-courses, at your fingertips. Sign-up to save course lists, or simply browse to see our selection. </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>





  )
}

export default Header
