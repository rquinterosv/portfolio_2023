import React from 'react';
import '../App.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-style">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>With a deep sense of responsibility and a commitment to excellence, I thrive in dynamic environments where proactivity is paramount. My track record includes successfully delivering web applications that not only meet technical standards but also align with business objectives. I excel at taking the initiative to identify opportunities, solve complex problems, and drive projects to successful completion. </p>
        <p>My dedication to continuous learning and adaptability allows me to stay at the forefront of technology trends, ensuring that my contributions consistently add value and maximize ROI. I'm eager to contribute my expertise and commitment to help businesses achieve their digital goals, fostering success and growth in every project.</p>
      </div>
    </div>
  );
};

export default Modal;