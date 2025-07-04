import React from 'react';
import './Project.css';
import perpus from '../assets/perpus.png'
import ovo from '../assets/ovo.png'

const projects = [
  {
    title: 'Aplikasi Perpustakaan Berbasis Java',
    description: 'Aplikasi Perpustakaan ini dibangun berdasarkan kebutuhan untuk memudahkan para pengguna perpustakaan agar buku-buku tetap terorganisir dengan baik dan terjaga.',
    image: perpus,
    link: 'https://example.com/toko-online'
  },
  {
    title: 'Design Aplikasi  OVO',
    description: 'Design ini bertujuan untuk menciptakan pengalaman pengguna (user experience/UX) yang mudah, cepat, dan aman dalam melakukan transaksi keuangan digital.',
    image: ovo,
    link: 'https://example.com/dashboard'
  }
];

const Project = () => {
  return (
    <section className="project-section" id='projects'>
      <h2 className="project-title">Project Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Lihat Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
