import React from 'react';
import '../css/base.css';


export default function About() {
  return (
    <div className="about-container">
      <h1 className="page-title">About</h1>
      <p className="about-text">
        This Pokédex app was built using <strong>React</strong> and data from the <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">PokéAPI</a>.
        <br /><br />
        It supports multiple pages, routing, detailed Pokémon stats, and beautiful card-based design using dynamic data fetching.
      </p>
    </div>
  );
}
