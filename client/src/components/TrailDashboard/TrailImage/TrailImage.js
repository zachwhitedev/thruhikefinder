import React from 'react';
import pctmap from '../../../assets/img/pctmap.jpg';
import styles from './TrailImage.module.css'

export default function TrailImage(){
    return (
        <div className={styles.map}>
        <img src={pctmap} />
      </div>
    )
}