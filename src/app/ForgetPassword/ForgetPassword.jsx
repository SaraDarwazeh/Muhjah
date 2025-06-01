// src/app/ForgetPassword/ForgetPassword.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ForgetPassword.css';
import Logo from '../../assets/Muhja.png';
import Illustration from '../../assets/Mum.png';
import UserIcon from '../../assets/Message.svg';
import LockIcon from '../../assets/Lock-icon.svg';
import EyeSlash from '../../assets/Eye-slash.svg';

export default function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  // تحديث قيمة البريد
  const handleEmailChange = e => {
    setEmail(e.target.value);
    // عند تعديل البريد، نعيد تهيئة نتائج التحقق
    setIsEmailChecked(false);
    setIsEmailValid(false);
  };

  // التحقق من البريد (تجريبي: البريد المسجّل مسبقًا هو jamal.ilaiwi@gmail.com)
  const checkEmail = () => {
    setIsEmailChecked(true);
    const trimmed = email.trim();
    setIsEmailValid(trimmed === 'jamal.ilaiwi@gmail.com');
  };

  // تحديث كلمة المرور والتحقق من المعايير
  const handleNewPasswordChange = e => {
    const pwd = e.target.value;
    setNewPassword(pwd);
    validatePassword(pwd);
  };
  const validatePassword = pwd => {
    // على الأقل 8 أحرف، حرف كبير واحد، رقم واحد
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(pwd)) {
      setPasswordError('');
    } else {
      setPasswordError(
        'يجب أن تكون كلمة المرور 8 أحرف على الأقل، وتتضمن حرفًا كبيرًا ورقمًا.'
      );
    }
  };

  // إرسال الطلب النهائي لتحديث كلمة المرور
  const handleSubmit = e => {
    e.preventDefault();
    // هنا يمكنك إضافة طلب API فعليّ لإعادة تعيين كلمة المرور
    // للأغراض التجريبية سنعرض رسالة ثم نعيد التوجيه
    alert('تم تحديث كلمة المرور بنجاح!');
    navigate('/login');
  };

  // إظهار/إخفاء كلمة المرور
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  return (
    <div className="wrapper-forget">
      {/* ======== الجانب الأيمن: اللوجو + الصورة الترحيبية ======== */}
      <div className="right-side-forget">
        <img src={Logo} alt="Logo" className="main-logo-forget" />
        <img src={Illustration} alt="Illustration" className="second-image-forget" />
        <p className="welcome-text-forget">
          مرحبًا بك في منصة مُهجة، حيث نربطك بالعالم بأمان وسهولة!
        </p>
      </div>

      {/* ======== الجانب الأيسر: نموذج “نسيت كلمة المرور” ======== */}
      <div className="left-side-forget">
        <div className="form-card-forget">
          <h2 className="form-title-forget">نسيت كلمة المرور؟</h2>
          <p className="instruction-forget">
            أدخل بريدك الإلكتروني للتحقق ثم اختر كلمة مرور جديدة
          </p>

          <form onSubmit={handleSubmit}>
            {/* --------- حقل البريد الإلكتروني --------- */}
            <div className="input-group-forget">
              <img src={UserIcon} alt="Email" className="icon left" />
              <input
                type="email"
                name="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <button
              type="button"
              className="action-btn-forget check-btn-forget"
              onClick={checkEmail}
            >
              تحقق من البريد
            </button>

            {isEmailChecked && !isEmailValid && (
              <div className="error-message-forget">البريد غير مسجل!</div>
            )}

            {/* إذا كان البريد صالحًا نظهر حقل كلمة المرور الجديدة */}
            {isEmailValid && (
              <>
                {/* --------- حقل كلمة المرور الجديدة --------- */}
                <div className="input-group-forget password-group-forget">
                  <img src={LockIcon} alt="Lock" className="icon left" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="newPassword"
                    placeholder="أدخل كلمة المرور الجديدة"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    required
                  />
                  <img
                    src={EyeSlash}
                    alt="Toggle visibility"
                    className="icon right eye"
                    onClick={togglePasswordVisibility}
                  />
                </div>

                {passwordError && (
                  <div className="error-message-forget">{passwordError}</div>
                )}

                <button
                  type="submit"
                  className="action-btn-forget submit-btn-forget"
                  disabled={!!passwordError || newPassword === ''}
                >
                  إرسال
                </button>

                {!passwordError && newPassword && (
                  <div className="success-message-forget">
                    <img
                      src="https://cdn.jsdelivr.net/gh/remixicon/remixicon/icons/System/check-circle-fill.svg"
                      alt="Success"
                      className="success-icon-forget"
                    />
                    تم التحديث بنجاح
                  </div>
                )}
              </>
            )}
          </form>

          <div className="back-to-login-forget">
            <Link to="/login">العودة إلى تسجيل الدخول</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
