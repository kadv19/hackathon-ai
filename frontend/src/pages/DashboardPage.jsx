import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard!</h1>
      
      <div className="mb-4">
        <p className="text-xl">You have successfully logged in.</p>
      </div>

      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-400"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Dashboard;
