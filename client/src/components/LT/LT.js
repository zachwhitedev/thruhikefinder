import React from 'react';
import TrailImage from './TrailImage/TrailImage';
import TrailSummary from './TrailSummary/TrailSummary';
import KeyFacts from './KeyFacts/KeyFacts';
import GearRec from './GearRec/GearRec';
import Noteworthy from './Noteworthy/Noteworthy';
import InDepthStats from './InDepthStats/InDepthStats';
import ExtraCard from './ExtraCard/ExtraCard';
import styles from './LT.module.css';
import { Helmet } from 'react-helmet'

export default function LT() {
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>The Long Trail</title>
        <meta
          name='description'
          content='A web page displaying data on the Long Trail in Vermont.'
        ></meta>
        <link rel='canonical' href='https://www.thruhikedata.com/longtrail' />
      </Helmet>
      <TrailImage />
      <KeyFacts />
      <TrailSummary />
      <GearRec />
      <Noteworthy />
      <InDepthStats />
      <ExtraCard />
    </div>
  );
}
