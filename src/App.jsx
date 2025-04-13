import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sign from './app/sign/sign';
import MainPage from './app/MainPage/MainPage';
import ForgetPassword from './app/ForgetPassword/ForgetPassword';
import ChatUI from './app/Chat/Chat'; // ✅ تأكد من استيراد الكومبوننت الصح
import Navbar from './app/Navbar/Navbar'; // ✅ تأكد من المسار الصح

// صفحات مؤقتة لروابط النافبار
const EmptyPage = ({ title }) => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>{title}</h2>
    <p>This page will be implemented soon.</p>
  </div>
);

function App() {
  const location = useLocation();
  const hideNavbarOn = ['/']; // المسارات اللي ما بدنا الناف بار يظهر فيها

  const shouldShowNavbar = !hideNavbarOn.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/overview" element={<EmptyPage title="Overview" />} />
        <Route path="/appointments" element={<EmptyPage title="Appointments" />} />
        <Route path="/messages" element={<ChatUI />} />
        <Route path="/patients" element={<EmptyPage title="Patients" />} />
        <Route path="/schedule" element={<EmptyPage title="Schedule" />} />
        <Route path="/reports" element={<EmptyPage title="Reports" />} />
      </Routes>
    </>
  );
}

export default App;
