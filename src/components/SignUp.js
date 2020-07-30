import React, { useState } from "react"
import { Form, Row, Col, Image, Button, Container,Alert } from "react-bootstrap"
import loginImg from "../images/login.jpg"
import axios from "axios";
import {useHistory} from "react-router-dom"



function SignUp() {

    const initialUserState = {
        name: "",
        email: "",
        password: ""

    };
    const history = useHistory();

    const [User, setUser] = useState(initialUserState);
    const [messageState, setMessageState] = useState(false);
    const [message, setMessage] = useState();
    const [messageVariant, setMessageVariant] = useState();


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...User, [name]: value });


    }

    const submitUser = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/users/add", User)
            .then(response => {
                console.log(response.data);
                setMessage(response.data)
                setUser(initialUserState);
                setMessageState(true);
                setMessageVariant("success");
                setTimeout(()=>{
                    history.push("/login")

                },2000)
            })
            .catch(err => {
                console.log(err)
                setMessage(err.response.data)
                 setMessageState(true);
                 setMessageVariant("danger");
            });



    }

    return (
        <>
            <div className="signUpDiv">
                <Row>
                    <Col>
                        <Image className="loginImg" src={loginImg} />
                    </Col>

                    <Col xs={8} md={8}>
                        <Container className="p-5">
                            <Row>
                                <Col>
                                    <h3>Watch Movies</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form onSubmit={submitUser} >
                                        <Form.Group controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" name="email" value={User.email} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group controlId="formGroupName">
                                            <Form.Label>User Name</Form.Label>
                                            <Form.Control type="text" placeholder="UserName" name="name" value={User.name} onChange={handleInputChange} />
                                        </Form.Group>
                                        <Form.Group controlId="formGroupPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" name="password" value={User.password} onChange={handleInputChange} />
                                        </Form.Group>
                                        {/* <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="repassword"  onChange={handleInputChange}/>
                                    </Form.Group> */}

                                        <Button variant="primary" type="submit"  >
                                            Submit
                                    </Button>
                                    </Form>
                                    {
                                        messageState ?
                                            <Alert variant={messageVariant} className="mt-3">
                                                <Alert.Heading>{message}</Alert.Heading>
                                            </Alert> : null
                                    }




                                </Col>

                            </Row>
                        </Container>
                    </Col>


                </Row>
            </div>



        </>
    )
}
export default SignUp;