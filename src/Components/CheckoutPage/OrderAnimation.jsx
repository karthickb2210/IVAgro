import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";


function OrderAnimation() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 backdrop-blur-sm">
      {/* Main Container */}
      <div className="relative bg-white p-6 rounded-lg shadow-2xl transform transition duration-500 ease-out animate-slide-in-up">
      
        {/* Ribbon Animation */}
        <div className="absolute -top-6 -left-8 w-36 h-10 bg-yellow-400 rounded-full animate-ribbon-fly" />

        {/* Check Icon and Text */}
        <div className="flex flex-col items-center">
          <CheckCircleIcon className="w-12 h-12 text-green-500 animate-pop" />
          <h2 className="mt-4 text-xl font-semibold text-gray-800 animate-fade-in">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-500 animate-fade-in">
            Thank you for your purchase.
          </p>
        </div>

        {/* Confetti */}
        <div className="absolute -top-10 left-2 w-2 h-2 bg-red-500 rounded-full animate-confetti-burst" />
        <div className="absolute -top-10 right-2 w-2 h-2 bg-blue-500 rounded-full animate-confetti-burst delay-100" />
        <div className="absolute -bottom-10 left-8 w-2 h-2 bg-green-500 rounded-full animate-confetti-burst delay-200" />
        <div className="absolute -bottom-10 right-8 w-2 h-2 bg-yellow-500 rounded-full animate-confetti-burst delay-300" />
      </div>
    </div>
  );
}

export default OrderAnimation;
