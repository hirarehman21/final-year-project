import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Watchlist() {
    return (
      <div>
        <Container className="">
          <Row className="justify-content-center">
            <Col>
            {/* make back button better */}
              <Link to="/lists">Back</Link> 
              <h1 class="text-dark">Watchlist</h1>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Watchlist;