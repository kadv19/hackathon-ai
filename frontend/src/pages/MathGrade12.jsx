import React, { useState, useEffect } from 'react';
import './MathGrade12.css';

const MathGrade12 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const mathematicians = [
    'https://upload.wikimedia.org/wikipedia/commons/9/92/Albert_Einstein_Head.jpg/600px-Albert_Einstein_Head.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a5/James_Clerk_Maxwell.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/d/d3/Isaac_Newton_by_Sir_Godfrey_Kneller%2C_1689.jpg',
  ];

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mathematicians.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="math-page-container">
      <div className="course-list">
        <h2 className="highlighted-heading">12th Grade Mathematics</h2>
        <ul>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Matrices')}>
              Matrices
            </button>
          </li>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Inverse Trigonometric Functions')}>
              Inverse Trigonometric Functions
            </button>
          </li>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Continuity and Differentiability')}>
              Continuity and Differentiability
            </button>
          </li>
        </ul>
      </div>

      <div className="image-container">
        <div className="course-topics">
          {selectedCourse === 'Matrices' && (
            <>
              <h3>Matrices</h3>
              <ul>
                <li>Introduction</li>
                <li>Matrix</li>
                <li>Types of Matrices</li>
                <li>Operations on Matrices</li>
                <li>Transpose of a Matrix</li>
                <li>Symmetric and Skew Symmetric Matrices</li>
              </ul>
            </>
          )}

          {selectedCourse === 'Inverse Trigonometric Functions' && (
            <>
              <h3>Inverse Trigonometric Functions</h3>
              <ul>
                <li>Introduction</li>
                <li>Basic Concepts</li>
                <li>Properties of Inverse Trigonometric Functions</li>
              </ul>
            </>
          )}

          {selectedCourse === 'Continuity and Differentiability' && (
            <>
              <h3>Continuity and Differentiability</h3>
              <ul>
                <li>Introduction</li>
                <li>Continuity</li>
                <li>Differentiability</li>
                <li>Exponential and Logarithmic Functions</li>
                <li>Logarithmic Differentiation</li>
                <li>Derivatives of Functions in Parametric Forms</li>
                <li>Second Order Derivative</li>
              </ul>
            </>
          )}
        </div>

        <img
          src={mathematicians[currentImage]}
          alt="Mathematician"
          className="mathematician-image"
        />
      </div>
    </div>
  );
};

export default MathGrade12;
