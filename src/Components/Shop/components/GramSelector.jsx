import { useState } from 'react';
import Button from './UI/Button.jsx';

const gramOptions = [30, 50, 100, 200, 500];

export default function Product({ onConfirm, onCancel, price }) {
  const [selectedGram, setSelectedGram] = useState(30);
  const [hover,setHover] = useState(true)
  console.log(price)

  const handleSelect = (gram) => {
    setSelectedGram(gram);
  };

  

  return (
    <div className="product-container flex flex-col items-center space-y-4 p-2">
      {/* Product Image */}
      

      {/* Gram Selector positioned above the Add to Cart button */}
      <div className="gram-selector relative z-20 flex flex-col items-center bg-white shadow-lg p-3 rounded-md space-y-2 max-w-xs">
        <div className="flex flex-wrap justify-center gap-2">
          {gramOptions.map((gram,index) => (
            <div
            onMouseOver={()=>setHover(false)}
            onMouseLeave={()=>setHover(true)}
              key={gram}
              onClick={() => handleSelect(gram)}
              className={`cursor-pointer transition-colors duration-200 ease-in-out rounded-full px-3 py-1 text-xs border-2 ${
                selectedGram === gram
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-gray-200 border-gray-300 text-gray-700'
              } hover:bg-green-500 hover:text-white hover:border-green-500`}
              style={{ minWidth: '50px', textAlign: 'center' }}
            >
             {hover ? `${gram} g` : `₹ ${price[index]}`  }
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Button className="text-xs font-bold" onClick={() => onConfirm(selectedGram, price[gramOptions.indexOf(selectedGram)])}>
            Confirm
          </Button>
          <Button className="text-xs font-bold bg-red-500 hover:bg-red-600" onClick={onCancel}>Cancel</Button>
        </div>
      </div>

      {/* Add to Cart Button */}
      {/* <Button className="add-to-cart-btn mt-4 w-full text-center bg-green-500 text-white py-2 rounded-lg">
        Add to Cart
      </Button> */}
    </div>
  );
}
