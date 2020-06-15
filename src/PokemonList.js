import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <>
      <div>
        {pokemon.map((p) => (
          <>
            <h1 key={p.name}>{p.name}</h1>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                p.url.match(/\d+/g)[1]
              }.png`}
              key={p.url}
              alt={p.url}
            />
          </>
        ))}
      </div>
    </>
  );
}
