import React from 'react'
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import { CartContextProvider } from './store/CartContext.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';
import "./shop.css"
import NavBar from '../HomePage/NavBar/NavBar.jsx';

export default function Shop() {
  return (
    <>
    <NavBar />
    <div className='bod'>
     
        <Header />
        <Meals />
        <Checkout />
      
    </div>
    </>
  )
}
