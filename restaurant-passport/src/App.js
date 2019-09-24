import React, { useState } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import RegisterForm from "./Components/signup";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import RestaurantList from './Components/RestaurantList';
import data from "./restaurant";
import RestaurantSingle from "./Components/RestaurantSingle";

function App() {
  const [restaurant, setRestaurant] = useState(data)
  console.log("restaurant props", restaurant)
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={RegisterForm} />
      <Route exact path="/restaurant-list" render={props => <RestaurantList itemsList={restaurant} {...props} />} />
      <Route path="/restaurant-list/:id" render={props => <RestaurantSingle itemsSingle={restaurant} {...props} />} />
      <Footer />
    </div>
  );
}
export default App;
