import React, { Component } from "react";
import { Button } from "./button/Button";
import { MenuItems } from "./Navbar/MenuItems";
import "./Navbar/navbar.css";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          B.D.S. <i className="fa fa-shopping-bag"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <Button>Sign up</Button>
      </nav>
    );
  }
}

export default Navbar;
