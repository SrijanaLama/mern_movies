import React from 'react';
import './App.css';

import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom"

// import components
import AboutUs from "./components/AboutUs"
import Home from "./components/Home"
import Series from "./components/Series"
import Movies from "./components/Movies"
import MovieReview from "./components/MovieReview"
import Login from "./components/Login"
import Search from './components/Search'
import SignUp from "./components/SignUp"

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/series' component={Series} />
        <Route exact path='/movies' component={Movies} />
        <Route exact path='/movies/:id'  component={MovieReview} />
        <Route exact path='/login' component={Login} />
         <Route  exact path='/search' component={Search} />
        <Route exact path='/signup' component={SignUp} /> 
      </Switch>
    </>
  );
}

export default App;
