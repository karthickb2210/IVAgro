import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../../HomePage/NavBar/NavBar';
import img1 from "../img/kale1.jpg";
import img2 from "../img/kale2.jpg";
import img3 from "../img/kale3.jpg";

const KalePage = () => {
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
            The Power of Kale
          </motion.h1>
          <motion.p
            className="text-xl mt-4 text-gray-600"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Learn why kale is a nutrient-dense superfood for a healthy diet.
          </motion.p>
        </header>

        {/* Image Section */}
        <section className="flex justify-center mb-12">
          <motion.img
            src={img1}
            alt="Kale"
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
              <li>Excellent source of Vitamins A, C, and K</li>
              <li>High in calcium, potassium, and magnesium</li>
              <li>Rich in antioxidants like quercetin and kaempferol</li>
              <li>Low in calories but high in fiber and water content</li>
            </motion.ul>
          </div>
          <motion.img
            src={img2}
            alt="Nutritional properties of Kale"
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
            alt="Features of Kale"
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
              <li>Curly leaves with a slightly bitter and earthy taste</li>
              <li>Great for salads, smoothies, and as a cooked green</li>
              <li>Very hardy, can be grown in colder climates</li>
              <li>Rich green or purple leaves, adding color to dishes</li>
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
              <li>Raw in salads and smoothies</li>
              <li>Used in soups, stews, and sautés</li>
              <li>Baked into chips for a crunchy snack</li>
              <li>Added to juices and detox drinks</li>
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
              <li>Improves eye health due to its high vitamin A content</li>
              <li>Supports heart health and reduces cholesterol</li>
              <li>Rich in fiber, aiding in digestion</li>
              <li>Boosts immune function with its antioxidant properties</li>
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
            Fun Facts about Kale
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Did you know? Kale was one of the most popular vegetables in Europe during the Middle Ages and has made a comeback as a superfood in recent years. It’s frost-resistant and tastes sweeter after exposure to frost!
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
            Why You Should Eat More Kale
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Kale is one of the most nutrient-dense foods available, making it a great addition to any diet. Whether you enjoy it raw, cooked, or baked, it delivers a host of vitamins and minerals that are essential for overall health. Start adding more kale to your meals today!
          </motion.p>
        </section>
      </div>
    </>
  );
};

export default KalePage;
