import React from 'react';
import './App.css';
import { Link, Route} from "react-router-dom";
import RegisterForm from "./Components/signup"
import Home from "./Components/Home"
import Navigation from "./Components/Navigation"
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/Header" component={Header}/>
      <Route path="/signup" component={RegisterForm} />
    </div>
  );
}
export default App;
