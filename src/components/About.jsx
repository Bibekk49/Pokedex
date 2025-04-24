import React from 'react';
import '../css/about.css';

export default function About() {
  return (
    <div className="about-container">
      <h1>About This Pokédex</h1>
      <p>
        Welcome to the Pokédex – a simple, interactive web application that allows you to browse and learn about Pokémon.
        This project was created as part of a Web Development course assignment.
      </p>

      <h2>🔧 Technologies Used</h2>
      <ul>
        <li><strong>React</strong> – For building the UI using components</li>
        <li><strong>Vite</strong> – For lightning-fast development and builds</li>
        <li><strong>React Router</strong> – For client-side routing between pages</li>
        <li><strong>PokéAPI</strong> – For retrieving real Pokémon data</li>
        <li><strong>CSS</strong> – For styling individual parts of the UI</li>
      </ul>

      <h2>💡 Features</h2>
      <ul>
        <li>Pagination for browsing Pokémon</li>
        <li>Detailed Pokémon stats and images</li>
        <li>Responsive design and themed type colors</li>
      </ul>

      <p className="footer-note">Created by Bibek and Razz.</p>

      {/* Footer with GitHub logo and link */}
      <footer className="footer">
        <a 
          href="https://github.com/Bibekk49/Pokedex" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
            alt="GitHub Logo" 
            className="github-logo"
          />
          View on GitHub
        </a>
      </footer>
    </div>
  );
}