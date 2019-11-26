import React from 'react';
import styles from './TrailSummary.module.css';

export default function TrailSummary(){
    return (
        <div className={styles.container}>
        <h2>Summary</h2>
        <p>
          The Pacific Crest Trail is a 2,652 mile continuous footpath that traverses the length of the West Coast of the United States. It runs from the Mexican border in Southern California and cross three states to where its other end at the Canadian border in Washington state. The trail is known for its breathtaking views, varied terrain, and continuously changing climate and landscapes.
        </p>
        <p>
          Hiking the entire trail, one crosses the desert of Southern California, the entire length of the Sierra Nevada mountain range and the majority of the John Muir Trail, Yosemite National Park, Crater Lake National Park and the volcanic landscapes of Oregon, and experiences the remote wilderness of the North Cascades in Northern Washington.
        </p>
      </div>
    )
}