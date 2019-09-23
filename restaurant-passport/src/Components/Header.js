import React from 'react';
//import searchIcon from './search-icon.png';

function Header (){
    return(
        <div className="header-container">
            <nav className="menu">
                <h1 className="menu-logo">Logo</h1>
                <div className="navigation">
                    <ul classname="menu-list">
                        <li className="menu-list-item"><a className="menu-link-active" href="#">Home</a></li> 
                        <li className="menu-list-item"><a className="menu-link" href="#">About</a></li> 
                        <li className="menu-list-item"><a className="menu-link" href="#">contact</a></li> 
                        <li className="menu-list-item"><a className="menu-link" href="#">SignUp</a></li>  
                    </ul>

                    <button 
                        className="menu-search-button">

                        </button>

                    <form className="menu-search-form" method="POST">
                        <input className="menu-search-input" placeholder="Type and hit enter"/>
                    </form>
                </div>
            </nav>
        </div>
    )
}


export default Header;