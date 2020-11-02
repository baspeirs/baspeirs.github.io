import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <p class="navbar-brand">Bryce Speirs</p>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
          </li>
          <li class="nav-item">
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
          </li>
          <li class="nav-item">
          <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;