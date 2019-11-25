import React from 'react';
import styles from './KeyFacts.module.css';

export default function KeyFacts(){
    return (
        <div className={styles.keyFacts}>
        <h2>Key Stats</h2>
        <ul>
          <li>Length: 2652 miles</li>
          <li>Location: CA/OR/WA</li>
          <li>Highest Point: Forrester Pass (13,153 ft.)</li>
        </ul>
      </div>
    )
}