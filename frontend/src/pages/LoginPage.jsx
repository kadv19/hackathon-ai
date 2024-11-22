import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // To navigate to the next page after login

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    // Simulating a login process (you can replace this with actual backend logic later)
    if (email === 'user@example.com' && password === 'password123') {
      setErrorMessage('');
      navigate('/dashboard'); // Redirect to a dashboard or next page after successful login
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login to Your Account</h1>
      
      <form 
        onSubmit={handleLogin}
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

        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-400"
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <p>
          Don't have an account? 
          <button 
            onClick={() => navigate('/signup')} 
            className="text-blue-500 hover:underline ml-2"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
