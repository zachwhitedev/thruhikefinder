import React from 'react';
import styles from './KeyFacts.module.css';

export default function KeyFacts() {
  return (
    <div className={styles.keyFacts}>
      <h2>Key Stats</h2>
      <table className={styles.keyFactsTable}>
        <tr>
          <td>Length</td>
          <td>2189 miles</td>
        </tr>
        <tr>
          <td>Highest Point</td>
          <td>Forester Pass - 13,153 feet</td>
        </tr>
      </table>
    </div>
  );
}