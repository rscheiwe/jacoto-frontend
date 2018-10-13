import React from 'react'

import '../Browse.css'
// import { Grid } from 'semantic-ui-react'

const MidRow = () => {

  return (

      <div className='midrow'>


              <img src={require('./MIT.png')} width="20%" alt="" />
              <img src={require('./Udacity_logo.png')} width="40%" alt="" />
              <img src={require('./FutureLearn.png')} width="20%" alt="" />

      </div>

  )
}

export default MidRow
