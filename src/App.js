import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogData />} />       
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
