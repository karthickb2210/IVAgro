import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../../HomePage/NavBar/NavBar';
import img1 from "../img/babys1.jpg"
import img2 from "../img/babys2.jpg"
import img3 from "../img/babys3.jpg"

const BabySpinachPage = () => {
  return (
    <>
    <NavBar />
    <div className=" mx-16 mt-32 bg-white text-black p-8 space-y-16">
      {/* Header */}
      <header className="text-center mb-12 ">
        <motion.h1 
          className="text-5xl font-extrabold text-green-700"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          The Wonders of Baby Spinach
        </motion.h1>
        <motion.p 
          className="text-xl mt-4 text-gray-600"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Discover why this leafy green is a superfood for your health.
        </motion.p>
      </header>

      {/* Image Section */}
      <section className="flex justify-center mb-12">
        <motion.img 
          src={img1} 
          alt="Baby Spinach" 
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
            <li>Contains Iron, Magnesium, and Potassium</li>
            <li>High in antioxidants like lutein and beta-carotene</li>
            <li>Low in calories, but high in fiber and water content</li>
          </motion.ul>
        </div>
        <motion.img 
          src={img2}
          alt="Nutritional properties of Baby Spinach"
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
          alt="Features of Baby Spinach"
          className=" h-[200px] w-[200px] rounded-xl shadow-lg hover:scale-105 transition-transform"
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
            <li>Tender, small leaves packed with flavor</li>
            <li>Perfect for eating raw or cooked</li>
            <li>Quick to grow and easy to cultivate</li>
            <li>Available year-round, making it easy to include in meals</li>
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
            <li>Blended in smoothies for an extra nutritional boost</li>
            <li>Added to soups, stews, and pasta dishes</li>
            <li>Steamed or sautéed as a side dish</li>
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
            <li>Improves vision and eye health</li>
            <li>Boosts immunity and fights inflammation</li>
            <li>Supports digestion and gut health</li>
            <li>Strengthens bones and heart health</li>
          </motion.ul>
        </div>
      </section>

      {/* Benefits Section */}
      
      {/* Fun Facts Section */}
      <section className="text-center bg-green-100 p-8 rounded-xl mb-16">
        <motion.h2 
          className="text-3xl font-semibold text-green-700"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Fun Facts about Baby Spinach
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Did you know? Baby spinach is often harvested after just 30 days of growth and has more tender leaves than mature spinach. Its versatility and mild flavor make it a favorite for many dishes!
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
          Why You Should Eat More Baby Spinach
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Baby spinach is a powerhouse of nutrients. Whether it's for a quick salad, a smoothie boost, or a healthy side dish, this green has something to offer for everyone. Start adding baby spinach to your meals today for a delicious and healthy lifestyle!
        </motion.p>
      </section>
    </div>
    </>
  );
};

export default BabySpinachPage;
