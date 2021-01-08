import React from 'react';
import { Link } from "react-router-dom";

function Details() {
    return (
      <div>
        <h1 class="text-dark">Search Result Details</h1>
        <Link to="/watchlist">Add to list</Link>
      </div>
    );
}

export default Details;