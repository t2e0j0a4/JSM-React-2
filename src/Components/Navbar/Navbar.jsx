import React from 'react'

import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md";

import {gericht} from "../../Assets";

const Navbar = () => {

  const [smNavbar , setSMNavbar] = React.useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={gericht} alt="logo" />
      </div>
      <ul className={`app__navbar-links  ${smNavbar ? 'app__navbar-links_top slide-bottom' : ''}`}>
        <li onClick={()=>{setSMNavbar(false)}}><a href="#home">Home</a></li>
        <li onClick={()=>{setSMNavbar(false)}}><a href="#about">About</a></li>
        <li onClick={()=>{setSMNavbar(false)}}><a href="#contact">Contact Us</a></li>
        <li onClick={()=>{setSMNavbar(false)}}><a href="#blog">Blog</a></li>
        <li onClick={()=>{setSMNavbar(false)}}><a href="#landing">Landing</a></li>
        <div className='app__navbar-links_register-sm'>
          <span>Log In/Register</span>
          <span>Book Table</span>
        </div>
      </ul>
      <div className="app__navbar-register">
        <span>Log In/Register</span>
        <div className="app__navbar-register_seperator"></div>
        <span>Book Table</span>
      </div>
      <div className="app__navbar-smallscreen_menu">
        {smNavbar || <GiHamburgerMenu color='#fff' fontSize={28} className='app__navbar-smallscreen-btn' onClick={()=>{setSMNavbar(true)}}/>}
        {smNavbar && <MdOutlineRestaurantMenu className='menu-close' onClick={()=>{setSMNavbar(false)}}/>}
      </div>
    </nav>
  )
}

export default Navbar