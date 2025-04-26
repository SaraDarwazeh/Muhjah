// src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sign from './app/sign/sign';
import MainPage from './app/MainPage/MainPage';
import ForgetPassword from './app/ForgetPassword/ForgetPassword';
import ChatUI from './app/Chat/Chat';
import Navbar from './app/Navbar/Navbar';

// صفحات مؤقتة لروابط النافبار
const EmptyPage = ({ title }) => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>{title}</h2>
    <p>This page will be implemented soon.</p>
  </div>
);

function App() {
  const location = useLocation();

  // اخفاء الـ Navbar على هذين المسارين تمامًا
  const hideNavbarOn = ['/', '/forget-password'];
  const shouldShowNavbar = !hideNavbarOn.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}

      <Routes>
        {/* صفحة تسجيل الدخول */}
        <Route path="/" element={<Sign />} />

        {/* الصفحة الرئيسية بعد الدخول */}
        <Route path="/main" element={<MainPage />} />

        {/* صفحة استعادة كلمة المرور */}
        <Route path="/forget-password" element={<ForgetPassword />} />

        {/* روابط مؤقتة للنافبار */}
        <Route path="/overview" element={<EmptyPage title="Overview" />} />
        <Route path="/appointments" element={<EmptyPage title="Appointments" />} />
        <Route path="/الرسائل" element={<ChatUI />} />
        <Route path="/patients" element={<EmptyPage title="Patients" />} />
        <Route path="/schedule" element={<EmptyPage title="Schedule" />} />
        <Route path="/reports" element={<EmptyPage title="Reports" />} />
      </Routes>
    </>
  );
}

export default App;
