import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect from="/Pokemon-App" to="/" exact />
        <Route path="/" component={PokemonPage} exact />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </Router>
  );
}
export default App;
