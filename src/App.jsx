import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sign from './app/sign/sign';
import MainPage from './app/MainPage/MainPage';
import ForgetPassword from './app/ForgetPassword/ForgetPassword';
import ChatUI from './app/Chat/Chat';
import Navbar from './app/Navbar/Navbar';
import Patients from './app/Patients/Patients'; // ✅ استيراد الكومبوننت الحقيقي للمرضى
// في بداية الملف
import Appointments from './app/Appointments/Appointments';


// صفحات مؤقتة لروابط النافبار الأخرى
const EmptyPage = ({ title }) => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>{title}</h2>
        <p>This page will be implemented soon.</p>
    </div>
);

function App() {
    const location = useLocation();
    const hideNavbarOn = ['/', '/forgot-password'];
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
                <Route path="/الرسائل" element={<ChatUI />} />
                <Route path="/patients" element={<Patients />} /> {/* ✅ تم تعديل هذا السطر */}
                <Route path="/schedule" element={<EmptyPage title="Schedule" />} />
                <Route path="/reports" element={<EmptyPage title="Reports" />} />
                <Route path="/المواعيد" element={<Appointments />} />

            </Routes>
        </>
    );
}

export default App;
