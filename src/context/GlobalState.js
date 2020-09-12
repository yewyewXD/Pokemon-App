import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  pokemonNames: null,
  pokemons: [],
  error: null,
  pokemonNamesLoading: true,
  pokemonLoading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getPokemonNames() {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=1050&offset=0"
      );
      dispatch({
        type: "GET_POKEMON_NAMES",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "SEARCH_ERROR",
        payload: "Search Error",
      });
    }
  }

  async function searchPokemon(name) {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

      dispatch({
        type: "SEARCH_POKEMON",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "SEARCH_ERROR",
        payload: "Search Error",
      });
    }
  }

  function clearPokemons() {
    dispatch({
      type: "CLEAR_POKEMONS",
      payload: null,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        pokemonNames: state.pokemonNames,
        error: state.error,
        pokemonNamesLoading: state.pokemonNamesLoading,
        pokemonLoading: state.pokemonLoading,
        pokemons: state.pokemons,
        getPokemonNames,
        searchPokemon,
        clearPokemons,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
