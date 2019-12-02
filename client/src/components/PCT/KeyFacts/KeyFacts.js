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
          <td>Location</td>
          <td>
            <p>California - 1689 miles - 63.7%</p>
            <p>Oregon - 455 miles - 17.1%</p>
            <p>Washington - 504 miles - 19.1%</p>
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
