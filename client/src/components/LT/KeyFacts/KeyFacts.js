import React from 'react';
import styles from './KeyFacts.module.css';

export default function KeyFacts(){
    return (
        <div className={styles.keyFacts}>
        <h2>Key Stats</h2>
        <ul>
          <li>Length: 273 miles</li>
          <li>Location: Vermont</li>
          <li>Highest Point: Mt. Mansfield (4,395 ft.)</li>
        </ul>
      </div>
    )
}