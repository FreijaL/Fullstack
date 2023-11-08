import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CartPage from './pages/users/CartPage';
import ProductPage from './pages/users/ProductPage';
import MenuPage from './pages/users/MenuPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import CheckoutPage from './pages/users/CheckoutPage';
import CategoryPage from './pages/users/CategoryPage';

import MenuStaffPage from './pages/staff/MenuStaffPage';
import GuidePage from './pages/staff/GuidePage';
import KitchenPage from './pages/staff/KitchenPage';
import HistoryPage from './pages/staff/HistoryPage';
import ServicePage from './pages/staff/ServicePage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/signup" element={<SignUpPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/menu" element={<MenuStaffPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
