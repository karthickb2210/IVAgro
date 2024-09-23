import React, { useState } from "react";

const ProductCard = ({data}) => {

    

  // Sample recipes array
  
  return (
    <div className="flex justify-center items-center mb-36">
      <div className="relative overflow-hidden rounded-xl shadow-lg group">
        {/* Card Image */}
        <img
          src={data.image}
          alt="Card Image"
          className="w-[340px] h-[300px] object-fill transform transition-transform duration-500 group-hover:scale-110"
        />

        {/* Title */}
        <div className="absolute bottom-0 left-0 w-full px-4 py-2 rounded-xl bg-green-400 bg-opacity-80 text-white text-center">
          <h2 className="text-xl font-semibold">{data.name}</h2>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        
            <div className="flex flex-col text-center" >
              <a href="/recipe"
                
                className="px-4 py-2 bg-green-500 rounded-lg m-2 hover:bg-green-600"
              >
                Recipes
              </a>
              <a href="/babySpinach"
               className="px-4 py-2 bg-yellow-500 rounded-lg m-2 hover:bg-yellow-600">
                Properties
              </a>
            </div>
                </div>
      </div>
    </div>
  );
};

export default ProductCard;
