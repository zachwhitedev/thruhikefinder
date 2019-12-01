import React from 'react';
import styles from './MoreStats.module.css';

export default function MoreStats() {
  return (
    <div className={styles.keyFacts}>
      <h2>More Stats</h2>
      <table className={styles.myTable}>
        <tr>
          <td>Elev. Change per Mile</td>
          <td>184 ft.</td>
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