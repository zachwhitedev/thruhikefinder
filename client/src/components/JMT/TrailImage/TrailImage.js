import React from 'react';
import jmtmap from '../../../assets/img/jmtmap.png';
import styles from './TrailImage.module.css'

export default function TrailImage(){
    return (
      <div>
        <h2>The John Muir Trail</h2>
        <div className={styles.map}>
          <img src={jmtmap} alt='Appalachian Trail Map'/>
        </div>
      </div>
  )
}
        
        