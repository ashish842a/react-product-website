import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

import WhyChooseSection from '../../components/WhyChooseSection/WhyChooseSection';
import Hero from '../../components/Hero/Hero';
import TeamSection from '../../components/TeamSection/TeamSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import FooterSection from '../../components/FooterSection/FooterSection';


const About = () => {
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

        {/* Start Why Choose Us Section */}
        <div className="why-choose-section" style={{marginTop:"7rem"}}>
         <WhyChooseSection />
        </div>
        {/* End Why Choose Us Section */}

        {/* Start Team Section */}
        <div className="untree_co-section">
          <TeamSection />
        </div>
        {/* End Team Section */}

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
    </>
  );
};

export default About;
