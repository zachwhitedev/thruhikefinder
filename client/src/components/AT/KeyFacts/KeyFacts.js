import React from 'react';
import styles from './KeyFacts.module.css';

export default function KeyFacts(){
    return (
        <div className={styles.keyFacts}>
        <h2>Key Stats</h2>
        <ul>
          <li>Length: 2189 miles</li>
          <li>Location: East Coast</li>
          <li>Highest Point: Clingman's Dome (6,643 ft.)</li>
        </ul>
      </div>
    )
}