import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [college, setCollege] = useState('');
  const [grade, setGrade] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!email.includes('@')) {
      alert('Please enter a valid email address!');
      return;
    }
    alert('Account Created!');
    navigate('/subjects');
  };

  return (
    <div className="page-container bg-gradient-to-r from-purple-500 to-blue-500 h-screen flex flex-col items-center justify-center text-white">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="input-field"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input-field"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="College"
          className="input-field"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        />
        <input
          type="text"
          placeholder="Grade"
          className="input-field"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="bg-white text-purple-700 px-6 py-3 rounded-md font-semibold hover:bg-purple-300"
          onClick={handleSignUp}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
