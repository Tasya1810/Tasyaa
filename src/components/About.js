import React from 'react';
import './About.css';
import fotoku from '../assets/fotoku.jpg'; // Ganti dengan path gambar kamu

const About = () => {
  return (
    <section className="about-hero" id="about">
      <div className="about-left">
        <p className="greeting">About Me</p>
        <h1 className="headline">
          Hi <span className="highlight">I'm Tasya Sarah</span> {/* Ganti nama */}
        </h1>
        <p className="description">
          Perkenalkan saya Tasya Sarah Octariani Faana, saya adalah anak pertama dari tiga bersaudara. Saya adalah salah satu mahasiswi Universitas Satya Terra Bhinneka angkatan 2024. Saya adalah seorang mahasiswi jurusan Informatika yang memiliki semangat tinggi dalam mempelajari dunia teknologi dan pemrograman. Menurut saya, belajar Informatika bukan hanya soal kode, tapi juga tentang memecahkan masalah dan menciptakan solusi bagi banyak orang. 
        </p>
      </div>

      <div className="about-right">
        <img src={fotoku} alt="My profile" className="profile-photo" />
      </div>
    </section>
  );
};

export default About;
