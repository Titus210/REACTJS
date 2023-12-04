// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.style.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
      <button className="login-button">Login</button>
    </nav>
  );
};

export default Navbar;
