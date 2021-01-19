import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MovieList(props) {
  console.log(props);
  //  console.log(Object.values(props)[0].title);
  //  console.log(Object.values(props)[0].poster_path);

  return (
    <Container>
      <Row>
        <Col>
          <img alt="movie" src={props.image}></img>
          <h3>{props.title}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieList;
