import React from 'react';
import styles from './Header.module.css';

export default function Header(props) {
  return (
    <div className={styles.header}>
      Header shit goes here. Maybe nav bar.
      <h1>The Pacific Crest Trail</h1>
      <select>
        <option>Pacific Crest Trail 🏔️</option>
        <option>Appalachian Trail 🏔️</option>
        <option>Continental Divide Trail 🏔️</option>
        <option>John Muir Trail</option>
      </select>
    </div>
  );
}
