import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1>About me</h1>
      </header>
      <section className="profesional-summary">
        <p>"As a highly motivated and results-driven web and business developer, I bring a relentless passion for crafting innovative solutions and driving business growth. With a deep sense of responsibility and a commitment to excellence, I thrive in dynamic environments where proactivity is paramount.</p>
        <p> My track record includes successfully delivering web applications that not only meet technical standards but also align with business objectives. I excel at taking the initiative to identify opportunities, solve complex problems, and drive projects to successful completion.</p>
        <p>My dedication to continuous learning and adaptability allows me to stay at the forefront of technology trends, ensuring that my contributions consistently add value and maximize ROI. I'm eager to contribute my expertise and commitment to help businesses achieve their digital goals, fostering success and growth in every project."</p>
      </section>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: your@email.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Website: www.yourwebsite.com</p>
      </section>
      <section className="education">
        <h2>Education</h2>
        <p>Degree in Computer Science</p>
        <p>University Name, Graduation Year</p>
      </section>
      <section className="experience">
        <h2>Work Experience</h2>
        <p>Web Developer - Company Name</p>
        <p>May 2020 - Present</p>
        <ul>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
        </ul>
      </section>
      {/* Add more sections for skills, projects, and other information */}
    </div>
  );
};

export default Resume;
