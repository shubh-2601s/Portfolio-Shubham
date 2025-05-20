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
    details: 'CNN-powered system using OpenCV and TensorFlow to spot deepfake media accurately.',
    image: deepfakeImg,
    link: 'https://github.com/shubh-2601s/Ai-powered-deepfake-detection-system'
  },
  {
    title: 'Mental Health Wellness System',
    description: 'AI-driven web app for tracking and improving mental health.',
    details: 'Integrates facial emotion analysis and mood journaling for personalized mental wellness.',
    image: mentalhealthImg,
    link: '#'
  },
  {
    title: 'Image Stitching & Thermal Analysis',
    description: 'Generates panoramic images combining optical and thermal data.',
    details: 'Stitches camera feeds and highlights heat zones using OpenCV for real-time analysis.',
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
