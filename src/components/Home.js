import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IMAGE_URL} from "../config";
import MovieList from "../components/MovieList"
// import Col from "react-bootstrap/Col";
// import InputGroup from "react-bootstrap/InputGroup";
// import FontAwesomeIcon from "react-bootstrap";

function Home(props) {

  console.log(props); 

  const movies = Object.values(props);
  // const list = movies.map((movie) => <li key={movie.id}>{movie.title}</li>);
  const list = movies.map((movie) => 
    <MovieList title={movie.title} image={`${IMAGE_URL}w200${movie.poster_path}`}
    />);
     
    return (
      <Container className="fluid">
        <Row className="justify-content-end">
          <h1 className="text-dark">Home</h1>
          <Col xs={{ span: 6, offset: 2 }}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mt-2 mr-sm-2"
            />
          </Col>
        </Row>
        <Row className="justify-content-start">
          <Col>
            <h2 className="mt-4">Popular movies</h2>
          </Col>
        </Row>
        <Row >
          <ul>{list}</ul>         
        </Row>
      </Container>
    ); 
 
}
export default Home;