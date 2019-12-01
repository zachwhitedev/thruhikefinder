import React from 'react';
import styles from './KeyFacts.module.css';

export default function KeyFacts() {
  return (
    <div className={styles.keyFacts}>
      <h2>Key Stats</h2>
      <table className={styles.myTable}>
        <tr>
          <td>Length:</td>
          <td>2650 miles</td>
        </tr>
        <tr>
          <td>Location:</td>
          <td>California - 1689 miles - 63.7%</td>
        </tr>
        <tr>
          <td></td>
          <td>Oregon - 455 miles - 17.1%</td>
        </tr>
        <tr>
          <td></td>
          <td>Washington - 504 miles - 19.1%</td>
        </tr>
        <tr>
          <td>Highest Point:</td>
          <td>Forester Pass - 13,153 ft.</td>
        </tr>
      </table>
    </div>
  );
}
