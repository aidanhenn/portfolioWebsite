import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  console.log('HeroSection rendered'); // Debugging log

  return (
    <div className='hero-container'>
      <video src='videos/space.mp4' autoPlay loop muted />
      <h1>Hi, I'm <span class="name">Aidan.</span> <br/>Welcome to my website.</h1>
      
      <div className='hero-btns'>
        <a
          className='projectsButton'
          href="#cards"
        >
          Projects
        </a>
       
      </div>
    </div>
  );
}

export default HeroSection;