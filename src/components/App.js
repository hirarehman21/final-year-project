// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navigation from "./Navigation";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import Details from "./Details";
import Lists from "./Lists";
import Watchlist from "./Watchlist";
import Random from "./Random";
import Recommend from "./Recommend"

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";


// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/search" component={Search} />
          <Route path="/details" component={Details} />
          <Route path="/lists" component={Lists} />
          <Route path="/watchlist" component={Watchlist} />
          <Route path="/random" component={Random} />
          <Route path="/recommend" component={Recommend} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
