import React, { useState, useEffect } from 'react';
import longtrailmap from '../../../assets/img/longtrailmap.png';
import longtrailmap2 from '../../../assets/img/longtrailmap2.png';
import styles from './TrailImage.module.css'

export default function TrailImage(){
    const[image, setImage] = useState(longtrailmap);
    const[count, setCount] =useState(0);

    const easterEgg = () => {
      setCount(count + 1);
    }

    useEffect(() => {
      if(count%2 != 0){
        setImage(longtrailmap2);
      }
      else {
        setImage(longtrailmap);
      }
    });

    return (
        <div className={styles.map}>
          <h2>The Long Trail</h2>
        <img src={image} alt='Appalachian Trail Map'/>
        <button onClick={() => easterEgg()} id={styles.easterEggButton}>Click here to expose Luke</button>
      </div>
    )
}

