import React, { useEffect, useState } from "react";
import car1 from  "/car1.jpg"
import car2 from "/car2.jpg"
import car3 from "/car3.jpg"
const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: car1, // Replace with actual image URL
      title: "Farm to Fork",
      description: "We promise to deliver the products from farm to your fork on the same day",
      buttonText: "Visit Our Farm",
      buttonLink: "/farm",
    },
    {
      id: 2,
      image: car2, // Replace with actual image URL
      title: "B2B Hub / WareHouse",
      description: "The product undergoes a minimum of 10+ points before it reaches your plate",
      buttonText: "View Process",
      buttonLink: "#",
    },
    {
      id: 3,
      image: car3, // Replace with actual image URL
      title: "Our Brands",
      description: "We have two major brands namely Divine Cotyledons and Green Muscle.",
      buttonText: "Explore Brands",
      buttonLink: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative mt-36 mx-4 h-[500px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative h-[500px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Text and Button */}
            <div className="absolute bottom-0 w-full text-center inline-block bg-black bg-opacity-40 rounded-3xl py-1 text-white px-4">
              <h2 className="text-3xl    font-bold">{slide.title}</h2>
              <p className="text-lg mt-2">{slide.description}</p>
              <a
                href={slide.buttonLink}
                className="mt-4 mb-4 inline-block bg-teal-950 hover:bg-blue-900 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Previous and Next buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 py-6 px-2 rounded-full hover:bg-opacity-80"
        onClick={() => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)}
      >
        &#10094;
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 py-6 px-2 rounded-full hover:bg-opacity-80"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
