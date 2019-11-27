import React from 'react';
import pctmap from '../../../assets/img/pctmap.png';
import styles from './TrailImage.module.css'

export default function TrailImage(){
    return (
        <div className={styles.map}>
        <img src={pctmap} alt='Pacific Crest Trail map'/>
      </div>
    )
}