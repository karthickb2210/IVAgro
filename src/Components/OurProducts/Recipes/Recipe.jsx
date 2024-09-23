import React, { useState } from "react";
import { motion } from "framer-motion";

const Recipe = () => {
  const [activeTab, setActiveTab] = useState("ingredients");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 md:px-0">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        {/* Recipe Image and Info */}
        <div className="md:flex">
          <div className="relative p-4 w-full md:w-1/2">
            <motion.img
              src="https://via.placeholder.com/500" // Replace with actual image URL
              alt="Shakshuka With Feta"
              className="rounded-lg w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute top-4 left-4 text-white text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-400 p-2 rounded-full mb-2"
              >
                <span className="block text-lg font-bold">50</span>
                <span>MINS</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-400 p-2 rounded-full"
              >
                <span className="block text-lg font-bold">4</span>
                <span>SERVINGS</span>
              </motion.div>
            </div>
            <h2 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
              Shakshuka With Feta
            </h2>
            {/* <p className="absolute bottom-1 left-4 text-white text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */}
          </div>

          {/* Ingredients and Preparation */}
          <div className="w-full md:w-1/2 p-4">
            <div className="flex justify-between border-b pb-2">
              <button
                onClick={() => setActiveTab("ingredients")}
                className={`${
                  activeTab === "ingredients"
                    ? "text-red-500 border-red-500"
                    : "text-gray-500"
                } font-bold text-lg border-b-2 px-4`}
              >
                INGREDIENTS
              </button>
              <button
                onClick={() => setActiveTab("preparation")}
                className={`${
                  activeTab === "preparation"
                    ? "text-red-500 border-red-500"
                    : "text-gray-500"
                } font-bold text-lg border-b-2 px-4`}
              >
                PREPARATION
              </button>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              {activeTab === "ingredients" && (
                <div>
                  <p>1. Ingredient 1</p>
                  <p>2. Ingredient 2</p>
                  <p>3. Ingredient 3</p>
                  <p>4. Ingredient 4</p>
                </div>
              )}
              {activeTab === "preparation" && (
                <div>
                  <h3 className="font-bold text-lg">Step 1</h3>
                  <p>Heat oven to 375 degrees.</p>
                  <h3 className="font-bold text-lg mt-4">Step 2</h3>
                  <p>
                    Heat oil in a large skillet over medium-low heat. Add onion
                    and bell pepper. Cook until soft, about 20 minutes.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
