import React from 'react';
import './App.css';
import { Link, Route} from "react-router-dom";
<<<<<<< HEAD
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import SignupLogin from './Components/signupLoginPage';
=======
import RegisterForm from "./Components/signup"
import Home from "./Components/Home"
import Navigation from "./Components/Navigation"
import Hero from './Components/Hero';

>>>>>>> e8a9be13c50210374af27230606edb85bf9ce215

function App() {
  return (
    <div className="App">
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignupLogin} />

    </div>
  );
}
export default App;
