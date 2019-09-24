import React from "react";
import { NavLink } from "react-router-dom"

export default function Navigation() {
  return (
    <div className="nav-container">
      <nav className="menu">
        <img className="menu-logo" src="./logo192.png" />
        <h1>FoodiePass</h1>
        <div className="navigation">
          <ul className="menu-list">
            <li className="menu-list-item">
              <NavLink exact to="/" className="menu-link-active">
                Home
              </NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink exact to="/" className="menu-link">
                About
              </NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink exact to="/" className="menu-link">
                contact
              </NavLink>
            </li>
            <li className="menu-list-item">
              <NavLink to="/signup" className="menu-link">
                SignUp
              </NavLink>
            </li>
          </ul>{" "}
        </div>
      </nav>
    </div>
  );
}
