// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Shubham S</div>
      <ul className="nav-links">
        <li><a href="#header">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
