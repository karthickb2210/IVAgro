import React from 'react'

function QuantityModal({selectedProduct,handleAddToSubscriptionBox,closeQuantityModal}) {
  return (
  <div className="fixed z-40 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white flex flex-col p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">
        Select Quantity for {selectedProduct.name}
      </h3>
      <div className="flex justify-around">
        <div className="flex flex-col space-y-4">
          <button
            className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
            onClick={() => handleAddToSubscriptionBox(30)}
          >
            30g
          </button>
          <button
            className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
            onClick={() => handleAddToSubscriptionBox(40)}
          >
            40g
          </button>
          <button
            className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
            onClick={() => handleAddToSubscriptionBox(50)}
          >
            50g
          </button>
          <button
            className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
            onClick={() => handleAddToSubscriptionBox(60)}
          >
            60g
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          <button
            className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
            onClick={() => handleAddToSubscriptionBox(70)}
          >
            70g
          </button>
          <button
            className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
            onClick={() => handleAddToSubscriptionBox(80)}
          >
            80g
          </button>
          <button
            className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
            onClick={() => handleAddToSubscriptionBox(90)}
          >
            90g
          </button>
          <button
            className="bg-teal-950 hover:bg-teal-700 text-white py-2 px-4 rounded"
            onClick={() => handleAddToSubscriptionBox(100)}
          >
            100g
          </button>
        </div>
      </div>
      <button
        className="mt-4 justify-center items-center bg-red-500 text-white py-2 px-4 rounded"
        onClick={closeQuantityModal}
      >
        Cancel
      </button>
    </div>
  </div>
  )
}

export default QuantityModal
