import React from 'react';
import styles from './ExtraCard.module.css';

export default function ExtraCard(){
    return (
        <div className={styles.container}>
            <h2>Trail Angel Hall of Fame</h2>
            <h4>Barney “Scout” and Sandy “Frodo” Mann</h4>
                <p>For many years, this PCT power couple has hosted thousands of hikers at their home in Southern California, and given countless rides to Campo.</p>
            <h4>Donna and Jeff Saufley</h4>
                <p>Yet another SoCal power couple, The Saufley's have been welcoming hikers into their home - Hiker Heaven - in Agua Dulce, for many years.</p>
            <h4>The Dinsmore's</h4>
                <p>For almost two decades, the world-famous Dinsmore's Hiker Haven in Skykomish, WA has offered community and amenities for both Northbounders in striking distance of Canada, and Southbounders who are often licking their wounds after a challenging start to their journeys.</p>
            <h4>Terrie and Joe Anderson</h4>
                <p>The Queen and King of "Casa de Luna." If you are going northbound, you will likely meet these two generous angels the day after the Saufley's.</p>
            <h4>Carolyn "Ravensong" Burkhart</h4>
                <p>Last but not least, a certified trail legend: Ravensong is the first woman to solo thru-hike the PCT, completing it in 1976. Her legend only continues with her kindness - she has kept "Ravensong's Roost" in Mazama, WA open to hikers for many years.</p>
            
        </div>
    )
}