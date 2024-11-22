import React, { useState, useEffect } from 'react';
import './PhysicsGrade12.css';

const PhysicsGrade12 = () => {
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
        <h2 className="highlighted-heading">12th Grade Physics</h2>
        <ul>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Electromagnetic Induction')}>
              Electromagnetic Induction
            </button>
          </li>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Alternating Current')}>
              Alternating Current
            </button>
          </li>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Electromagnetic Waves')}>
              Electromagnetic Waves
            </button>
          </li>
        </ul>
      </div>

      <div className="image-container">
        <div className="course-topics">
          {selectedCourse === 'Electromagnetic Induction' && (
            <>
              <h3>Electromagnetic Induction</h3>
              <ul>
                <li>Introduction</li>
                <li>The Experiments of Faraday and Henry</li>
                <li>Magnetic Flux</li>
                <li>Faraday’s Law of Induction</li>
                <li>Lenz’s Law and Conservation of Energy</li>
                <li>Motional Electromotive Force</li>
                <li>Inductance</li>
                <li>AC Generator</li>
              </ul>
            </>
          )}

          {selectedCourse === 'Alternating Current' && (
            <>
              <h3>Alternating Current</h3>
              <ul>
                <li>Introduction</li>
                <li>AC Voltage Applied to a Resistor</li>
                <li>Representation of AC Current and Voltage by Rotating Vectors (Phasors)</li>
                <li>AC Voltage Applied to an Inductor</li>
                <li>AC Voltage Applied to a Capacitor</li>
                <li>AC Voltage Applied to a Series LCR Circuit</li>
                <li>Power in AC Circuit: The Power Factor</li>
                <li>Transformers</li>
              </ul>
            </>
          )}

          {selectedCourse === 'Electromagnetic Waves' && (
            <>
              <h3>Electromagnetic Waves</h3>
              <ul>
                <li>Introduction</li>
                <li>Displacement Current</li>
                <li>Electromagnetic Waves</li>
                <li>Electromagnetic Spectrum</li>
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

export default PhysicsGrade12;
