import { createContext, useReducer } from 'react';

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    // Destructure id, grams, and price from the action item
    const { id, grams, price } = action.item;
  
    // Find the index of the item in the cart based on both id and grams
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === id && item.grams === grams
    );
  
    // Create a copy of the current items in the cart
    const updatedItems = [...state.items];
  
    if (existingCartItemIndex > -1) {
      // Item already exists with the same id and grams, update quantity
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1, // Increment the quantity
        price: existingItem.price // Keep the same price
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // Item does not exist, add new item with the specified grams and price
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    const val = {...state, items:updatedItems};
    console.log(val.items)
    localStorage.setItem("cart",JSON.stringify(val.items))
    // Return the updated state with the modified items array

    return { ...state, items: updatedItems };
  }
  

  if (action.type === 'REMOVE_ITEM') {

    const {id,grams} = action.item;
    console.log(action.item)
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === id && item.grams== grams
    );
    console.log(existingCartItemIndex)
    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    const val = {...state, items:updatedItems};
    console.log(val.items)
    localStorage.setItem("cart",JSON.stringify(val.items))
    return { ...state, items: updatedItems };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, 
    { items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [] });

  function addItem(item) {
    const items = dispatchCartAction({ type: 'ADD_ITEM', item });
    
  }

  function removeItem(item) {
    dispatchCartAction({ type: 'REMOVE_ITEM', item });
  }

  function clearCart() {
    dispatchCartAction({ type: 'CLEAR_CART' });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;