import React, { useEffect, useRef, useContext } from "react";
import Navbar from "../components/Navbar";
import Pokemon from "../components/Pokemon";
import { GlobalContext } from "../context/GlobalState";

export default function SearchPage() {
  const nameElRef = useRef();
  const {
    searchPokemon,
    getPokemonNames,
    pokemonNames,
    pokemonNamesLoading,
  } = useContext(GlobalContext);

  useEffect(() => {
    // get all pokemon names
    getPokemonNames();
  }, []);

  function handleSearch() {
    const name = nameElRef.current.value;
    searchPokemon(name);
    document.getElementById("searchBar").value = "";
  }

  if (pokemonNamesLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="search-page text-center">
      <Navbar currentPage="Search" />
      <h1>Search Your Pokemon</h1>
      <div className="form-row w-100 m-0 d-flex justify-content-center mt-4">
        <div className="col-2">
          <input
            id="searchBar"
            type="search"
            list="pokemonNames"
            className="form-control"
            ref={nameElRef}
          />
        </div>
        <button
          className="btn btn-secondary btn-md py-0 px-3"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Datalist*/}
      <datalist id="pokemonNames">
        {pokemonNames.map((pokemonName) => (
          <option value={pokemonName} key={pokemonName} />
        ))}
      </datalist>

      {/* Pokemon Profile */}
      <Pokemon />
    </div>
  );
}
