import React from 'react'
import '../Browse.css'

const AdvancedSearchCard = (props) => {

  let handleClick = (e) => {
    console.log(e)
    props.toggle(e)
  }

  return (
    <span className="search-button">
      <button className="btn btn-outline-info btn-sm my-0 ml-3 waves-effect waves-light" id='corners'>
        <h5>{props.option.toUpperCase()}</h5><i className="fa fa-sign-in ml-2"></i>
        <div className="overlay" onClick={handleClick} id={`${props.option}-search`} >
          <div className="text" onClick={handleClick} id={`${props.option}-search-text`}>
            <h5 onClick={handleClick} id={`${props.option}-search-font`}>{props.option.toUpperCase()}</h5>
          </div>
        </div>
      </button>
      </span>
  )
}

export default AdvancedSearchCard
