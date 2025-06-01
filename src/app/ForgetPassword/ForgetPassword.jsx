// src/app/ForgetPassword/ForgetPassword.jsx

import React, { useState } from 'react';
import './ForgetPassword.css';
import Logo from '../../assets/Muhja.png';
import Illustration from '../../assets/Mum.png';
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle
} from 'react-icons/fa';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => {
    setNewPassword(e.target.value);
    validatePassword(e.target.value);
  };
  const validatePassword = pwd => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    setPasswordError(
      regex.test(pwd)
        ? ''
        : 'يجب أن تكون كلمة المرور 8 أحرف على الأقل، وتتضمن حرفًا كبيرًا ورقمًا.'
    );
  };
  const checkEmail = () => {
    setIsEmailChecked(true);
    setIsEmailValid(email.trim() === 'jamal.ilaiwi@gmail.com');
  };
  const handleSubmit = e => {
    e.preventDefault();
    alert('تم تحديث كلمة المرور بنجاح!');
  };
  const togglePasswordVisibility = () => setShowPassword(v => !v);

  return (
    <div className="forget-password-page">
      {/* Left panel */}
      <div className="panel form-panel">
        <div className="form-box">
          <h2>نسيت كلمة المرور؟</h2>
          <p className="instruction">
            أدخل بريدك الإلكتروني للتحقق ثم اختر كلمة مرور جديدة
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="أدخل بريدك الإلكتروني"
                required
              />
            </div>
            <button
              type="button"
              className="check-btn"
              onClick={checkEmail}
            >
              تحقق من البريد
            </button>

            {isEmailChecked && !isEmailValid && (
              <div className="error-message">البريد غير مسجل!</div>
            )}

            {isEmailValid && (
              <>
                <div className="input-group">
                  <FaLock className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={handlePasswordChange}
                    placeholder="أدخل كلمة المرور الجديدة"
                    required
                  />
                  <span
                    className="eye-icon"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                {passwordError && (
                  <div className="error-message">{passwordError}</div>
                )}

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={!!passwordError}
                >
                  إرسال
                </button>

                {!passwordError && newPassword && (
                  <div className="success-message">
                    <FaCheckCircle /> تم التحديث بنجاح
                  </div>
                )}
              </>
            )}
          </form>

          <div className="back-to-login">
            <Link to="/">العودة إلى تسجيل الدخول</Link>
          </div>
        </div>
      </div>

      {/* Right panel: imported PNGs */}
      <div className="panel image-panel">
        <img src={Logo} alt="Muhja Logo" className="logo" />
        <div className="illustration">
          <img src={Illustration} alt="أم وطفل" />
        </div>
        <h3>مرحبًا في منصة مُهجة</h3>
        <p>نربطك بالعالم بأمان وسهولة!</p>
      </div>
    </div>
  );
};

export default ForgetPassword;
