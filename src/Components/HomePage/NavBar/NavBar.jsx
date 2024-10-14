import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaShoppingCart, FaBars } from "react-icons/fa"; // FaBars for mobile menu
import logo from "/logo.png";
import UserProgressContext from "../../Shop/store/UserProgressContext";
import CartContext from "../../Shop/store/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/User";
import Topbar from "./Topbar";
import axios from "axios";
import axiosInstance from "../../../config/AxiosConfig";
import { toast } from "react-toastify";

const NavBar = () => {
  const user = useSelector((state) => state.user.value);
  const [isStoreOpen, setIsStoreOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const [store, SetStore] = useState(false);
  const [service, setService] = useState(false);
  const [brands, setBrands] = useState(false);
  const [about, setAbout] = useState(false);
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const [showOptions, setShowOptions] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu
  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  // Scroll feature function
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  // Detect scrolling
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollY) {
      setIsVisible(true); // Hide navbar while scrolling down
    } else {
      setIsVisible(false); // Show navbar when scrolling up
    }

    setScrolling(true); // Mark scrolling as true
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    if (localStorage.getItem("name")) {
      dispatch(
        login({
          name: localStorage.getItem("name"),
          pass: localStorage.getItem("pass"),
        })
      );
    }
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Show the navbar when scrolling stops (with a delay)
    const scrollTimeout = setTimeout(() => {
      setScrolling(false); // Set scrolling to false after the delay
      setIsVisible(true); // Show the navbar after scroll stops
    }, 500); // 500ms delay to detect stop

    // Clean up event listener and timeout
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [scrollY]);

  // Logins
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [pass, setPass] = useState();

  const dispatch = useDispatch();

  const handleLogin = () => {
    const cred = {
      name: name,
      pass: pass,
    };
    axiosInstance
      .post("/checkUser", cred)
      .then((res) => {
        if (res.data.flag) {
          dispatch(
            login({
              name: name,
              pass: pass,
            })
          );
          localStorage.setItem("name", name);
          localStorage.setItem("pass", pass);
          navigate("/dash");
        } else {
          toast.warn("Incorrect Username or password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    dispatch(
      login({
        name: "",
        pass: "",
      })
    );
    localStorage.removeItem("name");
    localStorage.removeItem("pass");
    navigate("/");
  };

  return (
    <header
      className={`shadow-md fixed top-0 w-full z-10 transition-transform duration-500 ${
        isVisible && scrolling ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top bar */}
      <Topbar />

      {/* Bottom bar */}
      <nav className="bg-white py-3">
        <div className="w-full mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to={`/`}>
              <img src={logo} alt="Logo" className="w-16 h-26 rounded-md" />
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center space-y-4 flex-grow ">
            <div className="space-x-11 w-11/12 ">
              <input
                type="text"
                placeholder="Search"
                className=" w-3/4 mx-12 py-2 px-4 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>

            {/* Hamburger menu for mobile screens */}
            <div className="lg:hidden flex items-center space-x-4">
              <FaBars
                className="text-gray-600 w-6 h-6 cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex flex-grow justify-center space-x-8 text-gray-600 text-lg">
              {/* Nav items with dropdowns */}
              <Link to="/" className="hover:text-black transition duration-300">
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => SetStore(true)}
                onMouseLeave={() => SetStore(false)}
              >
                <div className="hover:text-black transition duration-300">
                  Store
                </div>
                {store && (
                  <div className="absolute bg-white shadow-lg rounded-md w-40">
                    <Link
                      to="/store"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-zinc-200"
                    >
                      Leafy Greens
                    </Link>
                    <Link
                      to="/macro-greens"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Micro Greens
                    </Link>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setService(true)}
                onMouseLeave={() => setService(false)}
              >
                <div className="hover:text-black transition duration-300">
                  Services
                </div>
                {service && (
                  <div className="absolute bg-white shadow-lg rounded-md w-40">
                    <Link
                      to="/towerRent"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Tower Lease
                    </Link>
                    <Link
                      to="/edu-work"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Educational Workshops
                    </Link>
                    <Link
                      to="/farm"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Farm House
                    </Link>
                    <Link
                      to="/subscription"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Subscription
                    </Link>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setBrands(true)}
                onMouseLeave={() => setBrands(false)}
              >
                <div className="hover:text-black transition duration-300">
                  Our Brands
                </div>
                {brands && (
                  <div className="absolute bg-white shadow-lg rounded-md w-40">
                    <Link
                      to="/green-muscle"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Green Muscle
                    </Link>
                    <Link
                      to="/divine-cotyledons"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Divine Cotyledons
                    </Link>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setAbout(true)}
                onMouseLeave={() => setAbout(false)}
              >
                <Link
                  to="/about-us"
                  className="hover:text-black transition duration-300"
                >
                  About us
                </Link>
                {about && (
                  <div className="absolute bg-white shadow-lg rounded-md w-40">
                    <Link
                      to="/ourStory"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/product"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Products
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Icons for user and cart */}
          <div className="flex items-center space-x-6">
            <FaUser
              onMouseEnter={() => setShowOptions(true)}
              onMouseLeave={() => setShowOptions(false)}
              className="text-gray-600 cursor-pointer w-6 h-6 hover:text-black transition duration-300"
            />
            {showOptions && (
              <div
                className="absolute top-16 right-20 w-64 bg-white shadow-lg border rounded-lg p-4"
                onMouseEnter={() => setShowOptions(true)}
                onMouseLeave={() => setShowOptions(false)}
              >
                <div>
                  {user.name.length == 0 && (
                    <>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="email"
                        placeholder="Email ID"
                        className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-blue-500"
                      />
                      <input
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="w-full p-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-blue-500"
                      />
                    </>
                  )}
                  {user.name && user.name.length > 2 ? (
                    <button
                      onClick={() => navigate("/dash")}
                      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                    >
                      View Profile
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleLogin}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                      >
                        Login
                      </button>
                      {/* <div>credentials -- Name: test , pass: 123</div> */}
                    </>
                  )}
                  {user.name && user.name.length > 2 ? (
                    <button
                      onClick={handleLogout}
                      className="w-full bg-gray-300 text-gray-700 py-2 rounded-md mt-2 hover:bg-gray-400"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link to="/register">
                      <button className="w-full bg-gray-300 text-gray-700 py-2 rounded-md mt-2 hover:bg-gray-400">
                        New User
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            )}

            <div className="relative">
              <FaShoppingCart
                onClick={handleShowCart}
                className="text-gray-600 h-6 w-6 cursor-pointer hover:text-black transition duration-300"
              />
              <span className="absolute bottom-3 left-4 inline-flex items-center justify-center p-2 text-xs font-bold leading-none text-white bg-orange-500 rounded-full">
                {cartCtx.items.length}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile menu items */}
         {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          {/* Home */}
          <Link to="/" className="block text-center text-gray-600">
            Home
          </Link>

          {/* Store Menu */}
          <div className="block text-center text-gray-600">
            <p
              className="cursor-pointer"
              onClick={() => setIsStoreOpen(!isStoreOpen)}
            >
              Store
            </p>
            {isStoreOpen && (
              <div className="space-y-2 pl-4 bg-gray-100">
                <Link
                  to="/store"
                  className="block text-gray-500 py-2"
                >
                  Leafy Greens
                </Link>
                <Link
                  to="/macro-greens"
                  className="block text-gray-500 py-2"
                >
                  Micro Greens
                </Link>
              </div>
            )}
          </div>

          {/* Services Menu */}
          <div className="block text-center text-gray-600">
            <p
              className="cursor-pointer"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
            </p>
            {isServicesOpen && (
              <div className="space-y-2 pl-4 bg-gray-100">
                <Link
                  to="/towerRent"
                  className="block text-gray-500 py-2"
                >
                  Tower Lease
                </Link>
                <Link
                  to="/edu-work"
                  className="block text-gray-500 py-2"
                >
                  Educational Workshops
                </Link>
                <Link
                  to="/farm"
                  className="block text-gray-500 py-2"
                >
                  Farm House
                </Link>
                <Link
                  to="/subscription"
                  className="block text-gray-500 py-2"
                >
                  Subscription
                </Link>
              </div>
            )}
          </div>

          {/* Our Brands Menu */}
          <div className="block text-center text-gray-600">
            <p
              className="cursor-pointer"
              onClick={() => setIsBrandsOpen(!isBrandsOpen)}
            >
              Our Brands
            </p>
            {isBrandsOpen && (
              <div className="space-y-2 pl-4 bg-gray-100">
                <Link
                  to="/green-muscle"
                  className="block text-gray-500 py-2"
                >
                  Green Muscle
                </Link>
                <Link
                  to="/divine-cotyledons"
                  className="block text-gray-500 py-2"
                >
                  Divine Cotyledons
                </Link>
              </div>
            )}
          </div>

          {/* About Us Menu */}
          <div className="block text-center text-gray-600">
            <p
              className="cursor-pointer"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              About Us
            </p>
            {isAboutOpen && (
              <div className="space-y-2 pl-4 bg-gray-100">
                <Link to="/our-story" className="block text-gray-500 py-2">
                  Our Story
                </Link>
                <Link to="/product" className="block text-center text-gray-600">
            Products
          </Link>
              </div>
            )}
          </div>

          {/* Products */}
         

          {/* Subscription */}
         
        </div>
      )}


      </nav>
    </header>
  );
};

export default NavBar;
