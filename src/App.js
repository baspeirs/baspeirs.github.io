import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Projects from "./components/pages/Projects/Projects";
import Footer from './components/Footer';
import { Skills } from './components/pages/Skills/Skills';
import Experience from './components/pages/Experience/Experience';
import HeroImage from './assets/photos/hero-background.jpg';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const aboutRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        changeBackground('transparent')
      }
    })
    observer.observe(aboutRef.current)
  }, []);

  const changeBackground = (color) => {
    setBackgroundColor(color)
  };

  return (
    <div className="App">
      <div className='wrapper'>
        <Navbar />
        <img className='hero-image' src={HeroImage} alt='hero' />
        <div className='background-gradient'></div>
        <div className='page-sections' style={{ backgroundColor: backgroundColor }}>
          <Home changeBackground={changeBackground} />
          <Projects changeBackground={changeBackground} />
          <section id='about-section'>
            <About />
            <div className='target-div' ref={aboutRef}></div>
            <Skills />
            <Experience />
            <Footer />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
