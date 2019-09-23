import React from "react";

export default function Navigation() {
  return (
    <div className="nav-container">
      <nav className="menu">
        <img className="menu-logo" src="./logo192.png" />
        <h1>FoodiePass</h1>
        <div className="navigation">
          <ul classname="menu-list">
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
              <a className="menu-link" href="#">
                SignUp
              </a>
            </li>
          </ul>{" "}
        </div>
      </nav>
    </div>
  );
}
