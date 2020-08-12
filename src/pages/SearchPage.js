import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchPage() {
  useEffect(() => {
    // get all pokemon names
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0")
      .then((res) => {
        const pokemonNameList = res.data.results.map((result) => result.name);
        console.log(pokemonNameList);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>hi</div>;
}
