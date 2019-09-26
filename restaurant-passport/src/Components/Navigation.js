import React, {Component}from "react";
// import logo from '../Images/logofp.png';
import {Link} from 'react-router-dom';



export default function Navigation() {
  return (
    <div className="nav-container">
      <nav className="menu">
        <img className="menu-logo" src="./Images/logofp.png" />
        <h1>FoodiePass</h1>
        <div className="navigation">
          <ul className="menu-list">
            <li className="menu-list-item">
              <a className="menu-link-active" href="#">
                Home
              </a>
            </li>
            <li className="menu-list-item">
              <a className="menu-link" href="#">
                About
              </a>
            </li>
            <li className="menu-list-item">
              <a className="menu-link" href="#">
                contact
              </a>
            </li>
            <li className="menu-list-item">
              <a className="menu-link" href="/signup">
                SignUp
              </a>
            </li>
          </ul>{" "}
        </div>
      </nav>
    </div>
  );
}
