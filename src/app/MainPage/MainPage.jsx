import React from 'react';
import Navbar from '../Navbar/Navbar';
import './mainPage.css';

const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      <Navbar />
      <div className="main-dashboard">
        <h1>Welcome to Nuvia 👩‍👧</h1>
        <p>Choose a section from the navigation above to get started 🌷</p>
      </div>
    </div>
  );
};

export default MainPage;
