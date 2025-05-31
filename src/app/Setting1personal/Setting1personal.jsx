import React, { useState } from 'react';
import './Setting1personal.css';

const SettingsPage = () => {
  const [form, setForm] = useState({
    control: '',
    schedule: '',
    integration: '',
    language: 'ar',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h',
    country: 'فلسطين',
    timezone: 'Central Time - Palestine'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert('تم حفظ التغييرات ✅');
  };

  const handleCancel = () => {
    alert('تم إلغاء التعديلات');
  };

  return (
    <div className="settings-container">
      <div className="settings-box">
        <input
          type="text"
          name="control"
          placeholder="إعدادات الأمان والتحكم"
          value={form.control}
          onChange={handleChange}
        />
        <input
          type="text"
          name="schedule"
          placeholder="تحصيح جدول العمل الذكي"
          value={form.schedule}
          onChange={handleChange}
        />
        <input
          type="text"
          name="integration"
          placeholder="تكامل مع أنظمة وتطبيقات أخرى"
          value={form.integration}
          onChange={handleChange}
        />

        <select name="language" value={form.language} onChange={handleChange}>
          <option value="ar">عربي</option>
          <option value="en">English</option>
        </select>

        <div className="row">
          <label>نسق التاريخ</label>
          <select name="dateFormat" value={form.dateFormat} onChange={handleChange}>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          </select>

          <label>نسق الوقت</label>
          <select name="timeFormat" value={form.timeFormat} onChange={handleChange}>
            <option value="12h">12h (am/pm)</option>
            <option value="24h">24h</option>
          </select>
        </div>

        <select name="country" value={form.country} onChange={handleChange}>
          <option value="فلسطين">فلسطين</option>
          <option value="الأردن">الأردن</option>
          <option value="لبنان">لبنان</option>
        </select>

        <select name="timezone" value={form.timezone} onChange={handleChange}>
          <option value="Central Time - Palestine">Central Time - Palestine</option>
          <option value="Europe/Berlin">Europe - Berlin</option>
          <option value="Asia/Amman">Asia - Amman</option>
        </select>

        <div className="actions">
          <button className="cancel" onClick={handleCancel}>إلغاء</button>
          <button className="save" onClick={handleSave}>حفظ التغييرات</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
