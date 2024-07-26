import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home2 from './Components2/Home2';
import Success from './Components2/Success';

import Navbar from './Components/Navbar';
import AuthNavbar from './Components/AuthNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import Uploadproduct from './Components2/Dashboard/Uploadproduct';
import Sidebar from "./Sidebar.jsx"
import Dashboard from './Dashboard';
import Login from './Signup/Login';
import Signup from './Signup/Signup';
import ProtectedRoute from './ProtectedRoute';
import {isAuthenticated} from "./auth.js"
import Shop from './Components2/Shop';
import Showuser from './Components2/Dashboard/Showuser';
import Showproduct from './Components2/Dashboard/Showproduct';
import Singleproduct from './Components2/Singleproduct';
import Uploadcategory from './Components2/Dashboard/Uploadcategory'
import Footer from './Components/Footer.jsx';
import Searchproduct from './Components2/Searchproduct';
import Wishlist from './Components2/Wishlist';
import Cart from './Components2/Cart';
import Checkout from './Components2/Checkout';
import Showcategory from './Components2/Dashboard/Showcategory';
import User from './Components2/User';
import Aboutus from './Components2/Aboutus';
import Contactus from './Components2/Contactus';
import Blog from './Components2/Blog';
import Showsubcategory from './Components2/Dashboard/Showsubcategory';
import Addcolor from './Components2/Dashboard/Addcolor';
import ProductStockUpdater from './Components2/Dashboard/ProductStockUpdater';

// import Success from './Components2/Success';
const App = () => {
  
  return (
    <>
    
    <div>



<div className="app">
        {window.location.pathname.startsWith('/admin') || window.location.pathname.startsWith('/uploadcate') || window.location.pathname.startsWith('/uploadpro') || window.location.pathname.startsWith('/products') || window.location.pathname.startsWith('/users') ||  window.location.pathname.startsWith('/showcategory')  ||  window.location.pathname.startsWith('/showsubcategory')  ||  window.location.pathname.startsWith('/Addcolor')  ||  window.location.pathname.startsWith('/Addstock')   ? (
            <>
        <AuthNavbar />

    <div className="app d-flex  ">
      <Sidebar />
      <div className="main-content px-sm-4 py-3 w-100 ">
       
              <Routes>
                <Route path="/admin" element={<ProtectedRoute element={<Dashboard />} />} />
                <Route path="/uploadpro" element={<ProtectedRoute element={<Uploadproduct />} />} />
                <Route path="/users" element={<ProtectedRoute element={<Showuser />} />} />
                <Route path="/products" element={<ProtectedRoute element={<Showproduct />} />} />
                <Route path="/showcategory" element={<ProtectedRoute element={<Showcategory />} />} />
                <Route path="/showsubcategory" element={<ProtectedRoute element={<Showsubcategory />} />} />
                <Route path="/Addcolor" element={<ProtectedRoute element={<Addcolor />} />} />
                <Route path="/Addstock" element={<ProtectedRoute element={<ProductStockUpdater />} />} />


                <Route path="/uploadcate" element={<ProtectedRoute element={<Uploadcategory />} />} />
              </Routes>
            </div>
          </div>
          </>
        ) : (
          <>
        <Navbar />
          
          <div className="content">
            <Routes>
              <Route path="/" element={<Home2 />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/success" element={<Success />} />
              <Route path="/user" element={<User />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/blog" element={<Blog />} />


              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:product" element={<Singleproduct />} />
              <Route path="/search/:val" element={<Searchproduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/login" element={<Login />} />
            </Routes>
        <Footer />

          </div>
          </>
       
        )}
      </div>

    </div>
    
    </>
  );
}

export default App;