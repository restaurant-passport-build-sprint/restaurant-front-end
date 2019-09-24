import React from 'react';
import './App.css';
import { Link, Route} from "react-router-dom";
import RegisterForm from "./Components/signup"
import Home from "./Components/Home"
import Navigation from "./Components/Navigation"
import Hero from './Components/Hero';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero/>
      <Route exact path="/" component={Home} /> 
      {/* <Route path="/Header" component={Header}/>
      <Route path="/signup" component={RegisterForm} /> */} 
    </div>
  );
}
export default App;
