import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import SearchPage from "./pages/SearchPage";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Switch>
          <Redirect from="/Pokemon-App" to="/" exact />
          <Route path="/" component={PokemonPage} exact />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </GlobalProvider>
    </BrowserRouter>
  );
}
export default App;
