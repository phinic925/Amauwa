import React from 'react';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <nav className="bg-transparent nav flex justify-between items-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4 items-center">
            <div>
              <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            </div>
            {/* Primary Nav */}
            <div className="flex flex-col items-center md:flex-row md:items-center w-full"> {/* Apply ml-auto to align items to the right */}
              <a href="#" className="ml-0 md:ml-7 p-3 text-white hover:text-gray-900">Home</a>
              <a href="#" className="ml-0 md:ml-7 p-3 text-white hover:text-gray-900">About us</a>
              <a href="#" className="ml-0 md:ml-7 p-3 text-white hover:text-gray-900">What We offer</a>
              <a href="#" className="ml-0 md:ml-7 p-3 text-white hover:text-gray-900">Gallery</a>
              <a href="#" className="ml-0 md:ml-7 p-3 text-white hover:text-gray-900">Testimonials</a>
            </div>
          </div>
          {/* Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="ml-0 md:ml-7 p-3 border text-white rounded-full hover:bg-customGreen transition duration-300">Get Quote</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
