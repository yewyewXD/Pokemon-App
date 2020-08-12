import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";

export default function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  useEffect(() => {
    setLoading(true);
    let cancel;

    // get all pokemon
    axios
      .get(currentPageUrl, {
        cancelToken: axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        const pokemonList = res.data.results;
        const pokemonCount = res.data.count;
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemons(pokemonList);
        setLoading(false);
        // console.log(res);
      })
      .catch((err) => console.log(err));

    // if is called again
    return () => cancel();
  }, [currentPageUrl]);

  if (loading) return "Loading...";

  return (
    <div className="App">
      <h1>All Pokemon</h1>
      <p>created by yewyewXD</p>
      <PokemonList pokemons={pokemons} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </div>
  );
}
