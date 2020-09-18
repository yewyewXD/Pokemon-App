import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import SearchPage from "./pages/SearchPage";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalProvider } from "./context/GlobalState";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Switch>
          <Redirect from="/Pokemon-App" to="/" exact />
          <Route path="/" component={PokemonPage} exact />
          <Route path="/search" component={SearchPage} />
          <Route path="/landing" component={LandingPage} />
        </Switch>
      </GlobalProvider>
    </BrowserRouter>
  );
}
export default App;
