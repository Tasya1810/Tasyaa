import React from 'react';
import './Home.css';
import tasya from '../assets/tasya.jpg';
import { motion } from "motion/react"

const Home = () => {
  return (
    <div id="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Portofolio<span className="dot">.</span></div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#hobby">Hobby</a></li>
            <li><a href="#projects">Project</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="home">
        <div className="left">
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}

            src={tasya} alt="Profile" className="profile-image" />
        </div>
        <div className="right">
          <h1><span>My</span> Portfolio</h1>
          <p>Selamat datang di situs portofolioku!</p>
          <div className="buttons">
            <a href="#contact" className="btn-outline">Hubungi Saya</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
