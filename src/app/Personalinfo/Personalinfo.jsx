// src/components/Personalinfo.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import BAR from "../Sidebar/Sidebar";
import "./Personalinfo.css";

const Personalinfo = () => {
    // حالات لإدخال القيم في القوائم المنسدلة
    const [language, setLanguage] = useState("عربي");
    const [dateFormat, setDateFormat] = useState("MM/DD/YYYY");
    const [timeFormat, setTimeFormat] = useState("12h (am/pm)");
    const [country, setCountry] = useState("فلسطين");
    const [timezone, setTimezone] = useState("Central Time - Palestine");

    // لتحديث الوقت الحالي كل دقيقة
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

    return (
        <div className="page-container">

            {/* 2) حاوية Sidebar + المحتوى الرئيسي */}
            <div className="content-wrapper">


                {/* منطقة المحتوى الرئيسية فقط (بدون أي رأس آخر فوقها) */}
                <div className="main-content">
                    {/* ===== عنوان القسم فقط ===== */}
                    <h2 className="section-title">إعدادات الأمان والتحكم</h2>

                    {/* ===== ثلاثة حقول نصية في صف واحد ===== */}
                    <div className="inputs-row">
                        <input
                            type="text"
                            placeholder="إعدادات الأمان والتحكم"
                            className="text-input"
                        />
                        <input
                            type="text"
                            placeholder="تخصيص جدول العمل الذكي"
                            className="text-input"
                        />
                        <input
                            type="text"
                            placeholder="تكامل مع المنصة وتطبيقات أخرى"
                            className="text-input"
                        />
                    </div>

                    {/* ===== صف القوائم المنسدلة الأول ===== */}
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

                    {/* ===== صف القوائم المنسدلة الثاني ===== */}
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

                    {/* ===== أزرار الإلغاء والحفظ ===== */}
                    <div className="button-row">
                        <button className="btn cancel-btn">إلغاء</button>
                        <button className="btn save-btn">حفظ التغييرات</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personalinfo;
