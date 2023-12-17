import React from 'react';
import { Link } from 'react-router-dom';

import UserIcon from "../../images/user.svg";
import CartIcon from "../../images/cart.svg";

const navLinks = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Shop', href: '/shop' },
  { id: 3, title: 'About us', href: '/about' },
  { id: 4, title: 'Services', href: '/services' },
  { id: 5, title: 'Blog', href: '/blog' },
  { id: 6, title: 'Contact us', href: '/contact' },
];

function Navbar() {
  return (
    <div className="container">
      <Link to="/" className="navbar-brand">
        Prod<span>.</span>
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
          <li>
            <Link to="#" className="nav-link">
              <img src={UserIcon} alt="User" />
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              <img src={CartIcon} alt="Cart" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
