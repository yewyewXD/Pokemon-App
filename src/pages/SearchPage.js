import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Pokemon from "../components/Pokemon";
import NameContext from "../context/name-context";

export default function SearchPage() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPokemon, setLoadingPokemon] = useState(true);
  const [contextName, setContextName] = useState(null);
  const searchElRef = useRef();
  const contextType = useContext(NameContext);

  function handleSearch(name) {
    const query = searchElRef.current ? searchElRef.current.value : name;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
      .then((res) => {
        const newData = [
          {
            id: res.data.id,
            name: res.data.name,
            types: res.data.types.map((type) => type.type.name),
            abilities: res.data.abilities.map(
              (ability) => ability.ability.name
            ),
            imageFront: res.data.sprites.front_default,
            imageBack: res.data.sprites.back_default,
            moves: res.data.moves.map((move) => move.move.name),
          },
        ];
        console.log(res.data);
        setPokemonData(newData);
        setLoadingPokemon(false);
        document.getElementById("searchBar").value = "";
        return newData;
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const contextName = contextType.pokemonName;
    if (contextName) {
      console.log(contextName);
      handleSearch(contextName);
      contextType.setName(null);
    }
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
            id="searchBar"
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

      {/* Datalist*/}
      <datalist id="pokemonNames">
        {pokemonNames.map((pokemonName) => (
          <option value={pokemonName} key={pokemonName} />
        ))}
      </datalist>

      {/* Pokemon Profile */}
      {!loadingPokemon && <Pokemon pokemonData={pokemonData} />}
    </div>
  );
}