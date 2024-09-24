import { useState } from 'react';
import Button from './UI/Button.jsx';

const gramOptions = [50, 100, 150, 250, 500, 1000];

export default function Product({ onConfirm, onCancel, price }) {
  const [selectedGram, setSelectedGram] = useState(50);

  const handleSelect = (gram) => {
    setSelectedGram(gram);
  };

  return (
    <div className="product-container flex flex-col items-center space-y-4 p-4">
      {/* Product Image */}
      

      {/* Gram Selector positioned above the Add to Cart button */}
      <div className="gram-selector relative z-40 flex flex-col items-center bg-white shadow-lg p-3 rounded-md space-y-2 max-w-xs">
        <div className="flex flex-wrap justify-center gap-2">
          {gramOptions.map((gram) => (
            <div
              key={gram}
              onClick={() => handleSelect(gram)}
              className={`cursor-pointer transition-colors duration-200 ease-in-out rounded-full px-3 py-1 text-xs border-2 ${
                selectedGram === gram
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-gray-200 border-gray-300 text-gray-700'
              } hover:bg-green-500 hover:text-white hover:border-green-500`}
              style={{ minWidth: '50px', textAlign: 'center' }}
            >
              {gram}g
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button className="text-xs" onClick={() => onConfirm(selectedGram, price[gramOptions.indexOf(selectedGram)])}>
            Confirm
          </Button>
          <Button className="text-xs" onClick={onCancel}>Cancel</Button>
        </div>
      </div>

      {/* Add to Cart Button */}
      {/* <Button className="add-to-cart-btn mt-4 w-full text-center bg-green-500 text-white py-2 rounded-lg">
        Add to Cart
      </Button> */}
    </div>
  );
}
