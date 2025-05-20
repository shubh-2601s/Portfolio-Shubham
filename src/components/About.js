// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
       
        <p className="about-summary">
          I'm <strong>Shubham S</strong>, a passionate B.Tech Computer Science Engineering student from Chennai, Tamil Nadu.
          I specialize in Python, C, Java, and love building innovative software and AI-driven solutions. My mission is to
          create real-world impact through development and research. I also love creating websites and applications 
          that are not only functional but also visually appealing.
        </p>

        <div className="about-details">
          <div className="info-block">
            <h3>Education</h3>
            <ul>
              <li>B.Tech CSE, Vel Tech University (2023–Present) — 2nd Year</li>
              <li>12th: Bhaktavatsalam Vidyashram (2023) — 88.2%</li>
              <li>10th: Bhaktavatsalam Vidyashram (2021) — 90.2%</li>
            </ul>
          </div>

          <div className="info-block">
            <h3>Skills</h3>
            <ul>
              <li><strong>Languages:</strong> Python, C, Java</li>
              <li><strong>Web:</strong> HTML, CSS, JavaScript (Basic)</li>
              <li><strong>Tools:</strong> OpenCV, MySQL, Firebase, Git</li>
              <li><strong>Concepts:</strong> DSA, Machine Learning Fundamentals, Data Science</li>
              <li><strong>Soft Skills:</strong> Leadership, Problem-Solving, Critical Thinking</li>
            </ul>
          </div>

          <div className="info-block">
            <h3>Experience & Projects</h3>
            <ul>
              <li>Deepfake Detection – Python, OpenCV, and ML algorithms for media authenticity</li>
              <li>Mental Health Wellness System – React + FastAPI-based emotion-aware mental health portal</li>
              <li>Image Stitching & Thermal Analysis – Real-time optical and thermal image fusion</li>
              <li>Front-End Web Design & Real-Time Applications – Focused on UX and performance</li>
            </ul>
          </div>

          <div className="info-block">
            <h3>Achievements</h3>
            <ul>
              <li>Rank 7 – Smart India Hackathon Internal Round (2024)</li>
              <li>All India Rank 37 – BITS Pilani Techxlerate (2024)</li>
              <li>1st Prize – Innovators Day, Sri Manakula Vinayagar College (2024)</li>
              <li>Consolation Prize – Pre-Internal Hackathon (2024)</li>
            </ul>
          </div>

          <div className="info-block">
            <h3>Certifications</h3>
            <ul>
              <li>Machine Learning (Coursera)</li>
              <li>Database Management Systems (Coursera)</li>
              <li>Networking Essentials (CISCO NetAcad)</li>
            </ul>
          </div>

          <div className="info-block">
            <h3>Additional</h3>
            <ul>
              <li>Languages: English, Hindi, Tamil</li>
              <li>Hobbies: Sports, Reading, Chess, Video Editing</li>
              <li>IEEE Computer Society Member</li>
              <li>Organized hackathons, symposiums, and outreach programs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
