import React from 'react';
import styles from './ExtraCard.module.css';

export default function ExtraCard(){
    return (
        <div className={styles.container}>
            <h2>Trail Angel Hall of Fame</h2>
            <h4>Barney “Scout” and Sandy “Frodo” Mann - San Diego, CA</h4>
                <p>For many years, this PCT power couple has hosted thousands of hikers at their home and given countless rides to Campo.</p>
            <h4>Donna and Jeff Saufley - Agua Dulce, CA</h4>
                <p>Yet another SoCal power couple, the Saufley's have been welcoming hikers into their home, dubbed "Hiker Heaven," for many years.</p>
            <h4>Terrie and Joe Anderson - "Casa de Luna," CA</h4>
                <p>The Queen and King of "Casa de Luna." If you are going northbound, you will likely meet these two generous angels the day after the Saufley's.</p>
            <h4>The Dinsmore's - Skykomish, WA</h4>
                <p>For almost two decades, the world-famous Dinsmore's Hiker Haven has offered community and amenities for both northbounders in striking distance of Canada, and southbounders who are often licking their wounds after a challenging start to the trail.</p>
            <h4>Carolyn "Ravensong" Burkhart - Mazama, WA</h4>
                <p>Last but not least, a certified trail legend: Ravensong is the first woman to solo thru-hike the PCT, completing it in 1976. Her legend only grows as she continues to give back to the trail - she has kept "Ravensong's Roost" open to hikers for many years.</p>
            <h5>So many more great trail angels, we could not possibly name all of them here! We thank you!</h5>
            
        </div>
    )
}