import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import FooterSection from '../../components/FooterSection/FooterSection';
import ContactSection from '../../components/ContactSection/ContactSection';

const ContactPage = () => {
  return (
    <>
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
       <Navbar />
      </nav>

      <div className="hero">
        <Hero />
      </div>

      <div className="untree_co-section">
        <div className="container">
         ,<ContactSection />
        </div>
      </div>

      <footer className="footer-section">
        <FooterSection />
      </footer>

      {/* Bootstrap and custom scripts */}
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/tiny-slider.js"></script>
      <script src="js/custom.js"></script>
    </>
  );
};

export default ContactPage;
