import React from 'react';
import TrailImage from './TrailImage/TrailImage';
import TrailSummary from './TrailSummary/TrailSummary';
import KeyFacts from './KeyFacts/KeyFacts';
import GearRec from './GearRec/GearRec';
import FunSection from './FunSection/FunSection';
import InDepthStats from './InDepthStats/InDepthStats';
import EndCard from './EndCard/EndCard';
import styles from './PCT.module.css';
import { Helmet } from 'react-helmet';

export default function PCT() {
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Pacific Crest Trail</title>
        <meta name="description" content="A web page displaying data on the Pacific Crest Trail."></meta>
        <link rel='canonical' href='https://www.thruhikedata.com/pct' />
      </Helmet>
      <TrailImage />
      <KeyFacts />
      <TrailSummary />
      <InDepthStats />
      <FunSection />
      <GearRec />
      <EndCard />
    </div>
  );
}
