import React from 'react';
import styles from './FunSection.module.css';

export default function FunSection() {
  return (
    <div className={styles.container}>
      <h2>Fun Section</h2>
      <ul>
        <li>Most Dangerous Wildlife: Venomous snakes, mountain lions</li>
        <li>(add a table: political breakdown of trail by counties crossed)</li>
      </ul>
    </div>
  );
}
