import React, { useState, useEffect } from 'react';
import './MathGrade11.css'; // CSS for this page

const MathGrade11 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null); // Track selected course
  const mathematicians = [
    'https://upload.wikimedia.org/wikipedia/commons/c/c1/Srinivasa_Ramanujan_-_OPC_-_1.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9f/Aryabhata-5_%281%29.jpg',
     'https://mathshistory.st-andrews.ac.uk/Biographies/Brahmagupta/pictdisplay/',
      ];

  // Topics for each course
  const topics = {
    trigonometricFunctions: [
      'Introduction',
      'Angles',
      'Trigonometric Functions',
      'Trigonometric Functions of Sum and Difference of Two Angles'
    ],
    limitsAndDerivatives: [
      'Introduction',
      'Intuitive Idea of Derivatives',
      'Limits',
      'Limits of Trigonometric Functions',
      'Derivatives'
    ],
    probability: [
      'Event',
      'Axiomatic Approach to Probability'
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % mathematicians.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleCourseClick = (course) => {
    setSelectedCourse(course); // Set the selected course
  };

  return (
    <div className="math-grade11-container">
      <div className="course-list">
        <h2 className="highlighted-heading">11th Grade Mathematics</h2>
        <ul>
          <li>
            <button onClick={() => handleCourseClick('trigonometricFunctions')}>Trigonometric Functions</button>
          </li>
          <li>
            <button onClick={() => handleCourseClick('limitsAndDerivatives')}>Limits and Derivatives</button>
          </li>
          <li>
            <button onClick={() => handleCourseClick('probability')}>Probability</button>
          </li>
        </ul>
      </div>

      <div className="image-container">
        {selectedCourse ? (
          <div className="course-topics">
            <h3>Topics in {selectedCourse.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <ul>
              {topics[selectedCourse].map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        ) : (
          <img
            src={mathematicians[currentImage]}
            alt="Mathematician"
            className="mathematician-image"
          />
        )}
      </div>
    </div>
  );
};

export default MathGrade11;
