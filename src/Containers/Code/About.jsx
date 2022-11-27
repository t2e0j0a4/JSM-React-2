import React from 'react'

import "./About.css";

import { G , knife , spoon } from '../../Assets';

const About = () => {
  return (
    <div className='app__aboutus' id='about'>
      <div className="app__aboutus-overlay">
        <img src={G} alt="G-Overlay" />
      </div>

      <div className="app__aboutus-content">

        <div className="app__aboutus-content_about">
          <h3 className='content__head'>About Us</h3>
          <img src={spoon} alt="Spoon" />
          <p className='content__desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium amet corporis fugit quam autem labore dolorum dicta repellendus adipisci aspernatur!</p>
          <button type='button' className='content__btn'>Know More</button>
        </div>

        <div className="app__aboutus-content_knife">
          <img src={knife} alt="Knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h3 className='content__head'>Our History</h3>
          <img src={spoon} alt="Spoon" />
          <p className='content__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem sunt veniam iusto molestias tempora et quaerat repellat expedita sed repudiandae?</p>
          <button type='button' className='content__btn'>Know More</button>
        </div>

      </div>
    </div>
  )
}

export default About