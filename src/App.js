import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Hobby from './components/Hobby';
import Project from './components/Project';
import Contact from './components/Contact';
import './components/Home.css';
import './components/About.css';
import './components/Hobby.css';
import './components/Project.css';
import './components/Contact.css';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Hobby />
      <Project />
      <Contact />
    </div>
  );
}

export default App;