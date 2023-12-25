import React, { Component } from "react";
import "../Components/NavBar.css";

export class NavBar extends Component {
  state = { clicked: true };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
      <div id="NavBar" className={this.state.clicked ? "active" : ""}>
        <li
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          role="button"
          tabIndex={0}
        >
          Home
        </li>
        <li
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          role="button"
          tabIndex={0}
        >
          About
        </li>
        <li
          href="#explore"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("explore");
          }}
          role="button"
          tabIndex={0}
        >
          Explore
        </li>
        <li
          href="#price"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("price");
          }}
          role="button"
          tabIndex={0}
        >
          Price
        </li>
        <li
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          role="button"
          tabIndex={0}
        >
          Contact
        </li>{" "}
        <li id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-bars" : "fas fa-times"}
          ></i>
        </li>
      </div>
    );
  }
}

export default NavBar;
