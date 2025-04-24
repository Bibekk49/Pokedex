import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../css/detail.css";

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setError(null);
    setPokemon(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon data.");
        }
        return response.json();
      })
      .then((data) => setPokemon(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <div className="loading">{error}</div>;
  }

  if (!pokemon) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      {/* Background overlay */}
      <div className="popup-overlay" />
      {/* Popup card */}
      <div className="pokemon-detail">
        <h1 className="pokemon-name">{pokemon.name}</h1>
        <div className="pokemon-images">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={`${pokemon.name} front`}
            className="pokemon-sprite"
          />
        </div>
        <div className="pokemon-info">
          <p>
            <strong>Height:</strong> {pokemon.height}
          </p>
          <p>
            <strong>Weight:</strong> {pokemon.weight}
          </p>
          <p>
            <strong>Abilities:</strong>{" "}
            {pokemon.abilities.map((a) => a.ability.name).join(", ")}
          </p>
          <p>
            <strong>Types:</strong>{" "}
            {pokemon.types.map((t) => t.type.name).join(", ")}
          </p>
          <p>
            <strong>Stats:</strong>
          </p>
          <ul className="pokemon-stats">
            {pokemon.stats.map((stat, index) => {
              const statValue = stat.base_stat;
              const maxStat = 255;
              const percentage = (statValue / maxStat) * 100;

              let colorClass = "high";
              if (statValue < 50) colorClass = "low";
              else if (statValue < 100) colorClass = "medium";

              return (
                <li key={index}>
                  <div className="stat-label">
                    <span>{stat.stat.name}</span>
                    <span>{statValue}</span>
                  </div>
                  <div className="stat-bar">
                    <div
                      className="stat-bar-fill"
                      style={{
                        width: `${percentage}%`,
                        background: `linear-gradient(to right, red, orange, yellow, limegreen)`,
                        backgroundSize: `${100 / (percentage / 100)}% 100%`,
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={() => {
            const savedPage = location.state?.page || 1;
            sessionStorage.setItem("currentPage", savedPage);

            navigate("/", { state: { page: savedPage } });
          }}
          className="back-button"
        >
          Back to Pokedex
        </button>
      </div>
    </>
  );
}