import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Lists() {
  return (
       <Container>
        <Row>
          <Col>
             <h1 className="text-dark">Lists</h1>
             <Link to="/watchlist">View List</Link>
          </Col>
        </Row>
      </Container>      
    );
}

export default Lists;