import React from 'react';
// import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Stars from "./assets/photos/Stars.mp4";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Projects from "./components/pages/Projects/Projects";
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import Skills from './components/pages/Skills/Skills';


function App() {
  return (
    <div className="App">
      <NavTabs />
      <div id="hero-section">
        <video autoPlay muted loop id="hero-video">
          <source src={Stars} />
        </video>
      </div>
      <Home />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  );
}

export default App;
