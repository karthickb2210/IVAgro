import React from 'react';

const FreeShippingProgress = ({ cartTotal }) => {
  const totalAmount = 500;
  const percent = (cartTotal/totalAmount)*100; 
  // Threshold for free shipping
  const progress = Math.min(percent,100) ;
  const eligible = progress>=100;

  return (
    <div className="p-4 max-w-md mx-auto">
      <p className={`text-lg ${eligible && `text-green-600`} font-semibold text-center mb-2`}>
        {eligible 
          ? "You're eligible for free delivery!" 
          : `Add products worth ₹${totalAmount-cartTotal} to avail free shipping`}
      </p>
      <div className="relative mt-2 h-4 rounded-full bg-gray-300 ">
        <div
          className="h-4 rounded-full bg-green-700 transform transition-all duration-500 ease-in-out"
          style={{ width: `${progress}%` }}
        />
        <div
          className="z-10 absolute top-1/2 transform -translate-y-1/2"
          style={{ left: `${progress}%`, transition: 'left 0.5s ease-in-out' }}
        >
          <div className="h-7 w-7 bg-white border-2 z-20 border-green-700 rounded-full flex items-center justify-center transform -translate-x-1/2">
            <img src='/cart.svg' alt='cart' className='w-5 h-5' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeShippingProgress;
