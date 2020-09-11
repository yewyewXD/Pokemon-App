import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Pokemon() {
  const { pokemonLoading, pokemon: pokemonData } = useContext(GlobalContext);

  if (pokemonLoading) {
    return <div>waiting for search</div>;
  }

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
          </div>
        </div>
      ))}
    </>
  );
}
