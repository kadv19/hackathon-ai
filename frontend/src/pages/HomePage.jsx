import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/avatar.png'; // Ensure the image exists at this path

const HomePage = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const message = 'Welcome to a New Era of Learning!';
    let index = 0;
    const interval = setInterval(() => {
      if (index < message.length) {
        setWelcomeMessage((prev) => prev + message[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust speed if necessary
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      <img src={avatar} alt="Triangle Icon" className="mx-auto my-4 w-32 h-32" />
      <h1 className="text-center text-3xl font-bold">{welcomeMessage}</h1>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={() => navigate('/options')}
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
