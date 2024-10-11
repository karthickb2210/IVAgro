import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainPage from '../Components/HomePage/MainPage'
import Shop from '../Components/Shop/Shop.jsx'
import Farm from '../Components/Farm/Farm.jsx'
import CheckOut from '../Components/CheckoutPage/CheckOut.jsx'
import RentTowerPage from '../Components/TowerRent/RentTowerPage.jsx'
import SubscriptionPage from '../Components/Subscriptions/SubscriptionPage.jsx'
import PaymentPage from '../Components/PaymentPage/PaymentPage.jsx'
import DashBoard from '../Components/Shop/components/Profile/DashBoard.jsx'
import OurProductsPage from '../Components/OurProducts/OurProductsPage.jsx'
import BabySpinachPage from '../Components/OurProducts/Properties/BabySpinachPage.jsx'
import NotFoundPage from '../Components/HomePage/NotFoundPage/NotFoundPage.jsx'
import SubscriptionCheckOut from '../Components/Subscriptions/SubscriptionCheckOut.jsx'
import LoginSignup from '../Components/RegisterPage/LoginSignup.jsx'
import RecipePage from '../Components/OurProducts/Recipes/RecipePage.jsx'
import StockDisplay from '../Components/Stocks/StockDisplay.jsx'
import ArugulaPage from '../Components/OurProducts/Properties/ArugulaPage.jsx'
import PakChoiPage from '../Components/OurProducts/Properties/PakChoiPage.jsx'
import KalePage from '../Components/OurProducts/Properties/KalePage.jsx'
import BasilPage from '../Components/OurProducts/Properties/BasilPage.jsx'
import Footer from '../Components/HomePage/Footer/Footer.jsx'

export default function Layout() {
  return (
    <>
    
        <BrowserRouter>
             
            <Routes>
                <Route path='/' element={<MainPage />}></Route>
                <Route path='/store' element={<Shop />}></Route>
                <Route path='/farm' element={<Farm />}></Route>
                <Route path='/cart/checkout' element={<CheckOut />}></Route>
                <Route path='/towerRent' element={<RentTowerPage />}></Route>
                <Route path='/subscription' element={<SubscriptionPage />}></Route>
                <Route path='/pay' element={<PaymentPage />}></Route>
                <Route path='/dash' element={<DashBoard />}></Route>
                <Route path='/product' element={<OurProductsPage />}></Route>
                <Route path='/Arugula' element={<ArugulaPage />}></Route>
                <Route path='/Pak Choi' element={<PakChoiPage />}></Route>
                <Route path='/Kale' element={<KalePage />}></Route>
                <Route path='/basil' element={<BasilPage />}></Route>
                <Route path='/recipe/Baby_Spinach' element={<RecipePage />}></Route>
                <Route path='/Baby_Spinach' element={<BabySpinachPage />}></Route>
                <Route path='/subscription-checkout' element={<SubscriptionCheckOut />}></Route>
                <Route path='/register' element={<LoginSignup />}></Route>
                <Route path="/stocks" element={<StockDisplay />}></Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
            
        </BrowserRouter>
        <Footer />
        <footer className="py-1 bg-gray-800 text-white text-center">
        <p>© 2024 IronValley Agronomy - All rights reserved</p>
      </footer>
    </>
  )
}
