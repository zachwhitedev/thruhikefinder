import React from 'react';
import pctmap from '../../../assets/img/pctmap.png';
import styles from './TrailImage.module.css'

export default function TrailImage(){
    return (
        <div className={styles.map}>
          <h2>The Pacific Crest Trail</h2>
        <img src={pctmap} alt='Pacific Crest Trail map'/>
      </div>
    )
}