import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'

import Home from "./pages/Home"
import Inventory from "./pages/Inventory"
import OurService from "./pages/OurService"
import AboutUs from "./pages/AboutUs"
import Contact from './pages/Contact'
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsConditions from "./pages/TermsConditions"
import RefundReturnPolicy from "./pages/RefundReturnPolicy"
// import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

// user Authenticate Routes
import Register from './pages/user/Register'
import Login from './pages/user/Login'
import UserProtectedRoute from './components/protectedRoutes/UserProtectedRoute'
import UserPublicRoute from './components/protectedRoutes/UserPublicRoute'

// admin Authenticate Routes
import AdminProtectedRoute from './components/protectedRoutes/AdminProtectedRoute'
import AdminPublicRoute from './components/protectedRoutes/AdminPublicRoute'
import AdminRegister from "./pages/admin/AdminRegister"
import AdminLogin from "./pages/admin/AdminLogin"

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={'/'} element={<Home />} />
        <Route path={'/inventory'} element={<Inventory />} />
        <Route path={'/services'} element={<OurService />} />
        <Route path={'/about'} element={<AboutUs />} />
        <Route path={'/contact-us'} element={<Contact />} />
        <Route path={'/privacy-policy'} element={<PrivacyPolicy />} />
        <Route path={'/terms-and-conditions'} element={<TermsConditions />} />
        <Route path={'/refund-return-policy'} element={<RefundReturnPolicy />} />
        {/* <Route path={'/products'} element={<Products />} /> */}
        <Route path={'/cart'} element={<Cart />} />
        <Route path={'/checkout'} element={<Checkout />} />

        {/* user protected routes */}
        {/* <Route path="user" element={<UserProtectedRoute />}>

        </Route> */}

        <Route element={<UserPublicRoute />}>
          <Route path={'register'} element={<Register />} />
          <Route path={'login'} element={<Login />} />
        </Route>

        {/* admin protected routes */}
        {/* <Route path="admin" element={<AdminProtectedRoute />}>

        </Route> */}

        <Route path="admin" element={<AdminPublicRoute />}>
          <Route path={'register'} element={<AdminRegister />} />
          <Route path={'login'} element={<AdminLogin />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
