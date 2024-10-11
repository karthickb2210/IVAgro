import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../../HomePage/NavBar/NavBar';
import img1 from "../img/arugula1.jpg";
import img2 from "../img/arugula2.jpg";
import img3 from "../img/arugula3.jpg";

const ArugulaPage = () => {
  return (
    <>
      <NavBar />
      <div className="mx-16 mt-32 bg-white text-black p-8 space-y-16">
        {/* Header */}
        <header className="text-center mb-12">
          <motion.h1
            className="text-5xl font-extrabold text-green-700"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            The Wonders of Arugula
          </motion.h1>
          <motion.p
            className="text-xl mt-4 text-gray-600"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover the bold flavor and health benefits of arugula.
          </motion.p>
        </header>

        {/* Image Section */}
        <section className="flex justify-center mb-12">
          <motion.img
            src={img1}
            alt="Arugula"
            className="h-[300px] w-[400px] rounded-xl shadow-xl hover:scale-105 transition-transform"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </section>

        {/* Properties Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <motion.h2
              className="text-3xl font-semibold text-yellow-600"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Nutritional Properties
            </motion.h2>
            <motion.ul
              className="list-disc pl-5 text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <li>Rich in Vitamins A, C, and K</li>
              <li>High in calcium, iron, and potassium</li>
              <li>Packed with antioxidants like glucosinolates</li>
              <li>Low in calories, but high in fiber and water content</li>
            </motion.ul>
          </div>
          <motion.img
            src={img2}
            alt="Nutritional properties of Arugula"
            className="h-[200px] w-[200px] rounded-xl shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <motion.img
            src={img3}
            alt="Features of Arugula"
            className="h-[200px] w-[200px] rounded-xl shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <div>
            <motion.h2
              className="text-3xl font-semibold text-green-600"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Unique Features
            </motion.h2>
            <motion.ul
              className="list-disc pl-5 text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <li>Bold, peppery flavor that adds a zing to dishes</li>
              <li>Best served fresh in salads or as a garnish</li>
              <li>Quick to grow and easy to cultivate</li>
              <li>Available year-round, especially in cooler months</li>
            </motion.ul>
          </div>
        </section>

        {/* Uses Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <motion.h2
              className="text-3xl font-semibold text-yellow-600"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Common Uses
            </motion.h2>
            <motion.ul
              className="list-disc pl-5 text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <li>Fresh salads and sandwiches</li>
              <li>As a pizza topping after baking</li>
              <li>Added to pasta, omelettes, and grain bowls</li>
              <li>Blended in pesto for a unique flavor</li>
            </motion.ul>
          </div>
          <div>
            <motion.h2
              className="text-3xl font-semibold text-green-600"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Health Benefits
            </motion.h2>
            <motion.ul
              className="list-disc pl-5 text-lg text-gray-700 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <li>Improves digestion and detoxifies the body</li>
              <li>Supports immune function and reduces inflammation</li>
              <li>Promotes heart health and bone strength</li>
              <li>Contains cancer-fighting compounds</li>
            </motion.ul>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="text-center bg-green-100 p-8 rounded-xl mb-16">
          <motion.h2
            className="text-3xl font-semibold text-green-700"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Fun Facts about Arugula
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Did you know? Arugula is sometimes called "rocket" in European countries, and it's been cultivated since Roman times for its medicinal properties and as a flavoring herb!
          </motion.p>
        </section>

        {/* Conclusion Section */}
        <section className="text-center">
          <motion.h2
            className="text-3xl font-semibold text-green-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why You Should Eat More Arugula
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Arugula is not only a flavorful addition to meals, but it also provides numerous health benefits. Whether it's added to a salad, smoothie, or cooked dish, arugula is a green you should incorporate into your daily diet for a delicious and nutritious boost!
          </motion.p>
        </section>
      </div>
    </>
  );
};

export default ArugulaPage;
