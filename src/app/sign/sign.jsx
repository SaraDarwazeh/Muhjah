import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign.css';
import { FaUser, FaEnvelope, FaLock, FaEye } from 'react-icons/fa';

function Sign() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (isSignup) {
      alert('Account created successfully!');
    } else {
      alert('Logged in!');
    }

    navigate('/main');
  };

  return (
    <div className="nuvia-wrapper">
      <div className="form-container">
        <h1 className="logo">Nuvia</h1>
        <p className="subtitle">{isSignup ? 'Create your account' : 'Welcome Back!'}</p>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="input-group">
              <span className="icon"><FaUser /></span>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="input-group">
            <span className="icon"><FaEnvelope /></span>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <span className="icon"><FaLock /></span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="icon eye"><FaEye /></span>
          </div>

          {isSignup && (
            <div className="input-group">
              <span className="icon"><FaLock /></span>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {!isSignup && (
            <div className="forgot">
              <span
                onClick={() => navigate('/forgot-password')}
                style={{ color: '#74b9ff', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Forgot Password?
              </span>
            </div>
          )}

          <button className="login-btn" type="submit">
            {isSignup ? 'SIGN UP' : 'LOGIN'}
          </button>
        </form>

        <div className="signup-link">
          {isSignup ? 'Already have an account?' : 'Don’t have an account?'}{' '}
          <a onClick={() => setIsSignup(prev => !prev)} style={{ cursor: 'pointer' }}>
            {isSignup ? 'Sign In' : 'Sign Up'}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sign;
