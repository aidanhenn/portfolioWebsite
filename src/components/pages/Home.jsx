import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';

function Home() {
    console.log('Home rendered'); // Debugging log

  return (
    <>
      <HeroSection />
      <Cards/>
    </>
  );
}

export default Home;