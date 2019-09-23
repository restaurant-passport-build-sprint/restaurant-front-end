import React from 'react';
import './App.css';
import FormikRegisterForm from './Components/signup';
import Header from "./Components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <FormikRegisterForm/>
    </div>
  );
}
export default App;
