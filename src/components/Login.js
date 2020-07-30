import React,{useState}from "react"
import { Form, Row, Col, Image ,Button,Container} from "react-bootstrap"
import loginImg from "../images/login.jpg"
import { Link } from "react-router-dom"
 import axios from "axios";
 import {useHistory} from "react-router-dom"


function Login() {
    const initialUserState ={
        email:"",
        password:""

    };

    const [User,setUser]= useState(initialUserState);
    const history = useHistory();

    
    const handleInputChange = (event)=>{
        const {name,value} = event.target;
        setUser({...User,[name]:value});
      

    }
    const submitUser =(e)=>{
        e.preventDefault();
    
        axios.post("http://localhost:5000/users/login",User)
        .then(response =>{
            console.log(response.data);
            setUser(initialUserState);
            setTimeout(()=>{
                history.push("/home")

            },2000)
        })
        .catch(err=> alert(err.response.data));
         
      
    }
    return (
        <>
            <div className="signUpDiv">
                <Row>
                    <Col xs={6} md={3}>
                    <Container className="p-5">
                        <Row>
                            <Col>
                                <h3>Watch Movies</h3>
                            </Col>
                        </Row>
                        <Row>
                           
                            <Col>
                          
                                <Form  onSubmit={submitUser}>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name="email"  placeholder="Enter email" value={User.email} onChange={handleInputChange}/>
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" value={User.password} onChange={handleInputChange}/>
                                    </Form.Group>
                                     <h6>Dont have an Account ?<Link to = "/signup"> SignUp </Link></h6>
        
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                                
                            </Col>
                            

                        </Row>
                        </Container>

                    </Col>

                    <Col>
                        <Image className="loginImg" src={loginImg} />
                    </Col>
                </Row>
            </div>



        </>
    )
}
export default Login;