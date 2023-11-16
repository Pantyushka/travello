import React from 'react'
import './destinations.css'
const Destinations = () => {
  return (
    <div className='destinations'>
        <div className='destinationsTexts'>
            <div className='destinationsHeader'>Destinations You Shouldn't Miss</div>
            <div className='destinationsText'>Choose Your Destination and Contact Our Experts for the Best Deals!</div>
        </div>
        <div className='destinationsCards'>
            <div className='destinationsCard'><span>Indonesia</span></div>
            <div className='destinationsCard'><span>Santorini</span></div>
            <div className='destinationsCard'><span>Amazon</span></div>
        </div>
    </div>
  )
}

export default Destinations