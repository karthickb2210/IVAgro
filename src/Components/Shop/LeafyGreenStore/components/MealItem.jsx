import { useContext, useState } from 'react';
import Button from './UI/Button.jsx';
import CartContext from '../../../../store/CartContext.jsx';
import GramSelector from './GramSelector.jsx';
import { toast } from 'sonner';
import { Image, Shimmer } from 'react-shimmer'

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  const [showGramSelector, setShowGramSelector] = useState(false);

  function handleAddMealToCart(grams,price) {
    cartCtx.addItem({ ...meal, grams,price });
    setShowGramSelector(false);
    toast.success("Item added to cart")
  }
  return (
    <>
    <div className="relative first:p-1 first:my-4 first:w-[96%] first:flex-nowrap">
  {!meal.available && (
    <div className="z-20 absolute top-1/3 right-1/3 rounded-xl flex items-center justify-center bg-red-500 text-white px-4 py-2">
      Out Of Stock
    </div>
  )}
      <li className={`meal-item  transition duration-600 ${
        meal.available ? "hover:scale-105" : "pointer-events-none disabled blur-sm"
      }`}>
        <article>
          <div className='w-full min-h-1/2'>
          <Image className='w-full h-1/3' src={meal.image} alt={meal.name} 
            fallback={<Shimmer width={360} height={240} />}
          />
          </div>
          
          <div>
            <h3>{meal.name}</h3>
            {/* <h3 className=' text-white'>{meal.available ? "Available" : "Out of stock"}</h3> */}
            <p className="meal-item-price text-md">
              {/* Call for Price */}
             Prices starts at ₹ {meal.price[0]}
            </p>
            
            {!showGramSelector && 
            <div className="meal-item-description text-sm">{meal.description}</div>
            }</div>
          <div className=" mb-4">
            {showGramSelector ? (
              <GramSelector
                price ={meal.price}
                onConfirm={handleAddMealToCart}
                onCancel={() => setShowGramSelector(false)}
              />
            ) : (
              <div className='flex items-center justify-center space-x-4 rounded-lg'>
              <Button onClick={() => setShowGramSelector(true)}>
                Add to Cart
              </Button>
              {/* <Button>
                Buy Now
              </Button> */}
              </div>
            )}
          </div>
        </article>
      </li>
      </div>
    </>
  );
}
