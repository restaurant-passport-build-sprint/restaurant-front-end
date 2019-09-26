import React, {Component}from "react";
// import logo from '../Images/logofp.png';
import {Link} from 'react-router-dom';



export default function Navigation() {
  return (
    <div className="nav-container">
      <nav className="menu">
        <img className="menu-logo" src="https://imgur.com/OEuk0hQ.png" />
        <h1>FoodiePass</h1>
        <div className="navigation">
          <ul className="menu-list">
            <li className="menu-list-item">
              <Link className="menu-link-active" to="/">
                Home
              </Link>
            </li>
            <li className="menu-list-item">
            <Link className="menu-link-active" to="/restaurant-list">
                Visited Restaurants
              </Link>
            </li>
            <li className="menu-list-item">
            <Link className="menu-link-active" to="/signup">
                Signup / Login
              </Link>
            </li>
          </ul>{" "}
        </div>
      </nav>
    </div>
  );
}



