import React, { Component } from "react";
import "../Styles/Home.css";

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      from: "",
      to: "",
      date:'',
    };
  }
  openSearchDilog = () => {
    this.setState({ isSearch: true });
  };
  closeSearchDilog = () => {
    this.setState({ isSearch: false });
  };
 
  handleInputChange = (event) => {
    this.setState({ [event.target.className]: event.target.value });
  };
  

  render() {
    const { isSearch } = this.state;
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
      <div id="home">
        <div className="home-container slideshow">
          <div className="container-hero">
            <div className="hero">
              <div className="hero-text">
                <h1>Welcome to Travel With Us</h1>
                <h2>Leading the way in Adventure</h2>
                <h3>
                  We believe everyone should travel Because travelling’s for
                  everyone. We make vacations magical Making life the daring
                  adventure you deserve.
                </h3>
                <button  onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}>CONTACT US</button>
              </div>
            </div>
          </div>
          <div className="container-hero2">
            <div className="detail">
              
              <input
                type="text"
                className="from"
                placeholder="From"
                onChange={this.handleInputChange}
              />

              <input
                type="text"
                className="to"
                placeholder="To"
                onChange={this.handleInputChange}
              />
              <input
                type="date"
                className="date"
                placeholder="Time"
                onChange={this.handleInputChange}
              />
              <button className="search-button" onClick={this.openSearchDilog}>
                Search
              </button>
              {isSearch && (
                <div className="overlay">
                  <div className="dialog">
                    <div onClick={this.closeSearchDilog}>X</div>
                    <p>From:{this.state.from}</p>
                    <p>To:{this.state.to}</p>
                    <p>Date:{this.state.date}</p>
                    <button >Book</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
