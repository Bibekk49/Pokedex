import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import '../css/base.css';
import '../css/grid.css';
import '../css/cards.css';
import '../css/pagination.css';


export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    const offset = (page - 1) * limit;
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .then((data) => {
        const promises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        Promise.all(promises).then((details) => setPokemonList(details));
      });
  }, [page]);

  return (
    <div className="pokedex-container">
      <h1 className="main-heading">Pokédex</h1>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon, index) => (
          <Link to={`/pokemon/${pokemon.name}`} key={index} className={`pokemon-card ${pokemon.types[0].type.name}`}>
            <span className="pokemon-id">#{pokemon.id}</span>
            <h2 className="pokemon-name">{pokemon.name}</h2>
            {pokemon.sprites?.front_default && (
              <img
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name} sprite`}
                className="pokemon-image"
              />
            )}
          </Link>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
