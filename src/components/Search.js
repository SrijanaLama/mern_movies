import React,{useEffect,useState}from "react"
import { Row, Col, Container,Image } from "react-bootstrap"
import axios from 'axios'
import { Link } from 'react-router-dom'

function Search({location}) {

    // useEffect(() => {
    //     console.log(location.search)
    // },[]
    // );
    const [movieSearch, setmovieSearch] = useState([]);

    useEffect(() => {
        const retrieveMovie = () => {
            axios.get(`http://localhost:5000/movies/${location.search}`)
                .then(response => {
                    console.log(response.data);
                    setmovieSearch(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        };
        retrieveMovie();
    }, [location.search]);
    return (
        <>
            <Container>
            { Array.isArray(movieSearch) && movieSearch.length ?  <h4><span className="badge badge-info">Search </span></h4> :
            <h4><span className="badge badge-info">Sorry </span></h4>}
                {/* <h4><span className="badge badge-info">Search </span></h4> */}

                <Row>

                    {movieSearch.map(item => (
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


export default Search;
