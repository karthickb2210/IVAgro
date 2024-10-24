import React, { useState } from "react";
import { motion } from "framer-motion";

const Recipe = ({ data }) => {
  const [activeTab, setActiveTab] = useState("ingredients");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 md:px-0">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        {/* Recipe Image and Info */}
        <div className="md:flex">
          <div className="relative p-4 w-full md:w-1/2">
            <motion.img
              src={data.image} // Replace with actual image URL
              alt={data.name}
              className="rounded-lg w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute top-8 left-6 text-white text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-400 p-1 px-2 rounded-full mb-2"
              >
                <span className="block text-lg font-bold">
                  {data.time} mins
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-400 p-1 px-2 rounded-full"
              >
                <span className="block text-lg font-bold">
                  {data.servings} Servings
                </span>
                <span></span>
              </motion.div>
            </div>
            <h2 className="absolute bottom-5 bg-black left-6 text-white bg-opacity-45 px-6 rounded-2xl text-2xl font-bold">
              {data.name}
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
                <div className="flex flex-col  justify-center gap-4 my-6">
                  {data.ingredients.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-lg shadow-lg p-2 min-w-[120px] text-center hover:scale-105 transition-transform duration-300"
                    >
                      <p className="text-sm text-start font-medium text-gray-800">
                        ● {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "preparation" && (
                <div>
                  {data.steps.map((item, index) => (
                    <div
                      key={index}
                      className="mb-2 p-1 border-l-4 border-green-500 bg-gray-50 rounded-md"
                    >
                      <p className=" hover:scale-105 transition duration-300 text-sm ml-2 font-semibold text-gray-800">
                        {index + 1}. {item}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center space-x-6 py-6">
          {data.nutrients.map((nutrient, index) => (
            <div
              key={index}
              className="border px-4 py-2 rounded-lg shadow-lg bg-gradient-to-br from-green-200 via-green-100 to-white text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-md font-bold text-gray-800 mb-2">
                {nutrient.name}
              </h3>
              <p className="text-md font-medium text-gray-700">
                {nutrient.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
