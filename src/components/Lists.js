import React from 'react';
import { Link } from "react-router-dom";

function Lists() {
    return (
      <div>
        <h1 class="text-dark">Lists</h1>
        <Link to="/watchlist">View List</Link>
      </div>
    );
}

export default Lists;