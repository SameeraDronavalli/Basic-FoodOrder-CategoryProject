import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { CartProvider } from './context/context.js';
import FooterPage from './components/Footer/Footer.js';
import MyHomePage from './components/Mainpage/Mainpage.js';
import RestaurantMenu from './components/RestaurantMenu/RestaurantMenu.js';
import RestaurantList from './components/Restaurant List/Restaurant List.js';
import HeaderPage from './components/Header/Header.js';
import Barkas from './components/Restaurant List/Barkas.js';
import LoginPage from './components/Loginpage/LoginPage.js';
import UserCart from './usercart.js';


function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <HeaderPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
          <Routes>
            <Route path="/login" element={<LoginPage  setIsAuthenticated={setIsAuthenticated}/>} />
            <Route path="/" element={<MyHomePage />} />
            <Route path="/list" element={<RestaurantList />} />
            <Route path="/details" element={<RestaurantMenu />} />
            <Route path="/barkas" element={<Barkas />} />
            <Route path="/cart" element={<UserCart />} />
          </Routes>
          <FooterPage />
        </BrowserRouter>
      </CartProvider>
    </>
  )
}
export default App;

