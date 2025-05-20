import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
