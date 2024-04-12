import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './Styles/styles.css';
import './Styles/bootstrap.min.css';
import './Styles/tiny-slider.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ContactPage from './pages/Contact/ContactPage';
import Services from './pages/Services/Services';
import BlogData from './pages/BlogData/BlogData';
import Shop from './pages/Shop/Shop';
import CartPage from './pages/Cart/CartPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProductSection from './components/ProductSectionNew/ProductSection';

const isAuthenticated = () => {
  // Your authentication logic here, e.g., checking if the user is logged in
  // return localStorage.getItem('token').length>0 ? true : false;
  return true
};

function App() {
  return (
   
      <Routes>

        <Route path="*" element={<Navigate to ="/" />}/>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/blog"
          element={isAuthenticated() ? <BlogData /> : <Navigate to="/login" />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart"  element={isAuthenticated() ? <CartPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={isAuthenticated() ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductSection />} />
      </Routes>
 
  );
}

export default App;
