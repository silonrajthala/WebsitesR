import React, { Component } from "react";
import "../Components/NavBar.css";

export class NavBar extends Component {
  render() {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
      <div id="NavBar">
        <li  href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          role="button"
          tabIndex={0}>Home</li>
        <li href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
          role="button"
          tabIndex={0}>About</li>
        <li>Pages</li>
        <li>Destination</li>
        <li>Blog</li>
         <li>Contact</li>
      </div>
    );
  }
}

export default NavBar;
