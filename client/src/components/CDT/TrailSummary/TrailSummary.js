import React from 'react';
import styles from './TrailSummary.module.css';
import cdtLogo from '../../../assets/icons/cdtLogo.png';

export default function TrailSummary(){
    return (
        <div className={styles.trailSummary}>
          <h2>Summary</h2>
          <p>
          The Continental Divide Trail is a designated National Scenic Trail that runs from the Mexican border in New Mexico to the Canadian border in Northern Montana - along the way, it passes through Colorado, Wyoming, and a portion of southeastern Idaho. The trail is over 3,000 miles long, making it the longest of the Triple Crown trails. It is also the least-travelled - far more hikers attempt the AT and PCT each season than the CDT. This is largely because the CDT is considered by many to be the most challenging of the three, due to its length, remoteness, and lack of a clear trail in many parts.
          </p>
          <p>
          However, expect to see far more people attempting and completing the CDT in the coming years - we have recently entered the "Guthooks era" of thru-hiking, with reliable, crowd-sourced GPS apps to guide hikers every step of the way. Thanks to these mobile apps, lack of waypoint knowledge (water sources, campsites, etc.) and any fears of getting lost have all but been eliminated. Thru-hiking the CDT, though still a massive undertaking, is now far more accessible from a logistical perspective.
          </p>
          <p>But at the end of the day, these apps can't hike the trail for you. Should you walk the CDT in its entirety, you will have passed over the long, flat, open deserts of New Mexico, conquered the towering Colorado Rocky Mountains, taken in the rich landscapes of Wyoming and Yellowstone National Park, skirted across the rugged eastern border of Idaho, and experienced the famously untamed Montana wilderness.</p>
          <div className={styles.cdtLogoWrapper}>
            <img src={cdtLogo}/>
          </div>
        </div>
    )
}