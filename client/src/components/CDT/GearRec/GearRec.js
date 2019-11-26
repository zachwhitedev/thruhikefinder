import React from 'react';
import styles from './GearRec.module.css';

export default function GearRec() {
  const tentimage =
    'https://images-na.ssl-images-amazon.com/images/I/41fc3313RVL._SL250_.jpg';
  const tentlink =
    'https://www.amazon.com/gp/product/B07MTSM7ZL/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B07MTSM7ZL&linkCode=as2&tag=nelsonshepher-20&linkId=8476d7d82c5b613b58dc9ccc9c47cde1';

  return (
    <div className={styles.gear}>
      <h1>Gear Recommendation</h1>
      <div className={styles.tentDiv}>
        <h5>Nemo Hornet</h5>
        <a href={tentlink}>
          <img src={tentimage} alt='tent for hikers' />
        </a>

        <a id={styles.tentButton} href={tentlink} target='_blank'>
          Buy Tent
        </a>
      </div>
    </div>
  );
}
