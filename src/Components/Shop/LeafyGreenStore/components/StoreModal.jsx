import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StoreModal = ({storeModal,setStoreModal}) => {

  const closeModal = () => setStoreModal(false);

  const navigate = useNavigate();
  const triggerAction = (id) =>{
    if(id===1){
        navigate("/subscription")
    }else if(id===2){
      navigate("/nav")
    }else{
      closeModal();
    }
  }

  const cardData = [
    {
      id: 1,
      name: "Fixed Subscription",
      point1: "Choose your regular consumption weight per week (starts @ 250g)",
      point2:
        "We deliver assorted leafy greens & microgreens of the highest quality. (sums up to your preferred weight/week during our harvest day)",
    },
    {
      id: 2,
      name: "Flexi Subscription",
      point1:
        "Choose your frequency (our delivery starts at bi-weekly, weekly and we also tailor to your needs as well)",
      point2:
        "Select your preferred leafy greens and micro greens from our catalouge for your chosen weight.",
    },
    {
      id: 3,
      name: "Website Orders",
      point1: "We fulfill orders placed on our website on an Ad-hoc basis",
      point2:
        "Check out our store for stocks and order greens right away.",
    },
    // Add more cards as needed
  ];

  return (
    <>
      {/* Modal */}
      {storeModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg relative max-w-screen-xl max-h-screen w-full p-16 overflow-y-scroll">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              &times;
            </button>

            {/* Cards Section */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {cardData.map((card, index) => (
                <article
                  key={index}
                  className="flex flex-col items-start justify-between border-4 border-black bg-gradient-to-b from-white via-gray-100 to-gray-200 p-6 shadow-[8px_8px_0_0_#000] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-b hover:from-gray-200 hover:to-white shadow-[8px_8px_0_0_#000] transition-shadow duration-500 ease-in-out hover:shadow-[12px_12px_0_0_#000]"
                >
                  <div className="group relative">
                    <h3 className="group-hover:text-red-500 mt-3 text-2xl font-black uppercase leading-6 text-black transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-blue-800">
                      {card.name}
                    </h3>
                    <p className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600">
                      {card.point1}
                    </p>
                    <p className="text-md mt-5 border-l-4 border-red-500 pl-4 leading-6 text-gray-800 transition-all duration-500 ease-in-out transform hover:border-blue-500 hover:text-gray-600">
                      {card.point2}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center justify-center gap-x-2">
                    <button
                      className="hover:underline bg-green-600 px-4 py-2 rounded-2xl text-white "
                      onClick={() => triggerAction(card.id)}
                    >
                      Explore
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreModal;
