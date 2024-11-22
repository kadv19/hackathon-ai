import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChooseActionPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');  // Redirect to the login page
  };

  const handleSignIn = () => {
    navigate('/signin');  // Redirect to the sign-in page
  };

  const handleSignUp = () => {
    navigate('/signup');  // Redirect to the sign-up page
  };

  return (
    <div>
      <h1>Choose an Action</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignUp}>Don't have an account? Sign Up</button>
    </div>
  );
};

export default ChooseActionPage;
