import React from "react";
import PropTypes from "prop-types";
import "./PokemonCard.css";

const PokemonCard = ({ name, image, type, abilities }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={`${name}`} className="pokemon-image" />
      <h2 className="pokemon-name">{name}</h2>
      <p className="pokemon-type">
        <strong>Type:</strong> {type}
      </p>
      <div className="pokemon-abilities">
        <strong>Abilities:</strong>
        <ul>
          {abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PokemonCard;
