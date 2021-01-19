import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Recommend() {
  return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-dark">Recommendations</h1>
            <Link to="/random">Get Random</Link>
          </Col>
        </Row>
      </Container> 
    );
}

export default Recommend;