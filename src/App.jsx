import './App.css'
import { ToastContainer,toast } from 'react-toastify'
import Layout from './layout/Layout'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import Cart from './Components/Shop/components/Cart';
import { UserProgressContextProvider } from './Components/Shop/store/UserProgressContext';
import { CartContextProvider } from './Components/Shop/store/CartContext';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <UserProgressContextProvider>
    <CartContextProvider>
      <Layout />
      <Cart />
      <ToastContainer />
      </CartContextProvider>
      </UserProgressContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
