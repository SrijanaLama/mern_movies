import React, { useState, useEffect } from "react"

import { Card, Row, Col, Jumbotron, Image, Container } from "react-bootstrap"
import axios from "axios"




function MovieReview({ match }) {
  const [movieReview, setMovieReview] = useState({
    genre: [],
    actor: [],
    director: []
  });


  useEffect(() => {
    const retrieveMovie = () => {
        axios.get(`http://localhost:5000/movies/${match.params.id}`)
            .then(response => {
                console.log(response.data);
                setMovieReview(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    retrieveMovie();
}, [match.params.id]);

  return (
    <>
      <Container>
        <Jumbotron>
          <Row>
            <Col xs={6} md={3}>
              <Image src={movieReview.imageUrl} rounded />
            </Col>
            <Col  >
              <Card>
                <Card.Body>
                  <Card.Title>{movieReview.name}</Card.Title>
                  <Card.Text>
                    {movieReview.description}
                  </Card.Text>
                  <Row>
                    <Col>
                      <h6><b>Genre : </b>{movieReview.genre.join()}</h6>
                      <h6><b>Actor : </b>{movieReview.actor.join()}</h6>
                      <h6><b>Director : </b>{movieReview.director.join()}</h6>
                      <h6><b>Country : </b>{movieReview.country}</h6>
                    </Col>
                    <Col>
                      <h6><b>Duration : </b>{movieReview.duration} min</h6>
                      <h6><b>Release : </b>{movieReview.release}</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <Card >
                <Card.Body>
                  <Card.Title>Comments</Card.Title>
                  {/* comments section */}
                  <Card >
                  
                    <Card.Body>
                      <Card.Title>Srijana Lama</Card.Title>
                      <Card.Text>
                        {movieReview.description}
                      </Card.Text>
                    </Card.Body>

                  </Card>
                  <Card >
                    <Card.Body>
                      <Card.Title>Sarina Lama</Card.Title>
                      <Card.Text>
                        {movieReview.description}
                      </Card.Text>
                    </Card.Body>

                  </Card>
                  {/*end comments section */}
                </Card.Body>

              </Card>
            </Col>

          </Row>

        </Jumbotron>


      </Container>


    </>
  )
}
export default MovieReview;