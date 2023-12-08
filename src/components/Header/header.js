import React from 'react'
import './header.css'
import { useState } from 'react';
import {Link} from 'react-scroll'
import { FaBars } from 'react-icons/fa';
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <span>Travello</span>
        </div>
        <div className={`desktopMenu ${isMenuOpen ? 'hidden' : ''}`}>
          <Link className="desktopMenuListItem">Home</Link>
          <Link className="desktopMenuListItem">Offers</Link>
          <Link className="desktopMenuListItem">E-Book</Link>
          <Link className="desktopMenuListItem">Destinations</Link>
          <Link className="desktopMenuListItem">Blog</Link>
          <Link className="desktopMenuListItem">Testimonials</Link>
          <Link className="desktopMenuListItem">Contact Us</Link>
        </div>
        <div className="burgerMenuContainer">
          <div className={`burgerMenu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <FaBars className="burgerMenuIcon" />
          </div>
          <div className={`burgerMenuList ${isMenuOpen ? 'active' : ''}`}>
            <Link className="burgerMenuItem">Home</Link>
            <Link className="burgerMenuItem">Offers</Link>
            <Link className="burgerMenuItem">E-Book</Link>
            <Link className="burgerMenuItem">Destinations</Link>
            <Link className="burgerMenuItem">Blog</Link>
            <Link className="burgerMenuItem">Testimonials</Link>
            <Link className="burgerMenuItem">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="intro">Explore, Dream, Travel</div>
    </header>
  );
};

export default Header;