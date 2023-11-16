import React from 'react'
import './header.css'
import {Link} from 'react-scroll'
const Header = () => {
  return (
    <header className='header'>
    <div className='navbar'>
      <div className='logo'><span>Travello</span></div>
      <div className='desktopMenu'>
        <Link className='desktopMenuListItem'>Home</Link>
        <Link className='desktopMenuListItem'>Offers</Link>
        <Link className='desktopMenuListItem'>E-Book</Link>
        <Link className='desktopMenuListItem'>Deetinations</Link>
        <Link className='desktopMenuListItem'>Blog</Link>
        <Link className='desktopMenuListItem'>Testemonial</Link>
        <Link className='desktopMenuListItem'>Contact Us</Link>
      </div>
    </div>
    <div className='intro'>Explore, Dream, Travel</div>
    </header>
  )
}

export default Header