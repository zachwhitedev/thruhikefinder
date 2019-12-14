import React from 'react';
import styles from './KeyFacts.module.css';

export default function KeyFacts(){
    return (
        <div className={styles.keyFacts}>
        <h2>Key Stats</h2>
        <ul>
          <li>Length: 211 miles</li>
          <li>Location: Central California</li>
          <li>Highest Point: Mount Whitney - 14,505 feet</li>
        </ul>
      </div>
    )
}