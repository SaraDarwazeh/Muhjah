import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './sign.css';

import MomImage from '../../assets/sgmom.svg';
import Logo from '../../assets/Muhja.svg';
import UserIcon from '../../assets/Message.svg';
import EmailIcon from '../../assets/Message-1.svg';
import LockIcon from '../../assets/Lock-icon.svg';
import EyeSlash from '../../assets/Eye-slash.svg';
import GoogleIcon from '../../assets/Google.svg';
import FacebookIcon from '../../assets/Facebook.svg';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        // signup
        await axios.post('http://127.0.0.1:8000/auth/signup/', {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          first_name: formData.firstName,
          last_name: formData.familyName,
          role: 'DOCTOR'
        });
        alert('تم التسجيل بنجاح! يمكنك تسجيل الدخول الآن.');
        setIsSignup(false);
      } else {
        // login
        const response = await axios.post('http://127.0.0.1:8000/auth/login/', {
          username: formData.username,
          password: formData.password
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('first_name', response.data.first_name || 'مستخدم');
        navigate('/main');
      }
    } catch (err) {
      console.error(err);
      alert('حدث خطأ أثناء العملية. تأكد من البيانات.');
    }
  };

  return (
    <div className="wrapper">
      <div className="right-side">
        <img src={Logo} alt="Muhja Logo" className="muhja-logo" />
        <img src={MomImage} alt="Mom Illustration" className="mom-image" />
        <p className="welcome-text">
          مرحباً بك في منصة مُهجة،<br />
          حيث نربطك بالعالم بأمان وسهولة!
        </p>
      </div>

      <div className="left-side">
        <div className="form-card">
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

            {isSignup && (
              <>
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

                <div className="row">
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
                  <div className="input-group">
                    <img src={UserIcon} alt="Family" className="icon left" />
                    <input
                      type="text"
                      name="familyName"
                      placeholder="اسم العائلة"
                      value={formData.familyName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </>
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
                alt="Toggle visibility"
                className="icon right eye"
                onClick={() => setShowPassword(v => !v)}
              />
            </div>

            {!isSignup && (
              <p className="forgot">
                <Link to="/forget-password">نسيت كلمة المرور ؟</Link>
              </p>
            )}

            <button type="submit" className="action-btn">
              {isSignup ? 'التسجيل' : 'تسجيل الدخول'}
            </button>
          </form>

          <div className="separator">- أو تابع باستخدام -</div>

          <div className="social-icons">
            <img src={FacebookIcon} alt="Facebook" />
            <img src={GoogleIcon} alt="Google" />
          </div>

          <p className="toggle-text">
            {isSignup ? 'لديك حساب بالفعل؟' : 'ليس لديك حساب؟'}{' '}
            <span onClick={() => setIsSignup(f => !f)}>
              {isSignup ? 'تسجيل الدخول' : 'التسجيل'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
