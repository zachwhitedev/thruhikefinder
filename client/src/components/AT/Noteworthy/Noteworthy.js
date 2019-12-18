import React from 'react';
import styles from './Noteworthy.module.css';
import blackbear from '../../../assets/icons/blackbear.png'
import moose from '../../../assets/icons/moose.png'
import train from '../../../assets/icons/train.png'
import cannon from '../../../assets/icons/cannon.png'

export default function Noteworthy() {
  return (
    <div>
      <h2 id={styles.noteworthyTitle}>Noteworthy</h2>
      <div className={styles.titleAndCannonIcon}>
        <div className={styles.cannonIconWrapper}>
            <img id={styles.cannonIcon} src={cannon} alt=""/>
        </div>
        <h4>Civil War History</h4>
      </div>
        <p>For history nerds who love to hike, the Appalachian Trail is tough to beat. Crossing the original frontier of colonial America, the AT is a true treasure for outdoor adventurers who take pleasure in considering all that has come before. The trail passes through Civil War battlefields, historic towns like Harper’s Ferry, and traces the journey of countless runaway slaves who fled the South through the mountains along the Underground Railroad.</p>
      <div className={styles.mooningTheCog}>
        <div className={styles.titleAndTrainIcon}>
          <div className={styles.trainIconWrapper}>
            <img id={styles.trainIcon} src={train} alt=""/>
          </div>
          <h4>Mooning the Cog</h4>
        </div>
          <p>In the White Mountains of New Hampshire, the AT takes you to the summit of the highest peak in the Northeast: Mount Washington (6,288 feet). However, hiking is not the only way to get to the top of this legendary mountain - not only is there a road that you can take to the top by car, there is also a tiny train for tourists, “The Cog Railway,” that will transport you by track.</p>
          <p>The Cog Railway is seen by most as a fun way to get to the top without having to take the whole day to hike it - especially for senior citizens and anyone who might have trouble making the arduous climb. However, for many thru-hikers, who not only hike the mountain in its entirety but have walked nearly two thousand miles to get to it, to be able-bodied and ride "the Cog" is a borderline insult.
          </p>
          <p>Though it is not personal and all in good fun (at least for the hikers), it is now a decades-long tradition to turn around, drop your shorts, and “moon the Cog” as it passes over the trail near the top of the mountain. However, we do not recommend you join in - several hikers have been arrested over the years as undercover police occasionally board the train.</p>
        </div>
        <div className={styles.wildLifeContainer}>
          <h4 className={styles.wildTitle}>Notable Wildlife</h4>
          <div className={styles.animals}>
            <div className={styles.blackBear}>
              <h5 className={styles.blackBearTitle}>Black Bear</h5>
              <img src={blackbear}/>
            </div>
            <div className={styles.moose}>
              <h5 className={styles.mooseTitle}>Moose</h5>
              <img src={moose}/>
            </div>
          </div>
        </div>
    </div>
  );
}


          
