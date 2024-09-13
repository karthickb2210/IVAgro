import React, { useContext, useState,useEffect } from 'react';
import {Link} from "react-router-dom"
import { FaFacebook, FaInstagram, FaWhatsapp, FaUser, FaShoppingCart } from 'react-icons/fa';
import logo from "/logo.png"
import UserProgressContext from '../../Shop/store/UserProgressContext';
import CartContext from '../../Shop/store/CartContext';
const NavBar = () => {
    const [store,SetStore] = useState(false)
    const [service,setService] = useState(false);
    const[brands,setBrands] = useState(false);
    const [about,setAbout] = useState(false);
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)
    const handleShowCart = ()=>{
      userProgressCtx.showCart();
    }

    //scroll feature function
    const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  // Detect scrolling
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollY) {
      setIsVisible(false); // Hide navbar while scrolling down
    } else {
      setIsVisible(true);  // Show navbar when scrolling up
    }

    setScrolling(true);    // Mark scrolling as true
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Show the navbar when scrolling stops (with a delay)
    const scrollTimeout = setTimeout(() => {
      setScrolling(false); // Set scrolling to false after the delay
      setIsVisible(true);  // Show the navbar after scroll stops
    }, 500);  // 500ms delay to detect stop

    // Clean up event listener and timeout
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [scrollY]);




  return (
    <header className={`shadow-md fixed top-0 w-full z-10 transition-transform duration-500 ${
        scrolling ? '-translate-y-full' : 'translate-y-0'}`}>
      {/* Top bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">


          {/* Social media icons */}
          <div className="flex space-x-4">
            <FaFacebook className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" />
            <FaInstagram className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" />
            <FaWhatsapp className="cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" />
          </div>
          {/* Current location and contact */}
          <div className="text-sm flex items-center space-x-4">
            <span>E-mail us</span>
            <span>|</span>
            <span>+91-9092052012</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <nav className="bg-white py-3">
        <div className="w-full mx-auto px-4 flex items-center">
          {/* Logo */}
          
            <div className="flex w-full items-center space-x-16  flex-row justify-between">
              <div className="flex items-center space-y-4 ">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-28 h-24 rounded-md"
                />
              </div>
              <div className='flex flex-col space-y-4 flex-grow '>
              <div className="w-full space-x-11">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full py-2 px-4 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-gray-400"
                />
              </div>
               {/* Nav items with dropdowns */}
            <div className="flex-grow text-lg flex justify-center space-x-8 text-gray-600">
              {/* Home Dropdown */}
              <div className="relative ">
              <Link to={`/`}>
                <a href="#" className="hover:text-black transition duration-300 ease-in-out">Home</a>
                </Link></div>
              {/* Store Dropdown */}
              <div className="relative  text-md " onMouseEnter={() => SetStore(true)}
    onMouseLeave={() => SetStore(false)}  >
                <a href="#"   className="hover:text-black transition duration-300 ease-in-out">Store</a>
                {store && <div  className="absolute -start-10 bg-white shadow-lg rounded-md w-40 transition-all duration-300 ease-in-out">
                <Link to={`/store`}>
                  <a href="#" className=" hover:bg-zinc-200 rounded-md block px-4 py-2 text-sm text-gray-700  transition-all duration-200">Leafy Greens</a>
                  </Link>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-100 transition-all duration-200">Macro Greens</a>
                </div>}
              </div>
              {/* Services Dropdown */}
              <div className="relative text-nowrap" onMouseEnter={()=>setService(true)} onMouseLeave={()=>setService(false)}>
                <a href="#" className="hover:text-black transition duration-300 ease-in-out">Services</a>
                { service &&
                <div   className="absolute -start-10 bg-white shadow-lg rounded-md  transition-all duration-300 ease-in-out">
                <Link to={`/towerRent`}>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200">Tower Lease</a>
                  </Link>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200">Educational Workshops</a>
                  <Link to={`/farm`}>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200">Farm House</a>
                  </Link>
                  <Link to={`/subscription`}>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200">Subscription</a>
                  </Link>
                </div>}
              </div>
              {/* Our Brands Dropdown */}
              <div className="relative" onMouseEnter={()=>setBrands(true)}  onMouseLeave={()=>setBrands(false)}>
                <a href="#" className="hover:text-black transition duration-300 ease-in-out">Our Brands</a>
               { brands && <div  className="absolute bg-white shadow-lg rounded-md w-40 transition-all duration-300 ease-in-out">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200">Green Muscle</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200">Divine Cotyledons</a>
                </div>}
              </div>
              {/* About us Dropdown */}
              <div className="relative"  onMouseEnter={()=>setAbout(true)} onMouseLeave={()=>setAbout(false)}>
                <a href="#" className="hover:text-black transition duration-300 ease-in-out">About us</a>
                {about && <div  className="absolute bg-white shadow-lg rounded-md  w-40 transition-all duration-300 ease-in-out">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200">Our Story</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-200">Products</a>
                </div>}
              </div>
            </div>
              </div>

              {/* Search bar */}
              



              <div className="flex items-center space-x-6">
                <FaUser className="text-gray-600 cursor-pointer w-6 h-6 hover:text-black transition duration-300 ease-in-out" />
                
                <div className="relative" >
                  <FaShoppingCart onClick={handleShowCart} className="text-gray-600 h-6 w-6 cursor-pointer hover:text-black transition duration-300 ease-in-out" />
                  <span className="absolute bottom-3 left-4 inline-flex items-center justify-center p-2 text-xs font-bold leading-none text-white bg-orange-500 rounded-full">
                    {cartCtx.items.length}
                  </span>
                </div>
              </div>
            </div>

           
          </div>
        
      </nav>
    </header>
  );
};

export default NavBar;
