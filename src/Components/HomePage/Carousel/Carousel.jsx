import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import car1 from "/car1.png"
import car2 from "/car2.png"
import car3 from "/car3.jpg"
import { Link } from "react-router-dom";


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <div className="relative h-[500px] w-auto my-28 mx-12">
      <div className="absolute inset-0 overflow-hidden">

        {/* Slide 1 */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            currentSlide === 0
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
          style={{
            backgroundImage:
              `url(${car1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center justify-end h-full bg-black bg-opacity-50 text-white p-6">
            <h2 className="md:text-2xl mb-4 text-wrap sm:text-xl mx-20 text-center">
              Fresh Plants Delivered to your home
            </h2>
            <Link to={`/store`}>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Order Now
            </button>
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            currentSlide === 1
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
          style={{
            backgroundImage:
`url(${car2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center justify-end h-full bg-black bg-opacity-50 text-white p-6">
            <h2 className="md:text-2xl sm:text-xl mb-4 text-wrap mx-20 text-center">
              We sell a wide range of aeroponics based plants which is grown in
              our farm.
            </h2>
            <Link to={`/farm`}>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Visit our Farm
            </button>
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            currentSlide === 2
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
          style={{
            backgroundImage:
`url(${car3})`,            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col items-center justify-end h-full bg-black bg-opacity-50 text-white p-6">
            <h2 className="md:text-2xl sm:text-xl  mb-4 text-wrap mx-20 text-center">
              Buy a Rental Tower and Grow as you wish for a year
            </h2>
            <Link to={`/towerRent`}>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Rent Now
            </button>
            </Link>
          </div>
        </div>
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-black p-3 rounded-full"
        onClick={prevSlide}
      >
        <FaArrowLeft size={30} />
      </button>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-black p-3 rounded-full"
        onClick={nextSlide}
      >
        <FaArrowRight size={30} />
      </button>
    </div>
  );
};

export default Carousel;
