import React from 'react';
import styles from './Noteworthy.module.css';
import lion from '../../../assets/icons/lion.png'
import snake from '../../../assets/icons/snake.png'
import plant from '../../../assets/icons/plant.png'
import bushtree from '../../../assets/icons/bushtree.png'

export default function Noteworthy() {
  return (
    <div className={styles.container}>
        <h2 id={styles.noteworthyTitle}>Noteworthy</h2>
      <div className={styles.noteworthy}>
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
      </div>
      <div className={styles.plantsandwild}>
        <h3>Most Dangerous Wildlife:</h3>
        <div className={styles.wildlife}>
          <div id={styles.snake}>
            <img src={snake} id={styles.noteicon}></img>
            <p>Mojave Rattlesnake</p>
          </div>
          <div id={styles.lion}>
            <img src={lion} id={styles.noteicon}></img>
            <p>Mountain Lion</p>
          </div>
        </div>
        <h3>Most Hazardous Plants:</h3>
        <div className={styles.plants}>
          <div id={styles.poodle}>
            <img src={bushtree} id={styles.noteicon}></img>
            <p>Poodledog Bush</p>
          </div>
          <div id={styles.oak}>
            <img src={plant} id={styles.noteicon}></img>
            <p>Poison Oak</p>
          </div>
        </div>
      </div>
    </div>
  );
}
