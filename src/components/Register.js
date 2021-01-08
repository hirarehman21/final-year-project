import React from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Register() {
    return (
      <div>
        <h1 class="text-dark">Register</h1>
        <Link to="/"><Button className="mt-5">Register</Button></Link> 
      </div>
    );
}

export default Register;