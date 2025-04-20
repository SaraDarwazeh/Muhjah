import React from 'react';
import Navbar from '../Navbar/Navbar';
import './mainPage.css';

const MainPage = () => {
    return (
        <div className="main-page-wrapper">
            <Navbar />
            <div className="main-dashboard">
                <h1>مرحبًا بك في Muhja       .👧       .............</h1>

                <div className="dashboard-grid">
                    <div className="dashboard-box">
                        <h2>12 👶</h2>
                        <p>عدد الأطفال المسجلين</p>
                    </div>
                    <div className="dashboard-box">
                        <h2>8 💬</h2>
                        <p>الاستشارات</p>
                    </div>
                    <div className="dashboard-box">
                        <h2>3 📅</h2>
                        <p>أنشطة اليوم</p>
                    </div>
                    <div className="dashboard-box">
                        <h2>5 🔔</h2>
                        <p>التنبيهات</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MainPage;
