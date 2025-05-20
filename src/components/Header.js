// src/components/Header.js
import React from 'react';
import { ReactTyped } from 'react-typed';
import './Header.css';

function Header() {
  return (
    <header className="header" id="header">
      <div className="overlay"></div>
      <div className="header-content">
         <h1>Hello, I'm <span className="highlight">SHUBHAM S</span></h1>
        
        <ReactTyped
          className="typed-text"
          strings={['Full Stack Developer', 'AI Enthusiast', 'Tech Explorer','DSA Lover']}
          typeSpeed={50}
          backSpeed={40}
          loop
        />

        {/* 👉 Add tagline below */}
        <p className="tagline">Lifelong learner, passionate coder, and tech explorer.</p>

        <p>Passionate AI researcher and developer specializing in building real-time applications, leveraging advanced data science techniques to drive innovation, and designing scalable, high-performance web development solutions.</p>
        
        <div className="button-container">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#about" className="btn">View About</a>
          <a href="/resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
