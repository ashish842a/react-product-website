import React from 'react';
// import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import ProductSection from '../../components/productSection/ProductSection';

import WeHelpSection from '../../components/WeHelpSection/WeHelpSection';
import PopularProduct from '../../components/PopularProduct/PopularProduct';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import Navbar from '../../components/Navbar/Navbar';
import WhyChooseSection from '../../components/WhyChooseSection/WhyChooseSection';


const Home = () => {
  return (
    <>
      {/* Start Header/Navigation */}
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
       <Navbar />
      </nav>
      {/* End Header/Navigation */}

      {/* Start Hero Section */}
      <div className="hero">
        <Hero />
      </div>
      {/* End Hero Section */}

      {/* Start Product Section */}
      <div className="product-section">
        <ProductSection />
      </div>
      {/* End Product Section */}

      {/* Start Why Choose Us Section */}
      <div className="why-choose-section">
       <WhyChooseSection />
      </div>
      {/* End Why Choose Us Section */}

      {/* Start We Help Section */}
      <div className="we-help-section">
        <WeHelpSection />
      </div>
      {/* End We Help Section */}

      {/* Start Popular Product */}
      <div className="popular-product">
       <PopularProduct />
      </div>
      {/* End Popular Product */}

      {/* Start Testimonial Slider */}
      <div className="testimonial-section">
       <TestimonialSection />
      </div>
      {/* End Testimonial Slider */}

      {/* Start Blog Section */}
      <div className="blog-section">
       <BlogSection />
      </div>
      {/* End Blog Section */}

      {/* Start Footer Section */}
      <footer className="footer-section">
        <FooterSection />
      </footer>
      {/* End Footer Section */}
    </>
  );
};

export default Home;
