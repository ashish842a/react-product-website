import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import FooterSection from '../components/FooterSection/FooterSection';



const Layout = ({ children }) => {
  return (
    <>
        <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
       <Navbar />
      </nav>
      {children}
      <FooterSection />
    </>
  );
};

export default Layout;
