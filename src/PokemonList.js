import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <>
      <div>
        {pokemon.map((p) => (
          <div key={p}>
            <h1> {p} </h1>
            <img
              className="image"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
