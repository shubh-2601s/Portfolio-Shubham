import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact Me</h2>
      <p>Let's connect! Reach me via email or LinkedIn.</p>
      <address className="contact-links">
        <a
          href="mailto:10221shubham.s@gmail.com"
          className="btn"
          aria-label="Send an email to Shubham"
        >
          Email Me
        </a>
        <a
          href="https://linkedin.com/in/s-shubham-14ba6a283"
          className="btn"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visit Shubham's LinkedIn profile"
        >
          LinkedIn
        </a>
      </address>
    </section>
  );
}

export default Contact;
