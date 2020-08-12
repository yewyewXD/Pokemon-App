import React from "react";
import { Link } from "react-router-dom";

export default function PokemonList({ pokemons }) {
  return (
    <div className="container">
      <div className="pokemon-list d-flex justify-content-around align-items-center flex-wrap">
        {pokemons.map((pokemon) => (
          <div className="pokemon card m-sm-5 m-1" key={pokemon.name}>
            <img
              className="card-img-top w-75 mx-auto"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.url.match(/\d+/g)[1]
              }.png`}
              alt="pokemon.url"
            />

            <div className="pokemon-name card-body border-top text-center">
              <h5 className="card-title text-capitalize m-0">{pokemon.name}</h5>
              {/* <Link to="/" className="btn btn-primary">
              See Detail
            </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
