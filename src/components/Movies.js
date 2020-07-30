import React, { useState, useEffect } from "react"

import { Container, Col, Image, Row } from "react-bootstrap"
import axios from 'axios'
import { Link } from 'react-router-dom'




function Movies({match}) {
    const [movies, setMovies] = useState([]);
    

    

    useEffect(() => {
        const retrieveMovies = () => {
            axios.get('http://localhost:5000/movies')
                .then(response => {
                    console.log(response.data);
                    setMovies(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        };
        retrieveMovies();
    }, []);


    return (
        <>
            <Container>
                <h4><span className="badge badge-info">movies</span></h4>

                <Row>

                    {movies.map(item => (
                        <div key={item._id}>
                            <Link to={`/movies/${item._id}`}>
                                <Col xs={6} md={4} >
                                    <Image src={item.imageUrl} rounded />
                                    <h4> {item.name}</h4>
                                </Col>

                            </Link>
                            </div>                   

                    ))}

                </Row>
            </Container>

        </>
    )
}
export default Movies