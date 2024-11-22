import React, { useState, useEffect } from 'react';
import './PhysicsGrade11.css';

const PhysicsGrade11 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const physicists = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Albert_Einstein_Head.jpg/600px-Albert_Einstein_Head.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a5/James_Clerk_Maxwell.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d3/Isaac_Newton_by_Sir_Godfrey_Kneller%2C_1689.jpg',
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % physicists.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="physics-page-container">
      <div className="course-list">
        <h2 className="highlighted-heading">11th Grade Physics</h2>
        <ul>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Mechanics')}>
              Mechanics
            </button>
          </li>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Electrostatics')}>
              Electrostatics
            </button>
          </li>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Magnetic Effects of Current')}>
              Magnetic Effects of Current
            </button>
          </li>
        </ul>
      </div>

      <div className="image-container">
        <div className="course-topics">
          {selectedCourse === 'Mechanics' && (
            <>
              <h3>Mechanics</h3>
              <ul>
                <li>Introduction</li>
                <li>Kinematics</li>
                <li>Laws of Motion</li>
                <li>Work, Energy, and Power</li>
              </ul>
            </>
          )}

          {selectedCourse === 'Electrostatics' && (
            <>
              <h3>Electrostatics</h3>
              <ul>
                <li>Electric Charges and Fields</li>
                <li>Electrostatic Potential and Capacitance</li>
              </ul>
            </>
          )}

          {selectedCourse === 'Magnetic Effects of Current' && (
            <>
              <h3>Magnetic Effects of Current</h3>
              <ul>
                <li>Magnetic Field and Magnetic Force</li>
                <li>Ampere's Law</li>
                <li>Magnetic Induction</li>
              </ul>
            </>
          )}
        </div>

        <img
          src={physicists[currentImage]}
          alt="Physicist"
          className="physicist-image"
        />
      </div>
    </div>
  );
};

export default PhysicsGrade11;
