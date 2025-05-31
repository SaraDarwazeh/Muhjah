import React, { useState } from "react";
import "./Appointments.css";
import { FaEnvelope, FaPhone, FaEllipsisV } from "react-icons/fa";

const Appointments = () => {
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("كل الحالات");

    const appointments = [
        { id: 1, name: "محمد خليل", date: "2025-06-01", time: "10:00", service: "فحص عام", duration: "30 دقيقة", phone: "0599123456", status: "مؤكد" },
        { id: 2, name: "سارة علي", date: "2025-06-01", time: "10:30", service: "تحاليل", duration: "20 دقيقة", phone: "0599988776", status: "بانتظار" },
        { id: 3, name: "أحمد يوسف", date: "2025-06-01", time: "11:00", service: "استشارة", duration: "45 دقيقة", phone: "0599111222", status: "ملغي" },
        { id: 4, name: "ليلى حسن", date: "2025-06-01", time: "11:45", service: "متابعة", duration: "15 دقيقة", phone: "0599443322", status: "مؤكد" },
        { id: 5, name: "رامي أحمد", date: "2025-06-01", time: "12:15", service: "فحص سكري", duration: "25 دقيقة", phone: "0599332211", status: "بانتظار" },
        { id: 6, name: "هدى عمر", date: "2025-06-01", time: "13:00", service: "تحاليل", duration: "20 دقيقة", phone: "0599776655", status: "مؤكد" },
        { id: 7, name: "سامر طه", date: "2025-06-01", time: "13:30", service: "استشارة", duration: "40 دقيقة", phone: "0599554433", status: "ملغي" },
        { id: 8, name: "دينا خالد", date: "2025-06-01", time: "14:10", service: "فحص ضغط", duration: "15 دقيقة", phone: "0599222211", status: "مؤكد" },
        { id: 9, name: "زياد سليم", date: "2025-06-01", time: "14:30", service: "متابعة", duration: "35 دقيقة", phone: "0599001122", status: "بانتظار" },
        { id: 10, name: "نور حسن", date: "2025-06-01", time: "15:10", service: "فحص عام", duration: "30 دقيقة", phone: "0599111999", status: "مؤكد" },
    ];

    const filteredAppointments = appointments.filter(app => {
        const matchesSearch =
            app.name.includes(search) || app.phone.includes(search);
        const matchesStatus =
            statusFilter === "كل الحالات" || app.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="appointments-container">
            <h2 className="title">قائمة المواعيد</h2>

            <div className="filters">
                <select
                    className="filter-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option>كل الحالات</option>
                    <option>مؤكد</option>
                    <option>بانتظار</option>
                    <option>ملغي</option>
                </select>
                <input
                    type="text"
                    placeholder="ابحث بالاسم أو الرقم..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="appointments-table">
                <div className="table-header">
                    <span>رقم</span>
                    <span>اسم المريض</span>
                    <span>التاريخ</span>
                    <span>الوقت</span>
                    <span>الخدمة المطلوبة</span>
                    <span>المدة</span>
                    <span>الهاتف</span>
                    <span>الحالة</span>
                    <span>الإجراءات</span>
                </div>

                {filteredAppointments.map((app, i) => (
                    <div className="table-row" key={app.id}>
                        <span>{i + 1}</span>
                        <span>{app.name}</span>
                        <span>{app.date}</span>
                        <span>{app.time}</span>
                        <span>{app.service}</span>
                        <span>{app.duration}</span>
                        <span>{app.phone}</span>
                        <span>{app.status}</span>
                        <span className="actions-cell">
                            <FaEnvelope className="action-icon" />
                            <FaPhone className="action-icon" />
                            <FaEllipsisV className="action-icon" />
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Appointments;
