import React from 'react';
import { Baby, Bell, CalendarDays, MessageCircle } from 'lucide-react';
import './mainPage.css';
import logo from "../../assets/Muhja.png";
//import doctorImg from "../../assets/Dr.png";   // صورة الدكتور من مجلد assets ✅
import { useNavigate } from 'react-router-dom';  // استيراد useNavigate


const MainPage = () => {

    const navigate = useNavigate();

    const handleReviewClick = () => {
        navigate('/feedback');  // توجه لصفحة feedback عند الضغط
    };
    return (
        <div className="main-wrapper">

            <div className="greeting-section">
                <h2>مرحباً، د.محمد مصطفى</h2>


            </div>


            <button className="review-button" onClick={handleReviewClick}>مراجعة المنشورات</button>

            <div className="greeting-section">

                <h3>إليك نظرة سريعة على نشاطاتك اليوم </h3>

            </div>

            <div className="stats-container">
                <div className="stat-card pink-border">
                    <div className="stat-icon">
                        <img src="src/assets/baby_icon_home.png"   style={{ width: '90px', height: '90px' }} />


                    </div>
                    <div className="stat-text">
                        <h4>12</h4>
                        <p>عدد الأطفال المسجلين</p>
                    </div>
                </div>

                <div className="stat-card orange-border">
                    <div className="stat-icon">
                        <img src="src/assets/message_icon_home.png"   style={{ width: '90px', height: '90px' }} />

                    </div>
                    <div className="stat-text">
                        <h4>8</h4>
                        <p>استشارات قيد المتابعة</p>
                    </div>
                </div>

                <div className="stat-card red-border">
                    <div className="stat-icon">
                        <img src="src/assets/Calender_icon_home.png"   style={{ width: '90px', height: '90px' }} />
                    </div>
                    <div className="stat-text">
                        <h4>3</h4>
                        <p>مواعيد اليوم</p>
                    </div>
                </div>

                <div className="stat-card yellow-border">
                    <div className="stat-icon">
                        <img src="src/assets/Notfication_icon_home.png"   style={{ width: '90px', height: '90px' }} />
                    </div>
                    <div className="stat-text">
                        <h4>11</h4>
                        <p>تنبيهات جديدة</p>
                    </div>
                </div>
            </div>

            <div className="appointments-section">
                <h3>جدول مواعيد اليوم</h3>
                <div className="appointments-grid">
                    <div className="appointment-card">
                        <span className="time">11:00 صباحاً</span>
                        <p>استشارة - الطفل هادي عبيد</p>
                    </div>
                    <div className="appointment-card">
                        <span className="time">12:00 ظهراً</span>
                        <p>استشارة - الطفلة مها قاسم</p>
                    </div>
                    <div className="appointment-card">
                        <span className="time">1:00 ظهراً</span>
                        <p>استشارة - الطفل محمد عمر</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
