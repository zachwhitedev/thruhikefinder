import React from 'react';
import cdtmap from '../../../assets/img/cdtmap.png';
import styles from './TrailImage.module.css'

export default function TrailImage(){
    return (
      <div className={styles.map}>
        <h2>The Contintental Divide Trail</h2>
        <img src={cdtmap} alt='Contintental Divide Trail Map'/>
      </div>
    )
}