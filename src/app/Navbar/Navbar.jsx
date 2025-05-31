// src/components/Navbar/Navbar.jsx

import { Bell } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/Muhja.png";
import userImage from "../../assets/Dr.png";

const Navbar = () => {


  return (
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Muhja Logo" className="logo-image" />
        </div>

        <div className="user-section">
          <div className="notification-icon">
            <Bell size={20} color="#e5635b" />
          </div>

          <div className="user-dropdown">
            <span className="user-name">د. محمد مصطفى</span>
            <img src={userImage} alt="User" className="user-image" />
            {/* لاحظ وجود مسافة قبل onClick */}

          </div>
        </div>
      </div>
  );
};

export default Navbar;