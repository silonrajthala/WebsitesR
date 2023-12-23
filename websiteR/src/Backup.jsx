import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Home() {
  return (
    <div className="home-container">
      <Router>
        <header>
          <Nav />
        </header>
        <Routes>
          {/* Define routes for About, Projects, and Contact */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Set the Home component as the index route */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

// Create a separate component for the content of the home page
function HomePage() {
  return (
    <div>
      <h1>Hello, welcome to the home page</h1>
      <h2>Hajur lai swagat xa yeta</h2>
      
    </div>
  );
}

export default Home;
