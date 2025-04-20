import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign.css';
import Logo from "../../assets/Muhja.png";
import UserIcon from "../../assets/Message.svg";
import EmailIcon from "../../assets/Message-1.svg";
import LockIcon from "../../assets/Lock-icon.svg";
import EyeSlash from "../../assets/Eye-slash.svg";
import GoogleIcon from "../../assets/Google.svg";
import FacebookIcon from "../../assets/Facebook.svg";

export default function Sign() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    familyName: '',
    firstName: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isSignup) {
      alert('تم إنشاء الحساب بنجاح!');
    } else {
      alert('تم تسجيل الدخول!');
    }
    navigate('/main');
  };

  return (
    <div className="wrapper">
      <div className="form-card">
        {/* Use .logo class for sizing */}
        <img src={Logo} alt="Muhja Logo" className="logo" />
        <h2 className="form-title">{isSignup ? 'التسجيل' : 'تسجيل الدخول'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <img src={UserIcon} alt="User" className="icon left" />
            <input
              type="text"
              name="username"
              placeholder="اسم المستخدم"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {!isSignup && null}
          {isSignup && (
            <div className="input-group">
              <img src={EmailIcon} alt="Email" className="icon left" />
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {isSignup && (
            <div className="row">
              <div className="input-group">
                <img src={UserIcon} alt="Family" className="icon left" />
                <input
                  type="text"
                  name="familyName"
                  placeholder="العائلة"
                  value={formData.familyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <img src={UserIcon} alt="First" className="icon left" />
                <input
                  type="text"
                  name="firstName"
                  placeholder="الاسم الأول"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          )}

          <div className="input-group password-group">
            <img src={LockIcon} alt="Lock" className="icon left" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="كلمة المرور"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <img
              src={EyeSlash}
              alt="Toggle"
              className="icon right eye"
              onClick={() => setShowPassword(v => !v)}
            />
          </div>

          {!isSignup && <p className="forgot">نسيت كلمة المرور؟</p>}

          <button type="submit" className="action-btn">
            {isSignup ? 'التسجيل' : 'تسجيل الدخول'}
          </button>
        </form>

        <div className="separator">— Or Continue with —</div>

        <div className="social-icons">
          <img src={GoogleIcon} alt="Google" />
          <img src={FacebookIcon} alt="Facebook" />
        </div>

        <p className="toggle-text">
          {isSignup ? 'لديك حساب بالفعل؟' : 'ليس لديك حساب؟'}{' '}
          <span onClick={() => setIsSignup(f => !f)}>
            {isSignup ? 'تسجيل الدخول' : 'التسجيل'}
          </span>
        </p>
      </div>
    </div>
  );
}
