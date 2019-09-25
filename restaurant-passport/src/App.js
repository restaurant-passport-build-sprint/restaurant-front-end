import React, { useState } from 'react';
import './App.css';
import { Link, Route} from "react-router-dom";

import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import SignupLogin from './Components/signupLoginPage';
import Hero from './Components/Hero';
import List from './Components/RestaurantList';
import RestaurantSingle from './Components/RestaurantSingle';


import RestaurantList from "./Components/RestaurantList"
import RestaurantSingle from "./Components/RestaurantSingle"


function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignupLogin} />
      <Route exact path="/restaurant-list" render={props => <List  {...props} />} />
      <Route path="/restaurant-list/:id" render={props => <RestaurantSingle  {...props} />} />

    </div>
  );
}
export default App;
