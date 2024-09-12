import React from "react";
import car1 from "/car1.png"
import car2 from "/car2.png"
import car3 from "/car3.jpg"
const AeroponicsFarming = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl  text-center mb-8">Aeroponics Farming</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Introduction */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">What is Aeroponics?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Aeroponics is a method of growing plants in an air or mist environment without the use of soil. It's a highly efficient system for growing plants, using minimal water and providing nutrients directly to the roots.
          </p>
        </div>
        {/* Photo with Hover Effect */}
        <div className="relative group">
          <img
            src={car2} // Replace with your image URL
            alt="Aeroponics"
            className="w-full h-full object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 rounded-lg flex items-center justify-center">
            <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Aeroponics System
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative group">
          <img
            src={car1} // Replace with your image URL
            alt="Benefits of Aeroponics"
            className="w-full h-full object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 rounded-lg flex items-center justify-center">
            <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Benefits of Aeroponics
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Benefits of Aeroponics</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Uses up to 90% less water than traditional farming.</li>
            <li>Faster plant growth due to direct nutrient delivery.</li>
            <li>Requires less space, making it ideal for urban farming.</li>
            <li>No soil needed, reducing pests and diseases.</li>
          </ul>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">How Does It Work?</h2>
        <div className="relative group">
          <img
            src={car3}// Replace with your image URL
            alt="How Aeroponics Works"
            className="w-full h-full object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 rounded-lg flex items-center justify-center">
            <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              How It Works
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700 mt-6">
          In an aeroponics system, plants are suspended in the air, and their roots are regularly misted with a nutrient-rich solution. This method ensures the roots receive maximum oxygen, which promotes faster growth and healthier plants.
        </p>
      </div>
    </div>
  );
};

export default AeroponicsFarming;
