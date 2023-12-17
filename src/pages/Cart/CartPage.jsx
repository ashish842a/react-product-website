import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import CartData from '../../components/Cart/CartData';
import FooterSection from '../../components/FooterSection/FooterSection';

const CartPage = () => {
  return (
    <div>
    
        {/* Start Header/Navigation */}
        <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
         <Navbar />
        </nav>
        {/* End Header/Navigation */}

        {/* Start Hero Section */}
        <div className="hero">
          <Hero/>
        </div>
        {/* End Hero Section */}

        {/* Cart Section */}
        <div className="untree_co-section before-footer-section">
          <CartData />
        </div>

        {/* Start Footer Section */}
        <footer className="footer-section">
          <FooterSection />
        </footer>
        {/* End Footer Section */}

        {/* Add necessary script tags */}
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/tiny-slider.js"></script>
        <script src="js/custom.js"></script>
     
    </div>
  );
};

export default CartPage;
