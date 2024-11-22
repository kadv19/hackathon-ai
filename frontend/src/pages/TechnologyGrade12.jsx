import React, { useState, useEffect } from 'react';
import './TechnologyGrade12.css';

const TechnologyGrade12 = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const technologists = [
    'https://upload.wikimedia.org/wikipedia/commons/9/94/Alan_Turing_1945.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Grace_Hopper_United_States_Navy_%28cropped%29.jpg/800px-Grace_Hopper_United_States_Navy_%28cropped%29.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Dennis_Ritchie_2011.jpg/800px-Dennis_Ritchie_2011.jpg',
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
        <h2 className="highlighted-heading">12th Grade Technology</h2>
        <ul>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Stack')}>
              Stack
            </button>
          </li>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Queue')}>
              Queue
            </button>
          </li>
          <li>
            <button className="course-button" onClick={() => handleCourseClick('Sorting')}>
              Sorting
            </button>
          </li>
        </ul>
      </div>

      <div className="image-container">
        <div className="course-topics">
          {selectedCourse === 'Stack' && (
            <>
              <h3>Stack</h3>
              <ul>
                <li>Introduction</li>
                <li>Stack</li>
                <li>Operations on Stack</li>
                <li>Implementation of Stack in Python</li>
                <li>Notations for Arithmetic Expressions</li>
                <li>Conversion from Infix to Postfix Notation</li>
                <li>Evaluation of Postfix Expression</li>
              </ul>
            </>
          )}

          {selectedCourse === 'Queue' && (
            <>
              <h3>Queue</h3>
              <ul>
                <li>Introduction to Queue</li>
                <li>Operations on Queue</li>
                <li>Implementation of Queue using Python</li>
                <li>Introduction to Deque</li>
                <li>Implementation of Deque Using Python</li>
              </ul>
            </>
          )}

          {selectedCourse === 'Sorting' && (
            <>
              <h3>Sorting</h3>
              <ul>
                <li>Introduction</li>
                <li>Bubble Sort</li>
                <li>Selection Sort</li>
                <li>Insertion Sort</li>
                <li>Time Complexity of Algorithms</li>
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

export default TechnologyGrade12;
