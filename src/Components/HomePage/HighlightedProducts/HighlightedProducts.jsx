import React from 'react';
import { Link } from 'react-router-dom';

const products1 = [
  {
    id: 1,
    name: 'Baby Spinach',
    imageUrl: 'https://t4.ftcdn.net/jpg/06/31/51/51/240_F_631515120_xZVJHLQ7G6HfTgeK2eMwBlJXvBfK6QTO.jpg', // Replace with actual image URL
    altText: 'Baby Spinach',
  },
  {
    id: 2,
    name: 'Kale',
    imageUrl: 'https://t3.ftcdn.net/jpg/04/30/77/28/240_F_430772833_4Po12niEIOxEXe9ulmlRUM2Z5VVsq7nk.jpg', // Replace with actual image URL
    altText: 'Kale',
  },
  {
    id: 3,
    name: 'Basil',
    imageUrl: 'https://t4.ftcdn.net/jpg/08/70/22/97/240_F_870229787_4j7LsGpWJjAYSRfsEymBfUijSUFCh94l.jpg', // Replace with actual image URL
    altText: 'Basil',
  },
];

const products2 = [
  {
    id: 1,
    name: 'Arugula',
    imageUrl: 'https://t3.ftcdn.net/jpg/05/61/80/16/240_F_561801605_BXZylBtM4OSmbIRuVZRX32aQdn7guWV2.jpg', // Replace with actual image URL
    altText: 'Arugula',
  },
  {
    id: 2,
    name: 'Pak Choi',
    imageUrl: 'https://t3.ftcdn.net/jpg/01/30/06/18/240_F_130061886_qchDVRKIl40W4c8V6ePygqcgqOPF4Lpl.jpg', // Replace with actual image URL
    altText: 'Pak Choi',
  },
  {
    id: 3,
    name: 'Lettuce',
    imageUrl: 'https://t3.ftcdn.net/jpg/01/03/07/26/240_F_103072613_toV709NM95mGl0ZclCXX7tSPuGnRptkY.jpg', // Replace with actual image URL
    altText: 'Lettuce',
  },
];

const HighlightedProducts = () => {
  return (
    <>
    <div className="flex justify-center w-full rounded space-x-8 my-10">
      {products1.map((product) => (
        <div key={product.id} className="flex mt-16 flex-col items-center  bg-white rounded-lg p-4 w-80">
        <div className='w-[212px] hover:scale-105 transition duration-700 h-[212px] flex items-center justify-center rounded-full shadow-xl '>
          <img
            src={product.imageUrl}
            alt={product.altText}
            className=" w-[208px] h-[208px] rounded-full object-cover"
          />
          </div>
          <h3 className="text-xl font-semibold mt-3">{product.name}</h3>
          <Link to={`/store`}>
          <button className="bg-black hover:text-gray-400 text-white px-8 py-2 mt-4 rounded-3xl hover:bg-gray-800">
            Shop Now
          </button>
          </Link>
        </div>
      ))}
    </div>
    <div className="flex justify-center w-full rounded space-x-8 my-10">
      {products2.map((product) => (
        <div key={product.id} className="flex flex-col items-center  bg-white rounded-lg p-4 w-80">
        <div className='w-[212px] hover:scale-105 transition duration-800  h-[212px] flex items-center justify-center rounded-full shadow-xl'>
          <img
            src={product.imageUrl}
            alt={product.altText}
            className=" w-[208px] h-[208px] rounded-full object-cover"
          />
          </div>
          <h3 className="text-xl font-semibold mt-3">{product.name}</h3>
          <Link to={`/store`}>
          <button className="bg-black hover:text-gray-400 text-white px-8 py-2 mt-4 rounded-3xl hover:bg-gray-800">
            Shop Now
          </button>
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default HighlightedProducts;
