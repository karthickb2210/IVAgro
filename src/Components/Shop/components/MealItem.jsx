import { useContext, useState } from 'react';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import GramSelector from './GramSelector.jsx';
import { toast } from 'react-toastify';

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  const [showGramSelector, setShowGramSelector] = useState(false);

  function handleAddMealToCart(grams,price) {
    cartCtx.addItem({ ...meal, grams,price });
    setShowGramSelector(false);
    toast.success("Item added to cart", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <>
      <li className="meal-item hover:scale-105 transition duration-600">
        <article>
          <img className='' src={meal.image} alt={meal.name} />
          <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-price">
              Call for Price
             {/* starts at ₹ {meal.price[0]} */}
            </p>
            {!showGramSelector && 
            <p className="meal-item-description">{meal.description}</p>
            }</div>
          <p className="meal-item-actions">
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
          </p>
        </article>
      </li>
    </>
  );
}
