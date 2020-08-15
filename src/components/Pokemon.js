import React from "react";

export default function Pokemon({ pokemonData }) {
  return (
    <>
      {pokemonData.map((pokemon) => (
        <div
          className="pokemon-profile all-center flex-column mt-5 py-5"
          key={pokemon.id}
        >
          <div className="pokemon-profile-image">
            <img src={pokemon.imageFront} alt={pokemon.imageFront} />
            <img src={pokemon.imageBack} alt={pokemon.imageBack} />
          </div>
          <div className="pokemon-profile-detail">
            <h5>Name:</h5>
            <p>{pokemon.name}</p>
            <br />
            <h5>Abilities:</h5>
            {pokemon.abilities.map((ability, index) => (
              <p key={index}>{ability}</p>
            ))}
            <br />
            <h5>Moves:</h5>
            {pokemon.moves.map((move, index) => (
              <p key={index}>{move}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
