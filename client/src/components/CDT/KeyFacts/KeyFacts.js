import React from 'react';
import styles from './KeyFacts.module.css';

export default function KeyFacts() {
  return (
    <div className={styles.keyFacts}>
      <h2>Key Stats</h2>
      <table className={styles.keyFactsTable}>
        <tr>
          <td>Length</td>
          <td>3019 miles</td>
        </tr>
        <tr>
          <td>Location</td>
          <td>
            <table className={styles.tableInsideTable}>
              <tr>
                <td id={styles.California}>New Mexico</td>
                <td>789.5 miles</td>
                <td>26.1%</td>
              </tr>
              <tr>
                <td id={styles.Oregon}>Colorado</td>
                <td>740 miles</td>
                <td>24.6%</td>
              </tr>
              <tr>
                <td id={styles.Washington}>Wyoming</td>
                <td>507 miles</td>
                <td>16.8%</td>
              </tr>
              <tr>
                <td id={styles.Washington}>Idaho/Southern MT</td>
                <td>406.6 miles</td>
                <td>13.5%</td>
              </tr>
              <tr>
                <td id={styles.Washington}>Northern Montana</td>
                <td>575.5 miles</td>
                <td>19.0%</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>Highest Point</td>
          <td>Grays Peak - 14,278 feet</td>
        </tr>
      </table>
    </div>
  );
}