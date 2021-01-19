import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Login() {
  return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-dark">Login</h1>
            <Link to="/"><Button className="mt-5">Login</Button></Link>    
          </Col>
        </Row>
      </Container>      
    );
}

export default Login;