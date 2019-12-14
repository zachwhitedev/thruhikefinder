import React from 'react';
import styles from './TrailSummary.module.css';

export default function TrailSummary(){
    return (
      <div className={styles.trailSummary}>
        <h2>Summary</h2>
        <p>
          The John Muir Trail is a 211 mile trail in the Sierra Nevada mountains of central California. It begins with a bang, starting out with an ascent to the summit of the tallest mountain in the lower 48 - Mount Whitney. It ends at the world-famous Yosemite National Park, which needs no introduction.
        </p>
        <p>
          Between these two landmarks, there is no lack of highlights. The trail winds through some of the most beautiful, aspen-filled valleys in the country, and up and over multiple mountain passes over 13,000 feet. 
        </p>
        <p>
          Frankly, the JMT is probably the most majestic thru-hike on a per mile basis in the United States. Nearly every mile feels like walking across the cover of a National Geogrpahic magazine. The entire hike is essentially a continuous greatest-hits reel - it almost feels like cheating.
        </p>
        <p>
          Not everyone can afford to take off the several months required to hike one of the Triple Crown trails, so the JMT, which takes most people just three weeks to finish, is a perfect compromise. We highly recomment you add it to the bucket list. However, many have the same idea, and so getting a permit for the JMT that fits your schedule might be a challenge. 
        </p>
      </div>
    )
}