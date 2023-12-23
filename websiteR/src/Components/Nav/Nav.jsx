import React from "react";
import "./Nav.css";
import "../../App.css";
import { Component } from "react";

class Nav extends Component {
  state = { clicked : true };
  handleClick = () => {this.setState({clicked: !this.state.clicked});};

  render(){
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className={`navBar ${this.state.clicked ? 'active' : ''}`}>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
            this.handleClick(); // Toggle the clicked state

          }}
          role="button"
          tabIndex={0}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
            this.handleClick(); // Toggle the clicked state
          }}
          role="button"
          tabIndex={0}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects");
            this.handleClick(); // Toggle the clicked state

          }}
          role="button"
          tabIndex={0}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
            this.handleClick(); // Toggle the clicked state

          }}
          role="button"
          tabIndex={0}
        >
          Contact
        </a>
        <div id="mobile" onClick={this.handleClick}>
          <i id="bar"  className={this.state.clicked ? 'fas fa-bars' :'fas fa-times'}></i>
        </div>
      </div>
    </nav>
  );
}
}
export default Nav;
