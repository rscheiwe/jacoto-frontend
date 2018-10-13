import React from 'react'
import { Icon } from 'semantic-ui-react'

import '../Browse.css'
// import { Grid } from 'semantic-ui-react'

const MidRow = () => {

  return (


     <div className='midrow'>
        <span className='midrow-pic'>
          <img src={require('./MIT.png')} width="80%" alt="" />
          </span>
        <span className='midrow-pic'>
          <img src={require('./Udacity_logo-fx.png')} width="70%" alt="" />
          </span>
        <span className='midrow-pic'>
          <img src={require('./FutureLearn.png')} width="70%" alt="" />
          </span>
        <span className='midrow-pic'>
          <img src={require('./coursera_logo.png')} width="70%" alt="" />
          </span>
          <span className='midrow-icon'>
            <a href="/browse/advanced">
            <Icon name="external alternate" size='huge' />
            </a>
          </span>

      </div>

  )
}

export default MidRow
