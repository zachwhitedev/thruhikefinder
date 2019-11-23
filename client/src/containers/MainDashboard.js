import React from 'react';
import './MainDashboard.module.css';
import Header from '../components/TrailDashboard/Header/Header';

// this is main dashboard (blank page with select drop down, and a navabar to about, contact, etc.)
// we use ReactRouter in here

function MainDashboard() {
  return (
    <div>
        <Header />
      <h1>
          Starter Dashboard
      </h1>
    </div>
  );
}

export default MainDashboard;
