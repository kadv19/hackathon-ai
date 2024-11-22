import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Handle sign-up form submission
  const handleSignup = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password || !confirmPassword) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    // Simulate signup success (You can replace this with actual signup logic)
    setErrorMessage('');
    alert('Signup successful!');
    navigate('/login'); // Redirect to Login page after successful signup
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Create a New Account</h1>
      
      <form 
        onSubmit={handleSignup}
        className="bg-white p-6 rounded-md shadow-md w-96"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input 
            type="email" 
            id="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-medium">Password</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-lg font-medium">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Confirm your password"
          />
        </div>

        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-400"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-4 text-center">
        <p>
          Already have an account? 
          <button 
            onClick={() => navigate('/login')} 
            className="text-blue-500 hover:underline ml-2"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
