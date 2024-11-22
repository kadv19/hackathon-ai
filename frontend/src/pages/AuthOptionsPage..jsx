import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; // Import the CSS file

const AuthPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="auth-container">
      <button onClick={handleLogin} className="auth-button">Login</button>
      <button onClick={handleSignIn} className="auth-button">Sign In</button>
      <p>
        Don't have an account? <span className="signup-link" onClick={handleSignUp}>Sign up here</span>
      </p>
    </div>
  );
};

export default AuthPage;
