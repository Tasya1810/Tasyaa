import React, { useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const formRef = useRef(null); // Referensi ke form

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    formRef.current.reset(); // Kosongkan form setelah submit
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        <div className="contact-methods">
          <a
            href="mailto:tasyafaana80@gmail.com"
            className="contact-method"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope icon"></i>
            <span>tasyafaana80@gmail.com</span>
          </a>

          <a
            href="https://wa.me/6282145920708"
            className="contact-method"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp icon"></i>
            <span>+62 821-4592-0708</span>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
