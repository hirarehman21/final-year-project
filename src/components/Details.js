import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Details() {
  return (
       <Container>
        <Row>
          <Col>
             <h1 className="text-dark">Search Result Details</h1>
             <Link to="/watchlist">Add to list</Link>  
          </Col>
        </Row>
      </Container>        
    );
}

export default Details;