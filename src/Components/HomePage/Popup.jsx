import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if(sessionStorage.getItem("popcount")){
      setIsOpen(false)
    }else{
      setIsOpen(true)
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("popcount",1)
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="relative bg-white p-6 rounded-lg shadow-lg  md:mx-6 lg:mx-12">
            {/* Close Button at Top Right */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &#x2715;
            </button>
            
            {/* <img
              src="https://www.shutterstock.com/image-vector/welcome-our-farmhouse-inspirational-quotes-260nw-2196191199.jpg"
              alt="Popup Image"
              className="mb-4 w-full h-auto rounded"
            /> */}

            <div className="relative bg-gradient-to-r from-yellow-100 via-orange-500 to-green-600 py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-16 text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 bg-black opacity-30" />
        
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Chennai's 1st Ever Fully Commercial & Operational
        </motion.h1>
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Aeroponic Tower Farm
        </motion.h2>
        <motion.h3
          className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We Offer Educational workshops & free visit for families/communities .
        </motion.h3>
        <Link to={`/farm`}>
          <motion.button
            className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-white text-green-500 font-semibold rounded-md shadow-lg hover:bg-gray-200 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Book Your Visit
          </motion.button>
        </Link>
      </div>
    </div>
            {/* <Banner /> */}
            
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
