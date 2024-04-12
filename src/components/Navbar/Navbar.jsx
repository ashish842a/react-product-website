// Import the necessary components and functions
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';

import UserIcon from "../../images/user.svg";
import CartIcon from "../../images/cart.svg";

const navLinks = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Shop', href: '/shop' },
  { id: 3, title: 'About us', href: '/about' },
  { id: 4, title: 'Services', href: '/services' },
  { id: 5, title: 'Products', href: '/products' },
  // { id: 5, title: 'Blog', href: '/blog' },
  { id: 6, title: 'Contact us', href: '/contact' },
];

function Navbar() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if token is not present in localStorage
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     // Redirect to the login page
  //     navigate('/login');
  //   }
  // }, [navigate]);

  const isUserLoggedIn = () => {
    // Check if token is present in localStorage
    const token = localStorage.getItem('token');
    return !!token; // Return true if token is present, otherwise false
  };

  const handleLogout = () => {
    // Remove token and user from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Navigate to the login page or any other desired route
    navigate('/');
  };

  return (
    <div className="container">
      <Link to="/" className="navbar-brand">
        Logo<span>.</span>
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          {navLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <Link to={link.href} className="nav-link">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
  {isUserLoggedIn() ? (
    // User is logged in, show profile and logout
   <>
   <Nav className="ml-auto">
      <NavDropdown title={<img src={UserIcon} alt="User" />} id="basic-nav-dropdown">
        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>

    <li>
    <Link to="/cart" className="nav-link">
      <img src={CartIcon} alt="Cart" />
    </Link>
  </li>
   </>
  ) : (
    // User is not logged in, show login and register
    <Nav className="ml-auto">
      <li className='button-13'>
        <Link to="/login" >
          Login
        </Link>
      </li>
      <li className='button-13'>
        <Link to="/register" >
          Register
        </Link>
      </li>
    </Nav>
  )}
  
</ul>
      </div>
    </div>
  );
}

export default Navbar;
