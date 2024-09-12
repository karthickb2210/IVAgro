import React, { useState } from 'react';
import logo from "/logo.png"
import { Link } from 'react-router-dom';

const Navbarrr  = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggledrop = () =>{
    setDropdownOpen(!dropdownOpen)
  }
  return (
    <nav className=" bg-white p-4 z-10 shadow-lg fixed top-0 w-full">
      <div className="container mx-auto flex justify-start items-center">
      <Link to={`/`}>
        <div className="text-black space-x-4 text-lg font-semibold flex">
            <img src={logo} className=' ml-10  max-h-8 max-w-8' alt='Logo' />
            <a className='' href='/' >Ironvalley Agronomy</a>
        </div>
        </Link>
        <ul className={`hidden md:flex ml-24 text-lg space-x-8`}>
          <li className="text-black  hover:text-green-700 hover-transition">
            <a href="/">Home</a>
          </li>
          <li className="text-black  hover:text-green-700 hover-transition">
            <a href="/store">Store</a>
          </li>
          <li className="relative text-black hover:text-green-700 hover-transition">
            <button  onMouseOver={toggleDropdown} className="flex items-center">
              Brands
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <ul onMouseLeave={toggledrop} className="absolute mt-2 w-48 bg-white text-black rounded-lg shadow-lg border border-gray-200">
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-700">
                  <a href="#web-design">The Green Muscle</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 hover:text-green-700">
                  <a href="#app-development">Devine Cotyledons</a>
                </li>
                
              </ul>
            )}
          </li>
          <Link to={`/towerRent`}>
          <li className="text-black hover:text-green-700 hover-transition">
            <a href="#contact">Rental</a>
          </li>
          </Link>
          <Link to={`/subscription`}>
          <li className="text-black hover:text-green-700 hover-transition">
            <a href="#contact">Subscription</a>
          </li>
          </Link>
          <li className="text-black hover:text-green-700 hover-transition">
          <Link to={`/farm`}>
            <div >Farm</div>
            </Link></li>
          
        </ul>
        <div className="md:hidden text-black">
          <button id="menu-btn" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2" id="mobile-menu">
          <ul className="space-y-2">
            <li className="text-black hover:text-green-700 hover-transition">
              <a href="#home">Home</a>
            </li>
            <li className="relative text-black hover:text-green-700 hover-transition">
              <button onClick={toggleDropdown} className="flex items-center w-full text-left">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="mt-2 pl-4 space-y-2">
                  <li className="text-black hover:text-green-700">
                    <a href="#web-design">Web Design</a>
                  </li>
                  <li className="text-black hover:text-green-700">
                    <a href="#app-development">App Development</a>
                  </li>
                  <li className="text-black hover:text-green-700">
                    <a href="#seo">SEO Services</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="text-black hover:text-green-700 hover-transition">
              <a href="#about">About</a>
            </li>
            <li className="text-black hover:text-green-700 hover-transition">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbarrr;
