
import { Routes, Route, useLocation } from 'react-router-dom';

// صفحات الدخول
import Sign from './app/sign/Sign';
import ForgetPassword from './app/ForgetPassword/ForgetPassword';

// صفحات التطبيق
import MainPage from './app/MainPage/MainPage';
import ChatUI from './app/Chat/Chat';
import Feedback from './app/feedback/feedback';
import Personalinfo from './app/Personalinfo/Personalinfo.jsx';

import SettingsPage from './app/Setting1personal/Setting1personal';

// مكونات التصميم
import Navbar from './app/Navbar/Navbar';
import Sidebar from './app/Sidebar/Sidebar';

function App() {
  const location = useLocation();

  // صفحات لا تُعرض فيها الناف بار والسايد بار
  const hideLayoutOn = ['/', '/sign', '/forget-password'];
  const shouldShowLayout = !hideLayoutOn.includes(location.pathname);

  return (
    <>
      {shouldShowLayout && <Navbar />}
      {shouldShowLayout && <Sidebar />}

      <div style={{ 
     backgroundColor:"white" ,marginRight: shouldShowLayout ? '210px' : '0', padding: '20px' }}>
        <Routes>
          {/* صفحات الدخول */}
          <Route path="/" element={<Sign />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          {/* صفحات التطبيق */}
          <Route path="/الرئيسية" element={<MainPage />} />
   
          <Route path="/الرسائل" element={<ChatUI />} />
          <Route path="/المرضى" element={<Feedback />} />
          <Route path="/حسابي" element={<Personalinfo />} />
          <Route path="/تعديل-المعلومات" element={<SettingsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
