import React, { useState, useEffect } from 'react';
import './TechnologyGrade11.css';

const TechnologyGrade11 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const technologists = [
    'https://upload.wikimedia.org/wikipedia/commons/9/94/Alan_Turing_1945.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Grace_Hopper_United_States_Navy_%28wearing_uniform%29.jpg/500px-Grace_Hopper_United_States_Navy_%28wearing_uniform%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c9/Tim_Berners-Lee_2015.jpg',
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % technologists.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="technology-page-container">
      <div className="course-list">
        <h2 className="highlighted-heading">11th Grade Technology</h2>
        <ul>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Introduction to Computing')}>
              Introduction to Computing
            </button>
          </li>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Digital Electronics')}>
              Digital Electronics
            </button>
          </li>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Communication Technology')}>
              Communication Technology
            </button>
          </li>
        </ul>
      </div>

      <div className="image-container">
        <div className="course-topics">
          {selectedCourse === 'Introduction to Computing' && (
            <>
              <h3>Introduction to Computing</h3>
              <ul>
                <li>Basics of Computers</li>
                <li>Input/Output Devices</li>
                <li>Storage Devices</li>
                <li>Memory Management</li>
              </ul>
            </>
          )}

          {selectedCourse === 'Digital Electronics' && (
            <>
              <h3>Digital Electronics</h3>
              <ul>
                <li>Logic Gates</li>
                <li>Boolean Algebra</li>
                <li>Flip-Flops</li>
              </ul>
            </>
          )}

          {selectedCourse === 'Communication Technology' && (
            <>
              <h3>Communication Technology</h3>
              <ul>
                <li>Principles of Communication</li>
                <li>Types of Communication Systems</li>
                <li>Digital and Analog Communication</li>
              </ul>
            </>
          )}
        </div>

        <img
          src={technologists[currentImage]}
          alt="Technologist"
          className="technologist-image"
        />
      </div>
    </div>
  );
};

export default TechnologyGrade11;
