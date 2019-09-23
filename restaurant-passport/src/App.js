import React from 'react';
import './App.css';
import { Link, Route} from "react-router-dom";
import RegisterForm from "./Components/signup"
import Home from "./Components/Home"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={RegisterForm} />
    </div>
  );
}
export default App;
