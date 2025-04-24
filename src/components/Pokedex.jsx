import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import "../css/base.css";
import "../css/grid.css";
import "../css/cards.css";
import "../css/pagination.css";

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const limit = 12;

  const location = useLocation();

  // Retrieve the previous page state from sessionStorage or React Router state
  useEffect(() => {
    const savedPage = sessionStorage.getItem("currentPage");
    const initialPage = location.state?.page || (savedPage ? parseInt(savedPage, 10) : 1);
    setPage(initialPage);
  }, [location]);

  // Save the current page to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("currentPage", page);
  }, [page]);

  // Fetch paginated Pokémon list
  useEffect(() => {
    const offset = (page - 1) * limit;
    setError(null); // Reset error state
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon list.");
        }
        return response.json();
      })
      .then((data) => {
        const promises = data.results.map((pokemon) =>
          fetch(pokemon.url)
            .then((res) => {
              if (!res.ok) {
                throw new Error(`Failed to fetch details for ${pokemon.name}.`);
              }
              return res.json();
            })
            .catch(() => null) // Handle individual Pokémon fetch errors
        );
        Promise.all(promises).then((details) => setPokemonList(details.filter(Boolean)));
      })
      .catch((err) => setError(err.message));
  }, [page]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="pokedex-container">
      <h1 className="main-heading">Pokédex</h1>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon, index) => (
          <Link
            to={`/pokemon/${pokemon.name}`}
            key={index}
            className={`pokemon-card ${pokemon.types[0]?.type?.name || "unknown"}`}
            state={{ page }} // Pass the current page state
          >
            <span className="pokemon-id">#{pokemon.id}</span>
            <h2 className="pokemon-name">{pokemon.name}</h2>
            {pokemon.sprites?.other?.["official-artwork"]?.front_default && (
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={`${pokemon.name} artwork`}
                className="pokemon-image"
              />
            )}
          </Link>
        ))}
      </div>
      <div className="pagination">
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
}