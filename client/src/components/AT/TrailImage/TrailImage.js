import React from 'react';
import atmap from '../../../assets/img/atmap.jpeg';
import styles from './TrailImage.module.css'

export default function TrailImage(){
    return (
        <div className={styles.map}>
        <img src={atmap} />
      </div>
    )
}