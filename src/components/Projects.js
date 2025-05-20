import React, { useState } from 'react';
import './Projects.css';
import './Modal.css';

import deepfakeImg from '../images/deepfake.png';
import mentalhealthImg from '../images/mentalhealth.png';
import imagestitchImg from '../images/imagestitch.png';

const projects = [
  {
    title: 'Deepfake Detector',
    description: 'Detects AI-generated images/videos using Python and ML.',
    details: 'An advanced system built with Python, OpenCV, and TensorFlow that leverages CNNs to analyze artifacts in images and videos, effectively distinguishing real media from manipulated content.',
    image: deepfakeImg,
    link: 'https://github.com/shubh-2601s/Ai-powered-deepfake-detection-system'
  },
  {
    title: 'Mental Health Wellness System',
    description: 'Web app with enhanced AI-based features for mental health tracking and assessment.',
    details: 'A Mental health wellness system for understanding and enhancing emotional well-being through a multimodal approach combining facial emotion recognition, mood journaling, speech pattern analysis to assess users’ mental states.',
    image: mentalhealthImg,
    link: '#'
  },
  {
    title: 'Image Stitching & Thermal Analysis',
    description: 'Panoramic optical/thermal image generation and analysis.',
    details: 'Combines live optical and thermal camera feeds into stitched panoramic images. Highlights heat zones and overlays them on visuals using OpenCV and Python.',
    image: imagestitchImg,
    link: '#'
  }
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="btn" onClick={() => setSelectedProject(project)}>View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedProject(null)}>&times;</span>
            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.details}</p>
            {selectedProject.link && selectedProject.link !== '#' ? (
              <a href={selectedProject.link} className="btn" target="_blank" rel="noreferrer">
                Go to GitHub
              </a>
            ) : (
              <p className="ongoing-msg">🚧 The project is ongoing, link will be updated soon.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
