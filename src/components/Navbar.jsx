import React, { useState } from 'react';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-14 w-auto" src={logo} alt="Workflow logo" />
            <img className="hidden lg:block h-14 w-auto" src={logo} alt="Workflow logo" />
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg
  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
  xmlns="http://www.w3.org/2000/svg"
  fill="none" // Set fill to "none" to remove the background color
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M4 6h16M4 12h16M4 18h16" />
</svg>
{/* Icon when menu is open. */}
<svg
  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
  xmlns="http://www.w3.org/2000/svg"
  fill="none" // Set fill to "none" to remove the background color
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  aria-hidden="true"
>
  <path d="M6 18L18 6M6 6l12 12" />
</svg>
            </button>
          </div>

          {/* Navigation links for larger screens */}
          <div className="hidden md:flex md:items-center md:ml-auto md:space-x-4">
            <a
              href="#"
              className="text-white hover:bg-sky hover:text-white px-3 py-2 rounded-md text-xl font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-sky hover:text-white px-3 py-2 rounded-md text-xl font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white hover:bg-sky hover:text-white px-3 py-2 rounded-md text-xl font-medium"
            >
              What we offer
            </a>
            <a
              href="#"
              className="text-white hover:bg-sky hover:text-white px-3 py-2 rounded-md text-xl font-medium"
            >
              Our Gallery
            </a>
            <a
              href="#"
              className="text-white hover:bg-sky hover:text-white px-3 py-2 rounded-md text-xl font-medium"
            >
              Testimonials
            </a>
            <a
              href="#"
              className="text-white hover:bg-sky border hover:text-white px-3 py-2 rounded-full text-xl font-medium"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} bg-sky md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            What we offer
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Our Gallery
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Testimonials
          </a>
         
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
