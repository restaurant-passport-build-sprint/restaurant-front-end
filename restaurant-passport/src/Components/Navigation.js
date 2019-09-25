import React, {Component}from "react";
// import logo from '../Images/logofp.png';
import {Link} from 'react-router-dom';
import {FaAlignRight} from 'react-icons/fa';

// export default class Navbar extends Component {
//   state={
//     isOpen:false
//   }
//   handleToggle = () => {
//     this.setState({isOpen:!this.state.isOpen})
//   };
//   render(){
//     return (
//     <nav className="navbar">
//       <div className="nav-center">
//        <div className="nav-header">
//          <Link to="/">
//            {/* <img src={logo} alt="Foodie Pass"/> */}
//            <i class="fas fa-passport"></i>
//          </Link>
//          <button type="button" className="nav-btn">
//            <FaAlignRight className="nav-icon"/>
//          </button>
//          </div> 
//          <h1>Foodie Pass</h1>
//          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
//            <li>
//              <Link to="/">Home</Link>
//            </li>
//            <li>
//              <Link to="/restaurant">Restaurant</Link>
//            </li>
//          </ul>
//       </div>

//     </nav>
//     )}
// }

export default function Navigation() {
  return (
    <div className="nav-container">
      <nav className="menu">
        <img className="menu-logo" src="./Images/logofp.png" />
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
