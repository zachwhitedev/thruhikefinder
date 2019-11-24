import React from 'react';
import styles from './TrailDashboard.module.css';
import pctmap from '../../assets/img/pctmap.jpg';
import TopRightData from './TopRightData/TopRightData';
import BottomLeftData from './BottomLeftData/BottomLeftData';
import BottomRightData from './BottomRightData/BottomRightData';
import Footer from './Footer/Footer';

export default function TrailDashboard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.topHalfContainer}>
        <div className={styles.trailImageContainer}>
          <img src={pctmap} alt='Logo' />
        </div>
        <TopRightData />
      </div>
      <div className={styles.bottomHalfContainer}>
        <BottomLeftData />
        <BottomRightData />
      </div>
      <Footer />
    </div>
  );
}
