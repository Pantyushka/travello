import React from 'react'
import './discover.css'
import Book from '../../assets/img1.png'
const Discover = () => {
  return (
    <div className='discover'>
        <div className='discoverColumn'>
        <div className='discoverImg'><img src={ Book }></img></div>
        </div>
        <div className='discoverColumn'>
        <div className='discoverInfo'>
            <div className='discoverTitle'>Discover the world with us</div>
            <div className='discoverText'>Would you explore nature paradise in the world, let’s find the best destination in world with us, Would you explore nature paradise in the world, let’s find the best destination in world with us. </div>
            <span className='discoverBtn'>Download Guide Book</span>
        </div>
        </div>
    </div>
  )
}

export default Discover