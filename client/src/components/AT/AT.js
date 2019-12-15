import React from 'react';
import TrailImage from './TrailImage/TrailImage';
import TrailSummary from './TrailSummary/TrailSummary';
import KeyFacts from './KeyFacts/KeyFacts';
import GearRec from './GearRec/GearRec';
import Noteworthy from './Noteworthy/Noteworthy';
import MoreStats from './MoreStats/MoreStats';
import ExtraCard from './ExtraCard/ExtraCard';
import styles from './AT.module.css';
import { Helmet } from 'react-helmet';

export default function AT() {
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <meta charSet='utf-8' />
        <title>The Appalachian Trail</title>
        <meta
          name='description'
          content='A web page displaying data on the Appalachian Trail of the United States.'
        ></meta>
        <link rel='canonical' href='https://www.thruhikedata.com/at' />
      </Helmet>
      <TrailImage />
      <TrailSummary />
      <MoreStats />
      <Noteworthy />
      {/* <KeyFacts /> */}
      <GearRec />
      {/* <ExtraCard /> */}
    </div>
  );
}
