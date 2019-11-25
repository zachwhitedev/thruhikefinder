import React from 'react';
import styles from './InDepthStats.module.css';

export default function InDepthStats() {
  return (
    <div className={styles.keyFacts}>
      <h2>In Depth Info</h2>
      <table className={styles.myTable}>
        <tr>
          <td>Elev. Change per Mile</td>
          <td>119 ft.</td>
        </tr>
        <tr>
          <td>Avg. Distance Between Resupplies</td>
          <td>102 mi.</td>
        </tr>
        <tr>
          <td>Longest Stretch of No Water</td>
          <td>42 miles</td>
        </tr>
      </table>
    </div>   
  );
}