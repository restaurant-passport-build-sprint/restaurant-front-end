import React from 'react';
import './App.css';
import { Link, Route} from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import SignupLogin from './Components/signupLoginPage';

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
