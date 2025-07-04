// src/components/Hobby.js
import React from 'react';
import './Hobby.css';
import ayam from '../assets/ayam.jpg';
import membaca from '../assets/membaca tasya.jpg';
import menonton from '../assets/menonton.jpg';

const Hobby = () => {
  return (
    <section className="hobby-section" id="hobby">
      <h2 className="hobby-title">My Hobbies</h2>
      <div className="hobby-cards">
        <div className="hobby-card">
          <img src={ayam} alt="Reading" />
          <h3>Memasak</h3>
          <p>Memasak adalah salah satu hobi saya yang sering saya lakukan dirumah setiap hari. </p>
        </div>
        <div className="hobby-card">
          <img src={membaca} alt="Photography" />
          <h3>Membaca Buku</h3>
          <p>Membaca buku termasuk hobi saya yang kedua yang saya lakukan pada saat saya memiliki waktu senggang.</p>
        </div>
        <div className="hobby-card">
          <img src={menonton} alt="Music" />
          <h3>Menonton</h3>
          <p>Menonton drama termasuk hobi saya juga untuk mengisi waktu luang saya.</p>
        </div>
      </div>
    </section>
  );
};

export default Hobby;
