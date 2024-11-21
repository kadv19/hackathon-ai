import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [grade, setGrade] = useState('');

  const handleLogin = () => {
    // Proceed to SubjectsPage after login
    navigate('/subjects');
  };

  return (
    <div className="page-container">
      <h2>Login</h2>
      <form>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Grade (11th or 12th)" 
          value={grade} 
          onChange={(e) => setGrade(e.target.value)} 
        />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

