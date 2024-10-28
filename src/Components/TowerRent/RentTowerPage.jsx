import React from "react";
import { motion } from "framer-motion";
import Footer from "../HomePage/Footer/Footer";
import NavBar from "../HomePage/NavBar/NavBar";
import rent1 from "/rent1.png" 
import rent2 from "/rent2.png" 
const RentTowerPage = () => {
  return (
    <>
    <div className="bg-white text-black  mt-36">
      {/* Header Section */}
      <header className="py-10 text-center bg-green-600 text-white">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rent Your Own Aeroponic Tower
        </motion.h1>
        <motion.p
          className="mt-4 text-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Grow what you love for a whole year with minimal effort!
        </motion.p>
      </header>

      {/* Introduction Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">What is Aeroponic Farming?</h2>
        <p className="mt-6 text-lg">
          Aeroponic farming is a cutting-edge agricultural technique where plants are grown in a misty environment without soil. Our aeroponic towers allow you to grow fresh, organic produce, herbs, and more in a sustainable, space-efficient way.
        </p>
        <div className="mt-8">
          <img
            src={rent1}
            alt="Aeroponic Tower"
            className="w-full max-w-md mx-auto rounded shadow"
          />
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-semibold text-center">Why Rent an Aeroponic Tower?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 text-center">
          <motion.div
            className="p-6 bg-gray-100 rounded shadow-lg hover:scale-105 transform transition duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">Fresh Produce</h3>
            <p className="mt-4">Grow organic, pesticide-free produce year-round in your own space.</p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-100 rounded shadow-lg hover:scale-105 transform transition duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">Eco-Friendly</h3>
            <p className="mt-4">Save water, reduce waste, and lower your carbon footprint.</p>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-100 rounded shadow-lg hover:scale-105 transform transition duration-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">Low Maintenance</h3>
            <p className="mt-4">We take care of the technical setup and maintenance, so you can focus on growing.</p>
          </motion.div>
        </div>
      </section>

     

      {/* Customization Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">Customize Your Tower</h2>
        <p className="mt-6 text-lg">
          Choose what you want to grow—from leafy greens and herbs. You can even mix and match varieties to suit your dietary needs and preferences.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <img
            src={rent1}
            alt="Customize your plants"
            className="w-full h-auto rounded shadow hover:scale-105 transition transform duration-500"
          />
          <img
            src={rent2}
            alt="Choose your crops"
            className="w-full h-auto rounded shadow hover:scale-105 transition transform duration-500"
          />
        </div>
      </section>

       {/* CTA Section */}
       <section className="py-16 px-8 bg-green-500 text-white text-center">
        <h2 className="text-3xl font-semibold">Ready to Start Growing?</h2>
        <p className="mt-4">Join our growing community of aeroponic farmers today. Click the button below to rent your tower and choose your crops!</p>
        <button className="mt-6 px-8 py-4 bg-white text-green-600 font-bold rounded hover:bg-gray-200 hover:scale-105 transition transform duration-500">
          Rent a Tower Now
        </button>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold text-center sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 text-center text-gray-600">The questions that often arise in customer minds</p>
		<div className="space-y-4 text-center">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">What can I grow in the tower?</summary>
				<p className="px-20 py-6 pt-0 ml-4 -mt-4 text-gray-600">You can grow a variety of vegetables and herbs including lettuce, thyme, basil and more!. 
        You can also grow customizable plants of different types on the same tower.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">How much does it cost?</summary>
				<p className="px-20 py-6 pt-0 ml-4 -mt-4 text-gray-600">Our rental plans are affordable and vary based on tower size and crop selection. Please do fill the form above for a personalized quote. Our
        customer executive will call you within 2 business days</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">Can I rent it for a single harvest?</summary>
				<p className="px-20 py-6 pt-0 ml-4 -mt-4 text-gray-600"> Yes, It depends on the time of your selected crop to be grown</p>
			</details>
		</div>
	</div>
</section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold">What Our Customers Say</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded shadow">
            <p>"I’ve been renting an aeroponic tower for 6 months, and I love the fresh, homegrown vegetables. It’s super convenient!"</p>
            <p className="mt-4 font-bold">– Sarah</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <p>"The eco-friendly aspect was a huge selling point for me. Plus, the veggies taste amazing!"</p>
            <p className="mt-4 font-bold">– John</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <p>"I highly recommend renting a tower. It’s easy to maintain, and the produce is fresh and healthy."</p>
            <p className="mt-4 font-bold">– Emily</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default RentTowerPage;
