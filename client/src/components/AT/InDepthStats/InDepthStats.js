import React from 'react';
import styles from './InDepthStats.module.css';

export default function InDepthStats() {
  return (
    <div className={styles.bottom}>
      <h1>In-depth Stats</h1>
      <p>Elevation Change Per Mile: 119 ft.</p>
      <p>Average Distance Between Resupplies: 102 miles</p>
      <p>Avg. Distance Between Water Sources: 1.2345 shmeckels</p>
      <p>Longest Stretch of No Water: 42 miles</p>
    </div>
  );
}
