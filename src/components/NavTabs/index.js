import React from "react";
import "./style.css";

function NavTabs() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <p class="navbar-brand">Bryce Speirs</p>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li className="nav-item active" id="homeNav">
              <a href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a href="#projectsToggle" id="projectsNav">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#skillsToggle" id="portfolioNav">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#xpToggle" id="xpNav">Experience</a>
            </li>
            <li className="nav-item">
              <a href="#about" id="aboutNav">About</a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
}

export default NavTabs;