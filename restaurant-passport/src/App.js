import React, { useState } from 'react';
import './App.css';
import { Link, Route} from "react-router-dom";
import RegisterForm from "./Components/signup"
import Home from "./Components/Home"
import Navigation from "./Components/Navigation"
import Hero from './Components/Hero';
import data from "./restaurant"
import RestaurantList from "./Components/RestaurantList"
import RestaurantSingle from "./Components/RestaurantSingle"


function App() {
  const [restaurant, setRestaurant] = useState(data)
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Home} /> 
      <Route path="/signup" component={RegisterForm} /> 
      <Route exact path="/restaurant-list" render={props => <RestaurantList items={restaurant} {...props} />} />
      <Route path="/restaurant-list/:id" render={props => <RestaurantSingle items={restaurant} {...props} />} />
    </div>
  );
}
export default App;
