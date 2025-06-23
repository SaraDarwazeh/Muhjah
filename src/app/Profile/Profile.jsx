import React from 'react';
import './Profile.css';
import profileImg from '../../assets/profile-photo.png'; // ضع الصورة هنا

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-info">
            <h2>د. محمد مصطفى</h2>
            <h4>أخصائي أطفال</h4>
            <p>📍 نابلس - رفيديا</p>
            <p>✉️ mohammad@gmail.com</p>
            <p>📞 0599250250</p>
            <div className="profile-stars">
              {'⭐'.repeat(5)}
            </div>
          </div>
          <img src={profileImg} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-description">
          <h3>نظرة عامة :</h3>
          <p>
            أنا الدكتور محمد مصطفى، أخصائي طب الأطفال، أعمل في مدينة نابلس – فلسطين. أحرص في عملي على توفير رعاية طبية شاملة ومبنية على أسس علمية حديثة، مع التركيز على دعم صحة الطفل الجسدية والنفسية.
          </p>
          <p>
            أقدم خدماتي الطبية للأطفال من خلال العيادة وأيضاً عبر الاستشارات الطبية الإلكترونية، حيث أؤمن بأهمية تسهيل الوصول إلى الرعاية، خاصة في الحالات التي يصعب فيها الحضور إلى العيادة. من خلال الاستشارات الأونلاين، أتابع الحالات المزمنة، أقدم الإرشادات للآباء، وأساهم في تشخيص وعلاج المشاكل الشائعة لدى الأطفال بشكل آمن وسريع.
          </p>
          <p>
            رسالتي دائماً هي بناء علاقة ثقة وتعاون مع العائلة، لأن صحة الطفل تبدأ من بيئة مطمئنة وتواصل واضح بين الطبيب والأهل.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
