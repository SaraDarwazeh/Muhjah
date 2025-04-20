import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Muhja.png";      // شعار التطبيق
import doctorImg from "../../assets/kk.jpg";   // صورة الدكتور من مجلد assets ✅

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const body = document.body;
    const navbar = document.querySelector(".navbar");

    if (darkMode) {
      body.classList.add("dark-mode");
      navbar?.classList.add("dark-navbar");
    } else {
      body.classList.remove("dark-mode");
      navbar?.classList.remove("dark-navbar");
    }
  }, [darkMode]);

  if (["/sign", "/forget-password"].includes(location.pathname)) return null;

  return (
      <nav className="navbar navbar-expand-lg shadow-sm fixed-top">
        <div className="container-fluid">
          {/* الشعار + اسم التطبيق */}
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/main">
            <img src={logo} alt="الشعار" className="logo-img" />
          </Link>

          {/* روابط التصفّح */}
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              {["نظرة عامة", "المواعيد", "المرضى", "الجدول", "التقارير", "الرسائل"].map(
                  (item, index) => (
                      <li className="nav-item" key={index}>
                        <Link className="nav-link" to={`/${item.replace(/\s/g, '').toLowerCase()}`}>
                          {item}
                        </Link>
                      </li>
                  )
              )}
            </ul>
          </div>

          {/* معلومات المستخدم */}
          <div className="user-profile" onClick={toggleDropdown}>
            <img
                src={doctorImg}
                alt="المستخدم"
                className="profile-img"
            />
            <div className="user-info">
              <span className="d-block fw-semibold">د. مهجتي </span>
              <span className="text-muted small">natasiabunny@mail.com</span>
            </div>
            <i className={`bi ${isOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>

            {isOpen && (
                <div className="dropdown-menu-custom">
                  <Link to="/profile" className="dropdown-item">إعدادات الحساب</Link>
                  <button className="dropdown-item" onClick={toggleDarkMode}>
                    {darkMode ? "الوضع الفاتح" : "الوضع الداكن"}
                  </button>
                  <hr />
                  <Link to="/" className="dropdown-item text-danger">تسجيل الخروج</Link>
                </div>
            )}
          </div>
        </div>
      </nav>
  );
};

export default Navbar;