import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-content">
        {/* Always navigate to the first page */}
        <Link
          to={{
            pathname: '/',
          }}
          state={{ page: 1 }}
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