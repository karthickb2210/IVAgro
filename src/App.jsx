import './App.css'
import Layout from './layout/Layout'
import { BrowserRouter } from 'react-router-dom';
import Cart from './Components/Shop/components/Cart';
import { UserProgressContextProvider } from './Components/Shop/store/UserProgressContext';
import { CartContextProvider } from './Components/Shop/store/CartContext';
import { Toaster } from 'sonner';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <UserProgressContextProvider>
    <CartContextProvider>
      <Layout />
      <Cart />
      <Toaster position='top-center' className='w-1/4 mt-12' richColors />
      </CartContextProvider>
      </UserProgressContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
