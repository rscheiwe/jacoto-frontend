import React from 'react'
import '../Browse.css'
// import { Card } from 'mdbreact';


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
                    <img src='/images/jacoto_logo.png' alt="" width="400px"/>
                  </span>
              </h1>
              <p className='mirror-div'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque vitae enim id aliquet. Quisque nec lorem pretium, posuere felis a, iaculis ex. Nulla tincidunt a nibh eget tempor.</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      //       <div className="hoja">
      //
      // </div>





  )
}

export default Header
