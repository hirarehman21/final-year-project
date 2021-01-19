import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Search() {
  return (
       <Container>
        <Row>
          <Col>
             <h1 className="text-dark">Search Results</h1>
             <Link to="/details">More details</Link>    
          </Col>
        </Row>
      </Container>       
    );
}

export default Search;