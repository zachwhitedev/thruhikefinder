import React from 'react';
import styles from './Noteworthy.module.css';

export default function Noteworthy() {
  return (
    <div className={styles.container}>
      <h2>Noteworthy</h2>
      <ul>
        <li>
          Highlights & Landmarks:
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
        </li>
        <li>Most Dangerous Wildlife:</li>
          <div>Mojave Rattlesnake</div>
          <div>Mountain Lions</div>
        <li>Most Hazardous Plants:</li>
            <div>Poodledog Bush</div>
            <div>Poison Oak</div>
      </ul>
    </div>
  );
}

