import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Ensure you have your styles for floating effects

const HomePage = () => {
  const avatarURL = 'https://api.adorable.io/avatars/285/abott@adorable.png'; // Avatar image URL
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const navigate = useNavigate();

  // Grammatical fix and animation message logic
  useEffect(() => {
    const message = 'Weelcome to a New Era of Learning!';  // Corrected message here
    let index = 0;

    const interval = setInterval(() => {
      if (index < message.length) {
        setWelcomeMessage((prev) => prev + message.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust speed if necessary

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="homepage-container">
      {/* Welcome message */}
      <h1>{welcomeMessage}</h1>

      {/* Floating Avatar or circle */}
      <div className="circle">
      </div>

      {/* Additional text */}
      <h1 className="intro-text">
        Welcome to a new era of learning like never before. We have redefined learning to a new level where we offer tailored learning experiences for students.
      </h1>

      {/* Get Started Button */}
      <button
        onClick={() => navigate('/page2')}
        className="get-started-button"
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;

