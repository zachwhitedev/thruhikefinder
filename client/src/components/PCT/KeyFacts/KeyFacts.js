import React from 'react';
import styles from './KeyFacts.module.css';

export default function KeyFacts() {
  return (
    <div className={styles.keyFacts}>
      <h2>Key Stats</h2>
      <table className={styles.keyFactsTable}>
        <tr>
          <td>Length</td>
          <td>2650 miles</td>
        </tr>
        <tr>
          <td>States</td>
          <td>
            <table className={styles.tableInsideTable}>
              <tr>
                <td id={styles.California}>California</td>
                <td>1689 miles</td>
                <td>63.7%</td>
              </tr>
              <tr>
                <td id={styles.Oregon}>Oregon</td>
                <td>455 miles</td>
                <td>17.1%</td>
              </tr>
              <tr>
                <td id={styles.Washington}>Washington</td>
                <td>504 miles</td>
                <td>19.1%</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>Highest Point</td>
          <td>Forester Pass - 13,153 feet</td>
        </tr>
      </table>
    </div>
  );
}
