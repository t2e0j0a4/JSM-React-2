import React from 'react'

import "./Header.css";

import { welcome } from '../../Assets';
import { SubHeading } from '../../Components';

const Header = () => {
  return (
    <div className='app__header' id='home'>
      <div className="app__header-info">
        <SubHeading title='Chase the new Flavour'/>
        <h1 className="app__header-info_heading">
          The key to Fine dining
        </h1>
        <p className='app__header-info_desc p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type='button' className='app__header-info-btn'>Explore More</button>
      </div>
      <div className="app__header-img">
        <img src={welcome} alt="header-welcome" />
      </div>
    </div>
  )
}

export default Header