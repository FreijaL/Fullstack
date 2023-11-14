import { useState } from 'react';
import { BrowserRouter as router, route, routes } from 'react-router';
import './App.css';
import CartPage from './pages/users/CartPage';
import ProductPage from './pages/users/ProductPage';
import MenuPage from './pages/users/MenuPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import LandingPage from './pages/LandingPage';
import CheckoutPage from './pages/users/CheckoutPage';
import CategoryPage from './pages/users/CategoryPage';

import GuidePage from './pages/staff/GuidePage';
import KitchenPage from './pages/staff/KitchenPage';
import MenuStaffPage from './pages/staff/MenuStaffPage';
import HistoryPage from './pages/staff/HistoryPage';
import ServicePage from './pages/staff/Service';


function App() {

  return (
    <router>
      <routes>
        <route path="/" element={<LandingPage />} />
        <route path="/login" element={<LoginPage />} />
        <route path="/login/signup" element={<SignUpPage />} />
        <route path="/menu" element={<MenuPage />} />
        <route path="/category" element={<CategoryPage />} />
        <route path="/category/products" element={<ProductPage />} />
        <route path="/cart" element={<CartPage />} />
        <route path="/checkout" element={<CheckoutPage />} />


        <route path="/menu" element={<MenuStaffPage />} />
        <route path="/guide" element={<GuidePage />} />
        <route path="/kitchen" element={<KitchenPage />} />
        <route path="/service" element={<ServicePage />} />
        <route path="/history" element={<HistoryPage />} />
      </routes>
    </router>
  )
}

export default App
