import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
    LayoutDashboard,
    Calendar,
    Mail,
    Users,
    Settings,
    ChevronDown,
    LogOut,
} from "lucide-react";
import "./Sidebar.css";

const BAR = () => {
    const [showSettings, setShowSettings] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const hideSidebarOn = ['/', '/sign', '/forget-password'];
    if (hideSidebarOn.includes(location.pathname)) return null;

    return (

        <div className="sidebar">

            <div className="items" >
                <Link to="/الرئيسية" className="nav-link">
                    <LayoutDashboard size={20} />
                    <span>الصفحة الرئيسية</span>
                </Link>

                <Link to="/المواعيد" className="nav-link">
                    <Calendar size={20} />
                    <span>المواعيد</span>
                </Link>

                <Link to="/الرسائل" className="nav-link">
                    <Mail size={20} />
                    <span>الرسائل</span>
                </Link>

                <Link to="/المرضى" className="nav-link">
                    <Users size={20} />
                    <span>المرضى</span>
                </Link>

                <div className="nav-link" onClick={() => setShowSettings(!showSettings)}>
                    <Settings size={20} />
                    <span>الإعدادات</span>
                    <ChevronDown size={16} style={{ marginRight: "auto" }} />
                </div>

                {showSettings && (
                    <div className="dropdown-links">
                        <Link to="/حسابي" className="dropdown-link">حسابي</Link>
                        <Link to="/تعديل-المعلومات" className="dropdown-link">تعديل المعلومات الشخصية</Link>
                        <Link to="/الإشعارات" className="dropdown-link">الإشعارات والتنبيهات</Link>
                        <Link to="/إعدادات-متقدمة" className="dropdown-link">إعدادات متقدمة</Link>
                    </div>
                )}
            </div>
            <div className="logout-box">
                <button
                    className="logout-btn"
                    onClick={() => navigate('/')} // يرجعك على صفحة تسجيل الدخول
                >
                    <LogOut size={16} />
                    <span>تسجيل الخروج</span>
                </button>


            </div>

        </div>
    );
};

export default BAR;