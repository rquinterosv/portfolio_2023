import React, { useState } from 'react';
import '../App.css';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';


const Resume = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="resume">
      <header>
        <h1>About me</h1>
      </header>
      <section className="professional-summary">
        <p>As a highly motivated and results-driven web and business developer, I bring a relentless passion for crafting innovative solutions and driving business growth...</p>
        <button className="open-button" onClick={openModal}>
          Open Modal
        </button>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <section className="education">
        <h2>Education</h2>
        <h4>Full Stack Web Development with Co-Op</h4>
        <p>Canadian College of Technology and Business: CCTB (Sept 2023 - now)</p>
        <h4>Full Stack Web Debelopment</h4>
        <p>Desafío Latam Chile (Jun 2021 - Apr 2022)</p>
        <h4>Business Managment</h4>
        <p>Andres Bello University Chile (2013 - 2018)</p>
      </section>
      <section className="experience">
        <h2>Work Experience</h2>
        <h4>Project Manager - Desafío Latam</h4>
        <h4>2021 - 2023</h4>
        <ul>
          <li>Proven track record of on-time, on-budget project delivery.</li>
          <li>Effective cross-functional team collaboration.</li>
          <li>Presented project updates to executive leadership</li>
          <li>Clear and timely stakeholder engagement</li>
        </ul>
        <p>Reference: Andrés Gallardo (General Director) - LinkedIn</p>
        <h4>Business Developer -  Huawei Technology</h4>
        <h4>2019 - 2021</h4>
        <h4>Business Developer -  Ecom Energía</h4>
        <h4>2018 - 2019</h4>
        <ul>
          <li>Proven ability to close deals and negotiate partnerships.</li>
          <li>Expertise in identifying growth opportunities through market insights.</li>
          <li>Strong interpersonal skills for fostering productive partnerships and driving growth.</li>
        </ul>
      </section>
      {/* Add more sections for skills, projects, and other information */}
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: your@email.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Website: www.yourwebsite.com</p>
      </section>
    </div>
  );
};

export default Resume;
