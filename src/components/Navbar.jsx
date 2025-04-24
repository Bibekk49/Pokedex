import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
  const location = useLocation();
  const currentPage = sessionStorage.getItem('currentPage') || 1; // Retrieve the current page from sessionStorage

  return (
    <nav className="navbar">
      <div className="nav-content">
        {/* Pass the current page state to the Pokedex link */}
        <Link
          to={{
            pathname: '/',
          }}
          state={{ page: parseInt(currentPage, 10) }}
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Pokédex
        </Link>
        <Link
          to="/about"
          className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}