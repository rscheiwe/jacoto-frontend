import React from 'react'
import { Icon } from 'semantic-ui-react'

import '../AdvancedBrowse.css'

const AdvancedSearchCard = (props) => {

  let handleClick = (e) => {
    // console.log(e)
    props.toggle(e)
  }

  let renderSwitch = (param) => {
    switch(param) {
      case 'topic':
        return (<Icon name="folder outline" />)
      case 'price':
        return (<Icon name="dollar sign" />)
      case 'length':
        return (<Icon name="time" />)
      case 'provider':
        return (<Icon name="building outline" />)
    }
  }

  return (
    <div className="search-button-advanced"  onClick={handleClick} id={`${props.option}-search-font`}>

      <button className="search-button-advanced" id='corners' >

        <h5 id={`${props.option}-search-font`} className="advanced-font">
          {props.option.toUpperCase()}

          {renderSwitch(props.option)}
        </h5>
      </button>

    </div>
  )
}

export default AdvancedSearchCard
