import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  console.log('HeroSection rendered'); // Debugging log

  return (
    <div className='hero-container'>
      <video src='videos/space.mp4' autoPlay loop muted />
      <h1>Hi I'm Aidan, <br/>Welcome to my website.</h1>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PROJECTS
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;