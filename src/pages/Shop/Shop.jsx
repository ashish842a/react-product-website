import React from 'react';
import Hero from '../../components/Hero/Hero';
import FooterSection from '../../components/FooterSection/FooterSection';
import ProductSection from '../../components/productSection/ProductSection';
import PopularProduct from '../../components/PopularProduct/PopularProduct';

const Shop = () => {
  return (
    <div>
      
        {/* Start Hero Section */}
        <div className="hero">
         <Hero />
        </div>
        {/* End Hero Section */}

        {/* Product Section */}
        <div className="untree_co-section product-section before-footer-section">
        <ProductSection />
      
        </div>

          {/* Start Popular Product */}
      <div className="popular-product">
       <PopularProduct />
      </div>
      {/* End Popular Product */}

        {/* Start Footer Section */}
        <footer className="footer-section" style={{marginTop:"5rem"}}>
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

export default Shop;
