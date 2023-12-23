import React, { Component } from 'react';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import './App.css'; // Import your CSS file for styling

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="main-content">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <footer className="footer">
            <h1>Copyright © XXXX. All rights are reserved</h1>
            
           </footer>
        </div>
      </div>
    );
  }
}

export default App;
