import React from "react";
import PropTypes from "prop-types";
import "./../css/cards.css";

const PokemonCard = ({ name, image, type, abilities, number }) => {
  return (
    <div className="pokemon-card">
      <span className="pokemon-id">.{number.toString().padStart(3, '0')}</span>
      <img src={image} alt={name} className="pokemon-image" />
      <p className="pokemon-name">{name}</p>
      <p className="pokemon-type">
        <strong>Type:</strong> {type}
      </p>
      <div className="pokemon-abilities">
        <strong>Abilities:</strong>
        <ul>
          {abilities.map((ability, index) => (
            <li key={index} className="pokemon-ability">
              {ability}
            </li>
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
  number: PropTypes.number.isRequired,
};

export default PokemonCard;
