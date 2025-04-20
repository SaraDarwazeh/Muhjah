import React, { useState } from 'react';
import './ForgetPassword.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCheckCircle } from 'react-icons/fa';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(password)) {
      setPasswordError("Password must be at least 8 characters long, include one uppercase letter, and one number.");
    } else {
      setPasswordError('');
    }
  };

  const checkEmail = () => {
    if (email === "jamal.ilaiwi@gmail.com") {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    setIsEmailChecked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password has been updated successfully!");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="forget-password-page">
      <div className="form-box">
        <div className="emoji">👶</div>
        <h2>Forget Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <button type="button" className="check-btn" onClick={checkEmail}>Check Email</button>

          {isEmailChecked && !isEmailValid && (
            <div className="error-message">Email not found! Please try again.</div>
          )}

          {isEmailValid && (
            <>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Enter new password"
                  required
                />
                <span className="eye-icon" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {passwordError && <div className="error-message">{passwordError}</div>}

              <button type="submit" className="submit-btn" disabled={passwordError}>
                Submit
              </button>

              {!passwordError && newPassword && (
                <div className="success-message">
                  <FaCheckCircle /> Password Updated Successfully
                </div>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
