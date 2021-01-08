import React from 'react';
import { Link } from "react-router-dom";

function Search() {
    return (
      <div>
        <h1 class="text-dark">Search Results</h1>
        <Link to="/details">More details</Link> 
      </div>
    );
}

export default Search;