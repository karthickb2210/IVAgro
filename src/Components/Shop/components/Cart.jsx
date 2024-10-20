import { useContext } from 'react';

import Modal from './UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx';
import Button from './UI/Button.jsx';

import UserProgressContext from '../store/UserProgressContext.jsx';
import CartItem from './CartItem.jsx';

export default function Cart() {
  // const navigate =useNavigate()
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  console.log(cartCtx)

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    // navigate("/cart/checkout")
    // userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart shadow-xl"
      open={userProgressCtx.progress === 'cart'}
      onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
    >
      <h2 className='mb-8 text-3xl'>Your Cart</h2>
      <ul className='flex flex-col space-y-4 mt-6'>
        {cartCtx.items.map((item) => (
          <CartItem
          image={item.image}
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            grams={item.grams}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">Total Cost - ₹ {cartTotal.toFixed(2)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
       
        {cartCtx.items.length > 0 && (   
<a href='/cart/checkout'>          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
</a>       )}
          
      </p>
    </Modal>
  );
}