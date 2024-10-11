import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../../HomePage/NavBar/NavBar';
import img1 from "../img/pakchoi1.jpg";
import img2 from "../img/pakchoi2.jpg";
import img3 from "../img/pakchoi3.jpg";

const PakChoiPage = () => {
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
            The Wonders of Pak Choi
          </motion.h1>
          <motion.p
            className="text-xl mt-4 text-gray-600"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover the versatility and nutrition of Pak Choi.
          </motion.p>
        </header>

        {/* Image Section */}
        <section className="flex justify-center mb-12">
          <motion.img
            src={img1}
            alt="Pak Choi"
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
              <li>Excellent source of folate, calcium, and iron</li>
              <li>Low in calories but nutrient-dense</li>
              <li>Contains antioxidants like beta-carotene and flavonoids</li>
            </motion.ul>
          </div>
          <motion.img
            src={img2}
            alt="Nutritional properties of Pak Choi"
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
            alt="Features of Pak Choi"
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
              <li>Crisp stalks with tender, dark green leaves</li>
              <li>Perfect for stir-fries, soups, and steaming</li>
              <li>Mild, slightly sweet, and peppery flavor</li>
              <li>Can be eaten raw or cooked</li>
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
              <li>Ideal for stir-fries and Asian dishes</li>
              <li>Great in soups and broths</li>
              <li>Steamed as a healthy side dish</li>
              <li>Can be grilled, roasted, or braised</li>
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
              <li>Supports immune health with high vitamin C content</li>
              <li>Promotes strong bones with calcium and vitamin K</li>
              <li>Improves digestion due to high fiber content</li>
              <li>Rich in antioxidants that help fight inflammation</li>
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
            Fun Facts about Pak Choi
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Did you know? Pak Choi is a type of Chinese cabbage that has been cultivated for over 1,500 years. It’s incredibly versatile and a staple in many Asian cuisines!
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
            Why You Should Eat More Pak Choi
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Pak Choi is not only packed with nutrients, but it's also easy to cook and adds a delightful crunch to any meal. Its mild flavor makes it a versatile ingredient that pairs well with many dishes. Add more Pak Choi to your diet today for both its health benefits and delicious taste!
          </motion.p>
        </section>
      </div>
    </>
  );
};

export default PakChoiPage;
