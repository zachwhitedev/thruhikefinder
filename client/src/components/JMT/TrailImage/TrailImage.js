import React from 'react';
import jmtmap from '../../../assets/img/jmtmap.png';
import styles from './TrailImage.module.css'

export default function TrailImage(){
    return (
        <div className={styles.map}>
        <img src={jmtmap} alt='Appalachian Trail Map'/>
      </div>
    )
}