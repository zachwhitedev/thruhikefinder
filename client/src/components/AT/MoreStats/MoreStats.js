import React from 'react';
import styles from './MoreStats.module.css';

export default function MoreStats() {
  return (
    <div className={styles.keyFacts}>
      <h2>Key Stats</h2>
      <table className={styles.moreStatsTable}>
        <tr>
          <td>Length</td>
          <td>2189 miles</td>
        </tr>
        <tr>
          <td>Highest Point</td>
          <td>Clingman's Dome (NC) - 6,643 feet</td>
        </tr>
        <tr>
          <td>Year Established</td>
          <td>1923</td>
        </tr>
        <tr>
          <td>Approximate # Days to Complete</td>
          <td>165 days</td>
        </tr>
        <tr>
          <td>Avg. Elevation Gain per Mile</td>
          <td>212 feet</td>
        </tr>
        <tr>
          <td>Average Monthly Rainfall</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>Longest Stretch of No Water</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td>Predicted # of Resupplies</td>
          <td>69</td>
        </tr>
        <tr>
          <td>Avg. Distance Between Resupplies</td>
          <td>32 miles</td>
        </tr>
        <tr>
          <td>Longest Resupply Distance</td>
          <td>100 miles</td>
        </tr>
      </table>
    </div>   
  );
}

