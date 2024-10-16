// src/App.js
import React from 'react';
import { FaLeaf, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const GreenMuscle = () => {
  return (
    <div className="bg-teal-950 min-h-screen font-sans scroll-smooth">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <img src="/green-muscle-logo.jpg" alt="Green Muscle Logo" className="mx-auto w-40 mb-4" />
          <h1 className="text-5xl font-extrabold tracking-tight">The Green Muscle</h1>
          <p className="text-xl mt-2 italic">Take cue from the #Herbivore_Badass</p>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Discover the power of Aerophonic tower technology, revolutionizing the way hydroponic farming works in urban settings.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">About Green Muscle</h2>
            <p className="text-lg text-gray-600 mt-4">
              A first-of-its-kind commercial hydroponic farm in Chennai using state-of-the-art "Aerophonic tower" technology for efficient and sustainable farming.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 text-lg text-gray-700 leading-relaxed">
              At Green Muscle, we prioritize innovative farming techniques that produce healthier, fresher greens without the use of harmful chemicals. With a focus on urban sustainability, our farm delivers high yields in a compact space, reducing the carbon footprint.
            </div>
            <div>
              <img src="/rent1.png" alt="Green Muscle Farm" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Technology</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Our cutting-edge "Aerophonic Tower" technology optimizes plant growth by providing an ideal environment with aerated nutrient solutions. This system maximizes space, water efficiency, and yield while ensuring premium-quality produce.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Farm Sneak Peek</h2>
          <p className="text-lg text-gray-600 mb-12">Take a look at our hydroponic setup that produces fresh, high-quality greens.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/car1.jpg" alt="Farm Image 1" className="rounded-lg shadow-lg" />
            <img src="/car2.jpg" alt="Farm Image 2" className="rounded-lg shadow-lg" />
            <img src="/car3.jpg" alt="Farm Image 3" className="rounded-lg shadow-lg" />
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-4">Proudly brought to you by Ironvalley Agronomy Private Limited</p>
          <p className="text-lg text-gray-600 mb-2">No 40, P G Street, Egmore, Chennai 600008</p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <FaPhoneAlt className="text-primary text-xl" />
            <p className="text-lg text-gray-800">(+91) 87544 61696</p>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <FaEnvelope className="text-primary text-xl" />
            <a href="mailto:info@ironvalleyagro.in" className="text-lg text-blue-600 hover:underline">info@ironvalleyagro.in</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreenMuscle;
