import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import SignupLogin from './Components/signupLoginPage';
import RestaurantList from './Components/RestaurantList';
import RestaurantSingle from './Components/RestaurantSingle';
import Footer from "./Components/Footer"




function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignupLogin} />
      <Route exact path="/restaurant-list" render={props => <RestaurantList  {...props} />} />
      <Route path="/restaurant-list/:id" render={props => <RestaurantSingle  {...props} />} />
      <Footer />
    </div>
  );
}
export default App;
