import React from 'react';
import styles from './Wildlife.module.css'
import lion from '../../../assets/icons/lion.png'
import wolf from '../../../assets/icons/wolf.png'
import grizzly from '../../../assets/icons/grizzly.png'
import horse from '../../../assets/icons/horse.png'
import elk from '../../../assets/icons/elk.png'
import moose from '../../../assets/icons/moose.png'
import pronghorn from '../../../assets/icons/pronghorn.png'
import goat from '../../../assets/icons/goat.png'
import bighorn from '../../../assets/icons/bighorn.png'
import bison from '../../../assets/icons/bison.png'

export default function Noteworthy() {
  return (
    <div>
      <h2>Notable Wildlife</h2>
        <div className={styles.allAnimals}>
            <div className={styles.grizzly}>
                <h4>Grizzly Bear</h4>
                <img src={grizzly} className={styles.icon} alt=""></img>
            </div>
            <div className={styles.wolf}>
                <h4>Gray Wolf</h4>
                <img src={wolf} className={styles.icon} alt=""></img>
            </div>
            <div className={styles.lion}>
                <h4>Mountain Lion</h4>
                <img src={lion} className={styles.icon} alt=""></img>
            </div>
            <div className={styles.horse}>
                <h4>Wild Horse</h4>
                <img src={horse} className={styles.icon} alt=""></img>
            </div>
            <div className={styles.elk}>
                <h4>Elk</h4>
                <img src={elk} className={styles.icon} alt=""></img>
            </div>
            <div className={styles.moose}>
                <h4>Moose</h4>
                <img src={moose} className={styles.icon} alt=""></img>
            </div>
            <div className={styles.pronghorn}>
                <h4>Pronghorn</h4>
                <img src={pronghorn} className={styles.icon} alt=""></img>
            </div>
            <div className={styles.goat}>
                <h4>Mountain Goat</h4>
                <img src={goat} className={styles.goat} alt=""></img>
            </div>
            <div className={styles.bighorn}>
                <h4>Bighorn Sheep</h4>
                <img src={bighorn} className={styles.icon} alt=""></img>
            </div>
            <div className={styles.bison}>
                <h4>Bison</h4>
                <img src={bison} className={styles.bison} alt=""></img>
            </div>
        </div>
    </div>
  );
}