import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Col from "react-bootstrap/Col";
// import InputGroup from "react-bootstrap/InputGroup";
// import FontAwesomeIcon from "react-bootstrap";

function Home() {
    return (
      <div>
        <Container className="mr-0 fluid">
          <Row className="justify-content-end">
            <h1 class="text-dark">Home</h1>
            <Col xs={{ span: 6, offset: 2 }}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mt-2 mr-sm-2"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Home;