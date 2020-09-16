import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import NavTabs from './components/NavTabs';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    </div>
  );
}

export default App;
