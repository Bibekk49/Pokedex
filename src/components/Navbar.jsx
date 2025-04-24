import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <Link to="/" style={styles.link}>
        Pokédex
      </Link>
      <Link to="/about" style={styles.link}>
        About
      </Link>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    backgroundColor: '#282c34',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};