import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sign from './app/sign/sign';
import MainPage from './app/MainPage/MainPage';
import ForgetPassword from './app/ForgetPassword/ForgetPassword';
import ChatUI from './app/Chat/Chat';
import Navbar from './app/Navbar/Navbar';
import BAR from './app/Sidebar/Sidebar';
import Appointments from './app/Appointments/Appointments';


const EmptyPage = ({ title }) => (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>{title}</h2>
        <p>This page will be implemented soon.</p>
    </div>
);

function App() {
    const location = useLocation();
    const hideLayoutOn = ['/', '/forgot-password'];

    const shouldShowLayout = !hideLayoutOn.includes(location.pathname);

    return (
        <>
            {shouldShowLayout ? (
                <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                    <Navbar />
                    <div style={{ display: 'flex', flex: 1 }}>
                        <BAR />
                        <div style={{ flex: 1, overflowY: 'auto' }}>
                            <Routes>
                                <Route path="/main" element={<MainPage />} />
                                <Route path="/overview" element={<EmptyPage title="Overview" />} />
                                <Route path="/appointments" element={<EmptyPage title="Appointments" />} />
                                <Route path="/الرسائل" element={<ChatUI />} />
                                <Route path="/patients" element={<EmptyPage title="Patients" />} />
                                <Route path="/schedule" element={<EmptyPage title="Schedule" />} />
                                <Route path="/reports" element={<EmptyPage title="Reports" />} />

                                {/* روابط من Sidebar */}
                                <Route path="/الرئيسية" element={<MainPage />} />
                                <Route path="/المواعيد" element={<Appointments />} />
                                <Route path="/المرضى" element={<EmptyPage title="المرضى" />} />
                                <Route path="/حسابي" element={<EmptyPage title="حسابي" />} />
                                <Route path="/تعديل-المعلومات" element={<EmptyPage title="تعديل المعلومات" />} />
                                <Route path="/الإشعارات" element={<EmptyPage title="الإشعارات والتنبيهات" />} />
                                <Route path="/إعدادات-متقدمة" element={<EmptyPage title="إعدادات متقدمة" />} />
                            </Routes>

                        </div>
                    </div>
                </div>
            ) : (
                <Routes>
                    <Route path="/" element={<Sign />} />
                    <Route path="/forgot-password" element={<ForgetPassword />} />
                </Routes>
            )}
        </>
    );
}

export default App;
