// src/app/Personalinfo/Personalinfo.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";    
import "./Personalinfo.css";       // تأكد من أن الاسم والمجلد متطابقان
import profilePic from "../../assets/Dr.png";
import { Trash2, Shield, Calendar, Layers } from "lucide-react";

const Personalinfo = () => {
  // ======= حالات حقول الملف الشخصي =======
  const [fullName, setFullName] = useState("د. محمد مصطفى");
  const [overview, setOverview] = useState(
    "أنا الدكتور محمد مصطفى، أخصائي طب الأطفال، أعمل في مدينة نابلس - فلسطين. " +
      "أحرص في عملي على توفير رعاية طبية شاملة ومبنية على أسس علمية حديثة، " +
      "مع التركيز على دعم صحة الطفل الجسدية والنفسية."
  );
  const [email, setEmail] = useState("mohammad@gmail.com");
  const [country, setCountry] = useState("فلسطين");
  const [address, setAddress] = useState("نابلس - رفيديا");
  const [phone, setPhone] = useState("نابلس - رفيديا");
  const [password, setPassword] = useState("");

  // ======= حالات إعدادات الأمان (القسم السفلي) =======
  const [language, setLanguage] = useState("عربي");
  const [dateFormat, setDateFormat] = useState("MM/DD/YYYY");
  const [timeFormat, setTimeFormat] = useState("12h (am/pm)");
  const [timezone, setTimezone] = useState("Central Time - Palestine");

  // ======= تحديث الوقت الحالي كل دقيقة =======
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const suffix = hours >= 12 ? "pm" : "am";
      hours = hours % 12 === 0 ? 12 : hours % 12;
      const mm = minutes < 10 ? "0" + minutes : minutes;
      setCurrentTime(`${hours}:${mm} ${suffix}`);
    };
    updateClock();
    const timerId = setInterval(updateClock, 60 * 1000);
    return () => clearInterval(timerId);
  }, []);

  // ======= دوال تجريبية للأزرار =======
  const handleSaveAll = () => {
    alert("تم حفظ جميع التغييرات");
  };
  const handleCancelAll = () => {
    // إعادة القيم الافتراضية لجميع الحقول
    setFullName("د. محمد مصطفى");
    setOverview(
      "أنا الدكتور محمد مصطفى، أخصائي طب الأطفال، أعمل في مدينة نابلس - فلسطين. " +
        "أحرص في عملي على توفير رعاية طبية شاملة ومبنية على أسس علمية حديثة، " +
        "مع التركيز على دعم صحة الطفل الجسدية والنفسية."
    );
    setEmail("mohammad@gmail.com");
    setCountry("فلسطين");
    setAddress("نابلس - رفيديا");
    setPhone("نابلس - رفيديا");
    setPassword("");

    setLanguage("عربي");
    setDateFormat("MM/DD/YYYY");
    setTimeFormat("12h (am/pm)");
    setTimezone("Central Time - Palestine");
  };
  const handleDeleteImage = () => {
    alert("تم حذف صورة الملف الشخصي");
  };

  return (
    <div className="profile-page-container">
      {/* ======= قسم تعديل الملف الشخصي ======= */}
      <div className="profile-top-section">
        {/* عمود الصورة والأزرار */}
        <div className="profile-image-container">
          <img src={profilePic} alt="Profile" className="profile-image" />
          <div className="image-buttons">
            <button className="btn update-btn">تحديث</button>
            <button className="btn delete-btn" onClick={handleDeleteImage}>
              <Trash2 size={16} />
              <span>حذف</span>
            </button>
          </div>
        </div>

        {/* عمود حقول الملف الشخصي */}
        <div className="profile-fields-container">
          <div className="field-group">
            <label>الاسم</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="field-group">
            <label>نظرة عامة</label>
            <textarea
              className="overview-textarea"
              rows={4}
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            />
          </div>

          <div className="field-group">
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="field-group">
            <label>الدولة</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="فلسطين">فلسطين</option>
              <option value="الأردن">الأردن</option>
              <option value="مصر">مصر</option>
              <option value="لبنان">لبنان</option>
            </select>
          </div>

          <div className="field-group">
            <label>العنوان</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="field-group">
            <label>رقم الهاتف</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="field-group">
            <label>تغيير كلمة سر الحساب</label>
            <input
              type="password"
              placeholder="أدخل كلمة السر الجديدة"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ======= فاصل بسيط ======= */}
      <hr className="divider" />

      {/* ======= قسم إعدادات الأمان والتحكم ======= */}
      <div className="settings-bottom-section">
   

        {/* ======= صف الأزرار الأيقونية العمودي ======= */}
        <div className="nav-buttons-column">
          <Link to="/settings/security" className="nav-button">
            <Shield size={20} className="nav-icon" />
            <span>إعدادات الأمان والتحكم</span>
          </Link>

          <Link to="/settings/schedule" className="nav-button">
            <Calendar size={20} className="nav-icon" />
            <span>تخصيص جدول العمل الذكي</span>
          </Link>

          <Link to="/settings/integrations" className="nav-button">
            <Layers size={20} className="nav-icon" />
            <span>تكامل مع المنصة وتطبيقات أخرى</span>
          </Link>
        </div>

        {/* ======= صف اختيار اللغة، التاريخ، الوقت ======= */}
        <div className="select-row">
          <div className="select-wrapper">
            <label>اللغة</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="عربي">عربي</option>
              <option value="English">English</option>
              <option value="Français">Français</option>
            </select>
          </div>

          <div className="select-wrapper">
            <label>تنسيق التاريخ</label>
            <select
              value={dateFormat}
              onChange={(e) => setDateFormat(e.target.value)}
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY/MM/DD">YYYY/MM/DD</option>
            </select>
          </div>

          <div className="select-wrapper">
            <label>تنسيق الوقت</label>
            <select
              value={timeFormat}
              onChange={(e) => setTimeFormat(e.target.value)}
            >
              <option value="12h (am/pm)">12h (am/pm)</option>
              <option value="24h">24h</option>
            </select>
          </div>
        </div>

        {/* ======= صف اختيار الدولة، المنطقة الزمنية، عرض الوقت الحالي ======= */}
        <div className="select-row">
          <div className="select-wrapper">
            <label>الدولة</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="فلسطين">فلسطين</option>
              <option value="الأردن">الأردن</option>
              <option value="مصر">مصر</option>
              <option value="لبنان">لبنان</option>
            </select>
          </div>

          <div className="select-wrapper">
            <label>المنطقة الزمنية</label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            >
              <option value="Central Time - Palestine">
                Central Time - Palestine
              </option>
              <option value="Eastern Time - USA">Eastern Time - USA</option>
              <option value="GMT">GMT</option>
              <option value="CET">CET</option>
            </select>
          </div>

          <div className="select-wrapper">
            <label>الوقت الحالي</label>
            <span className="current-time">{currentTime}</span>
          </div>
        </div>
      </div>

      {/* ======= زرّ “إلغاء” و “حفظ التغييرات” في نهاية الصفحة ======= */}
      <div className="footer-buttons">
        <button className="btn cancel-btn" onClick={handleCancelAll}>
          إلغاء
        </button>
        <button className="btn save-btn" onClick={handleSaveAll}>
          حفظ التغييرات
        </button>
      </div>
    </div>
  );
};

export default Personalinfo;
