import React from "react"
import {Carousel} from "react-bootstrap"

 import img1 from "../images/slideImage1.jpg"
import img2 from "../images/slideImage2.jpg"
import img3 from "../images/slideImage3.jpg"

function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img  
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Coming Soon</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={img2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Book Your Tickets</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Give Reviews</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Home