import React from "react";
import Home from "./components/Home";
import NotFound from "./pages/NotFound";
import FilmDetail from "./components/FilmDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main/main.scss";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/films/:id" component={FilmDetail} />
          {/* <Route path="/films/:id" component={FilmDetail} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
