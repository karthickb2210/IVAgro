import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";
import { useNavigate } from "react-router-dom";

export default function Cart() {

  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const navigate = useNavigate();

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleAddItems() {
    navigate("/store")
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    // navigate("/cart/checkout")
    // userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart shadow-xl"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2 className="mb-8 text-3xl">Your Cart</h2>
      <ul className="flex flex-col space-y-4 mt-6">
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
        <button
          onClick={handleAddItems}
          className=" bg-teal-800 px-4 text-white rounded-md"
        >
          Add Items
        </button>

        {cartCtx.items.length > 0 && (
          <a href="/cart/checkout">
            {" "}
            <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
          </a>
        )}
      </p>
    </Modal>
  );
}
