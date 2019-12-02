import React from 'react';
import styles from './MoreStats.module.css';

export default function MoreStats() {
  return (
    <div className={styles.keyFacts}>
      <h2>More Stats</h2>
      <table className={styles.moreStatsTable}>
        <tr>
          <td>Year Established</td>
          <td>1968</td>
        </tr>
        <tr>
          <td>Approximate # Days to Complete</td>
          <td>150 days</td>
        </tr>
        <tr>
          <td>Avg. Elevation Gain per Mile</td>
          <td>184 feet</td>
        </tr>
        <tr>
          <td>Average Monthly Rainfall</td>
          <td>1.15 inches</td>
        </tr>
        <tr>
          <td>Longest Stretch of No Water</td>
          <td>42 miles</td>
        </tr>
        <tr>
          <td>Predicted # of Resupplies</td>
          <td>26</td>
        </tr>
        <tr>
          <td>Avg. Distance Between Resupplies</td>
          <td>102 miles</td>
        </tr>
        <tr>
          <td>Longest Resupply Distance</td>
          <td>154 miles</td>
        </tr>
      </table>
    </div>   
  );
}