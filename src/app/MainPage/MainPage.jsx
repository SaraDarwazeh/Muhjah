import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { Baby, CalendarDays, Bell, MessageCircle } from 'lucide-react';
import './mainPage.css';

const MainPage = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const BASE_URL = "http://127.0.0.1:8000"; // رابط الباكند

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/sign'); // لو مافي توكن يرجع على تسجيل الدخول
      return;
    }

    // جلب بيانات المستخدم
    axios.get(`${BASE_URL}/me/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      setUserData(response.data);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
      navigate('/sign'); // لو التوكن غلط أو السيرفر رفضه، يرجعه
    });
  }, [navigate]);

  return (
    <div className="main-page-wrapper">
      <Navbar />
      <div className="main-dashboard">
        {/* بدل الاسم الثابت، نظهر اسم الدكتور الحقيقي */}
        <h1>👨‍⚕️ أهلاً بك دكتور {userData ? userData.first_name : ''}</h1>
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
