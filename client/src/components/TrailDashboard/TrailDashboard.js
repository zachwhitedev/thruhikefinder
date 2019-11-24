import React from 'react';
import styles from './TrailDashboard.module.css';
import pctmap from '../../assets/img/pctmap.jpg';

export default function TrailDashboard() {

  return (
    <div className={styles.wrapper}>
      <div className={styles.map}><img src={pctmap}/></div>
      <div>
        <h2>Quick Facts</h2>

      </div>

      
      <div>
        <h2>
          Summary
          </h2>
      </div>
      
      <div>
        <h1>
        Gear Recommendation
        </h1>
      </div>
      
      <div>
        <h1>Fun Section</h1>
      </div>
    </div>
  );
}