import React from 'react';
import styles from './Noteworthy.module.css';

export default function Noteworthy() {
  return (
    <div className={styles.container}>
      <h2>Noteworthy</h2>
        <h3>Highlights & Landmarks:</h3>
        <ul>
          <li>Sierra Nevada Mountain Range</li>
          <li>Mt. Whitney (off-trail)</li>
          <li>Yosemite National Park</li>
          <li>Lake Tahoe, CA</li>
          <li>Desolation Wilderness (CA)</li>
          <li>Crater Lake National Park</li>
          <li>Goat Rocks Wilderness (WA)</li>
          <li>The North Cascades (WA)</li>
        </ul>
      <h3>Most Dangerous Wildlife:</h3>
        <div className={styles.wildlife}>
          <div>Mojave Rattlesnake</div>
          <div>Mountain Lions</div>
        </div>
      <h3>Most Hazardous Plants:</h3>
        <div className={styles.plants}>
          <div>Poodledog Bush</div>
          <div>Poison Oak</div>
        </div>
    </div>
  );
}

