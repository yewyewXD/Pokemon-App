import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import SearchPage from "./pages/SearchPage";
import NameContext from "./context/name-context";

function App() {
  const [pokemonName, setPokemonName] = useState(null);
  function handleSetName(name) {
    setPokemonName(name);
  }

  return (
    <BrowserRouter>
      <NameContext.Provider
        value={{
          pokemonName: pokemonName,
          setName: handleSetName,
        }}
      >
        <Switch>
          <Redirect from="/Pokemon-App" to="/" exact />
          <Route path="/" component={PokemonPage} exact />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </NameContext.Provider>
    </BrowserRouter>
  );
}
export default App;
