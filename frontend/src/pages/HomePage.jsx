import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (subject) => {
    if (subject === 'Mathematics') {
      const grade = window.prompt('Please enter your grade (11 or 12):');
      if (grade === '11') {
        navigate('/math-grade11');
      } else if (grade === '12') {
        navigate('/math-grade12');
      } else {
        alert('Invalid grade. Please enter either 11 or 12.');
      }
    } else if (subject === 'Physics') {
      const grade = window.prompt('Please enter your grade (11 or 12):');
      if (grade === '11') {
        navigate('/physics-grade11');
      } else if (grade === '12') {
        navigate('/physics-grade12');
      } else {
        alert('Invalid grade. Please enter either 11 or 12.');
      }
    } else if (subject === 'Technology') {
      const grade = window.prompt('Please enter your grade (11 or 12):');
      if (grade === '11') {
        navigate('/technology-grade11');
      } else if (grade === '12') {
        navigate('/technology-grade12');
      } else {
        alert('Invalid grade. Please enter either 11 or 12.');
      }
    } else {
      alert(`${subject} button functionality coming soon!`);
    }
  };

  return (
    <div className="home-container">
      <h1>WELCOME</h1>
      <p className="welcome-message">
        What are you in the mood for studying? We can conquer anything we set our mind to!
      </p>
      <blockquote className="quote">
        "Through knowledge (Vidya) one obtains immortality."
        <br />
        <span className="quote-author">~ Vedas</span>
      </blockquote>
      <div className="button-container">
        <button
          className="study-button"
          onClick={() => handleButtonClick('Mathematics')}
        >
          Mathematics
        </button>
        <button
          className="study-button"
          onClick={() => handleButtonClick('Physics')}
        >
          Physics
        </button>
        <button
          className="study-button"
          onClick={() => handleButtonClick('Technology')}
        >
          Technology
        </button>
      </div>
    </div>
  );
};

export default HomePage;
