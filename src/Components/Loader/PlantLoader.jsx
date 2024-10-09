import React, { useEffect } from "react";
import { motion } from "framer-motion";

const LeavesLoader = () => {
  // Disable scroll while loader is visible
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-60 z-50">
      {/* Leaves Loader */}
      <div className="flex space-x-2 mb-4">
        <motion.div
          className="w-4 h-8 bg-green-500 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 0.1,
          }}
        ></motion.div>
        <motion.div
          className="w-4 h-10 bg-green-400 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 0.3,
          }}
        ></motion.div>
        <motion.div
          className="w-4 h-12 bg-green-600 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 0.5,
          }}
        ></motion.div>
        <motion.div
          className="w-4 h-8 bg-green-500 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 0.7,
          }}
        ></motion.div>
        <motion.div
          className="w-4 h-10 bg-green-400 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "mirror",
            delay: 0.9,
          }}
        ></motion.div>
      </div>

      {/* Loading Text */}
      <motion.div
        className="text-lg font-semibold text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Loading, please wait...
      </motion.div>
    </div>
  );
};

export default LeavesLoader;
