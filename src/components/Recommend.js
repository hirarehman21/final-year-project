import React from 'react';
import { Link } from "react-router-dom";

function Recommend() {
    return (
      <div>
        <h1 class="text-dark">Recommendations</h1>
        <Link to="/random">Get Random</Link>
      </div>
    );
}

export default Recommend;