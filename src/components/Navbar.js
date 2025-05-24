import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">Shubham S</div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#header" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li>
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Download Resume
          </a>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
