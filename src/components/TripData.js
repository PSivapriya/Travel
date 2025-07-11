import './Trip.css'

import React from 'react'

function TripData (props) {
  return (
    <div className='card'>
      <div className='t-image'>
        <img src={props.image} alt='places'></img>
      </div>
      <h4>{props.heading} </h4>
      <p>{props.text} </p>
    </div>
  )
}

export default TripData
