import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Login() {
    return (
      <div>
        <h1 class="text-dark">Login</h1>
        <Link to="/"><Button className="mt-5">Login</Button></Link>       
      </div>
    );
}

export default Login;