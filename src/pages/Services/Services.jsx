import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import FooterSection from '../../components/FooterSection/FooterSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import ProductSection from '../../components/productSection/ProductSection';
import WhyChooseUsSection from '../../components/Feature/Feature';

function Services() {
  return (
    <>
      {/* Navbar Component */}
      {/* Consider breaking this further if needed */}
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
          <Navbar />
        </nav>

      {/* Hero Section Component */}
      {/* Consider breaking this further if needed */}
      <div className="hero">
        <Hero />
      </div>

      {/* Why Choose Us Section Component */}
      {/* Consider breaking this further if needed */}
      <div className="why-choose-section">
        <WhyChooseUsSection />
      </div>

      {/* Product Section Component */}
      {/* Consider breaking this further if needed */}
      <div className="product-section">
        <ProductSection />
      </div>

      {/* Testimonial Slider Component */}
      {/* Consider breaking this further if needed */}
      <div className="testimonial-section">
        <TestimonialSection />
      </div>

      {/* Footer Component */}
      {/* Consider breaking this further if needed */}
      <footer className="footer-section">
       <FooterSection />
      </footer>

      {/* Scripts */}
      {/* Consider moving these to a separate JS file if needed */}
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/tiny-slider.js"></script>
      <script src="js/custom.js"></script>
    </>
  );
}

export default Services;
