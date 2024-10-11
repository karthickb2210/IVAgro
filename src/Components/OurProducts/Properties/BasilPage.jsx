import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../../HomePage/NavBar/NavBar';
import img1 from "../img/basil1.jpg";
import img2 from "../img/basil2.jpg";
import img3 from "../img/basil3.jpg";

const BasilPage = () => {
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
            The Magic of Basil
          </motion.h1>
          <motion.p
            className="text-xl mt-4 text-gray-600"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Explore why basil is an aromatic herb essential in many cuisines.
          </motion.p>
        </header>

        {/* Image Section */}
        <section className="flex justify-center mb-12">
          <motion.img
            src={img1}
            alt="Basil"
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
              <li>Rich in Vitamin K, essential for bone health</li>
              <li>Contains antioxidants such as lutein and zeaxanthin</li>
              <li>High in beta-carotene and vitamin A</li>
              <li>Anti-inflammatory and antibacterial properties</li>
            </motion.ul>
          </div>
          <motion.img
            src={img2}
            alt="Nutritional properties of Basil"
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
            alt="Features of Basil"
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
              <li>Intense aroma with a slightly sweet and peppery flavor</li>
              <li>Commonly used fresh in salads, sauces, and pesto</li>
              <li>Quick-growing plant perfect for kitchen gardens</li>
              <li>Varieties like sweet basil, Thai basil, and purple basil</li>
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
              <li>Perfect for making fresh pesto or topping pizzas</li>
              <li>Blends into soups, stews, and tomato-based sauces</li>
              <li>Garnish for salads, sandwiches, and pasta dishes</li>
              <li>Infuses oils and vinegars for aromatic flavoring</li>
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
              <li>Boosts immune health with powerful antioxidants</li>
              <li>Supports cardiovascular health with its high vitamin K content</li>
              <li>Improves skin health due to its antibacterial properties</li>
              <li>Reduces inflammation, benefiting joint and gut health</li>
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
            Fun Facts about Basil
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Did you know? Basil was considered a symbol of love in ancient cultures and is a staple in Mediterranean cuisine, most famous for making pesto in Italian dishes!
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
            Why You Should Eat More Basil
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Basil is not only a flavorful herb but also a nutritional powerhouse. Whether you're adding it to your sauces, salads, or drinks, basil provides essential vitamins and antioxidants that benefit overall health. Start incorporating more fresh basil into your diet today!
          </motion.p>
        </section>
      </div>
    </>
  );
};

export default BasilPage;
