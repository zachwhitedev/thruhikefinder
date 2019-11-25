import React from 'react';
import styles from './TrailSummary.module.css';

export default function TrailSummary(){
    return (
        <div className={styles.container}>
        <h2>Summary</h2>
        <p>
          The Pacific Crest Trail is a 2,652 mile continous footpath that runs
          the length of the west coast of the United States. It starts at
          the Mexican border in Southern California, and cross three states to
          where it ends at the Canadian border in Washington. The trail is known
          for its breath-taking views, varied terrain, and continuosly changing
          climate and landscapes.
        </p>
        <p>
          In completing the trail, you will have crossed through the desert of
          Southern California, the grandiose Sierra Nevada mountain range, and
          the wilderness of the Cascades in Northern Washington. Oregon can suck
          my balls.
        </p>
      </div>
    )
}