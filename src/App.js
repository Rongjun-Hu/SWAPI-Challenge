import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ShowFilmInfo from "./components/ShowFilmInfo";
import FilmDetail from "./pages/FilmDetail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/main/main.scss";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/films/:id" component={FilmDetail} />
          <Route path="/films/:id" component={FilmDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
