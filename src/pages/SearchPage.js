import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function SearchPage() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchElRef = useRef();

  function handleSearch() {
    const search = searchElRef.current.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    // get all pokemon names
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
      .then((res) => {
        const pokemonNameList = res.data.results.map((result) => result.name);
        pokemonNameList.sort((a, b) => a.localeCompare(b));
        setPokemonNames(pokemonNameList);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div className="search-page text-center">
      <Navbar currentPage="Search" />
      <h1>Search Your Pokemon</h1>
      <div className="form-row w-100 m-0 d-flex justify-content-center mt-4">
        <div className="col-2">
          <input
            type="search"
            list="pokemonNames"
            className="form-control"
            ref={searchElRef}
          />
        </div>
        <button
          className="btn btn-secondary btn-md py-0 px-3"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Datalist start */}
      <datalist id="pokemonNames">
        {pokemonNames.map((pokemonName) => (
          <option value={pokemonName} key={pokemonName} />
        ))}
      </datalist>
      {/* Datalist end */}
    </div>
  );
}
