import React from 'react';
import './App.css';
import { Link, Route} from "react-router-dom";
import RegisterForm from "./Components/signup"
import Home from "./Components/Home"
import Navigation from "./Components/Navigation"
import Hero from './Components/Hero';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Home} /> 
      <Route path="/signup" component={RegisterForm} /> 
      <Footer/>
    </div>
  );
}
export default App;
