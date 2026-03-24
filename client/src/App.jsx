import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast"; // 🔥 ADD THIS
import Layout from './components/layout'

import Home from "./pages/Home"
import Inventory from "./pages/Inventory"
import OurService from "./pages/OurService"
import AboutUs from "./pages/AboutUs"
import Contact from './pages/Contact'
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsConditions from "./pages/TermsConditions"
import RefundReturnPolicy from "./pages/RefundReturnPolicy"
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";

// user Authenticate Routes
import Register from './pages/user/Register'
import Login from './pages/user/Login'
import UserPublicRoute from './components/protectedRoutes/UserPublicRoute'

// admin Authenticate Routes
import AdminPublicRoute from './components/protectedRoutes/AdminPublicRoute'
import AdminRegister from "./pages/admin/AdminRegister"
import AdminLogin from "./pages/admin/AdminLogin"

// user dashboard routes
import DashboardLayout from "./pages/userDashboard/DashboardLayout";
import DashboardHome from "./pages/userDashboard/DashboardHome";
import Orders from "./pages/userDashboard/Orders";
import Profile from "./pages/userDashboard/Profile";

const App = () => {
  return (
    <>
      {/* 🔥 TOASTER (GLOBAL) */}
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>

        <Route element={<Layout />}>

          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/services" element={<OurService />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/refund-return-policy" element={<RefundReturnPolicy />} />

          {/* SHOP */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* CART */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />

          {/* USER AUTH */}
          <Route element={<UserPublicRoute />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          {/* USER DASHBOARD */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* ADMIN AUTH */}
          <Route path="/admin" element={<AdminPublicRoute />}>
            <Route path="register" element={<AdminRegister />} />
            <Route path="login" element={<AdminLogin />} />
          </Route>

        </Route>

      </Routes>
    </>
  )
}

export default App