import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page2.css'; // Separate CSS file for styling Page 2

const Page2 = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true); // Track SignIn/SignUp state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // New sign-up fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Form submit handler (SignIn/Sign-Up)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle SignIn logic here (authentication)
      console.log('Signing in with:', email, password);
      navigate('/home'); // Redirect after SignIn
    } else {
      // Handle Sign-Up logic here (validation and creation)
      if (password === confirmPassword) {
        console.log('Signing up with:', firstName, lastName, email, phoneNumber, password);
        navigate('/home'); // Redirect after Sign-Up
      } else {
        alert('Passwords do not match!');
      }
    }
  };

  return (
    <div className="page2-container">
      {isLogin === null ? (
        // Options Page
        <div className="options-container">
          <button onClick={() => setIsLogin(true)} className="options-button">
            SignIn
          </button>
          <p className="signup-text">
            Don't have an account? <span onClick={() => setIsLogin(false)} className="signup-link">Sign Up here!</span>
          </p>
        </div>
      ) : (
        // SignIn/SignUp Forms
        <div>
          <h1>{isLogin ? 'SignIn' : 'Sign Up'}</h1>
          
          <form onSubmit={handleSubmit} className="form-container">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {!isLogin && (
              <>
                <div className="input-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                
                {/* Additional fields for SignUp */}
                <div className="input-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    maxLength="10"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </>
            )}

            <button type="submit" className="submit-button">
              {isLogin ? 'SignIn' : 'Sign Up'}
            </button>
          </form>

          <div className="toggle-action">
            {isLogin ? (
              <p className="signup-text">
                Don't have an account? <span onClick={() => setIsLogin(false)} className="signup-link">Sign Up here!</span>
              </p>
            ) : (
              <p className="signup-text">
                Already have an account? <span onClick={() => setIsLogin(true)} className="signup-link">SignIn here!</span>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page2;
