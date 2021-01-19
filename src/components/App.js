// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import Details from "./Details";
import Lists from "./Lists";
import Watchlist from "./Watchlist";
import Random from "./Random";
import Recommend from "./Recommend";

import { API_KEY, API_URL} from "../config";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";

function App() {
  const [Movies, setMovies] = useState([]);

  // const getMovieRequest = async () => {
    

    // const response = await fetch(url);
    // const responseJson = await response.json();

    // console.log(`${ API_KEY }`);
    // console.log(responseJson);
    // setMovies(responseJson.results);
    // console.log(response.results[0]);
  // };

  useEffect(() => {
    const url = `${API_URL}movie/popular?api_key=${API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        console.log(response.results)
      setMovies(response.results)
     })
  }, [])
  // useEffect(() => {
  //   getMovieRequest().then(responseJson => setMovies(responseJson.results));
  // }, []);

  return (
    <Router>
      <div className="App">
        {/* {Movies[0] && <img src={`${IMAGE_URL}${Movies[0].backdrop_path}`} alt='movie' ></img>} */}
        <Navigation />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route exact path="/" render={(props) => <Home props={Movies }{...Movies} />} />
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
