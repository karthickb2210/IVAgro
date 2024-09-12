import { useContext } from 'react';

import Modal from './UI/Modal.jsx';
import CartContext from '../store/CartContext.jsx';
import Button from './UI/Button.jsx';

import UserProgressContext from '../store/UserProgressContext.jsx';
import CartItem from './CartItem.jsx';
import { Link, useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate =useNavigate()
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    localStorage.setItem("cart",JSON.stringify(cartCtx.items))
    const car = JSON.parse(localStorage.getItem("cart"))
    console.log(car)
    navigate("/cart/checkout")
    // userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === 'cart'}
      onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
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
      <p className="cart-total">₹ {cartTotal.toFixed(2)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (  
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
          )}
      </p>
    </Modal>
  );
}