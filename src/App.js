import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PokemonPage} exact />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </Router>
  );
}
export default App;
