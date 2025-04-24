import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/detail.css';


export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="pokemon-detail">
      <h1 className="pokemon-name">{pokemon.name}</h1>
      <div className="pokemon-images">
        <img src={pokemon.sprites.front_default} alt={`${pokemon.name} front`} />
        <img src={pokemon.sprites.back_default} alt={`${pokemon.name} back`} />
      </div>
      <div className="pokemon-info">
        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.map((a) => a.ability.name).join(', ')}</p>
        <p><strong>Types:</strong> {pokemon.types.map((t) => t.type.name).join(', ')}</p>
        <p><strong>Stats:</strong></p>
        <ul className="pokemon-stats">
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
              <div className="stat-label">
                <span>{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </div>
              <div className="stat-bar">
                <div
                  className="stat-bar-fill"
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }} // Assuming 255 is the max stat value
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}