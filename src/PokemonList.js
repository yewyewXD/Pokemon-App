import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <>
      <div>
        {pokemon.map((p) => (
          <div key={p}>
            {p}
            <img
              className="image"
              src={`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/images/${p}.jpg`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
