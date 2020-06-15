import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div className="pokemons">
      {pokemon.map((p) => (
        <div className="pokemon" key={p.name}>
          <h1>{p.name}</h1>
          <img
            className="image"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              p.url.match(/\d+/g)[1]
            }.png`}
            alt={p.url}
          />
        </div>
      ))}
    </div>
  );
}
