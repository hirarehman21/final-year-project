import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Random() {
  return (
      <Container>
        <Row>
          <Col>
              <h1 className="text-dark">Random suggestion</h1>
          </Col>
        </Row>
      </Container>       
    );
}

export default Random;