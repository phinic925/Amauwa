import React from 'react'
import NavBar from './Navbar'
import MainBanner from './MainBanner'
import backgroundImage from '../assets/BackgroundImage.png';

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' ,height: '480px' }}>
        <NavBar/>
        <MainBanner/>
    </div>
  )
}

export default Home