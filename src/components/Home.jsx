import React from 'react';
import NavBar from './Navbar';
import MainBanner from './MainBanner';
import backgroundImage from '../assets/BackgroundImage.png';

const Home = () => {
  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      height: '480px', 
      '@media (max-width: 768px)': {
        height: '240px', // Adjust the height for smaller screens
        backgroundSize: 'contain' // Adjust the background size for smaller screens
      } 
    }}>
      <NavBar />
      <MainBanner />
    </div>
  );
};

export default Home;
