export default (state, action) => {
  switch (action.type) {
    case "GET_POKEMON_NAMES":
      return {
        ...state,
        pokemonNamesLoading: false,
        pokemonNames: action.payload
          .map((result) => result.name)
          .sort((a, b) => a.localeCompare(b)),
      };

    case "SEARCH_POKEMON":
      return {
        ...state,
        pokemonLoading: false,
        pokemons: [
          ...state.pokemons,
          {
            id: action.payload.id,
            name: action.payload.name,
            types: action.payload.types.map((type) => type.type.name),
            abilities: action.payload.abilities.map(
              (ability) => ability.ability.name
            ),
            imageFront: action.payload.sprites.front_default,
            imageBack: action.payload.sprites.back_default,
            // moves: action.payload.moves.map((move) => move.move.name),
          },
        ],
      };

    case "CLEAR_POKEMONS":
      return {
        ...state,
        pokemonLoading: true,
        pokemons: [],
      };

    case "SEARCH_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
