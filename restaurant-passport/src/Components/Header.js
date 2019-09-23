import React from "react";
//import searchIcon from './search-icon.png';

function Header() {
  return (
    <div className="header-container">
      <div className="search-container">
        
        <form className="menu-search-form" method="POST">
          <label htmlFor="search">Search:</label><br />
          <input
            name="search"
            className="menu-search-input"
            placeholder="Type and hit enter"
          /><button className="menu-search-button">Go!</button>
        </form>
      </div>
    </div>
  );
}

export default Header;
