import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;

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
    <div>
      <h1>Pokédex</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link to={`/pokemon/${pokemon.name}`}>
              <img
                src={pokemon.sprites.front_default}
                alt={`${pokemon.name} sprite`}
              />
              <span>{pokemon.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}