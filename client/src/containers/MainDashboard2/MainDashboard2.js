import React, { useState, useEffect, useCallback } from 'react';
import styles from './MainDashboard2.module.css';
import Navbar from '../../components/Navbar/Navbar';
function MainDashboard2(props) {

  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}

export default MainDashboard2;
