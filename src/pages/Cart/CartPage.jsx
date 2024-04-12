import React from 'react';
import Hero from '../../components/Hero/Hero';
import CartData from '../../components/Cart/CartData';
import FooterSection from '../../components/FooterSection/FooterSection';

const CartPage = () => {
  return (
    <div>
    
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
