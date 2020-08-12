import React from "react";

export default function PokemonList({ pokemons }) {
  return (
    <div className="pokemons">
      {pokemons.map((pokemon) => (
        <div className="pokemon" key={pokemon.name}>
          <h1>{pokemon.name}</h1>
          <img
            className="image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.match(/\d+/g)[1]
            }.png`}
            alt={pokemon.url}
          />
        </div>
      ))}
    </div>
  );
}
