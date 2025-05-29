import React from "react";
import { FaSearch, FaPlus, FaFilter, FaPhone, FaCommentDots, FaEllipsisV } from "react-icons/fa";
import "./Patients.css";

const patients = new Array(10).fill(null).map((_, i) => ({
    id: i + 1,
    childName: "عمر كمال",
    guardianName: "هداية",
    birthDate: "11/12/2024",
    idNumber: "9203452020",
    gender: "ذكر",
    phone: "0599532488",
    address: "نابلس"
}));

export default function Patients() {
    return (
        <div className="patients-container">

            {/* Header actions */}
            <div className="patients-actions">
                <div className="left-actions">
                    <button className="btn orange-btn">
                        <FaPlus /> <span>اضافة مريض</span>
                    </button>
                    <button className="btn gray-btn">
                        <FaFilter /> <span>فلتر</span>
                    </button>
                </div>
                <div className="search-box">
                    <FaSearch />
                    <input type="text" placeholder="بحث..." />
                </div>
            </div>

            {/* Table */}
            <div className="patients-table">
                <div className="table-row header">
                    <div>رقم المريض</div>
                    <div>اسم الطفل</div>
                    <div>اسم ولي الأمر</div>
                    <div>تاريخ ميلاد الطفل</div>
                    <div>رقم الهوية</div>
                    <div>الجنس</div>
                    <div>الهاتف</div>
                    <div>العنوان</div>
                    {/* 3 أعمدة مخصصة للأيقونات */}

                    <div>الإجراءات</div>

                </div>
                {patients.map((p, i) => (
                    <div className={`table-row ${i % 2 === 1 ? 'alt-row' : ''}`} key={i}>
                        <div>{p.id}</div>
                        <div>{p.childName}</div>
                        <div>{p.guardianName}</div>
                        <div>{p.birthDate}</div>
                        <div>{p.idNumber}</div>
                        <div>{p.gender}</div>
                        <div>{p.phone}</div>
                        <div>{p.address}</div>



                    </div>
                ))}
            </div>
        </div>
    );
}
