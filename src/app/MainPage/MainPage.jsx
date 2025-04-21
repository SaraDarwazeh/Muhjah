import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Baby, CalendarDays, Bell, MessageCircle } from 'lucide-react';
import './mainPage.css';

const MainPage = () => {
    return (
        <div className="main-page-wrapper">
            <Navbar />
            <div className="main-dashboard">
                <h1>👨‍⚕️ أهلاً بك دكتور في لوحة التحكم</h1>
                <p>إليك نظرة سريعة على نشاطاتك اليوم</p>

                <div className="dashboard-row">
                    <div className="dashboard-box">
                        <Baby size={36} color="#f5b047" />
                        <h2>12</h2>
                        <p>عدد الأطفال المسجلين</p>
                    </div>
                    <div className="dashboard-box">
                        <MessageCircle size={36} color="#f5b047" />
                        <h2>8</h2>
                        <p>استشارات قيد المتابعة</p>
                    </div>
                    <div className="dashboard-box">
                        <CalendarDays size={36} color="#f5b047" />
                        <h2>3</h2>
                        <p>مواعيد اليوم</p>
                    </div>
                    <div className="dashboard-box">
                        <Bell size={36} color="#f5b047" />
                        <h2>5</h2>
                        <p>تنبيهات جديدة</p>
                    </div>
                </div>

                <div className="schedule-section">
                    <h3><CalendarDays size={24} color="#e96c53" style={{ marginLeft: '8px' }} /> جدول مواعيد اليوم</h3>
                    <div className="schedule-grid">
                        <div className="schedule-card">
                            <span>10:00 صباحًا</span>
                            <p>استشارة - الطفل أحمد</p>
                        </div>
                        <div className="schedule-card">
                            <span>12:00 ظهرًا</span>
                            <p>متابعة - الطفلة مريم</p>
                        </div>
                        <div className="schedule-card">
                            <span>02:30 عصرًا</span>
                            <p>جلسة توجيه للأهل</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
