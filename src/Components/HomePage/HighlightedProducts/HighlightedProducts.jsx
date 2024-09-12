import React from 'react';
import { Link } from 'react-router-dom';

const HighlightedProducts = () => {
  const products = [
    {
      name: 'Spinach',
      image: 'https://t4.ftcdn.net/jpg/07/45/22/71/240_F_745227148_RA6rb43X0AHq9EKIdLgKuY4Lxsbr24li.jpg',
      price: '29.99',
      description: 'The Airgarden aeroponic system is very well-suited to growing spinach',
      availability: true,
    },
    {
      name: 'Basil Leaves',
      image: 'https://t3.ftcdn.net/jpg/08/09/10/68/240_F_809106884_efqSsfr2f30nmTxLxFeDseRtkK3ujdEE.jpg',
      price: '49.99',
      description: 'Another amazing product with great features.',
      availability: true,
    },
    {
      name: 'Lettuce',
      image: 'https://t4.ftcdn.net/jpg/05/52/00/83/240_F_552008369_c0LKehAUf6fZwZVTHCBYTr7jFOrEG3aL.jpg',
      price: '19.99',
      description: 'Affordable product with top-notch quality.',
      availability: true,
    },
  ];

  return (
    <div className="max-w-7xl py-12 px-4 mx-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl capitalize text-center mb-12 font-semibold text-gray-900 ">TOP SELLING PRODUCTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border-[3px] border-green-500 rounded-lg shadow-sm overflow-hidden relative transform transition-all duration-300 hover:shadow-md hover:scale-105 max-w-xs mx-auto"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transform hover:scale-110 hover:translate-y-2 transition-transform duration-300"
              />
              <span
                className={`absolute top-2 left-2 px-2 py-1 text-sm font-semibold rounded ${
                  product.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {product.availability ? (
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    In Stock
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm4-10a1 1 0 00-1-1H7a1 1 0 000 2h6a1 1 0 001-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Out of Stock
                  </span>
                )}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <div className="text-gray-600 mb-4">
                <p className="text-lg font-semibold text-gray-800 mb-1">₹{product.price}</p>
                <p>{product.description}</p>
              </div>
              <div className="mt-4 flex justify-between">
              <Link to={`/store`}>
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg flex items-center hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3a1 1 0 011-1h2a1 1 0 011 1v1h8V3a1 1 0 011-1h2a1 1 0 011 1v1h-1.586l1.293 1.293a1 1 0 01-.293.707L17 7v8a1 1 0 01-1 1H4a1 1 0 01-1-1V7L1.293 5.293a1 1 0 01-.293-.707L2 4H1V3zM4 8v7h10V8H4zm2 5a1 1 0 112 0 1 1 0 01-2 0zm6 0a1 1 0 112 0 1 1 0 01-2 0z" />
                  </svg>
                  Visit our store
                </button></Link>
                
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightedProducts;
