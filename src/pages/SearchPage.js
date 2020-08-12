import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function SearchPage() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchElRef = useRef();

  function handleSearch() {
    console.log(searchElRef.current.value);
  }

  useEffect(() => {
    // get all pokemon names
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
      .then((res) => {
        const pokemonNameList = res.data.results.map((result) => result.name);
        setPokemonNames(pokemonNameList);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <div>
      <Navbar currentPage="Search" />
      <input type="search" list="pokemonNames" ref={searchElRef} />
      <button onClick={handleSearch}>Search</button>
      <datalist id="pokemonNames">
        {pokemonNames.map((pokemonName) => (
          <option value={pokemonName} key={pokemonName} />
        ))}
      </datalist>
    </div>
  );
}
