import React from 'react';
import TrailImage from './TrailImage/TrailImage';
import TrailSummary from './TrailSummary/TrailSummary';
import KeyFacts from './KeyFacts/KeyFacts';
import GearRec from './GearRec/GearRec';
import FunSection from './FunSection/FunSection';
import InDepthStats from './InDepthStats/InDepthStats';
import EndCard from './EndCard/EndCard';
import styles from './CDT.module.css';
import { Helmet } from 'react-helmet';

export default function CDT() {
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>The Continental Divide Trail</title>
        <meta
          name='description'
          content='A web page displaying data on the Continental Divide Trail of the United States.'
        ></meta>
        <link rel='canonical' href='https://www.thruhikedata.com/cdt' />
      </Helmet>
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
