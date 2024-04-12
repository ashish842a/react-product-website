import React from 'react';
import Hero from '../../components/Hero/Hero';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import FooterSection from '../../components/FooterSection/FooterSection';
import BlogDataSection from '../../components/BlogDataSection/BlogDataSection';


const BlogData = () => {
  return (
    <>
       
        {/* Start Hero Section */}
        <div className="hero">
         <Hero />
        </div>
        {/* End Hero Section */}

        {/* Start Blog Section */}
        <div className="blog-section2">
          <BlogDataSection />

        </div>
        {/* End Blog Section */}

        {/* Start Testimonial Slider */}
        <div className="testimonial-section before-footer-section">
          <TestimonialSection />
        </div>
        {/* End Testimonial Slider */}

        {/* Start Footer Section */}
        <footer className="footer-section">
          <FooterSection />
        </footer>
        {/* End Footer Section */}

        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/tiny-slider.js"></script>
        <script src="js/custom.js"></script>
     
    </>
  );
};

export default BlogData;
