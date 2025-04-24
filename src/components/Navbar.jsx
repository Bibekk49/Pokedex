import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/styles.css'; // Ensure global styles are linked

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Pokédex
      </Link>
      <Link to="/about" className="nav-link">
        About
      </Link>
    </nav>
  );
}
