import React from 'react';
import TrailImage from './TrailImage/TrailImage';
import TrailSummary from './TrailSummary/TrailSummary';
import KeyFacts from './KeyFacts/KeyFacts';
import GearRec from './GearRec/GearRec';
import FunSection from './FunSection/FunSection';
import InDepthStats from './InDepthStats/InDepthStats';
import EndCard from './EndCard/EndCard';
import styles from './CDT.module.css';

export default function CDT() {
  
  return (
    <div className={styles.wrapper}>
      <TrailImage />
      <KeyFacts />
      <TrailSummary />
      <GearRec />
      <FunSection />
      <InDepthStats />
      <EndCard />
    </div>
  );
}
