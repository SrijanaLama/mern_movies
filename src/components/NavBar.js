import React,{useState} from "react"
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import axios from "axios";
import {useHistory} from "react-router-dom"




function NavBar() {

    const [search,setSearch] = useState();
    const history = useHistory();

    const handleChange = (e) =>{
        setSearch(e.target.value);
    }
   const submitSearch = (e) =>{
      //e.preventDefault();

       history.push({
        pathname: '/search',
        search: `?title=${search}`,
        state:  {id:1,name:"Srijana"}
       })
      

   }
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Watch Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" >Home</Nav.Link>
                        {/* <Nav.Link  href="/aboutus"> AboutUs  </Nav.Link> */}
                        <Nav.Link href="/movies"> Movies </Nav.Link>
                        <Nav.Link href="/series"> Series </Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                    </Nav>
                   
                    <Form inline onSubmit={submitSearch} >
                        <FormControl type="text" placeholder="Search"  onChange={handleChange} name="title" value={search} className="mr-sm-2"  />
                        <Button variant="outline-success" type="submit">Search</Button>
                        
                    </Form>
                    
                </Navbar.Collapse>
            </Navbar>

        </>

    )
}


export default NavBar