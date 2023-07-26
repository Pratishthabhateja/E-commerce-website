import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Cart from './pages/Cart';

import {
   BrowserRouter as Router,
   Routes, // instead of "Switch"
   Route,
   Navigate,
 } from "react-router-dom";
//  import { useSelector } from "react-redux";
const App = ()=>
{
   const user = true
   return(
      <Router>
         <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/products/:category" element={<ProductList />} />
         <Route path="/product/:id" element={<Products />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
         <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
         </Routes>
      </Router>
   )
}
 
 export default App;